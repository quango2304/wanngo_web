// Explainer: Russia, Ukraine and Europe through geography. Facts from the research pack of 8 Nov 2026. By design there is
// no front line and no occupied-area shape on the map: the situation is told in words with a date and a source.
const RU = '#C53030', UA = '#E2B100', BY = '#B07A3A', GR = '#8A8A8A', TR = '#2E7CC0', HUN = '#D97706';
const FLOW = '#D97706';

export const UKRAINE = {
  id: 'ukraine',
  icon: '🌾',
  c: '#C53030',
  title: { vi: 'Nga – Ukraine & châu Âu', en: 'Russia, Ukraine & Europe' },
  sub: { vi: 'Đồng bằng không có tường, NATO và Biển Đen', en: 'A plain with no wall, NATO and the Black Sea' },
  asof: '2026-11-08',
  status: {
    vi: 'Tính đến ngày 8/11/2026 chưa có lệnh ngừng bắn toàn diện. Một lệnh ngừng bắn cục bộ ở thị trấn Oleshky (vùng Kherson, do Nga chiếm) có hiệu lực từ 27/10; thời hạn hiện tại của lệnh này chưa xác nhận được. Cuộc đàm phán Nga – Ukraine – Mỹ tại Abu Dhabi dự kiến vào thứ Ba 10/11; vòng gần nhất là tháng 2/2026. Theo DeepState, Nga chiếm 19,25% lãnh thổ Ukraine tại ngày 1/1/2026; ISW (qua Al Jazeera) nói tốc độ tiến của Nga năm 2026 chậm hơn nhiều so với 2025, và hai bên đưa ra số liệu khác nhau nên không cộng với nhau được. Trong tuần kết thúc ngày 6/11, Nga phóng 2.346 UAV và hơn 80 tên lửa. Ở Biển Đen, hoạt động tại Odesa gần như ngừng. Mọi số liệu là theo từng nguồn vào đúng ngày nêu và có thể đã thay đổi.',
    en: 'As of 8 Nov 2026 there is no general ceasefire. A local truce in the Russian-occupied town of Oleshky (Kherson region) took effect on 27 Oct; its current end date is not confirmed. US-brokered Russia–Ukraine talks are due in Abu Dhabi on Tuesday 10 Nov; the previous round was in February 2026. DeepState put Russian-held land at 19.25% of Ukraine on 1 Jan 2026; ISW (via Al Jazeera) says Russia’s 2026 advance is far slower than in 2025, and the two trackers give figures that cannot be added together. In the week to 6 Nov Russia launched 2,346 drones and more than 80 missiles. On the Black Sea, operations at Odesa have largely stalled. All of this is as reported on those dates and may have changed.'
  },
  statusSrc: [20, 21, 22, 23, 6],
  sources: [
    { n: 'World Bank, diện tích Nga (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/RUS/indicator/AG.SRF.TOTL.K2?format=json' },
    { n: 'NASA Earth Observatory (7/10/2026)', url: 'https://science.nasa.gov/earth/earth-observatory/arctic-sea-ice-shrinks-to-its-2026-minimum/' },
    { n: 'Wikipedia, European Plain', url: 'https://en.wikipedia.org/wiki/European_Plain' },
    { n: 'Wikipedia, French invasion of Russia', url: 'https://en.wikipedia.org/wiki/French_invasion_of_Russia' },
    { n: 'Wikipedia, Operation Barbarossa', url: 'https://en.wikipedia.org/wiki/Operation_Barbarossa' },
    { n: 'World Bank, số liệu Ukraine (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/UKR/indicator/AG.SRF.TOTL.K2?format=json' },
    { n: 'Al Jazeera (3/11/2026, ngũ cốc Biển Đen)', url: 'https://www.aljazeera.com/news/2026/11/3/disruptions-of-black-sea-grain-exports-spike-global-prices' },
    { n: 'Kyiv Independent (Donbas, 20/10/2025)', url: 'https://kyivindependent.com/why-does-russia-want-donbas-6-things-to-know-about-region-ukraine-is-being-pressured-to-give-up' },
    { n: 'NATO, danh sách thành viên', url: 'https://www.nato.int/en/about-us/organization/nato-member-countries' },
    { n: 'The Barents Observer (4/4/2026)', url: 'https://www.thebarentsobserver.com/news/three-years-of-patrolling-natos-eastern-border/446907' },
    { n: 'AP qua Ghanaian Times (4/2023)', url: 'https://ghanaiantimes.com.gh/natos-border-with-russia-doubles-as-finland-joins/amp/' },
    { n: 'RTE, Suwałki Gap (21/9/2025)', url: 'https://www.rte.ie/news/analysis-and-comment/2025/0921/1534438-suwalki-gap-nato-russia' },
    { n: 'Lieber Institute, Montreux (3/3/2022)', url: 'https://lieber.westpoint.edu/closing-turkish-straits-war/' },
    { n: 'Wikipedia, Crimean Bridge', url: 'https://en.wikipedia.org/wiki/Crimean_Bridge' },
    { n: 'Liên Hợp Quốc, nghị quyết 68/262 (27/3/2014)', url: 'https://press.un.org/en/2014/ga11493.doc.htm' },
    { n: 'USDA FAS Kyiv (2/11/2026, bản sao báo cáo)', url: 'https://bichosdecampo.com/wp-content/uploads/2026/11/Grain-and-Feed-Quarterly_Kyiv_Ukraine_UP2026-0029.pdf' },
    { n: 'Kyiv Independent (1/1/2025, khí quá cảnh)', url: 'https://kyivindependent.com/russian-gas-transit-through-ukraine-stop-as-2025-begins/' },
    { n: 'Ukrinform (26/1/2026, EU cấm khí Nga)', url: 'https://www.ukrinform.net/rubric-economy/4084369-eu-approves-phased-ban-on-russian-gas-imports-by-2027.html' },
    { n: 'TASS (1/10/2026, ENTSOG)', url: 'https://tass.com/economy/2195565' },
    { n: 'Euronews (14/10/2026, Nord Stream)', url: 'https://www.euronews.com/2026/10/14/former-ukrainian-military-officer-to-stand-trial-in-germany-over-nord-stream-sabotage' },
    { n: 'Reuters qua Khaleej Times (24/10/2026)', url: 'https://www.khaleejtimes.com/europe/russia-ukraine-hold-peace-talks-nov-2026-ceasefire-oleshky' },
    { n: 'Al Jazeera (7/11/2026)', url: 'https://www.aljazeera.com/news/2026/11/7/russia-launches-missile-attack-on-kyiv-injuring-residents' },
    { n: 'Al Jazeera (6/11/2026, ISW)', url: 'https://www.aljazeera.com/news/2026/11/6/in-ukraine-russias-territorial-gains-dwindle-as-its-diesel-goes-unsold' },
    { n: 'Ukrainska Pravda (1/1/2026, DeepState)', url: 'https://www.pravda.com.ua/eng/news/2026/01/01/8014292/' },
    { n: 'Wikipedia, Geography of Russia', url: 'https://en.wikipedia.org/wiki/Geography_of_Russia' }
  ],
  steps: [
    {
      title: { vi: 'Những tấm khiên của nước Nga', en: 'Russia’s natural shields' },
      text: {
        vi: 'Nước Nga rộng khoảng 17,1 triệu km². Phía bắc là Bắc Băng Dương và băng biển, phía đông là Thái Bình Dương cùng Siberia mênh mông. Phía nam có dãy Kavkaz, còn thảo nguyên Kazakhstan thì mở nhưng ở rất xa vùng lõi của Nga. Cánh cửa rộng, bằng phẳng và đông dân nhất dẫn vào vùng lõi là ở phía tây. Đó là nhận định của nhiều nhà phân tích địa chính trị, không phải một quy luật.',
        en: 'Russia covers about 17.1 million km². The Arctic Ocean and sea ice lie to the north; the Pacific and the vast distances of Siberia lie to the east. The Caucasus guards part of the south, while the Kazakh steppe is open but very far from Russia’s core. The widest, flattest and most populated way into the core is from the west. That is the view of many geopolitical analysts, not a law.'
      },
      facts: [
        {
          vi: 'Băng biển Bắc Cực chỉ còn khoảng 4,6 triệu km² vào mức thấp nhất năm 2026 (12/9/2026, NASA/NSIDC), nên “tấm khiên băng” mỏng đi mỗi mùa hè.',
          en: 'Arctic sea ice fell to about 4.6 million km² at its 2026 minimum (12 Sep 2026, NASA/NSIDC), so the “ice shield” thins each summer.'
        },
        {
          vi: 'Đỉnh Elbrus ở Kavkaz cao 5.642 m, là điểm cao nhất châu Âu; dãy Ural dài khoảng 2.100 km, đỉnh cao nhất 1.894 m (Wikipedia).',
          en: 'Elbrus in the Caucasus is 5,642 m, the highest point in Europe; the Ural range is about 2,100 km long with a highest peak of 1,894 m (Wikipedia).'
        }
      ],
      ll: [65, 58],
      k: 1.3,
      layers: [],
      show: ['arcticice', 'nsr', 'caucasus', 'ural', 'altai', 'karakum', 'taiga'],
      hl: { Russia: RU, Kazakhstan: '#E0B356' },
      dim: true,
      draw: [
        { k: 'line', pts: [[20, 52], [30, 54.5], [37.6, 55.75]], c: RU, w: 3, flow: true, arrow: true, label: { vi: 'cửa mở phía tây', en: 'the open west' }, lp: [27, 54.4], dy: 14 },
        { k: 'line', pts: [[72, 50.5], [62, 51.5], [52, 52]], c: '#C79A2B', w: 2, arrow: true, label: { vi: 'thảo nguyên: mở nhưng xa vùng lõi', en: 'steppe: open but far from the core' }, lp: [62, 51.5], dy: -10 }
      ],
      key: [{ c: RU, vi: 'Đường vào vùng lõi từ phía tây (minh họa)', en: 'Approach to the core from the west (illustrative)' }],
      src: [0, 24, 1]
    },
    {
      title: { vi: 'Một đồng bằng không có bức tường', en: 'A plain with no wall' },
      text: {
        vi: 'Từ miền tây nước Pháp qua Đức và Ba Lan đến tận dãy Ural là một dải đất phẳng rất dài, phần lớn có độ cao dưới khoảng 150 m. Không có dãy núi nào chắn ngang, nên quân đội đi lại dễ theo cả hai hướng. Năm 1812 quân Pháp của Napoleon và năm 1941 quân Đức đều tiến vào nước Nga theo con đường này.',
        en: 'A long flat belt runs from western France through Germany and Poland to the Ural Mountains, mostly below about 150 m. No mountain range cuts across it, so armies can move easily in both directions. In 1812 Napoleon’s French army and in 1941 German armies marched into Russia along this route.'
      },
      facts: [
        {
          vi: 'Đại đồng bằng châu Âu trải từ vịnh Biscay đến Ural, phần lớn thấp hơn 152 m và là vùng địa hình không có núi lớn nhất châu Âu (Wikipedia).',
          en: 'The Great European Plain stretches from the Bay of Biscay to the Urals, mostly below 152 m, and is Europe’s largest mountain-free landform (Wikipedia).'
        },
        {
          vi: 'Quân Napoleon vượt sông Neman ngày 24/6/1812; Barbarossa bắt đầu ngày 22/6/1941 (Wikipedia). Hình vẽ là hướng tiến quân đơn giản hóa.',
          en: 'Napoleon’s army crossed the Neman on 24 Jun 1812; Barbarossa began on 22 Jun 1941 (Wikipedia). The drawing shows simplified axes of advance.'
        }
      ],
      ll: [28, 52],
      k: 2.2,
      layers: [],
      show: ['northplain', 'carpathians', 'ural', 'dnieper', 'volga'],
      hl: { Russia: RU, Poland: '#6B8E23', Germany: GR, France: GR, Belarus: BY, Ukraine: UA },
      dim: true,
      draw: [
        { k: 'line', pts: [[24.0, 54.9], [32.05, 54.78], [34.0, 55.5], [37.62, 55.75]], c: '#7C3AED', w: 2.6, flow: true, arrow: true, label: { vi: '1812', en: '1812' }, lp: [30, 55.6], dy: -2 },
        { k: 'line', pts: [[23.7, 52.1], [27.56, 53.9], [32.05, 54.78], [37.62, 55.75]], c: '#B45309', w: 2.6, flow: true, arrow: true, label: { vi: '1941', en: '1941' }, lp: [27.5, 53.2], dy: 4 },
        { k: 'line', pts: [[23.7, 50.5], [30.52, 50.45], [35.0, 48.5]], c: '#B45309', w: 2.6, flow: true, arrow: true }
      ],
      key: [
        { c: '#7C3AED', vi: '1812 (đơn giản hóa)', en: '1812 (simplified)' },
        { c: '#B45309', vi: '1941 (đơn giản hóa)', en: '1941 (simplified)' }
      ],
      src: [2, 3, 4]
    },
    {
      title: { vi: 'Ukraine nằm ở cửa ngõ của đồng bằng', en: 'Ukraine sits at the gateway of the plain' },
      text: {
        vi: 'Ukraine rộng khoảng 603.550 km², phần lớn là đồng bằng. Dòng Dnipro chia đôi đất nước từ bắc xuống nam, còn dãy Carpath ở phía tây chắn giữa Ukraine với Trung Âu. Hơn một nửa diện tích là đất trồng trọt. Miền Donbas ở phía đông từng là vùng than và thép của cả nước.',
        en: 'Ukraine covers about 603,550 km², mostly flat. The Dnipro cuts it in two from north to south, and the Carpathians in the west separate it from Central Europe. More than half of the land is arable. The Donbas in the east was the country’s coal and steel region.'
      },
      facts: [
        {
          vi: 'Đất trồng trọt chiếm 56,8% diện tích đất (World Bank, 2024); dân số khoảng 38–39 triệu theo ước tính của World Bank (chiến tranh làm mọi con số chỉ mang tính gần đúng).',
          en: 'Arable land is 56.8% of the land area (World Bank, 2024); population is about 38–39 million by World Bank estimates (the war makes every figure rough).'
        },
        {
          vi: 'Trước cuộc xâm lược năm 2022, Ukraine chiếm khoảng 10% lượng lúa mì và 15% lượng ngô xuất khẩu của thế giới (Al Jazeera, 3/11/2026).',
          en: 'Before the 2022 invasion Ukraine supplied about 10% of world wheat exports and 15% of maize (Al Jazeera, 3 Nov 2026).'
        },
        {
          vi: 'Trước năm 2014, Donetsk và Luhansk chiếm khoảng 15,7% GDP và 14,7% dân số Ukraine (Cebr, qua Kyiv Independent).',
          en: 'Before 2014 Donetsk and Luhansk made up about 15.7% of Ukraine’s GDP and 14.7% of its population (Cebr, via Kyiv Independent).'
        }
      ],
      ll: [31.5, 49.0],
      k: 3.2,
      layers: [],
      show: ['dnieper', 'carpathians', 'northplain', 'danube'],
      hl: { Ukraine: UA, Russia: RU, Belarus: BY, Poland: GR, Slovakia: GR, Hungary: GR, Romania: GR, Moldova: GR },
      dim: true,
      draw: [
        { k: 'circle', at: [38.0, 48.2], r: 110, c: '#6B7280', a: 0.15, w: 1.4, label: { vi: 'Donbas: than, thép', en: 'Donbas: coal, steel' }, dy: 20 },
        { k: 'pt', p: [30.73, 46.48], c: UA, r: 4.5, label: { vi: 'Odesa (cảng)', en: 'Odesa (port)' } },
        { k: 'label', p: [32.5, 49.2], c: '#6B5A2B', label: { vi: 'đất đen màu mỡ', en: 'fertile black soil' }, dy: 0 }
      ],
      src: [5, 6, 7]
    },
    {
      title: { vi: 'NATO tiến về phía đông', en: 'NATO moves east' },
      text: {
        vi: 'NATO mở rộng theo từng đợt: 1999, 2004, 2009, 2017, 2020, 2023 và 2024, hiện có 32 thành viên. Khi Phần Lan gia nhập năm 2023, đường biên giới đất liền giữa các nước NATO với Nga dài gần gấp đôi. Kaliningrad là vùng đất của Nga nằm kẹp giữa Ba Lan và Litva; dải đất hẹp giữa Kaliningrad và Belarus (hành lang Suwałki) là tuyến đường bộ trực tiếp nối ba nước Baltic với phần còn lại của NATO.',
        en: 'NATO grew in rounds: 1999, 2004, 2009, 2017, 2020, 2023 and 2024, and now has 32 members. When Finland joined in 2023, the length of NATO members’ land border with Russia nearly doubled. Kaliningrad is a Russian territory wedged between Poland and Lithuania; the narrow strip between Kaliningrad and Belarus (the Suwałki gap) is the direct land link between the three Baltic states and the rest of NATO.'
      },
      facts: [
        {
          vi: 'Các đợt gia nhập: 1999 (Ba Lan, Czechia, Hungary); 2004 (Bulgaria, Estonia, Latvia, Litva, Romania, Slovakia, Slovenia); 2009 (Albania, Croatia); 2017 (Montenegro); 2020 (Bắc Macedonia); 2023 (Phần Lan); 2024 (Thụy Điển) (NATO).',
          en: 'Accession rounds: 1999 (Poland, Czechia, Hungary); 2004 (Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia); 2009 (Albania, Croatia); 2017 (Montenegro); 2020 (North Macedonia); 2023 (Finland); 2024 (Sweden) (NATO).'
        },
        {
          vi: 'Biên giới Phần Lan – Nga dài khoảng 1.340 km, chiếm khoảng một nửa đường biên giới đất liền của NATO với Nga (The Barents Observer, 4/2026).',
          en: 'The Finland–Russia border is about 1,340 km, roughly half of NATO’s land border with Russia (The Barents Observer, Apr 2026).'
        },
        {
          vi: 'Hành lang Suwałki dài khoảng 65 km theo đường thẳng giữa Kaliningrad và Belarus; các nguồn khác ghi 70–80 km (RTE, 9/2025).',
          en: 'The Suwałki gap is about 65 km in a straight line between Kaliningrad and Belarus; other captions say 70–80 km (RTE, Sep 2025).'
        }
      ],
      ll: [22, 57],
      k: 2.5,
      layers: [],
      show: ['suwalki', 'base_kaliningrad', 'balticsea'],
      hl: {
        Poland: '#1D4ED8', Czechia: '#1D4ED8', Hungary: '#1D4ED8',
        Estonia: '#2563EB', Latvia: '#2563EB', Lithuania: '#2563EB', Slovakia: '#2563EB', Slovenia: '#2563EB', Bulgaria: '#2563EB', Romania: '#2563EB',
        Albania: '#3B82F6', Croatia: '#3B82F6', Montenegro: '#60A5FA', Macedonia: '#7DB3F5',
        Finland: '#F59E0B', Sweden: '#FBBF24', Russia: RU, Belarus: BY
      },
      dim: true,
      draw: [
        { k: 'line', pts: [[22.77, 54.36], [23.51, 53.96]], c: RU, w: 4, label: { vi: '~65 km', en: '~65 km' }, dy: 14 },
        { k: 'circle', at: [21.0, 54.7], r: 70, c: RU, a: 0.18, w: 1.4, label: { vi: 'Kaliningrad', en: 'Kaliningrad' }, dy: -6 }
      ],
      key: [
        { c: '#1D4ED8', vi: '1999', en: '1999' },
        { c: '#2563EB', vi: '2004', en: '2004' },
        { c: '#3B82F6', vi: '2009–2020', en: '2009–2020' },
        { c: '#F59E0B', vi: '2023 Phần Lan', en: '2023 Finland' },
        { c: '#FBBF24', vi: '2024 Thụy Điển', en: '2024 Sweden' }
      ],
      src: [8, 9, 10, 11]
    },
    {
      title: { vi: 'Biển Đen: một cái hồ có một cửa ra', en: 'The Black Sea: a lake with one exit' },
      text: {
        vi: 'Biển Đen chỉ thoát ra Địa Trung Hải qua eo Bosphorus và Dardanelles của Thổ Nhĩ Kỳ. Bán đảo Crimea nhô ra giữa biển, và eo Kerch hẹp nối Biển Đen với biển Azov nông, nơi cầu Crimea dài khoảng 19 km bắc qua. Hàng hóa của Ukraine đi qua cảng Odesa, nên các cuộc tấn công vào tàu và cảng ảnh hưởng thẳng tới giá lương thực.',
        en: 'The Black Sea reaches the Mediterranean only through Turkey’s Bosphorus and Dardanelles. The Crimean peninsula juts into the sea, and the narrow Kerch Strait links the Black Sea to the shallow Sea of Azov, with the roughly 19 km Crimean Bridge across it. Ukraine’s goods leave through Odesa, so attacks on ships and ports hit food prices directly.'
      },
      facts: [
        {
          vi: 'Công ước Montreux (1936) cho phép Thổ Nhĩ Kỳ chặn tàu chiến của các nước đang giao tranh; ngày 28/2/2022 Ankara thông báo hạn chế tàu chiến của Nga và Ukraine đi qua (Lieber Institute).',
          en: 'The Montreux Convention (1936) lets Turkey bar warships of belligerent states; on 28 Feb 2022 Ankara announced restrictions on Russian and Ukrainian warships (Lieber Institute).'
        },
        {
          vi: 'Crimea: Đại hội đồng Liên Hợp Quốc (nghị quyết 68/262, 27/3/2014, 100 phiếu thuận, 11 chống, 58 phiếu trắng) kêu gọi các nước không công nhận bất kỳ thay đổi nào về địa vị của Crimea. Nga hiện quản lý bán đảo này.',
          en: 'Crimea: the UN General Assembly (resolution 68/262, 27 Mar 2014, 100 for, 11 against, 58 abstentions) called on states not to recognise any change in Crimea’s status. Russia currently administers the peninsula.'
        },
        {
          vi: 'Tháng 11/2026 các đợt tấn công liên tục làm hoạt động tại Odesa gần như ngừng; USDA hạ dự báo xuất khẩu ngũ cốc của Ukraine niên vụ 2026/27 vì an ninh Biển Đen và hậu cần nội địa xấu đi (Al Jazeera, 3/11; USDA FAS, 2/11).',
          en: 'In November 2026 constant strikes have largely stalled operations at Odesa; the USDA cut Ukraine’s 2026/27 grain export forecast because of the worsening Black Sea security situation and inland logistics (Al Jazeera, 3 Nov; USDA FAS, 2 Nov).'
        }
      ],
      ll: [34, 44.5],
      k: 3.4,
      layers: [],
      show: ['blacksea', 'crimea', 'kerch', 'bosphorus', 'base_sevastopol'],
      hl: { Ukraine: UA, Russia: RU, Turkey: TR, Romania: GR, Bulgaria: GR, Georgia: GR },
      dim: true,
      draw: [
        { k: 'line', pts: [[30.9, 46.3], [31.2, 45.0], [29.8, 43.0], [29.1, 41.2]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'Odesa → Bosphorus (minh họa)', en: 'Odesa → Bosphorus (illustrative)' }, lp: [30.8, 43.6], dy: 0 },
        { k: 'circle', at: [36.55, 45.3], r: 40, c: RU, a: 0.2, w: 1.4, label: { vi: 'Kerch', en: 'Kerch' }, dy: -6 },
        { k: 'circle', at: [29.05, 41.1], r: 35, c: TR, a: 0.2, w: 1.4, label: { vi: 'Montreux 1936', en: 'Montreux 1936' }, dy: 14 },
        { k: 'pt', p: [30.73, 46.48], c: UA, r: 4.5, label: { vi: 'Odesa', en: 'Odesa' }, side: 'l' }
      ],
      src: [12, 14, 13, 6, 15]
    },
    {
      title: { vi: 'Đường ống: từ cầu nối thành ngõ cụt', en: 'Pipelines: from bridge to dead end' },
      text: {
        vi: 'Nhiều năm, khí đốt Nga chảy sang châu Âu qua Ukraine. Ngày 1/1/2025 hợp đồng quá cảnh hết hạn và dòng khí này dừng lại. Hai nhánh Nord Stream dưới biển Baltic bị nổ vào tháng 9/2022. TurkStream dưới Biển Đen là tuyến chính còn lại đưa khí Nga vào châu Âu. EU đã thông qua quy định cấm dần khí Nga.',
        en: 'For years Russian gas flowed to Europe through Ukraine. On 1 Jan 2025 the transit deal expired and that flow stopped. The Nord Stream lines under the Baltic were blasted in September 2022. TurkStream under the Black Sea is now the main remaining pipeline route for Russian gas into Europe. The EU has adopted rules to phase out Russian gas.'
      },
      facts: [
        {
          vi: 'Ukraine dừng quá cảnh khí Nga ngày 1/1/2025 khi hợp đồng 2019 hết hạn; điểm vào cuối cùng là Sudzha (Kyiv Independent).',
          en: 'Ukraine stopped Russian gas transit on 1 Jan 2025 when the 2019 deal expired; the last entry point was Sudzha (Kyiv Independent).'
        },
        {
          vi: 'Ngày 26/1/2026 EU thông qua quy định cấm dần khí Nga: LNG từ đầu năm 2027, khí đường ống từ mùa thu 2027 (Ukrinform).',
          en: 'On 26 Jan 2026 the EU adopted a phased ban on Russian gas: LNG from early 2027, pipeline gas from autumn 2027 (Ukrinform).'
        },
        {
          vi: 'TurkStream có công suất 31,5 tỷ m³/năm; chín tháng đầu năm 2026 có 13,2 tỷ m³ khí chảy sang châu Âu (số liệu ENTSOG, qua TASS).',
          en: 'TurkStream has a capacity of 31.5 bcm a year; 13.2 bcm flowed to Europe in the first nine months of 2026 (ENTSOG data, via TASS).'
        },
        {
          vi: 'Phiên tòa ở Hamburg về vụ phá hoại Nord Stream mở ngày 14/10/2026; vụ nổ tháng 9/2022 làm hỏng 3 trong 4 ống (Euronews).',
          en: 'The Hamburg trial over the Nord Stream sabotage opened on 14 Oct 2026; the September 2022 blasts damaged 3 of the 4 pipes (Euronews).'
        }
      ],
      ll: [25, 50],
      k: 2.1,
      layers: [],
      show: ['pipe_nordstream', 'pipe_turkstream', 'bosphorus'],
      hl: { Russia: RU, Ukraine: UA, Germany: GR, Poland: GR, Hungary: HUN, Slovakia: HUN, Turkey: TR, Bulgaria: GR },
      dim: true,
      draw: [
        { k: 'line', pts: [[35.3, 51.2], [33.5, 50.3], [28.5, 49.5], [25.5, 49.0], [22.3, 48.6]], c: '#6B7280', w: 3, label: { vi: 'quá cảnh Ukraine: ngừng 1/1/2025', en: 'Ukraine transit: ended 1 Jan 2025' }, lp: [28.5, 49.5], dy: 12 },
        { k: 'circle', at: [15.7, 55.5], r: 40, c: '#E24B4A', a: 0.2, w: 1.4, label: { vi: 'Nord Stream, 9/2022', en: 'Nord Stream, 9/2022' }, dy: 16 },
        { k: 'pt', p: [35.27, 51.19], c: '#6B7280', r: 4, label: { vi: 'Sudzha', en: 'Sudzha' }, side: 'l' }
      ],
      src: [16, 17, 18, 19]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Đến 8/11/2026 vẫn chưa có lệnh ngừng bắn toàn diện. Các cuộc đàm phán do Mỹ làm trung gian dự kiến tiếp tục ở Abu Dhabi vào 10/11. Bản đồ không vẽ tiền tuyến: vị trí tiền tuyến thay đổi từng ngày và các nguồn theo dõi đưa ra số liệu khác nhau, nên tình hình chỉ được mô tả bằng lời kèm ngày và nguồn.',
        en: 'As of 8 Nov 2026 there is no general ceasefire. US-brokered talks are due to continue in Abu Dhabi on 10 Nov. The map draws no front line: it changes daily and trackers give different figures, so the situation is described in words with a date and a source.'
      },
      facts: [
        {
          vi: 'Lệnh ngừng bắn cục bộ ở Oleshky (vùng Kherson) có hiệu lực từ 4 giờ sáng 27/10 để đưa viện trợ vào và sơ tán dân (Reuters, 24/10). Thời hạn mới của lệnh chưa xác nhận được.',
          en: 'A local truce in Oleshky (Kherson region) took effect at 04:00 on 27 Oct to let aid in and civilians out (Reuters, 24 Oct). Its current end date is not confirmed.'
        },
        {
          vi: 'Theo DeepState, 116.165 km² (19,25% lãnh thổ Ukraine, tính cả Crimea) bị chiếm tại ngày 1/1/2026. ISW (qua Al Jazeera) nói Nga tiến 117,38 km² trong tháng 1–10/2026, so với 5.304 km² năm 2025; hai bộ số dùng cách đo khác nhau nên không cộng với nhau được.',
          en: 'According to DeepState, 116,165 km² (19.25% of Ukraine, including Crimea) was occupied on 1 Jan 2026. ISW (via Al Jazeera) says Russia gained 117.38 km² in January–October 2026 against 5,304 km² in 2025; the two data sets use different methods and cannot be added together.'
        },
        {
          vi: 'Rạng sáng 7/11 Nga phóng 172 UAV và 36 tên lửa đạn đạo; ông Zelensky nói các cuộc tấn công nhằm vào hạ tầng năng lượng (Al Jazeera, 7/11). Trong bảy ngày Ukraine đánh tám nhà máy lọc dầu của Nga (Al Jazeera, 6/11). Các số liệu này là theo nguồn nêu, chưa được kiểm chứng độc lập.',
          en: 'Overnight into 7 Nov Russia launched 172 drones and 36 ballistic missiles; Zelensky said the strikes hit energy infrastructure (Al Jazeera, 7 Nov). In seven days Ukraine hit eight Russian refineries (Al Jazeera, 6 Nov). These figures are as reported by the sources named and not independently verified.'
        }
      ],
      ll: [32, 48.5],
      k: 2.6,
      layers: [],
      show: ['conf_ukraine'],
      hl: { Ukraine: UA, Russia: RU, Belarus: BY },
      dim: true,
      draw: [
        { k: 'pt', p: [30.52, 50.45], c: UA, r: 4.5, label: { vi: 'Kyiv', en: 'Kyiv' }, side: 'l' },
        { k: 'pt', p: [30.73, 46.48], c: UA, r: 4.5, label: { vi: 'Odesa', en: 'Odesa' }, side: 'l' },
        { k: 'pt', p: [32.72, 46.63], c: '#6B7280', r: 4, label: { vi: 'Oleshky (ngừng bắn cục bộ từ 27/10)', en: 'Oleshky (local truce from 27 Oct)' }, dy: 12 }
      ],
      src: [20, 21, 22, 23]
    }
  ]
};
