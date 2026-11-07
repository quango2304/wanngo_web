import { REGIONS } from '../data/regions.js';
import { C0, TOOLS } from '../data/countries.js';
import { RELC, REL } from '../data/religions.js';
import { LAYERS, UPDATED, H } from '../data/hotspots.js';
import { AL, REF } from '../data/alliances.js';
import {
  $,
  norm,
  vi,
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
  CAPITALS,
  CITIES,
  ISLANDS,
  CAP_BY_ID,
  CITY_BY_ID,
  ISL_BY_ID,
  ADM1_BY_ID,
  LAKE_BY_ID
} from './state.js';
import { cv, proj, resize, recenter, pick, flyTo, fitK, setK, getK, MIN_K, MAX_K, stopSpin, inBB } from './globe.js';

const P = $('#panel');
const PB = $('#pbody');
const RTL = { g: 'Thuận lợi', m: 'Lẫn lộn', b: 'Thử thách', n: '—' };

const QVIEWS = [
  { n: 'Việt Nam & Biển Đông', ll: [108, 15], k: 2.3 },
  { n: 'Châu Âu & Nga', ll: [25, 52], k: 1.8 },
  { n: 'Trung Đông', ll: [46, 27], k: 2.2 },
  { n: 'Đông Á', ll: [122, 32], k: 1.9 },
  { n: 'Bắc Mỹ', ll: [-98, 38], k: 1.6 },
  { n: 'Bắc Cực', ll: [0, 82], k: 1.6 }
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
    tx: 'Hồ lớn nhất Ethiopia nằm trên cao nguyên Amhara ở độ cao 1.788 m — chính là nơi phát nguyên của dòng sông Nile Xanh (cung cấp tới 85% lượng nước lũ hàng năm cho sông Nile tại Ai Cập và nuôi đập thủy điện Đại Phục Hưng GERD).'
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
  const lon = Math.abs(pt[0]).toFixed(1) + '°' + (pt[0] >= 0 ? 'Đ' : 'T');
  const lat = Math.abs(pt[1]).toFixed(1) + '°' + (pt[1] >= 0 ? 'B' : 'N');
  return `${lat}, ${lon}`;
}

export function openPanel(html) {
  PB.innerHTML = html;
  PB.scrollTop = 0;
  P.classList.add('show');
  wire();
  recenter();
}

export function closePanel() {
  P.classList.remove('show');
  st.sel = null;
  st.dirty = true;
  recenter();
}

function chipH(id) {
  const h = HS[id];
  if (!h) return '';
  return `<span class="chip" data-h="${id}"><span class="dot" style="background:${LAYERS[h.t].c}"></span>${h.n}</span>`;
}

function chipC(en) {
  if (!BY[en]) return '';
  return `<span class="chip" data-c="${en}">${vi(en)}</span>`;
}

function chipA(k2, full) {
  const a = AL[k2];
  return `<span class="chip" data-a="${k2}"><span class="dot" style="background:${a.c};opacity:${full ? 1 : 0.45}"></span>${a.n}${full ? '' : ' (đối tác)'}</span>`;
}

function chipAdm1(a) {
  return `<span class="chip" data-adm1="${a.id}"><span class="dot" style="background:#7C3AED"></span>${a.vi}</span>`;
}

function chipUrban(o) {
  const col = o.kind === 'cap' ? '#E8590C' : o.kind === 'isl' ? '#0D9488' : '#2563EB';
  const attr = o.kind === 'cap' ? `data-cap="${o.id}"` : o.kind === 'isl' ? `data-isl="${o.id}"` : `data-city="${o.id}"`;
  return `<span class="chip" ${attr}><span class="dot" style="background:${col}"></span>${o.vi}</span>`;
}

function C_(en) {
  return C0[en];
}

