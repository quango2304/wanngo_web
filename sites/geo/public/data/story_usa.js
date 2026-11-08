// Explainer: the United States as a fortress between two oceans (Tim Marshall's "Prisoners of Geography" framing).
// Facts checked on 8 Nov 2026. Nothing live is drawn (no troop deployments, blockade, tariffs, spheres of influence, borders):
// the situation is told in words with a date and a source. Marshall is cited only through a 2020 review (source 1);
// every "core" box is an interpretation, attributed, with a counter-view where one exists.
const US = '#1F4E8C', CAN = '#C2410C', MEX = '#15803D', GREY = '#9CA3AF', SEA = '#4B5563';
const FLOW = '#D97706';

export const USA = {
  id: 'usa',
  icon: '🗽',
  c: '#1F4E8C',
  title: { vi: 'Hoa Kỳ: pháo đài giữa hai đại dương', en: 'The United States: a fortress between two oceans' },
  sub: { vi: 'Sông, hai đại dương, hai láng giềng yếu hơn và mạng lưới căn cứ', en: 'Rivers, two oceans, two smaller neighbours and a base network' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến ngày 8/11/2026: Mỹ vẫn ở trong cuộc xung đột với Iran bắt đầu từ 28/2/2026; ngày 6/11 Mỹ tiến hành thêm các đợt không kích mà Tổng thống Trump gọi là “nhỏ” ở miền nam Iran, trong khi Qatar nói việc trung gian vẫn tiếp tục (Euronews). Ngày 3/11 là bầu cử giữa kỳ: CBS News dự báo đảng Dân chủ giành quyền kiểm soát cả Hạ viện lẫn Thượng viện (đây là dự báo, chưa chứng nhận; đến 7/11 còn hai ghế Thượng viện chưa xác định), và Quốc hội mới họp từ tháng 1/2027. Về thương mại, Tòa án Tối cao đã bác thuế IEEPA ngày 20/2/2026, chính quyền chuyển sang thuế theo mục 301 và mục 338, và ngày 1/7/2026 Mỹ không đồng ý gia hạn USMCA (hiệp định vẫn có hiệu lực, nay xem xét hằng năm). Các văn kiện chính thức (Chiến lược An ninh Quốc gia 11/2025, Chiến lược Quốc phòng 1/2026) đặt bảo vệ bản thổ và Tây bán cầu lên hàng đầu. Tình hình có thể đã thay đổi sau ngày này.',
    en: 'As of 8 Nov 2026: the US is still in the conflict with Iran that began on 28 Feb 2026; on 6 Nov it carried out more strikes in southern Iran that President Trump called “minor”, while Qatar says its mediation continues (Euronews). 3 Nov was the midterm election: CBS News projects Democrats won control of both the House and the Senate (a projection, not certified; two Senate races were still uncalled on 7 Nov), and the new Congress sits from January 2027. On trade, the Supreme Court struck down the IEEPA tariffs on 20 Feb 2026, the administration moved to Section 301 and Section 338 tariffs, and on 1 Jul 2026 the US declined to renew the USMCA (it stays in force and is now reviewed every year). The official documents (National Security Strategy, Nov 2025; National Defense Strategy, Jan 2026) put defending the homeland and the Western Hemisphere first. The situation may have changed after this date.'
  },
  statusSrc: [32, 30, 31, 35, 12, 0, 22],
  bottom: {
    vi: 'Kết luận chiến lược (một cách đọc có nguồn, không phải sự thật chắc chắn): hai đại dương và hai láng giềng nhỏ hơn cho Mỹ biên giới mà chính chiến lược của Mỹ mô tả là không có nguy cơ bị xâm lược, một hệ thống sông nối vùng nông nghiệp với biển, và đủ dư lực để đặt quân và căn cứ ở xa (Marshall qua điểm sách 2020; Chiến lược An ninh Quốc gia 11/2025). Điều địa lý không cho là quyền kiểm soát các nút thắt ở xa và giá cả: dù là nước xuất khẩu ròng dầu, giá xăng bán lẻ Mỹ tháng 9/2026 vẫn lên 4,35 USD/gallon khi eo Hormuz bị gián đoạn (EIA). Theo văn kiện chính thức, Washington đang dồn sự chú ý vào chính bán cầu của mình (Panama, Greenland, Caribe, Mexico) và vào tuyến biển, trong khi vẫn đánh một cuộc chiến ở Vùng Vịnh; các nhà phân tích như Kathleen Hicks cho rằng khung “bán cầu” không khớp với các mối đe dọa vượt vùng. Hai việc có thể cùng tồn tại bao lâu thì chưa ai biết.',
    en: 'The strategic bottom line (a sourced reading, not settled fact): two oceans and two smaller neighbours give the US borders that its own strategy describes as at no risk of invasion, a river system linking farmland to the sea, and enough spare strength to station forces and bases far away (Marshall via a 2020 review; National Security Strategy, Nov 2025). What geography does not give is control over distant chokepoints and over prices: although the US is a net oil exporter, US retail gasoline still averaged $4.35 a gallon in September 2026 while Hormuz was disrupted (EIA). According to the official documents, Washington is concentrating on its own hemisphere (Panama, Greenland, the Caribbean, Mexico) and on sea lanes while still fighting a war in the Gulf; analysts such as Kathleen Hicks argue that a “hemisphere” frame does not fit threats that cross regions. How long both can be sustained is not known.'
  },
  sources: [
    /* 0 */ { n: 'White House, National Security Strategy (11/2025)', url: 'https://www.whitehouse.gov/wp-content/uploads/2025/12/2025-National-Security-Strategy.pdf' },
    /* 1 */ { n: 'Henrico, book review of Marshall, Prisoners of Geography, Scientia Militaria 48(1) (2020)', url: 'https://scientiamilitaria.journals.ac.za/pub/article/download/1298/1312' },
    /* 2 */ { n: 'US Army, The Army Civil Works Navigation Mission (2/4/2013)', url: 'https://www.army.mil/article/100069/the_army_civil_works_navigation_mission' },
    /* 3 */ { n: 'National Waterways Foundation fact sheet (dữ liệu DOT/USACE 2021)', url: 'https://waterwayscouncil.org/file/555' },
    /* 4 */ { n: 'USDA AMS, Grain Transportation Report (26/2/2026)', url: 'https://www.ams.usda.gov/sites/default/files/media/GTR02262026.pdf' },
    /* 5 */ { n: 'USDA ERS, Charts of Note (28/2/2024, Census of Agriculture 2022)', url: 'https://ers.usda.gov/data-products/charts-of-note/108629' },
    /* 6 */ { n: 'International Boundary Commission, Did you know?', url: 'https://internationalboundarycommission.org/en/the-boundary-and-you/interesting-facts.php' },
    /* 7 */ { n: 'IBWC, About us (biên giới Mỹ – Mexico)', url: 'https://www.ibwc.gov/about-us/' },
    /* 8 */ { n: 'World Bank, GDP hiện hành (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/USA;CAN;MEX/indicator/NY.GDP.MKTP.CD?format=json&mrv=3' },
    /* 9 */ { n: 'World Bank, dân số (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/USA;CAN;MEX/indicator/SP.POP.TOTL?format=json&mrv=3' },
    /* 10 */ { n: 'USTR, Canada (số liệu 2025, ước tính)', url: 'https://ustr.gov/countries-regions/americas/canada' },
    /* 11 */ { n: 'USTR, Mexico (số liệu 2025, ước tính)', url: 'https://ustr.gov/countries-regions/americas/mexico' },
    /* 12 */ { n: 'CRS R48859, Mexico (cập nhật 23/9/2026)', url: 'https://www.everycrsreport.com/reports/R48859.html' },
    /* 13 */ { n: 'EIA, Today in Energy (27/5/2026)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67724' },
    /* 14 */ { n: 'EIA, Today in Energy (14/7/2026, LNG)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67864' },
    /* 15 */ { n: 'EIA, press release (6/10/2026, STEO tháng 10)', url: 'https://www.eia.gov/pressroom/releases/press593.php' },
    /* 16 */ { n: 'CRS R48887, U.S. Conflict with Iran (18/9/2026)', url: 'https://www.congress.gov/crs_external_products/R/PDF/R48887/R48887.3.pdf' },
    /* 17 */ { n: 'DMDC, Location Report (31/3/2026, công bố 7/5/2026)', url: 'https://dwp.dmdc.osd.mil/dwp/api/download?fileName=DMDC_Website_Location_Report_2603.xlsx&groupName=milRegionCountry' },
    /* 18 */ { n: 'CRS R48123, U.S. Overseas Basing (10/7/2024)', url: 'https://www.everycrsreport.com/reports/R48123.html' },
    /* 19 */ { n: 'CRS RL32665, Navy Force Structure (20/1/2026)', url: 'https://www.everycrsreport.com/files/2026-01-20_RL32665_88359be1fb136d6deaa0f9ce237ee017efa55589.pdf' },
    /* 20 */ { n: 'Panama Canal Authority, Annual Report 2025', url: 'https://pancanal.com/wp-content/uploads/2026/02/Informe-2025Eng.pdf' },
    /* 21 */ { n: 'CRS R48997, U.S.-Panama Relations (16/6/2026)', url: 'https://www.everycrsreport.com/files/2026-06-16_R48997_a6e03690c1a727db91fc93fe0ed46c47107ed84e.pdf' },
    /* 22 */ { n: 'Breaking Defense, National Defense Strategy (23/1/2026)', url: 'https://breakingdefense.com/2026/01/national-defense-strategy-hegseth-pentagon-western-hemisphere/' },
    /* 23 */ { n: 'Kathleen Hicks, Chicago Council on Global Affairs (1/2026)', url: 'https://globalaffairs.org/commentary/analysis/trump-administrations-new-national-defense-strategy-expands-us-homeland' },
    /* 24 */ { n: 'CRS IN12643, Greenland, Denmark, and U.S. Relations (22/1/2026)', url: 'https://www.everycrsreport.com/files/2026-01-22_IN12643_58744bb49e3c0954220dc93e7e15872e69cb773d.html' },
    /* 25 */ { n: 'Wikipedia, 2026 US–Denmark–Greenland agreement (sửa lần cuối 7/11/2026)', url: 'https://en.wikipedia.org/wiki/2026_US%E2%80%93Denmark%E2%80%93Greenland_agreement' },
    /* 26 */ { n: 'Christian Science Monitor (21/9/2026, Greenland)', url: 'https://www.csmonitor.com/World/Europe/2026/0921/greenland-denmark-us-bases-agreement-trump-security' },
    /* 27 */ { n: 'CRS R49186, Venezuela’s Post-Maduro Transition (13/8/2026)', url: 'https://www.everycrsreport.com/reports/R49186.html' },
    /* 28 */ { n: 'Al Jazeera (5/10/2026, biên giới Mexico)', url: 'https://www.aljazeera.com/news/2026/10/5/mexico-seeks-evidence-of-border-shooting-that-prompted-us-troop-deployment' },
    /* 29 */ { n: 'CRS IF10578, U.S.-Mexico Security Cooperation (11/12/2025)', url: 'https://www.everycrsreport.com/reports/IF10578.html' },
    /* 30 */ { n: 'CBS News, House results (cập nhật 7/11/2026)', url: 'https://www.cbsnews.com/live-updates/house-election-results-2026/' },
    /* 31 */ { n: 'CBS News, Senate results (cập nhật 7/11/2026)', url: 'https://www.cbsnews.com/live-updates/senate-election-results-2026/' },
    /* 32 */ { n: 'Euronews (7/11/2026, Iran)', url: 'https://www.euronews.com/2026/11/07/us-launches-new-targeted-strikes-on-iran-as-trump-claims-progress-in-talks-with-tehran' },
    /* 33 */ { n: 'CBS News, Iran live (3/11/2026)', url: 'https://www.cbsnews.com/live-updates/iran-war-us-trump-negotiations-midterms/' },
    /* 34 */ { n: 'TaxProf Blog (4/11/2026, thuế quan)', url: 'https://taxprofblog.aals.org/2026/11/04/update-on-tariff-challenges' },
    /* 35 */ { n: 'Wikipedia, Learning Resources v. Trump', url: 'https://en.wikipedia.org/wiki/Learning_Resources,_Inc._v._Trump' },
    /* 36 */ { n: 'White House, Fact Sheet thuế mục 338 đối với Canada (20/7/2026)', url: 'https://www.whitehouse.gov/fact-sheets/2026/07/fact-sheet-president-donald-j-trump-imposes-additional-tariffs-on-canada/' },
    /* 37 */ { n: 'C.H. Robinson, Section 338 (29/10/2026)', url: 'https://www.chrobinson.com/en-us/resources/insights-and-advisories/client-advisories/2026q4/10-29-26-client-advisory-canada-section-338-duties-expanded-october-2026/' }
  ],
  steps: [
    {
      title: { vi: 'Lòng chảo giữa lục địa: sông Mississippi và đồng bằng', en: 'The heartland: the Mississippi system and the interior plains' },
      text: {
        vi: 'Giữa dãy Appalachia ở phía đông và dãy Rocky ở phía tây là một đồng bằng nội địa rộng lớn. Các sông Mississippi, Missouri và Ohio gom nước của phần lớn vùng này rồi đổ ra vịnh Mexico gần New Orleans, nên sà lan có thể chở nông sản từ giữa lục địa ra biển với chi phí thấp. Vị trí sông và đồng bằng trên bản đồ là minh họa gần đúng.',
        en: 'Between the Appalachians in the east and the Rockies in the west lies a vast interior plain. The Mississippi, Missouri and Ohio rivers gather the water of much of this region and reach the Gulf of Mexico near New Orleans, so barges can carry farm produce from the middle of the continent to the sea at low cost. River and plain positions on the map are approximate.'
      },
      core: {
        vi: 'Cách đọc (diễn giải): theo một bài điểm sách năm 2020, Tim Marshall (Prisoners of Geography, 2015) cho rằng Mỹ là siêu cường một phần nhờ vị trí địa lý: bờ biển dài có cảng tự nhiên, sông ngòi nối liền đi được tàu, đất đai màu mỡ (Scientia Militaria); Chiến lược An ninh Quốc gia 11/2025 của Mỹ cũng liệt kê “địa lý đáng mơ ước” trong thế mạnh của mình. Suy luận của người viết, không phải điều nguồn nào khẳng định: một nước chở được lương thực và hàng hóa ngay trong lòng mình không phải đi chinh phục để sống, và còn sức đầu tư cho hải quân. Mặt trái: sông là quà của tự nhiên còn hạ tầng thì phải bảo trì, nên lợi thế này không tự động.',
        en: 'A reading (interpretation): according to a 2020 book review, Tim Marshall (Prisoners of Geography, 2015) argues the US is a superpower partly because of its location: long coastlines with natural harbours, connected navigable rivers and fertile land (Scientia Militaria); the US National Security Strategy of Nov 2025 also lists an “enviable geography” among its strengths. The writer’s inference, not a claim in any source: a country that can move food and goods inside its own borders does not need to conquer to live, and has spare capacity to invest in a navy. The other side: the rivers are a gift of nature but the infrastructure needs upkeep, so the advantage is not automatic.'
      },
      facts: [
        {
          vi: 'Binh đoàn Công binh Lục quân Mỹ cho biết họ vận hành và duy trì 12.000 dặm (khoảng 19.300 km) đường thủy nội địa và ven biển (US Army, 2013); chiều dài “đường thủy đi được” tùy định nghĩa nên các nguồn khác nhau. Theo National Waterways Foundation (dùng số liệu của Bộ Giao thông Mỹ), năm 2021 gần 500 triệu tấn hàng trị giá hơn 158 tỷ USD đi trên hệ thống này.',
          en: 'The US Army Corps of Engineers says it operates and maintains 12,000 miles (about 19,300 km) of inland and intracoastal waterways (US Army, 2013); the length of “navigable waterway” depends on the definition, so sources differ. According to the National Waterways Foundation (using US Department of Transportation data), nearly 500 million tons of goods worth over $158 billion moved on the system in 2021.'
        },
        {
          vi: 'Mỹ xuất khẩu khoảng một phần tư lượng ngũ cốc mình sản xuất (trung bình 10 năm). Năm 2025 khoảng 51% lượng ngũ cốc xuất khẩu rời Mỹ qua vùng vịnh Mexico, và sà lan chở 32 triệu tấn ngũ cốc trên sông Mississippi tới New Orleans để xuất khẩu (USDA AMS, 26/2/2026). Năm 2022 nước Mỹ có 880 triệu mẫu Anh đất nông trại (USDA ERS, từ Điều tra Nông nghiệp 2022).',
          en: 'The US exports about a quarter of the grain it produces (10-year average). In 2025 about 51% of grain export shipments left through the US Gulf, and barges moved 32 million tons of grain on the Mississippi to New Orleans for export (USDA AMS, 26 Feb 2026). In 2022 the US had 880 million acres of land in farms (USDA ERS, from the 2022 Census of Agriculture).'
        },
        {
          vi: 'Rủi ro: hạn hán làm nước thấp ở hạ lưu Mississippi trong 4 tháng cuối năm 2025 (USDA AMS). Theo National Waterways Foundation, phần lớn âu tàu và đập trên hệ thống Mississippi được xây từ thập niên 1930 và đang hoạt động quá tuổi thiết kế 50 năm.',
          en: 'Risk: drought-driven low water hit the lower Mississippi in the last four months of 2025 (USDA AMS). According to the National Waterways Foundation, most locks and dams on the Mississippi system were built in the 1930s and operate well beyond their 50-year design life.'
        }
      ],
      ll: [-92, 38],
      k: 3.2,
      layers: [],
      show: ['mississippi', 'greatplains', 'appalachian', 'rockies'],
      hl: { 'United States of America': US },
      dim: true,
      draw: [
        { k: 'line', pts: [[-97, 44], [-94, 40], [-91.5, 35], [-90.3, 31]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'hàng xuôi dòng (minh họa)', en: 'cargo downstream (illustrative)' }, lp: [-93.5, 40.5], dy: -8 },
        { k: 'pt', p: [-90.07, 29.95], c: US, r: 4, label: { vi: 'New Orleans', en: 'New Orleans' }, side: 'l' },
        { k: 'label', p: [-92, 26.8], c: SEA, label: { vi: 'Vịnh Mexico', en: 'Gulf of Mexico' } }
      ],
      src: [1, 0, 2, 3, 4, 5]
    },
    {
      title: { vi: 'Hai đại dương, hai láng giềng nhỏ hơn', en: 'Two oceans, two smaller neighbours' },
      text: {
        vi: 'Hoa Kỳ nằm giữa Đại Tây Dương và Thái Bình Dương, và trên đất liền chỉ giáp hai nước: Canada ở phía bắc và Mexico ở phía nam. Cả hai có nền kinh tế nhỏ hơn nhiều (GDP của Canada khoảng một phần mười ba, của Mexico khoảng một phần mười bảy GDP Mỹ, theo số liệu bên dưới), nhưng cũng luôn nằm trong hai đối tác thương mại hàng đầu của Mỹ (USTR). Chiến lược An ninh Quốc gia 11/2025 mô tả biên giới Mỹ là không có nguy cơ bị xâm lược quân sự, và các cường quốc khác bị ngăn cách bởi đại dương.',
        en: 'The United States sits between the Atlantic and the Pacific, and has only two land neighbours: Canada to the north and Mexico to the south. Both economies are much smaller (Canada’s GDP is about one thirteenth and Mexico’s about one seventeenth of US GDP, from the figures below), yet both are consistently among the top two US trading partners (USTR). The National Security Strategy of Nov 2025 describes US borders as at no risk of military invasion, with other great powers separated by oceans.'
      },
      core: {
        vi: 'Cách đọc (diễn giải): theo điểm sách 2020, Marshall gắn vị thế siêu cường của Mỹ với vị trí địa lý. Suy luận của người viết, không phải của Marshall: với láng giềng nhỏ hơn và hai đại dương che chắn, Mỹ không cần quân lớn ở biên giới đất liền nên có thể dành sức cho hải quân, không quân và căn cứ xa. Nỗi lo của Washington, theo chính Chiến lược An ninh Quốc gia 11/2025, không phải xâm lược mà là di cư hàng loạt, băng đảng ma túy và sự hiện diện thù địch của nước ngoài trong bán cầu, nên ma sát với hai láng giềng nằm ở thương mại, di cư và an ninh biên giới.',
        en: 'A reading (interpretation): according to the 2020 review, Marshall ties the US superpower position to its location. The writer’s inference, not Marshall’s: with smaller neighbours and two oceans as cover, the US does not need large forces on its land borders, so it can spend on navy, air power and distant bases. Washington’s worry, according to the Nov 2025 National Security Strategy itself, is not invasion but mass migration, drug cartels and hostile foreign presence in the hemisphere, so friction with the two neighbours lies in trade, migration and border security.'
      },
      facts: [
        {
          vi: 'Ranh giới Mỹ – Canada dài 8.891 km (5.525 dặm), gồm cả đoạn trên nước như Ngũ Đại Hồ; riêng đoạn trên đất liền là 5.061 km (International Boundary Commission). Biên giới Mỹ – Mexico dài 1.954 dặm (khoảng 3.145 km), chưa tính ranh giới trên biển; 1.255 dặm của nó chạy theo tim sông Rio Grande (IBWC).',
          en: 'The US–Canada boundary is 8,891 km (5,525 miles), including stretches on water such as the Great Lakes; the land part alone is 5,061 km (International Boundary Commission). The US–Mexico boundary is 1,954 miles (about 3,145 km), not counting maritime boundaries; 1,255 miles of it follow the centre of the Rio Grande (IBWC).'
        },
        {
          vi: 'Năm 2025 (World Bank, cập nhật 8/10/2026): GDP Mỹ khoảng 30,77 nghìn tỷ USD, Canada 2,32 nghìn tỷ, Mexico 1,83 nghìn tỷ. Dân số: Mỹ 341,8 triệu, Canada 41,7 triệu, Mexico 131,9 triệu.',
          en: 'In 2025 (World Bank, updated 8 Oct 2026): US GDP about $30.77 trillion, Canada $2.32 trillion, Mexico $1.83 trillion. Population: US 341.8 million, Canada 41.7 million, Mexico 131.9 million.'
        },
        {
          vi: 'Thương mại hàng hóa của Mỹ năm 2025 (số ước tính của USTR): với Canada khoảng 715,5 tỷ USD, với Mexico khoảng 871,6 tỷ USD.',
          en: 'US goods trade in 2025 (USTR estimates): about $715.5 billion with Canada and about $871.6 billion with Mexico.'
        }
      ],
      ll: [-98, 40],
      k: 2,
      layers: [],
      show: [],
      hl: { 'United States of America': US, Canada: CAN, Mexico: MEX },
      dim: true,
      draw: [
        { k: 'label', p: [-134, 38], c: SEA, label: { vi: 'Thái Bình Dương', en: 'Pacific Ocean' } },
        { k: 'label', p: [-62, 36], c: SEA, label: { vi: 'Đại Tây Dương', en: 'Atlantic Ocean' } },
        { k: 'label', p: [-100, 57], c: CAN, label: { vi: 'Canada', en: 'Canada' } },
        { k: 'label', p: [-102, 23.5], c: MEX, label: { vi: 'Mexico', en: 'Mexico' } }
      ],
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: CAN, vi: 'Canada', en: 'Canada' },
        { c: MEX, vi: 'Mexico', en: 'Mexico' }
      ],
      src: [0, 1, 6, 7, 8, 9, 10, 11]
    },
    {
      title: { vi: 'Đá phiến, dầu khí và Vùng Vịnh', en: 'Shale, oil and gas, and the Gulf' },
      text: {
        vi: 'Khoan ngang và nứt vỉa thủy lực đã mở các mỏ đá phiến như Permian ở Texas và New Mexico, và các cảng ở bờ vịnh Mexico đưa dầu và khí hóa lỏng (LNG) ra thế giới. Mỹ vừa xuất khẩu vừa nhập khẩu dầu; tính chung, theo EIA, Mỹ là nước xuất khẩu ròng dầu mỏ và sản phẩm dầu. Vị trí mỏ và cảng trên bản đồ là gần đúng.',
        en: 'Horizontal drilling and hydraulic fracturing opened shale fields such as the Permian in Texas and New Mexico, and ports on the Gulf coast send oil and liquefied natural gas (LNG) to the world. The US both exports and imports oil; overall, according to the EIA, it is a net exporter of petroleum. Field and port positions on the map are approximate.'
      },
      core: {
        vi: 'Cách đọc (diễn giải): Chiến lược An ninh Quốc gia 11/2025 coi “thống trị năng lượng” là ưu tiên chiến lược hàng đầu và nói xuất khẩu ròng nhiều hơn sẽ làm sâu quan hệ với đồng minh và giảm ảnh hưởng của đối thủ, nhưng cũng nói Mỹ luôn có lợi ích cốt lõi là năng lượng Vùng Vịnh không rơi vào tay kẻ thù công khai và eo Hormuz phải mở. Nhiều nhà phân tích cho rằng dầu đá phiến giảm nguy cơ thiếu hụt vật chất chứ không giảm mức phơi nhiễm với giá thế giới; số liệu giá tháng 9/2026 ở trên phù hợp với cách đọc đó, nhưng đó là suy luận của người viết, không phải kết luận của EIA. CRS ghi cuộc chiến với Iran đặt ra câu hỏi về chính sách Trung Đông của Mỹ.',
        en: 'A reading (interpretation): the Nov 2025 National Security Strategy calls “energy dominance” a top strategic priority and says larger net exports deepen ties with allies and curtail adversaries’ influence, but it also says the US will always have core interests in Gulf energy not falling to an outright enemy and in Hormuz staying open. Many analysts argue shale cuts the risk of a physical shortage but not exposure to world prices; the September 2026 price data above fit that reading, but that is the writer’s inference, not an EIA conclusion. CRS notes the war with Iran raises questions about US Middle East policy.'
      },
      facts: [
        {
          vi: 'Sản lượng dầu thô Mỹ là 13,7 triệu thùng/ngày năm 2025; EIA dự báo 13,9 (2026) và 14,3 (2027). Tháng 9/2026 giá Brent trung bình 114 USD/thùng và giá xăng bán lẻ Mỹ trung bình 4,35 USD/gallon, so với 3,10 USD cả năm 2025 (EIA, STEO 6/10/2026).',
          en: 'US crude oil production was 13.7 million barrels a day in 2025; the EIA forecasts 13.9 (2026) and 14.3 (2027). In September 2026 Brent averaged $114 a barrel and US retail gasoline averaged $4.35 a gallon, against $3.10 for the whole of 2025 (EIA, STEO of 6 Oct 2026).'
        },
        {
          vi: 'Năm 2025 xuất khẩu năng lượng của Mỹ đạt kỷ lục 31 quad, nhập khẩu 21 quad, xuất khẩu ròng kỷ lục 11 quad. Dầu và sản phẩm dầu chiếm 63% xuất khẩu và 83% nhập khẩu năng lượng; vùng bờ vịnh là vùng duy nhất của Mỹ xuất khẩu ròng dầu (EIA, 27/5/2026).',
          en: 'In 2025 US energy exports hit a record 31 quads, imports 21 quads, and net exports a record 11 quads. Petroleum was 63% of energy exports and 83% of energy imports; the Gulf Coast is the only US region that is a net petroleum exporter (EIA, 27 May 2026).'
        },
        {
          vi: 'Xuất khẩu LNG của Mỹ đạt 15,1 tỷ feet khối/ngày năm 2025 (tăng 26%), chiếm 26% xuất khẩu LNG thế giới, nhiều hơn Qatar (10,6). EIA nói việc đóng eo Hormuz từ 28/2/2026 cắt khoảng 20% nguồn cung LNG toàn cầu (EIA, 14/7/2026).',
          en: 'US LNG exports reached 15.1 billion cubic feet a day in 2025 (up 26%), 26% of world LNG exports, more than Qatar’s 10.6. The EIA says the closure of the Strait of Hormuz since 28 Feb 2026 cut off about 20% of global LNG supply (EIA, 14 Jul 2026).'
        }
      ],
      ll: [-98, 31],
      k: 4.5,
      layers: [],
      show: ['field_permian'],
      hl: { 'United States of America': US },
      dim: true,
      draw: [
        { k: 'line', pts: [[-102.2, 31.9], [-98.5, 30.4], [-95.3, 29.2]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'dầu, khí ra cảng (minh họa)', en: 'oil, gas to ports (illustrative)' }, lp: [-99.5, 30.9], dy: -9 },
        { k: 'pt', p: [-95.0, 29.2], c: US, r: 4, label: { vi: 'Bờ vịnh: cảng xuất khẩu (xấp xỉ)', en: 'Gulf coast: export ports (approx.)' }, dy: 12 }
      ],
      src: [15, 13, 14, 0, 16]
    },
    {
      title: { vi: 'Tuyến biển, mạng căn cứ và kênh đào Panama', en: 'Sea lanes, the base network and the Panama Canal' },
      text: {
        vi: 'Hải quân Mỹ đóng ở cả hai bờ biển, như quân cảng Norfolk (Đại Tây Dương) và Trân Châu Cảng (Thái Bình Dương), và Mỹ còn có căn cứ ở nhiều nước. Kênh đào Panama là đường tắt nối hai bờ; hầu hết hàng đi qua kênh có điểm đi hoặc điểm đến ở Mỹ. Vị trí và tuyến trên bản đồ là minh họa gần đúng.',
        en: 'The US Navy is based on both coasts, as at Norfolk (Atlantic) and Pearl Harbor (Pacific), and the US also has bases in many countries. The Panama Canal is a shortcut between the two coasts; most cargo through it starts or ends in the US. Positions and routes on the map are approximate.'
      },
      core: {
        vi: 'Cách đọc (diễn giải): theo điểm sách 2020, Marshall cho rằng chiến lược toàn cầu của Mỹ là duy trì dấu chân quân sự và liên minh khắp thế giới để giữ vị thế hàng đầu. Chiến lược An ninh Quốc gia 11/2025 nói Mỹ muốn tự do hàng hải trên mọi tuyến biển quan trọng, còn Chiến lược Quốc phòng 1/2026 cam kết “bảo đảm quyền tiếp cận quân sự và thương mại” tới các địa điểm then chốt, đặc biệt kênh Panama (Breaking Defense; CRS); suy luận của người viết là với một nước đại dương, hải quân là cách nối hai bờ biển và thương mại của mình. Ý kiến ngược: CRS ghi phần lớn căn cứ lâu dài ở nước ngoài có từ thời Chiến tranh Lạnh, tức một phần là di sản; Kathleen Hicks cho rằng kênh Panama không phải động lực quốc phòng lớn và khung “địa lý bán cầu” không khớp với các mối đe dọa vượt vùng.',
        en: 'A reading (interpretation): according to the 2020 review, Marshall argues the US global strategy is to keep a military footprint and alliances around the world to stay the leading power. The Nov 2025 National Security Strategy says the US wants freedom of navigation in all crucial sea lanes, and the Jan 2026 National Defense Strategy commits to “guarantee US military and commercial access” to key terrain, especially the Panama Canal (Breaking Defense; CRS); the writer’s inference is that for an oceanic power a navy is how it ties its two coasts and its trade together. The counter-view: CRS notes most persistent overseas bases date from the Cold War, so part of the network is inheritance; Kathleen Hicks argues the Panama Canal is not a major defence driver and that a “hemispheric geography” frame does not fit threats that cross regions.'
      },
      facts: [
        {
          vi: 'Quân nhân tại ngũ được bố trí ở nước ngoài ngày 31/3/2026: Nhật 54.891, Đức 37.009, Hàn Quốc 23.372, Ý 12.783, Anh 10.158, Panama 26. Bảng không tính người đang làm nhiệm vụ tạm thời hay triển khai cho chiến dịch (nên không gồm lực lượng trong cuộc chiến với Iran) (DMDC).',
          en: 'Active-duty personnel assigned abroad on 31 Mar 2026: Japan 54,891, Germany 37,009, South Korea 23,372, Italy 12,783, UK 10,158, Panama 26. The table excludes people on temporary duty or deployed for contingency operations (so it does not count forces in the war with Iran) (DMDC).'
        },
        {
          vi: 'CRS (10/7/2024): Bộ Quốc phòng quản lý hoặc sử dụng ít nhất 128 căn cứ ở ít nhất 51 nước, trong đó 68 là “căn cứ lâu dài” (dùng liên tục từ 15 năm) và 56 trong 68 lập từ thời Chiến tranh Lạnh; cách đếm khác nhau cho kết quả khác. Hải quân có 293 tàu chiến lực lượng chính ngày 1/10/2025, và luật yêu cầu ít nhất 11 tàu sân bay hoạt động (CRS, 20/1/2026).',
          en: 'CRS (10 Jul 2024): the Defense Department manages or uses at least 128 bases in at least 51 countries, of which 68 are “persistent bases” (used continuously for 15 years) and 56 of those 68 date from the Cold War; other ways of counting give other totals. The Navy had 293 battle force ships on 1 Oct 2025, and law requires at least 11 operational aircraft carriers (CRS, 20 Jan 2026).'
        },
        {
          vi: 'Năm tài khóa 2025 (10/2024–9/2025) kênh đào Panama đón 13.404 lượt tàu với 489,2 triệu tấn PC/UMS; khoảng 69,9% lượng hàng có điểm đi hoặc đến ở Mỹ, chủ yếu bờ Đông và vịnh Mexico (Cơ quan Kênh đào Panama). Báo cáo trích S&P rằng kênh chiếm gần 3% giao thông hàng hải thế giới.',
          en: 'In fiscal 2025 (Oct 2024–Sep 2025) the Panama Canal handled 13,404 transits and 489.2 million PC/UMS tons; about 69.9% of cargo started or ended in the US, mainly East Coast and Gulf ports (Panama Canal Authority). The report quotes S&P that the canal handles nearly 3% of world maritime traffic.'
        }
      ],
      ll: [-117, 28],
      k: 1.3,
      layers: [],
      show: ['base_pearlharbor', 'base_norfolk', 'panama'],
      hl: { 'United States of America': US },
      dim: true,
      draw: [
        { k: 'line', pts: [[-76.3, 36.95], [-75, 28], [-79.5, 10.5], [-79.7, 9.1]], c: FLOW, w: 2.5, flow: true, arrow: true, label: { vi: 'Đại Tây Dương – Panama (minh họa)', en: 'Atlantic to Panama (illustrative)' }, lp: [-73, 22], dy: 0 },
        { k: 'line', pts: [[-79.7, 9.1], [-92, 7.5], [-122, 13], [-157.9, 21.3]], c: FLOW, w: 2.5, flow: true, arrow: true, label: { vi: 'Panama – Thái Bình Dương (minh họa)', en: 'Panama to Pacific (illustrative)' }, lp: [-120, 12], dy: 10 }
      ],
      src: [1, 0, 22, 21, 17, 18, 19, 20, 23]
    },
    {
      title: { vi: 'Các điểm nóng ở Tây bán cầu (đến 8/11/2026)', en: 'Western Hemisphere pressure points (to 8 Nov 2026)' },
      text: {
        vi: 'Từ Greenland ở phía bắc qua vùng biển Caribe tới kênh Panama ở phía nam, Chiến lược Quốc phòng 2026 gọi nhiều địa điểm trong bán cầu là điểm tiếp cận then chốt. Căn cứ Pituffik ở Greenland phục vụ cảnh báo tên lửa, phòng thủ tên lửa và giám sát không gian (CRS). Chiến lược An ninh Quốc gia 2025 muốn khu vực đủ ổn định để ngăn di cư hàng loạt và hợp tác chống băng đảng. Dưới đây chỉ là các sự kiện có ngày và nguồn; vị trí trên bản đồ là gần đúng.',
        en: 'From Greenland in the north through the Caribbean to the Panama Canal in the south, the 2026 National Defense Strategy names several places in the hemisphere as key access points. Pituffik base in Greenland supports missile warning, missile defense and space surveillance (CRS). The 2025 National Security Strategy wants a hemisphere stable enough to prevent mass migration and cooperating against cartels. Below are only dated, sourced events; map positions are approximate.'
      },
      core: {
        vi: 'Cách đọc (diễn giải): theo Chiến lược An ninh Quốc gia 11/2025, “Hệ quả Trump” của Học thuyết Monroe nghĩa là Mỹ sẽ ngăn đối thủ ngoài bán cầu đặt lực lượng hay sở hữu, kiểm soát tài sản chiến lược trong bán cầu, và gắn điều khoản liên minh, viện trợ với việc giảm ảnh hưởng thù địch, kể cả cảng và hạ tầng. Mỹ cần một bán cầu đủ ổn định và không có căn cứ đối thủ; điều Mỹ lo, theo văn kiện, là di cư, băng đảng và đối thủ chiếm điểm then chốt; lựa chọn của Mỹ gồm đối tác, thuế quan, hiện diện quân sự hay vũ lực. Ý kiến ngược: Kathleen Hicks cho rằng khung bán cầu không khớp với mối đe dọa vượt vùng; Đan Mạch và Greenland ghi vào thỏa thuận chủ quyền và quyền tự quyết; Tổng thống Sheinbaum bác hành động quân sự đơn phương của Mỹ (CRS).',
        en: 'A reading (interpretation): according to the Nov 2025 National Security Strategy, the “Trump Corollary” to the Monroe Doctrine means the US will deny non-hemispheric rivals the ability to position forces or to own or control strategic assets in the hemisphere, and will tie alliance terms and aid to winding down hostile outside influence, ports and infrastructure included. What the US needs is a stable hemisphere with no rival bases; what it fears, per the document, is migration, cartels and rivals taking key points; its options are partnership, tariffs, military presence or force. The counter-view: Kathleen Hicks argues a hemisphere frame does not fit threats that cross regions; Denmark and Greenland wrote sovereignty and self-determination into their agreement; President Sheinbaum rejects unilateral US military action (CRS).'
      },
      facts: [
        {
          vi: 'Panama: ngày 20/1/2025 Tổng thống Trump nói trong diễn văn nhậm chức rằng Trung Quốc kiểm soát kênh và cho thấy chính quyền định lấy lại kênh; 4/2025 Mỹ – Panama ký biên bản ghi nhớ cho phép hiện diện luân phiên tại ba cơ sở do Panama kiểm soát (Panama nói không chấp nhận căn cứ nước ngoài). Ngày 29/1/2026 Tòa án Tối cao Panama hủy hợp đồng nhượng quyền cảng Balboa và Cristóbal của CK Hutchison (Hồng Kông), Mỹ ủng hộ; từ 2/2026 APM Terminals (Maersk) và TIL (MSC) điều hành 18 tháng chờ đấu thầu lại (CRS, 16/6/2026).',
          en: 'Panama: on 20 Jan 2025 President Trump said in his inaugural address that China controlled the canal and indicated the administration intended to reclaim it; in Apr 2025 the US and Panama signed a memorandum allowing rotational presence at three Panama-controlled facilities (Panama says it will not accept foreign bases). On 29 Jan 2026 Panama’s Supreme Court annulled CK Hutchison’s (Hong Kong) concession for the ports of Balboa and Cristóbal, which the US supported; since Feb 2026 APM Terminals (Maersk) and TIL (MSC) run them for 18 months pending a rebid (CRS, 16 Jun 2026).'
        },
        {
          vi: 'Greenland: tháng 1/2026 ông Trump dọa áp thuế tám đồng minh NATO cho đến khi có thỏa thuận “mua hoàn toàn” Greenland, rồi nói không dùng vũ lực và không áp thuế; khảo sát 1/2025: 85% người Greenland không muốn rời Đan Mạch (CRS, 22/1/2026). Ngày 22/9/2026 Mỹ, Đan Mạch và Greenland ký thỏa thuận sửa hiệp ước 1951: mở rộng Pituffik và hai khu phòng thủ mới ở Narsarsuaq và Mestersvig; lời mở đầu tái khẳng định chủ quyền Đan Mạch và quyền tự quyết của người Greenland, còn ông Trump nói thỏa thuận cho Mỹ “quyền kiểm soát an ninh vĩnh viễn”. Theo Wikipedia, đến 8/11 chưa có hiệu lực: quốc hội Greenland thông qua 16–0 (7 phiếu trắng) đến 3/11, quốc hội Đan Mạch đọc lần cuối 19/11.',
          en: 'Greenland: in Jan 2026 Mr Trump threatened tariffs on eight NATO allies until a deal for the “complete and total purchase” of Greenland, then said he would not use force or impose the tariffs; a Jan 2025 poll found 85% of Greenlanders did not want to leave Denmark (CRS, 22 Jan 2026). On 22 Sep 2026 the US, Denmark and Greenland signed an agreement amending the 1951 pact: expanded operations at Pituffik and two new defense areas at Narsarsuaq and Mestersvig; the preamble reaffirms Danish sovereignty and Greenlanders’ self-determination, while Mr Trump said it gives the US “permanent control over security”. According to Wikipedia, as of 8 Nov it was not yet in force: Greenland’s parliament approved it 16–0 (7 abstentions) by 3 Nov, and Denmark’s parliament holds its final reading on 19 Nov.'
        },
        {
          vi: 'Venezuela, Caribe, Mexico: ngày 3/1/2026 lực lượng Mỹ bắt ông Maduro, người bị Mỹ truy tố tội khủng bố ma túy; bà Delcy Rodríguez là quyền Tổng thống, chưa có ngày bầu cử (CRS, 13/8/2026). Từ 9/2025 Mỹ tấn công các tàu bị cho là buôn ma túy ở Caribe và Đông Thái Bình Dương (CRS, 12/2025). Cuối 9/2026 Đại sứ Mỹ nói có vụ bắn vào nhân viên Cảnh sát biển Mỹ ở biên giới Texas; Tổng thống Sheinbaum nói Mexico “không có bằng chứng”; khoảng 500 lính Mỹ được điều tới biên giới (Al Jazeera, 5/10/2026).',
          en: 'Venezuela, Caribbean, Mexico: on 3 Jan 2026 US forces captured Mr Maduro, who faces US narco-terrorism charges; Delcy Rodríguez is acting president and no election date is set (CRS, 13 Aug 2026). Since Sep 2025 the US has struck alleged drug boats in the Caribbean and the Eastern Pacific (CRS, Dec 2025). In late Sep 2026 the US ambassador said US Coast Guard personnel were shot at on the Texas border; President Sheinbaum said Mexico had “no evidence”; about 500 US troops were sent to the border (Al Jazeera, 5 Oct 2026).'
        }
      ],
      ll: [-70, 42],
      k: 1.15,
      layers: [],
      show: ['panama', 'greenlandgap', 'base_pituffik'],
      hl: { 'United States of America': US, Greenland: GREY, Panama: GREY, Venezuela: GREY, Mexico: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [-66.9, 10.5], c: GREY, r: 3.5, label: { vi: 'Venezuela (Caracas)', en: 'Venezuela (Caracas)' }, dy: 10 }
      ],
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: GREY, vi: 'nơi được nhắc tới trong bước này', en: 'places named in this step' }
      ],
      src: [0, 22, 21, 23, 24, 25, 26, 27, 28, 29]
    },
    {
      title: { vi: 'Tình hình đến 8/11/2026', en: 'Situation as of 8 November 2026' },
      text: {
        vi: 'Đến 8/11/2026 Mỹ vừa ở trong cuộc xung đột với Iran vừa mới qua kỳ bầu cử giữa kỳ. CBS News dự báo đảng Dân chủ giành cả hai viện (chưa chứng nhận) và Quốc hội mới họp từ tháng 1/2027. Về thương mại, các thuế quan đang bị kiện tại tòa, và hiệp định USMCA nay xem xét hằng năm.',
        en: 'As of 8 Nov 2026 the US is both in the conflict with Iran and just past the midterm election. CBS News projects Democrats won both chambers (not certified), and the new Congress sits from January 2027. On trade, tariffs are being challenged in court, and the USMCA is now reviewed every year.'
      },
      core: {
        vi: 'Cách đọc (diễn giải, có nguồn): văn kiện chính thức xếp bảo vệ bản thổ và Tây bán cầu lên đầu, Trung Quốc thứ hai (Breaking Defense), và nói Trung Đông không còn chi phối chính sách như trước nhưng eo Hormuz phải mở vẫn là lợi ích cốt lõi (Chiến lược An ninh Quốc gia 11/2025). Cuộc chiến ở Vùng Vịnh đang kéo sự chú ý ngược lại, và Kathleen Hicks cho rằng khung bán cầu không khớp với các mối đe dọa vượt vùng. Sau bầu cử, CRS liệt kê các công cụ Quốc hội có thể dùng: hạn chế hay cho phép dùng vũ lực, ngân sách bổ sung, bán vũ khí, giám sát đàm phán và trừng phạt.',
        en: 'A reading (interpretation, sourced): the official documents put defending the homeland and the Western Hemisphere first and China second (Breaking Defense), and say the Middle East no longer dominates policy but that keeping Hormuz open remains a core interest (National Security Strategy, Nov 2025). The war in the Gulf pulls attention the other way, and Kathleen Hicks argues a hemisphere frame does not fit threats that cross regions. After the election, CRS lists tools Congress may use: restricting or authorizing the use of force, supplemental funding, arms sales, oversight of negotiations and sanctions.'
      },
      facts: [
        {
          vi: 'Iran: xung đột bắt đầu bằng các đợt không kích của Mỹ và Israel từ 28/2/2026; biên bản ghi nhớ tháng 6 đã sụp đổ và hết hạn tháng 8, hai bên lại đánh nhau hạn chế. CBO ước tính chi phí quân sự Mỹ 38 tỷ USD đến 1/8/2026, và một đánh giá của Lầu Năm Góc cho biết tiêu thụ đạn gây thiếu hụt tồn kho chiến lược (CRS, 18/9/2026). Ngày 6/11 Mỹ không kích thêm ở đảo Qeshm (ông Trump gọi là “nhỏ”) và Qatar nói việc trung gian chưa dừng (Euronews, 7/11/2026); ngày 3/11 ông Trump đã dọa tiếp tục các đợt tấn công lớn sau bầu cử (CBS).',
          en: 'Iran: the conflict began with US and Israeli strikes from 28 Feb 2026; the June memorandum collapsed and expired in August, and the two sides are again trading limited strikes. The CBO estimated US military operations cost $38 billion as of 1 Aug 2026, and a Pentagon assessment says munitions use has caused strategic inventory shortfalls (CRS, 18 Sep 2026). On 6 Nov the US struck again on Qeshm island (Mr Trump called it “minor”) and Qatar says its mediation has not stopped (Euronews, 7 Nov 2026); on 3 Nov Mr Trump had threatened to resume major strikes after the election (CBS).'
        },
        {
          vi: 'Bầu cử giữa kỳ 3/11/2026 (dự báo của CBS News, cập nhật 7/11, chưa chứng nhận): đảng Dân chủ giành Hạ viện (lật hơn 40 ghế) và Thượng viện, còn hai ghế Thượng viện (Alaska, Mississippi) chưa xác định. Ông Jeffries nêu “chấm dứt cuộc chiến Iran” và rút lại thuế quan trong các ưu tiên trước mắt; một vài hạ nghị sĩ Cộng hòa đã bỏ phiếu chống ông Trump về quyền chiến tranh.',
          en: 'Midterm election of 3 Nov 2026 (CBS News projections, updated 7 Nov, not certified): Democrats won the House (flipping more than 40 seats) and the Senate, with two Senate races (Alaska, Mississippi) still uncalled. Mr Jeffries listed “ending the Iran war” and rolling back tariffs among his immediate priorities; a few Republican House members have voted against Mr Trump on war powers.'
        },
        {
          vi: 'Thương mại: Tòa án Tối cao phán ngày 20/2/2026 (6–3) rằng IEEPA không cho phép đánh thuế; thuế toàn cầu 10% theo mục 122 hết hạn 24/7; thuế mục 301 áp lên gần như mọi nước từ cuối tháng 7 đang chờ tòa; thuế 50% mục 338 đối với một số hàng Canada có hiệu lực từ 22/8 và danh mục sửa ngày 30/10. Ngày 1/7/2026 Mỹ không đồng ý gia hạn USMCA, nay xem xét hằng năm (Wikipedia; TaxProf, 4/11/2026; CRS; C.H. Robinson).',
          en: 'Trade: the Supreme Court ruled on 20 Feb 2026 (6–3) that IEEPA does not authorize tariffs; the 10% global Section 122 tariff expired on 24 Jul; Section 301 tariffs on nearly every country, imposed from late July, await a court ruling; 50% Section 338 tariffs on some Canadian goods took effect on 22 Aug and the product list was revised on 30 Oct. On 1 Jul 2026 the US declined to renew the USMCA, which is now reviewed every year (Wikipedia; TaxProf, 4 Nov 2026; CRS; C.H. Robinson).'
        }
      ],
      ll: [-98, 40],
      k: 2,
      layers: [],
      show: [],
      hl: { 'United States of America': US },
      dim: true,
      src: [16, 32, 33, 30, 31, 35, 34, 37, 36, 12, 22, 0, 23]
    }
  ]
};
