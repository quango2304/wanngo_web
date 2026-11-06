import { $, MAP, st, HS, BY, readTheme } from './state.js';
import { ctx, proj, pathC, initMapData, upgradeMapData, resize, render, loop, cullOK, updView, hideHint } from './globe.js';
import { initUI, select, setAl } from './ui.js';

async function boot() {
  readTheme();
  resize();
  initUI();

  // 1. Load 110m map first for instant globe rendering
  const res110 = await fetch('assets/map/world-110m.json');
  const w110 = await res110.json();
  initMapData(w110);
  requestAnimationFrame(loop);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      st.dirty = true;
    });
  }
  setTimeout(hideHint, 9000);

  // 2. Load 50m high-detail map in background with low priority
  fetch('assets/map/world-50m.json', { priority: 'low' })
    .then(r => r.json())
    .then(w50 => {
      upgradeMapData(w50);
    })
    .catch(() => {});

  window.__geo = {
    get F() { return MAP.F; },
    get B50() { return MAP.B50; },
    get K50() { return MAP.K50; },
    cullOK,
    updView,
    pathC,
    ctx,
    st,
    proj,
    select,
    setAl,
    HS,
    BY,
    render: () => render(performance.now())
  };
}

boot();
