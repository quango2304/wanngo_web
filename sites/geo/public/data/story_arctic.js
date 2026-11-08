// Explainer: the Arctic and Greenland, told as one argument in short steps: Russia's nuclear submarines sit at Kola, their
// way out runs through narrow gaps, so Moscow guards Kola as a bastion; melting ice opens a route along Russia's coast; on
// the other side of the gaps stand NATO and Greenland; the 2026 US–Denmark–Greenland deal; and why each side says it is
// defending. Facts from the research pack of 8 Nov 2026; each step names its sources. Nothing live and no maritime-claim or
// boundary line is drawn: only named places, existing hotspot shapes and one illustrative exit route.
const ARC = '#2E8B8B', RU = '#C53030', NATO = '#378ADD', NATO2 = '#6FB1F0', GREY = '#9CA3AF';
const FLOW = '#D97706';

export const ARCTIC = {
  id: 'arctic',
  icon: '🧊',
  c: '#2E8B8B',
  title: { vi: 'Bắc Cực & Greenland: biên giới đang tan', en: 'The Arctic and Greenland: the melting frontier' },
  sub: { vi: 'Vì sao vùng biển băng giá thành nơi các cường quốc canh nhau', en: 'Why a frozen sea became a place where great powers watch each other' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026: Quốc hội Greenland đã thông qua thỏa thuận an ninh với Mỹ ngày 3/11; Quốc hội Đan Mạch dự kiến bỏ phiếu ngày 19/11, và thỏa thuận chỉ có hiệu lực khi cả hai thông qua. Trên Tuyến biển phía Bắc, đến 30/9/2026 đã có 104 chuyến quá cảnh, nhiều hơn cả năm 2025.',
    en: 'As of 8 Nov 2026: Greenland’s parliament approved the security deal with the US on 3 Nov; Denmark’s parliament is due to vote on 19 Nov, and the deal takes effect only after both approve. On the Northern Sea Route there had been 104 transits by 30 Sep 2026, more than in all of 2025.'
  },
  statusSrc: [24, 21, 13],
  sources: [
    { n: 'The Barents Observer (4/8/2025, Gadzhievo)', url: 'https://thebarentsobserver.com/security/newest-nuclearweapons-carrier-arrives-in-home-base-gadzhievo/434315' },
    { n: 'Chatham House, Russia’s Military Posture in the Arctic (6/2019)', url: 'https://www.chathamhouse.org/sites/default/files/2019-06-28-Russia-Military-Arctic.pdf' },
    { n: 'WorldAtlas, Murmansk', url: 'https://www.worldatlas.com/articles/where-is-russia-s-largest-arctic-port.html' },
    { n: 'NOAA Ocean Exploration, smallest ocean', url: 'https://oceanexplorer.noaa.gov/ocean-fact/smallest-ocean/' },
    { n: 'Arctic Council, About', url: 'https://arctic-council.org/about/' },
    { n: 'IISS, Gauging the Gap (4/2022)', url: 'https://www.iiss.org/globalassets/media-library---content--migration/files/research-papers/2022/05/gauging-the-gap_the-greenlandicelandunited-kingdom-gap_a-strategic-assessment.pdf' },
    { n: 'NATO, member countries', url: 'https://www.nato.int/en/about-us/organization/nato-member-countries' },
    { n: 'ICT News / Alaska Beacon (8/2025, Marine Exchange of Alaska)', url: 'https://ictnews.org/news/alaska-bureau/ship-traffic-in-strait-between-alaska-and-russia-shows-adherence-to-new-safety-standards/' },
    { n: 'NSIDC, “Stranger Things” in the 2026 Arctic (7/10/2026)', url: 'https://nsidc.org/sea-ice-today/analyses/stranger-things-2026-arctic' },
    { n: 'CHNL, results of NSR transit navigation 2025 (9/12/2025)', url: 'https://chnl.no/news/main-results-of-nsr-transit-navigation-in-2025/' },
    { n: 'PortNews (9/2/2023, A. Afonin)', url: 'https://en.portnews.ru/news/342708' },
    { n: 'The Moscow Times (9/2/2026, Kommersant and Gecon data)', url: 'https://www.themoscowtimes.com/2026/02/09/russias-northern-sea-route-cargo-volumes-fall-for-second-straight-year-a91895' },
    { n: 'trans.info (5/8/2024, Polish Road Transport Institute 2020)', url: 'https://trans.info/en/northern-sea-route-393940' },
    { n: 'gCaptain (19/10/2026, CHNL data)', url: 'https://gcaptain.com/northern-sea-route-transits-surpass-2025-total-as-arctic-shipping-gains-momentum/' },
    { n: 'The Barents Observer (15/10/2026)', url: 'https://www.thebarentsobserver.com/security/nato-maintains-intensive-surveillance-amid-russian-arctic-training-and-weapons-testing/459831' },
    { n: 'The Barents Observer (4/4/2026, Finland’s border)', url: 'https://www.thebarentsobserver.com/news/three-years-of-patrolling-natos-eastern-border/446907' },
    { n: 'AP via PBS (11/2/2026, Arctic Sentry)', url: 'https://www.pbs.org/newshour/amp/world/nato-launches-arctic-sentry-military-effort-in-seeking-to-move-on-from-greenland-dispute' },
    { n: 'Statistics Greenland, Greenland in Figures 2026', url: 'https://stat.gl/publ/en/GF/2026/pdf/Greenland%20in%20Figures%202026.pdf' },
    { n: 'Danish Prime Minister’s Office, Greenland', url: 'https://english.stm.dk/the-prime-ministers-office/the-unity-of-the-realm/greenland/' },
    { n: 'CSIS, Greenland, Rare Earths, and Arctic Security (1/2026)', url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/2026-01/260108_Schwartz_Greenland_Security.pdf' },
    { n: 'AP via KTTC (23/9/2026)', url: 'https://www.kttc.com/2026/09/23/trump-signs-us-denmark-greenland-agreement-bolster-arctic-security-after-prolonged-tensions/' },
    { n: 'Reuters explainer (22/9/2026)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/22/explainer-what-is-in-the-us-greenland-denmark-security-deal' },
    { n: 'Reuters (19/9/2026)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/19/greenland-denmark-say-us-deal-will-not-cede-sovereignty' },
    { n: 'Al Jazeera (3/11/2026)', url: 'https://aljazeera.com/news/2026/11/3/greenland-parliament-approves-security-deal-with-us-denmark' },
    { n: 'Reuters via The Star (3/11/2026)', url: 'https://www.thestar.com.my/news/world/2026/11/04/greenland-parliament-ratifies-security-deal-agreed-with-trump' },
    { n: 'Al Jazeera (27/3/2025, Putin in Murmansk)', url: 'https://www.aljazeera.com/news/2025/3/27/russias-putin-eyes-arctic-cooperation-despite-geopolitical-tensions' },
    { n: 'State Council of China, China’s Arctic Policy (26/1/2018)', url: 'https://english.www.gov.cn/archive/white_paper/2018/01/26/content_281476026660336.htm' },
    { n: 'Reuters (21/9/2026, US Coast Guard and Chinese ships)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/21/us-watching-chinese-marine-presence-off-alaska-arctic-coast-guard-chief-says' },
    { n: 'UN, Commission on the Limits of the Continental Shelf: submissions', url: 'https://www.un.org/depts/los/clcs_new/commission_submissions.htm' },
    { n: 'CLCS recommendations on Russia’s Arctic submission (6/2/2023)', url: 'https://static.un.org/depts/los/clcs_new/submissions_files/rus01_rev15/2023RusRev1RecSum.pdf' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Nga đặt tàu ngầm hạt nhân ở cực bắc', en: 'Russia keeps its nuclear submarines in the far north' },
      text: {
        vi: 'Vì sao một vùng biển băng giá lại thành nơi Nga, Mỹ và NATO canh nhau? Theo các nhà phân tích như IISS và Chatham House, câu trả lời bắt đầu từ bán đảo Kola của Nga. Ở đó Hạm đội Phương Bắc đặt các tàu ngầm mang tên lửa hạt nhân. Biển quanh Murmansk thường không đóng băng nhờ dòng Bắc Đại Tây Dương. Theo Chatham House (2019), hạm đội này nắm khoảng hai phần ba sức tấn công hạt nhân của hải quân Nga.',
        en: 'Why has a frozen sea become a place where Russia, the US and NATO watch each other? According to analysts such as IISS and Chatham House, the answer starts on Russia’s Kola Peninsula. There the Northern Fleet bases its nuclear-missile submarines. The sea around Murmansk generally stays ice-free thanks to the North Atlantic Drift. According to Chatham House (2019), this fleet holds about two-thirds of the Russian navy’s nuclear strike power.'
      },
      facts: [
        {
          vi: 'Gadzhievo, phía bắc Murmansk, là căn cứ của các tàu ngầm tên lửa đạn đạo lớp Delta-IV, Borei và Borei-A (Barents Observer, 8/2025).',
          en: 'Gadzhievo, north of Murmansk, is the base of the Delta-IV, Borei and Borei-A ballistic-missile submarines (Barents Observer, Aug 2025).'
        },
        {
          vi: 'Bắc Băng Dương rộng khoảng 14 triệu km², là đại dương nhỏ nhất (NOAA). Tám nước Bắc Cực: Canada, Đan Mạch (qua Greenland), Phần Lan, Iceland, Na Uy, Nga, Thụy Điển và Mỹ (Hội đồng Bắc Cực).',
          en: 'The Arctic Ocean covers about 14 million km², the smallest ocean (NOAA). The eight Arctic states: Canada, Denmark (through Greenland), Finland, Iceland, Norway, Russia, Sweden and the US (Arctic Council).'
        }
      ],
      ll: [36, 70],
      k: 3.4,
      layers: [],
      show: ['base_murmansk'],
      hl: { Russia: RU, Norway: GREY, Finland: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [33.4, 69.1], c: RU, r: 5, label: { vi: 'Kola', en: 'Kola' }, dy: 10 }
      ],
      src: [1, 0, 2, 5, 3, 4]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng đường ra đại dương phải qua khe hẹp', en: 'But the way out to the ocean runs through gaps' },
      text: {
        vi: 'Từ Kola, tàu muốn ra Đại Tây Dương phải đi qua khe Gấu, giữa quần đảo Svalbard, đảo Gấu và mũi Bắc của Na Uy. Sau đó còn khe GIUK, giữa Greenland, Iceland và Anh. Hai bên các khe này đều là nước NATO, và NATO đã canh chúng từ thời Chiến tranh Lạnh. Hướng Thái Bình Dương cũng chỉ có một cửa: eo Bering, giữa Nga và Alaska của Mỹ.',
        en: 'From Kola, ships heading for the Atlantic must pass the Bear Gap, between Svalbard, Bear Island and Norway’s North Cape. After that comes the GIUK gap, between Greenland, Iceland and the UK. NATO countries line both sides of these gaps, and NATO has watched them since the Cold War. Towards the Pacific there is also just one door: the Bering Strait, between Russia and Alaska.'
      },
      facts: [
        {
          vi: 'Khe Gấu là ranh giới giữa biển Barents nông hơn và biển Na Uy sâu hơn (IISS).',
          en: 'The Bear Gap marks the boundary between the shallower Barents Sea and the deeper Norwegian Sea (IISS).'
        },
        {
          vi: 'Eo Bering rộng hơn 50 dặm (khoảng 80 km) ở chỗ hẹp nhất; năm 2024 có 665 lượt tàu qua (Marine Exchange of Alaska, qua ICT News).',
          en: 'The Bering Strait is a little more than 50 miles (about 80 km) wide at its narrowest; there were 665 vessel transits in 2024 (Marine Exchange of Alaska, via ICT News).'
        }
      ],
      ll: [8, 66],
      k: 3.2,
      layers: [],
      show: ['giuk', 'beargap', 'base_murmansk'],
      hl: { Russia: RU, Norway: NATO, Iceland: NATO, 'United Kingdom': NATO, Greenland: NATO },
      dim: true,
      draw: [
        { k: 'line', pts: [[33.4, 69.8], [26, 72.4], [22, 72.97], [10, 71], [-5, 67.5], [-15, 64], [-28, 58]], c: FLOW, w: 2.6, flow: true, arrow: true, label: { vi: 'lối ra (minh họa)', en: 'way out (illustrative)' }, lp: [-4, 68.8], dy: -10 },
        { k: 'pt', p: [33.4, 69.1], c: RU, r: 4, label: { vi: 'Kola', en: 'Kola' }, dy: 10 }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' },
        { c: FLOW, vi: 'Lối ra Đại Tây Dương (minh họa)', en: 'Way out to the Atlantic (illustrative)' }
      ],
      src: [5, 6, 7]
    },
    {
      tag: 'move',
      title: { vi: 'Vì thế Nga giữ Kola như một pháo đài', en: 'So Russia guards Kola as a bastion' },
      text: {
        vi: 'Theo Chatham House, Nga tăng quân ở Bắc Cực chủ yếu để bảo vệ Kola, để tàu ngầm hạt nhân còn nguyên mà đánh trả. Vùng “pháo đài” ấy kéo từ Kola qua biển Barents, biển Na Uy tới khe GIUK. IISS dẫn nhiều phân tích cho rằng khi có chiến tranh, hạm đội sẽ chủ yếu ở lại trong pháo đài. Moscow khó đóng được khe GIUK, nên tuyến đầu có thể dịch lên phía bắc, về khe Gấu.',
        en: 'According to Chatham House, Russia’s Arctic build-up mainly aims to protect Kola, so that its nuclear submarines survive to strike back. That “bastion” reaches from Kola across the Barents and Norwegian Seas to the GIUK gap. IISS cites a body of analysis that in wartime the fleet would mostly stay inside the bastion. Moscow would also struggle to close the GIUK gap, so the front line could shift north, to the Bear Gap.'
      },
      facts: [
        {
          vi: 'Từ 1/1/2021 Hạm đội Phương Bắc được nâng thành một quân khu đầy đủ (IISS).',
          en: 'Since 1 Jan 2021 the Northern Fleet has been a full military district (IISS).'
        }
      ],
      ll: [22, 70],
      k: 3,
      layers: [],
      show: ['base_murmansk', 'beargap', 'giuk'],
      hl: { Russia: RU, Norway: NATO, Iceland: NATO, 'United Kingdom': NATO, Greenland: NATO },
      dim: true,
      draw: [
        { k: 'label', p: [30, 73.5], c: '#9B2C2C', label: { vi: 'pháo đài Kola', en: 'Kola bastion' }, dy: 0 },
        { k: 'pt', p: [33.4, 69.1], c: RU, r: 4, label: { vi: 'Kola', en: 'Kola' }, dy: 10 }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' }
      ],
      src: [1, 5]
    },
    {
      tag: 'move',
      title: { vi: 'Băng lùi mở thêm một tuyến dọc bờ Nga', en: 'Retreating ice opens a route along Russia’s coast' },
      text: {
        vi: 'Theo NSIDC, băng biển tháng 9 giảm khoảng 11,6% mỗi thập kỷ. Băng lùi mở ra Tuyến biển phía Bắc (NSR) dọc bờ Siberia của Nga, ngắn hơn đường qua kênh Suez. Theo IISS, Nga muốn mở tuyến này cho tàu và vốn quốc tế, nhưng cũng lo lộ thêm điểm yếu và NATO hiện diện nhiều hơn. Thực tế tàu còn ít: mùa đi ngắn, có đoạn quá nông cho tàu lớn. Phần lớn hàng trên tuyến là dầu khí của chính Nga.',
        en: 'According to NSIDC, September sea ice is shrinking by about 11.6% per decade. The retreat opens the Northern Sea Route (NSR) along Russia’s Siberian coast, shorter than going through Suez. According to IISS, Russia wants the route open to international ships and investment, but also fears new weak spots and a bigger NATO presence. In practice traffic is still light: the season is short and some stretches are too shallow for large ships. Most cargo on the route is Russia’s own oil and gas.'
      },
      facts: [
        {
          vi: 'Yokohama – Rotterdam: khoảng 7.010 hải lý qua NSR, 11.133 hải lý qua Suez, tính khi biển thông thoáng (Viện Vận tải Đường bộ Ba Lan, qua trans.info).',
          en: 'Yokohama to Rotterdam: about 7,010 nautical miles via the NSR against 11,133 via Suez, counted in open water (Polish Road Transport Institute, via trans.info).'
        },
        {
          vi: 'Năm 2025 NSR chở 37,02 triệu tấn, 83% là LNG, dầu và condensate (Moscow Times); nước thông thoáng chỉ kéo dài tối đa hai tuần, cuối tháng 9 đầu tháng 10 (CHNL).',
          en: 'In 2025 the NSR carried 37.02 million tonnes, 83% of it LNG, oil and condensate (Moscow Times); open water lasted no more than two weeks, in late Sep and early Oct (CHNL).'
        }
      ],
      ll: [85, 79],
      k: 1.9,
      layers: [],
      show: ['nsr'],
      hl: { Russia: RU },
      dim: true,
      draw: [
        { k: 'label', p: [95, 77.5], c: FLOW, label: { vi: 'NSR', en: 'NSR' } }
      ],
      src: [8, 5, 9, 10, 11, 12, 13]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng bên kia các khe là NATO', en: 'But NATO stands on the other side of the gaps' },
      text: {
        vi: 'Phía bên kia, NATO cũng canh chừng Kola. Tháng 10/2026, máy bay tuần tra của Anh và Na Uy bám theo tàu ngầm Nga. Phần Lan vào NATO năm 2023, Thụy Điển năm 2024. Giờ bảy trong tám nước Bắc Cực là thành viên NATO, chỉ còn Nga ở ngoài. Tháng 2/2026, NATO gom các cuộc tập trận ở Bắc Cực dưới một tên chung: Arctic Sentry.',
        en: 'On the other side, NATO watches Kola too. In October 2026 British and Norwegian patrol aircraft tracked Russian submarines. Finland joined NATO in 2023 and Sweden in 2024. Now seven of the eight Arctic states are NATO members; only Russia is outside. In February 2026 NATO brought its Arctic exercises together under one name: Arctic Sentry.'
      },
      facts: [
        {
          vi: 'Biên giới Phần Lan – Nga dài khoảng 1.340 km, bằng một nửa đường biên giới trên bộ giữa NATO và Nga (Barents Observer, 4/2026).',
          en: 'The Finland–Russia border is about 1,340 km, half of NATO’s land border with Russia (Barents Observer, Apr 2026).'
        },
        {
          vi: 'Arctic Sentry gom các cuộc tập trận sẵn có, không đưa quân thường trực dưới cờ NATO (AP, 11/2/2026).',
          en: 'Arctic Sentry brings existing exercises together, with no permanent troops under a NATO banner (AP, 11 Feb 2026).'
        }
      ],
      ll: [10, 76],
      k: 2,
      layers: [],
      show: ['beargap', 'giuk', 'base_murmansk'],
      hl: { Russia: RU, Canada: NATO, Greenland: NATO, Denmark: NATO, Iceland: NATO, Norway: NATO, 'United Kingdom': NATO, 'United States of America': NATO, Finland: NATO2, Sweden: NATO2 },
      dim: true,
      key: [
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' },
        { c: NATO2, vi: 'Phần Lan 2023, Thụy Điển 2024', en: 'Finland 2023, Sweden 2024' },
        { c: RU, vi: 'Nga', en: 'Russia' }
      ],
      src: [14, 6, 4, 16, 15]
    },
    {
      tag: 'counter',
      title: { vi: 'Và Greenland nằm ngay giữa các khe', en: 'And Greenland sits right among the gaps' },
      text: {
        vi: 'Greenland là hòn đảo khổng lồ, phần lớn phủ băng, chỉ có khoảng 57.000 dân. Đảo tự quản trong Vương quốc Đan Mạch, nhưng đối ngoại và quốc phòng vẫn do Copenhagen nắm. Greenland nằm giữa Bắc Mỹ và châu Âu, ngay cạnh khe GIUK. Ở tây bắc đảo có Pituffik, căn cứ Mỹ làm nhiệm vụ cảnh báo tên lửa. Ngày 5/1/2026 ông Trump nói Mỹ “cần Greenland” vì an ninh quốc gia.',
        en: 'Greenland is a huge island, mostly covered by ice, with only about 57,000 people. It governs itself within the Kingdom of Denmark, but foreign and defence policy stay with Copenhagen. Greenland lies between North America and Europe, right beside the GIUK gap. In its northwest is Pituffik, a US base that does missile warning. On 5 Jan 2026 Mr Trump said the US “needs Greenland” for national security.'
      },
      facts: [
        {
          vi: 'Rộng 2,2 triệu km², trong đó 1,7 triệu km² là chỏm băng; ngành cá chiếm hơn 90% xuất khẩu (Thống kê Greenland, 2026).',
          en: 'Area 2.2 million km², of which 1.7 million km² is ice sheet; fishing is over 90% of exports (Statistics Greenland, 2026).'
        },
        {
          vi: 'Mỹ từng có hàng nghìn quân ở 17 căn cứ trên đảo; nay chỉ còn Pituffik, khoảng 200 quân (AP, 23/9/2026).',
          en: 'The US once had thousands of troops at 17 bases on the island; today only Pituffik is left, with about 200 troops (AP, 23 Sep 2026).'
        }
      ],
      ll: [-38, 70],
      k: 3,
      layers: [],
      show: ['base_pituffik', 'giuk'],
      hl: { Greenland: ARC, Canada: GREY, Iceland: GREY, 'United Kingdom': GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [-68.7, 76.53], c: NATO, r: 4, label: { vi: 'Pituffik', en: 'Pituffik' } },
        { k: 'pt', p: [-51.72, 64.18], c: ARC, r: 4, label: { vi: 'Nuuk', en: 'Nuuk' } }
      ],
      key: [{ c: ARC, vi: 'Greenland (thuộc Vương quốc Đan Mạch)', en: 'Greenland (Kingdom of Denmark)' }],
      src: [17, 18, 19, 5, 20]
    },
    {
      tag: 'outlook',
      title: { vi: 'Năm 2026 Mỹ ký để mở rộng ở Greenland', en: 'In 2026 the US signs to expand in Greenland' },
      text: {
        vi: 'Ngày 22/9/2026, Mỹ, Đan Mạch và Greenland ký một thỏa thuận an ninh. Mỹ được mở rộng Pituffik và lập thêm “khu vực phòng thủ” ở Narsarsuaq và Mestersvig. Ông Trump nói thỏa thuận cho Mỹ “quyền kiểm soát vĩnh viễn về an ninh”. Thủ tướng Greenland Nielsen thì nói nó công nhận chủ quyền của Vương quốc Đan Mạch. Theo Al Jazeera, các cuộc thăm dò cho thấy đa số người Greenland phản đối việc Mỹ kiểm soát đảo.',
        en: 'On 22 Sep 2026 the US, Denmark and Greenland signed a security agreement. The US may expand Pituffik and set up new “defense areas” at Narsarsuaq and Mestersvig. Mr Trump said the deal gives the US “permanent control over security”. Greenland’s Prime Minister Nielsen said instead that it recognises the sovereignty of the Kingdom of Denmark. According to Al Jazeera, opinion polls show most Greenlanders reject US control of the island.'
      },
      facts: [
        {
          vi: 'Nước ngoài NATO không được lập căn cứ hay hiện diện thường trực trên đảo nếu ba bên không đồng ý; thỏa thuận không có thời hạn (AP; Reuters, 22/9/2026).',
          en: 'Non-NATO states may not set up bases or a persistent presence on the island unless all three parties agree; the deal has no end date (AP; Reuters, 22 Sep 2026).'
        },
        {
          vi: 'Quốc hội Greenland thông qua ngày 3/11/2026 (16 thuận, 7 trắng); Quốc hội Đan Mạch dự kiến bỏ phiếu ngày 19/11 (Reuters).',
          en: 'Greenland’s parliament approved it on 3 Nov 2026 (16 for, 7 abstentions); Denmark’s parliament is due to vote on 19 Nov (Reuters).'
        }
      ],
      ll: [-42, 69],
      k: 3,
      layers: [],
      show: ['base_pituffik'],
      hl: { Greenland: ARC, Canada: GREY, Iceland: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [-68.7, 76.53], c: NATO, r: 4, label: { vi: 'Pituffik', en: 'Pituffik' } },
        { k: 'pt', p: [-45.42, 61.16], c: NATO, r: 4, label: { vi: 'Narsarsuaq', en: 'Narsarsuaq' } },
        { k: 'pt', p: [-23.93, 72.24], c: NATO, r: 4, label: { vi: 'Mestersvig', en: 'Mestersvig' } }
      ],
      key: [{ c: NATO, vi: 'Nơi Mỹ được mở rộng (theo thỏa thuận)', en: 'Where the US may expand (under the deal)' }],
      src: [20, 21, 22, 23, 24]
    },
    {
      tag: 'outlook',
      title: { vi: 'Bên nào cũng nói mình chỉ phòng thủ', en: 'Every side says it is only defending' },
      text: {
        vi: 'Ông Putin nói NATO ngày càng coi cực bắc là bàn đạp cho xung đột, và Nga sẽ tăng năng lực. Washington nói cần Greenland vì an ninh. Bắc Kinh tự gọi là “quốc gia cận Bắc Cực” và nói tôn trọng quyền chủ quyền của các nước Bắc Cực. Gốc rễ nằm ở mấy khe biển hẹp: Nga sợ tàu ngầm của mình bị chặn lối ra, còn NATO sợ để chúng lọt qua.',
        en: 'Mr Putin says NATO increasingly treats the far north as a springboard for conflict, and that Russia will boost its capabilities. Washington says it needs Greenland for security. Beijing calls itself a “Near-Arctic State” and says it respects the sovereign rights of Arctic states. The root lies in a few narrow sea gaps: Russia fears its submarines being shut in, and NATO fears letting them slip through.'
      },
      facts: [
        {
          vi: 'Đến 21/9/2026 có 4 tàu nghiên cứu Trung Quốc hoạt động ngoài khơi Bắc Cực của Mỹ, trong vùng biển quốc tế, so với 5 tàu trong cả năm 2025 (Reuters).',
          en: 'By 21 Sep 2026 four Chinese research ships had worked off the US Arctic, in international waters, against five in all of 2025 (Reuters).'
        },
        {
          vi: 'Đáy biển thì đi đường luật: Nga, Đan Mạch (cùng Greenland) và Canada nộp hồ sơ thềm lục địa lên một ủy ban của Liên Hợp Quốc; các hồ sơ chồng lấn quanh sống núi ngầm Lomonosov.',
          en: 'The seabed goes through law: Russia, Denmark (with Greenland) and Canada have filed continental-shelf claims with a UN commission; the claims overlap around the Lomonosov Ridge.'
        }
      ],
      ll: [-20, 78],
      k: 2,
      layers: [],
      show: ['base_murmansk', 'beargap', 'giuk', 'base_pituffik', 'bering'],
      hl: { Russia: RU, Greenland: ARC, Canada: NATO, Denmark: NATO, Iceland: NATO, Norway: NATO, 'United Kingdom': NATO, 'United States of America': NATO, Finland: NATO, Sweden: NATO },
      dim: true,
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' },
        { c: ARC, vi: 'Greenland', en: 'Greenland' }
      ],
      src: [25, 19, 26, 27, 28, 29, 5]
    }
  ]
};
