// Explainer: China, hemmed in on its own coast (the framing is Tim Marshall's "Prisoners of Geography"). Facts from the
// research pack of 8 Nov 2026. Nothing live and no border or line of control is drawn: the only drawn lines are the Hu Line
// (a population-geography line, not a boundary), a sea-lane arrow and port points. Positions are attributed to whoever holds
// them (Beijing's white paper, the US Defense Department, the PCA tribunal); the `core` box is an interpretation, not a fact.
const CHN = '#D9A441', GREY = '#9CA3AF', HU = '#7A5C2E', FLOW = '#D97706', PORT = '#C8372D';

export const CHINA = {
  id: 'china',
  icon: '🏯',
  c: '#C8372D',
  title: { vi: 'Trung Quốc: bị bó chặt ngay trên bờ biển của mình', en: 'China: hemmed in on its own coast' },
  sub: { vi: 'Lõi Hán, vùng đệm, eo Malacca và chuỗi đảo thứ nhất', en: 'The Han core, buffer lands, Malacca and the first island chain' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến ngày 8/11/2026: GDP quý 3 của Trung Quốc tăng 4,5% so với cùng kỳ, 9 tháng đầu năm tăng 4,6% (Tân Hoa Xã, theo Cục Thống kê). Bộ Ngoại giao Trung Quốc cho biết ông Tập thăm Mỹ 23–25/9, hai bên thống nhất lập “Hội đồng Thương mại”, cắt giảm thuế đối ứng đối với hàng hóa trị giá 30 tỷ USD, và quân đội hai nước sớm ký biên bản ghi nhớ về liên lạc khi có khủng hoảng (Bộ Ngoại giao Trung Quốc). Một nguồn báo chí (ANI) nói thỏa thuận ngừng leo thang thương mại được kéo dài hai tháng, từ 10/11/2026 tới 10/1/2027; ngày này mới có một nguồn báo chí. Hội nghị lãnh đạo APEC dự kiến ngày 18–19/11 tại Thâm Quyến (CGTN). Về dầu: nhập khẩu dầu thô của Trung Quốc rớt còn 8,1 triệu thùng/ngày trong quý 2/2026, thấp hơn 32% so với quý trước, do giá cao vì gián đoạn ở eo Hormuz; nhập qua đường ống ổn định (EIA, 31/7/2026). Về Đài Loan: theo ông Joseph Wu, hơn 100 tàu hải quân và hải cảnh Trung Quốc đang ở Tây Thái Bình Dương; AEI và ISW đánh giá có thể là một cuộc tập trận không công bố; đó là nhận định của giới phân tích, bài báo không nêu phản hồi của Bắc Kinh (Taipei Times, 8/11/2026). Tình hình có thể đã thay đổi sau ngày này.',
    en: 'As of 8 Nov 2026: China’s Q3 GDP grew 4.5% year on year and 4.6% over the first nine months (Xinhua, citing the National Bureau of Statistics). China’s foreign ministry says that during Xi’s US visit of 23–25 Sep the two sides agreed to set up a “Board of Trade”, cut reciprocal tariffs on $30 billion of goods, and conclude a military crisis-communication memorandum as soon as possible (Chinese Foreign Ministry). One press source (ANI) says the trade truce was extended by two months, from 10 Nov 2026 to 10 Jan 2027; so far only that one source gives the date. The APEC leaders’ meeting is scheduled for 18–19 Nov in Shenzhen (CGTN). On oil: China’s crude imports fell to 8.1 million barrels a day in Q2 2026, 32% below the previous quarter, because of higher prices from disrupted Hormuz flows; pipeline imports stayed stable (EIA, 31 Jul 2026). On Taiwan: according to Joseph Wu, more than 100 Chinese navy and coast guard ships are in the western Pacific; AEI and ISW assess it may be an unannounced exercise; that is analysts’ view, and the article reports no response from Beijing (Taipei Times, 8 Nov 2026). The situation may have changed after this date.'
  },
  statusSrc: [23, 21, 24, 28, 15, 25],
  bottom: {
    vi: 'Theo cách đọc của Tim Marshall và nhiều nhà phân tích (không phải sự kiện đã kiểm chứng): câu hỏi là Trung Quốc có cảm thấy an toàn trong biên giới đất liền tự nhiên của mình hay không, và nước này phải ra biển qua những lối hẹp nằm gần các nước đồng minh của Mỹ. Bắc Kinh nói thẳng rằng “tư duy trọng đất hơn biển phải bị gạt bỏ” (sách trắng 2015); Lầu Năm Góc viết rằng trọng tâm quân sự của Trung Quốc là chuỗi đảo thứ nhất; các nước láng giềng và Mỹ thì coi những bước đi đó là sức ép, và Bắc Kinh coi liên minh của Mỹ là sự kìm chế. Đường ống và cảng ở nước ngoài giúp ít nhưng chưa thay được đường biển, và chính năm 2026 cho thấy điểm nghẽn có thể ở nơi khác (Hormuz). Địa lý giải thích vì sao các điểm nóng nằm ở đâu, chứ không quyết định các bên sẽ chọn gì.',
    en: 'On the reading of Tim Marshall and many analysts (not a verified fact): the question is whether China feels secure inside its natural land borders, and it reaches the sea through narrow passages that lie near US allies. Beijing says plainly that “the traditional mentality that land outweighs sea must be abandoned” (2015 white paper); the Pentagon writes that China’s military focus is the First Island Chain; China’s neighbours and the US read those steps as pressure, while Beijing sees US alliances as constraint. Pipelines and foreign ports help a little but do not yet replace the sea lanes, and 2026 itself showed the choke point may be elsewhere (Hormuz). Geography explains where the pressure points are, not what the parties will choose.'
  },
  sources: [
    { n: 'NBS, Main Data of the Seventh National Population Census (11/5/2021)', url: 'https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817185.html' },
    { n: 'NBS, Communiqué of the Seventh National Population Census No. 3 (11/5/2021)', url: 'https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817188.html' },
    { n: 'Wikipedia, Heihe–Tengchong (Hu) Line, trích Naughton (2007)', url: 'https://en.wikipedia.org/wiki/Heihe%E2%80%93Tengchong_Line' },
    { n: 'China Daily, Xinjiang', url: 'https://govt.chinadaily.com.cn/s/202106/02/WS5d09a454498e12256565e152/the-largest-in-area-of-all-the-province-level-administrative-regions-of-china.html' },
    { n: 'State Council, China’s Military Strategy (5/2015)', url: 'https://english.www.gov.cn/archive/white_paper/2015/05/27/content_281475115610833.htm' },
    { n: 'OHCHR, Assessment of human rights concerns in Xinjiang (31/8/2022)', url: 'https://www.ohchr.org/sites/default/files/documents/countries/2022-08-31/22-08-31-final-assesment.pdf' },
    { n: 'China Daily (29/10/2021), luật biên giới đất liền, ông Gao Jinlu', url: 'https://www.chinadaily.com.cn/a/202110/29/WS617b32d0a310cdd39bc71f8f.html' },
    { n: 'US Defense Dept, China Military Power Report 2025 (23/12/2025)', url: 'https://media.defense.gov/2025/Dec/23/2003849070/-1/-1/1/ANNUAL-REPORT-TO-CONGRESS-MILITARY-AND-SECURITY-DEVELOPMENTS-INVOLVING-THE-PEOPLES-REPUBLIC-OF-CHINA-2025.PDF' },
    { n: 'Columbia CGEP, Erica Downs (29/1/2026)', url: 'https://www.energypolicy.columbia.edu/where-china-gets-its-oil-crude-imports-in-2025-reveal-stockpiling-and-changing-fortunes-of-certain-suppliers-including-those-sanctioned/' },
    { n: 'Moscow Times (13/5/2026), Power of Siberia 2', url: 'https://www.themoscowtimes.com/2026/05/18/has-the-iran-war-sealed-the-fate-of-power-of-siberia-2' },
    { n: 'Moscow Times (2/9/2025), biên bản Gazprom–CNPC', url: 'https://www.themoscowtimes.com/2026/08/06/russia-and-china-sign-deal-to-advance-power-of-siberia-2-pipeline' },
    { n: 'EIA, World Oil Transit Chokepoints (cập nhật 3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/' },
    { n: 'EIA, Today in Energy (11/8/2017), eo Malacca', url: 'https://www.eia.gov/todayinenergy/detail.php?id=32452' },
    { n: 'Reuters qua Baird Maritime (14/1/2026), nhập dầu 2025', url: 'https://www.bairdmaritime.com/shipping/tankers/chinas-2025-oil-imports-hit-record-after-december-surge' },
    { n: 'Maritime Executive (29/1/2015), đường ống Myanmar–Trung Quốc', url: 'https://maritime-executive.com/article/myanmar-china-pipeline-reduces-shipping-need' },
    { n: 'EIA, Today in Energy (31/7/2026), nhập dầu thô quý 2/2026', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67905' },
    { n: 'PCA, Press Release No. 11 (12/7/2016)', url: 'https://docs.pca-cpa.org/2016/07/PH-CN-20160712-Press-Release-No-11-English.pdf' },
    { n: 'CRS RL33153, China Naval Modernization (24/4/2025)', url: 'https://www.everycrsreport.com/files/2025-04-24_RL33153_e7d0d9c799c5e97e4cb6e661498b2bed09b722c6.html' },
    { n: 'China Daily / Tân Hoa Xã (7/11/2025), tàu sân bay Phúc Kiến', url: 'https://global.chinadaily.com.cn/a/202511/07/WS690d7d5aa310bfcd27fc571c.html' },
    { n: 'AFP qua Dawn (25/1/2026), căn cứ Ream', url: 'https://www.dawn.com/news/1968909' },
    { n: 'China Daily (11/3/2026), ngân sách quốc phòng', url: 'https://govt.chinadaily.com.cn/s/202603/11/WS69b0f3c5498e36855033b310/defense-budget-pegged-at-1-91t-yuan-up-7.html' },
    { n: 'Bộ Ngoại giao Trung Quốc (26/9/2026), chuyến thăm Mỹ của ông Tập', url: 'https://www.mfa.gov.cn/esp/zxxx/202609/t20260926_12031715.html' },
    { n: 'AP qua WTOP (13/5/2026), ông Trump tới Bắc Kinh', url: 'https://wtop.com/national/2026/05/the-latest-trump-arrives-in-china-to-meet-with-xi-in-beijing/' },
    { n: 'Tân Hoa Xã qua People’s Daily (19/10/2026), GDP quý 3', url: 'https://en.people.cn/n3/2026/1019/c90000-20509872.html' },
    { n: 'ANI qua Open (24/9/2026), gia hạn thỏa thuận thương mại', url: 'https://openthemagazine.com/world/us-china-extend-trade-truce-trump-and-xi-strike-warm-note-at-white-house' },
    { n: 'Taipei Times (8/11/2026)', url: 'https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351' },
    { n: 'Wikipedia, Gwadar Port', url: 'https://en.wikipedia.org/wiki/Gwadar_Port' },
    { n: 'Tim Marshall, Prisoners of Geography (2015), lời mở đầu, bản tiếng Bồ Đào Nha 2017', url: 'https://www.saidadeemergencia.com/wp-content/uploads/2024/01/Prisioneiros_da_Geografia.pdf' },
    { n: 'CGTN (13/12/2025), APEC Thâm Quyến', url: 'https://news.cgtn.com/news/2025-12-13/2026-APEC-meeting-to-be-held-Nov-18-19-in-Shenzhen-China-1J43L2Fb2w0/share_amp.html' },
    { n: 'Wikipedia, Malacca dilemma', url: 'https://en.wikipedia.org/wiki/Malacca_dilemma' }
  ],
  steps: [
    {
      title: { vi: 'Lõi Hán: đồng bằng và lưu vực phía đông', en: 'The Han core: the eastern plains and river basins' },
      text: {
        vi: 'Phần lớn người Trung Quốc sống ở nửa đông đất nước, trên các đồng bằng và lưu vực của Hoàng Hà và Trường Giang, từ đồng bằng Hoa Bắc xuống tới bờ biển phía nam. Năm 1935 nhà địa lý Hồ Hoán Dung vẽ một đường chéo từ Hắc Hà xuống Đằng Xung để cho thấy sự chênh lệch này; về cơ bản nó vẫn đúng đến nay. Phía tây đường đó là cao nguyên, sa mạc và thảo nguyên, rất thưa dân. Đường trên bản đồ chỉ là hình minh họa vị trí gần đúng, không phải ranh giới.',
        en: 'Most Chinese people live in the eastern half of the country, on the plains and river basins of the Yellow River and the Yangtze, from the North China Plain down to the southern coast. In 1935 the geographer Hu Huanyong drew a diagonal from Heihe to Tengchong to show this imbalance, and in broad terms it still holds. West of that line lie plateaus, deserts and steppe, thinly populated. The line on the map is an approximate illustration, not a boundary.'
      },
      core: {
        vi: 'Tim Marshall (Prisoners of Geography, 2015) mở sách bằng câu hỏi liệu Trung Quốc cuối cùng đã cảm thấy an toàn trong những gì nước này coi là biên giới đất liền tự nhiên của mình hay chưa. Theo cách đọc đó, điều Bắc Kinh cần trước hết là giữ cho lõi đông dân này đủ ăn, thống nhất và yên ổn; điều lo là bất ổn bên trong và sức ép ở nơi lõi gặp biển. Sách trắng quân sự 2015 của Trung Quốc tự nêu nhiệm vụ là bảo vệ “thống nhất quốc gia, toàn vẹn lãnh thổ và lợi ích phát triển” Đây là cách diễn giải, không phải sự kiện đã kiểm chứng.',
        en: 'Tim Marshall (Prisoners of Geography, 2015) opens by asking whether China finally feels secure inside what it sees as its natural land borders. On that reading, what Beijing needs first is to keep this crowded core fed, united and calm; what it fears is unrest at home and pressure where the core meets the sea. China’s own 2015 military white paper describes the task as safeguarding “national unification, territorial integrity and development interests”. This is an interpretation, not a verified fact.'
      },
      facts: [
        {
          vi: 'Điều tra dân số 2020: người Hán là 1.286.311.334 trên 1.411.778.724 dân đại lục, tức 91,11%; các dân tộc thiểu số chiếm 8,89% (Cục Thống kê Trung Quốc, NBS).',
          en: '2020 census: the Han numbered 1,286,311,334 of the mainland’s 1,411,778,724 people, or 91.11%; ethnic minorities were 8.89% (China’s National Bureau of Statistics).'
        },
        {
          vi: 'Khoảng 94% dân số sống ở phía đông đường Hồ, nơi chỉ chiếm khoảng 43% diện tích; năm 1935 Hồ Hoán Dung tính là 96% dân trên 36% diện tích, có cả Mông Cổ. Số liệu thay đổi theo năm và theo nghiên cứu (Naughton 2007, số liệu 2002, qua Wikipedia).',
          en: 'About 94% of people live east of the Hu Line, which covers about 43% of the area; in 1935 Hu counted 96% of people on 36% of the area, with Mongolia included. The figures vary by year and study (Naughton 2007, 2002 data, via Wikipedia).'
        }
      ],
      ll: [112, 35],
      k: 3.1,
      layers: [],
      show: ['northchinaplain', 'huanghe', 'yangtze'],
      hl: { China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[127.5, 50.2], [98.5, 25.0]], c: HU, w: 2.4, dash: [8, 6], label: { vi: 'đường Hồ (minh họa)', en: 'Hu Line (illustrative)' }, lp: [113.0, 38.0], dy: -9 },
        { k: 'pt', p: [116.4, 39.9], c: PORT, r: 3.5, label: { vi: 'Bắc Kinh', en: 'Beijing' }, side: 'l' },
        { k: 'pt', p: [121.5, 31.2], c: PORT, r: 3.5, label: { vi: 'Thượng Hải', en: 'Shanghai' } },
        { k: 'pt', p: [113.3, 23.1], c: PORT, r: 3.5, label: { vi: 'Quảng Châu', en: 'Guangzhou' }, side: 'l' }
      ],
      src: [0, 2, 4, 27]
    },
    {
      title: { vi: 'Vòng vùng đệm: Tây Tạng, Tân Cương, Nội Mông, Đông Bắc', en: 'The ring of buffer lands: Tibet, Xinjiang, Inner Mongolia, the northeast' },
      text: {
        vi: 'Quanh lõi Hán là những vùng rộng, cao hoặc khô và thưa dân: cao nguyên Tây Tạng, lòng chảo Tarim với sa mạc Taklamakan ở Tân Cương, thảo nguyên và Gobi ở Nội Mông, cùng ba tỉnh Đông Bắc. Bốn đơn vị Tây Tạng, Tân Cương, Nội Mông và Thanh Hải cộng lại chỉ có khoảng 4,2% dân số, trong khi riêng Tân Cương đã là khoảng một phần sáu lãnh thổ. Câu chuyện này chỉ nói về địa lý chiến lược; các tranh luận về chính sách ở đây rất lớn và nằm ngoài phạm vi.',
        en: 'Around the Han core lie large, high or dry and thinly populated regions: the Tibetan plateau, the Tarim basin with the Taklamakan desert in Xinjiang, the steppe and Gobi of Inner Mongolia, and the three northeastern provinces. Tibet, Xinjiang, Inner Mongolia and Qinghai together hold only about 4.2% of the population, while Xinjiang alone is about one sixth of the territory. This story covers strategic geography only; the policy debates there are large and outside its scope.'
      },
      core: {
        vi: 'Bắc Kinh tự nói lý do: sách trắng 2015 xem các lực lượng ly khai “Đông Turkestan độc lập” và “Tây Tạng độc lập” là mối đe dọa đối với ổn định xã hội, và Lầu Năm Góc ghi PLA được giao nhiệm vụ trấn áp các phong trào đó. Nhiều nhà phân tích suy ra rằng với Bắc Kinh, những vùng đệm rộng này là lớp bảo vệ cho lõi Hán và không thể để mất; đó là suy luận của họ chứ không phải tuyên bố chính thức. Phía bên kia: Văn phòng Nhân quyền LHQ đã đánh giá khuôn khổ chống khủng bố và “cực đoan” của Trung Quốc ở Tân Cương và nêu các mối lo về nhân quyền; phản hồi của chính phủ Trung Quốc được đính kèm báo cáo đó.',
        en: 'Beijing states its own reason: the 2015 white paper treats the separatist forces for “East Turkistan independence” and “Tibet independence” as threats to social stability, and the Pentagon notes the PLA is tasked to crack down on such movements. Many analysts infer that, for Beijing, these wide buffer lands shield the Han core and cannot be lost; that is their inference, not an official statement. The other side: the UN human rights office assessed China’s counter-terrorism and “extremism” framework in Xinjiang and raised human rights concerns; the Chinese government’s response is annexed to that report.'
      },
      facts: [
        {
          vi: 'Điều tra 2020: Tân Cương 25.852.345 người (1,83%), Nội Mông 24.049.155 (1,70%), Thanh Hải 5.923.957 (0,42%), Tây Tạng 3.648.100 (0,26%); tổng bốn đơn vị khoảng 4,2% là số cộng của trang này. Ba tỉnh Đông Bắc: 6,98% dân số (NBS).',
          en: '2020 census: Xinjiang 25,852,345 (1.83%), Inner Mongolia 24,049,155 (1.70%), Qinghai 5,923,957 (0.42%), Tibet 3,648,100 (0.26%); the four-unit total of about 4.2% is this page’s own sum. The three northeastern provinces: 6.98% of the population (NBS).'
        },
        {
          vi: 'Tân Cương rộng 1,66 triệu km², khoảng một phần sáu lãnh thổ Trung Quốc, giáp tám nước: Nga, Kazakhstan, Kyrgyzstan, Tajikistan, Pakistan, Mông Cổ, Ấn Độ và Afghanistan (China Daily).',
          en: 'Xinjiang covers 1.66 million km², about one sixth of China’s territory, and borders eight countries: Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Pakistan, Mongolia, India and Afghanistan (China Daily).'
        },
        {
          vi: 'Ngày 31/8/2022 OHCHR viết rằng việc giam giữ tùy tiện và phân biệt đối xử với người Uyghur và các nhóm Hồi giáo khác ở Tân Cương “có thể cấu thành tội ác quốc tế, đặc biệt là tội ác chống loài người”; phản hồi của chính phủ Trung Quốc có trong phụ lục (OHCHR).',
          en: 'On 31 Aug 2022 OHCHR wrote that arbitrary and discriminatory detention of Uyghur and other predominantly Muslim groups in Xinjiang “may constitute international crimes, in particular crimes against humanity”; the Chinese government’s response is in the annex (OHCHR).'
        }
      ],
      ll: [105, 38],
      k: 2.4,
      layers: [],
      show: ['tibet', 'taklamakan', 'gobi', 'tianshan'],
      hl: { China: CHN },
      dim: true,
      draw: [
        { k: 'pt', p: [91.1, 29.65], c: PORT, r: 3.5, label: { vi: 'Lhasa', en: 'Lhasa' }, side: 'l' },
        { k: 'pt', p: [87.6, 43.8], c: PORT, r: 3.5, label: { vi: 'Ürümqi', en: 'Ürümqi' }, side: 'l' },
        { k: 'pt', p: [111.7, 40.8], c: PORT, r: 3.5, label: { vi: 'Hohhot', en: 'Hohhot' }, dy: -9 },
        { k: 'pt', p: [123.4, 41.8], c: PORT, r: 3.5, label: { vi: 'Thẩm Dương', en: 'Shenyang' }, dy: -9 }
      ],
      src: [1, 0, 3, 4, 7, 5]
    },
    {
      title: { vi: 'Biên giới đất liền: 14 nước láng giềng và bức tường Himalaya', en: 'The land frontier: 14 neighbours and the Himalayan wall' },
      text: {
        vi: 'Trung Quốc có biên giới đất liền với 14 nước, phần lớn chạy qua núi, sa mạc hoặc thảo nguyên. Ở phía nam, Himalaya và Karakoram ngăn Trung Quốc với Nam Á; ở phía tây bắc là các nước Trung Á và Nga. Vì đường ra biển bị bó hẹp (các bước sau), đất liền là nơi Trung Quốc có đường dẫn dầu khí không thể bị hải quân phong tỏa: đường ống dầu từ Kazakhstan và nhánh ESPO từ Nga, và đường ống khí Sức mạnh Siberia. Bản đồ không vẽ biên giới hay đường kiểm soát nào; các tranh chấp biên giới được kể bằng lời.',
        en: 'China has land borders with 14 countries, mostly running through mountains, desert or steppe. In the south the Himalaya and Karakoram separate it from South Asia; to the northwest lie the Central Asian states and Russia. Because the way to the sea is constrained (next steps), the land is where China has oil and gas lines a navy cannot blockade: the oil pipeline from Kazakhstan, the ESPO spur from Russia, and the Power of Siberia gas pipeline. The map draws no border or line of control; border disputes are told in words.'
      },
      core: {
        vi: 'Bắc Kinh cần biên giới yên để dồn sức ra biển: sách trắng 2015 thừa nhận “một số tranh chấp lãnh thổ đất liền vẫn âm ỉ”, và Lầu Năm Góc ghi PLA diễn tập bắn đạn thật ở biên giới Myanmar năm 2024 để ngăn xung đột tràn sang. Lựa chọn của Bắc Kinh là hiệp ước quản lý biên giới (với 10 trong 14 nước), hạ nhiệt với Ấn Độ và đường ống trên bộ. Phía bên kia: Lầu Năm Góc đánh giá Ấn Độ “có lẽ vẫn hoài nghi” và sự ngờ vực làm giới hạn quan hệ; và với khí Nga, nhà phân tích S&P cho rằng “mọi đòn bẩy nằm ở phía Trung Quốc” vì Gazprom không có người mua khác.',
        en: 'Beijing needs quiet frontiers so it can put its weight toward the sea: the 2015 white paper admits “certain disputes over land territory are still smoldering”, and the Pentagon notes PLA live-fire drills on the Burma border in 2024 to deter spillover. Beijing’s options are border-management treaties (with 10 of the 14), calmer ties with India and overland pipelines. The other side: the Pentagon assesses India “probably remains skeptical” and that distrust limits the relationship; and on Russian gas, S&P’s analyst says “all the leverage is on the Chinese side” because Gazprom has no other buyer.'
      },
      facts: [
        {
          vi: 'Theo ông Gao Jinlu (Ủy ban Đối ngoại Quốc hội Trung Quốc), Trung Quốc có đường biên giới đất liền khoảng 22.000 km với 14 nước và đã ký hiệp ước quản lý biên giới với 10 nước trong số đó (China Daily, 29/10/2021).',
          en: 'According to Gao Jinlu of the NPC Foreign Affairs Committee, China has a land border of about 22,000 km with 14 countries and has signed border-management treaties with 10 of them (China Daily, 29 Oct 2021).'
        },
        {
          vi: 'Tháng 10/2024 Ấn Độ thông báo thỏa thuận với Trung Quốc rút khỏi các điểm đối đầu còn lại dọc Đường kiểm soát thực tế; Lầu Năm Góc cho rằng Bắc Kinh muốn ổn định quan hệ nhưng sự ngờ vực vẫn còn (Lầu Năm Góc, 12/2025).',
          en: 'In October 2024 India announced an agreement with China to disengage from the remaining standoff sites along the Line of Actual Control; the Pentagon says Beijing seeks to stabilise ties but mistrust remains (Pentagon, Dec 2025).'
        },
        {
          vi: 'Qua đường ống Kazakhstan–Trung Quốc, Rosneft xuất khoảng 200.000 thùng/ngày; qua nhánh ESPO khoảng 600.000–700.000 thùng/ngày, phần lớn có thể của Rosneft (Columbia CGEP, 29/1/2026). Tháng 9/2025 Gazprom–CNPC ký biên bản “ràng buộc” về Sức mạnh Siberia 2 và nâng Sức mạnh Siberia 1 từ 38 lên 44 tỷ m³/năm; giá chưa chốt. Đến 13/5/2026 dự án vẫn bị đình, Trung Quốc chưa phê duyệt cuối (Moscow Times).',
          en: 'Rosneft exports about 200,000 barrels a day through the Kazakhstan–China pipeline and probably most of the 600,000–700,000 barrels a day on the ESPO spur (Columbia CGEP, 29 Jan 2026). In Sep 2025 Gazprom and CNPC signed a “legally binding” memorandum on Power of Siberia 2 and raised Power of Siberia 1 from 38 to 44 bcm a year; price not agreed. As of 13 May 2026 the project remained stalled and China had given no final approval (Moscow Times).'
        }
      ],
      ll: [95, 38],
      k: 2.0,
      layers: [],
      show: ['himalaya', 'karakoram', 'tianshan', 'altai', 'pipe_cac', 'pipe_espo', 'pipe_pos1'],
      hl: {
        China: CHN, India: GREY, Russia: GREY, Mongolia: GREY, Kazakhstan: GREY, Kyrgyzstan: GREY, Tajikistan: GREY, Pakistan: GREY,
        Afghanistan: GREY, Nepal: GREY, Bhutan: GREY, Myanmar: GREY, Laos: GREY, Vietnam: GREY, 'North Korea': GREY
      },
      dim: true,
      key: [
        { c: CHN, vi: 'Trung Quốc', en: 'China' },
        { c: GREY, vi: '14 nước láng giềng trên bộ', en: 'The 14 land neighbours' }
      ],
      src: [6, 7, 8, 10, 9]
    },
    {
      title: { vi: 'Biển: bị chuỗi đảo thứ nhất bao ngoài và eo Malacca phía nam', en: 'The sea: boxed by the first island chain, with Malacca to the south' },
      text: {
        vi: 'Bờ biển Trung Quốc nhìn ra Hoàng Hải, biển Hoa Đông và biển Đông, nhưng phía ngoài là một vòng cung đảo của Nhật Bản, Đài Loan và Philippines, với các khe hẹp như eo Miyako và eo Luzon. Ở phía nam, dầu đường biển từ Trung Đông tới Đông Á đi qua eo Malacca, chỗ hẹp nhất chỉ khoảng 2,7 km (1,7 dặm). Giới phân tích gọi điểm yếu này là “thế lưỡng nan Malacca”. Bản đồ chỉ vẽ mũi tên tuyến dầu minh họa; không vẽ đường chủ quyền nào trên biển.',
        en: 'China’s coast faces the Yellow Sea, East China Sea and South China Sea, but beyond them lies an arc of islands of Japan, Taiwan and the Philippines, with narrow gaps such as the Miyako and Luzon straits. To the south, seaborne oil from the Middle East to East Asia passes the Strait of Malacca, only about 2.7 km (1.7 miles) wide at its narrowest. Analysts call this exposure the “Malacca dilemma”. The map draws only an illustrative oil-route arrow; no sovereignty line at sea is drawn.'
      },
      core: {
        vi: 'Bắc Kinh nói rõ hướng đi: sách trắng 2015 nêu “tư duy trọng đất hơn biển phải bị gạt bỏ”, hải quân chuyển từ “phòng thủ vùng biển gần” sang kết hợp với “bảo vệ biển xa”, và phải bảo vệ các tuyến hàng hải chiến lược. Lầu Năm Góc viết rằng trọng tâm quân sự của Trung Quốc hiện là chuỗi đảo thứ nhất. Phía bên kia: sách trắng Trung Quốc nói một số láng giềng ven biển “có hành động khiêu khích”, trong khi Philippines kiện và hội đồng trọng tài (PCA, 12/7/2016) kết luận không có cơ sở pháp lý để Trung Quốc đòi “quyền lịch sử” trong vùng “đường chín đoạn”; Trung Quốc không tham gia vụ kiện và không chấp nhận nó. Lầu Năm Góc mô tả cách làm của hải cảnh Trung Quốc với các bên tranh chấp là ngày càng quyết liệt.',
        en: 'Beijing states its direction: the 2015 white paper says “the traditional mentality that land outweighs sea must be abandoned”, shifts the navy from “offshore waters defense” toward combining it with “open seas protection”, and calls for protecting strategic sea lines of communication. The Pentagon writes that China’s military focus is currently the First Island Chain. The other side: China’s white paper says some offshore neighbours “take provocative actions”, while the Philippines brought a case and the tribunal (PCA, 12 Jul 2016) found no legal basis for China to claim historic rights within the “nine-dash line” area; China did not take part in the case and does not accept it. The Pentagon describes China Coast Guard tactics against rival claimants as increasingly aggressive.'
      },
      facts: [
        {
          vi: 'Nửa đầu 2025, eo Malacca có khoảng 23,2 triệu thùng dầu/ngày đi qua, 29% dòng dầu đường biển thế giới; Trung Quốc chiếm 48% lượng hàng nhập đi qua eo này (EIA, cập nhật 3/3/2026). Đây không phải tỷ lệ dầu của Trung Quốc đi qua Malacca. Chỗ hẹp nhất khoảng 1,7 dặm (kênh Phillips) (EIA, 2017).',
          en: 'In the first half of 2025 about 23.2 million barrels a day of oil passed the Strait of Malacca, 29% of world maritime oil flows; China accounted for 48% of the import volumes passing through it (EIA, updated 3 Mar 2026). That is not the share of China’s oil that uses Malacca. The narrowest point is about 1.7 miles (Phillips Channel) (EIA, 2017).'
        },
        {
          vi: 'Năm 2025 Trung Quốc nhập kỷ lục 557,73 triệu tấn dầu thô, khoảng 11,55 triệu thùng/ngày (Hải quan Trung Quốc, qua Reuters, 14/1/2026); hơn 90% lượng nhập là đường biển (Columbia CGEP, 29/1/2026).',
          en: 'In 2025 China imported a record 557.73 million tonnes of crude, about 11.55 million barrels a day (China customs, via Reuters, 14 Jan 2026); over 90% of imports arrived by sea (Columbia CGEP, 29 Jan 2026).'
        },
        {
          vi: 'Lầu Năm Góc: Trung Quốc coi khu vực từ quần đảo Nhật Bản tới bán đảo Mã Lai là “trọng tâm chiến lược”; Bắc Kinh tin rằng Washington muốn kiềm chế Trung Quốc và lo ngại liên minh Mỹ mở rộng (Lầu Năm Góc, 12/2025).',
          en: 'The Pentagon: China sees the region from the Japanese archipelago to the Malay Peninsula as its “strategic center of gravity”; Beijing believes Washington seeks to contain it and fears US alliances are expanding (Pentagon, Dec 2025).'
        }
      ],
      ll: [112, 19],
      k: 2.5,
      layers: [],
      show: ['firstchain', 'malacca', 'luzon', 'taiwanstrait'],
      hl: { China: CHN },
      dim: true,
      draw: [
        { k: 'line', pts: [[95, 6], [100.6, 3.2], [103.8, 1.3], [109, 6], [114, 12], [117.5, 21.5], [119.6, 24.8], [121.6, 28.5], [122.1, 29.9]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'tuyến dầu về Trung Quốc (minh họa)', en: 'oil route to China (illustrative)' }, lp: [111.5, 9.5], dy: 12 }
      ],
      src: [4, 7, 11, 12, 13, 8, 16, 29]
    },
    {
      title: { vi: 'Đường vòng qua Malacca: đường ống, cảng và hành lang', en: 'Ways around Malacca: pipelines, ports and corridors' },
      text: {
        vi: 'Để giảm phụ thuộc vào một eo biển, Trung Quốc xây đường ống và cảng ở nước ngoài. Đường ống dầu từ Kyaukphyu (Myanmar) tới Vân Nam dài 771 km và có công suất thiết kế 22 triệu tấn/năm. Cảng Gwadar bên Biển Ả Rập (Pakistan) nằm trong Hành lang Kinh tế Trung Quốc – Pakistan, do một công ty nhà nước Trung Quốc vận hành. Cùng với các đường ống Trung Á và Nga ở bước trước, đó là cách tạo thêm lối ra ngoài eo Malacca; những lối này còn nhỏ so với dòng dầu đi biển.',
        en: 'To reduce reliance on one strait, China builds pipelines and ports abroad. The oil pipeline from Kyaukphyu (Myanmar) to Yunnan is 771 km long with a design capacity of 22 million tonnes a year. Gwadar port on the Arabian Sea (Pakistan) sits within the China–Pakistan Economic Corridor and is operated by a Chinese state company. Together with the Central Asian and Russian lines from the previous step, these add ways out that bypass Malacca; they remain small next to the seaborne flow.'
      },
      core: {
        vi: 'Theo logic này, Bắc Kinh cần những tuyến mà một hải quân không thể chặn cùng lúc. Năm 2026 cho thấy cả hai mặt: EIA ghi nhập dầu thô quý 2 giảm còn 8,1 triệu thùng/ngày vì Hormuz bị gián đoạn, nhưng nhập qua đường ống vẫn ổn định; tức điểm nghẽn thực tế lần này là Hormuz, không phải Malacca. Phía bên kia: Lầu Năm Góc cho rằng PLA “có lẽ quan tâm nhất” tới việc tiếp cận quân sự dọc các tuyến qua eo Malacca và Hormuz, nhưng cũng nói các nước chủ nhà có thể ngại về chủ quyền và quan hệ với Mỹ. Các số liệu ở đây là của từng nguồn, không cộng được với nhau.',
        en: 'On this logic Beijing needs routes that one navy cannot cut at once. 2026 showed both sides: the EIA records crude imports falling to 8.1 million barrels a day in Q2 because Hormuz flows were disrupted, while pipeline imports stayed stable; so the choke point that actually bit this time was Hormuz, not Malacca. The other side: the Pentagon says the PLA is “probably most interested” in military access along the sea lanes at Malacca and Hormuz, but also that host nations may worry about sovereignty and ties with the US. The figures here come from separate sources and cannot be added together.'
      },
      facts: [
        {
          vi: 'Đường ống dầu Myanmar–Trung Quốc: 771 km, công suất thiết kế 22 triệu tấn/năm. Reuters năm 2015 dự báo khoảng 80% lượng mua dầu ở nước ngoài của Trung Quốc vẫn đi đường biển, một ước tính 2015 (Maritime Executive, 29/1/2015).',
          en: 'The Myanmar–China oil pipeline: 771 km, design capacity 22 million tonnes a year. In 2015 Reuters projected that around 80% of China’s overseas oil purchases would still go by sea, a 2015 estimate (Maritime Executive, 29 Jan 2015).'
        },
        {
          vi: 'Quý 2/2026 nhập dầu thô của Trung Quốc là 8,1 triệu thùng/ngày, giảm 32% so với quý 1; mức giảm đến từ tàu chở dầu, nhập qua đường ống ổn định (EIA, 31/7/2026).',
          en: 'In Q2 2026 China’s crude imports were 8.1 million barrels a day, 32% below Q1; the drop came from tankers while pipeline imports were stable (EIA, 31 Jul 2026).'
        },
        {
          vi: 'Lầu Năm Góc: PLA cân nhắc thêm cơ sở hậu cần ở nước ngoài và có lẽ quan tâm nhất tới tiếp cận quân sự dọc các tuyến qua Malacca và Hormuz; việc này bị giới hạn bởi sự sẵn lòng của nước chủ nhà (Lầu Năm Góc, 12/2025). Gwadar: cảng nước sâu ở Balochistan, do China Overseas Port Holding Company vận hành từ hợp đồng năm 2013 (Wikipedia).',
          en: 'The Pentagon: the PLA is considering more overseas logistics sites and is probably most interested in access along the Malacca and Hormuz routes, constrained by host nations’ willingness (Pentagon, Dec 2025). Gwadar: a deep-sea port in Balochistan, operated by China Overseas Port Holding Company under a 2013 contract (Wikipedia).'
        }
      ],
      ll: [88, 33],
      k: 2.0,
      layers: [],
      show: ['pipe_myanmar', 'pipe_cac', 'pipe_espo', 'malacca'],
      hl: { China: CHN },
      dim: true,
      draw: [
        { k: 'pt', p: [62.33, 25.13], c: PORT, r: 4, label: { vi: 'Gwadar', en: 'Gwadar' }, dy: 10 },
        { k: 'pt', p: [93.55, 19.43], c: PORT, r: 4, label: { vi: 'Kyaukphyu', en: 'Kyaukphyu' }, dy: 10 },
        { k: 'pt', p: [102.7, 25.0], c: PORT, r: 3.5, label: { vi: 'Côn Minh', en: 'Kunming' }, side: 'l' }
      ],
      src: [14, 15, 7, 26, 9]
    },
    {
      title: { vi: 'Hải quân biển xa và các căn cứ ở nước ngoài', en: 'A blue-water navy and bases abroad' },
      text: {
        vi: 'Trung Quốc đóng tàu chiến nhanh và đã có ba tàu sân bay, tàu thứ ba, Phúc Kiến, vào biên chế ở Tam Á ngày 5/11/2025. Căn cứ ở nước ngoài còn ít: Djibouti (từ 2017) và cơ sở Ream ở Campuchia. Đội tàu đông và mạng căn cứ ở nước ngoài là hai chuyện khác nhau. Bản đồ chỉ đánh dấu vị trí các cảng nêu trong nguồn.',
        en: 'China builds warships fast and now has three aircraft carriers; the third, Fujian, was commissioned at Sanya on 5 Nov 2025. Bases abroad are few: Djibouti (since 2017) and the Ream facility in Cambodia. A large fleet and a network of bases abroad are two different things. The map only marks the ports named in the sources.'
      },
      core: {
        vi: 'Theo sách trắng 2015, Trung Quốc cần hải quân để bảo vệ “các tuyến hàng hải chiến lược và lợi ích ở nước ngoài”; Mục đích công khai Bắc Kinh nêu là bảo vệ công dân và lợi ích Trung Quốc (Djibouti) và huấn luyện, cứu trợ (Ream). Lầu Năm Góc lại viết rằng ở Djibouti căn cứ “ít tham gia” bảo vệ công dân Trung Quốc, chủ yếu duy trì hiện diện khu vực, và PLA nhắm tới quân đội “đẳng cấp thế giới” vào 2049 trong khi trọng tâm hiện vẫn là chuỗi đảo thứ nhất. Về Ream, Lầu Năm Góc nói trước lễ khánh thành tháng 4/2025 PLA đã đóng thường trực hai tàu chiến ở đó, còn Campuchia và Trung Quốc phủ nhận việc Trung Quốc được đóng quân ở đó. Hai cách đọc cùng tồn tại; chưa bên nào là sự thật được kiểm chứng độc lập trong nguồn này.',
        en: 'By the 2015 white paper China needs a navy to protect “strategic sea lines of communication and overseas interests”; Beijing’s stated purposes are protecting Chinese citizens and interests (Djibouti) and training and disaster relief (Ream). The Pentagon writes that at Djibouti the base has had “minimal participation” in protecting Chinese citizens and mainly enables regional presence, and that the PLA aims for a world-class force by 2049 while its current focus stays the First Island Chain. On Ream, the Pentagon says that before the April 2025 opening the PLA continuously stationed two warships there, while Cambodia and China deny China will be able to station forces. Both readings stand side by side; neither is independently verified here.'
      },
      facts: [
        {
          vi: 'Hải quân Trung Quốc có “hơn 370” tàu và tàu ngầm trong biên chế chiến đấu (Lầu Năm Góc 2024, theo CRS, 24/4/2025), so với 296 tàu của Hải quân Mỹ tại 30/9/2024; đây là số mới nhất tìm được, hai bên đếm không hoàn toàn giống nhau.',
          en: 'China’s navy has “over 370” ships and submarines in its battle force (Pentagon 2024 report, as quoted by CRS, 24 Apr 2025), against 296 for the US Navy on 30 Sep 2024; this is the latest count found, and the two sides do not count in exactly the same way.'
        },
        {
          vi: 'Tàu sân bay Phúc Kiến (số hiệu 18), tàu đầu tiên có máy phóng điện từ, được đưa vào biên chế ngày 5/11/2025 tại Tam Á (Tân Hoa Xã, qua China Daily); Lầu Năm Góc ghi PLAN nhắm sản xuất thêm sáu tàu sân bay tới 2035, tổng cộng chín. Ngân sách quốc phòng 2026: 1,91 nghìn tỷ nhân dân tệ, tăng 7% (China Daily, 11/3/2026).',
          en: 'The carrier Fujian (hull 18), the first with electromagnetic catapults, was commissioned on 5 Nov 2025 at Sanya (Xinhua, via China Daily); the Pentagon says the PLAN aims to produce six more carriers by 2035, nine in total. 2026 defence budget: 1.91 trillion yuan, up 7% (China Daily, 11 Mar 2026).'
        },
        {
          vi: 'Djibouti mở năm 2017, là căn cứ nước ngoài đầu tiên (CRS). Ream: tháng 4/2025 Thủ tướng Campuchia và đoàn PLA khánh thành Trung tâm Huấn luyện và Hậu cần chung; ngày 24/1/2026 AFP thấy hai tàu chiến Trung Quốc ở đó khi tàu Mỹ USS Cincinnati cập cảng, và ông Hun Manet nói cơ sở không dành riêng cho Trung Quốc (Lầu Năm Góc; AFP qua Dawn).',
          en: 'Djibouti opened in 2017, the first overseas base (CRS). Ream: in April 2025 Cambodia’s prime minister and a PLA delegation inaugurated a Joint Logistics and Training Center; on 24 Jan 2026 AFP saw two Chinese warships there when the US ship USS Cincinnati docked, and Hun Manet said the facility is not for China’s exclusive use (Pentagon; AFP via Dawn).'
        }
      ],
      ll: [78, 14],
      k: 1.6,
      layers: [],
      show: ['base_djibouti', 'base_ream', 'base_yulin', 'malacca'],
      hl: { China: CHN, Djibouti: PORT, Cambodia: PORT },
      dim: true,
      draw: [
        { k: 'pt', p: [43.15, 11.59], c: PORT, r: 4, label: { vi: 'Djibouti', en: 'Djibouti' }, dy: -9 },
        { k: 'pt', p: [103.64, 10.51], c: PORT, r: 4, label: { vi: 'Ream', en: 'Ream' }, dy: 10 },
        { k: 'pt', p: [109.5, 18.25], c: PORT, r: 4, label: { vi: 'Tam Á (Phúc Kiến)', en: 'Sanya (Fujian)' }, side: 'l' }
      ],
      key: [
        { c: CHN, vi: 'Trung Quốc', en: 'China' },
        { c: PORT, vi: 'Nước có cơ sở được nêu', en: 'Hosts of facilities named' }
      ],
      src: [4, 7, 17, 18, 19, 20]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Năm 2026 là năm ngoại giao dày đặc giữa Mỹ và Trung Quốc: ông Trump tới Bắc Kinh giữa tháng 5, ông Tập thăm Washington cuối tháng 9, và theo Bộ Ngoại giao Trung Quốc hai nhà lãnh đạo dự định dự các sự kiện APEC và G20 của nhau (APEC Thâm Quyến 18–19/11). Kinh tế Trung Quốc vẫn tăng quanh 4,5%. Theo ông Joseph Wu của Đài Loan, hơn 100 tàu hải quân và hải cảnh Trung Quốc đang ở Tây Thái Bình Dương. Các điểm nghẽn của Trung Quốc vẫn là biển gần bờ và các eo biển, nay thêm Hormuz.',
        en: '2026 has been a year of dense US–China diplomacy: Trump went to Beijing in mid-May, Xi visited Washington in late September, and, per China’s foreign ministry, both leaders intend to attend each other’s APEC and G20 events (APEC Shenzhen, 18–19 Nov). China’s economy is still growing around 4.5%. According to Taiwan’s Joseph Wu, more than 100 Chinese navy and coast guard ships are in the western Pacific. China’s choke points remain the near seas and the straits, now with Hormuz added.'
      },
      core: {
        vi: 'Với Bắc Kinh, nói theo lập luận chính thức, mục tiêu là phát triển và thống nhất trong một môi trường bên ngoài mà Thủ tướng Lý Cường mô tả là “đặc biệt phức tạp” (Quốc hội 3/2025, theo Lầu Năm Góc) và cho rằng Bắc Kinh tin Mỹ muốn kiềm chế mình. Bộ Ngoại giao Trung Quốc mô tả chuyến thăm Mỹ là xây dựng quan hệ “ổn định chiến lược mang tính xây dựng”, trong khi Lầu Năm Góc nói Bắc Kinh vẫn tin Washington muốn kiềm chế Trung Quốc. Phía bên kia, Mỹ và các nước láng giềng coi các bước tăng cường hải quân là sức ép lên chuỗi đảo; không bên nào chứng minh được ý định của bên kia.',
        en: 'For Beijing, on its stated logic, the aim is development and unification in an outside environment that Premier Li Qiang described as “exceptionally complex” (National People’s Congress, Mar 2025, per the Pentagon) and says Beijing believes the US wants to contain it. China’s foreign ministry describes the US visit as building a “constructive relationship of strategic stability”, while the Pentagon says Beijing still believes Washington seeks to contain China. On the other side, the US and China’s neighbours see the naval build-up as pressure on the island chain; neither side can prove the other’s intent.'
      },
      facts: [
        {
          vi: 'GDP quý 3/2026 tăng 4,5% so với cùng kỳ, 9 tháng đầu năm tăng 4,6% (Tân Hoa Xã, theo NBS, 19/10/2026). Ông Trump tới Bắc Kinh ngày 13/5/2026; AP ghi các chủ đề gồm cuộc chiến với Iran, thương mại và Đài Loan.',
          en: 'Q3 2026 GDP grew 4.5% year on year and 4.6% over the first nine months (Xinhua, citing NBS, 19 Oct 2026). Trump arrived in Beijing on 13 May 2026; AP listed the Iran war, trade and Taiwan among the topics.'
        },
        {
          vi: 'Bộ Ngoại giao Trung Quốc (26/9/2026): ông Tập thăm Mỹ 23–25/9; hai bên đồng ý rằng không nước nào được thu phí qua các tuyến thủy quốc tế, lập Hội đồng Thương mại, cắt giảm thuế đối ứng với hàng hóa 30 tỷ USD, ra mắt đối thoại về AI (vòng đầu vào tháng 11) và sớm ký biên bản liên lạc khi khủng hoảng giữa quân đội hai nước. Tuyên bố không nhắc Đài Loan. ANI đưa tin thỏa thuận thương mại được gia hạn tới 10/1/2027 (một nguồn).',
          en: 'Chinese Foreign Ministry (26 Sep 2026): Xi visited the US on 23–25 Sep; the two sides agreed that no country should charge tolls on international waterways, to set up a Board of Trade, to cut reciprocal tariffs on $30 billion of goods, to launch an AI dialogue (first exchange in November) and to conclude a military crisis-communication memorandum soon. The statement does not mention Taiwan. ANI reported the trade truce extended to 10 Jan 2027 (single source).'
        },
        {
          vi: 'Nhập dầu thô quý 2/2026 của Trung Quốc: 8,1 triệu thùng/ngày, thấp hơn 32% so với quý trước (EIA, 31/7/2026); chưa có số liệu chính thức cho các tháng sau trong nguồn này. Tháng 11/2026, theo ông Joseph Wu, hơn 100 tàu hải quân và hải cảnh Trung Quốc ở Tây Thái Bình Dương; AEI và ISW đánh giá có thể là một cuộc tập trận không công bố (Taipei Times, 8/11/2026).',
          en: 'China’s crude imports in Q2 2026: 8.1 million barrels a day, 32% below the previous quarter (EIA, 31 Jul 2026); no official figure for later months is in this source. In November 2026, according to Joseph Wu, more than 100 Chinese navy and coast guard ships were in the western Pacific; AEI and ISW assess it may be an unannounced exercise (Taipei Times, 8 Nov 2026).'
        }
      ],
      ll: [112, 30],
      k: 2.4,
      layers: [],
      show: [],
      hl: { China: CHN },
      dim: true,
      src: [23, 22, 21, 24, 28, 15, 25, 7]
    }
  ]
};
