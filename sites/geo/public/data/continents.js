// Continents layer: 6-continent model taught in Vietnamese schools (Asia, Europe, Africa, the Americas, Oceania,
// Antarctica); the Americas are drawn in two shades (North / South, split at the Panama–Colombia border).
// Boundaries are geographic, not political: Europe–Asia follows the Ural Mountains crest, the Ural River, the Caspian
// Sea, the Greater Caucasus watershed and the Turkish Straits; Asia–Africa follows the Suez Canal; Sinai is Asia;
// New Guinea (incl. Indonesian Papua) is Oceania. Overseas islands go by where they actually are.
// The hand-drawn boundary lines are approximate (good at globe scale, not survey-grade).

// c: [light theme, dark theme] outline color. lab: label anchor [lon, lat].
export const CONT = {
  asia: { vi: 'Châu Á', en: 'Asia', c: ['#C92A2A', '#FF6B6B'], lab: [86, 51] },
  europe: { vi: 'Châu Âu', en: 'Europe', c: ['#2F44B8', '#8EA2FF'], lab: [27, 57] },
  africa: { vi: 'Châu Phi', en: 'Africa', c: ['#A86F00', '#FFC93C'], lab: [21, 3.5] },
  nam: { vi: 'Bắc Mỹ', en: 'North America', c: ['#1E7A34', '#40C057'], lab: [-103, 48], grp: 'americas' },
  sam: { vi: 'Nam Mỹ', en: 'South America', c: ['#62B06F', '#B2F2BB'], lab: [-63, -4], grp: 'americas' },
  oceania: { vi: 'Châu Đại Dương', en: 'Oceania', c: ['#B5237A', '#F783AC'], lab: [133, -17] },
  antarctica: { vi: 'Châu Nam Cực', en: 'Antarctica', c: ['#5F6B76', '#CED4DA'], lab: [40, -78] }
};
// The Americas as one continent (6-continent model). Label anchor sits in the Pacific off Central America.
export const AMERICAS = { vi: 'Châu Mỹ', en: 'Americas', lab: [-97, 10] };
export const CONT_KEYS = ['asia', 'europe', 'africa', 'nam', 'sam', 'oceania', 'antarctica'];
// key used for cards / stats (North and South America share one card)
export const cardKey = k => (k === 'nam' || k === 'sam' ? 'americas' : k);

const BY_REGION = {
  seasia: 'asia', easia: 'asia', sasia: 'asia', casia: 'asia', caucasus: 'asia', gulf: 'asia', levant: 'asia',
  nafrica: 'africa', sahel: 'africa', wafrica: 'africa', cafrica: 'africa', eafrica: 'africa', safrica: 'africa',
  neurope: 'europe', weurope: 'europe', ceurope: 'europe', balkans: 'europe', eeurope: 'europe',
  namerica: 'nam', camerica: 'nam', carib: 'nam',
  andes: 'sam', scone: 'sam',
  oceania: 'oceania', pacific: 'oceania',
  antarctic: 'antarctica'
};

// Dependent territories (region key 'territory') by actual location.
const BY_NAME = {
  'N. Mariana Is.': 'oceania', Guam: 'oceania', 'American Samoa': 'oceania', 'Pitcairn Is.': 'oceania',
  'Wallis and Futuna Is.': 'oceania', 'Fr. Polynesia': 'oceania', 'New Caledonia': 'oceania', 'Norfolk Island': 'oceania',
  'Ashmore and Cartier Is.': 'oceania',
  'U.S. Virgin Is.': 'nam', Anguilla: 'nam', 'Cayman Is.': 'nam', Bermuda: 'nam', 'British Virgin Is.': 'nam',
  'Turks and Caicos Is.': 'nam', Montserrat: 'nam', 'St. Pierre and Miquelon': 'nam',
  'Falkland Is.': 'sam', 'S. Geo. and the Is.': 'sam',
  'Saint Helena': 'africa',
  // Chagos (Chagos–Laccadive Ridge, with the Maldives) and Christmas / Cocos Islands (south of Java)
  'Br. Indian Ocean Ter.': 'asia', 'Indian Ocean Ter.': 'asia',
  // Kerguelen, Crozet, Heard & McDonald: sub-Antarctic islands on the Antarctic Plate
  'Fr. S. Antarctic Lands': 'antarctica', 'Heard I. and McDonald Is.': 'antarctica',
  Jersey: 'europe', Guernsey: 'europe', 'Isle of Man': 'europe'
};

