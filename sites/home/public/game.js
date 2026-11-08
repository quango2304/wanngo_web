// ============================================================================
// WANNGO — THE LITTLE ROOM
// A pixel room you can visit. It runs on Vietnam time: wanngo codes by day and
// sleeps at night. Sprites live in assets/room/, lights and weather are drawn here.
// ============================================================================

(function () {
  // --------------------------------------------------------------------------
  // 1. CONTENT
  // --------------------------------------------------------------------------
  const ITEMS = [
    {
      name: 'Bookmuse',
      kind: 'App',
      desc: 'A calm reading app for your EPUB library: books read aloud, with highlights, saved words and folders kept in sync.',
      dest: 'bookmuse.wanngo.com',
      href: 'https://bookmuse.wanngo.com/',
      cta: 'Visit site',
      say: 'ah, Bookmuse. my fave.'
    },
    {
      name: 'The blog',
      kind: 'Writing',
      desc: 'Notes from the little room: what I’m building, what broke, and what I learned fixing it.',
      dest: 'wanngo.substack.com',
      href: 'https://wanngo.substack.com/',
      cta: 'Read it',
      say: 'I should write more…'
    },
    {
      name: 'Open source',
      kind: 'Code',
      desc: 'The bits and pieces I share on GitHub. Issues and pull requests welcome.',
      dest: 'github.com/quango2304',
      href: 'https://github.com/quango2304',
      cta: 'View code',
      say: 'PRs welcome :)'
    },
    {
      name: 'Next app',
      kind: 'Brewing',
      desc: 'Something new is bubbling away on the desk. Follow the blog to hear about it first.',
      dest: 'coming soon',
      href: 'https://wanngo.substack.com/',
      cta: 'Follow along',
      say: 'shh, it’s a secret'
    },
    {
      name: 'This room',
      kind: 'Experiment',
      desc: 'This page! A pixel room that runs on Vietnam time. The cat and I live here. Click anything, most of it does something.',
      dest: 'canvas + a lot of plants',
      say: 'built that one at 3am'
    },
    {
      name: 'Say hi',
      kind: 'Email',
      desc: 'Questions, ideas, bug reports or just hello. I read everything.',
      dest: 'admin@bookmuse.wanngo.com',
      href: 'mailto:admin@bookmuse.wanngo.com',
      cta: 'Write to me',
      say: 'oh, a message? yay'
    },
    {
      name: 'The globe',
      kind: 'Study notes',
      desc: 'A 3D globe I spin while reading about the world: countries, alliances, straits and hotspots, and the geography behind the news.',
      dest: 'geo.wanngo.com',
      href: 'https://geo.wanngo.com/',
      cta: 'Spin it',
      say: 'where in the world…'
    }
  ];

  const CODING_THOUGHTS = [
    'hm… one more bug',
    'shipping a tiny fix…',
    'tests are green!',
    'almost ready to deploy',
    'why did that work?'
  ];

  const POKES = [
    'oh hi! welcome in',
    'you found me :)',
    'make yourself at home',
    'thanks for stopping by!',
    'ok ok, I’m working',
    'you’re very persistent',
    'fine, one more wave'
  ];

  const GAME_LINES = ['one more level', 'no no no no', 'I meant to do that', 'this is research', 'save point!'];
  const MUMBLES = ['zzz…', 'one more… commit…', 'mmf… not a bug…', 'zzz… feature…'];
  const CAT_LINES = ['mrrp', 'prrrr', 'mew', 'prrrrrr'];

  // --------------------------------------------------------------------------
  // 2. THE ROOM: two layouts built from the same pieces
  // --------------------------------------------------------------------------
  // Coordinates below are in the wide room. The tall room is the same furniture
  // moved around, so each group just has an offset.
  const WIDE = { w: 568, h: 268, wall: 200, tall: false, offs: {} };
  const TALL = {
    w: 270,
    h: 580,
    wall: 262,
    tall: true,
    offs: {
      ac: [-464, -6], lantern: [-196, -8], window: [-278, 30], clock: [-96, 6], cork: [-80, 90], succs: [96, 86],
      shelf: [-298, 56], tv: [-322, 46], coffee: [-194, 46], desk: [-58, 178], fig: [200, 156], snake: [90, 167],
      monstera: [-392, 50], bed: [-144, 238], bag: [-268, 76], catbed: [-466, 238], mat: [-58, 192]
    }
  };
  let L = WIDE;

  function at(group, x, y) {
    const o = L.offs[group] || [0, 0];
    return [x + o[0], y + o[1]];
  }

  // Lights: id, group, x, y, radius
  const LIGHTS = [
    { id: 'desk', group: 'desk', x: 97, y: 128, r: 78, c: '255,206,130' },
    { id: 'lantern', group: 'lantern', x: 438, y: 46, r: 100, c: '255,224,170' },
    { id: 'tv', group: 'tv', x: 445, y: 140, r: 64, c: '150,190,255' },
    { id: 'screen', group: 'desk', x: 126, y: 126, r: 52, c: '160,180,255' }
  ];
  const STRING = [[288, 40], [300, 40], [326, 40], [336, 40], [353, 40], [371, 39]];
  const BULB_COLORS = ['#FFD36B', '#F4A9B8', '#9FE0B8', '#FFD36B', '#8FC8F0', '#F4A9B8'];
  const GLASS = { x: 306, y: 44, w: 55, h: 60 };
  const CLOCK = { x: 225, y: 103 };
  const SCREEN = { x: 421, y: 123, w: 49, h: 28 };
  const VENT = { x: 480, y: 52, w: 78 };

  // Spots dev walks to (feet position)
  const SPOTS = {
    coffee: { group: 'coffee', x: 190, y: 242, tall: [62, 304], line: 'refill time' },
    window: { group: 'bed', x: 340, y: 252, tall: [150, 340], line: 'look at that sky' },
    game: { group: 'bag', x: 445, y: 266 },
    mat: { group: 'mat', x: 110, y: 250 },
    bed: { group: 'bed', x: 246, y: 244, tall: [100, 432] }
  };
  const CAT_SPOTS = {
    wide: [[40, 252], [220, 262], [400, 262], [520, 262]],
    tall: [[230, 400], [60, 470], [150, 345], [70, 345]]
  };

  // Every piece of furniture is its own sprite in room-flat-f.png: [x, y, w, h]
  const KIT = {
    fig: [0, 0, 62, 139], shelf: [63, 0, 88, 122], window: [152, 0, 98, 90],
    bed: [251, 0, 151, 86], bedSleep: [0, 140, 151, 86], chair: [152, 140, 39, 70],
    monitor: [192, 140, 80, 70], snake: [273, 140, 36, 67], desk: [310, 140, 121, 62],
    pothos: [432, 140, 41, 62], monstera: [0, 227, 42, 59], tower: [43, 227, 28, 58],
    lantern: [72, 227, 36, 55], lamp: [109, 227, 38, 54], console: [148, 227, 68, 49],
    consolePlain: [217, 227, 68, 49], cork: [286, 227, 58, 44], ac: [345, 227, 97, 42],
    rug: [0, 287, 121, 42], coffee: [122, 287, 27, 42], bag: [150, 287, 54, 40],
    succs: [205, 287, 67, 36], table: [273, 287, 53, 35], tv: [327, 287, 55, 35],
    trophy: [383, 287, 32, 34], clock: [416, 287, 27, 27], catbed: [444, 287, 40, 27], globe: [486, 288, 17, 25],
    mat: [0, 330, 108, 26], icon0: [109, 330, 18, 18], icon1: [128, 330, 18, 18],
    icon2: [147, 330, 18, 18], icon3: [166, 330, 18, 18], icon4: [185, 330, 18, 18],
    icon5: [204, 330, 18, 18], dumbbells: [223, 330, 18, 16], mug: [242, 330, 14, 11],
    keyboard: [257, 330, 45, 6]
  };

  // The room, placed by hand. x, y are in the wide room; the tall room is the same
  // furniture moved by group. `base` is where a thing meets the floor: anyone whose
  // feet are above that line is behind it. No base means it's on the wall or flat on
  // the floor, under everyone.
  const ROOM = [
    { id: 'window', sprite: 'window', group: 'window', x: 282, y: 30 },
    { id: 'ac', sprite: 'ac', group: 'ac', x: 470, y: 14 },
    { id: 'succs', sprite: 'succs', group: 'succs', x: 12, y: 44 },
    { id: 'cork', sprite: 'cork', group: 'cork', x: 90, y: 66 },
    { id: 'clock', sprite: 'clock', group: 'clock', x: 212, y: 90 },
    { id: 'lantern', sprite: 'lantern', group: 'lantern', x: 420, y: 8 },
    { id: 'tv', sprite: 'tv', group: 'tv', x: 418, y: 120 },
    { id: 'rug', sprite: 'rug', group: 'bed', x: 270, y: 222 },
    { id: 'mat', sprite: 'mat', group: 'mat', x: 64, y: 238 },
    { id: 'dumbbells', sprite: 'dumbbells', group: 'mat', x: 176, y: 246 },
    { id: 'fig', sprite: 'fig', group: 'fig', x: 4, y: 85, base: 224 },
    { id: 'snake', sprite: 'snake', group: 'snake', x: 40, y: 165, base: 232 },
    { id: 'desk', sprite: 'desk', group: 'desk', x: 72, y: 164, base: 226 },
    { id: 'monitor', sprite: 'monitor', group: 'desk', x: 86, y: 96, base: 226.2 },
    { id: 'lamp', sprite: 'lamp', group: 'desk', x: 71, y: 112, base: 226.25 },
    { id: 'tower', sprite: 'tower', group: 'desk', x: 168, y: 107, base: 226.2 },
    { id: 'keyboard', sprite: 'keyboard', group: 'desk', x: 104, y: 159, base: 226.3 },
    { id: 'table', sprite: 'table', group: 'coffee', x: 198, y: 191, base: 226 },
    { id: 'coffee', sprite: 'coffee', group: 'coffee', x: 200, y: 152, base: 226.1 },
    { id: 'mug', sprite: 'mug', group: 'coffee', x: 232, y: 182, base: 226.1 },
    { id: 'bed', sprite: 'bed', group: 'bed', x: 256, y: 146, base: 232 },
    { id: 'console', sprite: 'console', group: 'tv', x: 412, y: 177, base: 226 },
    { id: 'shelf', sprite: 'shelf', group: 'shelf', x: 478, y: 104, base: 226 },
    { id: 'trophy', sprite: 'trophy', group: 'shelf', x: 478, y: 70, base: 226.1 },
    { id: 'globe', sprite: 'globe', group: 'shelf', x: 510, y: 79, base: 226.1 },
    { id: 'pothos', sprite: 'pothos', group: 'shelf', x: 527, y: 76, base: 226.1 },
    { id: 'monstera', sprite: 'monstera', group: 'monstera', x: 530, y: 181, base: 240 },
    { id: 'bag', sprite: 'bag', group: 'bag', x: 418, y: 222, base: 262 },
    { id: 'catbed', sprite: 'catbed', group: 'catbed', x: 480, y: 232, base: 259 }
  ];
  // The six things on the shelf, standing on its boards
  [[487, 119], [513, 119], [539, 119], [487, 148], [513, 148], [539, 148]].forEach(([x, y], i) => {
    ROOM.push({ id: 'item' + i, sprite: 'icon' + i, group: 'shelf', x, y, base: 226.2 });
  });
  const SHADOWS = [
    ['fig', 30, 223, 20, 3], ['snake', 58, 231, 17, 3], ['desk', 132, 226, 62, 3], ['coffee', 224, 226, 26, 3],
    ['bed', 331, 232, 76, 4], ['bag', 445, 262, 29, 4], ['tv', 446, 226, 35, 3], ['shelf', 522, 226, 45, 3],
    ['monstera', 551, 240, 19, 3], ['catbed', 500, 258, 21, 3], ['mat', 185, 261, 11, 2]
  ];
  const ROOM_BY_ID = {};
  ROOM.forEach((r) => { ROOM_BY_ID[r.id] = r; });
  const LANE = 256; // in the wide room everyone walks along the open floor in front of everything
  const AISLE = { x: 165, top: 340, bottom: 412, split: 400 }; // the tall room's way from front to back

  // The chair is its own sprite: it slides aside when he gets up, so he can walk straight
  // out from the desk, and back when he sits
  const chair = { t: 0, to: 0, delay: 0 };
  const chairOut = () => [-34, 8];

  function moveChair(to, delay) {
    chair.to = to;
    chair.delay = delay;
    setTimeout(() => fx('chair', 0.5), delay * 1000);
  }

  function stepChair(dt) {
    if (still) chair.t = chair.to;
    if (chair.t === chair.to) return;
    chair.delay -= dt;
    if (chair.delay > 0) return;
    const step = dt / 0.45;
    chair.t = chair.to > chair.t ? Math.min(chair.to, chair.t + step) : Math.max(chair.to, chair.t - step);
  }

  function drawChair() {
    const [x, y] = at('desk', 106, 170);
    sprite('chair', x + Math.round(chairOut()[0] * chair.t), y + Math.round(chairOut()[1] * chair.t));
  }

  // Feet positions to walk through, so nobody crosses a piece of furniture
  function route(from, to) {
    if (!L.tall) return [[from[0], LANE], [to[0], LANE], to];
    const fromTop = from[1] < AISLE.split;
    if (fromTop === to[1] < AISLE.split) return [to];
    if (fromTop) return [[AISLE.x, AISLE.top], [AISLE.x, AISLE.bottom], [to[0], AISLE.bottom], to];
    return [[from[0], AISLE.bottom], [AISLE.x, AISLE.bottom], [AISLE.x, AISLE.top], to];
  }

  // Things to click. x, y, w, h are in the wide room.
  const THINGS = [
    { id: 'ac', label: 'air conditioner', group: 'ac', x: 470, y: 14, w: 97, h: 42, act: () => toggleAC() },
    { id: 'lantern', label: 'paper lantern', group: 'lantern', x: 420, y: 12, w: 36, h: 52, act: () => toggleLamp('lantern') },
    { id: 'lamp', label: 'desk lamp', group: 'desk', x: 71, y: 112, w: 38, h: 54, act: () => toggleLamp('desk') },
    { id: 'window', label: 'window', group: 'window', x: 282, y: 30, w: 98, h: 90, act: () => sayDev(clockLine('it’s {t} here in Saigon')) },
    { id: 'clock', label: 'clock', group: 'clock', x: 212, y: 90, w: 27, h: 27, act: () => sayDev(clockLine('{t}. should I be sleeping?')) },
    { id: 'cork', label: 'cork board', group: 'cork', x: 90, y: 66, w: 58, h: 44, say: 'todo: fewer todos' },
    { id: 'succs', label: 'little succulents', group: 'succs', x: 12, y: 44, w: 67, h: 36, say: 'the only ones I never forget' },
    { id: 'fig', label: 'fig tree', group: 'fig', x: 4, y: 85, w: 62, h: 110, say: 'taller than my last app' },
    { id: 'snake', label: 'snake plant', group: 'snake', x: 40, y: 165, w: 36, h: 62, say: 'impossible to kill. tested.' },
    { id: 'monitor', label: 'monitor', group: 'desk', x: 86, y: 96, w: 80, h: 70, act: () => peekScreen() },
    { id: 'tower', label: 'PC', group: 'desk', x: 168, y: 107, w: 28, h: 58, say: 'louder than the cat' },
    { id: 'mug', label: 'mug', group: 'coffee', x: 232, y: 182, w: 14, h: 12, act: () => sayDev('coffee number ' + (3 + Math.floor(Math.random() * 3))) },
    { id: 'coffee', label: 'coffee machine', group: 'coffee', x: 200, y: 152, w: 27, h: 42, act: () => invite(() => visit(SPOTS.coffee), 'the real senior engineer') },
    { id: 'bed', label: 'bed', group: 'bed', x: 256, y: 146, w: 151, h: 86, act: () => invite(nap, 'not yet. one more commit.') },
    { id: 'tv', label: 'TV', group: 'tv', x: 418, y: 120, w: 55, h: 35, act: () => toggleTV() },
    { id: 'console', label: 'game console', group: 'tv', x: 412, y: 177, w: 68, h: 49, say: 'research. for work.' },
    { id: 'bag', label: 'beanbag', group: 'bag', x: 418, y: 222, w: 54, h: 40, act: () => invite(playGames, 'best seat in the house') },
    { id: 'mat', label: 'exercise mat', group: 'mat', x: 64, y: 238, w: 108, h: 26, act: () => invite(doPushUps, 'I use this. sometimes.') },
    { id: 'monstera', label: 'monstera', group: 'monstera', x: 530, y: 181, w: 42, h: 59, say: 'she gets the best light' },
    { id: 'catbed', label: 'cat bed', group: 'catbed', x: 480, y: 232, w: 40, h: 27, say: 'never used. he has my desk chair.' },
    { id: 'trophy', label: 'trophy', group: 'shelf', x: 478, y: 70, w: 32, h: 34, say: 'I bought it myself' },
    { id: 'globe', label: 'The globe', group: 'shelf', x: 510, y: 79, w: 17, h: 25, act: () => openCard(6) },
    { id: 'pothos', label: 'pothos', group: 'shelf', x: 527, y: 76, w: 41, h: 62, say: 'it’s slowly taking the shelf' },
    { id: 'books', of: 'shelf', label: 'books', group: 'shelf', x: 486, y: 172, w: 76, h: 50, say: 'read half of them. honest.' }
  ];
  [[486, 118], [512, 118], [538, 118], [486, 147], [512, 147], [538, 147]].forEach((p, i) => {
    THINGS.push({ id: 'item' + i, label: ITEMS[i].name, group: 'shelf', x: p[0], y: p[1], w: 20, h: 20, act: () => openCard(i) });
  });
  // Last, so it sits above the monitor's button
  THINGS.push({ id: 'laser', label: 'laser pointer', group: 'desk', x: 146, y: 154, w: 20, h: 12, act: () => pickLaser() });

  // --------------------------------------------------------------------------
  // 3. PAGE
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('room');
  const ctx = canvas.getContext('2d');
  const hot = document.getElementById('hot');
  const sayEl = document.getElementById('say');
  const nowEl = document.getElementById('now');
  const box = document.getElementById('box');
  const intro = document.getElementById('intro');
  const card = document.getElementById('card');
  const closeBtn = document.getElementById('close');
  const skyBtn = document.getElementById('sky');
  const soundBtn = document.getElementById('snd');
  const lightmap = document.createElement('canvas');
  const lm = lightmap.getContext('2d');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const params = new URLSearchParams(location.search);

  let scale = 3; // device pixels per room pixel
  let cssScale = 3;
  let ox = 0;
  let oy = 0;
  const sprites = {};

  function makeButtons() {
    THINGS.concat([{ id: 'dev', label: 'wanngo', act: pokeDev }, { id: 'cat', label: 'the cat', act: pokeCat }]).forEach((t) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', t.label);
      b.addEventListener('click', () => {
        sound(t.id);
        flash(t);
        if (t.act) t.act();
        else sayDev(t.say);
      });
      hot.appendChild(b);
      t.el = b;
      if (t.id === 'dev') devHit = t;
      if (t.id === 'cat') catHit = t;
    });
  }
  let devHit;
  let catHit;

  // --------------------------------------------------------------------------
  // Clicks: the thing lights up for a moment and makes a small sound
  // --------------------------------------------------------------------------
  let flashing = null;

  function flash(t) {
    if (t.group) flashing = { t, age: 0 };
  }

  function drawFlash(dt) {
    if (!flashing) return;
    flashing.age += dt;
    const k = 1 - flashing.age / 0.3;
    if (k <= 0) {
      flashing = null;
      return;
    }
    const t = flashing.t;
    const r = ROOM_BY_ID[t.of || t.id];
    if (!r) return;
    ctx.save();
    if (t.of) {
      // Part of a bigger sprite, like an icon on the shelf: a soft round patch of it
      const [x, y] = at(t.group, t.x, t.y);
      ctx.beginPath();
      ctx.ellipse(ox + x + t.w / 2, oy + y + t.h / 2, t.w / 2, t.h / 2, 0, 0, Math.PI * 2);
      ctx.clip();
    }
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.3 * k;
    drawPiece(r);
    ctx.restore();
  }

  // --------------------------------------------------------------------------
  // Sound: short clips in assets/audio/ (made with scripts/gen-room-sounds.sh) plus the
  // chip blips below. Browsers keep a page silent until it is touched, so everything
  // starts on the first tap or key press, and the speaker button in the bar mutes it.
  // --------------------------------------------------------------------------
  const CLIPS = ['key1', 'key2', 'key3', 'meow', 'purr', 'game', 'win', 'lose', 'day', 'night', 'ac', 'snore',
    'coffee', 'steps', 'switch', 'tvon', 'chair'];
  const LOOP_RATE = { steps: 1.2 };
  const clips = {};
  const loops = {};
  let audio = null;
  let master = null;
  let wanted = true;
  let purrUntil = 0;
  try { wanted = localStorage.getItem('room-sound') !== 'off'; } catch (e) { /* private window */ }

  function ensureAudio() {
    if (audio) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audio = new Ctx();
    master = audio.createGain();
    master.gain.value = wanted ? 0.9 : 0;
    master.connect(audio.destination);
    CLIPS.forEach((name) => {
      fetch(`assets/audio/${name}.mp3`)
        .then((r) => r.arrayBuffer())
        .then((buf) => new Promise((ok, no) => audio.decodeAudioData(buf, ok, no)))
        .then((b) => { clips[name] = b; })
        .catch(() => {});
    });
    syncSound();
  }

  function fx(name, volume, rate) {
    if (!audio || !wanted || !clips[name] || audio.state !== 'running') return;
    const src = audio.createBufferSource();
    const gain = audio.createGain();
    src.buffer = clips[name];
    src.playbackRate.value = rate || 1;
    gain.gain.value = volume === undefined ? 1 : volume;
    src.connect(gain).connect(master);
    src.start();
  }

  // Ambience that follows the room: the day or the night outside, the air conditioner,
  // the game's music, footsteps, snoring and the cat's purr
  function mixLoops() {
    if (!audio || audio.state !== 'running') return;
    const d = darkness();
    const target = {
      day: (1 - d) * 0.5,
      night: d * 0.5,
      ac: isAcOn() ? 0.22 : 0,
      game: dev.state === 'play' ? 0.28 : 0,
      snore: dev.state === 'sleep' && dev.bed > 0.6 ? 0.4 : 0,
      steps: dev.state === 'walk' ? 0.45 : 0,
      purr: performance.now() < purrUntil ? 0.5 : 0
    };
    Object.keys(target).forEach((name) => {
      let l = loops[name];
      if (!l) {
        if (!clips[name] || !target[name]) return;
        const src = audio.createBufferSource();
        const gain = audio.createGain();
        gain.gain.value = 0;
        src.buffer = clips[name];
        src.loop = true;
        src.playbackRate.value = LOOP_RATE[name] || 1;
        src.connect(gain).connect(master);
        src.start();
        l = loops[name] = { gain };
      }
      l.gain.gain.setTargetAtTime(wanted ? target[name] : 0, audio.currentTime, 0.45);
    });
  }

  function syncSound() {
    const on = !!audio && wanted;
    soundBtn.dataset.on = String(on);
    soundBtn.setAttribute('aria-label', on ? 'Turn sound off' : 'Turn sound on');
    if (!audio) return;
    master.gain.setTargetAtTime(wanted ? 0.9 : 0, audio.currentTime, 0.1);
    if (wanted) audio.resume();
    else setTimeout(() => { if (!wanted) audio.suspend(); }, 400);
  }

  soundBtn.addEventListener('click', () => {
    wanted = !(audio && wanted);
    try { localStorage.setItem('room-sound', wanted ? 'on' : 'off'); } catch (e) { /* private window */ }
    ensureAudio();
    syncSound();
    if (wanted && audio) audio.resume().then(() => fx('switch', 0.8));
  });
  syncSound();

  ['pointerdown', 'keydown'].forEach((type) => {
    addEventListener(type, (e) => {
      if (wanted && !soundBtn.contains(e.target)) ensureAudio();
      if (audio && wanted && audio.state === 'suspended') audio.resume();
    }, { capture: true, passive: true });
  });

  document.addEventListener('visibilitychange', () => {
    if (!audio) return;
    if (document.hidden) audio.suspend();
    else if (wanted) audio.resume();
  });

  function tone(freq, to, start, length, type, volume) {
    const t0 = audio.currentTime + start;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    osc.frequency.exponentialRampToValueAtTime(to, t0 + length);
    gain.gain.setValueAtTime(volume, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + length);
    osc.connect(gain).connect(master);
    osc.start(t0);
    osc.stop(t0 + length);
  }

  // Made here rather than loaded: little chip blips, kept quiet. The things that have a
  // recorded clip of their own (switches, the cat) skip them.
  function sound(id) {
    if (!audio || !wanted || audio.state !== 'running') return;
    if (['cat', 'ac', 'tv', 'lamp', 'lantern', 'coffee'].includes(id)) return;
    if (id.startsWith('item') || id === 'globe') {
      tone(660, 660, 0, 0.07, 'square', 0.025);
      tone(990, 990, 0.07, 0.11, 'square', 0.025);
    } else if (id === 'dev') {
      tone(440, 620, 0, 0.1, 'triangle', 0.07);
    } else {
      tone(720, 480, 0, 0.06, 'triangle', 0.07);
    }
  }

  function place(el, x, y, w, h) {
    el.style.left = (ox + x) * cssScale + 'px';
    el.style.top = (oy + y) * cssScale + 'px';
    el.style.width = w * cssScale + 'px';
    el.style.height = h * cssScale + 'px';
  }

  function resize() {
    const vw = innerWidth;
    const vh = innerHeight;
    const dpr = devicePixelRatio || 1;
    const next = vw / vh < 0.8 ? TALL : WIDE;
    const changed = next !== L;
    L = next;
    // Phones fill the width; on big screens stick to whole pixels so the art stays crisp
    scale = L.tall
      ? Math.min((vw * dpr) / L.w, (vh * dpr) / (L.h + 20))
      : Math.max(1, Math.floor(Math.min((vw * dpr) / L.w, (vh * dpr) / L.h)));
    cssScale = scale / dpr;
    canvas.width = lightmap.width = Math.ceil((vw * dpr) / scale);
    canvas.height = lightmap.height = Math.ceil((vh * dpr) / scale);
    canvas.style.width = (canvas.width * scale) / dpr + 'px';
    canvas.style.height = (canvas.height * scale) / dpr + 'px';
    ox = Math.floor((canvas.width - L.w) / 2);
    oy = L.tall ? Math.round(52 / cssScale) : Math.floor((canvas.height - L.h) / 2);
    document.documentElement.style.setProperty('--px', cssScale + 'px');
    THINGS.forEach((t) => {
      const [x, y] = at(t.group, t.x, t.y);
      place(t.el, x, y, t.w, t.h);
    });
    if (changed && dev) settleForLayout();
  }

  // --------------------------------------------------------------------------
  // 4. TIME AND LIGHT
  // --------------------------------------------------------------------------
  let skyOverride = params.get('theme') === 'dark' ? 'night' : params.get('theme') === 'light' ? 'day' : null;
  const fixedHour = params.has('hour') ? Number(params.get('hour')) : null;

  function vnHour() {
    if (fixedHour !== null) return fixedHour;
    const d = new Date(Date.now() + 7 * 3600e3);
    return d.getUTCHours() + d.getUTCMinutes() / 60;
  }

  function clockLine(text) {
    const h = vnHour();
    const hh = Math.floor(h);
    const mm = String(Math.floor((h - hh) * 60)).padStart(2, '0');
    return text.replace('{t}', `${hh % 12 || 12}:${mm}${hh < 12 ? 'am' : 'pm'}`);
  }

  // 0 at noon, 1 in the dead of night
  function darkness() {
    if (skyOverride) return skyOverride === 'night' ? 1 : 0;
    const h = vnHour();
    if (h < 5 || h >= 19.5) return 1;
    if (h < 6.5) return 1 - (h - 5) / 1.5;
    if (h >= 17.5) return (h - 17.5) / 2;
    return 0;
  }

  const isSleepTime = () => {
    const h = vnHour();
    return h >= 1 && h < 8;
  };

  const lampsSet = {};
  let acOn = null;
  let tvSet = false;

  const tvOn = () => tvSet || dev.state === 'play';

  function toggleTV() {
    tvSet = !tvSet;
    fx(tvSet ? 'tvon' : 'switch', 0.8);
    if (dev.state === 'play') return sayDev('hey! I was winning');
    sayDev(tvSet ? 'don’t spoil the ending' : 'back to work, both of us');
  }

  function lampOn(id) {
    if (id === 'tv') return tvOn();
    if (id === 'screen') return true;
    if (id in lampsSet) return lampsSet[id];
    const d = darkness();
    if (d < 0.3) return false;
    return dev.state !== 'sleep';
  }

  const isAcOn = () => (acOn === null ? darkness() < 0.5 : acOn);

  function toggleLamp(id) {
    const on = lampOn(id);
    lampsSet[id] = !on;
    fx('switch', 0.8, id === 'desk' ? 1 : 0.85);
    if (dev.state === 'sleep') return sayDev('zzz…');
    if (!on) return sayDev(id === 'desk' ? 'ah, I can see my bugs again' : 'cozy.');
    if (darkness() > 0.5) sayDev(id === 'desk' ? 'hey! I can’t see my keyboard' : 'moody. I like it.');
    else sayDev('it’s daytime anyway');
  }

  function toggleAC() {
    acOn = !isAcOn();
    fx('switch', 0.8, 1.15);
    if (dev.state === 'sleep') return sayDev(acOn ? 'mmm… cold…' : 'zzz… hot…');
    sayDev(acOn ? 'ahh. thank you.' : 'it’s 34 degrees in Saigon. please.');
  }

  function drawLight(now) {
    const d = darkness();
    const w = canvas.width;
    const h = canvas.height;
    const t = now / 1000;

    // Sunbeam through the window
    if (d < 0.7) {
      const [gx, gy] = at('window', GLASS.x, GLASS.y);
      const slant = (12.5 - vnHour()) * -9;
      const floorY = gy + (L.tall ? 240 : 212);
      const a = 0.08 * (1 - d / 0.7);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      [[0, 1], [10, 0.6]].forEach(([inset, k]) => {
        const glow = ctx.createLinearGradient(0, oy + gy, 0, oy + floorY);
        glow.addColorStop(0, `rgba(255,214,140,${a * k})`);
        glow.addColorStop(0.7, `rgba(255,214,140,${a * k * 0.7})`);
        glow.addColorStop(1, 'rgba(255,214,140,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.moveTo(ox + gx + inset, oy + gy);
        ctx.lineTo(ox + gx + GLASS.w - inset, oy + gy);
        ctx.lineTo(ox + gx + GLASS.w - inset + slant + 26, oy + floorY);
        ctx.lineTo(ox + gx + inset + slant - 26, oy + floorY);
        ctx.closePath();
        ctx.fill();
      });
      ctx.restore();
      if (!still) {
        ctx.fillStyle = `rgba(255,244,200,${0.55 * (1 - d / 0.7)})`;
        for (let i = 0; i < 12; i++) {
          const f = ((i * 37 + t * 5) % 100) / 100;
          const x = gx + 6 + ((i * 53) % 42) + slant * f + Math.sin(t / 2 + i) * 4;
          ctx.fillRect(ox + Math.round(x), oy + Math.round(gy + f * (floorY - gy)), 1, 1);
        }
      }
    }

    // Night: a lightmap multiplied over everything
    if (d > 0.01) {
      const mix = (a, b, k) => Math.round(a + (b - a) * k);
      const dusk = Math.min(1, d / 0.4);
      const deep = Math.max(0, (d - 0.4) / 0.6);
      const r = mix(mix(255, 255, dusk), 62, deep);
      const g = mix(mix(255, 196, dusk), 66, deep);
      const b = mix(mix(255, 150, dusk), 118, deep);
      lm.globalCompositeOperation = 'source-over';
      lm.fillStyle = `rgb(${r},${g},${b})`;
      lm.fillRect(0, 0, w, h);
      lm.globalCompositeOperation = 'lighter';
      LIGHTS.forEach((l) => {
        if (!lampOn(l.id)) return;
        const [x, y] = at(l.group, l.x, l.y);
        const g = lm.createRadialGradient(ox + x, oy + y, 2, ox + x, oy + y, l.r);
        g.addColorStop(0, `rgba(${l.c},0.72)`);
        g.addColorStop(0.45, `rgba(${l.c},0.3)`);
        g.addColorStop(1, `rgba(${l.c},0)`);
        lm.fillStyle = g;
        lm.fillRect(ox + x - l.r, oy + y - l.r, l.r * 2, l.r * 2);
      });
      STRING.forEach((p) => {
        const [x, y] = at('window', p[0], p[1]);
        const g = lm.createRadialGradient(ox + x, oy + y, 1, ox + x, oy + y, 18);
        g.addColorStop(0, 'rgba(255,206,140,0.3)');
        g.addColorStop(1, 'rgba(255,206,140,0)');
        lm.fillStyle = g;
        lm.fillRect(ox + x - 18, oy + y - 18, 36, 36);
      });
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      ctx.drawImage(lightmap, 0, 0);
      ctx.restore();
    }

    // Lamps still glow a bit by day
    if (d < 0.3) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      LIGHTS.forEach((l) => {
        if (l.id === 'tv' || l.id === 'screen' || !lampOn(l.id)) return;
        const [x, y] = at(l.group, l.x, l.y);
        ctx.fillStyle = `rgba(${l.c},0.1)`;
        ctx.beginPath();
        ctx.arc(ox + x, oy + y, l.r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Stars and string lights sit above the dark
    if (d > 0.5) {
      const [gx, gy] = at('window', GLASS.x, GLASS.y);
      for (let i = 0; i < 9; i++) {
        const on = still || Math.sin(t * 1.3 + i * 2.1) > -0.5;
        if (!on) continue;
        ctx.fillStyle = '#FFF6D8';
        ctx.fillRect(ox + gx + 3 + ((i * 29) % (GLASS.w - 6)), oy + gy + 3 + ((i * 17) % 30), 1, 1);
      }
    }
    if (d > 0.15) {
      STRING.forEach((p, i) => {
        const [x, y] = at('window', p[0], p[1]);
        ctx.globalAlpha = still ? 1 : 0.75 + 0.25 * Math.sin(t * 2 + i);
        ctx.fillStyle = BULB_COLORS[i];
        ctx.fillRect(ox + x - 1, oy + y - 1, 3, 3);
      });
      ctx.globalAlpha = 1;
    }

    // A small game on the TV
    if (tvOn()) {
      const [sx, sy] = at('tv', SCREEN.x, SCREEN.y);
      const px = ox + sx;
      const py = oy + sy;
      const scroll = still ? 0 : Math.floor(t * 18);
      ctx.fillStyle = '#6FB7E8';
      ctx.fillRect(px, py, SCREEN.w, SCREEN.h);
      ctx.fillStyle = '#6DBE6A';
      ctx.fillRect(px, py + SCREEN.h - 7, SCREEN.w, 7);
      ctx.fillStyle = '#FFFBEF';
      for (let i = 0; i < 3; i++) ctx.fillRect(px + (i * 19 + 40 - scroll % 60 + 60) % 50, py + 4 + i * 4, 7, 2);
      ctx.fillStyle = '#8A5A36';
      for (let i = 0; i < 2; i++) ctx.fillRect(px + (i * 26 + 48 - scroll % 50 + 50) % 50, py + SCREEN.h - 12, 4, 5);
      const hop = still ? 0 : Math.abs(Math.sin(t * 5)) * 7;
      ctx.fillStyle = '#E8647C';
      ctx.fillRect(px + 12, py + SCREEN.h - 12 - Math.round(hop), 4, 5);
    }

    // Air conditioner
    const [vx, vy] = at('ac', VENT.x, VENT.y);
    ctx.fillStyle = isAcOn() ? '#6BE08A' : '#D0705A';
    ctx.fillRect(ox + vx + 70, oy + vy - 13, 3, 2);
    if (isAcOn() && !still) {
      ctx.fillStyle = 'rgba(190,226,250,0.8)';
      for (let i = 0; i < 9; i++) {
        const f = ((t * 0.5 + i * 0.11) % 1);
        const x = vx + ((i * 23) % VENT.w) + Math.sin(f * 6 + i) * 3;
        ctx.globalAlpha = 0.8 * (1 - f);
        ctx.fillRect(ox + Math.round(x), oy + Math.round(vy + f * 34), 1, 2);
      }
      ctx.globalAlpha = 1;
    }
  }

  // --------------------------------------------------------------------------
  // 5. SPRITES AND ACTORS
  // --------------------------------------------------------------------------
  const SHEETS = {
    type: ['dev-back-desk', 120, 120],
    wave: ['dev-turn', 120, 120],
    rise: ['dev-up', 120, 156],
    stand: ['dev-stand', 120, 156],
    walk: ['dev-steps', 120, 156],
    front: ['dev-front', 120, 156],
    rear: ['dev-rear', 120, 156],
    sit: ['dev-sit', 120, 156],
    drop: ['dev-drop', 160, 156],
    back: ['dev-back', 96, 96],
    push: ['dev-push', 144, 72],
    catIdle: ['cat-idle', 56, 56],
    catFront: ['cat-front', 56, 56],
    catRear: ['cat-rear', 56, 56],
    catWalk: ['cat-walk', 56, 56],
    catLie: ['cat-lie', 56, 56],
    // stand, crouch (1-4), leap (5-6), land (7), paws down (8); the cat starts 4px in and
    // ends 43px further on, so it is drawn 4px left of the 56px cat and moved on after
    catPounce: ['cat-pounce', 112, 56]
  };
  // How far the cat's body has moved on in each pounce frame
  const POUNCE_SHIFT = [0, 1, 4, 4, 5, 16, 29, 43, 44];

  const LOAD_LINES = [
    'watering the plants…',
    'brewing the coffee…',
    'waking the cat…',
    'untangling the string lights…',
    'fixing one more bug…',
    'tidying up for guests…'
  ];
  let loaded = 0;
  let toLoad = 1;

  function loadStep() {
    loaded++;
    const pct = Math.round((loaded / toLoad) * 100);
    document.getElementById('fill').style.width = pct + '%';
    document.getElementById('walker').style.left = pct + '%';
    document.getElementById('load-line').textContent = LOAD_LINES[Math.floor((loaded / toLoad) * (LOAD_LINES.length - 1))];
  }

  function load(name, file) {
    return new Promise((done) => {
      const i = new Image();
      i.onload = () => {
        sprites[name] = i;
        loadStep();
        done();
      };
      i.onerror = () => {
        loadStep();
        done();
      };
      i.src = `assets/room/${file}.png`;
    });
  }

  function frame(name, i, x, y, flip) {
    const [, w, h] = SHEETS[name];
    const img = sprites[name];
    if (!img) return;
    x = Math.round(x);
    y = Math.round(y);
    if (flip) {
      ctx.save();
      ctx.translate(ox + x + w, oy + y);
      ctx.scale(-1, 1);
      ctx.drawImage(img, i * w, 0, w, h, 0, 0, w, h);
      ctx.restore();
    } else {
      ctx.drawImage(img, i * w, 0, w, h, ox + x, oy + y, w, h);
    }
  }

  // An actor plays one clip at a time; `done` fires when a one-shot clip ends.
  function play(a, sheet, frames, fps, loop, done) {
    a.sheet = sheet;
    a.frames = frames;
    a.fps = fps;
    a.loop = loop;
    a.done = done || null;
    a.i = 0;
    a.clock = 0;
  }

  function stepClip(a, dt) {
    if (still) return;
    a.clock += dt;
    const step = 1 / a.fps;
    while (a.clock >= step) {
      a.clock -= step;
      if (a.i < a.frames.length - 1) a.i++;
      else if (a.loop) a.i = 0;
      else if (a.done) {
        const d = a.done;
        a.done = null;
        d();
      }
    }
  }

  const seq = (from, to) => {
    const out = [];
    const s = from <= to ? 1 : -1;
    for (let i = from; i !== to + s; i += s) out.push(i);
    return out;
  };

  // --------------------------------------------------------------------------
  // 6. DEV
  // --------------------------------------------------------------------------
  // dev.x / dev.y are the top-left of a 120x156 canvas, feet at y + 146
  const dev = { state: 'code', bed: 0, bedTo: 0, x: 0, y: 0, flip: false, wait: 0, breakIn: 60, thought: 8, pokes: 0, pokedAt: 0 };

  function seat() {
    return at('desk', 66, 90);
  }

  function feetTo(spot) {
    const [x, y] = (L.tall && spot.tall) || at(spot.group, spot.x, spot.y);
    return [x - 58, y - 146];
  }

  function startCoding(sameBreak) {
    dev.state = 'code';
    dev.flip = false;
    [dev.x, dev.y] = seat();
    play(dev, 'type', seq(0, 8), 0.01, true);
    dev.burst = 1;
    dev.keyIn = 0;
    if (sameBreak !== true) dev.breakIn = 10 + Math.random() * 8;
  }

  // Real typing comes in bursts, with a stop to think now and then
  const KEY_FRAMES = [1, 2, 3, 8];

  function typeKeys(dt) {
    dev.burst -= dt;
    if (dev.burst <= 0) {
      dev.typing = !dev.typing;
      dev.burst = dev.typing ? 1 + Math.random() * 2.4 : 0.5 + Math.random() * 1.3;
      if (!dev.typing) dev.i = 0;
    }
    dev.keyIn -= dt;
    if (dev.typing && dev.keyIn <= 0 && !still) {
      dev.keyIn = 0.07 + Math.random() * 0.1;
      dev.i = KEY_FRAMES[Math.floor(Math.random() * KEY_FRAMES.length)];
      typeKey();
      fx('key' + (1 + Math.floor(Math.random() * 3)), 0.3 + Math.random() * 0.2, 0.9 + Math.random() * 0.25);
    }
  }

  function greet(text) {
    dev.state = 'greet';
    if (text) sayDev(text);
    play(dev, 'wave', seq(0, 8), 9, false, () => {
      play(dev, 'wave', [8, 6, 7, 5, 8, 6, 7, 8], 7, false, () => {
        play(dev, 'wave', seq(8, 0), 11, false, () => startCoding(true));
      });
    });
  }

  function walkTo([x, y], then) {
    dev.state = 'walk';
    dev.path = route([dev.x + 58, dev.y + 146], [x + 58, y + 146]).map(([fx, fy]) => [fx - 58, fy - 146]);
    dev.then = then;
    nextLeg();
  }

  // Walking up or down the room he shows his back or his face, not his side.
  // A short step stays side-on: turning for a blink reads as a glitch.
  function nextLeg() {
    dev.goal = dev.path.shift();
    const dx = dev.goal[0] - dev.x;
    const dy = dev.goal[1] - dev.y;
    if (Math.abs(dx) > 1) dev.flip = dx < 0;
    if (!dx && !dy) return;
    const sheet = Math.abs(dy) > 16 && Math.abs(dy) > Math.abs(dx) * 1.2 ? (dy > 0 ? 'front' : 'rear') : 'walk';
    if (dev.sheet !== sheet) play(dev, sheet, seq(0, 7), 11, true);
  }

  function standUp(then) {
    dev.state = 'up';
    moveChair(1, 0.15);
    play(dev, 'rise', seq(0, 8), 11, false, then);
  }

  function sitDown() {
    walkTo(seat(), () => {
      dev.state = 'down';
      dev.flip = false;
      moveChair(0, 0.4);
      play(dev, 'rise', seq(8, 0), 11, false, startCoding);
    });
  }

  function playGames() {
    standUp(() => walkTo(feetTo(SPOTS.game), () => {
      dev.state = 'settle';
      dev.flip = L.tall; // the TV is on his left there
      play(dev, 'sit', seq(0, 8), 11, false, () => {
        dev.state = 'play';
        dev.wait = 10 + Math.random() * 6;
        dev.lineIn = 3;
        play(dev, 'back', seq(0, 4), 6, true);
      });
    }));
  }

  function doPushUps() {
    standUp(() => walkTo(feetTo(SPOTS.mat), () => {
      dev.state = 'settle';
      dev.flip = false;
      play(dev, 'drop', seq(0, 8), 12, false, () => {
        dev.state = 'push';
        dev.wait = 9;
        dev.reps = 0;
        dev.lineIn = 1.2;
        play(dev, 'push', seq(0, 8), 9, true);
      });
    }));
  }

  function getUp(then) {
    const clip = dev.sheet === 'back' ? 'sit' : 'drop';
    dev.state = 'up';
    play(dev, clip, seq(8, 0), 12, false, then);
  }

  function visit(spot) {
    standUp(() => {
      walkTo(feetTo(spot), () => {
        dev.state = 'pause';
        dev.wait = 4;
        dev.flip = false;
        sayDev(spot.line);
        if (spot === SPOTS.coffee) fx('coffee', 0.7);
        play(dev, 'stand', [8], 1, true);
      });
    });
  }

  function nap() {
    standUp(() => walkTo(feetTo(SPOTS.bed), () => {
      dev.state = 'sleep';
      dev.bedTo = 1;
      dev.napFor = 10;
      sayDev('quick nap');
    }));
  }

  // Each break comes up once before any repeats, the fun ones first
  let breaks = [playGames, doPushUps, () => visit(SPOTS.coffee), nap, () => visit(SPOTS.window)];

  function takeBreak() {
    if (!breaks.length) {
      breaks = [playGames, doPushUps, () => visit(SPOTS.coffee), nap, () => visit(SPOTS.window)]
        .sort(() => Math.random() - 0.5);
    }
    breaks.shift()();
  }

  // Clicking his beanbag, mat or bed talks him into it
  function invite(go, line) {
    if (dev.state === 'sleep') return sayDev(MUMBLES[0]);
    if (dev.state !== 'code' || isSleepTime()) return sayDev(line);
    sayDev('good idea');
    go();
  }

  function wakeUp(line) {
    dev.state = 'pause';
    dev.wait = 1;
    dev.napFor = 0;
    dev.bedTo = 0;
    sayDev(line);
    play(dev, 'stand', [8], 1, true);
  }

  function goToBed() {
    const toBed = () => walkTo(feetTo(SPOTS.bed), () => {
      dev.state = 'sleep';
      dev.bedTo = 1;
      sayDev('goodnight');
    });
    if (dev.state === 'code') standUp(toBed);
    else toBed();
  }

  function pokeDev() {
    const n = performance.now();
    dev.pokes = n - dev.pokedAt < 9000 ? dev.pokes + 1 : 0;
    dev.pokedAt = n;
    if (dev.state === 'sleep') return sayDev(MUMBLES[dev.pokes % MUMBLES.length]);
    if (dev.state === 'play') return sayDev('one sec, boss fight');
    if (dev.state === 'push') return sayDev('can’t… talk… ' + (dev.reps + 1));
    const line = POKES[Math.min(dev.pokes, POKES.length - 1)];
    if (dev.state === 'code') greet(line);
    else sayDev(line);
  }

  function updateDev(dt) {
    if (dev.state === 'walk') {
      const dx = dev.goal[0] - dev.x;
      const dy = dev.goal[1] - dev.y;
      const left = Math.hypot(dx, dy);
      const step = 40 * dt;
      if (left <= step || still) {
        dev.x = dev.goal[0];
        dev.y = dev.goal[1];
        if (dev.path.length) {
          nextLeg();
        } else {
          const then = dev.then;
          dev.then = null;
          then();
        }
      } else {
        dev.x += (dx / left) * step;
        dev.y += (dy / left) * step;
      }
    }
    if (dev.state === 'code') {
      typeKeys(dt);
      dev.breakIn -= dt;
      dev.thought -= dt;
      if (dev.thought <= 0) {
        dev.thought = 16 + Math.random() * 14;
        if (sayEl.hidden) sayDev(CODING_THOUGHTS[Math.floor(Math.random() * CODING_THOUGHTS.length)]);
      }
      if (isSleepTime()) goToBed();
      else if (dev.breakIn <= 0) takeBreak();
    }
    if (dev.state === 'play') {
      dev.wait -= dt;
      dev.lineIn -= dt;
      if (dev.lineIn <= 0) {
        dev.lineIn = 6 + Math.random() * 3;
        const line = Math.floor(Math.random() * GAME_LINES.length);
        sayDev(GAME_LINES[line]);
        fx(line === 1 || line === 2 ? 'lose' : 'win', 0.45);
      }
      if (dev.wait <= 0) getUp(sitDown);
    }
    if (dev.state === 'push') {
      dev.wait -= dt;
      dev.lineIn -= dt;
      if (dev.lineIn <= 0) {
        dev.lineIn = 1;
        dev.reps++;
        sayDev(dev.wait > 1 ? String(dev.reps) : 'ok, that’s enough');
      }
      if (dev.wait <= 0) getUp(sitDown);
    }
    if (dev.state === 'pause') {
      dev.wait -= dt;
      if (dev.wait <= 0) sitDown();
    }
    if (dev.state === 'sleep') {
      if (dev.napFor > 0) {
        dev.napFor -= dt;
        if (dev.napFor <= 0 && !isSleepTime()) wakeUp('ok, back to it');
      } else if (!isSleepTime()) {
        wakeUp('morning…');
      }
    }
    if (dev.state !== 'sleep') stepClip(dev, dt);
    const fade = still ? 1 : dt / 0.5;
    dev.bed = dev.bedTo > dev.bed ? Math.min(1, dev.bed + fade) : Math.max(0, dev.bed - fade);
  }

  // Jump straight to a sensible place, used at load and when the layout flips
  function settleForLayout() {
    if (isSleepTime()) {
      [dev.x, dev.y] = feetTo(SPOTS.bed);
      dev.state = 'sleep';
      dev.bed = dev.bedTo = 1;
      play(dev, 'stand', [8], 1, true);
      chair.t = chair.to = 1;
    } else {
      chair.t = chair.to = 0;
      dev.bed = dev.bedTo = 0;
      startCoding();
    }
    settleCat();
  }

  function drawDev() {
    if (dev.bed >= 1) return; // he's in the bed sprite
    ctx.globalAlpha = 1 - dev.bed;
    drawDevFrame();
    ctx.globalAlpha = 1;
  }

  function drawDevFrame() {
    const n = dev.sheet;
    if (n === 'push') return frame(n, dev.frames[dev.i], dev.x + 6, dev.y + 76, false);
    if (n === 'back') {
      const [x, y] = at('bag', 395, 158);
      return frame(n, dev.frames[dev.i], x, y, dev.flip);
    }
    const y = SHEETS[n][2] === 120 ? dev.y + 31 : dev.y;
    frame(n, dev.frames[dev.i], dev.x, y, dev.flip && n !== 'front' && n !== 'rear');
  }

  function catInBed() {
    const [x, y] = catBedSpot();
    return Math.abs(cat.x - x) < 2 && Math.abs(cat.y - y) < 2;
  }

  function devFeet() {
    if (dev.sheet === 'back') return at('bag', 0, 263)[1];
    return dev.y + 146;
  }

  function sprite(name, x, y) {
    const [sx, sy, w, h] = KIT[name];
    ctx.drawImage(sprites.kit, sx, sy, w, h, ox + x, oy + y, w, h);
  }

  function drawPiece(r) {
    const [x, y] = at(r.group, r.x, r.y);
    let name = r.sprite;
    if (name === 'console' && dev.state === 'play') name = 'consolePlain';
    sprite(name, x, y);
    if (name === 'monitor') drawTerm(ox + x, oy + y);
    if (name === 'bed' && dev.bed > 0) {
      ctx.globalAlpha = dev.bed;
      sprite('bedSleep', x, y);
      ctx.globalAlpha = 1;
    }
  }

  // Everything that stands on the floor, drawn back to front
  function drawDepth() {
    const layers = [
      { base: at('desk', 0, 240 + chairOut()[1] * chair.t)[1], draw: drawChair },
      { base: devFeet(), draw: drawDev },
      { base: catInBed() ? at('catbed', 0, 260)[1] : cat.y + 51, draw: drawCat },
      { base: at('desk', 0, 226.35)[1], draw: drawPointer }
    ];
    ROOM.forEach((r) => {
      if (r.base) layers.push({ base: at(r.group, 0, r.base)[1], draw: () => drawPiece(r) });
    });
    layers.sort((a, b) => a.base - b.base).forEach((l) => l.draw());
  }

  function devBox() {
    if (dev.state === 'sleep') {
      const [x, y] = at('bed', 262, 146);
      return [x, y, 60, 40];
    }
    if (dev.sheet === 'push') return [dev.x, dev.y + 80, 130, 62];
    if (dev.sheet === 'back') {
      const [x, y] = at('bag', 419, 164);
      return [x, y, 52, 84];
    }
    return [dev.x + 24, dev.y + (SHEETS[dev.sheet][2] === 120 ? 37 : 10), 60, 100];
  }

  // --------------------------------------------------------------------------
  // 7. THE CAT
  // --------------------------------------------------------------------------
  // cat.x / cat.y are the top-left of a 56x56 canvas, feet at y + 51
  const cat = { state: 'idle', x: 0, y: 0, flip: false, wait: 6, pets: 0, petAt: 0, energy: 1, hop: 0, wig: 0, pinned: null, followAt: 0 };

  function settleCat() {
    if (darkness() > 0.7) {
      [cat.x, cat.y] = catBedSpot();
      cat.state = 'asleep';
      play(cat, 'catLie', [8], 1, true);
      return;
    }
    const spots = L.tall ? CAT_SPOTS.tall : CAT_SPOTS.wide;
    [cat.x, cat.y] = catFeet(spots[0]);
    catSit();
  }

  const catFeet = ([x, y]) => [x - 28, y - 51];

  function catSit() {
    cat.state = 'idle';
    cat.wait = 7 + Math.random() * 10;
    play(cat, 'catIdle', seq(0, 8), 6, true);
  }

  function catWalkTo(goal, speed) {
    cat.state = 'rise';
    play(cat, 'catWalk', seq(0, 4), 12, false, () => {
      cat.state = 'walk';
      cat.path = catRoute(goal);
      cat.speed = speed || 26;
      catLeg();
    });
  }

  function catRoute(goal) {
    const legs = L.tall ? route([cat.x + 28, cat.y + 51], [goal[0] + 28, goal[1] + 51]) : [[goal[0] + 28, goal[1] + 51]];
    return legs.map(catFeet);
  }

  // Walking up or down the room it shows its back or its face, not its side
  function catLeg() {
    cat.goal = cat.path.shift();
    const dx = cat.goal[0] - cat.x;
    const dy = cat.goal[1] - cat.y;
    if (Math.abs(dy) > Math.abs(dx) * 1.2) {
      cat.flip = false;
      play(cat, dy > 0 ? 'catFront' : 'catRear', seq(0, 7), 9, true);
    } else {
      if (Math.abs(dx) > 1) cat.flip = dx < 0;
      play(cat, 'catWalk', seq(5, 8), 9, true);
    }
  }

  function catBedSpot() {
    const [x, y] = at('catbed', 500, 254);
    return catFeet([x, y]);
  }

  function catLieDown() {
    cat.state = 'lie';
    play(cat, 'catLie', seq(0, 8), 7, false, () => { cat.state = 'asleep'; });
  }

  function roam() {
    if (darkness() > 0.7) return catWalkTo(catBedSpot());
    const spots = L.tall ? CAT_SPOTS.tall : CAT_SPOTS.wide;
    if (Math.random() < 0.4) fx('meow', 0.25, 0.9 + Math.random() * 0.2);
    catWalkTo(catFeet(spots[Math.floor(Math.random() * spots.length)]));
  }

  function pokeCat() {
    const n = performance.now();
    cat.pets = n - cat.petAt < 8000 ? cat.pets + 1 : 0;
    cat.petAt = n;
    if (!laserUsed && !cat.hinted && dev.state !== 'sleep') {
      cat.hinted = true;
      setTimeout(() => { if (!laserUsed) sayDev('psst. my laser pointer’s on the desk'); }, 1600);
    }
    addHeart(cat.x + 28 + (cat.flip ? -6 : 6), cat.y + 8);
    purrUntil = n + 3200;
    fx('meow', cat.state === 'asleep' ? 0.35 : 0.7, 0.95 + Math.random() * 0.2);
    if (cat.state === 'asleep') {
      sayAt('prrr… zzz', cat);
      return;
    }
    if (cat.pets >= 4 && (cat.state === 'idle' || cat.state === 'walk')) {
      cat.pets = 0;
      sayAt('hmph.', cat);
      purrUntil = 0;
      fx('meow', 0.8, 1.3);
      const spots = L.tall ? CAT_SPOTS.tall : CAT_SPOTS.wide;
      const far = spots.reduce((a, b) => (Math.abs(b[0] - 28 - cat.x) > Math.abs(a[0] - 28 - cat.x) ? b : a));
      if (cat.state === 'idle') catWalkTo(catFeet(far), 60);
      else {
        cat.path = catRoute(catFeet(far));
        cat.speed = 60;
        catLeg();
      }
      return;
    }
    sayAt(CAT_LINES[cat.pets % CAT_LINES.length], cat);
  }

  function updateCat(dt) {
    // The red dot beats everything, except sleep: asleep, he only wakes for a dot close by
    if (laser.held && laser.on && cat.state !== 'toy') {
      const dozing = cat.state === 'asleep' || cat.state === 'lie';
      if (!dozing || Math.hypot(laser.x - cat.x - 28, laser.y - cat.y - 40) < 60) startToy(dozing);
    }
    if (cat.state === 'toy') {
      if (!laser.held || performance.now() - laser.seenAt > 1500) endToy();
      else {
        updateToy(dt);
        stepClip(cat, dt);
        return;
      }
    }
    cat.energy = Math.min(1, cat.energy + dt * 0.02);
    if (cat.state === 'idle') {
      cat.wait -= dt;
      const now = performance.now();
      // His favourite visitor: he comes and sits by your pointer when it rests on the floor
      if (isFriend() && !laser.held && aim.floor && now - aim.at > 1500 && now - cat.followAt > 15000 &&
        Math.hypot(aim.x - cat.x - 28, aim.y - cat.y - 51) > 30) {
        cat.followAt = now;
        sayAt('mrrp', cat);
        const side = aim.x > cat.x + 28 ? -16 : 16;
        catWalkTo(catFeet([floorX(aim.x + side), clamp(aim.y, floorTop(), floorBottom())]), 50);
      } else if (cat.wait <= 0) roam();
    }
    if (cat.state === 'walk') {
      const dx = cat.goal[0] - cat.x;
      const dy = cat.goal[1] - cat.y;
      const left = Math.hypot(dx, dy);
      const step = cat.speed * dt;
      if (left <= step || still) {
        cat.x = cat.goal[0];
        cat.y = cat.goal[1];
        if (cat.path.length) {
          catLeg();
          return stepClip(cat, dt);
        }
        cat.state = 'settle';
        const bedded = darkness() > 0.7;
        play(cat, 'catWalk', seq(4, 0), 12, false, bedded ? catLieDown : catSit);
      } else {
        cat.x += (dx / left) * step;
        cat.y += (dy / left) * step;
      }
    }
    if (cat.state === 'asleep' && darkness() < 0.3) {
      cat.state = 'settle';
      play(cat, 'catLie', seq(8, 0), 9, false, catSit);
    }
    if (cat.state !== 'asleep') stepClip(cat, dt);
  }

  function drawCat() {
    if (cat.sheet === 'catPounce') {
      return frame('catPounce', cat.frames[cat.i], cat.x + (cat.flip ? -52 : -4) + cat.wig, cat.y + cat.hop, cat.flip);
    }
    frame(cat.sheet, cat.frames[cat.i], cat.x, cat.y, cat.flip);
  }

  // --------------------------------------------------------------------------
  // 8. BUBBLES, HEARTS, DIALOGUE
  // --------------------------------------------------------------------------
  let sayTimer = 0;
  let sayFollow = null;

  function sayDev(text) {
    sayAt(text, dev);
  }

  function sayAt(text, who) {
    sayEl.textContent = text;
    sayEl.hidden = false;
    // While someone talks, the black hover labels stay out of the way of the bubble
    hot.classList.add('quiet');
    sayFollow = who;
    placeSay();
    clearTimeout(sayTimer);
    sayTimer = setTimeout(() => {
      sayEl.hidden = true;
      hot.classList.remove('quiet');
    }, 2600 + text.length * 40);
  }

  function placeSay() {
    if (!sayFollow || sayEl.hidden) return;
    const b = sayFollow === dev ? devBox() : [cat.x + 10, cat.y + 4, 36, 46];
    const half = sayEl.offsetWidth / 2 + 6;
    const left = (ox + b[0] + b[2] / 2) * cssScale;
    sayEl.style.left = Math.max(half, Math.min(innerWidth - half, left)) + 'px';
    sayEl.style.top = Math.max(60 + sayEl.offsetHeight, (oy + b[1]) * cssScale - 10) + 'px';
  }

  const hearts = [];

  function addHeart(x, y) {
    if (!still) hearts.push({ x, y, t: 0 });
  }

  function drawHearts(dt) {
    ctx.fillStyle = '#E8647C';
    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.t += dt;
      if (h.t > 1.1) {
        hearts.splice(i, 1);
        continue;
      }
      const x = Math.round(ox + h.x + Math.sin(h.t * 6) * 2);
      const y = Math.round(oy + h.y - h.t * 22);
      ctx.fillRect(x - 3, y, 3, 2);
      ctx.fillRect(x + 1, y, 3, 2);
      ctx.fillRect(x - 3, y + 2, 7, 2);
      ctx.fillRect(x - 2, y + 4, 5, 1);
      ctx.fillRect(x - 1, y + 5, 3, 1);
      ctx.fillRect(x, y + 6, 1, 1);
    }
  }

  function drawZs(now) {
    if (dev.state !== 'sleep' || still) return;
    const [x, y] = at('bed', 276, 138);
    ctx.fillStyle = 'rgba(255,251,239,0.9)';
    for (let i = 0; i < 2; i++) {
      const f = ((now / 2400 + i / 2) % 1);
      const zx = ox + x + Math.round(f * 12);
      const zy = oy + y - Math.round(f * 22);
      ctx.fillRect(zx, zy, 5, 1);
      ctx.fillRect(zx + 2, zy + 2, 1, 1);
      ctx.fillRect(zx + 1, zy + 3, 1, 1);
      ctx.fillRect(zx + 3, zy + 1, 1, 1);
      ctx.fillRect(zx, zy + 4, 5, 1);
    }
  }

  function openCard(i) {
    const it = ITEMS[i];
    intro.hidden = true;
    card.hidden = false;
    box.hidden = false;
    closeBtn.hidden = false;
    card.querySelector('.kind').textContent = it.kind;
    card.querySelector('.h2').textContent = it.name;
    card.querySelector('.desc').textContent = it.desc;
    card.querySelector('.dest').textContent = it.dest;
    const open = card.querySelector('.open');
    open.hidden = !it.href;
    if (it.href) {
      open.href = it.href;
      open.textContent = `${it.cta} ↗`;
    }
    if (dev.state === 'sleep') sayDev('zzz… ' + it.name.toLowerCase() + '…');
    else sayDev(it.say);
  }

  function closeBox() {
    box.hidden = true;
  }

  closeBtn.addEventListener('click', closeBox);
  // A tap anywhere outside an open card closes it (a shelf item tapped reopens its own)
  document.addEventListener('pointerdown', (e) => {
    if (box.hidden || closeBtn.hidden || box.contains(e.target) || e.target.closest('.bar')) return;
    closeBox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (laser.held) dropLaser();
    else if (!closeBtn.hidden) closeBox();
  });

  function syncSky() {
    const night = darkness() > 0.5;
    skyBtn.setAttribute('aria-pressed', String(night));
    skyBtn.setAttribute('aria-label', night ? 'Switch to day' : 'Switch to night');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = night ? '#1C2038' : '#EBE3CB';
  }

  skyBtn.addEventListener('click', () => {
    skyOverride = darkness() > 0.5 ? 'day' : 'night';
    syncSky();
  });

  function syncNow() {
    const doing = {
      sleep: 'asleep — shh',
      walk: 'up and about',
      pause: 'taking a break',
      settle: 'taking a break',
      play: 'playing games, shh',
      push: 'push-ups, allegedly',
      up: 'up and about',
      down: 'back to the desk'
    }[dev.state] || 'coding';
    nowEl.textContent = clockLine(`{t} in Saigon, now: ${doing}`);
  }

  // --------------------------------------------------------------------------
  // 9. THE TERMINAL
  // --------------------------------------------------------------------------
  // A coding agent runs on the monitor. His key presses fill its prompt; when he stops
  // for a breath it's sent, and the agent thinks, reads, edits and runs the tests. It keeps
  // going while he's away, all night if it has to. Words are little blocks of colour.
  const TERM = { x: 3, y: 6, w: 74, h: 47 }; // the glass inside the monitor sprite
  const INK = {
    bg: '#17161F', bar: '#25242F', me: '#F2EEE2', fg: '#C9C5B9', dim: '#6F6C80', edge: '#45434F',
    star: '#E2875B', ok: '#6CCB7C', add: '#7BD88F', addBg: '#1D3527', del: '#E8747C', delBg: '#38202A'
  };
  // The spinner: a dot that grows into a star and back
  const STAR = [
    [[1, 1]],
    [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
    [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]],
    [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]]
  ];
  const SPIN = [0, 1, 2, 3, 2, 1];
  const TEXT = 62; // widest prompt, in pixels
  const SCREEN_LINES = {
    busy: ['shh, it’s thinking', 'it’s fixing my bugs. I wrote them.', 'reading its diff… looks fine?', 'it writes the tests. I write the bugs.'],
    idle: ['my turn to type', 'what should we build next?']
  };
  const rnd = (n) => Math.floor(Math.random() * n);
  const term = { lines: [], input: [], typed: 0, goal: 30, working: false, thinking: false, steps: [], wait: 0, idle: 0, clock: 0 };

  function words(c, total) {
    const out = [];
    let used = 0;
    while (total - used >= 2) {
      const w = Math.min(2 + rnd(6), total - used);
      out.push({ c, w });
      used += w + 1;
    }
    return out;
  }

  const LINES = {
    user: (n) => ({ bg: INK.bar, items: [{ g: 'gt', c: INK.dim }].concat(words(INK.me, n)) }),
    text: () => ({ items: [{ g: 'dot', c: INK.me }].concat(words(INK.fg, 24 + rnd(38))) }),
    tool: () => ({ items: [{ g: 'dot', c: INK.ok }, { c: INK.me, w: 6 + rnd(6) }].concat(words(INK.dim, 12 + rnd(26))) }),
    out: () => ({ indent: 2, items: [{ g: 'el', c: INK.edge }].concat(words(INK.dim, 14 + rnd(30))) }),
    add: () => ({ bg: INK.addBg, indent: 4, items: [{ c: INK.dim, w: 3 }].concat(words(INK.add, 12 + rnd(40))) }),
    del: () => ({ bg: INK.delBg, indent: 4, items: [{ c: INK.dim, w: 3 }].concat(words(INK.del, 12 + rnd(34))) }),
    pass: () => ({ indent: 2, items: [{ g: 'el', c: INK.edge }, { c: INK.ok, w: 5 }, { c: INK.ok, w: 7 }].concat(words(INK.dim, 10 + rnd(16))) })
  };

  // One turn of the agent: think, then a few reads and edits, then the tests
  function plan() {
    const s = [['think', 1 + Math.random() * 2], ['line', 'text']];
    for (let n = 2 + rnd(3); n > 0; n--) {
      const r = Math.random();
      if (r < 0.4) s.push(['line', 'tool'], ['think', 0.5], ['line', 'out']);
      else if (r < 0.8) {
        s.push(['line', 'tool']);
        for (let k = 2 + rnd(3); k > 0; k--) s.push(['line', Math.random() < 0.65 ? 'add' : 'del']);
      } else s.push(['line', 'text']);
      s.push(['think', 0.8 + Math.random() * 1.8]);
    }
    s.push(['line', 'tool'], ['think', 1.5], ['line', 'pass'], ['line', 'text']);
    return s;
  }

  function pushLine(l) {
    term.lines.push(l);
    if (term.lines.length > 16) term.lines.shift();
  }

  function bootTerm() {
    term.input = words(INK.me, TEXT);
    ['user', 'text', 'tool', 'out', 'tool', 'add', 'add', 'del', 'add', 'tool', 'pass', 'text']
      .forEach((k) => pushLine(k === 'user' ? LINES.user(40) : LINES[k]()));
  }

  function submit() {
    pushLine(LINES.user(term.typed));
    term.typed = 0;
    term.goal = 18 + rnd(40);
    term.input = words(INK.me, TEXT);
    term.steps = plan();
    term.working = true;
    term.wait = 0.4;
  }

  // One key press from him at the desk
  function typeKey() {
    if (!term.working) term.typed = Math.min(TEXT, term.typed + 1 + rnd(2));
  }

  function stepTerm(dt) {
    term.clock += dt;
    if (still) return;
    if (term.working) {
      term.wait -= dt;
      while (term.wait <= 0 && term.working) {
        const s = term.steps.shift();
        if (!s) {
          term.working = false;
          term.thinking = false;
          term.idle = 0;
        } else if (s[0] === 'think') {
          term.thinking = true;
          term.wait += s[1];
        } else {
          term.thinking = false;
          pushLine(LINES[s[1]]());
          term.wait += 0.2 + Math.random() * 0.4;
        }
      }
      return;
    }
    term.idle += dt;
    if (dev.state === 'code') {
      if (!dev.typing && term.typed >= term.goal) submit();
    } else if (term.idle > (dev.state === 'sleep' ? 14 : 5)) {
      // Away from the desk it picks up the next thing in the queue by itself
      term.typed = term.goal;
      submit();
    }
  }

  function termLine(l, px, py) {
    if (l.bg) {
      ctx.fillStyle = l.bg;
      ctx.fillRect(px, py, TERM.w, 4);
    }
    const end = px + TERM.w - 2;
    let x = px + 2 + (l.indent || 0);
    for (const it of l.items) {
      if (x >= end) break;
      ctx.fillStyle = it.c;
      if (it.g === 'gt') {
        ctx.fillRect(x, py, 1, 1);
        ctx.fillRect(x + 1, py + 1, 1, 1);
        ctx.fillRect(x, py + 2, 1, 1);
        x += 3;
      } else if (it.g === 'dot') {
        ctx.fillRect(x, py + 1, 2, 2);
        x += 4;
      } else if (it.g === 'el') {
        ctx.fillRect(x, py, 1, 2);
        ctx.fillRect(x + 1, py + 1, 2, 1);
        x += 4;
      } else {
        ctx.fillRect(x, py + 1, Math.min(it.w, end - x), 2);
        x += it.w + 1;
      }
    }
  }

  // mx, my: the monitor sprite's top-left on the canvas
  function drawTerm(mx, my) {
    const px = mx + TERM.x;
    const py = my + TERM.y;
    ctx.save();
    ctx.beginPath();
    ctx.rect(px, py, TERM.w, TERM.h);
    ctx.clip();
    ctx.fillStyle = INK.bg;
    ctx.fillRect(px, py, TERM.w, TERM.h);

    // The prompt box along the bottom, with what he has typed so far
    const by = py + TERM.h - 9;
    ctx.fillStyle = INK.edge;
    ctx.fillRect(px + 2, by, TERM.w - 4, 1);
    ctx.fillRect(px + 2, by + 7, TERM.w - 4, 1);
    ctx.fillRect(px + 1, by + 1, 1, 6);
    ctx.fillRect(px + TERM.w - 2, by + 1, 1, 6);
    termLine({ items: [{ g: 'gt', c: INK.dim }] }, px + 2, by + 2);
    const start = px + 8;
    const end = start + term.typed;
    ctx.fillStyle = INK.me;
    for (let i = 0, x = start; i < term.input.length && x < end; x += term.input[i].w + 1, i++) {
      ctx.fillRect(x, by + 3, Math.min(term.input[i].w, end - x), 2);
    }
    if (!term.working && (still || term.clock % 1.1 < 0.6)) ctx.fillRect(end + 1, by + 2, 2, 4);

    // The spinner while it works
    let rows = by - 1 - py;
    if (term.working) {
      const sy = by - 5;
      ctx.fillStyle = INK.star;
      STAR[SPIN[Math.floor(term.clock * (term.thinking ? 8 : 4)) % SPIN.length]]
        .forEach(([a, b]) => ctx.fillRect(px + 2 + a, sy + b, 1, 1));
      ctx.fillRect(px + 7, sy + 1, 14, 2);
      ctx.fillStyle = INK.dim;
      ctx.fillRect(px + 23, sy + 1, 4, 2);
      ctx.fillRect(px + 28, sy + 1, 9, 2);
      rows -= 5;
    }

    // The log, newest at the bottom
    const shown = term.lines.slice(-Math.floor((rows - 1) / 4));
    shown.forEach((l, i) => termLine(l, px, py + rows - 1 - (shown.length - i) * 4));
    ctx.restore();
  }

  function peekScreen() {
    if (dev.state === 'sleep') return sayDev('zzz… ship it…');
    const lines = term.working ? SCREEN_LINES.busy : SCREEN_LINES.idle;
    sayDev(lines[rnd(lines.length)]);
  }

  // --------------------------------------------------------------------------
  // 10. THE LASER POINTER
  // --------------------------------------------------------------------------
  // It lies on the desk. Pick it up and a red dot follows your mouse, or your finger while
  // it's down. The cat stalks it, crouches, wiggles and pounces: hold still and he gets it,
  // flick away and he misses. Catches are kept per visitor, and he warms up to you.
  const POINTER = { x: 151, y: 161 }; // on the desk, in the wide room
  const laser = { held: false, on: false, x: 0, y: 0, seenAt: 0, movedAt: 0, devFor: 0, devAt: 0 };
  const aim = { x: 0, y: 0, at: 0, floor: false }; // where the visitor's pointer rests, laser or not
  const gameEl = document.getElementById('game');
  const toyBtn = document.getElementById('toy');
  const CATCH_LINES = ['mrrp!', '!!', 'mrow', 'prrp'];
  const DOT_ON_DEV = {
    code: 'is that a laser? I’m on a deadline',
    sleep: 'mm… turn off… the sun…',
    play: 'you’re blocking the boss!',
    push: 'don’t… distract… me…'
  };
  let catches = 0;
  let laserUsed = false;
  try {
    catches = Number(localStorage.getItem('room-catches')) || 0;
    laserUsed = localStorage.getItem('room-laser') === '1';
  } catch (e) { /* private window */ }

  function remember(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private window */ }
  }

  const isFriend = () => catches >= 10;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  // Where the cat's feet can go: the open floor in front of the furniture
  const floorTop = () => (L.tall ? 300 : 236);
  const floorBottom = () => Math.max(floorTop() + 20, Math.min(canvas.height - oy - 4, L.h + 40));
  const floorX = (x) => clamp(x, 14, L.w - 14);

  function syncToy() {
    toyBtn.textContent = catches ? `caught ${catches} · put it down` : 'point at the floor · put it down';
  }

  function pickLaser() {
    laser.held = true;
    laser.on = false;
    gameEl.classList.add('lasering');
    toyBtn.hidden = false;
    syncToy();
    fx('switch', 0.5, 1.6);
    if (!laserUsed) {
      laserUsed = true;
      remember('room-laser', '1');
    }
    if (dev.state !== 'sleep') sayDev(catches ? 'he’s been waiting for this' : 'careful. he gets intense.');
  }

  function dropLaser() {
    laser.held = false;
    laser.on = false;
    gameEl.classList.remove('lasering');
    toyBtn.hidden = true;
    fx('switch', 0.4, 1.4);
  }

  function onAim(e) {
    const x = e.clientX / cssScale - ox;
    const y = e.clientY / cssScale - oy;
    const open = e.target === canvas || e.target === hot;
    if (Math.hypot(x - aim.x, y - aim.y) > 3) aim.at = performance.now();
    aim.x = x;
    aim.y = y;
    aim.floor = open && y > L.wall + 3;
    if (!laser.held) return;
    if (!open || (e.pointerType !== 'mouse' && e.type === 'pointermove' && !e.buttons)) {
      laser.on = false;
      return;
    }
    if (Math.hypot(x - laser.x, y - laser.y) > 1.5) laser.movedAt = performance.now();
    laser.x = x;
    laser.y = y;
    laser.on = true;
  }

  gameEl.addEventListener('pointermove', onAim);
  gameEl.addEventListener('pointerdown', onAim);
  gameEl.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') laser.on = false; });
  gameEl.addEventListener('pointercancel', () => { laser.on = false; });
  gameEl.addEventListener('pointerleave', () => {
    laser.on = false;
    aim.floor = false;
  });
  toyBtn.addEventListener('click', dropLaser);

  function updateLaser(dt) {
    if (!laser.held || !laser.on) {
      laser.devFor = 0;
      return;
    }
    const now = performance.now();
    laser.seenAt = now;
    // Under his paws the dot is gone, until you slide it out. A dot he has caught is dead to
    // him until it moves again, so holding still only wins once.
    if (cat.pinned && Math.hypot(laser.x - cat.pinned[0], laser.y - cat.pinned[1]) > 12) cat.pinned = null;
    if (cat.spent && Math.hypot(laser.x - cat.spent[0], laser.y - cat.spent[1]) > 20) cat.spent = null;
    // A red dot on him gets noticed
    const b = devBox();
    const onDev = laser.x > b[0] && laser.x < b[0] + b[2] && laser.y > b[1] && laser.y < b[1] + b[3];
    laser.devFor = onDev ? laser.devFor + dt : 0;
    if (laser.devFor > 0.7 && now - laser.devAt > 8000) {
      laser.devAt = now;
      sayDev(DOT_ON_DEV[dev.state] || 'hey! the floor, not me');
    }
  }

  function drawDot() {
    if (!laser.held || !laser.on || cat.pinned) return;
    const x = Math.round(ox + laser.x);
    const y = Math.round(oy + laser.y);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = 'rgba(255,40,40,0.28)';
    ctx.beginPath();
    ctx.arc(x + 0.5, y + 0.5, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#FF3838';
    ctx.fillRect(x - 1, y - 1, 3, 3);
    ctx.fillStyle = '#FFD2D2';
    ctx.fillRect(x, y, 1, 1);
  }

  // The pointer itself, lying on the desk, with a glint until someone finds it
  function drawPointer() {
    if (laser.held) return;
    const [x, y] = at('desk', POINTER.x, POINTER.y);
    const px = ox + x;
    const py = oy + y;
    ctx.fillStyle = '#3B3A44';
    ctx.fillRect(px, py, 8, 2);
    ctx.fillStyle = '#7A7888';
    ctx.fillRect(px + 1, py, 5, 1);
    ctx.fillStyle = '#E2343C';
    ctx.fillRect(px + 7, py, 1, 1);
    if (!laserUsed && !still && (performance.now() / 1000) % 3 < 0.3) {
      ctx.fillStyle = '#FFFBEF';
      ctx.fillRect(px + 3, py - 4, 1, 3);
      ctx.fillRect(px + 2, py - 3, 3, 1);
    }
  }

  // Walk the cat toward a floor point; in the tall room it goes round by the aisle.
  // Returns true on arrival.
  function catStep(goal, speed, dt, creep) {
    const feet = [cat.x + 28, cat.y + 51];
    let to = goal;
    if (L.tall) to = route(feet, goal).find((p) => Math.hypot(p[0] - feet[0], p[1] - feet[1]) > 2) || goal;
    const dx = to[0] - feet[0];
    const dy = to[1] - feet[1];
    const left = Math.hypot(dx, dy);
    if (left > 0.5) {
      const step = Math.min(left, speed * dt);
      cat.x += (dx / left) * step;
      cat.y += (dy / left) * step;
    }
    let kind;
    if (Math.abs(dy) > Math.abs(dx) * 1.2 && left > 6) kind = dy > 0 ? 'catFront' : 'catRear';
    else {
      kind = creep ? 'creep' : 'catWalk';
      if (Math.abs(dx) > 0.5) cat.flip = dx < 0;
    }
    if (cat.kind !== kind) {
      cat.kind = kind;
      if (kind === 'creep') play(cat, 'catPounce', [1, 2, 3, 4, 3, 2], 7, true);
      else if (kind === 'catWalk') play(cat, 'catWalk', seq(5, 8), 13, true);
      else {
        cat.flip = false;
        play(cat, kind, seq(0, 7), 11, true);
      }
    }
    return Math.hypot(goal[0] - cat.x - 28, goal[1] - cat.y - 51) < 2;
  }

  function catAlert(t) {
    cat.toy = 'watch';
    cat.t = t;
    cat.kind = '';
    play(cat, 'catWalk', [5], 1, true);
  }

  function startToy(dozing) {
    cat.state = 'toy';
    cat.hop = 0;
    cat.wig = 0;
    catAlert(dozing ? 0.9 : 0.25);
    if (dozing) sayAt('mrrp?', cat);
  }

  function endToy() {
    if (['leap', 'pin', 'miss'].includes(cat.toy)) landed();
    const lying = ['tired', 'flop', 'getup'].includes(cat.toy);
    cat.pinned = null;
    cat.spent = null;
    cat.hop = 0;
    cat.wig = 0;
    cat.toy = '';
    cat.state = 'settle';
    if (lying) play(cat, 'catLie', seq(8, 0), 9, false, catSit);
    else play(cat, 'catWalk', seq(4, 0), 12, false, catSit);
  }

  // After a pounce the cat has moved on 43px inside its sheet; move the cat to match
  function landed() {
    cat.x = floorX(cat.x + 28 + (cat.flip ? -43 : 43)) - 28;
    cat.hop = 0;
  }

  // From a crouch, spring at a point: the leap lands the front paws 60px ahead,
  // nudged by up to 48px shorter or 28px longer to land on target
  function leap(target, arc) {
    const s = cat.flip ? -1 : 1;
    const feet = [cat.x + 28, cat.y + 51];
    cat.toy = 'leap';
    cat.jump = {
      t: 0,
      sx: cat.x,
      sy: cat.y,
      cx: s * clamp(s * (target[0] - feet[0]) - 60, -48, 28),
      cy: clamp(target[1] - feet[1], -12, 12),
      arc
    };
    cat.energy -= 0.13;
    play(cat, 'catPounce', [5, 6, 7, 8], 9.5, false);
    tone(260, 720, 0, 0.12, 'triangle', 0.05);
  }

  function chatter() {
    for (let i = 0; i < 4; i++) tone(1400, 1700, i * 0.09, 0.05, 'square', 0.015);
  }

  function caught() {
    cat.toy = 'pin';
    cat.t = 1.1;
    cat.pinned = [laser.x, laser.y];
    cat.spent = cat.pinned;
    catches++;
    remember('room-catches', catches);
    syncToy();
    addHeart(cat.x + 28 + (cat.flip ? -50 : 50), cat.y + 26);
    fx('meow', 0.7, 1.25);
    purrUntil = performance.now() + 2500;
    const awake = dev.state !== 'sleep';
    if (catches === 1) {
      sayAt('!!', cat);
      if (awake) setTimeout(() => sayDev('nice. now he’ll never let you leave.'), 1300);
    } else if (catches === 5) {
      cat.flopNext = true;
      sayAt('mrrrrp!', cat);
    } else if (catches === 10) {
      if (awake) sayDev('ok, you’re his favourite now');
      else sayAt('prrrrrrr', cat);
    } else if (catches === 25) {
      if (awake) sayDev('25?! he never catches that many for me');
    } else sayAt(CATCH_LINES[rnd(CATCH_LINES.length)], cat);
  }

  function updateToy(dt) {
    const now = performance.now();
    const feet = [cat.x + 28, cat.y + 51];
    // Low enough means on the floor, or the very bottom of something he can reach
    const low = laser.y > floorTop() - 14;
    const goal = [floorX(laser.x), low ? clamp(laser.y, floorTop(), floorBottom()) : floorTop()];
    const dx = goal[0] - feet[0];
    const dy = goal[1] - feet[1];
    const zoomies = darkness() > 0.5 ? 1.35 : 1;
    cat.t -= dt;

    switch (cat.toy) {
      case 'watch':
        if (laser.on && Math.abs(dx) > 3) cat.flip = dx < 0;
        if (cat.spent && cat.t < -2.5 && cat.sheet !== 'catIdle') play(cat, 'catIdle', seq(0, 8), 6, true);
        if (cat.t <= 0 && laser.on && !still && !cat.spent) {
          cat.toy = 'chase';
          cat.kind = '';
        }
        break;

      case 'chase': {
        if (!laser.on || cat.spent) {
          catAlert(0);
          break;
        }
        if (low && Math.abs(dy) < 10 && Math.abs(dx) > 15 && Math.abs(dx) < 85 && cat.energy > 0) {
          cat.flip = dx < 0;
          cat.toy = 'crouch';
          cat.t = 0.35 + Math.random() * 0.6;
          cat.lock = goal;
          play(cat, 'catPounce', [1, 2, 3], 10, false, () => play(cat, 'catPounce', [3, 4], 9, true));
          break;
        }
        // Stand a leap short of the dot, or right under it when it's up on the wall
        const face = Math.abs(dx) < 15 ? (cat.flip ? -1 : 1) : Math.sign(dx);
        const spot = low ? [floorX(goal[0] - face * 55), goal[1]] : [goal[0], floorTop()];
        const far = Math.hypot(spot[0] - feet[0], spot[1] - feet[1]) > 70;
        if (catStep(spot, (far ? 95 : 38) * zoomies, dt, !far && low)) {
          if (!low) {
            cat.toy = 'stare';
            cat.t = 0.4;
            play(cat, 'catIdle', seq(0, 8), 6, true);
          } else catAlert(0.5); // the dot is by a wall where he can't line up; sulk a moment
        }
        break;
      }

      case 'crouch':
        if (!laser.on || Math.hypot(goal[0] - cat.lock[0], goal[1] - cat.lock[1]) > 24) {
          cat.wig = 0;
          cat.toy = 'chase';
          cat.kind = '';
          break;
        }
        cat.wig = still ? 0 : (Math.floor(now / 90) % 2) * (cat.flip ? 1 : -1);
        if (cat.t > 0) break;
        cat.wig = 0;
        leap(goal, 0);
        break;

      case 'leap': {
        const j = cat.jump;
        j.t += dt;
        const k = Math.min(1, j.t / 0.42);
        cat.x = j.sx + j.cx * k;
        cat.y = j.sy + j.cy * k;
        cat.hop = -Math.round(Math.sin(k * Math.PI) * (4 + j.arc));
        if (k < 1) break;
        cat.hop = 0;
        play(cat, 'catPounce', [8], 1, true);
        const paws = cat.x + 28 + (cat.flip ? -60 : 60);
        if (laser.on && low && !j.arc && Math.abs(paws - laser.x) < 10 && Math.abs(cat.y + 51 - goal[1]) < 9) caught();
        else {
          cat.toy = 'miss';
          cat.t = 0.55;
          if (j.arc) sayAt('so close', cat);
          else if (Math.random() < 0.35) sayAt('?', cat);
        }
        break;
      }

      case 'pin':
      case 'miss':
        // Slid out from under his paws: he shakes it off quickly
        if (cat.toy === 'pin' && !cat.pinned) cat.t = Math.min(cat.t, 0.15);
        if (cat.t > 0) break;
        landed();
        cat.pinned = null;
        if (cat.energy < 0.15) {
          cat.toy = 'tired';
          cat.t = 16;
          sayAt('…so tired', cat);
          play(cat, 'catLie', seq(0, 8), 8, false);
        } else if (cat.flopNext) {
          cat.flopNext = false;
          cat.toy = 'flop';
          cat.t = 3.5;
          sayAt('prrrrrr', cat);
          purrUntil = now + 3500;
          play(cat, 'catLie', seq(0, 8), 9, false);
        } else catAlert(0.35);
        break;

      case 'tired':
      case 'flop':
        if (cat.toy === 'flop' && !still && Math.random() < dt * 2.5) addHeart(cat.x + 28, cat.y + 20);
        if (cat.t > 0) break;
        if (cat.toy === 'tired') cat.energy = 0.8;
        cat.toy = 'getup';
        play(cat, 'catLie', seq(8, 0), 10, false, () => catAlert(0.2));
        break;

      case 'stare':
        // The dot is up on the wall: sit under it and chatter at it
        if (!laser.on) {
          catAlert(0);
          break;
        }
        cat.flip = laser.x < feet[0];
        if (low || Math.abs(laser.x - feet[0]) > 30) {
          cat.toy = 'chase';
          cat.kind = '';
          break;
        }
        if (cat.t <= 0) {
          cat.t = 3 + Math.random() * 2;
          sayAt(['ek ek ek', 'ekekek!', 'mrrrrr'][rnd(3)], cat);
          chatter();
        }
        // Low on the wall and holding still: he tries to jump for it
        if (laser.y > floorTop() - 70 && now - laser.movedAt > 1200 && cat.energy > 0.3 && Math.random() < dt * 0.8) {
          leap([feet[0] + (cat.flip ? -20 : 20), feet[1]], 16);
        }
        break;

      default:
        break;
    }
  }

  // His favourite visitors get a hello when they come back
  function greetFriend() {
    if (!isFriend()) return;
    setTimeout(() => {
      if (cat.state !== 'idle') return;
      sayAt('mrrp! (you’re back)', cat);
      fx('meow', 0.6, 1.1);
      addHeart(cat.x + 28, cat.y + 6);
    }, 1800);
  }

  // --------------------------------------------------------------------------
  // 11. LOOP
  // --------------------------------------------------------------------------
  // Wall and floor are plain paint, so they fit any screen shape
  function drawRoom() {
    const w = canvas.width;
    const h = canvas.height;
    const line = oy + L.wall;
    ctx.imageSmoothingEnabled = false;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#EBE3CB';
    ctx.fillRect(0, 0, w, line);
    ctx.fillStyle = '#DEC9A6';
    ctx.fillRect(0, line, w, h - line);
    ctx.fillStyle = '#D3BD99';
    for (let x = ox % 86; x < w; x += 86) ctx.fillRect(x, line + 4, 1, h - line - 4);
    ctx.fillStyle = '#CDB48E';
    ctx.fillRect(0, line + 1, w, 3);
    ctx.fillStyle = '#2B2A30';
    ctx.fillRect(0, line, w, 1);
    const [cx, cy] = at('lantern', 438, 8);
    ctx.fillStyle = '#8F7860';
    ctx.fillRect(ox + cx, 0, 1, oy + cy + 1);
    ROOM.forEach((r) => {
      if (!r.base) drawPiece(r);
    });
    drawShadows();
  }

  // Soft dark patches where things meet the floor, so nothing floats
  function shadow(group, x, y, rx, ry) {
    const [sx, sy] = at(group, x, y);
    ctx.beginPath();
    ctx.ellipse(ox + sx, oy + sy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawShadows() {
    ctx.fillStyle = 'rgba(82,54,32,0.2)';
    SHADOWS.forEach((v) => shadow(...v));
    shadow('desk', 126 + chairOut()[0] * chair.t, 240 + chairOut()[1] * chair.t, 21, 3);
    const on = (x, y, rx, ry) => {
      ctx.beginPath();
      ctx.ellipse(ox + x, oy + y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    };
    if (cat.sheet === 'catPounce') {
      // The body travels across the pounce sheet; the shadow follows it, smaller mid-air
      const f = cat.frames[cat.i];
      on(cat.x + 28 + (cat.flip ? -1 : 1) * POUNCE_SHIFT[f], cat.y + 51, f === 5 || f === 6 ? 11 : 15, 3);
    } else on(cat.x + 28, cat.y + 51, 15, 3);
    if (['walk', 'front', 'rear', 'stand'].includes(dev.sheet)) on(dev.x + 58, dev.y + 146, 17, 3);
    if (dev.sheet === 'push') on(dev.x + 74, dev.y + 144, 56, 4);
  }

  function hand(cx, cy, turn, length, color) {
    const a = turn * Math.PI * 2;
    ctx.fillStyle = color;
    for (let i = 0; i <= length; i++) {
      ctx.fillRect(Math.round(cx + Math.sin(a) * i), Math.round(cy - Math.cos(a) * i), 1, 1);
    }
  }

  // The real time in Saigon
  function drawClock() {
    const [x, y] = at('clock', CLOCK.x, CLOCK.y);
    const h = vnHour();
    hand(ox + x, oy + y, (h % 12) / 12, 4, '#2B2A30');
    hand(ox + x, oy + y, h % 1, 6, '#2B2A30');
    hand(ox + x, oy + y, new Date(Date.now()).getUTCSeconds() / 60, 6, '#D0505A');
  }

  let last = 0;
  let slow = 0;

  function tick(now) {
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    updateLaser(dt);
    updateDev(dt);
    updateCat(dt);
    stepChair(dt);
    stepTerm(dt);
    drawRoom();
    drawClock();
    drawDepth();
    drawLight(now);
    drawDot();
    drawZs(now);
    drawHearts(dt);
    drawFlash(dt);
    mixLoops();

    const d = devBox();
    place(devHit.el, d[0], d[1], d[2], d[3]);
    place(catHit.el, cat.x + 8, cat.y + 4, 40, 48);
    placeSay();
    slow -= dt;
    if (slow <= 0) {
      slow = 1;
      syncSky();
      syncNow();
    }
    requestAnimationFrame(tick);
  }

  makeButtons();
  addEventListener('resize', resize);
  toLoad = 3 + Object.keys(SHEETS).length;
  const fonts = ['400 18px "Pixelify Sans"', '600 18px "Pixelify Sans"'].map((f) =>
    (document.fonts ? document.fonts.load(f) : Promise.resolve()).catch(() => {}).then(loadStep));
  const assets = fonts.concat([load('kit', 'room-flat-f')]);
  Object.keys(SHEETS).forEach((k) => assets.push(load(k, SHEETS[k][0])));
  const atLeast = new Promise((r) => setTimeout(r, 700));
  bootTerm();
  Promise.all(assets.concat(atLeast)).then(() => {
    resize();
    settleForLayout();
    syncSky();
    syncNow();
    greetFriend();
    requestAnimationFrame((t) => {
      last = t;
      tick(t);
      const loader = document.getElementById('load');
      loader.classList.add('done');
      setTimeout(() => loader.remove(), 400);
    });
  });
})();
