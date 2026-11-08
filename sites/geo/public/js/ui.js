import { NAMES, REGIONS } from '../data/regions.js';
import { C0, TOOLS } from '../data/countries.js?v=20261108g';
import { RELC, REL } from '../data/religions.js';
import { LAYERS, UPDATED, H } from '../data/hotspots.js';
import { iconSvg } from './icons.js';
import { AL, REF } from '../data/alliances.js';
import {
  $,
  norm,
  vi,
  isEn,
  tr,
  cName,
  hName,
  hTx,
  layName,
  capName,
  cityName,
  islName,
  adm1Name,
  lakeName,
  TOOLS_EN,
  REGIONS_EN,
  AL_EN,
  REF_EN,
  RELC_EN,
  REL_EN,
  C0_EN,
  UPDATED_EN,
  LAKE_META_EN,
  CAPITALS_EN,
  CITIES_EN,
  ISLANDS_EN,
  ADMIN1_EN,
  ECON_TIERS,
  ECON_SECTORS,
  ECON,
  RANK_METRICS,
  RANK_DATA,
  rankValColor,
  fmtRankVal,
  MEM,
  HS,
  BY,
  MAP,
  st,
  C,
  readTheme,
  savePrefs,
  on,
  ADMIN_LAYERS,
  DEFAULT_ON,
  isMobileViewport,
  CAPITALS,
  CITIES,
  ISLANDS,
  CAP_BY_ID,
  CITY_BY_ID,
  ISL_BY_ID,
  ADM1_BY_ID,
  LAKE_BY_ID
} from './state.js?v=20261108g';
import {
  cv,
  proj,
  resize,
  recenter,
  pick,
  flyTo,
  fitK,
  setK,
  getK,
  MIN_K,
  MAX_K,
  stopSpin,
  inBB,
  rebuildSearchIndex,
  CONT_OBJS,
  contName
} from './globe.js?v=20261108g';
import {
  CONT,
  AMERICAS,
  TRANS_LAND,
  TRANS_ISLAND,
  NON_UN,
  UN_EXTRA,
  CONT_CARD,
  AREA_SRC,
  POP_SRC,
  POP_NOTE,
  BOUNDARY_NOTE,
  UN_REGION_VI,
  WORLD_POP_2024,
  cardKey,
  contOf
} from '../data/continents.js?v=20261108g';

const P = $('#panel');
const PB = $('#pbody');
const RTL_VI = { g: 'Thuận lợi', m: 'Lẫn lộn', b: 'Thử thách', n: '—' };
const RTL_EN = { g: 'Favorable', m: 'Mixed', b: 'Challenging', n: '—' };
const rtl = r => (isEn() ? RTL_EN[r] || '—' : RTL_VI[r] || '—');

// Pre-compute sovereign country leaderboards & ranks for all 6 global metrics
const NON_SOVEREIGN_SET = new Set([
  'Åland',
  'Faeroe Is.',
  'Greenland',
  'Puerto Rico',
  'Curaçao',
  'Aruba',
  'Sint Maarten',
  'Saint-Martin',
  'St-Barthélemy',
  'Cook Is.',
  'Niue',
  'W. Sahara',
  'N. Cyprus',
  'Somaliland'
]);

const RANK_LISTS = {};
const COUNTRY_RANKS = {};

Object.values(RANK_METRICS).forEach(m => {
  const entries = [];
  for (const [en, row] of Object.entries(RANK_DATA)) {
    if (!row || row[m.idx] === null || row[m.idx] === undefined) continue;
    const rg = (NAMES[en] || [, 'territory'])[1];
    if (rg === 'territory' || rg === 'antarctic' || NON_SOVEREIGN_SET.has(en)) continue;
    entries.push({ en, val: row[m.idx] });
  }
  entries.sort((a, b) => b.val - a.val);
  const maxVal = entries.length ? entries[0].val : 1;
  const minVal = entries.length ? entries[entries.length - 1].val : 0;
  entries.forEach((item, idx) => {
    item.rankDesc = idx + 1;
    item.rankAsc = entries.length - idx;
    if (!COUNTRY_RANKS[item.en]) COUNTRY_RANKS[item.en] = {};
    COUNTRY_RANKS[item.en][m.key] = {
      rank: idx + 1,
      rankAsc: entries.length - idx,
      total: entries.length,
      val: item.val
    };
  });
  RANK_LISTS[m.key] = { entries, maxVal, minVal, total: entries.length };
});

const QVIEWS = [
  { n: 'Việt Nam & Biển Đông', en: 'Vietnam & East Sea', ll: [108, 15], k: 2.3 },
  { n: 'Châu Âu & Nga', en: 'Europe & Russia', ll: [25, 52], k: 1.8 },
  { n: 'Trung Đông', en: 'Middle East', ll: [46, 27], k: 2.2 },
  { n: 'Đông Á', en: 'East Asia', ll: [122, 32], k: 1.9 },
  { n: 'Bắc Mỹ', en: 'North America', ll: [-98, 38], k: 1.6 },
  { n: 'Bắc Cực', en: 'The Arctic', ll: [0, 82], k: 1.6 }
];

const LAKE_META = {
  caspian: {
    area: '~371.000 km²',
    rel: ['Russia', 'Iran', 'Kazakhstan', 'Turkmenistan', 'Azerbaijan'],
    tx: 'Thể nước nội lục lớn nhất hành tinh nằm giữa vùng Kavkaz, Trung Á và Iran; giàu trữ lượng dầu mỏ, khí đốt ngoài khơi (Kashagan, Shah Deniz) và là hành lang vận tải Bắc – Nam giúp Nga và Iran giao thương trực tiếp không qua vùng biển do phương Tây kiểm soát. Công ước Aktau (2018) giữa 5 nước ven biển cấm mọi lực lượng quân sự ngoài khu vực hiện diện tại Biển Caspi.'
  },
  aral: {
    area: '~8.000 km² (thu hẹp >85%)',
    rel: ['Kazakhstan', 'Uzbekistan'],
    tx: 'Từng là hồ lớn thứ tư thế giới (~68.000 km²), nhưng đã thu hẹp hơn 85% từ thập niên 1960 do Liên Xô chuyển hướng hai con sông cấp nước là Amu Darya và Syr Darya để tưới đồng bông vải giữa sa mạc Trung Á — trở thành một trong những thảm họa sinh thái nhân tạo lớn nhất lịch sử hiện đại.'
  },
  baikal: {
    area: '31.722 km²',
    rel: ['Russia'],
    tx: 'Hồ nước ngọt sâu nhất (1.642 m) và cổ xưa nhất thế giới ở nam Siberia, chứa tới ~20% tổng lượng nước ngọt bề mặt không đóng băng của toàn nhân loại. Tuyến Đường sắt Xuyên Siberia huyết mạch của Nga phải uốn vòng quanh mũi cực nam hiểm trở của hồ Baikal.'
  },
  tonlesap: {
    area: '2.700–16.000 km² (theo mùa)',
    rel: ['Cambodia', 'Vietnam'],
    tx: 'Biển Hồ lớn nhất Đông Nam Á nằm ở trung tâm đồng bằng Campuchia, đóng vai trò "van điều tiết lũ tự nhiên" sống còn cho cả hạ lưu sông Mê Kông và Đồng bằng sông Cửu Long của Việt Nam: mùa lũ nhận nước từ Mê Kông chảy ngược vào qua sông Tonlé Sap, mùa khô xả nước ra cứu hạn và đẩy mặn.'
  },
  victoria: {
    area: '59.947 km²',
    rel: ['Tanzania', 'Uganda', 'Kenya'],
    tx: 'Hồ nhiệt đới lớn nhất thế giới và là hồ nước ngọt lớn thứ hai hành tinh, nằm giữa Tanzania, Uganda và Kenya. Đây là nguồn khởi phát của nhánh sông Nile Trắng — mạch nước nuôi sống Sudan và Ai Cập ở hạ lưu.'
  },
  tanganyika: {
    area: '32.900 km²',
    rel: ['Tanzania', 'Dem. Rep. Congo', 'Burundi', 'Zambia'],
    tx: 'Hồ nước ngọt dài nhất thế giới (673 km) và sâu thứ hai hành tinh (sau Baikal), nằm dọc nhánh tây của Đới tách giãn Đông Phi (Great Rift Valley), tạo thành biên giới tự nhiên giữa CHDC Congo với Tanzania và Burundi.'
  },
  malawi: {
    area: '29.600 km²',
    rel: ['Malawi', 'Mozambique', 'Tanzania'],
    tx: 'Hồ cực nam trong chuỗi hồ lớn Đới tách giãn Đông Phi, là nguồn sống và tuyến giao thông thủy xương sống của Malawi, đồng thời có tranh chấp phân định mặt nước giàu tiềm năng dầu khí giữa Malawi và Tanzania.'
  },
  chad: {
    area: '~1.500–15.000 km²',
    rel: ['Chad', 'Nigeria', 'Niger', 'Cameroon'],
    tx: 'Hồ nội lục nông ở ngã tư biên giới Chad – Nigeria – Niger – Cameroon ngay rìa nam sa mạc Sahara (vùng Sahel). Diện tích mặt nước biến động dữ dội do biến đổi khí hậu và khai thác tưới tiêu đã làm trầm trọng thêm xung đột tài nguyên và khủng hoảng an ninh Boko Haram trong lưu vực.'
  },
  tana: {
    area: '3.060 km²',
    rel: ['Ethiopia'],
    tx: 'Hồ lớn nhất Ethiopia nằm trên cao nguyên Amhara ở độ cao 1.788 m — chính là nơi phát nguyên của dòng sông Nile Xanh (cung cấp tới 85% lượng nước lũ hàng năm cho sông Nile tại Ai Cập và nuôi đập thủy điện Đại Phục Hưng GERD được khánh thành tháng 9/2025).'
  },
  deadsea: {
    area: '~605 km²',
    rel: ['Israel', 'Jordan', 'Palestine'],
    tx: 'Hồ nước mặn nằm ở điểm thấp nhất trên bề mặt lục địa Trái Đất (~430 m dưới mực nước biển) trong thung lũng đứt gãy Jordan giữa Israel, Bờ Tây (Palestine) và Jordan; giàu khoáng sản kali (potash) và brom nhưng đang cạn dần do nước sông Jordan bị khai thác kiệt ở thượng nguồn.'
  },
  galilee: {
    area: '166 km²',
    rel: ['Israel', 'Syria'],
    tx: 'Hồ nước ngọt chiến lược ở đông bắc Israel ngay dưới chân Cao nguyên Golan. Quyền kiểm soát nguồn nước hồ Galilee và thượng nguồn sông Jordan là một trong những nguyên nhân địa chính trị trực tiếp dẫn tới Chiến tranh Sáu ngày năm 1967.'
  },
  superior: {
    area: '82.100 km²',
    rel: ['United States of America', 'Canada'],
    tx: 'Hồ lớn nhất, sâu nhất và nằm ở thượng nguồn cao nhất trong hệ thống Ngũ Đại Hồ (Great Lakes) Bắc Mỹ — hồ nước ngọt có diện tích mặt nước lớn nhất thế giới, kết nối các mỏ quặng sắt vùng Mesabi với trung tâm công nghiệp nặng Mỹ – Canada qua âu tàu Soo Locks.'
  },
  michigan: {
    area: '58.030 km²',
    rel: ['United States of America'],
    tx: 'Hồ duy nhất trong Ngũ Đại Hồ nằm hoàn toàn trong lãnh thổ Hoa Kỳ; tại bờ nam của hồ là đại đô thị Chicago — nơi kênh đào Chicago nối thẳng lưu vực Ngũ Đại Hồ – St. Lawrence với hệ thống sông Mississippi.'
  },
  huron: {
    area: '59.600 km²',
    rel: ['United States of America', 'Canada'],
    tx: 'Hồ lớn thứ hai trong Ngũ Đại Hồ, nối liền với hồ Michigan qua eo biển Mackinac và nối xuống hồ Erie qua hành lang sông St. Clair – Detroit trên biên giới Mỹ – Canada.'
  },
  erie: {
    area: '25.744 km²',
    rel: ['United States of America', 'Canada'],
    tx: 'Hồ nông nhất trong Ngũ Đại Hồ, nối với cảng New York và Đại Tây Dương qua Kênh đào Erie lịch sử (1825) — công trình đã biến New York thành trung tâm tài chính số một nước Mỹ.'
  },
  ontario: {
    area: '18.960 km²',
    rel: ['United States of America', 'Canada'],
    tx: 'Hồ cực đông và thấp nhất của Ngũ Đại Hồ (nhận nước từ hồ Erie qua thác Niagara), là cửa ngõ dẫn trực tiếp ra sông St. Lawrence và Đại Tây Dương, trên bờ bắc là trung tâm kinh tế Toronto của Canada.'
  },
  titicaca: {
    area: '8.372 km²',
    rel: ['Peru', 'Bolivia'],
    tx: 'Hồ có tàu bè lớn đi lại được nằm ở độ cao lớn nhất thế giới (3.812 m trên cao nguyên Altiplano của dãy Andes), chia đôi giữa Peru và Bolivia; nơi Hải quân Bolivia (quốc gia mất biển từ năm 1879) vẫn duy trì lực lượng tuần tra.'
  },
  maracaibo: {
    area: '13.210 km²',
    rel: ['Venezuela'],
    tx: 'Vịnh nước lợ thông với biển Caribbean qua một eo hẹp ở tây bắc Venezuela — cái nôi của ngành công nghiệp dầu mỏ Venezuela với hàng nghìn giếng dầu dưới lòng hồ.'
  },
  nicaragua: {
    area: '8.264 km²',
    rel: ['Nicaragua'],
    tx: 'Hồ nước ngọt lớn nhất Trung Mỹ (Cocibolca), chỉ cách Thái Bình Dương một dải đất hẹp (eo đất Rivas) và thông ra biển Caribbean qua sông San Juan — từng là tuyến ứng viên số một để đào kênh xuyên đại dương cạnh tranh với kênh đào Panama.'
  },
  ladoga: {
    area: '17.700 km²',
    rel: ['Russia'],
    tx: 'Hồ nước ngọt lớn nhất châu Âu nằm ở tây bắc Nga ngay sát St. Petersburg và biên giới Phần Lan; mặt băng hồ Ladoga chính là "Con đường Sống" (Road of Life) duy nhất tiếp tế cho thành phố Leningrad trong 872 ngày bị phát xít Đức bao vây (1941–1944).'
  }
};

