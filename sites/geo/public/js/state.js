import { NAMES } from '../data/regions.js';
import { LAYERS, H } from '../data/hotspots.js';
import { AL } from '../data/alliances.js';

export const $ = s => document.querySelector(s);
export const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
export const vi = en => (NAMES[en] || [en])[0];

export const AFR = new Set(
  Object.keys(NAMES).filter(k => ['nafrica', 'sahel', 'wafrica', 'cafrica', 'eafrica', 'safrica'].includes(NAMES[k][1]))
);

export const MTN = new Set(['himalaya', 'andes', 'alps', 'ural', 'zagros', 'truongson']);
H.forEach(h => {
  if (MTN.has(h.id) || h.t === 'mountain') h.mtn = true;
  else if ((h.t === 'terrain' || h.t === 'river') && (h.g.line || h.g.lines || h.g.dashed)) h.riv = true;
});

export const NAT = new Set(Object.keys(LAYERS).filter(x => LAYERS[x].grp === 'nat'));

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
  IDX: [],
  LC: { key: '', list: [] }
};

export const st = {
  on: {
    strait: true,
    route: false,
    dispute: true,
    border: false,
    terrain: false,
    conflict: false,
    ice: true,
    desert: true,
    forest: true,
    river: true,
    mountain: false
  },
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
  return st.on[h.t] || (h.riv && st.on.river) || (h.mtn && st.on.mountain);
}

export function hc(h) {
  if (h.mtn) return C.dark ? '#C9A46A' : '#8A6A3A';
  if (h.riv) return C.dark ? '#6FB1E8' : '#2E7CC0';
  return LAYERS[h.t].c;
}
