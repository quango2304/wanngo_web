// The home page: the hero video, reveals on scroll, and pausing what moves when it's off screen.
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
    document.querySelectorAll('.shelf, .cta').forEach(function (el) { idle.observe(el); });
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

  // The hero video (../bookmuse/docs/web-dashboard.md, "The hero video"): a silent loop in four cuts, wide or tall for the width
  // and light or dark for the theme. It plays only while on screen in a visible tab; the button pauses it, and with Reduce Motion
  // it waits on its first frame until the visitor presses play.
  var film = document.getElementById('film');
  if (!film) return;
  var video = film.querySelector('video'), btn = film.querySelector('.film-btn');
  var base = film.dataset.base, v = '?v=' + film.dataset.v;
  var wide = window.matchMedia('(min-width: 700px)'), darkOS = window.matchMedia('(prefers-color-scheme: dark)');
  var onScreen = false, userPaused = still.matches, cut = '';

  function theme() { var t = document.documentElement.dataset.theme; return t === 'dark' || t === 'light' ? t : (darkOS.matches ? 'dark' : 'light'); }
  function pick() {
    var next = (wide.matches ? 'wide' : 'tall') + '-' + theme();
    if (next === cut) return;
    var at = cut ? video.currentTime : 0;
    cut = next;
    video.poster = base + cut + '.jpg' + v;
    video.innerHTML = '<source src="' + base + cut + '.webm' + v + '" type="video/webm"><source src="' + base + cut + '.mp4' + v + '" type="video/mp4">';
    video.load();
    if (at) video.addEventListener('loadedmetadata', function () { try { video.currentTime = at; } catch (e) {} }, { once: true });
    sync();
  }
  function sync() {
    var go = onScreen && !document.hidden && !userPaused;
    if (go && video.paused) { video.preload = 'auto'; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    else if (!go && !video.paused) video.pause();
  }
  function label() {
    var playing = !video.paused;
    film.classList.toggle('playing', playing);
    btn.setAttribute('aria-label', playing ? 'Pause the video' : 'Play the video');
  }
  video.addEventListener('play', label);
  video.addEventListener('pause', label);
  btn.hidden = false;
  btn.addEventListener('click', function () { userPaused = !video.paused; if (userPaused) video.pause(); else { onScreen = true; sync(); } });

  [wide, darkOS].forEach(function (m) { if (m.addEventListener) m.addEventListener('change', pick); else m.addListener(pick); });
  new MutationObserver(pick).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) { onScreen = entries[0].isIntersecting; sync(); }, { threshold: 0.1 }).observe(film);
  } else {
    onScreen = true;
  }
  document.addEventListener('visibilitychange', sync);
  pick();
  label();
})();
