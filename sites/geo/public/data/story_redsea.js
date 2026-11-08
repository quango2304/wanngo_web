// Explainer: the Red Sea and Bab el-Mandeb. Facts from the research pack of 8 Nov 2026 (every number is attributed to
// the source that carries it). Who holds Mokha, Dhubab, Perim and the strait is contested, so nothing here maps control.
const EG = '#D9A441', YE = '#E24B4A', SA = '#1D9E75', DJ = '#378ADD', ER = '#7F77DD', SO = '#BA7517', IR = '#C2410C';
const FLOW = '#D97706';
const CAPE = [[80, 5.2], [70, -5], [55, -20], [40, -31], [28, -35], [18.5, -35.3], [10, -30], [0, -10], [-12, 10], [-18, 25], [-12, 40], [-5, 48.5], [4.1, 51.95]];

export const REDSEA = {
  id: 'redsea',
  icon: '🚢',
  c: '#D97706',
  title: { vi: 'Biển Đỏ & Bab el-Mandeb', en: 'The Red Sea & Bab el-Mandeb' },
  sub: { vi: 'Đường tắt Á – Âu và cuộc khủng hoảng hàng hải', en: 'The Asia–Europe shortcut and the shipping crisis' },
  asof: '2026-11-08',
  status: {
    vi: 'Biển Đỏ đang hồi phục một phần nhưng chưa an toàn. Tháng 10/2026 kênh Suez thu 724 triệu USD và đón 1.490 tàu, cao nhất từ khi khủng hoảng bắt đầu (Cơ quan Kênh đào Suez, qua Al-Monitor). Theo Lloyd’s List, lượng hàng qua Suez tuần 19–25/10 vẫn thấp hơn 36% so với trước khủng hoảng, qua Bab el-Mandeb tuần 12–18/10 thấp hơn 46%. Cuộc chiến ở Yemen đang nóng lên, và việc ai kiểm soát Mokha, Dhubab, đảo Perim và eo biển vẫn là điều các bên tranh cãi, chưa được kiểm chứng độc lập.',
    en: 'The Red Sea is partly recovering but not safe. In October 2026 the Suez Canal took $724 million and 1,490 ships, its best month since the crisis began (Suez Canal Authority, via Al-Monitor). According to Lloyd’s List, Suez tonnage in the week of 19–25 October was still 36% below pre-crisis levels, and Bab el-Mandeb tonnage 46% below in the week of 12–18 October. The war in Yemen is heating up, and who controls Mokha, Dhubab, Perim island and the strait is still disputed between the parties, not independently confirmed.'
  },
  statusSrc: [12, 10, 11, 13],
  sources: [
    { n: 'UNCTAD, Navigating Troubled Waters (2/2024)', url: 'https://unctad.org/node/44141' },
    { n: 'US EIA, Bab el-Mandeb (27/8/2019)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=41073' },
    { n: 'Africanews / AP (17/4/2025, doanh thu Suez)', url: 'https://www.africanews.com/2025/04/17/egypts-revenue-from-the-suez-canal-plunged-sharply-in-2024/' },
    { n: 'CNBC (12/8/2026)', url: 'https://www.cnbc.com/2026/08/12/us-iran-war-trump-hormuz-houthi-attack-blockade-.html' },
    { n: 'Al Jazeera (11/9/2026)', url: 'https://www.aljazeera.com/news/2026/9/11/can-the-houthis-close-the-red-sea-after-seizing-the-yemen-coast' },
    { n: 'Al Jazeera (13/9/2026)', url: 'https://www.aljazeera.com/economy/2026/9/13/red-sea-nations-watch-as-houthis-seize-bab-al-mandeb-strait' },
    { n: 'The National (11/9/2026)', url: 'https://www.thenationalnews.com/news/mena/2026/09/11/houthis-seize-yemens-entire-western-coast-and-strategic-red-sea-islands/' },
    { n: 'Al Jazeera (24/8/2026)', url: 'https://www.aljazeera.com/news/2026/8/24/yemens-houthis-report-attack-on-saudi-ship' },
    { n: 'The National (5/10/2026)', url: 'https://www.thenationalnews.com/news/gulf/2026/10/05/yemen-government-forces-claim-bab-al-mandeb-gains-as-saudi-coalition-says-100-jets-join-houthi-offensive/' },
    { n: 'Al Jazeera (5/10/2026)', url: 'https://www.aljazeera.com/news/2026/10/5/yemen-forces-claim-to-seize-dhubab-sites-near-bab-al-mandeb-from-houthis' },
    { n: 'Lloyd’s List Intelligence (29/10/2026)', url: 'https://www.lloydslistintelligence.com/resources/blog/red-sea-brief---29-october-2026' },
    { n: 'MACCUS, theo IMF PortWatch (6/11/2026)', url: 'https://maccus.fr/en/red-sea-ships-sail-around-africa/' },
    { n: 'Al-Monitor (11/2026, số liệu Cơ quan Kênh đào Suez)', url: 'https://www.al-monitor.com/originals/2026/11/suez-canal-revenue-jumps-94-despite-houthi-red-sea-threats' },
    { n: 'CFR Global Conflict Tracker (6/11/2026)', url: 'https://www.cfr.org/global-conflict-tracker/conflict/war-yemen' },
    { n: 'Al Jazeera (13/8/2026)', url: 'https://www.aljazeera.com/news/2026/8/13/will-all-out-war-in-yemen-reignite-as-houthis-escalate-attacks' },
    { n: 'France 24 (11/8/2026)', url: 'https://www.france24.com/en/middle-east/20260811-three-killed-in-suspected-houthi-attack-on-egyptian-ship-in-the-red-sea' },
    { n: 'PBS NewsHour (10/9/2026)', url: 'https://www.pbs.org/newshour/show/iran-backed-houthis-capture-red-sea-port-putting-more-pressure-on-oil-markets' },
    { n: 'Rio Times (16/10/2026, căn cứ Djibouti)', url: 'https://riotimesonline.com/djibouti-military-bases-explained-2026' }
  ],
  steps: [
    {
      title: { vi: 'Đường tắt giữa châu Á và châu Âu', en: 'The shortcut between Asia and Europe' },
      text: {
        vi: 'Biển Đỏ là dải nước hẹp giữa châu Phi và bán đảo Ả Rập. Ở đầu bắc, kênh đào Suez nối nó với Địa Trung Hải; ở đầu nam, eo Bab el-Mandeb nối nó với Ấn Độ Dương. Nhờ vậy tàu từ châu Á sang châu Âu không phải vòng qua cực nam châu Phi.',
        en: 'The Red Sea is a long, narrow sea between Africa and the Arabian Peninsula. At the north end the Suez Canal links it to the Mediterranean; at the south end the Bab el-Mandeb strait links it to the Indian Ocean. Ships from Asia to Europe can skip the trip around southern Africa.'
      },
      facts: [
        {
          vi: 'Khoảng 26.000 tàu đi qua kênh Suez năm 2023; ước tính 22% thương mại container đường biển toàn cầu năm đó dùng kênh này (UNCTAD).',
          en: 'About 26,000 vessels crossed the Suez Canal in 2023; an estimated 22% of global seaborne container trade used it that year (UNCTAD).'
        },
        {
          vi: 'Singapore – Rotterdam qua Suez ngắn hơn 29% so với đi vòng qua Mũi Hảo Vọng; Ras Tanura (Ả Rập Xê Út) – Rotterdam là 10.358 km so với 17.975 km (UNCTAD).',
          en: 'Singapore–Rotterdam is 29% shorter via Suez than around the Cape of Good Hope; Ras Tanura (Saudi Arabia)–Rotterdam is 10,358 km versus 17,975 km (UNCTAD).'
        }
      ],
      ll: [45, 5],
      k: 1.7,
      layers: ['strait', 'route'],
      show: ['suez', 'babelmandeb', 'redsea', 'r_suez', 'capegood'],
      hl: { Egypt: EG, Yemen: YE, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [{ k: 'line', pts: CAPE, c: '#6B7280', w: 2.2, dash: [7, 6], label: { vi: 'Đường vòng Mũi Hảo Vọng', en: 'The long way round the Cape' }, lp: [-12, 10], dy: 0 }],
      key: [{ c: '#6B7280', vi: 'Đường vòng qua Mũi Hảo Vọng (minh họa)', en: 'Detour via the Cape (illustrative)' }],
      src: [0]
    },
    {
      title: { vi: 'Bab el-Mandeb: cánh cổng hẹp', en: 'Bab el-Mandeb: the narrow gate' },
      text: {
        vi: 'Bab el-Mandeb (“Cổng Nước mắt”) chỗ hẹp nhất khoảng 26–29 km, giữa Yemen ở một bên và Djibouti, Eritrea ở bên kia. Đảo Perim chia eo biển thành hai lối. Tàu lớn chỉ đi trong hai làn hẹp, mỗi làn khoảng 3 km, một chiều vào, một chiều ra. Vì hẹp như vậy, một lực lượng nhỏ nắm bờ biển phía Yemen cũng có thể đe dọa cả tuyến.',
        en: 'Bab el-Mandeb (“Gate of Grief”) is about 26–29 km wide at its narrowest, with Yemen on one side and Djibouti and Eritrea on the other. Perim island splits it into two channels. Big ships use just two lanes, each about 3 km wide, one inbound and one outbound. Because it is so narrow, even a small force on Yemen’s coast can threaten the whole route.'
      },
      facts: [
        {
          vi: 'EIA: 18 dặm (khoảng 29 km) ở chỗ hẹp nhất; giao thông chỉ đi trong hai làn, mỗi làn rộng khoảng 2 dặm (khoảng 3,2 km). Năm 2018 có 6,2 triệu thùng dầu mỗi ngày đi qua eo biển.',
          en: 'EIA: 18 miles (about 29 km) at the narrowest point; traffic is limited to two lanes, each about 2 miles (about 3.2 km) wide. In 2018, 6.2 million barrels of oil a day passed through.'
        },
        {
          vi: 'Một phát ngôn viên Houthi nói nhóm không cần chiếm eo biển vì tên lửa của họ với tới mọi tàu trong vùng biển này (PBS, 10/9/2026). Đây là lời của phía Houthi.',
          en: 'A Houthi spokesperson said the group does not need to seize the strait because its missiles can reach any ship in the sea (PBS, 10 Sep 2026). This is the Houthi side’s claim.'
        }
      ],
      ll: [43.4, 12.8],
      k: 16,
      layers: ['strait', 'base'],
      show: ['babelmandeb', 'base_djibouti'],
      hl: { Yemen: YE, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'pt', p: [43.42, 12.65], c: '#4B5563', r: 4.5, label: { vi: 'Đảo Perim', en: 'Perim island' } },
        { k: 'line', pts: [[43.1, 12.45], [43.5, 12.45]], c: '#4B5563', w: 2, label: { vi: '26–29 km', en: '26–29 km' }, dy: 12 }
      ],
      src: [1, 16]
    },
    {
      title: { vi: 'Ai đứng quanh bờ Biển Đỏ?', en: 'Who sits on the shores?' },
      text: {
        vi: 'Phía đông là Yemen, nơi nội chiến chia đôi đất nước. Phía tây là Eritrea, Djibouti và Somalia; Djibouti nhỏ nhưng có căn cứ quân sự của Mỹ, Trung Quốc, Pháp, Nhật và Ý. Phía bắc, cảng Yanbu của Ả Rập Xê Út là điểm cuối đường ống dầu Đông–Tây. Ai Cập giữ cửa phía bắc là kênh Suez.',
        en: 'To the east is Yemen, split by civil war. To the west are Eritrea, Djibouti and Somalia; Djibouti is small but hosts military bases of the US, China, France, Japan and Italy. To the north, Saudi Arabia’s port of Yanbu is where its East–West oil pipeline ends. Egypt holds the northern door, the Suez Canal.'
      },
      facts: [
        {
          vi: 'Camp Lemonnier của Mỹ tại Djibouti có khoảng 4.000 nhân sự (số liệu Hải quân Mỹ, qua Rio Times); căn cứ Trung Quốc mở từ tháng 8/2017.',
          en: 'The US Camp Lemonnier in Djibouti supports about 4,000 personnel (US Navy figure, via Rio Times); China’s base opened in August 2017.'
        },
        {
          vi: 'Ả Rập Xê Út nâng công suất đường ống Đông–Tây từ 5 lên 7 triệu thùng/ngày (Al Jazeera, 11/9/2026). Houthi nắm Sanaa từ năm 2014.',
          en: 'Saudi Arabia raised its East–West pipeline capacity from 5 to 7 million barrels a day (Al Jazeera, 11 Sep 2026). The Houthis have held Sanaa since 2014.'
        }
      ],
      ll: [42, 15],
      k: 4,
      layers: ['base', 'pipeline', 'conflict'],
      show: ['base_djibouti', 'pipe_petroline', 'redsea', 'conf_redsea'],
      hl: { Yemen: YE, Eritrea: ER, Djibouti: DJ, Somalia: SO, 'Saudi Arabia': SA, Egypt: EG },
      dim: true,
      draw: [
        { k: 'pt', p: [38.06, 24.09], c: SA, r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } },
        { k: 'pt', p: [42.95, 14.8], c: YE, r: 4.5, label: { vi: 'Hodeidah', en: 'Hodeidah' } },
        { k: 'pt', p: [43.15, 11.59], c: DJ, r: 4.5, label: { vi: 'Djibouti', en: 'Djibouti' } },
        { k: 'pt', p: [32.3, 31.26], c: EG, r: 4.5, label: { vi: 'Port Said', en: 'Port Said' } },
        { k: 'pt', p: [32.55, 29.97], c: EG, r: 4.5, label: { vi: 'Suez', en: 'Suez' }, dy: 0 }
      ],
      key: [
        { c: YE, vi: 'Yemen', en: 'Yemen' },
        { c: SA, vi: 'Ả Rập Xê Út', en: 'Saudi Arabia' },
        { c: EG, vi: 'Ai Cập', en: 'Egypt' },
        { c: DJ, vi: 'Djibouti', en: 'Djibouti' },
        { c: ER, vi: 'Eritrea', en: 'Eritrea' }
      ],
      src: [17, 6]
    },
    {
      title: { vi: '2023–2025: đi vòng qua Mũi Hảo Vọng', en: '2023–2025: the long way round' },
      text: {
        vi: 'Từ cuối năm 2023, lực lượng Houthi ở Yemen tấn công tàu buôn ở Biển Đỏ; họ nói đó là để ủng hộ Gaza. Nhiều hãng tàu bỏ tuyến này và đi vòng qua cực nam châu Phi, quãng đường dài thêm hàng nghìn hải lý. Kênh Suez mất khoảng một nửa lượng tàu và hơn 60% doanh thu, một cú đau cho kinh tế Ai Cập.',
        en: 'From late 2023 Houthi forces in Yemen attacked merchant ships in the Red Sea, saying it was in support of Gaza. Many lines left the route and sailed around southern Africa, thousands of nautical miles longer. The Suez Canal lost about half its ships and over 60% of its income, a heavy blow to Egypt.'
      },
      facts: [
        {
          vi: 'Tháng 2/2024: tải trọng container qua Suez giảm 82% so với trước; đến 18/2/2024 đã có 621 tàu container đổi sang đường vòng Mũi Hảo Vọng (UNCTAD).',
          en: 'By February 2024 container tonnage crossing Suez had fallen 82%; by 18 Feb 2024, 621 container ships had rerouted around the Cape (UNCTAD).'
        },
        {
          vi: 'Doanh thu kênh Suez: 10,25 tỷ USD (năm 2023) xuống 3,991 tỷ USD (năm 2024); số tàu 2024 là 13.213, so với hơn 26.000 năm 2023 (Cơ quan Kênh đào Suez, qua AP).',
          en: 'Suez Canal revenue: $10.25 billion (2023) down to $3.991 billion (2024); ships in 2024 were 13,213 versus over 26,000 in 2023 (Suez Canal Authority, via AP).'
        }
      ],
      ll: [30, 0],
      k: 1.5,
      layers: ['route', 'strait'],
      show: ['suez', 'babelmandeb', 'capegood', 'r_suez', 'r_cape'],
      hl: { Egypt: EG, 'South Africa': '#6B7280' },
      dim: true,
      draw: [
        { k: 'line', pts: CAPE, c: '#6B7280', w: 2.8, flow: true, arrow: true, label: { vi: 'Đường vòng', en: 'The detour' }, lp: [28, -35], dy: 12 }
      ],
      src: [0, 2]
    },
    {
      title: { vi: '2026: chiến tranh Iran dồn dầu về Biển Đỏ', en: '2026: the Iran war pushes oil toward the Red Sea' },
      text: {
        vi: 'Ngày 28/2/2026 Mỹ và Israel mở chiến dịch đánh Iran, và eo Hormuz bị đóng trong cuộc chiến. Ả Rập Xê Út đưa dầu qua đường ống Đông–Tây sang Yanbu bên Biển Đỏ rồi cho tàu chạy qua Bab el-Mandeb, nên Biển Đỏ càng quan trọng. Từ tháng 7, Houthi quay sang nhắm vào tàu và lãnh thổ Ả Rập Xê Út.',
        en: 'On 28 February 2026 the US and Israel began a war on Iran, and the Strait of Hormuz was closed during it. Saudi Arabia pushed oil through its East–West pipeline to Yanbu on the Red Sea and out via Bab el-Mandeb, which made the Red Sea matter even more. From July the Houthis turned on Saudi ships and territory.'
      },
      facts: [
        {
          vi: '20/7/2026: Houthi tuyên bố phong tỏa đường biển với Ả Rập Xê Út. 11/8: tàu Tihamah (của Ai Cập) bị đánh gần đảo Perim; Bộ Giao thông Yemen cho biết 4 thủy thủ chết (France 24, CNBC). 24/8: Houthi nói đã tấn công tàu chở dầu Amzan ngoài khơi Yanbu (Al Jazeera).',
          en: '20 Jul 2026: the Houthis declared a naval blockade of Saudi Arabia. 11 Aug: the Egyptian-owned Tihamah was hit near Perim; Yemen’s transport ministry said 4 crew were killed (France 24, CNBC). 24 Aug: the Houthis said they attacked the tanker Amzan off Yanbu (Al Jazeera).'
        },
        {
          vi: 'Tháng 9/2026: Houthi tiến dọc bờ biển phía tây Yemen và tuyên bố đóng eo biển với tàu liên quan tới Ả Rập Xê Út (Al Jazeera, PBS, 10–13/9). Từ 5/10 chính phủ Yemen nói đã giành lại một phần. Các bên tranh cãi ai giữ Mokha, Dhubab và Perim.',
          en: 'September 2026: the Houthis advanced along Yemen’s west coast and declared the strait closed to Saudi-linked ships (Al Jazeera, PBS, 10–13 Sep). From 5 Oct the Yemeni government said it had retaken some of it. The parties dispute who holds Mokha, Dhubab and Perim.'
        }
      ],
      ll: [42, 18],
      k: 3,
      layers: ['strait', 'pipeline', 'conflict'],
      show: ['hormuz', 'pipe_petroline', 'babelmandeb', 'conf_iran', 'conf_redsea', 'redsea'],
      hl: { Iran: IR, 'Saudi Arabia': SA, Yemen: YE, Egypt: EG },
      dim: true,
      draw: [
        { k: 'line', pts: [[38.06, 24.09], [37.4, 21.5], [39.6, 18], [42.2, 14.5], [43.4, 12.6]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'Dầu Saudi ra Biển Đỏ', en: 'Saudi oil via the Red Sea' }, lp: [38.8, 19.5], dy: 0 },
        { k: 'pt', p: [38.06, 24.09], c: SA, r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } },
        { k: 'pt', p: [43.25, 13.32], c: '#4B5563', r: 4, label: { vi: 'Mokha', en: 'Mokha' }, dy: 0 },
        { k: 'pt', p: [43.42, 12.65], c: '#4B5563', r: 4, label: { vi: 'Perim', en: 'Perim' }, dy: 0 }
      ],
      key: [
        { c: FLOW, vi: 'Dầu từ Yanbu ra Biển Đỏ (minh họa)', en: 'Oil from Yanbu down the Red Sea (illustrative)' },
        { c: '#4B5563', vi: 'Vị trí địa danh, không phải vùng kiểm soát', en: 'Place positions, not zones of control' }
      ],
      src: [14, 15, 3, 7, 4, 16, 8]
    },
    {
      title: { vi: 'Đầu tháng 11/2026: tàu quay lại, nguy cơ vẫn còn', en: 'Early November 2026: ships return, the threat remains' },
      text: {
        vi: 'Dù căng thẳng, tàu đang quay lại Biển Đỏ: tháng 10/2026 kênh Suez có tháng cao nhất kể từ khi khủng hoảng bắt đầu. Nhưng lưu lượng vẫn thấp hơn trước khủng hoảng, và qua Bab el-Mandeb thấp hơn nhiều. Chiến sự ở Yemen vẫn tiếp diễn.',
        en: 'Despite the tension, ships are coming back to the Red Sea: in October 2026 the Suez Canal had its best month since the crisis began. But traffic is still below pre-crisis levels, and through Bab el-Mandeb it is much lower. Fighting in Yemen continues.'
      },
      facts: [
        {
          vi: 'Cơ quan Kênh đào Suez: tháng 10/2026 thu 724 triệu USD (tăng 94% so với 373 triệu USD tháng 10/2025) và đón 1.490 tàu (so với 1.128) (qua Al-Monitor; ngày đăng chính xác chưa xác nhận).',
          en: 'Suez Canal Authority: October 2026 revenue $724 million (up 94% from $373 million in October 2025) and 1,490 ships (versus 1,128) (via Al-Monitor; exact publication day not confirmed).'
        },
        {
          vi: 'Lloyd’s List (tàu trên 10.000 dwt): tải trọng qua Suez tuần 19–25/10 thấp hơn 36% so với trước khủng hoảng; qua Bab el-Mandeb tuần 12–18/10 thấp hơn 46%.',
          en: 'Lloyd’s List (ships above 10,000 dwt): Suez tonnage in the week of 19–25 Oct was 36% below pre-crisis; Bab el-Mandeb in the week of 12–18 Oct was 46% below.'
        },
        {
          vi: 'IMF PortWatch (qua MACCUS, 26/9–25/10, mọi loại tàu): số tàu vòng qua Mũi Hảo Vọng vẫn nhiều hơn khoảng 76% so với mức trung bình đầu năm 2023. Hai bộ số khác phương pháp nên không so trực tiếp với nhau.',
          en: 'IMF PortWatch (via MACCUS, 26 Sep–25 Oct, all ship types): ships going around the Cape are still about 76% above the early-2023 average. The two data sets use different methods, so do not compare them directly.'
        }
      ],
      ll: [40, 18],
      k: 3.2,
      layers: ['strait', 'route', 'conflict'],
      show: ['babelmandeb', 'suez', 'redsea', 'conf_redsea', 'r_suez'],
      hl: { Egypt: EG, Yemen: YE, 'Saudi Arabia': SA, Djibouti: DJ, Eritrea: ER },
      dim: true,
      draw: [
        { k: 'pt', p: [43.25, 13.32], c: '#4B5563', r: 4, label: { vi: 'Mokha (đang tranh cãi)', en: 'Mokha (disputed)' }, dy: 0 },
        { k: 'pt', p: [43.2, 13.0], c: '#4B5563', r: 4, label: { vi: 'Dhubab (đang tranh cãi)', en: 'Dhubab (disputed)' }, dy: 0 },
        { k: 'pt', p: [43.42, 12.65], c: '#4B5563', r: 4, label: { vi: 'Perim (đang tranh cãi)', en: 'Perim (disputed)' }, dy: 0 }
      ],
      src: [12, 10, 11, 13]
    }
  ]
};
