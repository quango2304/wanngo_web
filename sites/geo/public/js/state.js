import { NAMES } from '../data/regions.js?v=20261108z';
import { LAYERS, H } from '../data/hotspots.js?v=20261108z';
import { AL } from '../data/alliances.js?v=20261108z';
import { CAPITALS, CITIES, ISLANDS, ADMIN1_META } from '../data/urban_islands.js?v=20261108z';
import { TOOLS_EN, REGIONS_EN, AL_EN, REF_EN, RELC_EN, REL_EN, C0_EN } from '../data/en_countries.js?v=20261108z';
import { LAYERS_EN, UPDATED_EN, H_EN, LAKE_META_EN } from '../data/en_hotspots.js?v=20261108z';
import { CAPITALS_EN, CITIES_EN, ISLANDS_EN, ADMIN1_EN } from '../data/en_urban_islands.js?v=20261108z';
import { ECON_TIERS, ECON_SECTORS, ECON } from '../data/economy.js?v=20261108z';
import { REGIME_TYPES, REGIMES } from '../data/regimes.js?v=20261108z';
import { RANK_METRICS, RANK_DATA } from '../data/rankings.js?v=20261108z';

export {
  CAPITALS,
  CITIES,
  ISLANDS,
  ADMIN1_META,
  TOOLS_EN,
  REGIONS_EN,
  AL_EN,
  REF_EN,
  RELC_EN,
  REL_EN,
  C0_EN,
  LAYERS_EN,
  UPDATED_EN,
  H_EN,
  LAKE_META_EN,
  CAPITALS_EN,
  CITIES_EN,
  ISLANDS_EN,
  ADMIN1_EN,
  ECON_TIERS,
  ECON_SECTORS,
  ECON,
  REGIME_TYPES,
  REGIMES,
  RANK_METRICS,
  RANK_DATA
};

// Heatmap colours: one orange hue, so red-green colour-blind readers can read it and it never blends with the blue
// ocean. Light theme: better value = darker. Dark theme: better value = brighter (for most metrics better = higher). The metric's stops only set where
// each step of the scale sits; the stop colours in rankings.js are no longer used for the map.
export const RANK_RAMP = {
  light: ['#F7C48F', '#EE9A55', '#D9692A', '#A9481A', '#6E2C0E'],
  dark: ['#8A3C14', '#B4521D', '#DE7834', '#F5AA66', '#FFDDB0']
};
const _rampFns = {};
export function rankRamp() {
  const mode = C.dark ? 'dark' : 'light';
  return RANK_RAMP[mode];
}
function rampAt(t) {
  const mode = C.dark ? 'dark' : 'light';
  const fn = _rampFns[mode] || (_rampFns[mode] = d3.piecewise(d3.interpolateLab, RANK_RAMP[mode]));
  return d3.color(fn(Math.max(0, Math.min(1, t)))).formatHex();
}
// 0..1 position of a value along the metric's stops (each gap between stops gets an equal share)
export function rankPos(val, metric) {
  const stops = metric.stops;
  const n = stops.length - 1;
  if (val <= stops[0][0]) return 0;
  if (val >= stops[n][0]) return 1;
  for (let i = 0; i < n; i++) {
    const v0 = stops[i][0], v1 = stops[i + 1][0];
    if (val >= v0 && val <= v1) {
      const t = metric.logScale
        ? (Math.log(Math.max(1e-4, val)) - Math.log(Math.max(1e-4, v0))) /
          (Math.log(Math.max(1e-4, v1)) - Math.log(Math.max(1e-4, v0)))
        : (val - v0) / (v1 - v0 || 1);
      return (i + Math.max(0, Math.min(1, t))) / n;
    }
  }
  return 1;
}
// Where lower is better (PM2.5), the scale runs the other way: cleaner air = darker (light) / brighter (dark).
export function rankValColor(val, metric) {
  if (val === null || val === undefined || !metric || !metric.stops) return null;
  const t = rankPos(val, metric);
  return rampAt(metric.higherBetter === false ? 1 - t : t);
}

