// The home page: the lesson demo in the hero phone, reveals on scroll, and pausing what moves when it's off screen.
(function () {
  var still = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Reveals: once, when a block comes into view.
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); seen.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { seen.observe(el); });
    // The cover wall stops moving while off screen.
    var idle = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('paused', !e.isIntersecting); });
    });
    document.querySelectorAll('.stage, .shelf, .cta').forEach(function (el) { idle.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Free Today's pill says when the free summary changes, in the visitor's own time (the server picks it at 00:00 UTC).
  var until = document.getElementById('until');
  if (until && window.Intl) {
    var now = new Date();
    var next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    try { until.textContent = 'Free until ' + next.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }); } catch (e) {}
  }

  // The lesson demo: five scenes that play by themselves, like a lesson in the app. A tap on an answer or a segment
  // takes over; it plays on by itself again after a while.
  var root = document.getElementById('lesson');
  if (!root) return;
  var scenes = root.querySelectorAll('.sc');
  var segs = root.querySelectorAll('.ls-seg button');
  var where = root.querySelector('.ls-where');
  var LEN = [4200, 6800, 5200, 5200, 5200];
  var at = -1, timers = [], visible = false, holdUntil = 0, cycle = null;

  function later(ms, fn) { timers.push(setTimeout(fn, ms)); }
  function clear() { timers.forEach(clearTimeout); timers = []; clearTimeout(cycle); }

  // The finger moves to an element in the scene (positions in the scene's own box).
  function point(scene, target, tap) {
    var f = scene.querySelector('.finger');
    if (!f || !target) return;
    var s = scene.getBoundingClientRect(), t = target.getBoundingClientRect();
    var x = t.left - s.left + t.width * 0.62 - f.offsetWidth / 2;
    var y = t.top - s.top + t.height * 0.55 - f.offsetHeight / 2;
    var to = 'translate(' + x + 'px,' + y + 'px)';
    f.style.setProperty('--at', to);
    f.style.transform = to;
    f.classList.add('show');
    if (tap) later(950, function () { f.classList.remove('tap'); void f.offsetWidth; f.classList.add('tap'); });
  }

  function reset(scene) {
    scene.querySelectorAll('.pick-no, .pick-yes').forEach(function (b) { b.classList.remove('pick-no', 'pick-yes'); });
    scene.querySelectorAll('.show').forEach(function (b) { b.classList.remove('show'); });
    var f = scene.querySelector('.finger');
    if (f) { f.style.transform = 'translate(40%, 120%)'; f.classList.remove('tap'); }
  }

  function guess(scene, pick) {
    var no = scene.querySelector('[data-a="no"]'), yes = scene.querySelector('[data-a="yes"]');
    if (pick === 'no') {
      no.classList.add('pick-no');
      scene.querySelector('.fb-no').classList.add('show');
      later(1200, function () { yes.classList.add('pick-yes'); scene.querySelector('.fb-yes').classList.add('show'); });
    } else {
      yes.classList.add('pick-yes');
      scene.querySelector('.fb-yes').classList.add('show');
    }
  }

  function quiz(scene, pick) {
    var b = scene.querySelector('[data-a="' + pick + '"]');
    if (pick === 'no') {
      b.classList.add('pick-no');
      later(900, function () { b.classList.remove('pick-no'); quiz(scene, 'yes'); });
    } else {
      b.classList.add('pick-yes');
      scene.querySelector('.qfb').classList.add('show');
    }
  }

  // What each scene does by itself.
  var play = [
    null,
    function (s) {
      later(900, function () { point(s, s.querySelector('[data-a="no"]'), true); });
      later(2100, function () { guess(s, 'no'); });
      later(4300, function () { s.querySelector('.finger').classList.remove('show'); });
    },
    null,
    function (s) {
      later(900, function () { point(s, s.querySelector('[data-a="yes"]'), true); });
      later(2100, function () { quiz(s, 'yes'); });
      later(3400, function () { s.querySelector('.finger').classList.remove('show'); });
    },
    null
  ];

  function show(i, auto) {
    clear();
    at = i;
    scenes.forEach(function (s, k) { s.classList.toggle('on', k === i); if (k !== i) reset(s); });
    reset(scenes[i]);
    where.textContent = scenes[i].dataset.label;
    segs.forEach(function (b, k) {
      b.classList.toggle('past', k < i);
      b.classList.remove('now', 'start');
      b.toggleAttribute('aria-current', k === i);
    });
    var seg = segs[i];
    seg.style.setProperty('--dur', LEN[i] + 'ms');
    seg.classList.add('now', 'start');
    if (auto && !still.matches) {
      void seg.offsetWidth;
      seg.classList.remove('start');
      if (play[i]) play[i](scenes[i]);
      cycle = setTimeout(next, LEN[i]);
    } else {
      seg.classList.remove('start');
    }
  }

  function next() {
    if (!visible || document.hidden) { cycle = null; return; }
    if (Date.now() < holdUntil) { cycle = setTimeout(next, holdUntil - Date.now()); return; }
    show((at + 1) % scenes.length, true);
  }

  function take(ms) { clear(); holdUntil = Date.now() + ms; if (!still.matches) cycle = setTimeout(next, ms); }

  // Taps from the visitor.
  scenes[1].querySelectorAll('.opt').forEach(function (b) {
    b.addEventListener('click', function () {
      take(7000);
      reset(scenes[1]);
      guess(scenes[1], b.dataset.a);
    });
  });
  scenes[3].querySelectorAll('.qo').forEach(function (b) {
    b.addEventListener('click', function () {
      take(7000);
      reset(scenes[3]);
      quiz(scenes[3], b.dataset.a);
    });
  });
  segs.forEach(function (b, k) {
    b.addEventListener('click', function () { show(k, false); take(9000); });
  });

  function resume() {
    if (visible && !document.hidden && !still.matches) { if (!cycle) cycle = setTimeout(next, 600); }
    else clear();
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      resume();
    }, { threshold: 0.35 }).observe(root);
  } else {
    visible = true;
  }
  document.addEventListener('visibilitychange', resume);

  // With Reduce Motion the demo waits on the guess-first question and plays nothing by itself.
  show(still.matches ? 1 : 0, !still.matches);
})();