// Countries split by a land boundary: [main continent, other continent], with a short note.
export const TRANS_LAND = {
  Russia: { c: ['europe', 'asia'], vi: 'phần phía tây dãy Ural thuộc châu Âu, Siberia và Viễn Đông thuộc châu Á', en: 'west of the Urals is Europe; Siberia and the Far East are Asia' },
  Turkey: { c: ['asia', 'europe'], vi: 'Đông Thrace (phía tây eo Bosphorus và Dardanelles) thuộc châu Âu', en: 'East Thrace (west of the Bosphorus and Dardanelles) is Europe' },
  Kazakhstan: { c: ['asia', 'europe'], vi: 'phần phía tây sông Ural thuộc châu Âu', en: 'the part west of the Ural River is Europe' },
  Azerbaijan: { c: ['asia', 'europe'], vi: 'dải nhỏ phía bắc sống núi Đại Kavkaz thuộc châu Âu', en: 'a small strip north of the Greater Caucasus crest is Europe' },
  Georgia: { c: ['asia', 'europe'], vi: 'vài vùng nhỏ phía bắc sống núi Đại Kavkaz thuộc châu Âu', en: 'small areas north of the Greater Caucasus crest are Europe' },
  Egypt: { c: ['africa', 'asia'], vi: 'bán đảo Sinai (phía đông kênh Suez) thuộc châu Á', en: 'the Sinai Peninsula (east of the Suez Canal) is Asia' },
  Indonesia: { c: ['asia', 'oceania'], vi: 'phía tây đảo New Guinea (vùng Papua) thuộc châu Đại Dương', en: 'western New Guinea (Papua) is Oceania' }
};

// Countries whose mainland is in one continent but which have islands / overseas parts in another.
export const TRANS_ISLAND = {
  France: { c: ['europe', 'nam', 'sam', 'africa'], vi: 'Guadeloupe, Martinique (Bắc Mỹ), Guiana thuộc Pháp (Nam Mỹ), Réunion, Mayotte (châu Phi)', en: 'Guadeloupe, Martinique (North America), French Guiana (South America), Réunion, Mayotte (Africa)' },
  Spain: { c: ['europe', 'africa'], vi: 'quần đảo Canary (châu Phi)', en: 'Canary Islands (Africa)' },
  Portugal: { c: ['europe', 'africa'], vi: 'quần đảo Madeira (châu Phi)', en: 'Madeira (Africa)' },
  Netherlands: { c: ['europe', 'nam'], vi: 'Bonaire, Sint Eustatius, Saba (Caribbean, Bắc Mỹ)', en: 'Bonaire, Sint Eustatius, Saba (Caribbean, North America)' },
  'United States of America': { c: ['nam', 'oceania'], vi: 'Hawaii (châu Đại Dương)', en: 'Hawaii (Oceania)' },
  Chile: { c: ['sam', 'oceania'], vi: 'đảo Phục Sinh (châu Đại Dương)', en: 'Easter Island (Oceania)' },
  Yemen: { c: ['asia', 'africa'], vi: 'quần đảo Socotra (thềm lục địa châu Phi)', en: 'Socotra (on the African shelf)' },
  Colombia: { c: ['sam', 'nam'], vi: 'San Andrés và Providencia (Caribbean, Bắc Mỹ)', en: 'San Andrés and Providencia (Caribbean, North America)' }
};

