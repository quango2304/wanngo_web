// Explainer: India and Pakistan, the mountains, the Indus and the sea. Facts fetched on 8 Nov 2026. Every government position is
// attributed to the party that holds it; Kashmir, the Line of Control, Siachen and the China-India boundary are sovereignty
// disputes, so nothing here draws a border, a Line of Control or a disputed-area polygon, and no country is highlighted (the
// engine would tint whole countries). Rivers, passes and ports are ordinary geography and are drawn as approximate shapes.
// `core` = the strategic logic of each step, always an interpretation attributed to whoever holds it (Marshall, a government, SIPRI...).
const IN = '#E8903A', PK = '#3F9142', IR = '#2E8B8B', GREY = '#6B7280';
const RW = '#2E7CC0', RE = '#E8903A';

export const INDOPAK = {
  id: 'indopak',
  icon: '🏔️',
  c: '#E8903A',
  title: { vi: 'Ấn Độ và Pakistan: núi, sông Ấn và biển', en: 'India and Pakistan: the mountains, the Indus and the sea' },
  sub: { vi: 'Một đồng bằng, một hệ thống sông và hai kho vũ khí hạt nhân', en: 'One plain, one river system and two nuclear arsenals' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến ngày 8/11/2026: ngừng bắn từ 10/5/2025 giữa Ấn Độ và Pakistan vẫn được báo cáo là giữ được (nguồn mới nhất được kiểm tra, Al Jazeera 29/5/2026, không ghi đụng độ quân sự mới), nhưng đối thoại chính thức bị đóng băng và hai nước vẫn cấm máy bay của nhau; lệnh cấm của Pakistan được kéo dài đến 24/11/2026. Ngày 31/8/2026 Toà Trọng tài ở The Hague nhất trí nhận định Hiệp ước Nước sông Ấn vẫn hoàn toàn có hiệu lực; Ấn Độ bác bỏ phán quyết và nói việc “tạm hoãn” hiệp ước vẫn có hiệu lực, còn Pakistan hoan nghênh. SIPRI ước tính tháng 1/2026 Ấn Độ có khoảng 190 và Pakistan khoảng 170 đầu đạn hạt nhân. Ở hai bên sườn, Ấn Độ và Trung Quốc họp vòng đàm phán biên giới thứ 25 ngày 25/8/2026; Pakistan và Taliban Afghanistan giao tranh từ tháng 10/2025 và chưa có thoả thuận bền vững (nguồn gần nhất: Al Jazeera 2/4/2026). Tình hình có thể đã thay đổi sau ngày này.',
    en: 'As of 8 Nov 2026: the India-Pakistan ceasefire of 10 May 2025 is reported to be holding (the latest source checked, Al Jazeera on 29 May 2026, notes no new military clashes), but official dialogue is frozen and each country still bars the other’s aircraft; Pakistan’s ban was extended to 24 Nov 2026. On 31 Aug 2026 the Court of Arbitration in The Hague unanimously found that the Indus Waters Treaty remains fully in force; India rejected the award and says its “abeyance” of the treaty still stands, while Pakistan welcomed it. SIPRI estimated in January 2026 that India has about 190 and Pakistan about 170 nuclear warheads. On the two flanks, India and China held their 25th round of boundary talks on 25 Aug 2026; Pakistan and the Afghan Taliban government have been fighting since October 2025 with no lasting deal (latest source: Al Jazeera, 2 Apr 2026). The situation may have changed after this date.'
  },
  statusSrc: [2, 3, 4, 8, 30, 22, 31, 29],
  bottom: {
    vi: 'Cốt lõi, theo cách đọc của các nhà phân tích như Tim Marshall (Prisoners of Geography, 2015), không phải sự thật đã được thừa nhận: núi che phía bắc, nên sự đối đầu dồn vào một đồng bằng phẳng bị đường biên cắt đôi, vào con sông mà Pakistan sống nhờ nhưng đầu nguồn nằm phía trên, và vào các vùng cao như Kashmir. Theo Pakistan, nước và chủ quyền là sống còn; theo Ấn Độ, an ninh trước khủng bố xuyên biên giới đi trước hiệp ước. Cả hai đều có vũ khí hạt nhân (SIPRI), nên cuộc đối đầu khó kết thúc bằng sức mạnh nhưng khó tự tan.',
    en: 'The core, in the reading of analysts such as Tim Marshall (Prisoners of Geography, 2015) and not a settled fact: mountains cover the north, so the contest narrows to one flat plain cut by a border, to a river that Pakistan lives from but whose headwaters lie upstream, and to high ground such as Kashmir. According to Pakistan, water and sovereignty are vital; according to India, security against cross-border terrorism comes before the treaty. Both hold nuclear weapons (SIPRI), so the rivalry is hard to end by force but also hard to dissolve on its own.'
  },
  sources: [
    { n: 'Indus Waters Treaty 1960, UN Treaty Series vol. 419 (19/9/1960)', url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%20419/volume-419-I-6032-English.pdf' },
    { n: 'World Bank, Fact Sheet: The Indus Waters Treaty 1960 (6/2023)', url: 'https://www.worldbank.org/en/region/sar/brief/fact-sheet-the-indus-waters-treaty-1960-and-the-world-bank' },
    { n: 'Permanent Court of Arbitration, press release (31/8/2026)', url: 'https://docs.pca-cpa.org/2026/08/3c1dbc21-2023-01-20260831-pca-press-release.pdf' },
    { n: 'Dawn (31/8/2026)', url: 'https://www.dawn.com/news/2026398' },
    { n: 'The Tribune India (31/8/2026)', url: 'https://www.tribuneindia.com/news/india/indus-waters-treaty-will-remain-in-abeyance-says-india-rejects-international-courts-verdict/' },
    { n: 'Indian MEA special briefing (23/4/2025, transcript)', url: 'https://www.indembassyhanoi.gov.in/page/transcript-of-special-briefing-by-mea/' },
    { n: 'Dawn, Pakistan National Security Committee (24/4/2025)', url: 'https://www.dawn.com/news/1906284/' },
    { n: 'CRS In Focus IF13000 (13/5/2025)', url: 'https://www.everycrsreport.com/reports/IF13000.html' },
    { n: 'SIPRI Yearbook 2026, ch. 8 World nuclear forces (6/2026)', url: 'https://www.sipri.org/sites/default/files/YB26%2008%20World%20Nuclear%20Forces.pdf' },
    { n: 'World Bank WDI, population (2025)', url: 'https://data.worldbank.org/indicator/SP.POP.TOTL?locations=IN-PK' },
    { n: 'World Bank WDI, urban population share (2025)', url: 'https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN-PK' },
    { n: 'World Bank WDI, agriculture share of freshwater withdrawals (latest FAO estimate)', url: 'https://data.worldbank.org/indicator/ER.H2O.FWAG.ZS?locations=IN-PK' },
    { n: 'World Bank WDI, irrigated share of agricultural land (2024)', url: 'https://data.worldbank.org/indicator/AG.LND.IRIG.AG.ZS?locations=IN-PK' },
    { n: 'Tim Marshall, Prisoners of Geography, excerpt on isegoria.net (2/7/2025)', url: 'https://www.isegoria.net/?p=52981' },
    { n: 'Wikipedia, Himalayas', url: 'https://en.wikipedia.org/wiki/Himalayas' },
    { n: 'Wikipedia, Karakoram', url: 'https://en.wikipedia.org/wiki/Karakoram' },
    { n: 'Al Jazeera (8/12/2020, Everest)', url: 'https://www.aljazeera.com/news/2020/12/8/mt-everest-nepal-china-announce-revised-height-at-8848-metres' },
    { n: 'Wikipedia, Karakoram Highway', url: 'https://en.wikipedia.org/wiki/Karakoram_Highway' },
    { n: 'Wikipedia, Wakhan Corridor', url: 'https://en.wikipedia.org/wiki/Wakhan_Corridor' },
    { n: 'Wikipedia, Indus River', url: 'https://en.wikipedia.org/wiki/Indus_River' },
    { n: 'UNMOGIP, Background', url: 'https://unmogip.unmissions.org/en/unmogip-background' },
    { n: 'Wikipedia, Sino-Indian border dispute', url: 'https://en.wikipedia.org/wiki/Sino-Indian_border_dispute' },
    { n: 'China MFA, 25th round of Special Representatives talks (26/8/2026)', url: 'https://www.fmprc.gov.cn/eng/wjb/wjbz/hd/202608/t20260826_12010652.html' },
    { n: 'LSE South Asia blog, The Wagah-Attari border (14/8/2017)', url: 'https://blogs.lse.ac.uk/southasia/2017/08/14/no-mans-land-the-wagah-attari-border' },
    { n: 'Census of India 2011 via citypopulation.de, Punjab', url: 'https://citypopulation.de/en/india/punjab/admin/' },
    { n: 'US EIA, Today in Energy (16/6/2025)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' },
    { n: 'Al Jazeera (6/11/2026, Kpler, Hormuz)', url: 'https://www.aljazeera.com/news/2026/11/6/why-is-iran-exempting-india-china-qatar-iraq-from-hormuz-restrictions' },
    { n: 'Al Jazeera (29/4/2026, Chabahar)', url: 'https://www.aljazeera.com/features/2026/4/29/is-indias-chabahar-dream-in-iran-dead' },
    { n: 'Dawn (20/6/2026, Karachi Port)', url: 'https://www.dawn.com/news/amp/2009363' },
    { n: 'Al Jazeera (29/5/2026, India-Pakistan)', url: 'https://www.aljazeera.com/news/2026/5/29/how-indian-pm-modis-efforts-to-isolate-pakistan-backfired' },
    { n: 'Gulf News (18/10/2026, airspace)', url: 'https://gulfnews.com/business/aviation/pakistan-extends-airspace-ban-on-indian-aircraft-until-november-24-1.500714891' },
    { n: 'Al Jazeera (2/4/2026, Pakistan-Afghanistan)', url: 'https://www.aljazeera.com/news/2026/4/2/pakistan-afghanistan-hold-talks-in-china-to-end-months-of-conflict' }
  ],
  steps: [
    {
      title: { vi: 'Bức tường núi ở phía bắc, sa mạc và đồng bằng phía nam', en: 'A wall of mountains to the north, desert and plain below' },
      text: {
        vi: 'Phía bắc tiểu lục địa là hai dãy núi khổng lồ: Himalaya, một cung dài hơn 2.400 km, và Karakoram, nơi có đỉnh K2 cao thứ hai thế giới. Cùng cao nguyên Tây Tạng phía sau, chúng là rào chắn tự nhiên giữa Nam Á với Trung Á và Trung Quốc, nên người và quân đội chỉ qua được ở một số đèo, như Khyber ở phía tây và Khunjerab trên đường cao tốc Karakoram. Phía nam núi là đồng bằng Ấn–Hằng và sa mạc Thar, nơi đi lại dễ hơn nhiều.',
        en: 'North of the subcontinent stand two giant ranges: the Himalaya, an arc more than 2,400 km long, and the Karakoram, home of K2, the second-highest peak on Earth. With the Tibetan plateau behind them they form a natural barrier between South Asia and Central Asia and China, so people and armies cross mainly at a few passes, such as the Khyber in the west and the Khunjerab on the Karakoram Highway. South of the mountains lie the Indo-Gangetic plain and the Thar desert, where movement is far easier.'
      },
      core: {
        vi: 'Theo cách đọc địa lý mà Tim Marshall dùng trong Prisoners of Geography (2015), núi cao làm cho phía bắc khó vượt, nên cuộc tranh giành dồn vào vài cái đèo, vài dải đất cao và vào đồng bằng, nơi quân đội đi lại được. SIPRI nhận xét kế hoạch hạt nhân của Ấn Độ ngày càng chú ý các hệ thống tầm xa nhằm vào Trung Quốc, nhưng vẫn chịu ảnh hưởng nặng của cuộc đối đầu với Pakistan. Đây là cách diễn giải, không phải sự thật đã được thừa nhận.',
        en: 'In the geographic reading Tim Marshall uses in Prisoners of Geography (2015), high mountains make the north hard to cross, so the contest narrows to a few passes, some high ground and the plain where armies can move. SIPRI observes that India’s nuclear planning increasingly stresses longer-range systems aimed at China, yet remains heavily influenced by its rivalry with Pakistan. This is an interpretation, not a settled fact.'
      },
      facts: [
        {
          vi: 'Himalaya là một cung dài khoảng 2.400 km với hơn 100 đỉnh trên 7.200 m (Wikipedia). Everest cao 8.848,86 m, con số Nepal và Trung Quốc cùng công bố ngày 8/12/2020 (Al Jazeera, 2020).',
          en: 'The Himalaya is an arc about 2,400 km long with more than 100 peaks above 7,200 m (Wikipedia). Everest is 8,848.86 m, the figure Nepal and China jointly announced on 8 Dec 2020 (Al Jazeera, 2020).'
        },
        {
          vi: 'Karakoram dài khoảng 500 km; K2 cao 8.611 m, đứng thứ hai thế giới; dãy có bốn đỉnh trên 8.000 m (Wikipedia).',
          en: 'The Karakoram is about 500 km long; K2 is 8,611 m, second in the world; the range has four peaks above 8,000 m (Wikipedia).'
        },
        {
          vi: 'Đường cao tốc Karakoram nối Kashgar (Trung Quốc) với Hasan Abdal (Pakistan), dài khoảng 1.300 km, điểm cao nhất khoảng 4.714 m gần đèo Khunjerab; xây từ 1962, hoàn thành 1979, mở cho dân dụng năm 1986 (Wikipedia).',
          en: 'The Karakoram Highway links Kashgar (China) with Hasan Abdal (Pakistan), about 1,300 km long, with its highest point about 4,714 m near the Khunjerab Pass; built from 1962, completed in 1979, opened to the public in 1986 (Wikipedia).'
        }
      ],
      ll: [78, 32],
      k: 3,
      layers: [],
      show: ['himalaya', 'karakoram', 'kunlun', 'tibet', 'thar', 'gangeticplain', 'khyber', 'wakhan'],
      draw: [
        { k: 'pt', p: [86.93, 27.99], c: GREY, r: 3.5, label: { vi: 'Everest', en: 'Everest' } },
        { k: 'pt', p: [76.51, 35.88], c: GREY, r: 3.5, label: { vi: 'K2', en: 'K2' }, side: 'l' }
      ],
      src: [14, 15, 16, 17, 13, 8]
    },
    {
      title: { vi: 'Sông Ấn và hiệp ước nước năm 1960', en: 'The Indus and the 1960 water treaty' },
      text: {
        vi: 'Sông Ấn dài khoảng 3.180 km, bắt nguồn từ Tây Tạng, chảy qua vùng núi Ladakh và Gilgit-Baltistan rồi xuống đồng bằng Pakistan và ra biển Ả Rập gần Thatta. Các nhánh Jhelum và Chenab chảy qua những vùng do Ấn Độ quản lý trước khi vào Pakistan; Ravi, Beas và Sutlej cũng từ núi xuống đồng bằng Punjab. Hiệp ước ký ở Karachi ngày 19/9/1960 chia sáu sông: ba sông phía đông cho Ấn Độ dùng không hạn chế, ba sông phía tây dành cho Pakistan còn Ấn Độ chỉ được dùng theo giới hạn.',
        en: 'The Indus is about 3,180 km long, rises in Tibet, runs through the mountains of Ladakh and Gilgit-Baltistan, then crosses Pakistan’s plains to the Arabian Sea near Thatta. The Jhelum and Chenab pass through areas India administers before entering Pakistan; the Ravi, Beas and Sutlej also come down from the mountains to the Punjab plain. The treaty signed in Karachi on 19 Sep 1960 divides the six rivers: the three eastern rivers for India’s unrestricted use, the three western rivers for Pakistan, with India allowed only limited uses.'
      },
      core: {
        vi: 'Theo Pakistan, nước là sống còn: Ủy ban An ninh Quốc gia Pakistan (24/4/2025) tuyên bố mọi nỗ lực chặn hoặc chuyển dòng nước sẽ bị coi là “hành động chiến tranh”. Theo Ấn Độ, hiệp ước được “đặt trong trạng thái tạm hoãn” cho đến khi Pakistan “đáng tin cậy và không thể đảo ngược” từ bỏ ủng hộ khủng bố xuyên biên giới (Bộ Ngoại giao Ấn Độ, 23/4/2025); Pakistan phủ nhận có vai trò trong vụ tấn công (CRS). Tim Marshall nhận xét sông Ấn cấp khoảng hai phần ba nước của Pakistan và hai nước đã giữ hiệp ước qua các cuộc chiến, nhưng dân số tăng và khí hậu có thể làm giảm dòng chảy. Theo cách đọc địa lý này, bên ở thượng nguồn nắm đòn bẩy, bên ở hạ nguồn không có nguồn nước nào thay thế dễ dàng.',
        en: 'According to Pakistan, water is vital: its National Security Committee (24 Apr 2025) said any attempt to stop or divert the water would be treated as an “act of war”. According to India, the treaty is “held in abeyance” until Pakistan “credibly and irrevocably” abjures support for cross-border terrorism (Indian MEA, 23 Apr 2025); Pakistan denies any role in the attack (CRS). Tim Marshall notes that the Indus supplies about two-thirds of Pakistan’s water and that both countries have honoured the treaty through their wars, but that population growth and climate change could cut the flow. In this geographic reading, the upstream party holds the leverage and the downstream party has no easy substitute for the water.'
      },
      facts: [
        {
          vi: 'Điều II: nước ba sông phía đông (Sutlej, Beas, Ravi) “sẵn sàng cho Ấn Độ dùng không hạn chế”. Điều III: Ấn Độ phải “để chảy” nước ba sông phía tây (Ấn, Jhelum, Chenab), trừ dùng sinh hoạt, không tiêu thụ, tưới tiêu có giới hạn (Phụ lục C) và thủy điện (Phụ lục D); không được trữ nước ngoài phần Phụ lục D và E cho phép (Hiệp ước 1960, UN Treaty Series).',
          en: 'Article II: the waters of the eastern rivers (Sutlej, Beas, Ravi) are “available for the unrestricted use of India”. Article III: India must “let flow” the waters of the western rivers (Indus, Jhelum, Chenab), except for domestic and non-consumptive use, limited agricultural use (Annexure C) and hydro-electric power (Annexure D); it may not store water beyond what Annexures D and E allow (1960 Treaty, UN Treaty Series).'
        },
        {
          vi: 'Hiệp ước có hiệu lực từ 12/1/1961, tính lùi từ 1/4/1960; chỉ sửa được hoặc chấm dứt bằng một hiệp ước khác được phê chuẩn giữa hai chính phủ (Điều XII). Ngân hàng Thế giới là bên ký, với vai trò “hạn chế và mang tính thủ tục” (World Bank, 6/2023).',
          en: 'The treaty entered into force on 12 Jan 1961, effective retroactively from 1 Apr 1960; it can be modified or ended only by another duly ratified treaty between the two governments (Article XII). The World Bank is a signatory with a role it calls “limited and procedural” (World Bank, June 2023).'
        },
        {
          vi: 'Nông nghiệp chiếm 94,0% lượng nước ngọt rút ra ở Pakistan và 90,4% ở Ấn Độ (ước tính mới nhất của FAO, qua Ngân hàng Thế giới WDI, không phải số đo riêng của một năm); 53,7% đất nông nghiệp của Pakistan được tưới (2024), so với 46,2% ở Ấn Độ (Ngân hàng Thế giới, WDI).',
          en: 'Agriculture takes 94.0% of freshwater withdrawals in Pakistan and 90.4% in India (latest FAO estimate via World Bank WDI, not a separate yearly measurement); 53.7% of Pakistan’s agricultural land is irrigated (2024), against 46.2% in India (World Bank, WDI).'
        }
      ],
      ll: [73, 31.5],
      k: 4.5,
      layers: [],
      show: ['indus'],
      draw: [
        { k: 'line', pts: [[75.25, 33.53], [74.8, 34.08], [74.55, 34.35], [73.47, 34.37], [73.64, 33.15], [73.73, 32.93], [72.15, 31.15]], c: RW, w: 2.2, label: { vi: 'Jhelum', en: 'Jhelum' }, lp: [73.3, 33.5], dy: -4 },
        { k: 'line', pts: [[77.0, 32.57], [75.8, 33.3], [74.75, 32.9], [74.46, 32.67], [72.15, 31.15], [71.0, 29.35], [70.37, 28.95]], c: RW, w: 2.2, label: { vi: 'Chenab', en: 'Chenab' }, lp: [73.6, 32.2], dy: -4 },
        { k: 'line', pts: [[76.3, 32.6], [75.6, 32.35], [75.0, 32.1], [74.3, 31.6], [73.0, 31.0], [71.85, 30.75]], c: RE, w: 2.2, label: { vi: 'Ravi', en: 'Ravi' }, lp: [73.9, 31.55], dy: 8 },
        { k: 'line', pts: [[77.2, 32.4], [76.9, 31.7], [75.95, 32.0], [74.95, 31.15]], c: RE, w: 2.2 },
        { k: 'line', pts: [[81.5, 30.8], [78.7, 31.8], [76.5, 31.4], [74.95, 31.15], [74.6, 30.95], [73.9, 30.45], [71.7, 29.4], [71.0, 29.35]], c: RE, w: 2.2, label: { vi: 'Sutlej', en: 'Sutlej' }, lp: [72.6, 29.85], dy: 8 }
      ],
      key: [
        { c: RW, vi: 'Sông phía tây (Ấn, Jhelum, Chenab): dành cho Pakistan (minh hoạ)', en: 'Western rivers (Indus, Jhelum, Chenab): for Pakistan (illustrative)' },
        { c: RE, vi: 'Sông phía đông (Ravi, Beas, Sutlej): dành cho Ấn Độ (minh hoạ)', en: 'Eastern rivers (Ravi, Beas, Sutlej): for India (illustrative)' }
      ],
      src: [0, 1, 19, 2, 11, 12, 5, 6, 7, 13]
    },
    {
      title: { vi: 'Kashmir và các mặt trận trên núi cao', en: 'Kashmir and the high-altitude fronts' },
      text: {
        vi: 'Ở vùng núi cực bắc, ranh giới ảnh hưởng của Ấn Độ, Pakistan và Trung Quốc gặp nhau. Kashmir là vùng tranh chấp mà mỗi bên có lập trường riêng, nên bản đồ này không vẽ đường biên hay ranh giới nào ở đây, chỉ đánh dấu núi, đèo và sông băng. Hành lang Wakhan của Afghanistan là dải đất hẹp ngăn Tajikistan với Pakistan và chạm Trung Quốc; Trung Quốc và Pakistan cùng làm đường cao tốc Karakoram qua đèo Khunjerab.',
        en: 'In the far northern mountains the spheres of India, Pakistan and China meet. Kashmir is a disputed region where each party holds its own position, so this map draws no border or boundary line here, only mountains, passes and a glacier. Afghanistan’s Wakhan Corridor is a narrow strip separating Tajikistan from Pakistan and touching China; China and Pakistan built the Karakoram Highway together over the Khunjerab Pass.'
      },
      core: {
        vi: 'Tim Marshall lập luận rằng nếu Ấn Độ kiểm soát toàn bộ Kashmir, Ấn Độ có “một cửa sổ nhìn ra Trung Á” và đường biên với Afghanistan còn Pakistan mất đường biên với Trung Quốc; nếu Pakistan kiểm soát, nguồn nước của Pakistan được bảo đảm hơn. Theo Pakistan, trong những điều Ấn Độ phải thay đổi có “không tuân thủ các nghị quyết của LHQ về Kashmir” (Ủy ban An ninh Quốc gia, 24/4/2025). Ấn Độ bác bỏ sự trung gian của bên thứ ba và nói ngừng bắn 5/2025 là kết quả đàm phán song phương (Al Jazeera, 29/5/2026). Đây là các lập trường và diễn giải, không phải kết luận về ai có quyền với vùng đất.',
        en: 'Tim Marshall argues that if India held all of Kashmir it would gain “a window into Central Asia” and a border with Afghanistan while Pakistan would lose a border with China, and that if Pakistan held it, Pakistan’s water would be more secure. According to Pakistan, among the conduct India must change is “non-adherence to UN resolutions on Kashmir” (National Security Committee, 24 Apr 2025). India rejects third-party mediation and says the May 2025 ceasefire came from bilateral talks (Al Jazeera, 29 May 2026). These are positions and interpretations, not a conclusion about who is entitled to the land.'
      },
      facts: [
        {
          vi: 'Hiệp định Karachi (27/7/1949) lập đường ngừng bắn do quan sát viên LHQ giám sát; tháng 7/1972 hai nước ký thỏa thuận xác định Đường Kiểm soát (LoC), đại thể theo đường ngừng bắn 1949. Ấn Độ cho rằng nhiệm vụ của UNMOGIP đã hết hiệu lực; Pakistan không chấp nhận; theo Tổng thư ký LHQ chỉ Hội đồng Bảo an mới chấm dứt được (UNMOGIP).',
          en: 'The Karachi Agreement (27 Jul 1949) set a ceasefire line supervised by UN military observers; in July 1972 the two countries signed an agreement defining the Line of Control (LoC), broadly following the 1949 ceasefire line. India holds that UNMOGIP’s mandate has lapsed; Pakistan does not accept that; in the UN Secretary-General’s view only the Security Council can end it (UNMOGIP).'
        },
        {
          vi: 'Sông băng Siachen dài khoảng 76 km (Wikipedia). Hành lang Wakhan dài khoảng 350 km, rộng 13–65 km, hình thành từ các thỏa thuận 1893 và 1895 để lãnh thổ Nga và Anh không giáp nhau (Wikipedia).',
          en: 'The Siachen Glacier is about 76 km long (Wikipedia). The Wakhan Corridor is about 350 km long and 13–65 km wide, created by the 1893 and 1895 agreements so that Russian and British domains would not touch (Wikipedia).'
        },
        {
          vi: 'Ấn Độ và Trung Quốc có tranh chấp biên giới riêng: Trung Quốc quản lý Aksai Chin và Ấn Độ tuyên bố vùng này; Ấn Độ quản lý Arunachal Pradesh và Trung Quốc tuyên bố vùng này (Wikipedia). Ngày 25/8/2026 hai Đại diện Đặc biệt họp vòng 25 ở Bắc Kinh, cam kết tìm “giải pháp trọn gói” cho vấn đề biên giới; vòng 26 dự kiến ở Ấn Độ năm 2027 (Bộ Ngoại giao Trung Quốc).',
          en: 'India and China have a separate boundary dispute: China administers Aksai Chin and India claims it; India administers Arunachal Pradesh and China claims it (Wikipedia). On 25 Aug 2026 the two Special Representatives held their 25th round in Beijing and pledged to seek a “package solution” to the boundary question; the 26th is planned in India in 2027 (China MFA).'
        }
      ],
      ll: [76.5, 35.3],
      k: 6,
      layers: [],
      show: ['conf_kashmir', 'karakoram', 'himalaya', 'wakhan', 'cpec'],
      draw: [
        { k: 'pt', p: [77.1, 35.42], c: GREY, r: 3.5, label: { vi: 'Sông băng Siachen', en: 'Siachen Glacier' }, dy: 6 },
        { k: 'pt', p: [75.42, 36.85], c: GREY, r: 3.5, label: { vi: 'Đèo Khunjerab', en: 'Khunjerab Pass' }, side: 'l' }
      ],
      src: [20, 15, 18, 21, 22, 17, 13, 6, 29, 8]
    },
    {
      title: { vi: 'Một đồng bằng bị cắt đôi', en: 'One plain, cut in two' },
      text: {
        vi: 'Xuống phía nam núi, sông Ấn và các nhánh nuôi một đồng bằng phẳng và đông dân. Năm 1947 đường Radcliffe chia Punjab làm đôi: Lahore ở phía Pakistan, Amritsar ở phía Ấn Độ, cửa khẩu Attari–Wagah nằm giữa hai thành phố trên con đường Grand Trunk cổ. Cả hai nước đông dân, và từ tháng 4/2025 cả hai đều đóng cửa khẩu này.',
        en: 'South of the mountains the Indus and its tributaries feed a flat, crowded plain. In 1947 the Radcliffe Line split the Punjab in two: Lahore on the Pakistani side, Amritsar on the Indian side, with the Attari–Wagah crossing between the two cities on the old Grand Trunk Road. Both countries are very populous, and since April 2025 both have closed this crossing.'
      },
      core: {
        vi: 'Tim Marshall cho rằng Pakistan thiếu “chiều sâu chiến lược”, tức không có chỗ để lùi nếu bị tràn từ phía đông; ông viết quân đội Ấn Độ có thể tới Islamabad trong vài ngày qua đồng bằng Punjab phẳng, cách biên giới chưa tới 250 dặm. Theo cách đọc này, Pakistan khó đổi đất lấy thời gian nên dựa nhiều vào răn đe hạt nhân. Theo Ấn Độ, mối đe doạ thật là khủng bố xuyên biên giới; Pakistan phủ nhận có vai trò trong vụ Pahalgam. Đây là diễn giải của giới phân tích, không phải thừa nhận của chính phủ nào.',
        en: 'Tim Marshall argues that Pakistan lacks “strategic depth”, meaning room to fall back if overrun from the east; he writes that the Indian army could reach Islamabad within days across the flat Punjab, less than 250 miles from the border. In this reading Pakistan cannot trade space for time and so leans heavily on nuclear deterrence. According to India the real threat is cross-border terrorism; Pakistan denies any role in the Pahalgam attack. This is an analysts’ interpretation, not an admission by either government.'
      },
      facts: [
        {
          vi: 'Đường Radcliffe được vẽ năm 1947; Wagah (Pakistan) cách Lahore 24 km, đối diện Attari (Ấn Độ), và là cửa khẩu đường bộ chính thức duy nhất giữa hai nước (LSE South Asia, 2017). Ấn Độ đóng trạm Attari ngày 23/4/2025 (Bộ Ngoại giao Ấn Độ); Pakistan đóng cửa Wagah và ngừng mọi thương mại với Ấn Độ ngày 24/4/2025 (Ủy ban An ninh Quốc gia, theo Dawn).',
          en: 'The Radcliffe Line was drawn in 1947; Wagah (Pakistan) is 24 km from Lahore, faces Attari (India), and is the only official land crossing between the two countries (LSE South Asia, 2017). India closed the Attari post on 23 Apr 2025 (Indian MEA); Pakistan closed Wagah and suspended all trade with India on 24 Apr 2025 (National Security Committee, via Dawn).'
        },
        {
          vi: 'Dân số năm 2025: Ấn Độ 1.463.865.525 người, Pakistan 255.219.554; tỷ lệ dân đô thị 35,7% và 39,5% (Ngân hàng Thế giới, WDI cập nhật 8/10/2026).',
          en: 'Population in 2025: India 1,463,865,525, Pakistan 255,219,554; urban share 35.7% and 39.5% (World Bank, WDI updated 8 Oct 2026).'
        },
        {
          vi: 'Điều tra dân số 2011 của Ấn Độ: bang Punjab 27.743.338 người, huyện Amritsar 2.490.656 (Văn phòng Tổng đăng ký dân số Ấn Độ, qua citypopulation.de).',
          en: 'Census of India 2011: Punjab state 27,743,338 people, Amritsar district 2,490,656 (Office of the Registrar General of India, via citypopulation.de).'
        }
      ],
      ll: [75.3, 31.2],
      k: 13,
      layers: [],
      show: ['gangeticplain', 'indus', 'thar'],
      draw: [
        { k: 'pt', p: [74.34, 31.55], c: PK, r: 4, label: { vi: 'Lahore', en: 'Lahore' }, side: 'l' },
        { k: 'pt', p: [74.87, 31.63], c: IN, r: 4, label: { vi: 'Amritsar', en: 'Amritsar' }, dy: -8 },
        { k: 'pt', p: [74.57, 31.6], c: GREY, r: 3, label: { vi: 'Attari–Wagah', en: 'Attari–Wagah' }, dy: 15, side: 'l' },
        { k: 'pt', p: [73.05, 33.69], c: PK, r: 4, label: { vi: 'Islamabad', en: 'Islamabad' }, side: 'l' },
        { k: 'pt', p: [77.21, 28.61], c: IN, r: 4, label: { vi: 'Delhi', en: 'Delhi' } }
      ],
      key: [
        { c: PK, vi: 'Thành phố ở phía Pakistan', en: 'Cities on the Pakistani side' },
        { c: IN, vi: 'Thành phố ở phía Ấn Độ', en: 'Cities on the Indian side' }
      ],
      src: [23, 9, 10, 24, 5, 6, 13, 8]
    },
    {
      title: { vi: 'Biển, cảng và đường dầu', en: 'The sea, the ports and the oil road' },
      text: {
        vi: 'Cả hai nước nhìn ra biển Ả Rập. Pakistan có Karachi và Gwadar; Gwadar là điểm cuối phía nam của hành lang CPEC từ Kashgar (đường trên bản đồ là minh hoạ). Ấn Độ có Mumbai ở bờ tây và đầu tư vào cảng Chabahar của Iran, cách Gwadar khoảng 140 km về phía tây. Dầu vùng Vịnh đi qua eo Hormuz, vòng qua Ấn Độ Dương rồi tới châu Á.',
        en: 'Both countries face the Arabian Sea. Pakistan has Karachi and Gwadar; Gwadar is the southern end of the CPEC corridor from Kashgar (the line on the map is illustrative). India has Mumbai on its west coast and has invested in Iran’s Chabahar port, about 140 km west of Gwadar. Gulf oil passes the Strait of Hormuz, then crosses the Indian Ocean to Asia.'
      },
      core: {
        vi: 'Theo nhà phân tích Kabir Taneja (ORF, Al Jazeera dẫn), Chabahar quan trọng với kết nối của Ấn Độ tới Trung Á; Al Jazeera ghi thêm rằng căng thẳng với Pakistan khiến Ấn Độ không có đường bộ qua Pakistan tới Afghanistan và Trung Á. Số liệu EIA cho thấy phần lớn dầu qua Hormuz đi sang châu Á, nên theo cách đọc này đường biển là mối lo chiến lược của Ấn Độ. Về phía Pakistan, Tập Cận Bình ca ngợi quan hệ “không thể phá vỡ” khi Thủ tướng Sharif thăm Bắc Kinh cuối tháng 5/2026 (Al Jazeera). Đây là diễn giải, không phải tuyên bố chính thức.',
        en: 'According to analyst Kabir Taneja (Observer Research Foundation, quoted by Al Jazeera), Chabahar matters for India’s connectivity to Central Asia; Al Jazeera adds that tensions with Pakistan rule out a land route through Pakistan to Afghanistan and Central Asia. The EIA figures show most Hormuz crude goes to Asia, so in this reading sea lanes are a strategic worry for India. On Pakistan’s side, Xi Jinping praised “unbreakable” ties when Prime Minister Sharif visited Beijing in late May 2026 (Al Jazeera). This is interpretation, not an official statement.'
      },
      facts: [
        {
          vi: 'Năm 2024, 84% dầu thô và condensate qua Hormuz đi sang châu Á; Trung Quốc, Ấn Độ, Nhật Bản và Hàn Quốc nhận 69% (EIA, 16/6/2025).',
          en: 'In 2024, 84% of crude oil and condensate through Hormuz went to Asia; China, India, Japan and South Korea took 69% (EIA, 16 Jun 2025).'
        },
        {
          vi: 'Tháng 10/2026, theo Kpler (qua Al Jazeera), 10,23 triệu thùng/ngày dầu thô vùng Vịnh đi qua Hormuz, khoảng 13% đến Ấn Độ. Một quan chức quốc hội Iran nói tàu Ấn Độ được miễn hạn chế của Iran nhưng sẽ trả phí quá cảnh (tuyên bố từ phía Iran; Al Jazeera, 6/11/2026). Karachi Port Trust xử lý kỷ lục hơn 2,65 triệu TEU trong năm tài khóa 2025–26 khi Hormuz đóng và lưu lượng chuyển sang Pakistan (Dawn, 20/6/2026).',
          en: 'In October 2026, per Kpler (via Al Jazeera), 10.23 million barrels a day of Gulf crude passed Hormuz, about 13% of it to India. An Iranian parliamentary official said Indian ships are exempt from Iran’s restrictions but will pay transit fees (an Iranian claim; Al Jazeera, 6 Nov 2026). Karachi Port Trust handled a record 2.65 million TEU in fiscal 2025–26 as Hormuz closed and traffic shifted to Pakistan (Dawn, 20 Jun 2026).'
        },
        {
          vi: 'Chabahar: giấy miễn trừ trừng phạt của Mỹ hết hạn ngày 26/4/2026; Ấn Độ đã trả 120 triệu USD hồi tháng 2/2026 cho thiết bị cảng; Bộ Ngoại giao Ấn Độ nói cuộc xung đột hiện nay là “yếu tố làm phức tạp” (Al Jazeera, 29/4/2026).',
          en: 'Chabahar: the US sanctions waiver expired on 26 Apr 2026; India paid $120 million in Feb 2026 for port equipment; India’s foreign ministry said the current conflict is a “complicating factor” (Al Jazeera, 29 Apr 2026).'
        }
      ],
      ll: [67, 21.5],
      k: 3.6,
      layers: [],
      show: ['hormuz', 'cpec', 'r_gulf_asia'],
      draw: [
        { k: 'pt', p: [67.01, 24.86], c: PK, r: 4, label: { vi: 'Karachi', en: 'Karachi' } },
        { k: 'pt', p: [62.33, 25.12], c: PK, r: 4, label: { vi: 'Gwadar', en: 'Gwadar' }, dy: 8 },
        { k: 'pt', p: [60.64, 25.29], c: IR, r: 4, label: { vi: 'Chabahar', en: 'Chabahar' }, side: 'l', dy: -6 },
        { k: 'pt', p: [72.83, 18.95], c: IN, r: 4, label: { vi: 'Mumbai', en: 'Mumbai' }, side: 'l' }
      ],
      key: [
        { c: PK, vi: 'Cảng Pakistan', en: 'Pakistani ports' },
        { c: IN, vi: 'Cảng Ấn Độ', en: 'Indian port' },
        { c: IR, vi: 'Chabahar (Iran), cảng Ấn Độ đầu tư', en: 'Chabahar (Iran), port India invested in' }
      ],
      src: [25, 26, 28, 27, 29]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Sau vụ tấn công gần Pahalgam ngày 22/4/2025 và các cuộc đụng độ 7–10/5/2025, hai nước ngừng bắn từ 10/5/2025. Đến nay ngừng bắn được báo cáo là giữ được, nhưng đối thoại chính thức đóng băng và hai nước vẫn cấm máy bay của nhau. Ngày 31/8/2026 Toà Trọng tài ở The Hague phán hiệp ước nước vẫn hoàn toàn có hiệu lực; Ấn Độ bác bỏ phán quyết, Pakistan hoan nghênh.',
        en: 'After the attack near Pahalgam on 22 Apr 2025 and the clashes of 7–10 May 2025, the two countries have had a ceasefire since 10 May 2025. It is reported to be holding, but official dialogue is frozen and each side still bars the other’s aircraft. On 31 Aug 2026 the Court of Arbitration in The Hague ruled that the water treaty remains fully in force; India rejected the award, Pakistan welcomed it.'
      },
      core: {
        vi: 'Điểm mấu chốt, theo cách đọc của giới phân tích chứ không phải sự thật đã được thừa nhận: địa lý không đổi nên không bên nào có lối thoát dễ. Theo Ấn Độ, hiệp ước tạm hoãn đến khi khủng bố xuyên biên giới chấm dứt (Bộ Ngoại giao Ấn Độ); theo Pakistan, nước là sống còn, chặn nước là hành động chiến tranh (Ủy ban An ninh Quốc gia), và Pakistan phủ nhận hỗ trợ khủng bố. SIPRI ghi nhận hai bên chủ ý giữ xung đột 5/2025 ở mức quy ước, nhưng nguy cơ leo thang nhanh, bất ngờ lên mức hạt nhân vẫn là “mối lo dai dẳng và nghiêm trọng”.',
        en: 'The bottom line, in analysts’ reading and not an admitted fact: geography does not change, so neither side has an easy way out. According to India, the treaty stays in abeyance until cross-border terrorism ends (Indian MEA); according to Pakistan, water is vital and blocking it is an act of war (National Security Committee), and Pakistan denies supporting terrorism. SIPRI notes both sides deliberately kept the May 2025 conflict conventional, yet the risk of rapid, unexpected escalation to the nuclear level remains “a lingering and serious concern”.'
      },
      facts: [
        {
          vi: '22/4/2025: vụ tấn công gần Pahalgam; Ấn Độ nói 25 người Ấn Độ và 1 người Nepal thiệt mạng (Bộ Ngoại giao Ấn Độ); Pakistan phủ nhận có vai trò. Đêm 6 rạng 7/5, Ấn Độ tấn công chín mục tiêu mà họ nói là khủng bố; Pakistan gọi đó là “hành động chiến tranh”; Ấn Độ nói đợt đầu không nhắm vào cơ sở quân sự hay dân thường (CRS). SIPRI đánh giá các đợt tấn công của Ấn Độ nhằm vào căn cứ không quân và tên lửa của Pakistan được cho là có nhiệm vụ hạt nhân. Ngừng bắn 10/5: Tổng thống Mỹ Trump công bố đã môi giới, Ấn Độ nói do hai bên trực tiếp thoả thuận (CRS; Al Jazeera, 29/5/2026). Pakistan nói ít nhất 31 người chết, Ấn Độ nói ít nhất 15 dân thường chết vì pháo kích của Pakistan (CRS).',
          en: '22 Apr 2025: the attack near Pahalgam; India says 25 Indians and one Nepali were killed (Indian MEA); Pakistan denies any role. On the night of 6–7 May India struck nine targets it called terrorist sites; Pakistan called it an “act of war”; India said its first wave did not target military facilities or civilians (CRS). SIPRI assesses that India’s strikes hit Pakistani air and missile bases believed to have nuclear roles. Ceasefire of 10 May: US President Trump announced he had brokered it, India says it was agreed directly between the two sides (CRS; Al Jazeera, 29 May 2026). Pakistan said at least 31 people died; India said at least 15 civilians died from Pakistani shelling (CRS).'
        },
        {
          vi: '31/8/2026: Toà Trọng tài (PCA) nhất trí nhận định không căn cứ nào Ấn Độ nêu đủ để đình chỉ hay chấm dứt hiệp ước, nên hiệp ước “vẫn hoàn toàn có hiệu lực”; Toà cấm đổ bê tông thân đập và cửa lấy nước nhà máy Ratle trên mức nhất định đến 90 ngày sau quyết định cuối của Chuyên gia Trung lập, dự kiến tháng 7/2027 (PCA). Ấn Độ nói Toà không có thẩm quyền với các quyết định chủ quyền của mình, gọi Toà là “được lập trái luật” và nói việc tạm hoãn “vẫn có hiệu lực”; Pakistan “ghi nhận” và hoan nghênh việc Ấn Độ vẫn bị ràng buộc (Dawn; Tribune India).',
          en: '31 Aug 2026: the Court of Arbitration (PCA) unanimously found that none of India’s grounds justify suspending or ending the treaty, so it “remains fully in force”; the Court barred concreting the Ratle plant’s dam wall and power intake above certain levels until 90 days after the Neutral Expert’s final decision, expected in July 2027 (PCA). India said the Court has no jurisdiction over its sovereign decisions, called it “illegally constituted” and said its abeyance “remains in force”; Pakistan “took note” and welcomed the finding that India remains bound (Dawn; Tribune India).'
        },
        {
          vi: 'SIPRI, 1/2026: Ấn Độ khoảng 190 đầu đạn (khoảng 12 đầu có thể đã triển khai trên một tàu ngầm tên lửa, đánh giá kèm bất định), Pakistan khoảng 170; năm trước là 180 và 170. Pakistan kéo dài lệnh cấm không phận với máy bay Ấn Độ đến 4:59 sáng 24/11/2026; Ấn Độ cấm hãng hàng không Pakistan từ 30/4/2025 (Gulf News, 18/10/2026).',
          en: 'SIPRI, Jan 2026: India about 190 warheads (about 12 possibly deployed on one missile submarine, an assessment with considerable uncertainty), Pakistan about 170; a year earlier 180 and 170. Pakistan extended its airspace ban on Indian aircraft to 04:59 on 24 Nov 2026; India has restricted Pakistani airlines since 30 Apr 2025 (Gulf News, 18 Oct 2026).'
        }
      ],
      ll: [73, 29],
      k: 3,
      layers: [],
      show: ['conf_kashmir', 'indus'],
      src: [7, 29, 2, 3, 4, 8, 30, 22, 31, 5, 6]
    }
  ]
};