function fmtCoord(pt) {
  if (!pt || pt.length < 2) return '—';
  const enMode = isEn();
  const lon = Math.abs(pt[0]).toFixed(1) + '°' + (pt[0] >= 0 ? (enMode ? 'E' : 'Đ') : (enMode ? 'W' : 'T'));
  const lat = Math.abs(pt[1]).toFixed(1) + '°' + (pt[1] >= 0 ? (enMode ? 'N' : 'B') : (enMode ? 'S' : 'N'));
  return `${lat}, ${lon}`;
}

let activeView = null;

export function openPanel(html) {
  PB.innerHTML = html;
  PB.scrollTop = 0;
  P.classList.add('show');
  document.body.classList.add('panel-open');
  if (isMobileViewport() && !$('#layers').classList.contains('hide')) {
    $('#layers').classList.add('hide');
    $('#layBtn').classList.remove('on');
  }
  wire();
  recenter();
}

export function closePanel() {
  P.classList.remove('show');
  document.body.classList.remove('panel-open');
  st.sel = null;
  activeView = null;
  st.dirty = true;
  recenter();
}

function chipH(id) {
  const h = HS[id];
  if (!h) return '';
  return `<span class="chip" data-h="${id}"><span class="dot" style="background:${LAYERS[h.t].c}"></span>${hName(h)}</span>`;
}

function chipC(en) {
  if (!BY[en]) return '';
  return `<span class="chip" data-c="${en}">${cName(en)}</span>`;
}

function chipA(k2, full) {
  const a = AL[k2];
  const aEn = AL_EN[k2];
  const name = isEn() && aEn ? aEn.n : a.n;
  const partnerSuffix = full ? '' : tr(' (đối tác)', ' (partner)');
  return `<span class="chip" data-a="${k2}"><span class="dot" style="background:${a.c};opacity:${full ? 1 : 0.45}"></span>${name}${partnerSuffix}</span>`;
}

function chipAdm1(a) {
  return `<span class="chip" data-adm1="${a.id}"><span class="dot" style="background:#7C3AED"></span>${adm1Name(a)}</span>`;
}

function chipUrban(o) {
  const col = o.kind === 'cap' ? '#E8590C' : o.kind === 'isl' ? '#0D9488' : '#2563EB';
  const attr = o.kind === 'cap' ? `data-cap="${o.id}"` : o.kind === 'isl' ? `data-isl="${o.id}"` : `data-city="${o.id}"`;
  const lbl = o.kind === 'cap' ? capName(o) : o.kind === 'isl' ? islName(o) : cityName(o);
  return `<span class="chip" ${attr}><span class="dot" style="background:${col}"></span>${lbl}</span>`;
}

function C_(en) {
  return isEn() ? C0_EN[en] || C0[en] : C0[en];
}

function fmtSum(txt) {
  if (!txt) return '';
  const paras = String(txt)
    .split(/\n+/)
    .map(p => p.trim())
    .filter(Boolean);
  return `<div class="sum">${paras.map(p => `<p>${p}</p>`).join('')}</div>`;
}

function econHTML(en) {
  const ec = ECON[en];
  if (!ec) return '';
  const enMode = isEn();
  const tInfo = ECON_TIERS[ec.tier] || ECON_TIERS.dev;
  const tierName = enMode ? tInfo.en : tInfo.vi;
  const gdp = enMode ? ec.gdp_en : ec.gdp_vi;
  const pc = enMode ? ec.pc_en : ec.pc_vi;
  const main = enMode ? ec.main_en : ec.main_vi;
  const note = enMode ? ec.note_en : ec.note_vi;
  const sec = ec.sec || [50, 30, 20];
  const tot = sec.reduce((a, b) => a + b, 0) || 100;
  const pcts = sec.map(v => Math.round((v / tot) * 100));

  let offset = 0;
  const slices = pcts
    .map((p, idx) => {
      if (p <= 0) return '';
      const col = ECON_SECTORS[idx].c;
      const dash = `${p} ${100 - p}`;
      const off = 25 - offset;
      offset += p;
      return `<circle cx="21" cy="21" r="15.9155" fill="none" stroke="${col}" stroke-width="6.5" stroke-dasharray="${dash}" stroke-dashoffset="${off}"/>`;
    })
    .join('');

  const domIdx = pcts[0] >= pcts[1] && pcts[0] >= pcts[2] ? 0 : pcts[1] >= pcts[2] ? 1 : 2;
  const sRows = ECON_SECTORS.map(
    (s, idx) =>
      `<div class="econ-srow"><span><i style="background:${s.c}"></i>${enMode ? s.en : s.vi}</span><b>${pcts[idx]}%</b></div>`
  ).join('');

  const grPositive = String(ec.gr || '').trim().startsWith('+');
  const grNeg = String(ec.gr || '').trim().startsWith('-');
  const grCol = grPositive ? 'var(--g)' : grNeg ? 'var(--b)' : 'var(--ink)';

  const rRow = RANK_DATA[en];
  const rMeta = COUNTRY_RANKS[en] || {};
  let rankGridHTML = '';
  if (rRow && rRow[0] !== null) {
    const badgeKeys = ['happiness', 'pollution', 'hdi', 'life'];
    const cells = badgeKeys
      .map(k2 => {
        const m = RANK_METRICS[k2];
        const v = rRow[m.idx];
        if (v === null || v === undefined) return '';
        const col = rankValColor(v, m) || 'var(--accent)';
        const rk = rMeta[k2];
        const rkBadge = rk ? `<span class="rk-num">#${rk.rank}</span>` : '';
        return `<div class="rk-pill" data-rk="${k2}" data-back="${en}" title="${tr('Bấm để xem Bảng xếp hạng & Bản đồ nhiệt thế giới', 'Click to view World Leaderboard & Heatmap')}">
          <div class="rk-pill-top"><span>${enMode ? m.short_en : m.short_vi}</span>${rkBadge}</div>
          <div class="rk-pill-val"><i style="background:${col}"></i><b>${fmtRankVal(v, m, enMode)}</b></div>
        </div>`;
      })
      .join('');
    rankGridHTML = `<div class="rk-sec-hd"><span>${tr('CHỈ SỐ & XẾP HẠNG THẾ GIỚI', 'GLOBAL INDICATORS & RANKINGS')}</span><small>${tr('bấm để mở bảng xếp hạng', 'click for leaderboard')}</small></div><div class="rk-grid">${cells}</div>`;
  }

  return `<div class="econ-box">
    <div class="econ-hd">
      <span>${tr('KINH TẾ & PHÁT TRIỂN', 'ECONOMY & DEVELOPMENT')}</span>
      <span class="econ-tier" data-a="__econ__" title="${tr('Bấm để tô màu bản đồ thế giới theo phân nhóm kinh tế', 'Click to color globe by economic development tier')}" style="background:${tInfo.c}20;color:${tInfo.c};border:1px solid ${tInfo.c}55"><i style="background:${tInfo.c}"></i>${tierName}</span>
    </div>
    <div class="econ-grid">
      <div class="econ-stat rk-click" data-rk="gdp" data-back="${en}" title="${tr('Bấm để xem Bảng xếp hạng Quy mô GDP thế giới', 'Click to view World Nominal GDP Ranking')}"><small>${tr('Quy mô GDP (danh nghĩa)', 'Nominal GDP')} ↗</small><b>${gdp}</b></div>
      <div class="econ-stat rk-click" data-rk="income" data-back="${en}" title="${tr('Bấm để xem Bảng xếp hạng Thu nhập bình quân thế giới', 'Click to view World GDP per Capita Ranking')}"><small>${tr('Thu nhập bình quân / năm', 'GDP per Capita')} ↗</small><b>${pc}</b></div>
    </div>
    <div class="econ-chart">
      <svg class="econ-pie" viewBox="0 0 42 42" aria-label="${tr('Cơ cấu GDP', 'GDP Composition')}">
        <circle cx="21" cy="21" r="15.9155" fill="none" stroke="var(--line)" stroke-width="6.5"/>
        ${slices}
        <text x="21" y="22.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">${pcts[domIdx]}%</text>
      </svg>
      <div class="econ-sleg">
        ${sRows}
        <div class="econ-srow" style="border-top:1px solid var(--line);padding-top:3px;margin-top:1px"><span>${tr('Tăng trưởng thực tế', 'Real GDP Growth')}</span><b style="color:${grCol}">${ec.gr || '—'}</b></div>
      </div>
    </div>
    <div class="econ-main"><b>${tr('Ngành mũi nhọn:', 'Key Industries:')}</b> ${main}</div>
    ${note ? `<div class="econ-note">${note}</div>` : ''}
    <div style="font-size:11px;color:var(--faint);margin-top:6px;text-align:right">${tr('Nguồn: World Bank WDI (2024) & thống kê chính thức', 'Source: World Bank WDI (2024) & official statistics')}</div>
    ${rankGridHTML}
  </div>`;
}

