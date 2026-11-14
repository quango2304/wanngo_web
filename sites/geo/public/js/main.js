import { $, MAP, st, HS, BY, readTheme, CAPITALS, CITIES, ISLANDS, ADM1_BY_ID, CAP_BY_ID, CITY_BY_ID, ISL_BY_ID, LAKE_BY_ID } from './state.js?v=20261114f';
import {
  ctx,
  proj,
  pathC,
  initMapData,
  upgradeMapData,
  upgradePhysicalData,
  upgradeSeasData,
  upgradeAdmin1Data,
  resize,
  render,
  loop,
  cullOK,
  updView,
  hideHint,
  pick
} from './globe.js?v=20261114f';
import { initUI, select, setAl, applyHash } from './ui.js?v=20261114f';

async function boot() {
  readTheme();
  resize();
  initUI();

  // 1. Load 110m map first for instant globe rendering
  const res110 = await fetch('assets/map/world-110m.json');
  const w110 = await res110.json();
  initMapData(w110);
  requestAnimationFrame(loop);
  applyHash();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      st.dirty = true;
    });
  }
  setTimeout(hideHint, 9000);

  // 2. Load 50m high-detail countries, physical geography, and Admin-1 provinces in background
  fetch('assets/map/world-50m.json', { priority: 'low' })
    .then(r => r.json())
    .then(w50 => {
      upgradeMapData(w50);
    })
    .catch(() => {});

  fetch('assets/map/physical-50m.json', { priority: 'low' })
    .then(r => r.json())
    .then(phys => {
      upgradePhysicalData(phys);
    })
    .catch(() => {});

  fetch('assets/map/seas.json?v=20261114f', { priority: 'low' })
    .then(r => r.json())
    .then(seas => {
      upgradeSeasData(seas);
    })
    .catch(() => {});

  fetch('assets/map/admin1-50m.json', { priority: 'low' })
    .then(r => r.json())
    .then(admGeo => {
      upgradeAdmin1Data(admGeo);
    })
    .catch(() => {});

  window.__geo = {
    MAP,
    get F() { return MAP.F; },
    get B50() { return MAP.B50; },
    get K50() { return MAP.K50; },
    get LAKES() { return MAP.LAKES; },
    get ADM1() { return MAP.ADM1; },
    CAPITALS,
    CITIES,
    ISLANDS,
    ADM1_BY_ID,
    CAP_BY_ID,
    CITY_BY_ID,
    ISL_BY_ID,
    LAKE_BY_ID,
    cullOK,
    updView,
    pathC,
    ctx,
    st,
    proj,
    select,
    setAl,
    pick,
    HS,
    BY,
    render: () => render(performance.now())
  };
}

boot();