function relHTML(en) {
  const r = REL[en];
  if (!r) return '';
  const tot = r.d.reduce((a, b) => a + b[1], 0);
  const bar = r.d
    .map(x => `<span title="${RELC[x[0]][0]} ~${x[1]}%" style="width:${(x[1] / tot) * 100}%;background:${RELC[x[0]][1]}"></span>`)
    .join('');
  const leg = r.d
    .map(x => `<span><i style="background:${RELC[x[0]][1]}"></i>${RELC[x[0]][0]} <b>${x[1] < 1 ? '<1' : Math.round(x[1])}%</b></span>`)
    .join('');
  return `<div class="sec" style="margin-top:4px">TÔN GIÁO <span style="font-weight:400;color:var(--faint)">· ước tính</span></div><div class="rbar">${bar}</div><div class="rleg">${leg}</div>${r.note ? `<div class="rnote">${r.note}</div>` : ''}`;
}

function compareHTML(en1, en2) {
  const d1 = C_(en1), d2 = C_(en2);
  const v1 = vi(en1), v2 = vi(en2);
  let s = `<div class="kick">SO SÁNH ĐỊA CHÍNH TRỊ</div><h1>${v1} ⇄ ${v2}</h1>`;
  s += `<div style="display:flex;gap:6px;margin-bottom:12px"><button class="btn" id="cmpBack" data-c="${en1}">← Quay lại ${v1}</button><button class="btn" id="cmpSwap" data-c1="${en2}" data-c2="${en1}">⇄ Đổi chiều</button></div>`;
  s += `<div class="cmp-grid">`;
  s += `<div class="cmp-col"><b class="lnk-inline" data-c="${en1}">${v1}</b><div><small style="color:var(--muted)">Thủ đô:</small> ${(d1 && d1.cap) || '—'}</div><div><small style="color:var(--muted)">Dân số:</small> ${(d1 && d1.pop) || '—'}</div><div><small style="color:var(--muted)">Diện tích:</small> ${(d1 && d1.area) || '—'}</div></div>`;
  s += `<div class="cmp-col"><b class="lnk-inline" data-c="${en2}">${v2}</b><div><small style="color:var(--muted)">Thủ đô:</small> ${(d2 && d2.cap) || '—'}</div><div><small style="color:var(--muted)">Dân số:</small> ${(d2 && d2.pop) || '—'}</div><div><small style="color:var(--muted)">Diện tích:</small> ${(d2 && d2.area) || '—'}</div></div>`;
  s += `</div>`;

  if (d1 && d2) {
    const ems = ['🛡️', '⚓', '🌊', '📏', '💧'];
    for (let i = 0; i < 5; i++) {
      const t1 = d1.t[i] || ['n', '—'], t2 = d2.t[i] || ['n', '—'];
      const r1 = t1[1] ? t1[0] : 'n', r2 = t2[1] ? t2[0] : 'n';
      s += `<div class="cmp-t"><div class="cmp-t-hd">${ems[i]} ${TOOLS[i][0]}</div><div class="cmp-grid" style="margin:4px 0 0"><div class="cmp-col"><span class="rt ${r1}" style="display:inline-block;margin-bottom:4px">${RTL[r1]}</span><div>${t1[1] || '—'}</div></div><div class="cmp-col"><span class="rt ${r2}" style="display:inline-block;margin-bottom:4px">${RTL[r2]}</span><div>${t2[1] || '—'}</div></div></div></div>`;
    }
  }
  const m1 = (MEM[en1] || []).map(x => chipA(x[0], x[1])).join('');
  const m2 = (MEM[en2] || []).map(x => chipA(x[0], x[1])).join('');
  if (m1 || m2) {
    s += `<div class="cmp-t"><div class="cmp-t-hd">THÀNH VIÊN CÁC KHỐI</div><div class="cmp-grid" style="margin:4px 0 0"><div class="cmp-col"><div class="chips">${m1 || '—'}</div></div><div class="cmp-col"><div class="chips">${m2 || '—'}</div></div></div></div>`;
  }
  return s;
}