function relHTML(en) {
  const r = REL[en];
  if (!r) return '';
  const enMode = isEn();
  const relLabel = k => (enMode && RELC_EN[k] ? RELC_EN[k] : RELC[k][0]);
  const tot = r.d.reduce((a, b) => a + b[1], 0);
  const bar = r.d
    .map(x => `<span title="${relLabel(x[0])} ~${x[1]}%" style="width:${(x[1] / tot) * 100}%;background:${RELC[x[0]][1]}"></span>`)
    .join('');
  const leg = r.d
    .map(x => `<span><i style="background:${RELC[x[0]][1]}"></i>${relLabel(x[0])} <b>${x[1] < 1 ? '<1' : Math.round(x[1])}%</b></span>`)
    .join('');
  const note = enMode ? REL_EN[en] || r.note : r.note;
  return `<div class="sec" style="margin-top:4px">${tr('TÔN GIÁO', 'RELIGION')} <span style="font-weight:400;color:var(--faint)">· ${tr('ước tính', 'estimated')}</span></div><div class="rbar">${bar}</div><div class="rleg">${leg}</div>${note ? `<div class="rnote">${note}</div>` : ''}`;
}

function compareHTML(en1, en2) {
  activeView = { type: 'cmp', en1, en2 };
  const enMode = isEn();
  const d1 = C_(en1), d2 = C_(en2);
  const v1 = cName(en1), v2 = cName(en2);
  const toolsArr = enMode ? TOOLS_EN : TOOLS;
  let s = `<div class="kick">${tr('SO SÁNH ĐỊA CHÍNH TRỊ & KINH TẾ', 'GEOPOLITICAL & ECONOMIC COMPARISON')}</div><h1>${v1} ⇄ ${v2}</h1>`;
  s += `<div style="display:flex;gap:6px;margin-bottom:12px"><button class="btn" id="cmpBack" data-c="${en1}">← ${tr('Quay lại', 'Back to')} ${v1}</button><button class="btn" id="cmpSwap" data-c1="${en2}" data-c2="${en1}">⇄ ${tr('Đổi chiều', 'Swap')}</button></div>`;
  s += `<div class="cmp-grid">`;
  s += `<div class="cmp-col"><b class="lnk-inline" data-c="${en1}">${v1}</b><div><small style="color:var(--muted)">${tr('Thủ đô:', 'Capital:')}</small> ${(d1 && d1.cap) || '—'}</div><div><small style="color:var(--muted)">${tr('Dân số:', 'Population:')}</small> ${(d1 && d1.pop) || '—'}</div><div><small style="color:var(--muted)">${tr('Diện tích:', 'Area:')}</small> ${(d1 && d1.area) || '—'}</div></div>`;
  s += `<div class="cmp-col"><b class="lnk-inline" data-c="${en2}">${v2}</b><div><small style="color:var(--muted)">${tr('Thủ đô:', 'Capital:')}</small> ${(d2 && d2.cap) || '—'}</div><div><small style="color:var(--muted)">${tr('Dân số:', 'Population:')}</small> ${(d2 && d2.pop) || '—'}</div><div><small style="color:var(--muted)">${tr('Diện tích:', 'Area:')}</small> ${(d2 && d2.area) || '—'}</div></div>`;
  s += `</div>`;

  const ec1 = ECON[en1], ec2 = ECON[en2];
  if (ec1 || ec2) {
    const fmtEc = (ec, enCode) => {
      if (!ec) return '—';
      const tInfo = ECON_TIERS[ec.tier] || ECON_TIERS.dev;
      const rRow = RANK_DATA[enCode];
      const rk = COUNTRY_RANKS[enCode] || {};
      const xtra =
        rRow && rRow[0] !== null
          ? `<div style="margin-top:4px;padding-top:4px;border-top:1px dashed var(--line);font-size:11.5px;display:grid;gap:2px">
              <div><small style="color:var(--muted)">😊 ${tr('Hạnh phúc:', 'Happiness:')}</small> <b>${rRow[0].toFixed(2)}</b> ${rk.happiness ? `<small style="color:var(--faint)">(#${rk.happiness.rank})</small>` : ''}</div>
              <div><small style="color:var(--muted)">🌫️ PM2.5:</small> <b>${rRow[2].toFixed(1)} µg/m³</b></div>
              <div><small style="color:var(--muted)">🎓 HDI:</small> <b>${rRow[3].toFixed(3)}</b> ${rk.hdi ? `<small style="color:var(--faint)">(#${rk.hdi.rank})</small>` : ''}</div>
              <div><small style="color:var(--muted)">❤️ ${tr('Tuổi thọ:', 'Life Exp:')}</small> <b>${rRow[4].toFixed(1)} ${tr('năm', 'yrs')}</b></div>
            </div>`
          : '';
      return `<div style="margin-bottom:4px"><span class="econ-tier" data-a="__econ__" style="background:${tInfo.c}20;color:${tInfo.c};border:1px solid ${tInfo.c}55"><i style="background:${tInfo.c}"></i>${enMode ? tInfo.en : tInfo.vi}</span></div><div><small style="color:var(--muted)">GDP:</small> <b>${enMode ? ec.gdp_en : ec.gdp_vi}</b></div><div><small style="color:var(--muted)">${tr('Thu nhập/người:', 'Per capita:')}</small> ${enMode ? ec.pc_en : ec.pc_vi}</div><div><small style="color:var(--muted)">${tr('Tăng trưởng:', 'Growth:')}</small> <b>${ec.gr}</b></div>${xtra}`;
    };
    s += `<div class="cmp-t"><div class="cmp-t-hd">📊 ${tr('KINH TẾ & CHỈ SỐ PHÁT TRIỂN', 'ECONOMY & DEVELOPMENT INDICATORS')}</div><div class="cmp-grid" style="margin:4px 0 0"><div class="cmp-col">${fmtEc(ec1, en1)}</div><div class="cmp-col">${fmtEc(ec2, en2)}</div></div></div>`;
  }

  if (d1 && d2) {
    const ems = ['🛡️', '⚓', '🌊', '📏', '💧'];
    for (let i = 0; i < 5; i++) {
      const t1 = d1.t[i] || ['n', '—'], t2 = d2.t[i] || ['n', '—'];
      const r1 = t1[1] ? t1[0] : 'n', r2 = t2[1] ? t2[0] : 'n';
      const dt1 = t1[2] ? `<div style="margin-top:4px;font-size:12px;color:var(--muted);line-height:1.5">${t1[2]}</div>` : '';
      const dt2 = t2[2] ? `<div style="margin-top:4px;font-size:12px;color:var(--muted);line-height:1.5">${t2[2]}</div>` : '';
      s += `<div class="cmp-t"><div class="cmp-t-hd">${ems[i]} ${toolsArr[i][0]}</div><div class="cmp-grid" style="margin:4px 0 0"><div class="cmp-col"><span class="rt ${r1}" style="display:inline-block;margin-bottom:4px">${rtl(r1)}</span><div style="font-weight:500">${t1[1] || '—'}</div>${dt1}</div><div class="cmp-col"><span class="rt ${r2}" style="display:inline-block;margin-bottom:4px">${rtl(r2)}</span><div style="font-weight:500">${t2[1] || '—'}</div>${dt2}</div></div></div>`;
    }
  }
  const m1 = (MEM[en1] || []).map(x => chipA(x[0], x[1])).join('');
  const m2 = (MEM[en2] || []).map(x => chipA(x[0], x[1])).join('');
  if (m1 || m2) {
    s += `<div class="cmp-t"><div class="cmp-t-hd">${tr('THÀNH VIÊN CÁC KHỐI', 'ALLIANCE MEMBERSHIPS')}</div><div class="cmp-grid" style="margin:4px 0 0"><div class="cmp-col"><div class="chips">${m1 || '—'}</div></div><div class="cmp-col"><div class="chips">${m2 || '—'}</div></div></div></div>`;
  }
  return s;
}

// ---------- continents
const contMeta = key => (key === 'americas' ? AMERICAS : CONT[key]);
const contLbl = key => (isEn() ? contMeta(key).en : contMeta(key).vi);
// label for a continent chip: North / South America read as part of the Americas
const contChipLbl = k2 =>
  k2 === 'nam' || k2 === 'sam' ? `${contLbl('americas')} (${contLbl(k2)})` : contLbl(k2);
// theme-aware swatch: CSS picks --cl (light) or --cd (dark)
const contVars = k2 => `--cl:${CONT[k2].c[0]};--cd:${CONT[k2].c[1]}`;
const contDot = k2 => `<span class="dot cdot" style="${contVars(k2)}"></span>`;
const contChip = k2 => `<span class="chip" data-cont="${k2}">${contDot(k2)}${contChipLbl(k2)}</span>`;

function contLineHTML(f) {
  const tl = TRANS_LAND[f.en];
  const ti = TRANS_ISLAND[f.en];
  const keys = tl ? tl.c : [contOf(f.en, f.rg)];
  let s = `<div class="cont-line"><span class="cont-lbl">${tr('Châu lục', 'Continent')}</span><span class="chips">${keys
    .map(contChip)
    .join('')}</span>`;
  if (tl) s += `<span class="cont-tag">${tr('xuyên lục địa', 'transcontinental')}</span>`;
  s += `</div>`;
  if (tl) s += `<div class="cont-note">${isEn() ? tl.en : tl.vi}</div>`;
  else if (ti) s += `<div class="cont-note">${tr('Có lãnh thổ hải đảo ở châu khác: ', 'Has island territory in another continent: ')}${isEn() ? ti.en : ti.vi}</div>`;
  return s;
}

function unMembers() {
  const list = MAP.F.filter(f => !NON_UN.has(f.en) && f.rg !== 'territory').map(f => ({ en: f.en, c: contOf(f.en, f.rg), f }));
  Object.entries(UN_EXTRA).forEach(([en, c]) => list.push({ en, c, f: null }));
  return list;
}

function contHTML(o) {
  activeView = { type: 'cont', o };
  const enMode = isEn();
  const key = o.key;
  const card = CONT_CARD[key];
  const loc = enMode ? 'en-US' : 'vi-VN';
  const meta = contMeta(key);
  const fmtArea = v =>
    enMode
      ? `${(v / 1e6).toLocaleString(loc, { maximumFractionDigits: 2 })} million km²`
      : `${(v / 1e6).toLocaleString(loc, { maximumFractionDigits: 2 })} triệu km²`;
  const fmtPop = th =>
    th >= 1e6
      ? enMode
        ? `${(th / 1e6).toLocaleString(loc, { maximumFractionDigits: 2 })} billion`
        : `${(th / 1e6).toLocaleString(loc, { maximumFractionDigits: 2 })} tỷ`
      : enMode
      ? `${(th / 1e3).toLocaleString(loc, { maximumFractionDigits: 1 })} million`
      : `${(th / 1e3).toLocaleString(loc, { maximumFractionDigits: 1 })} triệu`;
  const pct = th => `${((th / WORLD_POP_2024) * 100).toLocaleString(loc, { maximumFractionDigits: 1 })}%`;
  const unName = n => (enMode ? n : UN_REGION_VI[n] || n);
  const subs = key === 'americas' ? ['nam', 'sam'] : [key];

  let s = `<div class="kick">${tr('CHÂU LỤC', 'CONTINENT')}</div><h1>${contLbl(key)}</h1><div class="sub-h1">${enMode ? meta.vi : meta.en}</div>`;
  s += `<div class="cont-leg">${subs
    .map(k2 => `<span><i class="cdot" style="${contVars(k2)}"></i>${key === 'americas' ? contLbl(k2) : tr('Đường viền trên bản đồ', 'Outline on the map')}</span>`)
    .join('')}</div>`;

  // stats
  const popTotal = card.pop ? card.pop.reduce((a, p) => a + p[1], 0) : null;
  const members = unMembers();
  const trans = Object.entries(TRANS_LAND).filter(([, t]) => t.c.some(c => cardKey(c) === key));
  const inside = members.filter(m => cardKey(m.c) === key && !TRANS_LAND[m.en]);
  s += `<div class="stats">
    <div class="stat"><small>${tr('Diện tích (xấp xỉ)', 'Area (approx.)')}</small><div>${fmtArea(card.area)}</div></div>
    <div class="stat"><small>${tr('Dân số 2024', 'Population 2024')}</small><div>${popTotal ? fmtPop(popTotal) : tr('Không có dân thường trú', 'No permanent population')}</div></div>
    <div class="stat"><small>${tr('Nước thành viên LHQ', 'UN member states')}</small><div>${inside.length}${trans.length ? ` <span style="color:var(--muted);font-size:12px">+ ${trans.length} ${tr('xuyên lục địa', 'transcontinental')}</span>` : ''}</div></div>
  </div>`;

  // breakdown
  const rows = [];
  if (card.areaParts)
    card.areaParts.forEach(([k2, v, link]) =>
      rows.push(`<div class="cont-row"><span>${contDot(k2)}${tr('Diện tích', 'Area')} ${contLbl(k2)}</span><b>${fmtArea(v)}</b><a href="${link}" target="_blank" rel="noopener" aria-label="${tr('Nguồn', 'Source')}">↗</a></div>`)
    );
  if (card.pop) {
    if (card.pop.length > 1)
      card.pop.forEach(([n, th]) =>
        rows.push(`<div class="cont-row"><span>${tr('Dân số', 'Population')} ${unName(n)}</span><b>${fmtPop(th)}</b><small>${pct(th)}</small></div>`)
      );
    else rows.push(`<div class="cont-row"><span>${tr('Tỉ lệ dân số thế giới', 'Share of world population')}</span><b>${pct(popTotal)}</b></div>`);
  }
  if (key === 'americas') {
    ['nam', 'sam'].forEach(k2 => {
      const n = inside.filter(m => m.c === k2).length;
      rows.push(`<div class="cont-row"><span>${contDot(k2)}${tr('Nước thành viên LHQ ở', 'UN members in')} ${contLbl(k2)}</span><b>${n}</b></div>`);
    });
  }
  if (rows.length) s += `<div class="cont-rows">${rows.join('')}</div>`;

  if (trans.length) {
    s += `<div class="sec">${tr('NƯỚC XUYÊN LỤC ĐỊA', 'TRANSCONTINENTAL COUNTRIES')}</div>`;
    s += trans
      .map(([en, t]) => `<div class="cont-trans"><span class="chip" data-c="${en}">${cName(en)}</span><small>${enMode ? t.en : t.vi}</small></div>`)
      .join('');
  }
  const sorted = inside.sort((a, b) => cName(a.en).localeCompare(cName(b.en), enMode ? 'en' : 'vi'));
  s += `<details class="adm-list"><summary><span>${tr('CÁC NƯỚC THÀNH VIÊN LHQ', 'UN MEMBER STATES')} (${sorted.length})</span><small style="font-weight:400">${tr('bấm để mở', 'click to expand')}</small></summary><div class="chips">${sorted
    .map(m => (m.f ? `<span class="chip" data-c="${m.en}">${cName(m.en)}</span>` : `<span class="chip" style="cursor:default">${cName(m.en)}</span>`))
    .join('')}</div></details>`;

  // sources and caveats
  const areaLinks = card.areaParts ? card.areaParts.map(p => p[2]) : [card.areaLink];
  const areaNote = card.areaNote ? ` (${enMode ? card.areaNote.en : card.areaNote.vi})` : '';
  s += `<div class="sec">${tr('NGUỒN SỐ LIỆU', 'DATA SOURCES')}</div><div class="cont-src">
    <div><b>${tr('Diện tích', 'Area')}:</b> ${enMode ? AREA_SRC.en : AREA_SRC.vi}, ${tr('số xấp xỉ theo ranh giới của Britannica', 'approximate, by Britannica’s own boundaries')}${areaNote}. ${areaLinks
      .map(l => `<a href="${l}" target="_blank" rel="noopener">${tr('Xem nguồn', 'Source')} ↗</a>`)
      .join(' · ')}</div>
    ${card.pop ? `<div><b>${tr('Dân số', 'Population')}:</b> ${enMode ? POP_SRC.en : POP_SRC.vi}. <a href="${POP_SRC.link}" target="_blank" rel="noopener">${tr('Xem nguồn', 'Source')} ↗</a></div>` : ''}
    <div><b>${tr('Số nước', 'Countries')}:</b> ${tr('193 nước thành viên LHQ, xếp theo châu chứa phần lớn lãnh thổ trên bản đồ này; nước xuyên lục địa liệt kê riêng.', '193 UN member states, assigned to the continent holding most of their territory on this map; transcontinental countries listed separately.')}</div>
  </div>`;
  if (card.pop) s += `<p class="note">${enMode ? POP_NOTE.en : POP_NOTE.vi}</p>`;
  s += `<p class="note">${enMode ? BOUNDARY_NOTE.en : BOUNDARY_NOTE.vi}</p>`;
  return s;
}

function countryHTML(f, ll) {
  activeView = { type: 'country', f, ll };
  const enMode = isEn();
  const d = C_(f.en);
  const rgDict = enMode ? REGIONS_EN : REGIONS;
  const rg = rgDict[f.rg] || rgDict.territory;
  const toolsArr = enMode ? TOOLS_EN : TOOLS;
  const mem = (MEM[f.en] || []).map(x => chipA(x[0], x[1])).join('');
  const inside = ll
    ? H.filter(
        h =>
          (h.kind === 'poly' || h.polyGeo) &&
          !h.ringOnly &&
          !(h.g.country === f.en) &&
          d3.geoContains(h.polyGeo || h.geo, ll)
      )
        .map(h => chipH(h.id))
        .join('')
    : '';
  const relH = H.filter(h => (h.rel || []).includes(f.en)).map(h => h.id);
  const mainTitle = cName(f.en);
  const subTitle = enMode ? (f.vi !== f.en ? f.vi : '') : f.en && f.en !== f.vi ? f.en : '';
  let s = `<div class="kick">${rg[0]}</div><h1>${mainTitle}</h1>`;
  if (subTitle) s += `<div class="sub-h1">${subTitle}</div>`;
  s += contLineHTML(f);
  if (d) {
    s += `<div class="stats"><div class="stat"><small>${tr('Thủ đô', 'Capital')}</small><div>${d.cap}</div></div><div class="stat"><small>${tr('Dân số', 'Population')}</small><div>${d.pop}</div></div><div class="stat"><small>${tr('Diện tích', 'Area')}</small><div>${d.area}</div></div></div><div style="font-size:11px;color:var(--faint);margin:-10px 0 10px;text-align:right">${tr('Nguồn: World Bank WDI (2024) & thống kê chính thức', 'Source: World Bank WDI (2024) & official statistics')}</div>`;
    s += fmtSum(d.sum);
    s += econHTML(f.en);
    s += relHTML(f.en);
    s += `<div class="sec" style="margin-top:14px">${tr('5 TRỤ CỘT ĐỊA CHÍNH TRỊ', '5 GEOPOLITICAL PILLARS')}</div>`;
    s += `<div class="tools" id="tl">`;
    d.t.forEach((t, i) => {
      const r = t[1] ? t[0] : 'n';
      s += `<div class="tool"><div class="em">${['🛡️', '⚓', '🌊', '📏', '💧'][i]}</div><div><div class="nm">${toolsArr[i][0]}</div><div class="sh">${t[1] || tr('Không có điểm đáng chú ý', 'No notable feature')}</div></div><span class="rt ${r}">${rtl(r)}</span>${t[2] ? `<div class="dt">${t[2]}</div>` : ''}</div>`;
    });
    s += `</div>`;

    // Comparison dropdown
    const opts = MAP.F.filter(x => x.en !== f.en)
      .sort((a, b) => cName(a.en).localeCompare(cName(b.en), enMode ? 'en' : 'vi'))
      .map(x => `<option value="${x.en}">${cName(x.en)}</option>`)
      .join('');
    s += `<div class="cmp-bar"><select id="cmpSel" data-c1="${f.en}" aria-label="${tr('So sánh với quốc gia khác', 'Compare with another country')}"><option value="">${tr('⇄ So sánh với quốc gia khác...', '⇄ Compare with another country...')}</option>${opts}</select></div>`;

    // Admin-1 States / Provinces belonging to this country
    const admList = MAP.ADM1.filter(a => a.country === f.en).sort((a, b) =>
      adm1Name(a).localeCompare(adm1Name(b), enMode ? 'en' : 'vi')
    );
    if (admList.length) {
      const isOpen = f.en === 'Vietnam' || f.en === 'United States of America' ? ' open' : '';
      s += `<details class="adm-list"${isOpen}><summary><span>${tr('BANG / TỈNH THÀNH', 'STATES / PROVINCES')} (${admList.length})</span><small style="font-weight:400">${tr('bấm để mở', 'click to expand')}</small></summary><div class="chips">${admList.map(chipAdm1).join('')}</div></details>`;
    }

    // Capitals, Cities & Islands belonging to this country
    const uList = [
      ...CAPITALS.filter(c => c.country === f.en),
      ...CITIES.filter(ct => ct.country === f.en),
      ...ISLANDS.filter(isl => isl.country === f.en)
    ];
    if (uList.length) {
      s += `<div class="sec">${tr('ĐÔ THỊ, CẢNG & ĐẢO CHIẾN LƯỢC', 'STRATEGIC CITIES, PORTS & ISLANDS')}</div><div class="chips">${uList.map(chipUrban).join('')}</div>`;
    }

    const ids = [...new Set([...(d.hs || []), ...relH])];
    if (ids.length) s += `<div class="sec">${tr('ĐIỂM NÓNG LIÊN QUAN', 'RELATED HOTSPOTS')}</div><div class="chips">${ids.map(chipH).join('')}</div>`;
  } else {
    s += `<p class="txt">${rg[1]}</p>`;
    s += econHTML(f.en);
    if (relH.length) s += `<div class="sec">${tr('ĐIỂM NÓNG LIÊN QUAN', 'RELATED HOTSPOTS')}</div><div class="chips">${relH.map(chipH).join('')}</div>`;
  }
  if (inside) s += `<div class="sec">${tr('NẰM TRONG VÙNG', 'LOCATED WITHIN')}</div><div class="chips">${inside}</div>`;
  if (mem) s += `<div class="sec">${tr('THÀNH VIÊN CÁC KHỐI', 'ALLIANCE MEMBERSHIPS')}</div><div class="chips">${mem}</div>`;
  if (!d) s += `<p class="note">${tr('Thẻ khu vực. Các nước trọng điểm có phân tích đầy đủ theo 5 công cụ.', 'Regional card. Key nations include full 5-dimension geopolitical analysis.')}</p>`;
  return s;
}

function adm1HTML(f) {
  activeView = { type: 'adm1', f };
  const enMode = isEn();
  const cLbl = cName(f.country);
  const enMeta = ADMIN1_EN[f.id] || {};
  const title = adm1Name(f);
  const sub = enMode ? (f.vi !== title ? f.vi : '') : f.en && f.en !== f.vi ? f.en : '';
  let s = `<div class="kick"><span class="sq" style="background:#7C3AED"></span>${tr('BANG / TỈNH THÀNH', 'STATE / PROVINCE')} · ${cLbl}</div>`;
  s += `<h1>${title}</h1>`;
  if (sub || f.postal) s += `<div class="sub-h1">${sub}${f.postal ? ` (${f.postal})` : ''}</div>`;

  const stat3 =
    f.iso === 'VNM'
      ? `<div class="stat"><small>${tr('Sáp nhập 2025', '2025 Merger')}</small><div>${f.old && f.old.length ? f.old.join(' + ') : tr('Giữ nguyên', 'Unchanged')}</div></div>`
      : `<div class="stat"><small>${tr('Diện tích ước tính', 'Estimated Area')}</small><div>~${Math.max(10, Math.round((f.ar || 0) * 6371 * 6371)).toLocaleString(enMode ? 'en-US' : 'vi-VN')} km²</div></div>`;

  const capVal = (enMode && enMeta.cap) || f.cap || '—';
  const txVal =
    (enMode && enMeta.tx) ||
    f.tx ||
    (enMode
      ? `First-level administrative division (${title}) of ${cLbl}, playing a key role in regional territory, demographics, and economic structure.`
      : `Đơn vị hành chính cấp 1 (${f.vi}) thuộc ${cLbl}, giữ vai trò quan trọng trong cấu trúc lãnh thổ, dân cư và kinh tế vùng.`);

  s += `<div class="stats">
    <div class="stat"><small>${tr('Quốc gia', 'Country')}</small><div>${BY[f.country] ? `<span class="lnk-inline" data-c="${f.country}">${cLbl}</span>` : cLbl}</div></div>
    <div class="stat"><small>${tr('Trung tâm hành chính', 'Admin Center')}</small><div>${capVal}</div></div>
    ${stat3}
  </div>`;

  s += `<p class="sum">${txVal}</p>`;

  const localUrban = [
    ...CAPITALS.filter(c => c.country === f.country && inBB(f, c.pt) && d3.geoContains(f, c.pt)),
    ...CITIES.filter(ct => ct.country === f.country && inBB(f, ct.pt) && d3.geoContains(f, ct.pt)),
    ...ISLANDS.filter(isl => isl.country === f.country && inBB(f, isl.pt) && d3.geoContains(f, isl.pt))
  ];
  if (localUrban.length) {
    s += `<div class="sec">${tr('ĐÔ THỊ & ĐẢO TRONG TỈNH / BANG', 'CITIES & ISLANDS IN PROVINCE / STATE')}</div><div class="chips">${localUrban.map(chipUrban).join('')}</div>`;
  }

  const nearH = H.filter(h => {
    const pt = h.kind === 'pt' ? h.geo.coordinates : h.lab;
    return pt && d3.geoDistance(pt, f.cen) < 0.14;
  }).slice(0, 8);
  if (nearH.length) {
    s += `<div class="sec">${tr('ĐIỂM NÓNG & ĐỊA LÝ LÂN CẬN', 'NEARBY HOTSPOTS & GEOGRAPHY')}</div><div class="chips">${nearH.map(h => chipH(h.id)).join('')}</div>`;
  }

  if (BY[f.country]) {
    s += `<div style="margin-top:16px"><button class="btn" data-c="${f.country}">← ${tr('Xem tổng quan', 'Overview of')} ${cLbl}</button></div>`;
  }
  return s;
}

function urbanIslandHTML(o) {
  activeView = { type: 'urban', o };
  const enMode = isEn();
  const isLake = o.kind === 'lake';
  const lMetaVi = isLake ? LAKE_META[o.id] || {} : {};
  const lMetaEn = isLake ? LAKE_META_EN[o.id] || {} : {};
  const lMeta = enMode ? { ...lMetaVi, ...lMetaEn } : lMetaVi;

  const uEn =
    o.kind === 'cap'
      ? CAPITALS_EN[o.id]
      : o.kind === 'city'
      ? CITIES_EN[o.id]
      : o.kind === 'isl'
      ? ISLANDS_EN[o.id]
      : null;

  const cfg =
    o.kind === 'cap'
      ? [tr('THỦ ĐÔ THẾ GIỚI', 'WORLD CAPITAL'), '#E8590C']
      : o.kind === 'city'
      ? [tr('ĐÔ THỊ & CẢNG CHIẾN LƯỢC', 'STRATEGIC CITY & PORT'), '#2563EB']
      : o.kind === 'isl'
      ? [tr('ĐẢO & VÙNG CHIẾN LƯỢC', 'STRATEGIC ISLAND & ZONE'), '#0D9488']
      : [tr('HỒ & BIỂN NỘI ĐỊA', 'LAKE & INLAND SEA'), '#2E7CC0'];

  const countryName = o.country ? cName(o.country) : '';
  const pt = o.pt || o.cen;
  let s = `<div class="kick"><span class="sq" style="background:${cfg[1]}"></span>${cfg[0]}${countryName ? ' · ' + countryName : ''}</div>`;
  const title = isLake
    ? lakeName(o)
    : o.kind === 'cap'
    ? capName(o)
    : o.kind === 'isl'
    ? islName(o)
    : cityName(o);
  s += `<h1>${title}</h1>`;
  const sub = enMode ? (o.vi && o.vi !== title ? o.vi : '') : o.en && o.en !== title ? o.en : '';
  if (sub) s += `<div class="sub-h1">${sub}</div>`;

  const stat1Label = isLake ? tr('Khu vực', 'Basin') : tr('Quốc gia', 'Country');
  const stat1Val =
    o.country && BY[o.country]
      ? `<span class="lnk-inline" data-c="${o.country}">${countryName}</span>`
      : countryName || (lMeta.rel && lMeta.rel.length ? lMeta.rel.map(cName).join(', ') : tr('Nội lục', 'Inland'));

  const popVal = enMode && uEn && uEn.pop && o.kind !== 'isl' ? uEn.pop : o.pop;
  const areaVal =
    (enMode && uEn && (uEn.area || uEn.pop) && o.kind === 'isl' ? uEn.area || uEn.pop : o.area) ||
    lMeta.area ||
    '~' + Math.max(100, Math.round((o.ar || 0) * 6371 * 6371)).toLocaleString(enMode ? 'en-US' : 'vi-VN') + ' km²';

  const stat2 =
    popVal && o.kind !== 'isl'
      ? `<div class="stat"><small>${tr('Dân số', 'Population')}</small><div>${popVal}</div></div>`
      : `<div class="stat"><small>${tr('Diện tích', 'Area')}</small><div>${areaVal}</div></div>`;

  s += `<div class="stats">
    <div class="stat"><small>${stat1Label}</small><div>${stat1Val}</div></div>
    ${stat2}
    <div class="stat"><small>${tr('Tọa độ', 'Coordinates')}</small><div>${fmtCoord(pt)}</div></div>
  </div>`;

  const desc =
    (enMode && uEn && uEn.tx) ||
    (enMode && lMetaEn && lMetaEn.tx) ||
    o.tx ||
    lMeta.tx ||
    (enMode
      ? `${title} is a major lake in the continental hydrological network, regulating freshwater supply, fisheries, and inland navigation.`
      : `${title} (${o.en || title}) là hồ lớn quan trọng trong mạng lưới thủy văn lục địa, đóng vai trò điều tiết nguồn nước ngọt, sinh kế nông – ngư nghiệp và giao thông đường thủy nội địa khu vực.`);
  s += `<p class="sum">${desc}</p>`;

  const relCountries = isLake
    ? lMeta.rel ||
      MAP.F.filter(f => d3.geoDistance(f.cen, o.cen) < 0.25)
        .slice(0, 5)
        .map(f => f.en)
    : o.country
    ? [o.country]
    : [];

  if (relCountries.length) {
    s += `<div class="sec">${tr('QUỐC GIA LIÊN QUAN', 'RELATED COUNTRIES')}</div><div class="chips">${relCountries.map(chipC).join('')}</div>`;
  }

  if (!isLake && o.country && pt && MAP.ADM1.length) {
    const adm = MAP.ADM1.find(a => a.country === o.country && inBB(a, pt) && d3.geoContains(a, pt));
    if (adm) {
      s += `<div class="sec">${tr('THUỘC BANG / TỈNH THÀNH', 'LOCATED IN STATE / PROVINCE')}</div><div class="chips">${chipAdm1(adm)}</div>`;
    }
  }

  if (pt) {
    const nearH = H.filter(h => {
      const hp = h.kind === 'pt' ? h.geo.coordinates : h.lab;
      return hp && d3.geoDistance(hp, pt) < 0.16;
    }).slice(0, 8);
    if (nearH.length) {
      s += `<div class="sec">${tr('ĐIỂM NÓNG & TUYẾN CHIẾN LƯỢC LÂN CẬN', 'NEARBY HOTSPOTS & STRATEGIC ROUTES')}</div><div class="chips">${nearH.map(h => chipH(h.id)).join('')}</div>`;
    }
  }
  return s;
}

function hotHTML(h) {
  activeView = { type: 'hot', h };
  const L = LAYERS[h.t];
  const lTitle = layName(h.t);
  let s = `<div class="kick"><span class="sq" style="background:${L.c}"></span>${lTitle}</div><h1>${hName(h)}</h1><p class="txt">${hTx(h)}</p>`;
  if (h.t === 'conflict')
    s += `<p class="note">${tr(`Cập nhật tới ${UPDATED}. Tình hình có thể đã thay đổi.`, `Updated through ${UPDATED_EN}. Conditions on the ground may have evolved.`)}</p>`;
  if (h.id === 'africalines')
    s += `<p class="note">${tr('Đường đỏ hồng trên bản đồ là các đoạn biên giới thẳng tắp dài từ 120 km trở lên.', 'Pink-red lines on the globe highlight straight-line border segments of 120 km or longer.')}</p>`;
  if (h.id === 'ninedash')
    s += `<p class="note">${tr('Đường trên bản đồ chỉ vẽ ước lượng để minh họa.', 'The dashed line on the globe is an approximate geopolitical illustration.')}</p>`;
  if (h.rel && h.rel.length) s += `<div class="sec">${tr('LIÊN QUAN', 'RELATED COUNTRIES')}</div><div class="chips">${h.rel.map(chipC).join('')}</div>`;
  return s;
}

function rankingHTML(metricKey = 'happiness', dir = 'desc', qFilter = '', backCountry = null) {
  const m = RANK_METRICS[metricKey] || RANK_METRICS.happiness;
  activeView = { type: 'rank', metricKey: m.key, dir, qFilter, backCountry };
  const enMode = isEn();
  const rList = RANK_LISTS[m.key];
  const entries = rList ? (dir === 'asc' ? [...rList.entries].reverse() : rList.entries) : [];

  const tabs = Object.values(RANK_METRICS)
    .map(
      mt =>
        `<button type="button" class="rk-tab${mt.key === m.key ? ' on' : ''}" data-rk-tab="${mt.key}">${
          enMode ? mt.short_en : mt.short_vi
        }</button>`
    )
    .join('');

  let s = '';
  if (backCountry && BY[backCountry]) {
    s += `<div style="margin-bottom:8px"><button class="btn" data-c="${backCountry}">← ${tr('Quay lại', 'Back to')} ${cName(backCountry)}</button></div>`;
  }
  s += `<div class="kick">📊 ${tr('BẢNG XẾP HẠNG & BẢN ĐỒ NHIỆT THẾ GIỚI', 'WORLD RANKINGS & CHOROPLETH HEATMAP')}</div>`;
  s += `<h1>${enMode ? m.en : m.vi}</h1>`;
  s += `<div class="rk-src">${tr('Đơn vị:', 'Unit:')} <b>${enMode ? m.unit_en : m.unit_vi}</b> · ${enMode ? m.src_en : m.src_vi}</div>`;
  s += `<div class="rk-desc"><b>${tr('Tiêu chí đánh giá:', 'Methodology:')}</b> ${enMode ? m.desc_en : m.desc_vi}<br><b>${tr('Dữ liệu:', 'Data:')}</b> ${enMode ? m.data_en : m.data_vi}<br><a href="${m.link}" target="_blank" rel="noopener noreferrer">${tr('Xem nguồn gốc ↗', 'View source ↗')}</a></div>`;
  s += `<div class="rk-tabs">${tabs}</div>`;

  // Vietnam spotlight card
  const vnInfo = COUNTRY_RANKS['Vietnam'] && COUNTRY_RANKS['Vietnam'][m.key];
  if (vnInfo) {
    const vnCol = rankValColor(vnInfo.val, m) || 'var(--accent)';
    const vnRankNum = m.key === 'pollution' && dir === 'asc' ? vnInfo.rankAsc : vnInfo.rank;
    s += `<div class="rk-vn" data-rk-fly="Vietnam" title="${tr('Bấm để xoay quả địa cầu về Việt Nam', 'Click to fly to Vietnam')}">
      <div class="rk-vn-l"><span class="rk-vn-flag">🇻🇳</span><div><b>${cName('Vietnam')}</b><small>${tr('Hạng', 'Rank')} #${vnRankNum} / ${vnInfo.total}</small></div></div>
      <div class="rk-vn-r"><i style="background:${vnCol}"></i><b>${fmtRankVal(vnInfo.val, m, enMode)}</b></div>
    </div>`;
  }

  const descLbl =
    m.key === 'pollution'
      ? tr('Ô nhiễm nhất ↓', 'Most Polluted ↓')
      : tr('Cao nhất ↓', 'Highest First ↓');
  const ascLbl =
    m.key === 'pollution'
      ? tr('Không khí sạch nhất ↑', 'Cleanest Air ↑')
      : tr('Thấp nhất ↑', 'Lowest First ↑');

  s += `<div class="rk-bar">
    <div class="rk-dir-grp">
      <button type="button" class="rk-dir${dir === 'desc' ? ' on' : ''}" data-rk-dir="desc">${descLbl}</button>
      <button type="button" class="rk-dir${dir === 'asc' ? ' on' : ''}" data-rk-dir="asc">${ascLbl}</button>
    </div>
    <input type="search" id="rkSearch" class="rk-search" placeholder="${tr('Lọc tên nước...', 'Filter country...')}" value="${qFilter.replace(/"/g, '&quot;')}" autocomplete="off">
  </div>`;

  const qNorm = norm(qFilter.trim());
  const filtered = qNorm
    ? entries.filter(item => norm(cName(item.en) + ' ' + item.en).includes(qNorm))
    : entries;

  const calcBarPct = val => {
    if (!rList) return 50;
    if (m.logScale) {
      const lMin = Math.log(Math.max(1e-2, rList.minVal));
      const lMax = Math.log(Math.max(1, rList.maxVal));
      return Math.max(6, Math.min(100, Math.round(((Math.log(Math.max(1e-2, val)) - lMin) / (lMax - lMin || 1)) * 100)));
    }
    return Math.max(6, Math.min(100, Math.round(((val - rList.minVal) / (rList.maxVal - rList.minVal || 1)) * 100)));
  };

  s += `<div class="rk-list" id="rkList">`;
  if (!filtered.length) {
    s += `<div class="rk-empty">${tr('Không tìm thấy quốc gia phù hợp.', 'No matching country found.')}</div>`;
  } else {
    filtered.forEach(item => {
      const rkNum = dir === 'asc' ? item.rankAsc : item.rankDesc;
      const col = rankValColor(item.val, m) || 'var(--accent)';
      const pct = calcBarPct(item.val);
      const isSel = st.sel && st.sel.isCountry && st.sel.en === item.en;
      const isVN = item.en === 'Vietnam';
      const medal = rkNum === 1 ? '🥇' : rkNum === 2 ? '🥈' : rkNum === 3 ? '🥉' : `#${rkNum}`;
      s += `<div class="rk-row${isSel ? ' sel' : ''}${isVN ? ' vn' : ''}" data-rk-fly="${item.en}">
        <span class="rk-pos${rkNum <= 3 ? ' top3' : ''}">${medal}</span>
        <div class="rk-main">
          <div class="rk-top-line">
            <span class="rk-cname">${cName(item.en)}</span>
            <span class="rk-val">${fmtRankVal(item.val, m, enMode)}</span>
          </div>
          <div class="rk-track"><i style="width:${pct}%;background:${col}"></i></div>
        </div>
        <button type="button" class="rk-info-btn" data-c="${item.en}" title="${tr('Xem hồ sơ quốc gia', 'View country profile')}">→</button>
      </div>`;
    });
  }
  s += `</div>`;
  return s;
}

