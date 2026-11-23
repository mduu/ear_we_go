#!/usr/bin/env node
/* Checks the content in stories/*.js. Usage: node tools/validate.mjs [m1|m2|m3] */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {} };
for (const f of ['base', 'm1', 'm2', 'm3']) vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'stories', f + '.js'), 'utf8'), ctx, { filename: f + '.js' });
const only = process.argv[2];
const WORDS = { m1: [105, 155], m2: [155, 215], m3: [195, 265] };
const QUESTIONS = { m1: 7, m2: 7, m3: 8 };
let errors = 0, warnings = 0;
const err = (...a) => { errors++; console.log('ERROR', ...a); };
const warn = (...a) => { warnings++; console.log('warn ', ...a); };
const ids = new Set();

for (const m of ctx.window.EWG_MODULES) {
  for (const s of m.sessions) {
    if (ids.has(s.id)) err(s.id, 'duplicate id');
    ids.add(s.id);
    if (only && m.id !== only) continue;
    if (!/^[a-z0-9-]+$/.test(s.id)) err(s.id, 'id must be kebab-case');
    for (const k of ['title', 'kind', 'intro']) if (!s[k]) err(s.id, 'missing ' + k);
    const text = s.lines.map((l) => l.t).join(' ');
    const words = text.split(/\s+/).length;
    const [lo, hi] = WORDS[m.id];
    if (words < lo || words > hi) warn(s.id, `${words} words (target ${lo}-${hi})`);
    const nsp = Object.keys(s.speakers).length;
    if (nsp < 1 || nsp > 3) err(s.id, 'needs 1-3 speakers');
    for (const sp of Object.values(s.speakers)) if (!sp.name || !/^[fm]$/.test(sp.g)) err(s.id, 'speaker needs name and g: f|m');
    for (const l of s.lines) {
      if (!s.speakers[l.s]) err(s.id, 'unknown speaker ' + l.s);
      if (/\d\.\d/.test(l.t)) err(s.id, 'decimal number in text: ' + l.t.slice(0, 50));
      if (/\b(Mr|Mrs|Ms|Dr|St|etc|a\.m|p\.m|e\.g|i\.e)\./.test(l.t)) err(s.id, 'abbreviation with dot: ' + l.t.slice(0, 50));
      if (/["“”]/.test(l.t)) err(s.id, 'quotation mark in spoken line: ' + l.t.slice(0, 50));
    }
    if (!Array.isArray(s.vocab) || s.vocab.length < 6 || s.vocab.length > 11) err(s.id, 'needs 6-11 key words');
    for (const v of s.vocab || []) {
      if (v.length !== 2 || !v[0] || !v[1]) err(s.id, 'bad vocab entry ' + JSON.stringify(v));
      if (/ß/.test(v[1])) err(s.id, 'use ss instead of ß: ' + v[1]);
      const stem = v[0].replace(/^to /, '').split(/[ ,]/)[0].toLowerCase().slice(0, 4);
      if (!text.toLowerCase().includes(stem)) warn(s.id, 'key word not found in text: ' + v[0]);
    }
    if (s.questions.length !== QUESTIONS[m.id]) err(s.id, `${s.questions.length} questions (need ${QUESTIONS[m.id]})`);
    const count = { mc: 0, tf: 0, gap: 0 };
    for (const q of s.questions) {
      count[q.t]++;
      if (!q.q || !q.why) err(s.id, 'question needs q and why');
      if (q.t === 'mc') { if (!Array.isArray(q.o) || q.o.length !== 3 || new Set(q.o).size !== 3) err(s.id, 'mc needs 3 distinct options: ' + q.q); }
      else if (q.t === 'tf') { if (typeof q.a !== 'boolean') err(s.id, 'tf needs a: true|false: ' + q.q); }
      else if (q.t === 'gap') {
        if (q.q.split('___').length !== 2) err(s.id, 'gap needs ___ exactly once: ' + q.q);
        if (!Array.isArray(q.accept) || !q.accept.length || q.accept.some((a) => a !== a.toLowerCase().trim())) err(s.id, 'gap accept must be lower case: ' + q.q);
      } else err(s.id, 'unknown question type ' + q.t);
    }
    if (count.gap < 1 || count.tf < 1) warn(s.id, 'should have at least one gap and one tf question');
  }
  if (!only || only === m.id) console.log(`${m.id} "${m.name}": ${m.sessions.length} sessions`);
}
console.log(errors ? `\n${errors} error(s), ${warnings} warning(s)` : `\nOK (${warnings} warning(s))`);
process.exit(errors ? 1 : 0);