function countryHTML(f, ll) {
  const d = C_(f.en);
  const rg = REGIONS[f.rg] || REGIONS.territory;
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
  let s = `<div class="kick">${rg[0]}</div><h1>${f.vi}</h1>`;
  if (f.en && f.en !== f.vi) s += `<div class="sub-h1">${f.en}</div>`;
  if (d) {
    s += `<div class="stats"><div class="stat"><small>Thủ đô</small><div>${d.cap}</div></div><div class="stat"><small>Dân số</small><div>${d.pop}</div></div><div class="stat"><small>Diện tích</small><div>${d.area}</div></div></div>`;
    s += `<p class="sum">${d.sum}</p>`;
    s += relHTML(f.en);
    s += `<div class="tools" id="tl">`;
    d.t.forEach((t, i) => {
      const r = t[1] ? t[0] : 'n';
      s += `<div class="tool"><div class="em">${['🛡️', '⚓', '🌊', '📏', '💧'][i]}</div><div><div class="nm">${TOOLS[i][0]}</div><div class="sh">${t[1] || 'Không có điểm đáng chú ý'}</div></div><span class="rt ${r}">${RTL[r]}</span>${t[2] ? `<div class="dt">${t[2]}</div>` : ''}</div>`;
    });
    s += `</div>`;
    if (d.t.some(t => t[2])) s += `<button class="lnk" id="moreBtn">Xem thêm ↓</button>`;

    // Comparison dropdown
    const opts = MAP.F.filter(x => x.en !== f.en)
      .sort((a, b) => a.vi.localeCompare(b.vi, 'vi'))
      .map(x => `<option value="${x.en}">${x.vi}</option>`)
      .join('');
    s += `<div class="cmp-bar"><select id="cmpSel" data-c1="${f.en}" aria-label="So sánh với quốc gia khác"><option value="">⇄ So sánh với quốc gia khác...</option>${opts}</select></div>`;

    // Admin-1 States / Provinces belonging to this country
    const admList = MAP.ADM1.filter(a => a.country === f.en).sort((a, b) => a.vi.localeCompare(b.vi, 'vi'));
    if (admList.length) {
      const isOpen = f.en === 'Vietnam' || f.en === 'United States of America' ? ' open' : '';
      s += `<details class="adm-list"${isOpen}><summary><span>BANG / TỈNH THÀNH (${admList.length})</span><small style="font-weight:400">bấm để mở</small></summary><div class="chips">${admList.map(chipAdm1).join('')}</div></details>`;
    }

    // Capitals, Cities & Islands belonging to this country
    const uList = [
      ...CAPITALS.filter(c => c.country === f.en),
      ...CITIES.filter(ct => ct.country === f.en),
      ...ISLANDS.filter(isl => isl.country === f.en)
    ];
    if (uList.length) {
      s += `<div class="sec">ĐÔ THỊ, CẢNG &amp; ĐẢO CHIẾN LƯỢC</div><div class="chips">${uList.map(chipUrban).join('')}</div>`;
    }

    const ids = [...new Set([...(d.hs || []), ...relH])];
    if (ids.length) s += `<div class="sec">ĐIỂM NÓNG LIÊN QUAN</div><div class="chips">${ids.map(chipH).join('')}</div>`;
  } else {
    s += `<p class="txt">${rg[1]}</p>`;
    if (relH.length) s += `<div class="sec">ĐIỂM NÓNG LIÊN QUAN</div><div class="chips">${relH.map(chipH).join('')}</div>`;
  }
  if (inside) s += `<div class="sec">NẰM TRONG VÙNG</div><div class="chips">${inside}</div>`;
  if (mem) s += `<div class="sec">THÀNH VIÊN CÁC KHỐI</div><div class="chips">${mem}</div>`;
  if (!d) s += `<p class="note">Thẻ khu vực. Các nước trọng điểm có phân tích đầy đủ theo 5 công cụ.</p>`;
  return s;
}

