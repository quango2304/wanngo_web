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
  const WIDE = { w: 480, h: 268, tall: false, offs: {} };
  const TALL = {
    w: 270,
    h: 580,
    tall: true,
    offs: {
      ac: [-356, -4], lantern: [-94, 0], window: [-192, 28], clock: [-58, 8], cork: [-77, 58], shelf: [-208, 48],
      coffee: [-170, 56], desk: [-2, 168], bed: [-46, 198], bag: [-200, 62], mat: [-52, 180]
    }
  };
  let L = WIDE;

  function at(group, x, y) {
    const o = L.offs[group] || [0, 0];
    return [x + o[0], y + o[1]];
  }

  // Lights: id, group, x, y, radius
  const LIGHTS = [
    { id: 'desk', group: 'desk', x: 146, y: 152, r: 74, c: '255,206,130' },
    { id: 'lantern', group: 'lantern', x: 338, y: 58, r: 100, c: '255,224,170' },
    { id: 'tv', group: 'shelf', x: 332, y: 150, r: 64, c: '150,190,255' }
  ];
  const STRING = [[204, 48], [214, 48], [230, 46], [240, 45], [251, 44], [262, 45], [274, 48], [284, 44]];
  const BULB_COLORS = ['#FFD36B', '#F4A9B8', '#9FE0B8', '#FFD36B', '#8FC8F0', '#F4A9B8', '#FFD36B', '#9FE0B8'];
  const GLASS = { x: 219, y: 52, w: 52, h: 56 };
  const CLOCK = { x: 179, y: 119 };
  const SCREEN = { x: 307, y: 133, w: 50, h: 34 };
  const VENT = { x: 372, y: 52, w: 78 };

  // Spots dev walks to (feet position)
  const SPOTS = {
    coffee: { group: 'coffee', x: 166, y: 232, tall: [62, 300], line: 'refill time' },
    window: { group: 'bed', x: 196, y: 236, tall: [150, 310], line: 'look at that sky' },
    game: { group: 'bag', x: 296, y: 248 },
    mat: { group: 'mat', x: 110, y: 250 },
    bed: { group: 'bed', x: 196, y: 236 }
  };
  const CAT_SPOTS = {
    wide: [[40, 252], [240, 262], [344, 256], [420, 262]],
    tall: [[210, 330], [60, 470], [244, 345], [130, 460]]
  };

  // Things to click. x, y, w, h are in the wide room.
  const THINGS = [
    { id: 'ac', label: 'air conditioner', group: 'ac', x: 366, y: 16, w: 90, h: 40, act: () => toggleAC() },
    { id: 'lantern', label: 'paper lantern', group: 'lantern', x: 320, y: 38, w: 36, h: 36, act: () => toggleLamp('lantern') },
    { id: 'desk', label: 'desk lamp', group: 'desk', x: 135, y: 136, w: 24, h: 22, act: () => toggleLamp('desk') },
    { id: 'window', label: 'window', group: 'window', x: 200, y: 38, w: 90, h: 86, act: () => sayDev(clockLine('it’s {t} here in Saigon')) },
    { id: 'clock', label: 'clock', group: 'clock', x: 167, y: 106, w: 25, h: 25, act: () => sayDev(clockLine('{t}. should I be sleeping?')) },
    { id: 'cork', label: 'cork board', group: 'cork', x: 91, y: 102, w: 60, h: 34, say: 'todo: fewer todos' },
    { id: 'fig', label: 'fig tree', group: 'desk', x: 4, y: 90, w: 58, h: 100, say: 'taller than my last app' },
    { id: 'snake', label: 'snake plant', group: 'desk', x: 38, y: 165, w: 34, h: 64, say: 'impossible to kill. tested.' },
    { id: 'laptop', label: 'laptop', group: 'desk', x: 113, y: 158, w: 42, h: 28, say: 'no peeking, it’s full of bugs' },
    { id: 'mug', label: 'mug', group: 'desk', x: 118, y: 163, w: 14, h: 12, act: () => sayDev('coffee number ' + (3 + Math.floor(Math.random() * 3))) },
    { id: 'coffee', label: 'coffee machine', group: 'coffee', x: 178, y: 158, w: 24, h: 32, say: 'the real senior engineer' },
    { id: 'herb', label: 'little herb', group: 'coffee', x: 200, y: 160, w: 20, h: 24, say: 'I forgot to water it again' },
    { id: 'bed', label: 'bed', group: 'bed', x: 204, y: 152, w: 96, h: 90, say: 'not yet. one more commit.' },
    { id: 'tv', label: 'TV', group: 'shelf', x: 304, y: 130, w: 56, h: 40, act: () => toggleTV() },
    { id: 'console', label: 'game console', group: 'shelf', x: 306, y: 186, w: 44, h: 20, say: 'research. for work.' },
    { id: 'bag', label: 'beanbag', group: 'bag', x: 266, y: 216, w: 54, h: 36, say: 'best seat in the house' },
    { id: 'mat', label: 'exercise mat', group: 'mat', x: 62, y: 240, w: 112, h: 22, say: 'I use this. sometimes.' },
    { id: 'monstera', label: 'monstera', group: 'shelf', x: 356, y: 182, w: 40, h: 58, say: 'she gets the best light' },
    { id: 'catbed', label: 'cat bed', group: 'shelf', x: 388, y: 228, w: 40, h: 26, say: 'never used. he has my desk chair.' },
    { id: 'trophy', label: 'trophy', group: 'shelf', x: 378, y: 83, w: 34, h: 28, say: 'I bought it myself' },
    { id: 'pothos', label: 'pothos', group: 'shelf', x: 430, y: 82, w: 46, h: 66, say: 'it’s slowly taking the shelf' },
    { id: 'books', label: 'books', group: 'shelf', x: 382, y: 176, w: 72, h: 52, say: 'read half of them. honest.' }
  ];
  [[378, 112], [404, 112], [432, 112], [387, 145], [410, 145], [435, 145]].forEach((p, i) => {
    THINGS.push({ id: 'item' + i, label: ITEMS[i].name, group: 'shelf', x: p[0] - 2, y: p[1] - 2, w: 26, h: 26, act: () => openCard(i) });
  });

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
      b.addEventListener('click', () => (t.act ? t.act() : sayDev(t.say)));
      hot.appendChild(b);
      t.el = b;
      if (t.id === 'dev') devHit = t;
      if (t.id === 'cat') catHit = t;
    });
  }
  let devHit;
  let catHit;

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
    if (dev.state === 'play') return sayDev('hey! I was winning');
    sayDev(tvSet ? 'don’t spoil the ending' : 'back to work, both of us');
  }

  function lampOn(id) {
    if (id === 'tv') return tvOn();
    if (id in lampsSet) return lampsSet[id];
    const d = darkness();
    if (d < 0.3) return false;
    return dev.state !== 'sleep';
  }

  const isAcOn = () => (acOn === null ? darkness() < 0.5 : acOn);

  function toggleLamp(id) {
    const on = lampOn(id);
    lampsSet[id] = !on;
    if (dev.state === 'sleep') return sayDev('zzz…');
    if (!on) return sayDev(id === 'desk' ? 'ah, I can see my bugs again' : 'cozy.');
    if (darkness() > 0.5) sayDev(id === 'desk' ? 'hey! I can’t see my keyboard' : 'moody. I like it.');
    else sayDev('it’s daytime anyway');
  }

  function toggleAC() {
    acOn = !isAcOn();
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
      const floorY = gy + (L.tall ? 240 : 205);
      const a = 0.08 * (1 - d / 0.7);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      [[0, 1], [10, 0.6]].forEach(([inset, k]) => {
        ctx.fillStyle = `rgba(255,214,140,${a * k})`;
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
        if (l.id === 'tv' || !lampOn(l.id)) return;
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
      const [sx, sy] = at('shelf', SCREEN.x, SCREEN.y);
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
    ctx.fillRect(ox + vx + 74, oy + vy - 18, 3, 2);
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
    type: ['dev-type', 120, 120],
    wave: ['dev-wave', 120, 120],
    stand: ['dev-stand', 120, 156],
    walk: ['dev-walk', 120, 156],
    back: ['dev-back', 96, 96],
    push: ['dev-push', 144, 72],
    catIdle: ['cat-idle', 56, 56],
    catWalk: ['cat-walk', 56, 56],
    catLie: ['cat-lie', 56, 56]
  };
  const EXTRAS = { devSleep: 'dev-sleep' };

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
  const dev = { state: 'code', x: 0, y: 0, flip: false, wait: 0, breakIn: 60, thought: 8, pokes: 0, pokedAt: 0 };

  function seat() {
    const [x, y] = at('desk', 46, 122);
    return [x, y - 36];
  }

  function feetTo(spot) {
    const [x, y] = (L.tall && spot.tall) || at(spot.group, spot.x, spot.y);
    return [x - 58, y - 146];
  }

  function startCoding() {
    dev.state = 'code';
    dev.flip = false;
    [dev.x, dev.y] = seat();
    play(dev, 'type', seq(1, 8), 9, true);
    dev.breakIn = 70 + Math.random() * 60;
  }

  function greet(text) {
    dev.state = 'greet';
    if (text) sayDev(text);
    play(dev, 'wave', seq(0, 8), 9, false, () => {
      play(dev, 'wave', [8, 6, 7, 5, 8, 6, 7, 8], 7, false, () => {
        play(dev, 'wave', seq(8, 0), 11, false, startCoding);
      });
    });
  }

  function walkTo([x, y], then) {
    dev.state = 'walk';
    dev.goal = [x, y];
    dev.then = then;
    dev.flip = x < dev.x;
    play(dev, 'walk', seq(0, 4), 10, true);
  }

  function standUp(then) {
    dev.state = 'up';
    play(dev, 'stand', seq(0, 8), 11, false, then);
  }

  function sitDown() {
    walkTo(seat(), () => {
      dev.state = 'down';
      dev.flip = false;
      play(dev, 'stand', seq(8, 0), 11, false, startCoding);
    });
  }

  function playGames() {
    standUp(() => walkTo(feetTo(SPOTS.game), () => {
      dev.state = 'down';
      dev.flip = false;
      play(dev, 'stand', seq(8, 3), 12, false, () => {
        dev.state = 'play';
        dev.wait = 14 + Math.random() * 12;
        dev.lineIn = 3;
        play(dev, 'back', seq(0, 4), 6, true);
      });
    }));
  }

  function doPushUps() {
    standUp(() => walkTo(feetTo(SPOTS.mat), () => {
      dev.state = 'down';
      dev.flip = false;
      play(dev, 'stand', seq(8, 3), 12, false, () => {
        dev.state = 'push';
        dev.wait = 9;
        dev.reps = 0;
        dev.lineIn = 1.2;
        play(dev, 'push', seq(0, 8), 9, true);
      });
    }));
  }

  function getUp(then) {
    dev.state = 'up';
    play(dev, 'stand', seq(3, 8), 12, false, then);
  }

  function takeBreak() {
    const roll = Math.random();
    if (roll < 0.3) return playGames();
    if (roll < 0.55) return doPushUps();
    const spot = roll < 0.8 ? SPOTS.coffee : SPOTS.window;
    standUp(() => {
      walkTo(feetTo(spot), () => {
        dev.state = 'pause';
        dev.wait = 4;
        dev.flip = false;
        sayDev(spot.line);
        play(dev, 'stand', [8], 1, true);
      });
    });
  }

  function goToBed() {
    const toBed = () => walkTo(feetTo(SPOTS.bed), () => {
      dev.state = 'sleep';
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
        const then = dev.then;
        dev.then = null;
        then();
      } else {
        dev.x += (dx / left) * step;
        dev.y += (dy / left) * step;
      }
    }
    if (dev.state === 'code') {
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
        sayDev(GAME_LINES[Math.floor(Math.random() * GAME_LINES.length)]);
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
    if (dev.state === 'sleep' && !isSleepTime()) {
      dev.state = 'pause';
      dev.wait = 1;
      sayDev('morning…');
      play(dev, 'stand', [8], 1, true);
    }
    if (dev.state !== 'sleep') stepClip(dev, dt);
  }

  // Jump straight to a sensible place, used at load and when the layout flips
  function settleForLayout() {
    if (isSleepTime()) {
      [dev.x, dev.y] = feetTo(SPOTS.bed);
      dev.state = 'sleep';
    } else {
      startCoding();
    }
    settleCat();
  }

  function drawDev() {
    if (dev.state === 'sleep') {
      const [x, y] = at('bed', 185, 146);
      if (sprites.devSleep) ctx.drawImage(sprites.devSleep, ox + x, oy + y);
      return;
    }
    const n = dev.sheet;
    if (n === 'push') return frame(n, dev.frames[dev.i], dev.x - 12, dev.y + 76, false);
    if (n === 'back') {
      const [x, y] = at('bag', 246, 150);
      return frame(n, dev.frames[dev.i], x, y, false);
    }
    const y = SHEETS[n][2] === 120 ? dev.y + 36 : dev.y;
    frame(n, dev.frames[dev.i], dev.x, y, dev.flip);
  }

  function devBox() {
    if (dev.state === 'sleep') {
      const [x, y] = at('bed', 240, 150);
      return [x, y, 60, 40];
    }
    if (dev.sheet === 'push') return [dev.x, dev.y + 80, 130, 62];
    if (dev.sheet === 'back') {
      const [x, y] = at('bag', 270, 156);
      return [x, y, 52, 84];
    }
    return [dev.x + 38, dev.y + (SHEETS[dev.sheet][2] === 120 ? 44 : 10), 46, 100];
  }

  // --------------------------------------------------------------------------
  // 7. THE CAT
  // --------------------------------------------------------------------------
  // cat.x / cat.y are the top-left of a 56x56 canvas, feet at y + 51
  const cat = { state: 'idle', x: 0, y: 0, flip: false, wait: 6, pets: 0, petAt: 0 };

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
      cat.goal = goal;
      cat.speed = speed || 26;
      cat.flip = goal[0] < cat.x;
      play(cat, 'catWalk', seq(5, 8), 9, true);
    });
  }

  function catBedSpot() {
    const [x, y] = at('shelf', 408, 246);
    return catFeet([x, y]);
  }

  function catLieDown() {
    cat.state = 'lie';
    play(cat, 'catLie', seq(0, 8), 7, false, () => { cat.state = 'asleep'; });
  }

  function roam() {
    if (darkness() > 0.7) return catWalkTo(catBedSpot());
    const spots = L.tall ? CAT_SPOTS.tall : CAT_SPOTS.wide;
    catWalkTo(catFeet(spots[Math.floor(Math.random() * spots.length)]));
  }

  function pokeCat() {
    const n = performance.now();
    cat.pets = n - cat.petAt < 8000 ? cat.pets + 1 : 0;
    cat.petAt = n;
    addHeart(cat.x + 28 + (cat.flip ? -6 : 6), cat.y + 8);
    if (cat.state === 'asleep') {
      sayAt('prrr… zzz', cat);
      return;
    }
    if (cat.pets >= 4 && (cat.state === 'idle' || cat.state === 'walk')) {
      cat.pets = 0;
      sayAt('hmph.', cat);
      const spots = L.tall ? CAT_SPOTS.tall : CAT_SPOTS.wide;
      const far = spots.reduce((a, b) => (Math.abs(b[0] - 28 - cat.x) > Math.abs(a[0] - 28 - cat.x) ? b : a));
      if (cat.state === 'idle') catWalkTo(catFeet(far), 60);
      else {
        cat.goal = catFeet(far);
        cat.speed = 60;
        cat.flip = cat.goal[0] < cat.x;
      }
      return;
    }
    sayAt(CAT_LINES[cat.pets % CAT_LINES.length], cat);
  }

  function updateCat(dt) {
    if (cat.state === 'idle') {
      cat.wait -= dt;
      if (cat.wait <= 0) roam();
    }
    if (cat.state === 'walk') {
      const dx = cat.goal[0] - cat.x;
      const dy = cat.goal[1] - cat.y;
      const left = Math.hypot(dx, dy);
      const step = cat.speed * dt;
      if (left <= step || still) {
        cat.x = cat.goal[0];
        cat.y = cat.goal[1];
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
    sayFollow = who;
    placeSay();
    clearTimeout(sayTimer);
    sayTimer = setTimeout(() => { sayEl.hidden = true; }, 2600 + text.length * 40);
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
    const [x, y] = at('bed', 268, 150);
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
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !closeBtn.hidden) closeBox();
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
      play: 'playing games, shh',
      push: 'push-ups, allegedly',
      up: 'up and about',
      down: 'back to the desk'
    }[dev.state] || 'coding';
    nowEl.textContent = clockLine(`{t} in Saigon, now: ${doing}`);
  }

  // --------------------------------------------------------------------------
  // 9. LOOP
  // --------------------------------------------------------------------------
  function drawRoom() {
    const bg = sprites[L.tall ? 'roomTall' : 'roomWide'];
    const w = canvas.width;
    const h = canvas.height;
    ctx.imageSmoothingEnabled = false;
    ctx.globalCompositeOperation = 'source-over';
    // The wall and floor carry on past the picture on any screen shape
    ctx.drawImage(bg, ox, oy);
    ctx.drawImage(bg, 1, 0, 1, L.h, 0, oy, ox + 1, L.h);
    ctx.drawImage(bg, L.w - 3, 0, 1, L.h, ox + L.w - 2, oy, w - ox - L.w + 2, L.h);
    ctx.drawImage(canvas, 0, oy, w, 1, 0, 0, w, oy);
    ctx.drawImage(canvas, 0, oy + L.h - 1, w, 1, 0, oy + L.h, w, h - oy - L.h);
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

  // In his hands now, so it leaves the console
  function hidePad() {
    if (dev.state !== 'play') return;
    const bg = sprites[L.tall ? 'roomTall' : 'roomWide'];
    const [x, y] = at('shelf', 328, 184);
    ctx.drawImage(bg, x - 1, y, 1, 13, ox + x, oy + y, 19, 13);
  }

  let last = 0;
  let slow = 0;

  function tick(now) {
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    updateDev(dt);
    updateCat(dt);
    drawRoom();
    drawClock();
    hidePad();
    const catFirst = cat.y + 51 < dev.y + 146;
    if (catFirst) drawCat();
    drawDev();
    if (!catFirst) drawCat();
    drawLight(now);
    drawZs(now);
    drawHearts(dt);

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
  toLoad = 4 + Object.keys(SHEETS).length + Object.keys(EXTRAS).length;
  const fonts = ['400 18px "Pixelify Sans"', '600 18px "Pixelify Sans"'].map((f) =>
    (document.fonts ? document.fonts.load(f) : Promise.resolve()).catch(() => {}).then(loadStep));
  const assets = fonts.concat([load('roomWide', 'room-wide'), load('roomTall', 'room-tall')]);
  Object.keys(SHEETS).forEach((k) => assets.push(load(k, SHEETS[k][0])));
  Object.keys(EXTRAS).forEach((k) => assets.push(load(k, EXTRAS[k])));
  const atLeast = new Promise((r) => setTimeout(r, 700));
  Promise.all(assets.concat(atLeast)).then(() => {
    resize();
    settleForLayout();
    syncSky();
    syncNow();
    requestAnimationFrame((t) => {
      last = t;
      tick(t);
      document.getElementById('load').classList.add('done');
    });
  });
})();
