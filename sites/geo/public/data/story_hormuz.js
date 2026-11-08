// Explainer: Iran and the Strait of Hormuz, told as one argument in short steps: the world needs the oil that passes one
// narrow door, there is almost no way around it, Iran sits on its north shore, the door is guarded and Iran needs it too,
// what Iran and the US did in 2026, and who sets the rules now. Facts from the research pack of 8 Nov 2026; each step
// names its sources. Claims by a party are attributed to it; the war, the blockade and the attacks on ships are told in
// words with a date, never drawn as zones. Map shapes are illustrative.
const IR = '#E24B4A', OM = '#C7D2E3', SA = '#D97706', UAE = '#B8860B', GULF = '#E7A09E', BLU = '#2B6CB0', MED = '#1D9E75';
const CNC = '#E24B4A', IND = '#D97706', JPN = '#378ADD', KOR = '#1D9E75', ISR = '#378ADD';
const FLOW = '#D97706';

export const HORMUZ = {
  id: 'hormuz',
  icon: '🛢️',
  c: '#E24B4A',
  title: { vi: 'Iran & eo Hormuz', en: 'Iran & the Strait of Hormuz' },
  sub: { vi: 'Vì sao một eo biển hẹp quan trọng với cả thế giới và với Iran', en: 'Why one narrow strait matters to the world and to Iran' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026, cuộc chiến bắt đầu từ 28/2 vẫn chưa kết thúc bằng thỏa thuận, và Mỹ vẫn phong tỏa các cảng của Iran. Từ 4 đến 8/11, phía Iran nói nhiều tàu chở dầu trúng thủy lôi hoặc bốc cháy, điều các cơ quan hàng hải chưa xác nhận hết. Thanh sát viên IAEA chưa vào được Fordow, Natanz và Isfahan, nên chưa kiểm chứng được khoảng 440 kg uranium làm giàu cao của Iran.',
    en: 'As of 8 Nov 2026 the war that began on 28 Feb has not ended in a deal, and the US is still blockading Iran’s ports. Between 4 and 8 Nov the Iranian side said several tankers hit mines or caught fire, which maritime authorities have not fully confirmed. IAEA inspectors still have no access to Fordow, Natanz and Isfahan, so about 440 kg of Iran’s highly enriched uranium cannot be verified.'
  },
  statusSrc: [15, 12, 17, 10],
  sources: [
    { n: 'US EIA (16/6/2025)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' },
    { n: 'US EIA, World Oil Transit Chokepoints (3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/' },
    { n: 'IEA, Strait of Hormuz Factsheet (2/2026)', url: 'https://iea.blob.core.windows.net/assets/c8248eba-8689-46d9-ae4b-b858b59c0f1c/StraitofHormuz2026-Factsheet.pdf' },
    { n: 'Maritime Executive (20/6/2025)', url: 'https://maritime-executive.com/article/straits-of-hormuz-traffic-separation-scheme-keeps-within-omani-waters' },
    { n: 'The National (8/12/2025, GCC)', url: 'https://www.thenationalnews.com/news/gulf/2025/12/08/gcc-condemns-iranian-fallacies-about-sovereignty-of-three-occupied-islands' },
    { n: 'IRNA (2/9/2025, Bộ Ngoại giao Iran)', url: 'https://www.globalsecurity.org/military/library/news/2025/09/mil-250902-irna01.htm' },
    { n: 'Reuters factbox (14/1/2026, căn cứ Mỹ)', url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/01/14/where-are-the-main-us-military-bases-in-the-middle-east' },
    { n: 'Can Kasapoglu, Hudson Institute (24/4/2026)', url: 'https://www.hudson.org/national-security-defense/strait-hormuz-under-pressure-asymmetric-naval-war-signs-elite-can-kasapoglu' },
    { n: 'Dawn / Al Jazeera (28/5/2026, Iran\'s UN envoy Iravani)', url: 'https://www.dawn.com/news/amp/2003579' },
    { n: 'CRS In Focus IF11583 (13/10/2026)', url: 'https://www.everycrsreport.com/files/2026-10-13_IF11583_566d687f3b907d9274c2ac3be54f8b5f3cd54984.html' },
    { n: 'La Voce di New York (29/10/2026, IAEA)', url: 'https://lavocedinewyork.com/en/un/2026/10/29/iaea-cannot-verify-status-of-irans-440kg-uranium-stockpile/' },
    { n: 'US EIA, Short-Term Energy Outlook (8/2026)', url: 'https://www.eia.gov/outlooks/steo/archives/aug26.pdf' },
    { n: 'Al Jazeera (6/11/2026, Kpler)', url: 'https://www.aljazeera.com/news/2026/11/6/why-is-iran-exempting-india-china-qatar-iraq-from-hormuz-restrictions' },
    { n: 'Al Jazeera (8/7/2026)', url: 'https://www.aljazeera.com/news/2026/7/8/why-have-us-iran-strikes-resumed-and-what-does-it-mean-for-peace-talks' },
    { n: 'Al Jazeera (5/5/2026, Hegseth, Rubio, IRGC)', url: 'https://www.aljazeera.com/news/2026/5/5/centcom-says-project-freedom-has-just-2' },
    { n: 'CBS News (6/11/2026)', url: 'https://www.cbsnews.com/live-updates/iran-war-us-trump-midterms-strait-of-hormuz/' },
    { n: 'ABC News Australia (8/11/2026)', url: 'https://www.abc.net.au/news/2026-11-08/iran-strait-of-hormuz-update-explosions-talks/107360730' },
    { n: 'Gulf News / AFP (8/11/2026)', url: 'https://gulfnews.com/world/mena/iran-says-3-tankers-caught-fire-in-hormuz-1.500740005' },
    { n: 'Dawn (13/6/2026, Araghchi via Tasnim)', url: 'https://www.dawn.com/news/amp/2007540' },
    { n: 'Yeni Safak (26/9/2026, Araghchi at UNGA)', url: 'https://en.yenisafak.com/world/iran-says-hormuz-can-reopen-in-7-days-if-us-accepts-plan-3723763' },
    { n: 'Reuters via The Star (28/8/2026, Rezaei)', url: 'https://www.thestar.com.my/news/world/2026/08/28/iran-sets-conditions-for-reopening-strait-of-hormuz-top-security-official-rezaei-says' },
    { n: 'Xinhua via The Star (29/4/2026, GCC leaders, Jeddah)', url: 'https://www.thestar.com.my/news/world/2026/04/29/1st-ld-writethru-gcc-leaders-reject-iran039s-measures-to-close-strait-of-hormuz' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Thế giới cần dầu đi qua Hormuz', en: 'The world needs the oil that passes Hormuz' },
      text: {
        vi: 'Vì sao eo Hormuz, một lối biển hẹp giữa Iran và Oman, lại quan trọng với cả thế giới, và với chính Iran? Hãy bắt đầu từ dầu. Năm 2024, mỗi ngày trung bình 20 triệu thùng dầu đi qua đây, khoảng 1/5 lượng dầu cả thế giới dùng. Phần lớn chạy sang châu Á. Dầu bán trên một thị trường chung, nên dòng này nghẽn thì giá ở đâu cũng biến động.',
        en: 'Why does Hormuz, a narrow channel between Iran and Oman, matter so much to the whole world, and to Iran itself? Start with oil. In 2024 an average of 20 million barrels a day passed through it, about a fifth of all the oil the world uses. Most of it heads to Asia. Oil is sold in one world market, so when this flow chokes, prices move everywhere.'
      },
      facts: [
        {
          vi: 'Nửa đầu năm 2025, 89% dầu thô qua Hormuz đi sang châu Á; riêng Trung Quốc, Ấn Độ, Nhật Bản và Hàn Quốc chiếm 74% (EIA).',
          en: 'In the first half of 2025, 89% of the crude passing Hormuz went to Asia; China, India, Japan and South Korea alone took 74% (EIA).'
        },
        {
          vi: 'Khoảng 1/5 lượng khí hóa lỏng (LNG) buôn bán trên thế giới năm 2024 cũng đi qua đây, chủ yếu từ Qatar (EIA).',
          en: 'About a fifth of world LNG trade in 2024 also passed through here, mainly from Qatar (EIA).'
        }
      ],
      ll: [90, 18],
      k: 1.8,
      layers: ['route', 'strait'],
      show: ['hormuz', 'r_gulf_asia', 'malacca'],
      hl: { China: CNC, India: IND, Japan: JPN, 'South Korea': KOR },
      dim: true,
      draw: [
        { k: 'line', pts: [[56.4, 26.5], [60, 23.5], [66, 19], [72.8, 19.0]], c: IND, w: 3, flow: true, arrow: true },
        { k: 'line', pts: [[56.4, 26.5], [60, 23.5], [66, 17], [72, 8], [80, 5.2], [96, 5.5], [104, 1.3], [110, 10], [117, 20], [121.5, 31.0]], c: CNC, w: 5, flow: true, arrow: true, label: { vi: 'phần lớn đi châu Á', en: 'mostly to Asia' }, lp: [88, 5], dy: 14 },
        { k: 'line', pts: [[123, 29], [129.5, 34.2]], c: KOR, w: 2.4, flow: true, arrow: true },
        { k: 'line', pts: [[123, 29], [131, 32], [139.5, 34.5]], c: JPN, w: 2.4, flow: true, arrow: true }
      ],
      key: [
        { c: CNC, vi: 'Trung Quốc', en: 'China' },
        { c: IND, vi: 'Ấn Độ', en: 'India' },
        { c: KOR, vi: 'Hàn Quốc', en: 'South Korea' },
        { c: JPN, vi: 'Nhật Bản', en: 'Japan' }
      ],
      src: [0, 1]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng dầu ấy chỉ có một cửa ra', en: 'But that oil has only one way out' },
      text: {
        vi: 'Vịnh Ba Tư giống một cái hồ lớn, và Hormuz là cửa duy nhất ra đại dương. Ở chỗ hẹp nhất, cả hai làn tàu đều nằm trong vùng biển của Oman. Còn đi vòng thì rất khó. Chỉ Ả Rập Xê Út và UAE có đường ống chở được một phần dầu ra ngoài. Iraq, Kuwait, Qatar và Bahrain gần như không có lối nào khác, và khí LNG của Qatar cũng phải qua đây.',
        en: 'The Persian Gulf is like a big lake, and Hormuz is its only door to the ocean. At the narrowest point, both shipping lanes lie in Omani waters. Going around is very hard. Only Saudi Arabia and the UAE have pipelines that can carry part of their oil out. Iraq, Kuwait, Qatar and Bahrain have almost no other way, and Qatar’s LNG must pass here too.'
      },
      facts: [
        {
          vi: 'EIA ước tính hai đường ống của Ả Rập Xê Út (sang cảng Yanbu bên Biển Đỏ) và UAE (ra Fujairah) có thể chở vòng khoảng 4,7 triệu thùng/ngày (nửa đầu 2025), so với khoảng 20 triệu thùng/ngày qua Hormuz.',
          en: 'The EIA estimates that the Saudi pipeline (to Yanbu on the Red Sea) and the UAE one (to Fujairah) could carry about 4.7 million barrels a day around the strait (first half of 2025), against about 20 million passing Hormuz.'
        }
      ],
      ll: [49, 24.5],
      k: 2.6,
      layers: ['pipeline', 'strait'],
      show: ['pipe_petroline', 'pipe_habshan', 'hormuz', 'persiangulf'],
      hl: { 'Saudi Arabia': SA, 'United Arab Emirates': UAE, Iraq: GULF, Kuwait: GULF, Qatar: GULF, Bahrain: GULF, Oman: OM },
      dim: true,
      draw: [
        { k: 'line', pts: [[52, 27.0], [56.4, 26.5], [58.5, 24.8], [62, 22.5]], c: FLOW, w: 4, flow: true, arrow: true, label: { vi: 'cửa duy nhất', en: 'the only door' }, lp: [59.3, 24.2], dy: 12 },
        { k: 'pt', p: [38.06, 24.08], c: SA, r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } },
        { k: 'pt', p: [56.36, 25.12], c: UAE, r: 4.5, label: { vi: 'Fujairah', en: 'Fujairah' } }
      ],
      key: [
        { c: SA, vi: 'Ả Rập Xê Út: có đường ống vòng', en: 'Saudi Arabia: has a bypass pipeline' },
        { c: UAE, vi: 'UAE: có đường ống vòng', en: 'UAE: has a bypass pipeline' },
        { c: GULF, vi: 'Gần như không có đường vòng', en: 'Almost no detour' }
      ],
      src: [1, 3, 2]
    },
    {
      tag: 'move',
      title: { vi: 'Và Iran ngồi ngay bên cửa', en: 'And Iran sits right beside the door' },
      text: {
        vi: 'Eo biển nằm giữa Oman ở bờ nam và Iran ở bờ bắc. Phía Iran có cảng Bandar Abbas và những hòn đảo như Qeshm, ngay trước lối tàu đi. Mọi con tàu ra vào Vịnh đều chạy qua trước mặt Iran. Tehran coi đây là chuyện an ninh của mình. Đại sứ Iran tại Liên Hợp Quốc nói Iran không thể để eo biển thành hành lang cho hành động thù địch nhắm vào Iran.',
        en: 'The strait lies between Oman on the south shore and Iran on the north. On Iran’s side are the port of Bandar Abbas and islands such as Qeshm, right in front of the shipping lanes. Every ship entering or leaving the Gulf passes in front of Iran. Tehran treats this as a matter of its own security. Iran’s UN ambassador says Iran cannot let the strait become a corridor for hostile action against it.'
      },
      facts: [
        {
          vi: 'Ba đảo Abu Musa, Tunb Lớn và Tunb Nhỏ do Iran kiểm soát từ năm 1971. UAE và Hội đồng Hợp tác vùng Vịnh (GCC) nói đó là đảo của UAE; Iran nói đó là lãnh thổ không thể tách rời của mình.',
          en: 'Iran has controlled Abu Musa and the Greater and Lesser Tunbs since 1971. The UAE and the Gulf Cooperation Council (GCC) say they belong to the UAE; Iran says they are inseparable parts of its territory.'
        }
      ],
      ll: [56, 26.6],
      k: 6,
      layers: ['strait'],
      show: ['hormuz', 'persiangulf'],
      hl: { Iran: IR, Oman: OM, 'United Arab Emirates': '#D9D2B5' },
      dim: true,
      draw: [
        { k: 'pt', p: [56.27, 27.18], c: IR, r: 4.5, label: { vi: 'Bandar Abbas', en: 'Bandar Abbas' } },
        { k: 'line', pts: [[55.3, 26.75], [56.3, 26.95]], c: '#4B5563', w: 5, label: { vi: 'Qeshm', en: 'Qeshm' }, dy: -10 },
        { k: 'circle', at: [55.1, 26.1], r: 45, c: '#7F77DD', a: 0.14, dash: [5, 4], w: 1.6, label: { vi: 'Abu Musa, 2 đảo Tunb', en: 'Abu Musa, 2 Tunbs' }, dy: 16 }
      ],
      key: [
        { c: IR, vi: 'Iran: bờ bắc của cửa', en: 'Iran: the north shore' },
        { c: '#7F77DD', vi: 'Đảo Iran giữ, UAE đòi', en: 'Islands held by Iran, claimed by the UAE' }
      ],
      src: [1, 8, 4, 5]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng cửa có người canh, Iran cũng cần nó', en: 'But the door is guarded, and Iran needs it too' },
      text: {
        vi: 'Ngồi bên cửa không có nghĩa là một mình giữ cửa. Mỹ đặt Hạm đội 5 ở Bahrain, ngay trong Vịnh, và có căn cứ không quân Al Udeid ở Qatar, sở chỉ huy tiền phương của CENTCOM. Iran cũng cần cái cửa ấy. Theo IEA, năm 2025 Iran xuất khoảng 2,4 triệu thùng dầu mỗi ngày qua eo biển. Đường vòng của riêng Iran thì rất nhỏ.',
        en: 'Sitting beside the door does not mean guarding it alone. The US keeps its Fifth Fleet in Bahrain, inside the Gulf, and the Al Udeid air base in Qatar, CENTCOM’s forward headquarters. Iran needs the door too. According to the IEA, in 2025 Iran exported about 2.4 million barrels of oil a day through the strait. Iran’s own way around it is very small.'
      },
      facts: [
        {
          vi: 'Đường ống Goreh–Jask của Iran chỉ có công suất thực tế khoảng 0,3 triệu thùng/ngày (EIA).',
          en: 'Iran’s Goreh–Jask pipeline has an effective capacity of only about 0.3 million barrels a day (EIA).'
        },
        {
          vi: 'Mỹ còn có căn cứ Al Dhafra ở UAE và các căn cứ ở Kuwait (Reuters, 14/1/2026).',
          en: 'The US also has Al Dhafra in the UAE and bases in Kuwait (Reuters, 14 Jan 2026).'
        }
      ],
      ll: [53, 26.3],
      k: 3.5,
      layers: ['base', 'strait'],
      show: ['base_bahrain', 'base_aludeid', 'hormuz'],
      hl: { Iran: IR, Bahrain: BLU, Qatar: BLU, Kuwait: '#7BA6D9', 'United Arab Emirates': '#7BA6D9' },
      dim: true,
      draw: [
        { k: 'pt', p: [57.77, 25.65], c: IR, r: 4.5, label: { vi: 'Jask', en: 'Jask' } }
      ],
      key: [
        { c: BLU, vi: 'Nước có căn cứ Mỹ', en: 'Hosts of US bases' },
        { c: IR, vi: 'Iran', en: 'Iran' }
      ],
      src: [6, 2, 1]
    },
    {
      tag: 'move',
      title: { vi: 'Năm 2026, Iran siết cửa', en: 'In 2026, Iran tightens the door' },
      text: {
        vi: 'Theo nhà phân tích Can Kasapoğlu (Viện Hudson), Iran không cần thắng trên biển, chỉ cần làm cho việc đi qua tốn kém và bấp bênh. Năm 2026 điều đó xảy ra. Từ 28/2, Mỹ và Israel mở một cuộc chiến với Iran, và Iran siết việc đi qua eo biển. Theo EIA, quý 2/2026 chỉ còn 4,9 triệu thùng dầu mỗi ngày qua Hormuz, so với 21,6 triệu ở quý 4/2025.',
        en: 'According to the analyst Can Kasapoğlu (Hudson Institute), Iran does not need to win the sea, only to make passage costly and uncertain. In 2026 that is what happened. From 28 Feb the US and Israel waged a war on Iran, and Iran restricted passage through the strait. According to the EIA, only 4.9 million barrels a day passed Hormuz in the second quarter of 2026, against 21.6 million in the fourth quarter of 2025.'
      },
      facts: [
        {
          vi: 'Trước đó, tháng 6/2025, Israel rồi Mỹ đã đánh vào các cơ sở hạt nhân của Iran.',
          en: 'Before that, in June 2025, Israel and then the US struck Iran’s nuclear sites.'
        },
        {
          vi: 'Tháng 11/2026, một quan chức Iran nói tàu của Ấn Độ, Trung Quốc, Iraq và Qatar được đi tự do. Các nhà phân tích được Al Jazeera dẫn cho rằng Tehran muốn tạo lỗ hổng trong lệnh phong tỏa của Mỹ.',
          en: 'In November 2026 an Iranian official said ships of India, China, Iraq and Qatar pass freely. Analysts quoted by Al Jazeera read this as Tehran poking holes in the US blockade.'
        }
      ],
      ll: [60, 25],
      k: 2.4,
      layers: ['strait', 'conflict', 'route'],
      show: ['hormuz', 'conf_iran', 'r_gulf_asia'],
      hl: { Iran: IR, Israel: ISR },
      dim: true,
      key: [
        { c: IR, vi: 'Iran', en: 'Iran' },
        { c: ISR, vi: 'Israel', en: 'Israel' }
      ],
      src: [7, 15, 12, 11, 9, 10]
    },
    {
      tag: 'counter',
      title: { vi: 'Mỹ đáp lại bằng phong tỏa', en: 'The US answers with a blockade' },
      text: {
        vi: 'Mỹ đáp lại bằng cách phong tỏa các cảng của Iran. Bộ trưởng Quốc phòng Mỹ Hegseth nói chiến dịch là để bảo vệ tàu buôn, và Iran không kiểm soát eo biển. Ngày 17/6 hai bên ký một bản ghi nhớ, nhưng nó đổ vỡ ngày 8/7 khi giao tranh nổ ra lại. Phong tỏa được áp lại trong tháng 7. Dù vậy, theo Kasapoğlu, đánh yếu hạm đội Iran vẫn chưa giúp Mỹ làm chủ hoàn toàn eo biển.',
        en: 'The US answered by blockading Iran’s ports. US Defense Secretary Hegseth said the operation is to protect commercial shipping, and that Iran does not control the strait. On 17 June the two sides signed a memorandum, but it collapsed on 8 July when fighting broke out again. The blockade was reimposed in July. Even so, Kasapoğlu argues, weakening Iran’s fleet has not given the US full control of the strait.'
      },
      facts: [
        {
          vi: '8/7/2026: Bộ Chỉ huy Trung tâm Mỹ (CENTCOM) nói đã đánh hơn 80 mục tiêu ở Iran, gồm hơn 60 xuồng nhỏ của IRGC; IRGC nói đã đánh 85 mục tiêu của Mỹ ở Bahrain và Kuwait (đây là lời của IRGC).',
          en: '8 Jul 2026: US Central Command (CENTCOM) said it struck over 80 targets in Iran, including more than 60 IRGC small boats; the IRGC said it struck 85 US targets in Bahrain and Kuwait (an IRGC claim).'
        }
      ],
      ll: [54, 26.8],
      k: 4,
      layers: ['base', 'strait'],
      show: ['hormuz', 'base_bahrain', 'base_aludeid'],
      hl: { Iran: IR, Bahrain: BLU, Qatar: BLU, Kuwait: '#7BA6D9', 'United Arab Emirates': '#7BA6D9' },
      dim: true,
      draw: [
        { k: 'pt', p: [56.27, 27.18], c: IR, r: 4.5, label: { vi: 'Bandar Abbas', en: 'Bandar Abbas' } },
        { k: 'pt', p: [57.77, 25.65], c: IR, r: 4.5, label: { vi: 'Jask', en: 'Jask' } }
      ],
      key: [
        { c: IR, vi: 'Iran: các cảng bị Mỹ phong tỏa', en: 'Iran: ports under US blockade' },
        { c: BLU, vi: 'Nước có căn cứ Mỹ', en: 'Hosts of US bases' }
      ],
      src: [14, 13, 12, 7]
    },
    {
      tag: 'outlook',
      title: { vi: 'Còn lại câu hỏi: ai đặt luật qua cửa', en: 'What remains: who sets the rules of passage' },
      text: {
        vi: 'Tehran nói chỉ mở lại khi chiến tranh dừng, Mỹ dỡ phong tỏa và cam kết không tấn công lại. Iran còn muốn thu phí dịch vụ với tàu qua eo. Các nước vùng Vịnh (GCC) đòi trở lại như trước 28/2, không thu phí. Qatar và Oman đang làm trung gian. Gốc rễ vẫn là địa lý: thế giới cần dòng dầu qua một cửa hẹp, còn Iran ngồi ngay bên cửa và dùng nó để gây sức ép.',
        en: 'Tehran says it will reopen only when the war stops, the US lifts its blockade and pledges not to attack again. Iran also wants to charge ships service fees to pass. The Gulf states (GCC) want things back as they were before 28 Feb, with no fees. Qatar and Oman are mediating. The root is still geography: the world needs the oil that flows through one narrow door, and Iran sits right beside it and uses it to apply pressure.'
      },
      ll: [53, 26],
      k: 3.2,
      layers: ['strait'],
      show: ['hormuz', 'persiangulf'],
      hl: { Iran: IR, 'Saudi Arabia': SA, 'United Arab Emirates': SA, Kuwait: SA, Bahrain: SA, Qatar: MED, Oman: MED },
      dim: true,
      key: [
        { c: IR, vi: 'Iran', en: 'Iran' },
        { c: SA, vi: 'Các nước GCC', en: 'GCC states' },
        { c: MED, vi: 'Trung gian: Qatar, Oman', en: 'Mediators: Qatar, Oman' }
      ],
      src: [19, 20, 18, 21, 15, 16]
    }
  ]
};
