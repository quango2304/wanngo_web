// Explainer: India and Pakistan, told as one argument in short steps: one river system, a 1947 border that leaves Pakistan
// downstream, disputed high ground upstream, the 1960 water treaty, India's 2025 "abeyance", Pakistan's answer, the May 2025
// clash under two nuclear arsenals, and where it stands. Facts from the research pack of 8 Nov 2026; each step names its
// sources, and every government position is attributed to the party that holds it. Kashmir, the Line of Control and the
// China-India boundary are sovereignty disputes, so nothing here draws a border, a Line of Control or a disputed-area shape,
// and no country is highlighted (the engine would tint whole countries, disputed parts included). Rivers and cities are
// drawn as approximate, illustrative shapes.
const IN = '#E8903A', PK = '#3F9142', GREY = '#6B7280', BROWN = '#8A5A00';
const RW = '#2E7CC0', RE = '#E8903A', RIVER = '#4A90C8';

// River courses (approximate, hand-drawn)
const JHELUM = [[75.25, 33.53], [74.8, 34.08], [74.55, 34.35], [73.47, 34.37], [73.64, 33.15], [73.73, 32.93], [72.15, 31.15]];
const CHENAB = [[77.0, 32.57], [75.8, 33.3], [74.75, 32.9], [74.46, 32.67], [72.15, 31.15], [71.0, 29.35], [70.37, 28.95]];
const RAVI = [[76.3, 32.6], [75.6, 32.35], [75.0, 32.1], [74.3, 31.6], [73.0, 31.0], [71.85, 30.75]];
const BEAS = [[77.2, 32.4], [76.9, 31.7], [75.95, 32.0], [74.95, 31.15]];
const SUTLEJ = [[81.5, 30.8], [78.7, 31.8], [76.5, 31.4], [74.95, 31.15], [74.6, 30.95], [73.9, 30.45], [71.7, 29.4], [71.0, 29.35]];

