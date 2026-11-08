// Explainer: Russia, Ukraine and Europe, told as one argument in short steps: an open western plain, Moscow's wish for a
// buffer, NATO's growth, what Moscow did, the other side's case, and where it stands. Facts from the research pack of
// 8 Nov 2026; each step names its sources. By design there is no front line and no occupied-area shape on the map: the
// situation is told in words with a date and a source.
const RU = '#C53030', UA = '#E2B100', BY = '#B07A3A', GR = '#8A8A8A', TR = '#2E7CC0';
const OLD = '#1E3A8A', NEW = '#3B82F6', NORD = '#F59E0B', BUF = '#E2B100';

export const UKRAINE = {
  id: 'ukraine',
  icon: '🌾',
  c: '#C53030',
  title: { vi: 'Nga – Ukraine & châu Âu', en: 'Russia, Ukraine & Europe' },
  sub: { vi: 'Đồng bằng không có tường và cuộc giành vùng đệm', en: 'A plain with no wall and the fight over a buffer' },
  asof: '2026-11-08',
  status: {
    vi: 'Đến 8/11/2026 chưa có ngừng bắn toàn diện; đàm phán Nga – Ukraine – Mỹ dự kiến họp ở Abu Dhabi ngày 10/11. Theo DeepState, Nga chiếm 19,25% lãnh thổ Ukraine, tính cả Crimea (1/1/2026); ISW nói năm 2026 Nga tiến chậm hơn nhiều so với 2025. Ở Biển Đen, hoạt động tại cảng Odesa gần như ngừng vì bị tấn công liên tục.',
    en: 'As of 8 Nov 2026 there is no general ceasefire; Russia–Ukraine–US talks are due in Abu Dhabi on 10 Nov. DeepState put Russian-held land at 19.25% of Ukraine, including Crimea (1 Jan 2026); ISW says Russia’s 2026 advance is far slower than in 2025. On the Black Sea, operations at Odesa have largely stalled under constant strikes.'
  },
  statusSrc: [21, 23, 22, 19],
  sources: [
    { n: 'World Bank, diện tích Nga (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/RUS/indicator/AG.SRF.TOTL.K2?format=json' },
    { n: 'Wikipedia, Geography of Russia', url: 'https://en.wikipedia.org/wiki/Geography_of_Russia' },
    { n: 'Wikipedia, European Plain', url: 'https://en.wikipedia.org/wiki/European_Plain' },
    { n: 'Wikipedia, French invasion of Russia', url: 'https://en.wikipedia.org/wiki/French_invasion_of_Russia' },
    { n: 'Wikipedia, Operation Barbarossa', url: 'https://en.wikipedia.org/wiki/Operation_Barbarossa' },
    { n: 'Putin, diễn văn 24/2/2022 (bản lưu của trang Điện Kremlin)', url: 'https://web.archive.org/web/2022/http://en.kremlin.ru/events/president/news/67843' },
    { n: 'John Mearsheimer, Why the Ukraine Crisis Is the West’s Fault, Foreign Affairs (9/2014)', url: 'https://www.foreignaffairs.com/articles/russia-fsu/2014-08-18/why-ukraine-crisis-west-s-fault' },
    { n: 'Wikipedia, Prisoners of Geography (luận điểm và phê bình)', url: 'https://en.wikipedia.org/wiki/Prisoners_of_Geography' },
    { n: 'World Bank, số liệu Ukraine (cập nhật 8/10/2026)', url: 'https://api.worldbank.org/v2/country/UKR/indicator/AG.SRF.TOTL.K2?format=json' },
    { n: 'NATO, danh sách thành viên', url: 'https://www.nato.int/en/about-us/organization/nato-member-countries' },
    { n: 'NATO, Tuyên bố Thượng đỉnh Bucharest (3/4/2008)', url: 'https://www.nato.int/cps/en/natohq/official_texts_8443.htm' },
    { n: 'Bộ Ngoại giao Nga, dự thảo hiệp định với Mỹ và NATO (17/12/2021, bản lưu)', url: 'https://archive.org/details/russia-draft-agreements-nato-usa-december-2021' },
    { n: 'The Barents Observer (4/4/2026)', url: 'https://www.thebarentsobserver.com/news/three-years-of-patrolling-natos-eastern-border/446907' },
    { n: 'NATO, Tuyên bố Thượng đỉnh Washington (10/7/2024)', url: 'https://www.nato.int/cps/en/natohq/official_texts_227678.htm' },
    { n: 'Bản ghi nhớ Budapest (5/12/1994)', url: 'https://nsarchive.gwu.edu/sites/default/files/documents/semon9-giki0/1994-12-05-Budapest-Memorandum.pdf' },
    { n: 'Liên Hợp Quốc, nghị quyết 68/262 (27/3/2014)', url: 'https://press.un.org/en/2014/ga11493.doc.htm' },
    { n: 'Liên Hợp Quốc, Đại hội đồng bỏ phiếu về xâm lược Ukraine (2/3/2022)', url: 'https://press.un.org/en/2022/ga12407.doc.htm' },
    { n: 'CSIS, Crimea’s Strategic Value to Russia (18/3/2014)', url: 'https://www.csis.org/blogs/post-soviet-post/crimeas-strategic-value-russia' },
    { n: 'Lieber Institute, Montreux (3/3/2022)', url: 'https://lieber.westpoint.edu/closing-turkish-straits-war/' },
    { n: 'Al Jazeera (3/11/2026, ngũ cốc Biển Đen)', url: 'https://www.aljazeera.com/news/2026/11/3/disruptions-of-black-sea-grain-exports-spike-global-prices' },
    { n: 'Putin, phát biểu tại Bộ Ngoại giao Nga 14/6/2024 (bản lưu của trang Điện Kremlin)', url: 'https://web.archive.org/web/2025/http://en.kremlin.ru/events/president/news/74285' },
    { n: 'Reuters qua Khaleej Times (24/10/2026)', url: 'https://www.khaleejtimes.com/europe/russia-ukraine-hold-peace-talks-nov-2026-ceasefire-oleshky' },
    { n: 'Al Jazeera (6/11/2026, ISW)', url: 'https://www.aljazeera.com/news/2026/11/6/in-ukraine-russias-territorial-gains-dwindle-as-its-diesel-goes-unsold' },
    { n: 'Ukrainska Pravda (1/1/2026, DeepState)', url: 'https://www.pravda.com.ua/eng/news/2026/01/01/8014292/' },
    { n: 'AP qua Spectrum News (13/4/2022, Phần Lan và Thụy Điển)', url: 'https://spectrumlocalnews.com/nys/capital-region/ap-online/2022/04/13/finland-sweden-move-ahead-toward-possible-nato-membership' },
    { n: 'McFaul và Sestanovich, Faulty Powers, Foreign Affairs (11/2014)', url: 'https://www.foreignaffairs.com/articles/eastern-europe-caucasus/2014-10-17/faulty-powers' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Nước Nga rộng nhưng hở sườn tây', en: 'Russia is vast but open to the west' },
      text: {
        vi: 'Vì sao Nga coi Ukraine là chuyện sống còn, đến mức tiến quân năm 2022? Câu trả lời bắt đầu từ bản đồ nước Nga. Nga rộng khoảng 17,1 triệu km², lớn nhất thế giới. Phía bắc là biển băng, phía đông là Siberia mênh mông, phía nam có dãy Kavkaz. Nhưng phía tây, nơi có Moscow và vùng lõi đông dân, đất phẳng và không có núi che.',
        en: 'Why does Russia treat Ukraine as a matter of survival, to the point of invading in 2022? The answer starts with the map of Russia. It covers about 17.1 million km², the largest country on Earth. To the north lies frozen sea, to the east the vastness of Siberia, to the south the Caucasus. But to the west, where Moscow and the populous core lie, the land is flat with no mountains to shelter it.'
      },
      ll: [60, 57],
      k: 1.3,
      layers: [],
      show: ['arcticice', 'caucasus', 'ural', 'taiga'],
      hl: { Russia: RU },
      dim: true,
      draw: [
        { k: 'line', pts: [[20, 52], [30, 54.5], [37.6, 55.75]], c: RU, w: 3, flow: true, arrow: true, label: { vi: 'sườn tây bỏ ngỏ', en: 'the open west' }, lp: [27, 54.4], dy: 14 },
        { k: 'pt', p: [37.62, 55.75], c: RU, r: 5, label: { vi: 'Moscow', en: 'Moscow' } }
      ],
      src: [0, 1]
    },
    {
      tag: 'blocked',
      title: { vi: 'Một đồng bằng không có bức tường', en: 'A plain with no wall' },
      text: {
        vi: 'Từ Pháp qua Đức, Ba Lan tới Moscow là một dải đồng bằng dài, phần lớn thấp dưới 150 m, không dãy núi nào chắn ngang. Quân đội đi lại rất dễ. Năm 1812 quân Napoleon, năm 1941 quân Đức của Hitler đều theo đường này đánh vào nước Nga. Ở Moscow ký ức ấy chưa phai: ngày 24/2/2022 ông Putin nói Nga sẽ không mắc lại sai lầm năm 1941, khi đã hành động quá muộn.',
        en: 'From France through Germany and Poland to Moscow runs a long plain, mostly below 150 m, with no mountain range across it. Armies move through it easily. In 1812 Napoleon’s army and in 1941 Hitler’s German army both invaded Russia this way. Moscow has not forgotten: on 24 Feb 2022 Putin said Russia would not repeat the mistake of 1941, when it acted too late.'
      },
      ll: [28, 52],
      k: 2.2,
      layers: [],
      show: ['northplain', 'carpathians'],
      hl: { Russia: RU, Poland: GR, Germany: GR, France: GR, Belarus: BY, Ukraine: UA },
      dim: true,
      draw: [
        { k: 'line', pts: [[24.0, 54.9], [32.05, 54.78], [34.0, 55.5], [37.62, 55.75]], c: '#7C3AED', w: 2.6, flow: true, arrow: true, label: { vi: '1812', en: '1812' }, lp: [30, 55.6], dy: -2 },
        { k: 'line', pts: [[23.7, 52.1], [27.56, 53.9], [32.05, 54.78], [37.62, 55.75]], c: '#B45309', w: 2.6, flow: true, arrow: true, label: { vi: '1941', en: '1941' }, lp: [27.5, 53.2], dy: 4 },
        { k: 'line', pts: [[23.7, 50.5], [30.52, 50.45], [35.0, 48.5]], c: '#B45309', w: 2.6, flow: true, arrow: true }
      ],
      key: [
        { c: '#7C3AED', vi: '1812 (đơn giản hóa)', en: '1812 (simplified)' },
        { c: '#B45309', vi: '1941 (đơn giản hóa)', en: '1941 (simplified)' }
      ],
      src: [2, 3, 4, 5]
    },
    {
      tag: 'move',
      title: { vi: 'Vì thế Moscow muốn một vùng đệm', en: 'So Moscow wants a buffer' },
      text: {
        vi: 'Không có núi để dựa, Moscow muốn có khoảng cách: một dải đất ở giữa không nằm trong liên minh quân sự nào đối địch với Nga. Belarus và Ukraine chính là dải đất ấy, và Ukraine là phần lớn nhất, rộng khoảng 603.550 km², phần lớn là đồng bằng. Nhà nghiên cứu John Mearsheimer gọi Ukraine là “quốc gia đệm” có tầm quan trọng chiến lược rất lớn với Nga.',
        en: 'With no mountains to lean on, Moscow wants distance: a belt of land in between that belongs to no military alliance hostile to Russia. Belarus and Ukraine are that belt, and Ukraine is the largest part, about 603,550 km², mostly plain. The scholar John Mearsheimer called Ukraine a “buffer state” of enormous strategic importance to Russia.'
      },
      facts: [
        {
          vi: 'Nhà báo Tim Marshall (Những tù nhân của địa lý) cho rằng địa lý giới hạn lựa chọn của mọi nhà lãnh đạo. Giới phê bình như McFaul đáp rằng bản đồ không đổi, vậy mà Nga lúc hợp tác, lúc đối đầu với phương Tây: địa lý đặt giới hạn, không quyết định thay con người.',
          en: 'The journalist Tim Marshall (Prisoners of Geography) argues that geography limits every leader’s choices. Critics such as McFaul reply that the map stayed the same while Russia alternated between cooperating with and confronting the West: geography sets limits, it does not decide for people.'
        }
      ],
      ll: [31, 51],
      k: 2.8,
      layers: [],
      show: ['dnieper', 'northplain'],
      hl: { Russia: RU, Ukraine: BUF, Belarus: BUF, Poland: GR, Lithuania: GR, Latvia: GR, Slovakia: GR, Hungary: GR, Romania: GR },
      dim: true,
      draw: [
        { k: 'label', p: [29.5, 51.5], c: '#6B5A2B', label: { vi: 'dải đất ở giữa', en: 'the belt in between' }, dy: 0 }
      ],
      key: [{ c: BUF, vi: 'Vùng đệm Moscow muốn giữ trung lập', en: 'The buffer Moscow wants kept neutral' }],
      src: [6, 8, 7, 25]
    },
    {
      tag: 'counter',
      title: { vi: 'Nhưng NATO tiến dần về phía đông', en: 'But NATO moved east' },
      text: {
        vi: 'Cũng đồng bằng ấy, nhìn từ phía tây lại thấy mối đe dọa đến từ nước Nga. Vì thế sau Chiến tranh Lạnh, các nước Đông Âu lần lượt vào NATO: liên minh từ 16 nước tăng lên 32. NATO nay giáp Nga ở các nước Baltic, và từ năm 2023 cả ở Phần Lan. Năm 2008 NATO còn tuyên bố Ukraine và Gruzia “sẽ trở thành thành viên”. Với Moscow, đó là lằn ranh đỏ.',
        en: 'Seen from the west, the same plain shows a threat coming from Russia. So after the Cold War, the countries of Eastern Europe joined NATO one after another: the alliance grew from 16 members to 32. NATO now borders Russia in the Baltic states and, since 2023, in Finland. In 2008 NATO also declared that Ukraine and Georgia “will become members”. For Moscow that was a red line.'
      },
      facts: [
        {
          vi: 'Tháng 12/2021 Moscow đưa dự thảo hiệp định, đòi NATO cam kết không kết nạp thêm thành viên, kể cả Ukraine.',
          en: 'In December 2021 Moscow put forward draft agreements demanding that NATO commit to no further enlargement, including Ukraine.'
        },
        {
          vi: 'Khi Phần Lan gia nhập, đường biên giới trên bộ giữa NATO và Nga dài gần gấp đôi; riêng biên giới Phần Lan – Nga dài khoảng 1.340 km (The Barents Observer).',
          en: 'When Finland joined, NATO’s land border with Russia nearly doubled; the Finland–Russia border alone is about 1,340 km (The Barents Observer).'
        }
      ],
      ll: [22, 55],
      k: 2.1,
      layers: [],
      show: ['suwalki', 'base_kaliningrad'],
      hl: {
        France: OLD, Germany: OLD, 'United Kingdom': OLD, Belgium: OLD, Netherlands: OLD, Luxembourg: OLD, Denmark: OLD, Norway: OLD,
        Italy: OLD, Spain: OLD, Portugal: OLD, Greece: OLD, Turkey: OLD,
        Poland: NEW, Czechia: NEW, Hungary: NEW, Estonia: NEW, Latvia: NEW, Lithuania: NEW, Slovakia: NEW, Slovenia: NEW,
        Bulgaria: NEW, Romania: NEW, Albania: NEW, Croatia: NEW, Montenegro: NEW, Macedonia: NEW,
        Finland: NORD, Sweden: NORD, Russia: RU, Belarus: BY, Ukraine: UA, Georgia: UA
      },
      dim: true,
      key: [
        { c: OLD, vi: 'Thành viên trước 1999', en: 'Members before 1999' },
        { c: NEW, vi: 'Gia nhập 1999–2020', en: 'Joined 1999–2020' },
        { c: NORD, vi: 'Phần Lan 2023, Thụy Điển 2024', en: 'Finland 2023, Sweden 2024' },
        { c: UA, vi: 'Ukraine, Gruzia: “sẽ trở thành thành viên” (2008)', en: 'Ukraine, Georgia: “will become members” (2008)' }
      ],
      src: [9, 10, 11, 12]
    },
    {
      tag: 'move',
      title: { vi: 'Moscow ra tay: Crimea rồi cả Ukraine', en: 'Moscow acts: Crimea, then all of Ukraine' },
      text: {
        vi: 'Năm 2014, sau khi chính quyền ở Kyiv thay đổi và ngả về phương Tây, Nga chiếm và sáp nhập bán đảo Crimea. Crimea có Sevastopol, căn cứ của Hạm đội Biển Đen; giới phân tích như CSIS nói Moscow sợ mất cảng nước ấm này. Ngày 24/2/2022 Nga tiến quân vào Ukraine. Ông Putin nói việc NATO tìm chỗ đứng quân sự trên đất Ukraine là điều Nga không thể chấp nhận.',
        en: 'In 2014, after the government in Kyiv changed and leaned towards the West, Russia seized and annexed the Crimean peninsula. Crimea holds Sevastopol, home of the Black Sea Fleet; analysts such as CSIS say Moscow feared losing this warm-water port. On 24 Feb 2022 Russia invaded Ukraine. Putin said NATO’s efforts to gain a military foothold on Ukrainian territory were unacceptable to Russia.'
      },
      facts: [
        {
          vi: 'Biển Đen chỉ ra được Địa Trung Hải qua eo Bosphorus của Thổ Nhĩ Kỳ. Từ 28/2/2022 Ankara hạn chế tàu chiến của Nga và Ukraine qua eo, theo Công ước Montreux 1936 (Lieber Institute).',
          en: 'The Black Sea reaches the Mediterranean only through Turkey’s Bosphorus. Since 28 Feb 2022 Ankara has restricted Russian and Ukrainian warships from passing, under the 1936 Montreux Convention (Lieber Institute).'
        }
      ],
      ll: [34, 45.5],
      k: 3.2,
      layers: [],
      show: ['crimea', 'base_sevastopol', 'bosphorus', 'blacksea'],
      hl: { Ukraine: UA, Russia: RU, Turkey: TR },
      dim: true,
      draw: [
        { k: 'pt', p: [33.52, 44.62], c: RU, r: 5, side: 'l', label: { vi: 'Sevastopol', en: 'Sevastopol' } },
        { k: 'pt', p: [30.52, 50.45], c: UA, r: 4.5, side: 'l', label: { vi: 'Kyiv', en: 'Kyiv' } }
      ],
      src: [17, 5, 18]
    },
    {
      tag: 'counter',
      title: { vi: 'Phía bên kia: Ukraine có quyền tự chọn', en: 'The other side: Ukraine has the right to choose' },
      text: {
        vi: 'Ukraine và phương Tây nhìn khác. Ukraine là một nước có chủ quyền, được tự chọn liên minh; năm 1994, trong Bản ghi nhớ Budapest, chính Nga đã cam kết tôn trọng biên giới của Ukraine. Liên Hợp Quốc kêu gọi không công nhận việc sáp nhập Crimea, và năm 2022 Đại hội đồng lên án cuộc xâm lược với 141 phiếu thuận, 5 phiếu chống. Phần Lan và Thụy Điển, vốn đứng ngoài NATO nhiều thập kỷ, xin gia nhập ngay sau cuộc xâm lược.',
        en: 'Ukraine and the West see it differently. Ukraine is a sovereign state free to choose its alliances; in the 1994 Budapest Memorandum Russia itself pledged to respect Ukraine’s borders. The UN called on states not to recognise the annexation of Crimea, and in 2022 the General Assembly deplored the invasion by 141 votes to 5. Finland and Sweden, outside NATO for decades, applied to join soon after the invasion.'
      },
      ll: [28, 55],
      k: 2.2,
      layers: [],
      show: [],
      hl: { Ukraine: UA, Russia: RU, Finland: NORD, Sweden: NORD, Poland: NEW, Lithuania: NEW, Latvia: NEW, Estonia: NEW, Romania: NEW, Slovakia: NEW, Hungary: NEW },
      dim: true,
      src: [13, 14, 15, 16, 24]
    },
    {
      tag: 'outlook',
      title: { vi: 'Hai nỗi sợ trên một đồng bằng', en: 'Two fears on one plain' },
      text: {
        vi: 'Moscow đòi Ukraine trung lập, không vào NATO (ông Putin, 14/6/2024); Kyiv đòi giữ chủ quyền và được bảo đảm an ninh. Đến 8/11/2026 vẫn chưa có ngừng bắn toàn diện. Bản đồ không vẽ tiền tuyến vì nó đổi từng ngày. Gốc rễ vẫn là đồng bằng không có tường: bên này chỉ thấy an toàn khi có vùng đệm, bên kia thấy chính đòi hỏi ấy là mối đe dọa.',
        en: 'Moscow demands that Ukraine be neutral and stay out of NATO (Putin, 14 Jun 2024); Kyiv insists on its sovereignty and on security guarantees. As of 8 Nov 2026 there is still no general ceasefire. The map draws no front line, because it changes daily. The root is still the plain with no wall: one side feels safe only with a buffer, the other sees that very demand as the threat.'
      },
      ll: [32, 48.5],
      k: 2.6,
      layers: [],
      show: ['conf_ukraine'],
      hl: { Ukraine: UA, Russia: RU, Belarus: BY },
      dim: true,
      draw: [
        { k: 'pt', p: [30.52, 50.45], c: UA, r: 4.5, label: { vi: 'Kyiv', en: 'Kyiv' }, side: 'l' },
        { k: 'pt', p: [37.62, 55.75], c: RU, r: 4.5, label: { vi: 'Moscow', en: 'Moscow' } }
      ],
      src: [20, 21, 13]
    }
  ]
};
