// Explainer: the Taiwan Strait and the First Island Chain. Facts from the research pack of 8 Nov 2026. Sovereignty
// claims are attributed to the side making them; nothing live (PLA zones, counts of aircraft) is drawn on the map.
const TWN = '#2E8B8B', CHN = '#D9A441', JPN = '#378ADD', PHL = '#1D9E75', GREY = '#9CA3AF';
const FLOW = '#D97706';

export const TAIWAN = {
  id: 'taiwan',
  icon: '🏝️',
  c: '#2E8B8B',
  title: { vi: 'Eo biển Đài Loan & chuỗi đảo thứ nhất', en: 'The Taiwan Strait & the First Island Chain' },
  sub: { vi: 'Dải nước hẹp, bức tường đảo và con chip', en: 'A narrow strait, a wall of islands and the chip' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến ngày 8/11/2026, Trung Quốc chưa công bố cuộc tập trận lớn nào quanh Đài Loan trong năm nay; lần gần nhất là “Justice Mission 2025” vào cuối tháng 12/2025. Tuy nhiên, theo ông Joseph Wu (Hội đồng An ninh Quốc gia Đài Loan), hơn 100 tàu hải quân và hải cảnh Trung Quốc đang hoạt động ở Tây Thái Bình Dương, và hai viện nghiên cứu Mỹ (AEI và ISW) đánh giá đó có thể là một cuộc diễn tập “cô lập Đài Loan” không công bố. Đây là nhận định của giới phân tích, chưa được Bắc Kinh xác nhận; Bắc Kinh gọi các hoạt động hải quân là huấn luyện thường kỳ. Gói vũ khí khoảng 14 tỷ USD của Mỹ cho Đài Loan vẫn chưa được thông qua. Tình hình có thể đã thay đổi sau ngày này.',
    en: 'As of 8 Nov 2026 China has announced no large drill around Taiwan this year; the last was “Justice Mission 2025” in late December 2025. However, according to Joseph Wu (Taiwan’s National Security Council), more than 100 Chinese navy and coast guard ships are operating in the western Pacific, and two US research groups (AEI and ISW) assess that this may be an unannounced “isolation of Taiwan” rehearsal. That is an analysts’ view that Beijing has not confirmed; Beijing calls its naval activity routine training. A roughly $14 billion US arms package for Taiwan is still not approved. The situation may have changed after this date.'
  },
  statusSrc: [13, 14, 15, 16],
  sources: [
    { n: 'CIMSEC (25/12/2014)', url: 'https://cimsec.org/navigating-black-ditch-risks-taiwan-strait/' },
    { n: 'CSIS, How China Could Quarantine Taiwan (5/6/2024)', url: 'https://www.csis.org/analysis/how-china-could-quarantine-taiwan-mapping-out-two-possible-scenarios' },
    { n: 'CSIS China Power (22/8/2024)', url: 'https://features.csis.org/chinapower/china-taiwan-strait-trade' },
    { n: 'Taipei Times (15/10/2024, báo cáo CSIS)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2024/10/15/2003825323' },
    { n: 'TrendForce (9/9/2026)', url: 'https://www.trendforce.com/presscenter/news/20260909-13225.html' },
    { n: 'TSMC (15/10/2026)', url: 'https://pr.tsmc.com/english/news/3346' },
    { n: 'SIA & BCG (4/2021)', url: 'https://www.semiconductors.org/strengthening-the-global-semiconductor-supply-chain-in-an-uncertain-era/' },
    { n: 'Asian Military Review (4/2026)', url: 'https://www.asianmilitaryreview.com/2026/04/jmod-details-type-03-missile-plans-in-briefing-to-yonaguni-residents-nsbt/' },
    { n: 'Philstar (3/4/2023, EDCA)', url: 'https://www.philstar.com/headlines/2023/04/03/2256598/palace-four-new-edca-sites-will-be-cagayan-isabela-palawan' },
    { n: 'Naval News (25/4/2026)', url: 'https://www.navalnews.com/naval-news/2026/04/u-s-anti-ship-missiles-in-the-philippines-for-balikatan-2026/' },
    { n: 'Taiwan.gov.tw, Natural Taiwan', url: 'https://www.taiwan.gov.tw/content_1.php' },
    { n: 'CSIS, The First Battle of the Next War (1/2023)', url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/230109_Cancian_FirstBattle_NextWar.pdf' },
    { n: 'Defense Priorities (16/10/2025)', url: 'https://www.defensepriorities.org/explainers/target-taiwan-prospects-for-a-chinese-invasion/' },
    { n: 'Taipei Times (8/11/2026)', url: 'https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351' },
    { n: 'Taipei Times (16/10/2026)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2026/10/16/2003866057' },
    { n: 'AP / Fortune (29/9/2026)', url: 'https://fortune.com/2026/09/29/china-trump-taiwan-weapons-sale/' },
    { n: 'Xinhua (29/12/2025)', url: 'https://english.news.cn/20251229/e3cdf8d3c2d54314adb102b819277973/c.html' },
    { n: 'Nippon.com (7/11/2026)', url: 'https://www.nippon.com/en/articles/-/57062' },
    { n: 'Wikipedia, Luzon Strait', url: 'https://en.wikipedia.org/wiki/Luzon_Strait' },
    { n: 'Taipei Times (12/10/2026)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2026/10/12/2003865828' }
  ],
  steps: [
    {
      title: { vi: 'Một dải nước hẹp và nông giữa hai bờ', en: 'A narrow, shallow strip of sea between two shores' },
      text: {
        vi: 'Eo biển Đài Loan ngăn bờ biển Phúc Kiến của Trung Quốc đại lục với đảo Đài Loan. Chỗ hẹp nhất khoảng 130 km, nước nông, và mặt biển thường dữ dội vì gió mùa đông bắc và bão mùa hè. Chính quyền ở Đài Bắc, do cử tri Đài Loan bầu, đang cai quản đảo; Bắc Kinh coi Đài Loan là một phần lãnh thổ của mình.',
        en: 'The Taiwan Strait separates the coast of Fujian on mainland China from the island of Taiwan. It is about 130 km wide at its narrowest, shallow, and often rough because of the northeast monsoon and summer typhoons. The government in Taipei, elected by Taiwan’s voters, governs the island; Beijing regards Taiwan as part of its territory.'
      },
      facts: [
        {
          vi: 'Chỗ hẹp nhất khoảng 130 km (CSIS). Chiều rộng trung bình khoảng 180 km, độ sâu trung bình khoảng 60 m, sâu nhất khoảng 177 m ở kênh Bành Hồ (CIMSEC).',
          en: 'About 130 km at its narrowest (CSIS). Average width about 180 km, average depth about 60 m, deepest about 177 m in the Penghu Channel (CIMSEC).'
        },
        {
          vi: 'Các nhà phân tích nói thời gian biển lặng thích hợp để vượt eo là ngắn; các nguồn không thống nhất về những tháng cụ thể nên không nêu ở đây (CIMSEC).',
          en: 'Analysts say the calm-sea windows for a crossing are short; sources disagree on the exact months, so none are given here (CIMSEC).'
        }
      ],
      ll: [120.4, 24.5],
      k: 14,
      layers: ['strait'],
      show: ['taiwanstrait'],
      hl: { Taiwan: TWN, China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[119.85, 25.5], [121.0, 25.05]], c: '#4B5563', w: 2.2, label: { vi: '~130 km', en: '~130 km' }, dy: -10 },
        { k: 'pt', p: [119.6, 23.55], c: TWN, r: 3.5, label: { vi: 'Bành Hồ (Penghu)', en: 'Penghu' }, side: 'l' },
        { k: 'pt', p: [118.4, 24.45], c: TWN, r: 3.5, label: { vi: 'Kim Môn (Kinmen)', en: 'Kinmen' }, side: 'l' },
        { k: 'pt', p: [119.95, 26.15], c: TWN, r: 3.5, label: { vi: 'Mã Tổ (Matsu)', en: 'Matsu' }, side: 'l' }
      ],
      src: [1, 0]
    },
    {
      title: { vi: 'Chuỗi đảo thứ nhất: bức tường đảo trước biển Trung Quốc', en: 'The First Island Chain: a wall of islands in front of China’s seas' },
      text: {
        vi: 'Từ Kuril, Nhật Bản, quần đảo Ryukyu, Đài Loan, Philippines tới Borneo là một vòng cung đảo, nằm ngay phía đông các vùng biển gần bờ của Trung Quốc. Tàu chiến muốn ra Tây Thái Bình Dương phải qua các khe giữa các đảo, như eo Miyako và eo Luzon. Với Bắc Kinh đó là bức tường phải vượt qua; với Mỹ, Nhật, Philippines đó là hàng rào giám sát và phòng thủ. Khái niệm này có từ những năm 1950 và cách vẽ chuỗi đảo hơi khác nhau giữa các tác giả.',
        en: 'A curve of islands runs from the Kurils through Japan, the Ryukyus, Taiwan and the Philippines to Borneo, just east of China’s near seas. Warships heading for the western Pacific have to pass through gaps between the islands, such as the Miyako and Luzon straits. For Beijing it is a wall to get past; for the US, Japan and the Philippines it is a line of watching and defence. The idea dates from the 1950s and authors draw the chain slightly differently.'
      },
      facts: [
        {
          vi: 'Eo Miyako (giữa Okinawa và đảo Miyako) rộng khoảng 250 km; eo Luzon (giữa Đài Loan và Philippines) cũng khoảng 250 km nhưng sâu hàng nghìn mét, trong khi eo biển Đài Loan trung bình chỉ khoảng 60 m (Wikipedia, CIMSEC).',
          en: 'The Miyako Strait (between Okinawa and Miyako island) is about 250 km wide; the Luzon Strait (between Taiwan and the Philippines) is also about 250 km but thousands of metres deep, while the Taiwan Strait averages only about 60 m (Wikipedia, CIMSEC).'
        },
        {
          vi: 'Giữa tháng 10/2026 một nhóm tàu do tàu sân bay Liêu Ninh dẫn đầu bắt đầu “diễn tập thường kỳ” ở Tây Thái Bình Dương, theo phía Trung Quốc (Taipei Times, 16/10/2026).',
          en: 'In mid-October 2026 a group led by the carrier Liaoning began “routine drills” in the western Pacific, according to the Chinese side (Taipei Times, 16 Oct 2026).'
        }
      ],
      ll: [124.5, 26],
      k: 2.5,
      layers: ['chain', 'strait'],
      show: ['firstchain', 'ryukyu', 'luzon', 'taiwanstrait', 'tsushima'],
      hl: { Japan: JPN, Taiwan: TWN, Philippines: PHL, China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[123.0, 27.5], [128.0, 24.5]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'cửa ra Miyako', en: 'Miyako exit' }, lp: [125.6, 26.2], dy: -8 },
        { k: 'line', pts: [[118.8, 20.8], [124.5, 20.8]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'cửa ra Luzon', en: 'Luzon exit' }, lp: [121.8, 20.8], dy: 12 }
      ],
      src: [18, 0, 14]
    },
    {
      title: { vi: 'Nơi hàng hóa và chip đi qua', en: 'Where cargo and chips pass' },
      text: {
        vi: 'Eo biển Đài Loan là một trong những đoạn đường biển bận rộn nhất thế giới. Trên đảo có TSMC, nhà máy đúc chip lớn nhất thế giới, tập trung ở dải đồng bằng phía tây. Vì vậy một cuộc đối đầu quanh eo biển có thể ảnh hưởng tới cả vận tải biển lẫn chuỗi cung ứng chip.',
        en: 'The Taiwan Strait is one of the busiest sea lanes in the world. On the island sits TSMC, the world’s largest chip foundry, concentrated on the western plain. So a crisis around the strait could hit both sea transport and chip supply.'
      },
      facts: [
        {
          vi: 'Năm 2022 khoảng 2,45 nghìn tỷ USD hàng hóa đi qua eo biển, hơn một phần năm thương mại hàng hải thế giới (CSIS, qua Taipei Times). Năm 2024, Nhật Bản có 30% hàng nhập và 25% hàng xuất đi qua đây; Hàn Quốc 24% và 20% (CSIS China Power).',
          en: 'In 2022 about $2.45 trillion of goods passed through the strait, over one fifth of world maritime trade (CSIS, via Taipei Times). In 2024, Japan sent 30% of its imports and 25% of its exports through it; South Korea 24% and 20% (CSIS China Power).'
        },
        {
          vi: 'Quý 2/2026 TSMC chiếm khoảng 72,5% doanh thu của 10 nhà máy đúc chip lớn nhất (TrendForce); quý 3/2026, 79% doanh thu tấm wafer của TSMC đến từ công nghệ 7 nm trở xuống (TSMC).',
          en: 'In Q2 2026 TSMC had about 72.5% of the revenue of the ten biggest foundries (TrendForce); in Q3 2026, 79% of TSMC’s wafer revenue came from 7 nm and smaller technologies (TSMC).'
        },
        {
          vi: 'Một nghiên cứu năm 2021 ước tính 92% năng lực sản xuất chip dưới 10 nm của thế giới nằm ở Đài Loan; đây là số liệu cũ (khoảng năm 2019), không phải tỷ lệ hiện nay (SIA và BCG).',
          en: 'A 2021 study estimated 92% of the world’s sub-10 nm chip capacity was in Taiwan; this is an older figure (around 2019 data), not today’s share (SIA and BCG).'
        }
      ],
      ll: [121, 24],
      k: 5,
      layers: ['resource', 'strait'],
      show: ['res_tsmc', 'taiwanstrait', 'luzon'],
      hl: { Taiwan: TWN, Japan: JPN, 'South Korea': PHL, China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[121.8, 31.2], [121.0, 27.0], [119.5, 25.0], [118.0, 22.5], [114.0, 21.0]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'tuyến hàng hải chính (minh họa)', en: 'main shipping lane (illustrative)' }, lp: [120.4, 26.2], dy: 0 },
        { k: 'pt', p: [120.99, 24.78], c: TWN, r: 4, label: { vi: 'Tân Trúc (TSMC)', en: 'Hsinchu (TSMC)' } },
        { k: 'pt', p: [120.68, 24.15], c: TWN, r: 4, label: { vi: 'Đài Trung', en: 'Taichung' } },
        { k: 'pt', p: [120.2, 23.0], c: TWN, r: 4, label: { vi: 'Đài Nam', en: 'Tainan' } },
        { k: 'pt', p: [120.3, 22.63], c: TWN, r: 4, label: { vi: 'Cao Hùng', en: 'Kaohsiung' } }
      ],
      src: [3, 2, 4, 5, 6]
    },
    {
      title: { vi: 'Nhật Bản, Philippines và Mỹ đứng ở đâu trên chuỗi đảo', en: 'Where Japan, the Philippines and the US stand along the chain' },
      text: {
        vi: 'Yonaguni là đảo của Nhật gần Đài Loan nhất. Nhật đã đặt các đơn vị tên lửa trên Amami, Okinawa, Miyako và Ishigaki, và công bố kế hoạch đặt tên lửa phòng không trên Yonaguni. Philippines có chín địa điểm EDCA cho quân Mỹ tiếp cận, trong đó có Cagayan và Isabela ở bắc Luzon, nhìn ra eo Luzon. Trung Quốc phản đối những bố trí kiểu này.',
        en: 'Yonaguni is the Japanese island closest to Taiwan. Japan has missile units on Amami, Okinawa, Miyako and Ishigaki, and has announced air-defence missiles for Yonaguni. The Philippines has nine EDCA sites open to US forces, including Cagayan and Isabela in northern Luzon, facing the Luzon Strait. China objects to such deployments.'
      },
      facts: [
        {
          vi: '24/2/2026: Bộ trưởng Quốc phòng Nhật Koizumi công bố kế hoạch đặt tên lửa Type-03 trên Yonaguni trong năm tài khóa 2030; các đơn vị Chu-SAM đã có ở Amami, Okinawa, Miyakojima, Ishigaki (Asian Military Review).',
          en: '24 Feb 2026: Japan’s Defence Minister Koizumi announced Type-03 missiles for Yonaguni in fiscal 2030; Chu-SAM units are already on Amami, Okinawa, Miyakojima and Ishigaki (Asian Military Review).'
        },
        {
          vi: 'Tháng 4/2026, trong cuộc tập trận Balikatan, Thủy quân lục chiến Mỹ đặt bệ phóng tên lửa chống hạm NMESIS tại sân bay Lal-lo (Cagayan) ở bắc Luzon (Naval News).',
          en: 'In April 2026, during the Balikatan exercise, US Marines staged NMESIS anti-ship missile launchers at Lal-lo airport (Cagayan) in northern Luzon (Naval News).'
        },
        {
          vi: 'Ngày 7/11/2025, Thủ tướng Nhật Takaichi nói trong Quốc hội rằng một cuộc phong tỏa Đài Loan có thể là “tình huống đe dọa sự sống còn” của Nhật; Bắc Kinh đòi rút lại. Đến 7/11/2026 bà chưa rút lại và đối thoại giữa hai chính phủ vẫn đóng băng (Nippon.com).',
          en: 'On 7 Nov 2025 Japan’s Prime Minister Takaichi said in the Diet that a naval blockade of Taiwan could be a “survival-threatening situation” for Japan; Beijing demanded a retraction. As of 7 Nov 2026 she had not retracted and dialogue between the governments remained frozen (Nippon.com).'
        }
      ],
      ll: [124, 22],
      k: 3.2,
      layers: ['base', 'chain', 'strait'],
      show: ['base_okinawa', 'ryukyu', 'luzon'],
      hl: { Japan: JPN, Philippines: PHL, Taiwan: GREY, China: '#D8D2C0' },
      dim: true,
      draw: [
        { k: 'pt', p: [123.0, 24.45], c: JPN, r: 4.5, label: { vi: 'Yonaguni', en: 'Yonaguni' }, side: 'l' },
        { k: 'pt', p: [124.2, 24.4], c: JPN, r: 4, label: { vi: 'Ishigaki', en: 'Ishigaki' }, dy: 9 },
        { k: 'pt', p: [125.3, 24.8], c: JPN, r: 4, label: { vi: 'Miyako', en: 'Miyako' }, dy: -9 },
        { k: 'pt', p: [121.9, 20.5], c: PHL, r: 4, label: { vi: 'Batanes (cực bắc Philippines)', en: 'Batanes (northernmost Philippines)' }, side: 'l' },
        { k: 'pt', p: [122.1, 18.45], c: PHL, r: 4, label: { vi: 'Santa Ana (EDCA)', en: 'Santa Ana (EDCA)' } },
        { k: 'pt', p: [121.65, 18.2], c: PHL, r: 4, label: { vi: 'Lal-lo (EDCA)', en: 'Lal-lo (EDCA)' }, side: 'l' },
        { k: 'pt', p: [121.8, 17.07], c: PHL, r: 4, label: { vi: 'Gamu, Isabela (EDCA)', en: 'Gamu, Isabela (EDCA)' } }
      ],
      key: [
        { c: JPN, vi: 'Nhật Bản', en: 'Japan' },
        { c: PHL, vi: 'Philippines', en: 'Philippines' }
      ],
      src: [7, 8, 9, 17]
    },
    {
      title: { vi: 'Núi ở giữa, đồng bằng một bên', en: 'Mountains in the middle, plains on one side' },
      text: {
        vi: 'Đài Loan dài khoảng 394 km và rộng nhất khoảng 144 km. Dãy Trung Ương chạy dọc đảo theo hướng bắc nam; đồng bằng hẹp nằm ở phía tây, đối diện Trung Quốc đại lục, nơi tập trung phần lớn dân cư. Phía đông, núi đổ dốc ra Thái Bình Dương. Vì vậy các nhà phân tích cho rằng chỉ có rất ít bãi biển thuận lợi để đổ bộ, và phía sau là đô thị, sông và núi. Một số nhà phân tích khác cho rằng tàu dân sự và thuyền nhỏ có thể phần nào bù lại hạn chế này, nên đây là một đánh giá chứ không phải kết luận chắc chắn.',
        en: 'Taiwan is about 394 km long and up to about 144 km wide. The Central Mountain Range runs north to south; narrow plains lie in the west, facing mainland China, where most people live. In the east the mountains drop steeply to the Pacific. Analysts therefore say there are very few good landing beaches, with cities, rivers and mountains behind them. Other analysts argue civilian ships and small boats could partly offset this, so this is an assessment, not a settled conclusion.'
      },
      facts: [
        {
          vi: 'Các dãy núi Đài Loan có 268 đỉnh cao hơn 3.000 m; núi cùng chân đồi rừng chiếm hơn một nửa diện tích đảo (Taiwan.gov.tw).',
          en: 'Taiwan’s mountain ranges have 268 peaks above 3,000 m; mountains with forested foothills cover more than half the island (Taiwan.gov.tw).'
        },
        {
          vi: 'CSIS (1/2023): Đài Loan chỉ có khoảng một chục bãi biển phù hợp để đổ bộ và địa hình bên trong rất dễ phòng thủ. Đây là kết quả mô hình trò chơi chiến tranh, không phải dự báo.',
          en: 'CSIS (Jan 2023): Taiwan has only about a dozen suitable landing beaches and the terrain inland is highly defensible. This is the result of a wargame model, not a forecast.'
        },
        {
          vi: 'Ý kiến ngược lại: dùng tàu thương mại và thuyền mớn nước nông cho phép linh hoạt hơn về địa điểm đổ bộ (Defense Priorities, 10/2025).',
          en: 'Counter-view: using merchant vessels and shallow-draft boats would allow more flexibility in landing locations (Defense Priorities, Oct 2025).'
        }
      ],
      ll: [121.0, 23.7],
      k: 16,
      layers: [],
      show: [],
      hl: { Taiwan: TWN },
      dim: true,
      draw: [
        { k: 'poly', pts: [[121.4, 25.1], [120.9, 24.85], [120.5, 24.3], [120.1, 23.7], [120.1, 23.0], [120.25, 22.55], [120.55, 22.6], [120.6, 23.1], [120.75, 23.7], [120.9, 24.3], [121.2, 24.8]], c: '#3F9142', a: 0.22, w: 1.2 },
        { k: 'line', pts: [[121.3, 24.7], [121.23, 24.38], [121.1, 24.0], [120.96, 23.47], [120.85, 23.0], [120.76, 22.63], [120.8, 22.1]], c: '#8A6A3A', w: 4, label: { vi: 'Dãy Trung Ương', en: 'Central Range' }, lp: [121.18, 24.1], dy: 0 },
        { k: 'pt', p: [121.56, 25.04], c: TWN, r: 3.5, label: { vi: 'Đài Bắc', en: 'Taipei' } },
        { k: 'pt', p: [120.68, 24.15], c: TWN, r: 3.5, label: { vi: 'Đài Trung', en: 'Taichung' }, side: 'l' },
        { k: 'pt', p: [120.3, 22.63], c: TWN, r: 3.5, label: { vi: 'Cao Hùng', en: 'Kaohsiung' }, side: 'l' },
        { k: 'pt', p: [121.6, 23.98], c: TWN, r: 3.5, label: { vi: 'Hoa Liên', en: 'Hualien' } }
      ],
      src: [10, 11, 12]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Cuối tháng 12/2025 Trung Quốc tiến hành cuộc tập trận “Justice Mission 2025” quanh Đài Loan, trong đó có chủ đề “phong tỏa các cảng và khu vực trọng yếu”. Năm 2026, Mỹ và Trung Quốc có hai cuộc gặp thượng đỉnh, nhưng gói vũ khí khoảng 14 tỷ USD của Mỹ cho Đài Loan vẫn bị đình lại. Hiện chưa có cuộc tập trận lớn nào được công bố, nhưng các hoạt động hải quân quanh đảo vẫn dày.',
        en: 'In late December 2025 China held the “Justice Mission 2025” drills around Taiwan, with a theme of “blockade on key ports and areas”. In 2026 the US and China held two summits, but a roughly $14 billion US arms package for Taiwan remains stalled. No large drill has been announced, but naval activity around the island remains heavy.'
      },
      facts: [
        {
          vi: '29/12/2025: Bộ Tư lệnh Chiến khu Đông bộ Trung Quốc thông báo tập trận “Justice Mission 2025” quanh Đài Loan, gồm các chủ đề tuần tra sẵn sàng chiến đấu, “phong tỏa các cảng và khu vực trọng yếu”, răn đe “bên ngoài chuỗi đảo” (Tân Hoa Xã).',
          en: '29 Dec 2025: China’s Eastern Theater Command announced the “Justice Mission 2025” drills around Taiwan, with themes including combat-readiness patrols, “blockade on key ports and areas” and deterrence “outside the island chain” (Xinhua).'
        },
        {
          vi: '29/9/2026: gói vũ khí khoảng 14 tỷ USD “đang bị đình lại”; Bộ trưởng Quốc phòng Đài Loan nói vẫn thảo luận liên tục với Mỹ (AP). 12–17/10: Trung Quốc tập trận bắn đạn thật pháo binh ở năm vùng cấm tàu; vùng gần Đài Loan nhất ở Hoa Đông cách đảo 159 hải lý (Taipei Times).',
          en: '29 Sep 2026: the roughly $14 billion arms package “is stalled”; Taiwan’s defence minister said talks with the US continue (AP). 12–17 Oct: China held live-fire artillery drills in five no-sail areas; the nearest East China Sea zone was 159 nautical miles from Taiwan (Taipei Times).'
        },
        {
          vi: 'Tháng 11/2026, theo ông Joseph Wu, hơn 100 tàu hải quân và hải cảnh Trung Quốc hoạt động ở Tây Thái Bình Dương; AEI và ISW đánh giá đó có thể là một cuộc diễn tập “cô lập Đài Loan” không công bố. Đây là nhận định của giới phân tích; Bắc Kinh gọi đó là huấn luyện thường kỳ (Taipei Times, 8/11/2026).',
          en: 'In November 2026, according to Joseph Wu, more than 100 Chinese navy and coast guard ships were operating in the western Pacific; AEI and ISW assess it may be an unannounced “isolation of Taiwan” rehearsal. That is the analysts’ view; Beijing calls it routine training (Taipei Times, 8 Nov 2026).'
        }
      ],
      ll: [124, 23.5],
      k: 2.5,
      layers: ['conflict', 'strait', 'chain'],
      show: ['conf_taiwan', 'taiwanstrait', 'luzon', 'ryukyu'],
      hl: { Taiwan: TWN, China: CHN, Japan: JPN },
      dim: true,
      src: [16, 15, 19, 13, 14]
    }
  ]
};