export function fmtRankVal(val, metric, enMode = false) {
  if (val === null || val === undefined || !metric) return '—';
  const loc = enMode ? 'en-US' : 'vi-VN';
  if (metric.key === 'income') {
    return '$' + Math.round(val).toLocaleString(loc);
  }
  if (metric.key === 'gdp') {
    if (val >= 1000) {
      const trVal = (val / 1000).toLocaleString(loc, { maximumFractionDigits: 2 });
      return enMode ? `$${trVal}T` : `$${trVal} nghìn tỷ`;
    }
    const bVal = val >= 10 ? Math.round(val).toLocaleString(loc) : val.toLocaleString(loc, { maximumFractionDigits: 2 });
    return enMode ? `$${bVal}B` : `$${bVal} tỷ`;
  }
  if (metric.key === 'pollution') {
    return val.toFixed(1) + ' µg/m³';
  }
  if (metric.key === 'life') {
    return val.toFixed(1) + (enMode ? ' yrs' : ' năm');
  }
  if (metric.key === 'hdi') {
    return val.toFixed(3);
  }
  return val.toFixed(metric.decimals ?? 2);
}

export const $ = s => document.querySelector(s);
export const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
export const vi = en => (NAMES[en] || [en])[0];

export const ADMIN_LAYERS = {
  continents: { n: 'Ranh giới châu lục', en: 'Continent outlines', c: '#C92A2A', grp: 'admin' },
  capitals: { n: 'Thủ đô thế giới', en: 'World Capitals', c: '#E8590C', grp: 'admin' },
  islands:  { n: 'Đảo & Vùng chiến lược', en: 'Strategic Islands & Zones', c: '#0D9488', grp: 'admin' },
  cities:   { n: 'Đô thị & Cảng lớn', en: 'Major Cities & Ports', c: '#2563EB', grp: 'admin' },
  admin1:   { n: 'Bang / Tỉnh thành (zoom)', en: 'States / Provinces (zoom)', c: '#7C3AED', grp: 'admin' },
  timezone: { n: 'Múi giờ quốc tế (24 giờ)', en: 'World Timezones (24h)', c: '#0EA5E9', grp: 'admin' }
};

