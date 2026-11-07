// Macroeconomic & Development Profiles for 241 Countries & Territories (Bilingual VI / EN)
export const ECON_TIERS = {
  "adv": {
    "vi": "Thu nhập cao",
    "en": "High income",
    "c": "#10B981"
  },
  "emg": {
    "vi": "Thu nhập trung bình cao",
    "en": "Upper-middle income",
    "c": "#0EA5E9"
  },
  "dev": {
    "vi": "Thu nhập trung bình thấp",
    "en": "Lower-middle income",
    "c": "#F59E0B"
  },
  "low": {
    "vi": "Thu nhập thấp",
    "en": "Low income",
    "c": "#EF4444"
  }
};

export const ECON_SECTORS = [
  {
    "k": "srv",
    "vi": "Dịch vụ",
    "en": "Services",
    "c": "#3B82F6"
  },
  {
    "k": "ind",
    "vi": "Công nghiệp – XD",
    "en": "Industry",
    "c": "#F59E0B"
  },
  {
    "k": "agr",
    "vi": "Nông – Lâm – Thủy sản",
    "en": "Agriculture",
    "c": "#10B981"
  }
];

export const ECON = {
  "Zimbabwe": {
    "tier": "dev",
    "gdp_vi": "~41,5 tỷ USD (#103 thế giới)",
    "gdp_en": "~$41.5B (#103 globally)",
    "pc_vi": "~2.500 USD (PPP ~5.930 USD)",
    "pc_en": "~$2,500 (PPP ~$5,930)",
    "gr": "+1.7%",
    "sec": [
      54,
      37,
      9
    ],
    "main_vi": "Khai khoáng (lithium, vàng, bạch kim, kim cương), thuốc lá xuất khẩu, nông nghiệp (ngô, mía, bông), kiều hối",
    "main_en": "Mining (lithium, gold, platinum, diamonds), tobacco exports, agriculture (maize, sugar, cotton), remittances",
    "note_vi": "Sở hữu trữ lượng quặng lithium lớn nhất châu Phi (đứng thứ 5–6 thế giới với các mỏ Bikita, Arcadia, Kamativi do các tập đoàn Trung Quốc như Zhejiang Huayou Cobalt và Sinomine đầu tư nhà máy chế biến ngay tại chỗ), Zimbabwe còn là cường quốc xuất khẩu vàng, kim cương (Marange), nhóm kim loại bạch kim (PGMs) và thuốc lá lá (lớn nhất châu Phi). Bất chấp tiềm năng khoáng sản dồi dào và sản lượng thuốc lá lập kỷ lục, việc hơn 75% giao dịch trong nền kinh tế thực tế vẫn sử dụng đồng đô la Mỹ (USD) do người dân thiếu niềm tin vào đồng nội tệ mới ZiG, cộng với khoản nợ công nước ngoài quá hạn ~21 tỷ USD khiến nước này chưa thể tiếp cận nguồn vốn vay ưu đãi từ IMF và Ngân hàng Thế giới.",
    "note_en": "Holding Africa's largest lithium reserves—where Chinese giants like Huayou Cobalt and Sinomine have built local concentrator plants at Arcadia and Bikita after Harare banned raw lithium ore exports—Zimbabwe is also a major exporter of gold, platinum-group metals, ferrochrome, and flue-cured tobacco (#1 in Africa). Despite surging mineral output and ~$2 billion in annual diaspora remittances, over 75% of domestic transactions remain dollarized alongside the new gold-backed ZiG currency launched in 2024, while ~$21 billion in external debt arrears continues to lock Zimbabwe out of IMF and World Bank lending."
  },
  "Zambia": {
    "tier": "dev",
    "gdp_vi": "~25,3 tỷ USD (#117 thế giới)",
    "gdp_en": "~$25.3B (#117 globally)",
    "pc_vi": "~1.190 USD (PPP ~4.220 USD)",
    "pc_en": "~$1,190 (PPP ~$4,220)",
    "gr": "+3.8%",
    "sec": [
      60,
      37,
      3
    ],
    "main_vi": "Khai thác & luyện đồng (Copperbelt), coban, ngọc lục bảo, thủy điện (hồ Kariba), nông nghiệp (ngô, đường, thuốc lá)",
    "main_en": "Copper mining & smelting (Copperbelt), cobalt, emeralds, hydropower (Kariba), agriculture (maize, sugar, tobacco)",
    "note_vi": "Đồng kim loại chiếm tới hơn 70% tổng kim ngạch xuất khẩu hàng hóa của Zambia (sản lượng đạt ~700.000–800.000 tấn/năm tại các mỏ lớn như Kansanshi, Sentinel, Mopani và Konkola), bên cạnh vị thế nhà xuất khẩu ngọc lục bảo số 1 thế giới. Việc chính phủ hoàn tất thỏa thuận tái cơ cấu hơn 13 tỷ USD nợ nước ngoài vào năm 2023–2024 và thu hút các tập đoàn First Quantum, Barrick Gold cùng tập đoàn UAE (IRH) rót hàng tỷ USD mở rộng mỏ đồng đang mở ra chu kỳ tăng trưởng mới, dù tình trạng thiếu điện do hạn hán tại hồ Kariba vẫn là lực cản lớn nhất trong ngắn hạn.",
    "note_en": "Refined copper accounts for over 70% of Zambia's export earnings (~700,000–800,000 tonnes annually from flagship mines like Kansanshi, Sentinel, Mopani, and Konkola), complemented by cobalt and the world's largest emerald mine at Kagem. Having exited sovereign default in 2023–2024 via a landmark G20 debt restructuring and secured multi-billion-dollar mine expansions from First Quantum, Barrick, and UAE's International Resources Holding (IRH), Zambia's medium-term outlook is bright despite acute 2024–2025 drought-induced power shortages."
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
    "note_vi": "Là quốc gia nghèo nhất thế giới Ả Rập, kinh tế Yemen đã bị tàn phá hơn 50% quy mô kể từ năm 2015 và bị xé đôi thành hai Ngân hàng Trung ương, hai đồng nội tệ Rial có tỷ giá chênh lệch gấp ba lần giữa vùng Sana'a (Houthi) và vùng Aden (chính phủ quốc tế). Kể từ khi Houthi dùng UAV tấn công các cảng xuất khẩu dầu ở miền nam cuối năm 2022, hoạt động xuất khẩu dầu thô — nguồn thu ngoại tệ chính của chính phủ Aden — hoàn toàn tê liệt, khiến hàng chục triệu người dân sống dựa vào kiều hối từ Ả Rập Xê Út và viện trợ lương thực LHQ.",
    "note_en": "The Arab world's poorest nation has seen its GDP halved since 2015 and its financial system split between rival central banks in Houthi-held Sana'a and government-held Aden, with the southern currency trading at a fraction of the northern rate. Since Houthi drone strikes halted southern crude oil exports in late 2022, state revenues have collapsed, leaving over half of Yemen's 40 million people dependent on remittances from workers in Saudi Arabia and international humanitarian aid."
  },
  "Vietnam": {
    "tier": "emg",
    "gdp_vi": "~476 tỷ USD (#32 thế giới, #4 Đông Nam Á)",
    "gdp_en": "~$476B (#32 globally, #4 in ASEAN)",
    "pc_vi": "~4.720 USD (PPP ~16.390 USD)",
    "pc_en": "~$4,720 (PPP ~$16,390)",
    "gr": "+7.0%",
    "sec": [
      46,
      41,
      13
    ],
    "main_vi": "Lắp ráp điện tử xuất khẩu (do khối FDI dẫn dắt), dệt may – da giày, máy móc thiết bị, nông thủy sản (gạo, cà phê, tôm); bán dẫn là ngành mới nổi đang kỳ vọng (đóng gói, kiểm thử)",
    "main_en": "FDI-led electronics assembly, textiles & footwear, machinery, agri-seafood exports (rice, coffee, shrimp); semiconductors as an emerging aspirational sector (packaging & testing)",
    "note_vi": "Việt Nam là cứ điểm sản xuất xuất khẩu năng động ở Đông Nam Á, hưởng lợi từ làn sóng dịch chuyển chuỗi cung ứng 'Trung Quốc + 1' với độ mở thương mại vượt 165% GDP. Động lực hiện tại dựa vào lắp ráp điện tử do khối FDI dẫn dắt (Samsung, Foxconn), dệt may – da giày và nông thủy sản, trong khi bán dẫn mới là ngành đang được kỳ vọng ở khâu đóng gói, kiểm thử (ATP). Điểm nghẽn lớn là giá trị gia tăng nội địa còn mỏng, phụ thuộc nhập khẩu linh kiện và áp lực nâng cấp hạ tầng điện, logistics.",
    "note_en": "Vietnam is a dynamic Southeast Asian export hub, capturing 'China+1' supply-chain shifts with trade openness exceeding 165% of GDP across 17 free trade agreements. Current growth is driven by FDI-led electronics assembly, textiles, footwear, and agri-seafood exports, whereas semiconductors remain an emerging aspirational sector focused initially on back-end packaging and testing (ATP). Key structural hurdles include low domestic value-added content, reliance on imported components, and urgent power-grid and port upgrades."
  },
  "Venezuela": {
    "tier": "dev",
    "gdp_vi": "~121 tỷ USD (#66 thế giới)",
    "gdp_en": "~$121B (#66 globally)",
    "pc_vi": "~4.240 USD (PPP ~8.480 USD)",
    "pc_en": "~$4,240 (PPP ~$8,480)",
    "gr": "+5.5%",
    "sec": [
      52,
      42,
      6
    ],
    "main_vi": "Dầu mỏ & khí đốt (vành đai Orinoco & hồ Maracaibo), hóa dầu, khai thác vàng – quặng sắt – bauxite (Guayana), kiều hối",
    "main_en": "Crude oil & natural gas (Orinoco Belt & Lake Maracaibo), petrochemicals, gold, iron ore & bauxite mining, remittances",
    "note_vi": "Nắm giữ trữ lượng dầu thô đã kiểm chứng lớn nhất hành tinh (~303 tỷ thùng) cùng trữ lượng vàng, quặng sắt và bauxite dồi dào tại vùng Guayana, nhưng sản lượng dầu của Venezuela chỉ còn đạt khoảng 0,8–0,9 triệu thùng/ngày (so với mức đỉnh 3,5 triệu thùng/ngày năm 1998). Lệnh trừng phạt của Mỹ, tình trạng thiếu vốn bảo trì hạ tầng nghiêm trọng của tập đoàn PDVSA và cuộc chảy máu chất xám của hơn 7,7 triệu người di cư đang tạo ra điểm nghẽn cấu trúc khổng lồ, khiến nền kinh tế phụ thuộc nặng nề vào kiều hối và xuất khẩu dầu thô giá chiết khấu sang châu Á.",
    "note_en": "Sitting atop the world's largest proven crude oil reserves (~303 billion barrels) alongside vast gold, iron ore, and bauxite deposits in the Guayana region, Venezuela nonetheless produces only ~0.8–0.9 million barrels per day—down from a 1998 peak of 3.5 million. US sanctions, decades of severe underinvestment at state oil monopoly PDVSA, and the exodus of over 7.7 million citizens constitute massive structural bottlenecks, leaving the economy heavily reliant on diaspora remittances and discounted crude shipments to Asia."
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
    "note_vi": "Sở hữu nền kinh tế phi thương mại độc đáo nhất hành tinh (sử dụng đồng Euro theo hiệp ước tiền tệ với EU/Ý và được phép đúc đồng xu Euro sưu tầm riêng), nguồn thu ngân sách của Vatican không đến từ thuế mà dựa vào vé tham quan Bảo tàng Vatican (~6–7 triệu khách/năm), tiền quyên góp toàn cầu (Peter's Pence), quản lý bất động sản và Viện Giáo vụ (IOR). Năm Thánh 2025 đã mang lại cú hích du lịch hành hương lớn giúp cải thiện nguồn thu cho Tòa Thánh.",
    "note_en": "Operating the world's most unique non-commercial sovereign economy—using the Euro under an official monetary agreement and minting prized collector Euro coins—the Vatican levies no income taxes. Instead, state finances rely on Vatican Museums ticket sales (~6–7 million annual visitors), global papal donations (Peter's Pence), real estate management, and the Institute for the Works of Religion (IOR), receiving a major boost during the 2025 Jubilee Year."
  },
  "Vanuatu": {
    "tier": "dev",
    "gdp_vi": "~1,3 tỷ USD (#188 thế giới)",
    "gdp_en": "~$1.3B (#188 globally)",
    "pc_vi": "~3.960 USD (PPP ~4.370 USD)",
    "pc_en": "~$3,960 (PPP ~$4,370)",
    "gr": "+3.8%",
    "sec": [
      61,
      11,
      28
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển & tàu biển, nông nghiệp (kava, cùi dừa khô, ca cao, thịt bò), chương trình đầu tư quốc tịch, dịch vụ tài chính ngoài khơi",
    "main_en": "Resort & cruise tourism, agriculture (kava, copra, cocoa, beef), citizenship-by-investment program, offshore financial services",
    "note_vi": "Nền kinh tế của Vanuatu vận hành theo mô hình thiên đường thuế đặc biệt khi hoàn toàn không thu thuế thu nhập cá nhân, thuế thu nhập doanh nghiệp hay thuế lãi vốn, mà ngân sách nhà nước dựa vào thuế giá trị gia tăng (VAT), du lịch tàu biển – nghỉ dưỡng và Chương trình Đầu tư lấy Quốc tịch (bán hộ chiếu thu hút khách hàng quốc tế, dù gần đây bị EU và Anh siết chặt miễn thị thực). Trong nông nghiệp, cây Kava (loại rễ cây làm đồ uống thư giãn truyền thống vùng Thái Bình Dương) đã vượt qua cùi dừa khô, ca cao và thịt bò hữu cơ để trở thành mặt hàng xuất khẩu số một của đất nước, cùng với nguồn kiều hối lớn từ hàng nghìn lao động thời vụ tại các nông trại ở Úc và New Zealand.",
    "note_en": "Operating as a pure indirect-tax jurisdiction with zero personal income tax, corporate income tax, or capital gains tax, Vanuatu relies on VAT collections, Australian and New Zealand cruise-and-resort tourism, and its Citizenship-by-Investment passport program (which has faced tighter visa scrutiny from the EU and UK). In agriculture, noble kava—a traditional Pacific medicinal root crop—has surged past copra, cocoa, and grass-fed beef to become Vanuatu's single largest merchandise export, complemented by vital remittances from thousands of Ni-Vanuatu seasonal farm workers in Australia and New Zealand."
  },
  "Uzbekistan": {
    "tier": "dev",
    "gdp_vi": "~121 tỷ USD (#65 thế giới)",
    "gdp_en": "~$121B (#65 globally)",
    "pc_vi": "~3.340 USD (PPP ~12.520 USD)",
    "pc_en": "~$3,340 (PPP ~$12,520)",
    "gr": "+6.7%",
    "sec": [
      48,
      33,
      19
    ],
    "main_vi": "Khai thác vàng (top 10 thế giới), khí đốt tự nhiên, đồng & uranium, dệt may bông sợi (chế biến sâu trong nước), ô tô lắp ráp, kiều hối",
    "main_en": "Gold mining (top 10 globally), natural gas, copper & uranium, value-added cotton textiles, automotive assembly, remittances",
    "note_vi": "Kinh tế Uzbekistan (~121 tỷ USD) tăng trưởng ~6%/năm nhờ cải cách mở cửa từ năm 2017, khai thác vàng (top 10 thế giới với mỏ Muruntau), đồng, uranium và nguồn kiều hối lớn. Nước này đã chấm dứt xuất khẩu bông thô từ năm 2020 để giữ lại 100% chế biến thành sợi, dệt may trong nước, đồng thời phát triển ngành lắp ráp ô tô (UzAuto, xe điện BYD) lớn nhất Trung Á. Điểm nghẽn lớn là thiếu hụt nước tưới tiêu và việc chuyển từ xuất khẩu sang phải nhập khẩu ròng khí đốt từ Nga, Turkmenistan từ năm 2023 do nhu cầu điện tăng vọt.",
    "note_en": "Uzbekistan's ~$121B economy grows at ~6% annually following post-2017 market reforms, supported by top-ten global gold mining (Muruntau), copper, uranium, and worker remittances. Tashkent halted raw cotton exports in 2020 to process 100% of its harvest domestically into value-added textiles and garments while building Central Asia's largest auto assembly hub (including BYD EVs). Key bottlenecks are acute water scarcity and domestic gas shortages that turned Uzbekistan into a net natural gas importer from Russia and Turkmenistan in 2023."
  },
  "Uruguay": {
    "tier": "adv",
    "gdp_vi": "~82,3 tỷ USD (#81 thế giới)",
    "gdp_en": "~$82.3B (#81 globally)",
    "pc_vi": "~24.310 USD (PPP ~36.600 USD)",
    "pc_en": "~$24,310 (PPP ~$36,600)",
    "gr": "+3.3%",
    "sec": [
      73,
      19,
      8
    ],
    "main_vi": "Chăn nuôi bò thịt xuất khẩu, bột giấy (UPM), đậu tương, xuất khẩu phần mềm & CNTT, dịch vụ tài chính – cảng tự do, năng lượng tái tạo (98% điện xanh)",
    "main_en": "Beef & livestock exports, cellulose pulp (UPM), soybeans, software & IT exports, free-zone financial services, renewable energy (98% green grid)",
    "note_vi": "Sở hữu mức thu nhập bình quân đầu người cao nhất Nam Mỹ (~24.300 USD), hệ thống truy xuất nguồn gốc điện tử cho 100% đàn bò 12 triệu con và các siêu nhà máy bột giấy xuất khẩu tỷ đô của tập đoàn UPM (Phần Lan) và Montes del Plata. Khu công nghệ và dịch vụ miễn thuế Zonamerica tại Montevideo đã đưa Uruguay trở thành nhà xuất khẩu phần mềm tính theo đầu người số một Mỹ Latinh (nơi ra đời kỳ lân thanh toán dLocal), dù quy mô dân số nhỏ (3,4 triệu dân) khiến nước này luôn tìm kiếm các hiệp định thương mại tự do ngoài khối Mercosur.",
    "note_en": "Leads South America in per-capita GDP (~$24,300), combining 100% electronically traceable grass-fed beef exports and multibillion-dollar European cellulose pulp mills (UPM and Montes del Plata) with a ~98% renewable electricity grid. Tax-free technology zones like Zonamerica have made Uruguay Latin America's #1 per-capita software exporter and birthed fintech unicorn dLocal, though its small 3.4-million domestic market pushes Montevideo to seek broader trade deals beyond Mercosur's protective tariffs."
  },
  "Micronesia": {
    "tier": "emg",
    "gdp_vi": "~0,50 tỷ USD (~500 triệu USD) (#195 thế giới)",
    "gdp_en": "~$500M (#195 globally)",
    "pc_vi": "~4.250 USD (PPP ~4.450 USD)",
    "pc_en": "~$4,250 (PPP ~$4,450)",
    "gr": "+2.3%",
    "sec": [
      71,
      5,
      24
    ],
    "main_vi": "Cấp phép đánh bắt cá ngừ vùng đặc quyền kinh tế (EEZ), viện trợ Hiệp ước Liên kết Tự do (COFA) từ Mỹ, nông nghiệp tự cung (khoai môn, dừa), du lịch lặn biển",
    "main_en": "EEZ tuna fishing license fees, US Compact of Free Association (COFA) grants, subsistence agriculture (taro, copra), dive tourism (Chuuk Lagoon)",
    "note_vi": "Sử dụng đồng Đô la Mỹ (USD) làm tiền tệ chính thức, nền kinh tế của Liên bang Micronesia dựa trên hai trụ cột tài chính gần như ngang bằng nhau: nguồn viện trợ ngân sách – quỹ tín thác từ Hiệp ước Liên kết Tự do (COFA) mới gia hạn của Hoa Kỳ (bơm khoảng 140 triệu USD/năm cùng các dịch vụ bưu chính, hàng không FAA, khí tượng của Mỹ) và tiền bán giấy phép đánh bắt cá ngừ đại dương (~70–80 triệu USD/năm). Khu vực kinh tế tư nhân còn rất nhỏ (chủ yếu là thương mại bán lẻ phục vụ công chức nhà nước và du lịch lặn biển ngắm xác tàu đắm Thế chiến II tại đầm phá Chuuk), trong khi quyền tự do làm việc tại Mỹ giúp mang lại kiều hối nhưng cũng khiến dân số trong nước trì trệ quanh mức ~115.000 người do di cư.",
    "note_en": "Using the US dollar as its official currency, the FSM economy rests on two primary financial pillars: renewed US Compact of Free Association (COFA) sector grants and trust-fund distributions (~$140 million annually over 20 years, plus direct access to US federal agencies like the FAA, USPS, and FEMA) and pelagic tuna fishing license fees (~$70–80 million annually). Private-sector activity remains limited by extreme geographic isolation and high shipping costs—centering on retail services for public-sector workers, subsistence farming, and world-class WWII wreck diving in Chuuk Lagoon—while visa-free access to the US labor market drives steady out-migration that keeps the domestic population flat near ~115,000."
  },
  "Marshall Is.": {
    "tier": "emg",
    "gdp_vi": "~0,30 tỷ USD (~300 triệu USD) (#198 thế giới)",
    "gdp_en": "~$300M (#198 globally)",
    "pc_vi": "~7.590 USD (PPP ~8.240 USD)",
    "pc_en": "~$7,590 (PPP ~$8,240)",
    "gr": "+3.3%",
    "sec": [
      67,
      13,
      20
    ],
    "main_vi": "Đăng ký tàu biển quốc tế (lớn thứ 2-3 thế giới), phí đánh bắt cá ngừ, căn cứ quân sự Mỹ Kwajalein, viện trợ COFA của Mỹ, chế biến dừa",
    "main_en": "International ship registry (top-3 globally), tuna fishing licenses, US Army Garrison Kwajalein, US COFA grants, copra processing",
    "note_vi": "Sử dụng đồng USD làm tiền tệ chính thức, nền kinh tế của Quần đảo Marshall vận hành dựa trên bốn nguồn thu cốt lõi: gói viện trợ ngân sách – quỹ tín thác COFA của Hoa Kỳ (2,3 tỷ USD trong 20 năm tới), tiền thuê đất và việc làm tại Căn cứ Thử nghiệm Tên lửa Kwajalein của Quân đội Mỹ, phí cấp phép và trung chuyển cá ngừ tại cảng Majuro, cùng khoản thu phí từ Đội tàu Đăng ký Quốc tế đứng top 3 toàn cầu. Tuy nhiên, làn sóng người dân trong độ tuổi lao động di cư sang Mỹ (khiến dân số sống trên đảo giảm từ hơn 53.000 người xuống còn ~42.000 người trong thập kỷ qua) và chi phí chống ngập lụt do nước biển dâng đang là thách thức lớn nhất đối với sự phát triển nội địa.",
    "note_en": "Operating on the US dollar, the Marshallese economy is sustained by four external revenue pillars: the renewed 20-year, $2.3 billion US COFA assistance package, land-lease payments and local employment at US Army Garrison Kwajalein Atoll, tuna fishing license and transshipment fees at Majuro port, and royalties from the world's third-largest international ship registry. Nevertheless, rapid out-migration of working-age citizens to the United States—which reduced the resident population from ~53,000 to ~42,000 over the past decade—and the escalating cost of coastal seawalls against sea-level rise remain severe long-term structural headwinds."
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
    "note_vi": "Sử dụng đồng USD và từng trải qua ba chu kỳ kinh tế thăng trầm dữ dội: từ trung tâm may mặc xuất khẩu sang Mỹ thập niên 1990–2000 (sử dụng lao động châu Á gắn nhãn \"Made in USA\"), sang bùng nổ sòng bạc VIP phục vụ khách Trung Quốc giai đoạn 2015–2019 (tổ hợp Imperial Pacific tại Saipan trước khi phá sản vì bê bối và đại dịch COVID-19). Bước sang giai đoạn 2024–2026, nền kinh tế trị giá ~1,1 tỷ USD của Bắc Mariana dựa vào du khách nghỉ dưỡng biển – đánh golf từ Hàn Quốc và Nhật Bản, kết hợp với dòng vốn ngân sách liên bang Mỹ và các siêu dự án xây dựng căn cứ không quân dự phòng của Quân đội Mỹ trên đảo Tinian.",
    "note_en": "Operating on the US dollar, the CNMI economy (~$1.1 billion GDP) has weathered dramatic boom-and-bust cycles—from duty-free garment factories in the 1990s–2000s to a short-lived Chinese VIP casino boom on Saipan (Imperial Pacific) that collapsed amid federal investigations and the COVID-19 pandemic. In 2024–2026, economic activity pivots on South Korean and Japanese beach-and-golf resort tourism alongside a major surge in US federal grants and Pentagon defense construction contracts centered on the Tinian Divert Airfield and North Field restoration projects."
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
    "note_vi": "Sở hữu mức GDP bình quân đầu người cao hàng đầu vùng biển Caribbean (~44.300 USD), nền kinh tế trị giá ~4,67 tỷ USD của Quần đảo Virgin thuộc Mỹ dựa vào ngành du lịch tàu biển – nghỉ dưỡng cao cấp (đón khoảng 2 triệu lượt khách tàu biển và hàng không mỗi năm từ đất liền Mỹ mà không cần hộ chiếu và được hưởng hạn mức mua sắm miễn thuế 1.600 USD gấp đôi các đảo khác). Trụ cột tài khóa thứ hai của đảo là ngành sản xuất rượu rum xuất khẩu khổng lồ trên đảo St. Croix (nhà máy Captain Morgan của tập đoàn Diageo và Cruzan Rum của Suntory): nhờ đạo luật của Quốc hội Mỹ hoàn trả lại gần như toàn bộ thuế tiêu thụ đặc biệt liên bang (13,25 USD/gallon) đánh trên rượu rum bán vào đất liền Mỹ cho ngân sách đảo, khoản \"hoàn thuế rượu rum\" này mang về hàng trăm triệu USD mỗi năm cho chính quyền USVI bên cạnh hàng tỷ USD vốn tái thiết FEMA sau bão.",
    "note_en": "Boasting one of the Caribbean's highest per-capita incomes (~$44,300 across a ~$4.67 billion economy), the US Virgin Islands thrives on US mainland tourism—welcoming ~2 million cruise and air visitors annually who require no passport and enjoy a special $1,600 duty-free shopping exemption (double that of foreign Caribbean islands). The territory's second fiscal pillar is industrial-scale rum distillation on St. Croix (home to Diageo's Captain Morgan and Suntory's Cruzan Rum distilleries): under the federal \"rum cover-over\" law, the US Treasury rebates nearly all federal excise taxes ($13.25 per proof gallon) collected on USVI rum sold on the US mainland directly back to the territorial budget, generating ~$200+ million annually alongside billions in post-2017 FEMA hurricane reconstruction funds."
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
    "note_vi": "Nền kinh tế trị giá ~6,9 tỷ USD của đảo Guam (thu nhập bình quân đầu người ~40.800 USD) đứng vững trên hai chân kiềng: chi tiêu quốc phòng – xây dựng căn cứ khổng lồ của Liên bang Hoa Kỳ (chiếm trực tiếp và gián tiếp hơn một nửa hoạt động kinh tế thông qua việc xây dựng căn cứ Thủy quân lục chiến Camp Blaz và lá chắn tên lửa) và ngành du lịch nghỉ dưỡng biển miễn thuế tại vịnh Tumon đón du khách từ Nhật Bản và Hàn Quốc. Mặc dù ngành du lịch từ Nhật Bản phục hồi chậm hơn do đồng Yên yếu và hậu quả của siêu bão Mawar (2023), bùng nổ đầu tư hạ tầng quân sự trị giá hơn 10 tỷ USD của Lầu Năm Góc và các dự án trạm trung chuyển cáp quang biển mới của Google đang giúp kinh tế Guam tăng trưởng ổn định.",
    "note_en": "Guam's ~$6.9 billion high-income economy (~$40,800 per capita) rests on twin pillars: massive US federal defense spending and military construction (led by the >$10 billion build-out of Marine Corps Base Camp Blaz and the 360-degree Guam missile defense system) and duty-free beach resort tourism along Tumon Bay catering to Japanese and South Korean visitors. While East Asian tourist arrivals have recovered gradually due to a weak Japanese yen and post-Super Typhoon Mawar (2023) hotel repairs, unprecedented Pentagon infrastructure investment and new Google-backed trans-Pacific subsea cable landings continue to drive strong construction and services demand."
  },
  "American Samoa": {
    "tier": "adv",
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
    "note_vi": "Nền kinh tế trị giá ~880 triệu USD của Samoa thuộc Mỹ (thu nhập bình quân đầu người ~18.000 USD — cao gấp hơn 3 lần quốc gia độc lập Samoa kế bên) vận hành dựa trên hai động lực sống còn: ngành công nghiệp chế biến – đóng hộp cá ngừ xuất khẩu sang thị trường Mỹ (chiếm hơn 90% kim ngạch xuất khẩu hàng hóa, với nhà máy StarKist sử dụng hàng nghìn công nhân, phần lớn là lao động sang từ nước láng giềng Tây Samoa) và nguồn ngân sách tài trợ liên bang Hoa Kỳ cùng lương hưu quân đội Mỹ. Thách thức cấu trúc lớn nhất của đảo là sự phụ thuộc quá lớn vào một nhà máy cá ngừ duy nhất trước áp lực tăng lương tối thiểu liên bang và việc cắt giảm ngư trường đánh bắt xa bờ, bên cạnh xu hướng thanh niên di cư sang Hawaii và bờ Tây nước Mỹ làm giảm dân số trên đảo.",
    "note_en": "American Samoa's ~$880 million economy (~$18,000 per capita—more than triple that of neighboring independent Samoa) rests almost entirely on two pillars: US federal grants and military retirement/remittance inflows, and the giant StarKist Samoa tuna cannery, which employs thousands of workers (many commuting on work permits from independent Samoa) and accounts for over 90% of all merchandise exports to the US mainland. This heavy reliance on a single industrial employer leaves the territory structurally vulnerable to shifts in Western Pacific tuna fishing access rules and federally mandated minimum-wage increases, while steady out-migration to Hawaii and the US West Coast has gradually reduced the resident population."
  },
  "Puerto Rico": {
    "tier": "adv",
    "gdp_vi": "~126 tỷ USD (#62 thế giới, lãnh thổ Mỹ)",
    "gdp_en": "~$126B (#62 globally, US Commonwealth)",
    "pc_vi": "~39.350 USD (PPP ~50.330 USD)",
    "pc_en": "~$39,350 (PPP ~$50,330)",
    "gr": "+3.2%",
    "sec": [
      52,
      47,
      1
    ],
    "main_vi": "Sản xuất dược phẩm & công nghệ sinh học, thiết bị y tế, điện tử – hàng không, du lịch Caribe, dịch vụ tài chính & ưu đãi thuế Đạo luật 60",
    "main_en": "Pharmaceuticals & biotechnology manufacturing, medical devices, aerospace & electronics, Caribbean tourism, Act 60 tax-incentive services",
    "note_vi": "Khác biệt hoàn toàn với mọi hòn đảo khác ở vùng Caribbean, công nghiệp chế tạo (chứ không phải du lịch) mới là trụ cột lớn nhất của nền kinh tế Puerto Rico khi đóng góp gần 45–50% GDP: hòn đảo là đại công xưởng sản xuất dược phẩm sinh học, thuốc đặc trị, máy tạo nhịp tim và thiết bị y tế của các tập đoàn hàng đầu thế giới (Pfizer, Amgen, AbbVie, Medtronic), cung ứng trực tiếp cho thị trường nội địa Hoa Kỳ và xuất khẩu hơn 60 tỷ USD hàng hóa mỗi năm. Sau khi hoàn tất tái cơ cấu hơn 33 tỷ USD nợ trái phiếu thông qua Ban Giám sát Tài chính Liên bang (PROMESA) vào năm 2022, nền kinh tế đang được tiếp sức bởi làn sóng du lịch kỷ lục, ưu đãi thuế thu hút nhà đầu tư theo Đạo luật 60 (Act 60) và hơn 50 tỷ USD ngân sách liên bang Mỹ giải ngân để tái thiết hạ tầng và hiện đại hóa lưới điện tư nhân hóa (LUMA Energy / Genera PR).",
    "note_en": "Uniquely in the Caribbean, high-value manufacturing—not tourism—is the primary engine of Puerto Rico's ~$120 billion economy, generating nearly half of GDP: the island serves as a premier onshore US production hub for blockbuster pharmaceuticals, biologics, pacemakers, and medical devices (hosting giants such as Amgen, Pfizer, AbbVie, and Medtronic), shipping over $60 billion in goods annually. Having exited its historic municipal debt restructuring under the federal PROMESA oversight board in 2022, the island is experiencing record tourism arrivals and a massive influx of over $50 billion in US federal disaster-recovery and infrastructure funds, even as it struggles with demographic aging and frequent power outages while overhauling its privatized electrical grid (LUMA Energy and Genera PR)."
  },
  "United States of America": {
    "tier": "adv",
    "gdp_vi": "~29.298 tỷ USD (#1 thế giới)",
    "gdp_en": "~$29.30T (#1 globally)",
    "pc_vi": "~86.170 USD (PPP ~86.170 USD)",
    "pc_en": "~$86,170 (PPP ~$86,170)",
    "gr": "+2.8%",
    "sec": [
      80,
      19,
      1
    ],
    "main_vi": "Công nghệ cao & AI (Silicon Valley), tài chính – vốn toàn cầu (Wall Street), hàng không vũ trụ – quốc phòng, dầu khí đá phiến (số 1 thế giới), dược phẩm, nông nghiệp công nghệ cao",
    "main_en": "High-tech & AI (Silicon Valley), global finance (Wall Street), aerospace & defense, shale oil & gas (#1 globally), pharmaceuticals, industrial agriculture",
    "note_vi": "Là siêu cường kinh tế số 1 thế giới chiếm khoảng 26% GDP toàn cầu, Hoa Kỳ nắm giữ quyền lực tài chính tối thượng nhờ phát hành đồng USD dự trữ và sở hữu thị trường vốn Phố Wall sâu rộng nhất hành tinh. Nền kinh tế kết hợp sự thống trị tuyệt đối về trí tuệ nhân tạo (AI), điện toán đám mây, thiết kế bán dẫn và công nghệ sinh học với vị thế nhà sản xuất dầu thô và khí đốt tự nhiên lớn nhất thế giới (nhờ mỏ đá phiến Permian). Dù đối mặt với thâm hụt ngân sách lớn và chi phí tái công nghiệp hóa cao, năng suất lao động vượt trội và làn sóng đầu tư hạ tầng công nghệ vẫn giúp Mỹ tăng trưởng bỏ xa các nước G7 khác.",
    "note_en": "Accounting for roughly 26% of global nominal output, the United States wields unrivaled financial clout as issuer of the world's primary reserve currency (USD) and home to Wall Street's deep capital markets. Its economy pairs global dominance in artificial intelligence, cloud computing, semiconductor design, and biotechnology with its status as the world's largest producer of crude oil and natural gas thanks to the Permian shale basin. Despite mounting federal fiscal deficits and high domestic labor costs, robust productivity growth and massive capital inflows into AI and advanced manufacturing keep the US outperforming its G7 peers."
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
    "note_vi": "Dù hoàn toàn không có cư dân thường trú, chính quyền Nam Georgia và Quần đảo Nam Sandwich vẫn tự cân đối 100% ngân sách hoạt động (khoảng 7–10 triệu bảng Anh/năm) mà không cần trợ cấp thường xuyên từ người đóng thuế Anh. Nguồn thu đến từ hai trụ cột bền vững: bán giấy phép đánh bắt có kiểm soát cực kỳ nghiêm ngặt loài cá răng Patagonian (Patagonian toothfish — loại cá thượng hạng có giá rất cao tại Mỹ và Nhật Bản) và thu phí đổ bộ từ khoảng 10.000–15.000 du khách đi tàu thám hiểm vùng cực ghé thăm đảo mỗi mùa hè.",
    "note_en": "Despite having zero permanent inhabitants, the Government of South Georgia and the South Sandwich Islands is financially self-sustaining (generating ~£7–10 million annually) without routine UK taxpayer subsidies. Revenue is derived from two tightly regulated pillars: selling quota licenses for MSC-certified sustainable Patagonian toothfish (Chilean sea bass) fisheries in its 1.24M km² maritime zone, and collecting landing fees from the 10,000–15,000 polar expedition cruise passengers who visit Grytviken and the king penguin colonies each austral summer."
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
    "note_vi": "Lãnh thổ này hoàn toàn không có cư dân dân sự thường trú và không có bất kỳ hoạt động kinh tế thương mại, nông nghiệp hay du lịch nào. Toàn bộ hoạt động trên đảo Diego Garcia xoay quanh vận hành Căn cứ Hải – Không quân Liên hợp Mỹ – Anh với khoảng 3.000 quân nhân và nhà thầu quốc phòng; theo Hiệp ước Anh – Mauritius ký kết năm 2025, Chính phủ Anh sẽ chi trả gói tài chính thuê căn cứ hàng năm (khoảng trên 100 triệu bảng/năm) cùng quỹ hỗ trợ phát triển hạ tầng cho Mauritius và quỹ tín thác dành cho người bản địa Chagos trong suốt thời hạn thuê 99 năm.",
    "note_en": "The territory has zero permanent civilian residents and no commercial, agricultural, or tourist economy whatsoever. All human activity centers on the joint US–UK military base at Diego Garcia (~3,000 military and contractor personnel) and strict marine conservation across the 640,000-km² Chagos Marine Protected Area; under the 2025 UK–Mauritius sovereignty treaty, Britain provides annual lease payments exceeding £100 million alongside an infrastructure partnership and a trust fund for displaced Chagossians over the 99-year lease term."
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
    "note_vi": "Do vị trí cách biệt hàng nghìn km với các thị trường lớn và dân số trên đảo chính chỉ khoảng 4.400 người (nhiều người trong độ tuổi lao động làm việc tại Anh hoặc quần đảo Falkland), ngân sách công của Saint Helena vẫn nhận khoảng 30–35 triệu bảng Anh viện trợ tài khóa hàng năm từ Chính phủ Anh. Tuy nhiên, việc duy trì các chuyến bay thương mại định kỳ từ Johannesburg (Nam Phi) kết hợp internet cáp quang tốc độ cao đang thúc đẩy du lịch lịch sử Napoleon, xuất khẩu cà phê Bourbon xanh hữu cơ đắt giá và phí đặt trạm mặt đất vệ tinh (trong khi đảo Tristan da Cunha tự chủ tài chính nhờ xuất khẩu tôm hùm đá).",
    "note_en": "Because of its extreme mid-ocean isolation and small resident population of ~4,400 on Saint Helena, the territorial government relies on UK budgetary aid grants of roughly £30–35 million per year to fund public services and airport operations. At the same time, scheduled flights from Johannesburg and high-speed Equiano fiber broadband are expanding Napoleonic heritage tourism, ultra-premium Green Tipped Bourbon coffee exports, and satellite ground-station hosting, while sister island Tristan da Cunha self-finances through lucrative rock-lobster exports."
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
    "note_vi": "Là nền kinh tế có quy mô dân số nhỏ nhất hành tinh (với lực lượng trong độ tuổi lao động trên đảo chỉ còn hơn một chục người và dùng đồng Đô la New Zealand - NZD), ngân sách công của Pitcairn phụ thuộc hơn 90% vào khoản viện trợ khoảng 4–5 triệu bảng Anh mỗi năm từ Chính phủ Anh để duy trì tàu tiếp tế, điện và y tế. Nguồn thu nội tại ít ỏi của cư dân đến từ việc xuất khẩu mật ong hữu cơ tinh khiết, bán đồ gỗ chạm khắc thủ công cho du khách trên các tàu du lịch ghé ngang ngoài khơi, phát hành tem sưu tầm và phí bản quyền tên miền quốc gia `.pn`.",
    "note_en": "Operating the smallest demographic economy on Earth (using the New Zealand dollar with barely a dozen working-age residents among ~35–45 inhabitants), Pitcairn relies on UK government budgetary aid (~£4–5 million annually) for over 90% of its public expenditure, including its lifeline supply ship, power generation, and medical care. Local household income is earned by exporting ultra-pure organic honey, selling hand-carved miro-wood curios to passengers on passing cruise ships, issuing collector postage stamps, and licensing the `.pn` internet domain."
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
    "note_vi": "Anguilla là trường hợp kinh tế vĩ mô độc nhất vô nhị trên thế giới trong kỷ nguyên Trí tuệ Nhân tạo: nhờ được tổ chức IANA cấp đuôi tên miền quốc gia `.ai` từ năm 1995, cơn sốt AI bùng nổ từ 2023–2026 đã đẩy số lượng tên miền `.ai` vượt mốc 600.000 tên miền, mang lại hàng chục triệu USD mỗi năm (chiếm 30–40% tổng thu ngân sách nhà nước). Khoản thu ròng này giúp hòn đảo không có thuế thu nhập giảm bớt sự phụ thuộc vào mùa vụ du lịch nghỉ dưỡng.",
    "note_en": "Anguilla represents one of the most remarkable macroeconomic windfalls of the Artificial Intelligence era: assigned the `.ai` country-code top-level domain by IANA in 1995, the island has seen active `.ai` registrations surge past 600,000 in 2024–2026, generating tens of millions of dollars annually (30–40% of total government revenue). This recurring digital royalty insulates the zero-income-tax territory from hurricane and tourism shocks."
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
    "note_vi": "Trước chiến tranh năm 1982, kinh tế quần đảo Falkland gần như chỉ dựa vào nghề nuôi cừu lấy len truyền thống; nhưng sau khi Anh tuyên bố Vùng bảo tồn và quản lý ngư nghiệp 200 hải lý quanh đảo năm 1986, nền kinh tế đã lột xác hoàn toàn. Ngày nay, nguồn thu hàng chục triệu bảng mỗi năm từ việc bán giấy phép đánh bắt mực ống (cung cấp 75% lượng mực calamari cho châu Âu) cùng du lịch tàu biển Nam Cực giúp chính quyền đảo tự chủ 100% tài chính (trừ chi phí quốc phòng do Anh chi trả), đồng thời chuẩn bị khai thác thương mại mỏ dầu Sea Lion ngoài khơi.",
    "note_en": "Prior to 1982, the Falklands economy depended almost entirely on sheep wool; the establishment of a 200-nautical-mile fisheries conservation zone in 1986 transformed the territory into one of the wealthiest per-capita jurisdictions on Earth. Today, lucrative squid-fishing licenses sold to Asian and European fleets—combined with fine wool exports, Antarctic cruise calls, and advancing development of the offshore Sea Lion oilfield—make the island government 100% financially self-sufficient in all areas except UK defense."
  },
  "Cayman Is.": {
    "tier": "adv",
    "gdp_vi": "~7,8 tỷ USD (#157 thế giới, lãnh thổ Anh)",
    "gdp_en": "~$7.8B (#157 globally, UK Overseas Territory)",
    "pc_vi": "~104.290 USD (PPP ~92.200 USD)",
    "pc_en": "~$104,290 (PPP ~$92,200)",
    "gr": "+3.8%",
    "sec": [
      91,
      8,
      1
    ],
    "main_vi": "Trung tâm quỹ đầu cơ (hedge funds) & quỹ đầu tư tư nhân toàn cầu, ngân hàng quốc tế, bảo hiểm nội bộ (captive insurance), du lịch nghỉ dưỡng & tàu biển cao cấp",
    "main_en": "Global hedge fund & private equity domicile, international banking, captive insurance, luxury resort & cruise tourism",
    "note_vi": "Quần đảo Cayman là thủ phủ quỹ phòng hộ (hedge funds) lớn nhất hành tinh, nơi đặt pháp nhân của hơn 12.800 quỹ đầu tư và hơn 70% tổng số quỹ đầu cơ ngoài khơi toàn cầu, bên cạnh trung tâm bảo hiểm nội bộ (captive insurance) đứng thứ hai thế giới. Chính quyền hoàn toàn không thu thuế thu nhập cá nhân, thuế doanh nghiệp hay thuế lãi vốn, mà vận hành ngân sách thặng dư nhờ phí cấp phép dịch vụ tài chính và thuế nhập khẩu hàng tiêu dùng.",
    "note_en": "The Cayman Islands serve as the undisputed global capital for alternative investment funds, domiciling over 12,800 regulated funds and more than 70% of the world's offshore hedge funds, alongside the world's second-largest captive insurance market. The government levies zero personal income, corporate, or capital-gains taxes, funding first-world infrastructure entirely through financial licensing fees, work-permit charges, and import duties."
  },
  "Bermuda": {
    "tier": "adv",
    "gdp_vi": "~9,2 tỷ USD (#153 thế giới, lãnh thổ Anh)",
    "gdp_en": "~$9.2B (#153 globally, UK Overseas Territory)",
    "pc_vi": "~142.250 USD (PPP ~118.730 USD)",
    "pc_en": "~$142,250 (PPP ~$118,730)",
    "gr": "+1.9%",
    "sec": [
      95,
      5,
      0
    ],
    "main_vi": "Tái bảo hiểm quốc tế (Reinsurance - top 3 thế giới), dịch vụ tài chính – bảo hiểm rủi ro thiên tai, du lịch cao cấp, đăng ký tàu biển & máy bay",
    "main_en": "Global reinsurance & catastrophe bonds (top-3 globally), international financial services, upscale tourism, aircraft & ship registry",
    "note_vi": "Không giống các thiên đường thuế đơn thuần chỉ đăng ký công ty trên giấy, Bermuda là trung tâm tái bảo hiểm (reinsurance) thực chất hàng đầu thế giới với hàng nghìn chuyên gia định phí bảo hiểm làm việc trực tiếp tại Hamilton, nắm giữ hơn 35% thị phần trái phiếu thảm họa (catastrophe bonds) toàn cầu. Từ năm 2025, Bermuda triển khai thuế thu nhập doanh nghiệp 15% theo chuẩn OECD cho các tập đoàn đa quốc gia có doanh thu trên 750 triệu Euro, giúp ngân sách thu về nguồn lực lớn để giảm phí sinh hoạt nội địa.",
    "note_en": "Unlike brass-plate tax havens, Bermuda operates a deep, substantive financial ecosystem in Hamilton staffed by thousands of actuaries and underwriters who control over 35% of the global catastrophe-bond and property-reinsurance market. In 2025, the territory enacted a 15% corporate income tax aligned with the OECD global minimum tax for large multinationals, generating new fiscal revenues while preserving its status as a premier risk-transfer hub."
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
    "note_vi": "Nền kinh tế vận hành hoàn toàn bằng đồng Đô la Mỹ (USD) dựa trên mô hình \"song trụ cột\" độc đáo: dịch vụ tài chính ngoài khơi và du lịch biển thượng lưu. Phí đăng ký và duy trì thường niên từ hơn 350.000 công ty kinh doanh quốc tế (BVI Business Companies) đóng góp trực tiếp hơn 55% tổng thu ngân sách chính quyền mà không cần đánh thuế thu nhập cá nhân hay thuế doanh nghiệp nội địa.",
    "note_en": "Operating entirely on the US dollar, the economy thrives on a distinctive twin-pillar model combining offshore corporate services with upscale maritime tourism. Incorporation and annual licensing fees from over 350,000 registered BVI Business Companies generate more than 55% of total government revenue, allowing the territory to levy zero corporate or personal income taxes."
  },
  "Turks and Caicos Is.": {
    "tier": "adv",
    "gdp_vi": "~1,7 tỷ USD (#184 thế giới, lãnh thổ Anh)",
    "gdp_en": "~$1.7B (#184 globally, UK Overseas Territory)",
    "pc_vi": "~37.510 USD (PPP ~38.010 USD)",
    "pc_en": "~$37,510 (PPP ~$38,010)",
    "gr": "+5.6%",
    "sec": [
      88,
      11,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng siêu sang (bãi biển Grace Bay), bất động sản biệt thự nghỉ dưỡng, dịch vụ tài chính ngoài khơi, xuất khẩu tôm hùm & ốc hoàng hậu",
    "main_en": "Ultra-luxury resort tourism (Grace Bay), vacation villa real estate, offshore financial services, spiny lobster & queen conch exports",
    "note_vi": "Nền kinh tế Turks và Caicos tăng trưởng bùng nổ nhờ định vị ở phân khúc du lịch nghỉ dưỡng siêu sang (ultra-luxury resorts) và bất động sản biệt thự biển tại đảo Providenciales, phục vụ giới thượng lưu Bắc Mỹ qua các chuyến bay thẳng từ New York, Miami và Toronto. Việc sử dụng đồng USD đồng thời không đánh thuế thu nhập cá nhân, thuế doanh nghiệp hay thuế tài sản hàng năm giúp chính quyền thu hút dòng vốn đầu tư bất động sản lớn, tự cân đối ngân sách qua thuế nhập khẩu và phí giao dịch đất đai.",
    "note_en": "The Turks and Caicos economy has boomed by positioning Providenciales at the pinnacle of the Caribbean ultra-luxury resort and beachfront villa market, fueled by direct flights from New York, Miami, and Toronto. Operating on the US dollar with zero income, corporate, capital-gains, or annual property taxes, the government runs fiscal surpluses funded by customs duties, tourism taxes, and luxury real-estate stamp duties."
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
    "note_vi": "Sau thảm họa núi lửa Soufrière Hills (1995–2010) phá hủy thủ phủ cũ Plymouth và khiến quy mô kinh tế thu hẹp mạnh, ngân sách hoạt động thường xuyên của Montserrat hiện phụ thuộc khoảng 60% vào khoản viện trợ tài khóa hàng năm từ Chính phủ Anh (FCDO). Tuy nhiên, hòn đảo đang từng bước khôi phục nội lực kinh tế thông qua việc khai thác – xuất khẩu hàng triệu tấn cát và đá xây dựng có nguồn gốc từ chính tro dung nham núi lửa sang các đảo Caribbean, kết hợp xây dựng thủ phủ mới tại Little Bay và du lịch mạo hiểm ngắm \"thành phố ma\" Plymouth.",
    "note_en": "Since the 1995–2010 Soufrière Hills volcanic eruptions destroyed the former capital of Plymouth and shrank the local tax base, Montserrat's recurrent public budget has relied on UK government grants (FCDO) for roughly 60% of expenditure. However, the island is steadily rebuilding self-reliance by exporting millions of tons of high-grade volcanic sand and aggregate mined from pyroclastic deposits to neighboring Caribbean islands, developing the new Little Bay port town, and attracting \"dark tourism\" visitors to view buried Plymouth."
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
    "note_vi": "Là một Lãnh thổ phụ thuộc Hoàng gia Anh (Crown Dependency) có quyền tự quyết hoàn toàn về ngân sách và thuế khóa, nền kinh tế trị giá hơn 7,2 tỷ USD của Jersey dựa vào ngành dịch vụ tài chính và pháp lý quốc tế (chiếm hơn 40% GVA của đảo), chuyên sâu về quản lý quỹ đầu tư tư nhân, ngân hàng cho giới siêu giàu và quỹ tín thác gia đình (family trusts). Từ năm 2025, Jersey áp dụng mức thuế tối thiểu toàn cầu 15% theo trụ cột 2 của OECD đối với các tập đoàn đa quốc gia lớn, đồng thời duy trì mức thuế doanh nghiệp 0% (0/10 regime) cho các công ty thông thường.",
    "note_en": "As a fiscally sovereign British Crown Dependency, Jersey's $7.2 billion economy is anchored by its international finance and legal sector (generating over 40% of island GVA), specializing in private wealth management, family trusts, and alternative investment funds. In 2025, Jersey implemented the OECD Pillar Two 15% minimum corporate tax for large multinational groups while maintaining its traditional \"0/10\" corporate tax regime (0% general corporate tax, 10% for regulated financial services) for smaller entities."
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
    "note_vi": "Dịch vụ tài chính đóng góp khoảng 40% tổng sản phẩm quốc nội (GDP ~4,5 tỷ USD) của Guernsey, trong đó hòn đảo giữ vị trí dẫn đầu châu Âu về thị trường bảo hiểm tự bảo hiểm (captive insurance — phục vụ các tập đoàn lớn trên Sàn chứng khoán Luân Đôn tự quản trị rủi ro) cùng ngành quản lý quỹ đầu tư tư nhân và quỹ hạ tầng xanh. Cũng như Jersey và đảo Man, từ năm 2025 Guernsey đã triển khai thuế tối thiểu 15% theo chuẩn OECD đối với các tập đoàn đa quốc gia lớn bên cạnh biểu thuế doanh nghiệp 0% truyền thống, đồng thời phát triển du lịch sinh thái và nông nghiệp bò sữa Guernsey.",
    "note_en": "Financial and fiduciary services generate roughly 40% of Guernsey's $4.5 billion economy, anchored by its status as Europe's number-one domicile for captive insurance (serving major FTSE 100 corporations), private-equity fund administration, and regulated green investment funds. Alongside Jersey and the Isle of Man, Guernsey implemented the OECD 15% minimum corporate tax for large multinationals in 2025 while preserving its 0% general corporate tax rate and supporting heritage tourism and traditional Guernsey dairy farming."
  },
  "Isle of Man": {
    "tier": "adv",
    "gdp_vi": "~7,40 tỷ USD (Lãnh thổ Vương quyền Anh)",
    "gdp_en": "~$7.40B (British Crown Dependency)",
    "pc_vi": "~87.500 USD",
    "pc_en": "~$87,500",
    "gr": "+2.4%",
    "sec": [
      92,
      7,
      1
    ],
    "main_vi": "Bảo hiểm nhân thọ quốc tế & quản lý tài sản, công nghệ giải trí số (e-Gaming & fintech), đăng ký tàu biển – máy bay tư nhân, linh kiện hàng không vũ trụ, giải đua mô tô Isle of Man TT",
    "main_en": "International life assurance & wealth management, e-Gaming & fintech, private aircraft & superyacht registry, aerospace components, Isle of Man TT motorsport tourism",
    "note_vi": "Đảo Man sở hữu một trong những nền kinh tế hải đảo cân bằng và bền vững nhất châu Âu (tăng trưởng liên tục suốt hơn ba thập kỷ với GDP ~7,4 tỷ USD): bên cạnh trụ cột bảo hiểm nhân thọ quốc tế và quản lý gia sản (~35% GDP), đảo còn là trung tâm công nghệ giải trí số và fintech (e-Gaming) được cấp phép minh bạch hàng đầu thế giới (~15–20% GDP). Đặc biệt, cụm công nghiệp cơ khí chính xác trên đảo còn sản xuất ghế phóng thoát hiểm cho tiêm kích F-35, linh kiện tàu vũ trụ và động cơ máy bay cho hãng Rolls-Royce và Airbus.",
    "note_en": "The Isle of Man boasts one of Europe's most resilient and diversified island economies ($7.4 billion GDP): alongside international life assurance and wealth management (~35% of GDP), it is a premier regulated hub for global e-Gaming and fintech (~15–20% of GDP). Uniquely among offshore financial centers, the island also hosts a thriving precision-engineering and aerospace cluster manufacturing fighter-jet ejection seats (for the F-35 program), spacecraft valves, and components for Airbus and Rolls-Royce."
  },
  "United Kingdom": {
    "tier": "adv",
    "gdp_vi": "~3.696 tỷ USD (#6 thế giới)",
    "gdp_en": "~$3.70T (#6 globally)",
    "pc_vi": "~53.340 USD (PPP ~62.840 USD)",
    "pc_en": "~$53,340 (PPP ~$62,840)",
    "gr": "+1.1%",
    "sec": [
      80,
      19,
      1
    ],
    "main_vi": "Tài chính – ngân hàng – bảo hiểm toàn cầu (City of London), dược phẩm & khoa học sự sống (AstraZeneca, GSK), hàng không vũ trụ – quốc phòng (BAE, Rolls-Royce), AI & giáo dục đại học, năng lượng điện gió ngoài khơi",
    "main_en": "Global finance & insurance (City of London), pharmaceuticals & life sciences (AstraZeneca, GSK), aerospace & defense (BAE, Rolls-Royce), AI & higher education, offshore wind",
    "note_vi": "Là nền kinh tế lớn thứ 6 thế giới (~3.696 tỷ USD) và là nhà xuất khẩu dịch vụ lớn thứ 2 toàn cầu (chỉ sau Mỹ), sức mạnh kinh tế của Vương quốc Anh hội tụ tại khu tài chính City of London (trung tâm giao dịch ngoại hối số 1 hành tinh, bảo hiểm và quản lý quỹ), hệ sinh thái Trí tuệ nhân tạo số 1 châu Âu (Google DeepMind, #3 thế giới sau Mỹ và Trung Quốc), các trường đại học tinh hoa (Oxford, Cambridge), dược phẩm – khoa học sự sống (AstraZeneca, GSK), công nghiệp hàng không – quốc phòng (BAE Systems, Rolls-Royce) và điện gió ngoài khơi Biển Bắc. Dù việc rời thị trường chung EU (Brexit) đã tạo thêm rào cản thương mại hàng hóa và tình trạng thiếu hụt lao động sau đại dịch, nước Anh vừa chính thức gia nhập Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) vào tháng 12/2024 và đang đàm phán gỡ bỏ các rào cản thương mại với EU.",
    "note_en": "The world's sixth-largest economy (~$3.70 trillion) and second-largest global exporter of services (behind only the US), the UK excels in global finance and insurance centered on the City of London (#1 in foreign-exchange trading), Europe's largest AI ecosystem (home to Google DeepMind, #3 globally), elite universities (Oxford, Cambridge), life sciences (AstraZeneca, GSK), aerospace and defense (BAE Systems, Rolls-Royce), and North Sea offshore wind. While post-Brexit trade barriers with the EU have weighed on goods exports and business investment, the UK formally acceded to the Indo-Pacific CPTPP trade bloc in December 2024 and is pursuing pragmatic regulatory alignment with Brussels under the Starmer government."
  },
  "United Arab Emirates": {
    "tier": "adv",
    "gdp_vi": "~552 tỷ USD (#27 thế giới)",
    "gdp_en": "~$552B (#27 globally)",
    "pc_vi": "~50.270 USD (PPP ~79.340 USD)",
    "pc_en": "~$50,270 (PPP ~$79,340)",
    "gr": "+4.0%",
    "sec": [
      55,
      44,
      1
    ],
    "main_vi": "Dầu khí (Abu Dhabi – ADNOC), hàng không & logistics toàn cầu (Emirates, cảng Jebel Ali), tài chính & quản lý quỹ, bất động sản – du lịch (Dubai), AI",
    "main_en": "Oil & gas (Abu Dhabi/ADNOC), global aviation & port logistics (Emirates, Jebel Ali), wealth management, real estate & tourism (Dubai), AI infrastructure",
    "note_vi": "UAE là nền kinh tế đa dạng hóa thành công nhất vùng Vịnh khi khu vực phi dầu mỏ đã đóng góp trên 74% GDP nhờ hàng không quốc tế (Emirates, Etihad), cảng biển DP World, du lịch xa xỉ và trung tâm tài chính thu hút giới siêu giàu toàn cầu. Trong khi Abu Dhabi nắm giữ các quỹ đầu tư quốc gia (ADIA, Mubadala, ADQ) có tổng tài sản vượt 1.700 tỷ USD để dẫn dắt cuộc đua bán dẫn – AI (G42, MGX), nước này cũng đã được FATF đưa ra khỏi \"danh sách xám\" tài chính vào năm 2024.",
    "note_en": "The UAE boasts the Gulf's most diversified economy, with non-oil sectors generating over 74% of GDP across global aviation (Emirates, Etihad), DP World port logistics, luxury tourism, and wealth management. Removed from the FATF financial \"grey list\" in 2024, the country leverages over $1.7 trillion in Abu Dhabi sovereign wealth funds (ADIA, Mubadala, ADQ) to spearhead global investments in AI data centers (G42, MGX), renewable energy, and green hydrogen."
  },
  "Ukraine": {
    "tier": "emg",
    "gdp_vi": "~191 tỷ USD (#57 thế giới)",
    "gdp_en": "~$191B (#57 globally)",
    "pc_vi": "~5.390 USD (PPP ~18.640 USD)",
    "pc_en": "~$5,390 (PPP ~$18,640)",
    "gr": "+3.2%",
    "sec": [
      70,
      22,
      8
    ],
    "main_vi": "Nông nghiệp xuất khẩu (ngô, lúa mì, dầu hướng dương số 1 thế giới), công nghiệp quốc phòng & drone, luyện kim – quặng sắt, gia công phần mềm & CNTT",
    "main_en": "Agri-exports (corn, wheat, world's #1 sunflower oil exporter), defense tech & drone manufacturing, iron ore & metallurgy, IT outsourcing",
    "note_vi": "Sau cú sụt giảm gần 30% GDP vào năm 2022 do chiến tranh, kinh tế Ukraine đã phục hồi tăng trưởng 3,5–5%/năm trong giai đoạn 2023–2025 nhờ việc khai thông hoàn toàn hành lang hàng hải Biển Đen (giúp xuất khẩu hơn 50–60 triệu tấn ngũ cốc, dầu hướng dương và quặng sắt/năm), ngành công nghệ thông tin (IT) bền bỉ và sự bùng nổ của tổ hợp công nghiệp quốc phòng nội địa (sản xuất hàng triệu FPV drone, xuồng không người lái và pháo tự hành Bohdana). Tuy nhiên, với việc Nga tập kích tên lửa làm mất hơn một nửa công suất phát điện mùa đông và chi tiêu quốc phòng ngốn toàn bộ nguồn thu thuế nội địa, ngân sách dân sự của Kyiv phụ thuộc sống còn vào gói viện trợ 50 tỷ Euro (Ukraine Facility) của EU và khoản vay 50 tỷ USD của G7 được bảo đảm bằng lợi nhuận từ tài sản đóng băng của Nga.",
    "note_en": "After contracting by nearly 30% in 2022, Ukraine's wartime economy rebounded with 3.5–5% annual growth in 2023–2025, buoyed by the reopening of its Black Sea maritime corridor (restoring exports of ~50–60 million tons of grain, sunflower oil, and iron ore), a resilient IT sector, and a domestic defense-tech boom producing millions of FPV drones, naval drones, and long-range strike systems annually. Nevertheless, Russian missile strikes on power plants and the dedication of nearly all domestic tax revenues to the military leave Kyiv's civilian budget heavily dependent on the EU's €50B Ukraine Facility and the G7's $50B loan backed by immobilized Russian sovereign assets."
  },
  "Uganda": {
    "tier": "low",
    "gdp_vi": "~53,9 tỷ USD (#90 thế giới)",
    "gdp_en": "~$53.9B (#90 globally)",
    "pc_vi": "~1.080 USD (PPP ~3.280 USD)",
    "pc_en": "~$1,080 (PPP ~$3,280)",
    "gr": "+6.1%",
    "sec": [
      47,
      27,
      26
    ],
    "main_vi": "Xuất khẩu cà phê (lớn thứ 2 châu Phi), khai thác & tinh luyện vàng, phát triển dầu khí hồ Albert (dự án Tilenga/Kingfisher & đường ống EACOP), thủy điện sông Nile, du lịch sinh thái",
    "main_en": "Coffee exports (#2 in Africa), gold refining & trade, Lake Albert oil development (Tilenga/Kingfisher & EACOP pipeline), Nile hydropower, wildlife tourism",
    "note_vi": "Nhờ đất đai màu mỡ và hai mùa mưa đều đặn, Uganda là vựa lương thực tự nhiên của vùng Hồ Lớn Đông Phi và là nhà xuất khẩu cà phê lớn thứ hai toàn châu Phi (chỉ sau Ethiopia, đồng thời đứng số 1 châu Phi về cà phê Robusta bản địa với kim ngạch vượt 1,4 tỷ USD/năm). Vàng tinh luyện và tái xuất khẩu cũng đã vươn lên thành mặt hàng mang lại nguồn thu ngoại tệ lớn nhất bên cạnh du lịch sinh thái ngắm khỉ đột núi tại rừng Bwindi và xuất khẩu sữa, ngô, điện năng sang các nước láng giềng. Khi các mỏ dầu Tilenga và Kingfisher quanh hồ Albert (trữ lượng thu hồi ~1,4 tỷ thùng) bắt đầu bơm dầu thương mại qua đường ống EACOP vào giai đoạn 2026, tốc độ tăng trưởng GDP của Uganda được IMF dự báo có thể bứt phá từ 6% lên mức hai chữ số.",
    "note_en": "Blessed with fertile soils and bimodal rains, Uganda serves as the agricultural breadbasket of the Great Lakes and ranks as Africa's #2 coffee exporter overall (#1 in native Robusta coffee, earning over $1.4 billion annually), alongside major regional exports of dairy, maize, sugar, and hydroelectricity. Gold refining and trading have also surged to become its top merchandise foreign-exchange earner, complemented by high-end mountain gorilla trekking in Bwindi Impenetrable Forest. With roughly 1.4 billion barrels of recoverable crude oil in the Lake Albert basin (Tilenga and Kingfisher projects) moving toward first commercial production via the EACOP pipeline around 2026, Uganda is poised to accelerate from ~6% growth toward double-digit expansion."
  },
  "Turkmenistan": {
    "tier": "emg",
    "gdp_vi": "~44 tỷ USD (#99 thế giới)",
    "gdp_en": "~$44B (#99 globally)",
    "pc_vi": "~5.900 USD (PPP ~21.030 USD)",
    "pc_en": "~$5,900 (PPP ~$21,030)",
    "gr": "+6.3%",
    "sec": [
      49,
      39,
      12
    ],
    "main_vi": "Khí đốt tự nhiên (trữ lượng #4 thế giới, mỏ Galkynysh), sản phẩm lọc hóa dầu, phân bón, bông vải",
    "main_en": "Natural gas (#4 global reserves, Galkynysh field), refined petroleum & polymers, fertilizers, cotton",
    "note_vi": "Sở hữu trữ lượng khí đốt tự nhiên lớn thứ tư thế giới (siêu mỏ Galkynysh), kinh tế Turkmenistan (~50 tỷ USD) do nhà nước kiểm soát chặt chẽ với khí đốt và sản phẩm hóa dầu chiếm hơn 85% xuất khẩu. Từ khi Nga giảm mua khí năm 2016, Trung Quốc trở thành khách hàng gần như độc quyền khi thu mua ~80% lượng khí xuất khẩu của nước này qua đường ống Trung Á – Trung Quốc. Điểm nghẽn lớn là phụ thuộc vào một người mua duy nhất, chế độ tỷ giá kép làm tê liệt khu vực tư nhân và lượng rò rỉ khí mê-tan cao.",
    "note_en": "Sitting atop the world's fourth-largest natural gas reserves (anchored by the Galkynysh field), Turkmenistan runs a state-controlled economy (~$50B GDP) where hydrocarbons generate over 85% of exports alongside cotton. Since Russia curtailed gas purchases in 2016, China has acted as a near-monopsony buyer, taking ~80% of Turkmen gas exports via the Central Asia–China pipeline network. Major structural weaknesses include single-buyer dependence on Beijing, a rigid dual exchange rate stifling private business, and high methane emissions."
  },
  "Turkey": {
    "tier": "emg",
    "gdp_vi": "~1.359 tỷ USD (#17 thế giới, thành viên G20)",
    "gdp_en": "~$1.36T (#17 globally, G20 member)",
    "pc_vi": "~15.890 USD (PPP ~45.120 USD)",
    "pc_en": "~$15,890 (PPP ~$45,120)",
    "gr": "+3.3%",
    "sec": [
      65,
      29,
      6
    ],
    "main_vi": "Sản xuất ô tô & thiết bị gia dụng xuất sang EU, công nghiệp quốc phòng (UAV Bayraktar), dệt may, du lịch (~60 triệu khách/năm), thép, xây dựng, nông sản (hạt phỉ)",
    "main_en": "Automotive & white-goods manufacturing for EU, defense & aerospace (Bayraktar UAVs), textiles, tourism (~60M visitors/yr), steel, construction, agriculture",
    "note_vi": "Là nền kinh tế lớn thứ 17 thế giới (thành viên G20) được tích hợp sâu vào chuỗi cung ứng châu Âu thông qua Liên minh Thuế quan với EU, Thổ Nhĩ Kỳ là công xưởng chế tạo ô tô (kể cả xe điện nội địa TOGG), thiết bị gia dụng, thép, dệt may, đón ~60 triệu du khách quốc tế/năm và sở hữu ngành công nghiệp quốc phòng tự chủ tới 80% (nổi tiếng với UAV Bayraktar, tiêm kích thế hệ 5 KAAN). Từ giữa năm 2023 sang 2025–2026, Bộ trưởng Tài chính Mehmet Şimşek và Ngân hàng Trung ương đã quay lại chính sách tiền tệ thắt chặt truyền thống (nâng lãi suất lên tới 50% trước khi hạ dần), giúp dự trữ ngoại hối đạt mức kỷ lục mới và từng bước kéo lạm phát từ đỉnh 75% xuống mức kiểm soát.",
    "note_en": "A G20 industrial powerhouse integrated into European supply chains via its EU Customs Union, Turkey is a major manufacturer of automobiles (including its domestic EV brand TOGG), home appliances, steel, and textiles, welcomes ~60 million tourists annually, and boasts a defense industry (Bayraktar UAVs, KAAN fighter jet, naval warships) that is 80% self-reliant. Since mid-2023 through 2025–2026, economic team chief Mehmet Şimşek and the Central Bank restored orthodox monetary policy—hiking interest rates to 50% before beginning gradual cuts—which rebuilt central bank reserves to record highs and steadily brought annual inflation down from its 75% peak."
  },
  "Tunisia": {
    "tier": "dev",
    "gdp_vi": "~51,4 tỷ USD (#92 thế giới)",
    "gdp_en": "~$51.4B (#92 globally)",
    "pc_vi": "~4.190 USD (PPP ~14.540 USD)",
    "pc_en": "~$4,190 (PPP ~$14,540)",
    "gr": "+1.6%",
    "sec": [
      66,
      24,
      10
    ],
    "main_vi": "Linh kiện ô tô & dây cáp điện hàng không xuất sang EU, dầu ô liu xuất khẩu (top 4 thế giới), khai thác phosphate, dệt may, du lịch Địa Trung Hải",
    "main_en": "Automotive wiring harnesses & aerospace components for EU, olive oil exports (top-4 globally), phosphate mining, textiles, Mediterranean tourism",
    "note_vi": "Dù quy mô nhỏ và ít dầu mỏ hơn hai nước láng giềng, Tunisia sở hữu nền kinh tế đa dạng và hội nhập sâu vào chuỗi cung ứng công nghiệp châu Âu (EU chiếm hơn 70% kim ngạch xuất khẩu), nổi bật với sản xuất bộ dây cáp điện ô tô, linh kiện hàng không cho Airbus, dệt may và xuất khẩu dầu ô liu, quặng phosphate. Du lịch biển và di sản Carthage cũng đang phục hồi mạnh mẽ với khoảng 9–10 triệu du khách mỗi năm. Tuy nhiên, việc đàm phán gói cứu trợ IMF bị đình trệ, nợ công cao, thiếu hụt lương thực nhập khẩu do hạn hán và chi phí trợ giá năng lượng lớn đang kìm hãm tốc độ tăng trưởng.",
    "note_en": "Despite lacking the vast hydrocarbon wealth of its neighbors, Tunisia boasts a diversified manufacturing base deeply integrated into European supply chains—which absorb over 70% of its exports—producing automotive wiring harnesses, aerospace components for Airbus, textiles, phosphate fertilizers, and world-renowned olive oil. A strong rebound in Mediterranean tourism (~9–10 million visitors annually) and steady diaspora remittances have helped cushion external shocks. Nevertheless, stalled IMF loan talks, heavy public debt, costly food and fuel subsidies, and chronic drought continue to weigh on fiscal stability and youth employment."
  },
  "Trinidad and Tobago": {
    "tier": "adv",
    "gdp_vi": "~25,6 tỷ USD (#116 thế giới)",
    "gdp_en": "~$25.6B (#116 globally)",
    "pc_vi": "~18.730 USD (PPP ~36.380 USD)",
    "pc_en": "~$18,730 (PPP ~$36,380)",
    "gr": "+2.5%",
    "sec": [
      63,
      37,
      0
    ],
    "main_vi": "Khí thiên nhiên hóa lỏng (LNG), amoniac & methanol (thuộc nhóm xuất khẩu hàng đầu thế giới), lọc dầu, dịch vụ tài chính vùng Caribe, sản xuất thực phẩm – đồ uống",
    "main_en": "Liquefied natural gas (LNG), ammonia & methanol (among world's top exporters), petrochemicals, Caribbean regional banking, food & beverage manufacturing",
    "note_vi": "Là cường quốc công nghiệp và tài chính giàu có bậc nhất khối CARICOM với GDP bình quân đầu người gần 20.000 USD (PPP ~34.500 USD), nền kinh tế Trinidad và Tobago được xây dựng trên nền tảng dầu khí và hóa dầu suốt hơn một thế kỷ qua. Khu công nghiệp Point Lisas và tổ hợp Atlantic LNG biến quốc đảo nhỏ bé này thành một trong những nhà xuất khẩu amoniac và methanol hàng đầu thế giới, đồng thời là nhà cung cấp khí tự nhiên hóa lỏng (LNG) lớn cho thị trường Đại Tây Dương. Ngoài năng lượng (chiếm ~35–40% GDP và >80% kim ngạch xuất khẩu), Trinidad còn là trung tâm ngân hàng – bảo hiểm khu vực và sản xuất thực phẩm – đồ uống cung ứng cho toàn vùng Đông Caribbean, trong khi đảo nhỏ Tobago tập trung phát triển du lịch sinh thái biển.",
    "note_en": "Standing as CARICOM's industrial and financial heavyweight with a per-capita GDP near $20,000 (~$34,500 PPP), Trinidad and Tobago possesses the most energy-driven economy in the Caribbean. Anchored by the Point Lisas Industrial Estate and the Atlantic LNG liquefaction complex, the twin-island republic ranks among the world's top exporters of ammonia and methanol as well as a major Atlantic Basin LNG supplier, with hydrocarbons and petrochemicals generating over 80% of export earnings. Complementing energy are regional banking groups, light food-and-beverage manufacturing serving the entire Eastern Caribbean, and eco-resort tourism on sister island Tobago."
  },
  "Tonga": {
    "tier": "emg",
    "gdp_vi": "~0,60 tỷ USD (~600 triệu USD) (#194 thế giới)",
    "gdp_en": "~$600M (#194 globally)",
    "pc_vi": "~6.220 USD (PPP ~8.170 USD)",
    "pc_en": "~$6,220 (PPP ~$8,170)",
    "gr": "+1.7%",
    "sec": [
      58,
      21,
      21
    ],
    "main_vi": "Kiều hối (chiếm ~45% GDP - cao nhất thế giới), nông nghiệp xuất khẩu (bí đỏ sang Nhật, vani, kava), thủy sản, du lịch ngắm cá voi",
    "main_en": "Remittances (~45% of GDP - highest in the world), agricultural exports (squash to Japan, vanilla, kava), fisheries, whale-watching tourism",
    "note_vi": "Tonga là nền kinh tế phụ thuộc vào kiều hối số một trên thế giới (chiếm tới ~40–45% GDP, vượt qua cả Tajikistan và Samoa), được gửi về từ cộng đồng hơn 150.000 người gốc Tonga đang sinh sống và làm việc tại New Zealand, Australia và Hoa Kỳ (đông gấp rưỡi dân số trong nước). Sản xuất trong nước chủ yếu dựa vào nông nghiệp quy mô nhỏ (xuất khẩu bí đỏ kabocha sang Nhật Bản, cây kava, vani, củ sắn), đánh bắt cá ngừ và du lịch sinh thái bơi cùng cá voi lưng gù tại quần đảo Vava'u, trong khi ngân sách nhà nước phụ thuộc lớn vào viện trợ phát triển của Úc, New Zealand và Ngân hàng Thế giới để tái thiết hạ tầng chống chịu thiên tai.",
    "note_en": "Tonga ranks as the world's single most remittance-dependent economy, with cash transfers from its 150,000+ diaspora in New Zealand, Australia, and the United States (outnumbering the domestic population) generating ~40–45% of GDP and sustaining household consumption. Domestic production centers on niche agricultural exports (squash pumpkins to Japan, vanilla, kava, and root crops), artisanal fisheries, and humpback-whale eco-tourism in Vava'u, while public finances rely heavily on Australian, New Zealand, World Bank, and Asian Development Bank grants to rebuild disaster-resilient infrastructure."
  },
  "Togo": {
    "tier": "dev",
    "gdp_vi": "~10,6 tỷ USD (#152 thế giới)",
    "gdp_en": "~$10.6B (#152 globally)",
    "pc_vi": "~1.270 USD (PPP ~3.810 USD)",
    "pc_en": "~$1,270 (PPP ~$3,810)",
    "gr": "+6.5%",
    "sec": [
      54,
      22,
      24
    ],
    "main_vi": "Cảng nước sâu Lomé (trung chuyển container số 1 Tây Phi), khai thác quặng phosphate & đá vôi clinker, bông vải, cà phê, ca cao",
    "main_en": "Port of Lomé deepwater container transshipment (#1 in West Africa), phosphate & clinker mining, cotton, coffee, cocoa",
    "note_vi": "Vượt lên giới hạn của một quốc gia nhỏ bé 9,3 triệu dân, Togo đã định vị thành công thủ đô Lomé làm trung tâm trung chuyển container số 1 Tây Phi (vượt mốc 2 triệu TEU/năm, xếp trong top 100 cảng container thế giới) và trung tâm dịch vụ ngân hàng – hàng không khu vực (trụ sở hãng bay ASKY Airlines và ngân hàng Ecobank). Bên cạnh dịch vụ logistics, nền kinh tế sử dụng đồng Franc CFA này còn sở hữu trữ lượng quặng phosphate và đá vôi sản xuất xi măng (clinker) lớn hàng đầu châu Phi, cùng khu công nghiệp Adétikopé (PIA) chế biến bông vải và đậu tương để duy trì mức tăng trưởng GDP ổn định trên 5%/năm.",
    "note_en": "Defying its small territorial footprint, Togo has established Lomé as West Africa's #1 container transshipment port (handling ~2 million TEUs annually and ranking among the world's top 100 container ports) alongside regional headquarters for Ecobank and ASKY Airlines. Complemented by world-class phosphate and limestone/clinker mining and the new Adétikopé Industrial Platform (PIA) processing local cotton and soybeans, the Euro-pegged CFA franc economy sustains steady ~5.3% annual GDP growth."
  },
  "Timor-Leste": {
    "tier": "dev",
    "gdp_vi": "~1,9 tỷ USD (#182 thế giới, #11 Đông Nam Á)",
    "gdp_en": "~$1.9B (#182 globally, #11 in ASEAN)",
    "pc_vi": "~1.330 USD (PPP ~4.430 USD)",
    "pc_en": "~$1,330 (PPP ~$4,430)",
    "gr": "-9.1%",
    "sec": [
      69,
      11,
      20
    ],
    "main_vi": "Dầu khí biển Timor (Quỹ Dầu mỏ quốc gia), cà phê hữu cơ xuất khẩu, nông nghiệp tự cung tự cấp, xây dựng hạ tầng công",
    "main_en": "Timor Sea oil & gas revenues (Petroleum Fund), organic coffee exports, subsistence agriculture, public infrastructure",
    "note_vi": "Timor-Leste phụ thuộc nặng nề vào dầu khí khi nguồn tiền rút từ Quỹ Dầu mỏ Quốc gia (~16–18 tỷ USD) tài trợ hơn 80% ngân sách nhà nước. Do mỏ Bayu-Undan đã cạn từ năm 2023 và xuất khẩu ngoài dầu mỏ chỉ có cà phê hữu cơ, quỹ này có nguy cơ cạn vào thập niên 2030 nếu siêu mỏ Greater Sunrise chậm triển khai. Việc gia nhập chính thức ASEAN và vận hành cảng nước sâu Tibar Bay là chìa khóa để mở rộng thương mại và du lịch.",
    "note_en": "Timor-Leste relies on withdrawals from its ~$16–18B sovereign Petroleum Fund to finance over 80% of state budget spending. With the Bayu-Undan field depleted in 2023 and organic coffee as its main non-oil export, the fund risks exhaustion in the 2030s unless the Greater Sunrise gas project moves forward. Full ASEAN membership in 2025–2026 and the new Tibar Bay deep-water port are central to attracting non-oil investment."
  },
  "Thailand": {
    "tier": "emg",
    "gdp_vi": "~529 tỷ USD (#30 thế giới, #3 Đông Nam Á)",
    "gdp_en": "~$529B (#30 globally, #3 in ASEAN)",
    "pc_vi": "~7.390 USD (PPP ~24.910 USD)",
    "pc_en": "~$7,390 (PPP ~$24,910)",
    "gr": "+2.9%",
    "sec": [
      59,
      32,
      9
    ],
    "main_vi": "Sản xuất ô tô & linh kiện ('Detroit của Đông Nam Á'), du lịch quốc tế (~35 triệu khách/năm), điện tử & ổ cứng, hóa dầu, xuất khẩu gạo – cao su – sầu riêng",
    "main_en": "Automotive manufacturing ('Detroit of Asia'), international tourism (~35M visitors/yr), electronics & HDDs, petrochemicals, rice, rubber & durian exports",
    "note_vi": "Là nền kinh tế lớn thứ ba ASEAN (~529 tỷ USD), Thái Lan là 'Detroit của châu Á' với cụm công nghiệp ô tô và điện tử dọc Hành lang Kinh tế phía Đông (EEC), thu hút mạnh cả hãng xe Nhật Bản lẫn nhà máy xe điện Trung Quốc (BYD). Du lịch quốc tế (~35–40 triệu khách/năm) và xuất khẩu gạo, sầu riêng, cao su đem lại nguồn ngoại tệ lớn. Tuy nhiên, tăng trưởng bị kìm hãm ở mức ~2,5–3% do nợ hộ gia đình lên tới gần 90% GDP và dân số già hóa nhanh.",
    "note_en": "As ASEAN's third-largest economy (~$529B), Thailand is the 'Detroit of Asia,' anchoring a deep automotive and electronics cluster along its Eastern Economic Corridor (EEC) that now attracts major Chinese EV plants alongside Japanese automakers. Mass international tourism (~35–40M visitors/year) and leading exports of rice, durian, and rubber generate steady foreign-exchange inflows. However, growth lags regional peers (~2.5–3%) due to household debt near 90% of GDP and rapid population aging."
  },
  "Tanzania": {
    "tier": "dev",
    "gdp_vi": "~79,2 tỷ USD (#82 thế giới)",
    "gdp_en": "~$79.2B (#82 globally)",
    "pc_vi": "~1.190 USD (PPP ~4.230 USD)",
    "pc_en": "~$1,190 (PPP ~$4,230)",
    "gr": "+5.5%",
    "sec": [
      36,
      35,
      29
    ],
    "main_vi": "Khai thác vàng (top 4 châu Phi), đá quý Tanzanite độc nhất thế giới, du lịch sinh thái (Serengeti, Kilimanjaro, Zanzibar), cảng trung chuyển Dar es Salaam, nông sản (hạt điều, cà phê, đinh hương)",
    "main_en": "Gold mining (top-4 in Africa), exclusive Tanzanite gemstones, safari & island tourism (Serengeti, Kilimanjaro, Zanzibar), Dar es Salaam port logistics, cashews & coffee",
    "note_vi": "Duy trì tốc độ tăng trưởng GDP ổn định từ 5,5–6,5%/năm với lạm phát thấp nhất Đông Phi (~3–4%), nền kinh tế Tanzania dựa vào ba động lực chính: khai thác khoáng sản (nhà sản xuất vàng lớn thứ 4 châu Phi, mỏ đá quý Tanzanite độc nhất vô nhị dưới chân núi Kilimanjaro cùng trữ lượng niken Kabanga, than chì và đất hiếm lớn), du lịch sinh thái – biển đảo cao cấp (Serengeti, miệng núi lửa Ngorongoro, Kilimanjaro và Zanzibar đón lượng khách kỷ lục >2 triệu lượt) và dịch vụ cảng biển – đường sắt xuyên biên giới. Ngoài ra, vùng thềm lục địa phía nam (Lindi) còn chứa hơn 57 nghìn tỷ bộ khối (tcf) khí đốt tự nhiên đang đàm phán dự án hóa lỏng LNG trị giá 42 tỷ USD với Equinor và Shell.",
    "note_en": "Sustaining steady GDP growth of 5.5–6.5% annually alongside some of the lowest inflation in Africa (~3–4%), Tanzania's economy is driven by gold mining (Africa's #4 producer), exclusive Tanzanite gemstones, and booming safari-and-island tourism across the Serengeti, Ngorongoro Crater, Kilimanjaro, and Zanzibar. Strategic infrastructure upgrades—including the newly electrified Dar es Salaam–Dodoma SGR railway, port concessions with DP World and Adani, and the 2,115-MW Julius Nyerere dam—are transforming the country into a regional logistics and manufacturing hub. Looking ahead, Tanzania is developing world-class nickel (Kabanga), graphite, and rare-earth deposits alongside a planned $42 billion offshore LNG export terminal at Lindi."
  },
  "Tajikistan": {
    "tier": "dev",
    "gdp_vi": "~14,4 tỷ USD (#144 thế giới)",
    "gdp_en": "~$14.4B (#144 globally)",
    "pc_vi": "~1.360 USD (PPP ~5.410 USD)",
    "pc_en": "~$1,360 (PPP ~$5,410)",
    "gr": "+8.4%",
    "sec": [
      40,
      35,
      25
    ],
    "main_vi": "Kiều hối (chiếm tới 35–45% GDP, cao bậc nhất thế giới), thủy điện (đập Nurek, Rogun), luyện nhôm (TALCO), khai thác vàng – antimon, bông",
    "main_en": "Remittances (35–45% of GDP, among highest globally), hydropower (Nurek, Rogun dams), aluminum smelting, gold & antimony mining, cotton",
    "note_vi": "Tajikistan là một trong những nền kinh tế phụ thuộc kiều hối lớn nhất hành tinh, với dòng tiền từ hơn một triệu lao động di cư tại Nga đóng góp tới 35–45% GDP mỗi năm. Do nghèo dầu khí và thiếu đất canh tác bằng phẳng, nhà nước tập trung khai thác vàng, antimon, luyện nhôm (TALCO) và huy động vốn quốc tế để hoàn thành siêu đập thủy điện Rogun nhằm giải quyết tình trạng cắt điện mùa đông và xuất khẩu năng lượng.",
    "note_en": "Tajikistan is among the most remittance-dependent economies on Earth, with money sent home by over one million migrant workers in Russia generating 35–45% of annual GDP. Lacking hydrocarbon wealth and flat arable land, Dushanbe relies on aluminum smelting (TALCO), gold and antimony mining, and international financing to complete the multi-billion-dollar Rogun hydropower dam to end winter blackouts and boost regional electricity exports."
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
    "note_vi": "Đài Loan nắm giữ 'lá chắn silicon' độc tôn khi TSMC và hệ sinh thái nội địa chiếm hơn 60% thị phần đúc chip toàn cầu và trên 90% dòng chip siêu tiên tiến (<5nm) cho AI và điện thoại. Cơn sốt trí tuệ nhân tạo giai đoạn 2024–2026 đã đẩy xuất khẩu máy chủ AI và bán dẫn của hòn đảo đạt mức kỷ lục. Điểm nghẽn lớn nhất là phải nhập khẩu 97% năng lượng qua đường biển, áp lực thiếu điện và rủi ro địa chính trị trên eo biển.",
    "note_en": "Taiwan wields a vital 'Silicon Shield,' with TSMC and its domestic cluster commanding over 60% of global foundry revenue and 90%+ of sub-5nm advanced logic chips. The 2024–2026 global AI boom has sent exports of AI servers and high-performance semiconductors soaring to record trade surpluses. Structural vulnerabilities center on importing ~97% of its energy by sea, tight domestic electricity reserve margins, and cross-strait military tensions."
  },
  "Syria": {
    "tier": "low",
    "gdp_vi": "~15 tỷ USD (ước tính)",
    "gdp_en": "~$15B (est.)",
    "pc_vi": "~650 USD (PPP ~2.800 USD)",
    "pc_en": "~$650 (PPP ~$2,800)",
    "gr": "-1.5%",
    "sec": [
      45,
      12,
      43
    ],
    "main_vi": "Nông nghiệp (lúa mì, bông, ô liu, chăn nuôi cừu), phốt phát, dầu khí quy mô nhỏ (ở vùng đông bắc), kiều hối và viện trợ nhân đạo",
    "main_en": "Agriculture (wheat, cotton, olives, sheep), phosphate mining, small-scale oil & gas (northeast fields), remittances & humanitarian aid",
    "note_vi": "Hơn 13 năm chiến tranh và lệnh trừng phạt quốc tế (như Đạo luật Caesar của Mỹ) đã làm GDP chính thức của Syria bốc hơi hơn 75% (từ 67 tỷ USD năm 2011 xuống chỉ còn ~15 tỷ USD), đồng Bảng Syria mất hơn 99% giá trị và đẩy chế độ Assad trước đây vào nền kinh tế ngầm buôn lậu ma túy tổng hợp Captagon. Bước sang năm 2025–2026, chính phủ mới tại Damascus đang đón nhận việc EU, Anh và Mỹ từng bước nới lỏng các lệnh trừng phạt kinh tế, khôi phục quyền kiểm soát các mỏ dầu khí và vựa lúa mì ở miền đông bắc, đồng thời kêu gọi nguồn vốn hàng trăm tỷ USD từ vùng Vịnh và Thổ Nhĩ Kỳ để tái thiết hạ tầng.",
    "note_en": "Thirteen years of civil war and sweeping sanctions (including the US Caesar Act) shrank Syria's formal GDP by over 75% (from $67B in 2011 to ~$15B), devalued the Syrian pound by >99%, and turned the former Assad regime into a narco-state reliant on illicit Captagon amphetamine exports. In 2025–2026, the post-Assad transitional government is dismantling the Captagon trade, securing phased US and European sanctions waivers, reintegrating northeastern oil and wheat fields, and courting Turkish and Gulf investment for a reconstruction bill estimated at $250–400 billion."
  },
  "Switzerland": {
    "tier": "adv",
    "gdp_vi": "~970 tỷ USD (#20 thế giới)",
    "gdp_en": "~$970B (#20 globally)",
    "pc_vi": "~107.700 USD (PPP ~97.470 USD)",
    "pc_en": "~$107,700 (PPP ~$97,470)",
    "gr": "+1.4%",
    "sec": [
      73,
      26,
      1
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Novartis, Roche), quản lý tài sản toàn cầu & ngân hàng (UBS), giao dịch hàng hóa nguyên liệu (Glencore, Vitol, Trafigura), đồng hồ xa xỉ, cơ khí chính xác, thực phẩm (Nestlé)",
    "main_en": "Pharmaceuticals & biotech (Novartis, Roche), global wealth management (UBS), commodities trading hub (Glencore, Vitol, Trafigura), luxury watchmaking, precision machinery, food (Nestlé)",
    "note_vi": "Đứng số 1 thế giới về Chỉ số Đổi mới Sáng tạo Toàn cầu (GII) suốt hơn một thập kỷ, kinh tế Thụy Sĩ dựa trên các ngành giá trị gia tăng cực cao gồm dược phẩm sinh học (Roche, Novartis), cơ khí chính xác, đồng hồ xa xỉ và quản lý gia sản (UBS). Đồng Franc Thụy Sĩ (CHF) giữ vị thế tài sản trú ẩn an toàn giúp kiểm soát lạm phát quanh mức 1%, trong khi Geneva và Zug là trung tâm giao dịch hàng hóa nguyên liệu lớn nhất hành tinh.",
    "note_en": "Ranked #1 on the Global Innovation Index for over a decade, Switzerland's high-margin economy is propelled by biopharma titans (Roche, Novartis), precision machinery, luxury watchmaking, and global wealth management led by UBS. The safe-haven Swiss Franc (CHF) keeps inflation near 1%, while Geneva and Zug form the world's largest physical trading hub for oil, metals, and agricultural commodities."
  },
  "Sweden": {
    "tier": "adv",
    "gdp_vi": "~605 tỷ USD (#25 thế giới)",
    "gdp_en": "~$605B (#25 globally)",
    "pc_vi": "~57.220 USD (PPP ~71.220 USD)",
    "pc_en": "~$57,220 (PPP ~$71,220)",
    "gr": "+1.0%",
    "sec": [
      74,
      24,
      2
    ],
    "main_vi": "Cơ khí chế tạo & xe tải hạng nặng (Volvo, Scania, Atlas Copco), viễn thông (Ericsson), quốc phòng – hàng không (Saab), quặng sắt (90% sản lượng EU) & thép xanh, công nghệ số (Spotify, Klarna), lâm nghiệp",
    "main_en": "Heavy engineering & commercial vehicles (Volvo, Scania, Atlas Copco), telecoms (Ericsson), defense & aerospace (Saab), iron ore (90% of EU output) & green steel, tech unicorns (Spotify, Klarna), forestry",
    "note_vi": "Là nền kinh tế lớn nhất Bắc Âu, Thụy Điển sở hữu năng lực công nghiệp nặng và quốc phòng tự chủ đáng kinh ngạc đối với một quốc gia 10,6 triệu dân: cung cấp tới ~90% tổng sản lượng quặng sắt của cả EU (mỏ ngầm Kiruna của LKAB, nơi vừa phát hiện mỏ đất hiếm lớn nhất châu Âu Per Geijer) và tự chế tạo máy bay chiến đấu Saab Gripen lẫn tàu ngầm tàng hình. Đồng thời, Stockholm được mệnh danh là 'nhà máy kỳ lân công nghệ' đứng thứ 2 thế giới tính trên đầu người chỉ sau Thung lũng Silicon (với Spotify, Klarna).",
    "note_en": "As the largest Nordic economy, Sweden punches far above its population of 10.6 million in heavy industry, defense, and technology: state miner LKAB supplies ~90% of the EU's iron ore from Kiruna (also site of Europe's largest rare-earth deposit, Per Geijer), while Saab builds advanced Gripen fighter jets and stealth submarines. Simultaneously, Stockholm ranks second only to Silicon Valley in tech unicorns per capita (spawning Spotify and Klarna) and leads globally in fossil-free hydrogen steelmaking."
  },
  "eSwatini": {
    "tier": "dev",
    "gdp_vi": "~4,9 tỷ USD (#163 thế giới)",
    "gdp_en": "~$4.9B (#163 globally)",
    "pc_vi": "~3.910 USD (PPP ~11.820 USD)",
    "pc_en": "~$3,910 (PPP ~$11,820)",
    "gr": "+3.0%",
    "sec": [
      55,
      38,
      7
    ],
    "main_vi": "Sản xuất tinh chất nước giải khát cô đặc (nhà máy Coca-Cola lớn nhất châu Phi), mía đường, bột giấy & lâm nghiệp, dệt may, nguồn thu Liên minh Thuế quan miền Nam châu Phi (SACU)",
    "main_en": "Soft drink concentrate manufacturing (Coca-Cola hub for Africa), sugar refining, wood pulp & forestry, textiles, SACU customs revenue pool",
    "note_vi": "Nền kinh tế Eswatini gắn kết hữu cơ với Nam Phi khi neo tỷ giá đồng Lilangeni 1:1 với đồng Rand và thực hiện tới 70% giao thương qua thị trường láng giềng này. Nhà máy sản xuất tinh chất cô đặc của Coca-Cola tại khu công nghiệp Matsapha (cung ứng cho khắp châu Phi hạ Sahara) cùng ngành đường mía và lâm nghiệp tạo nên trụ cột xuất khẩu chế biến. Tuy nhiên, sự phụ thuộc lớn vào nguồn chia sẻ doanh thu thuế quan từ khối SACU và biến động kinh tế Nam Phi khiến ngân sách nhà nước dễ bị tổn thương.",
    "note_en": "Eswatini's economy is tightly bound to South Africa through a 1:1 currency peg between the lilangeni and the rand, with its giant neighbor accounting for roughly 70% of trade. Coca-Cola's massive concentrate plant in Matsapha—which supplies bottlers across sub-Saharan Africa—combines with sugar refining, forestry, and textiles to anchor manufacturing exports. Nevertheless, heavy fiscal reliance on volatile Southern African Customs Union (SACU) revenue transfers and sluggish rural job creation remain persistent structural bottlenecks."
  },
  "Suriname": {
    "tier": "emg",
    "gdp_vi": "~4,4 tỷ USD (#165 thế giới)",
    "gdp_en": "~$4.4B (#165 globally)",
    "pc_vi": "~6.960 USD (PPP ~21.830 USD)",
    "pc_en": "~$6,960 (PPP ~$21,830)",
    "gr": "+1.7%",
    "sec": [
      55,
      38,
      7
    ],
    "main_vi": "Khai thác vàng (chiếm ~80% kim ngạch xuất khẩu), dầu mỏ (mỏ ngoài khơi Lô 58 sắp khai thác), nông nghiệp (gạo, chuối), gỗ nhiệt đới",
    "main_en": "Gold mining (~80% of export earnings), oil & offshore energy (Block 58 GranMorgu project), agriculture (rice, bananas), tropical timber",
    "note_vi": "Sau khi ngành khai thác quặng bauxite – luyện nhôm truyền thống đóng cửa vào năm 2015, vàng đã vươn lên chiếm tới ~80% kim ngạch xuất khẩu của Suriname (với các mỏ công nghiệp lớn như Rosebel và Meriam) bên cạnh khai thác dầu trên bờ của công ty quốc doanh Staatsolie. Việc hoàn tất tái cơ cấu nợ trái phiếu quốc tế năm 2023–2024 và thông qua siêu dự án dầu khí ngoài khơi Lô 58 trị giá 10,5 tỷ USD dự kiến sẽ nhân đôi hoặc nhân ba quy mô GDP của quốc gia 630.000 dân này vào cuối thập kỷ 2020.",
    "note_en": "Following the 2015 closure of its century-old bauxite-alumina industry, gold mining (anchored by the Rosebel and Merian mines) rose to account for ~80% of Suriname's export earnings alongside onshore oil production by state-owned Staatsolie. Having completed a comprehensive sovereign debt restructuring under an IMF program in 2023–2024, Suriname is poised to double or triple its GDP by the late 2020s as TotalEnergies' $10.5 billion offshore Block 58 development comes online."
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
    "note_vi": "Khi tách khỏi Sudan năm 2011, Nam Sudan thừa hưởng tới 75% trữ lượng dầu mỏ của đất nước cũ, biến nơi đây thành một trong những nền kinh tế phụ thuộc vào dầu thô cực đoan nhất hành tinh (dầu mỏ chiếm hơn 90% thu ngân sách nhà nước và trên 95% kim ngạch xuất khẩu). Tuy nhiên, đầu năm 2024 – 2025, việc đường ống dẫn dầu chính Petrodar đi qua vùng chiến sự ở miền bắc Sudan bị vỡ và đình trệ suốt nhiều tháng đã cắt đứt 2/3 nguồn thu xuất khẩu dầu, khiến đồng Bảng Nam Sudan mất giá lao dốc và công chức bị nợ lương kéo dài. Hơn 80% dân số hiện vẫn sống dựa vào chăn nuôi bò truyền thống (nơi đàn gia súc là thước đo tài sản và địa vị xã hội) và nông nghiệp tự cung tự cấp, trong khi dự án đường ống thay thế chạy qua Kenya (LAPSSET) vẫn chưa thành hiện thực.",
    "note_en": "Upon seceding in 2011, South Sudan inherited three-quarters of unified Sudan's oil fields, leaving it among the most oil-dependent economies on Earth, with crude accounting for over 90% of government revenue and 95% of exports. In 2024–2025, a prolonged rupture and wartime disruptions along the Petrodar pipeline running through Sudan choked off roughly two-thirds of its oil exports, triggering a severe fiscal crisis, currency collapse, and months of unpaid civil-service salaries. Outside the oil sector, over 80% of citizens rely on traditional pastoral cattle herding and subsistence farming, while long-discussed plans for an alternative export pipeline to Kenya's Lamu port (LAPSSET) remain unbuilt."
  },
  "Sudan": {
    "tier": "low",
    "gdp_vi": "~49,7 tỷ USD (#93 thế giới)",
    "gdp_en": "~$49.7B (#93 globally)",
    "pc_vi": "~980 USD (PPP ~2.120 USD)",
    "pc_en": "~$980 (PPP ~$2,120)",
    "gr": "-14.0%",
    "sec": [
      55,
      23,
      22
    ],
    "main_vi": "Khai thác vàng (top 3 châu Phi), nhựa cây keo (Gum Arabic - chiếm ~80% nguồn cung toàn cầu), chăn nuôi gia súc xuất sang vùng Vịnh, vừng (mè), lạc, phí trung chuyển dầu Nam Sudan",
    "main_en": "Gold mining (top-3 in Africa), gum arabic (~80% of global supply), livestock exports to the Gulf, sesame, peanuts, oil pipeline transit fees",
    "note_vi": "Sau khi mất 75% mỏ dầu về tay Nam Sudan năm 2011, vàng đã vươn lên thành nguồn thu ngoại tệ số một của Sudan (sản xuất hơn 80–100 tấn/năm, đứng trong top 3 châu Phi), nhưng phần lớn sản lượng vàng từ Darfur và miền bắc lại bị các bên tham chiến (RSF và SAF) khai thác và buôn lậu để mua vũ khí. Sudan cũng là quê hương cung cấp tới ~80% sản lượng nhựa cây keo (Gum Arabic) của toàn thế giới — chất nhũ hóa tự nhiên không thể thay thế trong công nghiệp sản xuất nước ngọt có ga (Coca-Cola, Pepsi), kẹo và dược phẩm toàn cầu — bên cạnh xuất khẩu vừng, lạc và gia súc sống sang Ả Rập Xê Út. Cuộc nội chiến từ tháng 4/2023 đã phá hủy phần lớn nhà máy công nghiệp, ngân hàng tại Khartoum và làm GDP chính thức sụt giảm hơn 40%.",
    "note_en": "Following the loss of three-quarters of its oil wealth in 2011, gold mining surged to become Sudan's top hard-currency earner (ranking among Africa's top three producers), though artisanal and industrial gold mines in Darfur and the north now serve as the primary war chests financing the RSF and SAF. Sudan also holds a near-monopoly (~80% of global supply) on raw gum arabic—an irreplaceable natural emulsifier for the world's soft drink, confectionery, and pharmaceutical industries—alongside major sesame, peanut, and live livestock exports to the Gulf. However, the civil war since April 2023 has gutted Khartoum's industrial and banking sectors, contracting formal GDP by over 40% and triggering widespread famine conditions."
  },
  "Sri Lanka": {
    "tier": "emg",
    "gdp_vi": "~100 tỷ USD (#72 thế giới)",
    "gdp_en": "~$100B (#72 globally)",
    "pc_vi": "~4.540 USD (PPP ~15.700 USD)",
    "pc_en": "~$4,540 (PPP ~$15,700)",
    "gr": "+5.0%",
    "sec": [
      63,
      28,
      9
    ],
    "main_vi": "Du lịch biển & văn hóa, may mặc cao cấp, trà Ceylon, trung chuyển cảng biển (cảng Colombo), cao su, quế, kiều hối",
    "main_en": "Tourism, apparel manufacturing, Ceylon tea, maritime container transshipment (Colombo Port), rubber, cinnamon, remittances",
    "note_vi": "Kinh tế Sri Lanka (~99 tỷ USD) dựa vào may mặc xuất khẩu, du lịch nghỉ dưỡng biển – văn hóa, trà Ceylon, gia vị, dịch vụ trung chuyển cảng Colombo và kiều hối. Sau vụ vỡ nợ ngoại tệ năm 2022 khiến lạm phát vọt lên 70%, nền kinh tế đã phục hồi tăng trưởng ~4–5% trong giai đoạn 2024–2026 nhờ tái cơ cấu nợ quốc tế, cải cách thuế theo chương trình IMF và khách du lịch quay trở lại. Điểm nghẽn lâu dài là gánh nặng trả nợ công, thu ngân sách còn mỏng và doanh nghiệp nhà nước kém hiệu quả.",
    "note_en": "Sri Lanka's ~$99B economy relies on apparel manufacturing, tourism, Ceylon tea and spices, Colombo Port container transshipment, and overseas worker remittances. Following its 2022 sovereign default and 70% inflation crisis, the economy returned to ~4–5% growth in 2024–2026 thanks to IMF-guided tax reforms, external debt restructuring, and rebounding tourism. Long-term recovery hinges on expanding fiscal revenues, reforming state-owned enterprises, and avoiding future debt traps."
  },
  "Spain": {
    "tier": "adv",
    "gdp_vi": "~1.726 tỷ USD (#15 thế giới, #4 EU)",
    "gdp_en": "~$1.73T (#15 globally, #4 in EU)",
    "pc_vi": "~35.330 USD (PPP ~58.060 USD)",
    "pc_en": "~$35,330 (PPP ~$58,060)",
    "gr": "+3.5%",
    "sec": [
      76,
      21,
      3
    ],
    "main_vi": "Du lịch quốc tế (#2 thế giới với ~94 triệu khách/năm), sản xuất ô tô (#2 châu Âu), thời trang bán lẻ (Inditex/Zara), ngân hàng (Santander, BBVA), năng lượng tái tạo (Iberdrola), nông sản (dầu ô liu số 1 thế giới, rượu vang, thịt heo)",
    "main_en": "International tourism (#2 globally, ~94M visitors/year), automotive manufacturing (#2 in Europe), fast fashion (Inditex/Zara), banking (Santander, BBVA), renewables (Iberdrola), olive oil (#1 globally) & wine",
    "note_vi": "Là nền kinh tế lớn tăng trưởng nhanh nhất Eurozone (~3%/năm), Tây Ban Nha bứt phá nhờ ngành du lịch đứng thứ 2 thế giới (~94 triệu khách), xuất khẩu dịch vụ tư vấn kỹ thuật – CNTT và vị thế nhà sản xuất ô tô lớn thứ 2 châu Âu. Nguồn điện mặt trời và điện gió dồi dào giúp giá điện công nghiệp của nước này rẻ hơn mức trung bình EU, tạo lợi thế thu hút các nhà máy pin xe điện và trung tâm dữ liệu dù nợ công và thất nghiệp thanh niên vẫn cần cải thiện.",
    "note_en": "Currently the fastest-growing major Eurozone economy (~3% annual growth), Spain is propelled by the world's second-largest tourism industry (~94 million visitors), booming IT and engineering service exports, and Europe's #2 auto manufacturing sector. Abundant solar and wind generation keeps industrial power prices well below the EU average, attracting EV battery and data-center investments despite lingering public debt and youth unemployment."
  },
  "South Korea": {
    "tier": "adv",
    "gdp_vi": "~1.875 tỷ USD (#12 thế giới)",
    "gdp_en": "~$1.88T (#12 globally)",
    "pc_vi": "~36.240 USD (PPP ~61.050 USD)",
    "pc_en": "~$36,240 (PPP ~$61,050)",
    "gr": "+2.0%",
    "sec": [
      62,
      37,
      1
    ],
    "main_vi": "Chip nhớ bán dẫn (HBM, DRAM, NAND), ô tô & pin xe điện, đóng tàu LNG, màn hình OLED, hóa dầu, công nghiệp quốc phòng, văn hóa K-Wave",
    "main_en": "Memory semiconductors (HBM, DRAM, NAND), automobiles & EV batteries, LNG shipbuilding, OLED displays, petrochemicals, defense exports",
    "note_vi": "Hàn Quốc vươn lên thành nền kinh tế lớn thứ 12 thế giới nhờ mô hình công nghiệp hướng về xuất khẩu do các đại tập đoàn chaebol (Samsung, SK, Hyundai, LG) dẫn dắt. Đất nước thống trị chuỗi cung ứng chip nhớ băng thông cao (HBM) cho AI, đóng tàu chở khí LNG, pin xe điện và xuất khẩu vũ khí hiện đại (pháo K9, xe tăng K2). Thách thức lớn nhất là sự phụ thuộc vào thương mại Mỹ – Trung và khủng hoảng già hóa, thiếu hụt lao động do tỷ lệ sinh thấp kỷ lục.",
    "note_en": "South Korea built the world's 12th-largest economy through an export-led industrial model spearheaded by giant chaebol conglomerates like Samsung, SK, Hyundai, and LG. It leads globally in AI high-bandwidth memory (HBM) chips, LNG carrier shipbuilding, EV batteries, and has become a top-tier defense exporter. Major structural challenges include heavy exposure to US–China trade friction, chaebol dominance, and severe demographic contraction from the world's lowest birth rate."
  },
  "South Africa": {
    "tier": "emg",
    "gdp_vi": "~401 tỷ USD (#40 thế giới, #1 châu Phi)",
    "gdp_en": "~$401B (#40 globally, #1 in Africa)",
    "pc_vi": "~6.270 USD (PPP ~15.480 USD)",
    "pc_en": "~$6,270 (PPP ~$15,480)",
    "gr": "+0.5%",
    "sec": [
      70,
      27,
      3
    ],
    "main_vi": "Khai khoáng (bạch kim #1 thế giới, mangan #1, crom #1, vàng, than đá), tài chính – ngân hàng (JSE - sàn chứng khoán lớn nhất châu Phi), sản xuất ô tô (BMW, Toyota, Ford, VW), nông sản & rượu vang",
    "main_en": "Mining (world's #1 platinum/PGMs, manganese & chromium producer, gold, coal), finance & banking (JSE - Africa's largest stock exchange), automotive assembly, citrus & wine exports",
    "note_vi": "Sở hữu nền kinh tế lớn nhất và đa dạng nhất châu Phi (~401 tỷ USD), Nam Phi giữ vị trí số 1 tuyệt đối toàn cầu về khai thác bạch kim (chiếm >70% nguồn cung PGMs thế giới), quặng mangan (#1 thế giới) và quặng crôm (#1 thế giới), bên cạnh ngành lắp ráp ô tô xuất khẩu (BMW, Ford, Toyota, Volkswagen), nông sản – rượu vang Cape và Sàn giao dịch chứng khoán Johannesburg (JSE) có vốn hóa lớn nhất lục địa. Sự ra đời của Chính phủ Đoàn kết Dân tộc (GNU) giữa năm 2024 cùng việc chấm dứt khủng hoảng cắt điện Eskom và thu hút tư nhân tham gia vận hành đường sắt – cảng biển Transnet đang khôi phục niềm tin nhà đầu tư và đồng Rand, dù di sản phân hóa không gian thời Apartheid, tội phạm và tỷ lệ thất nghiệp ~32% vẫn là bài toán xã hội nan giải.",
    "note_en": "Africa's largest and most industrialized economy (~$401B nominal GDP) ranks #1 globally in platinum-group metals (>70% of world supply), manganese, and chromium mining, complemented by a major export-oriented automotive manufacturing sector (BMW, Ford, Toyota, VW), Cape wine and citrus exports, and the continent's deepest financial markets anchored by the Johannesburg Stock Exchange (JSE). The formation of the market-friendly Government of National Unity in mid-2024, combined with the dramatic curtailment of Eskom electricity load-shedding and private-sector reforms at freight operator Transnet, has boosted investor confidence, though ~32% structural unemployment and deep income inequality remain daunting hurdles."
  },
  "Somalia": {
    "tier": "low",
    "gdp_vi": "~12,0 tỷ USD (#147 thế giới)",
    "gdp_en": "~$12.0B (#147 globally)",
    "pc_vi": "~630 USD (PPP ~1.600 USD)",
    "pc_en": "~$630 (PPP ~$1,600)",
    "gr": "+4.1%",
    "sec": [
      32,
      8,
      60
    ],
    "main_vi": "Chăn nuôi và xuất khẩu gia súc sống (lạc đà, cừu, dê sang Ả Rập Xê Út mùa lễ Hajj), kiều hối & chuyển tiền Hawala (~2 tỷ USD/năm), thanh toán di động (Hormuud), nhũ hương (frankincense), vừng, thủy sản",
    "main_en": "Live livestock exports (camels, sheep, goats to Saudi Arabia), diaspora remittances & Hawala transfers (~$2B/year), mobile money telecoms, frankincense, sesame, fisheries",
    "note_vi": "Bất chấp ba thập kỷ xung đột và bộ máy nhà nước trung ương yếu ớt, khu vực kinh tế tư nhân phi chính thức của Somalia lại phát triển cực kỳ năng động dựa trên mạng lưới tín nhiệm thị tộc và công nghệ viễn thông: hơn 70–80% giao dịch hàng ngày được thực hiện qua ví tiền di động (mobile money như EVC Plus của Hormuud) tính bằng đồng USD với chi phí dữ liệu di động rẻ bậc nhất châu Phi. Nguồn ngoại tệ sống còn của đất nước đến từ khoảng 2 tỷ USD kiều hối gửi về mỗi năm qua hệ thống chuyển tiền truyền thống Hawala và ngành xuất khẩu hàng triệu con lạc đà, cừu, dê sống sang Ả Rập Xê Út và vùng Vịnh vào mùa hành hương Hajj. Việc được xóa nợ HIPC cuối năm 2023 và gia nhập thị trường chung Đông Phi (EAC) năm 2024 đang mở đường cho Somalia thu hút vốn đầu tư hạ tầng và khai thác tiềm năng thủy sản, dầu khí biển.",
    "note_en": "Despite three decades of state fragility, Somalia's resilient private sector has built one of the world's most cashless mobile-money economies—led by telecom giants like Hormuud's EVC Plus—where over 70% of adults conduct daily transactions in digital US dollars. The economy is sustained by ~$2 billion in annual diaspora remittances channeled through traditional Hawala networks and the export of millions of live camels, sheep, and goats to Saudi Arabia and Gulf markets, especially during the Hajj season. Achieving $4.5 billion in HIPC debt forgiveness in late 2023 and joining the East African Community (EAC) in 2024 have reconnected Mogadishu to international finance as it seeks to develop its rich tuna fisheries and offshore hydrocarbon blocks."
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
    "note_vi": "Dù không được Liên Hợp Quốc công nhận chính thức (khiến chính quyền Hargeisa không thể vay vốn trực tiếp từ IMF hay Ngân hàng Thế giới), Somaliland vẫn duy trì nền kinh tế thị trường ổn định với đồng tiền Somaliland Shilling riêng và tỷ lệ thanh toán không dùng tiền mặt qua ví di động Zaad thuộc nhóm tiên phong thế giới. Ba động lực nuôi sống nền kinh tế là: xuất khẩu hàng triệu con gia súc sống (lạc đà, cừu đầu đen Berbera) qua cảng Berbera sang Ả Rập Xê Út mỗi năm, hơn 1,3 tỷ USD kiều hối từ cộng đồng người Somaliland tại Anh, Bắc Mỹ và vùng Vịnh (qua tập đoàn chuyển tiền Dahabshiil khởi nguồn từ đây), và doanh thu trung chuyển hàng hóa từ tổ hợp cảng – khu thương mại tự do DP World Berbera. Điểm nghẽn lớn nhất là chi phí điện năng đắt đỏ và rào cản bảo hiểm – ngân hàng quốc tế do thiếu quy chế quốc gia được công nhận.",
    "note_en": "Locked out of direct IMF, World Bank, and sovereign bond financing due to its lack of formal UN recognition, Somaliland has nonetheless built a resilient free-market economy with its own central bank, the Somaliland shilling, and one of the world's most advanced mobile-money ecosystems (Zaad). Economic life rests on three pillars: exporting millions of live camels and prized blackhead sheep across the Gulf of Aden to Saudi Arabia, over $1.3 billion in annual diaspora remittances channeled through Hargeisa-born financial giant Dahabshiil, and growing transit revenues from the DP World Port of Berbera and its free-trade zone. High diesel-generated electricity costs and lack of access to international correspondent banking remain its principal structural hurdles."
  },
  "Solomon Is.": {
    "tier": "dev",
    "gdp_vi": "~1,6 tỷ USD (#186 thế giới)",
    "gdp_en": "~$1.6B (#186 globally)",
    "pc_vi": "~1.930 USD (PPP ~2.680 USD)",
    "pc_en": "~$1,930 (PPP ~$2,680)",
    "gr": "+3.0%",
    "sec": [
      47,
      23,
      30
    ],
    "main_vi": "Khai thác gỗ tròn nhiệt đới xuất khẩu (chủ yếu sang Trung Quốc), đánh bắt & đóng hộp cá ngừ (SolTuna), khai thác vàng (mỏ Gold Ridge) & bauxite, dầu cọ, cùi dừa",
    "main_en": "Tropical round log exports (primarily to China), tuna fishing & canning (SolTuna), gold (Gold Ridge) & bauxite mining, palm oil, copra",
    "note_vi": "Suốt ba thập kỷ qua, nền kinh tế và ngân sách của Quần đảo Solomon phụ thuộc tới 50–60% kim ngạch xuất khẩu vào việc khai thác gỗ tròn nhiệt đới tự nhiên bán sang Trung Quốc với tốc độ vượt xa khả năng tái sinh của rừng. Khi trữ lượng gỗ rừng tự nhiên được dự báo sẽ cạn kiệt trong vài năm tới, chính phủ đang nỗ lực chuyển dịch động lực tăng trưởng sang khai thác mỏ vàng Gold Ridge (trên đảo Guadalcanal), bauxite, niken, nhà máy chế biến cá ngừ SolTuna (trên đảo New Georgia) và đưa lao động thời vụ sang làm việc tại Úc.",
    "note_en": "For three decades, the Solomon Islands' economy and fiscal revenues relied heavily on unsustainable round-log timber exports to China (accounting for 50–60% of merchandise exports), depleting accessible natural forests. As logging volumes inevitably decline, Honiara is racing to pivot toward mineral extraction—led by the reopened Gold Ridge gold mine on Guadalcanal alongside bauxite and nickel deposits—as well as domestic tuna processing (SolTuna at Noro) and Australian seasonal worker remittances."
  },
  "Slovakia": {
    "tier": "adv",
    "gdp_vi": "~141 tỷ USD (#61 thế giới)",
    "gdp_en": "~$141B (#61 globally)",
    "pc_vi": "~25.990 USD (PPP ~47.850 USD)",
    "pc_en": "~$25,990 (PPP ~$47,850)",
    "gr": "+1.9%",
    "sec": [
      66,
      32,
      2
    ],
    "main_vi": "Sản xuất ô tô (#1 thế giới tính theo đầu người: VW, Kia, Peugeot, Jaguar Land Rover, Volvo), điện tử (Samsung, Foxconn), cơ khí – thép, công nghiệp quốc phòng",
    "main_en": "Automotive manufacturing (#1 per capita globally: VW, Kia, Stellantis, JLR, Volvo), electronics, steel & engineering, defense artillery production",
    "note_vi": "Được mệnh danh là 'Detroit của châu Âu', Slovakia giữ kỷ lục thế giới về sản xuất ô tô tính trên đầu người với hơn 1,05 triệu xe xuất xưởng mỗi năm từ 4 đại nhà máy đang hoạt động (Volkswagen tại Bratislava, Kia tại Žilina, Stellantis tại Trnava, Jaguar Land Rover tại Nitra) và siêu nhà máy xe điện thứ 5 của Volvo tại Košice cùng nhà máy pin Gotion. Ngoài ra, việc đưa lò phản ứng hạt nhân Mochovce số 3 vào vận hành giúp Slovakia tự chủ hoàn toàn điện năng sạch và xuất khẩu pháo tự hành Zuzana.",
    "note_en": "Nicknamed the 'Detroit of Europe,' Slovakia leads the world in per-capita auto production—building over 1.05 million vehicles a year across four major plants (Volkswagen in Bratislava, Kia in Žilina, Stellantis in Trnava, and Jaguar Land Rover in Nitra), with a fifth EV gigafactory by Volvo rising in Košice alongside a Gotion battery plant. Moreover, with the new Mochovce-3 nuclear reactor online, Slovakia generates over 80% of its power from nuclear and hydro while exporting Zuzana self-propelled howitzers."
  },
  "Slovenia": {
    "tier": "adv",
    "gdp_vi": "~73,0 tỷ USD (#87 thế giới)",
    "gdp_en": "~$73.0B (#87 globally)",
    "pc_vi": "~34.300 USD (PPP ~57.570 USD)",
    "pc_en": "~$34,300 (PPP ~$57,570)",
    "gr": "+1.7%",
    "sec": [
      65,
      33,
      2
    ],
    "main_vi": "Dược phẩm & hóa chất (Krka, Lek/Sandoz), linh kiện & lắp ráp ô tô (Revoz), thiết bị điện gia dụng (Gorenje), cảng biển Koper (cửa ngõ Bắc Adriatic), du lịch núi Alps",
    "main_en": "Pharmaceuticals & chemicals (Krka, Lek/Sandoz), automotive components, home appliances (Gorenje), Port of Koper logistics, Alpine & lake tourism",
    "note_vi": "Là thành viên OECD và nền kinh tế có thu nhập cao nhất khu vực Đông Nam Âu, Slovenia duy trì mô hình công nghiệp xuất khẩu trình độ cao chiếm hơn 80% GDP (dẫn đầu bởi hai gã khổng lồ dược phẩm Krka và Lek/Sandoz—nơi Novartis đang đầu tư hàng tỷ Euro sản xuất thuốc sinh học, cùng ngành linh kiện xe điện và thiết bị gia dụng Gorenje). Đồng thời, quốc gia này đang đầu tư hơn 1 tỷ Euro xây dựng tuyến đường sắt thứ hai nối cảng biển Koper xuyên qua địa hình núi đá vôi vào nội địa Trung Âu.",
    "note_en": "An OECD and Eurozone member with the highest standard of living in Southeastern Europe, Slovenia runs a highly export-driven economy (~85% of GDP) anchored by pharmaceutical titans Krka and Lek/Sandoz (recipient of multi-billion-euro Novartis biologics investments), precision automotive suppliers, and appliance maker Gorenje. To cement its logistics role, the state is completing a €1+ billion second rail track boring through karst mountains to double freight capacity from the Port of Koper into Central Europe."
  },
  "Singapore": {
    "tier": "adv",
    "gdp_vi": "~573 tỷ USD (#26 thế giới, #2 Đông Nam Á)",
    "gdp_en": "~$573B (#26 globally, #2 in ASEAN)",
    "pc_vi": "~94.900 USD (PPP ~153.160 USD)",
    "pc_en": "~$94,900 (PPP ~$153,160)",
    "gr": "+5.3%",
    "sec": [
      77,
      23,
      0
    ],
    "main_vi": "Tài chính – ngân hàng & quản lý gia sản, cảng trung chuyển container (#2 thế giới), lọc hóa dầu, bán dẫn & dược phẩm sinh học, hàng không",
    "main_en": "Global banking & wealth management, container transshipment (#2 globally), oil refining & petrochemicals, wafer fab & biopharma, aviation",
    "note_vi": "Dù không có mỏ dầu nào, vị trí nút cổ chai eo Malacca giúp Singapore trở thành một trong ba trung tâm lọc hóa dầu và giao dịch năng lượng lớn nhất thế giới, với kim ngạch thương mại gấp hơn 3 lần GDP (>300%). Đảo quốc còn là đại bản doanh khu vực của các tập đoàn đa quốc gia, quản lý gia sản toàn cầu, đúc tấm wafer bán dẫn và dược phẩm sinh học. Thách thức chính là thiếu quỹ đất, phải nhập khẩu điện xanh qua cáp ngầm, chi phí đắt đỏ và tỷ lệ sinh thấp (~0,97).",
    "note_en": "Despite zero domestic oil reserves, Singapore leveraged its Malacca chokepoint location to become a top-three global oil refining and trading hub, with total trade exceeding 300% of GDP. Low taxes and legal certainty make it Asia's premier magnet for multinational headquarters, global wealth management, wafer fabrication, and biopharma manufacturing. Core constraints are extreme land and clean-energy scarcity, high living costs, and a sub-1.0 fertility rate."
  },
  "Sierra Leone": {
    "tier": "low",
    "gdp_vi": "~7,0 tỷ USD (#160 thế giới)",
    "gdp_en": "~$7.0B (#160 globally)",
    "pc_vi": "~810 USD (PPP ~3.530 USD)",
    "pc_en": "~$810 (PPP ~$3,530)",
    "gr": "+4.3%",
    "sec": [
      44,
      26,
      30
    ],
    "main_vi": "Khai khoáng (quặng sắt Marampa/Tonkolili, kim cương phù sa, rutile/titan lớn hàng đầu thế giới, bauxite), nông nghiệp (gạo, ca cao, dầu cọ), đánh bắt cá",
    "main_en": "Mining (iron ore, alluvial diamonds, world-class rutile/titanium & bauxite deposits), agriculture (rice, cocoa, palm oil), fisheries",
    "note_vi": "Sở hữu trữ lượng rutile tự nhiên (quặng titan hàm lượng cao dùng cho hàng không và sơn phủ) thuộc nhóm lớn nhất thế giới cùng các mỏ sắt lớn (Tonkolili, Marampa) và kim cương, khoáng sản chiếm hơn 75% kim ngạch xuất khẩu của Sierra Leone. Tuy nhiên, nông nghiệp tự cung tự cấp (trồng lúa gạo, sắn, dầu cọ, ca cao) vẫn chiếm trên một nửa GDP và 60% lao động, khiến nền kinh tế dễ bị tổn thương trước biến động giá quặng sắt toàn cầu và chi phí nhập khẩu nhiên liệu.",
    "note_en": "Endowed with some of the world's richest natural rutile (high-grade titanium ore) deposits alongside major iron-ore mines at Tonkolili and Marampa, bauxite, and diamonds, Sierra Leone derives over 75% of its export earnings from mining. Yet smallholder agriculture—led by rice, cassava, palm oil, and cocoa—still accounts for over half of GDP and 60% of employment, leaving the economy exposed to global commodity price swings and food-import bills."
  },
  "Seychelles": {
    "tier": "adv",
    "gdp_vi": "~2,2 tỷ USD (#179 thế giới)",
    "gdp_en": "~$2.2B (#179 globally)",
    "pc_vi": "~18.360 USD (PPP ~33.340 USD)",
    "pc_en": "~$18,360 (PPP ~$33,340)",
    "gr": "+3.3%",
    "sec": [
      81,
      16,
      3
    ],
    "main_vi": "Du lịch nghỉ dưỡng sinh thái siêu sang, đánh bắt & đóng hộp cá ngừ xuất khẩu (nhà máy Indian Ocean Tuna lớn nhất Ấn Độ Dương), dịch vụ tài chính ngoài khơi & trái phiếu xanh biển",
    "main_en": "Ultra-luxury island eco-tourism, tuna fishing & canning (Indian Ocean Tuna cannery), offshore financial services & sovereign blue bonds",
    "note_vi": "Sở hữu mức thu nhập bình quân đầu người cao nhất lục địa châu Phi, nền kinh tế Seychelles đứng vững trên hai trụ cột chính là du lịch sinh thái siêu sang (thu hút khách châu Âu và Trung Đông chi tiêu cao) và công nghiệp chế biến cá ngừ xuất khẩu chiếm hơn 85% kim ngạch hàng hóa. Sau khi cải cách tài khóa thành công cùng IMF và đi đầu thế giới về phát hành Trái phiếu Xanh đại dương (Blue Bond), thách thức lớn nhất của Seychelles hiện nay là giảm phụ thuộc vào nhập khẩu lương thực – nhiên liệu và bảo vệ các đảo san hô thấp trước nguy cơ nước biển dâng.",
    "note_en": "Boasting Africa's highest GDP per capita, Seychelles rests on two high-value pillars: ultra-luxury eco-tourism catering to affluent European and Gulf travelers, and industrial tuna fishing and canning, which accounts for over 85% of merchandise exports. Having pioneered sovereign Blue Bonds and post-pandemic IMF fiscal reforms, the nation's primary structural challenges are reducing its heavy reliance on imported food and fuel and protecting low-lying coral islands from rising sea levels."
  },
  "Serbia": {
    "tier": "emg",
    "gdp_vi": "~90,1 tỷ USD (#76 thế giới)",
    "gdp_en": "~$90.1B (#76 globally)",
    "pc_vi": "~13.680 USD (PPP ~32.830 USD)",
    "pc_en": "~$13,680 (PPP ~$32,830)",
    "gr": "+3.9%",
    "sec": [
      69,
      27,
      4
    ],
    "main_vi": "Công nghệ thông tin & phần mềm xuất khẩu, sản xuất ô tô điện (Stellantis) & lốp xe, khai thác đồng – vàng (Zijin Bor) & trữ lượng lithium Jadar lớn nhất châu Âu, nông sản (mâm xôi số 1-2 thế giới, ngô)",
    "main_en": "IT & software exports, EV assembly (Stellantis) & tire manufacturing, copper-gold mining (Zijin Bor) & Jadar lithium deposit, agricultural exports (raspberries, corn)",
    "note_vi": "Là nền kinh tế lớn nhất khu vực Tây Balkan (GDP ~91 tỷ USD, tăng trưởng ~3,8–4%/năm), Serbia thu hút hơn 60% tổng vốn đầu tư trực tiếp nước ngoài (FDI) của cả toàn vùng nhờ lực lượng kỹ sư CNTT chất lượng cao (xuất khẩu phần mềm vượt 4 tỷ Euro/năm), các nhà máy sản xuất ô tô điện (Stellantis vừa ra mắt mẫu xe điện Fiat Grande Panda tại Kragujevac), lốp xe và khai khoáng (mỏ đồng – vàng khổng lồ Zijin tại Bor). Đặc biệt, thỏa thuận chiến lược năm 2024 với EU và Đức về khai thác mỏ lithium Jadar của Rio Tinto (đủ cung cấp cho 1 triệu xe điện/năm) cùng đại công trường EXPO 2027 trị giá 18 tỷ Euro đang định hình vị thế địa kinh tế mới cho Belgrade.",
    "note_en": "As the largest economy in the Western Balkans (GDP ~$91 billion, growing ~3.8–4% annually), Serbia captures over 60% of all foreign direct investment flowing into the region. Growth is propelled by booming IT and software exports (>€4 billion/year), Stellantis's new electric vehicle production in Kragujevac, Chinese giant Zijin Mining's massive copper-gold complex at Bor, an €18 billion infrastructure investment wave for Belgrade's Specialized Expo 2027, and the strategic Jadar Valley lithium deposit—Europe's largest, capable of supplying batteries for over 1 million EVs annually."
  },
  "Senegal": {
    "tier": "dev",
    "gdp_vi": "~32,2 tỷ USD (#109 thế giới)",
    "gdp_en": "~$32.2B (#109 globally)",
    "pc_vi": "~1.740 USD (PPP ~5.100 USD)",
    "pc_en": "~$1,740 (PPP ~$5,100)",
    "gr": "+6.5%",
    "sec": [
      55,
      28,
      17
    ],
    "main_vi": "Khai thác dầu khí ngoài khơi mới (mỏ dầu Sangomar & mỏ LNG Greater Tortue Ahmeyim), khai thác vàng & phosphate – axit photphoric, thủy sản, lạc (đậu phộng), trung tâm dịch vụ Dakar",
    "main_en": "Offshore oil & LNG production (Sangomar oilfield & Greater Tortue Ahmeyim LNG), gold & phosphate mining, fisheries, groundnuts, Dakar regional services",
    "note_vi": "Việc đồng loạt đưa vào khai thác mỏ dầu ngoài khơi Sangomar và dự án khí đốt hóa lỏng Greater Tortue Ahmeyim trong giai đoạn 2024–2025 đã đẩy tốc độ tăng trưởng GDP của Senegal vọt lên mức 8–9%/năm, thuộc nhóm dẫn đầu châu Phi. Với đồng Franc CFA neo vào Euro, ngành khai thác vàng – phosphate, xuất khẩu thủy sản và vai trò trung tâm dịch vụ – cảng biển cho cả vùng Tây Phi (đặc biệt là hàng quá cảnh sang Mali), chính quyền mới tại Dakar đang tập trung kiểm toán lại nợ công và đàm phán lại các hợp đồng tài nguyên để gia tăng lợi ích nội địa.",
    "note_en": "The startup of offshore oil production at Sangomar and LNG exports from the Greater Tortue Ahmeyim project in 2024–2025 has propelled Senegal's GDP growth into the 8–9% range, among the fastest in Africa. Backed by a Euro-pegged CFA franc, gold and phosphate mining, fisheries, and Dakar's role as a regional logistics and transit hub for landlocked Mali, the new administration is auditing public debt and channeling hydrocarbon revenues into domestic industrialization and youth employment."
  },
  "Saudi Arabia": {
    "tier": "adv",
    "gdp_vi": "~1.254 tỷ USD (#18 thế giới, thành viên G20)",
    "gdp_en": "~$1.25T (#18 globally, G20 member)",
    "pc_vi": "~35.530 USD (PPP ~71.940 USD)",
    "pc_en": "~$35,530 (PPP ~$71,940)",
    "gr": "+2.6%",
    "sec": [
      50,
      48,
      2
    ],
    "main_vi": "Dầu thô (Saudi Aramco – chi phí khai thác thấp nhất thế giới), hóa dầu (SABIC), du lịch hành hương (Mecca/Medina), đầu tư siêu dự án Vision 2030",
    "main_en": "Crude oil (Saudi Aramco – lowest lifting cost globally), petrochemicals (SABIC), religious pilgrimage (Hajj/Umrah), Vision 2030 giga-projects",
    "note_vi": "Sở hữu tập đoàn dầu khí Saudi Aramco với chi phí khai thác chỉ khoảng 3–4 USD/thùng và công suất dự phòng lớn nhất hành tinh, Ả Rập Xê Út giữ vai trò \"ngân hàng trung ương\" điều tiết thị trường dầu mỏ thế giới. Thông qua Quỹ Đầu tư Công (PIF) quy mô gần 1.000 tỷ USD, chương trình Tầm nhìn 2030 đã nâng tỷ trọng khu vực phi dầu mỏ lên trên 50% GDP thực tế (nhờ du lịch hành hương, xây dựng, khai khoáng, AI), dù giá dầu trung bình dưới mức cân bằng ngân sách (~85–90 USD/thùng) đã buộc Riyadh phải giãn tiến độ một số siêu dự án như NEOM.",
    "note_en": "Anchored by Saudi Aramco—which boasts the world's lowest lifting costs (~$3–4/barrel) and largest spare production capacity—Saudi Arabia acts as the swing central banker of global oil markets. Deploying its nearly $1 trillion Public Investment Fund (PIF) under Vision 2030, the kingdom has pushed non-oil activities past 50% of real GDP via tourism, mining, and AI infrastructure, though oil prices below its ~$85–90 fiscal breakeven have prompted pragmatic recalibration of giga-projects like NEOM."
  },
  "São Tomé and Principe": {
    "tier": "dev",
    "gdp_vi": "~0,80 tỷ USD (~800 triệu USD) (#192 thế giới)",
    "gdp_en": "~$800M (#192 globally)",
    "pc_vi": "~3.500 USD (PPP ~6.270 USD)",
    "pc_en": "~$3,500 (PPP ~$6,270)",
    "gr": "+1.5%",
    "sec": [
      85,
      2,
      13
    ],
    "main_vi": "Sản xuất ca cao hữu cơ chất lượng cao ('Đảo Sô-cô-la'), dầu cọ hữu cơ, du lịch sinh thái rừng mưa & biển, đánh bắt cá, thăm dò dầu khí vịnh Guinea",
    "main_en": "Fine organic cocoa exports ('Chocolate Island'), organic palm oil, rainforest & marine eco-tourism, fisheries, Gulf of Guinea oil exploration",
    "note_vi": "Với quy mô GDP danh nghĩa chưa đầy 1 tỷ USD, nền kinh tế São Tomé và Príncipe phụ thuộc vào nông nghiệp trồng ca cao hữu cơ chất lượng cao (chiếm ~80–90% kim ngạch xuất khẩu hàng hóa nhưng sản lượng nhỏ), dầu cọ hữu cơ và ngành du lịch sinh thái cao cấp trên hai đảo. Dù việc neo đồng tiền Dobra vào đồng Euro từ năm 2010 (nhờ sự bảo lãnh của Bồ Đào Nha) giúp ổn định tỷ giá, việc phải nhập khẩu gần như toàn bộ xăng dầu phát điện, lương thực và hàng tiêu dùng khiến quốc đảo luôn thâm hụt thương mại lớn và cần sự hỗ trợ tài khóa từ IMF cùng Ngân hàng Thế giới.",
    "note_en": "With a nominal GDP under $1 billion, São Tomé and Príncipe's micro-economy relies on boutique organic cocoa beans (~80–90% of goods exports, prized by European artisan chocolatiers), organic palm oil, and high-end rainforest eco-tourism. While pegging the dobra currency to the Euro since 2010 (backed by a credit facility from Portugal) anchors monetary stability, heavy dependence on imported diesel fuel for electricity and imported food keeps the islands reliant on IMF and donor financing pending any future offshore oil windfall."
  },
  "San Marino": {
    "tier": "adv",
    "gdp_vi": "~2,05 tỷ USD (#170 thế giới)",
    "gdp_en": "~$2.05B (#170 globally)",
    "pc_vi": "~59.800 USD (PPP ~84.500 USD)",
    "pc_en": "~$59,800 (PPP ~$84,500)",
    "gr": "+1.3%",
    "sec": [
      61,
      39,
      0
    ],
    "main_vi": "Chế tạo cơ khí chính xác, gốm sứ công nghiệp, bao bì & dược phẩm – mỹ phẩm, du lịch (hơn 2 triệu khách/năm), dịch vụ ngân hàng, phát hành xu Euro & tem sưu tầm",
    "main_en": "Precision mechanical engineering, ceramics, packaging & cosmetics manufacturing, tourism (>2M visitors/year), banking, collector Euro coins & stamps",
    "note_vi": "Trái với hình dung phổ biến rằng các quốc gia siêu nhỏ chỉ sống bằng du lịch hay ngân hàng, động lực số một của kinh tế San Marino lại là khu vực công nghiệp chế tạo thực chất chiếm gần 40% GDP (chuyên về cơ khí tự động hóa, gốm sứ, bao bì, dược phẩm và mỹ phẩm xuất khẩu sang Ý và EU). Kết hợp cùng hơn 2 triệu du khách tham quan di sản UNESCO mỗi năm, nền kinh tế đã phục hồi mạnh mẽ sau cuộc tái cơ cấu ngân hàng thập niên 2010 và hưởng lợi lớn từ Hiệp định Liên kết EU.",
    "note_en": "Contrary to the stereotype of service-only microstates, San Marino's primary economic engine is high-value manufacturing—accounting for nearly 40% of GDP across precision machinery, ceramics, packaging, pharmaceuticals, and cosmetics integrated into northern Italian supply chains. Combined with over 2 million annual visitors to its UNESCO-listed historic center, the economy has rebounded strongly from its 2010s banking overhaul and stands to gain further from its EU Association Agreement."
  },
  "Samoa": {
    "tier": "emg",
    "gdp_vi": "~1,2 tỷ USD (#189 thế giới)",
    "gdp_en": "~$1.2B (#189 globally)",
    "pc_vi": "~5.390 USD (PPP ~8.750 USD)",
    "pc_en": "~$5,390 (PPP ~$8,750)",
    "gr": "+4.7%",
    "sec": [
      77,
      12,
      11
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển Polynesia, kiều hối (chiếm ~28% GDP từ New Zealand, Úc, Mỹ), nông nghiệp (khoai môn, dừa, nước cốt trái nhàu noni), đánh bắt cá ngừ",
    "main_en": "Polynesian resort tourism, diaspora remittances (~28% of GDP from NZ, Australia, US), agriculture (taro, coconut, noni juice), tuna fishing",
    "note_vi": "Nền kinh tế của Samoa gắn kết hữu cơ với New Zealand, Australia và Mỹ thông qua cộng đồng kiều bào người Samoa ở nước ngoài đông gấp đôi dân số sống trên đảo, mang lại dòng kiều hối ổn định chiếm tới ~25–30% GDP mỗi năm bên cạnh ngành du lịch nghỉ dưỡng biển văn hóa Polynesia. Sau khi nhà máy lắp ráp bộ dây điện ô tô của tập đoàn Yazaki (Nhật Bản) — nhà tuyển dụng tư nhân lớn nhất đảo suốt 26 năm — đóng cửa vào năm 2017, kinh tế hàng hóa của đảo dựa vào xuất khẩu khoai môn (taro), dầu dừa, nước cốt trái nhàu (noni) và cá ngừ, trong khi các chương trình đưa lao động thời vụ sang hái trái cây ở Úc/New Zealand vừa mang lại ngoại tệ lớn vừa gây thiếu hụt lao động trẻ trong nước.",
    "note_en": "Samoa's economy is deeply intertwined with New Zealand, Australia, and the United States through a global Samoan diaspora more than double the home-island population, generating steady remittance inflows worth ~25–30% of GDP alongside Polynesian resort tourism. Following the 2017 closure of Japanese auto-wiring manufacturer Yazaki—for 26 years the island's largest private employer—merchandise exports rely on taro, coconut products, noni juice, and fresh tuna, while large seasonal-worker outflows to Australian and New Zealand farms boost household incomes at the cost of domestic labor shortages."
  },
  "St. Vin. and Gren.": {
    "tier": "emg",
    "gdp_vi": "~1,2 tỷ USD (#190 thế giới)",
    "gdp_en": "~$1.2B (#190 globally)",
    "pc_vi": "~11.500 USD (PPP ~21.300 USD)",
    "pc_en": "~$11,500 (PPP ~$21,300)",
    "gr": "+4.1%",
    "sec": [
      78,
      18,
      4
    ],
    "main_vi": "Du lịch du thuyền & nghỉ dưỡng siêu sang (quần đảo Grenadines: Mustique, Canouan, Bequia), nông sản (bột bình tinh arrowroot số 1 thế giới, chuối, củ từ), đăng ký tàu biển",
    "main_en": "Yachting & ultra-luxury island resorts (Mustique, Canouan, Bequia in the Grenadines), agriculture (world's top arrowroot starch producer, root crops), ship registry",
    "note_vi": "Là thành viên của Liên minh Tiền tệ Đông Caribbean (dùng đồng XCD neo giá 2,7:1 vào USD), nền kinh tế Saint Vincent và Grenadines đang trải qua giai đoạn mở rộng hạ tầng và du lịch mạnh mẽ nhất kể từ khi Sân bay Quốc tế Argyle đi vào hoạt động năm 2017, cho phép các chuyến bay thẳng từ Miami, New York, Toronto và London hạ cánh trực tiếp thay vì phải nối chuyến qua Barbados. Việc khai trương các khu nghỉ dưỡng lớn trên đảo chính (như Sandals Beaches năm 2024) kết hợp với phân khúc biệt thự siêu sang dành cho giới hoàng gia và tỷ phú trên đảo tư nhân Mustique và Canouan đã bù đắp cho sự suy giảm của ngành trồng chuối truyền thống. Tuy nhiên, thiệt hại nặng nề từ siêu bão Beryl (tháng 7/2024) trên đảo Union, Mayreau và Canouan cùng chi phí tái thiết cảng Kingstown đang đặt ra áp lực nợ công không nhỏ.",
    "note_en": "As a member of the Eastern Caribbean Currency Union (pegged at 2.70 XCD to 1 USD), Saint Vincent and the Grenadines has unlocked a new era of tourism growth since the 2017 opening of Argyle International Airport enabled direct wide-body flights from New York, Miami, Toronto, and London. New large-scale resorts on the main island (including Sandals Saint Vincent, opened in 2024) complement ultra-exclusive private-island retreats on Mustique and Canouan in the Grenadines, offsetting the historical decline of banana exports alongside specialty arrowroot and root-crop farming. Even so, reconstruction costs from the 2021 La Soufrière eruption and July 2024's Category 4–5 Hurricane Beryl across Union Island and Mayreau continue to test fiscal buffers."
  },
  "Saint Lucia": {
    "tier": "emg",
    "gdp_vi": "~2,6 tỷ USD (#176 thế giới)",
    "gdp_en": "~$2.6B (#176 globally)",
    "pc_vi": "~14.490 USD (PPP ~28.120 USD)",
    "pc_en": "~$14,490 (PPP ~$28,120)",
    "gr": "+4.8%",
    "sec": [
      86,
      12,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng trăng mật & tàu biển (di sản núi đôi Pitons), chương trình Đầu tư lấy Quốc tịch (CBI), sản xuất rượu rum & bia, chế biến thực phẩm, xuất khẩu chuối",
    "main_en": "Honeymoon resort & cruise tourism (the Pitons UNESCO site), Citizenship by Investment (CBI), rum & beverage brewing, banana exports",
    "note_vi": "Với quy mô GDP khoảng 2,55 tỷ USD, Saint Lucia là nền kinh tế lớn nhất trong nhóm 8 quốc gia và vùng lãnh thổ sử dụng chung đồng Đô la Đông Caribbean (XCD, neo tỷ giá cố định 2,7 XCD = 1 USD từ năm 1976). Sau khi chế độ ưu đãi hạn ngạch nhập khẩu chuối của Liên minh châu Âu chấm dứt vào cuối thập niên 1990, hòn đảo đã chuyển mình ngoạn mục sang nền kinh tế dịch vụ: du lịch nghỉ dưỡng cao cấp (liên tục được bình chọn là \"Điểm đến trăng mật hàng đầu thế giới\" quanh danh thắng núi đôi Pitons và vịnh Rodney) cùng cảng tàu du lịch đóng góp khoảng 65% GDP. Bên cạnh đó, Chương trình Đầu tư lấy Quốc tịch (CBI, triển khai từ năm 2016), ngành sản xuất bia – rượu rum (Chairman's Reserve) và dịch vụ trung tâm cuộc gọi (BPO) giúp đa dạng hóa nguồn thu ngân sách.",
    "note_en": "With a nominal GDP of roughly $2.55 billion, Saint Lucia is the largest economy among the eight members of the Eastern Caribbean Currency Union (using the EC dollar, pegged at 2.70 XCD to 1 USD since 1976). After the erosion of preferential European banana trade quotas in the 1990s, the island successfully pivoted toward high-end tourism—repeatedly voted the world's leading honeymoon destination around the UNESCO-listed Pitons and Rodney Bay—which directly and indirectly drives ~65% of GDP. Revenue from its Citizenship by Investment (CBI) program (launched in 2016), rum and beverage manufacturing, and English-speaking BPO call centers further support growth despite high public debt and vulnerability to external fuel shocks."
  },
  "St. Kitts and Nevis": {
    "tier": "adv",
    "gdp_vi": "~1,1 tỷ USD (#191 thế giới)",
    "gdp_en": "~$1.1B (#191 globally)",
    "pc_vi": "~23.960 USD (PPP ~34.900 USD)",
    "pc_en": "~$23,960 (PPP ~$34,900)",
    "gr": "+0.3%",
    "sec": [
      75,
      24,
      1
    ],
    "main_vi": "Chương trình Đầu tư lấy Quốc tịch (CBI lâu đời nhất thế giới từ 1984), du lịch tàu biển (cảng Port Zante) & resort cao cấp, lắp ráp linh kiện điện tử xuất sang Mỹ, tài chính ngoài khơi (Nevis)",
    "main_en": "Citizenship by Investment (world's oldest CBI program since 1984), cruise tourism (Port Zante) & luxury resorts, specialty electronics assembly for US, Nevis offshore trusts",
    "note_vi": "Là nơi đặt trụ sở của Ngân hàng Trung ương Đông Caribbean (ECCB — cơ quan phát hành đồng Đô la Đông Caribbean XCD neo cố định 2,7:1 vào USD cho cả 8 nền kinh tế thành viên), Saint Kitts và Nevis sở hữu vị thế tài chính – tiền tệ trung tâm của tiểu vùng. Sau khi chấm dứt 350 năm độc canh mía đường vào năm 2005 (và biến tuyến đường sắt chở mía cũ thành tàu hỏa ngắm cảnh du lịch duy nhất ở vùng Caribbean), nền kinh tế bứt phá nhờ cảng tàu biển Port Zante, các khu nghỉ dưỡng siêu sang (Four Seasons Nevis, Park Hyatt) và chương trình Đầu tư lấy Quốc tịch (CBI lâu đời nhất thế giới từ năm 1984). Ngoài ra, đảo chính còn có các nhà máy lắp ráp linh kiện điện tử chính xác, cảm biến và thiết bị chuyển mạch xuất khẩu sang thị trường Mỹ, trong khi đảo Nevis là trung tâm đăng ký quỹ tín thác và công ty tài chính quốc tế.",
    "note_en": "Headquarters of the Eastern Caribbean Central Bank (ECCB)—which issues the EC dollar (pegged at 2.70 XCD to 1 USD) for eight island economies—Saint Kitts and Nevis enjoys one of the highest per-capita incomes in the Caribbean. Following the 2005 closure of its 350-year-old sugar industry (whose narrow-gauge cane railway now operates as the Caribbean's only scenic passenger train), the federation thrived on mega-cruise arrivals at Port Zante, luxury resorts such as Four Seasons Nevis and Park Hyatt, and the world's pioneering Citizenship-by-Investment (CBI) program (founded in 1984). Complementing tourism and CBI revenues are specialized US-bound electronics assembly plants on Saint Kitts and offshore trust and corporate registry services on Nevis."
  },
  "Rwanda": {
    "tier": "low",
    "gdp_vi": "~15,1 tỷ USD (#142 thế giới)",
    "gdp_en": "~$15.1B (#142 globally)",
    "pc_vi": "~1.060 USD (PPP ~3.780 USD)",
    "pc_en": "~$1,060 (PPP ~$3,780)",
    "gr": "+7.2%",
    "sec": [
      55,
      23,
      22
    ],
    "main_vi": "Du lịch hội nghị MICE & ngắm khỉ đột núi cao cấp, xuất khẩu cà phê & trà đặc sản, khai thác khoáng sản công nghệ 3T (thiếc, tantali/coltan, vonfram) & tinh luyện vàng, hàng không (RwandAir)",
    "main_en": "MICE conference & luxury mountain gorilla tourism, specialty coffee & tea exports, 3T critical minerals (tin, tantalum, tungsten) & gold refining, aviation (RwandAir)",
    "note_vi": "Thường được ví là \"Singapore của châu Phi\" nhờ bộ máy hành chính minh bạch, thủ đô Kigali an toàn sạch đẹp và truyền thống lao động cộng đồng bắt buộc ngày thứ Bảy cuối tháng (Umuganda), Rwanda duy trì tốc độ tăng trưởng GDP ấn tượng ~7,5–8%/năm. Kinh tế dựa trên du lịch hội nghị quốc tế (MICE) và du lịch sinh thái cao cấp (giấy phép ngắm khỉ đột núi tại Vườn quốc gia Volcanoes có giá 1.500 USD/người), quảng bá thương hiệu toàn cầu \"Visit Rwanda\" qua các câu lạc bộ bóng đá Arsenal, PSG, Bayern Munich, cùng xuất khẩu cà phê – trà đặc sản và tinh luyện vàng, khoáng sản công nghệ 3T (thiếc, tantali/coltan, vonfram). Thách thức lớn là quy mô thu nhập bình quân còn thấp (~1.030 USD) và nguy cơ bị cắt giảm viện trợ phát triển phương Tây do xung đột tại miền đông CHDC Congo.",
    "note_en": "Frequently dubbed the \"Singapore of Africa\" for its clean governance, digital public services, and monthly community clean-up tradition (Umuganda), Rwanda has sustained impressive GDP growth of ~7.5–8% annually. Its service-led model combines international MICE conferences, global \"Visit Rwanda\" sports sponsorships, and high-margin mountain gorilla conservation tourism ($1,500 per trekking permit) with specialty coffee and tea exports, gold refining, and 3T critical minerals (tin, tantalum, tungsten) trade. Key structural challenges include transitioning its largely rural workforce into higher-productivity jobs and managing Western donor aid suspensions triggered by the conflict in eastern DR Congo."
  },
  "Russia": {
    "tier": "adv",
    "gdp_vi": "~2.186 tỷ USD (#10 thế giới, #4 PPP)",
    "gdp_en": "~$2.19T (#10 globally, #4 PPP)",
    "pc_vi": "~14.960 USD (PPP ~47.690 USD)",
    "pc_en": "~$14,960 (PPP ~$47,690)",
    "gr": "+4.9%",
    "sec": [
      63,
      34,
      3
    ],
    "main_vi": "Dầu mỏ & khí đốt tự nhiên (trữ lượng khí số 1 thế giới), công nghiệp quốc phòng & hàng không vũ trụ, năng lượng hạt nhân (Rosatom #1 xuất khẩu lò phản ứng), phân bón & lúa mì xuất khẩu (#1 thế giới), kim loại (vàng, palladium, niken, nhôm, kim cương)",
    "main_en": "Crude oil & natural gas (#1 gas reserves globally), defense industrial complex, nuclear power exports (Rosatom), wheat & fertilizer exports (#1 globally), metals (palladium, nickel, gold, aluminum, diamonds)",
    "note_vi": "Là siêu cường tài nguyên sở hữu trữ lượng khí đốt tự nhiên số 1, xuất khẩu lúa mì và phân bón số 1 thế giới cùng nhà xuất khẩu công nghệ điện hạt nhân hàng đầu (Rosatom), Nga đã vượt qua cú sốc cấm vận phương Tây để vươn lên vị trí nền kinh tế lớn thứ 4 thế giới tính theo sức mua tương đương (PPP) theo xếp hạng của Ngân hàng Thế giới năm 2024. Tuy nhiên, tăng trưởng GDP 3,5–4% trong giai đoạn 2023–2025 chủ yếu được bơm thổi bởi chi tiêu ngân sách quốc phòng chiếm hơn 6–8% GDP (mức cao nhất kể từ thời Liên Xô) cùng việc dùng \"hạm đội bóng tối\" xuất khẩu dầu thô sang Ấn Độ, Trung Quốc; cái giá phải trả là tỷ lệ thất nghiệp xuống mức đáy lịch sử (~2,4%) do thiếu hụt hàng triệu lao động, lạm phát dai dẳng buộc Ngân hàng Trung ương phải nâng lãi suất cơ bản lên mức kỷ lục ~21% và sự tụt hậu công nghệ dân sự.",
    "note_en": "A resource superpower holding the world's largest natural gas reserves and leading global exports of wheat, fertilizers, and nuclear reactors (Rosatom), Russia weathered Western sanctions to rank as the world's 4th-largest economy by Purchasing Power Parity (PPP). However, its 3.5–4% wartime GDP growth in 2023–2025 has been driven by massive fiscal stimulus and defense spending exceeding 6–8% of GDP alongside discounted \"shadow fleet\" crude sales to China and India—creating acute labor shortages (~2.4% unemployment), persistent inflation that forced the Central Bank to hike interest rates to 21%, and long-term civilian technological isolation."
  },
  "Romania": {
    "tier": "adv",
    "gdp_vi": "~383 tỷ USD (#42 thế giới)",
    "gdp_en": "~$383B (#42 globally)",
    "pc_vi": "~20.080 USD (PPP ~49.080 USD)",
    "pc_en": "~$20,080 (PPP ~$49,080)",
    "gr": "+0.9%",
    "sec": [
      69,
      28,
      3
    ],
    "main_vi": "Công nghệ thông tin & phần mềm (Cluj-Napoca, Bucharest; nơi khai sinh UiPath), sản xuất ô tô (Dacia/Renault, Ford Otosan), khai thác khí đốt Biển Đen (dự án Neptun Deep), nông nghiệp ngũ cốc, cảng biển Constanța",
    "main_en": "IT & software development (Bucharest, Cluj-Napoca; birthplace of UiPath), automotive manufacturing (Dacia/Renault, Ford Otosan), Black Sea gas (Neptun Deep), grain agriculture, Port of Constanța",
    "note_vi": "Sau hai thập kỷ gia nhập EU (2007), Romania đã vươn lên thành nền kinh tế lớn nhất Đông Nam Âu, vượt nhiều láng giềng về thu nhập bình quân theo sức mua (PPP ~47.900 USD). Động lực tăng trưởng đến từ ngành CNTT phát triển mạnh tại Bucharest và Cluj-Napoca (quê hương kỳ lân phần mềm UiPath), sản xuất ô tô (Dacia/Renault, Ford Otosan) và xuất khẩu ngũ cốc. Khi siêu mỏ khí đốt Neptun Deep vận hành năm 2027 kết hợp lợi thế Schengen, Romania sẽ tự chủ hoàn toàn năng lượng dù đang phải xử lý thâm hụt ngân sách kép.",
    "note_en": "In the two decades since joining the EU in 2007, Romania has become Southeastern Europe's largest economy, surpassing regional peers in per-capita purchasing power (~$47,900 PPP). Its growth engine combines a thriving IT ecosystem in Bucharest and Cluj-Napoca—birthplace of automation leader UiPath—with major automotive manufacturing by Dacia/Renault and Ford Otosan. With full Schengen land integration in 2025 and the offshore Neptun Deep gas project coming online in 2027, Romania is poised for energy independence despite twin fiscal and current-account deficits."
  },
  "Qatar": {
    "tier": "adv",
    "gdp_vi": "~216 tỷ USD (#56 thế giới)",
    "gdp_en": "~$216B (#56 globally)",
    "pc_vi": "~75.680 USD (PPP ~126.710 USD)",
    "pc_en": "~$75,680 (PPP ~$126,710)",
    "gr": "+3.1%",
    "sec": [
      43,
      56,
      1
    ],
    "main_vi": "Khí đốt tự nhiên hóa lỏng (LNG – một trong 3 nhà xuất khẩu lớn nhất thế giới), hóa dầu, phân bón, hàng không (Qatar Airways), quỹ đầu tư QIA",
    "main_en": "Liquefied Natural Gas (LNG – top-3 global exporter), petrochemicals, fertilizers, global aviation (Qatar Airways), sovereign wealth (QIA)",
    "note_vi": "Nhờ chia sẻ mỏ khí đốt tự nhiên lớn nhất thế giới (North Field) với khoảng 300.000 công dân bản địa trên tổng số 2,9 triệu dân, Qatar đạt thu nhập bình quân đầu người theo sức mua (PPP) trên 115.000 USD, thuộc nhóm cao nhất toàn cầu. Tập đoàn QatarEnergy hiện triển khai siêu dự án mở rộng North Field (giai đoạn 2025–2030) nhằm tăng gần gấp đôi công suất xuất khẩu LNG từ 77 triệu tấn lên 142 triệu tấn/năm, đồng thời dùng Quỹ Đầu tư Qatar (QIA >500 tỷ USD) thâu tóm tài sản khắp châu Âu và Bắc Mỹ.",
    "note_en": "Sharing the world's largest non-associated natural gas field (the North Field) among a citizen population of roughly 300,000 out of 2.9 million residents gives Qatar a PPP per-capita income above $115,000, among the highest on Earth. State giant QatarEnergy is executing a massive multi-phase North Field expansion (2025–2030) to nearly double LNG export capacity from 77 million to 142 million tons per year, fueling the $500B+ Qatar Investment Authority (QIA)."
  },
  "Portugal": {
    "tier": "adv",
    "gdp_vi": "~314 tỷ USD (#46 thế giới)",
    "gdp_en": "~$314B (#46 globally)",
    "pc_vi": "~29.330 USD (PPP ~52.510 USD)",
    "pc_en": "~$29,330 (PPP ~$52,510)",
    "gr": "+2.2%",
    "sec": [
      76,
      21,
      3
    ],
    "main_vi": "Du lịch & lưu trú quốc tế (~30 triệu khách/năm), linh kiện ô tô & khuôn mẫu chính xác, năng lượng tái tạo (~85% điện xanh), trung tâm công nghệ Lisbon (Web Summit), sản xuất nút bần (#1 thế giới), rượu vang & dầu ô liu",
    "main_en": "International tourism (~30M visitors/year), automotive components & precision molds, renewable electricity (~85% green grid), Lisbon tech hub, cork production (#1 globally), wine & olive oil",
    "note_vi": "Sau cuộc khủng hoảng nợ công thập niên 2010, Bồ Đào Nha đã lột xác thành một trong những nền kinh tế có kỷ luật tài khóa tốt nhất Eurozone (đạt thặng dư ngân sách và giảm nhanh nợ công xuống dưới 95% GDP). Động lực tăng trưởng đến từ kỷ lục 30 triệu du khách/năm, làn sóng chuyên gia công nghệ quốc tế đổ về Lisbon/Porto (nơi tổ chức Web Summit), công nghiệp khuôn mẫu chính xác – phụ tùng ô tô và lưới điện sạch đạt ~85% từ thủy điện, điện gió và mặt trời.",
    "note_en": "Having rebounded strongly from its 2010s sovereign debt crisis, Portugal now posts rare Eurozone budget surpluses and has cut public debt below 95% of GDP. Growth is driven by ~30 million annual tourists, a thriving Lisbon and Porto tech ecosystem hosting Web Summit, precision automotive molds, and an ~85% renewable power grid—though low average wages and soaring housing costs remain pressing challenges."
  },
  "Poland": {
    "tier": "adv",
    "gdp_vi": "~918 tỷ USD (#21 thế giới, #6 EU)",
    "gdp_en": "~$918B (#21 globally, #6 in EU)",
    "pc_vi": "~25.100 USD (PPP ~51.260 USD)",
    "pc_en": "~$25,100 (PPP ~$51,260)",
    "gr": "+3.0%",
    "sec": [
      67,
      31,
      2
    ],
    "main_vi": "Sản xuất pin xe điện (#2 thế giới, #1 châu Âu) & linh kiện ô tô, thiết bị gia dụng (#1 châu Âu), trung tâm dịch vụ tài chính – CNTT & phát triển game (CD Projekt), chế biến thực phẩm & gia cầm xuất khẩu, nội thất",
    "main_en": "EV lithium-ion battery manufacturing (#2 globally, #1 in Europe) & auto parts, home appliances, IT/BPO hubs & video games (CD Projekt), agri-food & poultry exports, furniture",
    "note_vi": "Là câu chuyện thành công kinh tế ấn tượng nhất châu Âu kể từ năm 1989 (tăng trưởng GDP bình quân đầu người gấp hơn 3 lần và là nền kinh tế duy nhất ở EU không rơi vào suy thoái trong khủng hoảng 2008–2009), Ba Lan đang tiến sát mốc quy mô GDP 1.000 tỷ USD (lớn thứ 6 trong EU và top 20 thế giới). Đất nước hiện là trung tâm sản xuất pin xe điện lớn nhất châu Âu (#2 thế giới sau Trung Quốc), công xưởng linh kiện ô tô, thiết bị gia dụng, trung tâm dịch vụ CNTT – tài chính và phát triển game toàn cầu, đồng thời tiếp nhận hơn 1 triệu người lao động và tị nạn Ukraine giúp bù đắp thiếu hụt nhân lực trong khi khởi động dự án nhà máy điện hạt nhân đầu tiên cùng tập đoàn Westinghouse (Mỹ).",
    "note_en": "Europe's standout post-1989 growth champion—having more than tripled real GDP per capita and avoided recession even in 2009—Poland is surging toward the $1 trillion GDP threshold as the EU's sixth-largest economy and top growth engine among major European states (~3–3.5% in 2024–2025). Serving as Europe's #1 lithium-ion EV battery manufacturing hub (#2 globally), a powerhouse in auto parts, white goods, IT/BPO services, and video games, Poland has also integrated over one million Ukrainian refugees into its workforce while building its first nuclear power plant with US partner Westinghouse and offshore Baltic wind farms to replace coal."
  },
  "Philippines": {
    "tier": "emg",
    "gdp_vi": "~462 tỷ USD (#34 thế giới, #5 Đông Nam Á)",
    "gdp_en": "~$462B (#34 globally, #5 in ASEAN)",
    "pc_vi": "~3.980 USD (PPP ~11.810 USD)",
    "pc_en": "~$3,980 (PPP ~$11,810)",
    "gr": "+5.7%",
    "sec": [
      63,
      28,
      9
    ],
    "main_vi": "Gia công quy trình kinh doanh (BPO/call center), kiều hối (>37 tỷ USD/năm), lắp ráp bán dẫn – điện tử, khai thác niken, nông sản nhiệt đới",
    "main_en": "Business process outsourcing (BPO), overseas remittances (>$37B/yr), electronics assembly, nickel mining, tropical agriculture",
    "note_vi": "Philippines tăng trưởng nhanh nhờ dân số trẻ (tuổi trung vị ~25), tiêu dùng nội địa mạnh và hơn 37 tỷ USD kiều hối mỗi năm từ lực lượng lao động ở nước ngoài. Lợi thế tiếng Anh giúp Manila trở thành thủ phủ gia công quy trình kinh doanh (BPO/call center) thế giới, bên cạnh lắp ráp điện tử và khai thác niken (#2 toàn cầu). Điểm nghẽn lớn nhất là giá điện và chi phí logistics liên đảo đắt đỏ cùng thiệt hại bão lũ hàng năm.",
    "note_en": "The Philippines is among Southeast Asia's fastest-growing economies, powered by a young workforce (median age ~25), strong domestic consumption, and over $37B in annual overseas remittances. High English proficiency makes Manila a global business process outsourcing (BPO) leader, complemented by electronics assembly and the world's second-largest nickel output. Key bottlenecks include high electricity costs, fragmented inter-island shipping logistics, and recurring typhoon damage."
  },
  "Peru": {
    "tier": "emg",
    "gdp_vi": "~292 tỷ USD (#48 thế giới)",
    "gdp_en": "~$292B (#48 globally)",
    "pc_vi": "~8.530 USD (PPP ~17.880 USD)",
    "pc_en": "~$8,530 (PPP ~$17,880)",
    "gr": "+3.5%",
    "sec": [
      55,
      37,
      8
    ],
    "main_vi": "Khai khoáng (đồng #2-3 thế giới, bạc #2, kẽm #2, vàng, thiếc), nông nghiệp công nghệ cao xuất khẩu (việt quất #1 thế giới, nho, bơ, măng tây, cà phê), bột cá (#1 thế giới), siêu cảng Chancay, du lịch Machu Picchu",
    "main_en": "Mining (world's top-3 copper, #2 silver & zinc, gold, tin), high-value agro-exports (#1 blueberries globally, table grapes, avocados), fishmeal (#1 globally), Chancay megaport, Machu Picchu tourism",
    "note_vi": "Sở hữu nền tảng kinh tế vĩ mô kỷ luật nhất Nam Mỹ với tỷ lệ nợ công thấp (~33% GDP), dự trữ ngoại hối dồi dào và đồng Sol giữ giá ổn định suốt hơn ba thập kỷ bất chấp khủng hoảng chính trị liên miên tại Quốc hội. Kết hợp vị thế cường quốc khai khoáng (đồng, bạc, kẽm, vàng) với kỳ tích biến sa mạc ven biển thành vùng xuất khẩu việt quất, nho, bơ số một thế giới và siêu cảng Chancay mới khánh thành, nhưng khu vực kinh tế phi chính thức chiếm tới ~70% lao động và biểu tình tại các vùng mỏ vẫn là điểm nghẽn lớn.",
    "note_en": "Boasts South America's most orthodox macroeconomic framework—featuring low public debt (~33% of GDP), massive foreign-exchange reserves, and the region's most stable currency (the Sol)—which has insulated business activity from chronic presidential turnover. Combining top-tier copper, silver, and gold mining with desert-irrigated superfood exports (#1 globally in blueberries and table grapes) and the new Chancay megaport, Peru nonetheless faces structural bottlenecks from a ~70% informal labor force and social protests around highland mining corridors."
  },
  "Paraguay": {
    "tier": "emg",
    "gdp_vi": "~44,7 tỷ USD (#98 thế giới)",
    "gdp_en": "~$44.7B (#98 globally)",
    "pc_vi": "~6.460 USD (PPP ~18.630 USD)",
    "pc_en": "~$6,460 (PPP ~$18,630)",
    "gr": "+4.7%",
    "sec": [
      53,
      35,
      12
    ],
    "main_vi": "Xuất khẩu thủy điện sạch (#1 thế giới tính theo đầu người qua hai siêu đập Itaipu & Yacyretá), xuất khẩu đậu tương (#3-4 thế giới) & thịt bò, công nghiệp lắp ráp miễn thuế Maquila (dây cáp ô tô, dệt may)",
    "main_en": "Clean hydropower exports (Itaipu & Yacyretá dams), soybean (#3-4 globally) & beef exports, Maquila export-assembly manufacturing (auto wiring, textiles), river barge logistics",
    "note_vi": "Duy trì tốc độ tăng trưởng trung bình ~3,5–4%/năm và lạm phát thấp suốt hai thập kỷ nhờ mô hình thuế phẳng \"10-10-10\", nguồn thu ngoại tệ ổn định từ xuất khẩu điện thủy điện Itaipu và vị thế nhà xuất khẩu đậu tương (#3–4), thịt bò hàng đầu thế giới, giúp nước này đạt hạng tín nhiệm Đầu tư (Baa3 của Moody's) vào năm 2024. Với giá điện rẻ và sạch bậc nhất hành tinh, Paraguay đang thu hút các siêu dự án đầu tư công nghiệp tiêu thụ nhiều năng lượng như nhà máy bột giấy Paracel (4 tỷ USD), sản xuất phân bón xanh và trung tâm dữ liệu, dù vẫn phải khắc phục tình trạng kinh tế phi chính thức và buôn lậu biên giới.",
    "note_en": "Sustained ~3.5–4% average annual growth and low inflation over two decades thanks to its flat \"10-10-10\" tax regime, debt-free Itaipu hydropower revenues, and top-four global soybean and beef exports—earning Moody's Baa3 Investment Grade rating in 2024. Leveraging abundant, ultra-low-cost 100% renewable hydroelectricity, Paraguay is now attracting energy-intensive industrial investments—including the $4B Paracel pulp mill, green fertilizer plants, and data centers—while working to reduce high labor informality and upgrade road logistics."
  },
  "Papua New Guinea": {
    "tier": "dev",
    "gdp_vi": "~30,8 tỷ USD (#110 thế giới)",
    "gdp_en": "~$30.8B (#110 globally)",
    "pc_vi": "~2.910 USD (PPP ~4.890 USD)",
    "pc_en": "~$2,910 (PPP ~$4,890)",
    "gr": "+3.9%",
    "sec": [
      44,
      38,
      18
    ],
    "main_vi": "Khí thiên nhiên hóa lỏng (dự án PNG LNG của ExxonMobil & Papua LNG của TotalEnergies), khai thác vàng (Porgera, Lihir) & đồng – niken, dầu cọ, cà phê, ca cao, cá ngừ",
    "main_en": "Liquefied natural gas (ExxonMobil PNG LNG & TotalEnergies Papua LNG), gold (Porgera, Lihir) & copper-nickel mining, palm oil, coffee, cocoa, tuna",
    "note_vi": "Sở hữu trữ lượng tài nguyên thiên nhiên khổng lồ với dự án khí đốt hóa lỏng PNG LNG (công suất 8,3 triệu tấn/năm do ExxonMobil vận hành) và dự án mở rộng Papua LNG (do TotalEnergies dẫn đầu), kết hợp với các mỏ vàng và đồng quy mô thế giới như Lihir, Porgera (vừa mở cửa trở lại năm 2024) và Ok Tedi. Tuy nhiên, các siêu dự án khai khoáng dùng ít lao động bản địa và 97% đất đai thuộc sở hữu tập thể bộ tộc khiến việc giải phóng mặt bằng xây dựng hạ tầng rất phức tạp, bên cạnh tình trạng thiếu hụt ngoại tệ USD và mất an ninh trật tự đô thị đang cản trở khu vực kinh tế phi tài nguyên.",
    "note_en": "Endowed with world-scale natural resource enclaves—anchored by ExxonMobil's $19 billion PNG LNG project, TotalEnergies' upcoming Papua LNG development, and tier-one gold and copper mines at Lihir, Porgera (reopened in 2024), and Ok Tedi— alongside palm oil, coffee, and tuna exports. Yet because capital-intensive resource projects employ few locals while 97% of land is held under unalienated customary tribal tenure, broad-based development remains constrained by road isolation, foreign-exchange rationing, and law-and-order challenges."
  },
  "Panama": {
    "tier": "adv",
    "gdp_vi": "~86,5 tỷ USD (#78 thế giới)",
    "gdp_en": "~$86.5B (#78 globally)",
    "pc_vi": "~19.160 USD (PPP ~41.430 USD)",
    "pc_en": "~$19,160 (PPP ~$41,430)",
    "gr": "+2.7%",
    "sec": [
      71,
      26,
      3
    ],
    "main_vi": "Kênh đào Panama (~6% thương mại hàng hải toàn cầu) & cụm cảng trung chuyển Balboa/Colón, Khu thương mại tự do Colón (lớn nhất châu Mỹ), trung tâm ngân hàng quốc tế, đăng ký tàu biển (#1 thế giới), trung tâm hàng không Copa Airlines",
    "main_en": "Panama Canal (~6% of global maritime trade) & container transshipment ports, Colón Free Trade Zone, international banking center, world's #1 ship registry, Copa Airlines hub",
    "note_vi": "Sử dụng đồng Đô la Mỹ (USD, song hành cùng đồng tiền xu Balboa tỷ giá 1:1) làm tiền tệ hợp pháp suốt từ năm 1904, Panama sở hữu nền kinh tế dịch vụ – hàng hải năng động bậc nhất châu Mỹ với hơn 75% GDP đến từ khu vực dịch vụ. Tổ hợp Kênh đào Panama (mang lại doanh thu gần 5 tỷ USD/năm dù giảm lượt tàu trong mùa khô), Khu thương mại tự do Colón (lớn thứ 2 thế giới sau Hồng Kông), đội tàu biển treo cờ Panama số 1 hành tinh (>8.500 tàu) và trung tâm trung chuyển hàng không Copa Airlines tạo nên cỗ máy tạo ngoại tệ khổng lồ. Dù việc Tòa án Tối cao ra phán quyết đóng cửa siêu mỏ đồng Cobre Panamá (từng chiếm ~5% GDP) vào cuối năm 2023 làm tăng trưởng chững lại ngắn hạn và gây áp lực tài khóa, Panama vẫn dẫn đầu Mỹ Latinh về thu nhập bình quân đầu người tính theo sức mua tương đương (~41.200 USD).",
    "note_en": "Fully dollarized since 1904 (with the US dollar circulating as legal tender alongside fractional balboa coins), Panama boasts the most service-driven, globally connected economy in Latin America, generating over 75% of GDP from logistics, finance, and commerce. The Panama Canal (recording nearly $5 billion in annual revenue), the Colón Free Trade Zone (largest in the Americas), the world's #1 merchant ship flag registry (>8,500 vessels), and Copa Airlines' 'Hub of the Americas' form a formidable cluster. Although the Supreme Court-ordered closure of the giant Cobre Panamá copper mine in late 2023 (~5% of GDP) created fiscal headwinds, Panama retains the highest PPP per-capita income in Latin America (~$41,200)."
  },
  "Palau": {
    "tier": "adv",
    "gdp_vi": "~0,30 tỷ USD (~300 triệu USD) (#197 thế giới)",
    "gdp_en": "~$300M (#197 globally)",
    "pc_vi": "~18.170 USD (PPP ~21.060 USD)",
    "pc_en": "~$18,170 (PPP ~$21,060)",
    "gr": "+12.0%",
    "sec": [
      82,
      15,
      3
    ],
    "main_vi": "Du lịch lặn biển & sinh thái cao cấp (quần đảo đá vôi Rock Islands), viện trợ Hiệp ước Liên kết Tự do (COFA) mới gia hạn với Mỹ, đánh bắt cá ngừ",
    "main_en": "High-end marine & scuba eco-tourism (Rock Islands UNESCO site), renewed US Compact of Free Association (COFA) grants, tuna fisheries",
    "note_vi": "Sử dụng đồng Đô la Mỹ (USD) và nằm trong nhóm nền kinh tế có thu nhập bình quân đầu người cao nhất vùng đảo Thái Bình Dương (~17.200 USD), Palau vận hành dựa trên mô hình du lịch lặn biển – sinh thái giá trị cao (đón du khách từ Đài Loan, Nhật Bản, Mỹ, Hàn Quốc tới khám phá rạn san hô Rock Islands) kết hợp với nguồn ngân sách COFA của Hoa Kỳ (889 triệu USD giai đoạn 2024–2043). Dù đạo luật bảo tồn 80% vùng biển năm 2015 giúp nâng cao thương hiệu sinh thái toàn cầu, chính phủ đang cân nhắc mở lại có kiểm soát một phần hạn ngạch đánh bắt cá ngừ xa bờ để tăng nguồn thu nội địa và giảm phụ thuộc vào sự thất thường của lượng khách du lịch Đông Á.",
    "note_en": "Using the US dollar and boasting one of the Pacific Islands' highest per-capita incomes (~$17,200), Palau's economy is driven by high-value scuba diving and marine eco-tourism centered on the UNESCO-listed Rock Islands (drawing visitors from Taiwan, Japan, North America, and South Korea) alongside $889 million in renewed 20-year US COFA grants and trust-fund support. While its landmark 2015 decision to close 80% of its Exclusive Economic Zone to commercial fishing cemented Palau's global conservation brand, policymakers have debated calibrating domestic pelagic tuna zones to diversify fiscal revenues beyond tourism fluctuations."
  },
  "Pakistan": {
    "tier": "dev",
    "gdp_vi": "~372 tỷ USD (#43 thế giới)",
    "gdp_en": "~$372B (#43 globally)",
    "pc_vi": "~1.480 USD (PPP ~6.260 USD)",
    "pc_en": "~$1,480 (PPP ~$6,260)",
    "gr": "+3.1%",
    "sec": [
      54,
      21,
      25
    ],
    "main_vi": "Dệt may & bông sợi (~60% xuất khẩu), nông nghiệp tưới tiêu lưu vực sông Indus (lúa mì, gạo Basmati, mía), kiều hối (~30 tỷ USD), xi măng",
    "main_en": "Textiles & cotton (~60% of exports), Indus Basin irrigated agriculture (wheat, Basmati rice, sugarcane), remittances (~$30B), cement",
    "note_vi": "Kinh tế Pakistan (~372 tỷ USD) phụ thuộc vào nông nghiệp tưới tiêu lưu vực sông Indus (bông, lúa mì, gạo Basmati), ngành dệt may truyền thống (chiếm ~60% xuất khẩu) và ~30 tỷ USD kiều hối mỗi năm. Cơ sở thu thuế quá hẹp (<10% GDP), nợ chồng chéo trong ngành điện và phụ thuộc nhập khẩu xăng dầu khiến đất nước liên tục khủng hoảng ngoại hối và lạm phát cao. Giai đoạn 2024–2026, Islamabad phải dựa vào gói cứu trợ 7 tỷ USD của IMF và gia hạn nợ từ Trung Quốc, Ả Rập Xê Út để tránh vỡ nợ.",
    "note_en": "Pakistan's ~$372B economy relies on Indus Basin irrigated farming (cotton, wheat, Basmati rice), low-margin cotton and textile exports (~60% of total exports), and ~$30B in annual worker remittances. A narrow tax base (<10% of GDP), chronic power-sector circular debt, and heavy fuel imports trigger recurring balance-of-payments and inflation crises. In 2024–2026, Islamabad avoided sovereign default only through a new $7B IMF bailout and debt rollovers from China, Saudi Arabia, and the UAE."
  },
  "Oman": {
    "tier": "adv",
    "gdp_vi": "~107 tỷ USD (#70 thế giới)",
    "gdp_en": "~$107B (#70 globally)",
    "pc_vi": "~20.280 USD (PPP ~41.800 USD)",
    "pc_en": "~$20,280 (PPP ~$41,800)",
    "gr": "+1.6%",
    "sec": [
      45,
      53,
      2
    ],
    "main_vi": "Dầu thô & khí LNG, cảng biển nước sâu ngoài eo Hormuz (Salalah, Duqm, Sohar), hóa dầu, du lịch sinh thái – di sản, dự án hydro xanh",
    "main_en": "Crude oil & LNG, Indian Ocean deepwater ports bypassing Hormuz (Salalah, Duqm, Sohar), petrochemicals, heritage tourism, green hydrogen",
    "note_vi": "Với trữ lượng dầu khí nhỏ hơn và địa chất khai thác phức tạp hơn nhiều so với Ả Rập Xê Út hay UAE, Oman dưới thời Quốc vương Haitham đã thực hiện kỷ luật tài khóa nghiêm ngặt, dùng doanh thu năng lượng trả bớt nợ để đưa nợ công từ hơn 65% GDP (năm 2020) xuống khoảng 35% GDP và lấy lại xếp hạng tín nhiệm đầu tư năm 2024. Chiến lược \"Tầm nhìn Oman 2040\" đang tập trung thu hút vốn FDI vào khu công nghiệp – lọc dầu cảng Duqm, du lịch di sản cao cấp và tham vọng trở thành một trong 10 nhà xuất khẩu hydro xanh lớn nhất thế giới.",
    "note_en": "Holding smaller and geologically more complex oil and gas reserves than its wealthier Gulf neighbors, Oman under Sultan Haitham has enforced strict fiscal discipline, slashing public debt from over 65% of GDP in 2020 to ~35% and regaining an investment-grade credit rating in 2024. Under \"Oman Vision 2040,\" Muscat is channeling investment into the Duqm refinery and industrial port, high-end eco-tourism, mineral mining, and massive solar- and wind-powered green hydrogen export projects."
  },
  "Norway": {
    "tier": "adv",
    "gdp_vi": "~501 tỷ USD (#31 thế giới)",
    "gdp_en": "~$501B (#31 globally)",
    "pc_vi": "~89.890 USD (PPP ~105.660 USD)",
    "pc_en": "~$89,890 (PPP ~$105,660)",
    "gr": "+1.4%",
    "sec": [
      59,
      39,
      2
    ],
    "main_vi": "Dầu mỏ & khí đốt tự nhiên (nhà cung cấp khí đốt qua đường ống số 1 cho châu Âu), Quỹ Đầu tư Quốc gia lớn nhất thế giới (~1.800 tỷ USD), nuôi cá hồi Đại Tây Dương (#1 thế giới), thủy điện (98% điện xanh), vận tải biển & công nghệ hàng hải, nhôm – phân bón (Yara)",
    "main_en": "Offshore oil & natural gas (#1 pipeline gas supplier to Europe), world's largest Sovereign Wealth Fund (~$1.8T), Atlantic salmon farming (#1 globally), hydropower (98% green grid), maritime shipping, aluminum & fertilizers (Yara)",
    "note_vi": "Na Uy được coi là hình mẫu quản trị tài nguyên xuất sắc nhất lịch sử hiện đại (vượt qua 'lời nguyền tài nguyên'): toàn bộ nguồn thu ròng từ dầu khí nhà nước được tích lũy vào Quỹ Hưu trí Chính phủ Toàn cầu trị giá hơn 1.800 tỷ USD (~320.000 USD cho mỗi người dân Na Uy), hiện nắm giữ khoảng 1,5% tổng số cổ phiếu niêm yết trên toàn thế giới. Trong khi xuất khẩu khí đốt kỷ lục cứu nguy cho năng lượng châu Âu sau năm 2022, ở trong nước Na Uy lại sử dụng gần 100% thủy điện sạch và hơn 90% xe hơi bán mới là xe thuần điện (EV).",
    "note_en": "Widely hailed as the global gold standard for defeating the 'resource curse,' Norway channels its state petroleum revenues into a $1.8+ trillion Sovereign Wealth Fund (~$320,000 per citizen) that owns roughly 1.5% of all listed equities worldwide. Paradoxically, while serving as Europe's indispensable #1 pipeline gas supplier since 2022, Norway's domestic economy runs on ~98% renewable hydropower, leads the world with ~90% EV adoption in new car sales, and dominates global Atlantic salmon farming."
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
    "note_vi": "Triều Tiên duy trì nền kinh tế kế hoạch hóa tập trung theo thuyết Tự lực (Juche), dồn nguồn lực cho vũ khí hạt nhân, tên lửa và hơn 1,2 triệu quân thường trực. Dù giàu trữ lượng than antracit, sắt, magie và đất hiếm, lệnh cấm vận quốc tế khiến nước này phụ thuộc ~90% ngoại thương vào Trung Quốc. Từ năm 2023–2026, việc xuất khẩu đạn pháo, tên lửa và cử lực lượng sang Nga đã mang về nguồn dầu mỏ, lương thực và ngoại tệ quan trọng.",
    "note_en": "North Korea runs a tightly controlled command economy under its Juche doctrine, prioritizing nuclear weapons, ballistic missiles, and a 1.2-million-strong military. Despite rich deposits of anthracite coal, iron ore, and rare earths, UN sanctions leave it reliant on China for ~90% of external trade. In 2023–2026, large-scale munitions exports and troop deployments to Russia have provided a vital influx of Russian oil, grain, and technology."
  },
  "Nigeria": {
    "tier": "dev",
    "gdp_vi": "~252 tỷ USD (#54 thế giới, #1 dân số châu Phi)",
    "gdp_en": "~$252B (#54 globally, most populous in Africa)",
    "pc_vi": "~1.080 USD (PPP ~9.100 USD)",
    "pc_en": "~$1,080 (PPP ~$9,100)",
    "gr": "+4.1%",
    "sec": [
      55,
      19,
      26
    ],
    "main_vi": "Dầu mỏ & khí hóa lỏng LNG (#1 sản lượng dầu châu Phi) & siêu nhà máy lọc dầu Dangote (650.000 thùng/ngày), viễn thông & Fintech (Flutterwave, Moniepoint), điện ảnh Nollywood & âm nhạc Afrobeats, xi măng, nông nghiệp (sắn #1 thế giới, khoai mỡ, ca cao)",
    "main_en": "Crude oil & LNG (#1 African oil producer) & Dangote Mega-Refinery (650k bpd), telecoms & Fintech unicorns (Flutterwave, Moniepoint), Nollywood & Afrobeats creative industries, cement, agriculture (cassava, yams, cocoa)",
    "note_vi": "Dù quy mô GDP tính theo USD danh nghĩa sụt giảm mạnh trong giai đoạn 2023–2025 sau khi đồng Naira mất giá hơn 70% theo lộ trình thả nổi tỷ giá, Nigeria vẫn là thị trường tiêu dùng lớn nhất châu Phi (>230 triệu dân) với khu vực dịch vụ, viễn thông, Fintech (Flutterwave, Moniepoint, OPay) và nông nghiệp sôi động. Siêu nhà máy lọc dầu Dangote đi vào hoạt động hết công suất đang giúp đất nước tiết kiệm hàng chục tỷ USD ngoại tệ nhập khẩu xăng dầu mỗi năm, nhưng lạm phát lương thực cao, tình trạng thiếu điện lưới quốc gia và nạn trộm cắp dầu thô ở châu thổ sông Niger vẫn là những điểm nghẽn cấu trúc cần tháo gỡ.",
    "note_en": "Although nominal USD GDP dropped sharply between 2023 and 2025 after the naira was floated and lost over 70% of its dollar value, Nigeria remains Africa's largest consumer market (>230 million people), powered by telecoms, Fintech unicorns (Flutterwave, Moniepoint), agriculture, and creative industries. The commissioning of the 650,000-bpd Dangote Refinery is slashing billions of dollars in annual fuel-import bills, yet high inflation, chronic national grid power shortages, and crude oil theft in the Niger Delta remain major structural headwinds."
  },
  "Niger": {
    "tier": "low",
    "gdp_vi": "~19,7 tỷ USD (#129 thế giới)",
    "gdp_en": "~$19.7B (#129 globally)",
    "pc_vi": "~730 USD (PPP ~2.040 USD)",
    "pc_en": "~$730 (PPP ~$2,040)",
    "gr": "+8.3%",
    "sec": [
      33,
      18,
      49
    ],
    "main_vi": "Khai thác & xuất khẩu dầu thô (mỏ Agadem & đường ống dài 2.000 km qua Benin), khai thác quặng uranium (#7 thế giới, ~5% nguồn cung toàn cầu), vàng, nông nghiệp & chăn nuôi gia súc vùng Sahel (hành tây, đậu đũa)",
    "main_en": "Crude oil production & export (Agadem Rift Basin & 2,000-km Niger-Benin pipeline), uranium mining (~5% of global output), gold, Sahelian livestock & agriculture (onions, cowpeas)",
    "note_vi": "Trong nhiều thập kỷ, Niger được biết đến là nhà sản xuất quặng uranium lớn thứ 7 thế giới (chiếm khoảng 5% sản lượng toàn cầu và từng cung cấp phần lớn nhiên liệu cho các nhà máy điện hạt nhân của Pháp tại vùng Arlit). Từ năm 2024–2025, cơ cấu kinh tế Niger thay đổi mạnh khi mỏ dầu Agadem và đường ống xuất khẩu dài 2.000 km do PetroChina xây dựng nâng công suất khai thác từ 20.000 thùng lên 110.000 thùng/ngày, đẩy tăng trưởng GDP vọt lên trên 8–10%. Song song đó, chính quyền quân sự đã thu hồi giấy phép các mỏ uranium lớn (như Imouraren, Somaïr) từ tập đoàn Orano của Pháp để tìm đối tác mới từ Nga, Trung Quốc và Thổ Nhĩ Kỳ giữa bối cảnh hơn 80% dân số vẫn sống nhờ nông nghiệp tự cấp.",
    "note_en": "For decades, Niger's strategic export was uranium ore from the northern Arlit mines, supplying ~5% of global output and serving as a key fuel source for French nuclear reactors. In 2024–2025, the commissioning of the PetroChina-operated Agadem Rift Basin oil expansion and the 2,000-km export pipeline to Benin quintupled crude production to ~110,000 bpd, propelling GDP growth toward 8–10%. Meanwhile, the ruling junta has revoked operating licenses from France's Orano at major uranium deposits like Somaïr and Imouraren to court Russian, Chinese, and Turkish partners, even as over 80% of the fast-growing population remains reliant on subsistence farming and livestock."
  },
  "Nicaragua": {
    "tier": "dev",
    "gdp_vi": "~19,7 tỷ USD (#130 thế giới)",
    "gdp_en": "~$19.7B (#130 globally)",
    "pc_vi": "~2.850 USD (PPP ~8.720 USD)",
    "pc_en": "~$2,850 (PPP ~$8,720)",
    "gr": "+3.6%",
    "sec": [
      53,
      31,
      16
    ],
    "main_vi": "Kiều hối (chiếm ~27% GDP), khu chế xuất dệt may & dây cáp điện ô tô (Zona Franca), khai thác vàng (mặt hàng xuất khẩu số 1), thịt bò, cà phê, xì gà cao cấp (Estelí), mía đường",
    "main_en": "Remittances (~27% of GDP), free-zone apparel & auto wiring harness assembly, gold mining (#1 merchandise export), beef, coffee, premium cigars (Estelí), sugar",
    "note_vi": "Là quốc gia có thu nhập bình quân đầu người thấp ở Trung Mỹ nhưng có quỹ đất nông nghiệp và khoáng sản dồi dào, nền kinh tế Nicaragua hiện được nâng đỡ bởi dòng kiều hối tăng vọt từ cộng đồng người di cư tại Mỹ và Costa Rica (đạt trên 5 tỷ USD/năm, chiếm khoảng 27% GDP). Về xuất khẩu hàng hóa, vàng thô đã vươn lên trở thành mặt hàng xuất khẩu số 1 của đất nước, tiếp theo là hàng may mặc và dây cáp điện ô tô từ các khu chế xuất (Zona Franca), thịt bò, cà phê, đường mía và xì gà thủ công thượng hạng vùng Estelí (đứng đầu thị trường Mỹ). Mặc dù Managua duy trì kỷ luật tài khóa chặt chẽ và thặng dư tài khoản vãng lai, rủi ro bị hạn chế quyền lợi trong Hiệp định Thương mại Tự do Trung Mỹ – Mỹ (CAFTA-DR) do căng thẳng chính trị với Washington vẫn là đám mây đen lớn nhất.",
    "note_en": "Despite having one of the lowest per-capita incomes in Central America, Nicaragua's resource-rich economy has maintained steady growth and current-account surpluses driven by surging diaspora remittances from the US and Costa Rica, which exceed $5 billion annually (~27% of GDP). Gold mining has risen to become the nation's #1 merchandise export, complemented by free-zone apparel and automotive wiring harnesses, grass-fed beef, specialty coffee, and world-renowned premium hand-rolled cigars from Estelí. While prudent fiscal balances support macro stability, political isolation from Western democracies and potential trade restrictions under the US-led CAFTA-DR agreement pose critical medium-term risks."
  },
  "New Zealand": {
    "tier": "adv",
    "gdp_vi": "~262 tỷ USD (#52 thế giới)",
    "gdp_en": "~$262B (#52 globally)",
    "pc_vi": "~49.430 USD (PPP ~55.790 USD)",
    "pc_en": "~$49,430 (PPP ~$55,790)",
    "gr": "-0.9%",
    "sec": [
      74,
      21,
      5
    ],
    "main_vi": "Chăn nuôi bò sữa & chế biến sữa xuất khẩu (#1 thế giới - tập đoàn Fonterra), thịt cừu – thịt bò, trái kiwi (Zespri) & rượu vang Marlborough, lâm nghiệp, du lịch thiên nhiên & phim trường, hàng không vũ trụ tư nhân (Rocket Lab)",
    "main_en": "Dairy exports (#1 globally - Fonterra), lamb & beef, Zespri kiwifruit & Marlborough wine, forestry, adventure tourism & film production, commercial space launch (Rocket Lab)",
    "note_vi": "Sau cuộc cải cách thị trường triệt để thập niên 1980 xóa bỏ hoàn toàn trợ cấp nông nghiệp và hàng rào thuế quan, nông dân New Zealand đã vươn lên dẫn đầu thế giới về hiệu suất chăn nuôi: một quốc gia chỉ 5,3 triệu dân nhưng nắm giữ tới ~30% thị phần thương mại sữa nguyên liệu toàn cầu (qua tập đoàn hợp tác xã Fonterra), đứng đầu thế giới về xuất khẩu thịt cừu và thương hiệu kiwi Zespri. Nhờ bầu trời và vùng biển phía đông Đảo Bắc hoàn toàn vắng bóng đường bay thương mại, bán đảo Mahia của New Zealand đã trở thành sân phóng tên lửa vũ trụ tư nhân nhộn nhịp thứ hai thế giới (công ty Rocket Lab, chỉ sau SpaceX của Mỹ), dù nền kinh tế vẫn đối mặt với bài toán năng suất lao động tăng chậm và chảy máu chất xám sang Australia nơi có mức lương cao hơn.",
    "note_en": "Following radical 1980s market deregulation that abolished all farm subsidies, New Zealand built the world's most efficient unsubsidized agribusiness sector: a nation of 5.3 million people supplies ~30% of global cross-border dairy trade (via farmer-owned giant Fonterra) alongside world-leading lamb, Zespri kiwifruit, and Marlborough wine exports. Taking advantage of crystal-clear skies and empty ocean launch corridors off the North Island's Mahia Peninsula, New Zealand has also become home to Rocket Lab—recording the highest orbital rocket launch cadence of any private Western company after SpaceX—though sluggish productivity growth and a skilled-worker outflow to higher-paying Australia remain domestic challenges."
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
    "note_vi": "Sử dụng đồng Đô la New Zealand (NZD), nền kinh tế siêu nhỏ của Niue (~20 triệu USD) vận hành chủ yếu dựa vào nguồn viện trợ ngân sách trực tiếp và đầu tư hạ tầng từ Chính phủ New Zealand, kết hợp với du lịch sinh thái cao cấp (bơi cùng cá voi lưng gù sát vách đá và ngắm sao đêm). Đảo quốc này nổi tiếng với các sáng kiến tạo nguồn thu độc đáo cho một nền kinh tế 1.700 dân: từ việc cấp phép tên miền internet quốc gia \".nu\" (rất phổ biến tại Thụy Điển, Hà Lan, Đan Mạch vì chữ \"nu\" trong ngôn ngữ Bắc Âu và tiếng Pháp có nghĩa là \"bây giờ\" hoặc \"khỏa thân\"), xuất khẩu mật ong hữu cơ tinh khiết (từ loài ong Ý duy nhất không bị bệnh ký sinh trùng trên đảo) và vani, cho tới sáng kiến bán \"Cam kết Bảo tồn Đại dương\" (OCC) trị giá hàng chục triệu USD.",
    "note_en": "Operating on the New Zealand dollar (NZD), Niue's micro-economy (~$20 million GDP for 1,700 residents) is underpinned by direct New Zealand budgetary and infrastructure support alongside niche eco-tourism centered on swimming with humpback whales right off the coastal cliffs and Dark Sky stargazing. To supplement state revenues, Niue has pioneered creative sovereign income streams—including licensing its country-code internet domain \".nu\" (widely used in Sweden, the Netherlands, and Belgium where \"nu\" means \"now\"), exporting disease-free organic honey and vanilla, and selling sovereign Ocean Conservation Commitments (OCCs) at NZ$250 per km² to capitalize a permanent conservation trust fund."
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
    "note_vi": "Sử dụng đồng Đô la New Zealand (NZD), nền kinh tế của Quần đảo Cook đạt mức thu nhập cao (~23.500 USD/người) nhờ ngành du lịch nghỉ dưỡng biển cao cấp tại Rarotonga và đầm phá Aitutaki (đón khoảng 160.000–170.000 du khách mỗi năm từ New Zealand và Úc — gấp hơn 10 lần dân số bản địa, đóng góp tới ~70% GDP). Các ngành tạo nguồn thu bổ trợ gồm bán giấy phép đánh bắt cá ngừ đại dương, nuôi cấy ngọc trai đen (trên đầm phá đảo Manihiki), dịch vụ đăng ký quỹ tín thác bảo vệ tài sản ngoài khơi (offshore trusts) và tiềm năng khổng lồ từ thăm dò khoáng sản coban dưới đáy biển sâu, dù việc đã \"tốt nghiệp\" khỏi danh sách nước đang phát triển của OECD khiến đảo không còn được nhận nguồn vốn viện trợ ODA truyền thống.",
    "note_en": "Operating on the New Zealand dollar (NZD), the Cook Islands achieved OECD High-Income status (~$23,500 per capita) on the strength of its vibrant resort tourism industry on Rarotonga and Aitutaki Lagoon, which welcomes 160,000–170,000 visitors annually (over ten times the resident population) and generates ~70% of GDP. Secondary economic pillars include EEZ tuna fishing licenses, black pearl farming in Manihiki Atoll, offshore asset-protection trust services, and licensed deep-sea cobalt nodule exploration—though graduation from OECD developing-country status in 2020 has cut off eligibility for traditional Official Development Assistance (ODA) grants, while out-migration forces hotels to recruit foreign workers from Fiji and the Philippines."
  },
  "Netherlands": {
    "tier": "adv",
    "gdp_vi": "~1.214 tỷ USD (#19 thế giới, #5 EU)",
    "gdp_en": "~$1.21T (#19 globally, #5 in EU)",
    "pc_vi": "~67.460 USD (PPP ~85.220 USD)",
    "pc_en": "~$67,460 (PPP ~$85,220)",
    "gr": "+1.1%",
    "sec": [
      79,
      20,
      1
    ],
    "main_vi": "Thiết bị quang khắc bán dẫn độc quyền toàn cầu (ASML, NXP), cảng biển Rotterdam (#1 châu Âu) & logistics, nông nghiệp nhà kính công nghệ cao (#2 thế giới về giá trị xuất khẩu nông sản), lọc hóa dầu & hóa chất (Shell, AkzoNobel), tài chính – fintech (ING, Adyen)",
    "main_en": "Monopoly EUV semiconductor lithography equipment (ASML, NXP), Port of Rotterdam (#1 in Europe) & logistics, high-tech greenhouse agriculture (#2 agricultural exporter globally by value), refining & chemicals, finance & fintech (ING, Adyen)",
    "note_vi": "Là nền kinh tế lớn thứ 5 EU, Hà Lan nắm giữ 'nút cổ chai' công nghệ quan trọng bậc nhất thế kỷ 21 thông qua tập đoàn ASML tại Veldhoven, đơn vị độc quyền 100% máy quang khắc cực tím EUV sản xuất chip AI tiên tiến. Kết hợp cùng cảng Rotterdam, xuất khẩu nông sản hơn 120 tỷ Euro/năm và ngành fintech năng động, đất nước duy trì thặng dư thương mại lớn dù đối mặt với thiếu hụt lao động và giới hạn môi trường.",
    "note_en": "As the EU's fifth-largest economy, the Netherlands controls the 21st century's single most critical tech chokepoint via Veldhoven-based ASML, the sole global producer of EUV lithography machines for advanced AI semiconductors. Paired with the Port of Rotterdam, over €120 billion in annual agri-food exports, and leading fintech firms, the Dutch economy runs hefty trade surpluses despite tight labor markets and environmental nitrogen caps."
  },
  "Aruba": {
    "tier": "adv",
    "gdp_vi": "~4,2 tỷ USD (#166 thế giới)",
    "gdp_en": "~$4.2B (#166 globally)",
    "pc_vi": "~38.590 USD (PPP ~51.710 USD)",
    "pc_en": "~$38,590 (PPP ~$51,710)",
    "gr": "+6.8%",
    "sec": [
      88,
      12,
      0
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển & tàu biển (chiếm >75% tổng hoạt động kinh tế, chủ yếu khách Mỹ), dịch vụ thương mại – bán lẻ miễn thuế, chế biến lô hội (Aloe Vera), trung chuyển hàng hóa",
    "main_en": "Beach resort & cruise tourism (>75% of total economic activity, primarily US visitors), duty-free retail & hospitality, aloe vera processing, logistics",
    "note_vi": "Theo thống kê của Hội đồng Du lịch và Lữ hành Thế giới (WTTC), Aruba là một trong những nền kinh tế phụ thuộc vào du lịch cao nhất hành tinh khi ngành du lịch nghỉ dưỡng và tàu biển đóng góp trực tiếp và gián tiếp hơn 75–80% GDP cũng như việc làm. Hòn đảo đón hơn 2 triệu lượt khách lưu trú và tàu biển mỗi năm (hơn 75% là du khách từ Hoa Kỳ) nhờ lợi thế an toàn tuyệt đối, không có bão, đồng Florin Aruba (AWG) neo tỷ giá cố định 1,79 AWG = 1 USD suốt từ năm 1986 và dịch vụ làm thủ tục nhập cảnh hải quan Mỹ ngay tại sân bay Aruba. Để giảm rủi ro phụ thuộc đơn ngành sau khi đóng cửa hẳn nhà máy lọc dầu San Nicolas, chính quyền Oranjestad đang thúc đẩy du lịch y tế, trung tâm hậu cần thương mại tự do và chuyển đổi lưới điện sang năng lượng gió – mặt trời.",
    "note_en": "Aruba ranks among the most tourism-intensive economies on Earth, with beachfront resorts, casinos, and cruise arrivals generating roughly 75–80% of total GDP and employment. Welcoming over two million stay-over and cruise visitors annually—more than three-quarters from the United States—the island leverages its hurricane-free climate, low crime, a rock-solid currency peg of 1.79 Aruban florins to 1 USD since 1986, and convenient US customs pre-clearance at Queen Beatrix Airport. Having permanently moved past the era of the idled San Nicolas oil refinery, Oranjestad is pursuing clean-energy transition projects, free-zone logistics, and boutique high-spend tourism to sustain fiscal surpluses."
  },
  "Curaçao": {
    "tier": "adv",
    "gdp_vi": "~3,6 tỷ USD (#170 thế giới)",
    "gdp_en": "~$3.6B (#170 globally)",
    "pc_vi": "~22.830 USD (PPP ~32.740 USD)",
    "pc_en": "~$22,830 (PPP ~$32,740)",
    "gr": "+5.0%",
    "sec": [
      85,
      14,
      1
    ],
    "main_vi": "Du lịch di sản UNESCO Willemstad & lặn biển, dịch vụ tài chính quốc tế & cấp phép e-Gaming, cảng biển nước sâu tự nhiên & sửa chữa tàu biển (Damen), kho vận – trung chuyển năng lượng",
    "main_en": "Heritage & dive tourism (Willemstad UNESCO site), international financial services & e-Gaming licensing, natural deepwater port & ship repair, energy transshipment",
    "note_vi": "Trong gần một thế kỷ (từ năm 1918 đến 2019), nhà máy lọc dầu Isla bên bờ vịnh Schottegat từng là trái tim công nghiệp của Curaçao trước khi ngừng hoạt động do khủng hoảng của đối tác thuê PDVSA (Venezuela). Từ năm 2022 đến 2026, Curaçao đã tái cấu trúc nền kinh tế thành công vang dội nhờ sự bùng nổ của ngành du lịch nghỉ dưỡng và lặn biển (đón kỷ lục hơn 1,5 triệu lượt khách lưu trú và tàu biển năm 2024 từ Hà Lan, Mỹ, Colombia và Brazil), đi kèm làn sóng đầu tư khách sạn quốc tế. Song hành với du lịch là trung tâm dịch vụ tài chính – quỹ tín thác quốc tế, sửa chữa tàu biển, việc đưa vào lưu hành đồng Guilder Caribbean (XCG, neo 1,79:1 với USD từ tháng 3/2025) và đạo luật cấp phép trò chơi trực tuyến mới (LOK) giúp nâng tầm uy tín của một trong những trung tâm cấp phép e-Gaming lớn nhất thế giới.",
    "note_en": "For a century (1918–2019), the giant Isla oil refinery on the Schottegat anchored Curaçao's economy before falling idle when Venezuelan state oil lessee PDVSA collapsed. Between 2022 and 2026, Curaçao has staged a remarkable economic turnaround driven by surging stay-over and cruise tourism (>1.5 million visitors annually from the Netherlands, the US, Colombia, and Brazil) and a wave of international resort investments around historic Willemstad. Complementing tourism are Damen's ship-repair drydocks, international corporate and trust services, the smooth March 2025 rollout of the new Caribbean Guilder (XCG, pegged 1.79:1 to the USD), and the landmark National Ordinance on Games of Chance (LOK) modernizing Curaçao's position as one of the world's largest online gaming (iGaming) licensing jurisdictions."
  },
  "Nepal": {
    "tier": "dev",
    "gdp_vi": "~43 tỷ USD (#101 thế giới)",
    "gdp_en": "~$43B (#101 globally)",
    "pc_vi": "~1.460 USD (PPP ~5.750 USD)",
    "pc_en": "~$1,460 (PPP ~$5,750)",
    "gr": "+3.7%",
    "sec": [
      62,
      14,
      24
    ],
    "main_vi": "Kiều hối (~25% GDP), du lịch leo núi Himalaya (Everest), thủy điện xuất khẩu sang Ấn Độ, nông nghiệp, thảm & hàng thủ công",
    "main_en": "Remittances (~25% of GDP), Himalayan trekking & mountaineering tourism, hydropower exports to India, agriculture, carpets & handicrafts",
    "note_vi": "Kinh tế Nepal (~45 tỷ USD) sống dựa vào dòng kiều hối chiếm tới ~25–27% GDP từ hàng triệu lao động tại vùng Vịnh, Malaysia và Ấn Độ, cùng du lịch leo núi Himalaya và nông nghiệp tự cung tự cấp. Đồng Rupee Nepal neo cố định vào Rupee Ấn Độ (tỷ lệ 1,6:1) và Ấn Độ chiếm ~65% tổng ngoại thương của nước này. Cơ hội tăng trưởng mới trong giai đoạn 2024–2026 là thỏa thuận xuất khẩu 10.000 MW thủy điện sang Ấn Độ trong 10 năm tới và bắt đầu bán điện sang Bangladesh, dù trong nước vẫn thiếu việc làm trầm trọng.",
    "note_en": "Nepal's ~$45B economy relies heavily on overseas worker remittances (~25–27% of GDP from the Gulf, Malaysia, and India), Himalayan trekking tourism, and subsistence farming. Its currency is pegged to the Indian Rupee (1.6 to 1), and India accounts for ~65% of Nepal's total external trade. While domestic industrial jobs remain scarce, Nepal is unlocking a major new revenue stream in 2024–2026 by exporting Himalayan hydropower to India (targeting 10,000 MW) and Bangladesh."
  },
  "Nauru": {
    "tier": "adv",
    "gdp_vi": "~0,20 tỷ USD (~200 triệu USD) (#199 thế giới)",
    "gdp_en": "~$200M (#199 globally)",
    "pc_vi": "~14.050 USD (PPP ~13.610 USD)",
    "pc_en": "~$14,050 (PPP ~$13,610)",
    "gr": "+1.4%",
    "sec": [
      68,
      28,
      4
    ],
    "main_vi": "Dịch vụ Trung tâm Xử lý Người tị nạn Khu vực của Úc (RPC), phí cấp phép đánh bắt cá ngừ vùng biển PNA, khai thác lớp quặng phosphate thứ cấp còn sót lại, bảo trợ công ty khai khoáng đáy biển sâu (The Metals Company)",
    "main_en": "Australian-funded Regional Processing Centre (RPC) services, EEZ tuna fishing licenses, residual secondary phosphate mining, sponsorship of deep-sea mining (NORI/The Metals Company)",
    "note_vi": "Sử dụng đồng Đô la Úc (AUD) và phải nhập khẩu hơn 90% lương thực – thực phẩm đóng hộp từ nước ngoài (khiến Nauru có tỷ lệ béo phì và tiểu đường cao nhất thế giới), ngân sách của quốc đảo hiện dựa vào hai trụ cột chính: khoản phí hàng trăm triệu AUD mỗi năm từ Chính phủ Australia để duy trì Trung tâm Xử lý Khu vực (RPC) và nguồn thu bán giấy phép ngày tàu đánh bắt cá ngừ (~40–50 triệu USD/năm). Nhằm tránh lặp lại thảm kịch tiêu sạch tiền photphat như thập niên 1990, năm 2015 Nauru cùng với Úc, Đài Loan và ADB đã thành lập Quỹ Tín thác Liên thế hệ (Intergenerational Trust Fund) được quản lý chặt chẽ để tích lũy tài sản dài hạn, đồng thời triển khai dự án \"Higher Ground Initiative\" san phẳng một phần các trụ đá vôi vùng Topside để di dời nhà dân và công trình công cộng từ bờ biển thấp lên vùng cao nguyên an toàn trước nước biển dâng.",
    "note_en": "Using the Australian dollar (AUD) and importing over 90% of its food and consumer goods (a shift from traditional fishing diets that left Nauru with the world's highest rates of obesity and type-2 diabetes), the economy relies heavily on Australian government payments to operate and maintain the offshore Regional Processing Centre (RPC) alongside ~US$40–50 million annually in tuna fishing license fees and residual secondary phosphate mining. To prevent a repeat of its 1990s financial collapse, Nauru established a tightly governed Intergenerational Trust Fund in 2015 (backed by Australia and the ADB) while launching the \"Higher Ground Initiative\" to crush and rehabilitate mined-out Topside limestone pinnacles into safe, elevated land for relocating coastal homes and schools away from rising seas."
  },
  "Namibia": {
    "tier": "dev",
    "gdp_vi": "~13,6 tỷ USD (#145 thế giới)",
    "gdp_en": "~$13.6B (#145 globally)",
    "pc_vi": "~4.500 USD (PPP ~11.700 USD)",
    "pc_en": "~$4,500 (PPP ~$11,700)",
    "gr": "+3.8%",
    "sec": [
      60,
      33,
      7
    ],
    "main_vi": "Khai thác uranium (#3 thế giới - mỏ Rössing, Husab) & kim cương ngoài khơi đáy biển (Debmarine), phát hiện siêu mỏ dầu ngoài khơi bồn trũng Orange (TotalEnergies Venus, Galp Mopane), hydro xanh (Hyphen), du lịch sa mạc Namib, cảng Walvis Bay",
    "main_en": "Uranium mining (#3 globally - Rössing, Husab) & marine seabed diamond mining (Debmarine), giant Orange Basin offshore oil discoveries (Venus, Mopane), green hydrogen (Hyphen), desert safari tourism, Walvis Bay port",
    "note_vi": "Nền kinh tế Namibia có thu nhập bình quân đầu người cao (~4.750 USD danh nghĩa; >12.400 USD PPP) nhờ khai thác quặng uranium tại hai siêu mỏ Rössing và Husab (đứng thứ 3 thế giới), khai thác kim cương dưới đáy biển bằng đội tàu công nghệ cao Debmarine (hợp tác 50/50 với De Beers), xuất khẩu vàng, đồng và du lịch safari bảo tồn thiên nhiên cao cấp. Với việc đồng Đô la Namibia neo tỷ giá 1:1 vào đồng Rand Nam Phi, quyết định đầu tư cuối cùng (FID) cho các mỏ dầu nước sâu bồn trũng Orange (dự kiến khai thác thương mại vào cuối thập kỷ 2020) và dự án hydro xanh tại Lüderitz đang hứa hẹn tăng gấp đôi quy mô GDP quốc gia, dù tỷ lệ thất nghiệp cao và bất bình đẳng đất đai vẫn là thách thức lớn.",
    "note_en": "Namibia sustains an upper-middle-income economy (~$4,750 nominal per capita; >$12,400 PPP) powered by the world's #3 uranium sector (Rössing and Husab mines), high-tech offshore seabed diamond recovery via Debmarine (a 50/50 joint venture with De Beers), gold mining, commercial fishing, and world-renowned conservation safari tourism. With its currency pegged 1:1 to the South African rand inside the Common Monetary Area, Namibia is poised for a historic investment boom from the 11+ billion-barrel Orange Basin offshore oil discoveries (Venus and Mopane) and the $10 billion Hyphen green hydrogen project at Lüderitz, which must be harnessed to tackle high structural unemployment."
  },
  "Mozambique": {
    "tier": "low",
    "gdp_vi": "~22,8 tỷ USD (#124 thế giới)",
    "gdp_en": "~$22.8B (#124 globally)",
    "pc_vi": "~660 USD (PPP ~1.710 USD)",
    "pc_en": "~$660 (PPP ~$1,710)",
    "gr": "+2.1%",
    "sec": [
      47,
      25,
      28
    ],
    "main_vi": "Siêu dự án khí thiên nhiên hóa lỏng (LNG bồn trũng Rovuma: Coral Sul FLNG của Eni, TotalEnergies, ExxonMobil), luyện nhôm (Mozal), than luyện cốc, xuất khẩu thủy điện Cahora Bassa, than chì (graphite cho pin EV), hành lang cảng Maputo/Beira/Nacala",
    "main_en": "Rovuma Basin LNG megaprojects (Eni Coral Sul FLNG, TotalEnergies, ExxonMobil), aluminum smelting (Mozal), metallurgical coal, Cahora Bassa hydropower exports, battery-grade graphite, port corridors",
    "note_vi": "Nền kinh tế Mozambique vận hành theo mô hình 'các siêu dự án vốn ngoại' (megaprojects): xuất khẩu nhôm thỏi từ nhà máy luyện nhôm Mozal (lớn thứ 2 châu Phi tại Maputo), điện năng từ đập Cahora Bassa, than luyện cốc tại tỉnh Tete, khí thiên nhiên hóa lỏng (LNG) và quặng than chì (graphite tại Balama — nguồn cung nguyên liệu cực âm pin xe điện lớn nhất ngoài Trung Quốc). Mặc dù các siêu dự án LNG và dịch vụ cảng biển mang lại tiềm năng tăng trưởng lớn sau bê bối 'khoản nợ ngầm tàu cá ngừ 2 tỷ USD' thập niên trước, hơn 2/3 dân số vẫn sống bằng nông nghiệp tự cung tự cấp và làn sóng biểu tình hậu bầu cử cuối năm 2024 – đầu 2025 đã gây gián đoạn thương mại biên giới với Nam Phi.",
    "note_en": "Mozambique's formal economy is dominated by capital-intensive foreign megaprojects: the Mozal aluminum smelter near Maputo, Cahora Bassa hydropower exports, Tete metallurgical coal, Rovuma Basin offshore LNG, and Syrah Resources' Balama graphite mine (one of the world's largest natural battery-anode graphite producers outside China). While offshore LNG exports and record transit cargo at the Port of Maputo bolster foreign exchange, over two-thirds of Mozambicans remain in low-productivity farming, and violent post-election protests in late 2024 and early 2025 underscored deep youth frustration over inequality."
  },
  "Morocco": {
    "tier": "dev",
    "gdp_vi": "~161 tỷ USD (#59 thế giới)",
    "gdp_en": "~$161B (#59 globally)",
    "pc_vi": "~4.150 USD (PPP ~10.430 USD)",
    "pc_en": "~$4,150 (PPP ~$10,430)",
    "gr": "+3.8%",
    "sec": [
      59,
      29,
      12
    ],
    "main_vi": "Trữ lượng quặng phosphate & phân bón (tập đoàn OCP nắm >70% trữ lượng toàn cầu), sản xuất ô tô (#1 châu Phi, nhà xuất khẩu xe hơi số 1 sang EU: Renault, Stellantis) & pin xe điện, linh kiện hàng không (Safran, Boeing), cảng Tanger Med (#1 Địa Trung Hải & châu Phi), du lịch (~17,4 triệu khách/năm)",
    "main_en": "Phosphate rock & fertilizers (OCP Group holds >70% of global reserves), automotive manufacturing (#1 in Africa & #1 passenger car exporter to EU) & EV batteries, aerospace parts, Tanger Med megaport (#1 in Med & Africa), tourism (~17.4M visitors)",
    "note_vi": "Là cường quốc công nghiệp chế tạo hàng đầu Bắc Phi, Maroc đã vượt qua Nam Phi và Trung Quốc để trở thành nhà xuất khẩu ô tô con lớn nhất sang Liên minh châu Âu (nhờ các tổ hợp nhà máy Renault và Stellantis tại Tangier, Kenitra với công suất hướng tới 1 triệu xe/năm), đồng thời thu hút hàng tỷ USD đầu tư chuỗi cung ứng pin xe điện LFP và linh kiện hàng không (Boeing, Safran). Tập đoàn quốc doanh OCP nắm giữ hơn 70% trữ lượng photphat thế giới mang lại nguồn thu ngoại tệ khổng lồ cùng ngành du lịch lập kỷ lục mới với 17,4 triệu lượt khách năm 2024. Động lực tăng trưởng đến năm 2030 đang được thúc đẩy mạnh mẽ bởi đại dự án mở rộng đường sắt cao tốc, sân bay và sân vận động chuẩn bị cho World Cup 2030.",
    "note_en": "As North Africa's industrial manufacturing champion, Morocco has become the largest passenger-car exporter to the European Union via massive Renault and Stellantis plants in Tangier and Kenitra, while rapidly attracting billions of dollars in Chinese and Western EV battery (LFP) and aerospace investments (Boeing, Safran). State giant OCP Group leverages over 70% of global phosphate reserves to dominate international fertilizer markets, complemented by record tourism reaching 17.4 million visitors in 2024. Growth through 2030 is further supercharged by multibillion-dollar expansions of high-speed rail, airports, and stadiums as Morocco co-hosts the 2030 FIFA World Cup."
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
    "note_vi": "Nền kinh tế của vùng lãnh thổ này tập trung gần như hoàn toàn ở khu vực 80% phía tây do Maroc quản lý và trợ cấp mạnh mẽ thông qua chương trình đầu tư phát triển các tỉnh miền Nam. Trụ cột công nghiệp truyền thống là mỏ lộ thiên Bou Craa — nơi quặng photphat chất lượng cao được vận chuyển tới cảng Laayoune bằng hệ thống băng tải dài nhất thế giới (98 km) nhìn thấy được từ vũ trụ — cùng ngành đánh bắt, chế biến thủy sản tại Dakhla chiếm tỷ trọng lớn trong tổng sản lượng cá của Maroc. Hiện nay, tiềm năng nắng và gió ven biển cực lớn đang biến nơi đây thành trung tâm điện tái tạo, sản xuất hydro xanh và cảng nước sâu Dakhla Atlantique kết nối thương mại xuyên Sahara.",
    "note_en": "Economic activity is concentrated almost entirely in the Moroccan-administered western 80% of the territory, supported by heavy public infrastructure spending and tax incentives from Rabat. Its traditional backbone consists of the Bou Craa open-pit phosphate mine—connected to Laayoune port by the world's longest conveyor belt (98 km)—and the booming Atlantic fisheries hub around Dakhla, which accounts for a major share of Moroccan seafood exports. With world-class coastal wind speeds and solar irradiation, the territory is rapidly attracting multibillion-dollar investments in wind farms, green hydrogen projects, and the $1.2 billion Dakhla Atlantique deep-water port."
  },
  "Montenegro": {
    "tier": "emg",
    "gdp_vi": "~8,3 tỷ USD (#156 thế giới)",
    "gdp_en": "~$8.3B (#156 globally)",
    "pc_vi": "~13.270 USD (PPP ~34.060 USD)",
    "pc_en": "~$13,270 (PPP ~$34,060)",
    "gr": "+3.2%",
    "sec": [
      80,
      15,
      5
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển Adriatic & bến siêu du thuyền (Kotor, Porto Montenegro, Budva - chiếm ~25-30% GDP), xuất khẩu điện năng (cáp ngầm dưới biển nối Ý), cảng biển Bar, khai thác bauxite & chế biến gỗ",
    "main_en": "Adriatic coast & superyacht marina tourism (Kotor, Porto Montenegro, Budva - ~25-30% of GDP), cross-Adriatic subsea electricity exports to Italy, Port of Bar logistics, bauxite & timber",
    "note_vi": "Là ứng viên tiên phong gia nhập EU tại Tây Balkan và đơn phương dùng đồng Euro từ năm 2002, Montenegro vận hành nền kinh tế dịch vụ mở cửa cao độ. Các khu nghỉ dưỡng Adriatic và bến siêu du thuyền Porto Montenegro giúp quốc gia 620.000 dân đón hơn 2,6 triệu du khách mỗi năm, đóng góp gần 30% GDP. Tuyến cáp điện ngầm xuyên biển sang Ý và cảng Bar tạo động lực tăng trưởng mới, dù nợ hạ tầng và tính mùa vụ du lịch vẫn là điểm nghẽn.",
    "note_en": "As the Western Balkans' frontrunner EU candidate and a unilateral euro user since 2002, Montenegro operates a highly open, service-driven coastal economy. Luxury superyacht marinas like Porto Montenegro and historic towns such as Kotor attract over 2.6 million visitors annually—four times the national population—generating nearly 30% of GDP. While the subsea power cable to Italy and the Port of Bar bolster regional connectivity, infrastructure debt and seasonal tourism reliance remain key bottlenecks."
  },
  "Mongolia": {
    "tier": "emg",
    "gdp_vi": "~23,8 tỷ USD (#122 thế giới)",
    "gdp_en": "~$23.8B (#122 globally)",
    "pc_vi": "~6.750 USD (PPP ~19.170 USD)",
    "pc_en": "~$6,750 (PPP ~$19,170)",
    "gr": "+5.1%",
    "sec": [
      49,
      42,
      9
    ],
    "main_vi": "Khai thác than luyện cốc, đồng & vàng (mỏ Oyu Tolgoi), quặng sắt, len cashmere, chăn nuôi đại gia súc du mục",
    "main_en": "Coking coal, copper & gold mining (Oyu Tolgoi), iron ore, cashmere wool, nomadic livestock husbandry",
    "note_vi": "Kinh tế Mông Cổ dựa vào tài nguyên khoáng sản dồi dào gồm than luyện cốc, đồng, vàng (siêu mỏ Oyu Tolgoi), uranium cùng ngành len cashmere. Do không giáp biển, Trung Quốc thu mua hơn 85% tổng xuất khẩu của Mông Cổ trong khi Nga cung cấp hơn 90% xăng dầu tiêu thụ. Điểm nghẽn lớn là biến động giá quặng thế giới, hạ tầng cửa khẩu đường sắt và bão tuyết 'dzud' tàn phá đàn gia súc.",
    "note_en": "Mongolia's resource-driven economy relies on vast deposits of coking coal, copper and gold (anchored by the giant Oyu Tolgoi mine), uranium, and cashmere wool. Because of its landlocked geography, China absorbs over 85% of Mongolian exports via rail while Russia supplies more than 90% of its refined fuel. Key structural vulnerabilities include commodity price swings, border rail bottlenecks, and severe 'dzud' winter freezes."
  },
  "Moldova": {
    "tier": "emg",
    "gdp_vi": "~18,2 tỷ USD (#132 thế giới)",
    "gdp_en": "~$18.2B (#132 globally)",
    "pc_vi": "~7.580 USD (PPP ~18.660 USD)",
    "pc_en": "~$7,580 (PPP ~$18,660)",
    "gr": "+0.3%",
    "sec": [
      72,
      20,
      8
    ],
    "main_vi": "Sản xuất rượu vang xuất khẩu (hầm rượu ngầm lớn nhất thế giới Mileștii Mici & Cricova), nông sản (hạt hướng dương, táo, quả óc chó, ngũ cốc), công viên công nghệ thông tin ảo (Moldova IT Park), dây cáp điện ô tô, kiều hối (~15% GDP)",
    "main_en": "Wine production & exports (world's largest underground cellars at Mileștii Mici & Cricova), agriculture (sunflower seeds, apples, walnuts), Moldova IT Park (7% flat tax), automotive wiring, remittances",
    "note_vi": "Là một trong những quốc gia có thu nhập thấp nhất châu Âu nhưng Moldova đang chuyển mình nhanh chóng: Liên minh châu Âu (đặc biệt là Romania) hiện chiếm hơn 65% tổng kim ngạch xuất khẩu của nước này (từ rượu vang nổi tiếng với hầm rượu ngầm lớn nhất thế giới Mileștii Mici, hạt hướng dương, trái cây đến bộ dây cáp điện cho ngành ô tô Đức). Điểm sáng đột phá của nền kinh tế là mô hình khu công nghệ ảo \"Moldova IT Park\" áp dụng mức thuế duy nhất 7% (đã được gia hạn đến năm 2035), đưa xuất khẩu phần mềm CNTT vượt qua cả xuất khẩu rượu vang, kết hợp cùng gói hỗ trợ Tăng trưởng 1,8 tỷ Euro của EU giai đoạn 2025–2027 và dòng kiều hối chiếm ~15% GDP.",
    "note_en": "Though historically one of Europe's poorest economies, Moldova has decisively reoriented its trade toward the European Union (which now absorbs ~65% of exports, led by Romania), exporting world-famous wines from the giant underground cellars of Mileștii Mici and Cricova, agricultural products, and automotive wiring harnesses. Its standout growth engine is the virtual \"Moldova IT Park\"—whose flat 7% single tax regime (extended to 2035) has propelled IT services past wine as a top export—backed by a €1.8 billion EU Growth Plan (2025–2027) and diaspora remittances (~15% of GDP)."
  },
  "Monaco": {
    "tier": "adv",
    "gdp_vi": "~11,1 tỷ USD (#150 thế giới)",
    "gdp_en": "~$11.1B (#150 globally)",
    "pc_vi": "~288.000 USD",
    "pc_en": "~$288,000",
    "gr": "+8.5%",
    "sec": [
      86,
      14,
      0
    ],
    "main_vi": "Ngân hàng tư nhân & quản lý tài sản giới siêu giàu (quản lý >170 tỷ Euro), bất động sản đắt nhất hành tinh & lấn biển (khu đô thị sinh thái Mareterra 2 tỷ Euro), du lịch siêu sang & sự kiện (F1 Monaco GP, Monaco Yacht Show, Sòng bạc Monte-Carlo), công nghiệp dược – mỹ phẩm & nhựa chính xác",
    "main_en": "Private banking & ultra-high-net-worth wealth management (>€170B AuM), world's priciest real estate & offshore land reclamation (Mareterra), luxury events (F1 Monaco GP, Yacht Show, Monte-Carlo Casino), specialty cosmetics & plastics",
    "note_vi": "Đứng số 1 thế giới về GDP bình quân đầu người (>250.000 USD) với gần 1/3 cư dân là triệu phú USD, Monaco thu hút giới thượng lưu nhờ chính sách 0% thuế thu nhập cá nhân và thuế tài sản áp dụng từ năm 1869 (trừ công dân Pháp theo hiệp ước song phương). Tuy vậy, ngân sách nhà nước của công quốc vẫn luôn thặng dư nhờ nguồn thu khổng lồ từ thuế giá trị gia tăng (VAT 20%), phí giao dịch bất động sản đắt nhất hành tinh (~52.000 Euro/m²), ngân hàng tư nhân quản lý hơn 170 tỷ Euro và giải đua xe F1 Monaco GP.",
    "note_en": "Boasting the world's highest GDP per capita (>$250,000) where nearly one in three residents is a USD millionaire, Monaco attracts global wealth via zero personal income or capital-gains taxes since 1869 (except for French nationals under bilateral treaty). Nevertheless, the state runs consistent budget surpluses funded by a 20% VAT, transfer duties on the planet's priciest real estate (~€52,000/m²), private banks managing over €170 billion, and flagship events like the Formula 1 Monaco Grand Prix."
  },
  "Mexico": {
    "tier": "emg",
    "gdp_vi": "~1.830 tỷ USD (#13 thế giới, #2 Mỹ Latin)",
    "gdp_en": "~$1.83T (#13 globally, #2 in Latin America)",
    "pc_vi": "~13.990 USD (PPP ~25.820 USD)",
    "pc_en": "~$13,990 (PPP ~$25,820)",
    "gr": "+1.4%",
    "sec": [
      63,
      33,
      4
    ],
    "main_vi": "Sản xuất & xuất khẩu ô tô – linh kiện (#1 nhà cung cấp cho Mỹ, #7 thế giới), máy tính – điện tử – thiết bị y tế, dầu khí (Pemex) & khai thác bạc (#1 thế giới), kiều hối (>65 tỷ USD/năm), nông sản – đồ uống (bơ #1, bia Corona/Modelo #1 xuất khẩu thế giới, rượu Tequila), du lịch (#6 thế giới)",
    "main_en": "Automotive & parts manufacturing (#1 supplier to US, #7 producer globally), electronics, servers & medical devices, oil (Pemex) & silver mining (#1 globally), remittances (>$65B/year), agro-exports (avocados, beer #1 globally, Tequila), tourism",
    "note_vi": "Là nền kinh tế lớn thứ 13 thế giới và lớn thứ 2 tại Mỹ Latinh, Mexico đã vượt qua Trung Quốc để trở thành đối tác thương mại hàng hóa số 1 của Hoa Kỳ nhờ làn sóng dịch chuyển chuỗi cung ứng (nearshoring) theo hiệp định USMCA. Các cụm công nghiệp tại Monterrey, Bajío và dọc biên giới phía bắc là trung tâm sản xuất ô tô – linh kiện (nhà cung cấp số 1 cho Mỹ), máy chủ dữ liệu, điện tử và thiết bị y tế, song hành cùng dòng kiều hối kỷ lục hơn 65 tỷ USD/năm và vị thế số 1 thế giới về khai thác bạc, xuất khẩu bia, quả bơ. Điểm nghẽn lớn nhất hiện nay là tình trạng thiếu hụt điện năng, nước công nghiệp ở miền bắc, thâm hụt tài khóa của tập đoàn dầu khí quốc doanh Pemex và rủi ro thuế quan khi đánh giá lại USMCA vào năm 2026.",
    "note_en": "Ranking as the world's 13th-largest economy and Latin America's second-largest, Mexico has overtaken China as the top goods trading partner of the United States, propelled by a massive USMCA 'nearshoring' manufacturing boom. Industrial corridors in Monterrey, the Bajío, and northern border states anchor North America's supply chains in automobiles (#1 supplier to the US), AI servers, electronics, and medical devices, complemented by over $65 billion in annual remittances and #1 global exports of silver, beer, and avocados. Key structural bottlenecks include power grid and water constraints in the arid north, heavy debt at state oil company Pemex, and trade policy uncertainty ahead of the 2026 USMCA joint review."
  },
  "Mauritius": {
    "tier": "emg",
    "gdp_vi": "~14,9 tỷ USD (#143 thế giới)",
    "gdp_en": "~$14.9B (#143 globally)",
    "pc_vi": "~11.990 USD (PPP ~31.700 USD)",
    "pc_en": "~$11,990 (PPP ~$31,700)",
    "gr": "+4.9%",
    "sec": [
      75,
      21,
      4
    ],
    "main_vi": "Trung tâm tài chính quốc tế (trung chuyển vốn đầu tư vào Ấn Độ và châu Phi), du lịch nghỉ dưỡng biển cao cấp, công nghệ thông tin & dịch vụ thuê ngoài (BPO), dệt may cao cấp, chế biến cá ngừ & đường mía đặc sản",
    "main_en": "International Financial Centre (cross-border investment conduit into India & Africa), luxury resort tourism, IT & BPO services, high-end textiles, tuna processing & specialty sugar",
    "note_vi": "Đứng số 1 châu Phi suốt nhiều năm liền về Chỉ số Quản trị Ibrahim và tự do kinh tế, Mauritius đã chuyển mình từ nền kinh tế độc canh mía đường thành trung tâm tài chính quốc tế (IFC) quản lý hàng trăm tỷ USD vốn đầu tư xuyên biên giới vào Ấn Độ và châu Phi. Sự kết hợp giữa thuế suất cạnh tranh, hệ thống pháp luật lai Anh – Pháp minh bạch, du lịch nghỉ dưỡng cao cấp và dịch vụ công nghệ thông tin (BPO) giúp GDP bình quân đầu người theo sức mua tương đương vượt mốc 32.000 USD, dù đất nước đang đối mặt với bài toán thiếu hụt lao động trẻ.",
    "note_en": "Consistently ranked #1 in Africa on the Ibrahim Index of African Governance, Mauritius transformed itself from a colonial sugar colony into a premier International Financial Centre channeling hundreds of billions of dollars in investment into India and mainland Africa. A hybrid Anglo-French legal system, low tax regime, bilingual workforce, and thriving luxury tourism and IT/BPO sectors have lifted PPP per-capita income above $32,000, though an aging population and skilled labor shortages pose new structural hurdles."
  },
  "Mauritania": {
    "tier": "dev",
    "gdp_vi": "~10,9 tỷ USD (#151 thế giới)",
    "gdp_en": "~$10.9B (#151 globally)",
    "pc_vi": "~2.100 USD (PPP ~7.380 USD)",
    "pc_en": "~$2,100 (PPP ~$7,380)",
    "gr": "+6.3%",
    "sec": [
      46,
      33,
      21
    ],
    "main_vi": "Khai thác quặng sắt trên sa mạc Sahara (#2 châu Phi, vận chuyển bằng đoàn tàu dài nhất thế giới 2,5 km), khai thác vàng (mỏ Tasiast) & đồng, xuất khẩu khí hóa lỏng LNG mới (mỏ Greater Tortue Ahmeyim cùng Senegal), đánh bắt thủy sản (bạch tuộc), chăn nuôi lạc đà – gia súc",
    "main_en": "Iron ore mining in the Sahara (#2 in Africa, hauled by the world's longest 2.5-km freight train), gold (Tasiast mine) & copper, offshore LNG exports (Greater Tortue Ahmeyim with Senegal), Atlantic octopus & fish exports, livestock",
    "note_vi": "Nền kinh tế Mauritania đứng vững trên ba trụ cột tài nguyên: khai thác quặng sắt tại vùng Zouérat (nhà sản xuất lớn thứ hai châu Phi, vận chuyển bằng đoàn tàu dài 2,5 km ra cảng Nouadhibou), khai thác vàng – đồng (mỏ Tasiast của Kinross) và xuất khẩu thủy sản sang EU, Nhật Bản. Từ năm 2025, việc đưa mỏ khí đốt ngoài khơi Greater Tortue Ahmeyim vào khai thác thương mại cùng hàng loạt biên bản ghi nhớ đầu tư siêu dự án hydro xanh trị giá hàng chục tỷ USD nhờ nắng và gió sa mạc đang tạo cú hích lớn cho GDP. Điểm nghẽn chính vẫn là cơ sở hạ tầng chế biến yếu, tỷ lệ đói nghèo nông thôn và sự nhạy cảm với biến động giá quặng sắt thế giới.",
    "note_en": "Mauritania's economy rests on three traditional resource pillars: Saharan iron-ore mining around Zouérat (Africa's #2 producer, hauled to Nouadhibou port by 2.5-km freight trains), gold and copper mining led by the giant Tasiast mine, and rich Atlantic seafood exports to Europe and East Asia. Beginning in 2025, commercial LNG exports from the offshore Greater Tortue Ahmeyim field—alongside multibillion-dollar plans to harness world-class coastal wind and solar resources for green hydrogen and green steel—are unlocking a new growth cycle. Key challenges remain limited industrial processing capacity, rural poverty, and vulnerability to global iron-ore price swings."
  },
  "Malta": {
    "tier": "adv",
    "gdp_vi": "~25,0 tỷ USD (#118 thế giới)",
    "gdp_en": "~$25.0B (#118 globally)",
    "pc_vi": "~44.020 USD (PPP ~70.060 USD)",
    "pc_en": "~$44,020 (PPP ~$70,060)",
    "gr": "+6.2%",
    "sec": [
      88,
      11,
      1
    ],
    "main_vi": "Thủ phủ cấp phép trò chơi trực tuyến châu Âu (iGaming - chiếm ~12% GDP), du lịch Địa Trung Hải (~3,5 triệu khách/năm), đăng ký tàu biển (#1 châu Âu, #6 thế giới), bảo dưỡng máy bay (Lufthansa Technik) & bán dẫn (STMicroelectronics), dược phẩm generic, tài chính",
    "main_en": "European iGaming & online entertainment hub (~12% of GDP), Mediterranean tourism (~3.5M visitors/year), ship registry (#1 in Europe, #6 globally), aviation MRO & semiconductors (STMicroelectronics), generic pharmaceuticals, financial services",
    "note_vi": "Duy trì tốc độ tăng trưởng GDP thực tế ~5%/năm (gấp 3–4 lần mức trung bình EU), Malta đã chuyển đổi thành công từ căn cứ hải quân sang nền kinh tế dịch vụ và công nghệ giá trị cao sử dụng tiếng Anh làm ngôn ngữ chính thức. Các động lực cốt lõi gồm thủ phủ cấp phép trò chơi trực tuyến châu Âu (iGaming đóng góp ~12% GDP), du lịch đón 3,5 triệu khách/năm, trung tâm đóng gói bán dẫn của STMicroelectronics, bảo dưỡng máy bay (Lufthansa Technik) và sản xuất dược phẩm.",
    "note_en": "Consistently expanding at ~5% annually—roughly triple the Eurozone average—English-speaking Malta has transformed from a naval garrison into a diversified high-value service and tech economy. Growth is propelled by Europe's premier regulated iGaming hub (~12% of GDP), 3.5 million annual tourists, STMicroelectronics' major semiconductor assembly plant, Lufthansa Technik aviation maintenance, and generic pharmaceutical exports."
  },
  "Mali": {
    "tier": "low",
    "gdp_vi": "~26,8 tỷ USD (#113 thế giới)",
    "gdp_en": "~$26.8B (#113 globally)",
    "pc_vi": "~1.090 USD (PPP ~3.320 USD)",
    "pc_en": "~$1,090 (PPP ~$3,320)",
    "gr": "+5.0%",
    "sec": [
      39,
      26,
      35
    ],
    "main_vi": "Khai thác vàng (#3-4 châu Phi, chiếm >75% tổng kim ngạch xuất khẩu), khai thác lithium mới (siêu mỏ Goulamina đi vào sản xuất), trồng bông vải ('vàng trắng' đứng đầu Tây Phi), chăn nuôi gia súc & nông nghiệp dọc sông Niger (lúa gạo, hạt kê)",
    "main_en": "Gold mining (top-4 in Africa, >75% of total export earnings), lithium mining (Goulamina hard-rock lithium project), cotton production ('white gold' leader in West Africa), livestock & Niger River agriculture",
    "note_vi": "Vàng là trụ cột tuyệt đối của nền kinh tế Mali khi đóng góp hơn 75–80% tổng kim ngạch xuất khẩu và đưa nước này vào nhóm 3–4 nhà sản xuất vàng lớn nhất châu Phi (với các mỏ công nghiệp quy mô lớn của Barrick, B2Gold, Resolute ở vùng tây nam an toàn hơn). Đặc biệt, cuối năm 2024 – 2025, Mali đã chính thức đưa siêu mỏ lithium đá cứng Goulamina (do tập đoàn Ganfeng của Trung Quốc nắm cổ phần chi phối) vào khai thác thương mại, biến nước này thành nhà cung cấp nguyên liệu pin xe điện tầm cỡ thế giới bên cạnh thế mạnh truyền thống là trồng bông vải (#1 Tây Phi). Tuy nhiên, khủng hoảng cắt điện kéo dài của công ty điện lực quốc doanh EDM và chi phí quân sự lớn vẫn đè nặng lên tăng trưởng.",
    "note_en": "Gold dominates Mali's formal economy, accounting for over 75–80% of total export earnings and ranking the country among Africa's top four gold producers, largely from industrial mines located in the relatively stable southwest. In late 2024–2025, Mali entered the global EV battery supply chain with the commissioning of the giant Goulamina hard-rock lithium mine operated by China's Ganfeng Lithium, complementing its status as one of West Africa's leading cotton ('white gold') producers. Nevertheless, severe power-grid blackouts at state utility EDM, high defense spending, and disputes with Western mining firms over the new mining code weigh on economic stability."
  },
  "Maldives": {
    "tier": "emg",
    "gdp_vi": "~7,1 tỷ USD (#159 thế giới)",
    "gdp_en": "~$7.1B (#159 globally)",
    "pc_vi": "~13.380 USD (PPP ~26.220 USD)",
    "pc_en": "~$13,380 (PPP ~$26,220)",
    "gr": "+3.5%",
    "sec": [
      85,
      11,
      4
    ],
    "main_vi": "Du lịch nghỉ dưỡng đảo san hô cao cấp (~30% GDP trực tiếp, >70% ngoại tệ), đánh bắt và chế biến cá ngừ, dịch vụ hàng hải",
    "main_en": "Luxury atoll resort tourism (~30% direct GDP, >70% FX earnings), skipjack & yellowfin tuna fisheries, maritime services",
    "note_vi": "Du lịch nghỉ dưỡng cao cấp ('một đảo – một resort') đóng góp trực tiếp gần 30% GDP và hơn 70% nguồn thu ngoại tệ của Maldives (~7,2 tỷ USD GDP), bên cạnh nghề đánh bắt cá ngừ truyền thống. Không có đất canh tác hay dầu mỏ, quốc đảo phải nhập khẩu gần 100% lương thực, nhiên liệu và vật liệu xây dựng. Vay nợ lớn để xây cầu vượt biển, sân bay và đảo nhân tạo Hulhumalé đã đẩy nợ công vượt 110% GDP, buộc nước này phải nhờ các gói hoán đổi tiền tệ từ Ấn Độ giai đoạn 2024–2026 để tránh vỡ nợ.",
    "note_en": "Luxury 'one-island, one-resort' tourism directly generates ~30% of GDP and over 70% of foreign-exchange earnings in the ~$7.2B economy, supplemented by skipjack and yellowfin tuna exports. Lacking farmland or hydrocarbons, the country must import nearly 100% of its food, fuel, and construction materials. Heavy borrowing for bridges, airport expansion, and Hulhumalé land reclamation pushed public debt past 110% of GDP, requiring Indian currency-swap support in 2024–2026 to avoid default."
  },
  "Malaysia": {
    "tier": "emg",
    "gdp_vi": "~422 tỷ USD (#37 thế giới, #6 Đông Nam Á)",
    "gdp_en": "~$422B (#37 globally, #6 in ASEAN)",
    "pc_vi": "~11.870 USD (PPP ~38.840 USD)",
    "pc_en": "~$11,870 (PPP ~$38,840)",
    "gr": "+5.1%",
    "sec": [
      54,
      37,
      9
    ],
    "main_vi": "Đóng gói & kiểm thử bán dẫn (chiếm ~13% toàn cầu), dầu khí & LNG (Petronas), dầu cọ, trung tâm dữ liệu AI (Johor), tài chính Hồi giáo",
    "main_en": "Semiconductor packaging & testing (~13% global share), oil & LNG (Petronas), palm oil, hyperscale data centers (Johor), Islamic finance",
    "note_vi": "Malaysia kết hợp nguồn thu dầu khí dồi dào (tập đoàn Petronas) với hơn 50 năm kinh nghiệm sản xuất điện tử – bán dẫn tại bang Penang, hiện chiếm ~13% thị phần đóng gói và kiểm thử chip (ATP) toàn cầu. Giai đoạn 2024–2026, bang Johor sát vách Singapore bùng nổ thành trung tâm dữ liệu AI lớn nhất Đông Nam Á nhờ quỹ đất và điện nước dồi dào. Thách thức chính là cải cách trợ giá nhiên liệu, giữ chân nhân tài kỹ thuật cao và vươn lên khâu thiết kế chip.",
    "note_en": "Malaysia combines hydrocarbon wealth (via state oil giant Petronas) with five decades of electronics manufacturing in Penang, commanding ~13% of global semiconductor packaging and testing (ATP). In 2024–2026, southern Johor has boomed as Southeast Asia's fastest-growing hyperscale AI data-center hub just across the causeway from Singapore. Key structural priorities include reforming fuel subsidies, stemming high-skill brain drain to Singapore, and moving up into chip design."
  },
  "Malawi": {
    "tier": "low",
    "gdp_vi": "~11,3 tỷ USD (#148 thế giới)",
    "gdp_en": "~$11.3B (#148 globally)",
    "pc_vi": "~520 USD (PPP ~1.860 USD)",
    "pc_en": "~$520 (PPP ~$1,860)",
    "gr": "+1.7%",
    "sec": [
      48,
      18,
      34
    ],
    "main_vi": "Xuất khẩu thuốc lá (chiếm ~40-50% nguồn thu ngoại tệ xuất khẩu), trà (nhà sản xuất trà thương mại lâu đời nhất châu Phi), mía đường, đậu phộng & hạt mắc ca, đánh bắt cá hồ Malawi, thăm dò đất hiếm (Songwe Hill) & rutile (Kasiya - mỏ lớn nhất thế giới)",
    "main_en": "Tobacco exports (~40-50% of export earnings), tea (Africa's oldest commercial producer), sugar, macadamia nuts & groundnuts, Lake Malawi fisheries, rare earths (Songwe Hill) & Kasiya rutile-graphite exploration",
    "note_vi": "Malawi là quốc gia có tỷ trọng kinh tế phụ thuộc vào cây thuốc lá cao nhất thế giới khi thuốc lá lá chiếm tới 40–50% tổng thu ngoại tệ xuất khẩu, bên cạnh trà (nhà sản xuất trà thương mại đầu tiên của châu Phi từ năm 1878 tại Mulanje), mía đường, hạt mắc-ca và đậu phộng. Do xu hướng giảm hút thuốc lá toàn cầu gây thiếu hụt ngoại tệ (USD) mãn tính để nhập khẩu xăng dầu và phân bón (buộc đồng Kwacha phải phá giá mạnh năm 2023–2024), Malawi đang đẩy nhanh cấp phép cho các dự án khai khoáng chiến lược như mỏ titan – than chì Kasiya, mỏ niobium Kanyika và đất hiếm Songwe Hill.",
    "note_en": "Malawi is the world's most tobacco-reliant economy, with burley tobacco leaf generating 40–50% of merchandise export earnings alongside tea (Africa's oldest commercial producer since 1878), sugar, and macadamia nuts. Chronic foreign-exchange shortages for importing fuel and fertilizer—which forced sharp devaluations of the kwacha in 2023–2024—have pushed the government to fast-track world-class mining projects, led by Sovereign Metals' Kasiya rutile-graphite deposit, the Kanyika niobium mine, and Songwe Hill rare earths."
  },
  "Madagascar": {
    "tier": "low",
    "gdp_vi": "~17,6 tỷ USD (#135 thế giới)",
    "gdp_en": "~$17.6B (#135 globally)",
    "pc_vi": "~550 USD (PPP ~1.890 USD)",
    "pc_en": "~$550 (PPP ~$1,890)",
    "gr": "+4.3%",
    "sec": [
      52,
      24,
      24
    ],
    "main_vi": "Sản xuất & xuất khẩu vani tự nhiên (#1 thế giới - chiếm ~80% nguồn cung toàn cầu), khai thác niken & coban (mỏ Ambatovy), ilmenite/titan & than chì, đá quý (sapphire), đinh hương, dệt may xuất khẩu (khu chế xuất Antananarivo), du lịch sinh thái đặc hữu",
    "main_en": "Natural vanilla exports (#1 globally - ~80% of world supply), nickel & cobalt mining (Ambatovy), ilmenite/titanium & graphite, sapphires, cloves, duty-free apparel manufacturing, endemic wildlife eco-tourism",
    "note_vi": "Madagascar thống trị tuyệt đối thị trường hương liệu vani tự nhiên toàn cầu khi vùng SAVA ở đông bắc đảo cung cấp tới ~80% sản lượng vani Bourbon của thế giới (một loại nông sản cần thụ phấn thủ công từng bông hoa và có những năm đắt ngang giá bạc theo trọng lượng), bên cạnh xuất khẩu đinh hương, vải thiều và tinh dầu ylang-ylang. Về công nghiệp và khoáng sản, đảo quốc sở hữu tổ hợp khai thác niken và coban Ambatovy quy mô hàng đầu thế giới, mỏ ilmenit (quặng titan) của Rio Tinto tại Fort Dauphin, các mỏ than chì (graphite phục vụ cực âm pin xe điện) và đá quý sapphire tại Ilakaka, cùng các khu chế xuất dệt may xuất khẩu miễn thuế sang Mỹ (AGOA) và EU. Điểm nghẽn kìm hãm đất nước là mạng lưới điện quốc gia (Jirama) thiếu hụt trầm trọng và các tuyến quốc lộ bị bão lũ chia cắt khiến nông sản khó lưu thông.",
    "note_en": "Madagascar holds a near-monopoly on the global natural vanilla market, with its northeastern SAVA region supplying ~80% of the world's Bourbon vanilla—a labor-intensive crop that must be hand-pollinated flower by flower—alongside major exports of cloves, lychees, and essential oils. Its industrial sector is anchored by the massive Ambatovy nickel-and-cobalt mining complex, Rio Tinto's QMM ilmenite (titanium) mine in the south, world-class flake graphite deposits for EV battery anodes, Ilakaka sapphires, and duty-free apparel factories around Antananarivo exporting to the US and EU. Nevertheless, chronic financial losses and blackouts at state power utility Jirama, cyclone-damaged highways, and low agricultural productivity remain severe structural bottlenecks."
  },
  "Macedonia": {
    "tier": "emg",
    "gdp_vi": "~17,0 tỷ USD (#136 thế giới)",
    "gdp_en": "~$17.0B (#136 globally)",
    "pc_vi": "~9.290 USD (PPP ~27.000 USD)",
    "pc_en": "~$9,290 (PPP ~$27,000)",
    "gr": "+3.0%",
    "sec": [
      65,
      28,
      7
    ],
    "main_vi": "Linh kiện ô tô & dây cáp điện (khu công nghiệp TIDZ), luyện kim (ferronickel, thép), dệt may, rượu vang & nông sản, CNTT gia công",
    "main_en": "Auto parts & wiring harnesses (TIDZ free zones), metallurgy (ferronickel, steel), textiles, wine & agriculture, IT outsourcing",
    "note_vi": "Bắc Macedonia đã hội nhập sâu vào chuỗi cung ứng công nghiệp Đức nhờ các Khu phát triển công nghệ – công nghiệp (TIDZ) quanh Skopje, thu hút nhiều tập đoàn sản xuất linh kiện ô tô, cáp điện và bộ lọc khí thải. Đồng Denar neo chặt vào đồng Euro giúp ổn định vĩ mô, kết hợp thế mạnh về luyện kim, rượu vang và gia công CNTT. Điểm nghẽn lớn nhất của nước này là tình trạng chảy máu chất xám của lao động trẻ sang Tây Âu và sự chậm trễ trong đàm phán gia nhập EU.",
    "note_en": "North Macedonia has deeply integrated into German automotive supply chains through its Technological Industrial Development Zones (TIDZs), attracting major foreign manufacturers of auto electronics, wiring harnesses, and emission catalysts. Macroeconomic stability is anchored by a tight peg of the denar to the euro, complemented by metallurgy, wine exports, and IT outsourcing in Skopje. However, skilled youth emigration to Western Europe and delays in EU accession negotiations continue to constrain long-term growth."
  },
  "Luxembourg": {
    "tier": "adv",
    "gdp_vi": "~93 tỷ USD (#74 thế giới)",
    "gdp_en": "~$93B (#74 globally)",
    "pc_vi": "~137.780 USD (PPP ~156.080 USD)",
    "pc_en": "~$137,780 (PPP ~$156,080)",
    "gr": "+0.4%",
    "sec": [
      89,
      11,
      0
    ],
    "main_vi": "Quản lý quỹ đầu tư (trung tâm lớn thứ 2 thế giới sau Mỹ), ngân hàng tư nhân, bảo hiểm, dịch vụ vệ tinh (SES), thép chất lượng cao (ArcelorMittal)",
    "main_en": "Investment fund management (#2 globally after the US), private banking, insurance, satellite communications (SES), specialty steel (ArcelorMittal)",
    "note_vi": "Với GDP bình quân đầu người vượt 135.000 USD (#1 thế giới), Luxembourg là trung tâm quản lý quỹ đầu tư xuyên biên giới lớn nhất châu Âu với tổng tài sản quản lý hơn 5.500 tỷ Euro, chỉ đứng sau Mỹ. Gần một nửa lực lượng lao động của nước này là 220.000 cư dân Pháp, Bỉ và Đức đi về qua biên giới mỗi ngày, trong khi chính phủ đang đẩy mạnh tài chính xanh, siêu máy tính và công nghệ vũ trụ.",
    "note_en": "With a world-leading GDP per capita above $135,000, Luxembourg serves as Europe's premier cross-border investment fund hub, managing over €5.5 trillion in assets—second globally only to the United States. Nearly half of its workforce consists of 220,000 daily commuters from France, Belgium, and Germany, while national strategy increasingly targets green finance, commercial space, and supercomputing."
  },
  "Lithuania": {
    "tier": "adv",
    "gdp_vi": "~86 tỷ USD (#79 thế giới)",
    "gdp_en": "~$86B (#79 globally)",
    "pc_vi": "~29.600 USD (PPP ~55.700 USD)",
    "pc_en": "~$29,600 (PPP ~$55,700)",
    "gr": "+3.0%",
    "sec": [
      72,
      26,
      2
    ],
    "main_vi": "Fintech & dịch vụ tài chính số, công nghệ laser & quang học, lọc dầu (Mažeikiai), chế biến gỗ & nội thất (cung ứng IKEA), logistics vận tải bộ",
    "main_en": "Fintech & digital financial services, laser & photonics tech, oil refining (Mažeikiai), wood processing & furniture (IKEA supplier), road freight logistics",
    "note_vi": "Là nền kinh tế lớn nhất và năng động nhất trong ba nước vùng Baltic (GDP ~87 tỷ USD, GDP PPP đầu người vượt cả Tây Ban Nha), Litva giữ vững nền tảng công nghiệp chế tạo thực chất (~20% GDP) từ nhà máy lọc dầu duy nhất vùng Baltic tại Mažeikiai, chuỗi cung ứng nội thất gỗ lớn cho IKEA đến công nghiệp hóa chất – phân bón. Đặc biệt, Vilnius đã vươn lên thành trung tâm cấp phép Fintech lớn nhất Liên minh châu Âu (nơi Revolut đặt ngân hàng châu Âu) và Litva hiện chiếm hơn 50% thị phần toàn cầu về máy laser xung cực ngắn phục vụ nghiên cứu khoa học.",
    "note_en": "As the largest and most dynamic Baltic economy (GDP ~$87 billion, with PPP per-capita income surpassing Spain), Lithuania pairs a robust manufacturing base (~20% of GDP)—spanning the Baltics' sole oil refinery at Mažeikiai, major IKEA furniture manufacturing, and biotech—with booming high-tech services. Notably, Vilnius has become the EU's largest fintech licensing hub (anchoring Revolut's European bank), while Lithuanian firms command over half the global market for ultrashort-pulse scientific lasers."
  },
  "Liechtenstein": {
    "tier": "adv",
    "gdp_vi": "~8,9 tỷ USD (#154 thế giới)",
    "gdp_en": "~$8.9B (#154 globally)",
    "pc_vi": "~220.170 USD",
    "pc_en": "~$220,170",
    "gr": "+1.8%",
    "sec": [
      59,
      40,
      1
    ],
    "main_vi": "Cơ khí chính xác & dụng cụ xây dựng (Hilti), nha khoa giả (Ivoclar), linh kiện ô tô (ThyssenKrupp Presta), ngân hàng tư nhân & quản lý gia sản",
    "main_en": "Precision engineering & construction tools (Hilti), dental prosthetics (Ivoclar), steering components (ThyssenKrupp Presta), private banking & wealth management",
    "note_vi": "Dù nổi tiếng về ngân hàng tư nhân, trụ cột thực sự của Liechtenstein lại là ngành công nghiệp chế tạo công nghệ cao chiếm tới 44% GDP (gấp đôi mức trung bình EU) với các tập đoàn toàn cầu như Hilti, Ivoclar và ThyssenKrupp Presta. Đáng chú ý, tổng số việc làm tại công quốc (~43.000) còn nhiều hơn cả dân số (~40.000), đòi hỏi hơn 55% lao động phải đi về mỗi ngày từ Thụy Sĩ, Áo và Đức.",
    "note_en": "Often seen solely as a banking haven, Liechtenstein is actually a hyper-industrialized economy where high-tech manufacturing generates 44% of GDP—led by global champions like Hilti, Ivoclar, and ThyssenKrupp Presta. Remarkably, the principality hosts more jobs (~43,000) than residents (~40,000), relying on daily commuters from Switzerland, Austria, and Germany for over 55% of its workforce."
  },
  "Libya": {
    "tier": "emg",
    "gdp_vi": "~48 tỷ USD (#95 thế giới)",
    "gdp_en": "~$48B (#95 globally)",
    "pc_vi": "~6.570 USD (PPP ~14.320 USD)",
    "pc_en": "~$6,570 (PPP ~$14,320)",
    "gr": "+1.9%",
    "sec": [
      27,
      71,
      2
    ],
    "main_vi": "Khai thác dầu thô ngọt nhẹ (Light Sweet Crude), khí đốt tự nhiên (đường ống Greenstream sang Ý), lọc hóa dầu, luyện thép (Misrata)",
    "main_en": "Light sweet crude oil extraction, natural gas (Greenstream pipeline to Italy), petrochemicals & refining, steelmaking (Misrata)",
    "note_vi": "Libya sở hữu trữ lượng dầu mỏ xác minh lớn nhất lục địa châu Phi (~48 tỷ thùng) với loại dầu thô ngọt nhẹ (Light Sweet Crude) chất lượng cao, chi phí khai thác cực thấp và nằm ngay sát thị trường tiêu thụ châu Âu qua đường ống ngầm Greenstream nối sang Ý. Dầu khí đóng góp hơn 95% kim ngạch xuất khẩu và trên 90% nguồn thu ngân sách nhà nước cho dân số chỉ khoảng 7,4 triệu người. Tuy nhiên, các cuộc tranh giành quyền kiểm soát Ngân hàng Trung ương Libya và nguồn thu dầu mỏ giữa hai chính quyền Đông – Tây vẫn thường xuyên gây ra các đợt phong tỏa mỏ dầu, làm gián đoạn sản lượng 1,2–1,4 triệu thùng/ngày.",
    "note_en": "Libya holds Africa's largest proven crude oil reserves (~48 billion barrels), prized for its low-cost, low-sulfur light sweet crude and direct proximity to European refineries, supplemented by the Greenstream subsea gas pipeline to Italy. Hydrocarbons generate over 95% of export earnings and more than 90% of fiscal revenue for a relatively small population of ~7.4 million, giving Libya one of the highest per-capita resource endowments in Africa. Yet recurring disputes between rival western and eastern factions over control of the Central Bank of Libya and oil revenues periodically trigger oilfield blockades that disrupt its 1.2–1.4 million bpd output."
  },
  "Liberia": {
    "tier": "low",
    "gdp_vi": "~4,8 tỷ USD (#164 thế giới)",
    "gdp_en": "~$4.8B (#164 globally)",
    "pc_vi": "~850 USD (PPP ~1.870 USD)",
    "pc_en": "~$850 (PPP ~$1,870)",
    "gr": "+4.0%",
    "sec": [
      44,
      22,
      34
    ],
    "main_vi": "Quặng sắt (ArcelorMittal), cao su tự nhiên (đồn điền Firestone), khai thác vàng & kim cương, dầu cọ, đăng ký tàu biển quốc tế (cờ thuận tiện #1 thế giới)",
    "main_en": "Iron ore (ArcelorMittal), natural rubber (Firestone plantations), gold & diamond mining, palm oil, international ship registry (#1 flag of convenience)",
    "note_vi": "Mang dấu ấn lịch sử gắn kết đặc biệt với Hoa Kỳ, nền kinh tế Liberia lưu hành song song đồng đô la Mỹ (USD) cùng đồng đô la Liberia và thu ngân sách ổn định từ phí đăng ký đội tàu biển lớn nhất thế giới. Động lực tăng trưởng thực tế dựa vào việc mở rộng công suất khai thác quặng sắt của tập đoàn ArcelorMittal tại dãy Nimba, khai thác vàng công nghiệp và đồn điền cao su Firestone lớn nhất hành tinh (hoạt động từ năm 1926), dù thiếu điện và đường giao thông nông thôn vẫn kìm hãm nông nghiệp chế biến.",
    "note_en": "Reflecting its unique historical ties with the United States, Liberia operates a dual-currency regime using both the US dollar and the Liberian dollar while earning steady fiscal fees from the world's largest merchant shipping registry. Real-sector growth is driven by ArcelorMittal's multi-billion-dollar iron-ore expansion, industrial gold mines, and the historic Firestone rubber plantation (the world's largest contiguous rubber estate since 1926), though high electricity costs and unpaved rural roads constrain broader diversification."
  },
  "Lesotho": {
    "tier": "dev",
    "gdp_vi": "~2,4 tỷ USD (#178 thế giới)",
    "gdp_en": "~$2.4B (#178 globally)",
    "pc_vi": "~1.020 USD (PPP ~3.070 USD)",
    "pc_en": "~$1,020 (PPP ~$3,070)",
    "gr": "+5.2%",
    "sec": [
      60,
      33,
      7
    ],
    "main_vi": "Xuất khẩu nước sạch sang Nam Phi (Dự án LHWP), kim cương chất lượng cao (mỏ Letseng), dệt may xuất khẩu sang Mỹ (AGOA), kiều hối",
    "main_en": "Water & hydro exports to South Africa (LHWP), high-value gem diamonds (Letseng mine), apparel exports to the US (AGOA), migrant remittances",
    "note_vi": "Nền kinh tế quy mô nhỏ (~2,3 tỷ USD) của Lesotho đứng trên 4 trụ cột: khoản chia sẻ doanh thu thuế quan từ Liên minh Thuế quan miền Nam châu Phi (SACU, thường chiếm tới 30–50% tổng thu ngân sách nhà nước), tiền bán nước sạch và đại công trường thi công Giai đoạn II Dự án Nước Cao nguyên Lesotho (LHWP trị giá >2 tỷ USD) với Nam Phi, khai thác kim cương siêu lớn tại mỏ Letseng (ở độ cao 3.100 m) và ngành dệt may xuất khẩu ('thủ phủ quần bò (jeans) của châu Phi'). Tuy nhiên, việc ngành may mặc phụ thuộc nặng vào ưu đãi miễn thuế sang thị trường Mỹ theo Đạo luật AGOA và việc kinh tế tăng trưởng chậm chạp của nước láng giềng Nam Phi đang đặt Maseru trước áp lực phải tạo thêm việc làm cho thanh niên và phát triển nông nghiệp công nghệ cao.",
    "note_en": "Lesotho's small $2.3 billion economy rests on four main pillars: customs revenue transfers from the Southern African Customs Union (SACU, providing 30–50% of government budget revenue), water royalties and massive construction inflows from Phase II of the >$2 billion Lesotho Highlands Water Project with South Africa, high-value gem diamond mining at Letseng (3,100 m elevation), and export garment factories in Maseru. However, heavy exposure of its textile factories to US trade tariffs and AGOA renewal uncertainty in 2025–2026, alongside soil erosion and high youth unemployment, remains a major structural vulnerability."
  },
  "Lebanon": {
    "tier": "dev",
    "gdp_vi": "~26,0 tỷ USD (#114 thế giới)",
    "gdp_en": "~$26.0B (#114 globally)",
    "pc_vi": "~4.470 USD (PPP ~11.920 USD)",
    "pc_en": "~$4,470 (PPP ~$11,920)",
    "gr": "-7.1%",
    "sec": [
      91,
      7,
      2
    ],
    "main_vi": "Kiều hối từ cộng đồng hải ngoại (~6–7 tỷ USD/năm, >30% GDP), dịch vụ thương mại – ẩm thực – du lịch, chế biến thực phẩm & rượu vang, trang sức",
    "main_en": "Diaspora remittances (~$6–7B/yr, >30% of GDP), hospitality & retail services, agro-food & wine processing, jewelry",
    "note_vi": "Từng được mệnh danh là \"Thụy Sĩ của Trung Đông\" với hệ thống ngân hàng nắm giữ tài sản gấp 4 lần GDP, Lebanon từ năm 2019 đã trải qua cuộc sụp đổ tài chính kiểu Ponzi khiến GDP bốc hơi hơn 50% (từ 55 tỷ USD xuống ~22 tỷ USD) và nền kinh tế chuyển hẳn sang giao dịch bằng tiền mặt USD. Hiện tại, sức sống của đất nước dựa gần như hoàn toàn vào dòng kiều hối 6,5–7 tỷ USD mỗi năm (chiếm >30% GDP) từ cộng đồng hơn 10 triệu người gốc Lebanon khắp thế giới, trong khi chính phủ mới thành lập năm 2025 đang đàm phán với IMF và các nước vùng Vịnh để huy động hơn 10 tỷ USD tái thiết sau chiến tranh.",
    "note_en": "Once hailed as the \"Switzerland of the Middle East\" for its oversized banking sector, Lebanon suffered a systemic financial collapse beginning in 2019 that shrank GDP by more than half (from $55B to ~$22B), wiped out bank deposits, and turned the country into a cash-dollarized economy. Today the economy survives on $6.5–7 billion in annual remittances (>30% of GDP) from the vast global Lebanese diaspora, while the reformist government installed in early 2025 seeks IMF restructuring and Gulf reconstruction aid following the costly 2024 war."
  },
  "Latvia": {
    "tier": "adv",
    "gdp_vi": "~44 tỷ USD (#100 thế giới)",
    "gdp_en": "~$44B (#100 globally)",
    "pc_vi": "~23.580 USD (PPP ~43.870 USD)",
    "pc_en": "~$23,580 (PPP ~$43,870)",
    "gr": "-0.0%",
    "sec": [
      74,
      21,
      5
    ],
    "main_vi": "Lâm nghiệp & chế biến gỗ xuất khẩu, dược phẩm (Grindeks), thiết bị mạng không dây (MikroTik), trung tâm hàng không Baltic (airBaltic), CNTT",
    "main_en": "Forestry & timber products, pharmaceuticals (Grindeks), wireless networking hardware (MikroTik), Baltic aviation hub (airBaltic), IT services",
    "note_vi": "Với hơn 52% diện tích lãnh thổ được bao phủ bởi rừng tự nhiên, Latvia là một trong những nhà xuất khẩu gỗ xẻ, viên nén gỗ sinh khối và nhà gỗ lắp ghép giá trị gia tăng hàng đầu Liên minh châu Âu. Thủ đô Riga đóng vai trò trung tâm hàng không của toàn vùng Baltic thông qua hãng hàng không quốc gia airBaltic và siêu dự án đường sắt khổ tiêu chuẩn châu Âu Rail Baltica, bên cạnh các ngành công nghệ cao như thiết bị mạng không dây toàn cầu MikroTik, dược phẩm (Grindeks) và máy bay không người lái (UAV) quốc phòng.",
    "note_en": "With forests blanketing over 52% of its territory, Latvia is a leading EU exporter of engineered timber, wood pellets, and modular wooden housing. Meanwhile, Riga functions as the aviation and logistics hub of the Baltic states via flagship carrier airBaltic and the under-construction Rail Baltica high-speed line, complemented by global wireless router maker MikroTik, pharmaceutical producer Grindeks, and a rapidly growing NATO drone coalition industry."
  },
  "Laos": {
    "tier": "dev",
    "gdp_vi": "~16,5 tỷ USD (#137 thế giới, #9 Đông Nam Á)",
    "gdp_en": "~$16.5B (#137 globally, #9 in ASEAN)",
    "pc_vi": "~2.120 USD (PPP ~9.790 USD)",
    "pc_en": "~$2,120 (PPP ~$9,790)",
    "gr": "+4.1%",
    "sec": [
      49,
      33,
      18
    ],
    "main_vi": "Xuất khẩu thủy điện ('cục pin của Đông Nam Á'), khai khoáng (vàng, đồng, kali), vận tải đường sắt Lào – Trung, nông lâm sản (sắn, cao su, bột giấy)",
    "main_en": "Hydropower exports ('Battery of Southeast Asia'), mining (gold, copper, potash), Laos-China Railway logistics, agri-forestry (cassava, rubber, pulp)",
    "note_vi": "Kinh tế Lào dựa vào xuất khẩu tài nguyên thô và năng lượng: bán điện thủy điện và nhiệt điện sang Thái Lan, Việt Nam, Campuchia, khai thác vàng, đồng, muối kali (potash), nông lâm sản (sắn, cao su, bột giấy) và vận tải trên đường sắt Lào – Trung. Tuy nhiên, việc vay nợ ngoại tệ lớn để xây đập điện và đường sắt đã đẩy nợ công vượt 100% GDP. Áp lực trả nợ ngoại tệ làm cạn dự trữ ngoại hối, khiến đồng Kip mất giá nặng và lạm phát kéo dài.",
    "note_en": "Laos relies on resource and energy exports—selling hydropower and coal-fired electricity to Thailand, Vietnam, and Cambodia, mining gold, copper, and potash, and moving freight on the Laos–China Railway. However, heavy foreign-currency borrowing to finance dams and rail infrastructure pushed public debt past 100% of GDP. Large external debt-service obligations have drained reserves, sparking sharp Kip depreciation and high inflation."
  },
  "Kyrgyzstan": {
    "tier": "dev",
    "gdp_vi": "~18,2 tỷ USD (#133 thế giới)",
    "gdp_en": "~$18.2B (#133 globally)",
    "pc_vi": "~2.520 USD (PPP ~8.210 USD)",
    "pc_en": "~$2,520 (PPP ~$8,210)",
    "gr": "+11.5%",
    "sec": [
      61,
      29,
      10
    ],
    "main_vi": "Khai thác vàng (mỏ Kumtor trên núi cao), kiều hối từ Nga (~25–30% GDP), thương mại trung chuyển tái xuất, thủy điện, chăn nuôi thảo nguyên",
    "main_en": "High-altitude gold mining (Kumtor), remittances from Russia (~25–30% of GDP), re-export transit trade, hydropower, pastoral livestock",
    "note_vi": "Nền kinh tế miền núi quy mô nhỏ dựa vào ba trụ cột chính là khai thác vàng tại mỏ Kumtor trên độ cao 4.000 m, kiều hối từ hơn 700.000 lao động tại Nga (chiếm 20–25% GDP) và thương mại trung chuyển nội khối Á – Âu (EAEU). Từ sau năm 2022, kim ngạch tái xuất hàng tiêu dùng, linh kiện và ô tô qua Kyrgyzstan tăng đột biến, song hạ tầng giao thông đèo dốc, thiếu hụt điện mùa đông và rủi ro trừng phạt thứ cấp vẫn là những điểm nghẽn cấu trúc lớn.",
    "note_en": "Kyrgyzstan's high-altitude economy rests on three pillars: gold extraction at the 4,000-meter Kumtor mine, remittances from over 700,000 migrant workers in Russia (20–25% of GDP), and Eurasian Economic Union (EAEU) transit trade. Since 2022, booming re-export logistics of autos and consumer goods have driven rapid GDP growth, though winter electricity deficits, rugged mountain bottlenecks, and secondary-sanction risks remain persistent structural vulnerabilities."
  },
  "Kuwait": {
    "tier": "adv",
    "gdp_vi": "~161 tỷ USD (#58 thế giới)",
    "gdp_en": "~$161B (#58 globally)",
    "pc_vi": "~32.860 USD (PPP ~53.120 USD)",
    "pc_en": "~$32,860 (PPP ~$53,120)",
    "gr": "-1.5%",
    "sec": [
      49,
      51,
      0
    ],
    "main_vi": "Khai thác dầu thô (~90% xuất khẩu, trữ lượng #6 thế giới), lọc hóa dầu (nhà máy lọc dầu Al-Zour), đầu tư tài chính quốc tế (KIA)",
    "main_en": "Crude oil extraction (~90% of exports, #6 global reserves), oil refining (Al-Zour mega-refinery), sovereign financial investments (KIA)",
    "note_vi": "Sở hữu trữ lượng dầu mỏ lớn thứ 6 thế giới (~101 tỷ thùng, nổi bật là siêu mỏ dầu Burgan) và vừa vận hành nhà máy lọc hóa dầu khổng lồ Al-Zour (615.000 thùng/ngày), Kuwait vẫn phụ thuộc tới 90% ngân sách nhà nước vào dầu khí và sử dụng 80% lao động bản địa trong khu vực công. Tuy nhiên, nhờ lập Quỹ Đầu tư Kuwait (KIA) từ năm 1953 — quỹ tài sản quốc gia lâu đời nhất hành tinh nay đạt quy mô khoảng 1.000 tỷ USD — đất nước có bộ đệm tài chính cực kỳ hùng hậu để thúc đẩy cải cách Vision 2035.",
    "note_en": "Endowed with the world's sixth-largest crude reserves (~101 billion barrels, anchored by the giant Burgan field) and the newly commissioned 615,000-bpd Al-Zour mega-refinery, Kuwait still relies on hydrocarbons for ~90% of state revenues while employing ~80% of citizens in the public sector. However, its Kuwait Investment Authority (KIA)—founded in 1953 as the world's oldest sovereign wealth fund and now managing ~$1 trillion—provides a formidable financial cushion as the emirate accelerates long-delayed infrastructure reforms."
  },
  "Kosovo": {
    "tier": "emg",
    "gdp_vi": "~11,2 tỷ USD (#149 thế giới)",
    "gdp_en": "~$11.2B (#149 globally)",
    "pc_vi": "~7.030 USD (PPP ~17.890 USD)",
    "pc_en": "~$7,030 (PPP ~$17,890)",
    "gr": "+4.6%",
    "sec": [
      58,
      33,
      9
    ],
    "main_vi": "Khai khoáng (chì, kẽm, niken tại tổ hợp Trepča), nhiệt điện than non (lignite), chế biến thực phẩm, gia công CNTT (BPO), xây dựng từ kiều hối",
    "main_en": "Base metal mining (lead, zinc, nickel at Trepča), lignite coal power, food processing, IT/BPO services, diaspora-funded construction",
    "note_vi": "Đơn phương sử dụng đồng Euro giúp Kosovo giữ ổn định tiền tệ và thu hút nguồn kiều hối cùng chi tiêu du lịch thăm thân từ Đức, Thụy Sĩ lên tới 15–20% GDP mỗi năm. Dân số trẻ nhất châu Âu và chính sách miễn thị thực Schengen từ năm 2024 đang thúc đẩy mạnh ngành gia công phần mềm (IT/BPO) tại Pristina. Dù có trữ lượng than non lớn thứ 5 thế giới và mỏ chì – kẽm Trepča, nền kinh tế vẫn bị kìm hãm bởi lưới điện cũ kỹ và rủi ro chính trị với Serbia.",
    "note_en": "Unilateral use of the euro anchors monetary stability and facilitates massive inflows from the Kosovar diaspora in Germany and Switzerland, whose remittances and visits generate 15–20% of GDP. Europe's youngest workforce and EU visa liberalization since 2024 are fueling a fast-growing IT outsourcing and BPO sector in Pristina. Despite holding the world's fifth-largest lignite reserves and rich lead-zinc deposits at Trepča, Kosovo must overcome aging coal power plants and political friction with Serbia to attract large-scale manufacturing FDI."
  },
  "Kiribati": {
    "tier": "dev",
    "gdp_vi": "~0,30 tỷ USD (~300 triệu USD)",
    "gdp_en": "~$300M",
    "pc_vi": "~2.550 USD (PPP ~3.730 USD)",
    "pc_en": "~$2,550 (PPP ~$3,730)",
    "gr": "+4.7%",
    "sec": [
      67,
      11,
      22
    ],
    "main_vi": "Bán giấy phép đánh bắt cá ngừ vùng đặc quyền kinh tế (EEZ), cùi dừa khô (copra), kiều hối từ thủy thủ và lao động thời vụ, quỹ đầu tư quốc gia RERF",
    "main_en": "EEZ tuna fishing license fees, copra & coconut oil, seafarer & seasonal worker remittances, Revenue Equalization Reserve Fund (RERF) returns",
    "note_vi": "Là một trong những nền kinh tế biệt lập nhất thế giới (sử dụng đồng Đô la Úc AUD), ngân sách nhà nước của Kiribati phụ thuộc tới 70–80% vào doanh thu bán giấy phép ngày tàu đánh bắt cá ngừ (theo Thỏa ước Nauru – PNA) cho các hạm đội tàu cá viễn dương của Hàn Quốc, Nhật Bản, Trung Quốc, Đài Loan và Mỹ. Bên cạnh Quỹ Dự trữ Cân bằng Thu nhập (RERF — trị giá hơn 1 tỷ AUD được tích lũy từ tiền đào mỏ photphat trên đảo Banaba thời thuộc Anh trước năm 1979), thu nhập của các hộ gia đình dựa lớn vào xuất khẩu cùi dừa khô (copra) được nhà nước trợ giá và kiều hối từ hàng nghìn thủy thủ người Kiribati làm việc trên các tàu buôn Đức cùng lao động thời vụ tại Úc/New Zealand.",
    "note_en": "Using the Australian dollar (AUD) and handicapped by extreme dispersion across 3.5 million km² of ocean, Kiribati relies on foreign tuna fishing access fees under the Parties to the Nauru Agreement (PNA \"Vessel Day Scheme\") for 70–80% of government tax and non-tax revenue. Public finances are further cushioned by the >A$1 billion Revenue Equalization Reserve Fund (RERF, capitalized from pre-1979 colonial phosphate mining on Banaba Island), while household incomes depend on state-subsidized copra harvesting and remittances from I-Kiribati merchant seafarers on European cargo ships and seasonal farm workers in Australia and New Zealand."
  },
  "Kenya": {
    "tier": "dev",
    "gdp_vi": "~120 tỷ USD (#67 thế giới)",
    "gdp_en": "~$120B (#67 globally)",
    "pc_vi": "~2.130 USD (PPP ~6.650 USD)",
    "pc_en": "~$2,130 (PPP ~$6,650)",
    "gr": "+4.7%",
    "sec": [
      59,
      17,
      24
    ],
    "main_vi": "Fintech & thanh toán di động (M-Pesa), xuất khẩu trà (#1 thế giới) & hoa cắt cành sang châu Âu, du lịch safari, dịch vụ cảng biển (Mombasa), điện địa nhiệt",
    "main_en": "Fintech & mobile money (M-Pesa), black tea (#1 exporter) & cut-flower exports to Europe, safari tourism, Mombasa port logistics, geothermal power",
    "note_vi": "Sở hữu nền kinh tế đa dạng và năng động bậc nhất Đông Phi mà không cần dựa vào dầu mỏ hay khoáng sản thô, Kenya đi tiên phong toàn cầu về tài chính số với hệ thống thanh toán di động M-Pesa (Safaricom) xử lý lượng giao dịch tương đương hơn nửa GDP quốc gia. Nước này hiện là nhà xuất khẩu trà đen lớn nhất thế giới, cung cấp hơn một phần ba lượng hoa hồng cắt cành bán tại châu Âu (vận chuyển hàng đêm bằng máy bay từ hồ Naivasha), đồng thời thu hút hàng triệu du khách quốc tế tới các khu bảo tồn thiên nhiên hoang dã Maasai Mara, Amboseli và bờ biển Mombasa. Điểm nghẽn lớn nhất của Kenya là chi phí trả nợ nước ngoài chiếm tỷ trọng quá lớn trong thu ngân sách thuế, buộc chính phủ phải cân bằng giữa củng cố tài khóa với nhu cầu việc làm của giới trẻ.",
    "note_en": "Operating East Africa's largest and most diversified non-mineral economy, Kenya is a global pioneer in digital finance through Safaricom's M-Pesa mobile-money platform and Nairobi's thriving \"Silicon Savannah\" startup ecosystem. The country ranks as the world's #1 exporter of black tea and supplies over a third of the cut roses sold in the European Union—air-freighted nightly from Lake Naivasha—alongside world-famous Maasai Mara safari tourism and Mombasa port logistics. Its primary structural challenge is a heavy public debt-service burden that consumes a large share of tax revenues, requiring careful fiscal consolidation while generating jobs for a highly educated youth population."
  },
  "Kazakhstan": {
    "tier": "emg",
    "gdp_vi": "~292 tỷ USD (#49 thế giới, #1 Trung Á)",
    "gdp_en": "~$292B (#49 globally, #1 in Central Asia)",
    "pc_vi": "~14.160 USD (PPP ~40.950 USD)",
    "pc_en": "~$14,160 (PPP ~$40,950)",
    "gr": "+5.0%",
    "sec": [
      62,
      34,
      4
    ],
    "main_vi": "Dầu thô & khí đốt (mỏ Tengiz, Kashagan), uranium (#1 thế giới, ~40% nguồn cung toàn cầu), đồng, ferroalloy, lúa mì, vận tải quá cảnh Á – Âu",
    "main_en": "Crude oil & gas (Tengiz, Kashagan fields), uranium (#1 globally, ~40% supply), copper, ferroalloys, wheat, Eurasian transit logistics",
    "note_vi": "Chiếm gần 60% GDP toàn vùng Trung Á (~300 tỷ USD), kinh tế Kazakhstan dựa vào ba siêu mỏ dầu khí (Tengiz, Kashagan, Karachaganak) và vị thế nhà khai thác uranium số một thế giới (chiếm ~40% nguồn cung toàn cầu), cùng xuất khẩu đồng, lúa mì. Từ sau năm 2022, lưu lượng hàng hóa qua 'Hành lang Trung tâm' xuyên biển Caspi nối Trung Quốc – châu Âu qua Kazakhstan đã tăng gấp nhiều lần. Điểm nghẽn lớn nhất là ngân sách phụ thuộc vào giá dầu thô, rủi ro đường ống CPC qua Nga và tỷ trọng công nghiệp chế tạo nội địa còn mỏng.",
    "note_en": "Generating nearly 60% of Central Asia's GDP (~$300B), Kazakhstan is powered by giant oilfields (Tengiz, Kashagan, Karachaganak) and its position as the world's top uranium producer (~40% of global supply), alongside copper and wheat exports. Since 2022, freight traffic has surged along its Trans-Caspian 'Middle Corridor' linking China to Europe. Key structural vulnerabilities remain heavy reliance on crude oil prices, exposure to Russian CPC pipeline disruptions, and limited non-extractive manufacturing."
  },
  "Jordan": {
    "tier": "emg",
    "gdp_vi": "~59 tỷ USD (#88 thế giới)",
    "gdp_en": "~$59B (#88 globally)",
    "pc_vi": "~5.070 USD (PPP ~11.920 USD)",
    "pc_en": "~$5,070 (PPP ~$11,920)",
    "gr": "+2.6%",
    "sec": [
      64,
      30,
      6
    ],
    "main_vi": "Khai thác kali (potash) & phốt phát ở Biển Chết, dược phẩm xuất khẩu, du lịch di sản (Petra, Wadi Rum), dịch vụ CNTT & y tế, kiều hối",
    "main_en": "Dead Sea potash & phosphate fertilizers, pharmaceuticals, heritage tourism (Petra, Wadi Rum), regional medical & IT services, remittances",
    "note_vi": "Không có trữ lượng dầu khí đáng kể nhưng lại phải gánh chi phí hạ tầng cho hơn 1,3 triệu người tị nạn Syria và hàng triệu người tị nạn Palestine, nền kinh tế Jordan dựa vào khai thác phân bón kali – phốt phát ở Biển Chết (top đầu thế giới), xuất khẩu dược phẩm, dịch vụ CNTT – y tế, du lịch di sản Petra và kiều hối từ vùng Vịnh. Nhờ các gói viện trợ thường niên hơn 1,45 tỷ USD từ Mỹ cùng chương trình cải cách tài khóa chặt chẽ với IMF, Amman giữ được đồng Dinar ổn định neo vào USD bất chấp nợ công ở mức ~90% GDP.",
    "note_en": "Devoid of significant oil or gas reserves while hosting over 1.3 million Syrian refugees alongside millions of registered Palestinian refugees, Jordan's economy relies on Dead Sea potash and phosphate fertilizers, pharmaceuticals, regional medical and IT services, Petra tourism, and Gulf remittances. Backed by a $1.45B+ annual US aid commitment and disciplined IMF fiscal programs, Amman has maintained its currency peg and macroeconomic stability despite public debt hovering near 90% of GDP."
  },
  "Japan": {
    "tier": "adv",
    "gdp_vi": "~4.190 tỷ USD (#4 thế giới)",
    "gdp_en": "~$4.19T (#4 globally)",
    "pc_vi": "~33.800 USD (PPP ~54.160 USD)",
    "pc_en": "~$33,800 (PPP ~$54,160)",
    "gr": "-0.2%",
    "sec": [
      72,
      27,
      1
    ],
    "main_vi": "Ô tô & xe hybrid (Toyota, Honda), thiết bị bán dẫn & vật liệu hóa chất tinh khiết, robot công nghiệp, cơ khí chính xác, tài chính",
    "main_en": "Automobiles & hybrids, semiconductor equipment & specialty chemicals, industrial robotics, precision machinery, financial services",
    "note_vi": "Nhật Bản là nền kinh tế lớn thứ tư thế giới và giữ vị thế quốc gia chủ nợ ròng lớn nhất hành tinh nhờ khối tài sản đầu tư khổng lồ ở nước ngoài. Các tập đoàn Nhật nắm giữ những mắt xích độc quyền trong chuỗi cung ứng toàn cầu về hóa chất bán dẫn, thiết bị quang khắc, robot công nghiệp và xe hybrid (Toyota). Kinh tế đang thoát giảm phát và thu hút các siêu nhà máy chip (TSMC Kumamoto, Rapidus), nhưng chịu áp lực nợ công trên 250% GDP và thiếu hụt lao động.",
    "note_en": "Japan is the world's fourth-largest economy and the planet's largest net creditor nation thanks to vast overseas investment assets. Japanese firms control critical global supply-chain choke points in semiconductor photoresists, wafer equipment, industrial robotics, and hybrid vehicles. Now exiting decades of deflation with rising wages and major chip-fab investments (TSMC Kumamoto, Rapidus), the economy still faces public debt above 250% of GDP and acute labor shortages."
  },
  "Jamaica": {
    "tier": "emg",
    "gdp_vi": "~22,0 tỷ USD (#125 thế giới)",
    "gdp_en": "~$22.0B (#125 globally)",
    "pc_vi": "~7.750 USD (PPP ~12.910 USD)",
    "pc_en": "~$7,750 (PPP ~$12,910)",
    "gr": "-0.5%",
    "sec": [
      71,
      20,
      9
    ],
    "main_vi": "Du lịch nghỉ dưỡng & tàu biển (Montego Bay, Ocho Rios), khai thác bauxite & luyện alumina, kiều hối, gia công quy trình kinh doanh (BPO), rượu rum & cà phê Blue Mountain",
    "main_en": "Resort & cruise tourism (Montego Bay, Ocho Rios), bauxite & alumina mining, remittances, BPO call centers, rum & Blue Mountain coffee",
    "note_vi": "Nền kinh tế Jamaica dựa vào khu vực dịch vụ (chiếm hơn 70% GDP), dẫn đầu là ngành du lịch nghỉ dưỡng biển và tàu du lịch tại Montego Bay, Ocho Rios và Negril (đón hơn 4 triệu lượt khách/năm), cùng dòng kiều hối lớn từ cộng đồng người Jamaica tại Mỹ, Anh và Canada (~3,5 tỷ USD/năm, tương đương ~18–20% GDP). Bên cạnh xuất khẩu quặng bauxit và alumina (nhôm oxit) truyền thống cùng thương hiệu cà phê Blue Mountain đắt giá nhất thế giới và rượu rum Appleton, Jamaica đã vươn lên thành trung tâm gia công quy trình kinh doanh và chăm sóc khách hàng bằng tiếng Anh (BPO) tạo việc làm cho hơn 55.000 lao động trẻ. Thành tựu vĩ mô nổi bật nhất là việc duy trì thặng dư ngân sách cơ bản suốt hơn một thập kỷ để giảm hơn một nửa tỷ lệ nợ công, tạo dư địa đầu tư hạ tầng mới.",
    "note_en": "Services generate over 70% of Jamaica's GDP, led by resort and cruise tourism in Montego Bay, Ocho Rios, and Negril (>4 million visitors annually) alongside ~$3.5 billion in annual diaspora remittances from the US, UK, and Canada (~18–20% of GDP). Complementing traditional bauxite and alumina mining, Appleton rum, and prized Blue Mountain coffee exports, Jamaica has built the English-speaking Caribbean's largest business process outsourcing (BPO) sector, employing over 55,000 workers. Most remarkably, a decade of strict fiscal discipline has cut public debt from over 140% of GDP to below 70%, earning credit-rating upgrades despite lingering challenges of high electricity costs and crime."
  },
  "Italy": {
    "tier": "adv",
    "gdp_vi": "~2.383 tỷ USD (#8 thế giới, #3 EU)",
    "gdp_en": "~$2.38T (#8 globally, #3 in EU)",
    "pc_vi": "~40.430 USD (PPP ~62.290 USD)",
    "pc_en": "~$40,430 (PPP ~$62,290)",
    "gr": "+0.8%",
    "sec": [
      72,
      25,
      3
    ],
    "main_vi": "Máy móc cơ khí tự động hóa, siêu xe & ô tô (Ferrari, Stellantis), thời trang & hàng xa xỉ (Milan), dược phẩm, chế biến thực phẩm – rượu vang, du lịch di sản",
    "main_en": "Industrial machinery & automation, luxury & mass automotive (Ferrari, Stellantis), high fashion & luxury goods, pharmaceuticals, food & wine, heritage tourism",
    "note_vi": "Là cường quốc sản xuất công nghiệp lớn thứ 2 trong EU chỉ sau Đức, sức mạnh kinh tế của Ý nằm ở mạng lưới hàng nghìn doanh nghiệp gia đình vừa và nhỏ (SME) tại miền Bắc chuyên xuất khẩu máy móc tự động hóa, siêu xe (Ferrari), dược phẩm, thời trang xa xỉ (Milan) và thực phẩm – rượu vang. Dù đang giải ngân gói vốn phục hồi lớn nhất EU (~194 tỷ Euro từ NextGenerationEU) và đạt thặng dư thương mại cao, tăng trưởng dài hạn của Ý vẫn bị kìm hãm bởi nợ công ~137% GDP và lực lượng lao động thu hẹp.",
    "note_en": "As the EU's second-largest manufacturing powerhouse after Germany, Italy thrives on specialized northern industrial clusters ('distretti industriali') exporting precision automation machinery, pharmaceuticals, Ferrari supercars, Milanese luxury fashion, and agri-food. Although bolstered by the EU's largest NextGenerationEU recovery package (~€194 billion) and strong trade surpluses, long-term growth remains constrained by public debt near 137% of GDP and rapid population aging."
  },
  "Israel": {
    "tier": "adv",
    "gdp_vi": "~542 tỷ USD (#28 thế giới)",
    "gdp_en": "~$542B (#28 globally)",
    "pc_vi": "~54.220 USD (PPP ~57.280 USD)",
    "pc_en": "~$54,220 (PPP ~$57,280)",
    "gr": "+1.0%",
    "sec": [
      80,
      19,
      1
    ],
    "main_vi": "Công nghệ cao & an ninh mạng ('Silicon Wadi', ~50% xuất khẩu), công nghiệp quốc phòng & hàng không vũ trụ, thiết kế chip, dược phẩm, khí đốt Đông Địa Trung Hải, chế tác kim cương",
    "main_en": "High-tech software & cybersecurity ('Silicon Wadi', ~50% of exports), defense & aerospace systems, chip R&D, pharmaceuticals, offshore gas, diamonds",
    "note_vi": "Với tỷ lệ chi tiêu cho Nghiên cứu & Phát triển (R&D) đạt trên 6% GDP — cao nhất thế giới — Israel xây dựng nền kinh tế dựa trên công nghệ cao (\"Silicon Wadi\"), an ninh mạng, thiết kế vi mạch, trí tuệ nhân tạo và công nghiệp quốc phòng (vòm sắt Iron Dome, tên lửa Arrow), chiếm hơn 50% tổng kim ngạch xuất khẩu. Tuy nhiên, cuộc chiến đa mặt trận kéo dài từ cuối năm 2023 sang 2025 đã buộc nước này huy động hàng trăm nghìn quân dự bị, đẩy chi tiêu quốc phòng vượt 8% GDP, làm thâm hụt ngân sách tăng mạnh và khiến các tổ chức xếp hạng tín nhiệm hạ bậc lần đầu tiên trong lịch sử.",
    "note_en": "Investing over 6% of GDP in research and development—the highest ratio in the world—Israel's \"Silicon Wadi\" economy is powered by cybersecurity, AI software, semiconductor R&D, and defense exports (Iron Dome, Arrow), which together account for over half of total exports. However, the protracted multi-front war since late 2023 has mobilized hundreds of thousands of reservists, pushed defense spending above 8% of GDP, widened fiscal deficits, and triggered the country's first-ever sovereign credit rating downgrades."
  },
  "Palestine": {
    "tier": "dev",
    "gdp_vi": "~16,0 tỷ USD (#138 thế giới)",
    "gdp_en": "~$16.0B (#138 globally)",
    "pc_vi": "~3.030 USD (PPP ~4.770 USD)",
    "pc_en": "~$3,030 (PPP ~$4,770)",
    "gr": "-22.9%",
    "sec": [
      73,
      20,
      7
    ],
    "main_vi": "Dịch vụ thương mại & hành chính công, xây dựng, nông nghiệp (ô liu, cam quýt, rau quả), chế tác đá vôi, viện trợ quốc tế & kiều hối",
    "main_en": "Retail & public services, construction, agriculture (olives, citrus, vegetables), stone & marble cutting, international aid & remittances",
    "note_vi": "Nền kinh tế Palestine không có đồng tiền riêng (phải sử dụng đồng Shekel của Israel, Dinar của Jordan và USD) và ngân sách của Chính quyền Palestine phụ thuộc tới 65% vào khoản thuế xuất nhập khẩu do Israel thu hộ rồi chuyển giao theo Nghị định thư Paris (1994). Kể từ tháng 10/2023, chiến sự đã xóa sổ gần như toàn bộ nền kinh tế Dải Gaza (giảm hơn 80% GDP tại Gaza), trong khi việc Israel thu hồi giấy phép của hơn 150.000 lao động Palestine ở Bờ Tây và giữ lại tiền thuế thu hộ đã đẩy Bờ Tây vào cuộc suy thoái tài khóa trầm trọng nhất lịch sử.",
    "note_en": "Lacking a sovereign currency (relying on the Israeli shekel, Jordanian dinar, and US dollar), the Palestinian economy depends under the 1994 Paris Protocol on Israel to collect and transfer import clearance revenues that make up ~65% of Palestinian Authority budget income. Since October 2023, war has virtually obliterated Gaza's economy (>80% GDP contraction), while Israel's revocation of work permits for over 150,000 West Bank laborers and periodic withholding of tax transfers have plunged the West Bank into its deepest fiscal and economic crisis in decades."
  },
  "Ireland": {
    "tier": "adv",
    "gdp_vi": "~609 tỷ USD (#24 thế giới)",
    "gdp_en": "~$609B (#24 globally)",
    "pc_vi": "~112.900 USD (PPP ~140.780 USD)",
    "pc_en": "~$112,900 (PPP ~$140,780)",
    "gr": "+2.6%",
    "sec": [
      64,
      35,
      1
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Pfizer, Eli Lilly), trụ sở công nghệ châu Âu (Apple, Google, Meta, Microsoft), cho thuê máy bay (>50% đội bay thế giới), thực phẩm & bơ sữa",
    "main_en": "Biopharmaceuticals & medical devices (Pfizer, Eli Lilly), European Big Tech headquarters (Apple, Google, Meta, Microsoft), aircraft leasing (>50% global share), dairy & agri-food",
    "note_vi": "Kinh tế Ireland là trung tâm đặt trụ sở châu Âu của hơn 1.000 tập đoàn đa quốc gia hàng đầu thế giới (chủ yếu từ Mỹ): từ công nghệ (Apple, Google, Meta, Microsoft), dược phẩm – công nghệ sinh học (Pfizer, Eli Lilly — nơi sản xuất nguyên liệu thuốc giảm cân/tiểu đường bom tấn và Botox toàn cầu), thiết bị y tế đến ngành cho thuê máy bay thương mại (chiếm hơn 50% đội bay cho thuê trên toàn thế giới). Do việc các tập đoàn đa quốc gia hạch toán tài sản sở hữu trí tuệ tại Ireland làm tổng GDP danh nghĩa (~609 tỷ USD, tương đương >112.000 USD/người) bị phóng đại so với thực tế tiêu dùng nội địa (các nhà kinh tế phải dùng chỉ số GNI* chỉ bằng ~55% GDP để đo quy mô thực), nguồn thu thuế doanh nghiệp khổng lồ (~28–39 tỷ Euro/năm cộng thêm 14 tỷ Euro tiền truy thu thuế từ Apple năm 2024) đã giúp chính phủ Ireland lập hai quỹ đầu tư quốc gia dài hạn trị giá 100 tỷ Euro vào năm 2024–2025 để đầu tư hạ tầng và nhà ở.",
    "note_en": "Serving as the European headquarters for over 1,000 global multinationals—spanning Big Tech (Apple, Google, Meta, Microsoft), blockbuster biopharmaceuticals and medical devices (Pfizer, Eli Lilly, AbbVie), and commercial aircraft leasing (>50% of the global leased fleet)—Ireland generates some of the highest headline GDP per capita figures on Earth (~$112,000), though economists use Modified GNI (GNI*, ~55% of GDP) to strip out multinational intellectual-property distortions. Fueled by surging corporate tax receipts (~€28–39B annually plus a €14B Apple back-tax transfer in 2024), Dublin launched two new sovereign wealth and infrastructure funds in 2024 targeting €100 billion in assets by 2035 to cushion against heavy tax concentration in a handful of US firms and address chronic housing and power-grid bottlenecks."
  },
  "Iraq": {
    "tier": "emg",
    "gdp_vi": "~280 tỷ USD (#50 thế giới)",
    "gdp_en": "~$280B (#50 globally)",
    "pc_vi": "~6.070 USD (PPP ~14.490 USD)",
    "pc_en": "~$6,070 (PPP ~$14,490)",
    "gr": "-1.5%",
    "sec": [
      45,
      51,
      4
    ],
    "main_vi": "Khai thác và xuất khẩu dầu thô (#2 trong OPEC, trữ lượng #5 thế giới), lọc dầu, phân bón, nông nghiệp lưu vực Lưỡng Hà (chà là, lúa mì)",
    "main_en": "Crude oil production & exports (#2 in OPEC, #5 global reserves), oil refining, fertilizers, Mesopotamian agriculture (dates, wheat)",
    "note_vi": "Là nhà sản xuất dầu thô lớn thứ 2 trong khối OPEC (khoảng 4–4,5 triệu thùng/ngày), Iraq có nền kinh tế phụ thuộc dầu mỏ bậc nhất thế giới khi vàng đen đóng góp hơn 92% nguồn thu ngân sách nhà nước và 98% kim ngạch xuất khẩu. Giai đoạn 2025–2026, Baghdad đẩy mạnh các hợp đồng thu hồi khí đồng hành với TotalEnergies và tập đoàn Trung Quốc nhằm giảm nhập khẩu điện – khí từ Iran, đồng thời đầu tư tuyến đường sắt và cao tốc \"Con đường Phát triển\" nối vịnh Ba Tư với châu Âu.",
    "note_en": "As OPEC's second-largest crude producer (~4.0–4.5 million barrels/day), Iraq runs one of the most oil-reliant economies on Earth, with hydrocarbons providing over 92% of state budget revenues and 98% of export earnings. To overcome chronic power blackouts and bloated public-sector payrolls, Baghdad is investing in gas-capture megaprojects with TotalEnergies and Chinese firms while advancing the $17B Development Road corridor linking the Gulf to Turkey."
  },
  "Iran": {
    "tier": "emg",
    "gdp_vi": "~475 tỷ USD (#33 thế giới, ~1.700 tỷ USD PPP)",
    "gdp_en": "~$475B (#33 globally, ~$1.70T PPP)",
    "pc_vi": "~5.190 USD (PPP ~19.900 USD)",
    "pc_en": "~$5,190 (PPP ~$19,900)",
    "gr": "+3.7%",
    "sec": [
      52,
      37,
      11
    ],
    "main_vi": "Dầu mỏ & khí đốt (trữ lượng khí #2, dầu #4 thế giới), hóa dầu, luyện thép, ô tô nội địa, công nghiệp quốc phòng (UAV/tên lửa), nghệ tây & hạt dẻ cười",
    "main_en": "Oil & gas (#2 gas, #4 oil reserves globally), petrochemicals, steel & metallurgy, domestic automotive, defense manufacturing, saffron & pistachios",
    "note_vi": "Sở hữu trữ lượng khí đốt tự nhiên lớn thứ 2 và dầu mỏ lớn thứ 4 thế giới, Iran đã xây dựng được nền công nghiệp chế tạo (thép, hóa dầu, ô tô, UAV/tên lửa) và khoa học kỹ thuật tự chủ sâu rộng sau hơn 40 năm chịu cấm vận của Mỹ. Tuy nhiên, việc bị ngắt khỏi hệ thống thanh toán SWIFT khiến Tehran phải bán hơn 90% dầu xuất khẩu cho các nhà máy lọc dầu tư nhân Trung Quốc với giá chiết khấu, trong khi đồng Rial mất giá kỷ lục và lạm phát neo ở mức 35–45%/năm.",
    "note_en": "Holding the world's second-largest natural gas reserves and fourth-largest oil reserves, Iran has built a remarkably diversified domestic industrial base—spanning petrochemicals, steel, autos, and drone/missile manufacturing—under decades of US sanctions. Cut off from Western finance, Tehran relies on selling over 90% of its crude exports at a discount to Chinese \"teapot\" refineries while grappling with chronic 35–45% inflation, currency depreciation, and aging energy grids."
  },
  "Indonesia": {
    "tier": "emg",
    "gdp_vi": "~1.396 tỷ USD (#16 thế giới, #1 Đông Nam Á)",
    "gdp_en": "~$1.40T (#16 globally, #1 in ASEAN)",
    "pc_vi": "~4.920 USD (PPP ~16.470 USD)",
    "pc_en": "~$4,920 (PPP ~$16,470)",
    "gr": "+5.0%",
    "sec": [
      46,
      41,
      13
    ],
    "main_vi": "Niken & chuỗi cung ứng pin xe điện (nắm >50% nguồn cung niken thế giới), than đá, dầu cọ (#1 toàn cầu), khí LNG, chế biến thực phẩm, dệt may",
    "main_en": "Nickel & EV battery processing (>50% global nickel supply), thermal coal, palm oil (#1 globally), LNG, food processing, textiles",
    "note_vi": "Là nền kinh tế lớn nhất Đông Nam Á (~1.400 tỷ USD), Indonesia thực thi chính sách 'hạ nguồn hóa tài nguyên' (cấm xuất khẩu quặng niken, bauxite thô) để thu hút hàng chục tỷ USD xây nhà máy luyện kim và pin xe điện trong nước. Quốc gia này hiện chiếm hơn 50% nguồn cung niken toàn cầu và đứng số một thế giới về xuất khẩu dầu cọ, than nhiệt điện. Điểm nghẽn chính là chi phí logistics liên đảo cao và nhu cầu tạo việc làm công nghiệp cho giới trẻ.",
    "note_en": "Southeast Asia's largest economy (~$1.4T) has executed a 'resource downstreaming' strategy, banning raw nickel and bauxite exports to draw billions into domestic smelting and EV battery plants. Indonesia now supplies over 50% of global nickel output while remaining the world's top exporter of palm oil and thermal coal. Key structural priorities include cutting inter-island shipping costs, expanding high-skill manufacturing jobs, and funding the Nusantara capital transition."
  },
  "India": {
    "tier": "dev",
    "gdp_vi": "~3.761 tỷ USD (#5 thế giới, #3 PPP)",
    "gdp_en": "~$3.76T (#5 globally, #3 PPP)",
    "pc_vi": "~2.590 USD (PPP ~10.720 USD)",
    "pc_en": "~$2,590 (PPP ~$10,720)",
    "gr": "+7.1%",
    "sec": [
      53,
      28,
      19
    ],
    "main_vi": "Dịch vụ CNTT & phần mềm (Bangalore, Hyderabad), dược phẩm generic (#1 thế giới), lọc hóa dầu, lắp ráp điện tử (iPhone), hóa chất, nông sản",
    "main_en": "IT services & software outsourcing, generic pharmaceuticals (#1 globally), oil refining, electronics assembly, chemicals, agriculture",
    "note_vi": "Tăng trưởng ~6,5–7%/năm, Ấn Độ là nền kinh tế lớn tăng trưởng nhanh nhất thế giới (~3.761 tỷ USD, #5 toàn cầu), dẫn dắt bởi xuất khẩu dịch vụ phần mềm CNTT, trung tâm R&D toàn cầu (Bangalore, Hyderabad), dược phẩm generic, lọc dầu và hạ tầng thanh toán số UPI. Chương trình 'Make in India' bước đầu thu hút lắp ráp điện thoại (Apple lắp ráp >14% iPhone tại Ấn Độ) và khởi động một số dự án đóng gói bán dẫn, nhưng công nghiệp chế tạo mới chỉ chiếm ~15–17% GDP. Điểm nghẽn lớn nhất là hơn 40% lao động vẫn kẹt trong nông nghiệp năng suất thấp và thiếu việc làm công nghiệp cho hàng trăm triệu thanh niên.",
    "note_en": "Growing at ~6.5–7% annually, India is the world's fastest-growing major economy (~$3.76T, #5 globally), propelled by IT software exports, generic pharmaceuticals, oil refining, and its UPI digital public infrastructure. While 'Make in India' incentives have expanded smartphone assembly (>14% of global iPhones), manufacturing still accounts for only ~15–17% of GDP. Key structural challenges include over 40% of workers remaining in low-yield farming and the urgent need to create formal industrial jobs."
  },
  "Iceland": {
    "tier": "adv",
    "gdp_vi": "~33 tỷ USD (#108 thế giới)",
    "gdp_en": "~$33B (#108 globally)",
    "pc_vi": "~85.860 USD (PPP ~83.560 USD)",
    "pc_en": "~$85,860 (PPP ~$83,560)",
    "gr": "-1.3%",
    "sec": [
      73,
      23,
      4
    ],
    "main_vi": "Du lịch sinh thái – địa nhiệt, đánh bắt & chế biến thủy sản công nghệ cao, luyện nhôm xuất khẩu (dùng 100% điện tái tạo), trung tâm dữ liệu, công nghệ sinh học",
    "main_en": "Nature & geothermal tourism, high-tech marine fisheries & processing, green aluminum smelting, data centers, biotechnology",
    "note_vi": "Sau khi tái cơ cấu ngoạn mục từ cuộc khủng hoảng ngân hàng năm 2008, kinh tế Iceland phát triển dựa trên 'ba trụ cột' vững chắc: ngư nghiệp công nghệ cao (tận dụng 100% phụ phẩm cá từ thực phẩm đến collagen y sinh như Kerecis), du lịch địa nhiệt – thiên nhiên đón hơn 2,2 triệu khách/năm và công nghiệp tiêu thụ nhiều điện năng. Nhờ giá điện thủy điện và địa nhiệt rẻ và xanh 100%, hòn đảo 390.000 dân này đã trở thành trung tâm luyện nhôm xuất khẩu lớn sang EU và điểm đặt các trung tâm dữ liệu AI bền vững.",
    "note_en": "Having fully reinvented itself after the 2008 banking collapse, Iceland's economy thrives on three pillars: high-tech fisheries (achieving nearly 100% full-fish utilization including biotech skin grafts by Kerecis), nature tourism (>2.2 million annual visitors, nearly six times the population), and power-intensive industry. Because its 100% hydro-and-geothermal grid delivers cheap, zero-carbon electricity, Iceland hosts major aluminum smelters supplying Europe alongside green AI data centers."
  },
  "Hungary": {
    "tier": "adv",
    "gdp_vi": "~223 tỷ USD (#55 thế giới)",
    "gdp_en": "~$223B (#55 globally)",
    "pc_vi": "~23.300 USD (PPP ~48.540 USD)",
    "pc_en": "~$23,300 (PPP ~$48,540)",
    "gr": "+0.7%",
    "sec": [
      69,
      28,
      3
    ],
    "main_vi": "Sản xuất ô tô (Audi, Mercedes, BMW, BYD) & pin xe điện (CATL, Samsung SDI), điện tử, dược phẩm (Gedeon Richter), nông sản thực phẩm",
    "main_en": "Automotive manufacturing (Audi, Mercedes, BMW, BYD) & EV batteries (CATL, Samsung SDI), electronics, pharmaceuticals (Gedeon Richter), agri-food",
    "note_vi": "Hungary định vị mình là 'điểm gặp gỡ công nghiệp Đông – Tây' của châu Âu: một mặt là cứ điểm sản xuất lớn của bộ ba hãng xe sang Đức (nhà máy động cơ lớn nhất thế giới của Audi tại Győr, nhà máy Mercedes tại Kecskemét và nhà máy xe điện BMW tại Debrecen), mặt khác thu hút dòng vốn FDI khổng lồ từ châu Á với siêu nhà máy pin CATL (7,3 tỷ Euro tại Debrecen), Samsung SDI và nhà máy lắp ráp ô tô điện đầu tiên của BYD tại châu Âu (đặt tại Szeged). Tuy vậy, nền kinh tế vẫn chịu áp lực từ lạm phát đồng Forint và việc bị EU đóng băng một phần quỹ ngân sách do tranh cãi pháp quyền.",
    "note_en": "Hungary has positioned itself as Europe's industrial East–West meeting point: hosting flagship German luxury auto plants (Audi's world-largest engine factory in Győr, Mercedes-Benz in Kecskemét, and BMW's neue-klasse EV plant in Debrecen) right alongside massive Asian gigafactories—including CATL's €7.3 billion battery plant in Debrecen, Samsung SDI, and Chinese automaker BYD's first European passenger EV assembly plant in Szeged. However, high public deficits, Forint volatility, and frozen EU cohesion funds remain key economic headwinds."
  },
  "Honduras": {
    "tier": "dev",
    "gdp_vi": "~37 tỷ USD (#105 thế giới)",
    "gdp_en": "~$37B (#105 globally)",
    "pc_vi": "~3.420 USD (PPP ~7.500 USD)",
    "pc_en": "~$3,420 (PPP ~$7,500)",
    "gr": "+3.6%",
    "sec": [
      61,
      27,
      12
    ],
    "main_vi": "Dệt may gia công xuất khẩu (maquiladora tại San Pedro Sula), cà phê (nhà xuất khẩu hàng đầu Trung Mỹ), chuối & dầu cọ, nuôi tôm, kiều hối từ Mỹ",
    "main_en": "Apparel & wiring harness assembly (maquiladoras in San Pedro Sula), coffee (top Central American exporter), bananas & palm oil, shrimp, US remittances",
    "note_vi": "Nền kinh tế Honduras vận hành dựa trên hai động mạch chính gắn chặt với Hoa Kỳ: dòng kiều hối từ hơn 1,8 triệu người Honduras ở nước ngoài gửi về (đạt gần 10 tỷ USD/năm, tương đương hơn 25% GDP) và cụm công nghiệp gia công dệt may – bộ dây điện ô tô (maquiladora) tại vùng San Pedro Sula xuất khẩu qua cảng Puerto Cortés. Bên cạnh đó, Honduras là nhà xuất khẩu cà phê lớn nhất Trung Mỹ (đứng thứ 5–7 thế giới) cùng các mặt hàng chuối, dầu cọ và tôm nuôi. Tuy nhiên, việc cắt đứt quan hệ với Đài Loan năm 2023 khiến xuất khẩu tôm trắng sụt giảm mạnh trong khi đàm phán thương mại với Trung Quốc tiến triển chậm, cộng thêm tình trạng thất thoát điện năng và tống tiền của băng đảng vẫn kìm hãm đầu tư tư nhân.",
    "note_en": "The Honduran economy runs on two lifelines tied to the United States: diaspora remittances approaching $10 billion annually (exceeding 25% of GDP) and the northern Sula Valley maquiladora cluster, which ranks as a top supplier of knit apparel and automotive wiring harnesses to the US market via Puerto Cortés. In agriculture, Honduras is Central America's largest coffee exporter (ranking 5th–7th globally) alongside major shipments of bananas, palm oil, and farmed shrimp. However, the 2023 diplomatic break with Taiwan triggered a sharp drop in Pacific white-shrimp exports, while chronic state power-utility losses, gang extortion, and hurricane vulnerability continue to weigh on private investment."
  },
  "Haiti": {
    "tier": "dev",
    "gdp_vi": "~24,3 tỷ USD (#121 thế giới)",
    "gdp_en": "~$24.3B (#121 globally)",
    "pc_vi": "~2.060 USD (PPP ~3.170 USD)",
    "pc_en": "~$2,060 (PPP ~$3,170)",
    "gr": "-4.2%",
    "sec": [
      54,
      29,
      17
    ],
    "main_vi": "Kiều hối từ hải ngoại (>20% GDP), gia công hàng may mặc xuất khẩu sang Mỹ (đạo luật HOPE/HELP), nông nghiệp tự cung tự cấp (xoài, cà phê, tinh dầu cỏ hương bài)",
    "main_en": "Diaspora remittances (>20% of GDP), apparel assembly for the US market (HOPE/HELP trade preference), subsistence agriculture (mangoes, coffee, vetiver oil)",
    "note_vi": "Là quốc gia nghèo nhất Tây Bán cầu với GDP bình quân đầu người danh nghĩa chỉ còn khoảng 1.700–2.000 USD, nền kinh tế Haiti đã rơi vào vòng xoáy suy thoái (tăng trưởng âm) suốt 6 năm liên tiếp từ 2019 đến 2024 do bạo lực băng đảng làm tê liệt giao thương. Nguồn sống duy nhất giữ cho hàng triệu gia đình không rơi vào nạn đói hoàn toàn là dòng kiều hối từ cộng đồng người Haiti tại Mỹ, Pháp, Canada và Cộng hòa Dominica (đạt khoảng 3,8–4,5 tỷ USD/năm, tương đương hơn 20% GDP). Ngành công nghiệp xuất khẩu chính là may mặc gia công (chiếm 90% kim ngạch xuất khẩu hàng hóa, hưởng ưu đãi miễn thuế vào thị trường Mỹ theo đạo luật HOPE/HELP tại các khu công nghiệp như Caracol ở miền bắc) cùng tinh dầu cỏ hương bài (vetiver) dùng làm nước hoa Pháp, nhưng hàng chục nhà máy may tại Port-au-Prince đã phải đóng cửa vì mất an ninh.",
    "note_en": "As the poorest nation in the Western Hemisphere, Haiti has suffered six consecutive years of economic contraction (2019–2024) as gang warfare, fuel blockades, and hyperinflation crippled urban commerce. Diaspora remittances of roughly $3.8–4.5 billion per year (exceeding 20% of GDP) serve as the primary economic lifeline preventing total humanitarian collapse for millions of households. Outside subsistence farming and exports of prized vetiver essential oil for luxury perfumes, formal industry centers on duty-free apparel assembly for the US market under the HOPE/HELP trade preference acts—increasingly concentrated in the safer northern Caracol Industrial Park after gang violence forced factory closures in Port-au-Prince."
  },
  "Guyana": {
    "tier": "adv",
    "gdp_vi": "~24,7 tỷ USD (#120 thế giới)",
    "gdp_en": "~$24.7B (#120 globally)",
    "pc_vi": "~29.680 USD (PPP ~80.270 USD)",
    "pc_en": "~$29,680 (PPP ~$80,270)",
    "gr": "+43.8%",
    "sec": [
      15,
      77,
      8
    ],
    "main_vi": "Khai thác dầu khí ngoài khơi (lô Stabroek – ExxonMobil), khai thác vàng & bauxite, gạo & đường mía, lâm nghiệp bền vững",
    "main_en": "Offshore oil & gas extraction (Stabroek block led by ExxonMobil), gold & bauxite mining, rice & sugar, sustainable forestry",
    "note_vi": "Là hiện tượng kinh tế độc nhất vô nhị của thế kỷ 21 khi tốc độ tăng trưởng GDP thực tế liên tục đạt 30–60%/năm từ 2020 đến 2025, đưa GDP bình quân đầu người theo sức mua tương đương (PPP) vượt ngưỡng 60.000 USD — cao nhất toàn bộ khu vực Mỹ Latinh và vùng Caribbean. Nguồn thu hàng tỷ USD từ Quỹ Tài nguyên Thiên nhiên (NRF) đang được đổ vào xây dựng đường sá, cầu vượt sông Demerara, nhà máy điện chạy khí tự nhiên (giúp giảm một nửa giá điện) và bệnh viện, nhưng Guyana cũng phải hết sức cảnh giác trước \"căn bệnh Hà Lan\" làm suy yếu ngành nông nghiệp lúa gạo – mía đường truyền thống.",
    "note_en": "Stands as the 21st century's most dramatic macroeconomic boom story, posting 30–60% annual real GDP growth between 2020 and 2025 and lifting PPP per-capita GDP past $60,000—now the highest in Latin America and the Caribbean. Billions of dollars flowing into Guyana's Natural Resource Fund (NRF) are financing transformative infrastructure—including the Wales gas-to-energy power plant to halve electricity costs, a new Demerara River bridge, and a paved road to Brazil—while policymakers work to prevent \"Dutch disease\" from crowding out rice, sugar, and gold mining."
  },
  "Guinea-Bissau": {
    "tier": "low",
    "gdp_vi": "~2,2 tỷ USD (#180 thế giới)",
    "gdp_en": "~$2.2B (#180 globally)",
    "pc_vi": "~1.000 USD (PPP ~3.090 USD)",
    "pc_en": "~$1,000 (PPP ~$3,090)",
    "gr": "+4.4%",
    "sec": [
      40,
      17,
      43
    ],
    "main_vi": "Hạt điều thô xuất khẩu (chiếm ~90% kim ngạch xuất khẩu), đánh bắt cá (cấp phép tàu nước ngoài), gỗ, khai thác bauxite & phốt phát tiềm năng",
    "main_en": "Raw cashew nut exports (~90% of export earnings), marine fisheries licensing, timber, prospective bauxite & phosphate mining",
    "note_vi": "Guinea-Bissau là một trong những nền kinh tế phụ thuộc độc canh khắc nghiệt nhất hành tinh khi hạt điều thô chiếm tới ~90% tổng kim ngạch xuất khẩu hàng hóa và nuôi sống hơn 4/5 số hộ gia đình nông thôn (xuất chủ yếu sang Ấn Độ và Việt Nam để chế biến). Dù việc sử dụng đồng Franc CFA Tây Phi (neo vào Euro) giúp giữ ổn định tiền tệ và đất nước có tiềm năng lớn về bauxit, phốt phát cùng dầu khí ngoài khơi, bất ổn chính trị triền miên và thiếu nhà máy chế biến nông sản tại chỗ khiến giá trị gia tăng giữ lại trong nước rất thấp.",
    "note_en": "Guinea-Bissau operates one of the world's most extreme monocrop economies, with raw cashew nuts generating roughly 90% of merchandise export earnings—shipped almost entirely to India and Vietnam for shelling—and supporting over 80% of rural households. While membership in the Euro-pegged West African CFA franc zone provides monetary stability and untapped bauxite, phosphate, and offshore oil deposits offer long-term potential, chronic political turmoil and the lack of domestic processing facilities keep per-capita income among the lowest in West Africa."
  },
  "Guinea": {
    "tier": "dev",
    "gdp_vi": "~25,0 tỷ USD (#119 thế giới)",
    "gdp_en": "~$25.0B (#119 globally)",
    "pc_vi": "~1.700 USD (PPP ~4.570 USD)",
    "pc_en": "~$1,700 (PPP ~$4,570)",
    "gr": "+5.4%",
    "sec": [
      39,
      27,
      34
    ],
    "main_vi": "Khai thác bauxite (#1 xuất khẩu thế giới, cung cấp chính cho Trung Quốc), dự án siêu mỏ quặng sắt Simandou, khai thác vàng & kim cương, thủy điện",
    "main_en": "Bauxite mining (#1 global exporter, primary supplier to China), Simandou high-grade iron ore megaproject, gold & diamond mining, hydropower",
    "note_vi": "Sở hữu khoảng 25% tổng trữ lượng bauxit toàn cầu cùng mỏ quặng sắt lộ thiên chưa khai thác lớn nhất và hàm lượng cao nhất thế giới tại dãy Simandou, ngành khai khoáng đóng góp hơn 85% kim ngạch xuất khẩu của Guinea. Khi tuyến đường sắt xuyên Guinea dài 650 km và mỏ sắt Simandou chính thức vận hành thương mại từ giai đoạn 2025–2026 (bên cạnh các nhà máy luyện alumina mới đang được yêu cầu xây dựng ngay trong nước), quy mô GDP của Guinea được IMF dự báo có thể tăng gấp đôi trong thập kỷ tới, dù rủi ro chính trị và thiếu hụt hạ tầng nông thôn vẫn còn hiện hữu.",
    "note_en": "Holding roughly a quarter of the planet's bauxite reserves alongside the world's largest untapped high-grade iron-ore deposit at Simandou, Guinea relies on mining for over 85% of its export earnings. As the $20+ billion Simandou mine and 650-km trans-Guinean railway come online in 2025–2026—paired with government mandates for domestic alumina refineries—Guinea is projected to see a transformative surge in GDP and fiscal revenue, though political transition risks and rural poverty remain acute challenges."
  },
  "Guatemala": {
    "tier": "emg",
    "gdp_vi": "~113 tỷ USD (#69 thế giới)",
    "gdp_en": "~$113B (#69 globally)",
    "pc_vi": "~6.150 USD (PPP ~14.390 USD)",
    "pc_en": "~$6,150 (PPP ~$14,390)",
    "gr": "+3.7%",
    "sec": [
      66,
      23,
      11
    ],
    "main_vi": "Kiều hối (~20% GDP), cà phê chất lượng cao, chuối, đường mía, bạch đậu khấu (#1 xuất khẩu thế giới), dệt may & sản xuất nhẹ",
    "main_en": "Remittances (~20% of GDP), specialty coffee, bananas, sugar, cardamom (#1 global exporter), apparel & light manufacturing",
    "note_vi": "Là nền kinh tế lớn nhất Trung Mỹ với GDP danh nghĩa vượt 123 tỷ USD, Guatemala nổi tiếng với truyền thống quản lý tiền tệ và tài khóa cực kỳ thận trọng, giúp đồng Quetzal giữ giá ổn định suốt nhiều thập kỷ và tỷ lệ nợ công chỉ ở mức rất thấp (~27% GDP). Động lực tăng trưởng đến từ dòng kiều hối khổng lồ từ cộng đồng người Guatemala tại Mỹ (đóng góp gần 20% GDP, tương đương hơn 21 tỷ USD/năm), ngành dệt may xuất khẩu và vị thế cường quốc nông sản nhiệt đới (xuất khẩu bạch đậu khấu số 1 thế giới, cà phê đặc sản, chuối, đường mía và dầu cọ). Tuy nhiên, tỷ lệ thu thuế trên GDP chỉ đạt khoảng 11–12% đã hạn chế nghiêm trọng nguồn vốn đầu tư công cho giáo dục, y tế nông thôn và nâng cấp cảng biển.",
    "note_en": "As Central America's largest economy with a nominal GDP exceeding $123 billion, Guatemala is renowned for decades of conservative monetary and fiscal management that have kept its currency (the quetzal) remarkably stable and public debt below 30% of GDP. Growth is propelled by record diaspora remittances from the United States—exceeding $21 billion annually, or nearly 20% of GDP—alongside light apparel manufacturing and powerhouse agro-exports including world-leading cardamom, specialty coffee, bananas, sugar, and palm oil. However, a chronically low tax-to-GDP ratio of roughly 11–12% starves public investment in highways, ports, and rural indigenous human capital."
  },
  "Grenada": {
    "tier": "emg",
    "gdp_vi": "~1,4 tỷ USD (#187 thế giới)",
    "gdp_en": "~$1.4B (#187 globally)",
    "pc_vi": "~11.530 USD (PPP ~19.900 USD)",
    "pc_en": "~$11,530 (PPP ~$19,900)",
    "gr": "+2.4%",
    "sec": [
      79,
      18,
      3
    ],
    "main_vi": "Du lịch nghỉ dưỡng & du thuyền, giáo dục đại học quốc tế (Đại học Y St. George's đóng góp ~20% GDP), nhục đậu khấu & ca cao ('Đảo Gia vị'), đầu tư nhập tịch (CBI)",
    "main_en": "Yachting & resort tourism, international medical education (St. George's University ~20% of GDP), nutmeg & fine cocoa ('Isle of Spice'), Citizenship by Investment (CBI)",
    "note_vi": "Là thành viên của Liên minh Tiền tệ Đông Caribbean (dùng đồng XCD neo giá 2,7:1 vào USD), nền kinh tế Grenada sở hữu một động cơ tăng trưởng độc nhất vô nhị mà không đảo quốc láng giềng nào có được: Trường Đại học St. George's (SGU) tại bán đảo True Blue với hơn 6.000–7.000 sinh viên và giảng viên quốc tế (chủ yếu là sinh viên y khoa và thú y từ Mỹ, Canada) đóng góp trực tiếp và gián tiếp khoảng 20% GDP của cả nước. Song hành với dịch vụ giáo dục đại học là ngành du lịch nghỉ dưỡng – lặn biển (nổi tiếng với Công viên Điêu khắc Dưới nước đầu tiên trên thế giới), nguồn thu từ chương trình Đầu tư lấy Quốc tịch (CBI) và xuất khẩu nhục đậu khấu, ca cao hữu cơ thượng hạng. Năm 2024, sau siêu bão Beryl, Grenada trở thành quốc gia đầu tiên trên thế giới kích hoạt thành công \"điều khoản bão\" trong trái phiếu chính phủ để hoãn trả nợ gốc và lãi 30 triệu USD dành tiền cho tái thiết.",
    "note_en": "Within the Eastern Caribbean Currency Union (2.70 XCD to 1 USD), Grenada's economy features a unique anchor unmatched by neighboring islands: St. George's University (SGU), whose accredited medical and veterinary schools host over 6,000 mostly North American students and faculty on island, generating roughly 20% of national GDP. This year-round educational demand complements yachting and dive tourism (famed for the world's first Underwater Sculpture Park), Citizenship-by-Investment (CBI) inflows, and specialty exports of nutmeg, mace, and fine-flavor cocoa. Following Hurricane Beryl in July 2024, Grenada made financial history as the first country in the world to trigger a sovereign bond 'hurricane clause,' deferring $30 million in debt payments to fund immediate disaster recovery."
  },
  "Greece": {
    "tier": "adv",
    "gdp_vi": "~256 tỷ USD (#53 thế giới)",
    "gdp_en": "~$256B (#53 globally)",
    "pc_vi": "~24.630 USD (PPP ~44.170 USD)",
    "pc_en": "~$24,630 (PPP ~$44,170)",
    "gr": "+2.1%",
    "sec": [
      78,
      17,
      5
    ],
    "main_vi": "Vận tải biển quốc tế (chủ tàu Hy Lạp nắm ~20% trọng tải đội tàu thế giới), du lịch biển đảo (~35 triệu khách/năm), lọc dầu, dược phẩm, dầu ô liu & nông sản",
    "main_en": "Global maritime shipping (Greek shipowners control ~20% of world deadweight tonnage), island & heritage tourism (~35M visitors/yr), oil refining, pharmaceuticals, olive oil & agri-food",
    "note_vi": "Sau cuộc khủng hoảng nợ công thập niên 2010, Hy Lạp đã lấy lại xếp hạng tín nhiệm đầu tư vào năm 2023–2024, đạt mức tăng trưởng gấp đôi trung bình Eurozone và thặng dư ngân sách cơ bản vững chắc. Nền kinh tế được dẫn dắt bởi đội tàu buôn số 1 thế giới, số hóa hành chính công, xuất khẩu dược phẩm – nông sản và hơn 35 triệu du khách quốc tế mỗi năm. Các trạm LNG tại Alexandroupoli và cáp điện biển đang biến nước này thành cửa ngõ năng lượng Đông Nam Âu dù già hóa dân số vẫn là thách thức dài hạn.",
    "note_en": "Following the sovereign debt crisis of the 2010s, Greece has staged a remarkable turnaround, regaining investment-grade credit ratings in 2023–2024 while posting GDP growth double the Eurozone average and robust primary budget surpluses. Growth is powered by its world-leading merchant shipping fleet, state digitization, pharmaceutical and agri-food exports, and record tourism exceeding 35 million visitors annually. With LNG terminals at Alexandroupoli and regional power interconnectors, Greece is becoming Southeastern Europe's energy gateway despite demographic aging."
  },
  "Ghana": {
    "tier": "dev",
    "gdp_vi": "~83 tỷ USD (#80 thế giới)",
    "gdp_en": "~$83B (#80 globally)",
    "pc_vi": "~2.420 USD (PPP ~8.050 USD)",
    "pc_en": "~$2,420 (PPP ~$8,050)",
    "gr": "+5.8%",
    "sec": [
      47,
      31,
      22
    ],
    "main_vi": "Khai thác vàng (#1 châu Phi), ca cao (#2 thế giới sau Bờ Biển Ngà), dầu thô ngoài khơi (mỏ Jubilee), viễn thông & dịch vụ số, đặt trụ sở Ban thư ký AfCFTA",
    "main_en": "Gold mining (#1 producer in Africa), cocoa beans (#2 globally after Côte d'Ivoire), offshore crude oil (Jubilee field), telecom & digital services, host of AfCFTA Secretariat",
    "note_vi": "Là nhà sản xuất vàng lớn nhất châu Phi (~4 triệu ounce/năm) và đứng thứ 2 thế giới về xuất khẩu ca cao, Ghana còn thu hút các tập đoàn công nghệ toàn cầu (Google, Twitter/X từng đặt văn phòng khu vực) và giữ vai trò thủ phủ thương mại tự do châu Phi (AfCFTA). Sau khi hoàn tất đàm phán tái cơ cấu khoản nợ nước ngoài 13 tỷ USD vào năm 2024 theo khuôn khổ G20 và nhận gói hỗ trợ 3 tỷ USD từ IMF, nền kinh tế Ghana đang lấy lại đà tăng trưởng trên 4–5%/năm nhờ giá vàng và giá ca cao lập đỉnh kỷ lục thế giới, dù kiểm soát lạm phát đồng Cedi và cải cách ngành điện – ca cao vẫn là nhiệm vụ cấp bách.",
    "note_en": "As Africa's #1 gold producer (~4 million ounces annually) and the world's #2 cocoa exporter alongside offshore oil production and a vibrant tech/services sector in Accra, Ghana is one of West Africa's most diversified economies. Having completed a landmark $13 billion external debt restructuring in 2024 under an IMF $3 billion program, Ghana is benefiting from record-high global gold and cocoa prices in 2024–2026, though stabilizing the cedi currency, reforming state cocoa board COCOBOD, and curbing power-sector arrears remain key priorities."
  },
  "Germany": {
    "tier": "adv",
    "gdp_vi": "~4.686 tỷ USD (#3 thế giới, #1 EU)",
    "gdp_en": "~$4.69T (#3 globally, #1 in EU)",
    "pc_vi": "~56.100 USD (PPP ~73.960 USD)",
    "pc_en": "~$56,100 (PPP ~$73,960)",
    "gr": "-0.5%",
    "sec": [
      71,
      28,
      1
    ],
    "main_vi": "Ô tô & cơ khí chính xác (VW, BMW, Mercedes, Bosch), hóa chất – dược phẩm (BASF, Bayer), thiết bị điện công nghiệp & tự động hóa (Siemens), phần mềm doanh nghiệp (SAP), năng lượng tái tạo",
    "main_en": "Automotive & precision engineering (VW, BMW, Mercedes, Bosch), chemicals & pharmaceuticals (BASF, Bayer), industrial electrical & automation (Siemens), enterprise software (SAP), renewable energy",
    "note_vi": "Vượt qua Nhật Bản để trở thành nền kinh tế lớn thứ 3 thế giới theo GDP danh nghĩa (~4.686 tỷ USD) và số 1 Liên minh châu Âu, sức mạnh của Đức dựa trên các tập đoàn công nghiệp toàn cầu (Volkswagen, BMW, Mercedes, Siemens, BASF, SAP) cùng hàng nghìn doanh nghiệp vừa và nhỏ gia đình dẫn đầu các thị trường ngách thế giới (\"Mittelstand\"). Sau hai năm tăng trưởng âm nhẹ (2023–2024) do cú sốc mất khí đốt giá rẻ của Nga (buộc phải xây gấp các cảng LNG nổi và đóng cửa 3 nhà máy điện hạt nhân cuối cùng năm 2023), cạnh tranh gay gắt từ xe điện Trung Quốc và dân số già hóa, gói kích thích hạ tầng 500 tỷ Euro và miễn trừ chi tiêu quốc phòng khỏi \"phanh nợ công\" vào năm 2025 đang mở ra chu kỳ đầu tư công nghiệp – quốc phòng mới.",
    "note_en": "Now the world's third-largest economy by nominal GDP (~$4.69 trillion, ahead of Japan) and the undisputed industrial engine of the EU, Germany thrives on global titans (VW, Mercedes, BMW, Siemens, BASF, SAP) and thousands of export-focused \"Mittelstand\" niche manufacturers. After two years of mild contraction in 2023–2024 triggered by high post-Russian-gas energy costs, fierce Chinese EV competition, and workforce aging, Berlin's landmark 2025 constitutional debt-brake reform—creating a €500B infrastructure fund and uncapping defense spending (surging Rheinmetall and defense tech)—is set to reignite domestic investment in 2025–2026."
  },
  "Georgia": {
    "tier": "emg",
    "gdp_vi": "~34,2 tỷ USD (#107 thế giới)",
    "gdp_en": "~$34.2B (#107 globally)",
    "pc_vi": "~8.970 USD (PPP ~27.490 USD)",
    "pc_en": "~$8,970 (PPP ~$27,490)",
    "gr": "+9.7%",
    "sec": [
      71,
      22,
      7
    ],
    "main_vi": "Hành lang vận tải & đường ống quá cảnh (Baku–Tbilisi–Ceyhan), du lịch quốc tế, rượu vang & nước khoáng, quặng đồng, dịch vụ CNTT",
    "main_en": "Transit pipelines & Black Sea port logistics, international tourism, wine & mineral water, copper ore & ferroalloys, IT services",
    "note_vi": "Nhờ cải cách thể chế triệt để, thuế suất thấp và thủ tục hải quan minh bạch, Gruzia trở thành trung tâm dịch vụ, du lịch và logistics năng động nhất vùng Kavkaz. Kể từ năm 2022, lượng hàng hóa quá cảnh qua Hành lang Trung tâm, phí trung chuyển từ ba tuyến đường ống dầu khí biển Caspi (BTC, BTE) cùng làn sóng chuyên gia CNTT nhập cư đã thúc đẩy GDP tăng trưởng 7–9%/năm, dù bất ổn chính trị nội bộ đang đe dọa dòng vốn FDI phương Tây.",
    "note_en": "Deep deregulation, low flat taxes, and streamlined customs have transformed Georgia into the premier logistics, tourism, and services hub of the Caucasus. Surging freight volumes along the Trans-Caspian Middle Corridor, transit fees from major Caspian oil and gas pipelines (BTC and South Caucasus Pipeline), and post-2022 financial inflows have propelled 7–9% annual GDP growth, though recent political tensions with the EU risk dampening Western FDI."
  },
  "Gambia": {
    "tier": "low",
    "gdp_vi": "~2,4 tỷ USD (#177 thế giới)",
    "gdp_en": "~$2.4B (#177 globally)",
    "pc_vi": "~870 USD (PPP ~3.480 USD)",
    "pc_en": "~$870 (PPP ~$3,480)",
    "gr": "+5.6%",
    "sec": [
      61,
      17,
      22
    ],
    "main_vi": "Kiều hối (~25% GDP), du lịch bờ biển Đại Tây Dương (khách châu Âu mùa đông), lạc (đậu phộng) xuất khẩu, thương mại tái xuất qua cảng Banjul",
    "main_en": "Diaspora remittances (~25% of GDP), Atlantic winter sun tourism, groundnut (peanut) exports, re-export transit trade via Banjul port",
    "note_vi": "Với quy mô dân số khoảng 2,8 triệu người và thiếu vắng tài nguyên khoáng sản, nền kinh tế Gambia dựa vào ba trụ cột chính: dòng kiều hối từ người lao động ở châu Âu – Mỹ (chiếm ~25% GDP), du lịch nghỉ dưỡng dọc 'Bờ biển Mỉm cười' Đại Tây Dương và canh tác lạc xuất khẩu. Hội nhập thương mại qua cầu Senegambia và đầu tư hạ tầng cảng Banjul đang hỗ trợ tăng trưởng đạt mức 5–6%/năm, nhưng gánh nặng nợ công cao, phụ thuộc vào nhập khẩu lương thực – xăng dầu và lạm phát đồng Dalasi vẫn là thách thức lớn.",
    "note_en": "Lacking mineral wealth and home to 2.8 million people, The Gambia's economy rests on three pillars: diaspora remittances (~25% of GDP), European winter sun tourism along its 'Smiling Coast' Atlantic beaches, and traditional groundnut farming and re-export trade via the Port of Banjul. While infrastructure upgrades and improved trade corridors with Senegal support 5–6% annual GDP growth, high public debt servicing, reliance on imported food and fuel, and currency depreciation pressure remain persistent bottlenecks."
  },
  "Gabon": {
    "tier": "emg",
    "gdp_vi": "~20,9 tỷ USD (#127 thế giới)",
    "gdp_en": "~$20.9B (#127 globally)",
    "pc_vi": "~8.230 USD (PPP ~21.540 USD)",
    "pc_en": "~$8,230 (PPP ~$21,540)",
    "gr": "+3.4%",
    "sec": [
      38,
      55,
      7
    ],
    "main_vi": "Khai thác dầu khí, quặng mangan (mỏ Moanda, #2 thế giới), khai thác & chế biến gỗ nhiệt đới bền vững (rừng phủ 88% diện tích), tín chỉ carbon",
    "main_en": "Oil & gas extraction, manganese ore (Moanda mine, #2 globally), sustainable tropical timber processing (88% forest cover), sovereign carbon credits",
    "note_vi": "Là thành viên OPEC có GDP bình quân đầu người theo sức mua tương đương vượt 21.000 USD, nền kinh tế Gabon dựa trên ba trụ cột: dầu khí ngoài khơi (~45% xuất khẩu), khai thác quặng mangan tại mỏ Moanda (do tập đoàn Eramet vận hành, đứng thứ 2 thế giới) và chế biến gỗ rừng nhiệt đới. Chính sách cấm xuất khẩu gỗ tròn thô từ năm 2010 kết hợp thành lập Khu kinh tế đặc biệt Nkok (GSEZ) đã biến Gabon thành nhà xuất khẩu ván lạng gỗ nhiệt đới số 1 châu Phi; tuy nhiên chính phủ mới vẫn phải giải quyết nghịch lý 'tăng trưởng không tạo việc làm' khi tỷ lệ thất nghiệp ở thanh niên còn lên tới trên 30%.",
    "note_en": "An OPEC member boasting a PPP per-capita GDP above $21,000, Gabon's economy rests on three pillars: offshore crude oil (~45% of exports), manganese mining at Moanda (the world's #2 producer via Eramet's Comilog), and sustainable forestry. A landmark 2010 ban on raw log exports and the creation of the Nkok Special Economic Zone (GSEZ) transformed Gabon into Africa's #1 exporter of processed veneer wood, while the post-2023 administration is accelerating the giant Belinga iron-ore mine and tackling stubborn >30% youth unemployment."
  },
  "France": {
    "tier": "adv",
    "gdp_vi": "~3.160 tỷ USD (#7 thế giới, #2 EU)",
    "gdp_en": "~$3.16T (#7 globally, #2 in EU)",
    "pc_vi": "~46.100 USD (PPP ~62.520 USD)",
    "pc_en": "~$46,100 (PPP ~$62,520)",
    "gr": "+1.2%",
    "sec": [
      79,
      19,
      2
    ],
    "main_vi": "Hàng xa xỉ & mỹ phẩm (LVMH, Hermès, L'Oréal), hàng không – vũ trụ & quốc phòng (Airbus, Safran, Dassault), điện hạt nhân (~70% sản lượng điện), dược phẩm (Sanofi), nông sản & rượu vang, du lịch (#1 thế giới)",
    "main_en": "Luxury goods & cosmetics (LVMH, Hermès, L'Oréal), aerospace & defense (Airbus, Safran, Dassault), nuclear energy (~70% of power grid), pharmaceuticals (Sanofi), agri-food & wine, tourism (#1 global destination)",
    "note_vi": "Là nền kinh tế lớn thứ 7 thế giới và lớn thứ 2 trong EU, Pháp sở hữu cấu trúc kinh tế cực kỳ cân bằng và tự chủ: dẫn đầu thế giới về đế chế hàng xa xỉ – mỹ phẩm (LVMH, Hermès, Chanel, L'Oréal), hàng không vũ trụ và quốc phòng (Airbus, Dassault Rafale, Safran — vươn lên thành nhà xuất khẩu vũ khí số 2 toàn cầu), cường quốc nông nghiệp số 1 EU, điểm đến du lịch số 1 hành tinh (~100 triệu du khách năm 2024) và trung tâm nghiên cứu AI hàng đầu châu Âu (Mistral AI). Đặc biệt, đội ngũ 56 lò phản ứng điện hạt nhân do tập đoàn quốc doanh EDF vận hành cung cấp ~70% sản lượng điện quốc gia với giá ổn định và phát thải thấp (giúp Pháp xuất khẩu ròng kỷ lục gần 90 TWh điện sang các nước láng giềng năm 2024), dù nợ công ở mức cao (~112% GDP) và thâm hụt ngân sách >5% GDP đang là bài toán tài khóa đau đầu nhất của Paris.",
    "note_en": "The world's seventh-largest economy and second-largest in the EU, France pairs global dominance in luxury goods and cosmetics (LVMH, Hermès, L'Oréal), commercial and military aerospace (Airbus, Dassault Rafale, Safran—now the world's #2 arms exporter), and European agribusiness with its status as the world's #1 tourism destination (~100 million visitors in 2024) and continental AI leader (Mistral AI). Crucially, EDF's fleet of 56 nuclear reactors generates ~70% of French electricity—propelling France to record net power exports of ~89 TWh to neighbors in 2024—though high public debt (~112% of GDP) and a fiscal deficit above 5% of GDP pose tough budgetary tests."
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
    "note_vi": "Sau lệnh cấm đánh bắt cá tuyết lịch sử năm 1992 ở Bắc Đại Tây Dương làm sụp đổ ngành ngư nghiệp truyền thống từng nuôi sống quần đảo suốt 4 thế kỷ, nền kinh tế của Saint-Pierre và Miquelon (GDP ~280 triệu USD, sử dụng đồng Euro) hiện dựa vào khoản chuyển giao ngân sách và chi tiêu hành chính – y tế – giáo dục hào phóng từ Chính phủ Pháp tại Paris. Về sản xuất tại chỗ, ngư dân trên đảo đã chuyển hướng sang đánh bắt và chế biến cua tuyết (snow crab), hải sâm, nuôi sò điệp kết hợp đón du khách Canada sang trải nghiệm ẩm thực Pháp và lễ hội văn hóa xứ Basque.",
    "note_en": "Following the 1992 North Atlantic cod moratorium that devastated the islands' four-century fishing mainstay, the euro-denominated economy of Saint-Pierre and Miquelon (~$280 million GDP) is heavily underwritten by fiscal transfers and public-sector salaries from metropolitan France. Locally, the private sector has pivoted toward harvesting high-value snow crab, sea cucumbers, and scallops alongside Francophone culinary and Basque cultural tourism drawing visitors via ferry and air from Atlantic Canada."
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
    "note_vi": "Nền kinh tế của Wallis và Futuna (GDP ~210 triệu USD, sử dụng đồng Franc CFP neo vào đồng Euro) mang tính chất phi thương mại hóa rất đặc trưng do chế độ sở hữu đất đai truyền thống thuộc về các gia tộc và 3 vị Vua bản địa. Khoảng 70–80% hoạt động kinh tế tiền tệ trên đảo đến từ chi tiêu ngân sách của Nhà nước Pháp (trả lương cho công chức, giáo viên, y tế, hạ tầng và phụ cấp cho các Vua/tù trưởng) cùng lượng kiều hối gửi về từ cộng đồng hơn 22.000 người dân đang làm việc tại New Caledonia, bên cạnh nông nghiệp tự cung tự cấp (trồng khoai sọ, củ từ, dừa, nuôi lợn phục vụ lễ hội truyền thống Katoaga).",
    "note_en": "Using the euro-pegged CFP franc, Wallis and Futuna's ~$210 million economy remains largely non-commercialized due to customary royal land tenure that prevents outside real-estate or resort development. Roughly 70–80% of monetized economic activity is generated directly by French state transfers—funding civil-service salaries, free education, healthcare, infrastructure, and royal stipends—supplemented by remittances from the 22,000-strong diaspora in New Caledonia and traditional subsistence farming of taro, yams, coconuts, and pigs raised for customary *Katoaga* feasts."
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
    "note_vi": "Nền kinh tế Saint-Martin dựa vào ngành du lịch nghỉ dưỡng biển phân khúc boutique (cấm xây khách sạn cao tầng và cấm mở sòng bạc casino để giữ bản sắc khác biệt với phần đảo Hà Lan), dịch vụ bến du thuyền tại Marigot / Anse Marcel, bất động sản nghỉ dưỡng và đặc biệt là thương hiệu \"Thủ phủ ẩm thực của vùng Caribbean\" tại làng Grand Case — nơi hội tụ các nhà hàng ẩm thực Pháp kết hợp hương vị Creole đỉnh cao. Là một phần của Liên minh châu Âu (EU), đồng tiền pháp định chính thức tại đây là đồng Euro (€), nhưng trong thực tế thương mại hàng ngày mọi nhà hàng, khách sạn và cửa hàng miễn thuế đều niêm yết và chấp nhận thanh toán song song bằng đồng USD. Điểm tựa lớn của hòn đảo là các khoản chuyển giao ngân sách an sinh xã hội, y tế, giáo dục từ Cộng hòa Pháp và quỹ phát triển vùng của EU, dù du khách quốc tế bay đường dài phải hạ cánh tại sân bay Princess Juliana bên phía Hà Lan rồi đi ô tô sang.",
    "note_en": "Saint-Martin's economy centers on low-rise boutique resort and villa tourism (deliberately prohibiting high-rise towers and casinos to differentiate itself from Dutch Sint Maarten), yachting marinas at Marigot and Anse Marcel, duty-free French luxury retail, and its reputation as the 'Gastronomic Capital of the Caribbean' along the restaurant strip of Grand Case. As an Outermost Region of the European Union, the euro (€) is official legal tender, though the US dollar is universally accepted across shops, hotels, and restaurants. While reliant on Dutch Sint Maarten's Princess Juliana International Airport and deep-water cruise port for long-haul visitor arrivals, French Saint-Martin benefits substantially from French state public-service transfers and European Union regional development funds."
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
    "note_vi": "Với quy mô dân số chỉ khoảng 11.000 người nhưng thu nhập bình quân đầu người đạt tới ~58.000 USD, St-Barthélemy là nền kinh tế giàu có nhất vùng biển Caribbean thuộc Pháp nhờ chiến lược định vị thương hiệu \"siêu sang mật độ thấp\" (ultra-luxury, low-density) cực kỳ nhất quán. Hòn đảo kiên quyết cấm các siêu tàu du lịch biển (cruise ships) cập cảng, giới hạn số phòng của các khách sạn boutique 5 sao (như Eden Rock, Cheval Blanc của tập đoàn LVMH, Le Barthélemy — thường chỉ có từ 15 đến 60 phòng với giá thuê hàng nghìn đến hàng chục nghìn Euro mỗi đêm) và tập trung vào thị trường cho thuê khoảng 800 căn biệt thự tư nhân triệu đô cùng các cửa hàng thời trang xa xỉ miễn thuế (Hermès, Louis Vuitton, Dior, Bulgari) tại Gustavia. Sử dụng đồng Euro (€) làm tiền tệ chính thức song song với đồng USD, ngân sách tự chủ của đảo thu thặng dư lớn chỉ từ thuế chuyển nhượng bất động sản hạng sang, thuế lưu trú khách sạn và phí cảng siêu du thuyền.",
    "note_en": "With a per-capita GDP of roughly $58,000 across just 11,000 residents, St-Barthélemy boasts the highest standard of living in the French West Indies by enforcing a strict 'ultra-luxury, low-density' economic model. The island bars large mass-market cruise ships and mega-resorts, capping boutique five-star hotels (such as LVMH's Cheval Blanc, Eden Rock, and Le Toiny) at a few dozen rooms commanding thousands of euros per night alongside ~800 private luxury rental villas. Using the euro (€) as official currency alongside widespread US dollar acceptance, Gustavia's duty-free harbor hosts flagship haute-couture boutiques (Hermès, Louis Vuitton, Dior, Prada), allowing the fiscally autonomous collectivity to run budget surpluses funded purely by luxury real-estate transfer taxes, villa tourist taxes, and port fees without levying income tax."
  },
  "Fr. Polynesia": {
    "tier": "adv",
    "gdp_vi": "~6,3 tỷ USD (#161 thế giới)",
    "gdp_en": "~$6.3B (#161 globally)",
    "pc_vi": "~22.440 USD",
    "pc_en": "~$22,440",
    "gr": "+1.1%",
    "sec": [
      80,
      13,
      7
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển đảo cao cấp (Tahiti, Bora Bora, Moorea), nuôi cấy ngọc trai đen Tahiti, chuyển giao ngân sách từ Pháp, đánh bắt cá ngừ, vani & dầu dừa (Monoï)",
    "main_en": "Luxury island & overwater-bungalow tourism (Tahiti, Bora Bora, Moorea), Tahitian black cultured pearls, French state transfers, tuna fishing, vanilla & Monoï coconut oil",
    "note_vi": "Nền kinh tế trị giá khoảng 6,4 tỷ USD của Polynesia thuộc Pháp vận hành bằng đồng Franc Thái Bình Dương (CFP franc, neo tỷ giá cố định vào đồng Euro do Ngân hàng Trung ương Pháp bảo lãnh) và dựa vào ba trụ cột: du lịch nghỉ dưỡng biển siêu sang (những căn nhà sàn trên mặt nước — overwater bungalows — tại Bora Bora, Moorea đón hơn 260.000 du khách chi tiêu cao mỗi năm), khoản chuyển giao ngân sách hơn 1,5 tỷ USD/năm từ Chính phủ Pháp, và nuôi cấy ngọc trai đen Tahiti (chiếm hơn 50% tổng giá trị xuất khẩu hàng hóa của lãnh thổ).",
    "note_en": "Operating on the CFP franc (pegged at a fixed rate to the euro and guaranteed by the French Treasury), French Polynesia's ~$6.4 billion economy rests on three pillars: world-famous luxury tourism (pioneering overwater bungalows on Bora Bora and Moorea that draw 260,000+ high-spending visitors annually), over $1.5 billion in annual French state transfers for civil administration and defense, and cultured Tahitian black pearls from the Tuamotu lagoons, which account for more than 50% of merchandise exports."
  },
  "New Caledonia": {
    "tier": "adv",
    "gdp_vi": "~8,5 tỷ USD (#155 thế giới)",
    "gdp_en": "~$8.5B (#155 globally)",
    "pc_vi": "~29.210 USD",
    "pc_en": "~$29,210",
    "gr": "-13.5%",
    "sec": [
      72,
      26,
      2
    ],
    "main_vi": "Khai thác & luyện quặng niken (SLN, Koniambo, Prony), chuyển giao tài chính từ chính phủ Pháp, dịch vụ công, nuôi tôm xanh xuất khẩu & du lịch",
    "main_en": "Nickel mining & ferronickel smelting (SLN, Koniambo, Prony), French metropolitan fiscal transfers, public administration, blue prawn aquaculture & tourism",
    "note_vi": "Kinh tế New Caledonia (GDP ~9,6 tỷ USD, sử dụng đồng Franc CFP neo cố định vào đồng Euro) xoay quanh hai trụ cột chính: khai thác – luyện quặng niken (chiếm tới 90% kim ngạch xuất khẩu với ba tổ hợp SLN, Koniambo và Prony Resources) và khoản chuyển giao ngân sách hơn 1,8 tỷ Euro/năm từ Chính phủ Pháp. Trong giai đoạn 2024–2026, việc giá niken thế giới sụt giảm mạnh trước nguồn cung giá rẻ từ Indonesia cộng với thiệt hại hơn 2,2 tỷ Euro từ cuộc bạo động tháng 5/2024 (khiến nhà máy luyện kim Koniambo phải đóng cửa) đã buộc Paris phải tung gói cứu trợ tái thiết khẩn cấp và tái cấu trúc ngành niken cung ứng cho chuỗi pin xe điện phương Tây.",
    "note_en": "Operating on the euro-pegged CFP franc, New Caledonia's ~$9.6 billion economy has long rested on two pillars: nickel mining and ferronickel smelting (accounting for ~90% of export earnings across the SLN, Koniambo, and Prony Resources complexes) and ~€1.8 billion in annual fiscal transfers from Paris. In 2024–2026, a severe twin crisis—collapsing global nickel prices driven by low-cost Indonesian output (forcing the mothballing of the Koniambo smelter) and over €2.2 billion in damages from the May 2024 civil unrest—has prompted massive French state reconstruction aid and a strategic overhaul of the electric-vehicle battery mineral sector."
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
    "note_vi": "Dù không có cư dân thường trú, chính quyền TAAF (đặt trụ sở hành chính tại đảo Réunion) vẫn tạo ra nguồn thu ngân sách tự chủ lên tới hàng chục triệu Euro mỗi năm nhờ bán hạn ngạch đánh bắt cực kỳ đắt giá đối với loài cá răng Patagonian (Patagonian toothfish / Légine — được mệnh danh là \"vàng trắng của Nam Đại dương\", xuất khẩu sang Nhật Bản và Mỹ) và tôm hùm đá tại vùng biển Kerguelen, Crozet và Saint-Paul. Chỉ một đội tàu đánh cá hiện đại gồm 6–8 chiếc mang cờ Pháp tại đảo Réunion được cấp phép khai thác dưới sự giám sát vệ tinh và tàu chiến Hải quân Pháp chống đánh bắt trộm, bên cạnh nguồn thu từ đăng ký tàu biển quốc tế Pháp (RIF) và bán tem sưu tầm.",
    "note_en": "Although completely uninhabited by civilians, the TAAF administration (headquartered on Réunion) generates substantial autonomous revenue through strictly quota-regulated commercial fishing licenses for high-value Patagonian toothfish (known in France as *légine*, or \"white gold of the Southern Ocean\") and rock lobster across the Kerguelen, Crozet, and Saint-Paul EEZs. Only a licensed fleet of Réunion-based French freezer longliners is permitted to harvest under naval and satellite surveillance, supplemented by revenues from the French International Ship Register (RIF), polar tourism permits, and philatelic stamp sales."
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
    "note_vi": "Quy chế đặc biệt khi Phần Lan gia nhập EU năm 1995 đã đặt Åland nằm trong EU nhưng đứng ngoài Liên minh Thuế giá trị gia tăng (VAT) của khối. Điều khoản vàng này buộc mọi siêu phà biển chở hàng triệu hành khách giữa Thụy Điển (Stockholm) và Phần Lan (Helsinki/Turku) phải ghé cảng Mariehamn để được phép bán hàng miễn thuế trên tàu, giúp ngành hàng hải (Viking Line, Eckerö Line) đóng góp tới ~30–40% GDP của quần đảo bên cạnh ngân hàng (Bank of Åland) và sản xuất khoai tây chiên Taffel.",
    "note_en": "When Finland joined the EU in 1995, Åland secured a special protocol keeping the islands inside the EU single market but outside the EU VAT tax area. This crucial exemption allows giant Baltic cruise ferries sailing between Stockholm, Turku, and Helsinki to sell duty-free goods onboard simply by making a brief port call at Mariehamn—making shipping lines (Viking Line, Eckerö Line) the backbone of nearly 40% of Åland's GDP alongside Bank of Åland and Taffel food processing."
  },
  "Finland": {
    "tier": "adv",
    "gdp_vi": "~299 tỷ USD (#47 thế giới)",
    "gdp_en": "~$299B (#47 globally)",
    "pc_vi": "~53.160 USD (PPP ~65.140 USD)",
    "pc_en": "~$53,160 (PPP ~$65,140)",
    "gr": "+0.4%",
    "sec": [
      71,
      26,
      3
    ],
    "main_vi": "Thiết bị viễn thông 5G/6G (Nokia), cơ khí & thiết bị công nghiệp – hàng hải (Kone, Wärtsilä), công nghệ sinh học & lâm nghiệp (UPM, Stora Enso), đóng tàu phá băng (#1 thế giới), công nghiệp game (Supercell)",
    "main_en": "5G/6G telecom equipment (Nokia), industrial & marine engineering (Kone, Wärtsilä), forest bioeconomy & pulp/paper (UPM, Stora Enso), icebreaker shipbuilding (#1 globally), gaming & software (Supercell)",
    "note_vi": "Kinh tế Phần Lan nổi bật với năng lực công nghệ cao và công nghiệp kỹ thuật đặc chủng: thiết kế khoảng 80% và trực tiếp đóng 60% tổng số tàu phá băng Bắc Cực trên toàn thế giới, dẫn đầu về mạng viễn thông Nokia, thang máy Kone, động cơ hàng hải Wärtsilä và công nghệ sinh học từ rừng (UPM, Stora Enso). Việc đưa lò phản ứng hạt nhân lớn nhất châu Âu Olkiluoto 3 (1.600 MW) vào vận hành thương mại từ năm 2023 giúp lưới điện Phần Lan đạt hơn 94% điện sạch không phát thải.",
    "note_en": "Finland's high-tech industrial economy punches globally through specialized engineering: Finnish yards design ~80% and build ~60% of the world's icebreakers, alongside global champions in 5G/6G telecoms (Nokia), elevators (Kone), marine engines (Wärtsilä), and forest bioeconomy (UPM, Stora Enso). Since commissioning Europe's largest nuclear reactor (Olkiluoto 3, 1,600 MW) in 2023, Finland operates a ~95% emissions-free power grid."
  },
  "Fiji": {
    "tier": "emg",
    "gdp_vi": "~6,0 tỷ USD (#162 thế giới)",
    "gdp_en": "~$6.0B (#162 globally)",
    "pc_vi": "~6.430 USD (PPP ~15.470 USD)",
    "pc_en": "~$6,430 (PPP ~$15,470)",
    "gr": "+3.5%",
    "sec": [
      65,
      20,
      15
    ],
    "main_vi": "Du lịch nghỉ dưỡng (~40% GDP trực tiếp & gián tiếp), xuất khẩu nước khoáng đóng chai (FIJI Water), kiều hối, đường mía, trung tâm hàng không & viễn thông Nam Thái Bình Dương (Fiji Airways)",
    "main_en": "Resort tourism (~40% of GDP direct & indirect), bottled artesian mineral water (FIJI Water), remittances, sugar, South Pacific aviation & telecom hub (Fiji Airways)",
    "note_vi": "Là nền kinh tế đa dạng và công nghiệp hóa nhất trong các đảo quốc Nam Thái Bình Dương (ngoài Úc và New Zealand), nơi ngành du lịch nghỉ dưỡng cao cấp (đón gần 1 triệu du khách/năm từ Úc, New Zealand và Mỹ) đóng góp trực tiếp và gián tiếp gần 40% GDP. Nước khoáng đóng chai FIJI Water chiếm vị trí mặt hàng xuất khẩu đơn lẻ lớn nhất (chiếm thị phần hàng đầu tại Mỹ) bên cạnh đường mía, vàng, chế biến cá ngừ và kiều hối kỷ lục, dù nền kinh tế đang đối mặt với tình trạng thiếu hụt lao động trẻ do di cư làm việc sang Úc và New Zealand.",
    "note_en": "Stands as the most industrialized and service-diversified island economy in the South Pacific (outside Australia and New Zealand), anchored by a booming resort tourism sector welcoming ~1 million visitors annually (~40% of GDP) and growing IT/BPO back-office centers. Bottled artesian FIJI Water reigns as the single largest merchandise export alongside gold, sugar, mahogany, and garments, though high public debt and a brain drain of skilled workers to Australian and New Zealand labor mobility schemes pose ongoing structural challenges."
  },
  "Ethiopia": {
    "tier": "low",
    "gdp_vi": "~150 tỷ USD (#60 thế giới)",
    "gdp_en": "~$150B (#60 globally)",
    "pc_vi": "~1.130 USD (PPP ~3.290 USD)",
    "pc_en": "~$1,130 (PPP ~$3,290)",
    "gr": "+7.6%",
    "sec": [
      38,
      26,
      36
    ],
    "main_vi": "Cà phê Arabica (quê hương cây cà phê, #1 châu Phi), hàng không (Ethiopian Airlines – hãng lớn nhất châu Phi), thủy điện (Đập Đại Phục Hưng GERD), hoa cắt cành & hạt có dầu, khu công nghiệp dệt may",
    "main_en": "Arabica coffee (birthplace of coffee, #1 African producer), aviation (Ethiopian Airlines – Africa's largest carrier), hydropower (Grand Ethiopian Renaissance Dam), cut flowers & oilseeds, textile industrial parks",
    "note_vi": "Là quê hương nguyên thủy của cây cà phê Arabica (nhà sản xuất lớn nhất châu Phi), nền kinh tế Ethiopia đang sở hữu hãng hàng không Ethiopian Airlines lớn nhất và kinh doanh hiệu quả nhất lục địa, đóng vai trò cầu nối hàng không toàn châu Phi. Sau khi rơi vào tình trạng vỡ nợ trái phiếu quốc tế năm 2023 do hệ lụy chiến tranh Tigray và thiếu hụt USD, chính phủ đã thực hiện cuộc cải cách thị trường táo bạo nhất trong nửa thế kỷ vào tháng 7/2024: thả nổi đồng nội tệ Birr, mở cửa thị trường chứng khoán và cho phép ngân hàng nước ngoài hoạt động để nhận gói tài trợ hơn 10,5 tỷ USD từ IMF và Ngân hàng Thế giới. Cùng với việc đập thủy điện GERD và Gibe III giúp tăng gấp đôi công suất phát điện để xuất khẩu sang Kenya, Djibouti và Tanzania, Ethiopia đang lấy lại đà tăng trưởng 6,5–7,5%/năm.",
    "note_en": "The ancestral birthplace of Arabica coffee and Africa's top coffee producer, Ethiopia also boasts the continent's largest and most profitable carrier, Ethiopian Airlines, which turns Addis Ababa into Africa's premier aviation hub. After post-war reconstruction strains and severe FX shortages led to a sovereign Eurobond default in late 2023, Ethiopia launched historic market-liberalization reforms in July 2024—floating the birr, launching a domestic stock exchange, and opening its closed banking sector—to unlock over $10.5 billion in IMF and World Bank financing. Bolstered by cheap renewable electricity from the 5.15 GW GERD mega-dam exported to Kenya, Djibouti, and Sudan, GDP growth remains strong at 6.5–7.5% annually."
  },
  "Estonia": {
    "tier": "adv",
    "gdp_vi": "~43 tỷ USD (#102 thế giới)",
    "gdp_en": "~$43B (#102 globally)",
    "pc_vi": "~31.430 USD (PPP ~50.400 USD)",
    "pc_en": "~$31,430 (PPP ~$50,400)",
    "gr": "-0.1%",
    "sec": [
      75,
      23,
      2
    ],
    "main_vi": "Công nghệ thông tin & hệ sinh thái kỳ lân khởi nghiệp (Wise, Bolt, Pipedrive), chính phủ điện tử (e-Residency), an ninh mạng, chế biến gỗ & nhà lắp ghép, thiết bị điện tử",
    "main_en": "IT & startup ecosystem (Wise, Bolt, Pipedrive), e-governance (e-Residency), cybersecurity, engineered wood & modular houses, electronics manufacturing",
    "note_vi": "Với chính sách thuế thu nhập doanh nghiệp 0% đối với lợi nhuận giữ lại tái đầu tư (áp dụng từ năm 2000), chương trình công dân điện tử (e-Residency) và 100% dịch vụ hành chính công trực tuyến, Estonia đã sản sinh ra tới 10 'kỳ lân' công nghệ (các tập đoàn trị giá >1 tỷ USD như Skype, Wise, Bolt, Veriff, Pipedrive)—đạt mật độ kỳ lân trên đầu người cao nhất châu Âu. Tại Tallinn cũng đặt Trung tâm Xuất sắc về Phòng thủ Mạng Hợp tác của NATO (CCDCOE) và kho sao lưu dữ liệu nhà nước trên đám mây tại Luxembourg.",
    "note_en": "Propelled by a unique tax code charging 0% corporate tax on reinvested profits, pioneering e-Residency, and 100% online public services, tiny Estonia has spawned 10 billion-dollar tech unicorns (including Skype, Wise, Bolt, Pipedrive, and Veriff)—giving it Europe's highest unicorn density per capita. Tallinn also hosts NATO's Cooperative Cyber Defence Centre of Excellence (CCDCOE) and maintains the world's first 'Data Embassy' in Luxembourg to ensure digital state continuity."
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
    "note_vi": "Eritrea vận hành một trong những nền kinh tế chỉ huy khép kín và chịu kiểm soát nhà nước chặt chẽ nhất thế giới, nơi đảng cầm quyền và quân đội nắm độc quyền thương mại, xây dựng và ngoại hối (đồng Nakfa được ấn định tỷ giá cố định với USD). Nguồn thu ngoại tệ thực chất của đất nước dựa vào hai trụ cột: khai thác khoáng sản công nghiệp (mỏ đồng – kẽm – vàng – bạc Bisha do tập đoàn Zijin Trung Quốc vận hành và siêu mỏ phân bón kali Colluli ở vùng Danakil) cùng khoản \"thuế phục hồi và phát triển\" bắt buộc 2% thu trên thu nhập của mọi kiều dân Eritrea ở nước ngoài. Chế độ nghĩa vụ quân sự vô thời hạn và sự thiếu vắng khu vực kinh tế tư nhân khiến cảng biển Massawa và Assab bị bỏ phí tiềm năng trung chuyển hàng hải.",
    "note_en": "Eritrea operates one of the world's most tightly controlled command economies, where the ruling party and military monopolize trade, construction, and foreign exchange under a rigidly pegged currency (the nakfa). Hard-currency revenues rely on two critical lifelines: foreign-partnered mining—led by the Bisha copper-zinc-gold mine operated by China's Zijin Mining and the massive Colluli potash deposit in the Danakil—and a mandatory 2% \"diaspora recovery tax\" levied on Eritreans living abroad. Indefinite military conscription, Western sanctions, and the absence of a private banking sector leave its strategic Red Sea ports of Massawa and Assab severely underutilized."
  },
  "Eq. Guinea": {
    "tier": "emg",
    "gdp_vi": "~13,3 tỷ USD (#146 thế giới)",
    "gdp_en": "~$13.3B (#146 globally)",
    "pc_vi": "~7.000 USD (PPP ~17.070 USD)",
    "pc_en": "~$7,000 (PPP ~$17,070)",
    "gr": "+0.4%",
    "sec": [
      49,
      48,
      3
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi, khí thiên nhiên hóa lỏng (LNG) & methanol (đảo Bioko), xây dựng hạ tầng công, khai thác gỗ nhiệt đới",
    "main_en": "Offshore crude oil extraction, liquefied natural gas (LNG) & methanol (Bioko Island), public infrastructure construction, tropical timber",
    "note_vi": "Dầu thô, khí ngưng tụ và khí thiên nhiên hóa lỏng (LNG) vẫn chiếm trên 85% kim ngạch xuất khẩu và khoảng 80% nguồn thu ngân sách nhà nước của thành viên OPEC nhỏ nhất châu Phi này. Tuy nhiên, do các mỏ dầu lâu năm như Zafiro bước vào giai đoạn cạn kiệt tự nhiên khiến sản lượng dầu giảm từ hơn 350.000 thùng/ngày (năm 2004) xuống chỉ còn khoảng 55.000–60.000 thùng/ngày vào năm 2024–2025, Guinea Xích Đạo đang đặt cược vào dự án 'Trung tâm Khí đốt Mega Hub' (chế biến khí đốt từ cả các mỏ của Cameroon và Nigeria tại nhà máy LNG trên đảo Bioko) để ngăn đà suy giảm kinh tế.",
    "note_en": "Hydrocarbons—crude oil, condensates, methanol, and LNG—still generate over 85% of export earnings and ~80% of government revenue in this Central African OPEC state. Because mature oil fields have seen crude output plunge from a peak of >350,000 barrels per day in the mid-2000s to roughly 55,000–60,000 bpd in 2024–2025, the government is betting on its 'Gas Mega Hub' strategy—processing cross-border gas from neighboring Cameroon and Nigeria through Bioko Island's LNG plant—to offset prolonged economic contraction."
  },
  "El Salvador": {
    "tier": "emg",
    "gdp_vi": "~34,9 tỷ USD (#106 thế giới)",
    "gdp_en": "~$34.9B (#106 globally)",
    "pc_vi": "~5.500 USD (PPP ~13.260 USD)",
    "pc_en": "~$5,500 (PPP ~$13,260)",
    "gr": "+2.6%",
    "sec": [
      68,
      26,
      6
    ],
    "main_vi": "Kiều hối từ Mỹ (~24% GDP), dệt may & sản xuất nhẹ, dịch vụ du lịch lướt sóng & hội nghị, cà phê & đường mía, trung tâm dịch vụ khách hàng (call centers)",
    "main_en": "US diaspora remittances (~24% of GDP), textiles & light manufacturing, surf & convention tourism, coffee & sugar, bilingual call centers",
    "note_vi": "El Salvador đã chính thức đô la hóa hoàn toàn nền kinh tế (dùng đồng USD làm tiền tệ hợp pháp) từ năm 2001, giúp duy trì lạm phát và lãi suất thấp, trước khi gây tiếng vang toàn cầu khi công nhận thêm Bitcoin năm 2021 (và điều chỉnh quy chế tự nguyện trong thỏa thuận vay 1,4 tỷ USD với IMF cuối năm 2024). Nguồn ngoại tệ sống còn của đất nước đến từ kiều hối của hơn 2,5 triệu người Salvador tại Mỹ (đạt trên 8 tỷ USD/năm, tương đương ~24% GDP), cùng ngành dệt may xuất khẩu, dịch vụ tổng đài song ngữ (BPO) và dự án du lịch biển \"Surf City\". Sự sụp đổ của nạn tống tiền băng đảng từ năm 2022 đã giúp hàng loạt doanh nghiệp nhỏ hồi sinh và lượng du khách quốc tế tăng vọt lên mức kỷ lục, dù bài toán nợ công cao (~80% GDP) và năng suất lao động thấp vẫn đòi hỏi cải cách sâu rộng.",
    "note_en": "Fully dollarized since 2001—which anchors low inflation and borrowing costs—El Salvador made global headlines by adopting Bitcoin in 2021 before making private-sector Bitcoin acceptance voluntary under a landmark $1.4 billion IMF program signed in late 2024. The economy relies heavily on over $8 billion in annual remittances from the US diaspora (~24% of GDP), alongside apparel manufacturing, bilingual BPO call centers, and booming 'Surf City' Pacific coastal tourism. The virtual eradication of gang extortion since 2022 has sparked a surge in international visitors and small-business activity, though high public debt (~80% of GDP) and low investment productivity remain structural hurdles."
  },
  "Egypt": {
    "tier": "dev",
    "gdp_vi": "~389 tỷ USD (#41 thế giới)",
    "gdp_en": "~$389B (#41 globally)",
    "pc_vi": "~3.340 USD (PPP ~19.120 USD)",
    "pc_en": "~$3,340 (PPP ~$19,120)",
    "gr": "+2.4%",
    "sec": [
      51,
      34,
      15
    ],
    "main_vi": "Phí qua Kênh đào Suez, du lịch văn hóa – biển Đỏ, khí đốt tự nhiên (mỏ Zohr) & hóa dầu, kiều hối, bất động sản & đại dự án đô thị mới, nông nghiệp đồng bằng sông Nile (bông, cam quýt, phân bón)",
    "main_en": "Suez Canal transit tolls, heritage & Red Sea tourism, natural gas (Zohr field) & petrochemicals, diaspora remittances, real estate & new city megaprojects, Nile Delta agriculture & fertilizers",
    "note_vi": "Là nền kinh tế lớn thứ hai châu Phi theo quy mô GDP và là cầu nối giữa Địa Trung Hải, Biển Đỏ và Trung Đông, Ai Cập dựa vào bốn nguồn thu ngoại tệ truyền thống: phí qua kênh đào Suez, du lịch di sản – biển Đỏ, xuất khẩu khí đốt – hóa dầu và kiều hối. Sau giai đoạn thiếu hụt USD và lạm phát cao năm 2023, việc thả nổi tỷ giá đồng Bảng Ai Cập tháng 3/2024 cùng siêu dự án đô thị – du lịch Ras El-Hekma trị giá 35 tỷ USD của UAE đã giúp khôi phục dự trữ ngoại hối. Thách thức cấu trúc lớn nhất của Cairo là tạo việc làm cho hơn 1 triệu thanh niên gia nhập thị trường lao động mỗi năm và giảm vai trò bao trùm của khu vực nhà nước – quân đội.",
    "note_en": "As a 116-million-strong economic bridge between the Mediterranean, Red Sea, and Middle East, Egypt relies on four traditional hard-currency pillars: Suez Canal tolls, heritage and Red Sea tourism, petrochemicals and gas, and diaspora remittances. In March 2024, Cairo overcame an acute foreign-exchange crunch by floating the Egyptian pound and securing a historic $35 billion UAE investment to develop Ras El-Hekma on the Mediterranean coast, unlocking expanded IMF and EU support. Long-term prosperity hinges on reining in inflation, reducing the state-military footprint in the economy, and creating jobs for over one million new labor-market entrants each year."
  },
  "Ecuador": {
    "tier": "emg",
    "gdp_vi": "~124 tỷ USD (#64 thế giới)",
    "gdp_en": "~$124B (#64 globally)",
    "pc_vi": "~6.830 USD (PPP ~15.850 USD)",
    "pc_en": "~$6,830 (PPP ~$15,850)",
    "gr": "-1.9%",
    "sec": [
      61,
      29,
      10
    ],
    "main_vi": "Nuôi & xuất khẩu tôm thẻ chân trắng (#1 thế giới), dầu thô vùng Amazon, chuối (#1 xuất khẩu thế giới), hoa hồng cắt cành, ca cao hương vị cao cấp (Arriba), khai thác đồng & vàng",
    "main_en": "Farmed whiteleg shrimp (#1 global exporter), Amazonian crude oil, bananas (#1 global exporter), cut roses, fine-flavor Arriba cocoa, copper & gold mining",
    "note_vi": "Việc sử dụng đồng USD làm tiền tệ chính thức từ năm 2000 đã loại bỏ rủi ro phá giá tiền tệ và giữ lạm phát của Ecuador ở mức thấp nhất khu vực, tạo nền tảng cho ngành nuôi tôm thẻ chân trắng (~7 tỷ USD/năm) và chuối vượt qua dầu thô để trở thành trụ cột xuất khẩu số một. Tuy nhiên, không thể tự in tiền đồng nghĩa với việc chính phủ rất dễ rơi vào khủng hoảng thanh khoản ngân sách khi giá dầu giảm, trong khi tình trạng bạo lực băng đảng, khủng hoảng thiếu điện thủy điện và các cuộc trưng cầu dân ý đóng cửa mỏ dầu Yasuní đang kìm hãm đà tăng trưởng.",
    "note_en": "Full official dollarization since 2000 has eliminated exchange-rate risk and anchored some of Latin America's lowest inflation, enabling private agro-exporters—led by farmed whiteleg shrimp (~$7B annually), bananas, roses, and cocoa—to overtake crude oil as the nation's top foreign-exchange earners. Yet lacking a national currency leaves Quito tightly constrained by fiscal deficits and sovereign debt repayments, while drought-induced electricity rationing, narco-insecurity, and the voter-mandated shutdown of the Yasuní Amazon oil block weigh heavily on medium-term growth."
  },
  "Dominican Rep.": {
    "tier": "emg",
    "gdp_vi": "~124 tỷ USD (#63 thế giới)",
    "gdp_en": "~$124B (#63 globally)",
    "pc_vi": "~10.880 USD (PPP ~27.580 USD)",
    "pc_en": "~$10,880 (PPP ~$27,580)",
    "gr": "+5.0%",
    "sec": [
      64,
      31,
      5
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển (Punta Cana, >10 triệu khách/năm), khu chế xuất (thiết bị y tế, điện tử, xì gà cao cấp #1 thế giới), khai thác vàng (mỏ Pueblo Viejo), kiều hối",
    "main_en": "Beach resort tourism (Punta Cana, >10M visitors/yr), free-trade zone manufacturing (medical devices, electronics, #1 premium hand-rolled cigars), gold mining (Pueblo Viejo), remittances",
    "note_vi": "Là nền kinh tế lớn nhất vùng biển Caribbean (~127 tỷ USD) với tốc độ tăng trưởng thuộc nhóm nhanh nhất châu Mỹ suốt 20 năm qua, Cộng hòa Dominica sở hữu cơ cấu kinh tế đa dạng hiếm có thay vì chỉ dựa vào một ngành duy nhất. Bốn động cơ tăng trưởng cùng vận hành mạnh mẽ gồm: du lịch nghỉ dưỡng biển tại Punta Cana, Samaná và Cabo Rojo mới mở (đón kỷ lục hơn 11 triệu khách/năm), hơn 80 khu thương mại tự do (Zonas Francas) xuất khẩu thiết bị y tế, cầu dao điện và xì gà thủ công số 1 thế giới sang Mỹ, dòng kiều hối hơn 10,5 tỷ USD/năm và mỏ vàng lộ thiên Pueblo Viejo (mỏ vàng lớn nhất Mỹ Latinh do Barrick Gold và Newmont vận hành). Điểm nghẽn cấu trúc cần tháo gỡ là tình trạng thất thoát điện năng cao trên lưới truyền tải và nhu cầu cải cách thuế để giảm chi phí lãi vay công.",
    "note_en": "Now the largest economy in the Caribbean (~$127 billion) after two decades of ~5% average annual growth, the Dominican Republic benefits from an unusually diversified four-engine economic model. It combines the Caribbean's #1 tourism industry (>11 million annual visitors anchored by Punta Cana and the new Cabo Rojo cruise port), over 80 free-trade manufacturing zones exporting medical devices, electrical equipment, and the world's top hand-rolled cigars to the US, more than $10.5 billion in annual remittances, and the giant Pueblo Viejo gold-and-silver mine (the largest gold mine in Latin America). Structural priorities focus on cutting heavy state electricity distribution losses and broadening the domestic tax base."
  },
  "Dominica": {
    "tier": "emg",
    "gdp_vi": "~0,70 tỷ USD (~700 triệu USD)",
    "gdp_en": "~$700M",
    "pc_vi": "~10.400 USD (PPP ~21.330 USD)",
    "pc_en": "~$10,400 (PPP ~$21,330)",
    "gr": "+2.1%",
    "sec": [
      69,
      17,
      14
    ],
    "main_vi": "Chương trình đầu tư nhập tịch (CBI), du lịch sinh thái – lặn biển & suối nước nóng ('Đảo Thiên nhiên vùng Caribe'), nông sản nhiệt đới (chuối, trái cây có múi, khoai sọ), điện địa nhiệt",
    "main_en": "Citizenship by Investment (CBI) program, eco-tourism & diving ('Nature Island of the Caribbean'), tropical agriculture (bananas, citrus, root crops), geothermal energy development",
    "note_vi": "Là một nền kinh tế nhỏ (~0,70 tỷ USD) sử dụng đồng Đô la Đông Caribbean (XCD neo 2,7:1 vào USD), Dominica từng phụ thuộc nặng nề vào xuất khẩu chuối trước khi chuyển hướng sang du lịch sinh thái (đón tàu du lịch biển tại Roseau, đi cáp treo dài nhất thế giới lên Hồ Sôi đang hoàn thiện và lặn ngắm cá nhà táng) cùng nông sản hữu cơ (trái cây có múi, khoai sọ dasheen, tinh dầu lá nguyệt quế). Đặc biệt, nguồn thu từ Chương trình Đầu tư lấy Quốc tịch (CBI — hoạt động từ năm 1993) đóng góp tới hơn một nửa nguồn thu đầu tư công của chính phủ, được gom vào Quỹ Phát triển Kinh tế để tài trợ cho các siêu dự án hạ tầng thay đổi vận mệnh hòn đảo: xây hàng nghìn căn nhà bê tông chống bão cấp 5, nhà máy điện địa nhiệt Roseau Valley và Sân bay Quốc tế mới tại Wesley (dự kiến hoàn thành giai đoạn 2026–2027) để lần đầu tiên đón máy bay đường dài bay thẳng từ Mỹ và châu Âu.",
    "note_en": "Operating within the Eastern Caribbean Currency Union (2.70 XCD to 1 USD), Dominica's ~$700 million economy has transitioned from its 20th-century banana monoculture toward eco-adventure tourism (hiking the Waitukubuli National Trail, riding the new world-record Roseau Valley cable car to the Boiling Lake, and whale watching) alongside root-crop exports to neighboring islands. Crucially, revenues from its Citizenship by Investment (CBI) program (established in 1993) have funded a historic public-investment drive aimed at climate resilience: building thousands of hurricane-proof homes, commissioning a 10 MW geothermal power plant, and constructing a transformative new international airport at Wesley (slated for 2026–2027) to allow direct long-haul jet flights from North America and Europe for the first time."
  },
  "Djibouti": {
    "tier": "dev",
    "gdp_vi": "~4,2 tỷ USD (#167 thế giới)",
    "gdp_en": "~$4.2B (#167 globally)",
    "pc_vi": "~3.550 USD (PPP ~7.820 USD)",
    "pc_en": "~$3,550 (PPP ~$7,820)",
    "gr": "+7.0%",
    "sec": [
      81,
      17,
      2
    ],
    "main_vi": "Dịch vụ cảng biển nước sâu & trung chuyển hàng hóa cho Ethiopia (>90% ngoại thương Ethiopia), cho thuê căn cứ quân sự quốc tế (Mỹ, Pháp, Trung Quốc, Nhật Bản), đường sắt Addis Ababa – Djibouti, trạm cáp quang biển",
    "main_en": "Deepwater port transshipment for landlocked Ethiopia (>90% of Ethiopian trade), foreign military base leases (US, France, China, Japan), Addis Ababa–Djibouti railway, submarine cable landing hub",
    "note_vi": "Nền kinh tế Djibouti là hình mẫu kinh tế dịch vụ cảng biển – hậu cần thuần túy (chiếm hơn 80% GDP) với đồng Franc Djibouti được neo cố định vào đồng USD suốt từ năm 1949 đến nay, giúp hệ thống ngân hàng ổn định và không bị lạm phát phi mã. Nguồn thu quốc gia dựa trên ba trụ cột vững chắc: phí bốc dỡ và quá cảnh hàng hóa độc quyền cho thị trường Ethiopia, tiền thuê đất từ các căn cứ quân sự Mỹ – Trung – Pháp – Nhật, và vị thế trạm cập bờ của hơn 10 tuyến cáp quang biển quốc tế nối châu Âu – Trung Đông – châu Á – Đông Phi. Thách thức lớn nhất của nước này là tỷ lệ thất nghiệp cao trong thanh niên bản địa và gánh nặng nợ vay hạ tầng đối với Trung Quốc.",
    "note_en": "Djibouti operates a specialized port-and-services economy accounting for over 80% of GDP, anchored by a rock-solid currency board that has pegged the Djiboutian franc to the US dollar since 1949. National revenue rests on three strategic pillars: transshipment and rail fees from handling over 90% of Ethiopia's maritime trade, hundreds of millions of dollars in annual lease payments from US, Chinese, French, and Japanese military bases, and its role as the regional landing hub for more than ten undersea fiber-optic cables linking Europe, Asia, and Africa. High external debt owed to Chinese state lenders for port and rail infrastructure and stubborn youth unemployment remain its main structural bottlenecks."
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
      19,
      17
    ],
    "main_vi": "Đánh bắt & chế biến thủy sản lạnh (tôm nước lạnh, cá bơn Greenland chiếm >90% xuất khẩu), trợ cấp ngân sách hàng năm từ Đan Mạch (Bloktilskud ~500 triệu USD), du lịch băng hà Bắc Cực, thăm dò đất hiếm & khoáng sản chiến lược",
    "main_en": "Cold-water fisheries & processing (prawns, Greenland halibut >90% of exports), Danish annual block grant (Bloktilskud ~$500M), Arctic glacier tourism, critical minerals & rare earth exploration",
    "note_vi": "Nền kinh tế Greenland hiện dựa vào hai trụ cột chính: ngành đánh bắt và chế biến thủy sản nước lạnh (tôm Bắc Cực và cá bơn Greenland chiếm hơn 90% tổng kim ngạch xuất khẩu hàng hóa) cùng khoản trợ cấp ngân sách cố định hàng năm khoảng 500–600 triệu USD (Bloktilskud) từ chính phủ Đan Mạch. Việc hoàn thành mở rộng đường băng đón máy bay xuyên lục địa tại thủ đô Nuuk (cuối năm 2024) và Ilulissat (2026) đang tạo cú hích lịch sử cho ngành du lịch băng hà và kết nối trực tiếp với Bắc Mỹ, châu Âu. Dù sở hữu các mỏ đất hiếm lớn bậc nhất thế giới như Tanbreez và Kvanefjeld, việc khai khoáng vẫn đối mặt với chi phí hạ tầng Bắc Cực đắt đỏ và các quy định bảo vệ môi trường nghiêm ngặt.",
    "note_en": "Greenland's economy rests on two primary pillars: cold-water commercial fisheries—with prawns, Greenland halibut, and cod accounting for over 90% of merchandise exports—and Denmark's annual block grant (Bloktilskud) of roughly $500–600 million, which funds around half of the public budget. The opening of a new international jet runway in Nuuk in late 2024, followed by Ilulissat in 2026, is transforming trans-Atlantic connectivity and Arctic adventure tourism. While retreating ice exposes world-class rare-earth and critical mineral deposits such as Tanbreez and Kvanefjeld, commercial mining remains constrained by harsh Arctic logistics, labor shortages, and strict environmental safeguards."
  },
  "Faeroe Is.": {
    "tier": "adv",
    "gdp_vi": "~4,1 tỷ USD (#168 thế giới)",
    "gdp_en": "~$4.1B (#168 globally)",
    "pc_vi": "~74.180 USD (PPP ~82.090 USD)",
    "pc_en": "~$74,180 (PPP ~$82,090)",
    "gr": "+0.8%",
    "sec": [
      61,
      21,
      18
    ],
    "main_vi": "Nuôi cá hồi Đại Tây Dương cao cấp trên vịnh hẹp (Bakkafrost), đánh bắt cá biển khơi (cá thu, cá trích, cá tuyết), vận tải biển & đóng tàu dịch vụ ngư nghiệp, du lịch cảnh quan Bắc Đại Tây Dương",
    "main_en": "Premium fjord-farmed Atlantic salmon (Bakkafrost), pelagic & demersal fisheries (mackerel, herring, cod), maritime shipping & vessel servicing, North Atlantic nature tourism",
    "note_vi": "Sở hữu tỷ lệ thất nghiệp thuộc hàng thấp nhất thế giới (~1%) và thu nhập bình quân đầu người vượt cả Đan Mạch lục địa, kinh tế Faroe xoay quanh chuỗi giá trị biển hiện đại bậc nhất hành tinh với hơn 90% kim ngạch xuất khẩu là cá hồi nuôi (tập đoàn Bakkafrost) và hải sản đánh bắt xa bờ. Nhờ vùng nước vịnh hẹp lạnh ổn định quanh năm do dòng biển Bắc Đại Tây Dương điều hòa, cá hồi Faroe đạt giá bán cao cấp hàng đầu tại thị trường Mỹ, EU và châu Á.",
    "note_en": "Boasting one of the world's lowest unemployment rates (~1%) and a per-capita GDP surpassing mainland Denmark, the Faroese economy revolves around a high-tech maritime cluster where seafood accounts for over 90% of exports. Led by global aquaculture champion Bakkafrost, salmon farmed in the islands' nutrient-rich, year-round temperate fjords commands premium prices across the US, European, and Asian markets."
  },
  "Denmark": {
    "tier": "adv",
    "gdp_vi": "~424 tỷ USD (#36 thế giới)",
    "gdp_en": "~$424B (#36 globally)",
    "pc_vi": "~71.030 USD (PPP ~80.940 USD)",
    "pc_en": "~$71,030 (PPP ~$80,940)",
    "gr": "+3.5%",
    "sec": [
      72,
      27,
      1
    ],
    "main_vi": "Dược phẩm & công nghệ sinh học (Novo Nordisk – thuốc tiểu đường/giảm cân Ozempic & Wegovy), vận tải container biển toàn cầu (Maersk), năng lượng gió ngoài khơi (Vestas, Ørsted), đồ chơi (LEGO), thịt lợn & bơ sữa công nghệ cao",
    "main_en": "Pharmaceuticals & biotech (Novo Nordisk – Ozempic & Wegovy), global container shipping (Maersk), offshore wind energy (Vestas, Ørsted), consumer goods (LEGO), high-tech pork & dairy agribusiness",
    "note_vi": "Kinh tế Đan Mạch đạt mức tăng trưởng và thặng dư tài khoản vãng lai kỷ lục ở châu Âu nhờ sự bùng nổ toàn cầu của tập đoàn dược phẩm Novo Nordisk (nhà sản xuất thuốc điều trị tiểu đường và béo phì Ozempic/Wegovy có vốn hóa từng vượt cả GDP quốc gia). Bên cạnh đó, đất nước chỉ 6 triệu dân này còn sở hữu những tập đoàn dẫn đầu thế giới về vận tải biển container (Maersk), tuabin và điện gió ngoài khơi (Vestas, Ørsted), đồ chơi LEGO và nông nghiệp chăn nuôi công nghệ cao.",
    "note_en": "Denmark has consistently outperformed wider European growth while running massive current-account surpluses (~10% of GDP), propelled by pharmaceutical giant Novo Nordisk—maker of blockbuster diabetes and weight-loss drugs Ozempic and Wegovy. Despite a population of just 6 million, the country also fields global industry leaders in container shipping (Maersk), offshore wind energy (Vestas, Ørsted), consumer goods (LEGO), and high-tech pork and dairy exports."
  },
  "Czechia": {
    "tier": "adv",
    "gdp_vi": "~347 tỷ USD (#44 thế giới)",
    "gdp_en": "~$347B (#44 globally)",
    "pc_vi": "~31.830 USD (PPP ~57.630 USD)",
    "pc_en": "~$31,830 (PPP ~$57,630)",
    "gr": "+1.3%",
    "sec": [
      66,
      32,
      2
    ],
    "main_vi": "Sản xuất ô tô & phụ tùng (Škoda Auto, Hyundai), cơ khí chế tạo & đầu máy xe lửa (Škoda Group), công nghiệp quốc phòng & đạn dược (CSG, Colt CZ), an ninh mạng & phần mềm, kính pha lê & bia",
    "main_en": "Automotive manufacturing (Škoda Auto, Hyundai), heavy machinery & rolling stock (Škoda Group), defense & ammunition (CSG, Colt CZ), cybersecurity & software, crystal glass & brewing",
    "note_vi": "Thừa hưởng 70% nền tảng công nghiệp của Đế quốc Áo – Hung xưa, Séc hiện có tỷ trọng công nghiệp chế tạo trong GDP cao bậc nhất EU (~32–35%) và tỷ lệ thất nghiệp thấp nhất khối (~2,7%). Nền kinh tế xoay quanh ngành sản xuất ô tô (Škoda Auto, Hyundai, Toyota xuất xưởng ~1,4 triệu xe/năm), cơ khí tàu điện (Škoda Group), phần mềm an ninh mạng (Avast) và đặc biệt là các tập đoàn công nghiệp quốc phòng – đạn dược đang mở rộng toàn cầu như Czechoslovak Group (CSG) và Colt CZ.",
    "note_en": "Inheriting the industrial heartland of former Austria-Hungary, Czechia maintains one of the EU's highest manufacturing shares (~32–35% of GDP) and lowest unemployment rates (~2.7%). Its export engine is powered by ~1.4 million vehicles built annually (Škoda Auto, Hyundai, Toyota), Škoda Group rail transit, cybersecurity software, and booming global defense giants Czechoslovak Group (CSG) and Colt CZ."
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
    "note_vi": "Do chịu lệnh cấm vận thương mại trực tiếp từ quốc tế, nền kinh tế Bắc Síp đã xoay sở phát triển hai ngành xuất khẩu dịch vụ đặc thù không bị rào cản hải quan hàng hóa: giáo dục đại học quốc tế (hơn 20 trường đại học thu hút trên 100.000 sinh viên từ Thổ Nhĩ Kỳ, châu Phi, Trung Đông và Trung Á) cùng du lịch nghỉ dưỡng – sòng bạc (casino, vốn bị cấm tại Thổ Nhĩ Kỳ và phần nam đảo Síp). Tuy nhiên, việc sử dụng đồng Lira Thổ Nhĩ Kỳ làm đồng tiền chính thức khiến người dân Bắc Síp phải gánh trọn lạm phát nhập khẩu và mất giá tiền tệ, buộc hầu hết giao dịch nhà đất, học phí và tiền thuê nhà phải định giá bằng đồng Bảng Anh (GBP), Euro hoặc USD.",
    "note_en": "Cut off from direct international goods trade by embargoes, Northern Cyprus built its economy around two service sectors immune to port restrictions: international higher education (hosting over 100,000 students from Turkey, Africa, the Middle East, and Asia across 20+ universities) and casino-resort tourism catering to mainland Turkish and foreign visitors. Because it uses the Turkish lira as legal tender, the territory suffers high imported inflation, prompting housing sales, rents, and university tuition to be priced informally in British pounds, euros, or US dollars while Ankara provides ongoing budgetary grants and infrastructure loans."
  },
  "Cyprus": {
    "tier": "adv",
    "gdp_vi": "~37,6 tỷ USD (#104 thế giới)",
    "gdp_en": "~$37.6B (#104 globally)",
    "pc_vi": "~38.670 USD (PPP ~63.010 USD)",
    "pc_en": "~$38,670 (PPP ~$63,010)",
    "gr": "+3.9%",
    "sec": [
      86,
      13,
      1
    ],
    "main_vi": "Quản lý đội tàu biển quốc tế (top 3 EU), du lịch biển Địa Trung Hải, dịch vụ CNTT – công nghệ tài chính, bất động sản, dược phẩm, phô mai Halloumi",
    "main_en": "International ship management (top 3 in EU), Mediterranean tourism, IT & fintech services, real estate, pharmaceuticals, Halloumi cheese exports",
    "note_vi": "Sau cuộc khủng hoảng ngân hàng năm 2013 và việc chấm dứt chương trình \"hộ chiếu vàng\" cũng như cắt đứt dòng vốn từ Nga theo lệnh trừng phạt của EU sau năm 2022, kinh tế Cộng hòa Síp đã chuyển đổi ngoạn mục sang trung tâm công nghệ thông tin – fintech (thu hút hàng trăm công ty phần mềm và công nghệ từ Israel, Ukraine, Đông Âu chuyển trụ sở tới Limassol), quản lý hàng hải và du lịch kỷ lục (~4 triệu khách/năm). Nhờ tăng trưởng GDP đạt trên 3%/năm (thuộc nhóm cao nhất Eurozone) và thặng dư ngân sách vững chắc, Síp đã đưa nợ công giảm nhanh xuống dưới 70% GDP và đang triển khai dự án cáp điện ngầm dưới biển sâu nhất thế giới (Great Sea Interconnector) nối lưới điện với Hy Lạp và Israel.",
    "note_en": "Having overhauled its banking sector after the 2013 financial crisis and shed Russian offshore capital post-2022, Cyprus now outperforms the Eurozone average (~3%+ GDP growth) thanks to booming tourism (~4 million visitors/year), global ship management, and a thriving IT and fintech cluster in Limassol attracting tech firms from Israel and Eastern Europe. Running solid fiscal surpluses that have pushed public debt below 70% of GDP, Nicosia is advancing offshore gas development and the Great Sea Interconnector subsea power cable to end its status as the EU's last isolated electricity grid."
  },
  "Cuba": {
    "tier": "emg",
    "gdp_vi": "~95 tỷ USD (ước tính chính thức / quy đổi đa tỷ giá)",
    "gdp_en": "~$95B (official / multi-rate estimate)",
    "pc_vi": "~8.500 USD (thực tế theo tỷ giá thị trường tự do thấp hơn nhiều)",
    "pc_en": "~$8,500 (substantially lower at informal market exchange rates)",
    "gr": "-1.1%",
    "sec": [
      75,
      24,
      1
    ],
    "main_vi": "Du lịch biển (Varadero, La Habana), xuất khẩu dịch vụ y tế & bác sĩ ra nước ngoài, công nghệ sinh học & vắc-xin nội địa, khai thác niken & coban (Moa), xì gà Habanos, rượu rum & kiều hối",
    "main_en": "Beach & heritage tourism (Varadero, Havana), overseas medical mission services, domestic biotech & vaccines, nickel & cobalt mining (Moa), Habanos cigars, rum & remittances",
    "note_vi": "Nền kinh tế kế hoạch hóa tập trung của Cuba hiện phụ thuộc vào dịch vụ xuất khẩu chuyên gia y tế ra nước ngoài, du lịch biển – di sản (La Habana, Varadero), khai thác niken – coban tại vùng Moa (sở hữu một trong những trữ lượng coban lớn nhất thế giới), cùng các mặt hàng danh tiếng như xì gà thủ công Habanos, rượu rum và vắc-xin sinh học nội địa. Ngành mía đường — từng là biểu tượng kinh tế số 1 thế giới của hòn đảo suốt hai thế kỷ — đã suy sụp xuống mức sản lượng thấp nhất trong hơn 100 năm qua do thiếu nhiên liệu, phân bón và phụ tùng nhà máy. Bước sang năm 2025–2026, việc lưới điện nhiệt điện dầu già cỗi liên tục sập nguồn toàn quốc cùng sự sụt giảm khách du lịch và lạm phát tỷ giá chợ đen đang buộc Cuba phải mở cửa thận trọng hơn cho khu vực doanh nghiệp tư nhân nhỏ và vừa (MIPYMES).",
    "note_en": "Cuba's state-dominated socialist economy relies on overseas medical mission contracts, beach and heritage tourism (Havana and Varadero), nickel and cobalt mining at Moa (holding some of the world's largest cobalt reserves), domestic biotech vaccines, Habanos cigars, rum, and diaspora remittances. Once the world's sugar king, Cuba's sugar harvest has collapsed to its lowest level in over a century due to fuel, fertilizer, and machinery shortages. In 2025–2026, recurring nationwide blackouts across its aging oil-fired power plants, sluggish tourist arrivals, and steep informal-market currency depreciation are pressuring Havana to rely increasingly on newly legalized private small and medium enterprises (MIPYMES) for food and consumer goods imports."
  },
  "Croatia": {
    "tier": "adv",
    "gdp_vi": "~93 tỷ USD (#75 thế giới)",
    "gdp_en": "~$93B (#75 globally)",
    "pc_vi": "~24.050 USD (PPP ~49.550 USD)",
    "pc_en": "~$24,050 (PPP ~$49,550)",
    "gr": "+3.8%",
    "sec": [
      73,
      23,
      4
    ],
    "main_vi": "Du lịch bờ biển Adriatic & 1.200 hòn đảo (Dubrovnik, Split; chiếm ~20% GDP), công nghệ siêu xe điện & pin (Rimac), dược phẩm (Pliva), đóng tàu, trạm nhập khẩu LNG đảo Krk",
    "main_en": "Adriatic coast & island tourism (Dubrovnik, Split; ~20% of GDP), EV hypercar & battery tech (Rimac Group), pharmaceuticals (Pliva), shipbuilding, Krk LNG energy hub",
    "note_vi": "Việc gia nhập đồng thời Eurozone và Schengen vào năm 2023 đã xóa bỏ hoàn toàn chi phí đổi tiền và thời gian chờ đợi ở biên giới cho hàng chục triệu du khách châu Âu, đưa ngành du lịch bờ biển Adriatic và quần đảo Dalmatia (Dubrovnik, Split, Istria) đóng góp gần 20% GDP. Bên cạnh du lịch và dược phẩm (Pliva), Croatia đang vươn lên thành nút giao năng lượng khu vực khi nâng gấp đôi công suất trạm LNG đảo Krk lên 6,1 tỷ m³/năm (cấp khí đốt cho cả Hungary, Slovenia) và sở hữu tập đoàn công nghệ pin – siêu xe điện Rimac (nắm quyền kiểm soát thương hiệu Bugatti Rimac).",
    "note_en": "Simultaneous entry into the Eurozone and Schengen Area in 2023 eliminated currency friction and border waits for European travelers, propelling Adriatic tourism (Dubrovnik, Split, Istria) to nearly 20% of GDP with over 21 million annual visitors. Beyond tourism and pharmaceuticals (Pliva), Croatia is expanding its Krk Island LNG terminal to 6.1 billion cubic meters per year as a regional non-Russian gas hub while fostering tech unicorns led by Rimac Group (majority owner of Bugatti Rimac) and cloud platform Infobip."
  },
  "Côte d'Ivoire": {
    "tier": "dev",
    "gdp_vi": "~87 tỷ USD (#77 thế giới)",
    "gdp_en": "~$87B (#77 globally)",
    "pc_vi": "~2.730 USD (PPP ~7.680 USD)",
    "pc_en": "~$2,730 (PPP ~$7,680)",
    "gr": "+6.0%",
    "sec": [
      57,
      26,
      17
    ],
    "main_vi": "Ca cao (#1 thế giới, chiếm ~40% nguồn cung toàn cầu), hạt điều (#1 sản xuất thế giới), khai thác dầu khí mới (mỏ Baleine), vàng, cao su tự nhiên, cảng biển Abidjan & San-Pédro",
    "main_en": "Cocoa beans (#1 globally, ~40% of world supply), cashew nuts (#1 global producer), offshore oil & gas (Baleine field), gold mining, natural rubber, Abidjan & San-Pédro port logistics",
    "note_vi": "Là trụ cột của khối đồng Franc CFA Tây Phi (neo cố định vào Euro), Bờ Biển Ngà cung cấp khoảng 40% sản lượng ca cao và hơn 20% sản lượng hạt điều của toàn thế giới, đồng thời là nhà xuất khẩu lớn về cao su tự nhiên, dầu cọ, chuối và vàng. Thay vì chỉ xuất khẩu hạt thô như trước, chính phủ đang đẩy mạnh công nghiệp chế biến sâu (vươn lên vị trí số 1 thế giới về công suất nghiền ca cao ngay tại chỗ năm 2024–2025) kết hợp khai thác mỏ dầu khí Baleine, giúp nền kinh tế giữ vững đà tăng trưởng ~6,5%/năm bất chấp biến động khí hậu ảnh hưởng tới mùa vụ ca cao.",
    "note_en": "Serving as the economic locomotive of the Euro-pegged West African CFA franc zone, Côte d'Ivoire supplies ~40% of the world's cocoa and leads global cashew production alongside burgeoning gold, rubber, and palm oil exports. By aggressively expanding domestic value-added processing—overtaking the Netherlands as the world's #1 cocoa-grinding nation in 2024–2025—and ramping up offshore oil and gas production at the Baleine field, the economy maintains ~6.5% annual growth despite climate pressures on aging cocoa trees."
  },
  "Costa Rica": {
    "tier": "adv",
    "gdp_vi": "~97 tỷ USD (#73 thế giới)",
    "gdp_en": "~$97B (#73 globally)",
    "pc_vi": "~18.850 USD (PPP ~31.550 USD)",
    "pc_en": "~$18,850 (PPP ~$31,550)",
    "gr": "+4.1%",
    "sec": [
      75,
      21,
      4
    ],
    "main_vi": "Sản xuất thiết bị y tế chính xác (van tim, ống thông, nha khoa – mặt hàng xuất khẩu #1), đóng gói & kiểm thử bán dẫn (Intel), dịch vụ chia sẻ toàn cầu (GBS/CNTT), du lịch sinh thái, dứa & cà phê",
    "main_en": "Precision medical devices (heart valves, catheters, dental – #1 export), semiconductor assembly & testing (Intel), global business & IT services, eco-tourism, pineapples & specialty coffee",
    "note_vi": "Là một câu chuyện thành công kinh điển về nâng cấp chuỗi giá trị ở thế giới đang phát triển, Costa Rica đã chuyển dịch từ nền kinh tế xuất khẩu cà phê – chuối truyền thống sang trung tâm sản xuất công nghệ cao và dịch vụ tri thức của Mỹ Latinh. Hiện nay, thiết bị y tế chính xác (van tim nhân tạo, ống thông mạch máu, dụng cụ phẫu thuật và nha khoa từ hơn 90 tập đoàn đa quốc gia trong các khu thương mại tự do) chiếm tới hơn 40% tổng kim ngạch xuất khẩu hàng hóa, vượt xa dứa tươi (số 1 thế giới), chuối và cà phê đặc sản. Bên cạnh việc nhà máy Intel tại San José mở rộng đóng gói – kiểm thử chip bán dẫn và hơn 100 tập đoàn thuộc danh sách Fortune 500 đặt trung tâm dịch vụ toàn cầu (GBS) tại đây, thách thức lớn nhất của đất nước là hạ tầng cảng – đường bộ quá tải và đồng nội tệ Colón tăng giá mạnh.",
    "note_en": "Widely cited as a textbook model of structural economic upgrading in Latin America, Costa Rica has pivoted from traditional coffee and banana exports into a high-tech manufacturing and knowledge-services hub. Today, precision life-sciences medical devices—such as heart valves, catheters, and surgical instruments produced by over 90 multinationals in free-trade zones—account for over 40% of merchandise exports, alongside #1 global pineapple shipments and specialty coffee. Bolstered by Intel's large semiconductor assembly-and-test campus and regional shared-services centers for over 100 Fortune 500 firms, the economy grows briskly while working to modernize congested port and highway infrastructure."
  },
  "Dem. Rep. Congo": {
    "tier": "low",
    "gdp_vi": "~76 tỷ USD (#84 thế giới)",
    "gdp_en": "~$76B (#84 globally)",
    "pc_vi": "~690 USD (PPP ~1.820 USD)",
    "pc_en": "~$690 (PPP ~$1,820)",
    "gr": "+6.1%",
    "sec": [
      49,
      40,
      11
    ],
    "main_vi": "Khai thác coban (#1 thế giới, chiếm >70% nguồn cung toàn cầu), đồng trữ lượng hàm lượng cao (#2 thế giới, siêu mỏ Kamoa-Kakula), coltan (tantalum), kim cương, vàng, tiềm năng thủy điện sông Congo (Inga)",
    "main_en": "Cobalt mining (#1 globally, >70% of world supply), high-grade copper (#2 globally, Kamoa-Kakula megamine), coltan (tantalum), diamonds, gold, Congo River hydropower (Inga dams)",
    "note_vi": "Ngành khai khoáng tại vành đai đồng – coban Katanga (các tỉnh Lualaba và Haut-Katanga) là động lực tăng trưởng tuyệt đối của CHDC Congo, giúp GDP tăng trưởng 6–8%/năm khi nước này cung cấp trên 70% lượng coban thế giới (chủ yếu do các tập đoàn Trung Quốc như CMOC vận hành) và vươn lên đứng thứ 2 toàn cầu về sản lượng đồng năm 2024–2025 nhờ siêu mỏ Kamoa-Kakula (của Ivanhoe Mines và Zijin Mining). Để thoát khỏi sự phụ thuộc lâu năm vào các cảng biển xa xôi ở Nam Phi và Tanzania, hiện nay quặng đồng và coban từ Katanga đang bắt đầu được xuất khẩu thẳng ra Đại Tây Dương qua tuyến đường sắt Hành lang Lobito (đi qua Angola do Mỹ và EU tài trợ), dù xung đột ở miền Đông và nạn tham nhũng vẫn khiến đa số người dân sống dưới mức nghèo khổ.",
    "note_en": "Booming copper and cobalt output in the southern Katanga Copperbelt (Lualaba and Haut-Katanga provinces) drives 6–8% annual GDP growth, with DR Congo supplying over 70% of global cobalt (led by China's CMOC) and overtaking Peru in 2024–2025 as the world's #2 copper producer thanks to the high-grade Kamoa-Kakula megamine. While the US- and EU-backed Lobito Atlantic Railway Corridor through Angola is slashing mineral export times to Western markets and President Tshisekedi renegotiated major Chinese infrastructure-for-minerals deals in 2024, eastern conflict and severe infrastructure deficits keep per-capita income below $700."
  },
  "Congo": {
    "tier": "dev",
    "gdp_vi": "~15,7 tỷ USD (#140 thế giới)",
    "gdp_en": "~$15.7B (#140 globally)",
    "pc_vi": "~2.480 USD (PPP ~7.000 USD)",
    "pc_en": "~$2,480 (PPP ~$7,000)",
    "gr": "+2.1%",
    "sec": [
      48,
      42,
      10
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi (TotalEnergies, Eni), xuất khẩu khí thiên nhiên hóa lỏng (dự án Congo FLNG), gỗ nhiệt đới lưu vực Congo, khai thác kali (potash) & quặng sắt, cảng biển nước sâu Pointe-Noire",
    "main_en": "Offshore crude oil extraction (TotalEnergies, Eni), floating liquefied natural gas exports (Congo FLNG), tropical timber, potash & iron ore mining, Pointe-Noire deepwater port",
    "note_vi": "Dầu thô ngoài khơi và khí thiên nhiên hóa lỏng (LNG) chiếm tới hơn 80% kim ngạch xuất khẩu và khoảng 2/3 nguồn thu ngân sách của Cộng hòa Congo, bên cạnh xuất khẩu gỗ tròn nhiệt đới, đồng và các dự án khai thác muối kali (potash) quy mô lớn tại vùng ven biển Kouilou. Dù việc vận hành dự án Congo FLNG giai đoạn 2024–2026 đang mở ra động lực tăng trưởng mới và đồng Franc CFA giữ ổn định tiền tệ, nền kinh tế vẫn chịu gánh nặng nợ công cao (từng phải tái cơ cấu nợ với các nhà buôn dầu và Trung Quốc) và nghịch lý phải nhập khẩu phần lớn lương thực dù có hàng triệu hecta đất màu mỡ bỏ trống.",
    "note_en": "Offshore crude oil and newly launched floating LNG exports account for over 80% of export earnings and roughly two-thirds of state revenues in this OPEC member, supplemented by tropical timber and coastal potash mining projects in Kouilou. While the 2024–2026 expansion of Eni's Congo FLNG project boosts hydrocarbon output within the stable CFA franc zone, high public debt servicing and the paradox of importing most staple foods despite vast uncultivated arable land remain key structural weaknesses."
  },
  "Comoros": {
    "tier": "dev",
    "gdp_vi": "~1,6 tỷ USD (#185 thế giới)",
    "gdp_en": "~$1.6B (#185 globally)",
    "pc_vi": "~1.860 USD (PPP ~4.050 USD)",
    "pc_en": "~$1,860 (PPP ~$4,050)",
    "gr": "+3.3%",
    "sec": [
      52,
      10,
      38
    ],
    "main_vi": "Kiều hối từ cộng đồng người Comoros tại Pháp (>20% GDP), tinh dầu hoa ngọc lan tây (ylang-ylang #1 thế giới cho nước hoa Pháp), đinh hương, vani ('Quần đảo Hương liệu'), đánh bắt cá",
    "main_en": "Diaspora remittances from France (>20% of GDP), ylang-ylang essential oil (#1 global supplier for luxury perfumes), cloves, Bourbon vanilla ('Perfume Islands'), artisanal fishing",
    "note_vi": "Được mệnh danh là 'Quần đảo Hương liệu' nhờ đứng đầu thế giới về xuất khẩu tinh dầu hoa ngọc lan tây (nguyên liệu cốt lõi cho nước hoa Chanel No. 5 và mỹ phẩm Pháp) cùng vani và đinh hương, song nền kinh tế Comoros lại sống dựa vào dòng kiều hối chiếm trên 20% GDP. Việc neo đồng Franc Comoros cố định vào đồng Euro giúp kiểm soát lạm phát ổn định, nhưng chi phí điện năng đắt đỏ, thiếu cảng nước sâu và quy mô thị trường nhỏ hẹp vẫn là rào cản lớn đối với công nghiệp hóa.",
    "note_en": "Famed as the 'Perfume Islands' for ranking as the world's top exporter of ylang-ylang essential oil—a key ingredient in luxury French perfumes—alongside vanilla and cloves, Comoros nonetheless relies on diaspora remittances from France for over 20% of GDP. While a currency peg to the Euro anchors macroeconomic stability, chronic electricity shortages, shallow port facilities, and vulnerability to cyclones continue to constrain private-sector growth."
  },
  "Colombia": {
    "tier": "emg",
    "gdp_vi": "~420 tỷ USD (#38 thế giới, #4 Mỹ Latin)",
    "gdp_en": "~$420B (#38 globally, #4 in Latin America)",
    "pc_vi": "~7.950 USD (PPP ~22.440 USD)",
    "pc_en": "~$7,950 (PPP ~$22,440)",
    "gr": "+1.5%",
    "sec": [
      64,
      26,
      10
    ],
    "main_vi": "Dầu thô (Ecopetrol) & than đá xuất khẩu, cà phê Arabica chế biến ướt (#3 thế giới), hoa tươi cắt cành (#2 thế giới), ngọc lục bảo (#1 chất lượng thế giới), du lịch & dịch vụ công nghệ (Medellín, Bogotá)",
    "main_en": "Crude oil (Ecopetrol) & thermal coal exports, washed Arabica coffee (#3 globally), cut flowers (#2 globally), emeralds, tourism & nearshore tech services (Medellín, Bogotá)",
    "note_vi": "Là nền kinh tế lớn thứ tư Mỹ Latinh và thành viên khối OECD, Colombia nổi tiếng với kỷ lục tín nhiệm hiếm có ở Nam Mỹ khi chưa từng vỡ nợ quốc gia kể từ thập niên 1930, đồng thời giữ vị thế nhà xuất khẩu cà phê Arabica chế biến ướt (#3), hoa tươi cắt cành (#2) và ngọc lục bảo chất lượng cao hàng đầu thế giới. Tuy nhiên, do dầu thô (Ecopetrol) và than đá vẫn chiếm gần một nửa kim ngạch xuất khẩu hàng hóa, việc chính phủ ngừng cấp phép thăm dò dầu khí mới để thúc đẩy chuyển dịch năng lượng xanh đang đặt ra bài toán cân đối thu ngân sách và tỷ giá bên cạnh điểm nghẽn hạ tầng giao thông vượt núi Andes.",
    "note_en": "As Latin America's fourth-largest economy and an OECD member, Colombia boasts an unbroken sovereign debt repayment record dating back to the 1930s while ranking among the world's top exporters of washed Arabica coffee (#3), cut flowers (#2), and high-grade emeralds. However, because crude oil (Ecopetrol) and thermal coal still generate nearly half of merchandise export earnings, the government's push to halt new oil exploration licenses in favor of green transition and tourism poses fiscal and external-balance challenges alongside high Andean transport costs."
  },
  "China": {
    "tier": "emg",
    "gdp_vi": "~18.730 tỷ USD (#2 thế giới, #1 PPP)",
    "gdp_en": "~$18.73T (#2 globally, #1 PPP)",
    "pc_vi": "~13.290 USD (PPP ~27.140 USD)",
    "pc_en": "~$13,290 (PPP ~$27,140)",
    "gr": "+5.0%",
    "sec": [
      57,
      36,
      7
    ],
    "main_vi": "Xe điện (EV), pin lithium, năng lượng mặt trời, điện tử, máy móc công nghiệp, thép, đất hiếm, đóng tàu, thương mại điện tử",
    "main_en": "EVs, lithium batteries, solar panels, electronics, industrial machinery, steel, rare earths, shipbuilding, e-commerce",
    "note_vi": "Chiếm gần 30% giá trị gia tăng sản xuất toàn cầu, Trung Quốc là 'công xưởng thế giới' dẫn đầu về xe điện (EV), pin lithium, điện mặt trời và đất hiếm. Bắc Kinh đang chuyển dịch từ tăng trưởng dựa vào bất động sản sang công nghệ cao như AI, bán dẫn nội địa và robot công nghiệp. Tuy nhiên, nền kinh tế đối mặt áp lực giảm phát tiêu dùng, nợ địa phương cao, kiểm soát chip từ Mỹ và dân số sụt giảm.",
    "note_en": "Accounting for nearly 30% of global manufacturing value-added, China dominates supply chains for EVs, lithium batteries, solar panels, and rare earths. Beijing is pivoting from debt-fueled property growth toward high-tech 'new productive forces' in AI, domestic semiconductors, and advanced robotics. Yet the economy faces persistent headwinds from weak household consumption, local government debt, US tech export controls, and a shrinking workforce."
  },
  "Macao": {
    "tier": "adv",
    "gdp_vi": "~50 tỷ USD (#94 thế giới)",
    "gdp_en": "~$50B (#94 globally)",
    "pc_vi": "~72.000 USD (PPP ~127.140 USD)",
    "pc_en": "~$72,000 (PPP ~$127,140)",
    "gr": "+7.8%",
    "sec": [
      95,
      5,
      0
    ],
    "main_vi": "Du lịch nghỉ dưỡng phức hợp, giải trí có thưởng (casino), hội nghị MICE, dịch vụ tài chính – thương mại Trung Quốc – các nước nói tiếng Bồ Đào Nha",
    "main_en": "Integrated resorts, gaming & casino tourism, MICE conventions, Lusophone-China trade & financial services",
    "note_vi": "Độc quyền kinh doanh giải trí có thưởng hợp pháp tại Trung Quốc mang lại cho Ma Cao mức GDP bình quân đầu người theo sức mua tương đương (PPP) thuộc nhóm cao nhất thế giới. Thuế từ các tổ hợp casino chiếm hơn 80% thu ngân sách, giúp chính quyền duy trì thặng dư tài khóa lớn và phúc lợi tiền mặt hàng năm cho người dân. Theo giấy phép mới từ năm 2023, 6 tập đoàn casino buộc phải đầu tư hàng tỷ USD vào hội nghị MICE, y tế và giải trí phi cờ bạc.",
    "note_en": "Holding China's sole legal casino monopoly gives Macao one of the highest PPP per-capita incomes on Earth and massive fiscal reserves. Gaming taxes generate over 80% of government revenue, funding generous social welfare and annual cash payouts with zero public debt. Under ten-year concessions signed in 2023, resort operators are mandated to invest billions into non-gaming MICE conventions, entertainment, and traditional Chinese medicine."
  },
  "Hong Kong": {
    "tier": "adv",
    "gdp_vi": "~408 tỷ USD (#39 thế giới)",
    "gdp_en": "~$408B (#39 globally)",
    "pc_vi": "~54.280 USD (PPP ~75.340 USD)",
    "pc_en": "~$54,280 (PPP ~$75,340)",
    "gr": "+2.6%",
    "sec": [
      94,
      6,
      0
    ],
    "main_vi": "Ngân hàng & tài chính quốc tế, quản lý tài sản, trung chuyển cảng biển & hàng không, thương mại xuất nhập khẩu, bảo hiểm",
    "main_en": "International banking & finance, wealth management, port & air logistics transshipment, re-export trade, insurance",
    "note_vi": "Hồng Kông là trung tâm huy động vốn cổ phần (IPO), ngân hàng và quản lý tài sản lớn nhất nối Trung Quốc đại lục với dòng vốn quốc tế. Lợi thế cốt lõi của đặc khu nằm ở thuế suất thấp, tự do luân chuyển vốn, hệ thống thông luật và đồng HKD neo chặt vào USD từ năm 1983. Đặc khu đang đẩy mạnh thu hút văn phòng gia đình (family offices) và tài chính xanh để vượt qua áp lực địa chính trị.",
    "note_en": "Hong Kong serves as the premier offshore capital market, IPO venue, and wealth-management gateway connecting Mainland China with global investors. Its economy thrives on low taxation, free capital flows, common-law commercial courts, and a currency board pegging the HKD to the US dollar since 1983. Amid geopolitical tensions, the city is actively courting family offices, green finance, and fintech within the Greater Bay Area."
  },
  "Chile": {
    "tier": "adv",
    "gdp_vi": "~329 tỷ USD (#45 thế giới)",
    "gdp_en": "~$329B (#45 globally)",
    "pc_vi": "~16.660 USD (PPP ~36.070 USD)",
    "pc_en": "~$16,660 (PPP ~$36,070)",
    "gr": "+2.8%",
    "sec": [
      62,
      34,
      4
    ],
    "main_vi": "Khai thác đồng (#1 thế giới, ~25% nguồn cung toàn cầu – Codelco, Escondida), lithium sa mạc Atacama (#2 sản xuất, #1 trữ lượng thế giới), cá hồi nuôi (#2 thế giới), trái cây ôn đới trái vụ (anh đào, nho) & rượu vang, năng lượng mặt trời & hydro xanh",
    "main_en": "Copper mining (#1 globally, ~25% of world supply – Codelco, Escondida), Atacama brine lithium (#2 producer, #1 reserves), farmed salmon (#2 globally), counter-seasonal fruit (cherries, grapes) & wine, solar & green hydrogen",
    "note_vi": "Là nền kinh tế có xếp hạng tín nhiệm quốc gia cao nhất Nam Mỹ (hạng A) với hệ thống tài chính sâu rộng và mạng lưới hiệp định thương mại tự do phủ khắp các thị trường chiếm gần 90% GDP toàn cầu. Giữ vị thế thống trị thế giới về xuất khẩu đồng (~25% thị phần toàn cầu), lithium chiết xuất từ nước muối sa mạc Atacama, cá hồi nuôi (#2 thế giới) và trái cây ôn đới trái vụ (anh đào xuất sang Trung Quốc), Chile còn đang đẩy mạnh thu hút đầu tư vào điện mặt trời tại Atacama và sản xuất hydro xanh tại vùng cực nam Magallanes.",
    "note_en": "Boasts South America's highest sovereign credit rating (A-grade), deep domestic institutional capital pools, and free-trade agreements covering economies that generate nearly 90% of global GDP. Commanding global dominance in copper (~25% of world supply), low-cost Atacama brine lithium, farmed salmon (#2 globally), and counter-seasonal fresh fruit (led by cherry exports to China), Chile is also pioneering utility-scale solar power in the Atacama and wind-powered green hydrogen in southern Magallanes."
  },
  "Chad": {
    "tier": "low",
    "gdp_vi": "~19,9 tỷ USD (#128 thế giới)",
    "gdp_en": "~$19.9B (#128 globally)",
    "pc_vi": "~980 USD (PPP ~2.770 USD)",
    "pc_en": "~$980 (PPP ~$2,770)",
    "gr": "+5.0%",
    "sec": [
      32,
      30,
      38
    ],
    "main_vi": "Khai thác dầu thô (xuất khẩu qua đường ống dài 1.070 km tới cảng Kribi của Cameroon), chăn nuôi gia súc sống xuất khẩu, nhựa cây keo (gum arabic #2 thế giới), bông vải & hạt vừng",
    "main_en": "Crude oil extraction (exported via the 1,070 km Chad–Cameroon pipeline to Kribi), live cattle & livestock exports, gum arabic (#2 globally), cotton & sesame seeds",
    "note_vi": "Kể từ khi đường ống dẫn dầu Chad – Cameroon hoàn thành năm 2003, dầu thô đã trở thành trụ cột tài khóa của Chad, đóng góp hơn 75–80% kim ngạch xuất khẩu và phần lớn thu ngân sách nhà nước (hiện do các công ty quốc doanh, Perenco và CNPC Trung Quốc khai thác sau khi quốc hữu hóa tài sản của ExxonMobil). Bên ngoài ngành dầu khí, khoảng 80% lực lượng lao động sống dựa vào chăn nuôi gia súc sống xuất khẩu sang Nigeria, trồng bông vải, hạt vừng và thu hoạch nhựa cây keo (Gum Arabic — đứng thứ hai thế giới sau Sudan). Điểm nghẽn lớn nhất của Chad là tỷ lệ tiếp cận điện năng thuộc nhóm thấp nhất hành tinh (<12% dân số), hạ tầng đường nhựa cực kỳ hạn chế và gánh nặng nhân đạo từ cuộc khủng hoảng tị nạn Sudan.",
    "note_en": "Since the completion of the World Bank-backed Chad–Cameroon pipeline in 2003, crude oil has dominated Chad's formal economy, generating over 75–80% of export earnings and the bulk of government revenue under state firm SHT, Perenco, and China's CNPC. Outside the oil enclave, roughly 80% of the population depends on subsistence farming and livestock herding, with live cattle exports, cotton, sesame, and gum arabic (#2 global supplier after Sudan) providing rural income. Structural growth remains severely constrained by one of the world's lowest electrification rates (<12%), minimal paved roads, and the fiscal strain of hosting over a million refugees from Sudan."
  },
  "Central African Rep.": {
    "tier": "low",
    "gdp_vi": "~2,8 tỷ USD (#174 thế giới)",
    "gdp_en": "~$2.8B (#174 globally)",
    "pc_vi": "~520 USD (PPP ~1.260 USD)",
    "pc_en": "~$520 (PPP ~$1,260)",
    "gr": "+1.5%",
    "sec": [
      47,
      22,
      31
    ],
    "main_vi": "Khai thác kim cương phù sa & vàng thủ công, gỗ tròn nhiệt đới, nông nghiệp tự cung tự cấp (sắn, ngô, lạc), cà phê & bông vải",
    "main_en": "Alluvial diamond & artisanal gold mining, tropical timber logging, subsistence agriculture (cassava, maize, groundnuts), coffee & cotton",
    "note_vi": "Sở hữu những bãi kim cương sa khoáng chất lượng ngọc quý hàng đầu thế giới, mỏ vàng trữ lượng lớn (như mỏ công nghiệp Ndassima), gỗ rừng mưa quý hiếm và trữ lượng uranium Bakouma, nhưng Cộng hòa Trung Phi vẫn có GDP bình quân đầu người nằm trong nhóm 5 nước thấp nhất hành tinh (~510 USD). Dù Quy trình Kimberley đã dỡ bỏ hoàn toàn lệnh cấm vận xuất khẩu kim cương đối với CAR vào cuối năm 2024 để mở đường cho thương mại hợp pháp, tình trạng buôn lậu khoáng sản qua biên giới, thiếu điện trầm trọng và chi phí vận tải đắt đỏ vẫn khiến ngân sách nhà nước phụ thuộc nặng vào viện trợ quốc tế.",
    "note_en": "Despite possessing prized gem-quality alluvial diamonds, industrial gold deposits (such as the Wagner-controlled Ndassima mine), virgin tropical timber, and uranium reserves at Bakouma, CAR remains among the five poorest countries on Earth (~$510 nominal GDP per capita). While the Kimberley Process fully lifted its decade-long diamond export embargo on CAR in late 2024, widespread cross-border smuggling, chronic electricity shortages, and exorbitant landlocked freight costs keep the formal economy tiny and heavily aid-dependent."
  },
  "Cabo Verde": {
    "tier": "emg",
    "gdp_vi": "~2,7 tỷ USD (#175 thế giới)",
    "gdp_en": "~$2.7B (#175 globally)",
    "pc_vi": "~5.170 USD (PPP ~11.180 USD)",
    "pc_en": "~$5,170 (PPP ~$11,180)",
    "gr": "+7.0%",
    "sec": [
      81,
      13,
      6
    ],
    "main_vi": "Du lịch biển đảo quanh năm (đảo Sal và Boa Vista chiếm ~25% GDP), kiều hối từ cộng đồng hải ngoại (đông hơn dân số trong nước), chế biến cá ngừ & cá thu đóng hộp, dịch vụ hàng hải & hàng không Đại Tây Dương",
    "main_en": "Year-round beach resort tourism (Sal and Boa Vista islands ~25% of GDP), diaspora remittances (diaspora outnumbers resident population), canned tuna & mackerel exports, mid-Atlantic maritime & air services",
    "note_vi": "Không có tài nguyên lòng đất và phải nhập khẩu hơn 80% lương thực, Cabo Verde vẫn đạt mức thu nhập bình quân đầu người cao gấp 3–4 lần các nước Tây Phi lục địa nhờ mô hình kinh tế dịch vụ dựa trên du lịch biển đảo (chiếm ~25% GDP, tập trung tại Sal và Boa Vista) và dòng kiều hối (chiếm ~12–15% GDP) từ hơn 1 triệu người Cabo Verde ở Mỹ và châu Âu. Việc neo đồng Escudo cố định vào đồng Euro từ năm 1999 giúp giữ lạm phát thấp, trong khi chính phủ đang thúc đẩy kinh tế số (TechPark), kinh tế biển xanh và giảm chi phí vận tải phà/hàng không liên đảo.",
    "note_en": "Despite possessing virtually no mineral resources and importing over 80% of its food, Cabo Verde boasts a per-capita income three to four times higher than mainland West Africa thanks to a service-led economy anchored by European beach resort tourism (~25% of GDP on Sal and Boa Vista) and diaspora remittances (~12–15% of GDP). Pegging the Cape Verdean escudo to the Euro since 1999 ensures low inflation, while the government is expanding renewable energy, digital tech parks, and inter-island ferry and flight connectivity to reduce high public debt."
  },
  "Canada": {
    "tier": "adv",
    "gdp_vi": "~2.270 tỷ USD (#9 thế giới)",
    "gdp_en": "~$2.27T (#9 globally)",
    "pc_vi": "~55.020 USD (PPP ~65.480 USD)",
    "pc_en": "~$55,020 (PPP ~$65,480)",
    "gr": "+2.0%",
    "sec": [
      69,
      29,
      2
    ],
    "main_vi": "Dầu khí & cát dầu Alberta (#4 sản xuất dầu thế giới), ngân hàng – bảo hiểm & quỹ hưu trí (Toronto), ô tô & hàng không vũ trụ (Ontario, Quebec), khoáng sản chiến lược (kali/potash #1 thế giới, uranium #2, vàng, niken), gỗ & nông sản (lúa mì, hạt cải dầu canola)",
    "main_en": "Oil sands & natural gas (#4 global oil producer), banking & pension finance (Toronto), automotive & aerospace manufacturing (Ontario, Quebec), critical minerals (#1 potash, #2 uranium, gold, nickel), timber & agribusiness (wheat, canola)",
    "note_vi": "Là nền kinh tế lớn thứ 9–10 thế giới trong nhóm G7, Canada kết hợp kho tài nguyên thiên nhiên khổng lồ (trữ lượng cát dầu Alberta lớn thứ 3 thế giới, kali số 1, uranium số 2, niken, vàng và lúa mì) với khu vực dịch vụ tài chính – ngân hàng cực kỳ vững mạnh tại Toronto. Hơn 75% kim ngạch xuất khẩu của Canada chảy sang thị trường Hoa Kỳ thông qua hệ thống đường ống dẫn dầu, lưới điện và chuỗi cung ứng ô tô tích hợp theo hiệp định USMCA. Việc mở rộng đường ống dẫn dầu Trans Mountain (TMX) ra bờ biển Thái Bình Dương gần đây giúp Ottawa đa dạng hóa xuất khẩu năng lượng sang châu Á, dù nền kinh tế vẫn chịu áp lực từ chi phí nhà ở cao và năng suất lao động tăng chậm.",
    "note_en": "As a G7 economy ranking among the world's ten largest, Canada pairs an extraordinary resource endowment—holding the third-largest oil reserves globally in Alberta's oil sands, #1 potash output, #2 uranium, and vast timber and grain exports—with Toronto's rock-solid banking and pension fund sector. Over 75% of Canadian merchandise exports head south to the United States via deeply integrated USMCA automotive, manufacturing, and pipeline networks. While the newly expanded Trans Mountain (TMX) pipeline to the Pacific coast boosts Asian energy export capacity, Canada contends with high household debt, housing shortages, and lagging business investment."
  },
  "Cameroon": {
    "tier": "dev",
    "gdp_vi": "~53 tỷ USD (#91 thế giới)",
    "gdp_en": "~$53B (#91 globally)",
    "pc_vi": "~1.830 USD (PPP ~5.600 USD)",
    "pc_en": "~$1,830 (PPP ~$5,600)",
    "gr": "+3.5%",
    "sec": [
      55,
      25,
      20
    ],
    "main_vi": "Dầu thô & khí thiên nhiên hóa lỏng (FLNG Kribi), ca cao (#4–5 thế giới), gỗ nhiệt đới, cà phê, chuối & bông vải, luyện nhôm (Alucam), cảng biển trung chuyển Douala & Kribi",
    "main_en": "Crude oil & floating LNG (Kribi), cocoa beans (#4–5 globally), tropical timber, coffee, bananas & cotton, aluminum smelting (Alucam), Douala & Kribi port transit logistics",
    "note_vi": "Nhờ sự đa dạng khí hậu hiếm có, Cameroon sở hữu nền kinh tế cân bằng nhất Trung Phi (chiếm >40% GDP khối đồng Franc CFA Trung Phi) khi không phụ thuộc độc tôn vào dầu mỏ mà còn xuất khẩu mạnh khí hóa lỏng (LNG), ca cao (top 5 thế giới), gỗ nhiệt đới, cà phê, chuối, bông vải và nhôm luyện (nhà máy Alucam). Việc đưa nhà máy thủy điện Nachtigal (420 MW, cung cấp gần 30% sản lượng điện quốc gia) vào vận hành năm 2024–2025 cùng mở rộng cảng nước sâu Kribi đang tháo gỡ nút thắt năng lượng – logistics, dù xung đột tại vùng nói tiếng Anh (nơi trồng nhiều ca cao và dầu cọ) cùng bộ máy hành chính già cỗi vẫn kìm hãm tiềm năng bứt phá.",
    "note_en": "Thanks to its ecological diversity, Cameroon boasts the largest and most diversified economy in the Central African CFA franc zone (CEMAC, >40% of regional GDP), balancing offshore crude oil and floating LNG exports with world-class cocoa (#4–5 globally), tropical timber, cotton, bananas, aluminum smelting, and transit port services for Chad and CAR. The 2024–2025 commissioning of the 420 MW Nachtigal hydroelectric dam (expanding national generation capacity by nearly 30%) and Phase 2 of the deep-water Port of Kribi are easing infrastructure bottlenecks, though the Anglophone conflict and governance rigidities continue to weigh on investment."
  },
  "Cambodia": {
    "tier": "dev",
    "gdp_vi": "~46 tỷ USD (#97 thế giới, #8 Đông Nam Á)",
    "gdp_en": "~$46B (#97 globally, #8 in ASEAN)",
    "pc_vi": "~2.630 USD (PPP ~7.980 USD)",
    "pc_en": "~$2,630 (PPP ~$7,980)",
    "gr": "+6.0%",
    "sec": [
      38,
      44,
      18
    ],
    "main_vi": "Dệt may – da giày – túi xách xuất khẩu (sang Mỹ, EU), xây dựng & bất động sản, du lịch (Angkor Wat), lúa gạo & hạt điều",
    "main_en": "Garments, footwear & travel goods exports (to US & EU), construction & real estate, tourism (Angkor Wat), rice & cashew nuts",
    "note_vi": "Kinh tế Campuchia (~46 tỷ USD) tăng trưởng ~5,5–6%/năm dựa vào gia công dệt may – da giày – túi xách xuất sang Mỹ và EU, du lịch Angkor Wat, xây dựng và nông sản (gạo, hạt điều, cao su, sắn). Nền kinh tế đô la hóa rất cao (USD chiếm hơn 80% giao dịch bên cạnh đồng Riel), giúp ổn định tỷ giá nhưng thu hẹp dư địa chính sách tiền tệ. Điểm nghẽn lớn là công nghiệp mới dừng ở gia công giá trị thấp, giá điện cao và áp lực mất ưu đãi thuế quan khi rời nhóm nước kém phát triển (LDC) năm 2029.",
    "note_en": "Cambodia's ~$46B economy grows at ~5.5–6% annually, driven by low-cost garment, footwear, and travel-goods assembly for US and EU markets, Angkor Wat tourism, construction, and agro-exports (rice, cashews, rubber). Over 80% dollarization alongside the Riel anchors price stability but limits central bank monetary tools. Key structural challenges include upgrading beyond simple cut-make-trim garment assembly, lowering high electricity costs, and preparing for graduation from Least Developed Country (LDC) trade preferences in 2029."
  },
  "Myanmar": {
    "tier": "dev",
    "gdp_vi": "~74 tỷ USD (#86 thế giới, #7 Đông Nam Á)",
    "gdp_en": "~$74B (#86 globally, #7 in ASEAN)",
    "pc_vi": "~1.360 USD (PPP ~6.010 USD)",
    "pc_en": "~$1,360 (PPP ~$6,010)",
    "gr": "-1.0%",
    "sec": [
      38,
      36,
      26
    ],
    "main_vi": "Khí đốt tự nhiên (xuất sang Thái Lan & Trung Quốc), đất hiếm nặng, ngọc bích (jade), nông sản (gạo, đậu đỗ), dệt may gia công",
    "main_en": "Natural gas pipelines (to Thailand & China), heavy rare earths, jade & gems, agriculture (rice, pulses), garment assembly",
    "note_vi": "Myanmar giàu tài nguyên thô gồm khí đốt tự nhiên (bơm qua đường ống sang Thái Lan, Trung Quốc), ngọc bích (>70% nguồn cung thế giới) và quặng đất hiếm nặng tại bang Kachin xuất sang Trung Quốc, cùng gia công may mặc giá rẻ. Tuy nhiên, nội chiến leo thang từ năm 2021 và cấm vận phương Tây đã làm đồng Kyat sụp đổ, mất điện diện rộng và đứt gãy thương mại biên giới. Kinh tế hiện bị chia cắt theo các vùng kiểm soát vũ trang, đẩy gần một nửa dân số rơi vào cảnh nghèo đói.",
    "note_en": "Myanmar relies on raw resource extraction—offshore natural gas piped to Thailand and China, jadeite, and Kachin heavy rare-earth ores exported to China—alongside low-cost garment assembly and agriculture. Escalating civil war since the 2021 coup has sparked currency collapse, chronic blackouts, Western sanctions, and the closure of vital border trade routes. Economic activity has fractured into rival military and ethnic zones, pushing nearly half the population into poverty."
  },
  "Burundi": {
    "tier": "low",
    "gdp_vi": "~3,0 tỷ USD (#173 thế giới)",
    "gdp_en": "~$3.0B (#173 globally)",
    "pc_vi": "~220 USD (PPP ~1.190 USD)",
    "pc_en": "~$220 (PPP ~$1,190)",
    "gr": "+4.1%",
    "sec": [
      45,
      18,
      37
    ],
    "main_vi": "Cà phê Arabica trồng trên vùng cao & trà đen (chiếm >80% nguồn thu ngoại tệ hàng hóa), nông nghiệp tự cung tự cấp (chuối, sắn, đậu), khai thác vàng thủ công, trữ lượng niken (Musongati) & đất hiếm",
    "main_en": "High-altitude Arabica coffee & black tea (>80% of merchandise FX earnings), subsistence farming (plantains, cassava, beans), artisanal gold, undeveloped nickel (Musongati) & rare-earth deposits",
    "note_vi": "Với GDP bình quân đầu người danh nghĩa chỉ khoảng 230–250 USD (và ~950 USD theo sức mua PPP), Burundi hiện đứng ở vị trí nghèo nhất trên bảng xếp hạng kinh tế thế giới khi gần 90% dân số sống bằng nông nghiệp tự cung tự cấp (trồng chuối, sắn, đậu, ngô bằng cuốc tay). Hai mặt hàng xuất khẩu hợp pháp mang lại hơn 80% nguồn thu ngoại tệ hàng hóa là cà phê Arabica trồng trên đất núi lửa vùng cao và trà đen, nhưng sự thiếu hụt USD trầm trọng khiến chênh lệch tỷ giá chợ đen lớn và các trạm xăng tại Bujumbura thường xuyên cạn kiệt nhiên liệu. Hy vọng đổi đời lớn nhất của nền kinh tế nằm ở trữ lượng quặng niken tại Musongati (chiếm khoảng 6% trữ lượng niken toàn cầu) cùng các mỏ đất hiếm (Gakara), vanadi và vàng đang bắt đầu thu hút vốn đầu tư khai khoáng.",
    "note_en": "With a nominal GDP per capita of roughly $230–$250 (~$950 PPP), Burundi ranks as the world's lowest-income economy, where nearly 90% of the workforce depends on hand-tilled subsistence farming of plantains, cassava, beans, and maize. High-altitude Arabica coffee and black tea account for over 80% of official merchandise export earnings, leaving the country chronically starved of foreign exchange and prone to crippling fuel, fertilizer, and medicine shortages. Burundi's greatest untapped economic prize lies beneath its soil at Musongati—home to one of the world's largest undeveloped lateritic nickel deposits (~6% of global reserves)—alongside high-grade rare-earth elements at Gakara, vanadium, and gold."
  },
  "Burkina Faso": {
    "tier": "low",
    "gdp_vi": "~23,1 tỷ USD (#123 thế giới)",
    "gdp_en": "~$23.1B (#123 globally)",
    "pc_vi": "~980 USD (PPP ~2.900 USD)",
    "pc_en": "~$980 (PPP ~$2,900)",
    "gr": "+4.8%",
    "sec": [
      48,
      29,
      23
    ],
    "main_vi": "Khai thác vàng công nghiệp & thủ công (chiếm ~80% kim ngạch xuất khẩu, #4 châu Phi), bông vải ('vàng trắng' vùng Sahel), hạt điều & hạt vừng, chăn nuôi gia súc",
    "main_en": "Industrial & artisanal gold mining (~80% of export earnings, #4 producer in Africa), cotton ('white gold' of the Sahel), sesame & cashew nuts, livestock",
    "note_vi": "Từ năm 2009, vàng đã vượt qua bông vải để trở thành mạch máu ngoại tệ số một của Burkina Faso, chiếm tới ~80% tổng kim ngạch xuất khẩu và đưa nước này vào nhóm 4–5 nhà sản xuất vàng lớn nhất châu Phi. Mặc dù mất an ninh nông thôn đã buộc một số mỏ phải đóng cửa và làm hơn 2 triệu nông dân mất đất canh tác, giá vàng thế giới lập đỉnh cao kỷ lục trong giai đoạn 2024–2026 cùng chính sách quốc hữu hóa các mỏ Boungou, Wahgnion và xây nhà máy tinh luyện vàng đầu tiên tại Ouagadougou đã giúp chính quyền quân sự tăng mạnh nguồn thu ngân sách. Bên cạnh vàng, nước này vẫn là một trong những nhà sản xuất bông vải, hạt vừng và hạt điều hàng đầu vùng Sahel.",
    "note_en": "Since overtaking cotton in 2009, gold has served as Burkina Faso's economic lifeline, generating roughly 80% of export earnings and ranking the country among Africa's top five gold producers. Although rural insecurity has forced several mine closures and displaced over two million farmers, record-high global bullion prices in 2024–2026—combined with the junta's nationalization of the Boungou and Wahgnion mines and the opening of a domestic gold refinery in Ouagadougou—have bolstered state revenues. Outside mining, the vast majority of the workforce depends on rain-fed cotton ('white gold'), sesame, cashew nuts, and livestock herding."
  },
  "Bulgaria": {
    "tier": "adv",
    "gdp_vi": "~113 tỷ USD (#68 thế giới)",
    "gdp_en": "~$113B (#68 globally)",
    "pc_vi": "~17.600 USD (PPP ~41.970 USD)",
    "pc_en": "~$17,600 (PPP ~$41,970)",
    "gr": "+3.4%",
    "sec": [
      73,
      24,
      3
    ],
    "main_vi": "Gia công phần mềm & dịch vụ CNTT (Sofia), linh kiện ô tô & thiết bị điện, luyện đồng (Aurubis) & xuất khẩu điện (nhà máy hạt nhân Kozloduy), công nghiệp đạn dược, nông sản (lúa mì, hướng dương, tinh dầu hoa hồng #1 thế giới), du lịch Biển Đen",
    "main_en": "IT outsourcing & software development (Sofia), automotive components & electrical equipment, copper refining (Aurubis) & electricity exports (Kozloduy nuclear plant), defense ammunition, agriculture (#1 rose oil, wheat, sunflower), Black Sea tourism",
    "note_vi": "Duy trì mức thuế thu nhập cá nhân và doanh nghiệp đồng nhất 10% — thấp nhất EU — cùng cơ chế neo chặt đồng Lev vào Euro, Bulgaria đã biến thủ đô Sofia thành trung tâm gia công phần mềm và CNTT sôi động của Đông Nam Âu. Công nghiệp dựa trên sản xuất linh kiện ô tô, luyện đồng, xuất khẩu điện hạt nhân Kozloduy và các nhà máy đạn dược hoạt động hết công suất từ năm 2022. Việc gia nhập hoàn toàn Schengen năm 2025 tạo cú hích thương mại lớn dù thiếu hụt nhân lực vẫn là rào cản dài hạn.",
    "note_en": "Maintaining the EU's lowest flat corporate and personal income tax rate at 10% alongside a strict currency board pegging the lev to the euro, Bulgaria has turned Sofia into a thriving Southeastern European IT hub. Industry is powered by automotive components, copper refining, electricity exports from the Kozloduy nuclear plant, and defense ammunition factories running at full capacity since 2022. Full Schengen entry in January 2025 lowers trade costs, though political instability and labor shortages persist."
  },
  "Brunei": {
    "tier": "adv",
    "gdp_vi": "~15,3 tỷ USD (#141 thế giới, #10 Đông Nam Á)",
    "gdp_en": "~$15.3B (#141 globally, #10 in ASEAN)",
    "pc_vi": "~33.150 USD (PPP ~90.010 USD)",
    "pc_en": "~$33,150 (PPP ~$90,010)",
    "gr": "+4.1%",
    "sec": [
      38,
      61,
      1
    ],
    "main_vi": "Dầu thô ngoài khơi, khí đốt hóa lỏng (LNG), lọc hóa dầu (tổ hợp Pulau Muara Besar), phân bón urê",
    "main_en": "Offshore crude oil, liquefied natural gas (LNG), petrochemical refining (Pulau Muara Besar), urea fertilizers",
    "note_vi": "Dầu thô và khí đốt hóa lỏng (LNG) chiếm hơn 90% kim ngạch xuất khẩu và khoảng 75–80% thu ngân sách của Brunei. Nhờ nguồn thu năng lượng và Quỹ Đầu tư Brunei (BIA), người dân không phải đóng thuế thu nhập cá nhân và được hưởng y tế, giáo dục, nhà ở trợ giá toàn diện. Khi các mỏ dầu lâu năm suy giảm trữ lượng, Brunei đã thu hút vốn Trung Quốc xây tổ hợp lọc hóa dầu Pulau Muara Besar và nhà máy phân bón urê.",
    "note_en": "Offshore crude oil and liquefied natural gas (LNG) account for over 90% of Brunei's exports and roughly three-quarters of state revenue. Hydrocarbon rents and sovereign wealth returns fund a generous welfare state with zero personal income tax and free healthcare and education. To offset declining output from mature oilfields, Brunei partnered with China's Hengyi Industries on the Pulau Muara Besar petrochemical refinery and urea plant."
  },
  "Brazil": {
    "tier": "emg",
    "gdp_vi": "~2.186 tỷ USD (#11 thế giới, #1 Mỹ Latin)",
    "gdp_en": "~$2.19T (#11 globally, #1 in Latin America)",
    "pc_vi": "~10.310 USD (PPP ~22.370 USD)",
    "pc_en": "~$10,310 (PPP ~$22,370)",
    "gr": "+3.4%",
    "sec": [
      69,
      24,
      7
    ],
    "main_vi": "Siêu cường nông sản xuất khẩu (#1 thế giới về đậu tương, cà phê, đường, nước cam, thịt bò, thịt gà), dầu khí tầng muối sâu ngoài khơi (Pre-salt – Petrobras), quặng sắt (#2 thế giới – Vale), máy bay phản lực thương mại (Embraer), ngân hàng số & Fintech (Nubank, hệ thống thanh toán Pix), nhiên liệu sinh học ethanol",
    "main_en": "Global agribusiness superpower (#1 exporter of soybeans, coffee, sugar, orange juice, beef, poultry), deepwater pre-salt oil & gas (Petrobras), iron ore (#2 globally – Vale), commercial regional jets (Embraer), fintech & banking (Nubank, Pix instant payments), sugarcane ethanol",
    "note_vi": "Là nền kinh tế lớn nhất Mỹ Latinh (top 11 thế giới), Brazil đóng vai trò không thể thay thế đối với an ninh lương thực toàn cầu khi đứng số một thế giới về xuất khẩu đậu tương, thịt bò, thịt gia cầm, cà phê, đường mía và nước cam, đồng thời đứng thứ hai thế giới về quặng sắt (tập đoàn Vale) và nằm trong top đầu về dầu thô nước sâu (Petrobras). Bên cạnh năng lực công nghệ cao hiếm có ở các nước đang phát triển như chế tạo máy bay phản lực thương mại (Embraer đứng thứ 3 thế giới sau Boeing và Airbus) và hệ thống thanh toán tức thời Pix phủ sóng toàn dân, nền kinh tế vẫn đối mặt với \"Chi phí Brazil\" (Custo Brasil) do hệ thống thuế phức tạp, lãi suất thực cao và hạ tầng logistics quá tải.",
    "note_en": "As Latin America's largest economy (ranking 11th globally), Brazil is indispensable to global food and commodity security—standing #1 worldwide in exports of soybeans, beef, poultry, coffee, sugar, and orange juice, #2 in iron ore (Vale), and among the top global producers of deepwater pre-salt crude oil (Petrobras). Complemented by world-class industrial and digital capabilities—including regional jet manufacturer Embraer (#3 commercial aircraft maker globally), fintech giant Nubank, the universal Pix instant-payment system, and an ~85% renewable power grid—Brazil's primary structural headwinds remain fiscal deficits, high real interest rates, and infrastructure bottlenecks known as the \"Custo Brasil.\""
  },
  "Botswana": {
    "tier": "emg",
    "gdp_vi": "~19,3 tỷ USD (#131 thế giới)",
    "gdp_en": "~$19.3B (#131 globally)",
    "pc_vi": "~7.650 USD (PPP ~20.610 USD)",
    "pc_en": "~$7,650 (PPP ~$20,610)",
    "gr": "-2.8%",
    "sec": [
      67,
      31,
      2
    ],
    "main_vi": "Khai thác, phân loại & buôn bán kim cương tự nhiên (#1 thế giới theo giá trị, #2 theo sản lượng qua liên doanh Debswana với De Beers), khai thác đồng (Khoemacau), du lịch safari sinh thái cao cấp (châu thổ Okavango), xuất khẩu thịt bò sang EU",
    "main_en": "Natural diamond mining, sorting & trading (#1 globally by value via Debswana joint venture with De Beers), copper mining (Khoemacau), high-value low-impact safari tourism (Okavango Delta), beef exports",
    "note_vi": "Botswana là nhà sản xuất kim cương tự nhiên lớn nhất thế giới tính theo giá trị (và thứ 2 theo sản lượng sau Nga), trong đó kim cương đóng góp khoảng 80% tổng kim ngạch xuất khẩu hàng hóa, 1/3 nguồn thu ngân sách và 1/4 GDP thông qua liên doanh Debswana; bên cạnh đó thủ đô Gaborone đã trở thành trung tâm phân loại và đấu giá kim cương thô toàn cầu của De Beers (thay thế London từ năm 2013). Khi thị trường kim cương tự nhiên toàn cầu chững lại trong giai đoạn 2023–2025 do nhu cầu tại Trung Quốc giảm và sự cạnh tranh giá rẻ của kim cương nhân tạo (khiến GDP tăng trưởng chậm lại), chính phủ mới đang đẩy mạnh khai thác đồng tại vành đai Kalahari (mỏ Khoemacau do tập đoàn MMG mua lại năm 2024), du lịch safari sinh thái 'chi tiêu cao – số lượng khách thấp' tại Okavango và xuất khẩu thịt bò sạch.",
    "note_en": "Botswana is the world's #1 diamond producer by value (via Debswana's flagship Jwaneng and Orapa mines), with diamonds generating ~80% of merchandise exports and a third of fiscal revenue, while Gaborone serves as De Beers' global rough-diamond sorting and sightholder trading hub (relocated from London in 2013). As weak Chinese luxury demand and competition from lab-grown diamonds triggered a global diamond downturn in 2023–2025, Botswana is accelerating copper mining in the Kalahari Copperbelt (led by the Khoemacau mine), 'high-value, low-volume' luxury safari tourism in the Okavango Delta, and financial services."
  },
  "Bosnia and Herz.": {
    "tier": "emg",
    "gdp_vi": "~29,7 tỷ USD (#111 thế giới)",
    "gdp_en": "~$29.7B (#111 globally)",
    "pc_vi": "~9.400 USD (PPP ~25.150 USD)",
    "pc_en": "~$9,400 (PPP ~$25,150)",
    "gr": "+3.2%",
    "sec": [
      68,
      27,
      5
    ],
    "main_vi": "Gia công kim loại & phụ tùng ô tô xuất khẩu sang EU, sản xuất và xuất khẩu điện (thủy điện & nhiệt điện), chế biến gỗ & nội thất, công nghiệp đạn dược, du lịch (Sarajevo, Mostar) & kiều hối",
    "main_en": "Metal processing & automotive parts for EU supply chains, electricity generation & net exports (hydro & coal), wood processing & furniture, defense ammunition, heritage/winter tourism & remittances",
    "note_vi": "Bất chấp bộ máy hành chính phân mảnh với 14 chính quyền và nghị viện các cấp hậu Hiệp định Dayton, Bosnia vẫn duy trì được sự ổn định tiền tệ tuyệt đối nhờ đồng Marka chuyển đổi (BAM) được neo tỷ giá cứng vào đồng Euro theo cơ chế Hội đồng Tiền tệ từ năm 1998. Kinh tế đất nước tăng trưởng ~2,8–3%/năm dựa trên gia công kim loại, phụ tùng ô tô và nội thất gỗ cho chuỗi cung ứng EU, xuất khẩu điện năng, công nghiệp đạn dược (Igman Konjic đang hoạt động hết công suất) cùng lượng kiều hối lớn (~10% GDP) và du lịch di sản Sarajevo – Mostar.",
    "note_en": "Despite a fragmented post-Dayton governance structure spanning entities and cantons, Bosnia maintains rock-solid monetary stability through its Convertible Mark (BAM), strictly pegged to the Euro under a currency board since 1998. Growing at ~2.8–3% annually, the economy is powered by metalworking, automotive parts, and wood furniture integrated into EU supply chains, net electricity exports, surging defense ammunition production (led by Igman in Konjic), diaspora remittances (~10% of GDP), and booming heritage tourism in Sarajevo and Mostar."
  },
  "Bolivia": {
    "tier": "dev",
    "gdp_vi": "~55 tỷ USD (#89 thế giới)",
    "gdp_en": "~$55B (#89 globally)",
    "pc_vi": "~4.420 USD (PPP ~12.900 USD)",
    "pc_en": "~$4,420 (PPP ~$12,900)",
    "gr": "-1.1%",
    "sec": [
      57,
      33,
      10
    ],
    "main_vi": "Khí đốt tự nhiên (xuất khẩu sang Brazil & Argentina), khai thác bạc, kẽm, thiếc & vàng, trữ lượng lithium lớn nhất thế giới (cánh đồng muối Salar de Uyuni), đậu tương & hạt diêm mạch (quinoa) vùng Santa Cruz",
    "main_en": "Natural gas exports (to Brazil & Argentina), silver, zinc, tin & gold mining, world's largest lithium resource (Salar de Uyuni salt flats), soybeans & quinoa agribusiness (Santa Cruz)",
    "note_vi": "Từng tận hưởng giai đoạn bùng nổ kinh tế thập niên 2000–2010 nhờ quốc hữu hóa và xuất khẩu khí đốt tự nhiên sang Brazil và Argentina, nhưng việc thiếu đầu tư thăm dò mỏ mới đã khiến sản lượng khí đốt của Bolivia sụt giảm hơn một nửa, biến nước này từ nhà xuất khẩu năng lượng thành nước phải chật vật nhập khẩu xăng dầu. Dù nắm giữ trữ lượng tài nguyên lithium lớn nhất thế giới (~23 triệu tấn tại Uyuni) và nông nghiệp đậu tương phát triển mạnh ở vùng Santa Cruz, công nghệ chiết xuất lithium lẫn tạp chất magie còn chậm và tình trạng cạn kiệt dự trữ USD đang đẩy nền kinh tế vào giai đoạn thử thách gay gắt.",
    "note_en": "After enjoying a decade-long commodity boom in the 2000s–2010s fueled by natural gas exports to Brazil and Argentina, years of upstream underinvestment caused Bolivia's gas output to fall by more than half, turning the former energy powerhouse into a net fuel importer struggling to pay for diesel subsidies. Although Bolivia holds the world's largest raw lithium resource (~23 million tons at Salar de Uyuni) and a thriving soybean agribusiness sector in lowland Santa Cruz, state-led direct lithium extraction projects have progressed slowly amid acute US dollar reserve depletion."
  },
  "Bhutan": {
    "tier": "dev",
    "gdp_vi": "~3,3 tỷ USD (#171 thế giới)",
    "gdp_en": "~$3.3B (#171 globally)",
    "pc_vi": "~4.230 USD (PPP ~17.760 USD)",
    "pc_en": "~$4,230 (PPP ~$17,760)",
    "gr": "+7.5%",
    "sec": [
      53,
      33,
      14
    ],
    "main_vi": "Thủy điện xuất khẩu sang Ấn Độ, du lịch sinh thái 'giá trị cao – tác động thấp', hợp kim fero-silic, nông lâm nghiệp hữu cơ",
    "main_en": "Hydropower exports to India, 'high-value, low-volume' eco-tourism, ferrosilicon alloys, organic forestry & agriculture",
    "note_vi": "Kinh tế Bhutan (~3,4 tỷ USD) gắn chặt với Ấn Độ (~80% thương mại, đồng Ngultrum neo 1:1 vào Rupee Ấn Độ), dựa vào xuất khẩu thủy điện sang Ấn Độ và du lịch sinh thái 'giá trị cao, tác động thấp' (thu phí 100 USD/đêm). Vương quốc còn dùng thủy điện dư thừa để luyện hợp kim fero-silic và đào Bitcoin quốc gia (qua quỹ Druk Holding). Điểm nghẽn lớn nhất là thất nghiệp trong thanh niên cao khiến nhiều người trẻ di cư sang Úc, thúc đẩy dự án Đặc khu Kinh tế Gelephu.",
    "note_en": "Bhutan's ~$3.4B economy is tightly bound to India (~80% of trade, with the Ngultrum pegged 1:1 to the Indian Rupee), anchored by hydropower exports to India and 'high-value, low-volume' eco-tourism charging a $100/night fee. The kingdom also uses surplus hydroelectricity for ferrosilicon production and state-backed Bitcoin mining. Its most urgent structural challenge is youth unemployment and skilled emigration to Australia, which the planned Gelephu Mindfulness City aims to reverse."
  },
  "Benin": {
    "tier": "dev",
    "gdp_vi": "~21,5 tỷ USD (#126 thế giới)",
    "gdp_en": "~$21.5B (#126 globally)",
    "pc_vi": "~1.480 USD (PPP ~4.440 USD)",
    "pc_en": "~$1,480 (PPP ~$4,440)",
    "gr": "+7.5%",
    "sec": [
      54,
      19,
      27
    ],
    "main_vi": "Sản xuất & chế biến bông vải (#1–2 châu Phi), dịch vụ cảng biển Cotonou & thương mại quá cảnh sang Nigeria và Niger, khu công nghiệp Glo-Djigbé (GDIZ – dệt may, chế biến điều & đậu tương), trạm cuối đường ống dẫn dầu Niger – Benin",
    "main_en": "Cotton production & ginning (#1–2 in Africa), Port of Cotonou transit trade (to Nigeria & landlocked neighbours), Glo-Djigbé Industrial Zone (GDIZ – textiles, cashew & soy processing), Niger–Benin oil pipeline terminal",
    "note_vi": "Từng chỉ được biết đến như một nền kinh tế buôn bán quá cảnh sang Nigeria và xuất khẩu bông thô (nằm trong nhóm dẫn đầu châu Phi với ~600.000–700.000 tấn/năm), Benin hiện đang bứt phá thành trung tâm chế biến công nghiệp mới nhờ Khu kinh tế đặc biệt Glo-Djigbé (GDIZ) rộng 1.640 ha. Việc bắt buộc chế biến 100% hạt điều và bông sợi thành quần áo xuất sang Mỹ/EU ngay trong nước, cộng với nguồn thu phí trung chuyển dầu thô từ đường ống Niger – Benin và du lịch di sản lịch sử Vodun/Dahomey, giúp Benin duy trì tốc độ tăng trưởng GDP 6–6,5%/năm với lạm phát thấp nhờ đồng Franc CFA.",
    "note_en": "Historically reliant on transit trade into neighboring Nigeria and raw cotton exports (ranking #1–2 in Africa), Benin is rapidly industrializing around its 1,640-hectare Glo-Djigbé Industrial Zone (GDIZ) just north of Cotonou. Strict government bans on raw cashew and cotton exports have spurred local garment manufacturing and agro-processing, which—alongside transit fees from the new Niger–Benin oil pipeline and heritage tourism—propel 6–6.5% annual GDP growth within the low-inflation CFA franc zone."
  },
  "Belize": {
    "tier": "emg",
    "gdp_vi": "~3,2 tỷ USD (#172 thế giới)",
    "gdp_en": "~$3.2B (#172 globally)",
    "pc_vi": "~7.680 USD (PPP ~14.370 USD)",
    "pc_en": "~$7,680 (PPP ~$14,370)",
    "gr": "+3.5%",
    "sec": [
      73,
      17,
      10
    ],
    "main_vi": "Du lịch biển & lặn ngắm rạn san hô (Rạn san hô chắn bờ Belize lớn thứ 2 thế giới), gia công quy trình kinh doanh bằng tiếng Anh (BPO), đường mía, chuối, nước cam cô đặc & thủy sản",
    "main_en": "Marine & eco-tourism (Belize Barrier Reef – #2 globally), English-speaking BPO call centers, sugar, bananas, citrus concentrates & farmed seafood",
    "note_vi": "Là quốc gia nói tiếng Anh duy nhất ở Trung Mỹ với đồng Đô la Belize neo tỷ giá cố định 2:1 vào đồng USD suốt từ năm 1978, nền kinh tế Belize dựa vào du lịch sinh thái – biển đảo (đóng góp khoảng 40% GDP) và ngành gia công quy trình kinh doanh (BPO/call centers) phục vụ thị trường Bắc Mỹ. Trong lĩnh vực nông – thủy sản, nước này xuất khẩu đường mía, chuối, nước cam cô đặc và tôm hùm sang Mỹ, Anh và khối CARICOM. Đặc biệt, thỏa thuận hoán đổi nợ lấy bảo tồn biển (Blue Bond) trị giá 364 triệu USD năm 2021 đã giúp Belize xóa giảm 12% GDP nợ công để đổi lấy cam kết bảo vệ 30% diện tích vùng biển quốc gia.",
    "note_en": "As Central America's sole English-speaking nation with its currency pegged 2:1 to the US dollar since 1978, Belize's economy is driven by marine eco-tourism and cruise arrivals (generating roughly 40% of GDP) alongside a rapidly expanding English-language BPO call-center industry serving US clients. Traditional agricultural exports of raw sugar, bananas, citrus concentrates, and marine products enjoy preferential market access to both CARICOM and Europe. Notably, Belize's groundbreaking $364 million 'Blue Bond' debt-for-nature swap in 2021 cut public debt by 12% of GDP in exchange for protecting 30% of its ocean territory."
  },
  "Belgium": {
    "tier": "adv",
    "gdp_vi": "~671 tỷ USD (#22 thế giới)",
    "gdp_en": "~$671B (#22 globally)",
    "pc_vi": "~56.580 USD (PPP ~74.220 USD)",
    "pc_en": "~$56,580 (PPP ~$74,220)",
    "gr": "+1.1%",
    "sec": [
      78,
      21,
      1
    ],
    "main_vi": "Hóa chất & dược phẩm – vắc-xin (cụm cảng Antwerp & GSK, UCB, Janssen), trung tâm thanh toán chứng khoán quốc tế (Euroclear, SWIFT), thương mại kim cương (Antwerp), nghiên cứu bán dẫn (IMEC Leuven), thực phẩm – đồ uống (AB InBev – tập đoàn bia #1 thế giới, sô-cô-la), dịch vụ công quyền EU & NATO (Brussels)",
    "main_en": "Chemicals & biopharma/vaccines (Antwerp cluster, GSK, UCB, Janssen), global financial infrastructure (Euroclear, SWIFT), diamond trading (Antwerp), semiconductor R&D (IMEC Leuven), food & beverage (AB InBev – world's #1 brewer, chocolate), EU & NATO institutional headquarters (Brussels)",
    "note_vi": "Là một trong những nền kinh tế mở nhất thế giới với thương mại vượt 160% GDP, Bỉ đóng vai trò trung tâm hóa dầu, dược phẩm vắc-xin và logistics quanh cảng Antwerp–Bruges. Quốc gia này còn nắm giữ viện nghiên cứu bán dẫn IMEC tại Leuven cùng hạ tầng thanh toán toàn cầu SWIFT và Euroclear, dù chịu sức ép từ nợ công trên 105% GDP và chi phí lao động cao.",
    "note_en": "One of the world's most trade-open economies—with trade exceeding 160% of GDP—Belgium thrives as Europe's premier petrochemical, biopharma, and logistics hub around Antwerp–Bruges. It also commands critical strategic assets including the IMEC semiconductor institute in Leuven and the SWIFT and Euroclear financial networks, though public debt above 105% of GDP and high wage indexing remain challenges."
  },
  "Belarus": {
    "tier": "emg",
    "gdp_vi": "~79 tỷ USD (#83 thế giới)",
    "gdp_en": "~$79B (#83 globally)",
    "pc_vi": "~8.610 USD (PPP ~33.170 USD)",
    "pc_en": "~$8,610 (PPP ~$33,170)",
    "gr": "+4.3%",
    "sec": [
      56,
      36,
      8
    ],
    "main_vi": "Phân bón kali (potash – Belaruskali, top 3 thế giới), lọc dầu (từ dầu thô Nga giá ưu đãi), máy kéo (MTZ) & xe tải siêu trọng mỏ (BelAZ), công nghiệp quốc phòng, chế biến sữa & thực phẩm xuất sang Nga, công nghệ thông tin",
    "main_en": "Potash fertilizers (Belaruskali, top-3 globally), oil refining (discounted Russian crude), tractors (MTZ) & ultra-heavy mining dump trucks (BelAZ), defense manufacturing, dairy & meat exports to Russia, IT services",
    "note_vi": "Giữ lại di sản công nghiệp thời Liên Xô với các tập đoàn nhà nước khổng lồ chuyên sản xuất phân bón kali (Belaruskali — chiếm ~15–20% nguồn cung thế giới trước cấm vận), lọc hóa dầu (Mozyr, Naftan), máy kéo (MTZ) và xe tải mỏ siêu trọng (BelAZ), kinh tế Belarus duy trì tăng trưởng ~3,5–4% giai đoạn 2023–2025 nhờ mua dầu thô và khí đốt của Nga với giá rẻ ưu đãi bậc nhất thế giới. Tuy nhiên, hơn 65% tổng kim ngạch ngoại thương nay phụ thuộc vào thị trường Nga và các đơn đặt hàng quân sự cho cuộc chiến Ukraine, trong khi ngành công nghệ thông tin (khu công nghệ cao HTP tại Minsk — từng gọi là \"Thung lũng Silicon của Đông Âu\") đã bị chảy máu chất xám nặng nề khi hàng chục nghìn kỹ sư di cư sang Ba Lan và Litva.",
    "note_en": "Anchored by large Soviet-legacy state enterprises producing potash fertilizers (Belaruskali), refined petroleum products (from deeply discounted Russian crude), MTZ tractors, and BelAZ ultra-heavy mining trucks, Belarus posted ~3.5–4% GDP growth in 2023–2025 on the back of Russian wartime industrial and defense orders. However, Western sanctions have left Russia absorbing over 65% of Belarusian trade, while Minsk's once-thriving High Technologies Park (HTP) IT sector has suffered a severe brain drain as tens of thousands of software engineers relocated to Poland and Lithuania."
  },
  "Barbados": {
    "tier": "adv",
    "gdp_vi": "~7,6 tỷ USD (#158 thế giới)",
    "gdp_en": "~$7.6B (#158 globally)",
    "pc_vi": "~26.900 USD (PPP ~24.540 USD)",
    "pc_en": "~$26,900 (PPP ~$24,540)",
    "gr": "+3.4%",
    "sec": [
      85,
      14,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp & tàu du lịch (Bridgetown), dịch vụ tài chính – bảo hiểm quốc tế & quản lý doanh nghiệp toàn cầu, sản xuất rượu rum truyền thống (Mount Gay – quê hương rượu rum thế giới), năng lượng tái tạo",
    "main_en": "Upscale beach resort & cruise tourism (Bridgetown), international banking, captive insurance & corporate services, heritage rum distilling (Mount Gay – birthplace of rum), renewable energy",
    "note_vi": "Là một trong những nền kinh tế giàu có và phát triển nhất vùng Đông Caribbean với đồng Đô la Barbados neo cố định ở mức 2 BBD = 1 USD suốt từ năm 1975, Barbados vận hành dựa trên sự kết hợp giữa du lịch nghỉ dưỡng cao cấp (Platinum Coast, tàu du lịch biển và chương trình thị thực làm việc từ xa \"Welcome Stamp\") với khu vực dịch vụ tài chính, ngân hàng và bảo hiểm quốc tế (đặc biệt thu hút các tập đoàn Canada và Bắc Mỹ). Sau khi tái cơ cấu nợ công thành công năm 2018–2019 dưới chương trình cải cách BERT phối hợp cùng IMF, Barbados tiếp tục thực hiện các giao dịch \"Đổi nợ lấy bảo tồn thiên nhiên và chống biến đổi khí hậu\" tiên phong thế giới vào năm 2022–2024, giúp giảm mạnh gánh nặng trả nợ để đầu tư hạ tầng nước và năng lượng mặt trời.",
    "note_en": "Anchored by a rock-solid 2:1 currency peg to the US dollar maintained since 1975, Barbados enjoys one of the highest standards of living in the Caribbean through a twin-engine economy of upscale beach and cruise tourism alongside international corporate, banking, and captive-insurance services (particularly strong with Canadian capital). Following a comprehensive 2018–2019 debt restructuring under its IMF-backed BERT reform program, Barbados executed world-first 'debt-for-nature' and 'debt-for-climate-resilience' swaps between 2022 and 2024, freeing up fiscal space to upgrade water infrastructure and pursue its goal of a 100% renewable power grid."
  },
  "Bangladesh": {
    "tier": "dev",
    "gdp_vi": "~450 tỷ USD (#35 thế giới)",
    "gdp_en": "~$450B (#35 globally)",
    "pc_vi": "~2.590 USD (PPP ~9.660 USD)",
    "pc_en": "~$2,590 (PPP ~$9,660)",
    "gr": "+4.2%",
    "sec": [
      53,
      35,
      12
    ],
    "main_vi": "May mặc xuất khẩu (#2 thế giới sau Trung Quốc, chiếm >80% xuất khẩu), kiều hối (>23 tỷ USD), đay, dược phẩm nội địa, nông thủy sản",
    "main_en": "Ready-made garments (#2 globally after China, >80% of exports), remittances (>$23B), jute, domestic pharmaceuticals, agriculture",
    "note_vi": "Ngành gia công may mặc xuất khẩu (RMG) là trụ cột tuyệt đối của kinh tế Bangladesh (~450 tỷ USD), chiếm hơn 80% tổng kim ngạch xuất khẩu (~40–45 tỷ USD/năm) và sử dụng 4 triệu lao động, cùng hơn 23 tỷ USD kiều hối mỗi năm. Tuy nhiên, kinh tế phụ thuộc quá lớn vào gia công quần áo giá rẻ trong khi thiếu khí đốt phát điện, nợ xấu ngân hàng cao và lạm phát kéo dài. Khi chính thức rời nhóm nước kém phát triển nhất (LDC) vào năm 2026, Bangladesh sẽ dần mất ưu đãi miễn thuế tự động tại thị trường EU.",
    "note_en": "Ready-made garment (RMG) assembly dominates Bangladesh's ~$450B economy, accounting for over 80% of export earnings (~$40–45B/year) and four million jobs alongside $23B+ in annual remittances. However, the economy suffers from extreme export concentration in low-cost apparel, natural gas and power shortages, high bank non-performing loans, and inflation. Graduating from UN Least Developed Country (LDC) status in 2026 will also require navigating the gradual phase-out of duty-free garment preferences in Europe."
  },
  "Bahrain": {
    "tier": "adv",
    "gdp_vi": "~47 tỷ USD (#96 thế giới)",
    "gdp_en": "~$47B (#96 globally)",
    "pc_vi": "~29.720 USD (PPP ~67.230 USD)",
    "pc_en": "~$29,720 (PPP ~$67,230)",
    "gr": "+2.9%",
    "sec": [
      56,
      44,
      0
    ],
    "main_vi": "Tài chính – ngân hàng (đặc biệt ngân hàng Hồi giáo & fintech), luyện nhôm (Alba – một trong những nhà máy lớn nhất thế giới), lọc dầu, du lịch từ Ả Rập Xê Út",
    "main_en": "Islamic banking & fintech, aluminum smelting (Alba – one of the world's largest smelters), oil refining, causeway tourism from Saudi Arabia",
    "note_vi": "Là quốc gia vùng Vịnh đầu tiên cạn dần dầu mỏ trên bờ, Bahrain đã đi đầu khu vực từ thập niên 1970 trong việc phát triển trung tâm tài chính – ngân hàng Hồi giáo, fintech, lọc hóa dầu và vận hành nhà máy luyện nhôm Alba (một trong những lò luyện nhôm lớn nhất thế giới ngoài Trung Quốc). Dù vậy, ngân sách nhà nước vẫn phụ thuộc lớn vào nguồn thu từ mỏ dầu ngoài khơi Abu Safah được Ả Rập Xê Út nhường phần lớn sản lượng, cùng hàng triệu du khách Saudi lái xe qua cầu vượt biển mỗi cuối tuần.",
    "note_en": "Because its onshore crude reserves were the first in the Gulf to mature, Bahrain diversified early into Islamic banking, fintech, oil refining, and operating Aluminium Bahrain (Alba)—one of the world's largest single-site aluminum smelters. Even so, fiscal stability still leans heavily on output from the offshore Abu Safah oil field shared with Saudi Arabia, weekend Saudi tourism across the King Fahd Causeway, and Gulf financial support packages to manage high public debt (~120% of GDP)."
  },
  "Bahamas": {
    "tier": "adv",
    "gdp_vi": "~15,8 tỷ USD (#139 thế giới)",
    "gdp_en": "~$15.8B (#139 globally)",
    "pc_vi": "~39.460 USD (PPP ~41.260 USD)",
    "pc_en": "~$39,460 (PPP ~$41,260)",
    "gr": "+3.4%",
    "sec": [
      88,
      11,
      1
    ],
    "main_vi": "Du lịch nghỉ dưỡng siêu tổ hợp & tàu du lịch (Nassau, Atlantis, Baha Mar – đón ~10 triệu khách/năm, chiếm >50% GDP), ngân hàng tư nhân & quản lý quỹ ngoài khơi, đăng ký tàu biển quốc tế (#3 thế giới), trung chuyển container (Freeport)",
    "main_en": "Mega-resort & cruise tourism (Nassau, Atlantis, Baha Mar – ~10M visitors/yr, >50% of GDP), offshore private banking & wealth management, international ship registry (#3 globally), container transshipment (Freeport)",
    "note_vi": "Là quốc gia độc lập có thu nhập bình quân đầu người cao nhất vùng Caribbean (~36.000 USD), nền kinh tế Bahamas được dẫn dắt bởi ngành du lịch nghỉ dưỡng siêu tổ hợp (như Atlantis trên đảo Paradise, Baha Mar tại Nassau và các đảo tư nhân của các hãng tàu biển) đóng góp trực tiếp và gián tiếp hơn 50–60% GDP cùng một nửa lực lượng lao động. Trụ cột thứ hai là dịch vụ ngân hàng tư nhân quản lý tài sản, quỹ đầu tư ngoài khơi và đăng ký cờ tàu biển quốc tế (đứng thứ 3 thế giới về tổng dung tích đội tàu), hưởng lợi từ chế độ thuế không đánh thuế thu nhập cá nhân, thuế thu nhập doanh nghiệp hay thuế lãi vốn. Điểm nghẽn lớn nhất của nền kinh tế là phải nhập khẩu hơn 80% lương thực – nhiên liệu và gánh nặng nợ công tăng cao sau các siêu bão liên tiếp.",
    "note_en": "As the richest sovereign nation in the Caribbean (~$36,000 per capita), The Bahamas relies on tourism for over 50–60% of GDP and half of national employment, anchored by mega-resorts like Atlantis and Baha Mar in Nassau alongside dedicated private cruise-line islands. Financial services and maritime commerce form the second pillar, leveraging a 1:1 USD currency peg and zero personal, corporate, or capital-gains income taxes to support offshore wealth management and the world's third-largest ship registry. Key structural vulnerabilities include heavy dependence on imported food and fuel (>80% of consumption) and high public debt accumulated from repeated hurricane reconstruction."
  },
  "Azerbaijan": {
    "tier": "emg",
    "gdp_vi": "~74 tỷ USD (#85 thế giới)",
    "gdp_en": "~$74B (#85 globally)",
    "pc_vi": "~7.300 USD (PPP ~25.150 USD)",
    "pc_en": "~$7,300 (PPP ~$25,150)",
    "gr": "+4.2%",
    "sec": [
      47,
      47,
      6
    ],
    "main_vi": "Dầu thô & khí đốt biển Caspi (~90% xuất khẩu), đường ống khí đốt Hành lang phía Nam sang châu Âu (TANAP/TAP), hóa dầu, nông sản",
    "main_en": "Caspian crude oil & natural gas (~90% of exports), Southern Gas Corridor pipelines to Europe (TANAP/TAP), petrochemicals, agriculture",
    "note_vi": "Dầu thô và khí đốt tự nhiên từ biển Caspi chiếm khoảng 90% tổng kim ngạch xuất khẩu và một nửa ngân sách nhà nước, giúp Quỹ Dầu mỏ Quốc gia (SOFAZ) tích lũy khối tài sản kỷ lục trên 60 tỷ USD. Khi sản lượng dầu thô tại cụm mỏ ACG bắt đầu giảm tự nhiên, Baku đang đẩy mạnh xuất khẩu khí đốt từ mỏ Shah Deniz sang châu Âu (đạt ~13 tỷ m³/năm) đồng thời đầu tư hàng tỷ USD tái thiết vùng Karabakh và phát triển điện gió, điện mặt trời.",
    "note_en": "Caspian crude oil and natural gas generate roughly 90% of Azerbaijan's exports and half of state budget revenues, swelling the State Oil Fund (SOFAZ) past $60 billion. As legacy oil fields mature, Baku is expanding Shah Deniz natural gas deliveries to the European Union (~13 bcm/year), investing heavily in Karabakh reconstruction, and developing Caspian offshore wind and green-energy export cables to Europe."
  },
  "Austria": {
    "tier": "adv",
    "gdp_vi": "~535 tỷ USD (#29 thế giới)",
    "gdp_en": "~$535B (#29 globally)",
    "pc_vi": "~58.270 USD (PPP ~75.770 USD)",
    "pc_en": "~$58,270 (PPP ~$75,770)",
    "gr": "-0.7%",
    "sec": [
      71,
      27,
      2
    ],
    "main_vi": "Cơ khí chính xác, linh kiện ô tô & luyện thép đặc biệt (Voestalpine, Magna), du lịch trượt tuyết dãy Alps & văn hóa cổ điển (Vienna, Salzburg), ngân hàng khu vực Trung – Đông Âu (Erste, Raiffeisen), đồ uống (Red Bull), thủy điện & lâm nghiệp",
    "main_en": "Precision machinery, automotive components & specialty steel (Voestalpine, Magna), Alpine ski & classical cultural tourism (Vienna, Salzburg), Central & Eastern European banking (Erste, Raiffeisen), beverages (Red Bull), hydropower & forestry",
    "note_vi": "Kinh tế Áo kết hợp mạng lưới doanh nghiệp công nghiệp chế tạo ngách công nghệ cao (thép đặc chủng Voestalpine, linh kiện ô tô, cơ khí chính xác) với du lịch trượt tuyết dãy Alps và di sản âm nhạc Vienna. Các tập đoàn ngân hàng Áo (Erste, Raiffeisen) giữ vai trò nhà đầu tư tài chính hàng đầu tại Trung – Đông Âu, dù nền kinh tế vừa trải qua giai đoạn tái cơ cấu nguồn cung khí đốt và chịu ảnh hưởng từ đà chững lại của công nghiệp Đức.",
    "note_en": "Austria's affluent economy blends export-oriented 'hidden champion' manufacturers—specializing in Voestalpine specialty steel, automotive components, and precision machinery—with world-class Alpine ski and cultural tourism. Vienna-based banks (Erste, Raiffeisen) serve as financial anchors across Central and Eastern Europe, though industrial growth has recently faced headwinds from energy-supply restructuring and weak German industrial demand."
  },
  "Australia": {
    "tier": "adv",
    "gdp_vi": "~1.757 tỷ USD (#14 thế giới)",
    "gdp_en": "~$1.76T (#14 globally)",
    "pc_vi": "~64.610 USD (PPP ~72.120 USD)",
    "pc_en": "~$64,610 (PPP ~$72,120)",
    "gr": "+1.4%",
    "sec": [
      71,
      27,
      2
    ],
    "main_vi": "Khai thác quặng sắt (#1 thế giới – BHP, Rio Tinto, Fortescue), lithium cứng spodumene (#1 sản xuất thế giới), khí thiên nhiên hóa lỏng (LNG) & than luyện kim, vàng (#3 thế giới), dịch vụ tài chính & quỹ hưu trí (Superannuation ~2.600 tỷ USD), giáo dục quốc tế, nông sản (thịt bò, lúa mì, len lông cừu, rượu vang)",
    "main_en": "Iron ore mining (#1 globally – BHP, Rio Tinto, Fortescue), hard-rock lithium (#1 global producer), liquefied natural gas (LNG) & metallurgical coal, gold (#3 globally), banking & compulsory superannuation funds (~$2.6T), international higher education, agribusiness (beef, wheat, merino wool, wine)",
    "note_vi": "Là nền kinh tế lớn thứ 13 thế giới với kỷ lục tăng trưởng hiếm có trong thế giới phát triển, Australia thống trị chuỗi cung ứng nguyên liệu thô toàn cầu khi giữ vị trí số một thế giới về xuất khẩu quặng sắt (~55% thị phần thương mại đường biển toàn cầu từ vùng Pilbara), số một về khai thác quặng lithium cứng (spodumene ~50% nguồn cung thế giới), đồng thời dẫn đầu về than luyện kim, khí thiên nhiên hóa lỏng (LNG) và vàng. Ở chiều ngược lại, nền kinh tế nội địa dựa vững chắc vào khu vực dịch vụ tài chính, quỹ hưu trí bắt buộc Superannuation khổng lồ (~2.600 tỷ USD) và xuất khẩu giáo dục đại học quốc tế, dù đang phải giải bài toán khủng hoảng chi phí nhà ở tại các đại đô thị và nâng cao độ phức tạp chế biến sâu trong nước (chương trình Future Made in Australia).",
    "note_en": "The world's 13th-largest economy combines an unmatched resource endowment—ranking #1 globally in iron ore exports (~55% of seaborne trade from Western Australia's Pilbara), #1 in hard-rock spodumene lithium production (~50% of global supply), and a top-three exporter of LNG, metallurgical coal, and gold—with advanced services. Domestically, Australia's financial resilience is underpinned by its ~US$2.6 trillion compulsory Superannuation pension pool and booming international higher education exports, while policymakers pursue the \"Future Made in Australia\" industrial strategy to move up the critical-minerals processing value chain and ease acute urban housing shortages."
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
    "note_vi": "Nền kinh tế của hai lãnh thổ Ấn Độ Dương thuộc Úc (tổng dân số ~2.500 người, GDP ~180 triệu USD, dùng đồng Đô la Úc - AUD) vận hành dựa trên ba trụ cột: khai thác và xuất khẩu quặng phốt phát chất lượng cao từ Đảo Christmas sang làm phân bón cho các đồn điền dầu cọ tại Malaysia và Indonesia (do công ty Christmas Island Phosphates vận hành và là nguồn việc làm tư nhân lớn nhất trên đảo), dòng vốn đầu tư hàng trăm triệu AUD của Chính phủ Liên bang Úc vào hạ tầng quốc phòng – sân bay – trạm cáp quang biển (2024–2026), và du lịch sinh thái (ngắm 60 triệu con cua đỏ di cư tại Vườn quốc gia Đảo Christmas cùng lướt ván diều tại đầm phá Cocos).",
    "note_en": "Operating on the Australian dollar across a combined population of ~2,500 residents (~$180 million GDP), the Indian Ocean Territories economy rests on three pillars: open-cut mining of high-grade phosphate rock on Christmas Island exported to Southeast Asian palm-oil and agricultural markets (the island's largest private employer), surging Australian federal expenditure on defense airfield upgrades, subsea fiber-optic cables, and public administration in 2024–2026, and niche eco-tourism centered on Christmas Island National Park's red-crab migration and Cocos lagoon watersports."
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
    "note_vi": "Mặc dù trên mặt đất Đảo Heard và Quần đảo McDonald hoàn toàn không có cư dân và không có hoạt động kinh tế nào (chỉ có các đoàn khoa học của Úc thỉnh thoảng ra khảo sát băng hà, núi lửa và sinh thái), nhưng vùng đặc quyền kinh tế biển (EEZ) xung quanh đảo lại mang về khoảng 20–30 triệu USD mỗi năm cho ngành thủy sản Úc. Một số ít tàu đánh cá công nghiệp hiện đại của Úc (như của Austral Fisheries và Australian Longline) được cấp hạn ngạch nghiêm ngặt để khai thác bền vững loài cá răng Patagonian (Patagonian toothfish) và cá băng (mackerel icefish) đạt chứng nhận sinh thái MSC xuất khẩu sang các nhà hàng cao cấp tại Mỹ và châu Á.",
    "note_en": "While zero human residents or commercial activities exist ashore—visited only by occasional Australian Antarctic Division scientific expeditions studying volcanology and glacial retreat—the surrounding Exclusive Economic Zone supports a lucrative A$30+ million sustainable offshore fishery. A handful of strictly quota-managed Australian freezer trawlers and longliners harvest MSC-certified Patagonian toothfish and mackerel icefish in designated fishing zones outside the expanded 390,000-km² no-take marine reserve."
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
    "note_vi": "Kinh tế Đảo Norfolk (GDP ~90 triệu USD, sử dụng đồng Đô la Úc - AUD) vận hành dựa trên hai nguồn lực chính: ngành du lịch di sản – sinh thái (chiếm hơn 60% hoạt động kinh tế nội địa, đón khoảng 30.000 du khách từ đất liền Úc và New Zealand mỗi năm tới thăm quần thể nhà tù cổ Kingston thuộc Di sản Thế giới UNESCO) và nguồn chi tiêu ngân sách liên bang Úc cho y tế, giáo dục, lương hưu và nâng cấp sân bay. Về xuất khẩu hàng hóa, do không có cảng biển nước sâu nên mặt hàng xuất khẩu nổi tiếng nhất của đảo là hạt giống cây thông cảnh Norfolk Island Pine xuất sang châu Âu.",
    "note_en": "Operating on the Australian dollar, Norfolk Island's ~$90 million economy is driven by two primary engines: heritage and nature tourism (accounting for over 60% of local GDP as ~30,000 mainland Australian and New Zealand visitors fly in annually to explore the UNESCO-listed Kingston and Arthur's Vale Historic Area) and Australian federal expenditure on Medicare, pensions, education, and airport infrastructure. Because the lack of a deep-water port makes bulk trade costly, the island's signature merchandise export is high-value Norfolk Island pine seed shipped by air to European nurseries."
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
    "note_vi": "Quần đảo Ashmore và Cartier hoàn toàn không có cư dân sinh sống và không có bất kỳ hoạt động kinh tế thương mại nào trên mặt đảo hay trong phạm vi hai Khu bảo tồn biển nghiêm ngặt (Ashmore Reef Marine Park rộng 583 km² và Cartier Island Marine Park rộng 172 km², nơi đảo Cartier từng được dùng làm trường bắn thử bom của Không quân Úc trước khi đóng cửa để bảo tồn). Giá trị kinh tế – chiến lược của lãnh thổ nằm ở việc xác lập quyền chủ quyền thềm lục địa cho nước Úc tại vùng Biển Timor giàu dầu khí tự nhiên nằm ngay kế cận, đồng thời duy trì vùng đánh bắt thủ công truyền thống có kiểm soát cho ngư dân Indonesia theo Bản ghi nhớ MOU 1974.",
    "note_en": "Ashmore and Cartier Islands have zero human population and no commercial economic activity inside their strictly protected marine reserves—Ashmore Reef Marine Park (583 km²) and Cartier Island Marine Park (172 km², a former military bombing range now closed for conservation). Instead, the territory's immense economic and strategic value to Australia lies in anchoring continental-shelf jurisdiction over adjacent Timor Sea oil and gas basins while accommodating limited non-motorized traditional Indonesian fishing under the 1974 bilateral MOU."
  },
  "Armenia": {
    "tier": "emg",
    "gdp_vi": "~26,0 tỷ USD (#115 thế giới)",
    "gdp_en": "~$26.0B (#115 globally)",
    "pc_vi": "~8.560 USD (PPP ~22.860 USD)",
    "pc_en": "~$8,560 (PPP ~$22,860)",
    "gr": "+5.9%",
    "sec": [
      67,
      25,
      8
    ],
    "main_vi": "Công nghệ thông tin & phần mềm, khai thác đồng & molypden, chế tác vàng – kim cương tái xuất, rượu brandy (Ararat), kiều hối",
    "main_en": "IT & software engineering, copper & molybdenum mining, gold & diamond processing/re-exports, brandy & wine, diaspora remittances",
    "note_vi": "Bất chấp thế bị bao vây địa lý và cú sốc tiếp nhận hơn 100.000 người tị nạn từ Karabakh năm 2023, kinh tế Armenia vẫn tăng trưởng thuộc nhóm nhanh nhất khu vực Á – Âu nhờ ngành công nghệ thông tin, chế tác vàng – kim cương tái xuất và dòng vốn dịch chuyển sau năm 2022. Nếu thỏa thuận hòa bình với Azerbaijan và việc mở lại biên giới với Thổ Nhĩ Kỳ thành hiện thực trong giai đoạn 2025–2026, Armenia sẽ hóa giải được nút thắt giao thông lớn nhất kể từ khi độc lập.",
    "note_en": "Despite sealed borders and the shock of absorbing over 100,000 Karabakh refugees in late 2023, Armenia has recorded some of Eurasia's fastest GDP growth rates, propelled by a booming IT and semiconductor design sector, gold and diamond re-exports, and diaspora capital. Normalizing ties with Turkey and signing a final peace treaty with Azerbaijan in 2025–2026 would unlock cross-border rail links and break Armenia's three-decade geographic isolation."
  },
  "Argentina": {
    "tier": "emg",
    "gdp_vi": "~638 tỷ USD (#23 thế giới, #3 Mỹ Latin)",
    "gdp_en": "~$638B (#23 globally, #3 in Latin America)",
    "pc_vi": "~13.970 USD (PPP ~30.480 USD)",
    "pc_en": "~$13,970 (PPP ~$30,480)",
    "gr": "-1.3%",
    "sec": [
      64,
      29,
      7
    ],
    "main_vi": "Nông sản xuất khẩu vùng đồng bằng Pampas (khô đậu tương & dầu đậu tương #1 thế giới, ngô, lúa mì, thịt bò, rượu vang Malbec), dầu khí đá phiến (mỏ Vaca Muerta lớn thứ 2 thế giới), khai thác lithium ('Tam giác Lithium'), sản xuất xe bán tải, dịch vụ phần mềm & kỳ lân công nghệ (MercadoLibre, Globant)",
    "main_en": "Pampas agribusiness exports (#1 global soybean meal & oil exporter, corn, wheat, beef, Malbec wine), shale oil & gas (Vaca Muerta – #2 global shale gas reserve), lithium mining ('Lithium Triangle'), pickup truck manufacturing, tech & software unicorns (MercadoLibre, Globant)",
    "note_vi": "Là nền kinh tế lớn thứ ba Mỹ Latinh với trình độ học vấn, khoa học (3 giải Nobel khoa học, tự chủ công nghệ lò phản ứng hạt nhân và vệ tinh) và hệ sinh thái khởi nghiệp công nghệ (MercadoLibre, Globant) dẫn đầu khu vực. Từ năm 2024–2026, việc chính phủ đạt thặng dư tài khóa lần đầu tiên sau hơn một thập kỷ cùng việc hoàn thành đường ống dẫn khí từ mỏ đá phiến Vaca Muerta đã giúp Argentina đảo ngược thâm hụt cán cân năng lượng sang xuất khẩu ròng dầu khí, mở ra động lực tăng trưởng mới bên cạnh nông sản Pampas và xuất khẩu lithium – đồng.",
    "note_en": "Latin America's third-largest economy combines world-class Pampas agribusiness with high human capital (three science Nobel laureates, indigenous nuclear and satellite technology) and the region's premier tech-unicorn ecosystem led by MercadoLibre and Globant. Since 2024–2026, aggressive fiscal consolidation delivering budget surpluses and new pipeline capacity from the Vaca Muerta shale play have swung Argentina from a chronic energy deficit to a net oil-and-gas exporter, complementing rapidly expanding lithium and copper mining projects."
  },
  "Antigua and Barb.": {
    "tier": "adv",
    "gdp_vi": "~2,2 tỷ USD (#181 thế giới)",
    "gdp_en": "~$2.2B (#181 globally)",
    "pc_vi": "~23.060 USD (PPP ~33.350 USD)",
    "pc_en": "~$23,060 (PPP ~$33,350)",
    "gr": "+2.5%",
    "sec": [
      79,
      19,
      2
    ],
    "main_vi": "Du lịch nghỉ dưỡng biển cao cấp (365 bãi biển) & bến siêu du thuyền (English Harbour, tuần lễ đua thuyền Antigua Sailing Week), cảng tàu du lịch St. John's, chương trình đầu tư nhập tịch (CBI), trung tâm hàng không Đông Caribe",
    "main_en": "Luxury beach resort tourism (365 beaches) & superyacht regattas (English Harbour, Antigua Sailing Week), St. John's cruise port, Citizenship by Investment (CBI), Eastern Caribbean aviation hub",
    "note_vi": "Sử dụng đồng Đô la Đông Caribbean (XCD neo cố định 2,7:1 vào USD), nền kinh tế Antigua và Barbuda phụ thuộc gần 80% GDP (trực tiếp và gián tiếp) vào ngành du lịch nghỉ dưỡng biển cao cấp, cảng tàu du lịch biển tại St. John's và ngành công nghiệp dịch vụ siêu du thuyền tại English Harbour / Falmouth Harbour. Nguồn thu ngân sách quan trọng thứ hai đến từ Chương trình Đầu tư lấy Quốc tịch (CBI) cùng sự bùng nổ của ngành xây dựng các khu biệt thự nghỉ dưỡng triệu đô trên cả Antigua và Barbuda (nơi vừa mở thêm sân bay quốc tế mới phục vụ máy bay tư nhân năm 2024). Điểm nghẽn cấu trúc của nền kinh tế là chi phí điện năng và khử mặn nước biển đắt đỏ (phụ thuộc vào dầu nhập khẩu) cùng rủi ro thiên tai bão lớn.",
    "note_en": "Operating within the Eastern Caribbean Currency Union (2.70 XCD to 1 USD), Antigua and Barbuda's economy derives nearly 80% of GDP directly and indirectly from luxury beach resorts, cruise ship arrivals at St. John's, and the world-famous superyacht charter and regatta industry centered at English and Falmouth Harbours. Its Citizenship by Investment (CBI) program and a construction boom in high-end residential resorts—including new private-jet infrastructure and golf developments on Barbuda—provide a second fiscal pillar. Structural challenges center on high imported diesel costs for power generation and water desalination, alongside exposure to Atlantic hurricanes."
  },
  "Angola": {
    "tier": "dev",
    "gdp_vi": "~103 tỷ USD (#71 thế giới)",
    "gdp_en": "~$103B (#71 globally)",
    "pc_vi": "~2.720 USD (PPP ~9.960 USD)",
    "pc_en": "~$2,720 (PPP ~$9,960)",
    "gr": "+5.0%",
    "sec": [
      45,
      34,
      21
    ],
    "main_vi": "Khai thác dầu thô ngoài khơi (#2–3 châu Phi hạ Sahara) & khí thiên nhiên hóa lỏng (Angola LNG), khai thác kim cương (#4 thế giới theo giá trị – mỏ Catoca, Luele), hành lang đường sắt khoáng sản Lobito nối vành đai đồng Congo – Zambia ra Đại Tây Dương",
    "main_en": "Offshore crude oil extraction (#2–3 in Sub-Saharan Africa) & LNG (Angola LNG), diamond mining (#4 globally by value – Catoca, Luele mines), Lobito Corridor rail logistics linking DRC/Zambia copperbelt to the Atlantic",
    "note_vi": "Dầu thô và khí thiên nhiên hóa lỏng (LNG) vẫn là xương sống của nền kinh tế Angola khi đóng góp hơn 90% kim ngạch xuất khẩu và khoảng 60% thu ngân sách; việc rút khỏi OPEC đầu năm 2024 giúp Angola giữ sản lượng quanh mức 1,1 triệu thùng/ngày và thu hút đầu tư thăm dò nước sâu mới từ TotalEnergies, Chevron và Azule Energy. Song song đó, Angola đang đẩy mạnh khai thác kim cương tại siêu mỏ lộ thiên Luele (khánh thành cuối năm 2023, mỏ kim cương lớn nhất thế giới mới đi vào hoạt động trong một thập kỷ qua), phát triển logistics dọc Hành lang đường sắt Lobito và khôi phục nông nghiệp cao nguyên để giảm sự phụ thuộc của đồng Kwanza vào giá dầu.",
    "note_en": "Crude oil and LNG still generate over 90% of Angola's export earnings and ~60% of fiscal revenues; exiting OPEC in January 2024 allowed Luanda to stabilize production above 1.1 million barrels per day and attract new deep-water investments from TotalEnergies, Chevron, and Azule Energy. Meanwhile, the late-2023 inauguration of the giant Luele kimberlite mine has cemented Angola as the world's #4 diamond producer, while the US/EU-backed Lobito railway corridor and new domestic oil refineries at Cabinda and Lobito spearhead efforts to diversify the oil-reliant economy."
  },
  "Andorra": {
    "tier": "adv",
    "gdp_vi": "~4,0 tỷ USD (#169 thế giới)",
    "gdp_en": "~$4.0B (#169 globally)",
    "pc_vi": "~49.360 USD (PPP ~75.390 USD)",
    "pc_en": "~$49,360 (PPP ~$75,390)",
    "gr": "+3.8%",
    "sec": [
      85,
      14,
      1
    ],
    "main_vi": "Du lịch trượt tuyết dãy Pyrenees (Grandvalira, Vallnord – đón >8 triệu khách/năm), thương mại bán lẻ thuế suất thấp (IGI chỉ 4,5%), ngân hàng tư nhân & quản lý tài sản, thu hút cư dân thu nhập cao & sáng tạo nội dung số",
    "main_en": "Pyrenees ski & mountain tourism (Grandvalira, Vallnord – >8M visitors/yr), low-tax retail shopping (4.5% VAT/IGI), private banking & wealth management, residency for high-net-worth individuals & digital creators",
    "note_vi": "Kinh tế Andorra dựa tới 80% vào du lịch bốn mùa (khu trượt tuyết Grandvalira đón hơn 8 triệu lượt khách/năm), thương mại bán lẻ thuế tiêu dùng cực thấp (IGI chỉ 4,5% so với mức 20–21% ở Pháp và Tây Ban Nha) và dịch vụ ngân hàng quản lý tài sản. Việc áp dụng mức thuế thu nhập cá nhân và doanh nghiệp tối đa chỉ 10% đã thu hút làn sóng cư dân giàu có, vận động viên thể thao và giới sáng tạo nội dung số đến định cư, đẩy giá bất động sản tăng vọt.",
    "note_en": "Tourism and duty-light retail generate roughly 80% of Andorra's GDP, anchored by the vast Grandvalira ski resorts (>8 million visitors annually) and a 4.5% value-added tax (IGI) that undercuts French and Spanish rates of 20–21%. Combined with a flat maximum 10% personal and corporate income tax, the principality has attracted high-net-worth residents and digital creators, though winter climate warming and housing shortages pose growing challenges."
  },
  "Algeria": {
    "tier": "emg",
    "gdp_vi": "~269 tỷ USD (#51 thế giới)",
    "gdp_en": "~$269B (#51 globally)",
    "pc_vi": "~5.750 USD (PPP ~17.650 USD)",
    "pc_en": "~$5,750 (PPP ~$17,650)",
    "gr": "+3.7%",
    "sec": [
      48,
      37,
      15
    ],
    "main_vi": "Khai thác khí đốt tự nhiên & LNG (tập đoàn quốc doanh Sonatrach – nhà cung cấp khí đốt qua đường ống biển lớn cho Ý và Tây Ban Nha), dầu thô, hóa dầu & phân bón (amoniac, urê), khai thác quặng sắt khổng lồ Gara Djebilet & phốt phát, nông nghiệp ngũ cốc",
    "main_en": "Natural gas & LNG exports (state giant Sonatrach – major pipeline supplier to Italy and Spain), crude oil, petrochemicals & fertilizers (ammonia, urea), Gara Djebilet iron ore & phosphate megaprojects, cereal farming",
    "note_vi": "Là nền kinh tế lớn thứ ba châu Phi, Algeria xoay quanh tập đoàn dầu khí quốc doanh khổng lồ Sonatrach — đơn vị nắm giữ trữ lượng khí đốt tự nhiên lớn thứ 10 thế giới và cung cấp nguồn thu ngoại tệ áp đảo cho ngân sách nhà nước. Cơn sốt giá năng lượng từ năm 2022 đã giúp Algiers tích lũy khoảng 70 tỷ USD dự trữ ngoại hối, duy trì hệ thống phúc lợi trợ giá rộng rãi và tài trợ cho các siêu dự án công nghiệp mới như mỏ sắt Gara Djebilet (trữ lượng >3 tỷ tấn), đường sắt xuyên Sahara và tổ hợp phân bón phốt phát. Điểm nghẽn cốt lõi vẫn là sự phụ thuộc quá mức vào dầu khí (~90% xuất khẩu) và môi trường đầu tư còn nặng tính hành chính nhà nước.",
    "note_en": "Africa's third-largest economy is anchored by state energy giant Sonatrach, which manages the world's tenth-largest natural gas reserves and supplies Europe via pipelines and LNG tankers. Elevated European gas demand since 2022 has enabled Algiers to amass ~$70 billion in foreign-exchange reserves, stay virtually free of external debt, and fund massive industrial diversification projects including the 3.5-billion-ton Gara Djebilet Saharan iron-ore mine, trans-Saharan railways, and petrochemical fertilizer complexes. Nonetheless, heavy reliance on hydrocarbons for ~90% of exports and a state-heavy business climate remain hurdles to private-sector job growth."
  },
  "Albania": {
    "tier": "emg",
    "gdp_vi": "~27,0 tỷ USD (#112 thế giới)",
    "gdp_en": "~$27.0B (#112 globally)",
    "pc_vi": "~11.370 USD (PPP ~26.700 USD)",
    "pc_en": "~$11,370 (PPP ~$26,700)",
    "gr": "+4.0%",
    "sec": [
      56,
      26,
      18
    ],
    "main_vi": "Du lịch biển Địa Trung Hải bùng nổ (Albanian Riviera – Ksamil, Vlorë, Sarandë đón >10 triệu khách/năm), thủy điện (sản xuất ~100% điện nội địa), khai thác quặng crôm (Bulqizë) & dầu thô trên bờ (Patos-Marinza), kiều hối (từ Ý, Hy Lạp), gia công dệt may – giày dép",
    "main_en": "Booming Mediterranean coastal tourism (Albanian Riviera – >10M visitors/yr), hydropower (~100% of domestic electricity), chromium ore (Bulqizë) & onshore crude oil (Patos-Marinza), diaspora remittances (Italy, Greece), footwear & apparel assembly",
    "note_vi": "Hậu đại dịch, Albania vươn lên thành ngôi sao du lịch tăng trưởng nhanh nhất châu Âu khi đón hơn 10–11 triệu lượt khách quốc tế mỗi năm (gấp hơn 4 lần dân số) đổ về bờ biển Ksamil, Sarandë và Vlorë. Dòng ngoại tệ từ du lịch và kiều hối đã giúp đồng Lek tăng giá mạnh so với Euro, thúc đẩy làn sóng đầu tư sân bay và khu nghỉ dưỡng. Bên cạnh trữ lượng crôm lớn ở Bulqizë và điện năng 100% từ thủy điện, bài toán khó nhất của Albania hiện nay là thiếu hụt lao động do di cư.",
    "note_en": "Post-pandemic Albania has emerged as Europe's fastest-growing tourism hotspot, welcoming over 10–11 million international visitors annually—more than four times its 2.4 million population—to the beaches of Ksamil, Sarandë, and Vlorë. Surging tourism receipts and diaspora remittances from Italy and Greece have driven a strong appreciation of the lek against the euro and sparked major resort and airport investments. Backed by 100% renewable hydroelectricity and rich Bulqizë chromium reserves, Albania's main economic bottleneck is acute labor scarcity caused by emigration."
  },
  "Afghanistan": {
    "tier": "low",
    "gdp_vi": "~17,8 tỷ USD (#134 thế giới)",
    "gdp_en": "~$17.8B (#134 globally)",
    "pc_vi": "~420 USD (PPP ~2.240 USD)",
    "pc_en": "~$420 (PPP ~$2,240)",
    "gr": "+1.9%",
    "sec": [
      48,
      15,
      37
    ],
    "main_vi": "Nông nghiệp tự cung tự cấp & trái cây khô (lựu, nho, nghệ tây), khai thác than đá & khoáng sản (đồng, sắt, đá quý), thương mại quá cảnh",
    "main_en": "Subsistence agriculture & dried fruits (pomegranates, raisins, saffron), coal & mineral extraction (copper, iron, gems), transit trade",
    "note_vi": "Việc phương Tây dừng viện trợ và đóng băng ~9 tỷ USD dự trữ ngoại hối năm 2021 đã làm kinh tế Afghanistan (~17 tỷ USD) thu hẹp mạnh và bị cắt khỏi hệ thống ngân hàng quốc tế. Kinh tế hiện vận hành ở mức sinh tồn nhờ nông nghiệp tự cung tự cấp, xuất khẩu than đá và trái cây khô (lựu, nho, nghệ tây), kiều hối qua kênh Hawala và thu thuế hải quan của Taliban (sau lệnh cấm trồng thuốc phiện năm 2023). Dù có trữ lượng đồng, sắt, lithium và dầu mỏ lớn đang thu hút doanh nghiệp Trung Quốc, tình trạng thiếu điện và bị cô lập quốc tế vẫn cản trở khai thác quy mô lớn.",
    "note_en": "The 2021 halt of Western aid and freezing of ~$9B in central bank reserves shrank Afghanistan's ~$17B economy by over a quarter and severed it from international banking. The subsistence economy now relies on Taliban customs collection, coal and dried-fruit exports (saffron, pomegranates), informal Hawala remittances, and farming following the 2023 opium ban. Although Chinese firms have signed deals for Amu Darya oil and Mes Aynak copper, sanctions, power shortages, and poor infrastructure severely limit mineral extraction."
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
    "note_vi": "Hoàn toàn không có dân thường hay hoạt động kinh tế thương mại, sông băng Siachen vận hành thuần túy như một khu vực hậu cần quân sự độ cao cực hạn. Ấn Độ ước tính chi khoảng 1–2 triệu USD mỗi ngày (cùng gánh nặng tương ứng phía Pakistan) để cung cấp quần áo giữ nhiệt, dầu sưởi ấm, lương thực và trực thăng tiếp tế cho các chốt gác trên băng. Giai đoạn 2019–2026, Ấn Độ mở cửa vùng căn cứ chân núi (Siachen Base Camp ở độ cao 3.600 m) cho du lịch mạo hiểm nội địa và kéo cáp quang, trạm 5G lên độ cao hơn 5.800 m.",
    "note_en": "Devoid of any civilian population or commercial GDP, the Siachen Glacier functions purely as an extreme high-altitude military logistics theater. India spends an estimated $1–2M per day—matched by heavy Pakistani costs on the western slopes—to supply troops with arctic gear, heating fuel, airlifted rations, and helicopter support. In 2019–2026, India opened the lower Siachen Base Camp (3,600 m) to domestic adventure tourism while installing fiber-optic cables, 5G towers, and all-weather access tunnels."
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
    "note_vi": "Châu Nam Cực vận hành một nền kinh tế hoàn toàn phi thương mại hóa tài nguyên đất liền theo quy định của Hiệp ước Nam Cực 1959 và Nghị định thư Bảo vệ Môi trường Madrid 1991 (cấm tuyệt đối mọi hoạt động thăm dò, khai thác dầu khí, than đá và khoáng sản thương mại ít nhất cho tới năm 2048). Toàn bộ hoạt động kinh tế gắn với châu lục trị giá khoảng 1,2–1,5 tỷ USD mỗi năm bao gồm ba lĩnh vực được giám sát chặt chẽ: ngân sách đầu tư của 30 chính phủ cho mạng lưới ~70 trạm nghiên cứu khoa học (khoan lõi băng cổ khí hậu 1,5 triệu năm tuổi, kính thiên văn neutrino IceCube tại Cực Nam), ngành du lịch tàu phá băng thám hiểm mùa hè khởi hành từ Ushuaia – Argentina (đón kỷ lục hơn 105.000–120.000 du khách/năm dưới quy tắc IAATO), và nghề đánh bắt nhuyễn thể Nam Cực (krill) cùng cá răng ngoài khơi theo hạn ngạch của Công ước CCAMLR.",
    "note_en": "Antarctica operates under a strictly non-extractive economic regime governed by the 1959 Antarctic Treaty and the 1991 Madrid Protocol, which bans all commercial oil, coal, and mineral mining at least until 2048. Total annual economic activity tied to the continent (~$1.2–1.5 billion/year) spans three regulated sectors: state-funded polar research logistics across ~70 stations operated by 30 nations (including 1.5-million-year ice-core drilling and the IceCube Neutrino Observatory at the South Pole), expedition cruise tourism governed by IAATO (carrying a record 105,000–120,000 passengers per austral summer, mainly from Ushuaia, Argentina), and offshore Southern Ocean harvesting of Antarctic krill and toothfish strictly quota-managed under the CCAMLR convention."
  },
  "Sint Maarten": {
    "tier": "adv",
    "gdp_vi": "~1,8 tỷ USD (#183 thế giới)",
    "gdp_en": "~$1.8B (#183 globally)",
    "pc_vi": "~41.470 USD (PPP ~53.850 USD)",
    "pc_en": "~$41,470 (PPP ~$53,850)",
    "gr": "+3.0%",
    "sec": [
      86,
      13,
      1
    ],
    "main_vi": "Cảng tàu du lịch cỡ lớn (Philipsburg – một trong những cảng tàu biển sầm uất nhất Caribe) & trung tâm hàng không khu vực (Sân bay quốc tế Princess Juliana / bãi biển Maho), nghỉ dưỡng – casino, bến siêu du thuyền (Simpson Bay), bán lẻ trang sức & rượu miễn thuế",
    "main_en": "Mega-cruise ship port (Philipsburg – top Caribbean cruise call) & regional aviation hub (Princess Juliana International Airport / Maho Beach), resort & casino tourism, superyacht marinas (Simpson Bay), duty-free luxury retail",
    "note_vi": "Mặc dù chỉ chiếm 40% diện tích đảo Saint Martin, phần Sint Maarten thuộc Hà Lan lại tạo ra hơn hai phần ba tổng quy mô kinh tế của cả hòn đảo nhờ nắm giữ toàn bộ hai cửa ngõ hạ tầng chiến lược: cảng tàu du lịch nước sâu Philipsburg và Sân bay Quốc tế Công chúa Juliana (trung tâm trung chuyển hàng không đi tới các đảo lân cận như St-Barthélemy, Saba, Sint Eustatius và Anguilla). Nền kinh tế vận hành theo mô hình cảng miễn thuế hoàn toàn (không đánh thuế giá trị gia tăng VAT hay thuế nhập khẩu hải quan), thu hút du khách Mỹ chi tiêu vào hệ thống khách sạn nghỉ dưỡng, sòng bạc (casino — vốn bị cấm ở phần đảo thuộc Pháp), trang sức kim cương, đồng hồ Thụy Sĩ và dịch vụ siêu du thuyền. Tháng 3/2025, Sint Maarten cùng với Curaçao đã chính thức phát hành đồng Guilder Caribbean (XCG, neo 1,79:1 với USD) thay thế đồng Guilder Antille cũ, dù đồng USD vẫn là phương tiện thanh toán phổ biến nhất trong thực tế.",
    "note_en": "Although it occupies only 40% of the island's land area, Dutch Sint Maarten generates more than two-thirds of the island's total economic output because it houses both strategic gateways: the deep-water Philipsburg cruise terminal and Princess Juliana International Airport (the primary air transit hub for neighboring St-Barthélemy, Anguilla, Saba, and Sint Eustatius). Operating as a 100% duty-free port with no customs duties or VAT, the economy thrives on American resort tourists, mega-cruise passengers, superyacht marinas in Simpson Bay, luxury jewelry and watch retail, and casinos (which are prohibited on the French side). In March 2025, Sint Maarten and Curaçao launched the new Caribbean Guilder (XCG, pegged 1.79:1 to the USD), while the US dollar continues to circulate universally in daily commerce."
  }
};
