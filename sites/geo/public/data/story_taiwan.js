// Explainer: the Taiwan Strait, told as one argument in short steps: what Beijing says the island is, where it sits on the
// island chain, why the people on it and the water around it stand in the way, what Beijing does instead, why other
// countries care, and where it stands. Facts from the research pack of 8 Nov 2026; each step names its sources.
// Sovereignty claims are attributed to the side making them; nothing live (drill zones, ship counts) is drawn on the map.
// The chain as a wall and China's sea lanes are told in story_biendong.js; this story keeps Taiwan's own angle.
const TWN = '#2E8B8B', CHN = '#D9A441', JPN = '#378ADD', PHL = '#1D9E75', KOR = '#7F77DD';
const FLOW = '#D97706', HOT = '#D9383A';

export const TAIWAN = {
  id: 'taiwan',
  icon: '🏝️',
  c: '#2E8B8B',
  title: { vi: 'Eo biển Đài Loan & chuỗi đảo thứ nhất', en: 'The Taiwan Strait & the First Island Chain' },
  sub: { vi: 'Vì sao một hòn đảo khiến nhiều nước cùng lo', en: 'Why one island worries so many countries' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026 Trung Quốc chưa công bố cuộc tập trận lớn nào quanh Đài Loan trong năm nay; lần gần nhất là “Justice Mission 2025” cuối tháng 12/2025. Theo ông Joseph Wu (Hội đồng An ninh Quốc gia Đài Loan), hơn 100 tàu Trung Quốc đang hoạt động ở Tây Thái Bình Dương; AEI và ISW đánh giá đó có thể là một cuộc diễn tập “cô lập Đài Loan” không công bố, đây là đánh giá của giới phân tích. Gói vũ khí khoảng 14 tỷ USD của Mỹ cho Đài Loan vẫn bị đình lại (AP, 29/9/2026).',
    en: 'As of 8 Nov 2026 China has announced no large drill around Taiwan this year; the last was “Justice Mission 2025” in late December 2025. According to Joseph Wu (Taiwan’s National Security Council), more than 100 Chinese ships are operating in the western Pacific; AEI and ISW assess this may be an unannounced “isolation of Taiwan” rehearsal, which is an analysts’ assessment. A roughly $14 billion US arms package for Taiwan remains stalled (AP, 29 Sep 2026).'
  },
  statusSrc: [6, 24, 13, 25],
  sources: [
    { n: 'PRC State Council white paper “The Taiwan Question and China’s Reunification in the New Era” (10/8/2022; text via PRC Embassy in the US)', url: 'https://us.china-embassy.gov.cn/eng/zgyw/202208/t20220810_10740168.htm' },
    { n: 'CSIS, How China Could Quarantine Taiwan (5/6/2024)', url: 'https://www.csis.org/analysis/how-china-could-quarantine-taiwan-mapping-out-two-possible-scenarios' },
    { n: 'CIMSEC (25/12/2014)', url: 'https://cimsec.org/navigating-black-ditch-risks-taiwan-strait/' },
    { n: 'Pacific Forum PacNet 16, J. McBride (17/3/2025)', url: 'https://pacforum.org/publications/pacnet-16-taiwans-true-regional-and-existential-importance-outside-of-semiconductors/' },
    { n: 'The Defense Post, China’s defence ministry on containment (30/1/2026)', url: 'https://thedefensepost.com/2026/01/30/china-us-contain-fail' },
    { n: 'Wikipedia, Luzon Strait', url: 'https://en.wikipedia.org/wiki/Luzon_Strait' },
    { n: 'Taipei Times (16/10/2026)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2026/10/16/2003866057' },
    { n: 'President Lai, National Day address (10/10/2024, Presidential Office of Taiwan)', url: 'https://english.president.gov.tw/News/6816' },
    { n: 'Taipei Times, Lai’s second-anniversary address (20/5/2026)', url: 'https://www.taipeitimes.com/News/front/archives/2026/05/20/2003857669' },
    { n: 'Taipei Times, KMT chair Cheng Li-wun on the First Island Chain (11/5/2026)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2026/05/11/2003857124' },
    { n: 'Taiwan.gov.tw, Natural Taiwan', url: 'https://www.taiwan.gov.tw/content_1.php' },
    { n: 'CSIS, The First Battle of the Next War (1/2023)', url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/230109_Cancian_FirstBattle_NextWar.pdf' },
    { n: 'Defense Priorities (16/10/2025)', url: 'https://www.defensepriorities.org/explainers/target-taiwan-prospects-for-a-chinese-invasion/' },
    { n: 'Xinhua (29/12/2025)', url: 'https://english.news.cn/20251229/e3cdf8d3c2d54314adb102b819277973/c.html' },
    { n: 'Taipei Times (15/10/2024, báo cáo CSIS)', url: 'https://www.taipeitimes.com/News/taiwan/archives/2024/10/15/2003825323' },
    { n: 'CSIS China Power (22/8/2024)', url: 'https://features.csis.org/chinapower/china-taiwan-strait-trade' },
    { n: 'TrendForce (9/9/2026)', url: 'https://www.trendforce.com/presscenter/news/20260909-13225.html' },
    { n: 'President Lai interviewed by The New York Times DealBook Summit (4/12/2025, Presidential Office)', url: 'https://english.president.gov.tw/NEWS/7052' },
    { n: 'Japan National Security Strategy (12/2022, provisional English translation, Cabinet Secretariat)', url: 'https://www.cas.go.jp/jp/siryou/221216anzenhoshou/nss-e.pdf' },
    { n: 'Asian Military Review (4/2026)', url: 'https://www.asianmilitaryreview.com/2026/04/jmod-details-type-03-missile-plans-in-briefing-to-yonaguni-residents-nsbt/' },
    { n: 'Philstar (3/4/2023, EDCA)', url: 'https://www.philstar.com/headlines/2023/04/03/2256598/palace-four-new-edca-sites-will-be-cagayan-isabela-palawan' },
    { n: 'Statement of John Noh, Assistant Secretary of War, House Armed Services Committee, INDOPACOM posture (22/4/2026)', url: 'https://armedservices.house.gov/UploadedFiles/2026-04-22_INDOPACOM_Noh_Testimony.pdf' },
    { n: 'Nippon.com (7/11/2026)', url: 'https://www.nippon.com/en/articles/-/57062' },
    { n: 'AP via The Week, Marcos on the Philippines and Taiwan (11/8/2025)', url: 'https://www.theweek.in/wire-updates/international/2025/08/11/fgn10-philippines-marcos-china.html' },
    { n: 'Taipei Times (8/11/2026)', url: 'https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351' },
    { n: 'AP / Fortune (29/9/2026)', url: 'https://fortune.com/2026/09/29/china-trump-taiwan-weapons-sale/' },
    { n: 'President Lai meets Global Taiwan Institute media delegation (31/3/2026, Presidential Office)', url: 'https://english.president.gov.tw/NEWS/7110' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Với Bắc Kinh, Đài Loan là chuyện trong nhà', en: 'For Beijing, Taiwan is an internal affair' },
      text: {
        vi: 'Vì sao một hòn đảo nhỏ lại khiến Bắc Kinh và các nước láng giềng cùng lo? Hãy bắt đầu từ cách Bắc Kinh nhìn hòn đảo này. Bắc Kinh nói Đài Loan là một phần của Trung Quốc, là chuyện nội bộ và thuộc “lợi ích cốt lõi”. Họ nói hòa bình là lựa chọn hàng đầu, nhưng không từ bỏ việc dùng vũ lực. Và chỗ hẹp nhất, đảo chỉ cách bờ Phúc Kiến khoảng 130 km.',
        en: 'Why does one small island worry Beijing and its neighbours alike? Start with how Beijing sees it. Beijing says Taiwan is part of China, an internal affair and one of its “core interests”. It says peaceful means are its first choice, but it does not renounce the use of force. And at the narrowest point, the island is only about 130 km from the coast of Fujian.'
      },
      facts: [
        {
          vi: 'Eo biển rộng trung bình khoảng 180 km và sâu trung bình chỉ khoảng 60 m (CIMSEC).',
          en: 'The strait averages about 180 km wide and only about 60 m deep (CIMSEC).'
        }
      ],
      ll: [119.8, 25],
      k: 7,
      layers: [],
      show: ['taiwanstrait'],
      hl: { Taiwan: TWN, China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[119.85, 25.5], [121.0, 25.05]], c: '#4B5563', w: 2.2, label: { vi: '~130 km', en: '~130 km' }, dy: -10 }
      ],
      src: [0, 1, 2]
    },
    {
      tag: 'need',
      title: { vi: 'Và đảo nằm ngay giữa chuỗi đảo', en: 'And the island sits mid-chain' },
      text: {
        vi: 'Nhìn rộng ra, Đài Loan nằm giữa Nhật Bản và Philippines, ngay chính giữa chuỗi đảo thứ nhất. Tàu chiến muốn ra Tây Thái Bình Dương phải lách qua các khe đảo, như eo Luzon giữa Đài Loan và Philippines. Theo Pacific Forum, nếu Bắc Kinh nắm được đảo, hải quân Trung Quốc có thể ra khỏi chuỗi, còn bên phòng thủ mất một mắt xích. Bắc Kinh thì nói mọi nỗ lực kiềm chế Trung Quốc đều “chắc chắn thất bại”.',
        en: 'Zoom out and Taiwan lies between Japan and the Philippines, right in the middle of the First Island Chain. Warships heading for the western Pacific have to slip through gaps between islands, such as the Luzon Strait between Taiwan and the Philippines. According to Pacific Forum, if Beijing held the island the Chinese navy could break out of the chain, while its defenders would lose a link. Beijing says any attempt to contain China is “doomed to fail”.'
      },
      facts: [
        {
          vi: 'Tổng thống Lại Thanh Đức gọi Đài Loan là “mắt xích then chốt” của chuỗi đảo thứ nhất (31/3/2026).',
          en: 'President Lai Ching-te calls Taiwan “a crucial link” in the First Island Chain (31 Mar 2026).'
        },
        {
          vi: 'Giữa tháng 10/2026 một nhóm tàu do tàu sân bay Liêu Ninh dẫn đầu bắt đầu “diễn tập thường kỳ” ở Tây Thái Bình Dương, theo phía Trung Quốc (Taipei Times).',
          en: 'In mid-October 2026 a group led by the carrier Liaoning began “routine drills” in the western Pacific, according to the Chinese side (Taipei Times).'
        }
      ],
      ll: [124.5, 24.5],
      k: 2.5,
      layers: [],
      show: ['firstchain', 'ryukyu', 'luzon', 'taiwanstrait'],
      hl: { Taiwan: TWN, China: CHN, Japan: JPN, Philippines: PHL },
      dim: true,
      draw: [
        { k: 'line', pts: [[123.0, 27.5], [128.0, 24.5]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'eo Miyako', en: 'Miyako Strait' }, lp: [125.6, 26.2], dy: -8 },
        { k: 'line', pts: [[118.8, 20.8], [124.5, 20.8]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'eo Luzon', en: 'Luzon Strait' }, lp: [121.8, 20.8], dy: 12 }
      ],
      key: [{ c: FLOW, vi: 'Khe ra Tây Thái Bình Dương', en: 'Gaps to the western Pacific' }],
      src: [5, 3, 4, 26, 6]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng Đài Bắc nói đảo phải tự quyết', en: 'But Taipei says the island decides for itself' },
      text: {
        vi: 'Trên đảo đã có một chính quyền riêng. Chính quyền ấy ở Đài Bắc, do cử tri Đài Loan bầu ra. Tổng thống Lại Thanh Đức nói hai bên eo biển “không trực thuộc nhau”. Ông nói tương lai Đài Loan “phải do 23 triệu người dân cùng quyết định”. Trên đảo cũng có tiếng nói khác: bà Trịnh Lệ Văn, chủ tịch Quốc dân đảng đối lập, nói Đài Loan không nên phải chọn giữa Mỹ và Trung Quốc.',
        en: 'The island already has a government of its own. That government sits in Taipei and is elected by Taiwan’s voters. President Lai Ching-te says the two sides of the strait are “not subordinate to each other”. He says Taiwan’s future “must be determined together by our 23 million people”. There are other voices on the island too: Cheng Li-wun, chair of the opposition KMT, says Taiwan should not have to choose between the US and China.'
      },
      facts: [
        {
          vi: 'Ngoài đảo chính, Đài Bắc còn cai quản quần đảo Bành Hồ và các đảo Kim Môn, Mã Tổ ngoài khơi Phúc Kiến (CSIS).',
          en: 'Besides the main island, Taipei also governs the Penghu islands and the Kinmen and Matsu islands off Fujian (CSIS).'
        }
      ],
      ll: [120.2, 24.6],
      k: 12,
      layers: [],
      show: [],
      hl: { Taiwan: TWN, China: CHN },
      dim: true,
      draw: [
        { k: 'pt', p: [121.56, 25.04], c: TWN, r: 4.5, label: { vi: 'Đài Bắc', en: 'Taipei' } },
        { k: 'pt', p: [119.6, 23.55], c: TWN, r: 3.5, label: { vi: 'Bành Hồ', en: 'Penghu' } },
        { k: 'pt', p: [118.4, 24.45], c: TWN, r: 3.5, label: { vi: 'Kim Môn', en: 'Kinmen' } },
        { k: 'pt', p: [119.95, 26.15], c: TWN, r: 3.5, label: { vi: 'Mã Tổ', en: 'Matsu' } }
      ],
      key: [{ c: TWN, vi: 'Do Đài Bắc cai quản', en: 'Governed by Taipei' }],
      src: [1, 7, 8, 9]
    },
    {
      tag: 'blocked',
      title: { vi: 'Và vượt eo biển là việc rất khó', en: 'And crossing the strait is very hard' },
      text: {
        vi: 'Muốn chiếm đảo bằng vũ lực thì phải vượt biển. Eo biển nông, sóng gió nhiều vì gió mùa đông bắc và bão mùa hè. Trên đảo, núi chiếm hơn một nửa diện tích, còn đồng bằng phía tây thì hẹp. Theo CSIS, Đài Loan chỉ có khoảng một chục bãi biển hợp để đổ bộ. Trong trò chơi chiến tranh của CSIS, cuộc đổ bộ thường thất bại, nhưng bên nào cũng trả giá rất đắt.',
        en: 'Taking the island by force means crossing the sea. The strait is shallow and often rough with the northeast monsoon and summer typhoons. On the island, mountains cover more than half the land, and the western plain is narrow. According to CSIS, Taiwan has only about a dozen beaches suitable for a landing. In the CSIS wargame, the invasion usually failed, but every side paid a very high price.'
      },
      facts: [
        {
          vi: 'Các tác giả CSIS nói kịch bản này “không phải là dự báo”. Họ cũng đánh giá thất bại khi chiếm đảo có thể làm lung lay sự cầm quyền của Đảng Cộng sản Trung Quốc.',
          en: 'The CSIS authors say the scenario is “not a prediction”. They also judge that failing to take the island might destabilise Chinese Communist Party rule.'
        },
        {
          vi: 'Ý kiến ngược lại: dùng tàu buôn và thuyền mớn nước nông sẽ cho phép chọn nơi đổ bộ linh hoạt hơn (Defense Priorities, 10/2025).',
          en: 'Counter-view: using merchant ships and shallow-draft boats would allow more flexibility in where to land (Defense Priorities, Oct 2025).'
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
        { k: 'line', pts: [[121.3, 24.7], [121.23, 24.38], [121.1, 24.0], [120.96, 23.47], [120.85, 23.0], [120.76, 22.63], [120.8, 22.1]], c: '#8A6A3A', w: 4, label: { vi: 'Dãy Trung Ương', en: 'Central Range' }, lp: [121.18, 24.1], dy: 0 }
      ],
      key: [
        { c: '#3F9142', vi: 'Đồng bằng phía tây (minh họa)', en: 'Western plain (illustration)' },
        { c: '#8A6A3A', vi: 'Núi', en: 'Mountains' }
      ],
      src: [2, 10, 11, 12]
    },
    {
      tag: 'move',
      title: { vi: 'Bắc Kinh tập cả bài phong tỏa cảng', en: 'Beijing drills for blockading ports' },
      text: {
        vi: 'Cuối tháng 12/2025, Trung Quốc tập trận “Justice Mission 2025” quanh Đài Loan. Một chủ đề là “phong tỏa các cảng và khu vực trọng yếu”. Bắc Kinh gọi đó là lời cảnh báo với lực lượng “Đài Loan độc lập” và sự can thiệp từ bên ngoài. CSIS (2024) đánh giá một cuộc “kiểm dịch” do hải cảnh dẫn đầu là khả thi hơn và dễ xảy ra hơn trong ngắn hạn, dù tự nó không buộc được Đài Loan đầu hàng.',
        en: 'In late December 2025 China held the “Justice Mission 2025” drills around Taiwan. One theme was a “blockade on key ports and areas”. Beijing called it a warning to “Taiwan independence” forces and to outside interference. CSIS (2024) judges that a “quarantine” led by the coast guard is more feasible and more likely in the near term, though on its own it could not force Taiwan to give in.'
      },
      facts: [
        {
          vi: 'Các chủ đề khác gồm tuần tra sẵn sàng chiến đấu và răn đe “bên ngoài chuỗi đảo” (Tân Hoa Xã).',
          en: 'Other themes included combat-readiness patrols and deterrence “outside the island chain” (Xinhua).'
        }
      ],
      ll: [122, 23.8],
      k: 5,
      layers: [],
      show: ['conf_taiwan', 'taiwanstrait'],
      hl: { Taiwan: TWN, China: CHN },
      dim: true,
      src: [13, 1]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng eo biển này chở hàng của thế giới', en: 'But this strait carries the world’s goods' },
      text: {
        vi: 'Chuyện ở eo biển không chỉ là chuyện của Đài Loan. Theo CSIS, năm 2022 khoảng 2,45 nghìn tỷ USD hàng hóa đi qua đây, hơn một phần năm thương mại đường biển thế giới. Trên đảo còn có TSMC, hãng đúc chip lớn nhất thế giới; ông Lại gọi ngành chip là “tài sản toàn cầu”. Nhật Bản viết rằng hòa bình ở eo biển là “không thể thiếu” cho an ninh và thịnh vượng của cộng đồng quốc tế.',
        en: 'What happens in the strait is not Taiwan’s business alone. According to CSIS, about $2.45 trillion of goods passed through it in 2022, over a fifth of world maritime trade. The island is also home to TSMC, the world’s largest chip foundry; Lai calls the chip sector “a global asset”. Japan writes that peace across the strait is “indispensable” for the security and prosperity of the international community.'
      },
      facts: [
        {
          vi: 'Năm 2024, 30% hàng nhập và 25% hàng xuất của Nhật đi qua eo biển; của Hàn Quốc là 24% và 20% (CSIS China Power).',
          en: 'In 2024, 30% of Japan’s imports and 25% of its exports passed through the strait; for South Korea, 24% and 20% (CSIS China Power).'
        },
        {
          vi: 'Quý 2/2026 TSMC chiếm khoảng 72,5% doanh thu của 10 hãng đúc chip lớn nhất (TrendForce).',
          en: 'In Q2 2026 TSMC had about 72.5% of the revenue of the ten biggest foundries (TrendForce).'
        }
      ],
      ll: [122, 27],
      k: 3.2,
      layers: [],
      show: ['res_tsmc', 'taiwanstrait'],
      hl: { Taiwan: TWN, Japan: JPN, 'South Korea': KOR, China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[121.8, 31.2], [121.0, 27.0], [119.5, 25.0], [118.0, 22.5], [114.0, 21.0]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'tuyến hàng (minh họa)', en: 'shipping lane (illustration)' }, lp: [120.4, 26.2], dy: 0 }
      ],
      src: [14, 16, 17, 18, 15]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhật, Philippines, Mỹ dựng phòng tuyến', en: 'Japan, the Philippines and the US build a line' },
      text: {
        vi: 'Hai bên sườn Đài Loan là đất của Nhật và Philippines. Nhật đã đặt tên lửa trên nhiều đảo phía nam, và định đặt thêm ở Yonaguni, đảo Nhật gần Đài Loan nhất. Philippines có chín địa điểm EDCA cho quân Mỹ, trong đó có Cagayan và Isabela nhìn ra eo Luzon. Một quan chức Lầu Năm Góc nói (4/2026) Mỹ sẽ xây “phòng thủ ngăn chặn mạnh” dọc chuỗi đảo. Trung Quốc phản đối những bố trí này.',
        en: 'On either side of Taiwan lies Japanese and Philippine land. Japan has put missiles on several southern islands and plans more on Yonaguni, the Japanese island closest to Taiwan. The Philippines has nine EDCA sites open to US forces, including Cagayan and Isabela facing the Luzon Strait. A Pentagon official said (April 2026) the US will build a “strong denial defense” along the island chain. China objects to these deployments.'
      },
      facts: [
        {
          vi: 'Ngày 7/11/2025 Thủ tướng Nhật Takaichi nói một cuộc phong tỏa Đài Loan có thể là “tình huống đe dọa sự sống còn” của Nhật. Bắc Kinh đòi rút lại; đến 7/11/2026 bà chưa rút và đối thoại hai bên vẫn đóng băng (Nippon.com).',
          en: 'On 7 Nov 2025 Japan’s Prime Minister Takaichi said a blockade of Taiwan could be a “survival-threatening situation” for Japan. Beijing demanded a retraction; as of 7 Nov 2026 she had not retracted and dialogue remained frozen (Nippon.com).'
        },
        {
          vi: 'Tháng 8/2025 Tổng thống Marcos nói Philippines sẽ bị “kéo vào” nếu có chiến tranh về Đài Loan. Bắc Kinh đáp rằng đó là can thiệp.',
          en: 'In August 2025 President Marcos said the Philippines would be “drawn” into any war over Taiwan. Beijing replied that this was interference.'
        }
      ],
      ll: [124, 22],
      k: 3.2,
      layers: [],
      show: ['base_okinawa', 'ryukyu', 'luzon'],
      hl: { Japan: JPN, Philippines: PHL, Taiwan: TWN, China: '#D8D2C0' },
      dim: true,
      draw: [
        { k: 'pt', p: [123.0, 24.45], c: JPN, r: 4.5, label: { vi: 'Yonaguni', en: 'Yonaguni' }, dy: 9 },
        { k: 'pt', p: [124.2, 24.4], c: JPN, r: 4, label: { vi: 'Ishigaki', en: 'Ishigaki' }, dy: -9 },
        { k: 'pt', p: [125.3, 24.8], c: JPN, r: 4, label: { vi: 'Miyako', en: 'Miyako' } },
        { k: 'pt', p: [122.1, 18.45], c: PHL, r: 4, label: { vi: 'Santa Ana', en: 'Santa Ana' } },
        { k: 'pt', p: [121.65, 18.2], c: PHL, r: 4, label: { vi: 'Lal-lo', en: 'Lal-lo' }, dy: 10 },
        { k: 'pt', p: [121.8, 17.07], c: PHL, r: 4, label: { vi: 'Gamu', en: 'Gamu' } }
      ],
      key: [
        { c: JPN, vi: 'Nhật Bản: đảo có tên lửa', en: 'Japan: islands with missiles' },
        { c: PHL, vi: 'Philippines: địa điểm EDCA', en: 'Philippines: EDCA sites' }
      ],
      src: [19, 20, 21, 22, 23]
    },
    {
      tag: 'outlook',
      title: { vi: 'Mỗi bên lo một điều, eo biển còn căng', en: 'Each side fears something, so the strait stays tense' },
      text: {
        vi: 'Đến 8/11/2026 Trung Quốc chưa công bố cuộc tập trận lớn nào trong năm. Nhưng theo ông Joseph Wu (Hội đồng An ninh Quốc gia Đài Loan), hơn 100 tàu Trung Quốc đang hoạt động ở Tây Thái Bình Dương. Gốc rễ vẫn nguyên: Bắc Kinh coi Đài Loan là lợi ích cốt lõi, Đài Bắc nói đảo phải tự quyết, còn Nhật và Philippines thấy khủng hoảng ở ngay trước cửa. Chưa gỡ được những nỗi lo ấy, eo biển còn căng.',
        en: 'As of 8 Nov 2026 China has announced no large drill this year. But according to Joseph Wu (Taiwan’s National Security Council), more than 100 Chinese ships are operating in the western Pacific. The root is unchanged: Beijing calls Taiwan a core interest, Taipei says the island must decide for itself, and Japan and the Philippines see a crisis right on their doorstep. Until those worries are settled, the strait stays tense.'
      },
      ll: [124, 23.5],
      k: 2.5,
      layers: [],
      show: ['conf_taiwan', 'firstchain', 'taiwanstrait'],
      hl: { Taiwan: TWN, China: CHN, Japan: JPN, Philippines: PHL },
      dim: true,
      draw: [
        { k: 'label', p: [131, 20.5], c: '#4B5563', label: { vi: 'Tây Thái Bình Dương', en: 'Western Pacific' }, dy: 0 }
      ],
      src: [6, 24, 0, 8, 22, 23]
    }
  ]
};
