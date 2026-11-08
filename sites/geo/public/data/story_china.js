// Explainer: China, told as one argument in short steps: a crowded eastern core, wide thinly peopled lands around it, land
// borders with mountains and treaties, a way to the sea through narrow gaps, the overland routes and the navy Beijing builds
// in answer, how its neighbours read those steps, and where it stands. The East Sea itself is its own story (story_biendong).
// Facts from the research pack of 8 Nov 2026; each step names its sources. No border, line of control or live situation is
// drawn: the only lines are the Hu Line (a population-geography line, not a boundary) and an illustrative oil-route arrow.
const CHN = '#D9A441', GREY = '#9CA3AF', HU = '#7A5C2E', FLOW = '#D97706', PORT = '#C8372D', HOT = '#D9383A';
const ARC = '#6B8F9C', PH = '#378ADD', KH = '#1D9E75';

export const CHINA = {
  id: 'china',
  icon: '🏯',
  c: '#C8372D',
  title: { vi: 'Trung Quốc: bị bó chặt ngay trên bờ biển của mình', en: 'China: hemmed in on its own coast' },
  sub: { vi: 'Vì sao một nước lớn vẫn lo bị bao vây', en: 'Why a big power still worries about being hemmed in' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026: hội nghị lãnh đạo APEC dự kiến họp ở Thâm Quyến ngày 18–19/11. Theo ông Joseph Wu của Đài Loan, hơn 100 tàu hải quân và hải cảnh Trung Quốc đang ở Tây Thái Bình Dương; AEI và ISW đánh giá đó có thể là một cuộc tập trận không công bố (Taipei Times, 8/11/2026). GDP quý 3/2026 của Trung Quốc tăng 4,5% so với cùng kỳ (Tân Hoa Xã, theo Cục Thống kê).',
    en: 'As of 8 Nov 2026: the APEC leaders’ meeting is scheduled for 18–19 Nov in Shenzhen. According to Taiwan’s Joseph Wu, more than 100 Chinese navy and coast guard ships are in the western Pacific; AEI and ISW assess it may be an unannounced exercise (Taipei Times, 8 Nov 2026). China’s Q3 2026 GDP grew 4.5% year on year (Xinhua, citing the National Bureau of Statistics).'
  },
  statusSrc: [25, 24, 23],
  sources: [
    { n: 'NBS, Main Data of the Seventh National Population Census (11/5/2021)', url: 'https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817185.html' },
    { n: 'Wikipedia, Heihe–Tengchong (Hu) Line, trích Naughton (2007)', url: 'https://en.wikipedia.org/wiki/Heihe%E2%80%93Tengchong_Line' },
    { n: 'Tim Marshall, Prisoners of Geography (2015), lời mở đầu, bản tiếng Bồ Đào Nha 2017', url: 'https://www.saidadeemergencia.com/wp-content/uploads/2024/01/Prisioneiros_da_Geografia.pdf' },
    { n: 'US Defense Dept, China Military Power Report 2025 (23/12/2025)', url: 'https://media.defense.gov/2025/Dec/23/2003849070/-1/-1/1/ANNUAL-REPORT-TO-CONGRESS-MILITARY-AND-SECURITY-DEVELOPMENTS-INVOLVING-THE-PEOPLES-REPUBLIC-OF-CHINA-2025.PDF' },
    { n: 'NBS, Communiqué of the Seventh National Population Census No. 3 (11/5/2021)', url: 'https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817188.html' },
    { n: 'China Daily, Xinjiang', url: 'https://govt.chinadaily.com.cn/s/202106/02/WS5d09a454498e12256565e152/the-largest-in-area-of-all-the-province-level-administrative-regions-of-china.html' },
    { n: 'State Council, China’s Military Strategy (5/2015)', url: 'https://english.www.gov.cn/archive/white_paper/2015/05/27/content_281475115610833.htm' },
    { n: 'OHCHR, Assessment of human rights concerns in Xinjiang (31/8/2022)', url: 'https://www.ohchr.org/sites/default/files/documents/countries/2022-08-31/22-08-31-final-assesment.pdf' },
    { n: 'China Daily (29/10/2021), luật biên giới đất liền, ông Gao Jinlu', url: 'https://www.chinadaily.com.cn/a/202110/29/WS617b32d0a310cdd39bc71f8f.html' },
    { n: 'Reuters qua Baird Maritime (14/1/2026), nhập dầu 2025', url: 'https://www.bairdmaritime.com/shipping/tankers/chinas-2025-oil-imports-hit-record-after-december-surge' },
    { n: 'Columbia CGEP, Erica Downs (29/1/2026)', url: 'https://www.energypolicy.columbia.edu/where-china-gets-its-oil-crude-imports-in-2025-reveal-stockpiling-and-changing-fortunes-of-certain-suppliers-including-those-sanctioned/' },
    { n: 'EIA, World Oil Transit Chokepoints (cập nhật 3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/' },
    { n: 'EIA, Today in Energy (11/8/2017), eo Malacca', url: 'https://www.eia.gov/todayinenergy/detail.php?id=32452' },
    { n: 'Wikipedia, Malacca dilemma', url: 'https://en.wikipedia.org/wiki/Malacca_dilemma' },
    { n: 'Moscow Times (2/9/2025), biên bản Gazprom–CNPC', url: 'https://www.themoscowtimes.com/2026/08/06/russia-and-china-sign-deal-to-advance-power-of-siberia-2-pipeline' },
    { n: 'Maritime Executive (29/1/2015), đường ống Myanmar–Trung Quốc', url: 'https://maritime-executive.com/article/myanmar-china-pipeline-reduces-shipping-need' },
    { n: 'EIA, Today in Energy (31/7/2026), nhập dầu thô quý 2/2026', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67905' },
    { n: 'China Daily / Tân Hoa Xã (7/11/2025), tàu sân bay Phúc Kiến', url: 'https://global.chinadaily.com.cn/a/202511/07/WS690d7d5aa310bfcd27fc571c.html' },
    { n: 'CRS RL33153, China Naval Modernization (24/4/2025)', url: 'https://www.everycrsreport.com/files/2025-04-24_RL33153_e7d0d9c799c5e97e4cb6e661498b2bed09b722c6.html' },
    { n: 'PCA, Press Release No. 11 (12/7/2016)', url: 'https://docs.pca-cpa.org/2016/07/PH-CN-20160712-Press-Release-No-11-English.pdf' },
    { n: 'AFP qua Dawn (25/1/2026), căn cứ Ream', url: 'https://www.dawn.com/news/1968909' },
    { n: 'AP qua WTOP (13/5/2026), ông Trump tới Bắc Kinh', url: 'https://wtop.com/national/2026/05/the-latest-trump-arrives-in-china-to-meet-with-xi-in-beijing/' },
    { n: 'Bộ Ngoại giao Trung Quốc (26/9/2026), chuyến thăm Mỹ của ông Tập', url: 'https://www.mfa.gov.cn/esp/zxxx/202609/t20260926_12031715.html' },
    { n: 'Tân Hoa Xã qua People’s Daily (19/10/2026), GDP quý 3', url: 'https://en.people.cn/n3/2026/1019/c90000-20509872.html' },
    { n: 'Taipei Times (8/11/2026)', url: 'https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351' },
    { n: 'CGTN (13/12/2025), APEC Thâm Quyến', url: 'https://news.cgtn.com/news/2025-12-13/2026-APEC-meeting-to-be-held-Nov-18-19-in-Shenzhen-China-1J43L2Fb2w0/share_amp.html' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Hơn chín phần mười dân sống ở phía đông', en: 'Over nine in ten people live in the east' },
      text: {
        vi: 'Trung Quốc rộng và đông người, vậy vì sao Bắc Kinh vẫn lo bị bao vây? Tim Marshall cho rằng địa lý giới hạn lựa chọn của mọi nhà lãnh đạo, nên hãy bắt đầu từ bản đồ. Phần lớn người dân sống dồn ở phía đông, trên đồng bằng Hoàng Hà và Trường Giang. Năm 1935 nhà địa lý Hồ Hoán Dung kẻ một đường chéo chỉ ra điều này. Phía tây đường ấy là cao nguyên, sa mạc, rất ít người.',
        en: 'China is vast and crowded, so why does Beijing still worry about being hemmed in? Tim Marshall argues that geography limits every leader’s choices, so start with the map. Most people live crowded into the east, on the plains of the Yellow River and the Yangtze. In 1935 the geographer Hu Huanyong drew a diagonal line to show this. West of it lie plateaus and deserts, with very few people.'
      },
      facts: [
        {
          vi: 'Khoảng 94% dân số sống ở phía đông đường Hồ, trên khoảng 43% diện tích; số liệu thay đổi theo năm và theo nghiên cứu (Naughton 2007, số liệu 2002, qua Wikipedia).',
          en: 'About 94% of people live east of the Hu Line, on about 43% of the area; the figures vary by year and study (Naughton 2007, 2002 data, via Wikipedia).'
        },
        {
          vi: 'Điều tra dân số 2020: đại lục có 1.411.778.724 người, trong đó người Hán chiếm 91,11% (Cục Thống kê Trung Quốc, NBS).',
          en: '2020 census: the mainland had 1,411,778,724 people, of whom the Han were 91.11% (China’s National Bureau of Statistics).'
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
        { k: 'pt', p: [116.4, 39.9], c: PORT, r: 3.5, label: { vi: 'Bắc Kinh', en: 'Beijing' }, dy: -9 },
        { k: 'pt', p: [121.5, 31.2], c: PORT, r: 3.5, label: { vi: 'Thượng Hải', en: 'Shanghai' } },
        { k: 'pt', p: [113.3, 23.1], c: PORT, r: 3.5, label: { vi: 'Quảng Châu', en: 'Guangzhou' }, dy: 10 }
      ],
      key: [{ c: HU, vi: 'Đường Hồ: chỉ phân bố dân, không phải ranh giới', en: 'Hu Line: shows where people live, not a boundary' }],
      src: [2, 1, 0, 3]
    },
    {
      tag: 'need',
      title: { vi: 'Quanh vùng lõi là đất rộng mà thưa người', en: 'Around the core lie wide, empty lands' },
      text: {
        vi: 'Quanh vùng lõi là những miền đất rộng, cao hoặc khô: cao nguyên Tây Tạng, sa mạc ở Tân Cương, thảo nguyên và Gobi ở Nội Mông. Tây Tạng, Tân Cương, Nội Mông và Thanh Hải cộng lại chỉ có khoảng 4,2% dân số. Những miền này nằm giữa vùng lõi và các nước láng giềng; riêng Tân Cương giáp tám nước. Sách trắng 2015 của Bắc Kinh coi phong trào ly khai ở Tân Cương và Tây Tạng là mối đe dọa.',
        en: 'Around the core lie wide lands, high or dry: the Tibetan plateau, the deserts of Xinjiang, the steppe and Gobi of Inner Mongolia. Tibet, Xinjiang, Inner Mongolia and Qinghai together hold only about 4.2% of the population. These lands sit between the core and the neighbours; Xinjiang alone borders eight countries. Beijing’s 2015 white paper treats separatist movements in Xinjiang and Tibet as a threat.'
      },
      facts: [
        {
          vi: 'Điều tra 2020: Tân Cương 1,83% dân số, Nội Mông 1,70%, Thanh Hải 0,42%, Tây Tạng 0,26%; tổng khoảng 4,2% là số cộng của trang này (NBS). Tân Cương rộng 1,66 triệu km², khoảng một phần sáu lãnh thổ (China Daily).',
          en: '2020 census: Xinjiang 1.83% of the population, Inner Mongolia 1.70%, Qinghai 0.42%, Tibet 0.26%; the total of about 4.2% is this page’s own sum (NBS). Xinjiang covers 1.66 million km², about one sixth of the territory (China Daily).'
        },
        {
          vi: 'Ngày 31/8/2022 Văn phòng Nhân quyền LHQ viết rằng việc giam giữ người Uyghur và các nhóm Hồi giáo khác ở Tân Cương “có thể cấu thành tội ác quốc tế”; phản hồi của chính phủ Trung Quốc được đính kèm báo cáo (OHCHR).',
          en: 'On 31 Aug 2022 the UN human rights office wrote that the detention of Uyghur and other Muslim groups in Xinjiang “may constitute international crimes”; the Chinese government’s response is annexed to the report (OHCHR).'
        }
      ],
      ll: [100, 37],
      k: 2.4,
      layers: [],
      show: ['tibet', 'taklamakan', 'gobi'],
      hl: { China: CHN },
      dim: true,
      draw: [
        { k: 'label', p: [114.5, 31.0], c: '#8A5A00', label: { vi: 'vùng lõi', en: 'core' }, dy: 0 },
        { k: 'label', p: [89.0, 37.0], c: '#8A5A00', label: { vi: 'đất rộng, thưa người', en: 'wide, empty lands' }, dy: 0 },
        { k: 'pt', p: [91.1, 29.65], c: PORT, r: 3.5, label: { vi: 'Lhasa', en: 'Lhasa' }, dy: 10 },
        { k: 'pt', p: [87.6, 43.8], c: PORT, r: 3.5, label: { vi: 'Ürümqi', en: 'Ürümqi' }, dy: -9 }
      ],
      src: [4, 5, 6, 7]
    },
    {
      tag: 'blocked',
      title: { vi: 'Trên bộ có núi che, nhưng láng giềng đông', en: 'On land, mountains guard, but neighbours crowd' },
      text: {
        vi: 'Trên bộ, Trung Quốc giáp 14 nước. Phần lớn đường biên chạy qua núi, sa mạc và thảo nguyên; ở phía nam, Himalaya và Karakoram đứng như một bức tường. Bắc Kinh đã ký hiệp ước quản lý biên giới với phần lớn láng giềng. Nhưng chính sách trắng 2015 thừa nhận vài tranh chấp đất liền “vẫn âm ỉ”. Với Ấn Độ, Lầu Năm Góc cho rằng New Delhi “có lẽ vẫn hoài nghi” Bắc Kinh.',
        en: 'On land, China borders 14 countries. Most of the frontier runs through mountains, desert and steppe; in the south the Himalaya and Karakoram stand like a wall. Beijing has signed border-management treaties with most of its neighbours. Yet the 2015 white paper itself admits some land disputes are “still smoldering”. On India, the Pentagon says New Delhi “probably remains skeptical” of Beijing.'
      },
      facts: [
        {
          vi: 'Theo ông Gao Jinlu (Ủy ban Đối ngoại Quốc hội Trung Quốc), biên giới đất liền dài khoảng 22.000 km, giáp 14 nước, đã có hiệp ước quản lý biên giới với 10 nước (China Daily, 29/10/2021).',
          en: 'According to Gao Jinlu of the NPC Foreign Affairs Committee, the land border is about 22,000 km long, touches 14 countries, and border-management treaties exist with 10 of them (China Daily, 29 Oct 2021).'
        },
        {
          vi: 'Tháng 10/2024 Ấn Độ và Trung Quốc thỏa thuận rút khỏi các điểm đối đầu còn lại dọc Đường kiểm soát thực tế; Lầu Năm Góc cho rằng sự ngờ vực vẫn giới hạn quan hệ hai nước (12/2025).',
          en: 'In October 2024 India and China agreed to disengage from the remaining standoff sites along the Line of Actual Control; the Pentagon says mistrust still limits the relationship (Dec 2025).'
        }
      ],
      ll: [95, 36],
      k: 2.0,
      layers: [],
      show: ['himalaya', 'karakoram'],
      hl: {
        China: CHN, India: GREY, Russia: GREY, Mongolia: GREY, Kazakhstan: GREY, Kyrgyzstan: GREY, Tajikistan: GREY, Pakistan: GREY,
        Afghanistan: GREY, Nepal: GREY, Bhutan: GREY, Myanmar: GREY, Laos: GREY, Vietnam: GREY, 'North Korea': GREY
      },
      dim: true,
      key: [
        { c: CHN, vi: 'Trung Quốc', en: 'China' },
        { c: GREY, vi: '14 nước láng giềng trên bộ', en: 'The 14 land neighbours' }
      ],
      src: [8, 6, 3]
    },
    {
      tag: 'blocked',
      title: { vi: 'Ra biển thì cửa nào cũng hẹp', en: 'At sea, every way out is narrow' },
      text: {
        vi: 'Ra biển thì khó hơn. Nền kinh tế cần dầu, và phần lớn dầu thô Trung Quốc nhập về đến bằng tàu. Nhưng ngoài khơi là một vòng đảo của Nhật Bản, Đài Loan và Philippines, chỉ chừa vài khe hẹp. Ở phía nam, tàu dầu từ Trung Đông phải qua eo Malacca, chỗ hẹp nhất chỉ khoảng 2,7 km. Giới phân tích gọi điểm yếu này là “thế kẹt Malacca”.',
        en: 'The sea is harder. The economy needs oil, and most of the crude China imports comes by ship. But offshore lies an arc of islands of Japan, Taiwan and the Philippines, leaving only a few narrow gaps. To the south, tankers from the Middle East must pass the Strait of Malacca, only about 2.7 km wide at its narrowest. Analysts call this weak spot the “Malacca dilemma”.'
      },
      facts: [
        {
          vi: 'Năm 2025 Trung Quốc nhập kỷ lục khoảng 11,55 triệu thùng dầu thô mỗi ngày (Hải quan Trung Quốc, qua Reuters); hơn 90% lượng nhập đến bằng đường biển (Columbia CGEP).',
          en: 'In 2025 China imported a record of about 11.55 million barrels of crude a day (China customs, via Reuters); over 90% of imports arrived by sea (Columbia CGEP).'
        },
        {
          vi: 'Nửa đầu 2025 có khoảng 23,2 triệu thùng dầu/ngày qua eo Malacca; Trung Quốc chiếm 48% lượng hàng nhập đi qua eo này. Đó không phải tỷ lệ dầu của Trung Quốc đi qua Malacca (EIA, 3/3/2026).',
          en: 'In the first half of 2025 about 23.2 million barrels of oil a day passed the Strait of Malacca; China took 48% of the import volumes passing through it. That is not the share of China’s oil that uses Malacca (EIA, 3 Mar 2026).'
        }
      ],
      ll: [112, 19],
      k: 2.5,
      layers: [],
      show: ['firstchain', 'malacca', 'luzon', 'taiwanstrait'],
      hl: { China: CHN, Japan: ARC, Taiwan: ARC, Philippines: ARC },
      dim: true,
      draw: [
        { k: 'line', pts: [[95, 6], [100.6, 3.2], [103.8, 1.3], [109, 6], [114, 12], [117.5, 21.5], [119.6, 24.8], [121.6, 28.5], [122.1, 29.9]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'tuyến dầu (minh họa)', en: 'oil route (illustrative)' }, lp: [111.5, 9.5], dy: 12 },
        { k: 'pt', p: [103.6, 1.2], c: HOT, r: 5, label: { vi: 'Malacca ~2,7 km', en: 'Malacca ~2.7 km' } }
      ],
      key: [
        { c: ARC, vi: 'Vòng đảo ngoài khơi', en: 'The offshore island arc' },
        { c: HOT, vi: 'Cửa hẹp', en: 'Narrow strait' }
      ],
      src: [9, 10, 12, 13, 11]
    },
    {
      tag: 'move',
      title: { vi: 'Vì thế Bắc Kinh làm đường vòng trên bộ', en: 'So Beijing builds ways round over land' },
      text: {
        vi: 'Để bớt dựa vào một eo biển, Trung Quốc kéo đường ống qua đất liền. Dầu về qua Kazakhstan và từ Nga, khí về theo đường ống Sức mạnh Siberia. Ở phía nam, một đường ống dài 771 km chở dầu từ cảng Kyaukphyu (Myanmar) lên Vân Nam. Quý 2/2026, khi giá dầu tăng vì Hormuz gián đoạn, dầu nhập bằng tàu giảm mạnh, còn dầu qua đường ống vẫn ổn định. Nhưng các lối này vẫn nhỏ so với đường biển.',
        en: 'To rely less on one strait, China runs pipelines over land. Oil comes via Kazakhstan and from Russia, gas through the Power of Siberia pipeline. In the south, a 771 km pipeline carries oil from the port of Kyaukphyu (Myanmar) up to Yunnan. In Q2 2026, when disrupted Hormuz flows pushed prices up, tanker imports fell sharply while pipeline imports stayed stable. But these routes are still small next to the sea.'
      },
      facts: [
        {
          vi: 'Rosneft xuất khoảng 200.000 thùng/ngày qua đường ống Kazakhstan–Trung Quốc; nhánh ESPO từ Nga chở khoảng 600.000–700.000 thùng/ngày (Columbia CGEP, 29/1/2026). Tháng 9/2025 đường ống khí Sức mạnh Siberia 1 được thỏa thuận nâng từ 38 lên 44 tỷ m³/năm (Moscow Times).',
          en: 'Rosneft exports about 200,000 barrels a day through the Kazakhstan–China pipeline; the ESPO spur from Russia carries about 600,000–700,000 a day (Columbia CGEP, 29 Jan 2026). In Sep 2025 the Power of Siberia 1 gas pipeline was agreed to rise from 38 to 44 bcm a year (Moscow Times).'
        },
        {
          vi: 'Quý 2/2026 Trung Quốc nhập 8,1 triệu thùng dầu thô/ngày, thấp hơn 32% so với quý 1; mức giảm đến từ tàu chở dầu (EIA, 31/7/2026).',
          en: 'In Q2 2026 China imported 8.1 million barrels of crude a day, 32% below Q1; the drop came from tankers (EIA, 31 Jul 2026).'
        }
      ],
      ll: [102, 36],
      k: 1.9,
      layers: [],
      show: ['pipe_cac', 'pipe_espo', 'pipe_pos1', 'pipe_myanmar', 'malacca'],
      hl: { China: CHN, Kazakhstan: GREY, Russia: GREY, Myanmar: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [93.55, 19.43], c: PORT, r: 4, label: { vi: 'Kyaukphyu', en: 'Kyaukphyu' }, dy: 10 },
        { k: 'pt', p: [102.7, 25.0], c: PORT, r: 3.5, label: { vi: 'Côn Minh', en: 'Kunming' } }
      ],
      key: [{ c: GREY, vi: 'Nơi đường ống đi qua', en: 'Where the pipelines come from' }],
      src: [10, 14, 15, 16]
    },
    {
      tag: 'move',
      title: { vi: 'Và đưa hải quân ra biển xa', en: 'And takes its navy farther out' },
      text: {
        vi: 'Nước đi thứ hai là trên biển. Sách trắng quốc phòng 2015 viết rằng tư duy truyền thống “trọng đất hơn biển” phải bị gạt bỏ, và hải quân phải bảo vệ các tuyến hàng hải. Trung Quốc đóng tàu chiến nhanh; tàu sân bay thứ ba, Phúc Kiến, vào biên chế ngày 5/11/2025. Căn cứ ở nước ngoài thì còn ít: Djibouti và Ream ở Campuchia. Theo Lầu Năm Góc, trọng tâm của quân đội Trung Quốc vẫn là chuỗi đảo thứ nhất.',
        en: 'The second move is at sea. The 2015 defence white paper says the traditional mentality that “land outweighs sea” must be abandoned, and that the navy must protect the sea lanes. China builds warships fast; its third aircraft carrier, Fujian, was commissioned on 5 Nov 2025. Bases abroad are still few: Djibouti and Ream in Cambodia. According to the Pentagon, the Chinese military’s centre of gravity is still the First Island Chain.'
      },
      facts: [
        {
          vi: 'Hải quân Trung Quốc có “hơn 370” tàu và tàu ngầm trong biên chế chiến đấu (Lầu Năm Góc 2024, theo CRS), so với 296 tàu của Hải quân Mỹ (30/9/2024); hai bên đếm không hoàn toàn giống nhau.',
          en: 'China’s navy has “over 370” ships and submarines in its battle force (Pentagon 2024, as quoted by CRS), against 296 for the US Navy (30 Sep 2024); the two are not counted in exactly the same way.'
        },
        {
          vi: 'Djibouti mở năm 2017, là căn cứ nước ngoài đầu tiên (CRS). Lầu Năm Góc ghi hải quân Trung Quốc nhắm có tổng cộng chín tàu sân bay vào năm 2035.',
          en: 'Djibouti opened in 2017 as the first overseas base (CRS). The Pentagon says China’s navy aims for nine aircraft carriers in total by 2035.'
        }
      ],
      ll: [80, 14],
      k: 1.6,
      layers: [],
      show: ['base_djibouti', 'base_ream', 'base_yulin', 'firstchain'],
      hl: { China: CHN, Djibouti: PORT, Cambodia: PORT },
      dim: true,
      draw: [
        { k: 'pt', p: [43.15, 11.59], c: PORT, r: 4, label: { vi: 'Djibouti', en: 'Djibouti' }, dy: -9 },
        { k: 'pt', p: [103.64, 10.51], c: PORT, r: 4, label: { vi: 'Ream', en: 'Ream' }, dy: 10 },
        { k: 'pt', p: [109.5, 18.25], c: PORT, r: 4, label: { vi: 'Tam Á', en: 'Sanya' }, dy: -9 }
      ],
      key: [
        { c: CHN, vi: 'Trung Quốc', en: 'China' },
        { c: PORT, vi: 'Nơi có cơ sở được nêu', en: 'Hosts of the facilities named' }
      ],
      src: [6, 17, 18, 3]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng mỗi bước ra lại chạm nước khác', en: 'But every step out runs into others' },
      text: {
        vi: 'Các nước xung quanh nhìn những bước ấy khác hẳn. Philippines kiện ra tòa trọng tài, và năm 2016 tòa kết luận Trung Quốc không có cơ sở pháp lý để đòi “quyền lịch sử” trong đường chín đoạn; Bắc Kinh không chấp nhận. Lầu Năm Góc tả cách làm của hải cảnh Trung Quốc là “ngày càng quyết liệt”. Bắc Kinh thì nói một số láng giềng ven biển “có hành động khiêu khích”.',
        en: 'The countries around see those steps very differently. The Philippines took China to a tribunal, which concluded in 2016 that China has no legal basis to claim “historic rights” within the nine-dash line; Beijing does not accept it. The Pentagon describes China Coast Guard tactics as “increasingly aggressive”. Beijing, for its part, says some offshore neighbours “take provocative actions”.'
      },
      facts: [
        {
          vi: 'Ream: Lầu Năm Góc nói trước lễ khánh thành tháng 4/2025, hai tàu chiến Trung Quốc đã đóng thường trực ở cầu cảng; Campuchia và Trung Quốc phủ nhận việc Trung Quốc sẽ được đóng quân ở đó. Ngày 24/1/2026 AFP thấy hai tàu chiến Trung Quốc ở Ream khi tàu Mỹ USS Cincinnati cập cảng.',
          en: 'Ream: the Pentagon says that before the April 2025 opening, two Chinese warships were continuously stationed at the pier; Cambodia and China deny that China will be able to station forces there. On 24 Jan 2026 AFP saw two Chinese warships at Ream when the US ship USS Cincinnati docked.'
        }
      ],
      ll: [112, 17],
      k: 2.3,
      layers: [],
      show: ['firstchain', 'base_ream'],
      hl: { China: CHN, Philippines: PH, Cambodia: KH, Japan: ARC, Taiwan: ARC },
      dim: true,
      draw: [
        { k: 'pt', p: [103.64, 10.51], c: KH, r: 4, label: { vi: 'Ream', en: 'Ream' }, dy: 10 }
      ],
      key: [
        { c: PH, vi: 'Philippines (vụ kiện 2016)', en: 'Philippines (2016 case)' },
        { c: KH, vi: 'Campuchia (cơ sở Ream)', en: 'Cambodia (Ream facility)' }
      ],
      src: [19, 3, 6, 20]
    },
    {
      tag: 'outlook',
      title: { vi: 'Gặp nhau nhiều, nhưng địa lý không đổi', en: 'Many meetings, the same geography' },
      text: {
        vi: 'Năm 2026 hai lãnh đạo thăm nhau: ông Trump tới Bắc Kinh tháng 5, ông Tập sang Mỹ cuối tháng 9. Bộ Ngoại giao Trung Quốc nói hai bên đồng ý sớm ký văn bản về liên lạc quân sự khi khủng hoảng. Nhưng theo Lầu Năm Góc, Bắc Kinh vẫn tin Mỹ muốn kiềm chế mình. Gốc rễ nằm trên bản đồ: Bắc Kinh sợ bị nhốt sau những cửa biển hẹp, còn các nước xung quanh lo mỗi bước Trung Quốc tiến ra.',
        en: 'In 2026 the two leaders visited each other: Trump went to Beijing in May, Xi to the US in late September. China’s foreign ministry says the two sides agreed to sign a military crisis-communication memorandum soon. But according to the Pentagon, Beijing still believes the US wants to contain it. The root lies on the map: Beijing fears being shut in behind narrow sea gaps, and the countries around worry about every step China takes outward.'
      },
      ll: [106, 27],
      k: 1.8,
      layers: [],
      show: ['northchinaplain', 'tibet', 'himalaya', 'firstchain', 'malacca'],
      hl: { China: CHN, Japan: ARC, Taiwan: ARC, Philippines: ARC },
      dim: true,
      draw: [
        { k: 'label', p: [114.5, 31.0], c: '#8A5A00', label: { vi: 'vùng lõi', en: 'core' }, dy: 0 }
      ],
      key: [{ c: ARC, vi: 'Vòng đảo ngoài khơi', en: 'The offshore island arc' }],
      src: [21, 22, 3, 19]
    }
  ]
};