function adm1HTML(f) {
  const cVi = vi(f.country);
  let s = `<div class="kick"><span class="sq" style="background:#7C3AED"></span>BANG / TỈNH THÀNH · ${cVi}</div>`;
  s += `<h1>${f.vi}</h1>`;
  if (f.en && f.en !== f.vi) s += `<div class="sub-h1">${f.en}${f.postal ? ` (${f.postal})` : ''}</div>`;

  const stat3 =
    f.iso === 'VNM'
      ? `<div class="stat"><small>Sáp nhập 2025</small><div>${f.old && f.old.length ? f.old.join(' + ') : 'Giữ nguyên'}</div></div>`
      : `<div class="stat"><small>Diện tích ước tính</small><div>~${Math.max(10, Math.round((f.ar || 0) * 6371 * 6371)).toLocaleString('vi-VN')} km²</div></div>`;

  s += `<div class="stats">
    <div class="stat"><small>Quốc gia</small><div>${BY[f.country] ? `<span class="lnk-inline" data-c="${f.country}">${cVi}</span>` : cVi}</div></div>
    <div class="stat"><small>Trung tâm hành chính</small><div>${f.cap || '—'}</div></div>
    ${stat3}
  </div>`;

  s += `<p class="sum">${f.tx || `Đơn vị hành chính cấp 1 (${f.vi}) thuộc ${cVi}, giữ vai trò quan trọng trong cấu trúc lãnh thổ, dân cư và kinh tế vùng.`}</p>`;

  const localUrban = [
    ...CAPITALS.filter(c => c.country === f.country && inBB(f, c.pt) && d3.geoContains(f, c.pt)),
    ...CITIES.filter(ct => ct.country === f.country && inBB(f, ct.pt) && d3.geoContains(f, ct.pt)),
    ...ISLANDS.filter(isl => isl.country === f.country && inBB(f, isl.pt) && d3.geoContains(f, isl.pt))
  ];
  if (localUrban.length) {
    s += `<div class="sec">ĐÔ THỊ &amp; ĐẢO TRONG TỈNH / BANG</div><div class="chips">${localUrban.map(chipUrban).join('')}</div>`;
  }

  const nearH = H.filter(h => {
    const pt = h.kind === 'pt' ? h.geo.coordinates : h.lab;
    return pt && d3.geoDistance(pt, f.cen) < 0.14;
  }).slice(0, 8);
  if (nearH.length) {
    s += `<div class="sec">ĐIỂM NÓNG &amp; ĐỊA LÝ LÂN CẬN</div><div class="chips">${nearH.map(h => chipH(h.id)).join('')}</div>`;
  }

  if (BY[f.country]) {
    s += `<div style="margin-top:16px"><button class="btn" data-c="${f.country}">← Xem tổng quan ${cVi}</button></div>`;
  }
  return s;
}

function urbanIslandHTML(o) {
  const isLake = o.kind === 'lake';
  const lMeta = isLake ? LAKE_META[o.id] || {} : {};
  const cfg =
    o.kind === 'cap'
      ? ['THỦ ĐÔ THẾ GIỚI', '#E8590C']
      : o.kind === 'city'
      ? ['ĐÔ THỊ & CẢNG CHIẾN LƯỢC', '#2563EB']
      : o.kind === 'isl'
      ? ['ĐẢO & VÙNG CHIẾN LƯỢC', '#0D9488']
      : ['HỒ & BIỂN NỘI ĐỊA', '#2E7CC0'];

  const countryName = o.country ? vi(o.country) : '';
  const pt = o.pt || o.cen;
  let s = `<div class="kick"><span class="sq" style="background:${cfg[1]}"></span>${cfg[0]}${countryName ? ' · ' + countryName : ''}</div>`;
  const title = o.vi || o.n;
  s += `<h1>${title}</h1>`;
  if (o.en && o.en !== title) s += `<div class="sub-h1">${o.en}</div>`;

  const stat1Label = isLake ? 'Khu vực' : 'Quốc gia';
  const stat1Val =
    o.country && BY[o.country]
      ? `<span class="lnk-inline" data-c="${o.country}">${countryName}</span>`
      : countryName || (lMeta.rel && lMeta.rel.length ? lMeta.rel.map(vi).join(', ') : 'Nội lục');

  const stat2 = o.pop
    ? `<div class="stat"><small>Dân số</small><div>${o.pop}</div></div>`
    : `<div class="stat"><small>Diện tích</small><div>${o.area || lMeta.area || '~' + Math.max(100, Math.round((o.ar || 0) * 6371 * 6371)).toLocaleString('vi-VN') + ' km²'}</div></div>`;

  s += `<div class="stats">
    <div class="stat"><small>${stat1Label}</small><div>${stat1Val}</div></div>
    ${stat2}
    <div class="stat"><small>Tọa độ</small><div>${fmtCoord(pt)}</div></div>
  </div>`;

  const desc =
    o.tx ||
    lMeta.tx ||
    `${title} (${o.en || title}) là hồ lớn quan trọng trong mạng lưới thủy văn lục địa, đóng vai trò điều tiết nguồn nước ngọt, sinh kế nông – ngư nghiệp và giao thông đường thủy nội địa khu vực.`;
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
    s += `<div class="sec">QUỐC GIA LIÊN QUAN</div><div class="chips">${relCountries.map(chipC).join('')}</div>`;
  }

  if (!isLake && o.country && pt && MAP.ADM1.length) {
    const adm = MAP.ADM1.find(a => a.country === o.country && inBB(a, pt) && d3.geoContains(a, pt));
    if (adm) {
      s += `<div class="sec">THUỘC BANG / TỈNH THÀNH</div><div class="chips">${chipAdm1(adm)}</div>`;
    }
  }

  if (pt) {
    const nearH = H.filter(h => {
      const hp = h.kind === 'pt' ? h.geo.coordinates : h.lab;
      return hp && d3.geoDistance(hp, pt) < 0.16;
    }).slice(0, 8);
    if (nearH.length) {
      s += `<div class="sec">ĐIỂM NÓNG &amp; TUYẾN CHIẾN LƯỢC LÂN CẬN</div><div class="chips">${nearH.map(h => chipH(h.id)).join('')}</div>`;
    }
  }
  return s;
}

