// The argument of the Arctic story in one view (its first step), the tag of each following step, and a plain-language
// rewrite of each step's title, text and core (same order as the steps in story_arctic.js; facts and map are untouched).
// Source indexes point into the story's `sources` list in story_arctic.js. Every number and position here comes from
// that story and its sources; nothing new is added.
const RU = '#C53030', NATO = '#378ADD', ARC = '#2E8B8B', FLOW = '#D97706';

export const THESIS = {
  tags: ['need', 'move', 'blocked', 'blocked', 'counter', 'outlook', 'outlook'],

  titles: [
    { vi: 'Tám nước quanh một đại dương đang mất băng', en: 'Eight states around an ocean losing its ice' },
    { vi: 'Tuyến biển mới: ngắn hơn, nhưng còn vắng tàu', en: 'New sea lanes: shorter, but still quiet' },
    { vi: 'Từ Kola ra Đại Tây Dương phải qua hai khe', en: 'From Kola to the Atlantic, ships must pass two gaps' },
    { vi: 'Ra Thái Bình Dương chỉ có một cửa: Bering', en: 'To the Pacific there is only one door: the Bering Strait' },
    { vi: 'Greenland: ít người ở, nhưng nằm ngay giữa', en: 'Greenland: few people, right in the middle' },
    { vi: 'Tranh chấp đáy biển đi qua hồ sơ và luật', en: 'The seabed contest runs through filings and law' },
    { vi: 'Đến 8/11/2026: bảy trong tám nước Bắc Cực trong NATO', en: 'As of 8 Nov 2026: seven of eight Arctic states in NATO' }
  ],

  texts: [
    {
      vi: 'Bắc Băng Dương gần như bị đất bao kín. Có tám quốc gia Bắc Cực: Canada, Đan Mạch (qua Greenland), Phần Lan, Iceland, Na Uy, Nga, Thụy Điển và Mỹ (qua Alaska). Chỉ năm nước có bờ trên chính đại dương này: Canada, Đan Mạch, Na Uy, Nga và Mỹ. Ở giữa không có đất, chỉ có băng trôi, và băng đang lùi.',
      en: 'The Arctic Ocean is almost sealed in by land. There are eight Arctic states: Canada, Denmark (through Greenland), Finland, Iceland, Norway, Russia, Sweden and the United States (through Alaska). Only five have a coast on the ocean itself: Canada, Denmark, Norway, Russia and the US. In the middle there is no land, only floating ice, and the ice is shrinking.'
    },
    {
      vi: 'Khi băng mùa hè lùi, có hai lối tắt phía bắc: Tuyến biển phía Bắc (NSR) dọc bờ Siberia của Nga, và Hành lang Tây Bắc (NWP) luồn qua các đảo Bắc Cực của Canada. Trên bản đồ, cả hai đều ngắn hơn đường qua kênh Suez. Nhưng băng, nước nông và mùa mở cửa ngắn làm tàu qua ít hơn kỳ vọng. Phần lớn hàng trên NSR là hàng năng lượng của chính Nga.',
      en: 'As summer ice retreats, there are two northern shortcuts: the Northern Sea Route (NSR) along Russia’s Siberian coast, and the Northwest Passage (NWP) threading through Canada’s Arctic islands. On the map, both are shorter than the route through the Suez Canal. But ice, shallow water and a short open season keep traffic below expectations. Most cargo on the NSR is Russia’s own energy.'
    },
    {
      vi: 'Căn cứ tàu ngầm tên lửa của Hạm đội Phương Bắc Nga nằm trên bán đảo Kola, nhìn ra biển Barents. Nhờ dòng Bắc Đại Tây Dương, biển quanh Murmansk thường không đóng băng. Muốn ra Đại Tây Dương, tàu phải qua khe Gấu (giữa Svalbard, đảo Gấu và mũi Bắc của Na Uy), rồi khe GIUK (giữa Greenland, Iceland và Anh). NATO canh hai khe này từ thời Chiến tranh Lạnh.',
      en: 'The missile-submarine base of Russia’s Northern Fleet is on the Kola Peninsula, facing the Barents Sea. Thanks to the North Atlantic Drift, the sea around Murmansk generally stays ice-free. To reach the Atlantic, ships must pass the Bear Gap (between Svalbard, Bear Island and Norway’s North Cape), then the GIUK gap (between Greenland, Iceland and the UK). NATO has watched these two gaps since the Cold War.'
    },
    {
      vi: 'Eo Bering là cửa duy nhất nối Bắc Băng Dương với Thái Bình Dương, nằm giữa mũi Chukotka của Nga và Alaska của Mỹ. Giữa eo có hai đảo Diomede, một của Nga, một của Mỹ, cách nhau chỉ hơn hai dặm. Tàu nào đi NSR hay NWP xuống châu Á cũng phải qua đây. Vì thế cả Mỹ lẫn Nga đều có lợi ích ở dải nước hẹp, dễ quan sát này.',
      en: 'The Bering Strait is the only door between the Arctic Ocean and the Pacific, lying between Russia’s Chukotka tip and Alaska. In the middle are the two Diomede islands, one Russian and one American, just over two miles apart. Every ship going to Asia by the NSR or the NWP must pass here. So both the US and Russia have a stake in this narrow strip of water that is easy to watch.'
    },
    {
      vi: 'Greenland rộng khoảng 2,2 triệu km², phần lớn là chỏm băng, và chỉ khoảng 57.000 người sống dọc bờ biển. Từ 2009, đảo tự quản trong Vương quốc Đan Mạch: Nuuk lo nhiều việc, còn đối ngoại, quốc phòng và an ninh vẫn do Copenhagen nắm. Đảo nằm giữa Bắc Mỹ và châu Âu, cạnh khe GIUK. Ở tây bắc đảo có Pituffik, căn cứ không gian của Mỹ.',
      en: 'Greenland covers about 2.2 million km², mostly ice sheet, and only about 57,000 people live along its coast. Since 2009 the island has been self-governing within the Kingdom of Denmark: Nuuk runs many fields, while foreign, defence and security policy stay with Copenhagen. It lies between North America and Europe, beside the GIUK gap. In its northwest is Pituffik, a US space base.'
    },
    {
      vi: 'Đáy Bắc Băng Dương có thể có dầu khí. Nhưng theo USGS, các ước tính lớn nhất nằm ở các bồn như Tây Siberia và Arctic Alaska, không phải ở giữa đại dương. Ai được khai thác đáy biển ngoài 200 hải lý thì xét theo UNCLOS: nước ven biển nộp hồ sơ lên Ủy ban Ranh giới Thềm lục địa (CLCS), Ủy ban đưa khuyến nghị, rồi các nước tự phân định với nhau. Hồ sơ của Nga, Đan Mạch (cùng Greenland) và Canada chồng lấn nhau quanh sống núi ngầm Lomonosov.',
      en: 'The Arctic seabed may hold oil and gas. But according to USGS, the biggest estimates lie in basins such as West Siberia and Arctic Alaska, not in the middle of the ocean. Who may exploit the seabed beyond 200 nautical miles is judged under UNCLOS: coastal states file with the Commission on the Limits of the Continental Shelf (CLCS), the Commission makes recommendations, and the states then settle borders among themselves. The claims of Russia, Denmark (with Greenland) and Canada overlap around the Lomonosov Ridge.'
    },
    {
      vi: 'Đầu năm 2026, căng thẳng quanh Greenland tăng lên, rồi dịu đi sau khi ông Trump nói ở Davos ngày 21/1 rằng ông sẽ không dùng vũ lực. Ngày 22/9, Mỹ, Đan Mạch và Greenland ký một thỏa thuận an ninh; đến đầu tháng 11, thỏa thuận còn chờ phê chuẩn. NATO cũng đã đổi bản đồ Bắc Cực: Phần Lan (2023) và Thụy Điển (2024) gia nhập, và NATO gom các cuộc tập trận dưới tên Arctic Sentry. Nga và Trung Quốc cũng hoạt động ở Bắc Cực.',
      en: 'Early in 2026 tension over Greenland rose, then eased after Mr Trump said at Davos on 21 Jan that he would not use force. On 22 Sep the US, Denmark and Greenland signed a security agreement; in early November it still awaited ratification. NATO has also changed the Arctic map: Finland (2023) and Sweden (2024) have joined, and NATO has brought exercises together under the name Arctic Sentry. Russia and China are also active in the Arctic.'
    }
  ],

  cores: [
    {
      vi: 'Theo IISS (4/2022), băng tan quan trọng với Nga trực tiếp hơn bất kỳ ai, và kéo trọng tâm hàng hải lên phía bắc. Năm nước ven biển nói trong Tuyên bố Ilulissat (2008) rằng họ dựa vào luật biển hiện hành, không cần một chế độ pháp lý mới. Met Office thì cho rằng băng mùa hè gần như ngừng giảm từ 2007, nên Bắc Cực mở ra chậm và không đều.',
      en: 'According to IISS (Apr 2022), melting ice matters more directly to Russia than to anyone else, and pulls the maritime centre of gravity north. The five coastal states said in the Ilulissat Declaration (2008) that they rely on the existing law of the sea and need no new legal regime. The Met Office, for its part, says summer ice has barely declined since 2007, so the Arctic is opening slowly and unevenly.'
    },
    {
      vi: 'IISS (4/2022) cho rằng Nga muốn mở Bắc Cực cho tàu và vốn quốc tế, nhưng cũng lo lộ ra điểm yếu mới và NATO hiện diện nhiều hơn. Canada nói Hành lang Tây Bắc là nội thủy của mình; Mỹ nói đó là eo biển quốc tế (Rigby và Herman, 2026). Trung Quốc, trong sách trắng 2018, tự gọi là “quốc gia cận Bắc Cực”, nói tôn trọng quyền chủ quyền của các nước Bắc Cực và muốn cùng xây “Con đường tơ lụa vùng cực”.',
      en: 'IISS (Apr 2022) argues Russia wants the Arctic open to international shipping and investment, but also fears new vulnerabilities and a bigger NATO presence. Canada says the Northwest Passage is its internal waters; the US says it is an international strait (Rigby and Herman, 2026). China, in its 2018 white paper, calls itself a “Near-Arctic State”, says it respects the sovereign rights of Arctic states and wants to help build a “Polar Silk Road”.'
    },
    {
      vi: 'Chatham House (6/2019) cho rằng Nga củng cố Bắc Cực chủ yếu để bảo vệ Kola, giữ cho lực lượng hạt nhân đánh trả còn nguyên, trong một “pháo đài” kéo từ Kola tới khe GIUK. IISS (4/2022) dẫn nhiều phân tích rằng khi có chiến tranh, Hạm đội Phương Bắc sẽ chủ yếu ở lại “pháo đài” và Moscow khó đóng được khe GIUK, nên tuyến đầu có thể dịch lên khe Gấu. Ông Putin (27/3/2025) thì nói NATO ngày càng coi cực bắc là bàn đạp cho xung đột, và Nga sẽ tăng năng lực.',
      en: 'Chatham House (Jun 2019) argues Russia’s Arctic build-up mainly aims to protect Kola so its second-strike nuclear forces survive, in a “bastion” reaching from Kola to the GIUK gap. IISS (Apr 2022) reports analysis that in wartime the Northern Fleet would largely stay in its bastion and Moscow would struggle to close the GIUK gap, so the front line could shift north to the Bear Gap. Mr Putin (27 Mar 2025) said NATO increasingly treats the far north as a springboard for conflict, and Russia will boost its capabilities.'
    },
    {
      vi: 'Phía Mỹ, Chuẩn đô đốc Bob Little (Cảnh sát biển Mỹ, 21/9/2026) nói ông lo khi tàu nước khác hoạt động “trong và quanh không gian chủ quyền của Mỹ”; Moscow phủ nhận tàu mình làm điều bất hợp pháp.',
      en: 'On the US side, Rear Adm Bob Little (US Coast Guard, 21 Sep 2026) said his concern is when other states’ ships operate “in and around US sovereign space”; Moscow denies its vessels do anything illegal.'
    },
    {
      vi: 'Phía Mỹ, ông Trump nói ngày 5/1/2026 rằng Mỹ “cần Greenland từ góc độ an ninh quốc gia” (CSIS dẫn); CSIS (1/2026) viết rằng vị trí của đảo trên tuyến NWP khiến nó quan trọng với Mỹ, Trung Quốc và bất kỳ cường quốc nào muốn đi qua tuyến này. Copenhagen và Nuuk nói thỏa thuận với Mỹ không nhượng chủ quyền; Thủ tướng Nielsen nói thỏa thuận “công nhận chủ quyền và toàn vẹn lãnh thổ của Vương quốc” (Reuters, 19/9/2026). Theo Al Jazeera (3/11/2026), các cuộc thăm dò cho thấy đa số người Greenland bác bỏ việc Mỹ kiểm soát đảo.',
      en: 'On the US side, Mr Trump said on 5 Jan 2026 that the US needs Greenland “from the standpoint of national security” (quoted by CSIS); CSIS (Jan 2026) writes that the island’s place along the NWP makes it important to the US, China and any other power wanting access to the route. Copenhagen and Nuuk say the deal with the US does not cede sovereignty; Prime Minister Nielsen said it “recognizes the sovereignty and territorial integrity of our Kingdom” (Reuters, 19 Sep 2026). According to Al Jazeera (3 Nov 2026), opinion polls show most Greenlanders reject US control of the island.'
    },
    {
      vi: 'Chỉ nhìn bảng của USGS, các bồn ở giữa Bắc Băng Dương (Eurasia, Lomonosov–Makarov) nhỏ hơn nhiều so với bồn Tây Siberia; đó là một cách đọc, không phải kết luận của USGS. Các nước coi chuyện đáy biển là quy trình pháp lý, không phải xung đột: Đan Mạch và Nga thỏa thuận ngày 27/3/2014 để CLCS xem xét hồ sơ của Nga, và CLCS nói khuyến nghị của mình không phương hại tới việc phân định giữa các nước (CLCS, 2/2023). Ý kiến ngược lại: Mỹ chưa phê chuẩn UNCLOS (Rigby và Herman, 2026), và CLCS không giải quyết chồng lấn, nên tranh chấp có thể kéo dài.',
      en: 'USGS’s table alone shows the basins in the middle of the Arctic Ocean (Eurasia, Lomonosov–Makarov) are much smaller than the West Siberian Basin; that is a reading, not a USGS conclusion. The states treat the seabed as a legal process, not a conflict: Denmark and Russia agreed on 27 Mar 2014 that the CLCS may consider Russia’s submission, and the CLCS says its recommendations do not prejudice delimitation between states (CLCS, Feb 2023). The counter-view: the US has not ratified UNCLOS (Rigby and Herman, 2026), and the CLCS does not settle overlaps, so disputes may last.'
    },
    {
      vi: 'Bảy trong tám quốc gia Bắc Cực nay là thành viên NATO; chỉ còn Nga ở ngoài. Theo các phát biểu: Washington coi Greenland là vấn đề an ninh và muốn Nga, Trung Quốc ở ngoài đảo; Copenhagen và Nuuk coi thỏa thuận là bảo đảm an ninh, không phải nhượng chủ quyền; Moscow coi NATO ở cực bắc là mối đe dọa (ông Putin, 3/2025); Bắc Kinh nói tôn trọng quyền chủ quyền của các nước Bắc Cực và muốn tham gia quản trị khu vực (sách trắng 2018). Mỗi bên đều cho rằng mình đang phòng thủ.',
      en: 'Seven of the eight Arctic states are now NATO members; only Russia is outside. According to their statements: Washington treats Greenland as a security matter and wants Russia and China kept out of the island; Copenhagen and Nuuk see the deal as a security guarantee, not a surrender of sovereignty; Moscow sees NATO in the far north as a threat (Mr Putin, Mar 2025); Beijing says it respects Arctic states’ sovereign rights and wants a part in Arctic governance (2018 white paper). Each side presents itself as defending.'
    }
  ],

  step: {
    title: {
      vi: 'Vì sao một đại dương phủ băng lại thành nơi các cường quốc canh chừng nhau?',
      en: 'Why has an ice-covered ocean become a place where great powers watch each other?'
    },
    text: {
      vi: 'Nhìn từ trên xuống Cực Bắc: một đại dương nhỏ, gần như bị đất bao quanh, ở giữa là băng đang lùi. Thử đứng ở bán đảo Kola của Nga mà nhìn ra biển. Năm ý dưới đây là cách các nhà phân tích địa chính trị (như IISS, Chatham House, Tim Marshall) giải thích; các bước sau đưa dữ kiện cho từng ý.',
      en: 'Look down on the North Pole: a small ocean, almost ringed by land, with shrinking ice in the middle. Stand on Russia’s Kola Peninsula and look out to sea. The five points below are how geopolitical analysts (such as IISS, Chatham House and Tim Marshall) explain it; the next steps give the facts for each point.'
    },
    chain: [
      {
        tag: 'need',
        head: { vi: 'Nga cần lối ra biển từ phía bắc.', en: 'Russia needs a way out to sea from the north.' },
        text: {
          vi: 'Tàu ngầm tên lửa của Nga đóng ở bán đảo Kola, nơi biển thường không đóng băng. Theo Chatham House (2019), Hạm đội Phương Bắc ở đây nắm khoảng hai phần ba sức tấn công hạt nhân của hải quân Nga. Theo IISS, băng tan quan trọng với Nga trực tiếp hơn bất kỳ ai.',
          en: 'Russia’s missile submarines are based on the Kola Peninsula, where the sea generally stays ice-free. According to Chatham House (2019), the Northern Fleet there holds about two-thirds of the Russian navy’s nuclear strike capability. According to IISS, melting ice matters more directly to Russia than to anyone else.'
        }
      },
      {
        tag: 'blocked',
        head: { vi: 'Nhưng lối ra nào cũng phải qua khe hẹp.', en: 'But every way out runs through a narrow gap.' },
        text: {
          vi: 'Đi về Đại Tây Dương, tàu từ Kola phải qua khe Gấu cạnh Na Uy, rồi khe GIUK giữa Greenland, Iceland và Anh. Đi về Thái Bình Dương chỉ có eo Bering, giữa Nga và Alaska của Mỹ. NATO canh các khe phía Đại Tây Dương từ thời Chiến tranh Lạnh.',
          en: 'Heading for the Atlantic, ships from Kola must pass the Bear Gap off Norway, then the GIUK gap between Greenland, Iceland and the UK. Heading for the Pacific, there is only the Bering Strait, between Russia and Alaska. NATO has watched the Atlantic gaps since the Cold War.'
        }
      },
      {
        tag: 'move',
        head: { vi: 'Vì thế Nga giữ Kola như một “pháo đài”.', en: 'So Russia guards Kola as a “bastion”.' },
        text: {
          vi: 'Theo Chatham House, Nga củng cố Bắc Cực chủ yếu để bảo vệ Kola, trong một vùng “pháo đài” kéo tới khe GIUK. Theo IISS, Nga cũng muốn mở tuyến biển dọc bờ Siberia cho tàu quốc tế. Ông Putin thì nói NATO ngày càng coi cực bắc là bàn đạp cho xung đột.',
          en: 'According to Chatham House, Russia’s Arctic build-up mainly aims to protect Kola, in a “bastion” reaching to the GIUK gap. According to IISS, Russia also wants the sea route along the Siberian coast open to international shipping. Mr Putin said NATO increasingly treats the far north as a springboard for conflict.'
        }
      },
      {
        tag: 'counter',
        head: { vi: 'Nhưng bên kia các khe là NATO, và Greenland nằm giữa.', en: 'But NATO sits on the other side of the gaps, with Greenland in the middle.' },
        text: {
          vi: 'Nay bảy trong tám nước Bắc Cực là thành viên NATO; chỉ Nga ở ngoài. Greenland nằm giữa Bắc Mỹ và châu Âu, cạnh khe GIUK, và có căn cứ Pituffik của Mỹ. Ông Trump nói Mỹ “cần Greenland” vì an ninh quốc gia; Copenhagen và Nuuk nói thỏa thuận an ninh mới không nhượng chủ quyền.',
          en: 'Seven of the eight Arctic states are now NATO members; only Russia is outside. Greenland lies between North America and Europe, beside the GIUK gap, and hosts the US base at Pituffik. Mr Trump said the US “needs Greenland” for national security; Copenhagen and Nuuk say the new security deal does not cede sovereignty.'
        }
      },
      {
        tag: 'outlook',
        head: { vi: 'Lối tắt còn vắng, nhưng bản đồ an ninh đã đổi.', en: 'The shortcuts are still quiet, but the security map has changed.' },
        text: {
          vi: 'Tuyến biển mới vẫn ít tàu hơn kỳ vọng, và theo USGS, dầu khí ước tính nhiều nhất không nằm ở giữa đại dương. Nhưng Moscow coi NATO ở cực bắc là mối đe dọa, còn Washington nói cần Greenland vì an ninh. Mỗi bên đều cho rằng mình đang phòng thủ.',
          en: 'The new sea lanes still see fewer ships than expected, and according to USGS the largest oil and gas estimates are not in the middle of the ocean. But Moscow sees NATO in the far north as a threat, while Washington says it needs Greenland for security. Each side presents itself as defending.'
        }
      }
    ],
    ll: [-20, 78],
    k: 2,
    layers: [],
    show: ['arcticice', 'beargap', 'giuk', 'base_murmansk', 'bering', 'base_pituffik'],
    hl: {
      Russia: RU,
      Greenland: ARC,
      Norway: NATO, Iceland: NATO, 'United Kingdom': NATO, Denmark: NATO, Canada: NATO,
      'United States of America': NATO, Finland: NATO, Sweden: NATO
    },
    dim: true,
    draw: [
      { k: 'line', pts: [[33.4, 69.8], [26, 72.4], [22, 72.97], [10, 71], [-5, 67.5], [-15, 64], [-28, 58]], c: FLOW, w: 2.6, flow: true, arrow: true, label: { vi: 'lối ra Đại Tây Dương (minh họa)', en: 'way out to the Atlantic (illustrative)' }, lp: [-4, 68.8], dy: -10 },
      { k: 'pt', p: [33.4, 69.1], c: RU, r: 4, label: { vi: 'Kola', en: 'Kola' }, dy: 10 },
      { k: 'pt', p: [0, 90], c: '#111827', r: 3, label: { vi: 'Cực Bắc', en: 'North Pole' }, dy: -9 }
    ],
    key: [
      { c: RU, vi: 'Nga', en: 'Russia' },
      { c: NATO, vi: 'Thành viên NATO', en: 'NATO members' },
      { c: ARC, vi: 'Greenland (thuộc Vương quốc Đan Mạch, thành viên NATO)', en: 'Greenland (part of the Kingdom of Denmark, a NATO member)' },
      { c: FLOW, vi: 'Lối ra Đại Tây Dương của tàu Nga qua khe Gấu và khe GIUK (minh họa, theo lập luận của các nhà phân tích)', en: 'Russian ships’ way out to the Atlantic via the Bear Gap and the GIUK gap (illustrative, analysts’ argument)' }
    ],
    src: [16, 15, 41, 14, 34, 4, 21, 24, 32, 33, 8, 7, 0, 6, 42]
  }
};
