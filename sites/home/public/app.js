// The little room: the shelf, the theme switch, and the bridge to the Rive scene (/assets/rive/room.riv).
// The scene's view model "Room" has: night (bool, we write), activity (number it writes: 0 coding,
// 1 heading to bed, 2 asleep, 3 back to the desk), poke and pet (triggers, fired by clicks in the scene).
(function () {
  'use strict';

  var ITEMS = [
    { name: 'Bookmuse', kind: 'App', icon: '/assets/bookmuse-icon.png', bg: '#FFE08A',
      desc: 'A calm reading app for your EPUB library: books read aloud, with highlights, saved words and folders kept in sync.',
      dest: 'bookmuse.wanngo.com', href: 'https://bookmuse.wanngo.com/', cta: 'Visit site', say: 'ah, Bookmuse. my fave.' },
    { name: 'The blog', kind: 'Writing', bg: '#E2D6F3',
      desc: 'Notes from the little room: what I’m building, what broke, and what I learned fixing it.',
      dest: 'wanngo.substack.com', href: 'https://wanngo.substack.com/', cta: 'Read it', say: 'I should write more…' },
    { name: 'Open source', kind: 'Code', bg: '#CFE3C4',
      desc: 'The bits and pieces I share on GitHub. Issues and pull requests welcome.',
      dest: 'github.com/quango2304', href: 'https://github.com/quango2304', cta: 'View code', say: 'PRs welcome :)' },
    { name: 'Next app', kind: 'Brewing', bg: '#CFE0F5',
      desc: 'Something new is bubbling away on the desk. Follow the blog to hear about it first.',
      dest: 'coming soon', href: 'https://wanngo.substack.com/', cta: 'Follow along', say: 'shh, it’s a secret' },
    { name: 'This room', kind: 'Experiment', bg: '#FFD3B8',
      desc: 'This page! The room is drawn in code and animated with Rive. The cat’s tail has bones, and we both watch your cursor. Try clicking the cat.',
      dest: 'made with Rive', say: 'built that one at 3am' },
    { name: 'Say hi', kind: 'Email', bg: '#F7CFD8',
      desc: 'Questions, ideas, bug reports or just hello. I read everything.',
      dest: 'admin@bookmuse.wanngo.com', href: 'mailto:admin@bookmuse.wanngo.com', cta: 'Write to me', say: 'oh, a message? yay' }
  ];
  var REST_LINE = 'hm… one more bug';
  var POKES = ['oh hi! 👋', 'you found me :)', 'brb, one more commit', 'thanks for stopping by!', 'the cat says hi too'];

  var root = document.documentElement;
  var stage = document.getElementById('stage');
  var say = document.getElementById('say');
  var card = document.getElementById('card');
  var toggle = document.getElementById('theme');
  var canvas = document.getElementById('room');
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vm = null;
  var picked = null;
  var sayTimer = 0;
  var pokeIndex = 0;

  // ---- speech bubble
  function setSay(text) {
    say.textContent = text;
    if (reduceMotion) return;
    say.classList.remove('pop');
    void say.offsetWidth; // restart the pop
    say.classList.add('pop');
  }

  // ---- shelf and card (the mobile list reuses the shelf's buttons)
  var mlist = document.querySelector('.mlist');
  document.querySelectorAll('.row .item').forEach(function (b) { mlist.appendChild(b.cloneNode(true)); });
  var buttons = document.querySelectorAll('.item');

  function renderCard() {
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.dataset.i) === picked)); });
    clearTimeout(sayTimer);
    if (picked === null) {
      card.hidden = true;
      setSay(REST_LINE);
      return;
    }
    var it = ITEMS[picked];
    var icon = card.querySelector('.cicon');
    icon.style.background = it.bg;
    icon.innerHTML = it.icon
      ? '<img src="' + it.icon + '" alt="">'
      : document.querySelector('.item[data-i="' + picked + '"] .box svg').outerHTML;
    card.querySelector('.kind').textContent = it.kind;
    card.querySelector('.h3').textContent = it.name;
    card.querySelector('.desc').textContent = it.desc;
    card.querySelector('.dest').textContent = it.dest;
    var open = card.querySelector('.open');
    open.hidden = !it.href;
    if (it.href) {
      open.href = it.href;
      open.textContent = it.cta + ' ↗';
    }
    card.hidden = false;
    card.style.animation = 'none';
    void card.offsetWidth; // replay the card's entrance when switching items
    card.style.animation = '';
    setSay(it.say);
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var i = Number(b.dataset.i);
      picked = picked === i ? null : i;
      renderCard();
    });
  });
  card.querySelector('.close').addEventListener('click', function () {
    picked = null;
    renderCard();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && picked !== null) {
      picked = null;
      renderCard();
    }
  });

  // ---- theme
  function isDark() { return root.dataset.theme === 'dark'; }
  function applyTheme() {
    toggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark() ? '#6C6B7B' : '#EFE6D6';
    if (vm) vm.boolean('night').value = isDark();
  }
  toggle.addEventListener('click', function () {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    applyTheme();
  });
  applyTheme();

  // ---- the Rive scene
  if (!window.rive || !canvas) return;
  rive.RuntimeLoader.setWasmUrl('/assets/rive/rive.wasm?v=2.45.0');
  rive.RuntimeLoader.setWasmFallbackUrl('/assets/rive/rive_fallback.wasm?v=2.45.0');

  var r = new rive.Rive({
    src: '/assets/rive/room.riv?v=1',
    canvas: canvas,
    stateMachine: 'Room',
    autoplay: true,
    autoBind: true,
    isTouchScrollEnabled: true,
    layout: new rive.Layout({ fit: rive.Fit.Contain, alignment: rive.Alignment.Center }),
    onLoad: function () {
      r.resizeDrawingSurfaceToCanvas();
      // let the first frames draw, then swap the poster for the live canvas
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          stage.classList.add('is-live');
          if (reduceMotion) r.pause();
        });
      });
      vm = r.viewModelInstance;
      if (!vm) return;
      applyTheme();
      var activity = vm.number('activity');
      if (activity) activity.on(function () { stage.dataset.activity = String(Math.round(activity.value)); });
      var poke = vm.trigger('poke');
      if (poke) poke.on(function () {
        if (stage.dataset.activity !== '0') return;
        setSay(POKES[pokeIndex++ % POKES.length]);
        clearTimeout(sayTimer);
        sayTimer = setTimeout(function () { setSay(picked === null ? REST_LINE : ITEMS[picked].say); }, 3200);
      });
    }
  });

  window.addEventListener('resize', function () { r.resizeDrawingSurfaceToCanvas(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) r.startRendering(); else r.stopRendering();
    }).observe(canvas);
  }
})();
