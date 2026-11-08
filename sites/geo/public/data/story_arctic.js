// Explainer: the Arctic and Greenland. Facts from the research pack of 8 Nov 2026 (every figure fetched from the source named
// beside it). The `core` of each step is an interpretation, attributed to the analysts or governments who make the argument,
// with the counter-view where it matters. Nothing live and no maritime-claim or boundary line is drawn: only the Arctic Circle
// (a latitude), a few named places and one illustrative exit route. The sea-ice and route layers come from hotspots.js.
const ARC = '#2E8B8B', RU = '#C53030', NATO = '#378ADD', NATO2 = '#6FB1F0', CAN = '#D97706', NOR = '#7F77DD', GREY = '#9CA3AF';
const FLOW = '#D97706';

// Arctic Circle drawn as a latitude (about 66.56 N, the value USGS uses); a point every 15 degrees of longitude
const CIRCLE = [];
for (let lon = -180; lon <= 180; lon += 15) CIRCLE.push([lon, 66.56]);

export const ARCTIC = {
  id: 'arctic',
  icon: '🧊',
  c: '#2E8B8B',
  title: { vi: 'Bắc Cực & Greenland: biên giới đang tan', en: 'The Arctic and Greenland: the melting frontier' },
  sub: { vi: 'Một đại dương, tám quốc gia và những cánh cửa hẹp', en: 'One ocean, eight states and a few narrow doors' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến ngày 8/11/2026: ngày 22/9/2026 Mỹ, Đan Mạch và Greenland ký thỏa thuận an ninh cho phép Mỹ mở rộng căn cứ Pituffik và lập các “khu vực phòng thủ” mới ở Narsarsuaq và Mestersvig. Quốc hội Greenland thông qua ngày 3/11 (16 phiếu thuận, không phiếu chống, 7 bỏ phiếu trắng); Quốc hội Đan Mạch dự kiến bỏ phiếu ngày 19/11, và thỏa thuận chỉ có hiệu lực sau khi cả hai thông qua. Ông Trump nói thỏa thuận cho Mỹ “quyền kiểm soát vĩnh viễn về an ninh” ở Greenland; Copenhagen và Nuuk nói chủ quyền của Đan Mạch không bị ảnh hưởng. NATO đã lập sáng kiến Arctic Sentry (11/2/2026) để gom các cuộc tập trận ở Bắc Cực dưới một bộ chỉ huy, và trên Tuyến biển phía Bắc, mùa 2026 đã có 104 chuyến quá cảnh đến 30/9, nhiều hơn cả năm 2025. Mỹ nói họ theo dõi sát các tàu nghiên cứu Trung Quốc ở Bắc Cực Alaska (4 tàu trong năm 2026 đến 21/9). Tình hình có thể đã thay đổi sau ngày này.',
    en: 'As of 8 Nov 2026: on 22 Sep 2026 the US, Denmark and Greenland signed a security agreement that lets the US expand Pituffik and set up new “defense areas” at Narsarsuaq and Mestersvig. Greenland’s parliament approved it on 3 Nov (16 for, none against, 7 abstentions); Denmark’s parliament is due to vote on 19 Nov, and the deal takes effect only after both approve. Mr Trump said it gives the US “permanent control over security” in Greenland; Copenhagen and Nuuk say Danish sovereignty is untouched. NATO set up Arctic Sentry (11 Feb 2026) to bring Arctic exercises under one command, and on the Northern Sea Route the 2026 season had 104 transits by 30 Sep, more than all of 2025. The US says it is watching Chinese research ships off Arctic Alaska closely (four in 2026 up to 21 Sep). The situation may have changed after this date.'
  },
  statusSrc: [22, 23, 24, 25, 36, 10, 40],
  bottom: {
    vi: 'Cách đọc của các nhà phân tích được trích trong bài (IISS, Chatham House, CSIS): băng tan không mở ra một “cuộc đua vàng” mà dịch chuyển bản đồ. Nga cần giữ an toàn cho lối ra từ Kola và một hành lang ven bờ của mình; Mỹ và NATO cần giám sát các khe biển và dùng Greenland để cảnh báo tên lửa; Trung Quốc tìm chỗ đứng bằng nghiên cứu, đầu tư và tuyến “Polar Silk Road”; Đan Mạch và Greenland cần an ninh mà không mất chủ quyền. Địa lý cho biết ai đứng ở đâu; luật (UNCLOS, thỏa thuận 2026) quyết định ai được làm gì; còn băng, nước nông và mùa mở cửa ngắn vẫn là giới hạn lớn nhất. Đây là một cách lý giải, không phải kết luận chắc chắn, và các bên lập luận khác nhau.',
    en: 'The reading of the analysts quoted here (IISS, Chatham House, CSIS): melting ice does not open a “gold rush”, it shifts the map. Russia needs to keep the exit from Kola and a coastal corridor safe; the US and NATO need to watch the sea gaps and use Greenland for missile warning; China looks for a foothold through research, investment and its “Polar Silk Road”; Denmark and Greenland need security without losing sovereignty. Geography says who stands where; law (UNCLOS, the 2026 agreement) decides who may do what; and ice, shallow water and a short open season remain the biggest limits. This is one interpretation, not a settled conclusion, and the parties argue differently.'
  },
  sources: [
    { n: 'NSIDC, “Stranger Things” in the 2026 Arctic (7/10/2026)', url: 'https://nsidc.org/sea-ice-today/analyses/stranger-things-2026-arctic' },
    { n: 'NASA Earth Observatory (7/10/2026)', url: 'https://science.nasa.gov/earth/earth-observatory/arctic-sea-ice-shrinks-to-its-2026-minimum/' },
    { n: 'UK Met Office, Arctic and Antarctic end of season report (10/2026)', url: 'https://www.metoffice.gov.uk/research/approach/monitoring/sea-ice/2026/arctic-and-antarctic-end-of-season-report---october-2026' },
    { n: 'NSIDC (22/9/2022, 2012 record)', url: 'https://nsidc.org/sea-ice-today/analyses/arctic-sea-ice-minimum-ties-tenth-lowest' },
    { n: 'Arctic Council, About', url: 'https://arctic-council.org/about/' },
    { n: 'NOAA PMEL, Arctic FAQ', url: 'https://www.pmel.noaa.gov/arctic-zone/faq.html' },
    { n: 'NOAA Ocean Exploration, smallest ocean', url: 'https://oceanexplorer.noaa.gov/ocean-fact/smallest-ocean/' },
    { n: 'USGS Fact Sheet 2008-3049 (Circum-Arctic Resource Appraisal)', url: 'https://pubs.usgs.gov/fs/2008/3049' },
    { n: 'The Moscow Times (9/2/2026, Kommersant and Gecon data)', url: 'https://www.themoscowtimes.com/2026/02/09/russias-northern-sea-route-cargo-volumes-fall-for-second-straight-year-a91895' },
    { n: 'CHNL, results of NSR transit navigation 2025 (9/12/2025)', url: 'https://chnl.no/news/main-results-of-nsr-transit-navigation-in-2025/' },
    { n: 'gCaptain (19/10/2026, CHNL data)', url: 'https://gcaptain.com/northern-sea-route-transits-surpass-2025-total-as-arctic-shipping-gains-momentum/' },
    { n: 'trans.info (5/8/2024, Polish Road Transport Institute 2020)', url: 'https://trans.info/en/northern-sea-route-393940' },
    { n: 'PortNews (9/2/2023, A. Afonin)', url: 'https://en.portnews.ru/news/342708' },
    { n: 'Rigby & Herman, Carleton Expert Group on Canada-US Relations (2026)', url: 'https://carleton.ca/npsia/wp-content/uploads/sites/77/2026/03/Greenland-and-the-Arctic_Rigby_Herman.pdf' },
    { n: 'ICT News / Alaska Beacon (8/2025, Marine Exchange of Alaska)', url: 'https://ictnews.org/news/alaska-bureau/ship-traffic-in-strait-between-alaska-and-russia-shows-adherence-to-new-safety-standards/' },
    { n: 'IISS, Gauging the Gap (4/2022)', url: 'https://www.iiss.org/globalassets/media-library---content--migration/files/research-papers/2022/05/gauging-the-gap_the-greenlandicelandunited-kingdom-gap_a-strategic-assessment.pdf' },
    { n: 'Chatham House, Russia’s Military Posture in the Arctic (6/2019)', url: 'https://www.chathamhouse.org/sites/default/files/2019-06-28-Russia-Military-Arctic.pdf' },
    { n: 'The Barents Observer (4/8/2025, Gadzhievo)', url: 'https://thebarentsobserver.com/security/newest-nuclearweapons-carrier-arrives-in-home-base-gadzhievo/434315' },
    { n: 'Statistics Greenland, Greenland in Figures 2026', url: 'https://stat.gl/publ/en/GF/2026/pdf/Greenland%20in%20Figures%202026.pdf' },
    { n: 'Statistics Greenland, population 1 July 2026', url: 'https://stat.gl/publ/en/BE/202604/contents/Midyear%20Population.htm' },
    { n: 'Danish Prime Minister’s Office, Greenland', url: 'https://english.stm.dk/the-prime-ministers-office/the-unity-of-the-realm/greenland/' },
    { n: 'CSIS, Greenland, Rare Earths, and Arctic Security (1/2026)', url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/2026-01/260108_Schwartz_Greenland_Security.pdf' },
    { n: 'AP via KTTC (23/9/2026)', url: 'https://www.kttc.com/2026/09/23/trump-signs-us-denmark-greenland-agreement-bolster-arctic-security-after-prolonged-tensions/' },
    { n: 'Reuters explainer (22/9/2026)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/22/explainer-what-is-in-the-us-greenland-denmark-security-deal' },
    { n: 'Reuters (19/9/2026)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/19/greenland-denmark-say-us-deal-will-not-cede-sovereignty' },
    { n: 'Reuters via The Star (3/11/2026)', url: 'https://www.thestar.com.my/news/world/2026/11/04/greenland-parliament-ratifies-security-deal-agreed-with-trump' },
    { n: 'Al Jazeera (22/9/2026)', url: 'https://www.aljazeera.com/amp/news/2026/9/22/us-signs-tremendous-arctic-security-deal-with-denmark-greenland' },
    { n: 'Al Jazeera (3/11/2026)', url: 'https://aljazeera.com/news/2026/11/3/greenland-parliament-approves-security-deal-with-us-denmark' },
    { n: 'UN, Commission on the Limits of the Continental Shelf: submissions', url: 'https://www.un.org/depts/los/clcs_new/commission_submissions.htm' },
    { n: 'CLCS recommendations on Russia’s Arctic submission (6/2/2023)', url: 'https://static.un.org/depts/los/clcs_new/submissions_files/rus01_rev15/2023RusRev1RecSum.pdf' },
    { n: 'Arctic Today (30/5/2019, Canada’s submission)', url: 'https://www.arctictoday.com/?p=21086' },
    { n: 'Arctic Portal, Ilulissat Declaration (28/5/2008)', url: 'https://arcticportal.org/arctic-governance/international-agreements-archive/3429-ilulissat-declaration-2008' },
    { n: 'Al Jazeera (27/3/2025, Putin in Murmansk)', url: 'https://www.aljazeera.com/news/2025/3/27/russias-putin-eyes-arctic-cooperation-despite-geopolitical-tensions' },
    { n: 'State Council of China, China’s Arctic Policy (26/1/2018)', url: 'https://english.www.gov.cn/archive/white_paper/2018/01/26/content_281476026660336.htm' },
    { n: 'NATO, member countries', url: 'https://www.nato.int/en/about-us/organization/nato-member-countries' },
    { n: 'The Barents Observer (4/4/2026, Finland’s border)', url: 'https://www.thebarentsobserver.com/news/three-years-of-patrolling-natos-eastern-border/446907' },
    { n: 'AP via PBS (11/2/2026, Arctic Sentry)', url: 'https://www.pbs.org/newshour/amp/world/nato-launches-arctic-sentry-military-effort-in-seeking-to-move-on-from-greenland-dispute' },
    { n: 'Danish Defence (12/2/2026, Arctic Endurance)', url: 'https://www.forsvaret.dk/en/news/2026/ny-danskledet-ovelsesaktivitet-i-og-omkring-gronland-bliver-en-del-af-natos-arctic-sentry/' },
    { n: 'Danish Defence (9/2026, Arctic Shield)', url: 'https://www.forsvaret.dk/en/news/2026/nato-styrker-starter-ovelse-i-sydgronland-og-omkring-kangerlussuaq/' },
    { n: 'The Barents Observer (15/10/2026)', url: 'https://www.thebarentsobserver.com/security/nato-maintains-intensive-surveillance-amid-russian-arctic-training-and-weapons-testing/459831' },
    { n: 'Reuters (21/9/2026, US Coast Guard and Chinese ships)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/09/21/us-watching-chinese-marine-presence-off-alaska-arctic-coast-guard-chief-says' },
    { n: 'WorldAtlas, Murmansk', url: 'https://www.worldatlas.com/articles/where-is-russia-s-largest-arctic-port.html' },
    { n: 'Wikipedia, Prisoners of Geography (2015)', url: 'https://en.wikipedia.org/wiki/Prisoners_of_Geography' }
  ],
  steps: [
    {
      title: { vi: 'Một đại dương gần như khép kín, tám quốc gia bao quanh', en: 'An almost enclosed ocean, ringed by eight states' },
      text: {
        vi: 'Bắc Băng Dương gần như bị đất bao kín: tám quốc gia Bắc Cực là Canada, Vương quốc Đan Mạch (qua Greenland), Phần Lan, Iceland, Na Uy, Nga, Thụy Điển và Mỹ (qua Alaska). Trong đó chỉ năm nước có bờ trên chính Bắc Băng Dương: Canada, Đan Mạch, Na Uy, Nga và Mỹ. Ở giữa là băng biển trôi nổi chứ không phải đất liền, và băng đang lùi.',
        en: 'The Arctic Ocean is almost sealed in by land: the eight Arctic states are Canada, the Kingdom of Denmark (through Greenland), Finland, Iceland, Norway, Russia, Sweden and the United States (through Alaska). Only five of them have a coast on the Arctic Ocean itself: Canada, Denmark, Norway, Russia and the US. In the middle is floating sea ice, not land, and it is shrinking.'
      },
      core: {
        vi: 'Theo IISS (4/2022), băng biển tan sẽ có ý nghĩa trực tiếp và tức thì với Nga hơn bất kỳ bên nào khác, và kéo trọng tâm chiến lược hàng hải lên phía bắc. Năm nước ven biển nói trong Tuyên bố Ilulissat (2008) rằng họ dựa vào luật biển hiện hành và không cần một chế độ pháp lý mới cho Bắc Băng Dương: đó là lập trường hợp tác của họ. Tim Marshall (Prisoners of Geography, 2015) lập luận rằng địa lý vẫn định hình chính trị, và dành một chương cho cuộc đua tài nguyên ở Bắc Cực. Ý kiến ngược lại: Met Office cho rằng băng mùa hè gần như ngừng giảm từ 2007, nên sự mở cửa diễn ra chậm và không đều.',
        en: 'According to IISS (Apr 2022), melting sea ice matters more directly and immediately for Russia than for any other player, and pulls the maritime centre of gravity north. The five coastal states said in the Ilulissat Declaration (2008) that they rely on the existing law of the sea and see no need for a new legal regime for the Arctic Ocean: that is their cooperative stance. Tim Marshall (Prisoners of Geography, 2015) argues that geography still shapes politics, and gives the Arctic a chapter on the race for resources. The counter-view: the Met Office says summer ice has barely declined since 2007, so the opening is slow and uneven.'
      },
      facts: [
        {
          vi: 'Bắc Băng Dương rộng khoảng 14 triệu km², là đại dương nhỏ nhất thế giới (NOAA Ocean Exploration, trang kiểm tra 11/2026). Vòng Bắc Cực nằm ở khoảng 66°34′B (NOAA PMEL, trang kiểm tra 11/2026). Vùng phía bắc vòng này rộng hơn 21 triệu km², trong đó gần 8 triệu km² là đất liền và hơn 7 triệu km² là thềm lục địa dưới 500 m nước (USGS, 2008).',
          en: 'The Arctic Ocean covers about 14 million km² and is the world’s smallest ocean basin (NOAA Ocean Exploration, page checked Nov 2026). The Arctic Circle lies at about 66°34′N (NOAA PMEL, page checked Nov 2026). The area north of it is more than 21 million km², of which almost 8 million km² is land and more than 7 million km² is continental shelf under less than 500 m of water (USGS, 2008).'
        },
        {
          vi: 'Cực tiểu băng biển 2026 là khoảng 4,60 triệu km² vào 12/9/2026, đồng hạng 10 thấp nhất thời vệ tinh với 2008, 2010 và 2025 (NASA và NSIDC, 7/10/2026). Kỷ lục thấp nhất là 3,39 triệu km² năm 2012 (NSIDC, 2022).',
          en: 'The 2026 sea-ice minimum was about 4.60 million km² on 12 Sep 2026, tied with 2008, 2010 and 2025 as the 10th lowest of the satellite era (NASA and NSIDC, 7 Oct 2026). The record low is 3.39 million km² in 2012 (NSIDC, 2022).'
        },
        {
          vi: 'Xu hướng cực tiểu tháng 9 giảm 11,6% mỗi thập kỷ so với trung bình 1981–2010 (NSIDC, 7/10/2026). Nhưng Met Office (10/2026) nói mức giảm của băng tháng 9 gần như dừng từ 2007; mùa hè 2026 mát và nhiều bão trên Bắc Băng Dương (NSIDC).',
          en: 'The September trend is a decline of 11.6% per decade relative to the 1981–2010 average (NSIDC, 7 Oct 2026). But the Met Office (Oct 2026) says the decline in September ice has paused since 2007, and summer 2026 was cool and stormy over the Arctic Ocean (NSIDC).'
        }
      ],
      ll: [0, 88],
      k: 2,
      layers: [],
      show: ['arcticice'],
      hl: { Canada: ARC, Greenland: ARC, Denmark: ARC, Finland: ARC, Iceland: ARC, Norway: ARC, Russia: ARC, Sweden: ARC, 'United States of America': ARC },
      dim: true,
      draw: [
        { k: 'line', pts: CIRCLE, c: '#3B82F6', w: 1.4, dash: true, label: { vi: 'Vòng Bắc Cực ~66,6°B', en: 'Arctic Circle ~66.6°N' }, lp: [-120, 66.56], dy: 10 },
        { k: 'pt', p: [0, 90], c: '#111827', r: 3, label: { vi: 'Cực Bắc', en: 'North Pole' }, dy: -9 }
      ],
      key: [{ c: ARC, vi: 'Tám quốc gia Bắc Cực (Greenland thuộc Vương quốc Đan Mạch)', en: 'The eight Arctic states (Greenland is part of the Kingdom of Denmark)' }],
      src: [6, 5, 7, 1, 0, 3, 2, 4, 31, 29, 15, 42]
    },
    {
      title: { vi: 'Hai tuyến biển mới: lối tắt có điều kiện', en: 'Two new sea lanes: shortcuts with conditions' },
      text: {
        vi: 'Khi băng mùa hè lùi, hai tuyến phía bắc trở nên hấp dẫn: Tuyến biển phía Bắc (NSR) chạy dọc bờ Siberia của Nga, và Hành lang Tây Bắc (NWP) luồn qua quần đảo Bắc Cực của Canada. Trên bản đồ chúng ngắn hơn đường qua kênh Suez. Nhưng băng, nước nông và mùa mở cửa ngắn khiến mức sử dụng còn thấp so với kỳ vọng, và phần lớn hàng trên NSR là hàng năng lượng của chính Nga.',
        en: 'As summer ice retreats, two northern routes become attractive: the Northern Sea Route (NSR) along Russia’s Siberian coast, and the Northwest Passage (NWP) threading Canada’s Arctic archipelago. On the map they are shorter than the route through the Suez Canal. But ice, shallow water and a short open season keep use below expectations, and most NSR cargo is Russia’s own energy.'
      },
      core: {
        vi: 'IISS (4/2022) cho rằng Nga muốn Bắc Cực mở cho tàu quốc tế và đầu tư, nhưng cũng lo bị lộ ra trước các điểm yếu mới và sự hiện diện NATO tăng lên. Với Canada, theo Rigby và Herman (2026), Hành lang Tây Bắc là nội thủy của Canada; Mỹ nói đó là eo biển quốc tế, và nhiều nước châu Âu đồng tình với Mỹ về pháp lý nhưng không muốn Mỹ thống trị tuyến này. Trung Quốc, trong sách trắng 2018, gọi mình là “quốc gia cận Bắc Cực”, nói sẽ tôn trọng quyền chủ quyền của các nước Bắc Cực và muốn cùng xây “Con đường tơ lụa vùng cực” qua các tuyến này. Theo cách đọc của bài này (không phải của các bên): tuyến đi qua vùng nước của ai thì người đó đặt luật, kể cả với tàu quân sự, nên ai sở hữu vùng nước quan trọng hơn cự ly ngắn.',
        en: 'IISS (Apr 2022) argues Russia wants the Arctic open to international shipping and investment, but also fears new vulnerabilities and a bigger NATO presence. For Canada, according to Rigby and Herman (2026), the Northwest Passage is Canadian internal waters; the US says it is an international strait, and most European states share the US legal view but do not want the US to dominate the route. China, in its 2018 white paper, calls itself a “Near-Arctic State”, says it respects the sovereign rights of Arctic states and wants to build a “Polar Silk Road” through these routes. In this story’s reading (not the parties’): whoever’s waters the lane runs through sets the rules, warships included, so who owns the water matters more than the shorter distance.'
      },
      facts: [
        {
          vi: 'Yokohama–Rotterdam: 7.010 hải lý qua NSR so với 11.133 hải lý qua Suez, tính theo nước thông thoáng (Viện Vận tải Đường bộ Ba Lan, 2020, qua trans.info 8/2024).',
          en: 'Yokohama–Rotterdam: 7,010 nautical miles via the NSR against 11,133 via Suez, counted in open water (Polish Road Transport Institute, 2020, via trans.info, Aug 2024).'
        },
        {
          vi: 'Năm 2025 NSR chở 37,02 triệu tấn, giảm 2,3% so với 2024 và là năm giảm thứ hai liên tiếp; LNG, dầu và condensate chiếm 83%; mục tiêu 80 triệu tấn vào 2024 chưa đạt (Moscow Times, 9/2/2026). Năm 2025 có 103 chuyến quá cảnh, mùa kéo dài từ 30/6 đến 17/11, nước thông thoáng chỉ kéo dài tối đa hai tuần vào cuối tháng 9–đầu tháng 10 (CHNL, 9/12/2025). Đến 30/9/2026 đã có 104 chuyến, trong đó 13 tàu container (gCaptain, 19/10/2026).',
          en: 'In 2025 the NSR carried 37.02 million tonnes, down 2.3% on 2024 and the second fall in a row; LNG, oil and condensate were 83%; the 80-million-tonne goal for 2024 was missed (Moscow Times, 9 Feb 2026). 2025 had 103 transits, a season from 30 Jun to 17 Nov, and open water for no more than two weeks in late Sep–early Oct (CHNL, 9 Dec 2025). By 30 Sep 2026 there were 104, including 13 container ships (gCaptain, 19 Oct 2026).'
        },
        {
          vi: 'Giới hạn: NSIDC (10/2026) nói NSR “gần như không còn băng”, nhưng tuyến phía nam của NWP vẫn còn nhiều băng và eo M’Clure bị băng dày chặn. Có những đoạn NSR quá nông cho tàu mớn nước 12–15 m (ông A. Afonin, Đại học Hàng hải Admiral Makarov, 2023).',
          en: 'Limits: NSIDC (Oct 2026) says the NSR “appears largely free of ice”, but the southern route of the NWP still has significant ice and M’Clure Strait is blocked by heavy ice. Some NSR stretches are too shallow for ships drawing 12–15 m (A. Afonin, Admiral Makarov State University, 2023).'
        }
      ],
      ll: [-30, 85],
      k: 2,
      layers: [],
      show: ['nsr', 'nwp'],
      hl: { Russia: RU, Canada: CAN, Greenland: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [33.4, 69.1], c: RU, r: 3.5, label: { vi: 'Murmansk', en: 'Murmansk' }, side: 'l' },
        { k: 'label', p: [95, 77.5], c: FLOW, label: { vi: 'NSR (Nga)', en: 'NSR (Russia)' } },
        { k: 'label', p: [-100, 75.8], c: FLOW, label: { vi: 'NWP (Canada)', en: 'NWP (Canada)' } }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: CAN, vi: 'Canada', en: 'Canada' }
      ],
      src: [11, 8, 9, 10, 0, 12, 15, 13, 33]
    },
    {
      title: { vi: 'Kola, khe Gấu và khe GIUK: cửa ra Đại Tây Dương', en: 'Kola, the Bear Gap and the GIUK gap: the way out to the Atlantic' },
      text: {
        vi: 'Căn cứ tàu ngầm tên lửa của Hạm đội Phương Bắc Nga nằm trên bán đảo Kola, nhìn ra biển Barents. Vùng nước quanh Murmansk thường không đóng băng nhờ dòng Bắc Đại Tây Dương. Từ đó, tàu muốn ra Đại Tây Dương phải qua khe Gấu (giữa Svalbard, đảo Gấu và mũi Bắc Na Uy), rồi khe GIUK giữa Greenland, Iceland và Anh. NATO canh hai khe này từ thời Chiến tranh Lạnh.',
        en: 'The missile-submarine base of Russia’s Northern Fleet sits on the Kola Peninsula, facing the Barents Sea. The waters around Murmansk generally stay ice-free thanks to the North Atlantic Drift. From there, ships heading for the Atlantic must pass the Bear Gap (between Svalbard, Bear Island and North Cape in Norway), then the GIUK gap between Greenland, Iceland and the UK. NATO has watched these gaps since the Cold War.'
      },
      core: {
        vi: 'Chatham House (6/2019) cho rằng việc Nga củng cố ở Bắc Cực chủ yếu nhằm bảo vệ Kola để lực lượng hạt nhân đòn đáp trả còn sống sót, theo khái niệm “Bastion” kéo từ Kola tới khe GIUK. IISS (4/2022) cho rằng nhiều phân tích thấy khi có chiến tranh Hạm đội Phương Bắc sẽ chủ yếu ở lại “pháo đài” của mình và Moscow khó đóng được khe GIUK, nên tuyến đầu có thể dịch lên phía bắc, về khe Gấu. Phía Moscow, ông Putin (27/3/2025) nói NATO ngày càng coi vùng cực bắc là bàn đạp cho xung đột và Nga sẽ tăng năng lực. Theo cách đọc của bài này, hai bên cùng đọc một tấm bản đồ như một vấn đề phòng thủ.',
        en: 'Chatham House (Jun 2019) argues Russia’s Arctic build-up mainly aims to protect Kola so its second-strike nuclear forces survive, under a “Bastion” concept reaching from Kola to the GIUK gap. IISS (Apr 2022) reports a body of analysis that in wartime the Northern Fleet would largely stay in its bastion and that Moscow would struggle to close the GIUK gap, so the front line could shift north to the Bear Gap. On Moscow’s side, Mr Putin (27 Mar 2025) said NATO increasingly treats the far north as a springboard for conflict and that Russia will boost its capabilities. In this story’s reading, both sides read the same map as a defence problem.'
      },
      facts: [
        {
          vi: 'Gadzhievo, bắc Murmansk trên bán đảo Kola, là căn cứ của Sư đoàn tàu ngầm 31 thuộc Hạm đội Phương Bắc, vận hành các tàu ngầm tên lửa đạn đạo Delta-IV, Borei và Borei-A; tàu Knyaz Pozharsky về căn cứ ngày 2/8/2025 (Barents Observer, 4/8/2025).',
          en: 'Gadzhievo, north of Murmansk on the Kola Peninsula, is the base of the Northern Fleet’s 31st Submarine Division, which operates Delta-IV, Borei and Borei-A ballistic-missile submarines; the Knyaz Pozharsky arrived there on 2 Aug 2025 (Barents Observer, 4 Aug 2025).'
        },
        {
          vi: 'Hạm đội Phương Bắc chiếm khoảng hai phần ba năng lực tấn công hạt nhân của hải quân Nga, phần còn lại ở Hạm đội Thái Bình Dương; đây là đánh giá năm 2019 (Chatham House, 6/2019). Từ 1/1/2021 hạm đội được nâng thành một quân khu đầy đủ (IISS, 4/2022).',
          en: 'The Northern Fleet accounts for about two-thirds of the Russian navy’s nuclear strike capability, the rest being in the Pacific Fleet; this is a 2019 assessment (Chatham House, Jun 2019). From 1 Jan 2021 the fleet has been a full military district (IISS, Apr 2022).'
        },
        {
          vi: 'Khe Gấu đánh dấu ranh giới giữa biển Barents nông hơn và biển Na Uy sâu hơn (IISS, 4/2022). Murmansk lập năm 1916 làm cảng chuyển hàng tiếp tế quân sự; vùng nước gần đó “thường” không đóng băng nhờ dòng Bắc Đại Tây Dương (WorldAtlas, trang kiểm tra 11/2026).',
          en: 'The Bear Gap marks the boundary between the shallower Barents Sea and the deeper Norwegian Sea (IISS, Apr 2022). Murmansk was founded in 1916 as a port for military supplies; the waters near it “generally” stay ice-free thanks to the North Atlantic Drift (WorldAtlas, page checked Nov 2026).'
        }
      ],
      ll: [8, 66],
      k: 3.2,
      layers: [],
      show: ['giuk', 'beargap', 'base_murmansk'],
      hl: { Russia: RU, Norway: NATO, Iceland: NATO, 'United Kingdom': NATO, Greenland: NATO, Finland: NATO, Sweden: NATO },
      dim: true,
      draw: [
        { k: 'line', pts: [[33.4, 69.8], [26, 72.4], [22, 72.97], [10, 71], [-5, 67.5], [-15, 64], [-28, 58]], c: FLOW, w: 2.6, flow: true, arrow: true, label: { vi: 'lối ra Đại Tây Dương (minh họa)', en: 'way out to the Atlantic (illustrative)' }, lp: [-4, 68.8], dy: -10 },
        { k: 'pt', p: [33.4, 69.1], c: RU, r: 4, label: { vi: 'Kola', en: 'Kola' }, dy: 10 }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' }
      ],
      src: [17, 16, 15, 41, 32]
    },
    {
      title: { vi: 'Eo Bering: một cánh cửa hẹp giữa hai bờ', en: 'The Bering Strait: one narrow door between two coasts' },
      text: {
        vi: 'Eo Bering là cửa duy nhất nối Bắc Băng Dương với Thái Bình Dương, kẹp giữa mũi đông của Nga (Chukotka) và Alaska của Mỹ. Ở giữa là hai đảo Diomede, một của Nga và một của Mỹ, cách nhau chỉ hơn hai dặm. Mọi con tàu đi NSR hay NWP xuống châu Á đều phải qua đây, nên Mỹ và Nga cùng có lợi ích ở một dải nước hẹp, dễ quan sát.',
        en: 'The Bering Strait is the only door between the Arctic Ocean and the Pacific, squeezed between Russia’s eastern tip (Chukotka) and Alaska. In the middle are the two Diomede islands, one Russian and one American, just over two miles apart. Every ship going to Asia by the NSR or the NWP must pass here, so the US and Russia both have a stake in a narrow strip that is easy to watch.'
      },
      core: {
        vi: 'Lập luận hình học: vì chỉ có một cửa hẹp, ai muốn đi giữa Thái Bình Dương và Bắc Băng Dương đều bị lộ diện và khó tránh, nên cả hai bờ muốn có luật đi lại dự đoán được. Phía Mỹ, Chuẩn đô đốc Bob Little (Cảnh sát biển Mỹ, 21/9/2026) nói mối lo của ông là khi tàu nước khác hoạt động “trong và quanh không gian chủ quyền của Mỹ”; Moskva phủ nhận tàu mình làm điều bất hợp pháp. Đây là cách đọc của người viết dựa trên các phát biểu đó, không phải phát biểu của họ.',
        en: 'The geometric argument: with one narrow door, anyone moving between the Pacific and the Arctic is exposed and hard to avoid, so both coasts have reason to want predictable rules. On the US side, Rear Adm Bob Little (US Coast Guard, 21 Sep 2026) said his concern is when other states’ ships operate “in and around US sovereign space”; Moscow denies its vessels do anything illegal. This is the writer’s reading of those statements, not theirs.'
      },
      facts: [
        {
          vi: 'Eo rộng “hơn 50 dặm” (khoảng 80 km trở lên) ở chỗ hẹp nhất; đảo Diomede Lớn (Nga) và Diomede Nhỏ (Mỹ) cách nhau 2,4 dặm. Năm 2024 có 665 lượt tàu qua eo (Marine Exchange of Alaska, qua ICT News, 8/2025).',
          en: 'The strait is “a little more than 50 miles” wide (about 80 km or more) at its narrowest; Big Diomede (Russia) and Little Diomede (US) are 2.4 miles apart. There were 665 vessel transits in 2024 (Marine Exchange of Alaska, via ICT News, Aug 2025).'
        },
        {
          vi: 'Quy tắc định tuyến của IMO thiết lập năm 2018 theo sáng kiến chung Mỹ–Nga; phần lớn mang tính khuyến nghị (ICT News, 8/2025). Mỹ nói hiệp định Mỹ–Liên Xô ngày 1/6/1990 về ranh giới biển vẫn được hai nước áp dụng tạm thời từ 15/6/1990 (công hàm Mỹ ngày 30/10/2015, trong tài liệu của CLCS).',
          en: 'IMO routing rules were set in 2018 on a joint US–Russian initiative; most are advisory (ICT News, Aug 2025). The US says the 1 Jun 1990 US–USSR agreement on the sea boundary has been provisionally applied by both since 15 Jun 1990 (US note of 30 Oct 2015, in CLCS documents).'
        }
      ],
      ll: [-169, 66.2],
      k: 16,
      layers: [],
      show: ['bering'],
      hl: { Russia: RU, 'United States of America': NATO },
      dim: true,
      draw: [
        { k: 'line', pts: [[-169.7, 66.06], [-168.1, 65.6]], c: '#4B5563', w: 2.2, label: { vi: 'hơn 50 dặm / 80+ km', en: '50+ miles / 80+ km' }, dy: -10 },
        { k: 'pt', p: [-169.0, 65.78], c: '#111827', r: 2.5, label: { vi: 'Diomede', en: 'Diomede' }, dy: 9 }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: NATO, vi: 'Mỹ (Alaska)', en: 'US (Alaska)' }
      ],
      src: [14, 29, 40]
    },
    {
      title: { vi: 'Greenland: đảo lớn nhất, ít dân nhất, nằm giữa mọi thứ', en: 'Greenland: the biggest island, with few people, in the middle of everything' },
      text: {
        vi: 'Greenland rộng khoảng 2,2 triệu km², phần lớn là chỏm băng, và chỉ có khoảng 57.000 dân sống dọc bờ biển. Từ 2009 đảo tự quản trong Vương quốc Đan Mạch: Nuuk đã nhận nhiều lĩnh vực quản lý, còn đối ngoại, quốc phòng và an ninh vẫn thuộc Copenhagen. Về vị trí, đảo nằm giữa Bắc Mỹ và châu Âu, kề khe GIUK, và có Pituffik, căn cứ không gian Mỹ ở tây bắc đảo.',
        en: 'Greenland covers about 2.2 million km², mostly ice sheet, and only about 57,000 people live along its coast. Since 2009 it has been self-governing within the Kingdom of Denmark: Nuuk has taken over many fields of government, while foreign, defence and security policy stay with Copenhagen. Geographically it sits between North America and Europe, beside the GIUK gap, and hosts Pituffik, the US space base in the northwest.'
      },
      core: {
        vi: 'Phía Mỹ: ông Trump nói ngày 5/1/2026 rằng Mỹ “cần Greenland từ góc độ an ninh quốc gia” (CSIS dẫn); CSIS (1/2026) viết rằng vị trí của đảo trên tuyến NWP làm nó quan trọng với Mỹ, Trung Quốc và các cường quốc khác muốn đi qua tuyến này. Phía Đan Mạch và Greenland: họ cần được bảo đảm an ninh mà không mất chủ quyền; Thủ tướng Nielsen nói thỏa thuận “công nhận chủ quyền và toàn vẹn lãnh thổ của Vương quốc” (Reuters, 19/9/2026). Greenland cũng có quan điểm riêng: theo Al Jazeera (3/11/2026), các thăm dò dư luận cho thấy đa số người Greenland bác bỏ việc Mỹ kiểm soát đảo.',
        en: 'The US side: Mr Trump said on 5 Jan 2026 that the US needs Greenland “from the standpoint of national security” (quoted by CSIS); CSIS (Jan 2026) writes that the island’s place along the NWP makes it important to the US, China and any other power wanting access to the route. The Danish and Greenlandic side: they need security guarantees without losing sovereignty; Prime Minister Nielsen said the deal “recognizes the sovereignty and territorial integrity of our Kingdom” (Reuters, 19 Sep 2026). Greenlanders also have their own view: according to Al Jazeera (3 Nov 2026), opinion polls show most Greenlanders reject US control of the island.'
      },
      facts: [
        {
          vi: 'Tổng diện tích 2,2 triệu km², trong đó 1,7 triệu km² là chỏm băng; khoảng 57.000 dân, thủ đô Nuuk trên 20.000; ngành cá chiếm trên 90% xuất khẩu (Thống kê Greenland, 2026). Ngày 1/7/2026: 56.945 người, Nuuk 20.384 (Thống kê Greenland).',
          en: 'Total area 2.2 million km², of which 1.7 million km² is ice sheet; about 57,000 people, the capital Nuuk with over 20,000; fishing is over 90% of exports (Statistics Greenland, 2026). On 1 Jul 2026: 56,945 people, Nuuk 20,384 (Statistics Greenland).'
        },
        {
          vi: 'Luật Tự quản có hiệu lực 21/6/2009, thay chế độ Home Rule 1979. Hiến pháp, quốc tịch, tòa án tối cao, đối ngoại, quốc phòng, an ninh và tiền tệ không được chuyển giao. Nếu người Greenland quyết định độc lập sẽ có đàm phán; thỏa thuận cần Inatsisartut, Quốc hội Đan Mạch và trưng cầu dân ý ở Greenland chấp thuận (Văn phòng Thủ tướng Đan Mạch, trang kiểm tra 11/2026).',
          en: 'The Self-Government Act took effect on 21 Jun 2009, replacing the 1979 Home Rule. The constitution, nationality, supreme court, foreign, defence and security policy and currency cannot be transferred. If Greenlanders decide for independence there are negotiations; an agreement needs the consent of Inatsisartut, the Danish parliament and a referendum in Greenland (Danish Prime Minister’s Office, page checked Nov 2026).'
        },
        {
          vi: 'Pituffik là căn cứ quân sự cực bắc của Mỹ, làm nhiệm vụ cảnh báo và phòng thủ tên lửa, giám sát không gian (CSIS, 1/2026); là căn cứ Mỹ duy nhất còn hoạt động trên đảo, với khoảng 200 quân; từ 1945 sự hiện diện của Mỹ đã giảm từ hàng nghìn quân ở 17 căn cứ (AP, 23/9/2026). Thỏa thuận mới bổ sung hiệp ước phòng thủ Mỹ–Đan Mạch 1951 (Reuters, 22/9/2026).',
          en: 'Pituffik is the northernmost US military installation, with missile warning, missile defence and space surveillance (CSIS, Jan 2026); it is the only active US base on the island, with about 200 troops; since 1945 the US presence has shrunk from thousands of troops at 17 bases (AP, 23 Sep 2026). The new deal adds to the 1951 US–Danish defence pact (Reuters, 22 Sep 2026).'
        }
      ],
      ll: [-42, 72],
      k: 3.2,
      layers: [],
      show: ['base_pituffik', 'greenlandgap', 'giuk'],
      hl: { Greenland: ARC, Canada: GREY, Iceland: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [-68.7, 76.53], c: NATO, r: 4, label: { vi: 'Pituffik', en: 'Pituffik' }, side: 'l' },
        { k: 'pt', p: [-51.72, 64.18], c: ARC, r: 4, label: { vi: 'Nuuk', en: 'Nuuk' }, side: 'l' }
      ],
      key: [{ c: ARC, vi: 'Greenland (tự quản trong Vương quốc Đan Mạch)', en: 'Greenland (self-governing in the Kingdom of Denmark)' }],
      src: [18, 19, 20, 21, 22, 23, 24, 27, 13]
    },
    {
      title: { vi: 'Tài nguyên và cuộc tranh cãi pháp lý dưới đáy biển', en: 'Resources and the legal contest on the seabed' },
      text: {
        vi: 'Dưới đáy Bắc Băng Dương có thể có dầu khí, nhưng theo USGS ước tính lớn nhất nằm ở các bồn như Tây Siberia và Arctic Alaska, không phải ở vùng trung tâm đại dương. Việc ai được khai thác đáy biển ngoài 200 hải lý được xét theo UNCLOS: nước ven biển nộp hồ sơ lên Ủy ban Ranh giới Thềm lục địa (CLCS), Ủy ban đưa khuyến nghị, rồi các nước tự phân định với nhau. Nga, Đan Mạch (cùng Greenland) và Canada đều nộp hồ sơ có phần chồng lấn quanh sống núi ngầm Lomonosov.',
        en: 'The Arctic seabed may hold oil and gas, but according to USGS the biggest estimates lie in basins such as West Siberia and Arctic Alaska, not in the central ocean. Who may exploit the seabed beyond 200 nautical miles is judged under UNCLOS: coastal states file with the Commission on the Limits of the Continental Shelf (CLCS), the Commission makes recommendations, and the states then settle borders among themselves. Russia, Denmark (with Greenland) and Canada have all filed claims that overlap around the Lomonosov Ridge.'
      },
      core: {
        vi: 'Chỉ riêng bảng của USGS cho thấy các bồn ở trung tâm Bắc Băng Dương (Eurasia, Lomonosov–Makarov) nhỏ hơn nhiều so với bồn Tây Siberia; đó là một cách đọc, không phải kết luận của USGS. Mặt pháp lý: các nước coi đây là quy trình hợp pháp, không phải xung đột: Đan Mạch và Nga thỏa thuận ngày 27/3/2014 để CLCS xem xét hồ sơ của Nga, và các khuyến nghị của CLCS nói rõ không phương hại tới việc phân định giữa các nước (CLCS, 2/2023). Ý kiến ngược lại: Mỹ chưa phê chuẩn UNCLOS (Rigby và Herman, 2026), và CLCS không giải quyết chồng lấn, nên tranh chấp có thể kéo dài.',
        en: 'USGS’s table alone shows the basins in the central Arctic (Eurasia, Lomonosov–Makarov) are much smaller than the West Siberian Basin; that is a reading, not a USGS conclusion. On the legal side, the states treat this as a legal process, not a conflict: Denmark and Russia agreed on 27 Mar 2014 that the CLCS may consider Russia’s submission, and the CLCS recommendations state they do not prejudice delimitation between states (CLCS, Feb 2023). The counter-view: the US has not ratified UNCLOS (Rigby and Herman, 2026), and the CLCS does not settle overlaps, so disputes may last.'
      },
      facts: [
        {
          vi: 'USGS (2008): 90 tỷ thùng dầu, 1.669 nghìn tỷ feet khối khí và 44 tỷ thùng khí lỏng “có thể còn chờ phát hiện” ở phía bắc vòng Bắc Cực, khoảng 84% ở ngoài khơi; chỉ tính tài nguyên thông thường, chưa tính chi phí. Hai bồn lớn nhất là Tây Siberia và Arctic Alaska; Lomonosov–Makarov khoảng 2,5 tỷ thùng dầu quy đổi. Đã có hơn 400 mỏ phát hiện, chiếm gần 10% trữ lượng thông thường đã biết của thế giới.',
          en: 'USGS (2008): 90 billion barrels of oil, 1,669 trillion cubic feet of gas and 44 billion barrels of natural gas liquids “may remain to be found” north of the Arctic Circle, about 84% offshore; conventional resources only, no costs included. The two largest provinces are West Siberia and Arctic Alaska; Lomonosov–Makarov is about 2.5 billion barrels of oil equivalent. More than 400 fields are already found, almost 10% of the world’s known conventional petroleum.'
        },
        {
          vi: 'CLCS: Nga nộp lần đầu 20/12/2001, nộp bản sửa một phần 3/8/2015, Ủy ban thông qua khuyến nghị 6/2/2023; Đan Mạch (cùng Greenland) nộp hồ sơ thềm phía bắc Greenland 15/12/2014; Canada nộp hồ sơ Bắc Băng Dương 23/5/2019, rộng hơn 460.000 dặm vuông (Liên Hợp Quốc; Arctic Today, 30/5/2019). Tuyên bố Ilulissat (28/5/2008): năm nước ven biển thấy không cần một chế độ pháp lý toàn diện mới.',
          en: 'CLCS: Russia first filed on 20 Dec 2001 and made a partial revised submission on 3 Aug 2015, with recommendations approved on 6 Feb 2023; Denmark (with Greenland) filed for the northern shelf of Greenland on 15 Dec 2014; Canada filed for the Arctic Ocean on 23 May 2019, covering more than 460,000 square miles (United Nations; Arctic Today, 30 May 2019). Ilulissat Declaration (28 May 2008): the five coastal states see no need for a new comprehensive legal regime.'
        },
        {
          vi: 'Greenland đứng thứ tám thế giới về trữ lượng đất hiếm (1,5 triệu tấn) nhưng chưa khai thác đất hiếm; chỉ hai mỏ đang hoạt động (anorthosite White Mountain và vàng Nalunaq); Tanbreez là một trong hai điểm có giấy phép khai thác trong 147 giấy phép; Kvanefjeld bị chặn từ luật cấm uranium 2021; cả đảo chỉ có khoảng 93 dặm đường (CSIS, 1/2026).',
          en: 'Greenland ranks eighth in the world for rare-earth reserves (1.5 million tonnes) but mines none; only two mines operate (White Mountain anorthosite and Nalunaq gold); Tanbreez is one of two sites with an exploitation licence among 147 licences; Kvanefjeld has been blocked since a 2021 uranium ban; the whole island has only about 93 miles of road (CSIS, Jan 2026).'
        }
      ],
      ll: [0, 84],
      k: 2.2,
      layers: [],
      show: ['arctic'],
      hl: { Russia: RU, Canada: CAN, Greenland: ARC, Norway: NOR, 'United States of America': NATO },
      dim: true,
      draw: [
        { k: 'pt', p: [0, 90], c: '#111827', r: 3, label: { vi: 'Cực Bắc', en: 'North Pole' }, dy: -9 }
      ],
      key: [
        { c: RU, vi: 'Nga', en: 'Russia' },
        { c: ARC, vi: 'Đan Mạch (Greenland)', en: 'Denmark (Greenland)' },
        { c: CAN, vi: 'Canada', en: 'Canada' },
        { c: NOR, vi: 'Na Uy', en: 'Norway' },
        { c: NATO, vi: 'Mỹ (chưa phê chuẩn UNCLOS)', en: 'US (has not ratified UNCLOS)' }
      ],
      src: [7, 28, 29, 30, 31, 21, 13]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Đầu năm 2026 căng thẳng quanh Greenland leo thang, rồi dịu đi sau khi ông Trump nói ở Davos ngày 21/1 rằng ông sẽ không dùng vũ lực. Tới ngày 22/9, Mỹ, Đan Mạch và Greenland ký một thỏa thuận an ninh, và đến đầu tháng 11 thỏa thuận chờ phê chuẩn. Trong khi đó NATO đã thay đổi bản đồ Bắc Cực: Phần Lan (2023) và Thụy Điển (2024) gia nhập, và NATO gom các cuộc tập trận dưới tên Arctic Sentry. Nga và Trung Quốc cũng hoạt động ở Bắc Cực.',
        en: 'Early in 2026 tension over Greenland rose, then eased after Mr Trump said at Davos on 21 Jan that he would not use force. On 22 Sep the US, Denmark and Greenland signed a security agreement, and in early November it awaited ratification. Meanwhile NATO has changed the Arctic map: Finland (2023) and Sweden (2024) have joined, and NATO has brought exercises together under the name Arctic Sentry. Russia and China are also active in the Arctic.'
      },
      core: {
        vi: 'Bản đồ đã đổi: bảy trong tám quốc gia Bắc Cực nay là thành viên NATO, chỉ còn Nga ở ngoài (tính từ danh sách của NATO và Hội đồng Bắc Cực). Cách đọc của người viết dựa trên các phát biểu: Mỹ coi Greenland là vấn đề an ninh và muốn loại Nga và Trung Quốc khỏi đảo; Copenhagen và Nuuk coi đó là bảo đảm an ninh chứ không phải nhượng chủ quyền; Moscow coi sự hiện diện NATO ở cực bắc là mối đe dọa (ông Putin, 3/2025); Bắc Kinh nói họ tôn trọng quyền chủ quyền của các nước Bắc Cực và muốn tham gia quản trị khu vực (sách trắng 2018). Mỗi bên đều cho mình đang phòng thủ.',
        en: 'The map has changed: seven of the eight Arctic states are now NATO members, leaving only Russia outside (counted from the NATO and Arctic Council lists). The writer’s reading of the statements: the US treats Greenland as a security matter and wants Russia and China kept out; Copenhagen and Nuuk see it as a security guarantee, not a surrender of sovereignty; Moscow sees NATO’s presence in the far north as a threat (Mr Putin, Mar 2025); Beijing says it respects Arctic states’ sovereign rights and wants a part in Arctic governance (2018 white paper). Each side presents itself as defending.'
      },
      facts: [
        {
          vi: '22/9/2026 (New York): Mỹ được “hiện đại hóa và mở rộng” Pituffik và lập “khu vực phòng thủ” ở Narsarsuaq và Mestersvig, có quyền bay qua, hạ cánh và tiếp cận dưới biển; nước ngoài NATO không được lập căn cứ hay hiện diện thường trực nếu ba bên không đồng ý; thỏa thuận không có thời hạn (AP, 23/9/2026; Reuters, 22/9/2026). 19/9: ông Trump nói thỏa thuận cho Mỹ “quyền kiểm soát vĩnh viễn về an ninh”; Ngoại trưởng Đan Mạch nói chủ quyền không bị ảnh hưởng (Reuters, 19/9/2026). 3/11: Quốc hội Greenland thông qua 16–0, 7 bỏ phiếu trắng; Quốc hội Đan Mạch đọc lần một 11/11, bỏ phiếu 19/11; không cần Thượng viện Mỹ (Reuters, 3/11/2026).',
          en: '22 Sep 2026 (New York): the US may “modernise and expand” Pituffik and set up “defense areas” at Narsarsuaq and Mestersvig, with overflight, landing and undersea access; non-NATO states may not set up bases or a persistent presence unless the three parties agree; the deal has no end date (AP, 23 Sep 2026; Reuters, 22 Sep 2026). 19 Sep: Mr Trump said the deal gives the US “permanent control over security”; Denmark’s foreign minister said sovereignty is not compromised (Reuters, 19 Sep 2026). 3 Nov: Greenland’s parliament approved 16–0 with 7 abstentions; Denmark’s parliament has a first reading on 11 Nov and votes on 19 Nov; no US Senate approval is needed (Reuters, 3 Nov 2026).'
        },
        {
          vi: 'NATO: Phần Lan gia nhập 4/4/2023, Thụy Điển 7/3/2024; biên giới 1.340 km của Phần Lan với Nga là một nửa đường biên giới đất liền của NATO với Nga (NATO; Barents Observer, 4/4/2026). Arctic Sentry ra mắt 11/2/2026 như nhãn gom các cuộc tập trận sẵn có, điều phối qua sở chỉ huy ở Norfolk, không triển khai quân thường trực dưới cờ NATO (AP, 11/2/2026); tập trận Arctic Shield 7–18/9/2026 ở nam Greenland có hơn 400 binh sĩ từ khoảng 10 nước NATO (Quân đội Đan Mạch).',
          en: 'NATO: Finland joined on 4 Apr 2023 and Sweden on 7 Mar 2024; Finland’s 1,340 km border with Russia is half of NATO’s land border with Russia (NATO; Barents Observer, 4 Apr 2026). Arctic Sentry launched on 11 Feb 2026 as a label bringing existing exercises together, coordinated from the Norfolk headquarters, with no permanent troop deployment under a NATO banner (AP, 11 Feb 2026); the Arctic Shield exercise of 7–18 Sep 2026 in southern Greenland had more than 400 personnel from about 10 NATO nations (Danish Defence).'
        },
        {
          vi: 'Nga: ngày 14/10/2026 hạm đội Phương Bắc chưa công bố tập trận lớn nhưng có nhiều NOTAM ở biển Barents; máy bay NATO giám sát quanh Kola, P-8 của Anh và Na Uy theo dõi tàu ngầm Nga và hai F-35 được điều lên đánh chặn một chiếc Su-24 (Barents Observer, 15/10/2026). Trung Quốc: đến 21/9/2026 có 4 tàu nghiên cứu Trung Quốc hoạt động ngoài khơi Bắc Cực của Mỹ, so với 5 trong cả năm 2025; các tàu ở vùng biển quốc tế; Moscow phủ nhận tàu mình làm điều bất hợp pháp (Reuters, 21/9/2026).',
          en: 'Russia: on 14 Oct 2026 the Northern Fleet had announced no major exercise but there were many NOTAMs over the Barents Sea; NATO aircraft watched around Kola, British and Norwegian P-8s tracked Russian submarines and two F-35s were scrambled against a Su-24 (Barents Observer, 15 Oct 2026). China: by 21 Sep 2026 four Chinese research vessels had worked off the US Arctic, against five in all of 2025; the ships stayed in international waters; Moscow denies its vessels do anything illegal (Reuters, 21 Sep 2026).'
        }
      ],
      ll: [10, 80],
      k: 2,
      layers: [],
      show: ['base_pituffik', 'base_murmansk'],
      hl: { Russia: RU, Canada: NATO, Greenland: NATO, Denmark: NATO, Iceland: NATO, Norway: NATO, 'United States of America': NATO, Finland: NATO2, Sweden: NATO2 },
      dim: true,
      key: [
        { c: NATO, vi: 'Thành viên NATO', en: 'NATO member' },
        { c: NATO2, vi: 'Mới gia nhập (Phần Lan 2023, Thụy Điển 2024)', en: 'Recent members (Finland 2023, Sweden 2024)' },
        { c: RU, vi: 'Nga', en: 'Russia' }
      ],
      src: [22, 23, 24, 25, 26, 27, 36, 37, 38, 39, 40, 35, 34, 4, 32, 33, 13]
    }
  ]
};
