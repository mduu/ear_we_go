(function () {
  'use strict';

  var MODULES = window.EWG_MODULES || [];
  var ALL = [];
  MODULES.forEach(function (m, mi) {
    m.sessions.forEach(function (s, si) { ALL.push({ s: s, m: m, mi: mi, si: si }); });
  });

  var $app = document.getElementById('app');
  var synth = window.speechSynthesis || null;
  var STORE_KEY = 'earwego.v1';
  var RATES = { slow: 0.75, normal: 0.95, fast: 1.1 };
  var store = loadStore();
  var activePlayer = null;

  /* ---------- storage ---------- */
  function loadStore() {
    var base = { best: {}, rate: 'normal', accent: 'GB' };
    try {
      var saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && typeof saved === 'object') {
        base.best = saved.best || {};
        if (RATES[saved.rate]) base.rate = saved.rate;
        if (saved.accent === 'US' || saved.accent === 'GB') base.accent = saved.accent;
      }
    } catch (e) { /* private mode etc. */ }
    return base;
  }
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* ---------- tiny DOM helper ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(el, k); }); return; }
    el.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5"/><rect x="14" y="4" width="5" height="16" rx="1.5"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 6.5v11a.8.8 0 0 1-1.25.66L2 12.66a.8.8 0 0 1 0-1.32l7.75-5.5A.8.8 0 0 1 11 6.5zm11 0v11a.8.8 0 0 1-1.25.66L13 12.66a.8.8 0 0 1 0-1.32l7.75-5.5A.8.8 0 0 1 22 6.5z"/></svg>',
    restart: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="3.5" height="14" rx="1.2"/><path d="M21 6.5v11a.8.8 0 0 1-1.25.66L9 12.66a.8.8 0 0 1 0-1.32l10.75-5.5A.8.8 0 0 1 21 6.5z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5 8 12l6.5 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function starsEl(n, big) {
    var wrap = h('span', { class: 'stars' + (big ? ' stars-big' : ''), role: 'img', 'aria-label': n + ' of 3 stars' });
    for (var i = 0; i < 3; i++) wrap.appendChild(h('span', { class: i < n ? 'on' : '', 'aria-hidden': 'true' }, '★'));
    return wrap;
  }
  function starsFor(score, total) {
    var p = score / total;
    return p >= 0.85 ? 3 : p >= 0.65 ? 2 : p >= 0.45 ? 1 : 0;
  }

  /* ---------- voices ---------- */
  var voices = [];
  function refreshVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter(function (v) { return /^en([-_]|$)/i.test(v.lang); });
  }
  if (synth) {
    refreshVoices();
    synth.onvoiceschanged = refreshVoices;
  }

  var NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|wobble|fred|good news|jester|junior|kathy|organ|superstar|ralph|trinoids|whisper|zarvox|deranged|hysterical/i;
  var ELOQUENCE = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
  var FEMALE = /female|google us english|samantha|kate|serena|karen|moira|tessa|martha|stephanie|sonia|libby|maisie|zira|jenny|aria|susan|hazel|fiona|ava|allison|victoria|catherine|emma|amy|michelle|nicky|tara|veena|flo|sandy|shelley|grandma|natasha|clara|heather|abbi|bella|hollie|olivia/i;
  var MALE = /\b(male|daniel|oliver|arthur|ryan|george|alex|david|mark|tom|guy|aaron|gordon|rishi|thomas|brian|william|james|eddy|reed|rocko|grandpa|aman|christopher|eric|roger|steffan|noah|elliot|ethan|alfie)\b/i;
  var MAIN_ACCENTS = ['en-gb', 'en-us', 'en-au', 'en-ie', 'en-nz', 'en-ca'];

  function genderOf(v) { return FEMALE.test(v.name) ? 'f' : MALE.test(v.name) ? 'm' : null; }
  function scoreVoice(v) {
    var lang = v.lang.replace('_', '-').toLowerCase();
    var pref = store.accent === 'US' ? 'en-us' : 'en-gb';
    var s = lang === pref ? 60 : MAIN_ACCENTS.indexOf(lang) >= 0 ? 25 : 5;
    if (/natural|premium|enhanced|neural|siri/i.test(v.name)) s += 30;
    if (/google|online/i.test(v.name)) s += 10;
    if (/^(samantha|daniel|karen|kate|serena)\b/i.test(v.name)) s += 5;
    if (NOVELTY.test(v.name)) s -= 300;
    if (ELOQUENCE.test(v.name)) s -= 45;
    return s;
  }
  function pickVoice(gender) {
    if (!voices.length) refreshVoices();
    var ranked = voices.map(function (v) { return { v: v, s: scoreVoice(v), g: genderOf(v) }; })
      .filter(function (x) { return x.s > -100; })
      .sort(function (a, b) { return b.s - a.s; });
    if (!ranked.length) return { voice: null, pitch: gender === 'm' ? 0.85 : 1.1 };
    for (var i = 0; i < ranked.length; i++) {
      if (ranked[i].g === gender && ranked[i].s >= 20) return { voice: ranked[i].v, pitch: 1 };
    }
    var best = ranked[0];
    return { voice: best.v, pitch: best.g === gender ? 1 : gender === 'm' ? 0.8 : 1.25 };
  }

  function makeUtterance(text, gender) {
    var vc = pickVoice(gender);
    var u = new SpeechSynthesisUtterance(text);
    if (vc.voice) { u.voice = vc.voice; u.lang = vc.voice.lang; }
    else u.lang = store.accent === 'US' ? 'en-US' : 'en-GB';
    u.rate = RATES[store.rate];
    u.pitch = vc.pitch;
    return u;
  }

  function splitSentences(text) {
    return text.replace(/([.!?]["”']?)\s+/g, '$1\n').split('\n').filter(Boolean);
  }

  /* ---------- player (reads sentence by sentence) ---------- */
  function createPlayer(session, onUpdate) {
    var parts = [];
    session.lines.forEach(function (ln, li) {
      splitSentences(ln.t).forEach(function (t) { parts.push({ s: ln.s, t: t, li: li }); });
    });
    var st = { idx: 0, playing: false, listens: 0, token: 0, timer: null, cur: null };

    function speak() {
      if (st.idx >= parts.length) {
        st.playing = false; st.idx = 0; st.listens++;
        onUpdate();
        return;
      }
      var p = parts[st.idx];
      var u = makeUtterance(p.t, session.speakers[p.s].g);
      var my = ++st.token;
      var next = function () {
        if (my !== st.token) return;
        st.idx++;
        onUpdate();
        var gap = st.idx < parts.length && parts[st.idx].s !== p.s ? 380 : 140;
        st.timer = setTimeout(function () { if (my === st.token && st.playing) speak(); }, gap);
      };
      u.onend = next;
      u.onerror = function (e) {
        if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
        next();
      };
      st.cur = u; // keep a reference, otherwise some browsers drop the events
      synth.speak(u);
      onUpdate();
    }
    function halt() {
      st.token++;
      clearTimeout(st.timer);
      if (synth && (synth.speaking || synth.pending)) synth.cancel();
    }
    return {
      parts: parts,
      state: st,
      play: function () { if (!synth || st.playing) return; halt(); st.playing = true; speak(); },
      pause: function () { halt(); st.playing = false; onUpdate(); },
      toggle: function () { if (st.playing) this.pause(); else this.play(); },
      jump: function (i, forcePlay) {
        var was = st.playing || forcePlay;
        halt();
        st.idx = Math.max(0, Math.min(parts.length - 1, i));
        st.playing = !!was && !!synth;
        if (st.playing) speak(); else onUpdate();
      },
      sayOnce: function (text) {
        if (!synth) return;
        this.pause();
        st.cur = makeUtterance(text, 'f');
        synth.speak(st.cur);
      }
    };
  }

  /* ---------- home ---------- */
  function renderHome() {
    document.title = 'Ear We Go!';
    var got = ALL.reduce(function (a, x) { return a + ((store.best[x.s.id] || {}).stars || 0); }, 0);
    var wave = h('div', { class: 'wave', 'aria-hidden': 'true' });
    for (var i = 0; i < 34; i++) {
      var ht = 18 + Math.round(Math.abs(Math.sin(i * 0.9) * 46 + Math.sin(i * 2.3) * 28));
      wave.appendChild(h('i', { style: 'height:' + ht + '%;animation-delay:' + (i * 22) + 'ms' }));
    }
    var hero = h('header', { class: 'hero' },
      h('div', { class: 'hero-in' },
        h('h1', null, 'Ear We Go!'),
        h('p', { class: 'hero-sub' }, 'Headphones in. Press play, listen closely, then answer the questions.'),
        h('p', { class: 'hero-stars' }, starsEl(got ? 3 : 0), ' ' + got + ' of ' + (ALL.length * 3) + ' stars collected')),
      wave);

    var grid = h('div', { class: 'modules' });
    MODULES.forEach(function (m, mi) {
      var done = m.sessions.filter(function (s) { return store.best[s.id]; }).length;
      var list = h('ol', { class: 'tracks' });
      m.sessions.forEach(function (s, si) {
        var best = store.best[s.id];
        list.appendChild(h('li', null,
          h('a', { class: 'track', href: '#/track/' + s.id },
            h('span', { class: 'track-no' }, String(si + 1)),
            h('span', { class: 'track-main' },
              h('span', { class: 'track-title' }, s.title),
              h('span', { class: 'track-kind' }, s.kind + (best ? ', best ' + best.score + ' of ' + best.total : ''))),
            best ? starsEl(best.stars) : h('span', { class: 'track-new' }, 'New'))));
      });
      grid.appendChild(h('section', { class: 'module m' + (mi + 1) },
        h('div', { class: 'module-head' },
          h('p', { class: 'module-no' }, 'Module ' + (mi + 1) + ', level ' + m.level),
          h('h2', null, m.name),
          h('p', { class: 'module-blurb' }, m.blurb),
          h('div', { class: 'module-progress', role: 'img', 'aria-label': done + ' of ' + m.sessions.length + ' sessions done' },
            m.sessions.map(function (s) { return h('i', { class: store.best[s.id] ? 'on' : '' }); }),
            h('span', null, done + ' of ' + m.sessions.length + ' done'))),
        list));
    });

    $app.replaceChildren(hero, grid,
      h('footer', { class: 'foot' }, 'Your stars are saved on this device only.'));
  }

  /* ---------- session ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return String(s).toLowerCase().trim().replace(/^[£$]/, '').replace(/[.,!?]+$/, '').replace(/\s+/g, ' ');
  }
  function seg(label, options, current, onChange) {
    var wrap = h('div', { class: 'seg', role: 'group', 'aria-label': label });
    options.forEach(function (o) {
      var b = h('button', {
        type: 'button', 'aria-pressed': String(o[0] === current),
        onclick: function () {
          Array.prototype.forEach.call(wrap.children, function (c) { c.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true');
          onChange(o[0]);
        }
      }, o[1]);
      wrap.appendChild(b);
    });
    return wrap;
  }

  function renderSession(entry) {
    var s = entry.s, m = entry.m;
    document.title = s.title + ' – Ear We Go!';
    var n = s.questions.length;
    var answers = new Array(n).fill(null);
    var checked = false;
    var multi = Object.keys(s.speakers).length > 1;

    /* player UI */
    var playBtn = h('button', { type: 'button', class: 'play', onclick: function () { player.toggle(); } });
    var eq = h('div', { class: 'eq', 'aria-hidden': 'true' }, h('i'), h('i'), h('i'), h('i'), h('i'));
    var fill = h('i');
    var status = h('span', { class: 'player-status' });
    var playerEl = h('div', { class: 'player' },
      playBtn,
      h('div', { class: 'player-mid' },
        h('div', { class: 'player-top' }, eq, status),
        h('div', { class: 'bar' }, fill)),
      h('button', { type: 'button', class: 'ctl', 'aria-label': 'Back one sentence', title: 'Back one sentence', html: ICON.back,
        onclick: function () { player.jump(player.state.idx - 1); } }),
      h('button', { type: 'button', class: 'ctl', 'aria-label': 'Start again', title: 'Start again', html: ICON.restart,
        onclick: function () { player.jump(0); } }));

    var transcript = null; // built after checking
    var sentenceEls = [];

    function update() {
      var st = player.state;
      playBtn.innerHTML = st.playing ? ICON.pause : ICON.play;
      playBtn.setAttribute('aria-label', st.playing ? 'Pause' : 'Play');
      playerEl.classList.toggle('is-playing', st.playing);
      fill.style.width = (st.idx / player.parts.length * 100) + '%';
      status.textContent = st.playing ? 'Listening…'
        : st.idx > 0 ? 'Paused'
        : st.listens ? 'Listened ' + st.listens + (st.listens === 1 ? ' time' : ' times')
        : 'Press play to start';
      sentenceEls.forEach(function (el, i) { el.classList.toggle('now', st.playing && i === st.idx); });
    }
    var player = createPlayer(s, update);
    activePlayer = player;

    var settings = h('div', { class: 'settings' },
      h('div', { class: 'setting' }, h('span', null, 'Speed'),
        seg('Speed', [['slow', 'Slow'], ['normal', 'Normal'], ['fast', 'Fast']], store.rate,
          function (v) { store.rate = v; saveStore(); })),
      h('div', { class: 'setting' }, h('span', null, 'Voice'),
        seg('Voice', [['GB', 'British'], ['US', 'American']], store.accent,
          function (v) { store.accent = v; saveStore(); })));

    /* key words */
    var vocab = h('ul', { class: 'vocab' }, s.vocab.map(function (v) {
      return h('li', null, h('button', { type: 'button', title: 'Tap to hear it', onclick: function () { player.sayOnce(v[0]); } },
        h('b', null, v[0]), h('span', { lang: 'de' }, v[1])));
    }));

    /* questions */
    var qEls = [];
    var qList = h('ol', { class: 'questions' });
    s.questions.forEach(function (q, qi) {
      var body;
      var setAnswer = function (val) { answers[qi] = val; li.classList.remove('needs'); note.textContent = ''; };
      if (q.t === 'mc' || q.t === 'tf') {
        var opts = q.t === 'mc' ? shuffle(q.o).map(function (o) { return [o, o]; }) : [[true, 'True'], [false, 'False']];
        body = h('div', { class: 'opts' + (q.t === 'tf' ? ' opts-tf' : '') });
        opts.forEach(function (o) {
          var b = h('button', {
            type: 'button', class: 'opt', 'aria-pressed': 'false',
            onclick: function () {
              Array.prototype.forEach.call(body.children, function (c) { c.setAttribute('aria-pressed', 'false'); });
              b.setAttribute('aria-pressed', 'true');
              setAnswer(o[0]);
            }
          }, o[1]);
          b._val = o[0];
          body.appendChild(b);
        });
      } else {
        var bits = q.q.split('___');
        var input = h('input', {
          type: 'text', class: 'gap', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false',
          'aria-label': 'Your answer', enterkeyhint: 'done',
          oninput: function () { setAnswer(input.value.trim() ? input.value : null); }
        });
        body = h('p', { class: 'gap-line' }, bits[0], input, bits[1] || '');
      }
      var fb = h('div', { class: 'fb', hidden: true });
      var li = h('li', { class: 'q' },
        h('p', { class: 'q-text' }, q.t === 'gap' ? 'Fill in the gap.' : q.t === 'tf' ? 'True or false? ' + q.q : q.q),
        body, fb);
      qEls.push({ li: li, body: body, fb: fb, q: q });
      qList.appendChild(li);
    });

    var note = h('p', { class: 'note', role: 'status' });
    var checkBtn = h('button', { type: 'button', class: 'btn btn-main', onclick: check }, 'Check my answers');
    var resultBox = h('div', { class: 'result', hidden: true, tabindex: '-1' });
    var after = h('div', { class: 'after', hidden: true });

    function isRight(q, a) {
      if (q.t === 'mc') return a === q.o[0];
      if (q.t === 'tf') return a === q.a;
      return q.accept.indexOf(norm(a)) >= 0;
    }
    function rightText(q) {
      return q.t === 'mc' ? q.o[0] : q.t === 'tf' ? (q.a ? 'True' : 'False') : q.accept[0];
    }

    function check() {
      if (checked) return;
      var open = answers.reduce(function (a, v, i) { if (v === null) a.push(i); return a; }, []);
      if (open.length) {
        open.forEach(function (i) { qEls[i].li.classList.add('needs'); });
        note.textContent = open.length === 1 ? 'One question is still open.' : open.length + ' questions are still open.';
        qEls[open[0]].li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      checked = true;
      player.pause();
      var score = 0;
      qEls.forEach(function (e, i) {
        var ok = isRight(e.q, answers[i]);
        if (ok) score++;
        e.li.classList.add(ok ? 'right' : 'wrong');
        Array.prototype.forEach.call(e.body.querySelectorAll('button, input'), function (c) {
          c.disabled = true;
          if (c._val !== undefined) {
            if (isRight(e.q, c._val)) c.classList.add('is-right');
            else if (c.getAttribute('aria-pressed') === 'true') c.classList.add('is-wrong');
          }
        });
        e.fb.hidden = false;
        e.fb.replaceChildren(
          h('strong', null, ok ? 'Right. ' : 'Not quite. The answer is: ' + rightText(e.q) + '. '),
          e.q.why);
      });

      var stars = starsFor(score, n);
      var prev = store.best[s.id];
      if (!prev || score > prev.score) { store.best[s.id] = { score: score, total: n, stars: stars }; saveStore(); }

      var msg = stars === 3 ? 'Perfect ears!' : stars === 2 ? 'Sharp listening.' :
        stars === 1 ? 'Not bad. One more listen and you\'ve got it.' : 'Tricky one. Read the text below, then try again.';
      var idx = ALL.indexOf(entry);
      var next = ALL[idx + 1];
      resultBox.hidden = false;
      resultBox.replaceChildren(
        starsEl(stars, true),
        h('p', { class: 'result-score' }, score + ' of ' + n + ' right'),
        h('p', { class: 'result-msg' }, msg),
        h('div', { class: 'result-actions' },
          h('button', { type: 'button', class: 'btn', onclick: function () { route(true); } }, 'Try again'),
          next ? h('a', { class: 'btn btn-main', href: '#/track/' + next.s.id }, 'Next: ' + next.s.title)
               : h('a', { class: 'btn btn-main', href: '#/' }, 'Back to all sessions')));

      /* transcript with tap-to-hear sentences */
      transcript = h('div', { class: 'transcript' });
      var pi = 0;
      s.lines.forEach(function (ln, li) {
        var p = h('p', null, multi ? h('b', null, s.speakers[ln.s].name + ': ') : null);
        while (pi < player.parts.length && player.parts[pi].li === li) {
          (function (i) {
            var sp = h('span', { class: 'sent', role: 'button', tabindex: '0', onclick: function () { player.jump(i, true); },
              onkeydown: function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); player.jump(i, true); } } },
              player.parts[i].t);
            sentenceEls.push(sp);
            p.appendChild(sp);
            p.appendChild(document.createTextNode(' '));
          })(pi);
          pi++;
        }
        transcript.appendChild(p);
      });
      after.hidden = false;
      after.replaceChildren(
        h('h2', null, 'Read and listen'),
        h('p', { class: 'hint' }, 'Here is the text. Press play to read along, or tap a sentence to hear it again.'),
        transcript);
      checkBtn.hidden = true;
      note.textContent = '';
      update();
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
      resultBox.focus({ preventScroll: true });
    }

    $app.replaceChildren(
      h('div', { class: 'session m' + (entry.mi + 1) },
        h('nav', { class: 'topbar' },
          h('a', { class: 'backlink', href: '#/' }, h('span', { html: ICON.arrow }), 'All sessions')),
        h('header', { class: 'session-head' },
          h('p', { class: 'chip' }, m.name + ', session ' + (entry.si + 1) + ' of ' + m.sessions.length),
          h('h1', null, s.title),
          h('p', { class: 'intro' }, s.kind + '. ' + s.intro)),
        h('section', { class: 'block' },
          h('h2', null, 'Key words'),
          h('p', { class: 'hint' }, 'Tap a word to hear it.'),
          vocab),
        !synth ? h('p', { class: 'warn' }, 'This browser cannot read aloud. Open the page in Chrome, Safari or Edge.') : null,
        playerEl,
        settings,
        h('section', { class: 'block' },
          h('h2', null, 'Questions'),
          h('p', { class: 'hint' }, 'Read the questions first. Then listen, as often as you need.'),
          resultBox,
          qList,
          note,
          checkBtn),
        after));
    update();
  }

  /* ---------- router ---------- */
  function route(keepScroll) {
    if (activePlayer) { activePlayer.pause(); activePlayer = null; }
    if (synth) synth.cancel();
    var mt = location.hash.match(/^#\/track\/([\w-]+)/);
    var entry = mt && ALL.filter(function (x) { return x.s.id === mt[1]; })[0];
    if (entry) renderSession(entry); else renderHome();
    if (keepScroll !== 'stay') window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () { route(); });
  window.addEventListener('pagehide', function () { if (synth) synth.cancel(); });
  route();
})();