export function openRanking(metricKey = 'happiness', dir = 'desc', qFilter = '', backCountry = null) {
  const m = RANK_METRICS[metricKey] || RANK_METRICS.happiness;
  setAl(`__rank_${m.key}__`, false);
  openPanel(rankingHTML(m.key, dir, qFilter, backCountry));
}

function wire() {
  PB.querySelectorAll('[data-h]').forEach(
    e =>
      (e.onclick = () => {
        const h = HS[e.dataset.h];
        if (!h) return;
        if (!on(h)) {
          st.on[h.t] = true;
          buildLayers();
        }
        select(h, true);
      })
  );
  PB.querySelectorAll('[data-c]').forEach(
    e =>
      (e.onclick = () => {
        const c = BY[e.dataset.c];
        if (c) select(c, true);
      })
  );
  PB.querySelectorAll('[data-cont]').forEach(
    e =>
      (e.onclick = () => {
        const o = CONT_OBJS[e.dataset.cont];
        if (!o) return;
        if (!st.on.continents) {
          st.on.continents = true;
          savePrefs();
          buildLayers();
        }
        select(o, true);
      })
  );
  PB.querySelectorAll('[data-adm1]').forEach(
    e =>
      (e.onclick = () => {
        const a = ADM1_BY_ID[e.dataset.adm1];
        if (!a) return;
        if (!st.on.admin1) {
          st.on.admin1 = true;
          buildLayers();
        }
        select(a, true);
      })
  );
  PB.querySelectorAll('[data-cap]').forEach(
    e =>
      (e.onclick = () => {
        const c = CAP_BY_ID[e.dataset.cap];
        if (!c) return;
        if (!st.on.capitals) {
          st.on.capitals = true;
          buildLayers();
        }
        select(c, true);
      })
  );
  PB.querySelectorAll('[data-city]').forEach(
    e =>
      (e.onclick = () => {
        const ct = CITY_BY_ID[e.dataset.city];
        if (!ct) return;
        if (!st.on.cities) {
          st.on.cities = true;
          buildLayers();
        }
        select(ct, true);
      })
  );
  PB.querySelectorAll('[data-isl]').forEach(
    e =>
      (e.onclick = () => {
        const isl = ISL_BY_ID[e.dataset.isl];
        if (!isl) return;
        if (!st.on.islands) {
          st.on.islands = true;
          buildLayers();
        }
        select(isl, true);
      })
  );
  PB.querySelectorAll('[data-a]').forEach(e => (e.onclick = () => setAl(e.dataset.a)));
  PB.querySelectorAll('[data-rk]').forEach(
    e =>
      (e.onclick = () => {
        openRanking(e.dataset.rk, 'desc', '', e.dataset.back || null);
      })
  );
  PB.querySelectorAll('[data-rk-tab]').forEach(
    e =>
      (e.onclick = () => {
        const back = activeView && activeView.backCountry ? activeView.backCountry : null;
        const qVal = ($('#rkSearch') && $('#rkSearch').value) || '';
        openRanking(e.dataset.rkTab, 'desc', qVal, back);
      })
  );
  PB.querySelectorAll('[data-rk-dir]').forEach(
    e =>
      (e.onclick = () => {
        if (!activeView || activeView.type !== 'rank') return;
        const qVal = ($('#rkSearch') && $('#rkSearch').value) || '';
        openPanel(rankingHTML(activeView.metricKey, e.dataset.rkDir, qVal, activeView.backCountry));
      })
  );
  PB.querySelectorAll('[data-rk-fly]').forEach(
    e =>
      (e.onclick = ev => {
        if (ev.target && ev.target.closest && ev.target.closest('[data-c]')) return;
        const f = BY[e.dataset.rkFly];
        if (!f) return;
        st.sel = f;
        st.dirty = true;
        PB.querySelectorAll('.rk-row.sel').forEach(r => r.classList.remove('sel'));
        if (e.classList.contains('rk-row')) e.classList.add('sel');
        flyTo(f.mainCen || f.cen, Math.max(getK(), Math.min(3.5, fitK(f))));
      })
  );
  const rkSearch = $('#rkSearch');
  if (rkSearch && activeView && activeView.type === 'rank') {
    rkSearch.oninput = () => {
      const pos = rkSearch.selectionStart;
      const val = rkSearch.value;
      openPanel(rankingHTML(activeView.metricKey, activeView.dir, val, activeView.backCountry));
      const inp = $('#rkSearch');
      if (inp) {
        inp.focus();
        try {
          inp.setSelectionRange(pos, pos);
        } catch (err) {}
      }
    };
  }

  const cmpSel = $('#cmpSel');
  if (cmpSel) {
    cmpSel.onchange = () => {
      if (cmpSel.value) openPanel(compareHTML(cmpSel.dataset.c1, cmpSel.value));
    };
  }
  const cmpSwap = $('#cmpSwap');
  if (cmpSwap) {
    cmpSwap.onclick = () => openPanel(compareHTML(cmpSwap.dataset.c1, cmpSwap.dataset.c2));
  }

  const mb = $('#moreBtn');
  if (mb)
    mb.onclick = () => {
      const tl = $('#tl');
      tl.classList.toggle('more');
      mb.textContent = tl.classList.contains('more')
        ? tr('Thu gọn ↑', 'Show less ↑')
        : tr('Xem thêm ↓', 'Read more ↓');
    };
}

