// The home pages' videos: only what is on screen plays, the pinned phone follows the step in view, and one island at a
// time turns a listening clip's sound on. The other motion is CSS.
(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll('video[data-auto]'));
  var islands = Array.prototype.slice.call(document.querySelectorAll('button[data-sound]'));
  var story = document.querySelector('.story');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)');
  var step = 0;
  var sound = null;

  function start(video) {
    var playing = video.play();
    if (playing && playing.catch) playing.catch(function () {});
  }

  function setSound(id) {
    sound = id;
    videos.forEach(function (video) {
      if (!video.dataset.sound) return;
      video.muted = video.dataset.sound !== id;
      if (video.dataset.sound === id) {
        video.currentTime = 0;
        start(video);
      }
    });
    islands.forEach(function (island) {
      island.setAttribute('aria-pressed', String(island.dataset.sound === id));
    });
  }

  function sync() {
    videos.forEach(function (video) {
      var hasSound = sound !== null && video.dataset.sound === sound;
      var inStep = video.dataset.step === undefined || Number(video.dataset.step) === step;
      var want = video.near && inStep && (!still.matches || hasSound);
      if (hasSound && !video.near) setSound(null);
      if (want && video.paused) start(video);
      if (!want && !video.paused) video.pause();
    });
  }

  islands.forEach(function (island) {
    island.addEventListener('click', function () {
      setSound(sound === island.dataset.sound ? null : island.dataset.sound);
      sync();
    });
  });

  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal, .cta'));

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var revealWatch = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealWatch.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(function (el) { revealWatch.observe(el); });

  var videoWatch = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { entry.target.near = entry.isIntersecting; });
    sync();
  }, { rootMargin: '15% 0px' });
  videos.forEach(function (video) { videoWatch.observe(video); });

  var stepWatch = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      step = Number(entry.target.dataset.story);
      story.dataset.step = step;
      videos.forEach(function (video) {
        if (Number(video.dataset.step) === step) video.currentTime = 0;
      });
      sync();
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  document.querySelectorAll('[data-story]').forEach(function (el) { stepWatch.observe(el); });

  still.addEventListener('change', sync);
})();