// ---- geometry helpers (planar lon/lat; fine for these regional tests)
function inPoly(pt, poly) {
  const x = pt[0], y = pt[1];
  let ins = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ins = !ins;
  }
  return ins;
}
function lonAtLat(line, lat) {
  for (let i = 0; i < line.length - 1; i++) {
    const a = line[i], b = line[i + 1];
    if ((lat <= a[1] && lat >= b[1]) || (lat >= a[1] && lat <= b[1])) {
      const t = (lat - a[1]) / (b[1] - a[1] || 1);
      return a[0] + t * (b[0] - a[0]);
    }
  }
  return null;
}

// Ural Mountains crest, north to south, then the Ural River to the Caspian Sea.
const URAL = [
  [66.2, 68.48], [65.4, 67.6], [64.4, 66.72], [63.0, 66.0], [61.5, 65.6], [60.1, 65.03], [59.5, 64.3], [59.25, 63.88],
  [59.3, 62.8], [59.25, 61.85], [59.3, 60.5], [59.4, 59.6], [59.6, 58.6], [59.8, 57.6], [59.95, 57.0], [59.85, 56.3],
  [59.75, 55.6], [59.7, 55.1], [59.42, 54.7],
  // Ural River: Magnitogorsk, Orsk, Orenburg, Oral, Atyrau, mouth
  [59.3, 54.2], [59.1, 53.6], [59.05, 53.4], [58.95, 52.6], [58.8, 51.9], [58.57, 51.23], [57.6, 51.35], [56.5, 51.6],
  [55.1, 51.77], [54.2, 51.55], [53.3, 51.45], [52.3, 51.2], [51.37, 51.23], [51.17, 50.6], [51.25, 50.0], [51.6, 49.0],
  [51.75, 48.5], [51.92, 47.11], [51.85, 46.92]
];
// Greater Caucasus main watershed, west (Black Sea near Bolshoy Utrish, south of Anapa) to east (Caspian near Sumqayit).
const CAUCASUS = [
  [37.42, 44.74], [37.7, 44.82], [38.3, 44.45], [39.0, 44.25], [39.85, 43.97], [40.5, 43.65], [41.1, 43.45], [41.9, 43.25],
  [42.5, 43.1], [43.2, 42.95], [43.9, 42.75], [44.6, 42.55], [45.33, 42.57], [46.0, 42.25], [46.6, 41.85], [47.2, 41.6],
  [47.86, 41.22], [48.42, 41.03], [49.1, 40.85], [49.55, 40.62]
];
// Bosphorus, Sea of Marmara and Dardanelles (water axis), north-east to south-west.
const STRAITS = [
  [29.13, 41.22], [29.07, 41.12], [29.0, 41.01], [28.5, 40.85], [27.8, 40.72], [27.2, 40.6], [26.8, 40.45], [26.68, 40.36],
  [26.45, 40.2], [26.3, 40.1], [26.18, 40.02]
];
// Suez Canal, Port Said to Suez.
const SUEZ = [[32.31, 31.27], [32.31, 30.95], [32.28, 30.6], [32.35, 30.4], [32.42, 30.28], [32.57, 29.95]];
// Suez Canal + Gulf of Suez axis (for classifying Egypt: east of this = Sinai = Asia).
const SUEZ_GULF = [
  [32.31, 31.6], ...SUEZ, [32.5, 29.6], [32.62, 29.4], [32.85, 29.1], [33.05, 28.75], [33.27, 28.4], [33.45, 28.05],
  [33.8, 27.72], [34.3, 27.3]
];

// Coarse "Europe side" polygon used only for the Eurasian transcontinental countries.
const EUR_POLY = [
  [-35, 88], [75, 88], [72, 78], [63, 73],
  ...URAL,
  [51.9, 46.6], [49.8, 45.0], [49.6, 43.0], [49.9, 41.5], [49.9, 40.75],
  ...CAUCASUS.slice().reverse(),
  [36.0, 43.6], [31.0, 42.5], [29.2, 41.35],
  ...STRAITS,
  [25.7, 39.7], [25.5, 38.5], [25.0, 35.5], [-35, 30]
];
const EURASIA_SPLIT = new Set(['Russia', 'Turkey', 'Kazakhstan', 'Azerbaijan', 'Georgia']);

