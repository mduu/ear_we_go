#!/usr/bin/env node
/**
 * generate-audio.mjs — Azure AI Speech (Neural TTS) → MP3s for all sessions in stories.js.
 *
 * For every session it writes
 *   audio/<id>.mp3        the listening text (each speaker with their own voice)
 *   audio/<id>.vocab.mp3  the key words, one after the other
 * and audio/timings.js with the start time of every sentence / key word, so the
 * app can jump back a sentence and highlight the text while it plays.
 *
 * Every sentence is synthesized on its own and cached in .audio-cache/, so a
 * re-run only calls Azure for text that changed.
 *
 * Usage (the content is read from stories/*.js):
 *   node tools/generate-audio.mjs                 all sessions
 *   node tools/generate-audio.mjs --only <id>     one session
 *   node tools/generate-audio.mjs --list          show the available en-GB voices
 *   node tools/generate-audio.mjs --env <path>    read the Azure keys from another .env
 *
 * Required env (in a git-ignored .env, or via --env):
 *   AZURE_SPEECH_KEY, AZURE_SPEECH_REGION
 * Optional: AZURE_SPEECH_RPM  requests per minute (default 19, for the free F0 tier)
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'audio');
const CACHE = path.join(ROOT, '.audio-cache');
const FORMAT = 'audio-24khz-48kbitrate-mono-mp3';
const VOCAB_VOICE = 'en-GB-SoniaNeural';
// Voices are picked from these pools per session (stable, and never the same voice twice in one session).
// A speaker in stories/*.js can also name one directly:  { name: 'Emma', g: 'f', voice: 'en-GB-LibbyNeural' }
const POOL = {
  f: ['en-GB-Sonia:DragonHDLatestNeural', 'en-GB-Ada:DragonHDLatestNeural', 'en-GB-AdaMultilingualNeural'],
  m: ['en-GB-Ryan:DragonHDLatestNeural', 'en-GB-Ollie:DragonHDLatestNeural', 'en-GB-OllieMultilingualNeural'],
};
// Speaking rate per module: the easy module is spoken a little more slowly.
const MODULE_RATE = { m1: '-10%', m2: '-5%', m3: '0%' };
// Pauses (ms) after a sentence, after a paragraph / speaker turn, after a key word.
const PAUSE = { sentence: 200, line: 500, end: 400, vocab: 650 };

const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(name); return i === -1 ? null : args[i + 1]; };

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    let val = m[2].trim();
    if (/^(".*"|'.*')$/.test(val)) val = val.slice(1, -1);
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}
loadEnv(path.join(ROOT, '.env'));
if (flag('--env')) loadEnv(path.resolve(flag('--env')));

const KEY = process.env.AZURE_SPEECH_KEY;
const REGION = process.env.AZURE_SPEECH_REGION;
if (!KEY || !REGION) {
  console.error('Missing AZURE_SPEECH_KEY and/or AZURE_SPEECH_REGION (set them in .env or pass --env <path>).');
  process.exit(1);
}
const HOST = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

async function listVoices() {
  const res = await fetch(`${HOST}/voices/list`, { headers: { 'Ocp-Apim-Subscription-Key': KEY } });
  if (!res.ok) throw new Error(`voices/list failed: HTTP ${res.status}`);
  return res.json();
}

// The free Azure tier (F0) allows 20 requests per minute. Set AZURE_SPEECH_RPM higher on a paid tier.
const GAP_MS = 60000 / Number(process.env.AZURE_SPEECH_RPM || 19);
let lastCall = 0;
async function throttle() {
  const wait = lastCall + GAP_MS - Date.now();
  if (wait > 0) await sleep(wait);
  lastCall = Date.now();
}

/** Sends one SSML <voice> body to Azure; returns an MP3 buffer (cached on disk). */
async function request(voice, inner) {
  const hash = crypto.createHash('sha1').update(JSON.stringify([FORMAT, voice, inner])).digest('hex');
  const file = path.join(CACHE, `${hash}.mp3`);
  if (fs.existsSync(file)) return fs.readFileSync(file);
  const ssml =
    `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-GB">` +
    `<voice name="${voice}">${inner}</voice></speak>`;
  for (let attempt = 1; ; attempt++) {
    await throttle();
    const res = await fetch(`${HOST}/v1`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': KEY,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': FORMAT,
        'User-Agent': 'listening-practice-audio-gen',
      },
      body: ssml,
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (!buf.length) throw new Error(`Empty audio (${voice}): ${inner}`);
      fs.writeFileSync(file, buf);
      return buf;
    }
    if ((res.status === 429 || res.status >= 500) && attempt < 8) {
      process.stdout.write(' [wait]');
      await sleep(4000 * attempt);
      continue;
    }
    throw new Error(`Azure TTS failed (HTTP ${res.status}) for voice ${voice}: ${(await res.text()).slice(0, 300)}`);
  }
}

