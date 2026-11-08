// Explainer: Biển Đông (South China Sea), told as one argument in short steps: why Beijing wants this sea, how it tries to
// hold it, why its neighbours push back, and why no rule settles it. Facts from the research pack of 8 Nov 2026; each step
// names its sources. Owner's editorial line: the site says in its own voice that Hoàng Sa and Trường Sa belong to Vietnam;
// who occupies what is stated as fact and other claims are reported as claims. Map shapes are illustrative.
const VN = '#E24B4A', CN = '#D9A441', PH = '#378ADD', MY = '#1D9E75', ID = '#7F77DD', TW = '#6B8F9C', BN = '#BA7517';
const US = '#378ADD', FLOW = '#D97706', HOT = '#D9383A';

export const BIENDONG = {
  id: 'biendong',
  icon: '🌊',
  c: '#2E7CC0',
  title: { vi: 'Biển Đông', en: 'East Sea (South China Sea)' },
  sub: { vi: 'Vì sao Bắc Kinh quyết giữ vùng biển này', en: 'Why Beijing is so set on this sea' },
  asof: '2026-11-08',
  status: {
    vi: 'Phán quyết năm 2016 vẫn là mốc pháp lý chính; Trung Quốc không chấp nhận. Năm 2026 có va chạm ở bãi Second Thomas (20/7) và quanh bãi Scarborough (đầu tháng 11); ngày 28/8 Việt Nam phản đối Trung Quốc xây dựng ở Hoàng Sa. Bộ quy tắc ứng xử (COC) chưa được ký.',
    en: 'The 2016 award remains the main legal reference point; China does not accept it. 2026 saw a clash at Second Thomas Shoal (20 July) and incidents around Scarborough Shoal (early November); on 28 August Vietnam protested Chinese construction in the Paracels. The Code of Conduct (COC) has not been signed.'
  },
  statusSrc: [18, 19, 15, 20],
  sources: [
    { n: 'CSIS, Troubled Straits (1/7/2026)', url: 'https://www.csis.org/analysis/south-china-sea-trade-chokepoints' },
    { n: 'Reuters qua Baird Maritime (14/1/2026), nhập khẩu dầu 2025', url: 'https://www.bairdmaritime.com/shipping/tankers/chinas-2025-oil-imports-hit-record-after-december-surge' },
    { n: 'Columbia CGEP, Erica Downs (29/1/2026)', url: 'https://www.energypolicy.columbia.edu/where-china-gets-its-oil-crude-imports-in-2025-reveal-stockpiling-and-changing-fortunes-of-certain-suppliers-including-those-sanctioned/' },
    { n: 'US EIA, World Oil Transit Chokepoints (3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints' },
    { n: 'US EIA, Today in Energy (11/8/2017), eo Malacca', url: 'https://www.eia.gov/todayinenergy/detail.php?id=32452' },
    { n: 'Bộ Quốc phòng Mỹ, China Military Power Report 2025 (23/12/2025)', url: 'https://media.defense.gov/2025/Dec/23/2003849070/-1/-1/1/ANNUAL-REPORT-TO-CONGRESS-MILITARY-AND-SECURITY-DEVELOPMENTS-INVOLVING-THE-PEOPLES-REPUBLIC-OF-CHINA-2025.PDF' },
    { n: 'Wikipedia, Malacca dilemma', url: 'https://en.wikipedia.org/wiki/Malacca_dilemma' },
    { n: 'CRS R42784, U.S.-China Strategic Competition in South and East China Seas', url: 'https://www.everycrsreport.com/reports/R42784.html' },
    { n: 'Trung Quốc, Sách trắng Quốc phòng (7/2019), bản đầy đủ qua A. Erickson', url: 'https://www.andrewerickson.com/2019/07/full-text-of-defense-white-paper-chinas-national-defense-in-the-new-era-english-chinese-versions/' },
    { n: 'PCA, thông cáo phán quyết (12/7/2016)', url: 'https://docs.pca-cpa.org/2016/07/PH-CN-20160712-Press-Release-No-11-English.pdf' },
    { n: 'Bộ Ngoại giao Trung Quốc, tuyên bố về phán quyết (12/7/2016)', url: 'https://www.fmprc.gov.cn/eng/wjb/zzjg_663340/bianhaisi_eng_665278/plpbo/202405/t20240530_11324662.html' },
    { n: 'ZNews (12/7/2026, Bộ Ngoại giao VN)', url: 'https://lifestyle.zingnews.vn/viet-nam-tai-khang-dinh-unclos-la-co-so-phap-ly-duy-nhat-ve-vung-bien-post1668546.html' },
    { n: 'Wikipedia, Battle of the Paracel Islands', url: 'https://en.wikipedia.org/wiki/Battle_of_the_Paracel_Islands' },
    { n: 'CSIS AMTI, Island Tracker', url: 'https://amti.csis.org/island-tracker/' },
    { n: 'CSIS AMTI, Keeping Score (8/5/2026)', url: 'https://amti.csis.org/keeping-score-vietnams-spratly-island-overhaul-continues/' },
    { n: 'VnExpress (28/8/2026, Bộ Ngoại giao VN)', url: 'https://vnexpress.net/viet-nam-phan-doi-trung-quoc-xay-dung-trai-phep-tai-hoang-sa-5114678.html' },
    { n: 'UNCLOS, Phần V (vùng đặc quyền kinh tế)', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part5.htm' },
    { n: 'ISEAS Perspective 2019/69 (bãi Tư Chính)', url: 'https://www.iseas.edu.sg/wp-content/uploads/2019/09/ISEAS_Perspective_2019_69.pdf' },
    { n: 'Interaksyon / Reuters (23/7/2026)', url: 'https://interaksyon.philstar.com/politics-issues/2026/07/23/316799/philippines-says-china-shoal-deal-needs-no-permission-for-resupply/' },
    { n: 'The Defense Post (3/11/2026)', url: 'https://thedefensepost.com/2026/11/03/philippines-probes-chinese-vessel-shoal/' },
    { n: 'RFA (24/4/2026, COC)', url: 'https://www.rfa.org/english/southchinasea/2026/04/24/asean-south-china-sea-code-of-conduct-philippines/' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Trung Quốc sống nhờ đường biển', en: 'China lives off the sea lanes' },
      text: {
        vi: 'Láng giềng phản đối, tòa quốc tế bác yêu sách, vậy mà Bắc Kinh vẫn không lùi ở Biển Đông. Vì sao? Hãy bắt đầu từ chỗ Trung Quốc lấy dầu và bán hàng. Năm 2025 nước này nhập khẩu kỷ lục khoảng 11,5 triệu thùng dầu thô mỗi ngày, và hơn 90% số dầu ấy đến bằng tàu biển. Hàng xuất khẩu cũng đi đường biển. Đường biển mà tắc, nền kinh tế sẽ nghẹt.',
        en: 'Its neighbours protest and an international tribunal has rejected its claim, yet Beijing does not back down in the East Sea. Why? Start with how China gets its oil and sells its goods. In 2025 it imported a record of about 11.5 million barrels of crude a day, and more than 90% of that came by ship. Its exports go by sea too. Block the sea lanes and the economy chokes.'
      },
      facts: [
        {
          vi: 'Riêng qua eo Malacca, năm 2024 có gần 963 tỷ USD hàng hóa của Trung Quốc đi qua (CSIS).',
          en: 'Through the Strait of Malacca alone, nearly US$963 billion of China’s trade passed in 2024 (CSIS).'
        }
      ],
      ll: [112, 14],
      k: 2.2,
      layers: ['route'],
      show: ['r_gulf_asia', 'malacca'],
      hl: { China: CN },
      dim: true,
      draw: [
        { k: 'line', pts: [[100.6, 3.2], [104.0, 1.3], [108.0, 5.0], [112.0, 11.0], [115.5, 18.0], [118.5, 24.0], [121.8, 29.8]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'dầu và hàng hóa đi qua Biển Đông', en: 'oil and goods through the East Sea' }, lp: [112, 11], dy: 14 }
      ],
      src: [1, 2, 0]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng lối ra biển nào cũng hẹp', en: 'But every way out is narrow' },
      text: {
        vi: 'Nhìn ra biển, Trung Quốc thấy một vòng cung đảo chắn trước mặt: Nhật Bản, Đài Loan, Philippines. Nhật Bản và Philippines là đồng minh của Mỹ. Phía nam, dầu từ Trung Đông phải đi qua eo Malacca, chỗ hẹp nhất chỉ khoảng 2,7 km. Nếu xảy ra xung đột, những cửa này có thể bị chặn. Giới phân tích gọi nỗi lo ấy là “thế kẹt Malacca”.',
        en: 'Looking out to sea, China faces an arc of islands: Japan, Taiwan, the Philippines. Japan and the Philippines are US allies. To the south, oil from the Middle East must pass the Strait of Malacca, only about 2.7 km wide at its narrowest. In a conflict these doors could be shut. Analysts call this worry the “Malacca dilemma”.'
      },
      facts: [
        {
          vi: 'Báo cáo năm 2025 của Bộ Quốc phòng Mỹ viết rằng Bắc Kinh tin Mỹ muốn kiềm chế Trung Quốc, và gọi chuỗi đảo thứ nhất, từ Nhật Bản tới bán đảo Mã Lai, là trọng tâm chiến lược trong tính toán của Trung Quốc.',
          en: 'The US Defense Department’s 2025 report says Beijing believes the US seeks to contain China, and calls the First Island Chain, from Japan to the Malay Peninsula, the strategic centre of gravity in China’s planning.'
        }
      ],
      ll: [114, 15],
      k: 2.4,
      layers: [],
      show: ['firstchain', 'malacca', 'luzon', 'taiwanstrait'],
      hl: { China: CN, Japan: US, Philippines: US, 'South Korea': US, Taiwan: TW },
      dim: true,
      draw: [
        { k: 'pt', p: [103.6, 1.2], c: HOT, r: 5, label: { vi: 'Malacca: hẹp nhất ~2,7 km', en: 'Malacca: ~2.7 km at narrowest' } },
        { k: 'pt', p: [126.5, 25.2], c: HOT, r: 5, label: { vi: 'cửa Miyako', en: 'Miyako exit' } }
      ],
      key: [
        { c: US, vi: 'Đồng minh của Mỹ', en: 'US allies' },
        { c: HOT, vi: 'Cửa hẹp có thể bị chặn', en: 'Narrow doors that could be shut' }
      ],
      src: [5, 4, 6]
    },
    {
      tag: 'move',
      title: { vi: 'Vì thế Biển Đông là vùng biển phải nắm', en: 'So the East Sea is the sea to hold' },
      text: {
        vi: 'Biển Đông nằm ngay giữa bờ biển Trung Quốc và các cửa ấy. Theo CRS, có căn cứ giữa vùng biển này, Trung Quốc có thể kiểm soát đánh cá và dầu khí, gây sức ép lên láng giềng, và giữ hải quân Mỹ ở xa, bên ngoài chuỗi đảo. Bắc Kinh thì nói họ chỉ bảo vệ chủ quyền và an ninh tuyến biển. Để nắm nó, Bắc Kinh đi hai nước.',
        en: 'The East Sea lies right between China’s coast and those doors. According to CRS, bases in this sea could let China control fishing and oil and gas, put pressure on its neighbours, and keep the US Navy at a distance, outside the island chain. Beijing says it is only protecting its sovereignty and the security of its sea lanes. To hold the sea, Beijing made two moves.'
      },
      ll: [114, 14],
      k: 3,
      layers: [],
      show: ['biendong', 'firstchain'],
      hl: { China: CN, Japan: US, Philippines: US, Taiwan: TW },
      dim: true,
      draw: [
        { k: 'label', p: [113.5, 14.5], c: '#8A5A00', label: { vi: 'Biển Đông: sân trước của Trung Quốc', en: 'East Sea: China’s front yard' }, dy: 0 }
      ],
      src: [7, 8]
    },
    {
      tag: 'move',
      title: { vi: 'Nước đi thứ nhất: vẽ đường chín đoạn', en: 'First move: draw the nine-dash line' },
      text: {
        vi: 'Trên bản đồ của mình, Trung Quốc vẽ “đường chín đoạn” bao lấy phần lớn Biển Đông. Philippines kiện ra một tòa trọng tài lập theo Luật Biển. Ngày 12/7/2016, tòa kết luận Trung Quốc không có cơ sở pháp lý để đòi “quyền lịch sử” với tài nguyên trong đường này. Bắc Kinh không tham gia vụ kiện và gọi phán quyết là vô hiệu. Thua trên giấy, Bắc Kinh chuyển sang làm trên mặt biển.',
        en: 'On its maps China draws the “nine-dash line” around most of the East Sea. The Philippines took China to a tribunal set up under the law of the sea. On 12 July 2016 the tribunal concluded that China has no legal basis to claim “historic rights” to resources inside the line. Beijing stayed out of the case and calls the award null and void. Beaten on paper, Beijing turned to the water itself.'
      },
      facts: [
        {
          vi: 'Phán quyết không phân xử ai làm chủ các đảo. Ngày 12/7/2026 Bộ Ngoại giao Việt Nam khẳng định UNCLOS 1982 là cơ sở pháp lý duy nhất về các vùng biển.',
          en: 'The award did not rule on who owns the islands. On 12 July 2026 Vietnam’s foreign ministry said UNCLOS 1982 is the sole legal basis for maritime zones.'
        }
      ],
      ll: [113, 13],
      k: 3.2,
      layers: [],
      show: ['ninedash', 'biendong'],
      hl: { China: CN, Vietnam: VN, Philippines: PH, Malaysia: MY, Indonesia: ID, Brunei: BN },
      dim: true,
      src: [9, 10, 11]
    },
    {
      tag: 'move',
      title: { vi: 'Nước đi thứ hai: chiếm đảo, đắp đảo', en: 'Second move: seize islands, build them up' },
      text: {
        vi: 'Hoàng Sa và Trường Sa là của Việt Nam. Tháng 1/1974, sau trận hải chiến với hải quân Việt Nam Cộng hòa, Trung Quốc chiếm toàn bộ Hoàng Sa. Ở Trường Sa, Trung Quốc giữ 7 thực thể, bồi các bãi đá thành đảo nhân tạo, rồi xây đường băng ở Chữ Thập, Xu Bi và Vành Khăn. Mỗi đảo như thế là một chỗ đứng giữa biển, nơi tàu và máy bay Trung Quốc có thể ở lại lâu dài.',
        en: 'The Paracels (Hoàng Sa) and the Spratlys (Trường Sa) belong to Vietnam. In January 1974, after a naval battle with the Republic of Vietnam’s navy, China seized all of the Paracels. In the Spratlys China holds 7 features; it has built reefs up into artificial islands and laid airstrips on Fiery Cross, Subi and Mischief. Each such island is a foothold in the middle of the sea, where Chinese ships and aircraft can stay for good.'
      },
      facts: [
        {
          vi: 'Theo AMTI (CSIS), ở Trường Sa Việt Nam đóng giữ 21 thực thể, Philippines 9, Trung Quốc 7, Malaysia 5, Đài Loan 1. Đất bồi đắp: Trung Quốc khoảng 5.460 mẫu Anh, Việt Nam khoảng 2.771 mẫu Anh (8/5/2026).',
          en: 'According to AMTI (CSIS), in the Spratlys Vietnam holds 21 features, the Philippines 9, China 7, Malaysia 5 and Taiwan 1. Reclaimed land: China about 5,460 acres, Vietnam about 2,771 acres (8 May 2026).'
        },
        {
          vi: 'Ngày 28/8/2026 Bộ Ngoại giao Việt Nam khẳng định chủ quyền với Hoàng Sa và phản đối việc Trung Quốc xây dựng ở đó.',
          en: 'On 28 Aug 2026 Vietnam’s foreign ministry reaffirmed its sovereignty over the Paracels and protested Chinese construction there.'
        }
      ],
      ll: [113.3, 12.8],
      k: 5.5,
      layers: [],
      show: [],
      hl: { China: CN, Vietnam: VN, Philippines: PH, Malaysia: MY, Taiwan: TW, Brunei: BN },
      dim: true,
      draw: [
        { k: 'pt', p: [112.34, 16.83], c: CN, r: 5, label: { vi: 'Hoàng Sa', en: 'Paracels' } },
        { k: 'pt', p: [112.89, 9.55], c: CN, r: 5, side: 'l', label: { vi: 'Chữ Thập', en: 'Fiery Cross' } },
        { k: 'pt', p: [114.08, 10.92], c: CN, r: 5, side: 'l', label: { vi: 'Xu Bi', en: 'Subi' } },
        { k: 'pt', p: [115.53, 9.9], c: CN, r: 5, label: { vi: 'Vành Khăn', en: 'Mischief' } },
        { k: 'pt', p: [111.92, 8.64], c: VN, r: 5, side: 'l', label: { vi: 'Trường Sa Lớn', en: 'Spratly Island' } },
        { k: 'pt', p: [114.28, 11.05], c: PH, r: 5, label: { vi: 'Thị Tứ', en: 'Thitu' } }
      ],
      key: [
        { c: CN, vi: 'Trung Quốc đóng giữ (có đường băng)', en: 'Held by China (with airstrips)' },
        { c: VN, vi: 'Việt Nam', en: 'Vietnam' },
        { c: PH, vi: 'Philippines', en: 'Philippines' }
      ],
      src: [12, 13, 14, 7, 15]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng đó cũng là biển nhà của nước khác', en: 'But it is other countries’ home sea too' },
      text: {
        vi: 'Vấn đề là đường chín đoạn đè lên vùng biển của Việt Nam, Philippines, Malaysia, Brunei và Indonesia. Theo Luật Biển (UNCLOS), mỗi nước ven biển có vùng đặc quyền kinh tế rộng 200 hải lý (khoảng 370 km) tính từ bờ, với quyền khai thác cá và dầu khí trong đó. Chấp nhận đường chín đoạn nghĩa là mất phần lớn vùng biển ấy. Nên các nước này không lùi.',
        en: 'The trouble is that the nine-dash line runs over the waters of Vietnam, the Philippines, Malaysia, Brunei and Indonesia. Under the law of the sea (UNCLOS), every coastal state has an exclusive economic zone of 200 nautical miles (about 370 km) from its coast, with the right to its fish, oil and gas. Accepting the nine-dash line would mean losing most of that zone. So these countries do not back down either.'
      },
      ll: [112, 10],
      k: 3,
      layers: [],
      show: ['ninedash'],
      hl: { Vietnam: VN, China: CN, Philippines: PH, Malaysia: MY, Indonesia: ID, Brunei: BN },
      dim: true,
      draw: [
        { k: 'circle', at: [109.2, 12.0], r: 370.4, c: VN, a: 0.12, w: 1.4 },
        { k: 'circle', at: [120.0, 15.5], r: 370.4, c: PH, a: 0.12, w: 1.4 },
        { k: 'circle', at: [117.5, 9.5], r: 370.4, c: PH, a: 0.1, w: 1.4 },
        { k: 'circle', at: [114.5, 5.0], r: 370.4, c: MY, a: 0.12, w: 1.4 },
        { k: 'circle', at: [108.2, 3.9], r: 370.4, c: ID, a: 0.12, w: 1.4 },
        { k: 'label', p: [115.8, 13.2], c: '#4B5563', label: { vi: '200 hải lý tính từ bờ (minh họa)', en: '200 nautical miles from the coast (illustration)' }, dy: 0 }
      ],
      key: [
        { c: VN, vi: 'Việt Nam', en: 'Vietnam' },
        { c: PH, vi: 'Philippines', en: 'Philippines' },
        { c: MY, vi: 'Malaysia', en: 'Malaysia' },
        { c: ID, vi: 'Indonesia', en: 'Indonesia' }
      ],
      src: [16, 11]
    },
    {
      tag: 'outlook',
      title: { vi: 'Không bên nào lùi, va chạm không dứt', en: 'Neither side backs down, so clashes go on' },
      text: {
        vi: 'Trung Quốc không đánh lớn. Theo CRS, họ dùng tàu hải cảnh và dân quân biển lấn từng bước nhỏ, bước nào cũng chưa đủ để thành chiến tranh; người ta gọi đó là chiến thuật “vùng xám”. Va chạm hay xảy ra ở các bãi cạn: Scarborough và Second Thomas với Philippines, bãi Tư Chính với Việt Nam. Mỗi bên kể lại một kiểu.',
        en: 'China does not fight a big war. According to CRS, it uses coast guard ships and maritime militia to push forward in small steps, none of them enough to start a war; this is called “grey-zone” tactics. Clashes cluster around shoals: Scarborough and Second Thomas with the Philippines, Vanguard Bank with Vietnam. Each side tells them its own way.'
      },
      facts: [
        {
          vi: 'Ngày 20/7/2026 xảy ra va chạm khi Philippines tiếp tế ở bãi Second Thomas; ngày 3/11/2026 Philippines điều tra một tàu Trung Quốc trong đầm phá Scarborough.',
          en: 'On 20 Jul 2026 a clash broke out during a Philippine resupply at Second Thomas Shoal; on 3 Nov 2026 the Philippines was investigating a Chinese vessel inside the Scarborough lagoon.'
        },
        {
          vi: 'Năm 2019 tàu khảo sát Haiyang Dizhi 8 của Trung Quốc, có hải cảnh hộ tống, hoạt động khoảng ba tháng gần bãi Tư Chính, trong vùng đặc quyền kinh tế của Việt Nam (ISEAS).',
          en: 'In 2019 China’s survey ship Haiyang Dizhi 8, escorted by coast guard vessels, spent about three months near Vanguard Bank, inside Vietnam’s EEZ (ISEAS).'
        }
      ],
      ll: [113.5, 11.5],
      k: 3.4,
      layers: [],
      show: ['scarborough'],
      hl: { Philippines: PH, Vietnam: VN, China: CN },
      dim: true,
      draw: [
        { k: 'pt', p: [115.86, 9.72], c: HOT, r: 6, label: { vi: 'Second Thomas', en: 'Second Thomas Shoal' } },
        { k: 'pt', p: [109.95, 7.4], c: HOT, r: 6, label: { vi: 'Tư Chính', en: 'Vanguard Bank' } }
      ],
      src: [7, 18, 19, 17]
    },
    {
      tag: 'outlook',
      title: { vi: 'Chưa có luật chơi, Biển Đông còn nóng', en: 'No rulebook yet, so the sea stays hot' },
      text: {
        vi: 'ASEAN và Trung Quốc bàn một Bộ quy tắc ứng xử (COC) từ năm 2013 và hẹn xong trong năm 2026, nhưng đến nay chưa ký. Vẫn vướng ba điểm: áp dụng cho vùng biển nào, có ràng buộc pháp lý không, thi hành ra sao. Gốc rễ thì còn nguyên: Bắc Kinh sợ bị nhốt sau chuỗi đảo, các nước xung quanh sợ mất biển của mình. Chừng nào hai nỗi sợ ấy chưa gỡ được, Biển Đông còn là điểm nóng.',
        en: 'ASEAN and China have discussed a Code of Conduct (COC) since 2013 and aimed to finish it in 2026, but it is still unsigned. Three points remain stuck: which waters it covers, whether it is legally binding and how it is enforced. The root is unchanged: Beijing fears being shut in behind the island chain, and its neighbours fear losing their own sea. Until those two fears are settled, the East Sea stays a flashpoint.'
      },
      ll: [114, 13],
      k: 2.6,
      layers: [],
      show: ['biendong', 'ninedash', 'firstchain'],
      hl: { Vietnam: VN, China: CN, Philippines: PH, Malaysia: MY, Indonesia: ID, Brunei: BN, Taiwan: TW },
      dim: true,
      src: [20]
    }
  ]
};