function hotHTML(h) {
  const L = LAYERS[h.t];
  let s = `<div class="kick"><span class="sq" style="background:${L.c}"></span>${L.n}</div><h1>${h.n}</h1><p class="txt">${h.tx}</p>`;
  if (h.t === 'conflict') s += `<p class="note">Cập nhật tới ${UPDATED}. Tình hình có thể đã thay đổi.</p>`;
  if (h.id === 'africalines') s += `<p class="note">Đường đỏ hồng trên bản đồ là các đoạn biên giới thẳng tắp dài từ 120 km trở lên.</p>`;
  if (h.id === 'ninedash') s += `<p class="note">Đường trên bản đồ chỉ vẽ ước lượng để minh họa.</p>`;
  if (h.rel && h.rel.length) s += `<div class="sec">LIÊN QUAN</div><div class="chips">${h.rel.map(chipC).join('')}</div>`;
  return s;
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
      mb.textContent = tl.classList.contains('more') ? 'Thu gọn ↑' : 'Xem thêm ↓';
    };
}

let lastLL = null;

export function select(o, fly) {
  if (!o) return;
  st.sel = o;
  st.dirty = true;
  if (o.isAdm1) {
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
    if (fly) flyTo(o.cen, fitK(o));
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
  const tgl = ([key, L]) =>
    `<div class="tg${st.on[key] ? ' on' : ''}" data-l="${key}"><span class="dot" style="background:${L.c}"></span>${L.n}<span class="sw"></span></div>`;

  const hotEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'hot');
  const infraEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'infra');
  const natEntries = Object.entries(LAYERS).filter(e => e[1].grp === 'nat' && e[0] !== 'ice');
  const admEntries = Object.entries(ADMIN_LAYERS);

  $('#lyHot').innerHTML = hotEntries.map(tgl).join('');
  $('#lyAdmin').innerHTML = admEntries.map(tgl).join('');
  $('#lyNat').innerHTML = natEntries.map(tgl).join('');
  $('#lyInfra').innerHTML = infraEntries.map(tgl).join('');

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
    .map(
      ([key, r]) =>
        `<span class="chip${st.ref[key] ? ' on' : ''}" data-r="${key}">${r.c ? `<span class="dot" style="background:${r.c}"></span>` : ''}${r.n}</span>`
    )
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

