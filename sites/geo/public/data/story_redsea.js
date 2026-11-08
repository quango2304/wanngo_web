// Explainer: the Red Sea and Bab el-Mandeb, told as one argument in short steps: the only Asia–Europe shortcut, the narrow
// gate it runs through, the cheap lever that gives whoever sits beside it, what that cost, the 2026 turn towards Saudi
// Arabia, who pushes back, and where it stands. Facts from the research pack of 8 Nov 2026; each step names its sources.
// Who holds Mokha, Dhubab, Perim and the strait is contested, so nothing here maps control: it is told in words with a date.
const EG = '#D9A441', YE = '#E24B4A', SA = '#1D9E75', DJ = '#378ADD', ER = '#7F77DD', IR = '#C2410C', GR = '#6B7280';
const FLOW = '#D97706', HOT = '#D9383A';
const CAPE = [[80, 5.2], [70, -5], [55, -20], [40, -31], [28, -35], [18.5, -35.3], [10, -30], [0, -10], [-12, 10], [-18, 25], [-12, 40], [-5, 48.5], [4.1, 51.95]];

export const REDSEA = {
  id: 'redsea',
  icon: '🚢',
  c: '#D97706',
  title: { vi: 'Biển Đỏ & Bab el-Mandeb', en: 'The Red Sea & Bab el-Mandeb' },
  sub: { vi: 'Vì sao một nhóm vũ trang ở Yemen làm tàu khắp thế giới phải đi vòng', en: 'Why one armed group in Yemen can send the world’s ships the long way round' },
  asof: '2026-11-08',
  status: {
    vi: 'Tháng 10/2026 kênh Suez thu 724 triệu USD và đón 1.490 tàu, cao nhất từ khi khủng hoảng bắt đầu (Cơ quan Kênh đào Suez, qua Al-Monitor); theo Lloyd’s List, tải trọng qua Suez tuần 19–25/10 vẫn thấp hơn 36% so với trước khủng hoảng. Đầu tháng 11/2026 giao tranh giữa Houthi và phía Ả Rập Xê Út vẫn tiếp diễn (CFR). Ai đang giữ Mokha, Dhubab, đảo Perim và eo biển vẫn là điều các bên tranh cãi, chưa được kiểm chứng độc lập.',
    en: 'In October 2026 the Suez Canal took $724 million and 1,490 ships, its best month since the crisis began (Suez Canal Authority, via Al-Monitor); according to Lloyd’s List, Suez tonnage in the week of 19–25 October was still 36% below pre-crisis levels. In early November 2026 fighting between the Houthis and the Saudi side was still going on (CFR). Who holds Mokha, Dhubab, Perim island and the strait is still disputed between the parties and not independently confirmed.'
  },
  statusSrc: [18, 19, 20, 16, 17],
  sources: [
    { n: 'UNCTAD, Navigating Troubled Waters (2/2024)', url: 'https://unctad.org/node/44141' },
    { n: 'IMF blog, Red Sea Attacks Disrupt Global Trade (7/3/2024)', url: 'https://www.imf.org/en/blogs/articles/2024/03/07/red-sea-attacks-disrupt-global-trade' },
    { n: 'US EIA, Bab el-Mandeb (27/8/2019)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=41073' },
    { n: 'Wikipedia, Bab-el-Mandeb', url: 'https://en.wikipedia.org/wiki/Bab-el-Mandeb' },
    { n: 'Al Jazeera (13/9/2026)', url: 'https://www.aljazeera.com/economy/2026/9/13/red-sea-nations-watch-as-houthis-seize-bab-al-mandeb-strait' },
    { n: 'PBS NewsHour (10/9/2026)', url: 'https://www.pbs.org/newshour/show/iran-backed-houthis-capture-red-sea-port-putting-more-pressure-on-oil-markets' },
    { n: 'The National (2/5/2024), Abdul-Malik al-Houthi speech', url: 'https://www.thenationalnews.com/news/mena/2024/05/02/yemen-abdul-malik-houthi-attacks-red-sea/' },
    { n: 'Al Jazeera (11/9/2026)', url: 'https://www.aljazeera.com/news/2026/9/11/can-the-houthis-close-the-red-sea-after-seizing-the-yemen-coast' },
    { n: 'Africanews / AP (17/4/2025, doanh thu Suez)', url: 'https://www.africanews.com/2025/04/17/egypts-revenue-from-the-suez-canal-plunged-sharply-in-2024/' },
    { n: 'Datamar News (20/2/2025), Suez Canal Authority chairman Osama Rabie', url: 'https://datamarnews.com/noticias/suez-canal-chief-says-red-sea-crisis-did-not-create-sustainable-route-to-replace-canal/' },
    { n: 'Al Jazeera (13/8/2026)', url: 'https://www.aljazeera.com/news/2026/8/13/will-all-out-war-in-yemen-reignite-as-houthis-escalate-attacks' },
    { n: 'The National (21/7/2026), Saudi Foreign Ministry; Bimco figures', url: 'https://www.thenationalnews.com/news/mena/2026/07/21/saudi-arabia-rejects-houthi-maritime-embargo-threat-warns-of-red-sea-escalation/' },
    { n: 'CNBC (12/8/2026)', url: 'https://www.cnbc.com/2026/08/12/us-iran-war-trump-hormuz-houthi-attack-blockade-.html' },
    { n: 'UN Security Council Resolution 2722 (2024), text summary at unscr.com', url: 'https://unscr.com/en/resolutions/2722/' },
    { n: 'Africanews / AFP (16/9/2026), Saudi-Egyptian call in Cairo', url: 'https://www.africanews.com/amp/2026/09/16/riyadh-and-cairo-call-for-free-and-secure-shipping-in-red-sea/' },
    { n: 'QNA, Saudi Cabinet statement (13/10/2026)', url: 'https://qna.org.qa/en/News-Area/News/2026-10/13/saudi-cabinet-kingdom-wont-allow-its-security-or-freedom-of-navigation-in-the-red-sea-and-bab-el-mandeb-strait-to-be-imperiled' },
    { n: 'The National (5/10/2026)', url: 'https://www.thenationalnews.com/news/gulf/2026/10/05/yemen-government-forces-claim-bab-al-mandeb-gains-as-saudi-coalition-says-100-jets-join-houthi-offensive/' },
    { n: 'Al Jazeera (5/10/2026)', url: 'https://www.aljazeera.com/news/2026/10/5/yemen-forces-claim-to-seize-dhubab-sites-near-bab-al-mandeb-from-houthis' },
    { n: 'Al-Monitor (11/2026, số liệu Cơ quan Kênh đào Suez)', url: 'https://www.al-monitor.com/originals/2026/11/suez-canal-revenue-jumps-94-despite-houthi-red-sea-threats' },
    { n: 'Lloyd’s List Intelligence (29/10/2026)', url: 'https://www.lloydslistintelligence.com/resources/blog/red-sea-brief---29-october-2026' },
    { n: 'CFR Global Conflict Tracker (6/11/2026)', url: 'https://www.cfr.org/global-conflict-tracker/conflict/war-yemen' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Biển Đỏ là đường tắt Á – Âu', en: 'The Red Sea is the Asia–Europe shortcut' },
      text: {
        vi: 'Vì sao một nhóm vũ trang ở Yemen có thể khiến các hãng tàu khắp thế giới phải đi đường vòng? Các nhà phân tích bắt đầu từ bản đồ. Biển Đỏ là dải biển hẹp giữa châu Phi và bán đảo Ả Rập. Đầu bắc có kênh Suez thông ra Địa Trung Hải, đầu nam có eo Bab el-Mandeb thông ra Ấn Độ Dương. Đi lối này, tàu từ Singapore tới Rotterdam đi ngắn hơn 29% so với vòng qua cực nam châu Phi.',
        en: 'Why can one armed group in Yemen make shipping lines around the world take the long way round? Analysts start with the map. The Red Sea is a narrow sea between Africa and the Arabian Peninsula. At its north end the Suez Canal opens to the Mediterranean; at its south end the Bab el-Mandeb strait opens to the Indian Ocean. This way, a ship from Singapore to Rotterdam sails 29% less than around the southern tip of Africa.'
      },
      facts: [
        {
          vi: 'Khoảng 26.000 tàu qua kênh Suez năm 2023; ước tính 22% thương mại container đường biển toàn cầu năm đó dùng kênh này (UNCTAD). IMF gọi Suez là tuyến biển ngắn nhất giữa châu Á và châu Âu.',
          en: 'About 26,000 vessels crossed the Suez Canal in 2023; an estimated 22% of global seaborne container trade used it that year (UNCTAD). The IMF calls Suez the shortest sea route between Asia and Europe.'
        },
        {
          vi: 'Với Ai Cập, phí qua kênh là nguồn ngoại tệ lớn, bằng khoảng 2,3% GDP năm 2023 (UNCTAD).',
          en: 'For Egypt, canal fees are a large source of foreign currency, equal to about 2.3% of GDP in 2023 (UNCTAD).'
        }
      ],
      ll: [45, 8],
      k: 1.7,
      layers: [],
      show: ['suez', 'babelmandeb', 'redsea', 'r_suez', 'capegood'],
      hl: { Egypt: EG, Yemen: YE, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'line', pts: CAPE, c: GR, w: 2.2, dash: [7, 6], label: { vi: 'đường vòng', en: 'the long way' }, lp: [40, -31], dy: 12 }
      ],
      key: [
        { c: GR, vi: 'Đường vòng qua Mũi Hảo Vọng (minh họa)', en: 'The detour round the Cape (illustrative)' }
      ],
      src: [0, 1]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng cửa nam là một cổng rất hẹp', en: 'But the southern exit is a very narrow gate' },
      text: {
        vi: 'Ở cửa nam, eo Bab el-Mandeb kẹp giữa Yemen ở một bên, Djibouti và Eritrea ở bên kia. Đảo Perim nằm giữa, chia eo thành hai lối. Tàu lớn chỉ đi trong hai làn, mỗi làn rộng khoảng 3 km: một làn vào, một làn ra. Chuyên gia an ninh hàng hải Alexandru Cristian Hudisteanu nói eo này còn hẹp hơn eo Hormuz. Mọi con tàu đi đường tắt đều phải qua khe này.',
        en: 'At the southern exit, the Bab el-Mandeb strait is squeezed between Yemen on one side and Djibouti and Eritrea on the other. Perim island sits in the middle and splits it into two channels. Big ships use just two lanes, each about 3 km wide: one in, one out. Maritime security expert Alexandru Cristian Hudisteanu says this strait is even narrower than Hormuz. Every ship taking the shortcut has to pass through this gap.'
      },
      facts: [
        {
          vi: 'Chỗ hẹp nhất khoảng 26–29 km, tùy nguồn: Wikipedia ghi khoảng 26 km, EIA ghi 18 dặm (khoảng 29 km).',
          en: 'At its narrowest it is about 26–29 km wide, depending on the source: Wikipedia gives about 26 km, the EIA 18 miles (about 29 km).'
        },
        {
          vi: 'Năm 2018 có 6,2 triệu thùng dầu mỗi ngày đi qua eo biển (EIA).',
          en: 'In 2018, 6.2 million barrels of oil a day passed through the strait (EIA).'
        }
      ],
      ll: [43.4, 12.7],
      k: 14,
      layers: [],
      show: ['babelmandeb'],
      hl: { Yemen: YE, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'pt', p: [43.42, 12.65], c: '#4B5563', r: 4.5, side: 'l', label: { vi: 'Đảo Perim', en: 'Perim island' } },
        { k: 'line', pts: [[43.1, 12.45], [43.5, 12.45]], c: '#4B5563', w: 2, label: { vi: '26–29 km', en: '26–29 km' }, dy: 12 }
      ],
      src: [2, 3, 4]
    },
    {
      tag: 'move',
      title: { vi: 'Ai đứng cạnh cổng có một đòn bẩy rẻ', en: 'Whoever sits by the gate holds a cheap lever' },
      text: {
        vi: 'Bờ đông của cổng là Yemen, nơi lực lượng Houthi nắm thủ đô Sanaa từ năm 2014. Từ cuối năm 2023 họ tấn công tàu buôn ở Biển Đỏ; năm 2024 lãnh tụ Abdul-Malik al-Houthi nói sẽ đánh đến khi chiến tranh Gaza chấm dứt. Theo nhà phân tích Alam Saleh, họ không cần nắm cả eo biển. Chỉ cần nguy hiểm trông đủ lớn là hãng tàu và hãng bảo hiểm đã tránh xa.',
        en: 'On the gate’s east side lies Yemen, where the Houthi movement has held the capital Sanaa since 2014. From late 2023 they attacked merchant ships in the Red Sea; in 2024 their leader Abdul-Malik al-Houthi said they would keep going until the Gaza war ends. According to analyst Alam Saleh, they do not need to control the whole strait. If the danger looks big enough, shipping lines and insurers stay away.'
      },
      facts: [
        {
          vi: 'Một phát ngôn viên Houthi nói nhóm không cần chiếm eo biển vì tên lửa của họ với tới mọi tàu trong vùng biển này (PBS, 10/9/2026). Đây là lời của phía Houthi.',
          en: 'A Houthi spokesperson said the group does not need to seize the strait because its missiles can reach any ship in this sea (PBS, 10 Sep 2026). This is the Houthi side’s claim.'
        }
      ],
      ll: [42.5, 15.5],
      k: 4.5,
      layers: [],
      show: ['babelmandeb', 'conf_redsea', 'redsea'],
      hl: { Yemen: YE, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'label', p: [39.6, 18.2], c: '#9A3412', label: { vi: 'tàu buôn bị đánh từ cuối 2023', en: 'ships attacked from late 2023' }, dy: 0 }
      ],
      src: [7, 0, 6, 5]
    },
    {
      tag: 'move',
      title: { vi: 'Hãng tàu đi vòng, Ai Cập mất nguồn thu', en: 'Ships go round, Egypt loses income' },
      text: {
        vi: 'Đòn bẩy ấy có tác dụng. Nhiều hãng tàu bỏ Biển Đỏ, đi vòng qua cực nam châu Phi. Đến tháng 2/2024, tải trọng container qua kênh Suez đã giảm 82%. Ai Cập chịu thiệt nặng: năm 2024 kênh chỉ còn khoảng một nửa số tàu, doanh thu tụt mạnh. Chủ tịch Cơ quan Kênh đào Suez Osama Rabie thì nói khủng hoảng không tạo ra tuyến nào bền vững để thay kênh.',
        en: 'The lever worked. Many shipping lines left the Red Sea and sailed around the southern tip of Africa. By February 2024, container tonnage through the Suez Canal had fallen 82%. Egypt took a heavy blow: in 2024 the canal saw only about half as many ships, and its income dropped sharply. Suez Canal Authority chairman Osama Rabie says the crisis created no sustainable route to replace the canal.'
      },
      facts: [
        {
          vi: 'Doanh thu kênh Suez: 10,25 tỷ USD năm 2023, còn 3,991 tỷ USD năm 2024; số tàu năm 2024 là 13.213, so với hơn 26.000 năm 2023 (Cơ quan Kênh đào Suez, qua AP).',
          en: 'Suez Canal revenue: $10.25 billion in 2023, down to $3.991 billion in 2024; ships in 2024 were 13,213, against over 26,000 in 2023 (Suez Canal Authority, via AP).'
        },
        {
          vi: 'Đến 18/2/2024 đã có 621 tàu container đổi sang đường vòng Mũi Hảo Vọng (UNCTAD).',
          en: 'By 18 Feb 2024, 621 container ships had rerouted around the Cape of Good Hope (UNCTAD).'
        }
      ],
      ll: [30, 2],
      k: 1.5,
      layers: [],
      show: ['suez', 'babelmandeb', 'capegood'],
      hl: { Egypt: EG, 'South Africa': GR },
      dim: true,
      draw: [
        { k: 'line', pts: CAPE, c: GR, w: 2.8, flow: true, arrow: true, label: { vi: 'đường vòng', en: 'the detour' }, lp: [28, -35], dy: 12 }
      ],
      key: [{ c: GR, vi: 'Đường vòng qua Mũi Hảo Vọng (minh họa)', en: 'The detour round the Cape (illustrative)' }],
      src: [0, 8, 9]
    },
    {
      tag: 'move',
      title: { vi: '2026: Hormuz đóng, đòn bẩy nhắm vào Riyadh', en: '2026: Hormuz shuts, the lever turns on Riyadh' },
      text: {
        vi: 'Ngày 28/2/2026 Mỹ và Israel mở cuộc chiến với Iran, và eo Hormuz bị đóng trong cuộc chiến. Ả Rập Xê Út chuyển dầu theo đường ống Đông–Tây sang cảng Yanbu bên Biển Đỏ. Theo số liệu Bimco, tháng 3–6 hơn 90% dầu Saudi xuất từ Biển Đỏ đi qua Bab el-Mandeb. Ngày 20/7 Houthi tuyên bố phong tỏa đường biển với Ả Rập Xê Út. Họ nói đó là đáp lại việc Riyadh bao vây Yemen; Riyadh bác bỏ.',
        en: 'On 28 February 2026 the US and Israel began a war on Iran, and the Strait of Hormuz was closed during the war. Saudi Arabia moved oil through its East–West pipeline to the port of Yanbu on the Red Sea. According to Bimco figures, from March to June over 90% of Saudi oil exported from the Red Sea went through Bab el-Mandeb. On 20 July the Houthis declared a naval blockade of Saudi Arabia. They say it answers a Saudi siege of Yemen; Riyadh denies this.'
      },
      facts: [
        {
          vi: 'Ả Rập Xê Út nâng công suất đường ống Đông–Tây từ 5 lên 7 triệu thùng/ngày (Al Jazeera, 11/9/2026).',
          en: 'Saudi Arabia raised its East–West pipeline capacity from 5 to 7 million barrels a day (Al Jazeera, 11 Sep 2026).'
        },
        {
          vi: 'Tháng 9/2026 Houthi tiến dọc bờ biển phía tây Yemen và tuyên bố đóng eo biển với tàu liên quan tới Ả Rập Xê Út (PBS, Al Jazeera).',
          en: 'In September 2026 the Houthis advanced along Yemen’s west coast and declared the strait closed to Saudi-linked ships (PBS, Al Jazeera).'
        }
      ],
      ll: [45, 20],
      k: 2.8,
      layers: [],
      show: ['hormuz', 'pipe_petroline', 'babelmandeb', 'redsea'],
      hl: { Iran: IR, 'Saudi Arabia': SA, Yemen: YE },
      dim: true,
      draw: [
        { k: 'line', pts: [[38.06, 24.09], [37.4, 21.5], [39.6, 18], [42.2, 14.5], [43.4, 12.6]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'dầu Saudi', en: 'Saudi oil' }, lp: [38.8, 19.5], dy: 0 },
        { k: 'pt', p: [38.06, 24.09], c: SA, r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } }
      ],
      key: [
        { c: FLOW, vi: 'Dầu từ Yanbu ra Biển Đỏ (minh họa)', en: 'Oil from Yanbu down the Red Sea (illustrative)' }
      ],
      src: [10, 11, 12, 7, 5]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng nhiều nước cần cổng này mở', en: 'But many countries need this gate open' },
      text: {
        vi: 'Năm 2024 Hội đồng Bảo an Liên Hợp Quốc đã yêu cầu Houthi ngừng tấn công tàu. Ngày 15/9/2026 Ả Rập Xê Út và Ai Cập cùng kêu gọi hàng hải tự do và an toàn ở Biển Đỏ. Từ 5/10 quân chính phủ Yemen, có máy bay của liên quân Ả Rập Xê Út yểm trợ, nói đã giành lại vùng gần Bab el-Mandeb; Houthi bác tin mất cảng Mokha. Nhà phân tích Andreas Krieg cho rằng Houthi khó duy trì một cuộc phong tỏa eo biển.',
        en: 'In 2024 the UN Security Council had already demanded that the Houthis stop attacking ships. On 15 September 2026 Saudi Arabia and Egypt jointly called for free and secure navigation in the Red Sea. From 5 October Yemeni government forces, backed by Saudi coalition aircraft, said they had retaken ground near Bab el-Mandeb; the Houthis deny losing the port of Mokha. Analyst Andreas Krieg argues the Houthis would struggle to sustain a blockade of the strait.'
      },
      facts: [
        {
          vi: 'Ngày 13/10/2026 Nội các Ả Rập Xê Út nói sẽ không để an ninh và tự do hàng hải ở Biển Đỏ và Bab el-Mandeb bị đe dọa (QNA).',
          en: 'On 13 Oct 2026 the Saudi Cabinet said it would not allow security and freedom of navigation in the Red Sea and Bab el-Mandeb to be threatened (QNA).'
        },
        {
          vi: 'Nghị quyết 2722 (2024) của Hội đồng Bảo an được thông qua với 11 phiếu thuận, 4 phiếu trắng.',
          en: 'Security Council Resolution 2722 (2024) passed with 11 votes in favour and 4 abstentions.'
        }
      ],
      ll: [40, 21],
      k: 3,
      layers: [],
      show: ['suez', 'babelmandeb', 'redsea'],
      hl: { 'Saudi Arabia': SA, Egypt: EG, Yemen: YE },
      dim: true,
      key: [
        { c: SA, vi: 'Ả Rập Xê Út', en: 'Saudi Arabia' },
        { c: EG, vi: 'Ai Cập', en: 'Egypt' }
      ],
      src: [13, 14, 15, 16, 17, 7, 5]
    },
    {
      tag: 'outlook',
      title: { vi: 'Tàu về dần, cổng hẹp vẫn còn đó', en: 'Ships drift back, the narrow gate remains' },
      text: {
        vi: 'Tháng 10/2026, kênh Suez có tháng tốt nhất từ khi khủng hoảng bắt đầu. Nhưng theo Lloyd’s List, tải trọng qua Bab el-Mandeb tuần 12–18/10 vẫn thấp hơn 46% so với trước khủng hoảng. Lloyd’s không ghi nhận vụ tấn công nào từ 24/8 nhưng vẫn gọi mối đe dọa là đáng kể. Một nhóm vũ trang ở Yemen làm được điều đó vì tuyến biển ngắn nhất Á – Âu phải qua một cổng hẹp sát bờ Yemen, và không có đường nào ngắn bằng để thay.',
        en: 'October 2026 was the Suez Canal’s best month since the crisis began. But according to Lloyd’s List, tonnage through Bab el-Mandeb in the week of 12–18 October was still 46% below pre-crisis levels. Lloyd’s records no attacks since 24 August, yet still calls the threat substantial. One armed group in Yemen can do this because the shortest sea route between Asia and Europe runs through a narrow gate right off Yemen’s coast, and there is no equally short route to take instead.'
      },
      ll: [40, 18],
      k: 3.2,
      layers: [],
      show: ['babelmandeb', 'suez', 'redsea', 'r_suez'],
      hl: { Egypt: EG, Yemen: YE, 'Saudi Arabia': SA, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'pt', p: [43.42, 12.65], c: HOT, r: 6, label: { vi: 'cổng hẹp', en: 'the narrow gate' } }
      ],
      src: [18, 19, 1, 0, 9]
    }
  ]
};