export const WATER_LABELS = [
  // Rank 1: 5 Đại dương lớn (hiện ngay từ toàn cầu k >= 0.85)
  { n: 'BẮC THÁI BÌNH DƯƠNG', en: 'NORTH PACIFIC OCEAN', pt: [165, 22], rank: 1 },
  { n: 'NAM THÁI BÌNH DƯƠNG', en: 'SOUTH PACIFIC OCEAN', pt: [-135, -24], rank: 1 },
  { n: 'ẤN ĐỘ DƯƠNG', en: 'INDIAN OCEAN', pt: [78, -18], rank: 1 },
  { n: 'BẮC ĐẠI TÂY DƯƠNG', en: 'NORTH ATLANTIC OCEAN', pt: [-40, 26], rank: 1 },
  { n: 'NAM ĐẠI TÂY DƯƠNG', en: 'SOUTH ATLANTIC OCEAN', pt: [-18, -24], rank: 1 },
  { n: 'BẮC BĂNG DƯƠNG', en: 'ARCTIC OCEAN', pt: [0, 82], rank: 1 },
  { n: 'NAM ĐẠI DƯƠNG', en: 'SOUTHERN OCEAN', pt: [30, -61], rank: 1 },
  { n: 'NAM ĐẠI DƯƠNG', en: 'SOUTHERN OCEAN', pt: [-125, -61], rank: 1 },

  // Rank 2: Biển lớn & Vịnh lớn khu vực (k >= 1.15)
  { n: 'Biển Đông', en: 'East Sea (South China Sea)', pt: [113.5, 13.5], rank: 2 },
  { n: 'Biển Hoa Đông', en: 'East China Sea', pt: [125.5, 28.5], rank: 2 },
  { n: 'Biển Nhật Bản', en: 'Sea of Japan', pt: [134.8, 40.0], rank: 2 },
  { n: 'Biển Philippines', en: 'Philippine Sea', pt: [134.0, 18.0], rank: 2 },
  { n: 'Vịnh Bengal', en: 'Bay of Bengal', pt: [88.0, 14.5], rank: 2 },
  { n: 'Biển Ả Rập', en: 'Arabian Sea', pt: [64.5, 15.5], rank: 2 },
  { n: 'Địa Trung Hải', en: 'Mediterranean Sea', pt: [18.0, 35.0], rank: 2 },
  { n: 'Biển Đỏ', en: 'Red Sea', pt: [38.5, 20.5], rank: 2 },
  { n: 'Vịnh Ba Tư', en: 'Persian Gulf', pt: [51.5, 26.8], rank: 2 },
  { n: 'Biển Đen', en: 'Black Sea', pt: [34.5, 43.2], rank: 2 },
  { n: 'Biển Bắc', en: 'North Sea', pt: [3.0, 56.5], rank: 2 },
  { n: 'Biển Baltic', en: 'Baltic Sea', pt: [19.8, 57.5], rank: 2 },
  { n: 'Biển Na Uy', en: 'Norwegian Sea', pt: [4.0, 67.0], rank: 2 },
  { n: 'Biển Barents', en: 'Barents Sea', pt: [38.0, 74.0], rank: 2 },
  { n: 'Biển Bering', en: 'Bering Sea', pt: [-176.0, 58.0], rank: 2 },
  { n: 'Biển Okhotsk', en: 'Sea of Okhotsk', pt: [148.5, 53.5], rank: 2 },
  { n: 'Biển San Hô', en: 'Coral Sea', pt: [155.0, -17.5], rank: 2 },
  { n: 'Biển Tasman', en: 'Tasman Sea', pt: [161.0, -37.5], rank: 2 },
  { n: 'Biển Caribbean', en: 'Caribbean Sea', pt: [-74.5, 15.0], rank: 2 },
  { n: 'Vịnh Mexico', en: 'Gulf of Mexico', pt: [-90.0, 24.5], rank: 2 },
  { n: 'Vịnh Hudson', en: 'Hudson Bay', pt: [-82.5, 59.5], rank: 2 },
  { n: 'Vịnh Guinea', en: 'Gulf of Guinea', pt: [2.5, 1.5], rank: 2 },
  { n: 'Vịnh Alaska', en: 'Gulf of Alaska', pt: [-146.0, 56.5], rank: 2 },

  // Rank 3: Biển & Vịnh cận biên chi tiết (k >= 1.65)
  { n: 'Vịnh Bắc Bộ', en: 'Gulf of Tonkin', pt: [107.6, 19.6], rank: 3 },
  { n: 'Vịnh Thái Lan', en: 'Gulf of Thailand', pt: [101.2, 9.8], rank: 3 },
  { n: 'Biển Andaman', en: 'Andaman Sea', pt: [95.5, 10.5], rank: 3 },
  { n: 'Biển Hoàng Hải', en: 'Yellow Sea', pt: [123.0, 35.5], rank: 3 },
  { n: 'Biển Sulu', en: 'Sulu Sea', pt: [120.5, 8.5], rank: 3 },
  { n: 'Biển Sulawesi', en: 'Celebes Sea', pt: [122.0, 3.2], rank: 3 },
  { n: 'Biển Java', en: 'Java Sea', pt: [112.0, -5.2], rank: 3 },
  { n: 'Biển Banda', en: 'Banda Sea', pt: [127.5, -5.8], rank: 3 },
  { n: 'Biển Arafura', en: 'Arafura Sea', pt: [135.0, -9.5], rank: 3 },
  { n: 'Biển Timor', en: 'Timor Sea', pt: [126.5, -11.5], rank: 3 },
  { n: 'Vịnh Oman', en: 'Gulf of Oman', pt: [58.5, 24.2], rank: 3 },
  { n: 'Vịnh Aden', en: 'Gulf of Aden', pt: [48.0, 12.5], rank: 3 },
  { n: 'Kênh Mozambique', en: 'Mozambique Channel', pt: [41.5, -18.5], rank: 3 },
  { n: 'Biển Aegean', en: 'Aegean Sea', pt: [25.2, 38.2], rank: 3 },
  { n: 'Biển Adriatic', en: 'Adriatic Sea', pt: [16.0, 42.8], rank: 3 },
  { n: 'Biển Azov', en: 'Sea of Azov', pt: [36.8, 46.0], rank: 3 },
  { n: 'Biển Kara', en: 'Kara Sea', pt: [64.0, 74.5], rank: 3 },
  { n: 'Biển Laptev', en: 'Laptev Sea', pt: [125.0, 75.5], rank: 3 },
  { n: 'Biển Đông Siberia', en: 'East Siberian Sea', pt: [160.0, 73.5], rank: 3 },
  { n: 'Biển Chukchi', en: 'Chukchi Sea', pt: [-170.0, 69.5], rank: 3 },
  { n: 'Biển Beaufort', en: 'Beaufort Sea', pt: [-140.0, 72.0], rank: 3 },
  { n: 'Vịnh Baffin', en: 'Baffin Bay', pt: [-67.0, 72.5], rank: 3 },
  { n: 'Biển Labrador', en: 'Labrador Sea', pt: [-53.5, 57.5], rank: 3 },
  { n: 'Vịnh California', en: 'Gulf of California', pt: [-110.5, 26.5], rank: 3 },
  { n: 'Biển Sargasso', en: 'Sargasso Sea', pt: [-62.0, 28.0], rank: 3 },
  { n: 'Biển Weddell', en: 'Weddell Sea', pt: [-42.0, -72.0], rank: 3 },
  { n: 'Biển Ross', en: 'Ross Sea', pt: [-175.0, -74.0], rank: 3 }
];

