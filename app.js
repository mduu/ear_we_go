(function () {
  'use strict';

  var MODULES = window.EWG_MODULES || [];
  var AUDIO = window.EWG_AUDIO || {};
  var split = window.EWG_split;
  var ALL = [];
  MODULES.forEach(function (m, mi) {
    m.sessions.forEach(function (s, si) { ALL.push({ s: s, m: m, mi: mi, si: si }); });
  });

  var $app = document.getElementById('app');
  var STORE_KEY = 'earwego.v1';
  var RATES = { slow: 0.8, normal: 1, fast: 1.15 };
  var PAGE_SIZE = 5;
  var store = loadStore();
  var pages = {}; // module id -> page shown on the home screen
  var activePlayer = null;

  /* ---------- storage ---------- */
  function loadStore() {
    var base = { best: {}, rate: 'normal', module: null };
    try {
      var saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && typeof saved === 'object') {
        base.best = saved.best || {};
        if (RATES[saved.rate]) base.rate = saved.rate;
        if (typeof saved.module === 'string') base.module = saved.module;
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
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5 8 12l6.5 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5 16 12l-6.5 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
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
  function clock(sec) {
    sec = Math.max(0, Math.round(sec));
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }

  /* ---------- player (plays the recorded MP3 of a session) ---------- */
  function loadInto(el, url) {
    // Loading the file as a blob makes jumping around work on every web server.
    // Opened straight from disk (file://) fetch is not allowed, so fall back to the plain URL.
    var set = function (src) { el.src = src; el.load(); };
    if (!window.fetch || location.protocol === 'file:') { set(url); return; }
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error('missing');
      return r.blob();
    }).then(function (b) {
      el._blobUrl = URL.createObjectURL(b);
      set(el._blobUrl);
    }).catch(function () { set(url); });
  }

  function createPlayer(session, onUpdate) {
    var parts = [];
    session.lines.forEach(function (ln, li) {
      split(ln.t).forEach(function (t) { parts.push({ s: ln.s, t: t, li: li }); });
    });
    var meta = AUDIO[session.id];
    var ok = !!meta && meta.t.length === parts.length + 1;
    var total = ok ? meta.t[meta.t.length - 1] : 0;
    var st = { error: !ok, listens: 0 };
    var audio = new Audio();
    var words = new Audio();
    var raf = null, wordTimer = null;

    audio.preload = 'auto';
    words.preload = 'auto';
    function applyRate() { audio.defaultPlaybackRate = audio.playbackRate = RATES[store.rate]; }
    function playing() { return !audio.paused && !audio.ended; }
    function loop() {
      onUpdate();
      raf = playing() ? requestAnimationFrame(loop) : null;
    }
    ['play', 'pause', 'seeked', 'loadedmetadata'].forEach(function (ev) {
      audio.addEventListener(ev, function () { if (!raf) loop(); });
    });
    audio.addEventListener('ended', function () {
      st.listens++;
      audio.currentTime = 0;
      onUpdate();
    });
    audio.addEventListener('error', function () { st.error = true; onUpdate(); });

    if (ok) {
      // The version in the URL changes whenever the audio is re-generated (see tools/generate-audio.mjs).
      loadInto(audio, 'audio/' + session.id + '.mp3' + (meta.h ? '?v=' + meta.h : ''));
      loadInto(words, 'audio/' + session.id + '.vocab.mp3' + (meta.hv ? '?v=' + meta.hv : ''));
      applyRate();
    }

    function index() {
      if (!ok) return 0;
      var t = audio.currentTime + 0.03, i = 0;
      while (i < parts.length - 1 && meta.t[i + 1] <= t) i++;
      return i;
    }
    function stopWord() { clearInterval(wordTimer); words.pause(); }

    return {
      parts: parts,
      state: st,
      total: total,
      playing: playing,
      index: index,
      time: function () { return audio.currentTime || 0; },
      play: function () {
        if (st.error) return;
        stopWord();
        applyRate();
        var p = audio.play();
        if (p && p.catch) p.catch(function () { /* interrupted */ });
      },
      pause: function () { audio.pause(); },
      toggle: function () { if (playing()) this.pause(); else this.play(); },
      jump: function (i, thenPlay) {
        if (st.error) return;
        audio.currentTime = meta.t[Math.max(0, Math.min(parts.length - 1, i))];
        if (thenPlay) this.play(); else onUpdate();
      },
      seek: function (frac) {
        // Tapping the waveform jumps to the start of the sentence at that point.
        if (st.error) return;
        var t = Math.max(0, Math.min(1, frac)) * total, i = 0;
        while (i < parts.length - 1 && meta.t[i + 1] <= t) i++;
        this.jump(i);
      },
      back: function () {
        // Like a music player: first press goes to the start of this sentence, a quick second press to the one before.
        var i = index();
        if (audio.currentTime - meta.t[i] < 1 && i > 0) i--;
        this.jump(i);
      },
      setRate: applyRate,
      sayWord: function (i) {
        if (st.error || !meta.v || meta.v.length <= i + 1) return;
        audio.pause();
        stopWord();
        var end = meta.v[i + 1] - 0.25;
        words.currentTime = meta.v[i];
        var p = words.play();
        if (p && p.catch) p.catch(function () {});
        wordTimer = setInterval(function () { if (words.currentTime >= end || words.ended) stopWord(); }, 40);
      },
      destroy: function () {
        audio.pause(); stopWord();
        if (raf) cancelAnimationFrame(raf);
        [audio, words].forEach(function (el) {
          if (el._blobUrl) URL.revokeObjectURL(el._blobUrl);
          el.removeAttribute('src');
        });
      }
    };
  }

  /* ---------- home ---------- */
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z"/></svg>';

  function currentModule() {
    var m = MODULES.filter(function (x) { return x.id === store.module; })[0];
    if (m) return m;
    // First visit: the first module that still has an open session.
    return MODULES.filter(function (x) { return x.sessions.some(function (s) { return !store.best[s.id]; }); })[0] || MODULES[0];
  }
  function nextUp(m) {
    return m.sessions.filter(function (s) { return !store.best[s.id]; })[0] || null;
  }

  function renderHome() {
    document.title = 'Ear We Go!';
    var m = currentModule(), mi = MODULES.indexOf(m);
    var got = ALL.reduce(function (a, x) { return a + ((store.best[x.s.id] || {}).stars || 0); }, 0);
    var done = m.sessions.filter(function (s) { return store.best[s.id]; }).length;
    var next = nextUp(m);
    var target = next || m.sessions[0];
    var pageCount = Math.ceil(m.sessions.length / PAGE_SIZE);
    if (pages[m.id] == null) pages[m.id] = Math.floor((next ? m.sessions.indexOf(next) : 0) / PAGE_SIZE);

    var list = h('ol', { class: 'tracks' });
    var pager = h('nav', { class: 'pager', 'aria-label': 'Pages' });
    function show(page) {
      page = Math.max(0, Math.min(pageCount - 1, page));
      pages[m.id] = page;
      list.replaceChildren();
      m.sessions.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).forEach(function (s, k) {
        var best = store.best[s.id], isNext = s === next;
        var len = AUDIO[s.id] ? ', ' + clock(AUDIO[s.id].t[AUDIO[s.id].t.length - 1]) : '';
        list.appendChild(h('li', null,
          h('a', { class: 'track' + (isNext ? ' is-next' : ''), href: '#/track/' + s.id },
            h('span', { class: 'tile' + (best ? (best.stars === 3 ? ' tile-top' : ' tile-done') : '') }, String(page * PAGE_SIZE + k + 1)),
            h('span', { class: 'track-main' },
              h('span', { class: 'track-title' }, s.title),
              h('span', { class: 'track-kind' }, s.kind + len)),
            best ? h('span', { class: 'track-score' + (best.stars === 3 ? ' top' : '') }, best.score + ' / ' + best.total)
                 : isNext ? h('span', { class: 'track-next' }, 'Next up') : null)));
      });
      pager.replaceChildren();
      for (var p = 0; p < pageCount; p++) {
        (function (p) {
          pager.appendChild(h('button', { type: 'button', class: 'pg', 'aria-current': p === page ? 'page' : null,
            'aria-label': 'Page ' + (p + 1), onclick: function () { show(p); } }, String(p + 1)));
        })(p);
      }
    }
    show(pages[m.id]);

    $app.replaceChildren(
      h('div', { class: 'home m' + (mi + 1) },
        h('header', { class: 'mhead' },
          h('div', { class: 'mhead-top' },
            h('span', { class: 'brand' }, 'Ear We Go!'),
            h('span', { class: 'starpill', role: 'img', 'aria-label': got + ' of ' + (ALL.length * 3) + ' stars collected' },
              h('span', { html: STAR }), got + ' of ' + (ALL.length * 3))),
          h('div', { class: 'mhead-main' },
            h('div', null,
              h('p', { class: 'mhead-level' }, 'Level ' + m.level),
              h('h1', null, m.name),
              h('p', { class: 'mhead-done' }, done + ' of ' + m.sessions.length + ' sessions done')),
            h('a', { class: 'bigplay', href: '#/track/' + target.id, 'aria-label': (next ? 'Continue with ' : 'Play ') + target.title, html: ICON.play })),
          h('div', { class: 'pills', role: 'group', 'aria-label': 'Module' }, MODULES.map(function (x) {
            return h('button', { type: 'button', class: 'pill', 'aria-pressed': String(x === m),
              onclick: function () { store.module = x.id; saveStore(); renderHome(); } }, x.name);
          }))),
        list,
        pageCount > 1 ? pager : null,
        h('footer', { class: 'foot' }, 'Your stars are saved on this device only.')));
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
  function renderSession(entry) {
    var s = entry.s, m = entry.m;
    document.title = s.title + ' – Ear We Go!';
    pages[m.id] = Math.floor(entry.si / PAGE_SIZE);
    store.module = m.id;
    var n = s.questions.length;
    var answers = new Array(n).fill(null);
    var checked = false;
    var multi = Object.keys(s.speakers).length > 1;

    /* player UI */
    var BARS = 48;
    var seed = 0;
    for (var c = 0; c < s.id.length; c++) seed = (seed * 31 + s.id.charCodeAt(c)) % 9973;
    var barEls = [];
    var wave = h('div', { class: 'wave', 'aria-hidden': 'true', onclick: function (ev) {
      var r = wave.getBoundingClientRect();
      player.seek((ev.clientX - r.left) / r.width);
    } });
    for (var b = 0; b < BARS; b++) {
      var ht = 16 + Math.round(Math.abs(Math.sin((b + seed) * 0.83) * 52 + Math.sin((b + seed) * 2.1) * 30));
      barEls.push(wave.appendChild(h('i', { style: 'height:' + Math.min(100, ht) + '%' })));
    }
    var playBtn = h('button', { type: 'button', class: 'play', onclick: function () { player.toggle(); } });
    var timeNow = h('span'), timeAll = h('span');
    var backBtn = h('button', { type: 'button', class: 'ctl', 'aria-label': 'Back one sentence', title: 'Back one sentence', html: ICON.back,
      onclick: function () { player.back(); } });
    var restartBtn = h('button', { type: 'button', class: 'ctl', 'aria-label': 'Start again', title: 'Start again', html: ICON.restart,
      onclick: function () { player.jump(0); } });
    var SPEEDS = ['slow', 'normal', 'fast'], SPEED_LABEL = { slow: '0.8×', normal: '1.0×', fast: '1.15×' };
    var speedBtn = h('button', { type: 'button', class: 'speed', title: 'Change the speed',
      onclick: function () {
        store.rate = SPEEDS[(SPEEDS.indexOf(store.rate) + 1) % SPEEDS.length];
        saveStore(); player.setRate(); showSpeed();
      } });
    function showSpeed() {
      speedBtn.textContent = SPEED_LABEL[store.rate];
      speedBtn.setAttribute('aria-label', 'Speed ' + SPEED_LABEL[store.rate] + ', tap to change');
    }
    showSpeed();
    var playerEl = h('div', { class: 'player' },
      wave,
      h('div', { class: 'player-time' }, timeNow, timeAll),
      h('div', { class: 'player-ctl' },
        speedBtn,
        h('div', { class: 'player-main' }, backBtn, playBtn, restartBtn),
        h('span', { class: 'speed-balance' })));
    var warn = h('p', { class: 'warn', hidden: true },
      'The audio for this session is missing. Ask whoever set up the app to run tools/generate-audio.mjs.');

    var sentenceEls = [];
    var lastIcon = null, lastBars = -1;
    var segs = s.questions.map(function () { return h('i'); });

    function update() {
      var st = player.state, on = player.playing(), t = player.time();
      if (lastIcon !== on) { playBtn.innerHTML = on ? ICON.pause : ICON.play; lastIcon = on; }
      playBtn.setAttribute('aria-label', on ? 'Pause' : 'Play');
      playBtn.disabled = backBtn.disabled = restartBtn.disabled = st.error;
      warn.hidden = !st.error;
      var played = player.total ? Math.round(Math.min(1, t / player.total) * BARS) : 0;
      if (played !== lastBars) {
        barEls.forEach(function (el, i) { el.className = i < played ? 'on' : ''; });
        lastBars = played;
      }
      timeNow.textContent = st.error ? 'No audio' : clock(t);
      timeAll.textContent = st.error ? '' : clock(player.total);
      if (sentenceEls.length) {
        var idx = player.index(), active = on || t > 0.05;
        sentenceEls.forEach(function (el, i) { el.classList.toggle('now', active && i === idx); });
      }
    }
    var player = createPlayer(s, update);
    activePlayer = player;

    /* key words */
    var vocab = h('ul', { class: 'vocab' }, s.vocab.map(function (v, i) {
      return h('li', null, h('button', { type: 'button', title: 'Tap to hear it', onclick: function () { player.sayWord(i); } },
        h('b', null, v[0]), h('span', { lang: 'de' }, v[1])));
    }));

    /* questions */
    var qEls = [];
    var qList = h('ol', { class: 'questions' });
    s.questions.forEach(function (q, qi) {
      var body;
      var setAnswer = function (val) {
        answers[qi] = val; li.classList.remove('needs'); note.textContent = '';
        segs[qi].className = val === null ? '' : 'on';
      };
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
        segs[i].className = ok ? 'right' : 'wrong';
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
      var next = ALL[ALL.indexOf(entry) + 1];
      resultBox.hidden = false;
      resultBox.replaceChildren(
        starsEl(stars, true),
        h('p', { class: 'result-score' }, score + ' of ' + n + ' right'),
        h('p', { class: 'result-msg' }, msg),
        h('div', { class: 'result-actions' },
          h('button', { type: 'button', class: 'btn', onclick: function () { route(); } }, 'Try again'),
          next ? h('a', { class: 'btn btn-main', href: '#/track/' + next.s.id }, 'Next: ' + next.s.title)
               : h('a', { class: 'btn btn-main', href: '#/' }, 'Back to all sessions')));

      /* the text, with tap-to-hear sentences */
      var transcript = h('div', { class: 'transcript' });
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
        h('header', { class: 'shead' },
          h('nav', { class: 'shead-top' },
            h('a', { class: 'backlink', href: '#/', 'aria-label': 'All sessions', html: ICON.left }),
            h('span', null, m.name + ', session ' + (entry.si + 1) + ' of ' + m.sessions.length)),
          h('h1', null, s.title),
          h('p', { class: 'intro' }, s.intro)),
        playerEl,
        warn,
        h('section', { class: 'block' },
          h('h2', null, 'Key words'),
          vocab),
        h('section', { class: 'block' },
          h('div', { class: 'block-head' }, h('h2', null, 'Questions'), h('div', { class: 'segs', 'aria-hidden': 'true' }, segs)),
          h('p', { class: 'hint' }, 'Read the questions first. Then listen, as often as you need.'),
          resultBox,
          qList,
          note,
          checkBtn),
        after));
    update();
  }

  /* ---------- router ---------- */
  function route() {
    if (activePlayer) { activePlayer.destroy(); activePlayer = null; }
    var mt = location.hash.match(/^#\/track\/([\w-]+)/);
    var entry = mt && ALL.filter(function (x) { return x.s.id === mt[1]; })[0];
    if (entry) renderSession(entry); else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
