// Macroeconomic & Development Profiles for 241 Countries & Territories (Bilingual VI / EN)
export const ECON_TIERS = {
  adv: { vi: "Kinh tế phát triển · Thu nhập cao", en: "Advanced · High-Income", c: "#10B981" },
  emg: { vi: "Đang phát triển · Thu nhập TB cao", en: "Emerging · Upper-Middle Income", c: "#0EA5E9" },
  dev: { vi: "Đang phát triển · Thu nhập TB thấp", en: "Developing · Lower-Middle Income", c: "#F59E0B" },
  low: { vi: "Kém phát triển · Thu nhập thấp", en: "Least Developed · Low-Income", c: "#EF4444" }
};

export const ECON_SECTORS = [
  { k: "srv", vi: "Dịch vụ", en: "Services", c: "#3B82F6" },
  { k: "ind", vi: "Công nghiệp – XD", en: "Industry", c: "#F59E0B" },
  { k: "agr", vi: "Nông – Lâm – Thủy sản", en: "Agriculture", c: "#10B981" }
];

export const ECON = {
  "Zimbabwe": {
    "tier": "low",
    "gdp_vi": "~35,2 tỷ USD (#102 thế giới)",
    "gdp_en": "~$35.2B (#102 globally)",
    "pc_vi": "~2.080 USD (PPP ~3.050 USD)",
    "pc_en": "~$2,080 (PPP ~$3,050)",
    "gr": "+3.5%",
    "sec": [
      54,
      34,
      12
    ],
    "main_vi": "Khai khoáng (lithium, vàng, bạch kim, kim cương), thuốc lá xuất khẩu, nông nghiệp (ngô, mía, bông), kiều hối",
    "main_en": "Mining (lithium, gold, platinum, diamonds), tobacco exports, agriculture (maize, sugar, cotton), remittances",
    "note_vi": "Sở hữu trữ lượng lithium lớn nhất châu Phi thu hút đầu tư Trung Quốc, nhưng kinh tế chịu áp lực siêu lạm phát kéo dài và thử nghiệm tiền tệ mới bảo chứng bằng vàng (ZiG).",
    "note_en": "Holds Africa's largest lithium reserves drawing major Chinese investment, yet struggles with chronic hyperinflation, dollarization, and a newly launched gold-backed currency (ZiG)."
  },
  "Zambia": {
    "tier": "low",
    "gdp_vi": "~26,3 tỷ USD (#111 thế giới)",
    "gdp_en": "~$26.3B (#111 globally)",
    "pc_vi": "~1.250 USD (PPP ~4.150 USD)",
    "pc_en": "~$1,250 (PPP ~$4,150)",
    "gr": "+4.0%",
    "sec": [
      57,
      36,
      7
    ],
    "main_vi": "Khai thác & luyện đồng (Copperbelt), coban, ngọc lục bảo, thủy điện (hồ Kariba), nông nghiệp (ngô, đường, thuốc lá)",
    "main_en": "Copper mining & smelting (Copperbelt), cobalt, emeralds, hydropower (Kariba), agriculture (maize, sugar, tobacco)",
    "note_vi": "Nhà sản xuất đồng lớn thứ 2 châu Phi giữ vai trò then chốt trong chuyển dịch năng lượng xanh; vừa tái cơ cấu nợ công G20 và đẩy mạnh tuyến đường sắt hành lang Lobito.",
    "note_en": "Africa's #2 copper producer vital to the green energy transition; emerging from G20 sovereign debt restructuring while expanding export capacity via the Lobito rail corridor."
  },
  "Yemen": {
    "tier": "low",
    "gdp_vi": "~19 tỷ USD",
    "gdp_en": "~$19B",
    "pc_vi": "~550 USD (PPP ~1.900 USD)",
    "pc_en": "~$550 (PPP ~$1,900)",
    "gr": "-1.0%",
    "sec": [
      54,
      24,
      22
    ],
    "main_vi": "Kiều hối từ Ả Rập Xê Út, viện trợ nhân đạo, nông nghiệp (cây khat chiếm diện tích tưới tiêu lớn, cà phê Mocha), dầu khí (đang đình trệ)",
    "main_en": "Remittances from Saudi Arabia, humanitarian aid, agriculture (water-intensive khat cultivation, Mocha coffee), disrupted oil & LNG",
    "note_vi": "Quốc gia nghèo nhất bán đảo Ả Rập bị chia cắt thành hai hệ thống tiền tệ và ngân hàng (Sanaa của Houthi và Aden của chính phủ được công nhận); xuất khẩu dầu mỏ tê liệt và cạn kiệt nguồn nước ngầm nghiêm trọng.",
    "note_en": "The Arabian Peninsula's poorest nation, fractured by civil war into rival central banks and exchange rates in Sanaa and Aden, with oil exports halted and severe groundwater depletion."
  },
  "Vietnam": {
    "tier": "dev",
    "gdp_vi": "~468 tỷ USD (#34 thế giới)",
    "gdp_en": "~$468B (#34 globally)",
    "pc_vi": "~4.620 USD (PPP ~16.300 USD)",
    "pc_en": "~$4,620 (PPP ~$16,300)",
    "gr": "+7.1%",
    "sec": [
      43,
      38,
      19
    ],
    "main_vi": "Điện tử & bán dẫn, dệt may – da giày, máy móc thiết bị, nông thủy sản xuất khẩu (gạo, cà phê, tôm), FDI công nghiệp chế tạo",
    "main_en": "Electronics & semiconductors, textiles & footwear, machinery, agri-seafood exports (rice, coffee, shrimp), manufacturing FDI",
    "note_vi": "Trung tâm sản xuất công nghiệp xuất khẩu năng động bậc nhất Đông Nam Á hưởng lợi lớn từ làn sóng dịch chuyển chuỗi cung ứng 'Trung Quốc + 1', độ mở thương mại cực cao (~165% GDP).",
    "note_en": "One of Southeast Asia's most dynamic export-manufacturing hubs, a prime beneficiary of 'China+1' supply-chain shifts with trade openness exceeding 165% of GDP."
  },
  "Venezuela": {
    "tier": "dev",
    "gdp_vi": "~106 tỷ USD (#68 thế giới)",
    "gdp_en": "~$106B (#68 globally)",
    "pc_vi": "~3.870 USD (PPP ~8.480 USD)",
    "pc_en": "~$3,870 (PPP ~$8,480)",
    "gr": "+5.5%",
    "sec": [
      52,
      42,
      6
    ],
    "main_vi": "Dầu mỏ & khí đốt (vành đai Orinoco & hồ Maracaibo), hóa dầu, khai thác vàng – quặng sắt – bauxite (Guayana), kiều hối",
    "main_en": "Crude oil & natural gas (Orinoco Belt & Lake Maracaibo), petrochemicals, gold, iron ore & bauxite mining, remittances",
    "note_vi": "Nắm trữ lượng dầu thô đã kiểm chứng lớn nhất thế giới (~303 tỷ thùng) nhưng sản lượng suy giảm mạnh do cấm vận, thiếu đầu tư hạ tầng PDVSA và làn sóng di cư hơn 7 triệu người.",
    "note_en": "Holds the world's largest proven crude oil reserves (~303B barrels), though output remains constrained by US sanctions, PDVSA underinvestment, and a 7+ million diaspora."
  },
  "Vatican": {
    "tier": "adv",
    "gdp_vi": "~0,02 tỷ USD (~21 triệu USD)",
    "gdp_en": "~$21M (microstate)",
    "pc_vi": "~27.000 USD",
    "pc_en": "~$27,000",
    "gr": "+1.5%",
    "sec": [
      95,
      5,
      0
    ],
    "main_vi": "Du lịch bảo tàng & hành hương tôn giáo, tiền quyên góp toàn cầu (Peter's Pence), quản lý tài sản & bất động sản, phát hành tem – xu sưu tầm",
    "main_en": "Museum tourism & religious pilgrimage, global papal donations (Peter's Pence), financial & real estate asset management, philatelic & numismatic sales",
    "note_vi": "Nền kinh tế phi thương mại độc đáo nhất thế giới sử dụng đồng Euro theo hiệp ước với Ý; nguồn thu dựa vào Bảo tàng Vatican (~6 triệu khách/năm) và quỹ tài chính Tòa Thánh (IOR).",
    "note_en": "Unique non-commercial sovereign economy operating on the Euro via monetary treaty with Italy; funded by the Vatican Museums (~6M visitors/year), real estate, and Peter's Pence."
  },
  "Vanuatu": {
    "tier": "dev",
    "gdp_vi": "~1,16 tỷ USD (#177 thế giới)",
    "gdp_en": "~$1.16B (#177 globally)",
    "pc_vi": "~3.490 USD (PPP ~3.780 USD)",
    "pc_en": "~$3,490 (PPP ~$3,780)",
    "gr": "+2.9%",
    "sec": [
      67,
      11,
      22
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển & tàu biển, nông nghiệp (kava, cùi dừa khô, ca cao, thịt bò), chương trình đầu tư quốc tịch, dịch vụ tài chính ngoài khơi",
    "main_en": "Resort & cruise tourism, agriculture (kava, copra, cocoa, beef), citizenship-by-investment program, offshore financial services",
    "note_vi": "Quốc đảo Nam Thái Bình Dương không thu thuế thu nhập cá nhân hay doanh nghiệp; chịu rủi ro thiên tai bão nhiệt đới và động đất mức cao nhất thế giới.",
    "note_en": "South Pacific island nation levying no personal or corporate income tax; ranks among the world's most disaster-exposed economies due to cyclones and seismic activity."
  },
  "Uzbekistan": {
    "tier": "dev",
    "gdp_vi": "~115 tỷ USD",
    "gdp_en": "~$115B",
    "pc_vi": "~3.090 USD (PPP ~11.800 USD)",
    "pc_en": "~$3,090 (PPP ~$11,800)",
    "gr": "+6.0%",
    "sec": [
      44,
      34,
      22
    ],
    "main_vi": "Khai thác vàng (top 10 thế giới), khí đốt tự nhiên, đồng & uranium, dệt may bông sợi (chế biến sâu trong nước), ô tô lắp ráp, kiều hối",
    "main_en": "Gold mining (top 10 globally), natural gas, copper & uranium, value-added cotton textiles, automotive assembly, remittances",
    "note_vi": "Quốc gia đông dân nhất Trung Á đang chuyển mình mạnh mẽ nhờ chương trình cải cách mở cửa từ năm 2017, chấm dứt xuất khẩu bông thô để phát triển công nghiệp dệt may và chế tạo nội địa.",
    "note_en": "Central Asia's most populous nation, rapidly modernizing through post-2017 market liberalization, gold revenues, and a shift from raw cotton exports to domestic textile manufacturing."
  },
  "Uruguay": {
    "tier": "adv",
    "gdp_vi": "~82,6 tỷ USD (#77 thế giới)",
    "gdp_en": "~$82.6B (#77 globally)",
    "pc_vi": "~23.900 USD (PPP ~36.400 USD)",
    "pc_en": "~$23,900 (PPP ~$36,400)",
    "gr": "+3.2%",
    "sec": [
      72,
      20,
      8
    ],
    "main_vi": "Chăn nuôi bò thịt xuất khẩu, bột giấy (UPM), đậu tương, xuất khẩu phần mềm & CNTT, dịch vụ tài chính – cảng tự do, năng lượng tái tạo (98% điện xanh)",
    "main_en": "Beef & livestock exports, cellulose pulp (UPM), soybeans, software & IT exports, free-zone financial services, renewable energy (98% green grid)",
    "note_vi": "'Thụy Sĩ của Nam Mỹ' có thu nhập bình quân đầu người và sự ổn định thể chế cao nhất khu vực; dẫn đầu Mỹ Latin về xuất khẩu phần mềm theo đầu người và điện gió – thủy điện.",
    "note_en": "'Switzerland of South America' boasting the region's highest institutional stability and per-capita income; Latin America's per-capita software export leader running on ~98% renewable electricity."
  },
  "Micronesia": {
    "tier": "dev",
    "gdp_vi": "~0,47 tỷ USD (#185 thế giới)",
    "gdp_en": "~$470M (#185 globally)",
    "pc_vi": "~4.160 USD (PPP ~4.620 USD)",
    "pc_en": "~$4,160 (PPP ~$4,620)",
    "gr": "+1.8%",
    "sec": [
      74,
      6,
      20
    ],
    "main_vi": "Cấp phép đánh bắt cá ngừ vùng đặc quyền kinh tế (EEZ), viện trợ Hiệp ước Liên kết Tự do (COFA) từ Mỹ, nông nghiệp tự cung (khoai môn, dừa), du lịch lặn biển",
    "main_en": "EEZ tuna fishing license fees, US Compact of Free Association (COFA) grants, subsistence agriculture (taro, copra), dive tourism (Chuuk Lagoon)",
    "note_vi": "Sử dụng đồng USD và phụ thuộc lớn vào nguồn ngân sách COFA của Mỹ cùng phí bán quyền khai thác cá ngừ trên vùng biển rộng gần 3 triệu km².",
    "note_en": "Uses the US dollar and relies heavily on renewed US COFA trust/grant funding alongside tuna access fees across its vast 3-million-km² Pacific Exclusive Economic Zone."
  },
  "Marshall Is.": {
    "tier": "dev",
    "gdp_vi": "~0,30 tỷ USD (#188 thế giới)",
    "gdp_en": "~$300M (#188 globally)",
    "pc_vi": "~6.850 USD (PPP ~7.350 USD)",
    "pc_en": "~$6,850 (PPP ~$7,350)",
    "gr": "+2.4%",
    "sec": [
      76,
      9,
      15
    ],
    "main_vi": "Đăng ký tàu biển quốc tế (lớn thứ 2-3 thế giới), phí đánh bắt cá ngừ, căn cứ quân sự Mỹ Kwajalein, viện trợ COFA của Mỹ, chế biến dừa",
    "main_en": "International ship registry (top-3 globally), tuna fishing licenses, US Army Garrison Kwajalein, US COFA grants, copra processing",
    "note_vi": "Sở hữu một trong ba đội tàu đăng ký cờ tiện lợi (Flag of Convenience) lớn nhất hành tinh; dùng đồng USD và nhận nguồn thu ổn định từ căn cứ thử tên lửa Kwajalein của Mỹ.",
    "note_en": "Operates one of the world's top three open ship registries; uses the USD and derives steady income from tuna transshipment and the US Ronald Reagan Ballistic Missile Defense Test Site at Kwajalein."
  },
  "N. Mariana Is.": {
    "tier": "adv",
    "gdp_vi": "~1,10 tỷ USD (lãnh thổ Mỹ)",
    "gdp_en": "~$1.10B (US Commonwealth)",
    "pc_vi": "~23.500 USD",
    "pc_en": "~$23,500",
    "gr": "+2.0%",
    "sec": [
      88,
      10,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển (Saipan, Tinian), chi tiêu quân sự & hạ tầng liên bang Mỹ, dịch vụ bán lẻ, xây dựng",
    "main_en": "Beach resort tourism (Saipan, Tinian), US federal & military defense infrastructure spending, retail services, construction",
    "note_vi": "Thịnh vượng chung thuộc Mỹ dùng đồng USD; kinh tế phụ thuộc vào du khách Đông Á (Hàn Quốc, Nhật Bản) và các dự án mở rộng căn cứ Không quân Mỹ tại đảo Tinian.",
    "note_en": "US Commonwealth using the USD; economy pivots on East Asian resort tourism (South Korea, Japan) and major US Indo-Pacific airbase expansion projects on Tinian."
  },
  "U.S. Virgin Is.": {
    "tier": "adv",
    "gdp_vi": "~4,67 tỷ USD (lãnh thổ Mỹ)",
    "gdp_en": "~$4.67B (US Territory)",
    "pc_vi": "~44.300 USD",
    "pc_en": "~$44,300",
    "gr": "+1.9%",
    "sec": [
      81,
      18,
      1
    ],
    "main_vi": "Du lịch tàu biển & nghỉ dưỡng cao cấp (St. Thomas, St. John), sản xuất rượu rum xuất khẩu (Cruzan, Captain Morgan), lọc & kho vận dầu mỏ (St. Croix)",
    "main_en": "Cruise & luxury resort tourism (St. Thomas, St. John), rum distillation & exports (Cruzan, Captain Morgan), oil storage & refining (St. Croix)",
    "note_vi": "Cảng đón tàu du lịch nhộn nhịp bậc nhất vùng Caribe thuộc Mỹ; hưởng cơ chế hoàn thuế tiêu thụ đặc biệt đối với rượu rum xuất vào đất liền Mỹ.",
    "note_en": "Premier US Caribbean cruise destination benefiting from federal rum cover-over excise tax rebates and duty-free shopping privileges for US mainland visitors."
  },
  "Guam": {
    "tier": "adv",
    "gdp_vi": "~6,91 tỷ USD (lãnh thổ Mỹ)",
    "gdp_en": "~$6.91B (US Territory)",
    "pc_vi": "~40.800 USD",
    "pc_en": "~$40,800",
    "gr": "+3.1%",
    "sec": [
      84,
      15,
      1
    ],
    "main_vi": "Căn cứ quân sự chiến lược của Mỹ (Andersen AFB, Naval Base Guam, Camp Blaz), du lịch nghỉ dưỡng (Nhật Bản, Hàn Quốc), xây dựng hạ tầng quốc phòng, viễn thông cáp ngầm",
    "main_en": "Strategic US military bases (Andersen AFB, Naval Base Guam, Camp Blaz), resort tourism (Japan, Korea), defense construction, subsea cable hub",
    "note_vi": "Tiền đồn quân sự chiến lược của Mỹ tại Tây Thái Bình Dương (chiếm ~1/3 diện tích đảo); chi tiêu quốc phòng liên bang và nút cáp quang biển tạo trụ cột kinh tế vững chắc.",
    "note_en": "Keystone US military hub in the Western Pacific (~1/3 of island land); massive Pentagon defense build-up and trans-Pacific subsea cable landings anchor its high-income economy."
  },
  "American Samoa": {
    "tier": "dev",
    "gdp_vi": "~0,88 tỷ USD (lãnh thổ Mỹ)",
    "gdp_en": "~$880M (US Territory)",
    "pc_vi": "~18.000 USD",
    "pc_en": "~$18,000",
    "gr": "+1.6%",
    "sec": [
      62,
      33,
      5
    ],
    "main_vi": "Chế biến & đóng hộp cá ngừ xuất khẩu sang Mỹ (StarKist), viện trợ liên bang Mỹ, dịch vụ cảng biển nước sâu Pago Pago",
    "main_en": "Tuna canning & processing for the US market (StarKist), US federal transfers, Pago Pago deepwater port services",
    "note_vi": "Cá ngừ đóng hộp chiếm hơn 90% kim ngạch xuất khẩu của đảo nhờ quy chế miễn thuế vào thị trường Mỹ và cảng tự nhiên nước sâu Pago Pago.",
    "note_en": "Canned tuna accounts for over 90% of exports, leveraging duty-free access to the US market and Pago Pago's sheltered deepwater harbor."
  },
  "Puerto Rico": {
    "tier": "adv",
    "gdp_vi": "~120 tỷ USD (lãnh thổ Mỹ)",
    "gdp_en": "~$120B (US Commonwealth)",
    "pc_vi": "~37.500 USD (PPP ~45.200 USD)",
    "pc_en": "~$37,500 (PPP ~$45,200)",
    "gr": "+1.8%",
    "sec": [
      49,
      50,
      1
    ],
    "main_vi": "Sản xuất dược phẩm & công nghệ sinh học, thiết bị y tế, điện tử – hàng không, du lịch Caribe, dịch vụ tài chính & ưu đãi thuế Đạo luật 60",
    "main_en": "Pharmaceuticals & biotechnology manufacturing, medical devices, aerospace & electronics, Caribbean tourism, Act 60 tax-incentive services",
    "note_vi": "Trung tâm sản xuất dược phẩm và thiết bị y tế lớn hàng đầu của Mỹ (công nghiệp chiếm ~50% GDP); đã hoàn tất tái cơ cấu nợ công lịch sử và đang hiện đại hóa lưới điện LUMA.",
    "note_en": "Major US pharmaceutical and medical-device manufacturing powerhouse (industry ~50% of GDP); exited historic municipal bankruptcy while modernizing its hurricane-vulnerable power grid."
  },
  "United States of America": {
    "tier": "adv",
    "gdp_vi": "~29.200 tỷ USD (#1 thế giới)",
    "gdp_en": "~$29.2T (#1 globally)",
    "pc_vi": "~86.600 USD (PPP ~86.600 USD)",
    "pc_en": "~$86,600 (PPP ~$86,600)",
    "gr": "+2.8%",
    "sec": [
      80,
      18,
      2
    ],
    "main_vi": "Công nghệ cao & AI (Silicon Valley), tài chính – vốn toàn cầu (Wall Street), hàng không vũ trụ – quốc phòng, dầu khí đá phiến (số 1 thế giới), dược phẩm, nông nghiệp công nghệ cao",
    "main_en": "High-tech & AI (Silicon Valley), global finance (Wall Street), aerospace & defense, shale oil & gas (#1 globally), pharmaceuticals, industrial agriculture",
    "note_vi": "Siêu cường kinh tế số 1 thế giới phát hành đồng USD dự trữ toàn cầu, thống trị hệ sinh thái bán dẫn – AI – đám mây và tự chủ hoàn toàn cả năng lượng lẫn lương thực.",
    "note_en": "World's #1 economic superpower issuing the global reserve currency (USD), dominating AI, cloud, and semiconductor ecosystems while enjoying full energy and food self-sufficiency."
  },
  "S. Geo. and the Is.": {
    "tier": "adv",
    "gdp_vi": "~0,005 tỷ USD (~5 triệu USD, lãnh thổ Anh)",
    "gdp_en": "~$5M (UK Overseas Territory)",
    "pc_vi": "N/A (chỉ có nhà khoa học & nhân viên bảo tồn)",
    "pc_en": "N/A (researchers & conservation staff only)",
    "gr": "0.0%",
    "sec": [
      60,
      0,
      40
    ],
    "main_vi": "Cấp phép đánh bắt cá răng Nam Cực (Patagonian toothfish) & nhuyễn thể krill, phí du lịch tàu thám hiểm vùng cực, phát hành tem",
    "main_en": "Patagonian toothfish & krill fishing licenses, polar expedition cruise landing fees, philatelic sales",
    "note_vi": "Không có cư dân thường trú; ngân sách tự cân đối nhờ bán giấy phép đánh bắt thủy sản bền vững và thu phí tàu du lịch thám hiểm Nam Cực.",
    "note_en": "No permanent population; self-financed territory funded by sustainable Patagonian toothfish licensing and polar expedition cruise visitor fees."
  },
  "Br. Indian Ocean Ter.": {
    "tier": "adv",
    "gdp_vi": "N/A (khu căn cứ quân sự Anh – Mỹ)",
    "gdp_en": "N/A (UK-US Defense Facility)",
    "pc_vi": "N/A (khoảng 3.000 quân nhân & nhà thầu)",
    "pc_en": "N/A (~3,000 military & contractor personnel)",
    "gr": "0.0%",
    "sec": [
      100,
      0,
      0
    ],
    "main_vi": "Hoạt động hậu cần hải quân & không quân chiến lược tại căn cứ Diego Garcia, bảo tồn biển quần đảo Chagos",
    "main_en": "Strategic naval & air force logistics at Naval Support Facility Diego Garcia, Chagos marine conservation",
    "note_vi": "Không có hoạt động kinh tế dân sự hay thương mại; toàn bộ hoạt động xoay quanh căn cứ quân sự liên hợp Anh – Mỹ trên đảo Diego Garcia (vừa đạt thỏa thuận chuyển giao chủ quyền cho Mauritius kèm thuê dài hạn căn cứ).",
    "note_en": "No civilian commercial economy; activity centers entirely on the joint UK-US strategic military facility at Diego Garcia (under a long-term lease agreement alongside sovereignty transfer to Mauritius)."
  },
  "Saint Helena": {
    "tier": "dev",
    "gdp_vi": "~0,05 tỷ USD (~50 triệu USD, lãnh thổ Anh)",
    "gdp_en": "~$50M (UK Overseas Territory)",
    "pc_vi": "~9.200 USD",
    "pc_en": "~$9,200",
    "gr": "+1.5%",
    "sec": [
      82,
      10,
      8
    ],
    "main_vi": "Viện trợ ngân sách từ Chính phủ Anh, du lịch lịch sử (nơi lưu đày Napoleon), cà phê đặc sản Saint Helena, đánh bắt cá ngừ, dịch vụ căn cứ không quân đảo Ascension",
    "main_en": "UK government budgetary aid, heritage tourism (Napoleon's exile site), specialty St Helena coffee, tuna fishing, Ascension Island airbase services",
    "note_vi": "Một trong những vùng lãnh thổ biệt lập nhất Nam Đại Tây Dương; đã kết nối hàng không thương mại và cáp quang biển Equiano giúp mở rộng du lịch và dịch vụ số.",
    "note_en": "Among the South Atlantic's most remote inhabited territories; commercial air links and the Equiano subsea fiber cable are gradually unlocking eco-heritage tourism."
  },
  "Pitcairn Is.": {
    "tier": "dev",
    "gdp_vi": "~0,001 tỷ USD (~1 triệu USD, lãnh thổ Anh)",
    "gdp_en": "~$1M (UK Overseas Territory)",
    "pc_vi": "~22.000 USD (nhờ trợ cấp Anh)",
    "pc_en": "~$22,000 (via UK budgetary aid)",
    "gr": "0.0%",
    "sec": [
      85,
      5,
      10
    ],
    "main_vi": "Trợ cấp ngân sách từ Anh (~90% thu ngân sách), bán mật ong hữu cơ, đồ thủ công mỹ nghệ cho tàu du lịch ghé thăm, tên miền .pn & tem sưu tầm",
    "main_en": "UK budgetary grants (~90% of public revenue), organic honey exports, handicrafts for passing cruise ships, .pn domain & stamp sales",
    "note_vi": "Nền kinh tế có dân số nhỏ nhất thế giới (~35-40 hậu duệ tàu HMS Bounty); phụ thuộc vào tàu tiếp tế định kỳ từ New Zealand và trợ cấp từ Luân Đôn.",
    "note_en": "World's smallest jurisdiction by population (~35-40 descendants of HMS Bounty mutineers); sustained by UK aid grants, organic honey, and passing cruise vessels."
  },
  "Anguilla": {
    "tier": "adv",
    "gdp_vi": "~0,42 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$420M (UK Overseas Territory)",
    "pc_vi": "~26.500 USD",
    "pc_en": "~$26,500",
    "gr": "+6.5%",
    "sec": [
      86,
      12,
      2
    ],
    "main_vi": "Bản quyền tên miền quốc gia '.ai' (bùng nổ nhờ trí tuệ nhân tạo), du lịch nghỉ dưỡng siêu sang, dịch vụ tài chính ngoài khơi, đánh bắt tôm hùm",
    "main_en": "'.ai' country-code domain registration fees (AI boom), ultra-luxury beach tourism, offshore financial services, lobster fishing",
    "note_vi": "Trúng 'mỏ vàng số' nhờ sở hữu đuôi tên miền quốc gia `.ai` (Artificial Intelligence), mang lại nguồn thu bản quyền chiếm hơn 20-30% ngân sách chính phủ bên cạnh du lịch hạng sang.",
    "note_en": "Struck a digital windfall as owner of the `.ai` country-code top-level domain, generating 20-30%+ of government revenue alongside ultra-luxury Caribbean tourism."
  },
  "Falkland Is.": {
    "tier": "adv",
    "gdp_vi": "~0,37 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$370M (UK Overseas Territory)",
    "pc_vi": "~98.000 USD",
    "pc_en": "~$98,000",
    "gr": "+3.0%",
    "sec": [
      42,
      13,
      45
    ],
    "main_vi": "Cấp phép & khai thác mực ống (Illex & Loligo - chiếm 75% lượng mực toàn Nam Âu), chăn nuôi cừu lấy len cao cấp, du lịch tàu biển Nam Cực, thăm dò dầu khí ngoài khơi (mỏ Sea Lion)",
    "main_en": "Squid fishing & licensing (Illex & Loligo), fine wool sheep farming, Antarctic cruise tourism, offshore oil exploration (Sea Lion field)",
    "note_vi": "Một trong những vùng lãnh thổ có GDP bình quân đầu người cao nhất thế giới nhờ phí cấp phép đánh bắt mực ống cho đội tàu quốc tế và chuẩn bị khai thác mỏ dầu Sea Lion.",
    "note_en": "Boasts one of the world's highest GDP per capita figures, driven by lucrative squid fishing licenses in its 200-nautical-mile zone and planned Sea Lion offshore oil development."
  },
  "Cayman Is.": {
    "tier": "adv",
    "gdp_vi": "~7,14 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$7.14B (UK Overseas Territory)",
    "pc_vi": "~99.800 USD",
    "pc_en": "~$99,800",
    "gr": "+3.2%",
    "sec": [
      91,
      8,
      1
    ],
    "main_vi": "Trung tâm quỹ đầu cơ (hedge funds) & quỹ đầu tư tư nhân toàn cầu, ngân hàng quốc tế, bảo hiểm nội bộ (captive insurance), du lịch nghỉ dưỡng & tàu biển cao cấp",
    "main_en": "Global hedge fund & private equity domicile, international banking, captive insurance, luxury resort & cruise tourism",
    "note_vi": "Trung tâm quỹ phòng hộ lớn nhất thế giới (nơi đăng ký của hơn 70% quỹ đầu cơ toàn cầu); không đánh thuế trực thu (thu nhập, doanh nghiệp, lãi vốn) mà thu phí cấp phép tài chính.",
    "note_en": "World's premier hedge fund domicile (hosting >70% of global offshore hedge funds); levies zero direct income, corporate, or capital-gains taxes, funding public services via licensing and import duties."
  },
  "Bermuda": {
    "tier": "adv",
    "gdp_vi": "~8,58 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$8.58B (UK Overseas Territory)",
    "pc_vi": "~132.000 USD (#2-3 thế giới)",
    "pc_en": "~$132,000 (top-3 globally)",
    "gr": "+3.4%",
    "sec": [
      93,
      6,
      1
    ],
    "main_vi": "Tái bảo hiểm quốc tế (Reinsurance - top 3 thế giới), dịch vụ tài chính – bảo hiểm rủi ro thiên tai, du lịch cao cấp, đăng ký tàu biển & máy bay",
    "main_en": "Global reinsurance & catastrophe bonds (top-3 globally), international financial services, upscale tourism, aircraft & ship registry",
    "note_vi": "'Thủ phủ tái bảo hiểm của thế giới' (cùng với Luân Đôn và Zurich), định giá rủi ro thiên tai toàn cầu; có GDP bình quân đầu người trên 130.000 USD và vừa áp thuế tối thiểu toàn cầu 15%.",
    "note_en": "'Reinsurance capital of the world' alongside London and Zurich, underwriting global catastrophe risk; boasts >$130k GDP per capita while implementing the 15% OECD global minimum corporate tax."
  },
  "British Virgin Is.": {
    "tier": "adv",
    "gdp_vi": "~1,65 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$1.65B (UK Overseas Territory)",
    "pc_vi": "~51.500 USD",
    "pc_en": "~$51,500",
    "gr": "+2.8%",
    "sec": [
      90,
      9,
      1
    ],
    "main_vi": "Đăng ký công ty kinh doanh quốc tế (hơn 350.000 công ty BVI), dịch vụ pháp lý – ủy thác tài sản, du lịch thuê du thuyền buồm (Thủ phủ du thuyền thế giới)",
    "main_en": "International business company incorporations (>350,000 active BVI entities), corporate trust & legal services, yacht charter tourism",
    "note_vi": "Sử dụng đồng USD làm tiền tệ chính thức; phí đăng ký hàng trăm nghìn công ty holding xuyên biên giới (BVI) chiếm hơn một nửa nguồn thu ngân sách chính quyền.",
    "note_en": "Uses the US dollar as legal tender; incorporation fees from >350,000 cross-border holding companies generate over half of government revenue alongside premier bareboat yacht chartering."
  },
  "Turks and Caicos Is.": {
    "tier": "adv",
    "gdp_vi": "~1,45 tỷ USD (lãnh thổ Anh)",
    "gdp_en": "~$1.45B (UK Overseas Territory)",
    "pc_vi": "~31.000 USD",
    "pc_en": "~$31,000",
    "gr": "+4.2%",
    "sec": [
      87,
      12,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng siêu sang (bãi biển Grace Bay), bất động sản biệt thự nghỉ dưỡng, dịch vụ tài chính ngoài khơi, xuất khẩu tôm hùm & ốc hoàng hậu",
    "main_en": "Ultra-luxury resort tourism (Grace Bay), vacation villa real estate, offshore financial services, spiny lobster & queen conch exports",
    "note_vi": "Sử dụng đồng USD và không đánh thuế thu nhập hay thuế tài sản hàng năm; hưởng lợi lớn từ các chuyến bay thẳng ngắn từ bờ Đông nước Mỹ đến cụm resort Grace Bay.",
    "note_en": "Uses the USD with no income or annual property taxes; booming luxury villa and resort sector fueled by direct short-haul flights from the US East Coast."
  },
  "Montserrat": {
    "tier": "dev",
    "gdp_vi": "~0,08 tỷ USD (~80 triệu USD, lãnh thổ Anh)",
    "gdp_en": "~$80M (UK Overseas Territory)",
    "pc_vi": "~17.500 USD",
    "pc_en": "~$17,500",
    "gr": "+2.5%",
    "sec": [
      83,
      15,
      2
    ],
    "main_vi": "Viện trợ ngân sách & đầu tư hạ tầng từ Anh, khai thác cát và đá núi lửa xuất khẩu, năng lượng địa nhiệt, du lịch sinh thái – núi lửa",
    "main_en": "UK budgetary & infrastructure grants, volcanic sand & aggregate mining exports, geothermal energy, volcano eco-tourism",
    "note_vi": "Vụ phun trào núi lửa Soufrière Hills (1995–1997) chôn vùi thủ phủ cũ Plymouth và 2/3 diện tích đảo; đang xây dựng cảng mới Little Bay và phát triển điện địa nhiệt.",
    "note_en": "The 1995–1997 Soufrière Hills volcanic eruptions buried the former capital Plymouth and rendered two-thirds of the island an exclusion zone; rebuilding around Little Bay port and volcanic sand exports."
  },
  "Jersey": {
    "tier": "adv",
    "gdp_vi": "~7,20 tỷ USD (Lãnh thổ Vương quyền Anh)",
    "gdp_en": "~$7.20B (British Crown Dependency)",
    "pc_vi": "~69.500 USD",
    "pc_en": "~$69,500",
    "gr": "+2.1%",
    "sec": [
      91,
      7,
      2
    ],
    "main_vi": "Quản lý quỹ đầu tư & ngân hàng tư nhân (quản lý >1.500 tỷ USD tài sản), dịch vụ ủy thác gia đình (trusts), du lịch, nông nghiệp đặc sản (bò sữa Jersey, khoai tây Jersey Royal)",
    "main_en": "Private banking & fund administration (>£1.3T assets under administration), family trusts, tourism, specialty agriculture (Jersey dairy cattle, Jersey Royal potatoes)",
    "note_vi": "Lãnh thổ tự trị thuộc Vương quyền Anh (không thuộc UK) với quyền tự chủ thuế hoàn toàn; cầu nối vốn hàng đầu chảy vào thị trường tài chính Luân Đôn.",
    "note_en": "Self-governing British Crown Dependency with full fiscal autonomy; serves as a premier wealth-management and private-equity conduit into the City of London."
  },
  "Guernsey": {
    "tier": "adv",
    "gdp_vi": "~4,50 tỷ USD (Lãnh thổ Vương quyền Anh)",
    "gdp_en": "~$4.50B (British Crown Dependency)",
    "pc_vi": "~69.000 USD",
    "pc_en": "~$69,000",
    "gr": "+1.9%",
    "sec": [
      90,
      8,
      2
    ],
    "main_vi": "Bảo hiểm nội bộ (Captive insurance - số 1 châu Âu), quản lý quỹ đầu tư tư nhân & quỹ xanh, dịch vụ tài chính – pháp lý, du lịch & chăn nuôi bò sữa Guernsey",
    "main_en": "Captive insurance (#1 in Europe), private equity & green fund administration, fiduciary services, tourism & Guernsey dairy farming",
    "note_vi": "Trung tâm bảo hiểm tự bảo hiểm (captive insurance) lớn nhất châu Âu và đi đầu thế giới về khuôn khổ pháp lý cho các quỹ đầu tư tài chính xanh (Guernsey Green Fund).",
    "note_en": "Europe's largest captive insurance domicile and an early global pioneer in regulated sustainable finance via the Guernsey Green Fund framework."
  },
  "Isle of Man": {
    "tier": "adv",
    "gdp_vi": "~7,40 tỷ USD (Lãnh thổ Vương quyền Anh)",
    "gdp_en": "~$7.40B (British Crown Dependency)",
    "pc_vi": "~87.500 USD",
    "pc_en": "~$87,500",
    "gr": "+2.4%",
    "sec": [
      86,
      13,
      1
    ],
    "main_vi": "Bảo hiểm nhân thọ quốc tế & quản lý tài sản, công nghệ giải trí số (e-Gaming & fintech), đăng ký tàu biển – máy bay tư nhân, linh kiện hàng không vũ trụ, giải đua mô tô Isle of Man TT",
    "main_en": "International life assurance & wealth management, e-Gaming & fintech, private aircraft & superyacht registry, aerospace components, Isle of Man TT motorsport tourism",
    "note_vi": "Kinh tế đa dạng hơn các đảo Vương quyền khác nhờ cụm công nghiệp chế tạo linh kiện hàng không vũ trụ (ghế phóng máy bay chiến đấu) và trung tâm e-Gaming được cấp phép chặt chẽ.",
    "note_en": "More diversified than peer Crown Dependencies, combining offshore life insurance and regulated e-Gaming with precision aerospace manufacturing and the world-famous Isle of Man TT races."
  },
  "United Kingdom": {
    "tier": "adv",
    "gdp_vi": "~3.590 tỷ USD (#6 thế giới)",
    "gdp_en": "~$3.59T (#6 globally)",
    "pc_vi": "~52.400 USD (PPP ~60.600 USD)",
    "pc_en": "~$52,400 (PPP ~$60,600)",
    "gr": "+1.1%",
    "sec": [
      81,
      18,
      1
    ],
    "main_vi": "Tài chính – ngân hàng – bảo hiểm toàn cầu (City of London), dược phẩm & khoa học sự sống (AstraZeneca, GSK), hàng không vũ trụ – quốc phòng (BAE, Rolls-Royce), AI & giáo dục đại học, năng lượng điện gió ngoài khơi",
    "main_en": "Global finance & insurance (City of London), pharmaceuticals & life sciences (AstraZeneca, GSK), aerospace & defense (BAE, Rolls-Royce), AI & higher education, offshore wind",
    "note_vi": "Nền kinh tế lớn thứ 6 thế giới và là nhà xuất khẩu dịch vụ lớn thứ 2 hành tinh; Luân Đôn giữ vị thế trung tâm giao dịch ngoại hối số 1 toàn cầu bất chấp tác động hậu Brexit.",
    "note_en": "World's 6th-largest economy and #2 global services exporter; the City of London remains the #1 global foreign-exchange trading hub alongside world-leading life sciences and AI research."
  },
  "United Arab Emirates": {
    "tier": "adv",
    "gdp_vi": "~545 tỷ USD (#28 thế giới)",
    "gdp_en": "~$545B (#28 globally)",
    "pc_vi": "~53.900 USD (PPP ~96.800 USD)",
    "pc_en": "~$53,900 (PPP ~$96,800)",
    "gr": "+4.0%",
    "sec": [
      57,
      42,
      1
    ],
    "main_vi": "Dầu khí (Abu Dhabi – ADNOC), hàng không & logistics toàn cầu (Emirates, cảng Jebel Ali), tài chính & quản lý quỹ, bất động sản – du lịch (Dubai), AI",
    "main_en": "Oil & gas (Abu Dhabi/ADNOC), global aviation & port logistics (Emirates, Jebel Ali), wealth management, real estate & tourism (Dubai), AI infrastructure",
    "note_vi": "Nền kinh tế đa dạng hóa thành công nhất vùng Vịnh (khu vực phi dầu mỏ chiếm >70% GDP): Abu Dhabi nắm các quỹ đầu tư quốc gia khổng lồ (>1.500 tỷ USD), còn Dubai là thủ phủ thương mại, hàng không và tài chính của Trung Đông.",
    "note_en": "The Gulf's most diversified economy (non-oil >70% of GDP): Abu Dhabi commands over $1.5T in sovereign wealth funds while Dubai serves as the Middle East's premier trade, aviation, and financial hub."
  },
  "Ukraine": {
    "tier": "dev",
    "gdp_vi": "~189 tỷ USD (#56 thế giới)",
    "gdp_en": "~$189B (#56 globally)",
    "pc_vi": "~5.600 USD (PPP ~16.800 USD)",
    "pc_en": "~$5,600 (PPP ~$16,800)",
    "gr": "+3.6%",
    "sec": [
      62,
      27,
      11
    ],
    "main_vi": "Nông nghiệp xuất khẩu (ngô, lúa mì, dầu hướng dương số 1 thế giới), công nghiệp quốc phòng & drone, luyện kim – quặng sắt, gia công phần mềm & CNTT",
    "main_en": "Agri-exports (corn, wheat, world's #1 sunflower oil exporter), defense tech & drone manufacturing, iron ore & metallurgy, IT outsourcing",
    "note_vi": "'Vựa lúa mì của châu Âu' sở hữu diện tích đất đen (Chernozem) màu mỡ bậc nhất thế giới; kinh tế thời chiến duy trì nhờ hành lang ngũ cốc Biển Đen, ngành công nghiệp UAV nội địa và viện trợ phương Tây.",
    "note_en": "'Breadbasket of Europe' endowed with vast fertile Chernozem black soil; wartime economy sustained by its Black Sea maritime grain corridor, booming domestic drone/defense production, and Western financial aid."
  },
  "Uganda": {
    "tier": "low",
    "gdp_vi": "~56,3 tỷ USD (#88 thế giới)",
    "gdp_en": "~$56.3B (#88 globally)",
    "pc_vi": "~1.160 USD (PPP ~3.380 USD)",
    "pc_en": "~$1,160 (PPP ~$3,380)",
    "gr": "+6.0%",
    "sec": [
      43,
      27,
      30
    ],
    "main_vi": "Xuất khẩu cà phê (lớn thứ 2 châu Phi), khai thác & tinh luyện vàng, phát triển dầu khí hồ Albert (dự án Tilenga/Kingfisher & đường ống EACOP), thủy điện sông Nile, du lịch sinh thái",
    "main_en": "Coffee exports (#2 in Africa), gold refining & trade, Lake Albert oil development (Tilenga/Kingfisher & EACOP pipeline), Nile hydropower, wildlife tourism",
    "note_vi": "Một trong những nền kinh tế tăng trưởng nhanh nhất Đông Phi, chuẩn bị bước vào kỷ nguyên xuất khẩu dầu thô thương mại từ bồn trũng hồ Albert qua đường ống sưởi ấm dài nhất thế giới (EACOP).",
    "note_en": "One of East Africa's fastest-growing economies, poised to become a commercial crude oil producer via the Lake Albert oilfields and the East African Crude Oil Pipeline (EACOP)."
  },
  "Turkmenistan": {
    "tier": "emg",
    "gdp_vi": "~64 tỷ USD",
    "gdp_en": "~$64B",
    "pc_vi": "~9.100 USD (PPP ~20.400 USD)",
    "pc_en": "~$9,100 (PPP ~$20,400)",
    "gr": "+2.3%",
    "sec": [
      40,
      49,
      11
    ],
    "main_vi": "Khí đốt tự nhiên (trữ lượng #4 thế giới, mỏ Galkynysh), sản phẩm lọc hóa dầu, phân bón, bông vải",
    "main_en": "Natural gas (#4 global reserves, Galkynysh field), refined petroleum & polymers, fertilizers, cotton",
    "note_vi": "Nền kinh tế nhà nước kiểm soát chặt chẽ, sống dựa gần như hoàn toàn vào xuất khẩu khí đốt qua đường ống sang Trung Quốc sau khi Nga cắt giảm mua khí từ năm 2016.",
    "note_en": "State-dominated desert economy sitting atop the world's fourth-largest natural gas reserves, overwhelmingly dependent on pipeline gas exports to China."
  },
  "Turkey": {
    "tier": "emg",
    "gdp_vi": "~1.340 tỷ USD (#17 thế giới, thành viên G20)",
    "gdp_en": "~$1.34T (#17 globally, G20 member)",
    "pc_vi": "~15.600 USD (PPP ~43.900 USD)",
    "pc_en": "~$15,600 (PPP ~$43,900)",
    "gr": "+3.2%",
    "sec": [
      56,
      37,
      7
    ],
    "main_vi": "Sản xuất ô tô & thiết bị gia dụng xuất sang EU, công nghiệp quốc phòng (UAV Bayraktar), dệt may, du lịch (~60 triệu khách/năm), thép, xây dựng, nông sản (hạt phỉ)",
    "main_en": "Automotive & white-goods manufacturing for EU, defense & aerospace (Bayraktar UAVs), textiles, tourism (~60M visitors/yr), steel, construction, agriculture",
    "note_vi": "Cầu nối sản xuất công nghiệp và năng lượng giữa Á – Âu nhờ liên minh thuế quan với EU; có nền công nghiệp chế tạo đa dạng nhưng đối mặt lạm phát cao kéo dài do chính sách tiền tệ lãi suất thấp giai đoạn trước 2023.",
    "note_en": "Eurasian manufacturing and energy bridge integrated into EU supply chains via a customs union; boasts a dynamic industrial and defense base while battling stubborn inflation with tight monetary policy."
  },
  "Tunisia": {
    "tier": "dev",
    "gdp_vi": "~52,6 tỷ USD (#90 thế giới)",
    "gdp_en": "~$52.6B (#90 globally)",
    "pc_vi": "~4.270 USD (PPP ~14.100 USD)",
    "pc_en": "~$4,270 (PPP ~$14,100)",
    "gr": "+1.6%",
    "sec": [
      62,
      26,
      12
    ],
    "main_vi": "Linh kiện ô tô & dây cáp điện hàng không xuất sang EU, dầu ô liu xuất khẩu (top 4 thế giới), khai thác phosphate, dệt may, du lịch Địa Trung Hải",
    "main_en": "Automotive wiring harnesses & aerospace components for EU, olive oil exports (top-4 globally), phosphate mining, textiles, Mediterranean tourism",
    "note_vi": "Hội nhập sâu vào chuỗi cung ứng công nghiệp châu Âu (đặc biệt là Pháp, Ý, Đức) nhưng đang chịu áp lực nợ công cao, hạn hán kéo dài và thiếu hụt ngoại tệ.",
    "note_en": "Deeply integrated into European automotive and aerospace supply chains, though constrained by high public debt, severe multi-year drought, and fiscal imbalances."
  },
  "Trinidad and Tobago": {
    "tier": "adv",
    "gdp_vi": "~28,4 tỷ USD (#109 thế giới)",
    "gdp_en": "~$28.4B (#109 globally)",
    "pc_vi": "~19.700 USD (PPP ~34.500 USD)",
    "pc_en": "~$19,700 (PPP ~$34,500)",
    "gr": "+2.2%",
    "sec": [
      54,
      45,
      1
    ],
    "main_vi": "Khí thiên nhiên hóa lỏng (LNG), amoniac & methanol (thuộc nhóm xuất khẩu hàng đầu thế giới), lọc dầu, dịch vụ tài chính vùng Caribe, sản xuất thực phẩm – đồ uống",
    "main_en": "Liquefied natural gas (LNG), ammonia & methanol (among world's top exporters), petrochemicals, Caribbean regional banking, food & beverage manufacturing",
    "note_vi": "Cường quốc công nghiệp – năng lượng giàu có nhất vùng Đông Caribe; một trong những nhà xuất khẩu amoniac và methanol lớn nhất thế giới nhờ nguồn khí đốt ngoài khơi.",
    "note_en": "Industrial and petrochemical powerhouse of the Caribbean; ranks among the world's top exporters of ammonia and methanol alongside major Atlantic LNG liquefaction capacity."
  },
  "Tonga": {
    "tier": "dev",
    "gdp_vi": "~0,55 tỷ USD (#184 thế giới)",
    "gdp_en": "~$550M (#184 globally)",
    "pc_vi": "~5.300 USD (PPP ~7.450 USD)",
    "pc_en": "~$5,300 (PPP ~$7,450)",
    "gr": "+2.4%",
    "sec": [
      61,
      20,
      19
    ],
    "main_vi": "Kiều hối (chiếm ~45% GDP - cao nhất thế giới), nông nghiệp xuất khẩu (bí đỏ sang Nhật, vani, kava), thủy sản, du lịch ngắm cá voi",
    "main_en": "Remittances (~45% of GDP - highest in the world), agricultural exports (squash to Japan, vanilla, kava), fisheries, whale-watching tourism",
    "note_vi": "Nền kinh tế phụ thuộc kiều hối số 1 thế giới (từ cộng đồng người Tonga tại New Zealand, Úc, Mỹ); đang tái thiết mạnh mẽ sau siêu thảm họa núi lửa ngầm Hunga Tonga – Hunga Ha'apai năm 2022.",
    "note_en": "World's most remittance-dependent economy (~45% of GDP from diaspora in New Zealand, Australia, and the US); continuing post-2022 Hunga Tonga submarine volcano reconstruction."
  },
  "Togo": {
    "tier": "low",
    "gdp_vi": "~10,0 tỷ USD (#146 thế giới)",
    "gdp_en": "~$10.0B (#146 globally)",
    "pc_vi": "~1.090 USD (PPP ~3.100 USD)",
    "pc_en": "~$1,090 (PPP ~$3,100)",
    "gr": "+5.3%",
    "sec": [
      52,
      23,
      25
    ],
    "main_vi": "Cảng nước sâu Lomé (trung chuyển container số 1 Tây Phi), khai thác quặng phosphate & đá vôi clinker, bông vải, cà phê, ca cao",
    "main_en": "Port of Lomé deepwater container transshipment (#1 in West Africa), phosphate & clinker mining, cotton, coffee, cocoa",
    "note_vi": "Cảng Lomé là cảng nước sâu tự nhiên duy nhất ở Tây Phi đón được tàu mẹ siêu trọng, biến Togo thành cửa ngõ logistics và ngân hàng khu vực cho các nước nội lục vùng Sahel.",
    "note_en": "Lomé boasts West Africa's only natural deepwater port capable of handling ultra-large container vessels, making Togo the premier transshipment and banking hub for landlocked Sahel states."
  },
  "Timor-Leste": {
    "tier": "dev",
    "gdp_vi": "~2,0 tỷ USD",
    "gdp_en": "~$2.0B",
    "pc_vi": "~1.450 USD (PPP ~4.100 USD)",
    "pc_en": "~$1,450 (PPP ~$4,100)",
    "gr": "+3.4%",
    "sec": [
      52,
      31,
      17
    ],
    "main_vi": "Dầu khí biển Timor (Quỹ Dầu mỏ quốc gia), cà phê hữu cơ xuất khẩu, nông nghiệp tự cung tự cấp, xây dựng hạ tầng công",
    "main_en": "Timor Sea oil & gas revenues (Petroleum Fund), organic coffee exports, subsistence agriculture, public infrastructure",
    "note_vi": "Sử dụng đồng USD và sống dựa vào Quỹ Dầu mỏ (~18 tỷ USD) từ mỏ Bayu-Undan đã cạn; tương lai kinh tế phụ thuộc vào việc khai thác mỏ khí Greater Sunrise và tiến trình gia nhập ASEAN.",
    "note_en": "USD-dollarized economy reliant on drawdowns from its ~$18B Petroleum Fund after the depletion of Bayu-Undan; banking on the Greater Sunrise gas field and full ASEAN integration."
  },
  "Thailand": {
    "tier": "emg",
    "gdp_vi": "~528 tỷ USD (#31 thế giới, #2 Đông Nam Á)",
    "gdp_en": "~$528B (#31 globally, #2 in ASEAN)",
    "pc_vi": "~7.530 USD (PPP ~23.400 USD)",
    "pc_en": "~$7,530 (PPP ~$23,400)",
    "gr": "+2.7%",
    "sec": [
      58,
      33,
      9
    ],
    "main_vi": "Sản xuất ô tô & linh kiện ('Detroit của Đông Nam Á'), du lịch quốc tế (~35 triệu khách/năm), điện tử & ổ cứng, hóa dầu, xuất khẩu gạo – cao su – sầu riêng",
    "main_en": "Automotive manufacturing ('Detroit of Asia'), international tourism (~35M visitors/yr), electronics & HDDs, petrochemicals, rice, rubber & durian exports",
    "note_vi": "Nền kinh tế lớn thứ hai ASEAN với hạ tầng công nghiệp chế tạo hoàn chỉnh dọc Hành lang Kinh tế phía Đông (EEC), nhưng tăng trưởng chậm lại do nợ hộ gia đình cao và dân số già hóa nhanh.",
    "note_en": "ASEAN's second-largest economy anchored by the Eastern Economic Corridor (EEC) auto-industrial belt and tourism, though facing headwinds from high household debt and rapid aging."
  },
  "Tanzania": {
    "tier": "low",
    "gdp_vi": "~80,0 tỷ USD (#79 thế giới)",
    "gdp_en": "~$80.0B (#79 globally)",
    "pc_vi": "~1.220 USD (PPP ~4.100 USD)",
    "pc_en": "~$1,220 (PPP ~$4,100)",
    "gr": "+5.6%",
    "sec": [
      40,
      33,
      27
    ],
    "main_vi": "Khai thác vàng (top 4 châu Phi), đá quý Tanzanite độc nhất thế giới, du lịch sinh thái (Serengeti, Kilimanjaro, Zanzibar), cảng trung chuyển Dar es Salaam, nông sản (hạt điều, cà phê, đinh hương)",
    "main_en": "Gold mining (top-4 in Africa), exclusive Tanzanite gemstones, safari & island tourism (Serengeti, Kilimanjaro, Zanzibar), Dar es Salaam port logistics, cashews & coffee",
    "note_vi": "Đầu tàu tăng trưởng ổn định của Đông Phi vừa đưa vào vận hành tuyến đường sắt khổ tiêu chuẩn điện khí hóa (SGR) hiện đại nhất khu vực và đập thủy điện Julius Nyerere (2.115 MW).",
    "note_en": "East African growth anchor commissioning the region's first electrified high-speed Standard Gauge Railway (SGR) and the 2,115 MW Julius Nyerere Hydropower Plant."
  },
  "Tajikistan": {
    "tier": "dev",
    "gdp_vi": "~13,0 tỷ USD",
    "gdp_en": "~$13.0B",
    "pc_vi": "~1.280 USD (PPP ~5.400 USD)",
    "pc_en": "~$1,280 (PPP ~$5,400)",
    "gr": "+6.8%",
    "sec": [
      42,
      35,
      23
    ],
    "main_vi": "Kiều hối (chiếm tới 35–45% GDP, cao bậc nhất thế giới), thủy điện (đập Nurek, Rogun), luyện nhôm (TALCO), khai thác vàng – antimon, bông",
    "main_en": "Remittances (35–45% of GDP, among highest globally), hydropower (Nurek, Rogun dams), aluminum smelting, gold & antimony mining, cotton",
    "note_vi": "Nghèo tài nguyên dầu khí và bị núi Pamir chia cắt, Tajikistan sống nhờ kiều hối từ Nga và đặt cược tương lai vào siêu đập thủy điện Rogun để xuất khẩu điện sang Trung Á và Nam Á (CASA-1000).",
    "note_en": "Heavily dependent on migrant remittances from Russia while harnessing Pamir glacial rivers via the massive Rogun Dam project for regional electricity exports."
  },
  "Taiwan": {
    "tier": "adv",
    "gdp_vi": "~790 tỷ USD (#21 thế giới)",
    "gdp_en": "~$790B (#21 globally)",
    "pc_vi": "~33.800 USD (PPP ~76.800 USD)",
    "pc_en": "~$33,800 (PPP ~$76,800)",
    "gr": "+4.3%",
    "sec": [
      61,
      38,
      1
    ],
    "main_vi": "Bán dẫn tiên tiến (TSMC >60% đúc chip toàn cầu), máy chủ AI, linh kiện điện tử, hóa dầu, máy công cụ chính xác, vận tải biển",
    "main_en": "Advanced semiconductors (TSMC >60% global foundry share), AI servers, electronics components, petrochemicals, precision machinery",
    "note_vi": "Sở hữu 'lá chắn silicon' khi nắm giữ hơn 90% năng lực sản xuất chip siêu tiên tiến (<5nm) toàn cầu, biến kinh tế hòn đảo thành mắt xích sống còn của chuỗi cung ứng AI và công nghệ thế giới.",
    "note_en": "Protected by its 'Silicon Shield'—producing over 90% of the world's most advanced logic chips—making the island indispensable to global AI and hardware supply chains."
  },
  "Syria": {
    "tier": "low",
    "gdp_vi": "~15 tỷ USD (ước tính)",
    "gdp_en": "~$15B (est.)",
    "pc_vi": "~650 USD (PPP ~2.800 USD)",
    "pc_en": "~$650 (PPP ~$2,800)",
    "gr": "-1.5%",
    "sec": [
      48,
      25,
      27
    ],
    "main_vi": "Nông nghiệp (lúa mì, bông, ô liu, chăn nuôi cừu), phốt phát, dầu khí quy mô nhỏ (ở vùng đông bắc), kiều hối và viện trợ nhân đạo",
    "main_en": "Agriculture (wheat, cotton, olives, sheep), phosphate mining, small-scale oil & gas (northeast fields), remittances & humanitarian aid",
    "note_vi": "Hơn một thập kỷ nội chiến đã làm GDP thu hẹp trên 70% và chia cắt vùng mỏ dầu – vựa lúa phía đông sông Euphrates khỏi vùng đô thị phía tây; sau biến cố sụp đổ chế độ Assad cuối 2024, tái thiết và dỡ bỏ cấm vận là bài toán sống còn.",
    "note_en": "Over a decade of civil war shrank GDP by >70% and separated eastern oil/wheat regions from western cities; following the late-2024 regime collapse, lifting sanctions and physical reconstruction are central challenges."
  },
  "Switzerland": {
    "tier": "adv",
    "gdp_vi": "~938 tỷ USD (#20 thế giới)",
    "gdp_en": "~$938B (#20 globally)",
    "pc_vi": "~105.600 USD (PPP ~94.000 USD)",
    "pc_en": "~$105,600 (PPP ~$94,000)",
    "gr": "+1.4%",
    "sec": [
      74,
      25,
      1
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Novartis, Roche), quản lý tài sản toàn cầu & ngân hàng (UBS), giao dịch hàng hóa nguyên liệu (Glencore, Vitol, Trafigura), đồng hồ xa xỉ, cơ khí chính xác, thực phẩm (Nestlé)",
    "main_en": "Pharmaceuticals & biotech (Novartis, Roche), global wealth management (UBS), commodities trading hub (Glencore, Vitol, Trafigura), luxury watchmaking, precision machinery, food (Nestlé)",
    "note_vi": "Quốc gia đứng số 1 thế giới về Chỉ số Đổi mới Sáng tạo Toàn cầu (GII) suốt hơn một thập kỷ; đồng Franc Thụy Sĩ (CHF) là tài sản trú ẩn an toàn hàng đầu và Geneva/Zug là trung tâm buôn bán dầu mỏ – kim loại lớn nhất hành tinh.",
    "note_en": "Ranked #1 on the Global Innovation Index for over a decade; the Swiss Franc (CHF) is a premier safe-haven currency while Geneva and Zug anchor the world's largest physical commodities trading hub."
  },
  "Sweden": {
    "tier": "adv",
    "gdp_vi": "~609 tỷ USD (#25 thế giới)",
    "gdp_en": "~$609B (#25 globally)",
    "pc_vi": "~57.200 USD (PPP ~71.000 USD)",
    "pc_en": "~$57,200 (PPP ~$71,000)",
    "gr": "+0.9%",
    "sec": [
      73,
      25,
      2
    ],
    "main_vi": "Cơ khí chế tạo & xe tải hạng nặng (Volvo, Scania, Atlas Copco), viễn thông (Ericsson), quốc phòng – hàng không (Saab), quặng sắt (90% sản lượng EU) & thép xanh, công nghệ số (Spotify, Klarna), lâm nghiệp",
    "main_en": "Heavy engineering & commercial vehicles (Volvo, Scania, Atlas Copco), telecoms (Ericsson), defense & aerospace (Saab), iron ore (90% of EU output) & green steel, tech unicorns (Spotify, Klarna), forestry",
    "note_vi": "Cường quốc công nghiệp – công nghệ lớn nhất Bắc Âu, cung cấp 90% quặng sắt của EU (mỏ Kiruna) và dẫn đầu thế giới về luyện thép không hóa thạch bằng hydro xanh cùng mật độ kỳ lân công nghệ trên đầu người.",
    "note_en": "Largest Nordic industrial powerhouse supplying ~90% of the EU's iron ore (Kiruna) and pioneering hydrogen-based fossil-free steel alongside Europe's highest per-capita tech unicorn density."
  },
  "eSwatini": {
    "tier": "dev",
    "gdp_vi": "~5,10 tỷ USD (#155 thế giới)",
    "gdp_en": "~$5.10B (#155 globally)",
    "pc_vi": "~4.150 USD (PPP ~12.200 USD)",
    "pc_en": "~$4,150 (PPP ~$12,200)",
    "gr": "+4.6%",
    "sec": [
      53,
      38,
      9
    ],
    "main_vi": "Sản xuất tinh chất nước giải khát cô đặc (nhà máy Coca-Cola lớn nhất châu Phi), mía đường, bột giấy & lâm nghiệp, dệt may, nguồn thu Liên minh Thuế quan miền Nam châu Phi (SACU)",
    "main_en": "Soft drink concentrate manufacturing (Coca-Cola hub for Africa), sugar refining, wood pulp & forestry, textiles, SACU customs revenue pool",
    "note_vi": "Gắn kết chặt chẽ với Nam Phi (chiếm ~70% thương mại và neo tỷ giá 1:1 với đồng Rand); nhà máy tinh chất Coca-Cola tại Matsapha đóng góp tỷ trọng lớn xuất khẩu chế biến.",
    "note_en": "Tightly integrated with South Africa (1:1 currency peg to the Rand and ~70% of trade); hosts Coca-Cola's primary concentrate manufacturing plant supplying much of sub-Saharan Africa."
  },
  "Suriname": {
    "tier": "dev",
    "gdp_vi": "~4,35 tỷ USD (#158 thế giới)",
    "gdp_en": "~$4.35B (#158 globally)",
    "pc_vi": "~6.850 USD (PPP ~21.200 USD)",
    "pc_en": "~$6,850 (PPP ~$21,200)",
    "gr": "+3.0%",
    "sec": [
      54,
      37,
      9
    ],
    "main_vi": "Khai thác vàng (chiếm ~80% kim ngạch xuất khẩu), dầu mỏ (mỏ ngoài khơi Lô 58 sắp khai thác), nông nghiệp (gạo, chuối), gỗ nhiệt đới",
    "main_en": "Gold mining (~80% of export earnings), oil & offshore energy (Block 58 GranMorgu project), agriculture (rice, bananas), tropical timber",
    "note_vi": "Quốc gia có độ che phủ rừng cao nhất thế giới (~93%, âm carbon); chuẩn bị bùng nổ GDP vào cuối thập kỷ nhờ quyết định đầu tư 10,5 tỷ USD của TotalEnergies và APA tại mỏ dầu ngoài khơi Lô 58.",
    "note_en": "World's most forested carbon-negative country (~93% forest cover); poised for an offshore oil boom following TotalEnergies and APA's $10.5B final investment decision on Block 58."
  },
  "S. Sudan": {
    "tier": "low",
    "gdp_vi": "~5,30 tỷ USD (#154 thế giới)",
    "gdp_en": "~$5.30B (#154 globally)",
    "pc_vi": "~450 USD (PPP ~950 USD)",
    "pc_en": "~$450 (PPP ~$950)",
    "gr": "-5.0%",
    "sec": [
      28,
      62,
      10
    ],
    "main_vi": "Khai thác dầu thô (chiếm >90% nguồn thu ngân sách và 95% xuất khẩu), chăn nuôi gia súc truyền thống, nông nghiệp tự cung tự cấp, vàng sa khoáng",
    "main_en": "Crude oil extraction (>90% of government revenue and 95% of exports), pastoral livestock herding, subsistence agriculture, artisanal gold",
    "note_vi": "Một trong những nền kinh tế phụ thuộc vào dầu mỏ nhất hành tinh nhưng không có biển; việc đường ống dẫn dầu xuất khẩu qua cảng Port Sudan bị gián đoạn bởi nội chiến Sudan đã gây khủng hoảng tài khóa nghiêm trọng.",
    "note_en": "Among the world's most oil-dependent landlocked economies; disruptions to its sole export pipeline through war-torn Sudan to Port Sudan have triggered severe fiscal and currency shocks."
  },
  "Sudan": {
    "tier": "low",
    "gdp_vi": "~28,5 tỷ USD (#108 thế giới)",
    "gdp_en": "~$28.5B (#108 globally)",
    "pc_vi": "~580 USD (PPP ~3.200 USD)",
    "pc_en": "~$580 (PPP ~$3,200)",
    "gr": "-18.0%",
    "sec": [
      45,
      22,
      33
    ],
    "main_vi": "Khai thác vàng (top 3 châu Phi), nhựa cây keo (Gum Arabic - chiếm ~80% nguồn cung toàn cầu), chăn nuôi gia súc xuất sang vùng Vịnh, vừng (mè), lạc, phí trung chuyển dầu Nam Sudan",
    "main_en": "Gold mining (top-3 in Africa), gum arabic (~80% of global supply), livestock exports to the Gulf, sesame, peanuts, oil pipeline transit fees",
    "note_vi": "Nắm giữ ~80% nguồn cung nhựa Gum Arabic toàn cầu (nguyên liệu thiết yếu cho ngành nước giải khát và dược phẩm), nhưng nội chiến bùng phát từ tháng 4/2023 đã tàn phá hạ tầng thủ đô Khartoum và làm GDP sụt giảm nặng nề.",
    "note_en": "Supplies ~80% of the world's gum arabic (essential for global soft drinks and pharmaceuticals), but civil war since April 2023 has devastated Khartoum's industrial base and contracted GDP sharply."
  },
  "Sri Lanka": {
    "tier": "dev",
    "gdp_vi": "~89 tỷ USD",
    "gdp_en": "~$89B",
    "pc_vi": "~4.020 USD (PPP ~14.400 USD)",
    "pc_en": "~$4,020 (PPP ~$14,400)",
    "gr": "+4.4%",
    "sec": [
      60,
      31,
      9
    ],
    "main_vi": "Du lịch biển & văn hóa, may mặc cao cấp, trà Ceylon, trung chuyển cảng biển (cảng Colombo), cao su, quế, kiều hối",
    "main_en": "Tourism, apparel manufacturing, Ceylon tea, maritime container transshipment (Colombo Port), rubber, cinnamon, remittances",
    "note_vi": "Nằm sát trục hàng hải chính của Ấn Độ Dương (cảng Colombo là cửa ngõ trung chuyển cho Ấn Độ); đang phục hồi tích cực nhờ tái cơ cấu nợ và cải cách theo chương trình IMF sau cú vỡ nợ ngoại tệ năm 2022.",
    "note_en": "Strategically positioned along Indian Ocean shipping lanes with South Asia's top transshipment port at Colombo; recovering via IMF-backed debt restructuring after its 2022 sovereign default."
  },
  "Spain": {
    "tier": "adv",
    "gdp_vi": "~1.720 tỷ USD (#15 thế giới, #4 EU)",
    "gdp_en": "~$1.72T (#15 globally, #4 in EU)",
    "pc_vi": "~35.300 USD (PPP ~55.100 USD)",
    "pc_en": "~$35,300 (PPP ~$55,100)",
    "gr": "+3.2%",
    "sec": [
      74,
      23,
      3
    ],
    "main_vi": "Du lịch quốc tế (#2 thế giới với ~94 triệu khách/năm), sản xuất ô tô (#2 châu Âu), thời trang bán lẻ (Inditex/Zara), ngân hàng (Santander, BBVA), năng lượng tái tạo (Iberdrola), nông sản (dầu ô liu số 1 thế giới, rượu vang, thịt heo)",
    "main_en": "International tourism (#2 globally, ~94M visitors/year), automotive manufacturing (#2 in Europe), fast fashion (Inditex/Zara), banking (Santander, BBVA), renewables (Iberdrola), olive oil (#1 globally) & wine",
    "note_vi": "Nền kinh tế lớn tăng trưởng nhanh nhất Eurozone hiện nay (~3,2%) nhờ kỷ lục du lịch, xuất khẩu dịch vụ công nghệ – tư vấn kỹ thuật và mạng lưới đường sắt cao tốc (AVE) dài nhất châu Âu.",
    "note_en": "Fastest-growing major Eurozone economy (~3.2%), propelled by record tourism, booming non-tourism services exports, abundant solar/wind power, and Europe's longest high-speed rail network (AVE)."
  },
  "South Korea": {
    "tier": "adv",
    "gdp_vi": "~1.870 tỷ USD (#12 thế giới)",
    "gdp_en": "~$1.87T (#12 globally)",
    "pc_vi": "~36.100 USD (PPP ~59.300 USD)",
    "pc_en": "~$36,100 (PPP ~$59,300)",
    "gr": "+2.2%",
    "sec": [
      64,
      34,
      2
    ],
    "main_vi": "Chip nhớ bán dẫn (HBM, DRAM, NAND), ô tô & pin xe điện, đóng tàu LNG, màn hình OLED, hóa dầu, công nghiệp quốc phòng, văn hóa K-Wave",
    "main_en": "Memory semiconductors (HBM, DRAM, NAND), automobiles & EV batteries, LNG shipbuilding, OLED displays, petrochemicals, defense exports",
    "note_vi": "Kỳ tích sông Hán biến một bán đảo nghèo tài nguyên bị chia cắt thành cường quốc công nghệ dựa vào các tập đoàn chaebol (Samsung, SK, Hyundai) và thương mại hàng hải.",
    "note_en": "The 'Miracle on the Han River' transformed a resource-scarce, divided peninsula into a semiconductor, shipbuilding, and automotive titan powered by export-oriented chaebols."
  },
  "South Africa": {
    "tier": "emg",
    "gdp_vi": "~403 tỷ USD (#40 thế giới, #1 châu Phi)",
    "gdp_en": "~$403B (#40 globally, #1 in Africa)",
    "pc_vi": "~6.380 USD (PPP ~15.700 USD)",
    "pc_en": "~$6,380 (PPP ~$15,700)",
    "gr": "+1.1%",
    "sec": [
      69,
      28,
      3
    ],
    "main_vi": "Khai khoáng (bạch kim #1 thế giới, mangan #1, crom #1, vàng, than đá), tài chính – ngân hàng (JSE - sàn chứng khoán lớn nhất châu Phi), sản xuất ô tô (BMW, Toyota, Ford, VW), nông sản & rượu vang",
    "main_en": "Mining (world's #1 platinum/PGMs, manganese & chromium producer, gold, coal), finance & banking (JSE - Africa's largest stock exchange), automotive assembly, citrus & wine exports",
    "note_vi": "Nền kinh tế công nghiệp hóa và tài chính phát triển nhất châu Phi (thành viên G20 và BRICS); đang cải thiện khủng hoảng cắt điện (Eskom load-shedding) nhưng còn vướng nút thắt đường sắt – cảng biển (Transnet) và thất nghiệp cao (~32%).",
    "note_en": "Africa's most industrialized economy and financial hub (G20 & BRICS member); easing Eskom power load-shedding via private solar investment while tackling Transnet rail-port bottlenecks and ~32% unemployment."
  },
  "Somalia": {
    "tier": "low",
    "gdp_vi": "~12,8 tỷ USD (#140 thế giới)",
    "gdp_en": "~$12.8B (#140 globally)",
    "pc_vi": "~680 USD (PPP ~1.850 USD)",
    "pc_en": "~$680 (PPP ~$1,850)",
    "gr": "+3.7%",
    "sec": [
      32,
      8,
      60
    ],
    "main_vi": "Chăn nuôi và xuất khẩu gia súc sống (lạc đà, cừu, dê sang Ả Rập Xê Út mùa lễ Hajj), kiều hối & chuyển tiền Hawala (~2 tỷ USD/năm), thanh toán di động (Hormuud), nhũ hương (frankincense), vừng, thủy sản",
    "main_en": "Live livestock exports (camels, sheep, goats to Saudi Arabia), diaspora remittances & Hawala transfers (~$2B/year), mobile money telecoms, frankincense, sesame, fisheries",
    "note_vi": "Có bờ biển dài nhất châu Phi đại lục (3.025 km) và tỷ lệ thanh toán tiền di động (mobile money) bằng USD thuộc nhóm cao nhất thế giới; vừa được xóa nợ HIPC và gia nhập Cộng đồng Đông Phi (EAC).",
    "note_en": "Possesses mainland Africa's longest coastline (3,025 km) and a vibrant USD-based mobile-money/telecommunications sector; recently achieved HIPC debt relief and joined the East African Community (EAC)."
  },
  "Somaliland": {
    "tier": "low",
    "gdp_vi": "~3,50 tỷ USD (vùng lãnh thổ tự trị thực tế)",
    "gdp_en": "~$3.50B (de facto autonomous state)",
    "pc_vi": "~780 USD",
    "pc_en": "~$780",
    "gr": "+3.5%",
    "sec": [
      35,
      10,
      55
    ],
    "main_vi": "Cảng nước sâu Berbera (liên doanh DP World đầu tư 442 triệu USD) & hành lang thương mại nối Ethiopia, xuất khẩu gia súc qua vịnh Aden, kiều hối, viễn thông & thanh toán di động Zaad",
    "main_en": "DP World Berbera deepwater port ($442M expansion) & Ethiopian trade corridor, livestock exports across Gulf of Aden, remittances, Zaad mobile money",
    "note_vi": "Duy trì đồng tiền riêng (Somaliland Shilling) và môi trường hòa bình ổn định hơn phần còn lại của Somalia; cảng Berbera do DP World (UAE) vận hành đang trở thành cửa ngõ hàng hải chiến lược trên vịnh Aden.",
    "note_en": "Maintains its own currency (Somaliland Shilling) and greater internal stability; the DP World-operated Port of Berbera and free zone serve as a strategic Gulf of Aden logistics gateway for Ethiopia."
  },
  "Solomon Is.": {
    "tier": "low",
    "gdp_vi": "~1,76 tỷ USD (#172 thế giới)",
    "gdp_en": "~$1.76B (#172 globally)",
    "pc_vi": "~2.320 USD (PPP ~2.850 USD)",
    "pc_en": "~$2,320 (PPP ~$2,850)",
    "gr": "+2.5%",
    "sec": [
      51,
      15,
      34
    ],
    "main_vi": "Khai thác gỗ tròn nhiệt đới xuất khẩu (chủ yếu sang Trung Quốc), đánh bắt & đóng hộp cá ngừ (SolTuna), khai thác vàng (mỏ Gold Ridge) & bauxite, dầu cọ, cùi dừa",
    "main_en": "Tropical round log exports (primarily to China), tuna fishing & canning (SolTuna), gold (Gold Ridge) & bauxite mining, palm oil, copra",
    "note_vi": "Nền kinh tế phụ thuộc nặng vào xuất khẩu gỗ rừng tự nhiên (~60% kim ngạch xuất khẩu) nhưng trữ lượng rừng đang cạn dần, buộc quốc đảo chuyển hướng sang khai khoáng, thủy sản và hạ tầng thủy điện Tina River.",
    "note_en": "Historically reliant on round log timber exports (~60% of export earnings) as natural forests deplete; pivoting toward Gold Ridge mining, tuna processing, and the Tina River Hydropower project."
  },
  "Slovakia": {
    "tier": "adv",
    "gdp_vi": "~142 tỷ USD (#60 thế giới)",
    "gdp_en": "~$142B (#60 globally)",
    "pc_vi": "~26.100 USD (PPP ~45.800 USD)",
    "pc_en": "~$26,100 (PPP ~$45,800)",
    "gr": "+2.1%",
    "sec": [
      64,
      33,
      3
    ],
    "main_vi": "Sản xuất ô tô (#1 thế giới tính theo đầu người: VW, Kia, Peugeot, Jaguar Land Rover, Volvo), điện tử (Samsung, Foxconn), cơ khí – thép, công nghiệp quốc phòng",
    "main_en": "Automotive manufacturing (#1 per capita globally: VW, Kia, Stellantis, JLR, Volvo), electronics, steel & engineering, defense artillery production",
    "note_vi": "'Detroit của châu Âu' đứng số 1 thế giới về số lượng xe hơi xuất xưởng tính trên đầu người (>1 triệu xe/năm cho 5,4 triệu dân); đang chuyển đổi sang xe điện với siêu nhà máy Volvo tại Košice.",
    "note_en": "'Detroit of Europe' producing more cars per capita than any country on Earth (>1M vehicles/year for 5.4M people); transitioning to EVs with Volvo's new Košice gigafactory."
  },
  "Slovenia": {
    "tier": "adv",
    "gdp_vi": "~73,2 tỷ USD (#82 thế giới)",
    "gdp_en": "~$73.2B (#82 globally)",
    "pc_vi": "~34.500 USD (PPP ~55.300 USD)",
    "pc_en": "~$34,500 (PPP ~$55,300)",
    "gr": "+1.6%",
    "sec": [
      66,
      32,
      2
    ],
    "main_vi": "Dược phẩm & hóa chất (Krka, Lek/Sandoz), linh kiện & lắp ráp ô tô (Revoz), thiết bị điện gia dụng (Gorenje), cảng biển Koper (cửa ngõ Bắc Adriatic), du lịch núi Alps",
    "main_en": "Pharmaceuticals & chemicals (Krka, Lek/Sandoz), automotive components, home appliances (Gorenje), Port of Koper logistics, Alpine & lake tourism",
    "note_vi": "Quốc gia giàu có và phát triển nhất khu vực Đông Nam Âu / cựu Nam Tư (thành viên Eurozone và OECD), sở hữu mức bất bình đẳng thu nhập (Gini) thấp bậc nhất thế giới.",
    "note_en": "Wealthiest and most advanced economy to emerge from former Yugoslavia (Eurozone & OECD member), combining precision manufacturing with one of the world's lowest income-inequality rates."
  },
  "Singapore": {
    "tier": "adv",
    "gdp_vi": "~530 tỷ USD (#30 thế giới)",
    "gdp_en": "~$530B (#30 globally)",
    "pc_vi": "~89.300 USD (PPP ~148.000 USD)",
    "pc_en": "~$89,300 (PPP ~$148,000)",
    "gr": "+4.0%",
    "sec": [
      75,
      25,
      0
    ],
    "main_vi": "Tài chính – ngân hàng & quản lý gia sản, cảng trung chuyển container (#2 thế giới), lọc hóa dầu, bán dẫn & dược phẩm sinh học, hàng không",
    "main_en": "Global banking & wealth management, container transshipment (#2 globally), oil refining & petrochemicals, wafer fab & biopharma, aviation",
    "note_vi": " Biến vị trí nút cổ chai cực nam eo Malacca thành trung tâm tài chính, giao dịch hàng hóa và lọc dầu số một Đông Nam Á với tổng kim ngạch thương mại gấp hơn 3 lần GDP.",
    "note_en": "Parlayed its chokepoint position at the tip of the Malacca Strait into Asia's premier financial, commodities-trading, and maritime transshipment hub with trade exceeding 300% of GDP."
  },
  "Sierra Leone": {
    "tier": "low",
    "gdp_vi": "~7,55 tỷ USD (#151 thế giới)",
    "gdp_en": "~$7.55B (#151 globally)",
    "pc_vi": "~860 USD (PPP ~3.320 USD)",
    "pc_en": "~$860 (PPP ~$3,320)",
    "gr": "+4.0%",
    "sec": [
      32,
      11,
      57
    ],
    "main_vi": "Khai khoáng (quặng sắt Marampa/Tonkolili, kim cương phù sa, rutile/titan lớn hàng đầu thế giới, bauxite), nông nghiệp (gạo, ca cao, dầu cọ), đánh bắt cá",
    "main_en": "Mining (iron ore, alluvial diamonds, world-class rutile/titanium & bauxite deposits), agriculture (rice, cocoa, palm oil), fisheries",
    "note_vi": "Sở hữu trữ lượng rutile (quặng titan tự nhiên) và kim cương nổi tiếng thế giới cùng cảng tự nhiên sâu thứ 3 hành tinh tại Freetown, nhưng nông nghiệp tự cung vẫn chiếm hơn 50% GDP.",
    "note_en": "Endowed with world-class natural rutile (titanium ore), iron ore, and diamond deposits alongside Freetown's vast natural harbor, though subsistence agriculture still accounts for over half of GDP."
  },
  "Seychelles": {
    "tier": "adv",
    "gdp_vi": "~2,20 tỷ USD (#169 thế giới)",
    "gdp_en": "~$2.20B (#169 globally)",
    "pc_vi": "~21.800 USD (PPP ~43.500 USD)",
    "pc_en": "~$21,800 (PPP ~$43,500)",
    "gr": "+3.5%",
    "sec": [
      81,
      16,
      3
    ],
    "main_vi": "Du lịch nghỉ dưỡng sinh thái siêu sang, đánh bắt & đóng hộp cá ngừ xuất khẩu (nhà máy Indian Ocean Tuna lớn nhất Ấn Độ Dương), dịch vụ tài chính ngoài khơi & trái phiếu xanh biển",
    "main_en": "Ultra-luxury island eco-tourism, tuna fishing & canning (Indian Ocean Tuna cannery), offshore financial services & sovereign blue bonds",
    "note_vi": "Quốc gia có GDP bình quân đầu người cao nhất châu Phi; đi tiên phong toàn cầu trong phát hành 'Trái phiếu Xanh đại dương' (Sovereign Blue Bond) để hoán đổi nợ lấy bảo tồn 30% vùng biển.",
    "note_en": "Boasts Africa's highest GDP per capita; global pioneer in 'Blue Economy' finance, issuing the world's first sovereign Blue Bond to protect 30% of its vast Indian Ocean marine territory."
  },
  "Serbia": {
    "tier": "emg",
    "gdp_vi": "~82,5 tỷ USD (#78 thế giới)",
    "gdp_en": "~$82.5B (#78 globally)",
    "pc_vi": "~12.500 USD (PPP ~28.900 USD)",
    "pc_en": "~$12,500 (PPP ~$28,900)",
    "gr": "+3.9%",
    "sec": [
      60,
      33,
      7
    ],
    "main_vi": "Công nghệ thông tin & phần mềm xuất khẩu, sản xuất ô tô điện (Stellantis) & lốp xe, khai thác đồng – vàng (Zijin Bor) & trữ lượng lithium Jadar lớn nhất châu Âu, nông sản (mâm xôi số 1-2 thế giới, ngô)",
    "main_en": "IT & software exports, EV assembly (Stellantis) & tire manufacturing, copper-gold mining (Zijin Bor) & Jadar lithium deposit, agricultural exports (raspberries, corn)",
    "note_vi": "Nền kinh tế lớn nhất vùng Tây Balkan thu hút hơn 60% tổng vốn FDI của khu vực nhờ chính sách đối ngoại cân bằng giữa EU và Trung Quốc; đang đăng cai triển lãm EXPO 2027 tại Belgrade.",
    "note_en": "Largest Western Balkans economy capturing >60% of regional FDI by balancing EU supply-chain integration with Chinese infrastructure/mining investment; hosting Specialized Expo 2027 in Belgrade."
  },
  "Senegal": {
    "tier": "dev",
    "gdp_vi": "~33,7 tỷ USD (#103 thế giới)",
    "gdp_en": "~$33.7B (#103 globally)",
    "pc_vi": "~1.820 USD (PPP ~4.850 USD)",
    "pc_en": "~$1,820 (PPP ~$4,850)",
    "gr": "+8.8%",
    "sec": [
      53,
      30,
      17
    ],
    "main_vi": "Khai thác dầu khí ngoài khơi mới (mỏ dầu Sangomar & mỏ LNG Greater Tortue Ahmeyim), khai thác vàng & phosphate – axit photphoric, thủy sản, lạc (đậu phộng), trung tâm dịch vụ Dakar",
    "main_en": "Offshore oil & LNG production (Sangomar oilfield & Greater Tortue Ahmeyim LNG), gold & phosphate mining, fisheries, groundnuts, Dakar regional services",
    "note_vi": "Chính thức gia nhập câu lạc bộ các quốc gia xuất khẩu dầu mỏ và khí hóa lỏng (LNG) từ năm 2024–2025, giúp tốc độ tăng trưởng GDP vọt lên nhóm nhanh nhất châu Phi (~8-9%).",
    "note_en": "Newly minted oil and LNG producer (Sangomar and Greater Tortue Ahmeyim fields coming online in 2024–2025), propelling GDP growth to the top tier of African economies (~8-9%)."
  },
  "Saudi Arabia": {
    "tier": "adv",
    "gdp_vi": "~1.100 tỷ USD (#19 thế giới, thành viên G20)",
    "gdp_en": "~$1.10T (#19 globally, G20 member)",
    "pc_vi": "~32.500 USD (PPP ~71.200 USD)",
    "pc_en": "~$32,500 (PPP ~$71,200)",
    "gr": "+1.5%",
    "sec": [
      54,
      43,
      3
    ],
    "main_vi": "Dầu thô (Saudi Aramco – chi phí khai thác thấp nhất thế giới), hóa dầu (SABIC), du lịch hành hương (Mecca/Medina), đầu tư siêu dự án Vision 2030",
    "main_en": "Crude oil (Saudi Aramco – lowest lifting cost globally), petrochemicals (SABIC), religious pilgrimage (Hajj/Umrah), Vision 2030 giga-projects",
    "note_vi": "'Ngân hàng trung ương của thị trường dầu mỏ' nhờ công suất dự phòng lớn nhất thế giới; đang dùng Quỹ Đầu tư Công (PIF ~925 tỷ USD) để thúc đẩy Chiến lược Tầm nhìn 2030 giảm phụ thuộc dầu mỏ.",
    "note_en": "Swing producer of global oil markets with the lowest extraction costs; deploying its ~$925B Public Investment Fund (PIF) under Vision 2030 to build non-oil tourism, tech, and mining sectors."
  },
  "São Tomé and Principe": {
    "tier": "dev",
    "gdp_vi": "~0,75 tỷ USD (#180 thế giới)",
    "gdp_en": "~$750M (#180 globally)",
    "pc_vi": "~3.200 USD (PPP ~6.200 USD)",
    "pc_en": "~$3,200 (PPP ~$6,200)",
    "gr": "+1.9%",
    "sec": [
      73,
      13,
      14
    ],
    "main_vi": "Sản xuất ca cao hữu cơ chất lượng cao ('Đảo Sô-cô-la'), dầu cọ hữu cơ, du lịch sinh thái rừng mưa & biển, đánh bắt cá, thăm dò dầu khí vịnh Guinea",
    "main_en": "Fine organic cocoa exports ('Chocolate Island'), organic palm oil, rainforest & marine eco-tourism, fisheries, Gulf of Guinea oil exploration",
    "note_vi": "Quốc đảo nhỏ bé ở vịnh Guinea từng là nhà sản xuất ca cao lớn nhất thế giới đầu thế kỷ 20; nay neo đồng tiền Dobra vào đồng Euro và phát triển du lịch sinh thái Khu dự trữ sinh quyển UNESCO.",
    "note_en": "Tiny Gulf of Guinea archipelago once the world's largest cocoa producer in the early 1900s; pegs its Dobra currency to the Euro while developing boutique eco-tourism and specialty cocoa."
  },
  "San Marino": {
    "tier": "adv",
    "gdp_vi": "~2,05 tỷ USD (#170 thế giới)",
    "gdp_en": "~$2.05B (#170 globally)",
    "pc_vi": "~59.800 USD (PPP ~84.500 USD)",
    "pc_en": "~$59,800 (PPP ~$84,500)",
    "gr": "+1.3%",
    "sec": [
      62,
      38,
      0
    ],
    "main_vi": "Chế tạo cơ khí chính xác, gốm sứ công nghiệp, bao bì & dược phẩm – mỹ phẩm, du lịch (hơn 2 triệu khách/năm), dịch vụ ngân hàng, phát hành xu Euro & tem sưu tầm",
    "main_en": "Precision mechanical engineering, ceramics, packaging & cosmetics manufacturing, tourism (>2M visitors/year), banking, collector Euro coins & stamps",
    "note_vi": "Cộng hòa lâu đời nhất thế giới nằm gọn trong lòng nước Ý; khác với nhiều quốc gia siêu nhỏ chỉ sống nhờ tài chính, công nghiệp chế tạo thực chất đóng góp tới gần 40% GDP của San Marino.",
    "note_en": "World's oldest surviving sovereign republic, enclaved within Italy; unlike typical microstates, high-value manufacturing accounts for nearly 40% of its GDP alongside Eurozone integration."
  },
  "Samoa": {
    "tier": "dev",
    "gdp_vi": "~1,02 tỷ USD (#178 thế giới)",
    "gdp_en": "~$1.02B (#178 globally)",
    "pc_vi": "~4.850 USD (PPP ~7.100 USD)",
    "pc_en": "~$4,850 (PPP ~$7,100)",
    "gr": "+4.2%",
    "sec": [
      76,
      14,
      10
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển Polynesia, kiều hối (chiếm ~28% GDP từ New Zealand, Úc, Mỹ), nông nghiệp (khoai môn, dừa, nước cốt trái nhàu noni), đánh bắt cá ngừ",
    "main_en": "Polynesian resort tourism, diaspora remittances (~28% of GDP from NZ, Australia, US), agriculture (taro, coconut, noni juice), tuna fishing",
    "note_vi": "Nền kinh tế đảo Polynesia gắn kết chặt chẽ với New Zealand và Úc qua các chương trình lao động thời vụ và kiều hối; vừa đăng cai Hội nghị Thượng đỉnh Khối Thịnh vượng chung (CHOGM 2024).",
    "note_en": "Polynesian island economy closely linked to New Zealand and Australia through seasonal worker mobility schemes, tourism, and remittances; hosted the 2024 Commonwealth Heads of Government Meeting (CHOGM)."
  },
  "St. Vin. and Gren.": {
    "tier": "dev",
    "gdp_vi": "~1,14 tỷ USD (#176 thế giới)",
    "gdp_en": "~$1.14B (#176 globally)",
    "pc_vi": "~10.300 USD (PPP ~19.200 USD)",
    "pc_en": "~$10,300 (PPP ~$19,200)",
    "gr": "+4.8%",
    "sec": [
      75,
      18,
      7
    ],
    "main_vi": "Du lịch du thuyền & nghỉ dưỡng siêu sang (quần đảo Grenadines: Mustique, Canouan, Bequia), nông sản (bột bình tinh arrowroot số 1 thế giới, chuối, củ từ), đăng ký tàu biển",
    "main_en": "Yachting & ultra-luxury island resorts (Mustique, Canouan, Bequia in the Grenadines), agriculture (world's top arrowroot starch producer, root crops), ship registry",
    "note_vi": "Sự mở rộng sân bay quốc tế Argyle và các khu resort mới giúp kinh tế phục hồi vượt bậc sau đợt phun trào núi lửa La Soufrière (2021) và bão Beryl (2024).",
    "note_en": "Rebounding strongly from the 2021 La Soufrière volcanic eruption and 2024 Hurricane Beryl, anchored by the Argyle International Airport and exclusive private-island resorts in the Grenadines."
  },
  "Saint Lucia": {
    "tier": "dev",
    "gdp_vi": "~2,55 tỷ USD (#165 thế giới)",
    "gdp_en": "~$2.55B (#165 globally)",
    "pc_vi": "~14.100 USD (PPP ~25.100 USD)",
    "pc_en": "~$14,100 (PPP ~$25,100)",
    "gr": "+3.7%",
    "sec": [
      86,
      12,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng trăng mật & tàu biển (di sản núi đôi Pitons), chương trình Đầu tư lấy Quốc tịch (CBI), sản xuất rượu rum & bia, chế biến thực phẩm, xuất khẩu chuối",
    "main_en": "Honeymoon resort & cruise tourism (the Pitons UNESCO site), Citizenship by Investment (CBI), rum & beverage brewing, banana exports",
    "note_vi": "Nền kinh tế lớn nhất trong nhóm các đảo quốc nhỏ thuộc Tổ chức Đông Caribe (OECS) dùng đồng Đô la Đông Caribe (XCD); du lịch đóng góp trực tiếp và gián tiếp khoảng 65% GDP.",
    "note_en": "Largest island economy within the Eastern Caribbean Currency Union (OECS); world-renowned honeymoon and cruise tourism around the volcanic Pitons drives ~65% of total economic activity."
  },
  "St. Kitts and Nevis": {
    "tier": "adv",
    "gdp_vi": "~1,13 tỷ USD (#175 thế giới)",
    "gdp_en": "~$1.13B (#175 globally)",
    "pc_vi": "~22.800 USD (PPP ~37.500 USD)",
    "pc_en": "~$22,800 (PPP ~$37,500)",
    "gr": "+3.2%",
    "sec": [
      78,
      21,
      1
    ],
    "main_vi": "Chương trình Đầu tư lấy Quốc tịch (CBI lâu đời nhất thế giới từ 1984), du lịch tàu biển (cảng Port Zante) & resort cao cấp, lắp ráp linh kiện điện tử xuất sang Mỹ, tài chính ngoài khơi (Nevis)",
    "main_en": "Citizenship by Investment (world's oldest CBI program since 1984), cruise tourism (Port Zante) & luxury resorts, specialty electronics assembly for US, Nevis offshore trusts",
    "note_vi": "Quốc gia có chủ quyền nhỏ nhất châu Mỹ cả về diện tích lẫn dân số; chuyển mình thành công từ nền kinh tế độc canh mía đường suốt 300 năm sang du lịch và chương trình quốc tịch đầu tư lâu đời nhất thế giới.",
    "note_en": "Smallest sovereign state in the Americas by both area and population; successfully pivoted from a 300-year sugar monoculture to cruise tourism and the world's pioneering Citizenship-by-Investment program."
  },
  "Rwanda": {
    "tier": "low",
    "gdp_vi": "~14,3 tỷ USD (#136 thế giới)",
    "gdp_en": "~$14.3B (#136 globally)",
    "pc_vi": "~1.030 USD (PPP ~3.650 USD)",
    "pc_en": "~$1,030 (PPP ~$3,650)",
    "gr": "+7.6%",
    "sec": [
      49,
      25,
      26
    ],
    "main_vi": "Du lịch hội nghị MICE & ngắm khỉ đột núi cao cấp, xuất khẩu cà phê & trà đặc sản, khai thác khoáng sản công nghệ 3T (thiếc, tantali/coltan, vonfram) & tinh luyện vàng, hàng không (RwandAir)",
    "main_en": "MICE conference & luxury mountain gorilla tourism, specialty coffee & tea exports, 3T critical minerals (tin, tantalum, tungsten) & gold refining, aviation (RwandAir)",
    "note_vi": "Được mệnh danh là 'Singapore của châu Phi' nhờ môi trường kinh doanh minh bạch, thủ đô Kigali sạch đẹp bậc nhất lục địa và tốc độ tăng trưởng ~7,5%/năm sau 30 năm tái thiết thần kỳ.",
    "note_en": "Dubbed the 'Singapore of Africa' for its clean governance, digital public services, and spotless capital Kigali; sustains ~7.5% annual growth as a continental MICE, sports, and tech hub."
  },
  "Russia": {
    "tier": "emg",
    "gdp_vi": "~2.180 tỷ USD (#11 thế giới, #4 PPP)",
    "gdp_en": "~$2.18T (#11 globally, #4 PPP)",
    "pc_vi": "~15.000 USD (PPP ~47.300 USD)",
    "pc_en": "~$15,000 (PPP ~$47,300)",
    "gr": "+3.8%",
    "sec": [
      56,
      40,
      4
    ],
    "main_vi": "Dầu mỏ & khí đốt tự nhiên (trữ lượng khí số 1 thế giới), công nghiệp quốc phòng & hàng không vũ trụ, năng lượng hạt nhân (Rosatom #1 xuất khẩu lò phản ứng), phân bón & lúa mì xuất khẩu (#1 thế giới), kim loại (vàng, palladium, niken, nhôm, kim cương)",
    "main_en": "Crude oil & natural gas (#1 gas reserves globally), defense industrial complex, nuclear power exports (Rosatom), wheat & fertilizer exports (#1 globally), metals (palladium, nickel, gold, aluminum, diamonds)",
    "note_vi": "Siêu cường tài nguyên sở hữu diện tích lớn nhất hành tinh và đứng thứ 4 thế giới về GDP tính theo sức mua tương đương (PPP); nền kinh tế thời chiến tăng trưởng nóng nhờ chi tiêu quốc phòng và chuyển hướng xuất khẩu dầu khí sang Trung Quốc, Ấn Độ.",
    "note_en": "Resource superpower and world's #4 economy by PPP; wartime stimulus and defense manufacturing drive strong short-term growth while energy trade has pivoted decisively from Europe to China and India."
  },
  "Romania": {
    "tier": "adv",
    "gdp_vi": "~384 tỷ USD (#41 thế giới)",
    "gdp_en": "~$384B (#41 globally)",
    "pc_vi": "~20.200 USD (PPP ~47.900 USD)",
    "pc_en": "~$20,200 (PPP ~$47,900)",
    "gr": "+2.4%",
    "sec": [
      65,
      30,
      5
    ],
    "main_vi": "Công nghệ thông tin & phần mềm (Cluj-Napoca, Bucharest; nơi khai sinh UiPath), sản xuất ô tô (Dacia/Renault, Ford Otosan), khai thác khí đốt Biển Đen (dự án Neptun Deep), nông nghiệp ngũ cốc, cảng biển Constanța",
    "main_en": "IT & software development (Bucharest, Cluj-Napoca; birthplace of UiPath), automotive manufacturing (Dacia/Renault, Ford Otosan), Black Sea gas (Neptun Deep), grain agriculture, Port of Constanța",
    "note_vi": "Ngôi sao tăng trưởng của Đông Nam Âu đã vượt qua nhiều nước láng giềng về thu nhập PPP; chuẩn bị trở thành nhà khai thác khí đốt tự nhiên lớn nhất EU khi siêu mỏ Neptun Deep ở Biển Đen đi vào hoạt động năm 2027.",
    "note_en": "Southeast Europe's largest economy and a rising IT/automotive powerhouse; set to become the EU's #1 natural gas producer once the offshore Black Sea Neptun Deep project comes online in 2027."
  },
  "Qatar": {
    "tier": "adv",
    "gdp_vi": "~221 tỷ USD (#54 thế giới)",
    "gdp_en": "~$221B (#54 globally)",
    "pc_vi": "~81.400 USD (PPP ~115.000 USD)",
    "pc_en": "~$81,400 (PPP ~$115,000)",
    "gr": "+2.0%",
    "sec": [
      46,
      54,
      0
    ],
    "main_vi": "Khí đốt tự nhiên hóa lỏng (LNG – một trong 3 nhà xuất khẩu lớn nhất thế giới), hóa dầu, phân bón, hàng không (Qatar Airways), quỹ đầu tư QIA",
    "main_en": "Liquefied Natural Gas (LNG – top-3 global exporter), petrochemicals, fertilizers, global aviation (Qatar Airways), sovereign wealth (QIA)",
    "note_vi": "Chia sẻ mỏ khí đốt ngoài khơi lớn nhất hành tinh (North Field / South Pars) với Iran, đem lại mức thu nhập bình quân đầu người thuộc nhóm giàu nhất thế giới và tiềm lực tài chính khổng lồ cho ngoại giao mềm.",
    "note_en": "Shares the world's largest non-associated gas reservoir (North Field) with Iran; massive LNG expansion projects underpin one of the highest per-capita incomes on Earth."
  },
  "Portugal": {
    "tier": "adv",
    "gdp_vi": "~308 tỷ USD (#47 thế giới)",
    "gdp_en": "~$308B (#47 globally)",
    "pc_vi": "~29.000 USD (PPP ~49.200 USD)",
    "pc_en": "~$29,000 (PPP ~$49,200)",
    "gr": "+1.9%",
    "sec": [
      76,
      22,
      2
    ],
    "main_vi": "Du lịch & lưu trú quốc tế (~30 triệu khách/năm), linh kiện ô tô & khuôn mẫu chính xác, năng lượng tái tạo (~85% điện xanh), trung tâm công nghệ Lisbon (Web Summit), sản xuất nút bần (#1 thế giới), rượu vang & dầu ô liu",
    "main_en": "International tourism (~30M visitors/year), automotive components & precision molds, renewable electricity (~85% green grid), Lisbon tech hub, cork production (#1 globally), wine & olive oil",
    "note_vi": "Đạt thặng dư ngân sách và giảm nhanh tỷ lệ nợ công nhờ sự bùng nổ của du lịch, làn sóng chuyên gia công nghệ số quốc tế đến Lisbon/Porto và vị thế dẫn đầu châu Âu về điện gió – mặt trời – thủy điện.",
    "note_en": "Posting rare Eurozone budget surpluses and rapid public debt reduction, powered by record tourism, a thriving Lisbon/Porto tech ecosystem, and one of Europe's cleanest renewable power grids (~85%)."
  },
  "Poland": {
    "tier": "adv",
    "gdp_vi": "~915 tỷ USD (#21 thế giới, #6 EU)",
    "gdp_en": "~$915B (#21 globally, #6 in EU)",
    "pc_vi": "~25.000 USD (PPP ~51.600 USD)",
    "pc_en": "~$25,000 (PPP ~$51,600)",
    "gr": "+3.2%",
    "sec": [
      62,
      35,
      3
    ],
    "main_vi": "Sản xuất pin xe điện (#2 thế giới, #1 châu Âu) & linh kiện ô tô, thiết bị gia dụng (#1 châu Âu), trung tâm dịch vụ tài chính – CNTT & phát triển game (CD Projekt), chế biến thực phẩm & gia cầm xuất khẩu, nội thất",
    "main_en": "EV lithium-ion battery manufacturing (#2 globally, #1 in Europe) & auto parts, home appliances, IT/BPO hubs & video games (CD Projekt), agri-food & poultry exports, furniture",
    "note_vi": "Kỳ tích kinh tế châu Âu với hơn 30 năm tăng trưởng liên tục (quốc gia EU duy nhất không suy thoái năm 2009), vươn lên ngưỡng nền kinh tế 1.000 tỷ USD và chi tiêu quốc phòng ~4,5% GDP cao nhất khối NATO.",
    "note_en": "Europe's standout growth champion over the past three decades, rapidly approaching the $1 trillion GDP milestone as the EU's #1 EV battery hub while leading NATO in defense spending (~4.5% of GDP)."
  },
  "Philippines": {
    "tier": "dev",
    "gdp_vi": "~462 tỷ USD (#35 thế giới)",
    "gdp_en": "~$462B (#35 globally)",
    "pc_vi": "~4.050 USD (PPP ~12.100 USD)",
    "pc_en": "~$4,050 (PPP ~$12,100)",
    "gr": "+5.8%",
    "sec": [
      62,
      29,
      9
    ],
    "main_vi": "Gia công quy trình kinh doanh (BPO/call center), kiều hối (>37 tỷ USD/năm), lắp ráp bán dẫn – điện tử, khai thác niken, nông sản nhiệt đới",
    "main_en": "Business process outsourcing (BPO), overseas remittances (>$37B/yr), electronics assembly, nickel mining, tropical agriculture",
    "note_vi": "Dân số trẻ sử dụng tiếng Anh thành thạo giúp Manila trở thành thủ phủ BPO thế giới; tuy nhiên địa hình quần đảo phân mảnh làm chi phí logistics và điện năng cao bậc nhất ASEAN.",
    "note_en": "Young, English-proficient workforce powers a global BPO hub and massive remittance inflows, though archipelagic geography keeps inter-island logistics and power costs high."
  },
  "Peru": {
    "tier": "emg",
    "gdp_vi": "~289 tỷ USD (#49 thế giới)",
    "gdp_en": "~$289B (#49 globally)",
    "pc_vi": "~8.450 USD (PPP ~17.800 USD)",
    "pc_en": "~$8,450 (PPP ~$17,800)",
    "gr": "+3.1%",
    "sec": [
      54,
      39,
      7
    ],
    "main_vi": "Khai khoáng (đồng #2-3 thế giới, bạc #2, kẽm #2, vàng, thiếc), nông nghiệp công nghệ cao xuất khẩu (việt quất #1 thế giới, nho, bơ, măng tây, cà phê), bột cá (#1 thế giới), siêu cảng Chancay, du lịch Machu Picchu",
    "main_en": "Mining (world's top-3 copper, #2 silver & zinc, gold, tin), high-value agro-exports (#1 blueberries globally, table grapes, avocados), fishmeal (#1 globally), Chancay megaport, Machu Picchu tourism",
    "note_vi": "Cường quốc khoáng sản và siêu thực phẩm (superfoods) của Nam Mỹ, duy trì đồng Sol (PEN) ổn định bậc nhất khu vực suốt 30 năm và vừa khánh thành siêu cảng nước sâu Chancay kết nối thẳng với Thượng Hải.",
    "note_en": "Andean mining and agro-export powerhouse boasting Latin America's most stable currency (the Sol) and the newly inaugurated Chinese-built Chancay deepwater megaport linking South America directly to Asia."
  },
  "Paraguay": {
    "tier": "dev",
    "gdp_vi": "~45,8 tỷ USD (#94 thế giới)",
    "gdp_en": "~$45.8B (#94 globally)",
    "pc_vi": "~6.250 USD (PPP ~18.500 USD)",
    "pc_en": "~$6,250 (PPP ~$18,500)",
    "gr": "+4.0%",
    "sec": [
      52,
      37,
      11
    ],
    "main_vi": "Xuất khẩu thủy điện sạch (#1 thế giới tính theo đầu người qua hai siêu đập Itaipu & Yacyretá), xuất khẩu đậu tương (#3-4 thế giới) & thịt bò, công nghiệp lắp ráp miễn thuế Maquila (dây cáp ô tô, dệt may)",
    "main_en": "Clean hydropower exports (Itaipu & Yacyretá dams), soybean (#3-4 globally) & beef exports, Maquila export-assembly manufacturing (auto wiring, textiles), river barge logistics",
    "note_vi": "Sản xuất 100% điện năng từ thủy điện và xuất khẩu phần dư thừa cho Brazil và Argentina; vừa được Moody's nâng hạng tín nhiệm lên mức Đầu tư (Investment Grade - Baa3) nhờ thuế suất thấp (10-10-10) và kỷ luật vĩ mô.",
    "note_en": "Generates 100% of its electricity from hydropower (Itaipu & Yacyretá) as a major net clean-energy exporter; recently earned Moody's Investment Grade status backed by a flat 10-10-10 tax regime."
  },
  "Papua New Guinea": {
    "tier": "dev",
    "gdp_vi": "~32,5 tỷ USD (#105 thế giới)",
    "gdp_en": "~$32.5B (#105 globally)",
    "pc_vi": "~3.180 USD (PPP ~4.720 USD)",
    "pc_en": "~$3,180 (PPP ~$4,720)",
    "gr": "+4.5%",
    "sec": [
      43,
      39,
      18
    ],
    "main_vi": "Khí thiên nhiên hóa lỏng (dự án PNG LNG của ExxonMobil & Papua LNG của TotalEnergies), khai thác vàng (Porgera, Lihir) & đồng – niken, dầu cọ, cà phê, ca cao, cá ngừ",
    "main_en": "Liquefied natural gas (ExxonMobil PNG LNG & TotalEnergies Papua LNG), gold (Porgera, Lihir) & copper-nickel mining, palm oil, coffee, cocoa, tuna",
    "note_vi": "Nền kinh tế giàu tài nguyên bậc nhất châu Đại Dương nhưng có cấu trúc 'lưỡng phân' rõ rệt: ngành dầu khí – khai khoáng công nghệ cao tạo hầu hết xuất khẩu trong khi 80% dân số sống bằng nông nghiệp tự cung trên địa hình rừng núi.",
    "note_en": "Resource-rich Pacific economy marked by stark duality: capital-intensive LNG and gold-copper mining dominate exports while ~80% of the population engages in rural subsistence farming."
  },
  "Panama": {
    "tier": "adv",
    "gdp_vi": "~87,3 tỷ USD (#74 thế giới)",
    "gdp_en": "~$87.3B (#74 globally)",
    "pc_vi": "~19.300 USD (PPP ~41.200 USD)",
    "pc_en": "~$19,300 (PPP ~$41,200)",
    "gr": "+2.9%",
    "sec": [
      71,
      27,
      2
    ],
    "main_vi": "Kênh đào Panama (~6% thương mại hàng hải toàn cầu) & cụm cảng trung chuyển Balboa/Colón, Khu thương mại tự do Colón (lớn nhất châu Mỹ), trung tâm ngân hàng quốc tế, đăng ký tàu biển (#1 thế giới), trung tâm hàng không Copa Airlines",
    "main_en": "Panama Canal (~6% of global maritime trade) & container transshipment ports, Colón Free Trade Zone, international banking center, world's #1 ship registry, Copa Airlines hub",
    "note_vi": "Nút thắt hàng hải và tài chính chiến lược của Tây Bán Cầu sử dụng đồng USD suốt hơn 120 năm; có thu nhập đầu người cao nhất Mỹ Latin (PPP) dù vừa chịu tác động từ hạn hán El Niño và đóng cửa mỏ đồng Cobre Panamá.",
    "note_en": "Dollarized maritime and financial crossroads of the Americas; boasts Latin America's highest PPP per-capita income via the Panama Canal, world-leading ship registry, and Colón Free Zone."
  },
  "Palau": {
    "tier": "adv",
    "gdp_vi": "~0,31 tỷ USD (#187 thế giới)",
    "gdp_en": "~$310M (#187 globally)",
    "pc_vi": "~17.200 USD (PPP ~18.500 USD)",
    "pc_en": "~$17,200 (PPP ~$18,500)",
    "gr": "+6.5%",
    "sec": [
      85,
      12,
      3
    ],
    "main_vi": "Du lịch lặn biển & sinh thái cao cấp (quần đảo đá vôi Rock Islands), viện trợ Hiệp ước Liên kết Tự do (COFA) mới gia hạn với Mỹ, đánh bắt cá ngừ",
    "main_en": "High-end marine & scuba eco-tourism (Rock Islands UNESCO site), renewed US Compact of Free Association (COFA) grants, tuna fisheries",
    "note_vi": "Một trong những quốc đảo giàu nhất vùng Thái Bình Dương (dùng đồng USD); đi đầu thế giới khi biến 80% vùng đặc quyền kinh tế thành Khu bảo tồn biển quốc gia cấm đánh bắt thương mại.",
    "note_en": "High-income Pacific island nation using the USD; designated 80% of its Exclusive Economic Zone as a no-take National Marine Sanctuary while relying on eco-tourism and US COFA support."
  },
  "Pakistan": {
    "tier": "dev",
    "gdp_vi": "~374 tỷ USD (#43 thế giới)",
    "gdp_en": "~$374B (#43 globally)",
    "pc_vi": "~1.580 USD (PPP ~6.900 USD)",
    "pc_en": "~$1,580 (PPP ~$6,900)",
    "gr": "+2.5%",
    "sec": [
      53,
      23,
      24
    ],
    "main_vi": "Dệt may & bông sợi (~60% xuất khẩu), nông nghiệp tưới tiêu lưu vực sông Indus (lúa mì, gạo Basmati, mía), kiều hối (~30 tỷ USD), xi măng",
    "main_en": "Textiles & cotton (~60% of exports), Indus Basin irrigated agriculture (wheat, Basmati rice, sugarcane), remittances (~$30B), cement",
    "note_vi": "Sống phụ thuộc vào hệ thống thủy lợi sông Indus và xuất khẩu hàng dệt; thường xuyên đối mặt khủng hoảng cán cân thanh toán, nợ ngành điện và phải dựa vào các gói cứu trợ của IMF, Ả Rập Xê Út và Trung Quốc (CPEC).",
    "note_en": "Anchored by Indus Basin agriculture and textile exports, but chronically constrained by balance-of-payments crises, power-sector circular debt, and reliance on IMF and bilateral bailouts."
  },
  "Oman": {
    "tier": "adv",
    "gdp_vi": "~110 tỷ USD",
    "gdp_en": "~$110B",
    "pc_vi": "~21.300 USD (PPP ~42.500 USD)",
    "pc_en": "~$21,300 (PPP ~$42,500)",
    "gr": "+1.9%",
    "sec": [
      48,
      50,
      2
    ],
    "main_vi": "Dầu thô & khí LNG, cảng biển nước sâu ngoài eo Hormuz (Salalah, Duqm, Sohar), hóa dầu, du lịch sinh thái – di sản, dự án hydro xanh",
    "main_en": "Crude oil & LNG, Indian Ocean deepwater ports bypassing Hormuz (Salalah, Duqm, Sohar), petrochemicals, heritage tourism, green hydrogen",
    "note_vi": "Lợi thế địa kinh tế lớn nhất của Oman là bờ biển dài mở thẳng ra Ấn Độ Dương bên ngoài nút cổ chai eo biển Hormuz, biến cảng Duqm và Salalah thành điểm trung chuyển chiến lược an toàn.",
    "note_en": "Leverages its long Indian Ocean coastline outside the Strait of Hormuz chokepoint to develop strategic industrial ports at Duqm and Salalah while reducing public debt."
  },
  "Norway": {
    "tier": "adv",
    "gdp_vi": "~504 tỷ USD (#30 thế giới)",
    "gdp_en": "~$504B (#30 globally)",
    "pc_vi": "~90.400 USD (PPP ~103.500 USD)",
    "pc_en": "~$90,400 (PPP ~$103,500)",
    "gr": "+2.0%",
    "sec": [
      57,
      41,
      2
    ],
    "main_vi": "Dầu mỏ & khí đốt tự nhiên (nhà cung cấp khí đốt qua đường ống số 1 cho châu Âu), Quỹ Đầu tư Quốc gia lớn nhất thế giới (~1.800 tỷ USD), nuôi cá hồi Đại Tây Dương (#1 thế giới), thủy điện (98% điện xanh), vận tải biển & công nghệ hàng hải, nhôm – phân bón (Yara)",
    "main_en": "Offshore oil & natural gas (#1 pipeline gas supplier to Europe), world's largest Sovereign Wealth Fund (~$1.8T), Atlantic salmon farming (#1 globally), hydropower (98% green grid), maritime shipping, aluminum & fertilizers (Yara)",
    "note_vi": "Quốc gia quản lý tài nguyên mẫu mực nhất hành tinh: tích lũy nguồn thu dầu khí vào Quỹ Hưu trí Chính phủ Toàn cầu trị giá ~1.800 tỷ USD (nắm giữ ~1,5% toàn bộ cổ phiếu niêm yết thế giới) trong khi nội địa dùng gần 100% thủy điện và xe điện.",
    "note_en": "Gold standard of resource governance: channels petroleum windfalls into the world's largest Sovereign Wealth Fund (~$1.8T, owning ~1.5% of all listed global equities) while running domestically on ~98% hydropower and ~90% EV new-car sales."
  },
  "North Korea": {
    "tier": "low",
    "gdp_vi": "~24 tỷ USD (ước tính)",
    "gdp_en": "~$24B (est.)",
    "pc_vi": "~900 USD (PPP ~1.800 USD)",
    "pc_en": "~$900 (PPP ~$1,800)",
    "gr": "+3.1%",
    "sec": [
      31,
      47,
      22
    ],
    "main_vi": "Công nghiệp quốc phòng & đạn dược, khai khoáng (than анtracit, sắt, magie, đất hiếm), luyện kim, dệt may gia công, thủy sản",
    "main_en": "Defense & munitions manufacturing, mining (anthracite coal, iron ore, magnesite, rare earths), metallurgy, textiles, fisheries",
    "note_vi": "Nền kinh tế kế hoạch hóa tập trung theo học thuyết Tự lực (Juche) chịu cấm vận quốc tế ngặt nghèo; khoảng 90% ngoại thương đi qua biên giới Trung Quốc và gần đây tăng mạnh hợp tác quân sự – năng lượng với Nga.",
    "note_en": "Heavily sanctioned command economy operating under the Juche self-reliance doctrine; relies on China for ~90% of external trade alongside expanding defense-resource barter with Russia."
  },
  "Nigeria": {
    "tier": "dev",
    "gdp_vi": "~199 tỷ USD (#54 thế giới, #1 dân số châu Phi)",
    "gdp_en": "~$199B (#54 globally, #1 African population)",
    "pc_vi": "~880 USD (PPP ~6.350 USD)",
    "pc_en": "~$880 (PPP ~$6,350)",
    "gr": "+3.3%",
    "sec": [
      55,
      22,
      23
    ],
    "main_vi": "Dầu mỏ & khí hóa lỏng LNG (#1 sản lượng dầu châu Phi) & siêu nhà máy lọc dầu Dangote (650.000 thùng/ngày), viễn thông & Fintech (Flutterwave, Moniepoint), điện ảnh Nollywood & âm nhạc Afrobeats, xi măng, nông nghiệp (sắn #1 thế giới, khoai mỡ, ca cao)",
    "main_en": "Crude oil & LNG (#1 African oil producer) & Dangote Mega-Refinery (650k bpd), telecoms & Fintech unicorns (Flutterwave, Moniepoint), Nollywood & Afrobeats creative industries, cement, agriculture (cassava, yams, cocoa)",
    "note_vi": "Quốc gia đông dân nhất châu Phi (>225 triệu người); GDP danh nghĩa tính theo USD giảm mạnh do thả nổi đồng Naira và bỏ trợ cấp xăng dầu để cải cách thị trường, nhưng siêu nhà máy lọc dầu Dangote tại Lagos đang giúp đất nước chấm dứt nghịch lý xuất dầu thô – nhập xăng thành phẩm.",
    "note_en": "Africa's most populous nation (>225M people) and premier Fintech/Afrobeats hub; nominal USD GDP fell sharply following bold Naira float and fuel-subsidy reforms, while the giant 650,000-bpd Dangote Refinery is ending decades of refined-fuel import dependence."
  },
  "Niger": {
    "tier": "low",
    "gdp_vi": "~19,6 tỷ USD (#123 thế giới)",
    "gdp_en": "~$19.6B (#123 globally)",
    "pc_vi": "~700 USD (PPP ~2.050 USD)",
    "pc_en": "~$700 (PPP ~$2,050)",
    "gr": "+8.8%",
    "sec": [
      37,
      25,
      38
    ],
    "main_vi": "Khai thác & xuất khẩu dầu thô (mỏ Agadem & đường ống dài 2.000 km qua Benin), khai thác quặng uranium (#7 thế giới, ~5% nguồn cung toàn cầu), vàng, nông nghiệp & chăn nuôi gia súc vùng Sahel (hành tây, đậu đũa)",
    "main_en": "Crude oil production & export (Agadem Rift Basin & 2,000-km Niger-Benin pipeline), uranium mining (~5% of global output), gold, Sahelian livestock & agriculture (onions, cowpeas)",
    "note_vi": "Quốc gia nội lục vùng Sahel có tỷ suất sinh cao nhất thế giới; tốc độ tăng trưởng GDP bứt phá năm 2024–2025 nhờ đưa vào vận hành đường ống dẫn dầu xuất khẩu dài gần 2.000 km do PetroChina xây dựng bất chấp biến động địa chính trị.",
    "note_en": "Landlocked Sahelian nation recording a sharp GDP growth surge in 2024–2025 following the commissioning of the PetroChina-built Agadem-to-Benin crude oil export pipeline, alongside major uranium reserves."
  },
  "Nicaragua": {
    "tier": "dev",
    "gdp_vi": "~19,4 tỷ USD (#124 thế giới)",
    "gdp_en": "~$19.4B (#124 globally)",
    "pc_vi": "~2.850 USD (PPP ~8.750 USD)",
    "pc_en": "~$2,850 (PPP ~$8,750)",
    "gr": "+3.8%",
    "sec": [
      53,
      30,
      17
    ],
    "main_vi": "Kiều hối (chiếm ~27% GDP), khu chế xuất dệt may & dây cáp điện ô tô (Zona Franca), khai thác vàng (mặt hàng xuất khẩu số 1), thịt bò, cà phê, xì gà cao cấp (Estelí), mía đường",
    "main_en": "Remittances (~27% of GDP), free-zone apparel & auto wiring harness assembly, gold mining (#1 merchandise export), beef, coffee, premium cigars (Estelí), sugar",
    "note_vi": "Quốc gia có diện tích lớn nhất Trung Mỹ; dòng kiều hối kỷ lục (>5 tỷ USD/năm từ Mỹ và Costa Rica) cùng xuất khẩu vàng giá cao đang giữ nhịp tiêu dùng nội địa và thặng dư tài khoản vãng lai.",
    "note_en": "Largest Central American nation by land area; record diaspora remittances (>25% of GDP) and surging gold, beef, and premium Estelí cigar exports underpin steady growth."
  },
  "New Zealand": {
    "tier": "adv",
    "gdp_vi": "~258 tỷ USD (#50 thế giới)",
    "gdp_en": "~$258B (#50 globally)",
    "pc_vi": "~48.500 USD (PPP ~54.800 USD)",
    "pc_en": "~$48,500 (PPP ~$54,800)",
    "gr": "+0.8%",
    "sec": [
      72,
      21,
      7
    ],
    "main_vi": "Chăn nuôi bò sữa & chế biến sữa xuất khẩu (#1 thế giới - tập đoàn Fonterra), thịt cừu – thịt bò, trái kiwi (Zespri) & rượu vang Marlborough, lâm nghiệp, du lịch thiên nhiên & phim trường, hàng không vũ trụ tư nhân (Rocket Lab)",
    "main_en": "Dairy exports (#1 globally - Fonterra), lamb & beef, Zespri kiwifruit & Marlborough wine, forestry, adventure tourism & film production, commercial space launch (Rocket Lab)",
    "note_vi": "Cường quốc nông nghiệp công nghệ cao không trợ cấp của thế giới (cung cấp ~30% lượng sữa thương mại toàn cầu) kết hợp với ngành phóng tên lửa vũ trụ thương mại (Rocket Lab đứng thứ 2 thế giới sau SpaceX về tần suất phóng của doanh nghiệp tư nhân phương Tây) và >85% điện tái tạo.",
    "note_en": "World's premier unsubsidized agri-export powerhouse (accounting for ~30% of global cross-border dairy trade via Fonterra), complemented by ~85% renewable electricity and commercial space launches (Rocket Lab)."
  },
  "Niue": {
    "tier": "dev",
    "gdp_vi": "~0,02 tỷ USD (~20 triệu USD, tự trị liên kết với New Zealand)",
    "gdp_en": "~$20M (free association with New Zealand)",
    "pc_vi": "~11.500 USD",
    "pc_en": "~$11,500",
    "gr": "+2.5%",
    "sec": [
      78,
      10,
      12
    ],
    "main_vi": "Viện trợ ngân sách từ New Zealand, chương trình tài trợ bảo tồn đại dương (Ocean Conservation Commitments), du lịch sinh thái ngắm cá voi, xuất khẩu mật ong & vani, cấp phép tên miền .nu",
    "main_en": "New Zealand budgetary & infrastructure aid, Ocean Conservation Commitments (OCC) blue finance, whale-watching eco-tourism, organic honey & vanilla, .nu domain registry",
    "note_vi": "Một trong những đảo san hô nâng cao lớn nhất thế giới với chỉ ~1.700 cư dân (hơn 90% người Niue sống tại New Zealand); đi đầu sáng kiến bán 'chứng chỉ bảo tồn mỗi km² biển' để gây quỹ bền vững.",
    "note_en": "One of the world's largest raised coral atolls with ~1,700 residents (who hold New Zealand citizenship); pioneered sovereign Ocean Conservation Commitments selling sponsorship of its marine territory per km²."
  },
  "Cook Is.": {
    "tier": "adv",
    "gdp_vi": "~0,38 tỷ USD (tự trị liên kết với New Zealand)",
    "gdp_en": "~$380M (free association with New Zealand)",
    "pc_vi": "~23.500 USD",
    "pc_en": "~$23,500",
    "gr": "+5.2%",
    "sec": [
      86,
      9,
      5
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp (Rarotonga & đầm phá Aitutaki - chiếm ~70% GDP), cấp phép đánh bắt cá ngừ, nuôi ngọc trai đen (Manihiki), dịch vụ ủy thác tài sản ngoài khơi, thăm dò khoáng sản dưới đáy biển sâu",
    "main_en": "Island resort tourism (Rarotonga & Aitutaki lagoon - ~70% of GDP), tuna fishing licenses, black pearl farming (Manihiki), offshore asset-protection trusts, seabed polymetallic nodule exploration",
    "note_vi": "Đã tốt nghiệp lên nhóm nền kinh tế thu nhập cao của OECD nhờ du lịch biển bùng nổ từ thị trường New Zealand/Úc; sở hữu một trong những trữ lượng kết hạch đa kim (coban, niken, mangan) dưới đáy biển sâu lớn nhất thế giới.",
    "note_en": "Graduated to OECD High-Income status on the strength of Rarotonga and Aitutaki resort tourism; sits atop some of the Pacific's richest deep-sea polymetallic nodule deposits (cobalt, nickel, manganese)."
  },
  "Netherlands": {
    "tier": "adv",
    "gdp_vi": "~1.220 tỷ USD (#18 thế giới, #5 EU)",
    "gdp_en": "~$1.22T (#18 globally, #5 in EU)",
    "pc_vi": "~67.900 USD (PPP ~81.500 USD)",
    "pc_en": "~$67,900 (PPP ~$81,500)",
    "gr": "+1.5%",
    "sec": [
      78,
      20,
      2
    ],
    "main_vi": "Thiết bị quang khắc bán dẫn độc quyền toàn cầu (ASML, NXP), cảng biển Rotterdam (#1 châu Âu) & logistics, nông nghiệp nhà kính công nghệ cao (#2 thế giới về giá trị xuất khẩu nông sản), lọc hóa dầu & hóa chất (Shell, AkzoNobel), tài chính – fintech (ING, Adyen)",
    "main_en": "Monopoly EUV semiconductor lithography equipment (ASML, NXP), Port of Rotterdam (#1 in Europe) & logistics, high-tech greenhouse agriculture (#2 agricultural exporter globally by value), refining & chemicals, finance & fintech (ING, Adyen)",
    "note_vi": "Nắm giữ 'nút cổ chai' công nghệ quan trọng nhất thế kỷ 21 với tập đoàn ASML (độc quyền 100% máy quang khắc cực tím EUV sản xuất chip tiên tiến toàn cầu), đồng thời là nhà xuất khẩu nông sản lớn thứ 2 thế giới dù diện tích chỉ bằng 1/230 nước Mỹ.",
    "note_en": "Controls the single most critical technological chokepoint of the 21st century via ASML (100% global monopoly on EUV lithography machines for advanced AI chips), while ranking as the world's #2 agricultural exporter by value thanks to precision greenhouse farming."
  },
  "Aruba": {
    "tier": "adv",
    "gdp_vi": "~4,05 tỷ USD (quốc gia cấu thành Vương quốc Hà Lan)",
    "gdp_en": "~$4.05B (constituent country of the Kingdom of the Netherlands)",
    "pc_vi": "~37.500 USD (PPP ~51.200 USD)",
    "pc_en": "~$37,500 (PPP ~$51,200)",
    "gr": "+3.4%",
    "sec": [
      87,
      13,
      0
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển & tàu biển (chiếm >75% tổng hoạt động kinh tế, chủ yếu khách Mỹ), dịch vụ thương mại – bán lẻ miễn thuế, chế biến lô hội (Aloe Vera), trung chuyển hàng hóa",
    "main_en": "Beach resort & cruise tourism (>75% of total economic activity, primarily US visitors), duty-free retail & hospitality, aloe vera processing, logistics",
    "note_vi": "Một trong những nền kinh tế phụ thuộc vào du lịch cao nhất thế giới nhưng cực kỳ thịnh vượng nhờ nằm ngoài vành đai bão nhiệt đới Caribe và có thủ tục nhập cảnh Mỹ trước (US Preclearance) ngay tại sân bay Queen Beatrix.",
    "note_en": "One of the world's most tourism-intensive yet prosperous island economies, benefiting from a location outside the main Atlantic hurricane belt and US customs pre-clearance at Queen Beatrix Airport."
  },
  "Curaçao": {
    "tier": "adv",
    "gdp_vi": "~3,45 tỷ USD (quốc gia cấu thành Vương quốc Hà Lan)",
    "gdp_en": "~$3.45B (constituent country of the Kingdom of the Netherlands)",
    "pc_vi": "~22.500 USD (PPP ~30.800 USD)",
    "pc_en": "~$22,500 (PPP ~$30,800)",
    "gr": "+3.8%",
    "sec": [
      84,
      15,
      1
    ],
    "main_vi": "Du lịch di sản UNESCO Willemstad & lặn biển, dịch vụ tài chính quốc tế & cấp phép e-Gaming, cảng biển nước sâu tự nhiên & sửa chữa tàu biển (Damen), kho vận – trung chuyển năng lượng",
    "main_en": "Heritage & dive tourism (Willemstad UNESCO site), international financial services & e-Gaming licensing, natural deepwater port & ship repair, energy transshipment",
    "note_vi": "Đang chuyển đổi thành công từ phụ thuộc vào nhà máy lọc dầu Isla (trước đây do PDVSA Venezuela thuê) sang du lịch nghỉ dưỡng tăng trưởng hai chữ số, cải cách luật cấp phép iGaming và phát triển hydro xanh.",
    "note_en": "Successfully pivoting from historical reliance on the idled Isla oil refinery toward booming European/North American resort tourism, reformed iGaming regulation, and maritime services."
  },
  "Nepal": {
    "tier": "dev",
    "gdp_vi": "~43 tỷ USD",
    "gdp_en": "~$43B",
    "pc_vi": "~1.430 USD (PPP ~5.300 USD)",
    "pc_en": "~$1,430 (PPP ~$5,300)",
    "gr": "+3.9%",
    "sec": [
      62,
      13,
      25
    ],
    "main_vi": "Kiều hối (~25% GDP), du lịch leo núi Himalaya (Everest), thủy điện xuất khẩu sang Ấn Độ, nông nghiệp, thảm & hàng thủ công",
    "main_en": "Remittances (~25% of GDP), Himalayan trekking & mountaineering tourism, hydropower exports to India, agriculture, carpets & handicrafts",
    "note_vi": "Kinh tế gắn chặt với Ấn Độ (đồng Rupee Nepal neo tỷ giá cố định vào Rupee Ấn Độ) và phụ thuộc lớn vào kiều hối từ lao động tại vùng Vịnh, Malaysia; tiềm năng lớn nhất là xuất khẩu thủy điện Himalaya.",
    "note_en": "Pegged to the Indian Rupee and heavily reliant on Gulf/Malaysian worker remittances (~25% of GDP), while unlocking vast Himalayan river hydropower for export to India."
  },
  "Nauru": {
    "tier": "dev",
    "gdp_vi": "~0,16 tỷ USD (#189 thế giới)",
    "gdp_en": "~$160M (#189 globally)",
    "pc_vi": "~12.500 USD (PPP ~14.200 USD)",
    "pc_en": "~$12,500 (PPP ~$14,200)",
    "gr": "+1.8%",
    "sec": [
      68,
      28,
      4
    ],
    "main_vi": "Dịch vụ Trung tâm Xử lý Người tị nạn Khu vực của Úc (RPC), phí cấp phép đánh bắt cá ngừ vùng biển PNA, khai thác lớp quặng phosphate thứ cấp còn sót lại, bảo trợ công ty khai khoáng đáy biển sâu (The Metals Company)",
    "main_en": "Australian-funded Regional Processing Centre (RPC) services, EEZ tuna fishing licenses, residual secondary phosphate mining, sponsorship of deep-sea mining (NORI/The Metals Company)",
    "note_vi": "Cộng hòa đảo nhỏ nhất thế giới (21 km²); từng có thu nhập đầu người cao nhất hành tinh thập niên 1970 nhờ mỏ phân chim phosphate trước khi cạn kiệt, nay sống dựa vào ngân sách từ Úc và phí đánh bắt cá ngừ.",
    "note_en": "World's smallest island republic (21 km²); once boasted the world's highest per-capita income in the 1970s before primary phosphate exhaustion, now reliant on Australian RPC revenues and tuna licenses."
  },
  "Namibia": {
    "tier": "dev",
    "gdp_vi": "~13,4 tỷ USD (#138 thế giới)",
    "gdp_en": "~$13.4B (#138 globally)",
    "pc_vi": "~4.750 USD (PPP ~12.400 USD)",
    "pc_en": "~$4,750 (PPP ~$12,400)",
    "gr": "+3.7%",
    "sec": [
      58,
      33,
      9
    ],
    "main_vi": "Khai thác uranium (#3 thế giới - mỏ Rössing, Husab) & kim cương ngoài khơi đáy biển (Debmarine), phát hiện siêu mỏ dầu ngoài khơi bồn trũng Orange (TotalEnergies Venus, Galp Mopane), hydro xanh (Hyphen), du lịch sa mạc Namib, cảng Walvis Bay",
    "main_en": "Uranium mining (#3 globally - Rössing, Husab) & marine seabed diamond mining (Debmarine), giant Orange Basin offshore oil discoveries (Venus, Mopane), green hydrogen (Hyphen), desert safari tourism, Walvis Bay port",
    "note_vi": "Nhà sản xuất uranium lớn thứ 3 thế giới và dẫn đầu về khai thác kim cương dưới đáy đại dương bằng tàu robot; đang trở thành điểm nóng năng lượng toàn cầu sau các phát hiện dầu mỏ khổng lồ (>10 tỷ thùng) ở bồn trũng Orange và siêu dự án hydro xanh 10 tỷ USD tại Lüderitz.",
    "note_en": "World's #3 uranium producer and pioneer in robotic marine diamond mining; emerging as a global energy hotspot following multi-billion-barrel Orange Basin offshore oil discoveries and a $10B green hydrogen project."
  },
  "Mozambique": {
    "tier": "low",
    "gdp_vi": "~22,9 tỷ USD (#115 thế giới)",
    "gdp_en": "~$22.9B (#115 globally)",
    "pc_vi": "~660 USD (PPP ~1.720 USD)",
    "pc_en": "~$660 (PPP ~$1,720)",
    "gr": "+4.3%",
    "sec": [
      46,
      28,
      26
    ],
    "main_vi": "Siêu dự án khí thiên nhiên hóa lỏng (LNG bồn trũng Rovuma: Coral Sul FLNG của Eni, TotalEnergies, ExxonMobil), luyện nhôm (Mozal), than luyện cốc, xuất khẩu thủy điện Cahora Bassa, than chì (graphite cho pin EV), hành lang cảng Maputo/Beira/Nacala",
    "main_en": "Rovuma Basin LNG megaprojects (Eni Coral Sul FLNG, TotalEnergies, ExxonMobil), aluminum smelting (Mozal), metallurgical coal, Cahora Bassa hydropower exports, battery-grade graphite, port corridors",
    "note_vi": "Nắm giữ trữ lượng khí tự nhiên lớn thứ 3 châu Phi (~100 nghìn tỷ feet khối tại bồn trũng Rovuma) cùng các mỏ than chì chiến lược cho pin xe điện, nhưng tiến độ các siêu dự án LNG trên bờ ở Cabo Delgado vẫn phụ thuộc vào tình hình an ninh.",
    "note_en": "Holds Africa's 3rd-largest natural gas reserves (~100 Tcf in the Rovuma Basin) and major battery-grade graphite deposits; offshore Coral Sul FLNG is exporting while onshore LNG megaprojects navigate Cabo Delgado security."
  },
  "Morocco": {
    "tier": "dev",
    "gdp_vi": "~157 tỷ USD (#58 thế giới)",
    "gdp_en": "~$157B (#58 globally)",
    "pc_vi": "~4.150 USD (PPP ~10.900 USD)",
    "pc_en": "~$4,150 (PPP ~$10,900)",
    "gr": "+3.6%",
    "sec": [
      56,
      33,
      11
    ],
    "main_vi": "Trữ lượng quặng phosphate & phân bón (tập đoàn OCP nắm >70% trữ lượng toàn cầu), sản xuất ô tô (#1 châu Phi, nhà xuất khẩu xe hơi số 1 sang EU: Renault, Stellantis) & pin xe điện, linh kiện hàng không (Safran, Boeing), cảng Tanger Med (#1 Địa Trung Hải & châu Phi), du lịch (~17,4 triệu khách/năm)",
    "main_en": "Phosphate rock & fertilizers (OCP Group holds >70% of global reserves), automotive manufacturing (#1 in Africa & #1 passenger car exporter to EU) & EV batteries, aerospace parts, Tanger Med megaport (#1 in Med & Africa), tourism (~17.4M visitors)",
    "note_vi": "Cường quốc công nghiệp chế tạo của Bắc Phi: nắm giữ trên 70% trữ lượng phosphate toàn cầu (chìa khóa an ninh lương thực thế giới và pin LFP), vận hành cảng container Tanger Med lớn nhất Địa Trung Hải, tàu cao tốc Al Boraq và đang đầu tư hạ tầng khổng lồ đồng đăng cai World Cup 2030.",
    "note_en": "North Africa's manufacturing champion holding >70% of global phosphate reserves (vital for global fertilizers and LFP batteries); operates the Mediterranean's largest container port (Tanger Med), Africa's #1 automotive hub, and massive 2030 FIFA World Cup infrastructure."
  },
  "W. Sahara": {
    "tier": "dev",
    "gdp_vi": "~1,50 tỷ USD (vùng lãnh thổ tranh chấp, phần lớn do Maroc quản lý)",
    "gdp_en": "~$1.50B (disputed territory, largely Morocco-administered)",
    "pc_vi": "~2.500 USD",
    "pc_en": "~$2,500",
    "gr": "+4.0%",
    "sec": [
      45,
      38,
      17
    ],
    "main_vi": "Khai thác quặng phosphate chất lượng cao (mỏ Bou Craa và băng tải dài nhất thế giới 98 km ra cảng Laayoune), đánh bắt thủy sản vùng biển giàu cá Đại Tây Dương (Dakhla), năng lượng điện gió – mặt trời, siêu cảng mới Dakhla Atlantique",
    "main_en": "Phosphate rock mining (Bou Craa mine & 98-km conveyor belt to Laayoune port), rich Atlantic fisheries (Dakhla), wind & solar farms, Dakhla Atlantique deepwater megaport project",
    "note_vi": "Khoảng 80% diện tích phía Tây (gồm bờ biển và các mỏ phosphate Bou Craa) nằm dưới sự quản lý và đầu tư hạ tầng mạnh mẽ của Maroc, nổi bật với dự án siêu cảng nước sâu Dakhla Atlantique trị giá 1,2 tỷ USD và các trang trại điện gió ven biển.",
    "note_en": "Roughly 80% of the territory (including the Atlantic coast and Bou Craa phosphate mine) is administered by Morocco, which is investing heavily in renewable wind parks and the $1.2B Dakhla Atlantique deepwater port."
  },
  "Montenegro": {
    "tier": "emg",
    "gdp_vi": "~8,15 tỷ USD (#149 thế giới)",
    "gdp_en": "~$8.15B (#149 globally)",
    "pc_vi": "~13.100 USD (PPP ~31.400 USD)",
    "pc_en": "~$13,100 (PPP ~$31,400)",
    "gr": "+3.8%",
    "sec": [
      74,
      19,
      7
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển Adriatic & bến siêu du thuyền (Kotor, Porto Montenegro, Budva - chiếm ~25-30% GDP), xuất khẩu điện năng (cáp ngầm dưới biển nối Ý), cảng biển Bar, khai thác bauxite & chế biến gỗ",
    "main_en": "Adriatic coast & superyacht marina tourism (Kotor, Porto Montenegro, Budva - ~25-30% of GDP), cross-Adriatic subsea electricity exports to Italy, Port of Bar logistics, bauxite & timber",
    "note_vi": "Ứng viên tiên phong gia nhập EU tại Tây Balkan và đơn phương sử dụng đồng Euro làm tiền tệ chính thức từ năm 2002; vịnh Kotor và các bến siêu du thuyền giúp quốc gia 620.000 dân đón hơn 2,6 triệu du khách mỗi năm.",
    "note_en": "Frontrunner EU accession candidate in the Western Balkans that unilaterally adopted the Euro as legal tender in 2002; luxury Adriatic superyacht marinas and Bay of Kotor tourism attract >4x its population in annual visitors."
  },
  "Mongolia": {
    "tier": "emg",
    "gdp_vi": "~23,6 tỷ USD",
    "gdp_en": "~$23.6B",
    "pc_vi": "~6.750 USD (PPP ~18.100 USD)",
    "pc_en": "~$6,750 (PPP ~$18,100)",
    "gr": "+5.3%",
    "sec": [
      43,
      44,
      13
    ],
    "main_vi": "Khai thác than luyện cốc, đồng & vàng (mỏ Oyu Tolgoi), quặng sắt, len cashmere, chăn nuôi đại gia súc du mục",
    "main_en": "Coking coal, copper & gold mining (Oyu Tolgoi), iron ore, cashmere wool, nomadic livestock husbandry",
    "note_vi": "Kinh tế phụ thuộc nặng nề vào xuất khẩu khoáng sản qua đường sắt và cửa khẩu đường bộ sang Trung Quốc (>85% xuất khẩu) do vị thế không giáp biển kẹp giữa Nga và Trung Quốc.",
    "note_en": "Resource-rich landlocked economy whose mineral exports (coal and copper) depend overwhelmingly on overland rail corridors into China (>85% of exports)."
  },
  "Moldova": {
    "tier": "dev",
    "gdp_vi": "~18,4 tỷ USD (#127 thế giới)",
    "gdp_en": "~$18.4B (#127 globally)",
    "pc_vi": "~7.450 USD (PPP ~18.900 USD)",
    "pc_en": "~$7,450 (PPP ~$18,900)",
    "gr": "+2.6%",
    "sec": [
      63,
      28,
      9
    ],
    "main_vi": "Sản xuất rượu vang xuất khẩu (hầm rượu ngầm lớn nhất thế giới Mileștii Mici & Cricova), nông sản (hạt hướng dương, táo, quả óc chó, ngũ cốc), công viên công nghệ thông tin ảo (Moldova IT Park), dây cáp điện ô tô, kiều hối (~15% GDP)",
    "main_en": "Wine production & exports (world's largest underground cellars at Mileștii Mici & Cricova), agriculture (sunflower seeds, apples, walnuts), Moldova IT Park (7% flat tax), automotive wiring, remittances",
    "note_vi": "Quốc gia ứng viên EU đang đẩy nhanh kết nối lưới điện và thương mại với Romania để thoát hoàn toàn sự phụ thuộc năng lượng vào Nga/Transnistria; khu công nghệ ảo Moldova IT Park với mức thuế duy nhất 7% đã biến CNTT thành ngành xuất khẩu dịch vụ mũi nhọn.",
    "note_en": "EU candidate country rapidly integrating its power grid and trade with Romania (~65% of exports go to the EU); the innovative virtual Moldova IT Park (flat 7% tax) has made software a top export alongside world-famous wines."
  },
  "Monaco": {
    "tier": "adv",
    "gdp_vi": "~10,0 tỷ USD (#145 thế giới)",
    "gdp_en": "~$10.0B (#145 globally)",
    "pc_vi": "~256.000 USD (#1 thế giới)",
    "pc_en": "~$256,000 (#1 globally)",
    "gr": "+4.6%",
    "sec": [
      86,
      14,
      0
    ],
    "main_vi": "Ngân hàng tư nhân & quản lý tài sản giới siêu giàu (quản lý >170 tỷ Euro), bất động sản đắt nhất hành tinh & lấn biển (khu đô thị sinh thái Mareterra 2 tỷ Euro), du lịch siêu sang & sự kiện (F1 Monaco GP, Monaco Yacht Show, Sòng bạc Monte-Carlo), công nghiệp dược – mỹ phẩm & nhựa chính xác",
    "main_en": "Private banking & ultra-high-net-worth wealth management (>€170B AuM), world's priciest real estate & offshore land reclamation (Mareterra), luxury events (F1 Monaco GP, Yacht Show, Monte-Carlo Casino), specialty cosmetics & plastics",
    "note_vi": "Quốc gia có GDP bình quân đầu người cao nhất thế giới (>250.000 USD) và gần 1/3 dân số là triệu phú USD nhờ chính sách không đánh thuế thu nhập cá nhân (từ năm 1869); nguồn thu ngân sách nhà nước lại đến chủ yếu từ thuế giá trị gia tăng (VAT 20%) và phí giao dịch bất động sản.",
    "note_en": "Holds the world's highest GDP per capita (>$250,000) where nearly one in three residents is a USD millionaire, drawn by zero personal income tax since 1869; state finances run strong surpluses via a 20% VAT and real estate duties, recently expanding territory by 3% with the €2B Mareterra sea-reclamation project."
  },
  "Mexico": {
    "tier": "emg",
    "gdp_vi": "~1.850 tỷ USD (#12 thế giới, #2 Mỹ Latin)",
    "gdp_en": "~$1.85T (#12 globally, #2 in Latin America)",
    "pc_vi": "~14.100 USD (PPP ~25.900 USD)",
    "pc_en": "~$14,100 (PPP ~$25,900)",
    "gr": "+1.8%",
    "sec": [
      63,
      33,
      4
    ],
    "main_vi": "Sản xuất & xuất khẩu ô tô – linh kiện (#1 nhà cung cấp cho Mỹ, #7 thế giới), máy tính – điện tử – thiết bị y tế, dầu khí (Pemex) & khai thác bạc (#1 thế giới), kiều hối (>65 tỷ USD/năm), nông sản – đồ uống (bơ #1, bia Corona/Modelo #1 xuất khẩu thế giới, rượu Tequila), du lịch (#6 thế giới)",
    "main_en": "Automotive & parts manufacturing (#1 supplier to US, #7 producer globally), electronics, servers & medical devices, oil (Pemex) & silver mining (#1 globally), remittances (>$65B/year), agro-exports (avocados, beer #1 globally, Tequila), tourism",
    "note_vi": "Đã vượt qua Trung Quốc để trở thành đối tác thương mại hàng hóa lớn số 1 của Hoa Kỳ nhờ hiệp định USMCA và làn sóng dịch chuyển nhà máy về gần biên giới Mỹ (Nearshoring); đồng thời là nhà sản xuất bạc và xuất khẩu bia lớn nhất hành tinh.",
    "note_en": "Surpassed China to become the #1 goods trading partner of the United States under the USMCA treaty, propelled by a massive 'nearshoring' industrial boom along the northern border alongside world-leading silver, beer, and avocado exports."
  },
  "Mauritius": {
    "tier": "emg",
    "gdp_vi": "~16,4 tỷ USD (#131 thế giới)",
    "gdp_en": "~$16.4B (#131 globally)",
    "pc_vi": "~12.900 USD (PPP ~32.800 USD)",
    "pc_en": "~$12,900 (PPP ~$32,800)",
    "gr": "+4.9%",
    "sec": [
      76,
      20,
      4
    ],
    "main_vi": "Trung tâm tài chính quốc tế (trung chuyển vốn đầu tư vào Ấn Độ và châu Phi), du lịch nghỉ dưỡng biển cao cấp, công nghệ thông tin & dịch vụ thuê ngoài (BPO), dệt may cao cấp, chế biến cá ngừ & đường mía đặc sản",
    "main_en": "International Financial Centre (cross-border investment conduit into India & Africa), luxury resort tourism, IT & BPO services, high-end textiles, tuna processing & specialty sugar",
    "note_vi": "Câu chuyện thành công tiêu biểu của châu Phi: từ một hòn đảo độc canh mía đường nghèo khó khi độc lập (1968) đã đa dạng hóa thành trung tâm tài chính quốc tế, công nghệ và du lịch hạng sang đứng đầu châu Phi về chỉ số tự do kinh tế và quản trị (Ibrahim Index).",
    "note_en": "Africa's premier economic diversification success story: transformed from a low-income sugar-monoculture island at independence into a high-trust International Financial Centre, tech/BPO hub, and luxury resort destination."
  },
  "Mauritania": {
    "tier": "dev",
    "gdp_vi": "~10,9 tỷ USD (#144 thế giới)",
    "gdp_en": "~$10.9B (#144 globally)",
    "pc_vi": "~2.250 USD (PPP ~7.350 USD)",
    "pc_en": "~$2,250 (PPP ~$7,350)",
    "gr": "+5.1%",
    "sec": [
      43,
      35,
      22
    ],
    "main_vi": "Khai thác quặng sắt trên sa mạc Sahara (#2 châu Phi, vận chuyển bằng đoàn tàu dài nhất thế giới 2,5 km), khai thác vàng (mỏ Tasiast) & đồng, xuất khẩu khí hóa lỏng LNG mới (mỏ Greater Tortue Ahmeyim cùng Senegal), đánh bắt thủy sản (bạch tuộc), chăn nuôi lạc đà – gia súc",
    "main_en": "Iron ore mining in the Sahara (#2 in Africa, hauled by the world's longest 2.5-km freight train), gold (Tasiast mine) & copper, offshore LNG exports (Greater Tortue Ahmeyim with Senegal), Atlantic octopus & fish exports, livestock",
    "note_vi": "Sở hữu một trong những ngư trường giàu cá và bạch tuộc nhất bờ biển Tây Phi cùng trữ lượng quặng sắt khổng lồ vùng Zouérat; việc bắt đầu xuất khẩu khí LNG ngoài khơi và quy hoạch các siêu dự án hydro xanh từ nắng – gió sa mạc Sahara đang mở ra chu kỳ tăng trưởng mới.",
    "note_en": "Combines giant Saharan iron-ore and gold mines with some of West Africa's richest Atlantic fishing grounds; newly launched offshore LNG exports (Greater Tortue Ahmeyim) and planned Saharan green-hydrogen hubs are accelerating growth."
  },
  "Malta": {
    "tier": "adv",
    "gdp_vi": "~24,3 tỷ USD (#113 thế giới)",
    "gdp_en": "~$24.3B (#113 globally)",
    "pc_vi": "~43.200 USD (PPP ~69.500 USD)",
    "pc_en": "~$43,200 (PPP ~$69,500)",
    "gr": "+5.0%",
    "sec": [
      85,
      14,
      1
    ],
    "main_vi": "Thủ phủ cấp phép trò chơi trực tuyến châu Âu (iGaming - chiếm ~12% GDP), du lịch Địa Trung Hải (~3,5 triệu khách/năm), đăng ký tàu biển (#1 châu Âu, #6 thế giới), bảo dưỡng máy bay (Lufthansa Technik) & bán dẫn (STMicroelectronics), dược phẩm generic, tài chính",
    "main_en": "European iGaming & online entertainment hub (~12% of GDP), Mediterranean tourism (~3.5M visitors/year), ship registry (#1 in Europe, #6 globally), aviation MRO & semiconductors (STMicroelectronics), generic pharmaceuticals, financial services",
    "note_vi": "Nền kinh tế tăng trưởng nhanh nhất Liên minh châu Âu trong nhiều năm liền (~5%/năm), sở hữu đội tàu đăng ký cờ hàng hải lớn nhất châu Âu và là quốc gia EU đầu tiên xây dựng khung pháp lý hoàn chỉnh cho iGaming từ năm 2004.",
    "note_en": "Consistently the fastest-growing economy in the European Union (~5%), operating Europe's largest merchant ship registry and pioneering EU-regulated iGaming, aviation maintenance, and semiconductor packaging."
  },
  "Mali": {
    "tier": "low",
    "gdp_vi": "~21,6 tỷ USD (#118 thế giới)",
    "gdp_en": "~$21.6B (#118 globally)",
    "pc_vi": "~910 USD (PPP ~2.850 USD)",
    "pc_en": "~$910 (PPP ~$2,850)",
    "gr": "+3.9%",
    "sec": [
      43,
      21,
      36
    ],
    "main_vi": "Khai thác vàng (#3-4 châu Phi, chiếm >75% tổng kim ngạch xuất khẩu), khai thác lithium mới (siêu mỏ Goulamina đi vào sản xuất), trồng bông vải ('vàng trắng' đứng đầu Tây Phi), chăn nuôi gia súc & nông nghiệp dọc sông Niger (lúa gạo, hạt kê)",
    "main_en": "Gold mining (top-4 in Africa, >75% of total export earnings), lithium mining (Goulamina hard-rock lithium project), cotton production ('white gold' leader in West Africa), livestock & Niger River agriculture",
    "note_vi": "Nhà sản xuất vàng lớn thứ 3-4 châu Phi và vừa đưa siêu mỏ lithium cứng Goulamina (thuộc nhóm lớn nhất thế giới do Ganfeng Trung Quốc đầu tư) vào khai thác thương mại, dù kinh tế chịu áp lực từ bất ổn an ninh vùng Sahel và thiếu điện.",
    "note_en": "One of Africa's top four gold producers and a new global lithium supplier with the commissioning of the giant Goulamina spodumene mine, despite Sahelian security challenges and power grid deficits."
  },
  "Maldives": {
    "tier": "emg",
    "gdp_vi": "~7,2 tỷ USD",
    "gdp_en": "~$7.2B",
    "pc_vi": "~12.600 USD (PPP ~24.800 USD)",
    "pc_en": "~$12,600 (PPP ~$24,800)",
    "gr": "+5.0%",
    "sec": [
      81,
      14,
      5
    ],
    "main_vi": "Du lịch nghỉ dưỡng đảo san hô cao cấp (~30% GDP trực tiếp, >70% ngoại tệ), đánh bắt và chế biến cá ngừ, dịch vụ hàng hải",
    "main_en": "Luxury atoll resort tourism (~30% direct GDP, >70% FX earnings), skipjack & yellowfin tuna fisheries, maritime services",
    "note_vi": "Mô hình 'một hòn đảo – một khu nghỉ dưỡng' đem lại thu nhập bình quân đầu người cao nhất Nam Á, nhưng phải nhập khẩu gần như toàn bộ lương thực, nhiên liệu và chịu rủi ro nợ công hạ tầng lớn.",
    "note_en": "Its 'one-island, one-resort' luxury tourism model yields South Asia's highest per-capita income, but requires importing nearly all food and fuel amid elevated external debt."
  },
  "Malaysia": {
    "tier": "emg",
    "gdp_vi": "~440 tỷ USD (#36 thế giới)",
    "gdp_en": "~$440B (#36 globally)",
    "pc_vi": "~13.100 USD (PPP ~41.000 USD)",
    "pc_en": "~$13,100 (PPP ~$41,000)",
    "gr": "+5.1%",
    "sec": [
      53,
      38,
      9
    ],
    "main_vi": "Đóng gói & kiểm thử bán dẫn (chiếm ~13% toàn cầu), dầu khí & LNG (Petronas), dầu cọ, trung tâm dữ liệu AI (Johor), tài chính Hồi giáo",
    "main_en": "Semiconductor packaging & testing (~13% global share), oil & LNG (Petronas), palm oil, hyperscale data centers (Johor), Islamic finance",
    "note_vi": "Nằm dọc eo biển Malacca sầm uất, Malaysia là cứ điểm đóng gói chip bán dẫn (Penang) và trung tâm dữ liệu khu vực (Johor sát Singapore), đang tiến sát ngưỡng quốc gia thu nhập cao.",
    "note_en": "Straddling the Malacca Strait, Malaysia combines hydrocarbon wealth with a world-class semiconductor back-end hub in Penang and booming AI data center clusters in Johor."
  },
  "Malawi": {
    "tier": "low",
    "gdp_vi": "~11,8 tỷ USD (#142 thế giới)",
    "gdp_en": "~$11.8B (#142 globally)",
    "pc_vi": "~550 USD (PPP ~1.750 USD)",
    "pc_en": "~$550 (PPP ~$1,750)",
    "gr": "+2.4%",
    "sec": [
      53,
      18,
      29
    ],
    "main_vi": "Xuất khẩu thuốc lá (chiếm ~40-50% nguồn thu ngoại tệ xuất khẩu), trà (nhà sản xuất trà thương mại lâu đời nhất châu Phi), mía đường, đậu phộng & hạt mắc ca, đánh bắt cá hồ Malawi, thăm dò đất hiếm (Songwe Hill) & rutile (Kasiya - mỏ lớn nhất thế giới)",
    "main_en": "Tobacco exports (~40-50% of export earnings), tea (Africa's oldest commercial producer), sugar, macadamia nuts & groundnuts, Lake Malawi fisheries, rare earths (Songwe Hill) & Kasiya rutile-graphite exploration",
    "note_vi": "Một trong những nền kinh tế phụ thuộc vào cây thuốc lá nguyên liệu nhất thế giới (~80% dân số sống ở nông thôn); đang nỗ lực mở khóa trữ lượng khoáng sản chiến lược sau khi phát hiện siêu mỏ rutile (titan) và than chì tự nhiên Kasiya lớn nhất hành tinh.",
    "note_en": "Among the world's most tobacco-dependent agrarian economies; seeking to diversify via newly discovered world-class critical mineral deposits, notably the Kasiya project (the world's largest natural rutile and second-largest flake graphite resource)."
  },
  "Madagascar": {
    "tier": "low",
    "gdp_vi": "~17,4 tỷ USD (#130 thế giới)",
    "gdp_en": "~$17.4B (#130 globally)",
    "pc_vi": "~560 USD (PPP ~1.980 USD)",
    "pc_en": "~$560 (PPP ~$1,980)",
    "gr": "+4.4%",
    "sec": [
      51,
      25,
      24
    ],
    "main_vi": "Sản xuất & xuất khẩu vani tự nhiên (#1 thế giới - chiếm ~80% nguồn cung toàn cầu), khai thác niken & coban (mỏ Ambatovy), ilmenite/titan & than chì, đá quý (sapphire), đinh hương, dệt may xuất khẩu (khu chế xuất Antananarivo), du lịch sinh thái đặc hữu",
    "main_en": "Natural vanilla exports (#1 globally - ~80% of world supply), nickel & cobalt mining (Ambatovy), ilmenite/titanium & graphite, sapphires, cloves, duty-free apparel manufacturing, endemic wildlife eco-tourism",
    "note_vi": "Hòn đảo lớn thứ 4 thế giới thống trị tuyệt đối thị trường hương liệu vani tự nhiên toàn cầu (~80% thị phần, từng đắt ngang bạc theo trọng lượng) và sở hữu hệ động thực vật có 90% loài đặc hữu cùng các mỏ niken – coban – than chì quan trọng.",
    "note_en": "World's 4th-largest island commanding ~80% of the global natural vanilla market alongside major nickel-cobalt (Ambatovy), graphite, and sapphire deposits and a unique biosphere where ~90% of wildlife is endemic."
  },
  "Macedonia": {
    "tier": "dev",
    "gdp_vi": "~16,0 tỷ USD",
    "gdp_en": "~$16.0B",
    "pc_vi": "~8.800 USD (PPP ~25.500 USD)",
    "pc_en": "~$8,800 (PPP ~$25,500)",
    "gr": "+2.4%",
    "sec": [
      61,
      29,
      10
    ],
    "main_vi": "Linh kiện ô tô & dây cáp điện (khu công nghiệp TIDZ), luyện kim (ferronickel, thép), dệt may, rượu vang & nông sản, CNTT gia công",
    "main_en": "Auto parts & wiring harnesses (TIDZ free zones), metallurgy (ferronickel, steel), textiles, wine & agriculture, IT outsourcing",
    "note_vi": "Nền kinh tế Tây Balkan gắn chặt với chuỗi cung ứng công nghiệp ô tô Đức thông qua các khu phát triển công nghệ – công nghiệp (TIDZ); đang đẩy mạnh đàm phán gia nhập EU.",
    "note_en": "Western Balkan economy deeply integrated into German automotive supply chains via Technological Industrial Development Zones (TIDZs); pursuing EU accession reforms."
  },
  "Luxembourg": {
    "tier": "adv",
    "gdp_vi": "~91 tỷ USD",
    "gdp_en": "~$91B",
    "pc_vi": "~135.000 USD (PPP ~148.000 USD, #1 thế giới)",
    "pc_en": "~$135,000 (PPP ~$148,000, #1 globally)",
    "gr": "+1.3%",
    "sec": [
      88,
      11,
      1
    ],
    "main_vi": "Quản lý quỹ đầu tư (trung tâm lớn thứ 2 thế giới sau Mỹ), ngân hàng tư nhân, bảo hiểm, dịch vụ vệ tinh (SES), thép chất lượng cao (ArcelorMittal)",
    "main_en": "Investment fund management (#2 globally after the US), private banking, insurance, satellite communications (SES), specialty steel (ArcelorMittal)",
    "note_vi": "Quốc gia có GDP bình quân đầu người cao nhất thế giới; trung tâm quỹ đầu tư xuyên biên giới của châu Âu với khoảng 220.000 lao động Pháp, Bỉ, Đức đi về mỗi ngày.",
    "note_en": "World's highest GDP per capita nation; Europe's premier cross-border investment fund hub, relying on ~220,000 daily commuters from France, Belgium, and Germany."
  },
  "Lithuania": {
    "tier": "adv",
    "gdp_vi": "~82 tỷ USD",
    "gdp_en": "~$82B",
    "pc_vi": "~28.500 USD (PPP ~52.000 USD)",
    "pc_en": "~$28,500 (PPP ~$52,000)",
    "gr": "+2.4%",
    "sec": [
      68,
      28,
      4
    ],
    "main_vi": "Fintech & dịch vụ tài chính số, công nghệ laser & quang học, lọc dầu (Mažeikiai), chế biến gỗ & nội thất (cung ứng IKEA), logistics vận tải bộ",
    "main_en": "Fintech & digital financial services, laser & photonics tech, oil refining (Mažeikiai), wood processing & furniture (IKEA supplier), road freight logistics",
    "note_vi": "Nền kinh tế lớn nhất vùng Baltic, nổi lên thành trung tâm cấp phép Fintech hàng đầu EU và dẫn đầu thế giới về laser khoa học siêu ngắn.",
    "note_en": "Largest of the three Baltic economies, renowned as a leading EU fintech licensing hub and a global pioneer in ultrashort-pulse scientific lasers."
  },
  "Liechtenstein": {
    "tier": "adv",
    "gdp_vi": "~8,2 tỷ USD",
    "gdp_en": "~$8.2B",
    "pc_vi": "~205.000 USD",
    "pc_en": "~$205,000",
    "gr": "+1.8%",
    "sec": [
      55,
      44,
      1
    ],
    "main_vi": "Cơ khí chính xác & dụng cụ xây dựng (Hilti), nha khoa giả (Ivoclar), linh kiện ô tô (ThyssenKrupp Presta), ngân hàng tư nhân & quản lý gia sản",
    "main_en": "Precision engineering & construction tools (Hilti), dental prosthetics (Ivoclar), steering components (ThyssenKrupp Presta), private banking & wealth management",
    "note_vi": "Công quốc siêu nhỏ liên minh thuế quan và dùng đồng franc (CHF) với Thụy Sĩ nhưng thuộc EEA; số việc làm cao hơn tổng dân số nhờ tỷ lệ công nghiệp chế tạo công nghệ cao tới 44% GDP.",
    "note_en": "Alpine microstate in a customs and currency union (CHF) with Switzerland while inside the EEA; has more jobs than residents thanks to a massive 44% high-tech manufacturing share."
  },
  "Libya": {
    "tier": "dev",
    "gdp_vi": "~45 tỷ USD",
    "gdp_en": "~$45B",
    "pc_vi": "~6.500 USD (PPP ~26.000 USD)",
    "pc_en": "~$6,500 (PPP ~$26,000)",
    "gr": "+6.5%",
    "sec": [
      35,
      62,
      3
    ],
    "main_vi": "Khai thác dầu thô ngọt nhẹ (Light Sweet Crude), khí đốt tự nhiên (đường ống Greenstream sang Ý), lọc hóa dầu, luyện thép (Misrata)",
    "main_en": "Light sweet crude oil extraction, natural gas (Greenstream pipeline to Italy), petrochemicals & refining, steelmaking (Misrata)",
    "note_vi": "Sở hữu trữ lượng dầu mỏ xác minh lớn nhất châu Phi (~48 tỷ thùng), song sản lượng và ngân sách thường xuyên bị gián đoạn bởi sự phân열 chính trị giữa chính phủ Tripoli và miền Đông.",
    "note_en": "Holds Africa's largest proven oil reserves (~48 billion barrels), though output and central bank revenues remain vulnerable to political division between rival eastern and western authorities."
  },
  "Liberia": {
    "tier": "low",
    "gdp_vi": "~4,8 tỷ USD",
    "gdp_en": "~$4.8B",
    "pc_vi": "~860 USD (PPP ~1.900 USD)",
    "pc_en": "~$860 (PPP ~$1,900)",
    "gr": "+5.1%",
    "sec": [
      42,
      23,
      35
    ],
    "main_vi": "Quặng sắt (ArcelorMittal), cao su tự nhiên (đồn điền Firestone), khai thác vàng & kim cương, dầu cọ, đăng ký tàu biển quốc tế (cờ thuận tiện #1 thế giới)",
    "main_en": "Iron ore (ArcelorMittal), natural rubber (Firestone plantations), gold & diamond mining, palm oil, international ship registry (#1 flag of convenience)",
    "note_vi": "Nền kinh tế Tây Phi sử dụng song song đồng USD và đô la Liberia; sở hữu đội tàu đăng ký treo cờ lớn nhất thế giới tính theo trọng tải và giàu tài nguyên sắt, cao su.",
    "note_en": "Dual-currency (USD/LRD) West African economy; operates the world's largest shipping registry by tonnage while relying domestically on iron ore and rubber exports."
  },
  "Lesotho": {
    "tier": "low",
    "gdp_vi": "~2,4 tỷ USD",
    "gdp_en": "~$2.4B",
    "pc_vi": "~1.050 USD (PPP ~3.000 USD)",
    "pc_en": "~$1,050 (PPP ~$3,000)",
    "gr": "+2.3%",
    "sec": [
      59,
      35,
      6
    ],
    "main_vi": "Xuất khẩu nước sạch sang Nam Phi (Dự án LHWP), kim cương chất lượng cao (mỏ Letseng), dệt may xuất khẩu sang Mỹ (AGOA), kiều hối",
    "main_en": "Water & hydro exports to South Africa (LHWP), high-value gem diamonds (Letseng mine), apparel exports to the US (AGOA), migrant remittances",
    "note_vi": "Vương quốc vùng cao nằm trọn trong lòng Nam Phi; đồng Loti neo 1:1 với đồng Rand và nguồn thu ngân sách phụ thuộc lớn vào Liên minh Thuế quan miền Nam châu Phi (SACU) cùng việc bán nước cho tỉnh Gauteng.",
    "note_en": "High-altitude kingdom entirely enclaved within South Africa; pegs the loti 1:1 to the rand and relies heavily on SACU customs revenues and water sales to Johannesburg's Gauteng province."
  },
  "Lebanon": {
    "tier": "dev",
    "gdp_vi": "~22 tỷ USD (giảm hơn 50% so với trước khủng hoảng 2019)",
    "gdp_en": "~$22B (down >50% from pre-2019 peak)",
    "pc_vi": "~3.800 USD (PPP ~11.800 USD)",
    "pc_en": "~$3,800 (PPP ~$11,800)",
    "gr": "-5.0%",
    "sec": [
      78,
      17,
      5
    ],
    "main_vi": "Kiều hối từ cộng đồng hải ngoại (~6–7 tỷ USD/năm, >30% GDP), dịch vụ thương mại – ẩm thực – du lịch, chế biến thực phẩm & rượu vang, trang sức",
    "main_en": "Diaspora remittances (~$6–7B/yr, >30% of GDP), hospitality & retail services, agro-food & wine processing, jewelry",
    "note_vi": "Từng được gọi là 'Thụy Sĩ của Trung Đông', Lebanon rơi vào cuộc sụp đổ ngân hàng – tiền tệ tồi tệ từ năm 2019 (đồng Bảng mất hơn 98% giá trị), vận hành bằng nền kinh tế tiền mặt USD và chịu thêm tàn phá từ chiến sự 2024.",
    "note_en": "Once the banking hub of the Levant, Lebanon has suffered a historic financial-system collapse since 2019 (>98% currency depreciation), operating as a cash-dollarized economy heavily reliant on diaspora remittances."
  },
  "Latvia": {
    "tier": "adv",
    "gdp_vi": "~45 tỷ USD",
    "gdp_en": "~$45B",
    "pc_vi": "~24.200 USD (PPP ~43.500 USD)",
    "pc_en": "~$24,200 (PPP ~$43,500)",
    "gr": "+1.2%",
    "sec": [
      73,
      22,
      5
    ],
    "main_vi": "Lâm nghiệp & chế biến gỗ xuất khẩu, dược phẩm (Grindeks), thiết bị mạng không dây (MikroTik), trung tâm hàng không Baltic (airBaltic), CNTT",
    "main_en": "Forestry & timber products, pharmaceuticals (Grindeks), wireless networking hardware (MikroTik), Baltic aviation hub (airBaltic), IT services",
    "note_vi": "Rừng bao phủ hơn 50% diện tích giúp gỗ trở thành mặt hàng xuất khẩu chủ lực; thủ đô Riga là đầu mối hàng không và đường sắt tốc độ cao Rail Baltica kết nối vùng Baltic với EU.",
    "note_en": "With forests covering over half its territory, timber leads exports; Riga serves as the primary aviation and Rail Baltica multimodal hub of the Baltic states."
  },
  "Laos": {
    "tier": "dev",
    "gdp_vi": "~15,2 tỷ USD",
    "gdp_en": "~$15.2B",
    "pc_vi": "~1.970 USD (PPP ~9.700 USD)",
    "pc_en": "~$1,970 (PPP ~$9,700)",
    "gr": "+4.1%",
    "sec": [
      43,
      39,
      18
    ],
    "main_vi": "Xuất khẩu thủy điện ('cục pin của Đông Nam Á'), khai khoáng (vàng, đồng, kali), vận tải đường sắt Lào – Trung, nông lâm sản (sắn, cao su, bột giấy)",
    "main_en": "Hydropower exports ('Battery of Southeast Asia'), mining (gold, copper, potash), Laos-China Railway logistics, agri-forestry (cassava, rubber, pulp)",
    "note_vi": "Đầu tư lớn vào các đập thủy điện trên sông Mê Kông và đường sắt cao tốc nối Côn Minh giúp tăng xuất khẩu, nhưng gánh nặng nợ công ngoại tệ quá lớn khiến đồng Kip mất giá và lạm phát kéo dài.",
    "note_en": "Mekong hydropower dams and the Laos-China Railway drive export growth, yet massive external debt service obligations have triggered severe Kip depreciation and inflation."
  },
  "Kyrgyzstan": {
    "tier": "dev",
    "gdp_vi": "~15,8 tỷ USD",
    "gdp_en": "~$15.8B",
    "pc_vi": "~2.200 USD (PPP ~7.700 USD)",
    "pc_en": "~$2,200 (PPP ~$7,700)",
    "gr": "+6.5%",
    "sec": [
      54,
      28,
      18
    ],
    "main_vi": "Khai thác vàng (mỏ Kumtor trên núi cao), kiều hối từ Nga (~25–30% GDP), thương mại trung chuyển tái xuất, thủy điện, chăn nuôi thảo nguyên",
    "main_en": "High-altitude gold mining (Kumtor), remittances from Russia (~25–30% of GDP), re-export transit trade, hydropower, pastoral livestock",
    "note_vi": "Nền kinh tế nhỏ trên dãy Thiên Sơn phụ thuộc lớn vào mỏ vàng Kumtor, dòng kiều hối từ lao động di cư và vai trò trung chuyển hàng hóa trong Liên minh Kinh tế Á – Âu (EAEU).",
    "note_en": "Mountainous economy reliant on the Kumtor gold mine, migrant worker remittances from Russia, and booming Eurasian Economic Union (EAEU) re-export logistics."
  },
  "Kuwait": {
    "tier": "adv",
    "gdp_vi": "~162 tỷ USD",
    "gdp_en": "~$162B",
    "pc_vi": "~33.300 USD (PPP ~56.600 USD)",
    "pc_en": "~$33,300 (PPP ~$56,600)",
    "gr": "-2.0%",
    "sec": [
      48,
      52,
      0
    ],
    "main_vi": "Khai thác dầu thô (~90% xuất khẩu, trữ lượng #6 thế giới), lọc hóa dầu (nhà máy lọc dầu Al-Zour), đầu tư tài chính quốc tế (KIA)",
    "main_en": "Crude oil extraction (~90% of exports, #6 global reserves), oil refining (Al-Zour mega-refinery), sovereign financial investments (KIA)",
    "note_vi": "Sở hữu quỹ đầu tư quốc gia lâu đời nhất thế giới (KIA, thành lập 1953, ~1.000 tỷ USD), nhưng tốc độ đa dạng hóa kinh tế chậm hơn UAE và Ả Rập Xê Út do bế tắc chính trị nội bộ kéo dài.",
    "note_en": "Home to the world's oldest sovereign wealth fund (KIA, ~$1T), yet remains overwhelmingly oil-reliant (~90% of state revenues) due to slower structural diversification than Gulf peers."
  },
  "Kosovo": {
    "tier": "dev",
    "gdp_vi": "~11,3 tỷ USD",
    "gdp_en": "~$11.3B",
    "pc_vi": "~6.400 USD (PPP ~17.500 USD)",
    "pc_en": "~$6,400 (PPP ~$17,500)",
    "gr": "+4.0%",
    "sec": [
      64,
      28,
      8
    ],
    "main_vi": "Khai khoáng (chì, kẽm, niken tại tổ hợp Trepča), nhiệt điện than non (lignite), chế biến thực phẩm, gia công CNTT (BPO), xây dựng từ kiều hối",
    "main_en": "Base metal mining (lead, zinc, nickel at Trepča), lignite coal power, food processing, IT/BPO services, diaspora-funded construction",
    "note_vi": "Đơn phương sử dụng đồng Euro làm tiền tệ hợp pháp và có dân số trẻ nhất châu Âu; tiêu dùng nội địa được nâng đỡ mạnh mẽ bởi kiều hối (~15% GDP) từ cộng đồng người Kosovo tại Đức và Thụy Sĩ.",
    "note_en": "Unilaterally euroized economy with Europe's youngest population; domestic consumption and real estate are heavily buoyed by diaspora remittances (~15% of GDP) from Germany and Switzerland."
  },
  "Kiribati": {
    "tier": "low",
    "gdp_vi": "~0,31 tỷ USD",
    "gdp_en": "~$0.31B",
    "pc_vi": "~2.300 USD (PPP ~3.600 USD)",
    "pc_en": "~$2,300 (PPP ~$3,600)",
    "gr": "+5.3%",
    "sec": [
      68,
      9,
      23
    ],
    "main_vi": "Bán giấy phép đánh bắt cá ngừ vùng đặc quyền kinh tế (EEZ), cùi dừa khô (copra), kiều hối từ thủy thủ và lao động thời vụ, quỹ đầu tư quốc gia RERF",
    "main_en": "EEZ tuna fishing license fees, copra & coconut oil, seafarer & seasonal worker remittances, Revenue Equalization Reserve Fund (RERF) returns",
    "note_vi": "Quốc đảo san hô trải rộng trên vùng đặc quyền kinh tế biển 3,5 triệu km² (tương đương Ấn Độ); phí cấp phép đánh bắt cá ngừ đóng góp hơn 70% thu ngân sách chính phủ.",
    "note_en": "Atoll nation spanning a 3.5 million km² ocean EEZ (roughly the size of India); pelagic tuna fishing access fees generate over 70% of government revenue."
  },
  "Kenya": {
    "tier": "dev",
    "gdp_vi": "~116 tỷ USD",
    "gdp_en": "~$116B",
    "pc_vi": "~2.100 USD (PPP ~6.900 USD)",
    "pc_en": "~$2,100 (PPP ~$6,900)",
    "gr": "+5.0%",
    "sec": [
      55,
      17,
      28
    ],
    "main_vi": "Fintech & thanh toán di động (M-Pesa), xuất khẩu trà (#1 thế giới) & hoa cắt cành sang châu Âu, du lịch safari, dịch vụ cảng biển (Mombasa), điện địa nhiệt",
    "main_en": "Fintech & mobile money (M-Pesa), black tea (#1 exporter) & cut-flower exports to Europe, safari tourism, Mombasa port logistics, geothermal power",
    "note_vi": "Đầu tàu tài chính, công nghệ ('Silicon Savannah') và logistics của Đông Phi; hơn 90% sản lượng điện đến từ nguồn tái tạo, đặc biệt là địa nhiệt dọc Thung lũng Tách giãn Lớn.",
    "note_en": "East Africa's commercial, logistics, and tech ('Silicon Savannah') hub; generates over 90% of its electricity from renewables, led by Great Rift Valley geothermal plants."
  },
  "Kazakhstan": {
    "tier": "emg",
    "gdp_vi": "~292 tỷ USD (#49 thế giới, #1 Trung Á)",
    "gdp_en": "~$292B (#49 globally, #1 in Central Asia)",
    "pc_vi": "~14.100 USD (PPP ~41.300 USD)",
    "pc_en": "~$14,100 (PPP ~$41,300)",
    "gr": "+4.4%",
    "sec": [
      56,
      39,
      5
    ],
    "main_vi": "Dầu thô & khí đốt (mỏ Tengiz, Kashagan), uranium (#1 thế giới, ~40% nguồn cung toàn cầu), đồng, ferroalloy, lúa mì, vận tải quá cảnh Á – Âu",
    "main_en": "Crude oil & gas (Tengiz, Kashagan fields), uranium (#1 globally, ~40% supply), copper, ferroalloys, wheat, Eurasian transit logistics",
    "note_vi": "Nền kinh tế lớn nhất Trung Á (lớn hơn cả 4 nước còn lại cộng lại); giàu dầu mỏ và nắm giữ 40% sản lượng uranium hạt nhân thế giới, đồng thời là trục chính của Hành lang Trung tâm nối Trung Quốc – châu Âu.",
    "note_en": "Central Asia's economic giant—larger than the other four regional states combined—controlling ~40% of global uranium supply and anchoring the Trans-Caspian Middle Corridor."
  },
  "Jordan": {
    "tier": "dev",
    "gdp_vi": "~53 tỷ USD",
    "gdp_en": "~$53B",
    "pc_vi": "~4.700 USD (PPP ~10.800 USD)",
    "pc_en": "~$4,700 (PPP ~$10,800)",
    "gr": "+2.4%",
    "sec": [
      67,
      28,
      5
    ],
    "main_vi": "Khai thác kali (potash) & phốt phát ở Biển Chết, dược phẩm xuất khẩu, du lịch di sản (Petra, Wadi Rum), dịch vụ CNTT & y tế, kiều hối",
    "main_en": "Dead Sea potash & phosphate fertilizers, pharmaceuticals, heritage tourism (Petra, Wadi Rum), regional medical & IT services, remittances",
    "note_vi": "ốc đảo ổn định nhưng nghèo dầu mỏ và thuộc nhóm thiếu nước ngọt trầm trọng nhất thế giới; kinh tế dựa vào du lịch, kiều hối từ vùng Vịnh và hỗ trợ tài chính từ Mỹ, IMF để gánh hàng triệu người tị nạn khu vực.",
    "note_en": "Resource-poor and one of the most water-scarce countries on Earth; relies on Dead Sea minerals, tourism, Gulf remittances, and Western/IMF financial support while hosting large refugee populations."
  },
  "Japan": {
    "tier": "adv",
    "gdp_vi": "~4.070 tỷ USD (#4 thế giới)",
    "gdp_en": "~$4.07T (#4 globally)",
    "pc_vi": "~32.850 USD (PPP ~54.200 USD)",
    "pc_en": "~$32,850 (PPP ~$54,200)",
    "gr": "+0.8%",
    "sec": [
      71,
      28,
      1
    ],
    "main_vi": "Ô tô & xe hybrid (Toyota, Honda), thiết bị bán dẫn & vật liệu hóa chất tinh khiết, robot công nghiệp, cơ khí chính xác, tài chính",
    "main_en": "Automobiles & hybrids, semiconductor equipment & specialty chemicals, industrial robotics, precision machinery, financial services",
    "note_vi": "Cường quốc công nghệ và chủ nợ ròng lớn nhất thế giới; thiếu tài nguyên thiên nhiên nên sống dựa vào nhập khẩu năng lượng qua Biển Đông và xuất khẩu thiết bị công nghiệp giá trị gia tăng cao.",
    "note_en": "Resource-poor island industrial powerhouse and the world's largest net creditor nation; critically reliant on maritime energy imports and high-precision manufacturing exports."
  },
  "Jamaica": {
    "tier": "dev",
    "gdp_vi": "~20,6 tỷ USD",
    "gdp_en": "~$20.6B",
    "pc_vi": "~7.300 USD (PPP ~13.500 USD)",
    "pc_en": "~$7,300 (PPP ~$13,500)",
    "gr": "+1.8%",
    "sec": [
      71,
      20,
      9
    ],
    "main_vi": "Du lịch nghỉ dưỡng & tàu biển (Montego Bay, Ocho Rios), khai thác bauxite & luyện alumina, kiều hối, gia công quy trình kinh doanh (BPO), rượu rum & cà phê Blue Mountain",
    "main_en": "Resort & cruise tourism (Montego Bay, Ocho Rios), bauxite & alumina mining, remittances, BPO call centers, rum & Blue Mountain coffee",
    "note_vi": "Điểm sáng kỷ luật tài khóa tại vùng Caribe khi cắt giảm tỷ lệ nợ công từ hơn 140% GDP xuống dưới 75% GDP chỉ trong một thập kỷ nhờ cải cách cơ cấu sâu rộng.",
    "note_en": "A fiscal turnaround model in the Caribbean, having slashed public debt from over 140% of GDP to below 75% over the past decade through strict primary surpluses."
  },
  "Italy": {
    "tier": "adv",
    "gdp_vi": "~2.380 tỷ USD (#8 thế giới)",
    "gdp_en": "~$2.38T (#8 globally)",
    "pc_vi": "~40.300 USD (PPP ~60.000 USD)",
    "pc_en": "~$40,300 (PPP ~$60,000)",
    "gr": "+0.7%",
    "sec": [
      73,
      25,
      2
    ],
    "main_vi": "Máy móc cơ khí tự động hóa, siêu xe & ô tô (Ferrari, Stellantis), thời trang & hàng xa xỉ (Milan), dược phẩm, chế biến thực phẩm – rượu vang, du lịch di sản",
    "main_en": "Industrial machinery & automation, luxury & mass automotive (Ferrari, Stellantis), high fashion & luxury goods, pharmaceuticals, food & wine, heritage tourism",
    "note_vi": "Nền công nghiệp chế tạo lớn thứ 2 EU dựa trên mạng lưới cụm doanh nghiệp vừa và nhỏ miền Bắc giàu có, nhưng tăng trưởng dài hạn bị kìm hãm bởi nợ công cao (~137% GDP), già hóa dân số và khoảng cách Bắc – Nam.",
    "note_en": "The EU's second-largest manufacturing powerhouse anchored by specialized northern SME clusters, balanced against high public debt (~137% of GDP), rapid aging, and a persistent North-South divide."
  },
  "Israel": {
    "tier": "adv",
    "gdp_vi": "~530 tỷ USD (#29 thế giới)",
    "gdp_en": "~$530B (#29 globally)",
    "pc_vi": "~53.400 USD (PPP ~55.500 USD)",
    "pc_en": "~$53,400 (PPP ~$55,500)",
    "gr": "+1.5%",
    "sec": [
      72,
      27,
      1
    ],
    "main_vi": "Công nghệ cao & an ninh mạng ('Silicon Wadi', ~50% xuất khẩu), công nghiệp quốc phòng & hàng không vũ trụ, thiết kế chip, dược phẩm, khí đốt Đông Địa Trung Hải, chế tác kim cương",
    "main_en": "High-tech software & cybersecurity ('Silicon Wadi', ~50% of exports), defense & aerospace systems, chip R&D, pharmaceuticals, offshore gas, diamonds",
    "note_vi": "'Quốc gia khởi nghiệp' có tỷ lệ chi tiêu R&D trên GDP cao nhất thế giới (>5,5%) và tự chủ nước ngọt nhờ khử mặn; tuy nhiên xung đột kéo dài từ cuối 2023 làm tăng mạnh chi phí quốc phòng và thiếu hụt lao động.",
    "note_en": "'Start-Up Nation' leading the world in R&D intensity (>5.5% of GDP) and seawater desalination, though protracted multi-front conflict since late 2023 has strained fiscal deficits and labor supply."
  },
  "Palestine": {
    "tier": "dev",
    "gdp_vi": "~14 tỷ USD (sụt giảm mạnh do chiến sự Gaza)",
    "gdp_en": "~$14B (severely contracted by Gaza war)",
    "pc_vi": "~2.600 USD (PPP ~5.400 USD)",
    "pc_en": "~$2,600 (PPP ~$5,400)",
    "gr": "-20.0%",
    "sec": [
      68,
      24,
      8
    ],
    "main_vi": "Dịch vụ thương mại & hành chính công, xây dựng, nông nghiệp (ô liu, cam quýt, rau quả), chế tác đá vôi, viện trợ quốc tế & kiều hối",
    "main_en": "Retail & public services, construction, agriculture (olives, citrus, vegetables), stone & marble cutting, international aid & remittances",
    "note_vi": "Kinh tế bị chia cắt giữa Bờ Tây và Dải Gaza, không có đồng tiền riêng (dùng đồng Shekel Israel, Dinar Jordan) và phụ thuộc vào Israel về thu hộ thuế quan; chiến sự từ 2023 đã hủy hoại hầu hết hạ tầng của Gaza.",
    "note_en": "Fragmented between the West Bank and Gaza without a sovereign currency, dependent on Israeli-collected clearance revenues; post-2023 war has devastated Gaza's economy and halted cross-border labor permits."
  },
  "Ireland": {
    "tier": "adv",
    "gdp_vi": "~560 tỷ USD (#26 thế giới)",
    "gdp_en": "~$560B (#26 globally)",
    "pc_vi": "~106.000 USD (PPP ~133.000 USD)",
    "pc_en": "~$106,000 (PPP ~$133,000)",
    "gr": "+1.5%",
    "sec": [
      59,
      40,
      1
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Pfizer, Eli Lilly), trụ sở công nghệ châu Âu (Apple, Google, Meta, Microsoft), cho thuê máy bay (>50% đội bay thế giới), thực phẩm & bơ sữa",
    "main_en": "Biopharmaceuticals & medical devices (Pfizer, Eli Lilly), European Big Tech headquarters (Apple, Google, Meta, Microsoft), aircraft leasing (>50% global share), dairy & agri-food",
    "note_vi": "Trung tâm châu Âu của các tập đoàn công nghệ và dược phẩm Mỹ giúp tạo thặng dư ngân sách lớn; chỉ số GNI* thường được dùng thay GDP để phản ánh thực chất thu nhập nội địa sau khi loại trừ lợi nhuận chuyển giá sở hữu trí tuệ.",
    "note_en": "European base for US tech and pharma giants generating massive corporate tax windfalls; economists track Modified GNI (GNI*) alongside headline GDP to filter out multinational IP accounting distortions."
  },
  "Iraq": {
    "tier": "emg",
    "gdp_vi": "~264 tỷ USD (#51 thế giới)",
    "gdp_en": "~$264B (#51 globally)",
    "pc_vi": "~5.950 USD (PPP ~14.400 USD)",
    "pc_en": "~$5,950 (PPP ~$14,400)",
    "gr": "+1.4%",
    "sec": [
      46,
      51,
      3
    ],
    "main_vi": "Khai thác và xuất khẩu dầu thô (#2 trong OPEC, trữ lượng #5 thế giới), lọc dầu, phân bón, nông nghiệp lưu vực Lưỡng Hà (chà là, lúa mì)",
    "main_en": "Crude oil production & exports (#2 in OPEC, #5 global reserves), oil refining, fertilizers, Mesopotamian agriculture (dates, wheat)",
    "note_vi": "Một trong những nền kinh tế phụ thuộc dầu mỏ nhất hành tinh: dầu thô chiếm hơn 95% nguồn thu ngân sách nhà nước và 98% ngoại tệ xuất khẩu, chủ yếu đi qua cụm cảng hẹp Basra ở đầu vịnh Ba Tư.",
    "note_en": "Among the world's most oil-dependent states—crude accounts for >95% of government revenue and 98% of exports, funneled almost entirely through the narrow Basra port outlet on the Persian Gulf."
  },
  "Iran": {
    "tier": "emg",
    "gdp_vi": "~434 tỷ USD (#36 thế giới, ~1.700 tỷ USD PPP)",
    "gdp_en": "~$434B (#36 globally, ~$1.70T PPP)",
    "pc_vi": "~4.800 USD (PPP ~19.600 USD)",
    "pc_en": "~$4,800 (PPP ~$19,600)",
    "gr": "+3.3%",
    "sec": [
      51,
      36,
      13
    ],
    "main_vi": "Dầu mỏ & khí đốt (trữ lượng khí #2, dầu #4 thế giới), hóa dầu, luyện thép, ô tô nội địa, công nghiệp quốc phòng (UAV/tên lửa), nghệ tây & hạt dẻ cười",
    "main_en": "Oil & gas (#2 gas, #4 oil reserves globally), petrochemicals, steel & metallurgy, domestic automotive, defense manufacturing, saffron & pistachios",
    "note_vi": "Sở hữu nền công nghiệp – khoa học tự chủ sâu rộng do chịu cấm vận của Mỹ suốt nhiều thập kỷ; lạm phát luôn ở mức ~35–45%/năm và xuất khẩu dầu thô phụ thuộc gần như hoàn toàn vào khách hàng Trung Quốc.",
    "note_en": "Sanctions-hardened economy with deep domestic industrial capacity and massive hydrocarbon reserves, yet plagued by chronic 35–45% inflation and reliant on discounted oil sales to China."
  },
  "Indonesia": {
    "tier": "emg",
    "gdp_vi": "~1.400 tỷ USD (#16 thế giới, #1 Đông Nam Á)",
    "gdp_en": "~$1.40T (#16 globally, #1 in ASEAN)",
    "pc_vi": "~4.960 USD (PPP ~16.800 USD)",
    "pc_en": "~$4,960 (PPP ~$16,800)",
    "gr": "+5.0%",
    "sec": [
      45,
      42,
      13
    ],
    "main_vi": "Niken & chuỗi cung ứng pin xe điện (nắm >50% nguồn cung niken thế giới), than đá, dầu cọ (#1 toàn cầu), khí LNG, chế biến thực phẩm, dệt may",
    "main_en": "Nickel & EV battery processing (>50% global nickel supply), thermal coal, palm oil (#1 globally), LNG, food processing, textiles",
    "note_vi": "Nền kinh tế lớn nhất Đông Nam Á thực thi chính sách 'hạ nguồn hóa tài nguyên' (cấm xuất khẩu quặng thô niken, bauxite) để ép dòng vốn ngoại xây nhà máy luyện kim và pin ngay trong nước.",
    "note_en": "Southeast Asia's largest economy, leveraging resource nationalism ('downstreaming' bans on raw nickel and bauxite exports) to capture domestic smelting and EV battery investment."
  },
  "India": {
    "tier": "dev",
    "gdp_vi": "~3.900 tỷ USD (#5 thế giới, #3 PPP)",
    "gdp_en": "~$3.90T (#5 globally, #3 PPP)",
    "pc_vi": "~2.730 USD (PPP ~11.100 USD)",
    "pc_en": "~$2,730 (PPP ~$11,100)",
    "gr": "+6.8%",
    "sec": [
      55,
      28,
      17
    ],
    "main_vi": "Dịch vụ CNTT & phần mềm (Bangalore, Hyderabad), dược phẩm generic (#1 thế giới), lọc hóa dầu, lắp ráp điện tử (iPhone), hóa chất, nông sản",
    "main_en": "IT services & software outsourcing, generic pharmaceuticals (#1 globally), oil refining, electronics assembly, chemicals, agriculture",
    "note_vi": "Nền kinh tế lớn tăng trưởng nhanh nhất thế giới nhờ lợi thế dân số vàng, hạ tầng số công cộng (UPI/Aadhaar) và đầu tư công kỷ lục vào đường bộ, đường sắt và sản xuất nội địa ('Make in India').",
    "note_en": "World's fastest-growing major economy, propelled by demographic dividends, world-leading digital public infrastructure (UPI), IT services exports, and a massive public capex push."
  },
  "Iceland": {
    "tier": "adv",
    "gdp_vi": "~33 tỷ USD",
    "gdp_en": "~$33B",
    "pc_vi": "~84.500 USD (PPP ~76.000 USD)",
    "pc_en": "~$84,500 (PPP ~$76,000)",
    "gr": "+1.6%",
    "sec": [
      74,
      21,
      5
    ],
    "main_vi": "Du lịch sinh thái – địa nhiệt, đánh bắt & chế biến thủy sản công nghệ cao, luyện nhôm xuất khẩu (dùng 100% điện tái tạo), trung tâm dữ liệu, công nghệ sinh học",
    "main_en": "Nature & geothermal tourism, high-tech marine fisheries & processing, green aluminum smelting, data centers, biotechnology",
    "note_vi": "Vận hành 100% lưới điện và sưởi ấm từ thủy điện và địa nhiệt giá rẻ, thu hút các nhà máy luyện nhôm tiêu thụ nhiều điện và các trung tâm dữ liệu AI xanh.",
    "note_en": "Powered 100% by low-cost hydro and geothermal energy for electricity and district heating, making it a magnet for energy-intensive green aluminum smelters and data centers."
  },
  "Hungary": {
    "tier": "adv",
    "gdp_vi": "~228 tỷ USD (#52 thế giới)",
    "gdp_en": "~$228B (#52 globally)",
    "pc_vi": "~23.800 USD (PPP ~47.500 USD)",
    "pc_en": "~$23,800 (PPP ~$47,500)",
    "gr": "+1.5%",
    "sec": [
      65,
      31,
      4
    ],
    "main_vi": "Sản xuất ô tô (Audi, Mercedes, BMW, BYD) & pin xe điện (CATL, Samsung SDI), điện tử, dược phẩm (Gedeon Richter), nông sản thực phẩm",
    "main_en": "Automotive manufacturing (Audi, Mercedes, BMW, BYD) & EV batteries (CATL, Samsung SDI), electronics, pharmaceuticals (Gedeon Richter), agri-food",
    "note_vi": "Cầu nối sản xuất công nghiệp Đông – Tây tại Trung Âu khi kết hợp các nhà máy lắp ráp xe sang của Đức với chuỗi cung ứng pin và xe điện khổng lồ từ Trung Quốc và Hàn Quốc.",
    "note_en": "Central Europe's East-West industrial bridge, pairing flagship German luxury auto plants with massive Chinese and South Korean EV battery and assembly investments."
  },
  "Honduras": {
    "tier": "dev",
    "gdp_vi": "~37 tỷ USD",
    "gdp_en": "~$37B",
    "pc_vi": "~3.400 USD (PPP ~7.500 USD)",
    "pc_en": "~$3,400 (PPP ~$7,500)",
    "gr": "+3.6%",
    "sec": [
      59,
      28,
      13
    ],
    "main_vi": "Dệt may gia công xuất khẩu (maquiladora tại San Pedro Sula), cà phê (nhà xuất khẩu hàng đầu Trung Mỹ), chuối & dầu cọ, nuôi tôm, kiều hối từ Mỹ",
    "main_en": "Apparel & wiring harness assembly (maquiladoras in San Pedro Sula), coffee (top Central American exporter), bananas & palm oil, shrimp, US remittances",
    "note_vi": "Kiều hối từ người lao động tại Mỹ chiếm hơn 25% GDP — nguồn ngoại tệ lớn nhất đất nước — song hành cùng ngành dệt may xuất khẩu qua cảng nước sâu Puerto Cortés.",
    "note_en": "Remittances from the US diaspora exceed 25% of GDP—the single largest source of foreign exchange—alongside textile maquiladora exports shipped via Puerto Cortés."
  },
  "Haiti": {
    "tier": "low",
    "gdp_vi": "~24 tỷ USD",
    "gdp_en": "~$24B",
    "pc_vi": "~2.000 USD (PPP ~3.100 USD)",
    "pc_en": "~$2,000 (PPP ~$3,100)",
    "gr": "-3.0%",
    "sec": [
      55,
      25,
      20
    ],
    "main_vi": "Kiều hối từ hải ngoại (>20% GDP), gia công hàng may mặc xuất khẩu sang Mỹ (đạo luật HOPE/HELP), nông nghiệp tự cung tự cấp (xoài, cà phê, tinh dầu cỏ hương bài)",
    "main_en": "Diaspora remittances (>20% of GDP), apparel assembly for the US market (HOPE/HELP trade preference), subsistence agriculture (mangoes, coffee, vetiver oil)",
    "note_vi": "Quốc gia có thu nhập thấp nhất Tây Bán Cầu; nền kinh tế suy thoái nhiều năm liên tiếp do khủng hoảng bạo lực băng đảng kiểm soát thủ đô Port-au-Prince và thiên tai.",
    "note_en": "The poorest nation in the Western Hemisphere; suffering multi-year economic contractions driven by acute gang violence paralyzing Port-au-Prince and frequent natural disasters."
  },
  "Guyana": {
    "tier": "emg",
    "gdp_vi": "~24,8 tỷ USD",
    "gdp_en": "~$24.8B",
    "pc_vi": "~30.500 USD (PPP ~61.000 USD)",
    "pc_en": "~$30,500 (PPP ~$61,000)",
    "gr": "+33.0%",
    "sec": [
      22,
      72,
      6
    ],
    "main_vi": "Khai thác dầu khí ngoài khơi (lô Stabroek – ExxonMobil), khai thác vàng & bauxite, gạo & đường mía, lâm nghiệp bền vững",
    "main_en": "Offshore oil & gas extraction (Stabroek block led by ExxonMobil), gold & bauxite mining, rice & sugar, sustainable forestry",
    "note_vi": "Nền kinh tế tăng trưởng nhanh nhất thế giới từ năm 2020 nhờ phát hiện hơn 11 tỷ thùng dầu ngoài khơi cho dân số chỉ ~815.000 người, đưa thu nhập bình quân đầu người bứt phá ngoạn mục.",
    "note_en": "The world's fastest-growing economy since 2020 following the discovery of over 11 billion barrels of offshore crude for a population of just ~815,000, transforming per-capita income overnight."
  },
  "Guinea-Bissau": {
    "tier": "low",
    "gdp_vi": "~2,2 tỷ USD",
    "gdp_en": "~$2.2B",
    "pc_vi": "~1.020 USD (PPP ~3.000 USD)",
    "pc_en": "~$1,020 (PPP ~$3,000)",
    "gr": "+5.0%",
    "sec": [
      45,
      13,
      42
    ],
    "main_vi": "Hạt điều thô xuất khẩu (chiếm ~90% kim ngạch xuất khẩu), đánh bắt cá (cấp phép tàu nước ngoài), gỗ, khai thác bauxite & phốt phát tiềm năng",
    "main_en": "Raw cashew nut exports (~90% of export earnings), marine fisheries licensing, timber, prospective bauxite & phosphate mining",
    "note_vi": "Một trong những nền kinh tế phụ thuộc đơn cây trồng rõ nét nhất thế giới khi vụ thu hoạch hạt điều quyết định thu nhập của hơn 80% hộ gia đình nông thôn và ngân sách quốc gia.",
    "note_en": "One of the world's most mono-crop-dependent economies, where the annual raw cashew harvest dictates the livelihoods of over 80% of rural households and state revenues."
  },
  "Guinea": {
    "tier": "low",
    "gdp_vi": "~25,5 tỷ USD",
    "gdp_en": "~$25.5B",
    "pc_vi": "~1.800 USD (PPP ~4.500 USD)",
    "pc_en": "~$1,800 (PPP ~$4,500)",
    "gr": "+5.7%",
    "sec": [
      41,
      35,
      24
    ],
    "main_vi": "Khai thác bauxite (#1 xuất khẩu thế giới, cung cấp chính cho Trung Quốc), dự án siêu mỏ quặng sắt Simandou, khai thác vàng & kim cương, thủy điện",
    "main_en": "Bauxite mining (#1 global exporter, primary supplier to China), Simandou high-grade iron ore megaproject, gold & diamond mining, hydropower",
    "note_vi": "Nắm giữ trữ lượng bauxite lớn nhất hành tinh (~25% thế giới) và đang xây dựng tuyến đường sắt xuyên quốc gia cùng cảng biển cho siêu mỏ quặng sắt Simandou trị giá hơn 20 tỷ USD.",
    "note_en": "Holds the world's largest bauxite reserves (~25% of global total) and is developing the >$20B Simandou high-grade iron ore mine and trans-Guinean railway corridor."
  },
  "Guatemala": {
    "tier": "dev",
    "gdp_vi": "~112 tỷ USD (#66 thế giới)",
    "gdp_en": "~$112B (#66 globally)",
    "pc_vi": "~6.100 USD (PPP ~14.200 USD)",
    "pc_en": "~$6,100 (PPP ~$14,200)",
    "gr": "+3.5%",
    "sec": [
      63,
      27,
      10
    ],
    "main_vi": "Kiều hối (~20% GDP), cà phê chất lượng cao, chuối, đường mía, bạch đậu khấu (#1 xuất khẩu thế giới), dệt may & sản xuất nhẹ",
    "main_en": "Remittances (~20% of GDP), specialty coffee, bananas, sugar, cardamom (#1 global exporter), apparel & light manufacturing",
    "note_vi": "Nền kinh tế lớn nhất Trung Mỹ tính theo quy mô GDP danh nghĩa với sự ổn định vĩ mô và tiền tệ (đồng Quetzal) đáng nể, dù tỷ lệ thu thuế/GDP thuộc nhóm thấp nhất khu vực.",
    "note_en": "Central America's largest economy by nominal GDP, characterized by long-standing macroeconomic and currency (quetzal) stability alongside one of the region's lowest tax-to-GDP ratios."
  },
  "Grenada": {
    "tier": "dev",
    "gdp_vi": "~1,4 tỷ USD",
    "gdp_en": "~$1.4B",
    "pc_vi": "~11.800 USD (PPP ~20.500 USD)",
    "pc_en": "~$11,800 (PPP ~$20,500)",
    "gr": "+4.1%",
    "sec": [
      77,
      16,
      7
    ],
    "main_vi": "Du lịch nghỉ dưỡng & du thuyền, giáo dục đại học quốc tế (Đại học Y St. George's đóng góp ~20% GDP), nhục đậu khấu & ca cao ('Đảo Gia vị'), đầu tư nhập tịch (CBI)",
    "main_en": "Yachting & resort tourism, international medical education (St. George's University ~20% of GDP), nutmeg & fine cocoa ('Isle of Spice'), Citizenship by Investment (CBI)",
    "note_vi": "Mệnh danh là 'Đảo Gia vị' nhờ xuất khẩu nhục đậu khấu và ca cao hữu cơ; Đại học Y khoa St. George's thu hút hàng ngàn sinh viên Bắc Mỹ là trụ cột ngoại tệ độc đáo.",
    "note_en": "Known as the 'Isle of Spice' for its nutmeg and organic cocoa; St. George's University hosting thousands of North American medical students serves as a unique economic anchor."
  },
  "Greece": {
    "tier": "adv",
    "gdp_vi": "~257 tỷ USD (#50 thế giới)",
    "gdp_en": "~$257B (#50 globally)",
    "pc_vi": "~24.700 USD (PPP ~43.800 USD)",
    "pc_en": "~$24,700 (PPP ~$43,800)",
    "gr": "+2.3%",
    "sec": [
      79,
      17,
      4
    ],
    "main_vi": "Vận tải biển quốc tế (chủ tàu Hy Lạp nắm ~20% trọng tải đội tàu thế giới), du lịch biển đảo (~35 triệu khách/năm), lọc dầu, dược phẩm, dầu ô liu & nông sản",
    "main_en": "Global maritime shipping (Greek shipowners control ~20% of world deadweight tonnage), island & heritage tourism (~35M visitors/yr), oil refining, pharmaceuticals, olive oil & agri-food",
    "note_vi": "Đã lấy lại xếp hạng tín nhiệm đầu tư (Investment Grade) sau một thập kỷ khủng hoảng nợ công và hiện tăng trưởng vượt mức trung bình Eurozone nhờ du lịch kỷ lục, số hóa hành chính và vận tải biển.",
    "note_en": "Regained investment-grade credit status after its decade-long sovereign debt crisis and now outpaces the Eurozone average on the back of record tourism, state digitization, and global shipping dominance."
  },
  "Ghana": {
    "tier": "dev",
    "gdp_vi": "~76 tỷ USD",
    "gdp_en": "~$76B",
    "pc_vi": "~2.200 USD (PPP ~7.700 USD)",
    "pc_en": "~$2,200 (PPP ~$7,700)",
    "gr": "+4.0%",
    "sec": [
      46,
      33,
      21
    ],
    "main_vi": "Khai thác vàng (#1 châu Phi), ca cao (#2 thế giới sau Bờ Biển Ngà), dầu thô ngoài khơi (mỏ Jubilee), viễn thông & dịch vụ số, đặt trụ sở Ban thư ký AfCFTA",
    "main_en": "Gold mining (#1 producer in Africa), cocoa beans (#2 globally after Côte d'Ivoire), offshore crude oil (Jubilee field), telecom & digital services, host of AfCFTA Secretariat",
    "note_vi": "Nhà sản xuất vàng số 1 châu Phi và đặt trụ sở Khu vực Thương mại Tự do Lục địa châu Phi (AfCFTA) tại Accra; đang phục hồi sau quá trình tái cơ cấu nợ công với sự hỗ trợ của IMF.",
    "note_en": "Africa's leading gold producer and host of the African Continental Free Trade Area (AfCFTA) Secretariat in Accra; recovering from a sovereign debt restructuring under an IMF program."
  },
  "Germany": {
    "tier": "adv",
    "gdp_vi": "~4.710 tỷ USD (#3 thế giới)",
    "gdp_en": "~$4.71T (#3 globally)",
    "pc_vi": "~55.800 USD (PPP ~69.500 USD)",
    "pc_en": "~$55,800 (PPP ~$69,500)",
    "gr": "+0.1%",
    "sec": [
      70,
      29,
      1
    ],
    "main_vi": "Ô tô & cơ khí chính xác (VW, BMW, Mercedes, Bosch), hóa chất – dược phẩm (BASF, Bayer), thiết bị điện công nghiệp & tự động hóa (Siemens), phần mềm doanh nghiệp (SAP), năng lượng tái tạo",
    "main_en": "Automotive & precision engineering (VW, BMW, Mercedes, Bosch), chemicals & pharmaceuticals (BASF, Bayer), industrial electrical & automation (Siemens), enterprise software (SAP), renewable energy",
    "note_vi": "Đầu tàu công nghiệp lớn nhất châu Âu dựa trên mạng lưới các doanh nghiệp vừa và nhỏ dẫn đầu ngách toàn cầu (Mittelstand), đang chịu sức ép tái cấu trúc nặng nề do giá năng lượng cao, cạnh tranh xe điện Trung Quốc và dân số già hóa.",
    "note_en": "Europe's largest industrial powerhouse built on world-leading niche SMEs (Mittelstand), undergoing painful structural adjustment amid high post-pipeline energy costs, Chinese EV competition, and demographic aging."
  },
  "Georgia": {
    "tier": "emg",
    "gdp_vi": "~33,2 tỷ USD",
    "gdp_en": "~$33.2B",
    "pc_vi": "~8.900 USD (PPP ~27.400 USD)",
    "pc_en": "~$8,900 (PPP ~$27,400)",
    "gr": "+7.6%",
    "sec": [
      68,
      25,
      7
    ],
    "main_vi": "Hành lang vận tải & đường ống quá cảnh (Baku–Tbilisi–Ceyhan), du lịch quốc tế, rượu vang & nước khoáng, quặng đồng, dịch vụ CNTT",
    "main_en": "Transit pipelines & Black Sea port logistics, international tourism, wine & mineral water, copper ore & ferroalloys, IT services",
    "note_vi": "Môi trường kinh doanh tự do, thuế thấp và vị trí cửa ngõ Biển Đen giúp Gruzia hưởng lợi lớn từ sự bùng nổ vận tải qua Hành lang Trung tâm (Middle Corridor) kể từ năm 2022.",
    "note_en": "Low-tax business climate and Black Sea ports make Georgia the vital western bottleneck of the Trans-Caspian 'Middle Corridor' bypassing Russia."
  },
  "Gambia": {
    "tier": "low",
    "gdp_vi": "~2,6 tỷ USD",
    "gdp_en": "~$2.6B",
    "pc_vi": "~950 USD (PPP ~3.400 USD)",
    "pc_en": "~$950 (PPP ~$3,400)",
    "gr": "+5.6%",
    "sec": [
      57,
      19,
      24
    ],
    "main_vi": "Kiều hối (~25% GDP), du lịch bờ biển Đại Tây Dương (khách châu Âu mùa đông), lạc (đậu phộng) xuất khẩu, thương mại tái xuất qua cảng Banjul",
    "main_en": "Diaspora remittances (~25% of GDP), Atlantic winter sun tourism, groundnut (peanut) exports, re-export transit trade via Banjul port",
    "note_vi": "Quốc gia nhỏ nhất châu Phi lục địa nằm dọc hai bờ sông Gambia và được bao bọc bởi Senegal; phụ thuộc lớn vào kiều hối, du lịch biển và canh tác lạc truyền thống.",
    "note_en": "Smallest country on mainland Africa stretching along the Gambia River and surrounded by Senegal; heavily reliant on diaspora remittances, European winter tourism, and groundnut farming."
  },
  "Gabon": {
    "tier": "dev",
    "gdp_vi": "~21 tỷ USD",
    "gdp_en": "~$21B",
    "pc_vi": "~8.800 USD (PPP ~21.500 USD)",
    "pc_en": "~$8,800 (PPP ~$21,500)",
    "gr": "+2.9%",
    "sec": [
      42,
      51,
      7
    ],
    "main_vi": "Khai thác dầu khí, quặng mangan (mỏ Moanda, #2 thế giới), khai thác & chế biến gỗ nhiệt đới bền vững (rừng phủ 88% diện tích), tín chỉ carbon",
    "main_en": "Oil & gas extraction, manganese ore (Moanda mine, #2 globally), sustainable tropical timber processing (88% forest cover), sovereign carbon credits",
    "note_vi": "Quốc gia giàu tài nguyên bậc nhất Trung Phi với GDP đầu người cao nhờ dầu mỏ và mangan cho dân số ~2,4 triệu người; rừng mưa lưu vực Congo hấp thụ lượng carbon ròng lớn hơn phát thải.",
    "note_en": "Resource-rich Central African nation enjoying high per-capita income from oil and manganese across a small population (~2.4M); its Congo Basin rainforests make it one of the world's few net carbon-negative countries."
  },
  "France": {
    "tier": "adv",
    "gdp_vi": "~3.170 tỷ USD (#7 thế giới)",
    "gdp_en": "~$3.17T (#7 globally)",
    "pc_vi": "~46.800 USD (PPP ~62.000 USD)",
    "pc_en": "~$46,800 (PPP ~$62,000)",
    "gr": "+1.1%",
    "sec": [
      79,
      19,
      2
    ],
    "main_vi": "Hàng xa xỉ & mỹ phẩm (LVMH, Hermès, L'Oréal), hàng không – vũ trụ & quốc phòng (Airbus, Safran, Dassault), điện hạt nhân (~70% sản lượng điện), dược phẩm (Sanofi), nông sản & rượu vang, du lịch (#1 thế giới)",
    "main_en": "Luxury goods & cosmetics (LVMH, Hermès, L'Oréal), aerospace & defense (Airbus, Safran, Dassault), nuclear energy (~70% of power grid), pharmaceuticals (Sanofi), agri-food & wine, tourism (#1 global destination)",
    "note_vi": "Nền kinh tế lớn thứ 2 EU sở hữu lợi thế độc tôn về hàng xa xỉ, hàng không vũ trụ, nông nghiệp lớn nhất châu Âu và hệ thống 56 lò phản ứng điện hạt nhân giúp xuất khẩu điện sạch khắp lục địa.",
    "note_en": "The EU's second-largest economy, commanding global leadership in luxury brands, commercial aviation, European agribusiness, and a 56-reactor nuclear fleet that makes it Europe's top low-carbon electricity exporter."
  },
  "St. Pierre and Miquelon": {
    "tier": "adv",
    "gdp_vi": "~0,28 tỷ USD",
    "gdp_en": "~$0.28B",
    "pc_vi": "~46.000 USD",
    "pc_en": "~$46,000",
    "gr": "+1.2%",
    "sec": [
      81,
      16,
      3
    ],
    "main_vi": "Đánh bắt & chế biến thủy sản (cua tuyết, hải sâm, cá tuyết), dịch vụ công & trợ cấp từ chính phủ Pháp, cung ứng hậu cần hàng hải Bắc Đại Tây Dương, du lịch văn hóa Pháp",
    "main_en": "Seafood harvesting & processing (snow crab, sea cucumber, cod), French public administration & fiscal transfers, North Atlantic maritime servicing, Francophone heritage tourism",
    "note_vi": "Lãnh thổ hải ngoại duy nhất còn lại của Pháp tại Bắc Mỹ (nằm ngoài khơi Newfoundland, Canada); sử dụng đồng Euro và nhận hỗ trợ tài khóa lớn từ Paris sau khi trữ lượng cá tuyết sụt giảm lịch sử.",
    "note_en": "France's last remaining territorial foothold in North America (off Newfoundland, Canada); uses the Euro and relies on French state transfers alongside niche shellfish fisheries following the 1990s cod moratorium."
  },
  "Wallis and Futuna Is.": {
    "tier": "dev",
    "gdp_vi": "~0,21 tỷ USD",
    "gdp_en": "~$0.21B",
    "pc_vi": "~18.500 USD",
    "pc_en": "~$18,500",
    "gr": "+1.0%",
    "sec": [
      78,
      12,
      10
    ],
    "main_vi": "Trợ cấp ngân sách & lương khu vực công từ Pháp, kiều hối từ cộng đồng người dân làm việc tại New Caledonia, nông nghiệp tự cung tự cấp (khoai sọ, dừa, lợn) & đánh bắt cá",
    "main_en": "French state budgetary transfers & public sector wages, remittances from diaspora in New Caledonia, subsistence farming (taro, coconuts, pigs) & artisanal fishing",
    "note_vi": "Lãnh thổ hải ngoại của Pháp tại Nam Thái Bình Dương sử dụng đồng Franc CFP (neo vào Euro); hơn 70% hoạt động kinh tế tiền tệ gắn liền với chi tiêu hành chính và giáo dục do Pháp tài trợ.",
    "note_en": "French overseas collectivity in the South Pacific using the Euro-pegged CFP franc; over 70% of monetized economic activity stems from French government administration, healthcare, and education spending."
  },
  "St-Martin": {
    "tier": "adv",
    "gdp_vi": "~0,75 tỷ USD",
    "gdp_en": "~$0.75B",
    "pc_vi": "~23.500 USD",
    "pc_en": "~$23,500",
    "gr": "+2.5%",
    "sec": [
      85,
      14,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp, ẩm thực Pháp – Caribe, bến du thuyền (Marigot), thương mại miễn thuế, xây dựng & dịch vụ bất động sản",
    "main_en": "Upscale beach resort tourism, Franco-Caribbean gastronomy, yacht marinas (Marigot), duty-free retail, construction & real estate services",
    "note_vi": "Nửa phía Bắc thuộc Pháp của đảo Saint Martin (chia đôi biên giới mở với Sint Maarten thuộc Hà Lan ở phía Nam); thuộc EU và dùng đồng Euro nhưng giao dịch USD phổ biến khắp đảo.",
    "note_en": "French northern collectivity of Saint Martin island (sharing an open border with Dutch Sint Maarten to the south); part of the EU using the Euro externally while USD circulates widely in tourism."
  },
  "St-Barthélemy": {
    "tier": "adv",
    "gdp_vi": "~0,62 tỷ USD",
    "gdp_en": "~$0.62B",
    "pc_vi": "~58.000 USD",
    "pc_en": "~$58,000",
    "gr": "+3.0%",
    "sec": [
      86,
      13,
      1
    ],
    "main_vi": "Du lịch siêu sang (biệt thự nghỉ dưỡng, khách sạn 5 sao), bến siêu du thuyền (Gustavia), thời trang xa xỉ miễn thuế, bất động sản triệu đô",
    "main_en": "Ultra-luxury villa & boutique hotel tourism, superyacht harbor services (Gustavia), duty-free haute couture retail, prime luxury real estate",
    "note_vi": "Thiên đường nghỉ dưỡng của giới tỷ phú toàn cầu tại vùng Caribe thuộc Pháp; chủ động định vị phân khúc siêu sang mật độ thấp (cấm tàu du lịch cỡ lớn) giúp đạt thu nhập bình quân đầu người cao nhất Caribe thuộc Pháp.",
    "note_en": "Ultra-exclusive French Caribbean enclave for global billionaires; deliberately restricts mass cruise ships in favor of low-density luxury villas and superyachts, yielding the highest per-capita income in the French West Indies."
  },
  "Fr. Polynesia": {
    "tier": "adv",
    "gdp_vi": "~6,4 tỷ USD",
    "gdp_en": "~$6.4B",
    "pc_vi": "~22.800 USD",
    "pc_en": "~$22,800",
    "gr": "+2.6%",
    "sec": [
      80,
      13,
      7
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển đảo cao cấp (Tahiti, Bora Bora, Moorea), nuôi cấy ngọc trai đen Tahiti, chuyển giao ngân sách từ Pháp, đánh bắt cá ngừ, vani & dầu dừa (Monoï)",
    "main_en": "Luxury island & overwater-bungalow tourism (Tahiti, Bora Bora, Moorea), Tahitian black cultured pearls, French state transfers, tuna fishing, vanilla & Monoï coconut oil",
    "note_vi": "Xứ hải ngoại thuộc Pháp gồm 118 hòn đảo Nam Thái Bình Dương; ngọc trai đen Tahiti chiếm hơn 50% kim ngạch xuất khẩu hàng hóa bên cạnh ngành du lịch tuần trăng mật nổi tiếng toàn cầu.",
    "note_en": "French overseas country spanning 118 South Pacific islands; cultured black pearls account for over half of merchandise exports alongside world-famous Bora Bora luxury tourism."
  },
  "New Caledonia": {
    "tier": "adv",
    "gdp_vi": "~9,6 tỷ USD",
    "gdp_en": "~$9.6B",
    "pc_vi": "~33.500 USD",
    "pc_en": "~$33,500",
    "gr": "-2.0%",
    "sec": [
      72,
      26,
      2
    ],
    "main_vi": "Khai thác & luyện quặng niken (SLN, Koniambo, Prony), chuyển giao tài chính từ chính phủ Pháp, dịch vụ công, nuôi tôm xanh xuất khẩu & du lịch",
    "main_en": "Nickel mining & ferronickel smelting (SLN, Koniambo, Prony), French metropolitan fiscal transfers, public administration, blue prawn aquaculture & tourism",
    "note_vi": "Sở hữu khoảng 10–15% trữ lượng niken thế giới; tuy nhiên ngành luyện kim và toàn bộ nền kinh tế đang chịu cú sốc kép từ giá niken toàn cầu lao dốc do nguồn cung giá rẻ Indonesia và bất ổn chính trị năm 2024.",
    "note_en": "Holds ~10–15% of the world's nickel reserves, though its smelters and broader economy face a severe twin crisis from surging low-cost Indonesian nickel supply and the 2024 civil unrest."
  },
  "Fr. S. Antarctic Lands": {
    "tier": "adv",
    "gdp_vi": "~0,05 tỷ USD (kinh tế trạm nghiên cứu & ngư trường)",
    "gdp_en": "~$0.05B (research stations & Exclusive Economic Zone fisheries)",
    "pc_vi": "Không có cư dân thường trú (~150–300 nhà khoa học & quân nhân luân phiên)",
    "pc_en": "No permanent residents (~150–300 rotating scientists & military personnel)",
    "gr": "0.0%",
    "sec": [
      50,
      10,
      40
    ],
    "main_vi": "Cấp phép đánh bắt cá răng Patagonian (Patagonian toothfish / Chilean sea bass) & tôm hùm đá, nghiên cứu khoa học khí hậu – hải dương học, phát hành tem bưu chính",
    "main_en": "Patagonian toothfish (Chilean sea bass) & spiny lobster fishing licenses, polar & oceanographic research stations, philatelic stamp sales",
    "note_vi": "Lãnh thổ hải ngoại không có dân thường trú của Pháp (Kerguelen, Crozet, Amsterdam, Saint-Paul...); nguồn thu tự chủ chủ yếu đến từ việc bán hạn ngạch đánh bắt cá răng Patagonian giá trị rất cao trong vùng biển EEZ rộng hơn 2,2 triệu km².",
    "note_en": "Uninhabited French overseas territory (Kerguelen, Crozet, Amsterdam, Saint-Paul islands); generates significant autonomous revenue by licensing high-value Patagonian toothfish quotas across its 2.2M km² maritime EEZ."
  },
  "Åland": {
    "tier": "adv",
    "gdp_vi": "~1,6 tỷ USD",
    "gdp_en": "~$1.6B",
    "pc_vi": "~52.000 USD",
    "pc_en": "~$52,000",
    "gr": "+1.4%",
    "sec": [
      77,
      19,
      4
    ],
    "main_vi": "Vận tải phà biển & hàng hải (Viking Line, Eckerö Line chiếm ~30% GDP), dịch vụ tài chính & CNTT (Bank of Åland, Paf), chế biến thực phẩm (Orkla/Taffel chips), du lịch mùa hè",
    "main_en": "Maritime ferry shipping (Viking Line, Eckerö Line ~30% of GDP), banking & gaming tech (Bank of Åland, Paf), food processing (Taffel potato chips), summer archipelago tourism",
    "note_vi": "Quần đảo tự trị nói tiếng Thụy Điển thuộc Phần Lan; quy chế đặc biệt nằm ngoài liên minh thuế GTGT (VAT) của EU cho phép các phà biển chạy tuyến Phần Lan – Thụy Điển ghé đảo để bán hàng miễn thuế trên tàu.",
    "note_en": "Autonomous, demilitarized Swedish-speaking archipelago of Finland; its special exemption from the EU VAT area enables Baltic passenger ferries between Finland and Sweden to sell duty-free goods by calling at Mariehamn."
  },
  "Finland": {
    "tier": "adv",
    "gdp_vi": "~306 tỷ USD (#47 thế giới)",
    "gdp_en": "~$306B (#47 globally)",
    "pc_vi": "~54.500 USD (PPP ~62.500 USD)",
    "pc_en": "~$54,500 (PPP ~$62,500)",
    "gr": "+0.4%",
    "sec": [
      70,
      27,
      3
    ],
    "main_vi": "Thiết bị viễn thông 5G/6G (Nokia), cơ khí & thiết bị công nghiệp – hàng hải (Kone, Wärtsilä), công nghệ sinh học & lâm nghiệp (UPM, Stora Enso), đóng tàu phá băng (#1 thế giới), công nghiệp game (Supercell)",
    "main_en": "5G/6G telecom equipment (Nokia), industrial & marine engineering (Kone, Wärtsilä), forest bioeconomy & pulp/paper (UPM, Stora Enso), icebreaker shipbuilding (#1 globally), gaming & software (Supercell)",
    "note_vi": "Nền kinh tế Bắc Âu duy trì mô hình phúc lợi cao và dẫn đầu thế giới về thiết kế tàu phá băng (khoảng 60% đội tàu thế giới); lưới điện gần như phi phát thải nhờ lò phản ứng hạt nhân Olkiluoto 3 kết hợp thủy điện và điện gió.",
    "note_en": "Nordic innovation leader designing ~60% of the world's icebreakers; operates a nearly emissions-free power grid anchored by the Olkiluoto 3 nuclear reactor alongside hydro, wind, and forest biomass."
  },
  "Fiji": {
    "tier": "dev",
    "gdp_vi": "~5,8 tỷ USD",
    "gdp_en": "~$5.8B",
    "pc_vi": "~6.200 USD (PPP ~15.500 USD)",
    "pc_en": "~$6,200 (PPP ~$15,500)",
    "gr": "+3.8%",
    "sec": [
      71,
      16,
      13
    ],
    "main_vi": "Du lịch nghỉ dưỡng (~40% GDP trực tiếp & gián tiếp), xuất khẩu nước khoáng đóng chai (FIJI Water), kiều hối, đường mía, trung tâm hàng không & viễn thông Nam Thái Bình Dương (Fiji Airways)",
    "main_en": "Resort tourism (~40% of GDP direct & indirect), bottled artesian mineral water (FIJI Water), remittances, sugar, South Pacific aviation & telecom hub (Fiji Airways)",
    "note_vi": "Trung tâm giao thương, giáo dục đại học và hàng không (sân bay Nadi) của cả khu vực đảo quốc Nam Thái Bình Dương; nước khoáng đóng chai FIJI Water là mặt hàng xuất khẩu đơn lẻ lớn nhất sang Mỹ.",
    "note_en": "Commercial, diplomatic, and aviation hub (Nadi International Airport) of the South Pacific islands; artesian bottled water is its single largest merchandise export to the US."
  },
  "Ethiopia": {
    "tier": "low",
    "gdp_vi": "~145 tỷ USD",
    "gdp_en": "~$145B",
    "pc_vi": "~1.150 USD (PPP ~3.200 USD)",
    "pc_en": "~$1,150 (PPP ~$3,200)",
    "gr": "+6.2%",
    "sec": [
      40,
      24,
      36
    ],
    "main_vi": "Cà phê Arabica (quê hương cây cà phê, #1 châu Phi), hàng không (Ethiopian Airlines – hãng lớn nhất châu Phi), thủy điện (Đập Đại Phục Hưng GERD), hoa cắt cành & hạt có dầu, khu công nghiệp dệt may",
    "main_en": "Arabica coffee (birthplace of coffee, #1 African producer), aviation (Ethiopian Airlines – Africa's largest carrier), hydropower (Grand Ethiopian Renaissance Dam), cut flowers & oilseeds, textile industrial parks",
    "note_vi": "Quốc gia đông dân thứ 2 châu Phi (~130 triệu người) và không giáp biển; vừa thực hiện cải cách lịch sử năm 2024 khi thả nổi đồng Birr, mở cửa ngành ngân hàng và vận hành siêu đập thủy điện GERD trên sông Nile Xanh.",
    "note_en": "Africa's second-most populous nation (~130M) and most populous landlocked country; launched historic 2024 IMF-backed reforms floating the birr and opening its banking sector while ramping up the 5.15 GW GERD Nile dam."
  },
  "Estonia": {
    "tier": "adv",
    "gdp_vi": "~43 tỷ USD",
    "gdp_en": "~$43B",
    "pc_vi": "~31.500 USD (PPP ~47.500 USD)",
    "pc_en": "~$31,500 (PPP ~$47,500)",
    "gr": "-0.3%",
    "sec": [
      72,
      25,
      3
    ],
    "main_vi": "Công nghệ thông tin & hệ sinh thái kỳ lân khởi nghiệp (Wise, Bolt, Pipedrive), chính phủ điện tử (e-Residency), an ninh mạng, chế biến gỗ & nhà lắp ghép, thiết bị điện tử",
    "main_en": "IT & startup ecosystem (Wise, Bolt, Pipedrive), e-governance (e-Residency), cybersecurity, engineered wood & modular houses, electronics manufacturing",
    "note_vi": "Quốc gia có số lượng 'kỳ lân' công nghệ (startup >1 tỷ USD) tính trên đầu người cao nhất châu Âu, với 100% dịch vụ công trực tuyến và hệ thống thuế thu nhập doanh nghiệp 0% đối với lợi nhuận tái đầu tư.",
    "note_en": "Boasts Europe's highest number of tech unicorns per capita, a 100% digitized state (e-Estonia), and a competitive tax system featuring 0% corporate tax on reinvested profits."
  },
  "Eritrea": {
    "tier": "low",
    "gdp_vi": "~2,5 tỷ USD",
    "gdp_en": "~$2.5B",
    "pc_vi": "~700 USD (PPP ~2.100 USD)",
    "pc_en": "~$700 (PPP ~$2,100)",
    "gr": "+2.8%",
    "sec": [
      57,
      26,
      17
    ],
    "main_vi": "Khai thác đồng, kẽm, vàng & bạc (mỏ Bisha), dự án kali (potash Colluli), nông nghiệp & chăn nuôi tự cấp, thuế kiều hối 2% từ người dân định cư ở nước ngoài, cảng biển Đỏ (Massawa, Assab)",
    "main_en": "Copper, zinc, gold & silver mining (Bisha mine), potash development (Colluli), subsistence farming & pastoralism, 2% diaspora recovery tax, Red Sea ports (Massawa, Assab)",
    "note_vi": "Nền kinh tế chỉ huy khép kín bậc nhất châu Phi bên bờ Biển Đỏ; chịu các lệnh trừng phạt quốc tế và phụ thuộc lớn vào nguồn thu khai khoáng cùng khoản thuế thu nhập 2% áp lên kiều dân Eritrea ở nước ngoài.",
    "note_en": "Highly centralized command economy along the strategic Red Sea coast; insulated from global capital markets and heavily reliant on base-metal mining and a mandatory 2% tax levied on its global diaspora."
  },
  "Eq. Guinea": {
    "tier": "dev",
    "gdp_vi": "~12,5 tỷ USD",
    "gdp_en": "~$12.5B",
    "pc_vi": "~7.200 USD (PPP ~18.500 USD)",
    "pc_en": "~$7,200 (PPP ~$18,500)",
    "gr": "+0.8%",
    "sec": [
      43,
      54,
      3
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi, khí thiên nhiên hóa lỏng (LNG) & methanol (đảo Bioko), xây dựng hạ tầng công, khai thác gỗ nhiệt đới",
    "main_en": "Offshore crude oil extraction, liquefied natural gas (LNG) & methanol (Bioko Island), public infrastructure construction, tropical timber",
    "note_vi": "Thành viên OPEC có hơn 85% kim ngạch xuất khẩu và thu ngân sách đến từ dầu khí; tuy nhiên các mỏ dầu lâu năm đang bước vào giai đoạn suy giảm tự nhiên khiến GDP thu hẹp so với đỉnh cao thập niên 2010.",
    "note_en": "OPEC member where hydrocarbons generate over 85% of exports and fiscal revenue; maturing offshore oil fields have caused prolonged economic contraction from its early-2010s peak."
  },
  "El Salvador": {
    "tier": "dev",
    "gdp_vi": "~35,8 tỷ USD",
    "gdp_en": "~$35.8B",
    "pc_vi": "~5.600 USD (PPP ~12.800 USD)",
    "pc_en": "~$5,600 (PPP ~$12,800)",
    "gr": "+2.8%",
    "sec": [
      66,
      29,
      5
    ],
    "main_vi": "Kiều hối từ Mỹ (~24% GDP), dệt may & sản xuất nhẹ, dịch vụ du lịch lướt sóng & hội nghị, cà phê & đường mía, trung tâm dịch vụ khách hàng (call centers)",
    "main_en": "US diaspora remittances (~24% of GDP), textiles & light manufacturing, surf & convention tourism, coffee & sugar, bilingual call centers",
    "note_vi": "Sử dụng đồng USD làm tiền tệ chính thức từ năm 2001 và là quốc gia đầu tiên công nhận Bitcoin năm 2021; chiến dịch trấn áp tội phạm băng đảng quyết liệt gần đây đã giúp du lịch và đầu tư phục hồi mạnh.",
    "note_en": "Fully dollarized since 2001 and the first country to adopt Bitcoin as legal tender in 2021; a sweeping crackdown on gang violence has dramatically improved security, spurring a rebound in tourism and investment."
  },
  "Egypt": {
    "tier": "dev",
    "gdp_vi": "~380 tỷ USD (#42 thế giới)",
    "gdp_en": "~$380B (#42 globally)",
    "pc_vi": "~3.400 USD (PPP ~18.500 USD)",
    "pc_en": "~$3,400 (PPP ~$18,500)",
    "gr": "+3.5%",
    "sec": [
      52,
      33,
      15
    ],
    "main_vi": "Phí qua Kênh đào Suez, du lịch văn hóa – biển Đỏ, khí đốt tự nhiên (mỏ Zohr) & hóa dầu, kiều hối, bất động sản & đại dự án đô thị mới, nông nghiệp đồng bằng sông Nile (bông, cam quýt, phân bón)",
    "main_en": "Suez Canal transit tolls, heritage & Red Sea tourism, natural gas (Zohr field) & petrochemicals, diaspora remittances, real estate & new city megaprojects, Nile Delta agriculture & fertilizers",
    "note_vi": "Trụ cột địa kinh tế kết nối Địa Trung Hải – Biển Đỏ với hơn 110 triệu dân; năm 2024 vượt qua khủng hoảng thiếu hụt ngoại tệ và sụt giảm doanh thu kênh đào Suez nhờ gói đầu tư kỷ lục 35 tỷ USD của UAE vào Ras El-Hekma và chương trình IMF mở rộng.",
    "note_en": "Strategic 110-million-strong bridge between the Mediterranean and Red Sea; navigated acute FX shortages and Red Sea shipping disruptions in 2024 via the landmark $35B UAE Ras El-Hekma investment and an expanded IMF package."
  },
  "Ecuador": {
    "tier": "dev",
    "gdp_vi": "~121 tỷ USD (#62 thế giới)",
    "gdp_en": "~$121B (#62 globally)",
    "pc_vi": "~6.600 USD (PPP ~15.200 USD)",
    "pc_en": "~$6,600 (PPP ~$15,200)",
    "gr": "+1.2%",
    "sec": [
      58,
      32,
      10
    ],
    "main_vi": "Nuôi & xuất khẩu tôm thẻ chân trắng (#1 thế giới), dầu thô vùng Amazon, chuối (#1 xuất khẩu thế giới), hoa hồng cắt cành, ca cao hương vị cao cấp (Arriba), khai thác đồng & vàng",
    "main_en": "Farmed whiteleg shrimp (#1 global exporter), Amazonian crude oil, bananas (#1 global exporter), cut roses, fine-flavor Arriba cocoa, copper & gold mining",
    "note_vi": "Nền kinh tế sử dụng hoàn toàn đồng USD từ năm 2000 giúp kiểm soát lạm phát thấp nhất Mỹ Latinh; tôm nuôi đã vượt dầu mỏ trở thành mặt hàng xuất khẩu số 1 dù đất nước đang đối mặt thiếu điện thủy điện do hạn hán và thách thức an ninh.",
    "note_en": "Fully dollarized since 2000 with one of Latin America's lowest inflation rates; farmed shrimp has overtaken crude oil as the top export, though the economy faces headwinds from drought-induced hydro power rationing and security challenges."
  },
  "Dominican Rep.": {
    "tier": "dev",
    "gdp_vi": "~127 tỷ USD (#60 thế giới)",
    "gdp_en": "~$127B (#60 globally)",
    "pc_vi": "~11.200 USD (PPP ~27.500 USD)",
    "pc_en": "~$11,200 (PPP ~$27,500)",
    "gr": "+5.1%",
    "sec": [
      62,
      32,
      6
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển (Punta Cana, >10 triệu khách/năm), khu chế xuất (thiết bị y tế, điện tử, xì gà cao cấp #1 thế giới), khai thác vàng (mỏ Pueblo Viejo), kiều hối",
    "main_en": "Beach resort tourism (Punta Cana, >10M visitors/yr), free-trade zone manufacturing (medical devices, electronics, #1 premium hand-rolled cigars), gold mining (Pueblo Viejo), remittances",
    "note_vi": "Ngôi sao tăng trưởng bền bỉ nhất vùng Caribe và Mỹ Latinh suốt hai thập kỷ qua, kết hợp điểm đến du lịch số 1 Caribe với hệ thống khu thương mại tự do xuất khẩu thiết bị y tế sang Mỹ.",
    "note_en": "The Caribbean's largest and most consistently fast-growing economy over the past two decades, combining the region's #1 tourism destination with thriving US-oriented medical-device free zones."
  },
  "Dominica": {
    "tier": "dev",
    "gdp_vi": "~0,70 tỷ USD",
    "gdp_en": "~$0.70B",
    "pc_vi": "~9.800 USD (PPP ~16.500 USD)",
    "pc_en": "~$9,800 (PPP ~$16,500)",
    "gr": "+4.6%",
    "sec": [
      68,
      17,
      15
    ],
    "main_vi": "Chương trình đầu tư nhập tịch (CBI), du lịch sinh thái – lặn biển & suối nước nóng ('Đảo Thiên nhiên vùng Caribe'), nông sản nhiệt đới (chuối, trái cây có múi, khoai sọ), điện địa nhiệt",
    "main_en": "Citizenship by Investment (CBI) program, eco-tourism & diving ('Nature Island of the Caribbean'), tropical agriculture (bananas, citrus, root crops), geothermal energy development",
    "note_vi": "Đảo quốc núi lửa giàu rừng nguyên sinh tại Đông Caribe; nguồn thu lớn từ chương trình đầu tư lấy quốc tịch (CBI) đang được dùng để xây dựng sân bay quốc tế mới và nhà máy điện địa nhiệt nhằm đạt mục tiêu quốc gia chống chịu khí hậu đầu tiên thế giới.",
    "note_en": "Volcanic Eastern Caribbean island utilizing Citizenship by Investment (CBI) revenues to fund a new international airport, geothermal power plant, and hurricane-resilient infrastructure."
  },
  "Djibouti": {
    "tier": "dev",
    "gdp_vi": "~4,3 tỷ USD",
    "gdp_en": "~$4.3B",
    "pc_vi": "~3.800 USD (PPP ~7.800 USD)",
    "pc_en": "~$3,800 (PPP ~$7,800)",
    "gr": "+6.5%",
    "sec": [
      77,
      21,
      2
    ],
    "main_vi": "Dịch vụ cảng biển nước sâu & trung chuyển hàng hóa cho Ethiopia (>90% ngoại thương Ethiopia), cho thuê căn cứ quân sự quốc tế (Mỹ, Pháp, Trung Quốc, Nhật Bản), đường sắt Addis Ababa – Djibouti, trạm cáp quang biển",
    "main_en": "Deepwater port transshipment for landlocked Ethiopia (>90% of Ethiopian trade), foreign military base leases (US, France, China, Japan), Addis Ababa–Djibouti railway, submarine cable landing hub",
    "note_vi": "Nằm án ngữ eo biển chiến lược Bab el-Mandeb nối Biển Đỏ với Vịnh Aden; nền kinh tế dịch vụ hưởng lợi kép từ độc quyền cảng biển cho thị trường 130 triệu dân Ethiopia và tiền thuê căn cứ quân sự của các cường quốc.",
    "note_en": "Strategically positioned at the Bab el-Mandeb chokepoint linking the Red Sea and Gulf of Aden; thrives on handling over 90% of landlocked Ethiopia's maritime trade and hosting multiple superpower military bases."
  },
  "Greenland": {
    "tier": "adv",
    "gdp_vi": "~3,3 tỷ USD",
    "gdp_en": "~$3.3B",
    "pc_vi": "~58.000 USD",
    "pc_en": "~$58,000",
    "gr": "+1.5%",
    "sec": [
      64,
      15,
      21
    ],
    "main_vi": "Đánh bắt & chế biến thủy sản lạnh (tôm nước lạnh, cá bơn Greenland chiếm >90% xuất khẩu), trợ cấp ngân sách hàng năm từ Đan Mạch (Bloktilskud ~500 triệu USD), du lịch băng hà Bắc Cực, thăm dò đất hiếm & khoáng sản chiến lược",
    "main_en": "Cold-water fisheries & processing (prawns, Greenland halibut >90% of exports), Danish annual block grant (Bloktilskud ~$500M), Arctic glacier tourism, critical minerals & rare earth exploration",
    "note_vi": "Hòn đảo lớn nhất thế giới tự trị thuộc Vương quốc Đan Mạch; đang mở hai sân bay quốc tế mới tại Nuuk và Ilulissat để thúc đẩy du lịch trong khi băng tan làm lộ diện trữ lượng đất hiếm, đồng và niken khổng lồ.",
    "note_en": "World's largest island and autonomous territory of Denmark; commissioning new transatlantic airports at Nuuk and Ilulissat to boost tourism while melting ice sheets unlock vast rare-earth and critical mineral deposits."
  },
  "Faeroe Is.": {
    "tier": "adv",
    "gdp_vi": "~3,9 tỷ USD",
    "gdp_en": "~$3.9B",
    "pc_vi": "~71.500 USD",
    "pc_en": "~$71,500",
    "gr": "+2.8%",
    "sec": [
      57,
      23,
      20
    ],
    "main_vi": "Nuôi cá hồi Đại Tây Dương cao cấp trên vịnh hẹp (Bakkafrost), đánh bắt cá biển khơi (cá thu, cá trích, cá tuyết), vận tải biển & đóng tàu dịch vụ ngư nghiệp, du lịch cảnh quan Bắc Đại Tây Dương",
    "main_en": "Premium fjord-farmed Atlantic salmon (Bakkafrost), pelagic & demersal fisheries (mackerel, herring, cod), maritime shipping & vessel servicing, North Atlantic nature tourism",
    "note_vi": "Quần đảo tự trị thuộc Đan Mạch có tỷ lệ thất nghiệp gần như bằng 0 (~1%) và mức sống vượt cả mẫu quốc Đan Mạch nhờ ngành nuôi cá hồi biển khơi giá trị gia tăng cực cao; nằm ngoài EU để giữ toàn quyền kiểm soát ngư trường.",
    "note_en": "Self-governing Danish archipelago boasting near-zero unemployment (~1%) and higher per-capita GDP than mainland Denmark, driven by world-leading farmed salmon; remains outside the EU to retain full fisheries sovereignty."
  },
  "Denmark": {
    "tier": "adv",
    "gdp_vi": "~412 tỷ USD (#36 thế giới)",
    "gdp_en": "~$412B (#36 globally)",
    "pc_vi": "~69.200 USD (PPP ~79.500 USD)",
    "pc_en": "~$69,200 (PPP ~$79,500)",
    "gr": "+2.9%",
    "sec": [
      76,
      22,
      2
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Novo Nordisk – thuốc tiểu đường/giảm cân Ozempic & Wegovy), vận tải container biển toàn cầu (Maersk), năng lượng gió ngoài khơi (Vestas, Ørsted), đồ chơi (LEGO), thịt lợn & bơ sữa công nghệ cao",
    "main_en": "Pharmaceuticals & biotech (Novo Nordisk – Ozempic & Wegovy), global container shipping (Maersk), offshore wind energy (Vestas, Ørsted), consumer goods (LEGO), high-tech pork & dairy agribusiness",
    "note_vi": "Nền kinh tế Bắc Âu tăng trưởng vượt trội so với mặt bằng châu Âu nhờ sự bùng nổ toàn cầu của tập đoàn dược phẩm Novo Nordisk (có vốn hóa từng vượt cả GDP Đan Mạch), kết hợp vị thế tiên phong về điện gió và hàng hải.",
    "note_en": "Outperforming most European peers thanks to the global boom of pharma giant Novo Nordisk (whose market cap has exceeded Denmark's entire GDP), alongside world leaders in offshore wind and container shipping."
  },
  "Czechia": {
    "tier": "adv",
    "gdp_vi": "~345 tỷ USD (#45 thế giới)",
    "gdp_en": "~$345B (#45 globally)",
    "pc_vi": "~31.800 USD (PPP ~53.500 USD)",
    "pc_en": "~$31,800 (PPP ~$53,500)",
    "gr": "+1.1%",
    "sec": [
      63,
      35,
      2
    ],
    "main_vi": "Sản xuất ô tô & phụ tùng (Škoda Auto, Hyundai), cơ khí chế tạo & đầu máy xe lửa (Škoda Group), công nghiệp quốc phòng & đạn dược (CSG, Colt CZ), an ninh mạng & phần mềm, kính pha lê & bia",
    "main_en": "Automotive manufacturing (Škoda Auto, Hyundai), heavy machinery & rolling stock (Škoda Group), defense & ammunition (CSG, Colt CZ), cybersecurity & software, crystal glass & brewing",
    "note_vi": "Một trong những nền kinh tế có tỷ trọng công nghiệp chế tạo cao nhất EU (~35% GDP) và tỷ lệ thất nghiệp thấp nhất khối (~2,7%), đóng vai trò trung tâm kỹ thuật – cơ khí chính xác ở trái tim Trung Âu.",
    "note_en": "Boasts one of the EU's highest industrial manufacturing shares (~35% of GDP) and lowest unemployment rates (~2.7%), serving as Central Europe's premier automotive and defense engineering powerhouse."
  },
  "N. Cyprus": {
    "tier": "emg",
    "gdp_vi": "~4,5 tỷ USD",
    "gdp_en": "~$4.5B",
    "pc_vi": "~11.500 USD (PPP ~24.000 USD)",
    "pc_en": "~$11,500 (PPP ~$24,000)",
    "gr": "+3.8%",
    "sec": [
      73,
      19,
      8
    ],
    "main_vi": "Giáo dục đại học quốc tế (hơn 100.000 sinh viên nước ngoài), du lịch nghỉ dưỡng & casino, nông sản (cam quýt, sữa), xây dựng bất động sản",
    "main_en": "Higher education for international students (>100,000 students), casino & beach tourism, citrus & dairy agriculture, real estate construction",
    "note_vi": "Chỉ được Thổ Nhĩ Kỳ công nhận nên chịu cấm vận thương mại – hàng không trực tiếp từ quốc tế; sử dụng đồng Lira Thổ Nhĩ Kỳ (chịu chung lạm phát cao) và nhận viện trợ tài khóa cũng như nước ngọt qua đường ống ngầm dưới biển từ Thổ Nhĩ Kỳ.",
    "note_en": "Recognized only by Turkey and subject to international trade embargoes; uses the Turkish Lira, relies on Ankara's fiscal aid and an undersea freshwater pipeline, and specializes in university education and tourism."
  },
  "Cyprus": {
    "tier": "adv",
    "gdp_vi": "~34,8 tỷ USD",
    "gdp_en": "~$34.8B",
    "pc_vi": "~37.100 USD (PPP ~60.500 USD)",
    "pc_en": "~$37,100 (PPP ~$60,500)",
    "gr": "+3.6%",
    "sec": [
      85,
      13,
      2
    ],
    "main_vi": "Quản lý đội tàu biển quốc tế (top 3 EU), du lịch biển Địa Trung Hải, dịch vụ CNTT – công nghệ tài chính, bất động sản, dược phẩm, phô mai Halloumi",
    "main_en": "International ship management (top 3 in EU), Mediterranean tourism, IT & fintech services, real estate, pharmaceuticals, Halloumi cheese exports",
    "note_vi": "Thành viên Eurozone ở cực đông Địa Trung Hải đã chuyển đổi từ mô hình ngân hàng hải ngoại sang trung tâm quản lý hàng hải và công nghệ thông tin, đồng thời phát hiện các mỏ khí đốt lớn ngoài khơi (Aphrodite).",
    "note_en": "Easternmost Eurozone economy, thriving as a premier ship-management, IT/fintech, and tourism hub while developing offshore Eastern Mediterranean natural gas fields."
  },
  "Cuba": {
    "tier": "dev",
    "gdp_vi": "~95 tỷ USD (ước tính chính thức / quy đổi đa tỷ giá)",
    "gdp_en": "~$95B (official / multi-rate estimate)",
    "pc_vi": "~8.500 USD (thực tế theo tỷ giá thị trường tự do thấp hơn nhiều)",
    "pc_en": "~$8,500 (substantially lower at informal market exchange rates)",
    "gr": "-1.5%",
    "sec": [
      74,
      22,
      4
    ],
    "main_vi": "Du lịch biển (Varadero, La Habana), xuất khẩu dịch vụ y tế & bác sĩ ra nước ngoài, công nghệ sinh học & vắc-xin nội địa, khai thác niken & coban (Moa), xì gà Habanos, rượu rum & kiều hối",
    "main_en": "Beach & heritage tourism (Varadero, Havana), overseas medical mission services, domestic biotech & vaccines, nickel & cobalt mining (Moa), Habanos cigars, rum & remittances",
    "note_vi": "Nền kinh tế kế hoạch hóa xã hội chủ nghĩa chịu cấm vận kéo dài hơn 60 năm của Mỹ; hiện đối mặt khủng hoảng thiếu hụt nhiên liệu, mất điện diện rộng, lạm phát cao và suy giảm sản lượng đường mía xuống mức thấp lịch sử.",
    "note_en": "State-run socialist economy under a 60+ year US embargo; currently grappling with severe fuel shortages, nationwide power grid blackouts, high inflation, and historic lows in domestic sugar production."
  },
  "Croatia": {
    "tier": "adv",
    "gdp_vi": "~89 tỷ USD",
    "gdp_en": "~$89B",
    "pc_vi": "~23.000 USD (PPP ~45.500 USD)",
    "pc_en": "~$23,000 (PPP ~$45,500)",
    "gr": "+3.5%",
    "sec": [
      72,
      24,
      4
    ],
    "main_vi": "Du lịch bờ biển Adriatic & 1.200 hòn đảo (Dubrovnik, Split; chiếm ~20% GDP), công nghệ siêu xe điện & pin (Rimac), dược phẩm (Pliva), đóng tàu, trạm nhập khẩu LNG đảo Krk",
    "main_en": "Adriatic coast & island tourism (Dubrovnik, Split; ~20% of GDP), EV hypercar & battery tech (Rimac Group), pharmaceuticals (Pliva), shipbuilding, Krk LNG energy hub",
    "note_vi": "Thành viên mới nhất gia nhập đồng thời khu vực đồng Euro và khối đi lại tự do Schengen vào ngày 1/1/2023, tạo cú hích mạnh mẽ cho du lịch biển Adriatic, bất động sản và dòng vốn quỹ phục hồi EU.",
    "note_en": "Simultaneously joined both the Eurozone and the Schengen border-free area on January 1, 2023, supercharging Adriatic tourism, property investment, and EU NextGenerationEU fund absorption."
  },
  "Côte d'Ivoire": {
    "tier": "dev",
    "gdp_vi": "~86 tỷ USD (#70 thế giới)",
    "gdp_en": "~$86B (#70 globally)",
    "pc_vi": "~2.800 USD (PPP ~7.600 USD)",
    "pc_en": "~$2,800 (PPP ~$7,600)",
    "gr": "+6.5%",
    "sec": [
      53,
      25,
      22
    ],
    "main_vi": "Ca cao (#1 thế giới, chiếm ~40% nguồn cung toàn cầu), hạt điều (#1 sản xuất thế giới), khai thác dầu khí mới (mỏ Baleine), vàng, cao su tự nhiên, cảng biển Abidjan & San-Pédro",
    "main_en": "Cocoa beans (#1 globally, ~40% of world supply), cashew nuts (#1 global producer), offshore oil & gas (Baleine field), gold mining, natural rubber, Abidjan & San-Pédro port logistics",
    "note_vi": "Đầu tàu kinh tế của khối Tây Phi nói tiếng Pháp (UEMOA) với tốc độ tăng trưởng trên 6%/năm suốt hơn một thập kỷ; đang đẩy mạnh chế biến sâu ca cao và hạt điều ngay trong nước thay vì chỉ xuất thô.",
    "note_en": "Economic anchor of Francophone West Africa (WAEMU) averaging over 6% annual growth for a decade; rapidly expanding domestic cocoa grinding and cashew processing alongside new offshore oil discoveries."
  },
  "Costa Rica": {
    "tier": "emg",
    "gdp_vi": "~95 tỷ USD (#69 thế giới)",
    "gdp_en": "~$95B (#69 globally)",
    "pc_vi": "~18.000 USD (PPP ~29.500 USD)",
    "pc_en": "~$18,000 (PPP ~$29,500)",
    "gr": "+4.2%",
    "sec": [
      72,
      23,
      5
    ],
    "main_vi": "Sản xuất thiết bị y tế chính xác (van tim, ống thông, nha khoa – mặt hàng xuất khẩu #1), đóng gói & kiểm thử bán dẫn (Intel), dịch vụ chia sẻ toàn cầu (GBS/CNTT), du lịch sinh thái, dứa & cà phê",
    "main_en": "Precision medical devices (heart valves, catheters, dental – #1 export), semiconductor assembly & testing (Intel), global business & IT services, eco-tourism, pineapples & specialty coffee",
    "note_vi": "Thành viên OECD tại Trung Mỹ bãi bỏ quân đội từ năm 1948 để dồn ngân sách cho giáo dục và y tế; chuyển đổi thành công từ xuất khẩu chuối – cà phê sang trung tâm thiết bị y tế và bán dẫn nearshore cho Mỹ với gần 99% điện tái tạo.",
    "note_en": "Central American OECD member that abolished its army in 1948 to invest in education; successfully pivoted from coffee and bananas into a premier US nearshoring hub for life-sciences medical devices and semiconductors on a ~99% renewable grid."
  },
  "Dem. Rep. Congo": {
    "tier": "low",
    "gdp_vi": "~73 tỷ USD",
    "gdp_en": "~$73B",
    "pc_vi": "~680 USD (PPP ~1.700 USD)",
    "pc_en": "~$680 (PPP ~$1,700)",
    "gr": "+6.0%",
    "sec": [
      33,
      47,
      20
    ],
    "main_vi": "Khai thác coban (#1 thế giới, chiếm >70% nguồn cung toàn cầu), đồng trữ lượng hàm lượng cao (#2 thế giới, siêu mỏ Kamoa-Kakula), coltan (tantalum), kim cương, vàng, tiềm năng thủy điện sông Congo (Inga)",
    "main_en": "Cobalt mining (#1 globally, >70% of world supply), high-grade copper (#2 globally, Kamoa-Kakula megamine), coltan (tantalum), diamonds, gold, Congo River hydropower (Inga dams)",
    "note_vi": "Quốc gia rộng lớn hơn 100 triệu dân nắm giữ các khoáng sản thiết yếu không thể thay thế cho pin xe điện và điện tử toàn cầu tại vành đai đồng Katanga, nhưng nghịch lý tài nguyên và xung đột vũ trang ở miền Đông khiến đa số dân cư vẫn nghèo khó.",
    "note_en": "Resource colossus of >100M people holding >70% of global cobalt and world-class Katanga copper vital for the green energy transition, yet plagued by acute infrastructure deficits and armed conflict in the east."
  },
  "Congo": {
    "tier": "dev",
    "gdp_vi": "~15,5 tỷ USD",
    "gdp_en": "~$15.5B",
    "pc_vi": "~2.500 USD (PPP ~6.500 USD)",
    "pc_en": "~$2,500 (PPP ~$6,500)",
    "gr": "+2.8%",
    "sec": [
      38,
      54,
      8
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi (TotalEnergies, Eni), xuất khẩu khí thiên nhiên hóa lỏng (dự án Congo FLNG), gỗ nhiệt đới lưu vực Congo, khai thác kali (potash) & quặng sắt, cảng biển nước sâu Pointe-Noire",
    "main_en": "Offshore crude oil extraction (TotalEnergies, Eni), floating liquefied natural gas exports (Congo FLNG), tropical timber, potash & iron ore mining, Pointe-Noire deepwater port",
    "note_vi": "Cộng hòa Congo (Congo-Brazzaville) là một trong những nhà sản xuất dầu mỏ lớn nhất châu Phi hạ Sahara và vừa gia nhập nhóm xuất khẩu khí LNG năm 2024; nền kinh tế có tỷ lệ đô thị hóa rất cao (~70% dân số sống ở Brazzaville và Pointe-Noire).",
    "note_en": "Republic of the Congo (Congo-Brazzaville) is a major Sub-Saharan offshore oil producer that launched floating LNG exports in 2024; heavily urbanized with ~70% of citizens living in Brazzaville and Pointe-Noire."
  },
  "Comoros": {
    "tier": "low",
    "gdp_vi": "~1,4 tỷ USD",
    "gdp_en": "~$1.4B",
    "pc_vi": "~1.600 USD (PPP ~3.900 USD)",
    "pc_en": "~$1,600 (PPP ~$3,900)",
    "gr": "+3.5%",
    "sec": [
      56,
      12,
      32
    ],
    "main_vi": "Kiều hối từ cộng đồng người Comoros tại Pháp (>20% GDP), tinh dầu hoa ngọc lan tây (ylang-ylang #1 thế giới cho nước hoa Pháp), đinh hương, vani ('Quần đảo Hương liệu'), đánh bắt cá",
    "main_en": "Diaspora remittances from France (>20% of GDP), ylang-ylang essential oil (#1 global supplier for luxury perfumes), cloves, Bourbon vanilla ('Perfume Islands'), artisanal fishing",
    "note_vi": "Quần đảo núi lửa tại eo biển Mozambique mệnh danh là 'Quần đảo Nước hoa' nhờ cung cấp tinh dầu ngọc lan tây cho ngành nước hoa cao cấp Pháp; đồng Franc Comoros neo cố định vào đồng Euro.",
    "note_en": "Volcanic archipelago in the Mozambique Channel famed as the 'Perfume Islands' for supplying ylang-ylang essence to French haute parfumerie; maintains a Euro-pegged currency supported by French diaspora remittances."
  },
  "Colombia": {
    "tier": "emg",
    "gdp_vi": "~418 tỷ USD (#35 thế giới)",
    "gdp_en": "~$418B (#35 globally)",
    "pc_vi": "~7.900 USD (PPP ~21.500 USD)",
    "pc_en": "~$7,900 (PPP ~$21,500)",
    "gr": "+1.8%",
    "sec": [
      64,
      27,
      9
    ],
    "main_vi": "Dầu thô (Ecopetrol) & than đá xuất khẩu, cà phê Arabica chế biến ướt (#3 thế giới), hoa tươi cắt cành (#2 thế giới), ngọc lục bảo (#1 chất lượng thế giới), du lịch & dịch vụ công nghệ (Medellín, Bogotá)",
    "main_en": "Crude oil (Ecopetrol) & thermal coal exports, washed Arabica coffee (#3 globally), cut flowers (#2 globally), emeralds, tourism & nearshore tech services (Medellín, Bogotá)",
    "note_vi": "Nền kinh tế lớn thứ 4 Mỹ Latinh có vị trí địa lý độc đáo tiếp giáp cả Thái Bình Dương lẫn biển Caribe; chưa từng vỡ nợ quốc gia kể từ thập niên 1930 và đang thúc đẩy chuyển dịch khỏi dầu mỏ – than đá sang du lịch và dịch vụ số.",
    "note_en": "Latin America's fourth-largest economy and the only South American nation bordering both the Pacific and Caribbean; boasts an unbroken sovereign debt repayment record since the 1930s while seeking to diversify beyond oil and coal."
  },
  "China": {
    "tier": "emg",
    "gdp_vi": "~18.800 tỷ USD (#2 thế giới, #1 PPP)",
    "gdp_en": "~$18.8T (#2 globally, #1 PPP)",
    "pc_vi": "~13.300 USD (PPP ~26.300 USD)",
    "pc_en": "~$13,300 (PPP ~$26,300)",
    "gr": "+5.0%",
    "sec": [
      55,
      38,
      7
    ],
    "main_vi": "Xe điện (EV), pin lithium, năng lượng mặt trời, điện tử, máy móc công nghiệp, thép, đất hiếm, đóng tàu, thương mại điện tử",
    "main_en": "EVs, lithium batteries, solar panels, electronics, industrial machinery, steel, rare earths, shipbuilding, e-commerce",
    "note_vi": "'Công xưởng của thế giới' nắm gần 30% giá trị gia tăng sản xuất toàn cầu; đang chuyển dịch từ bất động sản – hạ tầng sang công nghệ cao nhưng đối mặt già hóa dân số và phụ thuộc nhập khẩu dầu qua eo Malacca.",
    "note_en": "'Workshop of the world' accounting for ~30% of global manufacturing value-added; pivoting from property-led growth to high-tech 'new productive forces' amid demographic aging and Malacca Strait energy dependence."
  },
  "Macao": {
    "tier": "adv",
    "gdp_vi": "~53 tỷ USD",
    "gdp_en": "~$53B",
    "pc_vi": "~76.400 USD (PPP ~128.000 USD)",
    "pc_en": "~$76,400 (PPP ~$128,000)",
    "gr": "+8.8%",
    "sec": [
      95,
      5,
      0
    ],
    "main_vi": "Du lịch nghỉ dưỡng phức hợp, giải trí có thưởng (casino), hội nghị MICE, dịch vụ tài chính – thương mại Trung Quốc – các nước nói tiếng Bồ Đào Nha",
    "main_en": "Integrated resorts, gaming & casino tourism, MICE conventions, Lusophone-China trade & financial services",
    "note_vi": "Trung tâm giải trí có thưởng hợp pháp duy nhất của Trung Quốc với doanh thu vượt xa Las Vegas; thu nhập bình quân đầu người tính theo PPP thuộc nhóm cao nhất thế giới.",
    "note_en": "China's sole legal gaming jurisdiction generating revenues far surpassing Las Vegas; boasts one of the highest PPP per-capita incomes in the world."
  },
  "Hong Kong": {
    "tier": "adv",
    "gdp_vi": "~407 tỷ USD (#38 thế giới)",
    "gdp_en": "~$407B (#38 globally)",
    "pc_vi": "~54.100 USD (PPP ~75.100 USD)",
    "pc_en": "~$54,100 (PPP ~$75,100)",
    "gr": "+2.7%",
    "sec": [
      93,
      6,
      1
    ],
    "main_vi": "Ngân hàng & tài chính quốc tế, quản lý tài sản, trung chuyển cảng biển & hàng không, thương mại xuất nhập khẩu, bảo hiểm",
    "main_en": "International banking & finance, wealth management, port & air logistics transshipment, re-export trade, insurance",
    "note_vi": "Cửa ngõ vốn quốc tế lớn nhất nối Trung Quốc đại lục với thị trường tài chính toàn cầu; đồng HKD neo chặt vào USD và hưởng thuế suất thấp theo cơ chế 'Một quốc gia, hai chế độ'.",
    "note_en": "Premier financial gateway linking Mainland China with global capital markets; operates a USD-pegged currency board and free-port regime within the Greater Bay Area."
  },
  "Chile": {
    "tier": "emg",
    "gdp_vi": "~333 tỷ USD (#46 thế giới)",
    "gdp_en": "~$333B (#46 globally)",
    "pc_vi": "~16.800 USD (PPP ~33.000 USD)",
    "pc_en": "~$16,800 (PPP ~$33,000)",
    "gr": "+2.4%",
    "sec": [
      63,
      33,
      4
    ],
    "main_vi": "Khai thác đồng (#1 thế giới, ~25% nguồn cung toàn cầu – Codelco, Escondida), lithium sa mạc Atacama (#2 sản xuất, #1 trữ lượng thế giới), cá hồi nuôi (#2 thế giới), trái cây ôn đới trái vụ (anh đào, nho) & rượu vang, năng lượng mặt trời & hydro xanh",
    "main_en": "Copper mining (#1 globally, ~25% of world supply – Codelco, Escondida), Atacama brine lithium (#2 producer, #1 reserves), farmed salmon (#2 globally), counter-seasonal fruit (cherries, grapes) & wine, solar & green hydrogen",
    "note_vi": "Nền kinh tế có xếp hạng tín nhiệm và thể chế tài chính (hệ thống quỹ hưu trí tư nhân AFP) vững mạnh nhất Nam Mỹ; đóng vai trò trụ cột chuyển dịch năng lượng xanh toàn cầu nhờ nắm giữ mỏ đồng và lithium lớn nhất hành tinh.",
    "note_en": "South America's highest-rated sovereign credit with deep domestic capital markets; indispensable to the global energy transition as the world's #1 copper producer and holder of the largest economically extractable lithium reserves."
  },
  "Chad": {
    "tier": "low",
    "gdp_vi": "~18,5 tỷ USD",
    "gdp_en": "~$18.5B",
    "pc_vi": "~980 USD (PPP ~2.600 USD)",
    "pc_en": "~$980 (PPP ~$2,600)",
    "gr": "+3.2%",
    "sec": [
      34,
      33,
      33
    ],
    "main_vi": "Khai thác dầu thô (xuất khẩu qua đường ống dài 1.070 km tới cảng Kribi của Cameroon), chăn nuôi gia súc sống xuất khẩu, nhựa cây keo (gum arabic #2 thế giới), bông vải & hạt vừng",
    "main_en": "Crude oil extraction (exported via the 1,070 km Chad–Cameroon pipeline to Kribi), live cattle & livestock exports, gum arabic (#2 globally), cotton & sesame seeds",
    "note_vi": "Quốc gia không giáp biển rộng lớn ở vùng Sahel Trung Phi; dầu mỏ đóng góp hơn 75% kim ngạch xuất khẩu trong khi nông nghiệp và chăn nuôi nuôi sống 80% dân số cùng hơn 1 triệu người tị nạn từ nước láng giềng Sudan.",
    "note_en": "Vast landlocked Sahelian nation where oil transported via Cameroon generates over 75% of export earnings, while pastoralism and rain-fed farming sustain 80% of the population amid a massive influx of Sudanese refugees."
  },
  "Central African Rep.": {
    "tier": "low",
    "gdp_vi": "~2,8 tỷ USD",
    "gdp_en": "~$2.8B",
    "pc_vi": "~510 USD (PPP ~1.150 USD)",
    "pc_en": "~$510 (PPP ~$1,150)",
    "gr": "+1.5%",
    "sec": [
      45,
      21,
      34
    ],
    "main_vi": "Khai thác kim cương phù sa & vàng thủ công, gỗ tròn nhiệt đới, nông nghiệp tự cung tự cấp (sắn, ngô, lạc), cà phê & bông vải",
    "main_en": "Alluvial diamond & artisanal gold mining, tropical timber logging, subsistence agriculture (cassava, maize, groundnuts), coffee & cotton",
    "note_vi": "Một trong những quốc gia nghèo nhất thế giới dù lòng đất giàu kim cương, vàng và uranium; xung đột vũ trang kéo dài, thiếu đường ra biển và việc phần lớn hoạt động khai khoáng nằm ngoài tầm thu thuế chính thức khiến ngân sách phụ thuộc nặng vào viện trợ.",
    "note_en": "Among the world's lowest per-capita income nations despite rich alluvial diamond, gold, and timber endowments; landlocked geography and persistent security instability keep much of the mining economy informal."
  },
  "Cabo Verde": {
    "tier": "dev",
    "gdp_vi": "~2,7 tỷ USD",
    "gdp_en": "~$2.7B",
    "pc_vi": "~4.800 USD (PPP ~11.200 USD)",
    "pc_en": "~$4,800 (PPP ~$11,200)",
    "gr": "+5.1%",
    "sec": [
      74,
      20,
      6
    ],
    "main_vi": "Du lịch biển đảo quanh năm (đảo Sal và Boa Vista chiếm ~25% GDP), kiều hối từ cộng đồng hải ngoại (đông hơn dân số trong nước), chế biến cá ngừ & cá thu đóng hộp, dịch vụ hàng hải & hàng không Đại Tây Dương",
    "main_en": "Year-round beach resort tourism (Sal and Boa Vista islands ~25% of GDP), diaspora remittances (diaspora outnumbers resident population), canned tuna & mackerel exports, mid-Atlantic maritime & air services",
    "note_vi": "Quốc đảo ngoài khơi Tây Phi có nền dân chủ và quản trị minh bạch hàng đầu châu Phi; dù khan hiếm tài nguyên thiên nhiên và nước ngọt (phải lọc nước biển), đất nước vẫn vươn lên thu nhập trung bình nhờ du lịch và kiều hối với đồng Escudo neo vào Euro.",
    "note_en": "Archipelago off West Africa acclaimed for top-tier democratic governance; despite scarce arable land and reliance on desalinated water, it achieved middle-income status through European resort tourism, diaspora remittances, and a Euro-pegged currency."
  },
  "Canada": {
    "tier": "adv",
    "gdp_vi": "~2.240 tỷ USD (#9–10 thế giới)",
    "gdp_en": "~$2.24T (#9–10 globally)",
    "pc_vi": "~54.500 USD (PPP ~62.500 USD)",
    "pc_en": "~$54,500 (PPP ~$62,500)",
    "gr": "+1.3%",
    "sec": [
      71,
      27,
      2
    ],
    "main_vi": "Dầu khí & cát dầu Alberta (#4 sản xuất dầu thế giới), ngân hàng – bảo hiểm & quỹ hưu trí (Toronto), ô tô & hàng không vũ trụ (Ontario, Quebec), khoáng sản chiến lược (kali/potash #1 thế giới, uranium #2, vàng, niken), gỗ & nông sản (lúa mì, hạt cải dầu canola)",
    "main_en": "Oil sands & natural gas (#4 global oil producer), banking & pension finance (Toronto), automotive & aerospace manufacturing (Ontario, Quebec), critical minerals (#1 potash, #2 uranium, gold, nickel), timber & agribusiness (wheat, canola)",
    "note_vi": "Cường quốc tài nguyên và dịch vụ thuộc nhóm G7 có hơn 75% kim ngạch xuất khẩu gắn chặt với thị trường Mỹ theo hiệp định USMCA; sở hữu hệ thống ngân hàng ổn định bậc nhất thế giới và lưới điện 80% không phát thải nhờ thủy điện và điện hạt nhân.",
    "note_en": "G7 resource and services powerhouse sending over 75% of its exports to the US under USMCA; combines world-class mineral, energy, and agricultural endowments with one of the world's soundest banking systems and an ~80% low-carbon power grid."
  },
  "Cameroon": {
    "tier": "dev",
    "gdp_vi": "~53 tỷ USD",
    "gdp_en": "~$53B",
    "pc_vi": "~1.800 USD (PPP ~5.400 USD)",
    "pc_en": "~$1,800 (PPP ~$5,400)",
    "gr": "+3.9%",
    "sec": [
      52,
      29,
      19
    ],
    "main_vi": "Dầu thô & khí thiên nhiên hóa lỏng (FLNG Kribi), ca cao (#4–5 thế giới), gỗ nhiệt đới, cà phê, chuối & bông vải, luyện nhôm (Alucam), cảng biển trung chuyển Douala & Kribi",
    "main_en": "Crude oil & floating LNG (Kribi), cocoa beans (#4–5 globally), tropical timber, coffee, bananas & cotton, aluminum smelting (Alucam), Douala & Kribi port transit logistics",
    "note_vi": "Mệnh danh là 'Châu Phi thu nhỏ' nhờ địa hình – khí hậu đa dạng giúp nền kinh tế đa ngành và chống chịu tốt nhất Cộng đồng Kinh tế và Tiền tệ Trung Phi (CEMAC, chiếm hơn 40% GDP toàn khối); là cửa ngõ cảng biển cho Chad và Cộng hòa Trung Phi.",
    "note_en": "Known as 'Africa in miniature' for its ecological diversity, giving it the largest and most diversified economy in the Central African CEMAC bloc (>40% of regional GDP) and serving as the maritime gateway for landlocked Chad and CAR."
  },
  "Cambodia": {
    "tier": "dev",
    "gdp_vi": "~46 tỷ USD",
    "gdp_en": "~$46B",
    "pc_vi": "~2.630 USD (PPP ~8.200 USD)",
    "pc_en": "~$2,630 (PPP ~$8,200)",
    "gr": "+5.8%",
    "sec": [
      40,
      38,
      22
    ],
    "main_vi": "Dệt may – da giày – túi xách xuất khẩu (sang Mỹ, EU), xây dựng & bất động sản, du lịch (Angkor Wat), lúa gạo & hạt điều",
    "main_en": "Garments, footwear & travel goods exports (to US & EU), construction & real estate, tourism (Angkor Wat), rice & cashew nuts",
    "note_vi": "Nền kinh tế đô la hóa cao (sử dụng song song USD và Riel), tăng trưởng nhanh nhờ xuất khẩu dệt may và dòng vốn hạ tầng Trung Quốc (cảng Sihanoukville, kênh đào Phù Nam Techo).",
    "note_en": "Highly dollarized economy growing rapidly on garment exports to Western markets and Chinese-backed infrastructure (Sihanoukville port, Funan Techo Canal)."
  },
  "Myanmar": {
    "tier": "dev",
    "gdp_vi": "~64 tỷ USD",
    "gdp_en": "~$64B",
    "pc_vi": "~1.180 USD (PPP ~5.200 USD)",
    "pc_en": "~$1,180 (PPP ~$5,200)",
    "gr": "+1.0%",
    "sec": [
      38,
      39,
      23
    ],
    "main_vi": "Khí đốt tự nhiên (xuất sang Thái Lan & Trung Quốc), đất hiếm nặng, ngọc bích (jade), nông sản (gạo, đậu đỗ), dệt may gia công",
    "main_en": "Natural gas pipelines (to Thailand & China), heavy rare earths, jade & gems, agriculture (rice, pulses), garment assembly",
    "note_vi": "Giàu tài nguyên và nằm ở vị trí nối Trung Quốc với Ấn Độ Dương, nhưng xung đột vũ trang leo thang từ sau năm 2021 làm đồng Kyat mất giá mạnh, cắt đứt thương mại biên giới và đẩy kinh tế vào đình trệ.",
    "note_en": "Resource-rich crossroads linking Yunnan to the Indian Ocean, but post-2021 civil conflict has crippled border trade, sparked currency collapse, and disrupted power and manufacturing."
  },
  "Burundi": {
    "tier": "low",
    "gdp_vi": "~3,1 tỷ USD",
    "gdp_en": "~$3.1B",
    "pc_vi": "~230 USD (PPP ~950 USD, thấp nhất thế giới)",
    "pc_en": "~$230 (PPP ~$950, lowest globally)",
    "gr": "+3.8%",
    "sec": [
      43,
      18,
      39
    ],
    "main_vi": "Cà phê Arabica trồng trên vùng cao & trà đen (chiếm >80% nguồn thu ngoại tệ hàng hóa), nông nghiệp tự cung tự cấp (chuối, sắn, đậu), khai thác vàng thủ công, trữ lượng niken (Musongati) & đất hiếm",
    "main_en": "High-altitude Arabica coffee & black tea (>80% of merchandise FX earnings), subsistence farming (plantains, cassava, beans), artisanal gold, undeveloped nickel (Musongati) & rare-earth deposits",
    "note_vi": "Quốc gia không giáp biển mật độ dân số cực cao bên hồ Tanganyika, hiện có GDP bình quân đầu người thấp nhất thế giới khi gần 90% lực lượng lao động làm nông nghiệp quy mô hộ gia đình nhỏ lẻ và thiếu hụt ngoại tệ, nhiên liệu kinh niên.",
    "note_en": "Densely populated landlocked nation on Lake Tanganyika with the world's lowest GDP per capita; nearly 90% of the workforce depends on smallholder rain-fed agriculture while coffee and tea provide critical foreign exchange."
  },
  "Burkina Faso": {
    "tier": "low",
    "gdp_vi": "~21,5 tỷ USD",
    "gdp_en": "~$21.5B",
    "pc_vi": "~910 USD (PPP ~2.800 USD)",
    "pc_en": "~$910 (PPP ~$2,800)",
    "gr": "+4.8%",
    "sec": [
      46,
      32,
      22
    ],
    "main_vi": "Khai thác vàng công nghiệp & thủ công (chiếm ~80% kim ngạch xuất khẩu, #4 châu Phi), bông vải ('vàng trắng' vùng Sahel), hạt điều & hạt vừng, chăn nuôi gia súc",
    "main_en": "Industrial & artisanal gold mining (~80% of export earnings, #4 producer in Africa), cotton ('white gold' of the Sahel), sesame & cashew nuts, livestock",
    "note_vi": "Quốc gia không giáp biển ở Tây Phi nơi vàng đã vượt xa bông vải trở thành trụ cột xuất khẩu số 1 từ năm 2009; tuy nhiên khủng hoảng an ninh tại vùng Sahel đã buộc nhiều mỏ vàng và vùng canh tác phải thu hẹp hoạt động.",
    "note_en": "Landlocked Sahelian nation where gold overtook cotton in 2009 to account for ~80% of exports; ongoing jihadist insurgency and political transitions have disrupted mining operations and displaced over two million rural residents."
  },
  "Bulgaria": {
    "tier": "adv",
    "gdp_vi": "~108 tỷ USD (#67 thế giới)",
    "gdp_en": "~$108B (#67 globally)",
    "pc_vi": "~16.800 USD (PPP ~38.500 USD)",
    "pc_en": "~$16,800 (PPP ~$38,500)",
    "gr": "+2.2%",
    "sec": [
      69,
      27,
      4
    ],
    "main_vi": "Gia công phần mềm & dịch vụ CNTT (Sofia), linh kiện ô tô & thiết bị điện, luyện đồng (Aurubis) & xuất khẩu điện (nhà máy hạt nhân Kozloduy), công nghiệp đạn dược, nông sản (lúa mì, hướng dương, tinh dầu hoa hồng #1 thế giới), du lịch Biển Đen",
    "main_en": "IT outsourcing & software development (Sofia), automotive components & electrical equipment, copper refining (Aurubis) & electricity exports (Kozloduy nuclear plant), defense ammunition, agriculture (#1 rose oil, wheat, sunflower), Black Sea tourism",
    "note_vi": "Áp dụng mức thuế thu nhập cá nhân và doanh nghiệp đồng nhất 10% — thấp nhất EU — giúp thủ đô Sofia trở thành trung tâm công nghệ Đông Nam Âu; đồng Lev neo chặt vào Euro thông qua cơ chế Hội đồng Tiền tệ và vừa gia nhập hoàn toàn khối Schengen.",
    "note_en": "Maintains the EU's lowest flat corporate and personal income tax rate (10%), turning Sofia into a thriving Southeastern European IT hub; operates a strict Euro currency board and achieved full Schengen integration."
  },
  "Brunei": {
    "tier": "adv",
    "gdp_vi": "~15,5 tỷ USD",
    "gdp_en": "~$15.5B",
    "pc_vi": "~34.300 USD (PPP ~77.500 USD)",
    "pc_en": "~$34,300 (PPP ~$77,500)",
    "gr": "+2.4%",
    "sec": [
      37,
      62,
      1
    ],
    "main_vi": "Dầu thô ngoài khơi, khí đốt hóa lỏng (LNG), lọc hóa dầu (tổ hợp Pulau Muara Besar), phân bón urê",
    "main_en": "Offshore crude oil, liquefied natural gas (LNG), petrochemical refining (Pulau Muara Besar), urea fertilizers",
    "note_vi": "Nhà nước phúc lợi dầu khí giàu có trên đảo Borneo (không thu thuế thu nhập cá nhân); dầu mỏ và LNG chiếm hơn 90% kim ngạch xuất khẩu nhưng các mỏ lâu năm đang suy giảm trữ lượng.",
    "note_en": "Hydrocarbon-funded sultanate on Borneo offering cradle-to-grave welfare and zero personal income tax, while seeking petrochemical diversification as mature offshore oil fields decline."
  },
  "Brazil": {
    "tier": "emg",
    "gdp_vi": "~2.190 tỷ USD (#8–10 thế giới)",
    "gdp_en": "~$2.19T (#8–10 globally)",
    "pc_vi": "~10.300 USD (PPP ~21.800 USD)",
    "pc_en": "~$10,300 (PPP ~$21,800)",
    "gr": "+3.0%",
    "sec": [
      69,
      24,
      7
    ],
    "main_vi": "Siêu cường nông sản xuất khẩu (#1 thế giới về đậu tương, cà phê, đường, nước cam, thịt bò, thịt gà), dầu khí tầng muối sâu ngoài khơi (Pre-salt – Petrobras), quặng sắt (#2 thế giới – Vale), máy bay phản lực thương mại (Embraer), ngân hàng số & Fintech (Nubank, hệ thống thanh toán Pix), nhiên liệu sinh học ethanol",
    "main_en": "Global agribusiness superpower (#1 exporter of soybeans, coffee, sugar, orange juice, beef, poultry), deepwater pre-salt oil & gas (Petrobras), iron ore (#2 globally – Vale), commercial regional jets (Embraer), fintech & banking (Nubank, Pix instant payments), sugarcane ethanol",
    "note_vi": "Nền kinh tế lớn nhất Mỹ Latinh kết hợp vị thế 'vựa lương thực và khoáng sản của thế giới' với ngành công nghiệp hàng không (Embraer), dầu khí nước sâu và một trong những lưới điện – giao thông xanh nhất nhóm G20 nhờ thủy điện và xăng sinh học.",
    "note_en": "Latin America's economic giant combining global dominance in food and iron ore exports with deepwater pre-salt oil production, regional aircraft manufacturing (Embraer), universal instant digital payments (Pix), and an ~85% renewable power grid."
  },
  "Botswana": {
    "tier": "dev",
    "gdp_vi": "~19,8 tỷ USD",
    "gdp_en": "~$19.8B",
    "pc_vi": "~7.400 USD (PPP ~20.200 USD)",
    "pc_en": "~$7,400 (PPP ~$20,200)",
    "gr": "+1.0%",
    "sec": [
      66,
      32,
      2
    ],
    "main_vi": "Khai thác, phân loại & buôn bán kim cương tự nhiên (#1 thế giới theo giá trị, #2 theo sản lượng qua liên doanh Debswana với De Beers), khai thác đồng (Khoemacau), du lịch safari sinh thái cao cấp (châu thổ Okavango), xuất khẩu thịt bò sang EU",
    "main_en": "Natural diamond mining, sorting & trading (#1 globally by value via Debswana joint venture with De Beers), copper mining (Khoemacau), high-value low-impact safari tourism (Okavango Delta), beef exports",
    "note_vi": "Câu chuyện thành công kinh điển của châu Phi khi chuyển hóa nguồn thu kim cương từ một nước nghèo nhất thế giới lúc độc lập (1966) thành quốc gia thu nhập trung bình cao có xếp hạng tín nhiệm hàng đầu lục địa, dù đang chịu áp lực từ sự trỗi dậy của kim cương nhân tạo.",
    "note_en": "Africa's benchmark resource-governance success story, transforming from one of the world's poorest nations in 1966 into an upper-middle-income economy through prudent diamond revenue management, though now challenged by lab-grown diamond competition."
  },
  "Bosnia and Herz.": {
    "tier": "dev",
    "gdp_vi": "~29 tỷ USD",
    "gdp_en": "~$29B",
    "pc_vi": "~8.600 USD (PPP ~22.500 USD)",
    "pc_en": "~$8,600 (PPP ~$22,500)",
    "gr": "+2.5%",
    "sec": [
      65,
      29,
      6
    ],
    "main_vi": "Gia công kim loại & phụ tùng ô tô xuất khẩu sang EU, sản xuất và xuất khẩu điện (thủy điện & nhiệt điện), chế biến gỗ & nội thất, công nghiệp đạn dược, du lịch (Sarajevo, Mostar) & kiều hối",
    "main_en": "Metal processing & automotive parts for EU supply chains, electricity generation & net exports (hydro & coal), wood processing & furniture, defense ammunition, heritage/winter tourism & remittances",
    "note_vi": "Một trong số ít quốc gia vùng Balkan xuất khẩu ròng điện năng; đồng Marka chuyển đổi (BAM) được neo cứng vào đồng Euro theo cơ chế Hội đồng Tiền tệ giúp giữ ổn định tiền tệ bất chấp cấu trúc hành chính phức tạp hậu Hiệp định Dayton.",
    "note_en": "A net electricity exporter in the Balkans whose Convertible Mark (BAM) is strictly pegged to the Euro via a currency board, anchoring monetary stability alongside complex post-Dayton decentralized governance."
  },
  "Bolivia": {
    "tier": "dev",
    "gdp_vi": "~48 tỷ USD",
    "gdp_en": "~$48B",
    "pc_vi": "~3.900 USD (PPP ~11.100 USD)",
    "pc_en": "~$3,900 (PPP ~$11,100)",
    "gr": "+1.6%",
    "sec": [
      54,
      33,
      13
    ],
    "main_vi": "Khí đốt tự nhiên (xuất khẩu sang Brazil & Argentina), khai thác bạc, kẽm, thiếc & vàng, trữ lượng lithium lớn nhất thế giới (cánh đồng muối Salar de Uyuni), đậu tương & hạt diêm mạch (quinoa) vùng Santa Cruz",
    "main_en": "Natural gas exports (to Brazil & Argentina), silver, zinc, tin & gold mining, world's largest lithium resource (Salar de Uyuni salt flats), soybeans & quinoa agribusiness (Santa Cruz)",
    "note_vi": "Quốc gia không giáp biển ở dãy Andes nắm giữ trữ lượng tài nguyên lithium thô lớn nhất hành tinh (~23 triệu tấn tại Uyuni) nhưng khai thác thương mại còn chậm; sự suy giảm sản lượng khí đốt tự nhiên gần đây đã gây ra tình trạng cạn kiệt dự trữ ngoại tệ USD và thiếu nhiên liệu.",
    "note_en": "Landlocked Andean nation holding the world's largest raw lithium resource (~23M tons at Salar de Uyuni), though commercial extraction lags; declining natural gas output has recently triggered acute USD reserve shortages and fuel queues."
  },
  "Bhutan": {
    "tier": "dev",
    "gdp_vi": "~3,1 tỷ USD",
    "gdp_en": "~$3.1B",
    "pc_vi": "~3.900 USD (PPP ~15.400 USD)",
    "pc_en": "~$3,900 (PPP ~$15,400)",
    "gr": "+4.9%",
    "sec": [
      47,
      38,
      15
    ],
    "main_vi": "Thủy điện xuất khẩu sang Ấn Độ, du lịch sinh thái 'giá trị cao – tác động thấp', hợp kim fero-silic, nông lâm nghiệp hữu cơ",
    "main_en": "Hydropower exports to India, 'high-value, low-volume' eco-tourism, ferrosilicon alloys, organic forestry & agriculture",
    "note_vi": "Nổi tiếng với chỉ số 'Tổng hạnh phúc quốc gia' (GNH) và là quốc gia âm carbon; dòng sông dốc từ Himalaya biến thủy điện bán cho Ấn Độ thành trụ cột ngân sách và ngoại tệ.",
    "note_en": "Pioneered 'Gross National Happiness' (GNH) as a carbon-negative kingdom; steep Himalayan rivers generate abundant hydropower sold to India as the primary source of state revenue."
  },
  "Benin": {
    "tier": "low",
    "gdp_vi": "~21,4 tỷ USD",
    "gdp_en": "~$21.4B",
    "pc_vi": "~1.500 USD (PPP ~4.500 USD)",
    "pc_en": "~$1,500 (PPP ~$4,500)",
    "gr": "+6.3%",
    "sec": [
      51,
      22,
      27
    ],
    "main_vi": "Sản xuất & chế biến bông vải (#1–2 châu Phi), dịch vụ cảng biển Cotonou & thương mại quá cảnh sang Nigeria và Niger, khu công nghiệp Glo-Djigbé (GDIZ – dệt may, chế biến điều & đậu tương), trạm cuối đường ống dẫn dầu Niger – Benin",
    "main_en": "Cotton production & ginning (#1–2 in Africa), Port of Cotonou transit trade (to Nigeria & landlocked neighbours), Glo-Djigbé Industrial Zone (GDIZ – textiles, cashew & soy processing), Niger–Benin oil pipeline terminal",
    "note_vi": "Nền kinh tế tăng trưởng nhanh và ổn định hàng đầu Tây Phi nhờ chiến lược công nghiệp hóa tại Khu công nghiệp Glo-Djigbé (cấm xuất khẩu bông và hạt điều thô để ép chế biến nội địa) cùng vai trò cửa ngõ hàng hải Vịnh Guinea.",
    "note_en": "One of West Africa's fastest-growing economies, spearheading value-added industrialization at the Glo-Djigbé Special Economic Zone (banning raw cotton and cashew exports in favor of local processing) alongside Port of Cotonou logistics."
  },
  "Belize": {
    "tier": "dev",
    "gdp_vi": "~3,3 tỷ USD",
    "gdp_en": "~$3.3B",
    "pc_vi": "~7.900 USD (PPP ~14.500 USD)",
    "pc_en": "~$7,900 (PPP ~$14,500)",
    "gr": "+4.5%",
    "sec": [
      70,
      19,
      11
    ],
    "main_vi": "Du lịch biển & lặn ngắm rạn san hô (Rạn san hô chắn bờ Belize lớn thứ 2 thế giới), gia công quy trình kinh doanh bằng tiếng Anh (BPO), đường mía, chuối, nước cam cô đặc & thủy sản",
    "main_en": "Marine & eco-tourism (Belize Barrier Reef – #2 globally), English-speaking BPO call centers, sugar, bananas, citrus concentrates & farmed seafood",
    "note_vi": "Quốc gia nói tiếng Anh duy nhất tại Trung Mỹ (vừa thuộc Trung Mỹ vừa thuộc CARICOM) với đồng Đô la Belize neo cố định 2:1 vào USD từ năm 1978; nổi tiếng với thỏa thuận 'Đổi nợ lấy bảo tồn biển' (Blue Bond) năm 2021 giúp xóa giảm mạnh nợ công.",
    "note_en": "Central America's sole English-speaking nation bridging Central America and CARICOM with a 2:1 USD currency peg since 1978; pioneered a landmark 2021 'Blue Bond' debt-for-marine-conservation swap that sharply reduced public debt."
  },
  "Belgium": {
    "tier": "adv",
    "gdp_vi": "~655 tỷ USD (#22 thế giới)",
    "gdp_en": "~$655B (#22 globally)",
    "pc_vi": "~55.500 USD (PPP ~70.500 USD)",
    "pc_en": "~$55,500 (PPP ~$70,500)",
    "gr": "+1.2%",
    "sec": [
      78,
      21,
      1
    ],
    "main_vi": "Hóa chất & dược phẩm – vắc-xin (cụm cảng Antwerp & GSK, UCB, Janssen), trung tâm thanh toán chứng khoán quốc tế (Euroclear, SWIFT), thương mại kim cương (Antwerp), nghiên cứu bán dẫn (IMEC Leuven), thực phẩm – đồ uống (AB InBev – tập đoàn bia #1 thế giới, sô-cô-la), dịch vụ công quyền EU & NATO (Brussels)",
    "main_en": "Chemicals & biopharma/vaccines (Antwerp cluster, GSK, UCB, Janssen), global financial infrastructure (Euroclear, SWIFT), diamond trading (Antwerp), semiconductor R&D (IMEC Leuven), food & beverage (AB InBev – world's #1 brewer, chocolate), EU & NATO institutional headquarters (Brussels)",
    "note_vi": "Trái tim hành chính – ngoại giao của châu Âu và là một trong những nền kinh tế mở nhất thế giới; sở hữu cảng Antwerp-Bruges lớn thứ 2 châu Âu, viện nghiên cứu bán dẫn IMEC hàng đầu thế giới và hạ tầng tài chính trọng yếu SWIFT/Euroclear.",
    "note_en": "Administrative capital of the EU and NATO with one of the world's highest trade-to-GDP ratios; hosts Europe's second-largest port (Antwerp-Bruges), critical global financial plumbing (SWIFT, Euroclear), and premier chip R&D center IMEC."
  },
  "Belarus": {
    "tier": "dev",
    "gdp_vi": "~73 tỷ USD",
    "gdp_en": "~$73B",
    "pc_vi": "~8.000 USD (PPP ~30.500 USD)",
    "pc_en": "~$8,000 (PPP ~$30,500)",
    "gr": "+3.8%",
    "sec": [
      51,
      42,
      7
    ],
    "main_vi": "Phân bón kali (potash – Belaruskali, top 3 thế giới), lọc dầu (từ dầu thô Nga giá ưu đãi), máy kéo (MTZ) & xe tải siêu trọng mỏ (BelAZ), công nghiệp quốc phòng, chế biến sữa & thực phẩm xuất sang Nga, công nghệ thông tin",
    "main_en": "Potash fertilizers (Belaruskali, top-3 globally), oil refining (discounted Russian crude), tractors (MTZ) & ultra-heavy mining dump trucks (BelAZ), defense manufacturing, dairy & meat exports to Russia, IT services",
    "note_vi": "Nền kinh tế giữ tỷ trọng doanh nghiệp nhà nước lớn từ thời Liên Xô; chịu các lệnh trừng phạt sâu rộng của phương Tây từ năm 2021–2022 nên đã chuyển hướng hơn 65% thương mại ngoại thương và vận tải cảng biển sang Liên bang Nga.",
    "note_en": "Retains a large Soviet-legacy state industrial sector; heavily sanctioned by the EU and US since 2021–2022, prompting a decisive pivot toward Russia, which now absorbs over 65% of Belarusian exports and provides discounted energy."
  },
  "Barbados": {
    "tier": "adv",
    "gdp_vi": "~6,9 tỷ USD",
    "gdp_en": "~$6.9B",
    "pc_vi": "~24.500 USD (PPP ~22.000 USD)",
    "pc_en": "~$24,500 (PPP ~$22,000)",
    "gr": "+3.9%",
    "sec": [
      85,
      13,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp & tàu du lịch (Bridgetown), dịch vụ tài chính – bảo hiểm quốc tế & quản lý doanh nghiệp toàn cầu, sản xuất rượu rum truyền thống (Mount Gay – quê hương rượu rum thế giới), năng lượng tái tạo",
    "main_en": "Upscale beach resort & cruise tourism (Bridgetown), international banking, captive insurance & corporate services, heritage rum distilling (Mount Gay – birthplace of rum), renewable energy",
    "note_vi": "Đảo quốc giàu có nhất phía Đông Caribe với chỉ số phát triển con người (HDI) rất cao và đồng Đô la Barbados neo 2:1 với USD từ năm 1975; tiên phong toàn cầu với 'Sáng kiến Bridgetown' kêu gọi cải tổ hệ thống tài chính khí hậu quốc tế.",
    "note_en": "Wealthiest and most developed island in the Eastern Caribbean with a 2:1 USD currency peg held since 1975; globally influential through its 'Bridgetown Initiative' advocating international climate-finance reform."
  },
  "Bangladesh": {
    "tier": "dev",
    "gdp_vi": "~450 tỷ USD (#37 thế giới)",
    "gdp_en": "~$450B (#37 globally)",
    "pc_vi": "~2.600 USD (PPP ~9.400 USD)",
    "pc_en": "~$2,600 (PPP ~$9,400)",
    "gr": "+4.5%",
    "sec": [
      52,
      36,
      12
    ],
    "main_vi": "May mặc xuất khẩu (#2 thế giới sau Trung Quốc, chiếm >80% xuất khẩu), kiều hối (>23 tỷ USD), đay, dược phẩm nội địa, nông thủy sản",
    "main_en": "Ready-made garments (#2 globally after China, >80% of exports), remittances (>$23B), jute, domestic pharmaceuticals, agriculture",
    "note_vi": "Châu thổ sông Hằng – Brahmaputra đông dân tận dụng nguồn lao động dồi dào để trở thành công xưởng may mặc toàn cầu, song dễ tổn thương trước biến đổi khí hậu, thiếu hụt ngoại tệ và bất ổn chuyển giao chính trị.",
    "note_en": "Leveraged its massive delta labor pool to become the world's second-largest garment exporter, while navigating foreign-exchange pressures, energy shortages, and extreme climate vulnerability."
  },
  "Bahrain": {
    "tier": "adv",
    "gdp_vi": "~47 tỷ USD",
    "gdp_en": "~$47B",
    "pc_vi": "~29.500 USD (PPP ~62.700 USD)",
    "pc_en": "~$29,500 (PPP ~$62,700)",
    "gr": "+3.0%",
    "sec": [
      58,
      42,
      0
    ],
    "main_vi": "Tài chính – ngân hàng (đặc biệt ngân hàng Hồi giáo & fintech), luyện nhôm (Alba – một trong những nhà máy lớn nhất thế giới), lọc dầu, du lịch từ Ả Rập Xê Út",
    "main_en": "Islamic banking & fintech, aluminum smelting (Alba – one of the world's largest smelters), oil refining, causeway tourism from Saudi Arabia",
    "note_vi": "Quốc gia vùng Vịnh đầu tiên phát hiện dầu mỏ (1932) nhưng trữ lượng nhỏ nên sớm chuyển sang ngân hàng và luyện nhôm; kinh tế gắn chặt với Ả Rập Xê Út qua cầu vượt biển King Fahd và mỏ dầu chung Abu Safah.",
    "note_en": "With modest oil reserves compared to neighbors, Bahrain pioneered Gulf banking and massive aluminum smelting, remaining economically tied to Saudi Arabia via the King Fahd Causeway."
  },
  "Bahamas": {
    "tier": "adv",
    "gdp_vi": "~14,8 tỷ USD",
    "gdp_en": "~$14.8B",
    "pc_vi": "~36.000 USD (PPP ~38.500 USD)",
    "pc_en": "~$36,000 (PPP ~$38,500)",
    "gr": "+2.3%",
    "sec": [
      87,
      12,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng siêu tổ hợp & tàu du lịch (Nassau, Atlantis, Baha Mar – đón ~10 triệu khách/năm, chiếm >50% GDP), ngân hàng tư nhân & quản lý quỹ ngoài khơi, đăng ký tàu biển quốc tế (#3 thế giới), trung chuyển container (Freeport)",
    "main_en": "Mega-resort & cruise tourism (Nassau, Atlantis, Baha Mar – ~10M visitors/yr, >50% of GDP), offshore private banking & wealth management, international ship registry (#3 globally), container transshipment (Freeport)",
    "note_vi": "Quốc gia độc lập giàu có nhất vùng Caribe nhờ vị trí chỉ cách bờ biển Florida (Mỹ) 80 km, đồng Đô la Bahamas ngang giá 1:1 với USD và chính sách không đánh thuế thu nhập cá nhân hay thuế thu nhập doanh nghiệp.",
    "note_en": "The wealthiest independent nation in the Caribbean, leveraging its proximity just 80 km off Florida, a 1:1 USD currency peg, and zero personal or corporate income taxes to anchor mega-resort tourism and private wealth management."
  },
  "Azerbaijan": {
    "tier": "emg",
    "gdp_vi": "~76 tỷ USD",
    "gdp_en": "~$76B",
    "pc_vi": "~7.380 USD (PPP ~21.300 USD)",
    "pc_en": "~$7,380 (PPP ~$21,300)",
    "gr": "+4.2%",
    "sec": [
      43,
      51,
      6
    ],
    "main_vi": "Dầu thô & khí đốt biển Caspi (~90% xuất khẩu), đường ống khí đốt Hành lang phía Nam sang châu Âu (TANAP/TAP), hóa dầu, nông sản",
    "main_en": "Caspian crude oil & natural gas (~90% of exports), Southern Gas Corridor pipelines to Europe (TANAP/TAP), petrochemicals, agriculture",
    "note_vi": "Dầu khí biển Caspi là trụ cột tuyệt đối của nền kinh tế và Quỹ Dầu mỏ Quốc gia (SOFAZ >55 tỷ USD); Baku trở thành nhà cung cấp khí đốt thay thế quan trọng cho châu Âu qua Thổ Nhĩ Kỳ.",
    "note_en": "Caspian hydrocarbons account for ~90% of exports and fund the $55B+ SOFAZ sovereign wealth fund, positioning Baku as a strategic alternative gas supplier to Europe."
  },
  "Austria": {
    "tier": "adv",
    "gdp_vi": "~525 tỷ USD (#27 thế giới)",
    "gdp_en": "~$525B (#27 globally)",
    "pc_vi": "~57.500 USD (PPP ~71.000 USD)",
    "pc_en": "~$57,500 (PPP ~$71,000)",
    "gr": "-0.4%",
    "sec": [
      71,
      28,
      1
    ],
    "main_vi": "Cơ khí chính xác, linh kiện ô tô & luyện thép đặc biệt (Voestalpine, Magna), du lịch trượt tuyết dãy Alps & văn hóa cổ điển (Vienna, Salzburg), ngân hàng khu vực Trung – Đông Âu (Erste, Raiffeisen), đồ uống (Red Bull), thủy điện & lâm nghiệp",
    "main_en": "Precision machinery, automotive components & specialty steel (Voestalpine, Magna), Alpine ski & classical cultural tourism (Vienna, Salzburg), Central & Eastern European banking (Erste, Raiffeisen), beverages (Red Bull), hydropower & forestry",
    "note_vi": "Nền kinh tế giàu có vùng Alps đóng vai trò trung tâm tài chính và đầu tư vào khu vực Trung – Đông Âu; sản xuất gần 80% điện năng từ thủy điện và nguồn tái tạo cùng mạng lưới doanh nghiệp công nghiệp xuất khẩu ngách trình độ cao.",
    "note_en": "Affluent Alpine economy serving as the financial and corporate bridge to Central and Eastern Europe; generates ~80% of its electricity from hydropower and renewables while excelling in niche industrial engineering and year-round tourism."
  },
  "Australia": {
    "tier": "adv",
    "gdp_vi": "~1.790 tỷ USD (#13 thế giới)",
    "gdp_en": "~$1.79T (#13 globally)",
    "pc_vi": "~66.000 USD (PPP ~70.500 USD)",
    "pc_en": "~$66,000 (PPP ~$70,500)",
    "gr": "+1.5%",
    "sec": [
      72,
      25,
      3
    ],
    "main_vi": "Khai thác quặng sắt (#1 thế giới – BHP, Rio Tinto, Fortescue), lithium cứng spodumene (#1 sản xuất thế giới), khí thiên nhiên hóa lỏng (LNG) & than luyện kim, vàng (#3 thế giới), dịch vụ tài chính & quỹ hưu trí (Superannuation ~2.600 tỷ USD), giáo dục quốc tế, nông sản (thịt bò, lúa mì, len lông cừu, rượu vang)",
    "main_en": "Iron ore mining (#1 globally – BHP, Rio Tinto, Fortescue), hard-rock lithium (#1 global producer), liquefied natural gas (LNG) & metallurgical coal, gold (#3 globally), banking & compulsory superannuation funds (~$2.6T), international higher education, agribusiness (beef, wheat, merino wool, wine)",
    "note_vi": "Cường quốc tài nguyên giàu có bậc nhất khu vực châu Á – Thái Bình Dương cung cấp nguyên liệu cốt lõi cho công nghiệp hóa châu Á; sở hữu hệ thống quỹ hưu trí bắt buộc (Superannuation) lớn thứ 4 thế giới giúp tạo nguồn vốn nội địa khổng lồ.",
    "note_en": "Resource and services powerhouse fueling Asian industrialization as the world's top exporter of iron ore, lithium, and coking coal, backed by the world's fourth-largest pension pool (compulsory Superannuation) and a booming international education sector."
  },
  "Indian Ocean Ter.": {
    "tier": "adv",
    "gdp_vi": "~0,18 tỷ USD (Cơ sở kinh tế đảo Christmas & quần đảo Cocos/Keeling thuộc Úc)",
    "gdp_en": "~$0.18B (Australian territories of Christmas Island & Cocos/Keeling Islands)",
    "pc_vi": "~60.000 USD",
    "pc_en": "~$60,000",
    "gr": "+1.5%",
    "sec": [
      62,
      36,
      2
    ],
    "main_vi": "Khai thác quặng phốt phát xuất khẩu sang Đông Nam Á (Christmas Island Phosphates), dịch vụ công & hạ tầng quốc phòng – viễn thông của Chính phủ Úc, du lịch sinh thái (xem cua đỏ di cư trên đảo Christmas, lướt ván diều tại Cocos)",
    "main_en": "Phosphate rock mining exported to Southeast Asia (Christmas Island Phosphates), Australian federal public administration & defense/telecom infrastructure, eco-tourism (Christmas Island red crab migration, Cocos lagoon watersports)",
    "note_vi": "Hai lãnh thổ hải ngoại của Úc tại Ấn Độ Dương (đảo Christmas và quần đảo Cocos/Keeling, tổng dân số ~2.500 người) sử dụng đồng Đô la Úc (AUD); kinh tế đảo Christmas dựa vào mỏ phốt phát và chi tiêu liên bang Úc trong khi Cocos phát triển du lịch đầm phá và trạm cáp quang.",
    "note_en": "Comprises Australia's external Indian Ocean territories of Christmas Island and the Cocos (Keeling) Islands (~2,500 residents total) using the Australian dollar; anchored by Christmas Island phosphate mining, federal defense/admin spending, and niche eco-tourism."
  },
  "Heard I. and McDonald Is.": {
    "tier": "adv",
    "gdp_vi": "~0,02 tỷ USD (Ngư trường đặc quyền kinh tế biển thuộc Úc)",
    "gdp_en": "~$0.02B (Australian Exclusive Economic Zone fishery)",
    "pc_vi": "Không có cư dân sinh sống (0 người)",
    "pc_en": "Uninhabited (0 permanent residents)",
    "gr": "0.0%",
    "sec": [
      20,
      0,
      80
    ],
    "main_vi": "Đánh bắt cá răng Patagonian (Patagonian toothfish) và cá băng (mackerel icefish) có chứng nhận bền vững MSC trong vùng biển EEZ 410.000 km², nghiên cứu khoa học núi lửa & băng hà vùng cận Nam Cực",
    "main_en": "MSC-certified sustainable Patagonian toothfish & mackerel icefish commercial fisheries within its 410,000 km² EEZ, sub-Antarctic glaciology & volcanology research expeditions",
    "note_vi": "Quần đảo núi lửa phủ băng không có người ở thuộc lãnh thổ hải ngoại của Úc tại Nam Đại Dương (Di sản Thiên nhiên Thế giới UNESCO); hoạt động kinh tế duy nhất là đội tàu cá Úc được cấp hạn ngạch nghiêm ngặt đánh bắt cá răng Patagonian giá trị cao.",
    "note_en": "Uninhabited, glaciated volcanic UNESCO World Heritage territory of Australia in the Southern Ocean; economic activity consists solely of strictly quota-managed Australian commercial vessels harvesting high-value Patagonian toothfish."
  },
  "Norfolk Island": {
    "tier": "adv",
    "gdp_vi": "~0,09 tỷ USD",
    "gdp_en": "~$0.09B",
    "pc_vi": "~41.000 USD",
    "pc_en": "~$41,000",
    "gr": "+2.0%",
    "sec": [
      82,
      12,
      6
    ],
    "main_vi": "Du lịch nghỉ dưỡng & di sản (Khu di tích lịch sử Kingston – UNESCO, đón ~30.000 khách Úc và New Zealand mỗi năm), xuất khẩu hạt giống thông Norfolk Island Pine, nông nghiệp hữu cơ & chăn nuôi bò địa phương, dịch vụ công của Úc",
    "main_en": "Heritage & nature tourism (UNESCO Kingston convict site, ~30,000 Australian/NZ visitors/yr), Norfolk Island pine seed exports, local organic agriculture & cattle, Australian public services",
    "note_vi": "Lãnh thổ hải ngoại của Úc tại Nam Thái Bình Dương (~2.200 dân); từ năm 2016 đã tích hợp hoàn toàn vào hệ thống thuế, an sinh xã hội (Medicare) và ngân sách liên bang Úc với du lịch chiếm hơn 60% hoạt động kinh tế trên đảo.",
    "note_en": "External territory of Australia in the South Pacific (~2,200 residents); fully integrated into Australia's federal tax and Medicare welfare system since 2016, with tourism from mainland Australia and New Zealand driving over 60% of island activity."
  },
  "Ashmore and Cartier Is.": {
    "tier": "adv",
    "gdp_vi": "0 USD (Khu bảo tồn thiên nhiên biển nghiêm ngặt thuộc Úc)",
    "gdp_en": "$0 (Strict Australian Commonwealth Marine Reserve)",
    "pc_vi": "Không có cư dân sinh sống (0 người)",
    "pc_en": "Uninhabited (0 permanent residents)",
    "gr": "0.0%",
    "sec": [
      100,
      0,
      0
    ],
    "main_vi": "Bảo tồn đa dạng sinh học biển & rạn san hô (Ashmore Reef & Cartier Island Marine Parks), tuần tra biên giới hàng hải của Lực lượng Biên phòng Úc (ABF), đánh bắt sinh kế truyền thống quy mô nhỏ của ngư dân Indonesia theo Bản ghi nhớ MOU 1974",
    "main_en": "Marine biodiversity conservation (Ashmore Reef & Cartier Island Marine Parks), Australian Border Force maritime surveillance, limited traditional Indonesian artisanal fishing under the 1974 MOU Box",
    "note_vi": "Lãnh thổ hải ngoại không người ở gồm các đảo cát và rạn san hô của Úc tại biển Timor (nằm giữa Tây Úc và đảo Rote của Indonesia); không có hoạt động khai thác thương mại trên đảo dù vùng thềm lục địa lân cận thuộc bể dầu khí Bonaparte.",
    "note_en": "Uninhabited coral reef and sand cay territory of Australia in the Timor Sea between Western Australia and Indonesia; managed strictly as marine nature reserves with no commercial on-island activity beyond maritime border patrols and traditional Indonesian MOU fishing."
  },
  "Armenia": {
    "tier": "emg",
    "gdp_vi": "~25,4 tỷ USD",
    "gdp_en": "~$25.4B",
    "pc_vi": "~8.500 USD (PPP ~23.400 USD)",
    "pc_en": "~$8,500 (PPP ~$23,400)",
    "gr": "+6.0%",
    "sec": [
      62,
      27,
      11
    ],
    "main_vi": "Công nghệ thông tin & phần mềm, khai thác đồng & molypden, chế tác vàng – kim cương tái xuất, rượu brandy (Ararat), kiều hối",
    "main_en": "IT & software engineering, copper & molybdenum mining, gold & diamond processing/re-exports, brandy & wine, diaspora remittances",
    "note_vi": "Dù bị phong tỏa biên giới phía tây (Thổ Nhĩ Kỳ) và phía đông (Azerbaijan), Armenia đạt tăng trưởng cao nhờ làn sóng chuyên gia CNTT, dòng vốn dịch chuyển từ Nga và kiều hối từ cộng đồng Armenia hải ngoại.",
    "note_en": "Despite closed borders with Turkey and Azerbaijan, Armenia has posted strong growth fueled by a thriving tech sector, diaspora capital, and post-2022 financial and trade inflows."
  },
  "Argentina": {
    "tier": "emg",
    "gdp_vi": "~620 tỷ USD (#24 thế giới)",
    "gdp_en": "~$620B (#24 globally)",
    "pc_vi": "~13.300 USD (PPP ~28.500 USD)",
    "pc_en": "~$13,300 (PPP ~$28,500)",
    "gr": "-1.8%",
    "sec": [
      62,
      29,
      9
    ],
    "main_vi": "Nông sản xuất khẩu vùng đồng bằng Pampas (khô đậu tương & dầu đậu tương #1 thế giới, ngô, lúa mì, thịt bò, rượu vang Malbec), dầu khí đá phiến (mỏ Vaca Muerta lớn thứ 2 thế giới), khai thác lithium ('Tam giác Lithium'), sản xuất xe bán tải, dịch vụ phần mềm & kỳ lân công nghệ (MercadoLibre, Globant)",
    "main_en": "Pampas agribusiness exports (#1 global soybean meal & oil exporter, corn, wheat, beef, Malbec wine), shale oil & gas (Vaca Muerta – #2 global shale gas reserve), lithium mining ('Lithium Triangle'), pickup truck manufacturing, tech & software unicorns (MercadoLibre, Globant)",
    "note_vi": "Nền kinh tế lớn thứ 3 Mỹ Latinh sở hữu tài nguyên nông nghiệp, khí đá phiến Vaca Muerta và lithium bậc nhất thế giới cùng nguồn nhân lực chất lượng cao; đang thực hiện chương trình thắt chặt tài khóa quyết liệt ('cưa máy') từ năm 2024 để đạt thặng dư ngân sách và hạ nhiệt siêu lạm phát.",
    "note_en": "South America's second-largest economy endowed with world-class Pampas farmland, Vaca Muerta shale hydrocarbons, and lithium reserves; undergoing aggressive fiscal consolidation ('shock therapy') since 2024 to eliminate fiscal deficits and tame triple-digit inflation."
  },
  "Antigua and Barb.": {
    "tier": "adv",
    "gdp_vi": "~2,2 tỷ USD",
    "gdp_en": "~$2.2B",
    "pc_vi": "~21.500 USD (PPP ~31.000 USD)",
    "pc_en": "~$21,500 (PPP ~$31,000)",
    "gr": "+5.0%",
    "sec": [
      80,
      18,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp (365 bãi biển) & bến siêu du thuyền (English Harbour, tuần lễ đua thuyền Antigua Sailing Week), cảng tàu du lịch St. John's, chương trình đầu tư nhập tịch (CBI), trung tâm hàng không Đông Caribe",
    "main_en": "Luxury beach resort tourism (365 beaches) & superyacht regattas (English Harbour, Antigua Sailing Week), St. John's cruise port, Citizenship by Investment (CBI), Eastern Caribbean aviation hub",
    "note_vi": "Quốc đảo thuộc khối thịnh vượng chung sử dụng đồng Đô la Đông Caribe (XCD neo cố định 2,7:1 vào USD); du lịch và xây dựng khu nghỉ dưỡng đóng góp gần 80% GDP, biến nơi đây thành thủ phủ đua thuyền buồm của vùng Caribe.",
    "note_en": "Eastern Caribbean Currency Union member (XCD pegged 2.7:1 to USD) where tourism and luxury resort construction generate nearly 80% of GDP, renowned globally as the yachting and regatta capital of the Caribbean."
  },
  "Angola": {
    "tier": "dev",
    "gdp_vi": "~115 tỷ USD (#64 thế giới)",
    "gdp_en": "~$115B (#64 globally)",
    "pc_vi": "~3.000 USD (PPP ~8.000 USD)",
    "pc_en": "~$3,000 (PPP ~$8,000)",
    "gr": "+3.2%",
    "sec": [
      42,
      46,
      12
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi (#2–3 châu Phi hạ Sahara) & khí thiên nhiên hóa lỏng (Angola LNG), khai thác kim cương (#4 thế giới theo giá trị – mỏ Catoca, Luele), hành lang đường sắt khoáng sản Lobito nối vành đai đồng Congo – Zambia ra Đại Tây Dương",
    "main_en": "Offshore crude oil extraction (#2–3 in Sub-Saharan Africa) & LNG (Angola LNG), diamond mining (#4 globally by value – Catoca, Luele mines), Lobito Corridor rail logistics linking DRC/Zambia copperbelt to the Atlantic",
    "note_vi": "Cường quốc dầu mỏ và kim cương Tây Nam Phi vừa quyết định rời OPEC vào đầu năm 2024 để không bị giới hạn hạn ngạch khai thác; tuyến đường sắt Hành lang Lobito đang thu hút đầu tư lớn từ Mỹ và EU nhằm vận chuyển khoáng sản chiến lược từ Trung Phi ra Đại Tây Dương.",
    "note_en": "Major Sub-Saharan oil and diamond producer that exited OPEC in early 2024 to avoid production quota caps; its Lobito Atlantic Railway Corridor has become a flagship US/EU-backed infrastructure route for exporting DRC and Zambian critical minerals."
  },
  "Andorra": {
    "tier": "adv",
    "gdp_vi": "~3,9 tỷ USD",
    "gdp_en": "~$3.9B",
    "pc_vi": "~46.500 USD (PPP ~68.000 USD)",
    "pc_en": "~$46,500 (PPP ~$68,000)",
    "gr": "+1.9%",
    "sec": [
      88,
      11,
      1
    ],
    "main_vi": "Du lịch trượt tuyết dãy Pyrenees (Grandvalira, Vallnord – đón >8 triệu khách/năm), thương mại bán lẻ thuế suất thấp (IGI chỉ 4,5%), ngân hàng tư nhân & quản lý tài sản, thu hút cư dân thu nhập cao & sáng tạo nội dung số",
    "main_en": "Pyrenees ski & mountain tourism (Grandvalira, Vallnord – >8M visitors/yr), low-tax retail shopping (4.5% VAT/IGI), private banking & wealth management, residency for high-net-worth individuals & digital creators",
    "note_vi": "Công quốc trên dãy Pyrenees nằm giữa Pháp và Tây Ban Nha (dùng đồng Euro theo hiệp ước chính thức và gia nhập IMF năm 2020); thuế thu nhập cá nhân và doanh nghiệp tối đa chỉ 10% cùng thuế tiêu dùng 4,5% thu hút hàng triệu du khách mua sắm và giới thượng lưu.",
    "note_en": "Pyrenean microstate between France and Spain using the Euro via monetary agreement (joined the IMF in 2020); combines massive ski tourism (>8M visitors/yr) with a competitive 10% maximum income/corporate tax rate and 4.5% VAT."
  },
  "Algeria": {
    "tier": "dev",
    "gdp_vi": "~260 tỷ USD (#49 thế giới)",
    "gdp_en": "~$260B (#49 globally)",
    "pc_vi": "~5.600 USD (PPP ~17.000 USD)",
    "pc_en": "~$5,600 (PPP ~$17,000)",
    "gr": "+3.8%",
    "sec": [
      46,
      41,
      13
    ],
    "main_vi": "Khai thác khí đốt tự nhiên & LNG (tập đoàn quốc doanh Sonatrach – nhà cung cấp khí đốt qua đường ống biển lớn cho Ý và Tây Ban Nha), dầu thô, hóa dầu & phân bón (amoniac, urê), khai thác quặng sắt khổng lồ Gara Djebilet & phốt phát, nông nghiệp ngũ cốc",
    "main_en": "Natural gas & LNG exports (state giant Sonatrach – major pipeline supplier to Italy and Spain), crude oil, petrochemicals & fertilizers (ammonia, urea), Gara Djebilet iron ore & phosphate megaprojects, cereal farming",
    "note_vi": "Quốc gia có diện tích lớn nhất châu Phi hưởng lợi lớn từ vị thế nhà cung cấp khí đốt thay thế Nga cho Nam Âu kể từ năm 2022; có dự trữ ngoại hối dồi dào (~70 tỷ USD), nợ nước ngoài gần như bằng 0 và đang phát triển siêu mỏ sắt Gara Djebilet tại Sahara.",
    "note_en": "Africa's largest country by area and a pivotal natural gas supplier to Southern Europe via trans-Mediterranean pipelines; maintains ~zero external sovereign debt, hefty FX reserves (~$70B), and is developing the massive Gara Djebilet Sahara iron ore mine."
  },
  "Albania": {
    "tier": "dev",
    "gdp_vi": "~26,5 tỷ USD",
    "gdp_en": "~$26.5B",
    "pc_vi": "~9.600 USD (PPP ~21.500 USD)",
    "pc_en": "~$9,600 (PPP ~$21,500)",
    "gr": "+3.6%",
    "sec": [
      54,
      27,
      19
    ],
    "main_vi": "Du lịch biển Địa Trung Hải bùng nổ (Albanian Riviera – Ksamil, Vlorë, Sarandë đón >10 triệu khách/năm), thủy điện (sản xuất ~100% điện nội địa), khai thác quặng crôm (Bulqizë) & dầu thô trên bờ (Patos-Marinza), kiều hối (từ Ý, Hy Lạp), gia công dệt may – giày dép",
    "main_en": "Booming Mediterranean coastal tourism (Albanian Riviera – >10M visitors/yr), hydropower (~100% of domestic electricity), chromium ore (Bulqizë) & onshore crude oil (Patos-Marinza), diaspora remittances (Italy, Greece), footwear & apparel assembly",
    "note_vi": "Ngôi sao du lịch mới nổi nhanh nhất châu Âu hậu đại dịch khi lượng khách quốc tế vượt gấp 3,5 lần dân số (hơn 10 triệu lượt), giúp đồng Lek tăng giá mạnh so với Euro và thúc đẩy cơn sốt bất động sản ven biển Adriatic – Ionian.",
    "note_en": "Europe's fastest-growing post-pandemic tourism hotspot, attracting over 10 million visitors annually (3.5x its population) to the Albanian Riviera, driving strong appreciation of the Albanian lek and coastal infrastructure investment."
  },
  "Afghanistan": {
    "tier": "low",
    "gdp_vi": "~17 tỷ USD",
    "gdp_en": "~$17B",
    "pc_vi": "~410 USD (PPP ~2.100 USD)",
    "pc_en": "~$410 (PPP ~$2,100)",
    "gr": "+2.0%",
    "sec": [
      46,
      18,
      36
    ],
    "main_vi": "Nông nghiệp tự cung tự cấp & trái cây khô (lựu, nho, nghệ tây), khai thác than đá & khoáng sản (đồng, sắt, đá quý), thương mại quá cảnh",
    "main_en": "Subsistence agriculture & dried fruits (pomegranates, raisins, saffron), coal & mineral extraction (copper, iron, gems), transit trade",
    "note_vi": "Sau khi viện trợ phương Tây chấm dứt năm 2021, nền kinh tế thu hẹp mạnh và bị cô lập khỏi hệ thống ngân hàng quốc tế; chính quyền Taliban tăng thu thuế hải quan, khai thác than và đào kênh thủy lợi Qosh Tepa.",
    "note_en": "Isolated from the global banking system since 2021 after the halt of Western aid; relies on customs revenues, coal exports to Pakistan, remittances, and the Qosh Tepa irrigation canal project."
  },
  "Siachen Glacier": {
    "tier": "low",
    "gdp_vi": "Không có hoạt động kinh tế dân sự",
    "gdp_en": "No civilian economy",
    "pc_vi": "Khu quân sự (chi phí duy trì ~1–2 triệu USD/ngày)",
    "pc_en": "Military zone (~$1–2M/day upkeep)",
    "gr": "0.0%",
    "sec": [
      100,
      0,
      0
    ],
    "main_vi": "Hậu cần quân sự độ cao lớn, vận tải trực thăng, trạm quan trắc khí tượng – băng hà",
    "main_en": "High-altitude military logistics, helicopter supply operations, glaciological & weather monitoring",
    "note_vi": "Chiến trường cao nhất thế giới (trên 5.400 m) hoàn toàn không có dân thường hay kinh tế thương mại; là gánh nặng hậu cần tốn kém cho cả Ấn Độ và Pakistan để giữ cao điểm đầu nguồn sông Indus.",
    "note_en": "The world's highest battlefield (>5,400 m) has no civilian population or commercial output, functioning purely as a costly high-altitude logistics theater overlooking the Indus headwaters."
  },
  "Antarctica": {
    "tier": "adv",
    "gdp_vi": "Phi thương mại (Hiệp ước Nam Cực 1959; chi tiêu khoa học & du lịch ~1,2 tỷ USD/năm)",
    "gdp_en": "Non-commercial (1959 Antarctic Treaty; ~$1.2B/yr in scientific operations & expedition tourism)",
    "pc_vi": "Không có cư dân thường trú (~1.000 nhà khoa học mùa đông, ~5.000 mùa hè)",
    "pc_en": "No permanent residents (~1,000 winter scientists, ~5,000 summer personnel)",
    "gr": "0.0%",
    "sec": [
      90,
      0,
      10
    ],
    "main_vi": "Nghiên cứu khoa học quốc tế tại ~70 trạm nghiên cứu của 30 quốc gia (khí hậu học lõi băng, vật lý thiên văn, sinh học cực), du lịch tàu thám hiểm mùa hè (~100.000 du khách/năm khởi hành từ Ushuaia), đánh bắt nhuyễn thể Nam Cực (krill) và cá răng có kiểm soát ngoài khơi (CCAMLR)",
    "main_en": "International scientific research across ~70 stations operated by 30 nations (ice-core climatology, astrophysics, glaciology), polar expedition cruise tourism (~100,000 visitors/yr via Ushuaia), CCAMLR-regulated offshore Antarctic krill & toothfish harvesting",
    "note_vi": "Lục địa băng giá ở cực Nam Trái Đất được quản trị theo Hệ thống Hiệp ước Nam Cực và Nghị định thư Madrid 1991 (cấm tuyệt đối mọi hoạt động khai thác khoáng sản và dầu khí thương mại đến ít nhất năm 2048); hoạt động kinh tế chỉ gồm hậu cần khoa học, du lịch tàu phá băng và đánh bắt krill bền vững.",
    "note_en": "Governed under the Antarctic Treaty System and the 1991 Madrid Protocol, which strictly bans all mineral and oil extraction at least until 2048; economic activity is limited to state-funded polar research logistics, expedition cruise tourism, and regulated krill fisheries."
  },
  "Sint Maarten": {
    "tier": "adv",
    "gdp_vi": "~1,7 tỷ USD",
    "gdp_en": "~$1.7B",
    "pc_vi": "~39.500 USD (PPP ~44.000 USD)",
    "pc_en": "~$39,500 (PPP ~$44,000)",
    "gr": "+3.2%",
    "sec": [
      86,
      13,
      1
    ],
    "main_vi": "Cảng tàu du lịch cỡ lớn (Philipsburg – một trong những cảng tàu biển sầm uất nhất Caribe) & trung tâm hàng không khu vực (Sân bay quốc tế Princess Juliana / bãi biển Maho), nghỉ dưỡng – casino, bến siêu du thuyền (Simpson Bay), bán lẻ trang sức & rượu miễn thuế",
    "main_en": "Mega-cruise ship port (Philipsburg – top Caribbean cruise call) & regional aviation hub (Princess Juliana International Airport / Maho Beach), resort & casino tourism, superyacht marinas (Simpson Bay), duty-free luxury retail",
    "note_vi": "Quốc gia cấu thành tự trị thuộc Vương quốc Hà Lan nằm ở nửa phía Nam đảo Saint Martin; sở hữu cảng biển nước sâu và sân bay quốc tế lớn của cả hòn đảo nên thu hút hơn 80% lưu lượng tàu du lịch, hàng không và giải trí về đêm (giao dịch thực tế bằng USD bên cạnh đồng Guilder).",
    "note_en": "Autonomous constituent country of the Kingdom of the Netherlands occupying the southern 40% of Saint Martin island; houses the island's international airport and deepwater cruise terminal, capturing the lion's share of passenger arrivals, casinos, and duty-free commerce."
  }
};