export function setAl(key) {
  const alSel = $('#alSel');
  st.al = key || '';
  alSel.value = st.al;
  savePrefs();
  st.dirty = true;
  const lg = $('#legend');
  if (!st.al) {
    lg.classList.remove('show');
    return;
  }
  const a = AL[st.al];
  lg.innerHTML = `<div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><b>${a.n}</b><button class="lnk" id="alX" style="padding:0">Tắt</button></div><div style="color:var(--muted);font-size:12px">${a.f}</div><div style="margin-top:6px">${a.tx}</div><div class="row"><span><span class="sq" style="background:${a.c}"></span>Thành viên</span>${a.p.length ? `<span><span class="sq" style="background:${a.c};opacity:.42"></span>Đối tác / đặc biệt</span>` : ''}</div>`;
  lg.classList.add('show');
  $('#alX').onclick = () => setAl('');
}

function tipLabel(h) {
  if (h.isAdm1) return `${h.vi}<small>bang / tỉnh · ${vi(h.country)}</small>`;
  if (h.kind === 'cap') return `${h.vi}<small>thủ đô · ${vi(h.country)}</small>`;
  if (h.kind === 'city') return `${h.vi}<small>đô thị / cảng · ${vi(h.country)}</small>`;
  if (h.kind === 'isl') return `${h.vi}<small>đảo / vùng · ${vi(h.country)}</small>`;
  if (h.kind === 'lake') return `${h.vi || h.n}<small>hồ / biển nội địa</small>`;
  if (h.isCountry) return `${h.vi}<small>quốc gia</small>`;
  return `${h.n}<small>${(LAYERS[h.t] && LAYERS[h.t].n.toLowerCase()) || 'điểm nóng'}</small>`;
}

export function initUI() {
  $('#pclose').onclick = () => closePanel();

  let hovT = 0;
  cv.addEventListener('pointermove', e => {
    if (st.drag) return;
    const now = performance.now();
    if (now - hovT < 40) return;
    hovT = now;
    const h = pick(e.clientX, e.clientY);
    if (h !== st.hov) {
      st.hov = h;
      st.dirty = true;
    }
    cv.classList.toggle('hot', !!h);
    const tip = $('#tip');
    if (h) {
      tip.innerHTML = tipLabel(h);
      tip.style.display = 'block';
      tip.style.left = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8) + 'px';
      tip.style.top = e.clientY + 14 + 'px';
    } else {
      tip.style.display = 'none';
    }
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
  Object.entries(AL).forEach(([key, a]) => {
    const o = document.createElement('option');
    o.value = key;
    o.textContent = a.n + ' · ' + a.f.split(' · ')[0];
    alSel.appendChild(o);
  });
  alSel.onchange = () => setAl(alSel.value);

  const lyDef = $('#lyDef');
  if (lyDef) {
    lyDef.onclick = () => {
      Object.assign(st.on, DEFAULT_ON);
      st.on.ice = true;
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

  const qviews = $('#qviews');
  if (qviews) {
    qviews.innerHTML = QVIEWS.map((v, i) => `<span class="chip" data-qv="${i}">${v.n}</span>`).join('');
    qviews.querySelectorAll('.chip').forEach(
      e =>
        (e.onclick = () => {
          const v = QVIEWS[+e.dataset.qv];
          if (v) flyTo(v.ll, v.k);
        })
    );
  }

  $('#layBtn').onclick = () => {
    $('#layers').classList.toggle('hide');
    const isHidden = $('#layers').classList.contains('hide');
    $('#layBtn').classList.toggle('on', !isHidden);
    st.drawerHide = isHidden;
    savePrefs();
  };

  // Search
  const q = $('#q'), sg = $('#sugg');
  let act = 0, res = [], curQuery = '';
  const drawS = () => {
    if (!res.length) {
      sg.innerHTML = '<div class="sg"><small>Không tìm thấy</small></div>';
      sg.classList.add('show');
      return;
    }
    sg.innerHTML = res
      .map((x, i) => {
        let sub = x.sub;
        if (x.t === 'adm1' && x.o.old && x.o.old.length && !norm(x.n).includes(curQuery)) {
          const mOld = x.o.old.find(oldN => norm(oldN).includes(curQuery));
          if (mOld) sub = `Sáp nhập từ ${mOld} · ${vi(x.o.country)}`;
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
  if (st.al && AL[st.al]) setAl(st.al);

  buildLayers();
}