const exactSilence = (tailMs) => `<mstts:silence type="Leading-exact" value="0ms"/><mstts:silence type="Tailing-exact" value="${tailMs}ms"/>`;

/** Synthesize one piece of text followed by a pause of tailMs; returns an MP3 buffer. */
async function synth(text, voice, rate, tailMs) {
  const spoken = `<prosody rate="${rate}">${escapeXml(text)}</prosody>`;
  // HD voices (names with a colon) ignore pause instructions, so a clip of silence is appended instead.
  if (voice.includes(':')) {
    const speech = await request(voice, spoken);
    const silence = await request(VOCAB_VOICE, exactSilence(0) + `<break time="${tailMs}ms"/>`);
    return Buffer.concat([speech, silence]);
  }
  return request(voice, exactSilence(tailMs) + spoken);
}

/** Exact duration of an MP3 buffer in seconds, by walking its frames. */
function mp3Seconds(buf) {
  const BITRATES = {
    1: [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
    2: [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
  };
  const RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };
  let i = 0, seconds = 0;
  if (buf.slice(0, 3).toString() === 'ID3') i = 10 + ((buf[6] & 127) << 21 | (buf[7] & 127) << 14 | (buf[8] & 127) << 7 | (buf[9] & 127));
  while (i + 4 <= buf.length) {
    if (buf[i] !== 0xff || (buf[i + 1] & 0xe0) !== 0xe0) { i++; continue; }
    const ver = (buf[i + 1] >> 3) & 3, layer = (buf[i + 1] >> 1) & 3;
    const br = (buf[i + 2] >> 4) & 15, sr = (buf[i + 2] >> 2) & 3, pad = (buf[i + 2] >> 1) & 1;
    if (ver === 1 || layer !== 1 || br === 0 || br === 15 || sr === 3) { i++; continue; }
    const mpeg1 = ver === 3;
    const bitrate = BITRATES[mpeg1 ? 1 : 2][br] * 1000, rate = RATES[ver][sr];
    const samples = mpeg1 ? 1152 : 576;
    seconds += samples / rate;
    i += Math.floor((samples / 8) * bitrate / rate) + pad;
  }
  return seconds;
}

/** Gives every speaker of a session a voice. */
function castVoices(session) {
  const seed = parseInt(crypto.createHash('sha1').update(session.id).digest('hex').slice(0, 6), 16);
  const used = new Set(), cast = {};
  for (const [key, sp] of Object.entries(session.speakers)) {
    const pool = POOL[sp.g];
    let voice = sp.voice;
    for (let k = 0; !voice || used.has(voice); k++) {
      voice = pool[(seed + k) % pool.length];
      if (k > pool.length) break;
    }
    used.add(voice);
    cast[key] = voice;
  }
  return cast;
}

/** Synthesize a list of {text, voice, rate, tail}; returns {buffer, starts[]} (starts has one extra entry: the total). */
async function build(items) {
  const bufs = [], starts = [0];
  let t = 0;
  for (const it of items) {
    const buf = await synth(it.text, it.voice, it.rate, it.tail);
    bufs.push(buf);
    t += mp3Seconds(buf);
    starts.push(Math.round(t * 100) / 100);
  }
  return { buffer: Buffer.concat(bufs), starts };
}

async function main() {
  if (args.includes('--list')) {
    const voices = (await listVoices()).filter((v) => v.Locale === 'en-GB');
    for (const v of voices) console.log(v.ShortName.padEnd(36), v.Gender.padEnd(7), v.VoiceType, (v.StyleList || []).join(','));
    return;
  }

  // Only keep voices that this Azure region really offers.
  const available = new Set((await listVoices()).map((v) => v.ShortName));
  for (const g of ['f', 'm']) {
    const missing = POOL[g].filter((v) => !available.has(v));
    if (missing.length) console.log(`Not available here, skipped: ${missing.join(', ')}`);
    POOL[g] = POOL[g].filter((v) => available.has(v));
    if (!POOL[g].length) throw new Error(`No usable ${g} voice in region ${REGION}.`);
  }
  if (!available.has(VOCAB_VOICE)) throw new Error(`Voice ${VOCAB_VOICE} is not available in region ${REGION}.`);

  const ctx = { window: {} };
  for (const f of ['base', 'm1', 'm2', 'm3']) vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'stories', f + '.js'), 'utf8'), ctx);
  const modules = ctx.window.EWG_MODULES, split = ctx.window.EWG_split;
  const only = flag('--only');
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(CACHE, { recursive: true });

  const timingsFile = path.join(OUT, 'timings.js');
  let timings = {};
  if (fs.existsSync(timingsFile)) {
    const c = { window: {} };
    vm.runInNewContext(fs.readFileSync(timingsFile, 'utf8'), c);
    timings = JSON.parse(JSON.stringify(c.window.EWG_AUDIO || {}));
  }

  const saveTimings = () => fs.writeFileSync(timingsFile,
    '/* Generated by tools/generate-audio.mjs – do not edit by hand. */\nwindow.EWG_AUDIO = ' + JSON.stringify(timings) + ';\n');

  let total = 0;
  for (const m of modules) {
    for (const s of m.sessions) {
      if (only && s.id !== only) continue;
      process.stdout.write(`${s.id} ...`);
      const rate = MODULE_RATE[m.id] || '0%';
      const cast = castVoices(s);
      for (const v of Object.values(cast)) if (!available.has(v)) throw new Error(`${s.id}: voice ${v} is not available.`);
      const parts = [];
      s.lines.forEach((ln, li) => split(ln.t).forEach((t) => parts.push({ t, li, voice: cast[ln.s] })));
      const text = await build(parts.map((p, i) => ({
        text: p.t,
        voice: p.voice,
        rate,
        tail: i === parts.length - 1 ? PAUSE.end : parts[i + 1].li !== p.li ? PAUSE.line : PAUSE.sentence,
      })));
      const vocab = await build(s.vocab.map((v) => ({ text: v[0], voice: VOCAB_VOICE, rate: '-10%', tail: PAUSE.vocab })));
      fs.writeFileSync(path.join(OUT, `${s.id}.mp3`), text.buffer);
      fs.writeFileSync(path.join(OUT, `${s.id}.vocab.mp3`), vocab.buffer);
      timings[s.id] = { t: text.starts, v: vocab.starts };
      saveTimings(); // after every session, so finished ones are usable in the app right away
      total += text.buffer.length + vocab.buffer.length;
      console.log(` ${text.starts.at(-1).toFixed(0)} s, ${((text.buffer.length + vocab.buffer.length) / 1024).toFixed(0)} KB`);
    }
  }
  console.log(`\nDone. ${(total / 1024 / 1024).toFixed(1)} MB written to audio/`);
}

main().catch((err) => { console.error('\n' + err.message); process.exit(1); });
