import { NAMES } from '../data/regions.js';
import { LAYERS, H } from '../data/hotspots.js';
import { AL } from '../data/alliances.js';
import { CAPITALS, CITIES, ISLANDS, ADMIN1_META } from '../data/urban_islands.js';

export { CAPITALS, CITIES, ISLANDS, ADMIN1_META };

export const $ = s => document.querySelector(s);
export const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
export const vi = en => (NAMES[en] || [en])[0];

export const ADMIN_LAYERS = {
  capitals: { n: 'Thủ đô thế giới', c: '#E8590C', grp: 'admin' },
  islands:  { n: 'Đảo & Vùng chiến lược', c: '#0D9488', grp: 'admin' },
  cities:   { n: 'Đô thị & Cảng lớn', c: '#2563EB', grp: 'admin' },
  admin1:   { n: 'Bang / Tỉnh thành (zoom)', c: '#7C3AED', grp: 'admin' },
  timezone: { n: 'Múi giờ quốc tế (AM/PM)', c: '#0EA5E9', grp: 'admin' }
};

export const WATER_LABELS = [
  // Rank 1: 5 Đại dương lớn (hiện ngay từ toàn cầu k >= 0.85)
  { n: 'BẮC THÁI BÌNH DƯƠNG', pt: [165, 22], rank: 1 },
  { n: 'NAM THÁI BÌNH DƯƠNG', pt: [-135, -24], rank: 1 },
  { n: 'ẤN ĐỘ DƯƠNG', pt: [78, -18], rank: 1 },
  { n: 'BẮC ĐẠI TÂY DƯƠNG', pt: [-40, 26], rank: 1 },
  { n: 'NAM ĐẠI TÂY DƯƠNG', pt: [-18, -24], rank: 1 },
  { n: 'BẮC BĂNG DƯƠNG', pt: [0, 82], rank: 1 },
  { n: 'NAM ĐẠI DƯƠNG', pt: [30, -61], rank: 1 },
  { n: 'NAM ĐẠI DƯƠNG', pt: [-125, -61], rank: 1 },

  // Rank 2: Biển lớn & Vịnh lớn khu vực (k >= 1.15)
  { n: 'Biển Đông', pt: [113.5, 13.5], rank: 2 },
  { n: 'Biển Hoa Đông', pt: [125.5, 28.5], rank: 2 },
  { n: 'Biển Nhật Bản', pt: [134.8, 40.0], rank: 2 },
  { n: 'Biển Philippines', pt: [134.0, 18.0], rank: 2 },
  { n: 'Vịnh Bengal', pt: [88.0, 14.5], rank: 2 },
  { n: 'Biển Ả Rập', pt: [64.5, 15.5], rank: 2 },
  { n: 'Địa Trung Hải', pt: [18.0, 35.0], rank: 2 },
  { n: 'Biển Đỏ', pt: [38.5, 20.5], rank: 2 },
  { n: 'Vịnh Ba Tư', pt: [51.5, 26.8], rank: 2 },
  { n: 'Biển Đen', pt: [34.5, 43.2], rank: 2 },
  { n: 'Biển Bắc', pt: [3.0, 56.5], rank: 2 },
  { n: 'Biển Baltic', pt: [19.8, 57.5], rank: 2 },
  { n: 'Biển Na Uy', pt: [4.0, 67.0], rank: 2 },
  { n: 'Biển Barents', pt: [38.0, 74.0], rank: 2 },
  { n: 'Biển Bering', pt: [-176.0, 58.0], rank: 2 },
  { n: 'Biển Okhotsk', pt: [148.5, 53.5], rank: 2 },
  { n: 'Biển San Hô', pt: [155.0, -17.5], rank: 2 },
  { n: 'Biển Tasman', pt: [161.0, -37.5], rank: 2 },
  { n: 'Biển Caribbean', pt: [-74.5, 15.0], rank: 2 },
  { n: 'Vịnh Mexico', pt: [-90.0, 24.5], rank: 2 },
  { n: 'Vịnh Hudson', pt: [-82.5, 59.5], rank: 2 },
  { n: 'Vịnh Guinea', pt: [2.5, 1.5], rank: 2 },
  { n: 'Vịnh Alaska', pt: [-146.0, 56.5], rank: 2 },

  // Rank 3: Biển & Vịnh cận biên chi tiết (k >= 1.65)
  { n: 'Vịnh Bắc Bộ', pt: [107.6, 19.6], rank: 3 },
  { n: 'Vịnh Thái Lan', pt: [101.2, 9.8], rank: 3 },
  { n: 'Biển Andaman', pt: [95.5, 10.5], rank: 3 },
  { n: 'Biển Hoàng Hải', pt: [123.0, 35.5], rank: 3 },
  { n: 'Biển Sulu', pt: [120.5, 8.5], rank: 3 },
  { n: 'Biển Sulawesi', pt: [122.0, 3.2], rank: 3 },
  { n: 'Biển Java', pt: [112.0, -5.2], rank: 3 },
  { n: 'Biển Banda', pt: [127.5, -5.8], rank: 3 },
  { n: 'Biển Arafura', pt: [135.0, -9.5], rank: 3 },
  { n: 'Biển Timor', pt: [126.5, -11.5], rank: 3 },
  { n: 'Vịnh Oman', pt: [58.5, 24.2], rank: 3 },
  { n: 'Vịnh Aden', pt: [48.0, 12.5], rank: 3 },
  { n: 'Kênh Mozambique', pt: [41.5, -18.5], rank: 3 },
  { n: 'Biển Aegean', pt: [25.2, 38.2], rank: 3 },
  { n: 'Biển Adriatic', pt: [16.0, 42.8], rank: 3 },
  { n: 'Biển Azov', pt: [36.8, 46.0], rank: 3 },
  { n: 'Biển Kara', pt: [64.0, 74.5], rank: 3 },
  { n: 'Biển Laptev', pt: [125.0, 75.5], rank: 3 },
  { n: 'Biển Đông Siberia', pt: [160.0, 73.5], rank: 3 },
  { n: 'Biển Chukchi', pt: [-170.0, 69.5], rank: 3 },
  { n: 'Biển Beaufort', pt: [-140.0, 72.0], rank: 3 },
  { n: 'Vịnh Baffin', pt: [-67.0, 72.5], rank: 3 },
  { n: 'Biển Labrador', pt: [-53.5, 57.5], rank: 3 },
  { n: 'Vịnh California', pt: [-110.5, 26.5], rank: 3 },
  { n: 'Biển Sargasso', pt: [-62.0, 28.0], rank: 3 },
  { n: 'Biển Weddell', pt: [-42.0, -72.0], rank: 3 },
  { n: 'Biển Ross', pt: [-175.0, -74.0], rank: 3 }
];

