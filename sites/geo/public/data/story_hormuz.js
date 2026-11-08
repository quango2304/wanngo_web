// Explainer: Iran and the Strait of Hormuz. Facts from the research pack of 8 Nov 2026. Claims by a party are
// attributed to it; temporary situations (blockade, danger zones) are told in text, never drawn as zones.
const IR = '#E24B4A', OM = '#378ADD', UAE = '#B8860B', SA = '#D97706', GULF = '#E7A09E', BLU = '#2B6CB0';
const CNC = '#E24B4A', IND = '#D97706', JPN = '#378ADD', KOR = '#1D9E75';
const FLOW = '#D97706';

export const HORMUZ = {
  id: 'hormuz',
  icon: '🛢️',
  c: '#E24B4A',
  title: { vi: 'Iran & eo Hormuz', en: 'Iran & the Strait of Hormuz' },
  sub: { vi: 'Cửa ngõ dầu mỏ của thế giới và cuộc chiến 2026', en: 'The world’s oil gateway and the 2026 war' },
  asof: '2026-11-08',
  status: {
    vi: 'Cuộc chiến giữa Mỹ, Israel và Iran, bắt đầu từ 28/2/2026, vẫn chưa kết thúc bằng thỏa thuận. Mỹ phong tỏa các cảng Iran (áp lại từ tháng 7 sau khi dỡ ngày 18/6); Iran coi eo biển là không an toàn với tàu không phối hợp với Tehran. Từ 4 đến 8/11, phía Iran nói nhiều tàu chở dầu trúng thủy lôi hoặc bốc cháy, các cơ quan hàng hải chưa xác nhận hết. Qatar đang làm trung gian; Oman nói đang cùng Iran tìm một cơ chế chung cho lưu lượng tàu. Ở hồ sơ hạt nhân, thanh sát viên IAEA chưa vào được Fordow, Natanz và Isfahan nên chưa kiểm chứng được khoảng 440 kg uranium làm giàu cao.',
    en: 'The war between the US, Israel and Iran that began on 28 Feb 2026 has not ended in a deal. The US is blockading Iranian ports (reinstated in July after being lifted on 18 June); Iran calls the strait unsafe for ships that do not coordinate with Tehran. Between 4 and 8 Nov the Iranian side said several tankers hit mines or caught fire, which maritime authorities have not fully confirmed. Qatar is mediating; Oman says it is working with Iran on a joint mechanism for ship traffic. On the nuclear file, IAEA inspectors still lack access to Fordow, Natanz and Isfahan, so about 440 kg of highly enriched uranium cannot be verified.'
  },
  statusSrc: [10, 11, 12, 13, 5],
  sources: [
    { n: 'US EIA (16/6/2025)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' },
    { n: 'US EIA, World Oil Transit Chokepoints (3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/' },
    { n: 'Maritime Executive (20/6/2025)', url: 'https://maritime-executive.com/article/straits-of-hormuz-traffic-separation-scheme-keeps-within-omani-waters' },
    { n: 'Al Jazeera (14/9/2026, đường ống Đông–Tây)', url: 'https://www.aljazeera.com/news/2026/9/14/why-saudi-arabias-east-west-pipeline-matters-for-global-oil' },
    { n: 'Al Jazeera (17/9/2026, đường vòng của Saudi)', url: 'https://www.aljazeera.com/news/2026/9/17/from-yanbu-to-sohar-tracking-saudi-arabias-alternative-oil-routes' },
    { n: 'US EIA, Short-Term Energy Outlook (6/10/2026)', url: 'https://www.eia.gov/outlooks/steo/report/global_oil.php' },
    { n: 'Reuters factbox (14/1/2026, căn cứ Mỹ)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/01/14/where-are-the-main-us-military-bases-in-the-middle-east' },
    { n: 'Al Jazeera (8/7/2026)', url: 'https://www.aljazeera.com/news/2026/7/8/why-have-us-iran-strikes-resumed-and-what-does-it-mean-for-peace-talks' },
    { n: 'US EIA, Short-Term Energy Outlook (8/2026)', url: 'https://www.eia.gov/outlooks/steo/archives/aug26.pdf' },
    { n: 'Al Jazeera (6/11/2026, Kpler)', url: 'https://www.aljazeera.com/news/2026/11/6/why-is-iran-exempting-india-china-qatar-iraq-from-hormuz-restrictions' },
    { n: 'CBS News (6/11/2026)', url: 'https://www.cbsnews.com/live-updates/iran-war-us-trump-midterms-strait-of-hormuz/' },
    { n: 'ABC News Australia (8/11/2026)', url: 'https://www.abc.net.au/news/2026-11-08/iran-strait-of-hormuz-update-explosions-talks/107360730' },
    { n: 'Gulf News / AFP (8/11/2026)', url: 'https://gulfnews.com/world/mena/iran-says-3-tankers-caught-fire-in-hormuz-1.500740005' },
    { n: 'La Voce di New York (29/10/2026, IAEA)', url: 'https://lavocedinewyork.com/en/un/2026/10/29/iaea-cannot-verify-status-of-irans-440kg-uranium-stockpile/' },
    { n: 'Al Jazeera (13/8/2026)', url: 'https://www.aljazeera.com/news/2026/8/13/will-all-out-war-in-yemen-reignite-as-houthis-escalate-attacks' },
    { n: 'The National (8/12/2025, GCC)', url: 'https://www.thenationalnews.com/news/gulf/2025/12/08/gcc-condemns-iranian-fallacies-about-sovereignty-of-three-occupied-islands' },
    { n: 'IRNA (2/9/2025, Bộ Ngoại giao Iran)', url: 'https://www.globalsecurity.org/military/library/news/2025/09/mil-250902-irna01.htm' },
    { n: 'CRS In Focus IF11583 (13/10/2026)', url: 'https://www.everycrsreport.com/files/2026-10-13_IF11583_566d687f3b907d9274c2ac3be54f8b5f3cd54984.html' }
  ],
  steps: [
    {
      title: { vi: 'Một cửa ra duy nhất', en: 'One way out' },
      text: {
        vi: 'Vịnh Ba Tư giống một cái hồ lớn, và eo Hormuz là cửa duy nhất để ra đại dương. Chỗ hẹp nhất rộng khoảng 33 km (con số thường được trích dẫn). Tàu chở dầu đi theo hai làn, mỗi làn rộng chừng 3–4 km, và ở chỗ hẹp nhất cả hai làn nằm trong vùng biển của Oman.',
        en: 'The Persian Gulf is like a big lake, and the Strait of Hormuz is its only door to the ocean. At its narrowest it is about 33 km wide (a widely quoted figure). Tankers use two lanes, each about 3–4 km wide, and at the narrowest point both lanes lie in Omani waters.'
      },
      facts: [
        {
          vi: 'Năm 2024, trung bình 20 triệu thùng dầu mỗi ngày đi qua Hormuz, khoảng 20% lượng dầu thế giới tiêu thụ; khoảng 1/5 thương mại khí hóa lỏng (LNG) toàn cầu cũng đi qua, chủ yếu từ Qatar (EIA).',
          en: 'In 2024 an average of 20 million barrels of oil a day passed through Hormuz, about 20% of world petroleum consumption; about a fifth of global LNG trade also passed, mainly from Qatar (EIA).'
        },
        {
          vi: 'Nửa đầu năm 2025: 20,9 triệu thùng/ngày, khoảng một phần tư lượng dầu vận chuyển đường biển (EIA).',
          en: 'First half of 2025: 20.9 million barrels a day, about one quarter of seaborne oil (EIA).'
        }
      ],
      ll: [56.4, 26.5],
      k: 7,
      layers: ['strait', 'route'],
      show: ['hormuz', 'r_gulf_asia', 'persiangulf'],
      hl: { Iran: IR, Oman: OM, 'United Arab Emirates': '#9CA3AF' },
      dim: true,
      draw: [
        { k: 'line', pts: [[52, 27.0], [56.4, 26.5], [58.5, 24.8], [62, 22.5]], c: FLOW, w: 4, flow: true, arrow: true, label: { vi: '~1/5 dầu thế giới', en: '~1/5 of world oil' }, lp: [59.3, 24.2], dy: 12 },
        { k: 'line', pts: [[56.36, 26.85], [56.5, 26.53]], c: '#4B5563', w: 2, label: { vi: 'khoảng 33 km', en: 'about 33 km' }, lp: [56.43, 26.69], dy: -12 }
      ],
      src: [0, 1, 2]
    },
    {
      title: { vi: 'Bờ bắc là của Iran', en: 'The north shore is Iran’s' },
      text: {
        vi: 'Iran nằm ngay bờ bắc của cái cửa này. Sau bờ biển là dãy núi Zagros, chạy dọc phía tây và tây nam đất nước, che chắn Iran khỏi đồng bằng Iraq. Gần luồng tàu có các đảo của Iran như Qeshm. Ba đảo Abu Musa, Tunb Lớn và Tunb Nhỏ do Iran kiểm soát từ năm 1971, nhưng UAE và Hội đồng Hợp tác vùng Vịnh (GCC) nói đó là đảo của UAE, còn Iran nói đó là phần lãnh thổ không thể tách rời của mình.',
        en: 'Iran sits on the north shore of this door. Behind its coast rise the Zagros mountains, running along the west and southwest of the country and shielding Iran from the plains of Iraq. Iranian islands such as Qeshm lie close to the shipping lanes. Iran has controlled Abu Musa and the Greater and Lesser Tunbs since 1971, but the UAE and the Gulf Cooperation Council (GCC) say they belong to the UAE, while Iran says they are inseparable parts of its territory.'
      },
      facts: [
        {
          vi: 'Đường vòng của riêng Iran rất nhỏ: đường ống Goreh–Jask chỉ có công suất thực tế khoảng 0,3 triệu thùng/ngày (EIA).',
          en: 'Iran’s own detour is tiny: the Goreh–Jask pipeline has an effective capacity of only about 0.3 million barrels a day (EIA).'
        }
      ],
      ll: [54.5, 28.5],
      k: 3,
      layers: ['mountain', 'strait'],
      show: ['zagros', 'hormuz', 'persiangulf'],
      hl: { Iran: IR, Iraq: '#9CA3AF', Oman: '#C7D2E3', 'United Arab Emirates': '#D9D2B5' },
      dim: true,
      draw: [
        { k: 'circle', at: [55.1, 26.1], r: 45, c: '#7F77DD', a: 0.14, dash: [5, 4], w: 1.6, label: { vi: 'Abu Musa & 2 đảo Tunb: Iran kiểm soát, UAE tranh chấp', en: 'Abu Musa & 2 Tunbs: held by Iran, claimed by UAE' }, dy: 16 },
        { k: 'pt', p: [56.27, 27.18], c: IR, r: 4.5, label: { vi: 'Bandar Abbas', en: 'Bandar Abbas' } },
        { k: 'pt', p: [57.77, 25.65], c: IR, r: 4.5, label: { vi: 'Jask', en: 'Jask' } },
        { k: 'line', pts: [[55.3, 26.75], [56.3, 26.95]], c: '#4B5563', w: 5, label: { vi: 'Đảo Qeshm', en: 'Qeshm island' }, dy: -10 }
      ],
      src: [1, 15, 16]
    },
    {
      title: { vi: 'Khi cửa hẹp lại, đường vòng ở đâu?', en: 'When the door narrows, where is the detour?' },
      text: {
        vi: 'Ả Rập Xê Út và UAE có đường ống đưa dầu đi vòng qua Hormuz. Đường ống Đông–Tây của Ả Rập Xê Út dài khoảng 1.200 km, từ vùng mỏ ven Vịnh sang cảng Yanbu ở Biển Đỏ. UAE có đường ống từ Habshan ra Fujairah, ngoài Vịnh Oman. Nhưng hai tuyến này chỉ chở được một phần: Iraq, Kuwait, Qatar và Bahrain gần như không có đường vòng.',
        en: 'Saudi Arabia and the UAE have pipelines that carry oil around Hormuz. The Saudi East–West pipeline is about 1,200 km long and runs from the oilfields near the Gulf to the Red Sea port of Yanbu. The UAE has a pipeline from Habshan to Fujairah, outside the Gulf of Oman. But these two routes carry only part of the oil: Iraq, Kuwait, Qatar and Bahrain have almost no detour.'
      },
      facts: [
        {
          vi: 'Công suất đường ống Đông–Tây được nêu khác nhau: 5 triệu thùng/ngày theo EIA, tối đa 7 triệu theo Al Jazeera. Tuyến Habshan–Fujairah: 1,5–1,8 triệu thùng/ngày tùy nguồn. EIA ước tính hai tuyến cộng lại cho khoảng 4,7 triệu thùng/ngày đường vòng (nửa đầu 2025), so với khoảng 20 triệu thùng/ngày qua Hormuz.',
          en: 'The East–West pipeline capacity is given differently: 5 million barrels a day per the EIA, up to 7 million per Al Jazeera. The Habshan–Fujairah line: 1.5–1.8 million depending on the source. The EIA estimates the two lines together could provide about 4.7 million barrels a day of bypass capacity (first half of 2025), against about 20 million passing Hormuz.'
        },
        {
          vi: 'Đầu tháng 9/2026 đường ống Đông–Tây bị tấn công bằng drone và ngừng hoạt động; dòng chảy từng phần nối lại khoảng 22/9 (EIA).',
          en: 'In early September 2026 the East–West pipeline was hit by drones and shut; partial flows resumed around 22 September (EIA).'
        }
      ],
      ll: [49, 24.5],
      k: 2.6,
      layers: ['pipeline', 'strait', 'desert'],
      show: ['pipe_petroline', 'pipe_habshan', 'field_ghawar', 'hormuz', 'babelmandeb', 'arabian'],
      hl: { 'Saudi Arabia': SA, 'United Arab Emirates': UAE, Iraq: GULF, Kuwait: GULF, Qatar: GULF, Bahrain: GULF, Oman: '#C7D2E3' },
      dim: true,
      draw: [
        { k: 'line', pts: [[38.06, 24.08], [36.5, 22.5], [38.5, 20], [43.4, 12.6]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'Đường vòng Biển Đỏ', en: 'Red Sea detour' }, lp: [37.6, 21.3], dy: 0 },
        { k: 'pt', p: [38.06, 24.08], c: SA, r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } },
        { k: 'pt', p: [56.36, 25.12], c: UAE, r: 4.5, label: { vi: 'Fujairah', en: 'Fujairah' } }
      ],
      key: [
        { c: SA, vi: 'Ả Rập Xê Út', en: 'Saudi Arabia' },
        { c: UAE, vi: 'UAE', en: 'UAE' },
        { c: GULF, vi: 'Gần như không có đường vòng', en: 'Almost no detour' }
      ],
      src: [1, 3, 4, 5]
    },
    {
      title: { vi: 'Ai canh cái cửa này?', en: 'Who guards this door?' },
      text: {
        vi: 'Mỹ đặt Hạm đội 5 ở Bahrain, ngay trong Vịnh Ba Tư, và căn cứ không quân Al Udeid ở Qatar, nơi có bộ chỉ huy tiền phương của CENTCOM. Iran không có hải quân lớn bằng, nhưng có bờ biển dài để đặt tên lửa, thủy lôi và nhiều xuồng nhỏ; chỉ cần vài quả thủy lôi cũng đủ làm tàu dừng lại. Năm 2026 cả hai cách đánh đều được dùng.',
        en: 'The US keeps its Fifth Fleet in Bahrain, inside the Persian Gulf, and the Al Udeid air base in Qatar, forward headquarters of CENTCOM. Iran has no navy as big, but it has a long coast to base missiles, mines and many small boats; a few mines are enough to stop ships. In 2026 both approaches were used.'
      },
      facts: [
        {
          vi: 'Al Udeid có khoảng 8.000–10.000 quân (AP nói khoảng 8.000 năm 2022, Reuters khoảng 10.000). Mỹ còn có Al Dhafra (UAE) và các căn cứ ở Kuwait (Reuters, 14/1/2026).',
          en: 'Al Udeid hosts roughly 8,000–10,000 troops (AP said about 8,000 in 2022, Reuters about 10,000). The US also has Al Dhafra (UAE) and bases in Kuwait (Reuters, 14 Jan 2026).'
        },
        {
          vi: '8/7/2026: Bộ Chỉ huy Trung tâm Mỹ (CENTCOM) nói đã đánh hơn 80 mục tiêu ở Iran, gồm hơn 60 xuồng nhỏ của IRGC; IRGC nói đã đánh 85 mục tiêu của Mỹ ở Bahrain và Kuwait (đây là lời của IRGC) (Al Jazeera).',
          en: '8 Jul 2026: CENTCOM said it struck over 80 targets in Iran, including more than 60 IRGC small boats; the IRGC said it struck 85 US targets in Bahrain and Kuwait (an IRGC claim) (Al Jazeera).'
        },
        {
          vi: 'Thủy lôi còn gây tranh cãi: CENTCOM nói (tháng 10/2026) đã dọn hết, còn Iran nói tàu trúng thủy lôi trong 4–8/11 (chưa được xác nhận) (CBS, Gulf News).',
          en: 'Mines are contested: CENTCOM said (October 2026) all were cleared, while Iran said tankers hit mines on 4–8 Nov (unconfirmed) (CBS, Gulf News).'
        }
      ],
      ll: [53, 26.3],
      k: 3.5,
      layers: ['base', 'strait'],
      show: ['base_bahrain', 'base_aludeid', 'hormuz'],
      hl: { Iran: IR, Bahrain: BLU, Qatar: BLU, Kuwait: BLU, 'United Arab Emirates': '#7BA6D9' },
      dim: true,
      draw: [
        { k: 'pt', p: [54.55, 24.25], c: BLU, r: 4.5, label: { vi: 'Al Dhafra', en: 'Al Dhafra' } },
        { k: 'pt', p: [47.9, 29.1], c: BLU, r: 4.5, label: { vi: 'Kuwait (căn cứ Mỹ)', en: 'Kuwait (US bases)' } },
        { k: 'pt', p: [56.27, 27.18], c: IR, r: 4.5, label: { vi: 'Bandar Abbas', en: 'Bandar Abbas' } },
        { k: 'pt', p: [57.77, 25.65], c: IR, r: 4.5, label: { vi: 'Jask', en: 'Jask' } }
      ],
      key: [
        { c: BLU, vi: 'Nước chủ nhà các căn cứ Mỹ', en: 'Hosts of US bases' },
        { c: IR, vi: 'Bờ Iran: nơi có thể đặt tên lửa, thủy lôi, xuồng nhỏ', en: 'Iran’s coast: where missiles, mines and small boats can be based' }
      ],
      src: [6, 7, 10, 12]
    },
    {
      title: { vi: 'Ai cần dòng chảy này?', en: 'Who depends on the flow?' },
      text: {
        vi: 'Gần 9/10 lượng dầu thô qua Hormuz đi sang châu Á, chủ yếu tới bốn nước: Trung Quốc, Ấn Độ, Nhật Bản và Hàn Quốc. Mỹ chỉ nhập khoảng 7% dầu thô của mình qua eo này nên ít phụ thuộc trực tiếp hơn. Dầu được bán trên một thị trường chung, nên khi eo biển nghẽn, giá biến động ở khắp nơi.',
        en: 'Almost nine-tenths of the crude oil passing Hormuz goes to Asia, mostly to four countries: China, India, Japan and South Korea. The US imports only about 7% of its crude through the strait, so it depends less directly. Oil is sold in one world market, so when the strait chokes, prices move everywhere.'
      },
      facts: [
        {
          vi: 'Nửa đầu 2025: 89% dầu thô và condensate qua Hormuz đi sang châu Á; Trung Quốc, Ấn Độ, Nhật Bản, Hàn Quốc chiếm 74% (EIA). Năm 2024 các con số là 84% và 69%.',
          en: 'First half of 2025: 89% of crude and condensate through Hormuz went to Asia; China, India, Japan and South Korea took 74% (EIA). For 2024 the figures were 84% and 69%.'
        },
        {
          vi: 'Tháng 10/2026, theo Kpler (qua Al Jazeera), 10,23 triệu thùng/ngày dầu thô vùng Vịnh qua eo biển, khoảng 42% đi Trung Quốc và 13% đi Ấn Độ. Một quan chức Iran nói tàu của Ấn Độ, Trung Quốc, Iraq và Qatar được đi tự do (đây là lời của phía Iran).',
          en: 'In October 2026, per Kpler (via Al Jazeera), 10.23 million barrels a day of Gulf crude moved through the strait, about 42% to China and 13% to India. An Iranian official said ships of India, China, Iraq and Qatar pass freely (an Iranian claim).'
        },
        {
          vi: 'Theo EIA, lượng dầu qua Hormuz là 4,9 triệu thùng/ngày trong quý 2/2026, so với 21,6 triệu trong quý 4/2025. Các số khác nhau về tháng và cách đo nên không cộng với số của Kpler.',
          en: 'The EIA puts flows through Hormuz at 4.9 million barrels a day in the second quarter of 2026 against 21.6 million in the fourth quarter of 2025. The figures differ in month and method, so do not combine them with Kpler’s.'
        }
      ],
      ll: [95, 18],
      k: 1.8,
      layers: ['route', 'strait'],
      show: ['hormuz', 'r_gulf_asia', 'malacca'],
      hl: { China: CNC, India: IND, Japan: JPN, 'South Korea': KOR },
      dim: true,
      draw: [
        { k: 'line', pts: [[56.4, 26.5], [60, 23.5], [66, 19], [72.8, 19.0]], c: IND, w: 3, flow: true, arrow: true },
        { k: 'line', pts: [[56.4, 26.5], [60, 23.5], [66, 17], [72, 8], [80, 5.2], [96, 5.5], [104, 1.3], [110, 10], [117, 20], [121.5, 31.0]], c: CNC, w: 6, flow: true, arrow: true, label: { vi: 'Gần 9/10 dầu thô đi châu Á (độ dày minh họa)', en: '~9/10 of the crude goes to Asia (thickness illustrative)' }, lp: [100, 4], dy: 14 },
        { k: 'line', pts: [[123, 29], [129.5, 34.2]], c: KOR, w: 2.4, flow: true, arrow: true },
        { k: 'line', pts: [[123, 29], [131, 32], [139.5, 34.5]], c: JPN, w: 2.4, flow: true, arrow: true }
      ],
      key: [
        { c: CNC, vi: 'Trung Quốc', en: 'China' },
        { c: IND, vi: 'Ấn Độ', en: 'India' },
        { c: KOR, vi: 'Hàn Quốc', en: 'South Korea' },
        { c: JPN, vi: 'Nhật Bản', en: 'Japan' }
      ],
      src: [1, 0, 9, 8]
    },
    {
      title: { vi: '2025–2026: từ hồ sơ hạt nhân đến cuộc chiến Hormuz', en: '2025–2026: from the nuclear file to the Hormuz war' },
      text: {
        vi: 'Tháng 6/2025 Israel rồi Mỹ đánh vào các cơ sở hạt nhân của Iran. Từ 28/2/2026 Mỹ và Israel mở màn một cuộc chiến mới với Iran; Iran hạn chế việc đi lại ở eo Hormuz, và Mỹ phong tỏa các cảng của Iran. Một bản ghi nhớ ngày 17/6 đổ vỡ ngày 8/7. Đến 8/11/2026 vẫn chưa có thỏa thuận, và tàu chở dầu tiếp tục bị tấn công hoặc cháy trong vùng.',
        en: 'In June 2025 Israel and then the US struck Iran’s nuclear sites. From 28 Feb 2026 the US and Israel began a new war with Iran; Iran restricted passage through the Strait of Hormuz, and the US blockaded Iranian ports. A memorandum of 17 June collapsed on 8 July. As of 8 Nov 2026 there is no deal, and tankers continue to be hit or set on fire in the area.'
      },
      facts: [
        {
          vi: '27–28/9/2025: các nghị quyết trừng phạt của Liên Hợp Quốc đối với Iran được áp lại (cơ chế “snapback”); Iran, Trung Quốc và Nga phản đối tính hợp pháp (CRS).',
          en: '27–28 Sep 2025: UN sanctions on Iran were reimposed (the “snapback” mechanism); Iran, China and Russia dispute the legality (CRS).'
        },
        {
          vi: '17/6/2026: ký bản ghi nhớ 14 điểm giữa Mỹ và Iran; 7–8/7: CENTCOM nói Iran tấn công ba tàu chở dầu, Mỹ đánh hơn 80 mục tiêu và bản ghi nhớ chấm dứt (Al Jazeera). Phong tỏa cảng Iran của Mỹ được áp lại trong tháng 7 (Al Jazeera, 6/11).',
          en: '17 Jun 2026: a 14-point memorandum was signed between the US and Iran; 7–8 Jul: CENTCOM said Iran attacked three tankers, the US struck over 80 targets and the memorandum ended (Al Jazeera). The US blockade of Iranian ports was reimposed in July (Al Jazeera, 6 Nov).'
        },
        {
          vi: '4–8/11: phía Iran nói nhiều tàu chở dầu trúng thủy lôi hoặc cháy, chưa được các cơ quan hàng hải xác nhận hết; Mỹ nói đã tiến hành thêm vài đợt đánh hạn chế. Qatar làm trung gian; Oman nói đang cùng Iran xây một cơ chế chung cho lưu lượng tàu (CBS, ABC, Gulf News).',
          en: '4–8 Nov: the Iranian side said several tankers hit mines or caught fire, not fully confirmed by maritime authorities; the US said it carried out more limited strikes. Qatar is mediating; Oman says it is working with Iran on a joint mechanism for ship traffic (CBS, ABC, Gulf News).'
        },
        {
          vi: '27/10/2026: IAEA báo cáo Hội đồng Bảo an rằng chưa thể kiểm chứng khoảng 440 kg uranium làm giàu cao của Iran và chưa được vào Fordow, Natanz, Isfahan (La Voce di New York).',
          en: '27 Oct 2026: the IAEA told the UN Security Council it cannot verify about 440 kg of Iran’s highly enriched uranium and has no access to Fordow, Natanz and Isfahan (La Voce di New York).'
        }
      ],
      ll: [50, 29],
      k: 2.2,
      layers: ['conflict', 'strait'],
      show: ['conf_iran', 'hormuz', 'conf_redsea', 'babelmandeb'],
      hl: { Iran: IR, Israel: OM },
      dim: true,
      draw: [
        { k: 'pt', p: [56.27, 27.18], c: IR, r: 4, label: { vi: 'Bandar Abbas', en: 'Bandar Abbas' } },
        { k: 'pt', p: [57.77, 25.65], c: IR, r: 4, label: { vi: 'Jask', en: 'Jask' } }
      ],
      src: [17, 7, 10, 11, 12, 13, 14]
    }
  ]
};
