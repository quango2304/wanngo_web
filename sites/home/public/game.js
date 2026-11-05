// ============================================================================
// WANNGO — LITTLE APPS FROM A LITTLE ROOM
// 60 FPS Subdivided 2D Deformable Mesh Rigging + Autonomous Dev & Cat AI
// ============================================================================

window.initWanngoRoom = function () {
  const THREE = window.THREE;
  if (!THREE) return;

  // --------------------------------------------------------------------------
  // 1. SHELF ITEMS & LANDING PAGE UI CONTROLLER
  // --------------------------------------------------------------------------
  const ITEMS = [
    {
      name: 'Bookmuse',
      kind: 'App',
      icon: 'assets/bookmuse-icon.png',
      bg: '#FFE08A',
      desc: 'A calm reading app for your EPUB library: books read aloud, with highlights, saved words and folders kept in sync.',
      dest: 'bookmuse.wanngo.com',
      href: 'https://bookmuse.wanngo.com/',
      cta: 'Visit site',
      say: 'ah, Bookmuse. my fave.'
    },
    {
      name: 'The blog',
      kind: 'Writing',
      bg: '#E2D6F3',
      desc: 'Notes from the little room: what I’m building, what broke, and what I learned fixing it.',
      dest: 'wanngo.substack.com',
      href: 'https://wanngo.substack.com/',
      cta: 'Read it',
      say: 'I should write more…'
    },
    {
      name: 'Open source',
      kind: 'Code',
      bg: '#CFE3C4',
      desc: 'The bits and pieces I share on GitHub. Issues and pull requests welcome.',
      dest: 'github.com/quango2304',
      href: 'https://github.com/quango2304',
      cta: 'View code',
      say: 'PRs welcome :)'
    },
    {
      name: 'Next app',
      kind: 'Brewing',
      bg: '#CFE0F5',
      desc: 'Something new is bubbling away on the desk. Follow the blog to hear about it first.',
      dest: 'coming soon',
      href: 'https://wanngo.substack.com/',
      cta: 'Follow along',
      say: 'shh, it’s a secret'
    },
    {
      name: 'This room',
      kind: 'Experiment',
      bg: '#FFD3B8',
      desc: 'This page! A living 2.5D/3D cartoon room with 60 FPS skeletal cutout & keyframe animation. The cat and I live here autonomously — try clicking us!',
      dest: 'three.js + 2D cutout animation',
      say: 'built that one at 3am'
    },
    {
      name: 'Say hi',
      kind: 'Email',
      bg: '#F7CFD8',
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
    'coffee + code ☕',
    'tests are green! ✨',
    'almost ready to deploy'
  ];

  const POKES = [
    'oh hi! 👋',
    'you found me :)',
    'brb, one more commit',
    'thanks for stopping by!',
    'the cat says hi too 🐾'
  ];

  const root = document.documentElement;
  const stage = document.getElementById('stage');
  const say = document.getElementById('say');
  const card = document.getElementById('card');
  const toggle = document.getElementById('theme');
  const mount = document.getElementById('webgl-mount');
  const fxContainer = document.getElementById('floating-fx');

  let picked = null;
  let sayTimer = 0;
  let pokeIndex = 0;
  let thoughtIndex = 0;

  function setSay(text) {
    if (!say) return;
    say.textContent = text;
    say.classList.remove('pop');
    void say.offsetWidth;
    say.classList.add('pop');
  }

  const mlist = document.querySelector('.mlist');
  document.querySelectorAll('.row .item').forEach((b) => {
    mlist.appendChild(b.cloneNode(true));
  });
  const buttons = document.querySelectorAll('.item');

  function renderCard() {
    buttons.forEach((b) => {
      b.setAttribute('aria-pressed', String(Number(b.dataset.i) === picked));
    });
    clearTimeout(sayTimer);
    if (picked === null) {
      card.hidden = true;
      setSay(CODING_THOUGHTS[thoughtIndex % CODING_THOUGHTS.length]);
      return;
    }
    const it = ITEMS[picked];
    const icon = card.querySelector('.cicon');
    icon.style.background = it.bg;
    icon.innerHTML = it.icon
      ? `<img src="${it.icon}" alt="">`
      : document.querySelector(`.item[data-i="${picked}"] .box svg`).outerHTML;
    card.querySelector('.kind').textContent = it.kind;
    card.querySelector('.h3').textContent = it.name;
    card.querySelector('.desc').textContent = it.desc;
    card.querySelector('.dest').textContent = it.dest;

    const open = card.querySelector('.open');
    open.hidden = !it.href;
    if (it.href) {
      open.href = it.href;
      open.textContent = `${it.cta} ↗`;
    }
    card.hidden = false;
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';
    setSay(it.say);
  }

  buttons.forEach((b) => {
    b.addEventListener('click', () => {
      const i = Number(b.dataset.i);
      picked = picked === i ? null : i;
      renderCard();
    });
  });

  card.querySelector('.close').addEventListener('click', () => {
    picked = null;
    renderCard();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && picked !== null) {
      picked = null;
      renderCard();
    }
  });

  function isDark() {
    return root.dataset.theme === 'dark';
  }

  function applyTheme() {
    toggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark() ? '#1C2038' : '#EFE6D6';
  }

  toggle.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    applyTheme();
  });
  applyTheme();

  // --------------------------------------------------------------------------
  // 2. THREE.JS 2.5D / 3D DIORAMA STAGE & DEFORMABLE MESH ENGINE
  // --------------------------------------------------------------------------
  const scene = new THREE.Scene();

  const WORLD_W = 14.4;
  const WORLD_H = 9.0;
  const CAM_DIST = 18.0;
  const fov = 2 * Math.atan(WORLD_H / 2 / CAM_DIST) * (180 / Math.PI);

  const camera = new THREE.PerspectiveCamera(fov, WORLD_W / WORLD_H, 0.1, 100);
  camera.position.set(0, 0, CAM_DIST);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const rect = mount.getBoundingClientRect();
  renderer.setSize(rect.width || 1440, rect.height || 900);
  mount.appendChild(renderer.domElement);

  const roomGroup = new THREE.Group();
  scene.add(roomGroup);

  function stageToWorld(px, py) {
    return {
      x: (px - 720) / 100,
      y: (450 - py) / 100
    };
  }

  const texLoader = new THREE.TextureLoader();
  function loadSpriteTex(url) {
    const t = texLoader.load(url);
    t.colorSpace = THREE.SRGBColorSpace;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    return t;
  }

  const textures = {
    devCoding: loadSpriteTex('assets/dev_coding.png'),
    devCoding2: loadSpriteTex('assets/dev_coding_2.png'),
    devCoding3: loadSpriteTex('assets/dev_coding_3.png'),
    devCoding4: loadSpriteTex('assets/dev_coding_4.png'),
    devCodingBlink: loadSpriteTex('assets/dev_coding_blink.png'),
    emptyDesk: loadSpriteTex('assets/empty_desk.png'),
    devWalking: loadSpriteTex('assets/dev_walking.png'),
    devSleeping: loadSpriteTex('assets/dev_sleeping.png'),
    devSleepingMid: loadSpriteTex('assets/dev_sleeping_mid.png'),
    devSleepingInhale: loadSpriteTex('assets/dev_sleeping_inhale.png'),
    emptyBed: loadSpriteTex('assets/empty_bed.png'),
    catWalk: loadSpriteTex('assets/cat_walk.png'),
    catSit: loadSpriteTex('assets/cat_sit.png'),
    catSit2: loadSpriteTex('assets/cat_sit_2.png'),
    catSleep: loadSpriteTex('assets/cat_sleep.png'),
    bookshelf: loadSpriteTex('assets/bookshelf.png'),
    plant: loadSpriteTex('assets/plant.png'),
    window: loadSpriteTex('assets/window.png'),
    windowNight: loadSpriteTex('assets/window_night.png')
  };

  // Rigid 2D Sprite Builder (1x1 quad — zero rubbery vertex warping!)
  function createSpritePlane(tex, width, height, px, py, z = 0) {
    const geo = new THREE.PlaneGeometry(width, height, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.02,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    const pos = stageToWorld(px, py);
    mesh.position.set(pos.x, pos.y, z);
    mesh.userData = {
      width,
      height,
      baseWorldX: pos.x,
      baseWorldY: pos.y
    };
    roomGroup.add(mesh);
    return mesh;
  }

  function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  // --------------------------------------------------------------------------
  // 2B. 60 FPS SKELETAL CUTOUT RIGS (Rigid Anatomical Parts Pivoting at Joints)
  // --------------------------------------------------------------------------
  function loadRigImage(src, onReady) {
    const img = new Image();
    img.onload = () => {
      if (onReady) onReady();
    };
    img.src = src;
    return img;
  }

  function drawCutoutPart(ctx, img, angleDeg, px, py, offsetY = 0) {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    ctx.save();
    ctx.translate(px, py + offsetY);
    // Negative angleDeg in Canvas2D matches PIL counter-clockwise positive angle_deg
    ctx.rotate((-angleDeg * Math.PI) / 180);
    ctx.drawImage(img, -px, -py);
    ctx.restore();
  }

  // Developer Walking Cutout Rig (531 x 1064 shared canvas space)
  const walkCanvas = document.createElement('canvas');
  walkCanvas.width = 531;
  walkCanvas.height = 1064;
  const walkCtx = walkCanvas.getContext('2d');
  const walkCanvasTex = new THREE.CanvasTexture(walkCanvas);
  walkCanvasTex.colorSpace = THREE.SRGBColorSpace;
  walkCanvasTex.minFilter = THREE.LinearFilter;
  walkCanvasTex.magFilter = THREE.LinearFilter;

  const devRig = {
    armBack: loadRigImage('assets/dev_part_arm_back.png', () => renderDevWalkCutout(0, 1.0)),
    legBack: loadRigImage('assets/dev_part_leg_back.png', () => renderDevWalkCutout(0, 1.0)),
    legFront: loadRigImage('assets/dev_part_leg_front.png', () => renderDevWalkCutout(0, 1.0)),
    body: loadRigImage('assets/dev_part_body.png', () => renderDevWalkCutout(0, 1.0)),
    bodyBlink: loadRigImage('assets/dev_part_body_blink.png', () => renderDevWalkCutout(0, 1.0)),
    armFront: loadRigImage('assets/dev_part_arm_front.png', () => renderDevWalkCutout(0, 1.0))
  };

  function isDevRigLoaded() {
    return (
      devRig.armBack.complete && devRig.armBack.naturalWidth > 0 &&
      devRig.legBack.complete && devRig.legBack.naturalWidth > 0 &&
      devRig.legFront.complete && devRig.legFront.naturalWidth > 0 &&
      devRig.body.complete && devRig.body.naturalWidth > 0 &&
      devRig.armFront.complete && devRig.armFront.naturalWidth > 0
    );
  }

  function renderDevWalkCutout(elapsed, strideEnv) {
    if (!isDevRigLoaded()) return;
    walkCtx.clearRect(0, 0, 531, 1064);

    const ph = elapsed * 7.8;
    const legAng = Math.sin(ph) * 23.0 * strideEnv;
    const armAng = -Math.sin(ph) * 20.0 * strideEnv;
    const liftBack = Math.max(0.0, -Math.cos(ph)) * 16.0 * strideEnv;
    const liftFront = Math.max(0.0, Math.cos(ph)) * 16.0 * strideEnv;
    const isBlink = (elapsed % 3.6) > 3.42 && devRig.bodyBlink.complete && devRig.bodyBlink.naturalWidth > 0;

    // Draw rigid cutout limbs back-to-front around exact anatomical joint pivots
    drawCutoutPart(walkCtx, devRig.armBack, -armAng, 275, 345, 0);
    drawCutoutPart(walkCtx, devRig.legBack, -legAng, 238, 605, -liftBack);
    drawCutoutPart(walkCtx, devRig.legFront, legAng, 238, 605, -liftFront);
    drawCutoutPart(walkCtx, isBlink ? devRig.bodyBlink : devRig.body, 0, 250, 450, 0);
    drawCutoutPart(walkCtx, devRig.armFront, armAng, 145, 348, 0);

    walkCanvasTex.needsUpdate = true;
  }

  // Ginger Cat Walking Cutout Rig (808 x 775 shared canvas space)
  const catWalkCanvas = document.createElement('canvas');
  catWalkCanvas.width = 808;
  catWalkCanvas.height = 775;
  const catWalkCtx = catWalkCanvas.getContext('2d');
  const catWalkTex = new THREE.CanvasTexture(catWalkCanvas);
  catWalkTex.colorSpace = THREE.SRGBColorSpace;
  catWalkTex.minFilter = THREE.LinearFilter;
  catWalkTex.magFilter = THREE.LinearFilter;

  const catRig = {
    tail: loadRigImage('assets/cat_part_tail.png', () => renderCatWalkCutout(0, 1.0)),
    hlegFar: loadRigImage('assets/cat_part_hleg_far.png', () => renderCatWalkCutout(0, 1.0)),
    flegFar: loadRigImage('assets/cat_part_fleg_far.png', () => renderCatWalkCutout(0, 1.0)),
    hlegNear: loadRigImage('assets/cat_part_hleg_near.png', () => renderCatWalkCutout(0, 1.0)),
    flegNear: loadRigImage('assets/cat_part_fleg_near.png', () => renderCatWalkCutout(0, 1.0)),
    body: loadRigImage('assets/cat_part_body.png', () => renderCatWalkCutout(0, 1.0)),
    bodyBlink: loadRigImage('assets/cat_part_body_blink.png', () => renderCatWalkCutout(0, 1.0))
  };

  function isCatRigLoaded() {
    return (
      catRig.tail.complete && catRig.tail.naturalWidth > 0 &&
      catRig.hlegFar.complete && catRig.hlegFar.naturalWidth > 0 &&
      catRig.flegFar.complete && catRig.flegFar.naturalWidth > 0 &&
      catRig.hlegNear.complete && catRig.hlegNear.naturalWidth > 0 &&
      catRig.flegNear.complete && catRig.flegNear.naturalWidth > 0 &&
      catRig.body.complete && catRig.body.naturalWidth > 0
    );
  }

  function renderCatWalkCutout(elapsed, walkEnv) {
    if (!isCatRigLoaded()) return;
    catWalkCtx.clearRect(0, 0, 808, 775);

    const ph = elapsed * 9.6;
    const flAng = Math.sin(ph) * 24.0 * walkEnv;
    const hlAng = Math.cos(ph) * 24.0 * walkEnv;
    const tailAng = Math.sin(elapsed * 4.5) * 12.0;

    const liftFlNear = Math.max(0.0, Math.cos(ph)) * 12.0 * walkEnv;
    const liftFlFar = Math.max(0.0, -Math.cos(ph)) * 12.0 * walkEnv;
    const liftHlNear = Math.max(0.0, -Math.sin(ph)) * 12.0 * walkEnv;
    const liftHlFar = Math.max(0.0, Math.sin(ph)) * 12.0 * walkEnv;
    const isBlink = (elapsed % 3.4) > 3.22 && catRig.bodyBlink.complete && catRig.bodyBlink.naturalWidth > 0;

    // Draw rigid cutout cat parts back-to-front with cbody seamlessly covering upper hip/shoulder joints
    drawCutoutPart(catWalkCtx, catRig.tail, tailAng, 168, 305, 0);
    drawCutoutPart(catWalkCtx, catRig.hlegFar, -hlAng, 205, 495, -liftHlFar);
    drawCutoutPart(catWalkCtx, catRig.flegFar, -flAng, 472, 505, -liftFlFar);
    drawCutoutPart(catWalkCtx, catRig.hlegNear, hlAng, 205, 495, -liftHlNear);
    drawCutoutPart(catWalkCtx, catRig.flegNear, flAng, 472, 505, -liftFlNear);
    drawCutoutPart(catWalkCtx, isBlink ? catRig.bodyBlink : catRig.body, 0, 400, 380, 0);

    catWalkTex.needsUpdate = true;
  }

  // --------------------------------------------------------------------------
  // 3. PROCEDURAL CARTOON PROPS (Pink Zigzag Rug, Wall Frame, Sticky Note, Glows)
  // --------------------------------------------------------------------------
  function createChevronRugTexture() {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 180;
    const ctx = c.getContext('2d');

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(256, 90, 244, 76, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#F3C6CF';
    ctx.fill();
    ctx.clip();

    ctx.strokeStyle = '#FFFDF8';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (let row = 30; row <= 154; row += 30) {
      ctx.beginPath();
      let step = 0;
      for (let x = 8; x <= 504; x += 24) {
        const yOff = (step % 2 === 0) ? -10 : 10;
        if (step === 0) ctx.moveTo(x, row + yOff);
        else ctx.lineTo(x, row + yOff);
        step++;
      }
      ctx.stroke();
    }
    ctx.restore();

    ctx.beginPath();
    ctx.ellipse(256, 90, 244, 76, 0, 0, Math.PI * 2);
    ctx.strokeStyle = '#2E2A26';
    ctx.lineWidth = 5;
    ctx.stroke();

    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  function createWallDecorTexture() {
    const c = document.createElement('canvas');
    c.width = 320;
    c.height = 260;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 320, 260);

    // Framed Mountain Art
    ctx.save();
    ctx.translate(115, 105);
    ctx.rotate(-0.07);
    ctx.fillStyle = '#FFFDF8';
    ctx.strokeStyle = '#2E2A26';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.roundRect(-64, -46, 128, 92, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#C5DCF2';
    ctx.fillRect(-52, -34, 104, 68);
    ctx.strokeRect(-52, -34, 104, 68);

    ctx.fillStyle = '#FFE08A';
    ctx.beginPath();
    ctx.arc(-26, -12, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#9BB8D8';
    ctx.beginPath();
    ctx.moveTo(-50, 34);
    ctx.lineTo(-10, -6);
    ctx.lineTo(22, 34);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#7E9FC4';
    ctx.beginPath();
    ctx.moveTo(-4, 34);
    ctx.lineTo(26, 2);
    ctx.lineTo(50, 34);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Yellow Sticky Note ("ship it!")
    ctx.save();
    ctx.translate(215, 172);
    ctx.rotate(0.09);
    ctx.fillStyle = '#FFE08A';
    ctx.strokeStyle = '#2E2A26';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(-36, -34, 72, 68, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#2E2A26';
    ctx.font = 'bold 18px "Gochi Hand", cursive, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ship it!', 0, 5);
    ctx.restore();

    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  function createShadowTexture() {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 32, 4, 64, 32, 58);
    g.addColorStop(0, 'rgba(46, 42, 38, 0.28)');
    g.addColorStop(1, 'rgba(46, 42, 38, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 64);
    return new THREE.CanvasTexture(c);
  }

  const shadowTex = createShadowTexture();

  // --------------------------------------------------------------------------
  // 4. ASSEMBLE THE DIORAMA SCENE LAYERS (100% Rigid Quads — Zero Warping)
  // --------------------------------------------------------------------------
  const windowSprite = createSpritePlane(textures.window, 3.05, 2.89, 735, 275, -0.55);
  const wallDecorSprite = createSpritePlane(createWallDecorTexture(), 1.9, 1.65, 545, 455, -0.52);

  // Diagonal Sunbeam Shaft from Window (fades in smoothly from 0 at top so no sharp line crosses the window)
  const beamCanvas = document.createElement('canvas');
  beamCanvas.width = 256;
  beamCanvas.height = 512;
  const beamCtx = beamCanvas.getContext('2d');
  const beamGrad = beamCtx.createLinearGradient(0, 0, 40, 512);
  beamGrad.addColorStop(0.0, 'rgba(255, 232, 165, 0.0)');
  beamGrad.addColorStop(0.24, 'rgba(255, 232, 165, 0.32)');
  beamGrad.addColorStop(1.0, 'rgba(255, 232, 165, 0.0)');
  beamCtx.fillStyle = beamGrad;
  beamCtx.beginPath();
  beamCtx.moveTo(45, 0);
  beamCtx.lineTo(205, 0);
  beamCtx.lineTo(256, 512);
  beamCtx.lineTo(0, 512);
  beamCtx.closePath();
  beamCtx.fill();
  const beamTex = new THREE.CanvasTexture(beamCanvas);
  const sunbeamMesh = createSpritePlane(beamTex, 3.4, 5.2, 765, 545, -0.58);

  const rugSprite = createSpritePlane(createChevronRugTexture(), 4.15, 1.42, 745, 795, -0.30);

  const plantSprite = createSpritePlane(textures.plant, 1.18, 2.18, 172, 650, -0.10);
  const deskSprite = createSpritePlane(textures.devCoding, 3.25, 3.57, 380, 610, 0.05);
  const bedSprite = createSpritePlane(textures.emptyBed, 3.35, 3.19, 755, 665, -0.12);
  const shelfSprite = createSpritePlane(textures.bookshelf, 3.48, 5.02, 1175, 535, -0.10);

  const walkShadow = createSpritePlane(shadowTex, 1.15, 0.42, 380, 775, 0.22);
  const walkSprite = createSpritePlane(walkCanvasTex, 1.48, 2.96, 380, 635, 0.25);
  walkSprite.visible = false;
  walkShadow.visible = false;

  const catShadow = createSpritePlane(shadowTex, 0.95, 0.35, 480, 815, 0.42);
  const catSprite = createSpritePlane(textures.catSit, 0.95, 0.95, 480, 765, 0.45);

  function createWarmPoolTexture(colorStop0) {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128, 128, 8, 128, 128, 120);
    g.addColorStop(0, colorStop0);
    g.addColorStop(1, 'rgba(255, 200, 100, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  const deskLampGlow = createSpritePlane(
    createWarmPoolTexture('rgba(255, 210, 115, 0.55)'),
    3.6,
    3.2,
    435,
    585,
    0.15
  );
  // Placed behind the window (-0.60) so the window frame stays crisp and unwashed at night
  const windowNightGlow = createSpritePlane(
    createWarmPoolTexture('rgba(135, 170, 255, 0.38)'),
    3.5,
    3.2,
    735,
    275,
    -0.60
  );

  // --------------------------------------------------------------------------
  // 5. AUTONOMOUS DEVELOPER STATE MACHINE (0: coding, 1: to bed, 2: asleep, 3: to desk)
  // --------------------------------------------------------------------------
  const devAI = {
    activity: 0,
    timer: 15.0,
    walkProgress: 0,
    zzzTimer: 0,
    steamTimer: 0,
    startX: -2.45,
    bedX: 0.15,

    setActivity(act) {
      this.activity = act;
      stage.dataset.activity = String(act);

      if (act === 0) {
        this.timer = 14.0 + Math.random() * 4.0;
        deskSprite.material.map = textures.devCoding;
        deskSprite.material.needsUpdate = true;
        bedSprite.material.map = textures.emptyBed;
        bedSprite.material.needsUpdate = true;
        walkSprite.visible = false;
        walkShadow.visible = false;
        if (picked === null) {
          thoughtIndex = (thoughtIndex + 1) % CODING_THOUGHTS.length;
          setSay(CODING_THOUGHTS[thoughtIndex]);
        }
      } else if (act === 1) {
        this.walkProgress = 0;
        deskSprite.material.map = textures.emptyDesk;
        deskSprite.material.needsUpdate = true;
        bedSprite.material.map = textures.emptyBed;
        bedSprite.material.needsUpdate = true;
        walkSprite.material.map = isDevRigLoaded() ? walkCanvasTex : textures.devWalking;
        walkSprite.material.needsUpdate = true;
        walkSprite.visible = true;
        walkShadow.visible = true;
        walkSprite.scale.set(1, 1, 1);
      } else if (act === 2) {
        this.timer = 10.5 + Math.random() * 3.0;
        this.zzzTimer = 0.2;
        deskSprite.material.map = textures.emptyDesk;
        deskSprite.material.needsUpdate = true;
        bedSprite.material.map = textures.devSleeping;
        bedSprite.material.needsUpdate = true;
        walkSprite.visible = false;
        walkShadow.visible = false;
      } else if (act === 3) {
        this.walkProgress = 0;
        deskSprite.material.map = textures.emptyDesk;
        deskSprite.material.needsUpdate = true;
        bedSprite.material.map = textures.emptyBed;
        bedSprite.material.needsUpdate = true;
        walkSprite.material.map = isDevRigLoaded() ? walkCanvasTex : textures.devWalking;
        walkSprite.material.needsUpdate = true;
        walkSprite.visible = true;
        walkShadow.visible = true;
        walkSprite.scale.set(-1, 1, 1);
      }
    },

    update(dt, elapsed) {
      if (this.activity === 0) {
        // Pixel-locked keyframe animation (100% static desk & chair, animated hands, screen & eye blink)
        const blinkCycle = elapsed % 3.8;
        let targetMap;
        if (blinkCycle > 3.62) {
          targetMap = textures.devCodingBlink;
        } else {
          const isTypingBurst = Math.sin(elapsed * 1.4) > -0.45;
          if (!isTypingBurst) {
            targetMap = textures.devCoding;
          } else {
            const typingSeq = [
              textures.devCoding,
              textures.devCoding2,
              textures.devCoding3,
              textures.devCoding4,
              textures.devCoding2,
              textures.devCoding,
              textures.devCoding3,
              textures.devCoding2
            ];
            const stepIdx = Math.floor(elapsed * 9.5) % typingSeq.length;
            targetMap = typingSeq[stepIdx];
          }
        }
        if (deskSprite.material.map !== targetMap) {
          deskSprite.material.map = targetMap;
          deskSprite.material.needsUpdate = true;
        }

        this.steamTimer += dt;
        if (this.steamTimer > 1.7) {
          this.steamTimer = 0;
          spawnFloatingBubble(402 + (Math.random() - 0.5) * 10, 512, '♨', true);
        }

        this.timer -= dt;
        if (this.timer <= 0) {
          this.setActivity(1);
        }
      } else if (this.activity === 1 || this.activity === 3) {
        const speed = this.activity === 1 ? 0.34 : 0.36;
        this.walkProgress += dt * speed;
        if (this.walkProgress >= 1) {
          this.setActivity(this.activity === 1 ? 2 : 0);
          return;
        }

        const easedProgress = smoothstep(0.0, 1.0, this.walkProgress);
        const strideEnv = Math.sin(this.walkProgress * Math.PI);

        const fromX = this.activity === 1 ? this.startX : this.bedX;
        const toX = this.activity === 1 ? this.bedX : this.startX;
        const currX = THREE.MathUtils.lerp(fromX, toX, easedProgress);

        // Subtle natural center-of-mass vertical bob synced to double the stride frequency
        const stepBounce = Math.abs(Math.sin(elapsed * 7.8)) * 0.045 * strideEnv;

        walkSprite.position.set(currX, -1.72 + stepBounce, 0.25);
        walkSprite.rotation.z = 0;
        walkShadow.position.set(currX, -3.05, 0.22);
        walkShadow.scale.set(1.0 - stepBounce * 0.9, 1.0, 1.0);

        // 60 FPS rigid skeletal cutout animation on walkCanvas
        if (isDevRigLoaded()) {
          if (walkSprite.material.map !== walkCanvasTex) {
            walkSprite.material.map = walkCanvasTex;
            walkSprite.material.needsUpdate = true;
          }
          renderDevWalkCutout(elapsed, strideEnv);
        }
      } else if (this.activity === 2) {
        // Pixel-locked sleeping keyframe cycle (100% static wooden bed frame, smooth blanket chest rise)
        const breathWave = Math.sin(elapsed * 1.75);
        let targetBedMap;
        if (breathWave > 0.45) {
          targetBedMap = textures.devSleepingInhale;
        } else if (breathWave > -0.35) {
          targetBedMap = textures.devSleepingMid;
        } else {
          targetBedMap = textures.devSleeping;
        }
        if (bedSprite.material.map !== targetBedMap) {
          bedSprite.material.map = targetBedMap;
          bedSprite.material.needsUpdate = true;
        }

        this.zzzTimer -= dt;
        if (this.zzzTimer <= 0) {
          this.zzzTimer = 1.55;
          spawnFloatingBubble(805 + (Math.random() - 0.5) * 26, 518, Math.random() > 0.4 ? 'Zzz' : 'zZz');
        }

        this.timer -= dt;
        if (this.timer <= 0) {
          this.setActivity(3);
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // 6. AUTONOMOUS GINGER CAT AI (60 FPS Skeletal Cutout Walk + Pixel-Locked Sit/Sleep)
  // --------------------------------------------------------------------------
  const catAI = {
    state: 'SIT',
    timer: 1.2,
    x: -2.1,
    y: -3.15,
    startX: -2.1,
    startY: -3.15,
    targetX: 0.4,
    targetY: -3.25,
    walkProgress: 0,
    walkDuration: 3.0,
    facing: 1,
    hopTimer: 0,

    pickNext() {
      const r = Math.random();
      if (r < 0.52) {
        this.state = 'WANDER';
        const spots = [
          { x: -2.35, y: -3.18 },
          { x: -0.95, y: -3.28 },
          { x: 0.35, y: -3.32 },
          { x: 1.45, y: -3.25 },
          { x: -3.85, y: -3.15 }
        ];
        const candidates = spots.filter((s) => Math.hypot(s.x - this.x, s.y - this.y) > 0.8);
        const pick = (candidates.length ? candidates : spots)[Math.floor(Math.random() * (candidates.length || spots.length))];
        this.startX = this.x;
        this.startY = this.y;
        this.targetX = pick.x;
        this.targetY = pick.y;
        const dist = Math.hypot(this.targetX - this.startX, this.targetY - this.startY);
        this.walkDuration = Math.max(1.8, dist / 0.95);
        this.walkProgress = 0;
        this.facing = this.targetX >= this.startX ? 1 : -1;
        this.timer = this.walkDuration + 0.4;
        catSprite.material.map = isCatRigLoaded() ? catWalkTex : textures.catWalk;
        catSprite.material.needsUpdate = true;
      } else if (r < 0.80) {
        this.state = 'SIT';
        this.timer = 4.0 + Math.random() * 2.2;
        catSprite.material.map = textures.catSit;
        catSprite.material.needsUpdate = true;
        catSprite.rotation.z = 0;
      } else {
        this.state = 'SLEEP';
        this.timer = 5.5 + Math.random() * 2.5;
        catSprite.material.map = textures.catSleep;
        catSprite.material.needsUpdate = true;
        catSprite.rotation.z = 0;
      }
    },

    pet() {
      this.hopTimer = 0.45;
      const px = this.x * 100 + 720;
      const py = 450 - (this.y + 0.55) * 100;
      const hearts = ['❤️ meow~', '🐾 purr…', '💛 mrrp!', '😻 ❤️'];
      spawnFloatingBubble(px, py, hearts[Math.floor(Math.random() * hearts.length)]);
    },

    update(dt, elapsed) {
      this.timer -= dt;
      if (this.timer <= 0) {
        this.pickNext();
      }

      let hopOffset = 0;
      if (this.hopTimer > 0) {
        this.hopTimer = Math.max(0, this.hopTimer - dt);
        hopOffset = Math.sin((this.hopTimer / 0.45) * Math.PI) * 0.26;
      }

      if (this.state === 'WANDER') {
        this.walkProgress = Math.min(1.0, this.walkProgress + dt / this.walkDuration);
        const eased = smoothstep(0.0, 1.0, this.walkProgress);
        const walkEnv = Math.sin(this.walkProgress * Math.PI);

        this.x = THREE.MathUtils.lerp(this.startX, this.targetX, eased);
        this.y = THREE.MathUtils.lerp(this.startY, this.targetY, eased);

        const trotBounce = Math.abs(Math.sin(elapsed * 9.6)) * 0.032 * walkEnv;

        catSprite.scale.set(this.facing * 1.12, 1.07, 1);
        catSprite.position.set(this.x, this.y + trotBounce + hopOffset, 0.45);
        catSprite.rotation.z = 0;

        // 60 FPS rigid skeletal cutout animation on catWalkCanvas
        if (isCatRigLoaded()) {
          if (catSprite.material.map !== catWalkTex) {
            catSprite.material.map = catWalkTex;
            catSprite.material.needsUpdate = true;
          }
          renderCatWalkCutout(elapsed, walkEnv);
        }

        if (this.walkProgress >= 1.0) {
          this.state = 'SIT';
          this.timer = 3.2 + Math.random() * 2.0;
          catSprite.material.map = textures.catSit;
          catSprite.material.needsUpdate = true;
          catSprite.rotation.z = 0;
        }
      } else if (this.state === 'SIT') {
        // Pixel-locked sitting cat with periodic happy slow-blink
        const sitBlink = (elapsed % 3.2) > 2.45;
        const targetMap = sitBlink ? textures.catSit2 : textures.catSit;
        if (catSprite.material.map !== targetMap) {
          catSprite.material.map = targetMap;
          catSprite.material.needsUpdate = true;
        }

        catSprite.scale.set(this.facing * 0.72, 1.24, 1);
        catSprite.position.set(this.x, this.y + hopOffset, 0.45);
        catSprite.rotation.z = 0;
      } else if (this.state === 'SLEEP') {
        catSprite.scale.set(this.facing * 1.16, 0.87, 1);
        catSprite.position.set(this.x, this.y - 0.08 + hopOffset, 0.45);
        catSprite.rotation.z = 0;
      }

      catShadow.position.set(this.x, this.y - 0.44, 0.42);
    }
  };

  // --------------------------------------------------------------------------
  // 8. FLOATING BUBBLES, PARALLAX & RAYCASTER CLICK INTERACTION
  // --------------------------------------------------------------------------
  function spawnFloatingBubble(stagePx, stagePy, text, subtle = false) {
    if (!fxContainer) return;
    const el = document.createElement('div');
    el.className = 'fx-bubble';
    el.style.left = `${(stagePx / 1440) * 100}%`;
    el.style.top = `${(stagePy / 900) * 100}%`;
    if (subtle) {
      el.style.background = 'transparent';
      el.style.border = 'none';
      el.style.boxShadow = 'none';
      el.style.opacity = '0.58';
    }
    el.textContent = text;
    fxContainer.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let targetParallaxX = 0;
  let targetParallaxY = 0;

  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;
    targetParallaxX = nx * 0.22;
    targetParallaxY = ny * 0.12;

    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([catSprite, deskSprite], false);
    renderer.domElement.style.cursor = hits.length > 0 ? 'pointer' : 'default';
  });

  renderer.domElement.addEventListener('click', (e) => {
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    const hits = raycaster.intersectObjects([catSprite, deskSprite], false);
    if (hits.length > 0) {
      const hitObj = hits[0].object;
      if (hitObj === catSprite) {
        catAI.pet();
      } else if (hitObj === deskSprite && devAI.activity === 0) {
        setSay(POKES[pokeIndex++ % POKES.length]);
        clearTimeout(sayTimer);
        sayTimer = setTimeout(() => {
          setSay(picked === null ? CODING_THOUGHTS[thoughtIndex % CODING_THOUGHTS.length] : ITEMS[picked].say);
        }, 3200);
      }
    }
  });

  function onResize() {
    const r = mount.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      renderer.setSize(r.width, r.height);
    }
  }
  window.addEventListener('resize', onResize);

  // Optional URL query params for instant preview/testing (?picked=0&activity=2&theme=dark)
  const params = new URLSearchParams(window.location.search);
  if (params.get('theme') === 'dark' || params.get('theme') === 'light') {
    root.dataset.theme = params.get('theme');
    applyTheme();
  }
  if (params.has('picked')) {
    const p = Number(params.get('picked'));
    if (p >= 0 && p < ITEMS.length) {
      picked = p;
      renderCard();
    }
  }
  if (params.has('activity')) {
    const act = Number(params.get('activity'));
    if ([0, 1, 2, 3].includes(act)) {
      devAI.setActivity(act);
      devAI.walkProgress = 0.5;
    }
  }

  // --------------------------------------------------------------------------
  // 9. MAIN 60 FPS ANIMATION LOOP
  // --------------------------------------------------------------------------
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.1);
    const elapsed = clock.getElapsedTime();

    devAI.update(dt, elapsed);
    catAI.update(dt, elapsed);

    const night = isDark();
    const targetWinTex = night ? textures.windowNight : textures.window;
    if (windowSprite.material.map !== targetWinTex) {
      windowSprite.material.map = targetWinTex;
      windowSprite.material.needsUpdate = true;
    }
    deskLampGlow.visible = night;
    windowNightGlow.visible = night;
    sunbeamMesh.visible = !night;
    sunbeamMesh.material.opacity = 0.72;
    sunbeamMesh.material.transparent = true;

    camera.position.x += (targetParallaxX - camera.position.x) * Math.min(1, dt * 4);
    camera.position.y += (targetParallaxY - camera.position.y) * Math.min(1, dt * 4);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
};