export const inPapua = (lon, lat) =>
  lon < 141.1 &&
  ((lat > -2.3 && lat < 1.2 && lon >= 129.6) || (lat <= -2.3 && lon >= 131.8 && !(lat < -4.9 && lon < 135.5)));

// Main continent of a country / territory (map feature name, region key from regions.js).
export function contOf(name, rg) {
  if (TRANS_LAND[name]) return TRANS_LAND[name].c[0];
  if (TRANS_ISLAND[name]) return TRANS_ISLAND[name].c[0];
  return BY_NAME[name] || BY_REGION[rg] || 'asia';
}
export const isSplit = name => !!(TRANS_LAND[name] || TRANS_ISLAND[name]);

// Continent of a single point inside a split country.
export function contAt(name, lon, lat) {
  if (EURASIA_SPLIT.has(name)) return inPoly([lon, lat], EUR_POLY) ? 'europe' : 'asia';
  switch (name) {
    case 'Egypt': {
      if (lat < 27.3) return 'africa';
      const x = lonAtLat(SUEZ_GULF, lat);
      return x !== null && lon > x ? 'asia' : 'africa';
    }
    case 'Indonesia':
      return inPapua(lon, lat) ? 'oceania' : 'asia';
    case 'Spain':
      return lon < -12 && lat < 30.5 ? 'africa' : 'europe';
    case 'Portugal':
      return lat < 34 && lon > -20 ? 'africa' : 'europe';
    case 'France':
      if (lon < -40) return lat > 10 ? 'nam' : 'sam';
      return lon > 40 && lat < 0 ? 'africa' : 'europe';
    case 'Netherlands':
      return lon < -30 ? 'nam' : 'europe';
    case 'United States of America':
      return lat < 30 && lon < -150 ? 'oceania' : 'nam';
    case 'Chile':
      return lon < -100 ? 'oceania' : 'sam';
    case 'Yemen':
      return lon > 52 && lat < 13.5 ? 'africa' : 'asia';
    case 'Colombia':
      return lon < -78.5 && lat > 11.5 ? 'nam' : 'sam';
  }
  return null;
}

// Land boundaries between continents, drawn as dashed lines. (Panama–Colombia comes from the topology.)
export const CONT_LINES = [
  { id: 'ural', coords: URAL },
  { id: 'caucasus', coords: CAUCASUS },
  { id: 'straits', coords: STRAITS },
  { id: 'suez', coords: SUEZ }
];

// UN membership (193). Map features that are not UN member states; everything else on the map with a non-'territory'
// region key is a member. Tuvalu is a member but has no polygon in world-atlas 50m.
export const NON_UN = new Set([
  'Taiwan', 'Kosovo', 'Palestine', 'Vatican', 'W. Sahara', 'Somaliland', 'N. Cyprus', 'Siachen Glacier', 'Antarctica',
  'Greenland', 'Puerto Rico', 'Hong Kong', 'Macao', 'Åland', 'Faeroe Is.', 'Aruba', 'Curaçao', 'Sint Maarten', 'St-Martin',
  'St-Barthélemy', 'Cook Is.', 'Niue'
]);
export const UN_EXTRA = { Tuvalu: 'oceania' };

// ---- Continent cards. Areas: Encyclopædia Britannica (approximate, Britannica's own boundaries).
// Population: UN World Population Prospects 2024, 1 July 2024 (medium variant), by UN M49 region, in thousands.
export const AREA_SRC = { vi: 'Encyclopædia Britannica', en: 'Encyclopædia Britannica' };
export const POP_SRC = {
  vi: 'Liên Hợp Quốc, World Population Prospects 2024 (ước tính ngày 1/7/2024, phương án trung bình)',
  en: 'United Nations, World Population Prospects 2024 (1 July 2024, medium variant)',
  link: 'https://population.un.org/wpp/'
};
export const WORLD_POP_2024 = 8161972.572;

