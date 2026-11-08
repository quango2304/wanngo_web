// Explainer: the United States, told as one argument in short steps: a rich continent that ships its harvest by sea,
// a home with almost no threat, sea lanes and chokepoints that lie far away, how Washington reaches for them, the
// neighbours' answer, and where it stands. Facts from the research pack of 8 Nov 2026; each step names its sources.
// Nothing live is drawn (no deployments, war zone, Hormuz closure or borders in dispute): it is told in words with a date.
const US = '#1F4E8C', CAN = '#C2410C', MEX = '#15803D', GREY = '#9CA3AF', SEA = '#4B5563';
const FLOW = '#D97706', ALLY = '#6B8F9C', IR = '#C53030', HOT = '#D9383A';

export const USA = {
  id: 'usa',
  icon: '🗽',
  c: '#1F4E8C',
  title: { vi: 'Hoa Kỳ: pháo đài giữa hai đại dương', en: 'The United States: a fortress between two oceans' },
  sub: { vi: 'Vì sao Mỹ đưa quân đi khắp thế giới', en: 'Why the US sends its forces around the world' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026 Mỹ vẫn trong cuộc xung đột với Iran; ngày 6/11 Mỹ không kích thêm ở miền nam Iran, còn Qatar nói vẫn tiếp tục trung gian. Sau bầu cử giữa kỳ ngày 3/11, CBS News dự báo đảng Dân chủ giành cả Hạ viện lẫn Thượng viện (dự báo, chưa chứng nhận). Ngày 1/7/2026 Mỹ không đồng ý gia hạn hiệp định thương mại USMCA; hiệp định vẫn có hiệu lực và nay được xem xét hằng năm.',
    en: 'As of 8 Nov 2026 the US is still in its conflict with Iran; on 6 Nov it carried out more strikes in southern Iran, while Qatar says its mediation continues. After the 3 Nov midterm election, CBS News projects that Democrats won both the House and the Senate (a projection, not certified). On 1 Jul 2026 the US declined to renew the USMCA trade agreement; it stays in force and is now reviewed every year.'
  },
  statusSrc: [22, 23, 24, 25],
  sources: [
    /* 0 */ { n: 'White House, National Security Strategy (11/2025)', url: 'https://www.whitehouse.gov/wp-content/uploads/2025/12/2025-National-Security-Strategy.pdf' },
    /* 1 */ { n: 'USDA AMS, Grain Transportation Report (26/2/2026)', url: 'https://www.ams.usda.gov/sites/default/files/media/GTR02262026.pdf' },
    /* 2 */ { n: 'USDA ERS, Charts of Note (28/2/2024, Census of Agriculture 2022)', url: 'https://ers.usda.gov/data-products/charts-of-note/108629' },
    /* 3 */ { n: 'World Bank, GDP hiện hành (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/USA;CAN;MEX/indicator/NY.GDP.MKTP.CD?format=json&mrv=3' },
    /* 4 */ { n: 'USTR, Canada (số liệu 2025, ước tính)', url: 'https://ustr.gov/countries-regions/americas/canada' },
    /* 5 */ { n: 'USTR, Mexico (số liệu 2025, ước tính)', url: 'https://ustr.gov/countries-regions/americas/mexico' },
    /* 6 */ { n: 'Henrico, book review of Marshall, Prisoners of Geography, Scientia Militaria 48(1) (2020)', url: 'https://scientiamilitaria.journals.ac.za/pub/article/download/1298/1312' },
    /* 7 */ { n: 'CRS R48123, U.S. Overseas Basing (10/7/2024)', url: 'https://www.everycrsreport.com/reports/R48123.html' },
    /* 8 */ { n: 'Panama Canal Authority, Annual Report 2025', url: 'https://pancanal.com/wp-content/uploads/2026/02/Informe-2025Eng.pdf' },
    /* 9 */ { n: 'CRS RL32665, Navy Force Structure (20/1/2026)', url: 'https://www.everycrsreport.com/files/2026-01-20_RL32665_88359be1fb136d6deaa0f9ce237ee017efa55589.pdf' },
    /* 10 */ { n: 'DMDC, Location Report (31/3/2026, công bố 7/5/2026)', url: 'https://dwp.dmdc.osd.mil/dwp/api/download?fileName=DMDC_Website_Location_Report_2603.xlsx&groupName=milRegionCountry' },
    /* 11 */ { n: 'Breaking Defense, National Defense Strategy (23/1/2026)', url: 'https://breakingdefense.com/2026/01/national-defense-strategy-hegseth-pentagon-western-hemisphere/' },
    /* 12 */ { n: 'CRS R48997, U.S.-Panama Relations (16/6/2026)', url: 'https://www.everycrsreport.com/files/2026-06-16_R48997_a6e03690c1a727db91fc93fe0ed46c47107ed84e.pdf' },
    /* 13 */ { n: 'CRS IN12643, Greenland, Denmark, and U.S. Relations (22/1/2026)', url: 'https://www.everycrsreport.com/files/2026-01-22_IN12643_58744bb49e3c0954220dc93e7e15872e69cb773d.html' },
    /* 14 */ { n: 'Wikipedia, 2026 US–Denmark–Greenland agreement (sửa lần cuối 7/11/2026)', url: 'https://en.wikipedia.org/wiki/2026_US%E2%80%93Denmark%E2%80%93Greenland_agreement' },
    /* 15 */ { n: 'Christian Science Monitor (21/9/2026, Greenland)', url: 'https://www.csmonitor.com/World/Europe/2026/0921/greenland-denmark-us-bases-agreement-trump-security' },
    /* 16 */ { n: 'CRS IF10578, U.S.-Mexico Security Cooperation (11/12/2025)', url: 'https://www.everycrsreport.com/reports/IF10578.html' },
    /* 17 */ { n: 'Kathleen Hicks, Chicago Council on Global Affairs (1/2026)', url: 'https://globalaffairs.org/commentary/analysis/trump-administrations-new-national-defense-strategy-expands-us-homeland' },
    /* 18 */ { n: 'EIA, Today in Energy (27/5/2026)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67724' },
    /* 19 */ { n: 'EIA, Today in Energy (14/7/2026, LNG)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=67864' },
    /* 20 */ { n: 'EIA, press release (6/10/2026, STEO tháng 10)', url: 'https://www.eia.gov/pressroom/releases/press593.php' },
    /* 21 */ { n: 'CRS R48887, U.S. Conflict with Iran (18/9/2026)', url: 'https://www.congress.gov/crs_external_products/R/PDF/R48887/R48887.3.pdf' },
    /* 22 */ { n: 'Euronews (7/11/2026, Iran)', url: 'https://www.euronews.com/2026/11/07/us-launches-new-targeted-strikes-on-iran-as-trump-claims-progress-in-talks-with-tehran' },
    /* 23 */ { n: 'CBS News, House results (cập nhật 7/11/2026)', url: 'https://www.cbsnews.com/live-updates/house-election-results-2026/' },
    /* 24 */ { n: 'CBS News, Senate results (cập nhật 7/11/2026)', url: 'https://www.cbsnews.com/live-updates/senate-election-results-2026/' },
    /* 25 */ { n: 'CRS R48859, Mexico (cập nhật 23/9/2026)', url: 'https://www.everycrsreport.com/reports/R48859.html' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Một lục địa giàu cần đường ra biển', en: 'A rich continent needs a way to the sea' },
      text: {
        vi: 'Mỹ có căn cứ quân sự ở hàng chục nước. Vì sao một nước cách mọi cường quốc khác cả một đại dương lại đưa quân đi khắp nơi? Hãy bắt đầu từ đất đai. Giữa lục địa là một đồng bằng rộng, trồng rất nhiều ngũ cốc. Mỹ bán ra nước ngoài khoảng một phần tư số ngũ cốc làm ra. Sông Mississippi chở ngũ cốc xuống vịnh Mexico, rồi tàu biển đưa đi khắp thế giới.',
        en: 'The US has military bases in dozens of countries. Why would a country that sits an ocean away from every other great power send its forces everywhere? Start with the land. The middle of the continent is a vast plain that grows a great deal of grain. The US sells abroad about a quarter of the grain it produces. The Mississippi carries grain down to the Gulf of Mexico, and ships take it on around the world.'
      },
      facts: [
        {
          vi: 'Năm 2025 khoảng 51% lượng ngũ cốc xuất khẩu rời Mỹ qua vùng vịnh Mexico, và sà lan chở 32 triệu tấn ngũ cốc trên sông Mississippi tới New Orleans, dù hạn hán làm nước sông xuống thấp trong 4 tháng cuối năm (USDA AMS).',
          en: 'In 2025 about 51% of US grain exports left through the Gulf, and barges moved 32 million tons of grain down the Mississippi to New Orleans, despite drought-driven low water in the last four months of the year (USDA AMS).'
        },
        {
          vi: 'Năm 2022 nước Mỹ có 880 triệu mẫu Anh đất nông trại (USDA ERS).',
          en: 'In 2022 the US had 880 million acres of land in farms (USDA ERS).'
        }
      ],
      ll: [-92, 38],
      k: 3.2,
      layers: [],
      show: ['mississippi', 'greatplains', 'appalachian', 'rockies'],
      hl: { 'United States of America': US },
      dim: true,
      draw: [
        { k: 'line', pts: [[-97, 44], [-94, 40], [-91.5, 35], [-90.3, 31]], c: FLOW, w: 3, flow: true, arrow: true, label: { vi: 'ngũ cốc xuôi dòng', en: 'grain downstream' }, lp: [-93.5, 40.5], dy: -8 },
        { k: 'pt', p: [-90.07, 29.95], c: US, r: 4, label: { vi: 'New Orleans', en: 'New Orleans' }, side: 'l' },
        { k: 'label', p: [-92, 26.8], c: SEA, label: { vi: 'Vịnh Mexico', en: 'Gulf of Mexico' } }
      ],
      src: [7, 0, 1, 2]
    },
    {
      tag: 'blocked',
      title: { vi: 'Ở nhà, gần như không ai đe dọa Mỹ', en: 'At home, almost no one threatens the US' },
      text: {
        vi: 'Nhìn quanh nước Mỹ: hai bên là hai đại dương. Trên đất liền chỉ có hai láng giềng là Canada và Mexico. Kinh tế của mỗi nước nhỏ hơn Mỹ hơn mười lần, và năm 2024 họ là hai bạn hàng lớn nhất của Mỹ. Chiến lược An ninh Quốc gia 11/2025 của Mỹ tự nhận có “địa lý đáng mơ ước”: biên giới không có nguy cơ bị xâm lược, các cường quốc khác ở cách cả một đại dương.',
        en: 'Look around the US: an ocean on each side. On land there are only two neighbours, Canada and Mexico. Each economy is more than ten times smaller than the US one, and in 2024 they were the two largest US trading partners. The US National Security Strategy of Nov 2025 claims an “enviable geography”: borders at no risk of invasion, and the other great powers an ocean away.'
      },
      facts: [
        {
          vi: 'GDP năm 2025 (World Bank): Mỹ khoảng 30,77 nghìn tỷ USD, Canada 2,32 nghìn tỷ, Mexico 1,83 nghìn tỷ.',
          en: 'GDP in 2025 (World Bank): the US about $30.77 trillion, Canada $2.32 trillion, Mexico $1.83 trillion.'
        },
        {
          vi: 'Nhà báo Tim Marshall (Những tù nhân của địa lý) cho rằng hình dạng đất đai chi phối hành động của các nước trong mỗi vùng (theo một bài điểm sách năm 2020).',
          en: 'The journalist Tim Marshall (Prisoners of Geography) argues that the shape of the land shapes what the countries of each region do (according to a 2020 book review).'
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
        { k: 'label', p: [-62, 36], c: SEA, label: { vi: 'Đại Tây Dương', en: 'Atlantic Ocean' } }
      ],
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: CAN, vi: 'Canada', en: 'Canada' },
        { c: MEX, vi: 'Mexico', en: 'Mexico' }
      ],
      src: [3, 4, 5, 0, 6]
    },
    {
      tag: 'blocked',
      title: { vi: 'Nhưng thứ Mỹ phải giữ lại ở xa', en: 'But what the US must keep is far away' },
      text: {
        vi: 'Vậy Mỹ lo gì? Chính văn kiện ấy cho thấy thứ Mỹ phải giữ nằm ngoài biên giới. Mỹ muốn tự do đi lại trên mọi tuyến biển quan trọng. Mỹ coi việc eo Hormuz ở Trung Đông luôn mở là lợi ích cốt lõi. Gần nhà hơn là kênh đào Panama, nơi khoảng 69,9% hàng qua kênh đi từ Mỹ hoặc đến Mỹ. Những cửa ngõ này đều nằm trên đất và biển của nước khác.',
        en: 'So what does the US worry about? The same document shows that what it must keep lies beyond its borders. The US wants freedom of navigation in all crucial sea lanes. It counts keeping the Strait of Hormuz in the Middle East open as a core interest. Closer to home is the Panama Canal, where about 69.9% of the cargo starts or ends in the US. All these gateways lie on other countries’ land and sea.'
      },
      facts: [
        {
          vi: 'Năm tài khóa 2025 (10/2024–9/2025) kênh đào Panama đón 13.404 lượt tàu; hàng đi Mỹ hoặc từ Mỹ chủ yếu qua các cảng bờ Đông và vịnh Mexico (Cơ quan Kênh đào Panama).',
          en: 'In fiscal 2025 (Oct 2024–Sep 2025) the Panama Canal handled 13,404 transits; its US cargo goes mainly to and from East Coast and Gulf ports (Panama Canal Authority).'
        }
      ],
      ll: [-82, 22],
      k: 1.4,
      layers: [],
      show: ['panama', 'r_panama', 'r_transat'],
      hl: { 'United States of America': US, Panama: GREY },
      dim: true,
      draw: [
        { k: 'pt', p: [-79.7, 9.1], c: HOT, r: 5, label: { vi: 'Panama', en: 'Panama' } }
      ],
      src: [0, 8]
    },
    {
      tag: 'move',
      title: { vi: 'Mỹ đặt quân và căn cứ khắp thế giới', en: 'The US places forces and bases worldwide' },
      text: {
        vi: 'Để có mặt ở xa, Mỹ có trong tay một hải quân lớn và một mạng lưới căn cứ. Theo CRS, năm 2024 Bộ Quốc phòng Mỹ quản lý hoặc sử dụng ít nhất 128 căn cứ ở ít nhất 51 nước. Chiến lược An ninh Quốc gia kể mạng lưới đồng minh ở những vùng quan trọng nhất là một thế mạnh của Mỹ. Nhưng CRS cũng ghi rằng phần lớn căn cứ lâu dài có từ thời Chiến tranh Lạnh.',
        en: 'To be present far away, the US has a large navy and a network of bases. According to CRS, in 2024 the Defense Department managed or used at least 128 bases in at least 51 countries. The National Security Strategy lists a network of allies in the most important regions among US strengths. But CRS also notes that most persistent bases date from the Cold War.'
      },
      facts: [
        {
          vi: 'Quân nhân tại ngũ ở nước ngoài ngày 31/3/2026: Nhật Bản 54.891, Đức 37.009, Hàn Quốc 23.372, Ý 12.783, Anh 10.158; không tính lực lượng triển khai cho chiến dịch (DMDC).',
          en: 'Active-duty personnel abroad on 31 Mar 2026: Japan 54,891, Germany 37,009, South Korea 23,372, Italy 12,783, UK 10,158; forces deployed for contingency operations are not counted (DMDC).'
        },
        {
          vi: 'Hải quân Mỹ có 293 tàu chiến lực lượng chính ngày 1/10/2025, và luật đòi ít nhất 11 tàu sân bay hoạt động (CRS).',
          en: 'The US Navy had 293 battle force ships on 1 Oct 2025, and the law requires at least 11 operational aircraft carriers (CRS).'
        }
      ],
      ll: [-25, 68],
      k: 1.05,
      layers: [],
      show: ['base_norfolk'],
      hl: { 'United States of America': US, Japan: ALLY, Germany: ALLY, 'South Korea': ALLY, Italy: ALLY, 'United Kingdom': ALLY },
      dim: true,
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: ALLY, vi: 'Nơi có đông lính Mỹ (DMDC)', en: 'Where most US troops are (DMDC)' }
      ],
      src: [7, 0, 10, 9]
    },
    {
      tag: 'move',
      title: { vi: 'Gần nhà, Mỹ giữ chặt bán cầu của mình', en: 'Close to home, the US holds its hemisphere tight' },
      text: {
        vi: 'Gần nhà, Washington còn đi xa hơn. Chiến lược An ninh Quốc gia nêu “Hệ quả Trump” của Học thuyết Monroe: Mỹ sẽ không để đối thủ ngoài bán cầu đặt lực lượng, hay sở hữu và kiểm soát tài sản chiến lược ở đây. Theo Breaking Defense, Chiến lược Quốc phòng 1/2026 hứa bảo đảm cho Mỹ quyền tiếp cận các nơi then chốt, nhất là kênh Panama. Greenland cũng nằm trong danh sách ấy.',
        en: 'Close to home, Washington goes further. The National Security Strategy sets out a “Trump Corollary” to the Monroe Doctrine: the US will not let rivals from outside the hemisphere station forces, or own and control strategic assets, there. According to Breaking Defense, the National Defense Strategy of Jan 2026 promises to guarantee US access to key places, especially the Panama Canal. Greenland is on that list too.'
      },
      facts: [
        {
          vi: 'Ngày 29/1/2026 Tòa án Tối cao Panama hủy hợp đồng nhượng quyền cảng Balboa và Cristóbal của CK Hutchison (Hồng Kông); Mỹ ủng hộ phán quyết (CRS).',
          en: 'On 29 Jan 2026 Panama’s Supreme Court annulled CK Hutchison’s (Hong Kong) concession for the ports of Balboa and Cristóbal; the US supported the ruling (CRS).'
        },
        {
          vi: 'Căn cứ Pituffik ở Greenland phục vụ cảnh báo và phòng thủ tên lửa (CRS). Ngày 22/9/2026 Mỹ, Đan Mạch và Greenland ký thỏa thuận mở rộng Pituffik và thêm hai khu phòng thủ mới (Wikipedia, CSMonitor).',
          en: 'Pituffik base in Greenland serves missile warning and missile defense (CRS). On 22 Sep 2026 the US, Denmark and Greenland signed an agreement to expand Pituffik and add two new defense areas (Wikipedia, CSMonitor).'
        }
      ],
      ll: [-70, 40],
      k: 1.15,
      layers: [],
      show: ['panama', 'base_pituffik'],
      hl: { 'United States of America': US, Greenland: GREY, Panama: GREY },
      dim: true,
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: GREY, vi: 'Nơi Mỹ muốn giữ quyền tiếp cận', en: 'Places the US wants access to' }
      ],
      src: [0, 11, 12, 13, 14, 15]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng bán cầu ấy là nhà của người khác', en: 'But that hemisphere is other people’s home' },
      text: {
        vi: 'Các nước láng giềng nhìn khác. Panama nói không chấp nhận căn cứ quân sự nước ngoài trên đất mình. Tháng 1/2026 ông Trump đòi mua Greenland, nhưng khảo sát năm 2025 cho thấy 85% người Greenland không muốn rời Đan Mạch. Thỏa thuận ký sau đó vẫn ghi chủ quyền của Đan Mạch và quyền tự quyết của người Greenland. Còn Tổng thống Mexico Sheinbaum bác mọi hành động quân sự đơn phương của Mỹ trên đất Mexico.',
        en: 'The neighbours see it differently. Panama says it will not accept foreign military bases on its soil. In January 2026 Mr Trump demanded to buy Greenland, but a 2025 poll found 85% of Greenlanders did not want to leave Denmark. The agreement signed later still affirms Danish sovereignty and Greenlanders’ right to self-determination. And Mexico’s President Sheinbaum rejects any unilateral US military action in Mexico.'
      },
      facts: [
        {
          vi: 'Nhà phân tích Kathleen Hicks (Chicago Council) cho rằng khung “bán cầu” không khớp với các mối đe dọa vượt qua nhiều vùng.',
          en: 'The analyst Kathleen Hicks (Chicago Council) argues that a “hemisphere” frame does not fit threats that cross regions.'
        }
      ],
      ll: [-75, 38],
      k: 1.15,
      layers: [],
      show: [],
      hl: { 'United States of America': US, Greenland: GREY, Panama: GREY, Mexico: MEX },
      dim: true,
      draw: [
        { k: 'label', p: [-42, 72], c: SEA, label: { vi: 'Greenland', en: 'Greenland' } },
        { k: 'label', p: [-102, 23.5], c: MEX, label: { vi: 'Mexico', en: 'Mexico' } }
      ],
      src: [12, 13, 14, 16, 17]
    },
    {
      tag: 'outlook',
      title: { vi: 'Bán dầu nhiều hơn mua, giá xăng vẫn tăng', en: 'A net oil exporter, yet gasoline rose' },
      text: {
        vi: 'Đất nhà thì yên, nhưng còn giá cả? Theo EIA, năm 2025 Mỹ bán ra nhiều dầu và sản phẩm dầu hơn mua vào. Ngày 28/2/2026 Mỹ và Israel không kích Iran, và EIA viết eo Hormuz bị đóng từ hôm đó. Tháng 9/2026 giá xăng bán lẻ ở Mỹ trung bình 4,35 USD/gallon. Cả năm 2025, con số ấy chỉ là 3,10 USD.',
        en: 'Home is safe, but what about prices? According to the EIA, in 2025 the US sold more oil and oil products than it bought. On 28 Feb 2026 the US and Israel struck Iran, and the EIA writes that the Strait of Hormuz has been closed since that day. In September 2026 US retail gasoline averaged $4.35 a gallon. For the whole of 2025 it was $3.10.'
      },
      facts: [
        {
          vi: 'Mỹ khai thác 13,7 triệu thùng dầu thô/ngày năm 2025; tháng 9/2026 giá dầu Brent trung bình 114 USD/thùng (EIA, 6/10/2026).',
          en: 'The US produced 13.7 million barrels of crude a day in 2025; in September 2026 Brent averaged $114 a barrel (EIA, 6 Oct 2026).'
        },
        {
          vi: 'CBO ước tính chi phí quân sự của Mỹ trong cuộc chiến với Iran là 38 tỷ USD tính đến 1/8/2026 (CRS).',
          en: 'The CBO estimated the US military cost of the war with Iran at $38 billion as of 1 Aug 2026 (CRS).'
        }
      ],
      ll: [54, 27],
      k: 3,
      layers: [],
      show: ['hormuz', 'persiangulf'],
      hl: { Iran: IR },
      dim: true,
      src: [18, 21, 19, 20]
    },
    {
      tag: 'outlook',
      title: { vi: 'Bán cầu đứng đầu, chiến sự ở Vùng Vịnh', en: 'The hemisphere first, the war in the Gulf' },
      text: {
        vi: 'Theo Breaking Defense, Chiến lược Quốc phòng 1/2026 xếp bảo vệ nước Mỹ và Tây bán cầu lên đầu, Trung Quốc thứ hai. Thế nhưng đến 8/11/2026 Mỹ vẫn đánh nhau với Iran, ở tận Vùng Vịnh. Quay lại câu hỏi ban đầu: theo chính văn kiện của Washington, ở nhà Mỹ gần như không có gì phải sợ. Thứ Mỹ phải giữ đều nằm ở xa: tuyến biển, kênh đào, eo biển.',
        en: 'According to Breaking Defense, the National Defense Strategy of Jan 2026 puts defending the US and the Western Hemisphere first and China second. Yet as of 8 Nov 2026 the US is still fighting Iran, far away in the Gulf. Back to the opening question: by Washington’s own documents, at home the US has almost nothing to fear. What it must keep all lies far away: sea lanes, canals, straits.'
      },
      facts: [
        {
          vi: 'Sau bầu cử giữa kỳ 3/11/2026, CBS News dự báo đảng Dân chủ giành cả hai viện (chưa chứng nhận); ông Jeffries (đảng Dân chủ) nêu “chấm dứt cuộc chiến Iran” trong các ưu tiên trước mắt.',
          en: 'After the 3 Nov 2026 midterms, CBS News projects that Democrats won both chambers (not certified); the Democrat Mr Jeffries listed “ending the Iran war” among his immediate priorities.'
        }
      ],
      ll: [-30, 35],
      k: 1,
      layers: [],
      show: ['hormuz', 'panama'],
      hl: { 'United States of America': US, Iran: IR },
      dim: true,
      key: [
        { c: US, vi: 'Hoa Kỳ', en: 'United States' },
        { c: IR, vi: 'Iran', en: 'Iran' }
      ],
      src: [11, 22, 0, 23, 24]
    }
  ]
};
