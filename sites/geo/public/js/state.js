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
  admin1:   { n: 'Bang / Tỉnh thành (zoom)', c: '#7C3AED', grp: 'admin' }
};

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
  strait: true,
  route: false,
  dispute: true,
  conflict: false,
  border: false,
  chain: false,
  // infra
  base: false,
  pipeline: false,
  corridor: false,
  resource: false,
  // nat
  river: true,
  mountain: true,
  terrain: false,
  desert: true,
  forest: true,
  ice: true,
  // admin
  capitals: true,
  islands: true,
  cities: false,
  admin1: true
};

export const st = {
  on: { ...DEFAULT_ON },
  ref: {
    eq: true,
    trop: false,
    polar: false,
    pm: false,
    grat: true,
    labels: true
  },
  al: '',
  sel: null,
  hov: null,
  hl: new Set(),
  tour: null,
  spin: true,
  moving: false,
  dirty: true
};

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
  return !!(h && st.on[h.t]);
}

export function hc(h) {
  if (h.t === 'mountain' || h.mtn) return C.dark ? '#C9A46A' : '#8A6A3A';
  if (h.t === 'river' || h.riv) return C.dark ? '#6FB1E8' : '#2E7CC0';
  return (LAYERS[h.t] && LAYERS[h.t].c) || '#888888';
}