let lastLL = null;

export function select(o, fly) {
  if (!o) return;
  st.sel = o;
  st.dirty = true;
  if (o.kind === 'cont') {
    openPanel(contHTML(o));
    flyTo(o.fly, o.k);
  } else if (o.isAdm1) {
    openPanel(adm1HTML(o));
    if (fly) flyTo(o.cen, Math.max(2.6, Math.min(7.5, fitK(o))));
  } else if (o.kind === 'cap' || o.kind === 'city' || o.kind === 'isl') {
    openPanel(urbanIslandHTML(o));
    if (fly) flyTo(o.pt, Math.max(getK(), o.kind === 'isl' ? 3.8 : 4.2));
  } else if (o.kind === 'lake') {
    openPanel(urbanIslandHTML(o));
    if (fly) flyTo(o.cen, Math.max(2.2, fitK(o.geo)));
  } else if (o.isCountry) {
    openPanel(countryHTML(o, fly ? null : lastLL));
    if (fly) flyTo(o.mainCen || o.cen, fitK(o));
  } else {
    openPanel(hotHTML(o));
    if (fly) {
      const kk =
        o.kind === 'pt'
          ? Math.max(getK(), 4)
          : o.kind === 'poly'
          ? fitK(o.geo)
          : Math.max(1.4, Math.min(5, fitK({ type: 'MultiPoint', coordinates: o.dense.flat() })));
      flyTo(o.lab, kk);
    }
  }
}