export const CAP_BY_ID = {};
export const CITY_BY_ID = {};
export const ISL_BY_ID = {};
export const ADM1_BY_ID = {};
export const LAKE_BY_ID = {};

CAPITALS.forEach(c => {
  c.kind = 'cap';
  CAP_BY_ID[c.id] = c;
});
CITIES.forEach(ct => {
  ct.kind = 'city';
  CITY_BY_ID[ct.id] = ct;
});
ISLANDS.forEach(isl => {
  isl.kind = 'isl';
  ISL_BY_ID[isl.id] = isl;
});

export const AFR = new Set(
  Object.keys(NAMES).filter(k => ['nafrica', 'sahel', 'wafrica', 'cafrica', 'eafrica', 'safrica'].includes(NAMES[k][1]))
);

export const MTN = new Set(['himalaya', 'andes', 'alps', 'ural', 'zagros', 'truongson']);
H.forEach(h => {
  if (h.t === 'mountain' || MTN.has(h.id)) h.mtn = true;
  else if (h.t === 'river') h.riv = true;
});

export const NAT = new Set(['desert', 'forest', 'ice']);

// Membership per country
export const MEM = {};
Object.entries(AL).forEach(([k, a]) => {
  a.m.forEach(n => (MEM[n] = MEM[n] || []).push([k, 1]));
  a.p.forEach(n => (MEM[n] = MEM[n] || []).push([k, 0]));
});

export const HS = {};
export const BY = {};

export const MAP = {
  F: [],
  F110: [],
  B50: [],
  K50: [],
  B110: [],
  K110: [],
  LAKES: [],
  ADM1: [],
  ADM1_BORDERS: [],
  IDX: [],
  LC: { key: '', list: [] }
};

export const DEFAULT_ON = {
  // hot
  strait: false,
  route: false,
  dispute: false,
  conflict: false,
  border: false,
  chain: false,
  // infra
  base: false,
  pipeline: false,
  corridor: false,
  resource: false,
  // nat
  river: false,
  mountain: true,
  terrain: false,
  desert: false,
  forest: false,
  ice: true, // always visible on base globe
  // admin
  capitals: true,
  islands: false,
  cities: false,
  admin1: false,
  timezone: false
};

export const DEFAULT_REF = {
  eq: true,
  trop: false,
  polar: false,
  pm: false,
  grat: true,
  labels: true
};

const PREFS_KEY = 'geo-prefs-v2';

export const st = {
  on: { ...DEFAULT_ON },
  ref: { ...DEFAULT_REF },
  al: '',
  sel: null,
  hov: null,
  hl: new Set(),
  tour: null,
  spin: true,
  drawerHide: null,
  moving: false,
  dirty: true
};

export function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
    if (p && typeof p === 'object') {
      if (p.on && typeof p.on === 'object') {
        Object.keys(DEFAULT_ON).forEach(k => {
          if (typeof p.on[k] === 'boolean') st.on[k] = p.on[k];
        });
      }
      st.on.ice = true;
      if (p.ref && typeof p.ref === 'object') {
        Object.keys(DEFAULT_REF).forEach(k => {
          if (typeof p.ref[k] === 'boolean') st.ref[k] = p.ref[k];
        });
      }
      if (typeof p.al === 'string') st.al = p.al;
      if (typeof p.spin === 'boolean') st.spin = p.spin;
      if (typeof p.drawerHide === 'boolean') st.drawerHide = p.drawerHide;
    }
  } catch (e) {}
}

export function savePrefs() {
  try {
    st.on.ice = true;
    localStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        on: st.on,
        ref: st.ref,
        al: st.al,
        spin: st.spin,
        drawerHide: st.drawerHide
      })
    );
  } catch (e) {}
}

loadPrefs();

export const C = {};

export function readTheme() {
  const s = getComputedStyle(document.documentElement);
  ['ocean1', 'ocean2', 'land', 'land2', 'border', 'coast', 'glow', 'shade', 'grat', 'label', 'label-halo', 'accent', 'bg'].forEach(
    v => (C[v] = s.getPropertyValue('--' + v).trim())
  );
  C.dark =
    document.documentElement.dataset.theme === 'dark' ||
    (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  st.dirty = true;
}

export function on(h) {
  return !!(h && (h.t === 'ice' || st.on[h.t]));
}

export function hc(h) {
  if (h.t === 'mountain' || h.mtn) return C.dark ? '#B8AFA6' : '#78716C';
  if (h.t === 'river' || h.riv) return C.dark ? '#6FB1E8' : '#2E7CC0';
  return (LAYERS[h.t] && LAYERS[h.t].c) || '#888888';
}