export const INDOPAK = {
  id: 'indopak',
  icon: '🏔️',
  c: '#E8903A',
  title: { vi: 'Ấn Độ và Pakistan: sông Ấn và Kashmir', en: 'India and Pakistan: the Indus and Kashmir' },
  sub: { vi: 'Một dòng sông, một đường biên và hai kho vũ khí hạt nhân', en: 'One river, one border and two nuclear arsenals' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026: ngừng bắn từ 10/5/2025 vẫn được báo cáo là giữ (nguồn mới nhất được kiểm tra: Al Jazeera, 29/5/2026), nhưng đối thoại chính thức đóng băng; Pakistan cấm máy bay Ấn Độ đến 24/11/2026. Ngày 31/8/2026 Toà Trọng tài ở The Hague nhận định Hiệp ước Nước sông Ấn vẫn hoàn toàn có hiệu lực; Ấn Độ bác bỏ và nói việc tạm hoãn vẫn còn, Pakistan hoan nghênh.',
    en: 'As of 8 Nov 2026: the ceasefire of 10 May 2025 is reported to be holding (latest source checked: Al Jazeera, 29 May 2026), but official dialogue is frozen; Pakistan bars Indian aircraft until 24 Nov 2026. On 31 Aug 2026 the Court of Arbitration in The Hague found that the Indus Waters Treaty remains fully in force; India rejected this and says its abeyance still stands, while Pakistan welcomed it.'
  },
  statusSrc: [17, 18, 13, 14, 15],
  sources: [
    { n: 'Wikipedia, Indus River', url: 'https://en.wikipedia.org/wiki/Indus_River' },
    { n: 'World Bank WDI, agriculture share of freshwater withdrawals (latest FAO estimate)', url: 'https://data.worldbank.org/indicator/ER.H2O.FWAG.ZS?locations=IN-PK' },
    { n: 'World Bank WDI, irrigated share of agricultural land (2024)', url: 'https://data.worldbank.org/indicator/AG.LND.IRIG.AG.ZS?locations=IN-PK' },
    { n: 'LSE South Asia blog, The Wagah-Attari border (14/8/2017)', url: 'https://blogs.lse.ac.uk/southasia/2017/08/14/no-mans-land-the-wagah-attari-border' },
    { n: 'UNMOGIP, Background', url: 'https://unmogip.unmissions.org/en/unmogip-background' },
    { n: 'Wikipedia, Sino-Indian border dispute', url: 'https://en.wikipedia.org/wiki/Sino-Indian_border_dispute' },
    { n: 'China MFA, 25th round of Special Representatives talks (26/8/2026)', url: 'https://www.fmprc.gov.cn/eng/wjb/wjbz/hd/202608/t20260826_12010652.html' },
    { n: 'Indus Waters Treaty 1960, UN Treaty Series vol. 419 (19/9/1960)', url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%20419/volume-419-I-6032-English.pdf' },
    { n: 'World Bank, Fact Sheet: The Indus Waters Treaty 1960 (6/2023)', url: 'https://www.worldbank.org/en/region/sar/brief/fact-sheet-the-indus-waters-treaty-1960-and-the-world-bank' },
    { n: 'Indian MEA special briefing (23/4/2025, transcript)', url: 'https://www.indembassyhanoi.gov.in/page/transcript-of-special-briefing-by-mea/' },
    { n: 'Dawn, Pakistan National Security Committee (24/4/2025)', url: 'https://www.dawn.com/news/1906284/' },
    { n: 'CRS In Focus IF13000 (13/5/2025)', url: 'https://www.everycrsreport.com/reports/IF13000.html' },
    { n: 'SIPRI Yearbook 2026, ch. 8 World nuclear forces (6/2026)', url: 'https://www.sipri.org/sites/default/files/YB26%2008%20World%20Nuclear%20Forces.pdf' },
    { n: 'Permanent Court of Arbitration, press release (31/8/2026)', url: 'https://docs.pca-cpa.org/2026/08/3c1dbc21-2023-01-20260831-pca-press-release.pdf' },
    { n: 'Dawn (31/8/2026)', url: 'https://www.dawn.com/news/2026398' },
    { n: 'The Tribune India (31/8/2026)', url: 'https://www.tribuneindia.com/news/india/indus-waters-treaty-will-remain-in-abeyance-says-india-rejects-international-courts-verdict/' },
    { n: 'Wikipedia, Karakoram', url: 'https://en.wikipedia.org/wiki/Karakoram' },
    { n: 'Al Jazeera (29/5/2026, India-Pakistan)', url: 'https://www.aljazeera.com/news/2026/5/29/how-indian-pm-modis-efforts-to-isolate-pakistan-backfired' },
    { n: 'Gulf News (18/10/2026, airspace)', url: 'https://gulfnews.com/business/aviation/pakistan-extends-airspace-ban-on-indian-aircraft-until-november-24-1.500714891' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Hai nước cùng sống nhờ sông Ấn', en: 'Both countries live off the Indus' },
      text: {
        vi: 'Ấn Độ và Pakistan chung một đồng bằng, vậy vì sao lại thành hai đối thủ có vũ khí hạt nhân? Hãy bắt đầu từ sông Ấn. Sông bắt nguồn từ Tây Tạng, chảy qua vùng núi phía bắc, rồi xuống đồng bằng Pakistan và ra biển Ả Rập. Sông Ấn và các nhánh từ núi đổ xuống nuôi đồng bằng Punjab. Ở Pakistan, khoảng 94% lượng nước ngọt lấy ra được dùng cho nông nghiệp.',
        en: 'India and Pakistan share one plain, so why did they become nuclear-armed rivals? Start with the Indus. The river rises in Tibet, runs through the northern mountains, then crosses Pakistan’s plains to the Arabian Sea. The Indus and the tributaries that come down from the mountains feed the Punjab plain. In Pakistan, about 94% of the fresh water drawn goes to farming.'
      },
      facts: [
        {
          vi: 'Ở Ấn Độ, nông nghiệp chiếm 90,4% lượng nước ngọt lấy ra (ước tính mới nhất của FAO, qua Ngân hàng Thế giới). Năm 2024, 53,7% đất nông nghiệp của Pakistan được tưới, ở Ấn Độ là 46,2%.',
          en: 'In India, farming takes 90.4% of fresh water drawn (latest FAO estimate, via the World Bank). In 2024, 53.7% of Pakistan’s farmland was irrigated, against 46.2% in India.'
        },
        {
          vi: 'Sông Ấn dài khoảng 3.180 km (Wikipedia).',
          en: 'The Indus is about 3,180 km long (Wikipedia).'
        }
      ],
      ll: [73.5, 31],
      k: 4,
      layers: [],
      show: ['indus', 'gangeticplain', 'himalaya', 'karakoram'],
      draw: [
        { k: 'line', pts: JHELUM, c: RIVER, w: 2 },
        { k: 'line', pts: CHENAB, c: RIVER, w: 2 },
        { k: 'line', pts: RAVI, c: RIVER, w: 2 },
        { k: 'line', pts: BEAS, c: RIVER, w: 2 },
        { k: 'line', pts: SUTLEJ, c: RIVER, w: 2 }
      ],
      src: [0, 1, 2]
    },
    {
      tag: 'blocked',
      title: { vi: 'Năm 1947, đường biên cắt đôi đồng bằng', en: 'In 1947 a border cut the plain in two' },
      text: {
        vi: 'Năm 1947, đường Radcliffe chia đôi vùng Punjab. Lahore thuộc về Pakistan, Amritsar thuộc về Ấn Độ. Giữa hai thành phố là Attari–Wagah, cửa khẩu đường bộ chính thức duy nhất giữa hai nước. Đường biên mới cũng cắt ngang các dòng sông. Hai nhánh Jhelum và Chenab chảy qua vùng do Ấn Độ quản lý rồi mới vào Pakistan. Nước đi xuống phía Pakistan, nhưng nguồn của nó nằm phía trên.',
        en: 'In 1947 the Radcliffe Line split the Punjab in two. Lahore went to Pakistan, Amritsar to India. Between the two cities lies Attari–Wagah, the only official land crossing between the two countries. The new border also cut across the rivers. The Jhelum and the Chenab pass through areas India administers before they enter Pakistan. The water flows down to Pakistan, but its sources lie upstream.'
      },
      ll: [74.3, 32.3],
      k: 7,
      layers: [],
      show: ['indus'],
      draw: [
        { k: 'line', pts: JHELUM, c: RIVER, w: 2.2, flow: true, label: { vi: 'Jhelum', en: 'Jhelum' }, lp: [73.3, 33.5], dy: -4 },
        { k: 'line', pts: CHENAB, c: RIVER, w: 2.2, flow: true, label: { vi: 'Chenab', en: 'Chenab' }, lp: [73.6, 32.2], dy: -4 },
        { k: 'pt', p: [74.34, 31.55], c: PK, r: 4, label: { vi: 'Lahore', en: 'Lahore' }, side: 'l' },
        { k: 'pt', p: [74.87, 31.63], c: IN, r: 4, label: { vi: 'Amritsar', en: 'Amritsar' }, dy: -8 },
        { k: 'pt', p: [74.57, 31.6], c: GREY, r: 3, label: { vi: 'Attari–Wagah', en: 'Attari–Wagah' }, dy: 15 }
      ],
      key: [
        { c: PK, vi: 'Thành phố phía Pakistan', en: 'City on the Pakistani side' },
        { c: IN, vi: 'Thành phố phía Ấn Độ', en: 'City on the Indian side' }
      ],
      src: [3, 0]
    },
    {
      tag: 'blocked',
      title: { vi: 'Phía trên dòng sông là Kashmir tranh chấp', en: 'Upstream lies disputed Kashmir' },
      text: {
        vi: 'Ngược lên phía bắc, các dòng sông chảy qua vùng núi Kashmir, nơi Ấn Độ, Pakistan và Trung Quốc gặp nhau. Mỗi bên giữ lập trường riêng, nên bản đồ không vẽ đường biên nào. Năm 1949 hai nước lập một đường ngừng bắn có quan sát viên Liên Hợp Quốc; năm 1972 họ xác định Đường Kiểm soát, đại thể theo đường cũ. Năm 2025, Pakistan vẫn trách Ấn Độ không tuân thủ các nghị quyết của Liên Hợp Quốc về Kashmir.',
        en: 'Further north, the rivers run through the mountains of Kashmir, where India, Pakistan and China meet. Each side holds its own position, so the map draws no border. In 1949 the two countries set up a ceasefire line watched by UN observers; in 1972 they defined the Line of Control, broadly along the old line. In 2025 Pakistan still faulted India for not following the UN resolutions on Kashmir.'
      },
      facts: [
        {
          vi: 'Ấn Độ cho rằng nhiệm vụ của phái bộ quan sát Liên Hợp Quốc (UNMOGIP) đã hết hiệu lực; Pakistan không chấp nhận; theo Tổng thư ký Liên Hợp Quốc, chỉ Hội đồng Bảo an mới chấm dứt được (UNMOGIP).',
          en: 'India holds that the mandate of the UN observer mission (UNMOGIP) has lapsed; Pakistan does not accept that; in the UN Secretary-General’s view only the Security Council can end it (UNMOGIP).'
        },
        {
          vi: 'Ấn Độ và Trung Quốc có tranh chấp biên giới riêng: Trung Quốc quản lý Aksai Chin, Ấn Độ tuyên bố vùng này; Ấn Độ quản lý Arunachal Pradesh, Trung Quốc tuyên bố vùng này (Wikipedia). Ngày 25/8/2026 hai bên họp vòng đàm phán thứ 25 ở Bắc Kinh (Bộ Ngoại giao Trung Quốc).',
          en: 'India and China have a separate boundary dispute: China administers Aksai Chin and India claims it; India administers Arunachal Pradesh and China claims it (Wikipedia). On 25 Aug 2026 the two held their 25th round of talks in Beijing (China MFA).'
        }
      ],
      ll: [76, 34.6],
      k: 5.5,
      layers: [],
      show: ['conf_kashmir', 'karakoram', 'himalaya', 'indus'],
      draw: [
        { k: 'line', pts: JHELUM, c: RIVER, w: 2, flow: true },
        { k: 'line', pts: CHENAB, c: RIVER, w: 2, flow: true }
      ],
      src: [0, 16, 5, 4, 10, 6]
    },
    {
      tag: 'move',
      title: { vi: 'Năm 1960, hiệp ước chia sáu con sông', en: 'In 1960 a treaty split six rivers' },
      text: {
        vi: 'Để chia nước, hai nước ký Hiệp ước Nước sông Ấn ở Karachi ngày 19/9/1960; Ngân hàng Thế giới cũng ký. Ba sông phía đông (Ravi, Beas, Sutlej) dành cho Ấn Độ dùng không hạn chế. Ba sông phía tây (Ấn, Jhelum, Chenab) dành cho Pakistan; Ấn Độ phải để nước chảy, chỉ được dùng có giới hạn, như làm thủy điện. Muốn sửa hay bỏ hiệp ước, phải có một hiệp ước mới được cả hai phê chuẩn.',
        en: 'To share the water, the two countries signed the Indus Waters Treaty in Karachi on 19 Sep 1960; the World Bank signed too. The three eastern rivers (Ravi, Beas, Sutlej) are for India’s unrestricted use. The three western rivers (Indus, Jhelum, Chenab) are for Pakistan; India must let their water flow, with only limited uses such as hydropower. Changing or ending the treaty takes a new treaty ratified by both.'
      },
      facts: [
        {
          vi: 'Hiệp ước có ba cách giải quyết bất đồng: Ủy ban Thường trực sông Ấn, Chuyên gia Trung lập và Toà Trọng tài. Ngân hàng Thế giới gọi vai trò của mình là “hạn chế và mang tính thủ tục” (World Bank, 6/2023).',
          en: 'The treaty has three ways to settle disagreements: the Permanent Indus Commission, a Neutral Expert and a Court of Arbitration. The World Bank calls its own role “limited and procedural” (World Bank, June 2023).'
        }
      ],
      ll: [74, 31.8],
      k: 5,
      layers: [],
      show: ['indus'],
      draw: [
        { k: 'line', pts: JHELUM, c: RW, w: 2.2, label: { vi: 'Jhelum', en: 'Jhelum' }, lp: [73.3, 33.5], dy: -4 },
        { k: 'line', pts: CHENAB, c: RW, w: 2.2, label: { vi: 'Chenab', en: 'Chenab' }, lp: [73.6, 32.2], dy: -4 },
        { k: 'line', pts: RAVI, c: RE, w: 2.2, label: { vi: 'Ravi', en: 'Ravi' }, lp: [73.9, 31.55], dy: 8 },
        { k: 'line', pts: BEAS, c: RE, w: 2.2 },
        { k: 'line', pts: SUTLEJ, c: RE, w: 2.2, label: { vi: 'Sutlej', en: 'Sutlej' }, lp: [72.6, 29.85], dy: 8 }
      ],
      key: [
        { c: RW, vi: 'Sông phía tây: dành cho Pakistan', en: 'Western rivers: for Pakistan' },
        { c: RE, vi: 'Sông phía đông: dành cho Ấn Độ', en: 'Eastern rivers: for India' }
      ],
      src: [7, 8]
    },
    {
      tag: 'move',
      title: { vi: 'Năm 2025, Ấn Độ treo hiệp ước', en: 'In 2025 India put the treaty on hold' },
      text: {
        vi: 'Ngày 22/4/2025 có một vụ tấn công gần Pahalgam. Ấn Độ nói 25 người Ấn Độ và một người Nepal thiệt mạng. Hôm sau, Ấn Độ tuyên bố hiệp ước nước được “tạm hoãn ngay lập tức”, cho đến khi Pakistan từ bỏ hẳn việc ủng hộ khủng bố xuyên biên giới. Ấn Độ cũng đóng cửa khẩu Attari. Như vậy, Ấn Độ gắn hiệp ước nước với chuyện khủng bố.',
        en: 'On 22 Apr 2025 there was an attack near Pahalgam. India said 25 Indians and one Nepali were killed. The next day India declared the water treaty “held in abeyance with immediate effect” until Pakistan credibly and irrevocably gives up its support for cross-border terrorism. India also closed the Attari crossing. In this way India tied the water treaty to terrorism.'
      },
      facts: [
        {
          vi: 'Cùng lúc, Ấn Độ huỷ một loại thị thực cho người Pakistan, trục xuất các tùy viên quốc phòng Pakistan và giảm nhân sự Cao uỷ từ 55 xuống 30 người (Bộ Ngoại giao Ấn Độ, 23/4/2025).',
          en: 'At the same time India cancelled a visa category for Pakistanis, expelled Pakistan’s defence advisers and cut High Commission staff from 55 to 30 (Indian MEA, 23 Apr 2025).'
        }
      ],
      ll: [74.6, 32.6],
      k: 6,
      layers: [],
      show: ['conf_kashmir'],
      draw: [
        { k: 'line', pts: JHELUM, c: RW, w: 2.2 },
        { k: 'line', pts: CHENAB, c: RW, w: 2.2, label: { vi: 'sông phía tây', en: 'western rivers' }, lp: [73.6, 32.2], dy: -4 },
        { k: 'pt', p: [74.57, 31.6], c: GREY, r: 3.5, label: { vi: 'Attari: đóng', en: 'Attari: closed' }, dy: 12 }
      ],
      src: [9]
    },
    {
      tag: 'counter',
      title: { vi: 'Pakistan: chặn nước là hành động chiến tranh', en: 'Pakistan: stopping the water is an act of war' },
      text: {
        vi: 'Pakistan phủ nhận có vai trò trong vụ tấn công. Theo CRS (5/2025), Ấn Độ chưa đưa ra bằng chứng về mối liên hệ với Pakistan. Ngày 24/4/2025, Ủy ban An ninh Quốc gia Pakistan tuyên bố mọi nỗ lực chặn hay chuyển dòng nước sẽ bị coi là “hành động chiến tranh”. Pakistan cũng đóng cửa khẩu Wagah, đóng không phận với hãng bay Ấn Độ và ngừng mọi thương mại với Ấn Độ. Chưa đầy hai tuần sau, hai bên nổ súng.',
        en: 'Pakistan denies any role in the attack. According to CRS (May 2025), India had not presented evidence of a Pakistani link. On 24 Apr 2025 Pakistan’s National Security Committee declared that any attempt to stop or divert the water would be treated as an “act of war”. Pakistan also closed the Wagah crossing, shut its airspace to Indian airlines and suspended all trade with India. Less than two weeks later, the two sides opened fire.'
      },
      facts: [
        {
          vi: 'Pakistan còn đặt các thoả thuận song phương với Ấn Độ, kể cả Hiệp định Simla, vào trạng thái tạm hoãn cho đến khi Ấn Độ thay đổi cách hành xử (Ủy ban An ninh Quốc gia, theo Dawn).',
          en: 'Pakistan also put its bilateral agreements with India, including the Simla Agreement, in abeyance until India changes its conduct (National Security Committee, via Dawn).'
        }
      ],
      ll: [70.5, 29.5],
      k: 4,
      layers: [],
      show: ['indus'],
      draw: [
        { k: 'pt', p: [74.34, 31.55], c: PK, r: 4, label: { vi: 'Lahore', en: 'Lahore' } },
        { k: 'label', p: [68.6, 26.6], c: BROWN, label: { vi: 'Hạ nguồn: Pakistan', en: 'Downstream: Pakistan' }, dy: 0 }
      ],
      src: [11, 10]
    },
    {
      tag: 'outlook',
      title: { vi: 'Đụng độ 5/2025, dưới bóng hạt nhân', en: 'A clash in May 2025, under a nuclear shadow' },
      text: {
        vi: 'Đêm 6 rạng 7/5/2025, Ấn Độ tấn công chín mục tiêu mà họ gọi là cơ sở khủng bố. SIPRI đánh giá Ấn Độ đánh cả căn cứ không quân và tên lửa của Pakistan có nhiệm vụ hạt nhân. Ngày 10/5 hai bên ngừng bắn. SIPRI nói hai bên chủ ý giữ xung đột ở mức vũ khí thường, nhưng nguy cơ leo thang nhanh, bất ngờ lên mức hạt nhân vẫn là “mối lo dai dẳng và nghiêm trọng”.',
        en: 'On the night of 6–7 May 2025 India struck nine targets it called terrorist sites. SIPRI assesses that India also hit Pakistani air and missile bases with nuclear missions. On 10 May the two sides agreed a ceasefire. SIPRI says both deliberately kept the conflict conventional, yet the risk of rapid, unexpected escalation to the nuclear level remains “a lingering and serious concern”.'
      },
      facts: [
        {
          vi: 'SIPRI ước tính tháng 1/2026 Ấn Độ có khoảng 190 đầu đạn hạt nhân, Pakistan khoảng 170. SIPRI gọi đụng độ tháng 5/2025 là cuộc xung đột vũ trang lớn nhất giữa hai nước trong nhiều thập kỷ.',
          en: 'SIPRI estimated in January 2026 that India has about 190 nuclear warheads and Pakistan about 170. SIPRI calls the May 2025 fighting the two countries’ most significant armed conflict in decades.'
        },
        {
          vi: 'Tổng thống Mỹ Trump công bố đã môi giới ngừng bắn; Ấn Độ nói hai bên trực tiếp thoả thuận. Pakistan nói ít nhất 31 người chết; Ấn Độ nói ít nhất 15 dân thường chết vì pháo kích của Pakistan (CRS).',
          en: 'US President Trump announced that he had brokered the ceasefire; India says the two sides agreed it directly. Pakistan said at least 31 people died; India said at least 15 civilians died from Pakistani shelling (CRS).'
        }
      ],
      ll: [74, 31],
      k: 4,
      layers: [],
      show: ['conf_kashmir'],
      draw: [
        { k: 'pt', p: [73.05, 33.69], c: PK, r: 4, label: { vi: 'Islamabad', en: 'Islamabad' }, side: 'l' },
        { k: 'pt', p: [77.21, 28.61], c: IN, r: 4, label: { vi: 'Delhi', en: 'Delhi' } }
      ],
      key: [
        { c: PK, vi: 'Thủ đô Pakistan', en: 'Pakistan’s capital' },
        { c: IN, vi: 'Thủ đô Ấn Độ', en: 'India’s capital' }
      ],
      src: [11, 12, 17]
    },
    {
      tag: 'outlook',
      title: { vi: 'Toà đã phán, nhưng không bên nào lùi', en: 'The court has ruled, but neither side backs down' },
      text: {
        vi: 'Ngày 31/8/2026, Toà Trọng tài ở The Hague nhận định hiệp ước nước vẫn hoàn toàn có hiệu lực. Pakistan hoan nghênh; Ấn Độ nói Toà không có thẩm quyền và hiệp ước vẫn bị tạm hoãn. Đến tháng 5/2026, đối thoại chính thức vẫn đóng băng. Gốc rễ là dòng sông và đường biên: Pakistan ở cuối dòng nói nước là sống còn, Ấn Độ nói khủng bố từ bên kia biên giới phải dừng trước. Mà cả hai đều có vũ khí hạt nhân.',
        en: 'On 31 Aug 2026 the Court of Arbitration in The Hague found that the water treaty remains fully in force. Pakistan welcomed it; India said the court has no jurisdiction and the treaty stays in abeyance. As of May 2026, official dialogue was still frozen. The root is the river and the border: Pakistan, downstream, says the water is vital; India says terrorism from across the border must stop first. And both hold nuclear weapons.'
      },
      ll: [74.3, 31.2],
      k: 5,
      layers: [],
      show: ['indus', 'conf_kashmir'],
      draw: [
        { k: 'line', pts: JHELUM, c: RW, w: 2.2 },
        { k: 'line', pts: CHENAB, c: RW, w: 2.2 },
        { k: 'line', pts: RAVI, c: RE, w: 2.2 },
        { k: 'line', pts: BEAS, c: RE, w: 2.2 },
        { k: 'line', pts: SUTLEJ, c: RE, w: 2.2 },
        { k: 'label', p: [77.2, 35.9], c: BROWN, label: { vi: 'Thượng nguồn', en: 'Upstream' }, dy: 0 },
        { k: 'label', p: [69.5, 27.2], c: BROWN, label: { vi: 'Hạ nguồn', en: 'Downstream' }, dy: 0 }
      ],
      key: [
        { c: RW, vi: 'Sông phía tây: dành cho Pakistan', en: 'Western rivers: for Pakistan' },
        { c: RE, vi: 'Sông phía đông: dành cho Ấn Độ', en: 'Eastern rivers: for India' }
      ],
      src: [13, 14, 15, 17, 10, 9, 12]
    }
  ]
};