export function buildLayers() {
  st.on.ice = true;
  savePrefs();
  const enMode = isEn();
  const tgl = ([key, L]) =>
    `<div class="tg${st.on[key] ? ' on' : ''}" data-l="${key}"><span class="lico" style="color:${L.c}">${iconSvg(key)}</span>${layName(key)}<span class="sw"></span></div>`;

  const hotEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'hot');
  const infraEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'infra');
  const natEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'nat' && e[0] !== 'ice');
  const admEntries = Object.entries(ADMIN_LAYERS);

  $('#lyHot').innerHTML = hotEntries.map(tgl).join('');
  $('#lyAdmin').innerHTML = admEntries.map(tgl).join('');
  $('#lyNat').innerHTML = natEntries.map(tgl).join('');
  $('#lyInfra').innerHTML = infraEntries.map(tgl).join('');

  document.querySelectorAll('svg[data-g]').forEach(s => {
    s.innerHTML = iconSvg(s.dataset.g).replace(/^<svg[^>]*>|<\/svg>$/g, '');
  });

  const cnt = entries => `${entries.filter(([k2]) => st.on[k2]).length}/${entries.length}`;
  if ($('#cntHot')) $('#cntHot').textContent = cnt(hotEntries);
  if ($('#cntAdmin')) $('#cntAdmin').textContent = cnt(admEntries);
  if ($('#cntNat')) $('#cntNat').textContent = cnt(natEntries);
  if ($('#cntInfra')) $('#cntInfra').textContent = cnt(infraEntries);

  document.querySelectorAll('#layers .tg').forEach(
    e =>
      (e.onclick = () => {
        st.on[e.dataset.l] = !st.on[e.dataset.l];
        savePrefs();
        buildLayers();
        st.dirty = true;
      })
  );

  $('#refs').innerHTML = Object.entries(REF)
    .map(([key, r]) => {
      const rName = enMode && REF_EN[key] ? REF_EN[key].n : r.n;
      return `<span class="chip${st.ref[key] ? ' on' : ''}" data-r="${key}">${r.c ? `<span class="dot" style="background:${r.c}"></span>` : ''}${rName}</span>`;
    })
    .join('');
  $('#refs')
    .querySelectorAll('.chip')
    .forEach(
      e =>
        (e.onclick = () => {
          st.ref[e.dataset.r] = !st.ref[e.dataset.r];
          savePrefs();
          buildLayers();
          st.dirty = true;
        })
    );
}