// One object per named water body (the two SOUTHERN OCEAN labels share one). Outlines arrive later from seas.json.
export const SEAS = [];
export const SEA_BY_EN = {};
WATER_LABELS.forEach(w => {
  let s = SEA_BY_EN[w.en];
  if (!s) {
    const type =
      w.rank === 1 ? 'ocean' : /^(Gulf|Golfo)/.test(w.en) ? 'gulf' : /(^Bay of|Bay$)/.test(w.en) ? 'bay' : /Channel/.test(w.en) ? 'channel' : 'sea';
    s = SEA_BY_EN[w.en] = { kind: 'sea', isSea: true, n: w.n, en: w.en, rank: w.rank, type, pts: [], geo: null, bb: null, ar: 0 };
    SEAS.push(s);
  }
  s.pts.push(w.pt);
  w.sea = s;
});

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
  // continent outlines: { lines: { asia: [LineString], ... }, pc: [LineString] } for 110m and 50m
  CONT110: null,
  CONT50: null,
  CONT_HITS: [],
  WATER_HITS: [], // drawn sea/ocean label boxes { box, o } (rebuilt each frame)
  SEAS_BY_SIZE: [], // seas with outlines, smallest first (for tapping inside a sea)
  LC: { key: '', list: [] }
};

export const isMobileViewport = () => typeof window !== 'undefined' && window.innerWidth < 760;

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
  continents: true,
  capitals: !isMobileViewport(),
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
  labels: true,
  daynight: false
};

const PREFS_KEY = 'geo-prefs-v3';
const LEGACY_PREFS_KEY = 'geo-prefs-v2';

export const st = {
  lang: 'vi',
  on: { ...DEFAULT_ON },
  ref: { ...DEFAULT_REF },
  al: '',
  sel: null,
  hov: null,
  hl: new Set(),
  tour: null,
  story: null, // the explainer in progress (data/stories.js): it borrows the layers, see startStory() in ui.js
  spin: true,
  drawerHide: null,
  moving: false,
  dirty: true
};

export const isEn = () => st.lang === 'en';
export const tr = (viStr, enStr) => (st.lang === 'en' ? enStr : viStr);

// The map data keys countries by Natural Earth short names ("Bosnia and Herz.", "Macedonia"). In English, show the
// full current name instead; the globe labels keep a short form (EN_SHORT) where the full one is too long.
export const EN_NAME = {
  'Macedonia': 'North Macedonia',
  'Bosnia and Herz.': 'Bosnia and Herzegovina',
  'Dem. Rep. Congo': 'DR Congo',
  'Congo': 'Republic of the Congo',
  'eSwatini': 'Eswatini',
  'Dominican Rep.': 'Dominican Republic',
  'Central African Rep.': 'Central African Republic',
  'S. Sudan': 'South Sudan',
  'Eq. Guinea': 'Equatorial Guinea',
  'Solomon Is.': 'Solomon Islands',
  'Marshall Is.': 'Marshall Islands',
  'N. Mariana Is.': 'Northern Mariana Islands',
  'U.S. Virgin Is.': 'U.S. Virgin Islands',
  'S. Geo. and the Is.': 'South Georgia and the South Sandwich Islands',
  'Br. Indian Ocean Ter.': 'British Indian Ocean Territory',
  'Pitcairn Is.': 'Pitcairn Islands',
  'Falkland Is.': 'Falkland Islands',
  'Cayman Is.': 'Cayman Islands',
  'British Virgin Is.': 'British Virgin Islands',
  'Turks and Caicos Is.': 'Turks and Caicos Islands',
  'St. Vin. and Gren.': 'Saint Vincent and the Grenadines',
  'St. Kitts and Nevis': 'Saint Kitts and Nevis',
  'Cook Is.': 'Cook Islands',
  'W. Sahara': 'Western Sahara',
  'St. Pierre and Miquelon': 'Saint Pierre and Miquelon',
  'Wallis and Futuna Is.': 'Wallis and Futuna',
  'Fr. Polynesia': 'French Polynesia',
  'Fr. S. Antarctic Lands': 'French Southern and Antarctic Lands',
  'Faeroe Is.': 'Faroe Islands',
  'N. Cyprus': 'Northern Cyprus',
  'Indian Ocean Ter.': 'Australian Indian Ocean Territories',
  'Heard I. and McDonald Is.': 'Heard Island and McDonald Islands',
  'Ashmore and Cartier Is.': 'Ashmore and Cartier Islands',
  'Antigua and Barb.': 'Antigua and Barbuda',
  'St-Martin': 'Saint Martin',
  'St-Barthélemy': 'Saint Barthélemy'
};
// full English name -> short form for crowded globe labels
export const EN_SHORT = {
  'North Macedonia': 'N. Macedonia',
  'Bosnia and Herzegovina': 'Bosnia & Herz.',
  'Republic of the Congo': 'Congo',
  'Dominican Republic': 'Dominican Rep.',
  'Central African Republic': 'Central African Rep.',
  'Equatorial Guinea': 'Eq. Guinea',
  'Solomon Islands': 'Solomon Is.',
  'Marshall Islands': 'Marshall Is.',
  'Northern Mariana Islands': 'N. Mariana Is.',
  'U.S. Virgin Islands': 'U.S. Virgin Is.',
  'South Georgia and the South Sandwich Islands': 'S. Georgia',
  'British Indian Ocean Territory': 'Br. Indian Ocean Ter.',
  'Falkland Islands': 'Falkland Is.',
  'Turks and Caicos Islands': 'Turks & Caicos',
  'Saint Vincent and the Grenadines': 'St. Vincent & Gren.',
  'French Southern and Antarctic Lands': 'Fr. S. Antarctic Lands',
  'Australian Indian Ocean Territories': 'Indian Ocean Ter.',
  'Heard Island and McDonald Islands': 'Heard & McDonald Is.',
  'Antigua and Barbuda': 'Antigua & Barbuda',
  'United States of America': 'USA'
};
export const cName = en => (st.lang === 'en' ? EN_NAME[en] || en : (NAMES[en] || [en])[0]);
export const hName = h => (st.lang === 'en' && H_EN[h.id] ? H_EN[h.id].n : h.n);
export const hTx = h => (st.lang === 'en' && H_EN[h.id] ? H_EN[h.id].tx : h.tx);
export const layName = k =>
  st.lang === 'en'
    ? LAYERS_EN[k] || (ADMIN_LAYERS[k] && ADMIN_LAYERS[k].en) || (LAYERS[k] && LAYERS[k].n)
    : (LAYERS[k] && LAYERS[k].n) || (ADMIN_LAYERS[k] && ADMIN_LAYERS[k].n);