export const CONT_CARD = {
  asia: {
    area: 44614000,
    areaLink: 'https://www.britannica.com/place/Asia',
    areaNote: { vi: 'gồm phần châu Á của Nga, không gồm đảo New Guinea', en: 'incl. Asian Russia, excl. New Guinea' },
    pop: [['Asia', 4806898.007]]
  },
  europe: {
    area: 10000000,
    areaLink: 'https://www.britannica.com/place/Europe',
    areaNote: { vi: 'khoảng 10 triệu km² trong ranh giới quy ước', en: 'about 10 million km² within conventional limits' },
    pop: [['Europe', 745083.824]]
  },
  africa: {
    area: 30365000,
    areaLink: 'https://www.britannica.com/place/Africa',
    pop: [['Africa', 1515140.849]]
  },
  americas: {
    area: 24230000 + 17814000,
    areaParts: [
      ['nam', 24230000, 'https://www.britannica.com/place/North-America'],
      ['sam', 17814000, 'https://www.britannica.com/place/South-America']
    ],
    pop: [
      ['Northern America', 385295.105],
      ['Latin America and the Caribbean', 663466.072]
    ]
  },
  oceania: {
    area: 7688126 + 822800,
    areaLink: 'https://www.britannica.com/place/Oceania-region-Pacific-Ocean',
    areaNote: { vi: 'Úc 7.688.126 km² cộng các đảo khác 822.800 km²', en: 'Australia 7,688,126 km² plus other islands 822,800 km²' },
    pop: [['Oceania', 46088.716]]
  },
  antarctica: {
    area: 14200000,
    areaLink: 'https://www.britannica.com/place/Antarctica',
    pop: null
  }
};

export const UN_REGION_VI = {
  Asia: 'châu Á',
  Europe: 'châu Âu',
  Africa: 'châu Phi',
  Oceania: 'châu Đại Dương',
  'Northern America': 'Bắc Mỹ (Northern America)',
  'Latin America and the Caribbean': 'Mỹ Latinh và Caribbean'
};

// Why the UN numbers do not match the map boundaries.
export const POP_NOTE = {
  vi: 'Dân số tính theo vùng của LHQ (M49), không trùng ranh giới địa lý trên bản đồ: LHQ xếp toàn bộ Nga vào châu Âu; Thổ Nhĩ Kỳ, Kazakhstan, Gruzia, Azerbaijan, Síp và cả Indonesia vào châu Á; toàn bộ Ai Cập vào châu Phi; Hawaii (Mỹ) vào Bắc Mỹ. LHQ không chia Bắc Mỹ / Nam Mỹ mà chia "Northern America" (Mỹ, Canada, Bermuda, Greenland, St. Pierre & Miquelon) và "Mỹ Latinh và Caribbean" (từ Mexico trở xuống).',
  en: 'Population follows UN (M49) regions, which differ from the geographic boundaries on the map: the UN puts all of Russia in Europe; Turkey, Kazakhstan, Georgia, Azerbaijan, Cyprus and all of Indonesia in Asia; all of Egypt in Africa; Hawaii (US) in Northern America. The UN does not split North / South America; it uses "Northern America" (US, Canada, Bermuda, Greenland, St. Pierre & Miquelon) and "Latin America and the Caribbean" (Mexico southward).'
};
export const BOUNDARY_NOTE = {
  vi: 'Ranh giới trên bản đồ theo địa lý: Á–Âu theo sống núi Ural, sông Ural, biển Caspi, sống núi Đại Kavkaz và eo Bosphorus–Dardanelles; Á–Phi theo kênh Suez; Bắc–Nam Mỹ theo biên giới Panama–Colombia. Đường vẽ tay, gần đúng ở tỉ lệ địa cầu.',
  en: 'Map boundaries are geographic: Asia–Europe follows the Ural crest, the Ural River, the Caspian Sea, the Greater Caucasus watershed and the Bosphorus–Dardanelles; Asia–Africa follows the Suez Canal; North–South America follows the Panama–Colombia border. Hand-drawn, approximate at globe scale.'
};