function populateAlSel() {
  const alSel = $('#alSel');
  if (!alSel) return;
  const enMode = isEn();
  const cur = st.al || '';
  const rkOpts = Object.values(RANK_METRICS)
    .map(
      m =>
        `<option value="__rank_${m.key}__">${enMode ? m.short_en : m.short_vi} · ${
          enMode ? m.en : m.vi
        }</option>`
    )
    .join('');

  alSel.innerHTML = `<option value="">${tr('Không (Mặc định)', 'None (Default)')}</option>
    <optgroup label="${tr('📊 Bảng xếp hạng & Kinh tế Thế giới', '📊 World Rankings & Economy')}">
      <option value="__econ__">📊 ${tr('Phân nhóm Kinh tế & Thu nhập (WB/IMF)', 'Economic Development Tiers (WB/IMF)')}</option>
      ${rkOpts}
    </optgroup>
    <optgroup label="${tr('🛡️ Khối Liên minh & Địa chính trị', '🛡️ Geopolitical Blocs & Alliances')}" id="alGrpBlocs"></optgroup>`;

  const grpBlocs = alSel.querySelector('#alGrpBlocs') || alSel;
  Object.entries(AL).forEach(([key, a]) => {
    const aInfo = enMode && AL_EN[key] ? AL_EN[key] : a;
    const o = document.createElement('option');
    o.value = key;
    o.textContent = aInfo.n + ' · ' + aInfo.f.split(' · ')[0];
    grpBlocs.appendChild(o);
  });
  alSel.value = cur;

  const rankChips = $('#rankChips');
  if (rankChips) {
    rankChips.innerHTML = Object.values(RANK_METRICS)
      .map(m => {
        const kVal = `__rank_${m.key}__`;
        return `<span class="chip${cur === kVal ? ' on' : ''}" data-rk-chip="${m.key}">${
          enMode ? m.short_en : m.short_vi
        }</span>`;
      })
      .join('');
    rankChips.querySelectorAll('[data-rk-chip]').forEach(
      el =>
        (el.onclick = () => {
          const mKey = el.dataset.rkChip;
          const targetAl = `__rank_${mKey}__`;
          if (st.al === targetAl && P.classList.contains('show') && activeView && activeView.type === 'rank') {
            setAl('');
            closePanel();
          } else {
            openRanking(mKey, 'desc', '', null);
          }
        })
    );
  }
}

export function setAl(key, openLeaderboard = false) {
  const alSel = $('#alSel');
  st.al = key || '';
  if (alSel) alSel.value = st.al;
  const rankChips = $('#rankChips');
  if (rankChips) {
    rankChips.querySelectorAll('[data-rk-chip]').forEach(el => {
      el.classList.toggle('on', st.al === `__rank_${el.dataset.rkChip}__`);
    });
  }
  savePrefs();
  st.dirty = true;
  const lg = $('#legend');
  if (!st.al) {
    lg.classList.remove('show');
    return;
  }
  const enMode = isEn();
  if (st.al.startsWith('__rank_')) {
    const rkKey = st.al.slice(7, -2);
    const m = RANK_METRICS[rkKey];
    if (!m) {
      lg.classList.remove('show');
      return;
    }
    const gradCols = m.stops.map(s => s[1]).join(', ');
    const minLbl = fmtRankVal(m.stops[0][0], m, enMode);
    const maxLbl = fmtRankVal(m.stops[m.stops.length - 1][0], m, enMode);
    lg.innerHTML = `<div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><b>${
      enMode ? m.short_en + ' · ' + m.en : m.short_vi + ' · ' + m.vi
    }</b><div style="display:flex;gap:10px"><button class="lnk" id="alOpenRk" style="padding:0">${tr(
      'Bảng xếp hạng ↗',
      'Leaderboard ↗'
    )}</button><button class="lnk" id="alX" style="padding:0">${tr('Tắt', 'Off')}</button></div></div>
    <div style="color:var(--muted);font-size:11.5px;margin-top:2px">${enMode ? m.src_en : m.src_vi}</div>
    <div class="rk-leg-bar" style="background:linear-gradient(90deg, ${gradCols})"></div>
    <div class="rk-leg-ends"><span>${minLbl}</span><span>${maxLbl}</span></div>`;
    lg.classList.add('show');
    $('#alX').onclick = () => setAl('');
    $('#alOpenRk').onclick = () => openRanking(rkKey);
    if (openLeaderboard) openPanel(rankingHTML(rkKey));
    return;
  }
  if (st.al === '__econ__') {
    const tiers = Object.values(ECON_TIERS)
      .map(t => `<span><span class="sq" style="background:${t.c}"></span>${enMode ? t.en : t.vi}</span>`)
      .join('');
    lg.innerHTML = `<div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><b>${tr('Phân nhóm Kinh tế Thế giới', 'Global Economic Development Tiers')}</b><button class="lnk" id="alX" style="padding:0">${tr('Tắt', 'Off')}</button></div><div style="color:var(--muted);font-size:12px">${tr('Theo phân loại thu nhập của Ngân hàng Thế giới (GNI/người, cập nhật 1/7/2026); số liệu GDP: WDI 2024', 'By World Bank income classification (GNI per capita, updated 1 Jul 2026); GDP figures: WDI 2024')}</div><div class="row" style="gap:8px 12px;margin-top:8px">${tiers}</div>`;
    lg.classList.add('show');
    $('#alX').onclick = () => setAl('');
    return;
  }
  const a = AL[st.al];
  if (!a) {
    lg.classList.remove('show');
    return;
  }
  const aInfo = enMode && AL_EN[st.al] ? AL_EN[st.al] : a;
  lg.innerHTML = `<div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><b>${aInfo.n}</b><button class="lnk" id="alX" style="padding:0">${tr('Tắt', 'Off')}</button></div><div style="color:var(--muted);font-size:12px">${aInfo.f}</div><div style="margin-top:6px">${aInfo.tx}</div><div class="row"><span><span class="sq" style="background:${a.c}"></span>${tr('Thành viên', 'Member')}</span>${a.p.length ? `<span><span class="sq" style="background:${a.c};opacity:.42"></span>${tr('Đối tác / đặc biệt', 'Partner / observer')}</span>` : ''}</div>`;
  lg.classList.add('show');
  $('#alX').onclick = () => setAl('');
}

function tipLabel(h) {
  if (h.kind === 'cont') return `${contName(h)}<small>${tr('châu lục · bấm để xem', 'continent · click for details')}</small>`;
  if (h.isAdm1) return `${adm1Name(h)}<small>${tr('bang / tỉnh', 'state / province')} · ${cName(h.country)}</small>`;
  if (h.kind === 'cap') return `${capName(h)}<small>${tr('thủ đô', 'capital')} · ${cName(h.country)}</small>`;
  if (h.kind === 'city') return `${cityName(h)}<small>${tr('đô thị / cảng', 'city / port')} · ${cName(h.country)}</small>`;
  if (h.kind === 'isl') return `${islName(h)}<small>${tr('đảo / vùng', 'island / zone')} · ${cName(h.country)}</small>`;
  if (h.kind === 'lake') return `${lakeName(h)}<small>${tr('hồ / biển nội địa', 'lake / inland sea')}</small>`;
  if (h.isCountry) {
    if (st.al && st.al.startsWith('__rank_')) {
      const rkKey = st.al.slice(7, -2);
      const m = RANK_METRICS[rkKey];
      const row = RANK_DATA[h.en];
      if (m && row && row[m.idx] !== null && row[m.idx] !== undefined) {
        const rk = COUNTRY_RANKS[h.en] && COUNTRY_RANKS[h.en][rkKey];
        const rkStr = rk ? ` (#${rk.rank})` : '';
        return `${cName(h.en)}<small>${isEn() ? m.short_en : m.short_vi}: ${fmtRankVal(row[m.idx], m, isEn())}${rkStr}</small>`;
      }
    }
    return `${cName(h.en)}<small>${tr('quốc gia', 'country')}</small>`;
  }
  return `${hName(h)}<small>${(layName(h.t) || tr('điểm nóng', 'hotspot')).toLowerCase()}</small>`;
}