export const capName = c => (st.lang === 'en' ? (CAPITALS_EN[c.id] && CAPITALS_EN[c.id].n) || c.en || c.vi : c.vi);
export const cityName = ct => (st.lang === 'en' ? (CITIES_EN[ct.id] && CITIES_EN[ct.id].n) || ct.en || ct.vi : ct.vi);
export const islName = isl => (st.lang === 'en' ? (ISLANDS_EN[isl.id] && ISLANDS_EN[isl.id].n) || isl.en || isl.vi : isl.vi);
export const adm1Name = a => (st.lang === 'en' ? (ADMIN1_EN[a.id] && ADMIN1_EN[a.id].n) || a.en || a.vi : a.vi);
export const lakeName = lk =>
  st.lang === 'en' ? (LAKE_META_EN[lk.id] && LAKE_META_EN[lk.id].n) || lk.en || lk.vi || lk.n : lk.vi || lk.n;

export function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && typeof p === 'object') {
        if (p.lang === 'en' || p.lang === 'vi') st.lang = p.lang;
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
      return;
    }
    const legacyRaw = localStorage.getItem(LEGACY_PREFS_KEY);
    if (legacyRaw) {
      const p = JSON.parse(legacyRaw);
      if (p && typeof p === 'object') {
        if (p.lang === 'en' || p.lang === 'vi') st.lang = p.lang;
        if (p.ref && typeof p.ref === 'object') {
          Object.keys(DEFAULT_REF).forEach(k => {
            if (typeof p.ref[k] === 'boolean') st.ref[k] = p.ref[k];
          });
        }
        if (typeof p.al === 'string') st.al = p.al;
        if (typeof p.spin === 'boolean') st.spin = p.spin;
      }
    }
  } catch (e) {}
}

export function savePrefs() {
  if (st.story) return; // an explainer borrows the layers: its choices are not the reader's
  try {
    st.on.ice = true;
    localStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        lang: st.lang,
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
  return !!(h && (h.t === 'ice' || st.on[h.t] || (st.story && st.story.show.has(h.id))));
}

export function hc(h) {
  if (h.t === 'mountain' || h.mtn) return C.dark ? '#B8AFA6' : '#78716C';
  if (h.t === 'river' || h.riv) return C.dark ? '#6FB1E8' : '#2E7CC0';
  return (LAYERS[h.t] && LAYERS[h.t].c) || '#888888';
}
