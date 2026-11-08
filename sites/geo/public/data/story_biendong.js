// Explainer: Biển Đông (South China Sea). Facts from the research pack of 8 Nov 2026; sources are listed below and
// every step names the ones it rests on. Claims by a government are attributed to it; the map shapes are illustrative.
const VN = '#E24B4A', CN = '#D9A441', PH = '#378ADD', MY = '#1D9E75', ID = '#7F77DD', TW = '#6B8F9C', BN = '#BA7517';
const FLOW = '#D97706';

export const BIENDONG = {
  id: 'biendong',
  icon: '🌊',
  c: '#2E7CC0',
  title: { vi: 'Biển Đông', en: 'East Sea (South China Sea)' },
  sub: { vi: 'Đường biển, luật biển và các điểm nóng', en: 'Sea lane, law of the sea and flashpoints' },
  asof: '2026-11-08',
  status: {
    vi: 'Phán quyết ngày 12/7/2016 vẫn là mốc pháp lý chính: Trung Quốc không chấp nhận, còn Việt Nam khẳng định UNCLOS 1982 là cơ sở pháp lý duy nhất về các vùng biển. Năm 2026 ghi nhận va chạm tại bãi Second Thomas (20/7) và quanh Scarborough (đầu tháng 11), cùng phản đối của Việt Nam về việc Trung Quốc xây dựng ở Hoàng Sa (28/8). Bộ quy tắc ứng xử (COC) giữa ASEAN và Trung Quốc chưa hoàn tất.',
    en: 'The 12 July 2016 award remains the main legal reference point: China does not accept it, while Vietnam says UNCLOS 1982 is the sole legal basis for maritime zones. 2026 saw a clash at Second Thomas Shoal (20 July), incidents around Scarborough Shoal (early November) and a Vietnamese protest over Chinese construction in the Paracels (28 August). The ASEAN–China Code of Conduct (COC) is not concluded.'
  },
  statusSrc: [11, 6, 8],
  sources: [
    { n: 'CSIS, Troubled Straits (1/7/2026)', url: 'https://www.csis.org/analysis/south-china-sea-trade-chokepoints' },
    { n: 'US EIA, World Oil Transit Chokepoints (3/3/2026)', url: 'https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints' },
    { n: 'US EIA, South China Sea', url: 'https://www.eia.gov/international/content/analysis/regions_of_interest/South_China_Sea/' },
    { n: 'UNCLOS, Part V (EEZ)', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part5.htm' },
    { n: 'UNCLOS, Part VIII (islands)', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part8.htm' },
    { n: 'GMA News (12/7/2016, trích phán quyết PCA)', url: 'https://www.gmanetwork.com/news/news/nation/573371/int-l-tribunal-invalidates-china-s-nine-dash-line-massive-claims/story' },
    { n: 'ZNews (12/7/2026, Bộ Ngoại giao VN)', url: 'https://lifestyle.zingnews.vn/viet-nam-tai-khang-dinh-unclos-la-co-so-phap-ly-duy-nhat-ve-vung-bien-post1668546.html' },
    { n: 'CSIS AMTI, Island Tracker', url: 'https://amti.csis.org/island-tracker/' },
    { n: 'VnExpress (28/8/2026, Bộ Ngoại giao VN)', url: 'https://vnexpress.net/viet-nam-phan-doi-trung-quoc-xay-dung-trai-phep-tai-hoang-sa-5114678.html' },
    { n: 'CSIS AMTI, Keeping Score (8/5/2026)', url: 'https://amti.csis.org/keeping-score-vietnams-spratly-island-overhaul-continues/' },
    { n: 'CSIS AMTI, Second Thomas Shoal (23/3/2026)', url: 'https://amti.csis.org/divergence-and-tacit-understanding-in-the-china-philippines-provisional-arrangement-at-second-thomas-shoal/' },
    { n: 'RFA (24/4/2026, COC)', url: 'https://www.rfa.org/english/southchinasea/2026/04/24/asean-south-china-sea-code-of-conduct-philippines/' },
    { n: 'The Defense Post (3/11/2026)', url: 'https://thedefensepost.com/2026/11/03/philippines-probes-chinese-vessel-shoal/' },
    { n: 'Inquirer (10/11/2024)', url: 'https://www.inquirer.net/420450/china-declares-baselines-reaffirms-opposition-to-phs-new-maritime-law/' },
    { n: 'Interaksyon / Reuters (23/7/2026)', url: 'https://interaksyon.philstar.com/politics-issues/2026/07/23/316799/philippines-says-china-shoal-deal-needs-no-permission-for-resupply/' }
  ],
  steps: [
    {
      title: { vi: 'Con đường biển của thế giới', en: "The world's sea highway" },
      text: {
        vi: 'Biển Đông là vùng biển nửa kín giữa Đông Nam Á và Đông Á. Phía tây nam, nó nối Ấn Độ Dương qua eo Malacca; phía bắc, thông ra biển Hoa Đông và Thái Bình Dương qua eo Đài Loan và eo Luzon. Vì vậy một phần rất lớn thương mại và năng lượng của Đông Á đi qua đây.',
        en: 'The East Sea (South China Sea) is a semi-enclosed sea between Southeast and East Asia. To the southwest the Strait of Malacca links it to the Indian Ocean; to the north the Taiwan and Luzon straits open to the East China Sea and the Pacific. That is why so much of East Asia’s trade and energy passes through it.'
      },
      facts: [
        {
          vi: 'Năm 2024, eo Malacca và eo Đài Loan mỗi nơi có hơn 2,4 nghìn tỷ USD hàng hóa đi qua, khoảng 21% thương mại hàng hải toàn cầu (CSIS).',
          en: 'In 2024 the Malacca and Taiwan straits each handled over US$2.4 trillion of goods, about 21% of global maritime trade (CSIS).'
        },
        {
          vi: 'Nửa đầu năm 2025, 23,2 triệu thùng dầu mỗi ngày đi qua Malacca, khoảng 29% lượng dầu vận chuyển đường biển toàn cầu (EIA).',
          en: 'In the first half of 2025, 23.2 million barrels of oil a day passed through Malacca, about 29% of global maritime oil flows (EIA).'
        },
        {
          vi: 'Các con số dùng cách đo khác nhau (theo giá trị hay khối lượng, một eo biển hay cả vùng biển), nên không cộng hay so sánh trực tiếp được.',
          en: 'The figures use different methods (value or volume, one strait or the whole sea), so they should not be added or compared directly.'
        }
      ],
      ll: [110, 12],
      k: 2.4,
      layers: ['strait', 'route'],
      show: ['malacca', 'r_suez', 'r_gulf_asia', 'taiwanstrait', 'luzon'],
      hl: { Vietnam: VN, China: CN, Philippines: PH, Malaysia: MY, Indonesia: ID, Taiwan: TW, Brunei: BN },
      dim: true,
      draw: [
        { k: 'line', pts: [[100.6, 3.2], [104.0, 1.3], [108.0, 5.0], [112.0, 11.0], [116.0, 17.0], [119.6, 24.3]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'Luồng hàng hải chính', en: 'Main shipping flow' }, dy: 12 },
        { k: 'line', pts: [[112.0, 11.0], [119.0, 16.5], [121.3, 20.3]], c: FLOW, w: 2.4, flow: true, arrow: true }
      ],
      src: [0, 1]
    },
    {
      title: { vi: 'Bảy bờ biển, một bộ luật chung', en: 'Seven coasts, one rulebook' },
      text: {
        vi: 'Quanh Biển Đông có Việt Nam, Trung Quốc, Đài Loan, Philippines, Malaysia, Brunei và Indonesia. Theo Công ước Liên Hợp Quốc về Luật Biển 1982 (UNCLOS), mỗi quốc gia ven biển có vùng đặc quyền kinh tế (EEZ) tối đa 200 hải lý (khoảng 370 km) tính từ đường cơ sở. Biển Đông có nhiều chỗ hẹp hơn 400 hải lý, nên các vùng này chồng lấn lên nhau.',
        en: 'Vietnam, China, Taiwan, the Philippines, Malaysia, Brunei and Indonesia all border the sea. Under the UN Convention on the Law of the Sea (UNCLOS, 1982), a coastal state can claim an exclusive economic zone (EEZ) up to 200 nautical miles (about 370 km) from its baselines. The sea is narrower than 400 nautical miles in many places, so these zones overlap.'
      },
      facts: [
        {
          vi: 'Trong EEZ, nước ven biển có quyền chủ quyền về tài nguyên (Điều 56); tàu và máy bay các nước khác vẫn được tự do hàng hải và bay qua (Điều 58).',
          en: 'Inside an EEZ the coastal state has sovereign rights over resources (Art. 56), while ships and aircraft of other states keep freedom of navigation and overflight (Art. 58).'
        },
        {
          vi: '“Đá không thể duy trì sự cư trú của con người hay đời sống kinh tế riêng thì không có EEZ hay thềm lục địa” (Điều 121, khoản 3).',
          en: '“Rocks which cannot sustain human habitation or economic life of their own shall have no exclusive economic zone or continental shelf” (Art. 121(3)).'
        },
        {
          vi: 'Philippines gọi phần biển của mình là Biển Tây Philippines, Indonesia gọi là Biển Bắc Natuna.',
          en: 'The Philippines calls its part the West Philippine Sea; Indonesia calls its part the North Natuna Sea.'
        }
      ],
      ll: [112, 10],
      k: 3,
      layers: [],
      show: ['biendong'],
      hl: { Vietnam: VN, China: CN, Philippines: PH, Malaysia: MY, Indonesia: ID, Taiwan: TW, Brunei: BN },
      dim: true,
      draw: [
        { k: 'circle', at: [109.2, 12.0], r: 370.4, c: VN, a: 0.12, w: 1.4 },
        { k: 'circle', at: [109.5, 18.2], r: 370.4, c: CN, a: 0.12, w: 1.4 },
        { k: 'circle', at: [120.0, 15.5], r: 370.4, c: PH, a: 0.12, w: 1.4 },
        { k: 'circle', at: [117.5, 9.5], r: 370.4, c: PH, a: 0.1, w: 1.4 },
        { k: 'circle', at: [114.5, 5.0], r: 370.4, c: MY, a: 0.12, w: 1.4 },
        { k: 'circle', at: [108.2, 3.9], r: 370.4, c: ID, a: 0.12, w: 1.4 },
        { k: 'label', p: [115.8, 13.2], c: '#4B5563', label: { vi: '200 hải lý ≈ 370 km (minh họa)', en: '200 nautical miles ≈ 370 km (illustration)' }, dy: 0 }
      ],
      key: [
        { c: VN, vi: 'Việt Nam', en: 'Vietnam' },
        { c: CN, vi: 'Trung Quốc', en: 'China' },
        { c: PH, vi: 'Philippines', en: 'Philippines' },
        { c: MY, vi: 'Malaysia', en: 'Malaysia' },
        { c: ID, vi: 'Indonesia', en: 'Indonesia' }
      ],
      src: [3, 4]
    },
    {
      title: { vi: 'Đường chín đoạn và phán quyết 2016', en: 'The nine-dash line and the 2016 ruling' },
      text: {
        vi: 'Trung Quốc vẽ trên bản đồ một đường gồm các đoạn gạch, gọi là “đường chín đoạn”, bao quanh phần lớn Biển Đông. Ngày 12/7/2016, Tòa Trọng tài lập theo Phụ lục VII của UNCLOS, trong vụ Philippines kiện Trung Quốc, kết luận không có cơ sở pháp lý để Trung Quốc đòi “quyền lịch sử” đối với tài nguyên trong vùng biển nằm trong đường này. Phán quyết không phân xử chủ quyền đối với các đảo.',
        en: 'China draws a line of dashes on its maps, the “nine-dash line”, around most of the sea. On 12 July 2016 an arbitral tribunal set up under Annex VII of UNCLOS, in the case brought by the Philippines against China, concluded there was no legal basis for China to claim historic rights to resources within the sea areas inside that line. The ruling did not decide who owns the islands.'
      },
      facts: [
        {
          vi: 'Trung Quốc không tham gia vụ kiện và không chấp nhận phán quyết.',
          en: 'China did not take part in the case and does not accept the ruling.'
        },
        {
          vi: 'Ngày 12/7/2026, nhân kỷ niệm 10 năm, Bộ Ngoại giao Việt Nam khẳng định UNCLOS 1982 là cơ sở pháp lý duy nhất về phạm vi các vùng biển được hưởng.',
          en: 'On 12 July 2026, the tenth anniversary, Vietnam’s foreign ministry said UNCLOS 1982 is the sole legal basis for the extent of maritime zones.'
        },
        {
          vi: 'Tháng 8/2023 Trung Quốc công bố bản đồ chuẩn thêm một đoạn thứ mười phía đông Đài Loan; Việt Nam phản đối đường này vì xâm phạm chủ quyền của mình (Bộ Ngoại giao VN, 1/9/2023).',
          en: 'In August 2023 China issued a standard map with a tenth dash east of Taiwan; Vietnam said the line violates its sovereignty (Vietnam’s foreign ministry, 1 Sep 2023).'
        }
      ],
      ll: [113, 13],
      k: 3.2,
      layers: [],
      show: ['ninedash', 'biendong', 'scarborough'],
      hl: { China: CN, Vietnam: VN, Philippines: PH, Malaysia: MY, Indonesia: ID, Brunei: BN },
      dim: true,
      src: [5, 6, 2]
    },
    {
      title: { vi: 'Hoàng Sa và Trường Sa', en: 'The Paracels and the Spratlys' },
      text: {
        vi: 'Hoàng Sa ở phía bắc Biển Đông; Trung Quốc hiện kiểm soát quần đảo này, còn Việt Nam khẳng định chủ quyền dựa trên chứng cứ lịch sử và cơ sở pháp lý. Trường Sa ở phía nam gồm rất nhiều đảo, đá, bãi ngầm do nhiều bên đóng giữ. Nhiều bên đã bồi đắp, xây dựng trên các thực thể mình giữ; Trung Quốc có ba đường băng ở Chữ Thập, Xu Bi và Vành Khăn.',
        en: 'The Paracels (Hoàng Sa) lie in the north; China controls the group, while Vietnam asserts sovereignty on historical evidence and a legal basis. The Spratlys (Trường Sa) in the south are many islands, reefs and banks held by several states. Several of them have built up the features they hold; China has airstrips at Fiery Cross, Subi and Mischief reefs.'
      },
      facts: [
        {
          vi: 'Theo AMTI (CSIS, tra cứu 8/11/2026), ở Trường Sa Việt Nam đóng giữ 21 đá và đảo, Philippines 9, Trung Quốc 7, Malaysia 5, Đài Loan 1; ở Hoàng Sa Trung Quốc có 20 tiền đồn. Đây là thống kê của AMTI, không phải số liệu chính thức hay pháp lý.',
          en: 'According to AMTI (CSIS, accessed 8 Nov 2026), in the Spratlys Vietnam occupies 21 rocks and reefs, the Philippines 9, China 7, Malaysia 5 and Taiwan 1; in the Paracels China has 20 outposts. These are AMTI’s counts, not official or legal figures.'
        },
        {
          vi: 'Đất nhân tạo AMTI ghi nhận (8/5/2026): Trung Quốc khoảng 5.460 mẫu Anh, Việt Nam khoảng 2.771 mẫu Anh.',
          en: 'Artificial land recorded by AMTI (8 May 2026): China about 5,460 acres, Vietnam about 2,771 acres.'
        },
        {
          vi: 'Bộ Ngoại giao Việt Nam (28/8/2026) khẳng định chủ quyền đối với Hoàng Sa, kể cả đá Hải Sâm và đảo Ba Ba, và phản đối việc Trung Quốc xây dựng ở đó.',
          en: 'Vietnam’s foreign ministry (28 Aug 2026) reaffirmed its sovereignty over the Paracels, including Hải Sâm reef and Ba Ba island, and protested Chinese construction there.'
        }
      ],
      ll: [113.3, 12.8],
      k: 5.5,
      layers: [],
      show: [],
      hl: { China: CN, Vietnam: VN, Philippines: PH, Malaysia: MY, Taiwan: TW, Brunei: BN },
      dim: true,
      draw: [
        { k: 'pt', p: [112.34, 16.83], c: CN, r: 5, label: { vi: 'Hoàng Sa (đảo Phú Lâm)', en: 'Paracels (Woody Island)' } },
        { k: 'pt', p: [112.89, 9.55], c: CN, r: 5, side: 'l', label: { vi: 'Chữ Thập', en: 'Fiery Cross' } },
        { k: 'pt', p: [114.08, 10.92], c: CN, r: 5, side: 'l', label: { vi: 'Xu Bi', en: 'Subi' } },
        { k: 'pt', p: [115.53, 9.9], c: CN, r: 5, label: { vi: 'Vành Khăn', en: 'Mischief' } },
        { k: 'pt', p: [114.28, 11.05], c: PH, r: 5, label: { vi: 'Thị Tứ (Pag-asa)', en: 'Thitu (Pag-asa)' } },
        { k: 'pt', p: [111.92, 8.64], c: VN, r: 5, side: 'l', label: { vi: 'Trường Sa Lớn', en: 'Spratly Island' } },
        { k: 'pt', p: [114.36, 10.37], c: TW, r: 5, label: { vi: 'Ba Bình (Itu Aba)', en: 'Itu Aba' } },
        { k: 'pt', p: [113.84, 7.37], c: MY, r: 5, label: { vi: 'Hoa Lau (Swallow)', en: 'Swallow Reef' } }
      ],
      key: [
        { c: CN, vi: 'Trung Quốc đóng giữ', en: 'Held by China' },
        { c: VN, vi: 'Việt Nam', en: 'Vietnam' },
        { c: PH, vi: 'Philippines', en: 'Philippines' },
        { c: MY, vi: 'Malaysia', en: 'Malaysia' },
        { c: TW, vi: 'Đài Loan', en: 'Taiwan' }
      ],
      src: [7, 9, 8]
    },
    {
      title: { vi: 'Những điểm nóng đã ghi nhận', en: 'Recorded flashpoints' },
      text: {
        vi: 'Va chạm tập trung quanh các bãi cạn nơi tàu hải cảnh, tàu cá và tàu tiếp tế gặp nhau. Dưới đây chỉ là các sự việc có ngày tháng rõ ràng; mỗi bên kể lại khác nhau, và các phát biểu của phía Trung Quốc không phải lúc nào cũng được kiểm chứng độc lập.',
        en: 'Friction clusters around shoals where coast guard, fishing and resupply vessels meet. Below are only incidents with clear dates; each side tells them differently, and Chinese statements could not always be independently verified.'
      },
      facts: [
        {
          vi: 'Scarborough: ngày 10/11/2024 Trung Quốc công bố đường cơ sở quanh bãi cạn, Philippines phản đối. Ngày 3/11/2026 báo chí ghi nhận Philippines điều tra một tàu Trung Quốc trong đầm phá, còn Chiến khu Nam bộ Trung Quốc nói đã tuần tra sẵn sàng chiến đấu quanh bãi ngày 30/10.',
          en: 'Scarborough: on 10 Nov 2024 China announced baselines around the shoal and the Philippines protested. On 3 Nov 2026 the Philippines was reported investigating a Chinese vessel inside the lagoon, and China’s Southern Theater Command said it ran combat-readiness patrols around the shoal on 30 Oct.'
        },
        {
          vi: 'Second Thomas (Ayungin): tháng 7/2024 Manila và Bắc Kinh đạt thỏa thuận tạm thời về tiếp tế; ngày 20/7/2026 xảy ra va chạm khi tiếp tế, phía Philippines nói một thủy thủ bị đánh bị thương, phía Trung Quốc bác bỏ cách kể này. Ngày 23/7/2026 Philippines nói thỏa thuận không cần xin phép tiếp tế và không cho phép lên tàu kiểm tra.',
          en: 'Second Thomas (Ayungin): in July 2024 Manila and Beijing agreed a provisional resupply arrangement; on 20 Jul 2026 a clash during resupply left a Philippine sailor injured by the Philippine account, which China disputes. On 23 Jul 2026 the Philippines said the arrangement needs no permission for resupply and allows no boarding or inspection.'
        },
        {
          vi: 'Gần Việt Nam: từ 3/7/2019 tàu khảo sát Haiyang Dizhi 8 của Trung Quốc, có tàu hải cảnh hộ tống, hoạt động gần bãi Tư Chính (Vanguard Bank) trong vùng đặc quyền kinh tế của Việt Nam, kéo dài khoảng ba tháng (ISEAS). Ngày 28/8/2026 Bộ Ngoại giao Việt Nam phản đối Trung Quốc xây dựng ở Hoàng Sa.',
          en: 'Near Vietnam: from 3 Jul 2019 China’s survey ship Haiyang Dizhi 8, escorted by coast guard vessels, operated near Vanguard Bank (Tư Chính) in Vietnam’s EEZ for about three months (ISEAS). On 28 Aug 2026 Vietnam’s foreign ministry protested Chinese construction in the Paracels.'
        }
      ],
      ll: [113.5, 11.5],
      k: 3.4,
      layers: [],
      show: ['scarborough', 'hoangsa', 'truongsa'],
      hl: { Philippines: PH, Vietnam: VN, China: CN, Malaysia: MY, Indonesia: ID },
      dim: true,
      draw: [
        { k: 'pt', p: [115.86, 9.72], c: '#D9383A', r: 6, label: { vi: 'Second Thomas (Ayungin)', en: 'Second Thomas Shoal' } },
        { k: 'pt', p: [109.95, 7.4], c: '#D9383A', r: 6, label: { vi: 'Tư Chính (Vanguard Bank)', en: 'Vanguard Bank' } }
      ],
      src: [13, 10, 14, 12, 8]
    },
    {
      title: { vi: 'Bộ quy tắc ứng xử (COC)', en: 'The Code of Conduct (COC)' },
      text: {
        vi: 'ASEAN và Trung Quốc đàm phán một Bộ quy tắc ứng xử ở Biển Đông từ năm 2013, sau Tuyên bố DOC không ràng buộc năm 2002. Mục tiêu đặt ra là hoàn tất trong năm 2026. Đến ngày 8/11/2026 chưa thấy báo cáo nào cho biết COC đã được ký; phạm vi địa lý, tính ràng buộc pháp lý và việc thi hành vẫn là các điểm chưa thống nhất.',
        en: 'ASEAN and China have negotiated a Code of Conduct for the sea since 2013, after the non-binding 2002 Declaration (DOC). The stated target is to finish in 2026. As of 8 Nov 2026 no report says the COC has been signed; its geographic scope, legal status and enforcement remain unresolved.'
      },
      facts: [
        {
          vi: 'Tháng 1/2026 các bộ trưởng ngoại giao ASEAN cam kết “nỗ lực” kết thúc đàm phán trong năm 2026. Hội nghị cấp cao ASEAN lần thứ 49 dự kiến họp tại Manila giữa tháng 11/2026.',
          en: 'In January 2026 ASEAN foreign ministers pledged to “endeavour” to conclude the talks within 2026. The 49th ASEAN Summit is scheduled for Manila in mid-November 2026.'
        },
        {
          vi: 'Một số nhà phân tích nghi ngờ khả năng hoàn tất ngay tại hội nghị này (RFA, 24/4/2026).',
          en: 'Some analysts doubt it can be finished at that summit (RFA, 24 Apr 2026).'
        }
      ],
      ll: [112, 12],
      k: 2.8,
      layers: [],
      show: ['biendong', 'ninedash'],
      hl: { Vietnam: VN, China: CN, Philippines: PH, Malaysia: MY, Indonesia: ID, Brunei: BN, Taiwan: TW },
      dim: true,
      src: [11, 13]
    }
  ]
};