export function applyLang() {
  const enMode = isEn();
  document.documentElement.lang = enMode ? 'en' : 'vi';
  document.title = tr('Địa cầu địa chính trị · wanngo', 'Geopolitical Globe · wanngo');
  if ($('#brandTitle')) $('#brandTitle').textContent = tr('Địa cầu địa chính trị', 'Geopolitical Globe');
  if ($('#brandSub')) $('#brandSub').textContent = tr('theo phong cách Tim Marshall', 'inspired by Tim Marshall');
  if ($('#q')) $('#q').placeholder = tr('Tìm quốc gia, tỉnh thành, thủ đô, đảo...', 'Search countries, states, capitals, islands...');
  if ($('#layBtn')) {
    const lTxt = tr('Lớp bản đồ', 'Map layers');
    $('#layBtn').title = lTxt;
    $('#layBtn').setAttribute('aria-label', lTxt);
  }
  if ($('#langBtn')) {
    $('#langBtn').textContent = enMode ? 'EN' : 'VI';
    $('#langBtn').title = enMode ? 'Switch to Vietnamese (Tiếng Việt)' : 'Chuyển sang Tiếng Anh (English)';
  }
  if ($('#lblLayers')) $('#lblLayers').textContent = tr('LỚP BẢN ĐỒ', 'MAP LAYERS');
  if ($('#lyDef')) $('#lyDef').textContent = tr('Mặc định', 'Default');
  if ($('#lyOff')) $('#lyOff').textContent = tr('Tắt hết', 'All off');
  if ($('#grpHot')) $('#grpHot').textContent = tr('Điểm nóng & Chiến lược', 'Hotspots & Strategy');
  if ($('#grpAdmin')) $('#grpAdmin').textContent = tr('Hành chính, Đô thị & Đảo', 'Admin, Cities & Islands');
  if ($('#grpNat')) $('#grpNat').textContent = tr('Địa lý Tự nhiên', 'Physical Geography');
  if ($('#grpInfra')) $('#grpInfra').textContent = tr('Hạ tầng, Quân sự & Tài nguyên', 'Infra, Military & Resources');
  if ($('#lhAl')) $('#lhAl').textContent = tr('TÔ MÀU THEO KHỐI / XẾP HẠNG', 'COLOR BY BLOC / RANKINGS');
  if ($('#lhRk')) $('#lhRk').textContent = tr('BẢNG XẾP HẠNG THẾ GIỚI (HEATMAP)', 'WORLD RANKINGS (HEATMAP)');
  if ($('#lhQv')) $('#lhQv').textContent = tr('GÓC NHÌN NHANH', 'QUICK VIEWS');
  if ($('#lhRef')) $('#lhRef').textContent = tr('ĐƯỜNG THAM CHIẾU', 'REFERENCE LINES');
  if ($('#hint'))
    $('#hint').textContent = tr(
      'Kéo để xoay · cuộn để phóng to · bấm vào quốc gia, tỉnh thành, thủ đô hoặc điểm nóng',
      'Drag to rotate · scroll to zoom · click any country, state, capital, or hotspot'
    );
  if ($('#zin')) $('#zin').setAttribute('aria-label', tr('Phóng to', 'Zoom in'));
  if ($('#zout')) $('#zout').setAttribute('aria-label', tr('Thu nhỏ', 'Zoom out'));
  if ($('#home')) {
    $('#home').title = tr('Về Việt Nam', 'Reset to Vietnam');
    $('#home').setAttribute('aria-label', tr('Về Việt Nam', 'Reset to Vietnam'));
  }
  if ($('#spin')) {
    $('#spin').title = tr('Tự xoay', 'Auto-rotate');
    $('#spin').setAttribute('aria-label', tr('Tự xoay', 'Auto-rotate'));
  }
  if ($('#theme')) {
    $('#theme').title = tr('Sáng / tối', 'Light / dark theme');
    $('#theme').setAttribute('aria-label', tr('Đổi giao diện sáng tối', 'Toggle light / dark theme'));
  }

  const qviews = $('#qviews');
  if (qviews) {
    qviews.innerHTML = QVIEWS.map((v, i) => `<span class="chip" data-qv="${i}">${enMode ? v.en : v.n}</span>`).join('');
    qviews.querySelectorAll('.chip').forEach(
      e =>
        (e.onclick = () => {
          const v = QVIEWS[+e.dataset.qv];
          if (v) flyTo(v.ll, v.k);
        })
    );
  }

  populateAlSel();
  buildLayers();
  if (st.al) setAl(st.al);
  rebuildSearchIndex();
  MAP.LC.key = '';
  st.dirty = true;

  if (P.classList.contains('show') && activeView) {
    if (activeView.type === 'cmp') openPanel(compareHTML(activeView.en1, activeView.en2));
    else if (activeView.type === 'rank')
      openPanel(rankingHTML(activeView.metricKey, activeView.dir, activeView.qFilter, activeView.backCountry));
    else if (activeView.type === 'country') openPanel(countryHTML(activeView.f, activeView.ll));
    else if (activeView.type === 'adm1') openPanel(adm1HTML(activeView.f));
    else if (activeView.type === 'urban') openPanel(urbanIslandHTML(activeView.o));
    else if (activeView.type === 'hot') openPanel(hotHTML(activeView.h));
    else if (activeView.type === 'cont') openPanel(contHTML(activeView.o));
  }
}

export function initUI() {
  $('#pclose').onclick = () => closePanel();

  let hovRaf = 0;
  let lastMoveEvt = null;
  cv.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || st.drag || st.moving) return;
    lastMoveEvt = e;
    if (hovRaf) return;
    hovRaf = requestAnimationFrame(() => {
      hovRaf = 0;
      if (!lastMoveEvt || st.drag || st.moving) return;
      const mx = lastMoveEvt.clientX, my = lastMoveEvt.clientY;
      const h = pick(mx, my);
      if (h !== st.hov) {
        st.hov = h;
        st.dirty = true;
      }
      cv.classList.toggle('hot', !!h);
      const tip = $('#tip');
      if (h) {
        tip.innerHTML = tipLabel(h);
        tip.style.display = 'block';
        tip.style.left = Math.min(mx + 14, innerWidth - tip.offsetWidth - 8) + 'px';
        tip.style.top = Math.min(my + 14, innerHeight - tip.offsetHeight - 8) + 'px';
      } else {
        tip.style.display = 'none';
      }
    });
  });

  cv.addEventListener('pointerleave', () => {
    $('#tip').style.display = 'none';
    st.hov = null;
    st.dirty = true;
  });

  cv.addEventListener(
    'click',
    e => {
      const [cx, cy] = proj.translate();
      lastLL = Math.hypot(e.clientX - cx, e.clientY - cy) <= proj.scale() ? proj.invert([e.clientX, e.clientY]) : null;
    },
    true
  );

  cv.addEventListener('click', e => {
    const h = pick(e.clientX, e.clientY);
    stopSpin();
    if (h) select(h, false);
    else closePanel();
  });

  const alSel = $('#alSel');
  alSel.onchange = () => {
    const v = alSel.value;
    setAl(v, !!(v && v.startsWith('__rank_')));
  };

  const lyDef = $('#lyDef');
  if (lyDef) {
    lyDef.onclick = () => {
      Object.assign(st.on, DEFAULT_ON, { capitals: !isMobileViewport(), ice: true });
      savePrefs();
      buildLayers();
      st.dirty = true;
    };
  }
  const lyOff = $('#lyOff');
  if (lyOff) {
    lyOff.onclick = () => {
      Object.keys(st.on).forEach(k2 => (st.on[k2] = k2 === 'ice'));
      savePrefs();
      buildLayers();
      st.dirty = true;
    };
  }

  $('#layBtn').onclick = () => {
    $('#layers').classList.toggle('hide');
    const isHidden = $('#layers').classList.contains('hide');
    $('#layBtn').classList.toggle('on', !isHidden);
    if (!isHidden && isMobileViewport() && P.classList.contains('show')) {
      closePanel();
    }
    st.drawerHide = isHidden;
    savePrefs();
  };

  const langBtn = $('#langBtn');
  if (langBtn) {
    langBtn.onclick = () => {
      st.lang = st.lang === 'en' ? 'vi' : 'en';
      savePrefs();
      applyLang();
    };
  }

  // Search
  const q = $('#q'), sg = $('#sugg');
  let act = 0, res = [], curQuery = '';
  const drawS = () => {
    if (!res.length) {
      sg.innerHTML = `<div class="sg"><small>${tr('Không tìm thấy', 'No results found')}</small></div>`;
      sg.classList.add('show');
      return;
    }
    sg.innerHTML = res
      .map((x, i) => {
        let sub = x.sub;
        if (x.t === 'adm1' && x.o.old && x.o.old.length && !norm(x.n).includes(curQuery)) {
          const mOld = x.o.old.find(oldN => norm(oldN).includes(curQuery));
          if (mOld) sub = `${tr('Sáp nhập từ', 'Merged from')} ${mOld} · ${cName(x.o.country)}`;
        }
        return `<div class="sg${i === act ? ' act' : ''}" data-i="${i}"><span>${x.n}</span><small>${sub}</small></div>`;
      })
      .join('');
    sg.classList.add('show');
    sg.querySelectorAll('.sg').forEach(
      e =>
        (e.onmousedown = ev => {
          ev.preventDefault();
          go(res[+e.dataset.i]);
        })
    );
  };
  const go = x => {
    if (!x) return;
    sg.classList.remove('show');
    q.value = '';
    q.blur();
    if (x.t === 'h' && !st.on[x.o.t]) {
      st.on[x.o.t] = true;
      buildLayers();
    } else if (x.t === 'adm1' && !st.on.admin1) {
      st.on.admin1 = true;
      buildLayers();
    } else if (x.t === 'cap' && !st.on.capitals) {
      st.on.capitals = true;
      buildLayers();
    } else if (x.t === 'isl' && !st.on.islands) {
      st.on.islands = true;
      buildLayers();
    } else if (x.t === 'city' && !st.on.cities) {
      st.on.cities = true;
      buildLayers();
    } else if (x.t === 'lake' && !st.on.river) {
      st.on.river = true;
      buildLayers();
    }
    select(x.o, true);
  };
  q.oninput = () => {
    const v = norm(q.value.trim());
    curQuery = v;
    if (!v) {
      sg.classList.remove('show');
      return;
    }
    const prio = t => (t === 'c' ? 6 : t === 'adm1' ? 5 : t === 'cap' ? 4 : t === 'h' ? 3 : t === 'isl' ? 2 : 1);
    res = MAP.IDX.filter(x => x.s.includes(v))
      .sort(
        (a, b) =>
          (norm(a.n).startsWith(v) ? 0 : 1) - (norm(b.n).startsWith(v) ? 0 : 1) ||
          (a.s.startsWith(v) ? 0 : 1) - (b.s.startsWith(v) ? 0 : 1) ||
          prio(b.t) - prio(a.t)
      )
      .slice(0, 12);
    act = 0;
    drawS();
  };
  q.onkeydown = e => {
    if (!res.length) return;
    if (e.key === 'ArrowDown') {
      act = Math.min(act + 1, res.length - 1);
      drawS();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      act = Math.max(act - 1, 0);
      drawS();
      e.preventDefault();
    } else if (e.key === 'Enter') {
      go(res[act]);
    } else if (e.key === 'Escape') {
      sg.classList.remove('show');
      q.blur();
    }
  };
  q.onblur = () => setTimeout(() => sg.classList.remove('show'), 150);

  // Controls
  $('#zin').onclick = () => {
    stopSpin();
    setK(Math.min(MAX_K, getK() * 1.6), 350);
  };
  $('#zout').onclick = () => {
    setK(Math.max(MIN_K, getK() / 1.6), 350);
  };
  $('#home').onclick = () => {
    flyTo([106, 14], 1.15);
  };
  $('#spin').onclick = () => {
    st.spin = !st.spin;
    $('#spin').classList.toggle('on', st.spin);
    savePrefs();
  };
  $('#theme').onclick = () => {
    const cur = C.dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = cur === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('geo-theme', document.documentElement.dataset.theme);
    } catch (e) {}
    readTheme();
  };

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readTheme);
  addEventListener('resize', resize);
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.activeElement !== q) closePanel();
  });

  $('#spin').classList.toggle('on', !!st.spin);
  const hideDrawer = typeof st.drawerHide === 'boolean' ? st.drawerHide : innerWidth < 760;
  $('#layers').classList.toggle('hide', hideDrawer);
  $('#layBtn').classList.toggle('on', !hideDrawer);

  applyLang();
}
