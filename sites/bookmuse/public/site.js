// The light and dark switch in the nav. Pages follow the system until someone picks the other look; the inline script in
// each page's head applies a saved choice before the first paint.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme');
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)');
  var bars = document.querySelectorAll('meta[name="theme-color"]');

  function mode() {
    return root.dataset.theme || (system.matches ? 'dark' : 'light');
  }

  function show() {
    var current = mode();
    root.dataset.mode = current;
    button.setAttribute('aria-label', button.dataset[current === 'dark' ? 'toLight' : 'toDark']);
    bars.forEach(function (bar) { bar.content = current === 'dark' ? '#15120e' : '#fcfbf9'; });
  }

  function pick(next) {
    try {
      // Picking what the system already uses goes back to following the system.
      if (next === (system.matches ? 'dark' : 'light')) localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch (e) {}
    if (next === (system.matches ? 'dark' : 'light')) delete root.dataset.theme;
    else root.dataset.theme = next;
    show();
  }

  button.addEventListener('click', function () {
    var next = mode() === 'dark' ? 'light' : 'dark';
    if (document.startViewTransition && !still.matches) {
      document.startViewTransition(function () { pick(next); });
    } else {
      pick(next);
    }
  });

  system.addEventListener('change', show);
  show();
})();
