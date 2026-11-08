// The argument of the India-Pakistan story in one view (its first step), the tag of each following step, and the plain-
// language rewrite of each step's title, text and core (same order as the story's own steps; facts, sources and map
// settings stay in story_indopak.js). Source indexes point into the story's `sources` list.
// As in the story, nothing here draws a border, a Line of Control or a disputed area, and no country is tinted (the engine
// would tint whole countries, disputed parts included). Rivers and two cities are drawn as approximate, illustrative shapes.
const RW = '#2E7CC0', RE = '#E8903A', GREY = '#6B7280', BROWN = '#8A5A00';

export const THESIS = {
  tags: ['move', 'need', 'move', 'blocked', 'counter', 'outlook'],
  titles: [
    { vi: 'Núi chắn phía bắc, chỉ chừa vài con đèo', en: 'Mountains wall off the north, leaving a few passes' },
    { vi: 'Sáu con sông, chia đôi bằng hiệp ước 1960', en: 'Six rivers, split by a 1960 treaty' },
    { vi: 'Kashmir: vùng cao thượng nguồn, đang tranh chấp', en: 'Kashmir: disputed high ground upstream' },
    { vi: 'Đồng bằng phẳng bị cắt đôi năm 1947', en: 'A flat plain, cut in two in 1947' },
    { vi: 'Cùng nhìn ra biển, mỗi bên một bến cảng', en: 'Facing the same sea, each with its own ports' },
    { vi: 'Đến 8/11/2026: còn ngừng bắn, đối thoại đóng băng', en: 'As of 8 Nov 2026: a ceasefire, with talks frozen' }
  ],
  texts: [
    {
      vi: 'Phía bắc là hai dãy núi khổng lồ: Himalaya, dài khoảng 2.400 km, và Karakoram, nơi có K2, đỉnh cao thứ hai thế giới. Cùng cao nguyên Tây Tạng phía sau, chúng là bức tường tự nhiên giữa Nam Á với Trung Á và Trung Quốc. Người và quân đội chủ yếu qua lại ở vài con đèo, như Khyber ở phía tây và Khunjerab trên đường cao tốc Karakoram. Phía nam núi là đồng bằng Ấn–Hằng và sa mạc Thar, đi lại dễ hơn nhiều.',
      en: 'To the north stand two giant ranges: the Himalaya, about 2,400 km long, and the Karakoram, home of K2, the second-highest peak on Earth. With the Tibetan plateau behind them, they form a natural wall between South Asia and Central Asia and China. People and armies cross mainly at a few passes, such as the Khyber in the west and the Khunjerab on the Karakoram Highway. South of the mountains lie the Indo-Gangetic plain and the Thar desert, where moving is far easier.'
    },
    {
      vi: 'Sông Ấn dài khoảng 3.180 km. Sông bắt nguồn từ Tây Tạng, chảy qua vùng núi Ladakh và Gilgit-Baltistan, rồi xuống đồng bằng Pakistan và ra biển Ả Rập gần Thatta. Hai nhánh Jhelum và Chenab chảy qua vùng do Ấn Độ quản lý rồi mới vào Pakistan. Hiệp ước ký ở Karachi ngày 19/9/1960 chia sáu sông: ba sông phía đông (Ravi, Beas, Sutlej) cho Ấn Độ dùng không hạn chế; ba sông phía tây (Ấn, Jhelum, Chenab) dành cho Pakistan, Ấn Độ chỉ được dùng có giới hạn.',
      en: 'The Indus is about 3,180 km long. It rises in Tibet, runs through the mountains of Ladakh and Gilgit-Baltistan, then crosses Pakistan’s plains to the Arabian Sea near Thatta. Its tributaries the Jhelum and the Chenab pass through areas India administers before entering Pakistan. The treaty signed in Karachi on 19 Sep 1960 divides six rivers: the three eastern ones (Ravi, Beas, Sutlej) for India’s unrestricted use; the three western ones (Indus, Jhelum, Chenab) for Pakistan, with India allowed only limited uses.'
    },
    {
      vi: 'Ở vùng núi cực bắc, vùng ảnh hưởng của Ấn Độ, Pakistan và Trung Quốc gặp nhau. Kashmir là vùng tranh chấp, mỗi bên có lập trường riêng, nên bản đồ không vẽ đường biên nào ở đây, chỉ đánh dấu núi, đèo và sông băng. Hành lang Wakhan của Afghanistan là một dải đất hẹp, ngăn Tajikistan với Pakistan và chạm tới Trung Quốc. Trung Quốc và Pakistan cùng làm đường cao tốc Karakoram qua đèo Khunjerab.',
      en: 'In the far northern mountains the spheres of India, Pakistan and China meet. Kashmir is a disputed region where each party holds its own position, so this map draws no border here, only mountains, passes and a glacier. Afghanistan’s Wakhan Corridor is a narrow strip that separates Tajikistan from Pakistan and touches China. China and Pakistan built the Karakoram Highway together over the Khunjerab Pass.'
    },
    {
      vi: 'Xuống phía nam núi, sông Ấn và các nhánh nuôi một đồng bằng phẳng, đông người. Năm 1947, đường Radcliffe cắt đôi Punjab: Lahore ở phía Pakistan, Amritsar ở phía Ấn Độ. Giữa hai thành phố là cửa khẩu Attari–Wagah, trên con đường Grand Trunk cổ. Từ tháng 4/2025, cả hai nước đều đóng cửa khẩu này.',
      en: 'South of the mountains, the Indus and its tributaries feed a flat, crowded plain. In 1947 the Radcliffe Line cut the Punjab in two: Lahore on the Pakistani side, Amritsar on the Indian side. Between the two cities is the Attari–Wagah crossing, on the old Grand Trunk Road. Since April 2025 both countries have closed this crossing.'
    },
    {
      vi: 'Cả hai nước nhìn ra biển Ả Rập. Pakistan có Karachi và Gwadar; Gwadar là điểm cuối phía nam của hành lang CPEC từ Kashgar (đường trên bản đồ chỉ là minh hoạ). Ấn Độ có Mumbai ở bờ tây và đã đầu tư vào cảng Chabahar của Iran, cách Gwadar khoảng 140 km về phía tây. Dầu vùng Vịnh đi qua eo Hormuz, băng qua Ấn Độ Dương rồi tới châu Á.',
      en: 'Both countries face the Arabian Sea. Pakistan has Karachi and Gwadar; Gwadar is the southern end of the CPEC corridor from Kashgar (the line on the map is only illustrative). India has Mumbai on its west coast and has invested in Iran’s Chabahar port, about 140 km west of Gwadar. Gulf oil passes the Strait of Hormuz, then crosses the Indian Ocean to Asia.'
    },
    {
      vi: 'Sau vụ tấn công gần Pahalgam ngày 22/4/2025 và các cuộc đụng độ 7–10/5/2025, hai nước ngừng bắn từ 10/5/2025. Ngừng bắn được báo cáo là vẫn giữ, nhưng đối thoại chính thức đóng băng và hai nước vẫn cấm máy bay của nhau. Ngày 31/8/2026, Toà Trọng tài ở The Hague phán hiệp ước nước vẫn hoàn toàn có hiệu lực. Ấn Độ bác bỏ phán quyết, Pakistan hoan nghênh.',
      en: 'After the attack near Pahalgam on 22 Apr 2025 and the clashes of 7–10 May 2025, the two countries have had a ceasefire since 10 May 2025. It is reported to be holding, but official dialogue is frozen and each side still bars the other’s aircraft. On 31 Aug 2026 the Court of Arbitration in The Hague ruled that the water treaty remains fully in force. India rejected the award; Pakistan welcomed it.'
    }
  ],
  cores: [
    {
      vi: 'Tim Marshall (Prisoners of Geography, 2015) cho rằng núi cao khiến phía bắc khó vượt, nên cuộc tranh giành dồn vào vài con đèo, vài vùng cao và đồng bằng, nơi quân đội đi lại được. SIPRI nhận xét kế hoạch hạt nhân của Ấn Độ ngày càng chú ý tới các hệ thống tầm xa nhằm vào Trung Quốc, nhưng vẫn chịu ảnh hưởng nặng của cuộc đối đầu với Pakistan. Đây là cách diễn giải, không phải sự thật đã được thừa nhận.',
      en: 'Tim Marshall (Prisoners of Geography, 2015) argues that high mountains make the north hard to cross, so the contest narrows to a few passes, some high ground and the plain where armies can move. SIPRI observes that India’s nuclear planning increasingly stresses longer-range systems aimed at China, yet remains heavily influenced by its rivalry with Pakistan. This is an interpretation, not a settled fact.'
    },
    {
      vi: 'Theo Pakistan, nước là sống còn: mọi nỗ lực chặn hay chuyển dòng nước sẽ bị coi là “hành động chiến tranh” (Ủy ban An ninh Quốc gia, 24/4/2025). Theo Ấn Độ, hiệp ước được “tạm hoãn” cho đến khi Pakistan “đáng tin cậy và không thể đảo ngược” từ bỏ ủng hộ khủng bố xuyên biên giới (Bộ Ngoại giao Ấn Độ, 23/4/2025); Pakistan phủ nhận hỗ trợ khủng bố. Tim Marshall nhận xét hai nước đã giữ hiệp ước qua các cuộc chiến; theo cách đọc địa lý này, bên thượng nguồn nắm đòn bẩy, còn bên hạ nguồn khó tìm nguồn nước thay thế.',
      en: 'According to Pakistan, water is vital: any attempt to stop or divert it would be treated as an “act of war” (National Security Committee, 24 Apr 2025). According to India, the treaty is “held in abeyance” until Pakistan “credibly and irrevocably” abjures support for cross-border terrorism (Indian MEA, 23 Apr 2025); Pakistan denies supporting terrorism. Tim Marshall notes that both countries have honoured the treaty through their wars; in this geographic reading, the upstream party holds the leverage and the downstream party has no easy substitute for the water.'
    },
    {
      vi: 'Tim Marshall lập luận: nếu Ấn Độ kiểm soát toàn bộ Kashmir, Ấn Độ có “một cửa sổ nhìn ra Trung Á” và đường biên với Afghanistan, còn Pakistan mất đường biên với Trung Quốc; nếu Pakistan kiểm soát, nguồn nước của Pakistan được bảo đảm hơn. Theo Pakistan, trong những điều Ấn Độ phải thay đổi có việc “không tuân thủ các nghị quyết của LHQ về Kashmir” (Ủy ban An ninh Quốc gia, 24/4/2025); Ấn Độ bác bỏ trung gian của bên thứ ba và nói ngừng bắn 5/2025 là kết quả đàm phán song phương (Al Jazeera, 29/5/2026). Đây là lập trường và diễn giải, không phải kết luận về ai có quyền với vùng đất.',
      en: 'Tim Marshall argues that if India held all of Kashmir it would gain “a window into Central Asia” and a border with Afghanistan, while Pakistan would lose its border with China; if Pakistan held it, Pakistan’s water would be more secure. According to Pakistan, among the conduct India must change is “non-adherence to UN resolutions on Kashmir” (National Security Committee, 24 Apr 2025); India rejects third-party mediation and says the May 2025 ceasefire came from bilateral talks (Al Jazeera, 29 May 2026). These are positions and interpretations, not a conclusion about who is entitled to the land.'
    },
    {
      vi: 'Tim Marshall cho rằng Pakistan thiếu “chiều sâu chiến lược”, tức không có chỗ để lùi nếu bị tràn từ phía đông qua đồng bằng Punjab phẳng; theo cách đọc này, Pakistan khó đổi đất lấy thời gian nên dựa nhiều vào răn đe hạt nhân. Theo Ấn Độ, mối đe doạ thật là khủng bố xuyên biên giới; Pakistan phủ nhận có vai trò trong vụ Pahalgam. Đây là diễn giải của giới phân tích, không phải thừa nhận của chính phủ nào.',
      en: 'Tim Marshall argues that Pakistan lacks “strategic depth”, meaning room to fall back if overrun from the east across the flat Punjab; in this reading Pakistan cannot trade space for time and so leans heavily on nuclear deterrence. According to India, the real threat is cross-border terrorism; Pakistan denies any role in the Pahalgam attack. This is an analysts’ interpretation, not an admission by either government.'
    },
    {
      vi: 'Theo nhà phân tích Kabir Taneja (ORF, Al Jazeera dẫn), Chabahar quan trọng cho đường nối của Ấn Độ tới Trung Á; Al Jazeera ghi thêm rằng căng thẳng với Pakistan khiến Ấn Độ không có đường bộ qua Pakistan tới Afghanistan và Trung Á. Phần lớn dầu qua Hormuz đi sang châu Á (EIA), nên theo cách đọc này đường biển là mối lo chiến lược của Ấn Độ. Về phía Pakistan, Tập Cận Bình ca ngợi quan hệ “không thể phá vỡ” khi Thủ tướng Sharif thăm Bắc Kinh cuối tháng 5/2026 (Al Jazeera).',
      en: 'According to analyst Kabir Taneja (Observer Research Foundation, quoted by Al Jazeera), Chabahar matters for India’s connectivity to Central Asia; Al Jazeera adds that tensions with Pakistan rule out a land route through Pakistan to Afghanistan and Central Asia. Most Hormuz crude goes to Asia (EIA), so in this reading the sea lanes are a strategic worry for India. On Pakistan’s side, Xi Jinping praised “unbreakable” ties when Prime Minister Sharif visited Beijing in late May 2026 (Al Jazeera).'
    },
    {
      vi: 'Theo cách đọc của giới phân tích, địa lý không đổi nên không bên nào có lối thoát dễ. Theo Ấn Độ, hiệp ước tạm hoãn đến khi khủng bố xuyên biên giới chấm dứt (Bộ Ngoại giao Ấn Độ); theo Pakistan, chặn nước là hành động chiến tranh (Ủy ban An ninh Quốc gia), và Pakistan phủ nhận hỗ trợ khủng bố. SIPRI ghi nhận hai bên chủ ý giữ xung đột 5/2025 ở mức quy ước, nhưng nguy cơ leo thang nhanh, bất ngờ lên mức hạt nhân vẫn là “mối lo dai dẳng và nghiêm trọng”.',
      en: 'In analysts’ reading, geography does not change, so neither side has an easy way out. According to India, the treaty stays in abeyance until cross-border terrorism ends (Indian MEA); according to Pakistan, blocking the water is an act of war (National Security Committee), and Pakistan denies supporting terrorism. SIPRI notes both sides deliberately kept the May 2025 conflict conventional, yet the risk of rapid, unexpected escalation to the nuclear level remains “a lingering and serious concern”.'
    }
  ],
  step: {
    title: {
      vi: 'Vì sao hai nước chung một đồng bằng lại thành hai đối thủ có vũ khí hạt nhân?',
      en: 'Why did two countries sharing one plain become nuclear-armed rivals?'
    },
    text: {
      vi: 'Ấn Độ và Pakistan chung một đồng bằng và những dòng sông, nhưng hai nước đã qua các cuộc chiến và nay cả hai có vũ khí hạt nhân. Thử đứng ở Lahore, rồi ở Delhi, mà nhìn lên núi và nhìn theo dòng sông. Năm ý dưới đây là cách các nhà phân tích địa chính trị (như Tim Marshall) giải thích; các bước sau đưa dữ kiện cho từng ý.',
      en: 'India and Pakistan share one plain and its rivers, yet the two countries have fought wars and today both hold nuclear weapons. Stand in Lahore, then in Delhi, and look up at the mountains and along the rivers. The five points below are how geopolitical analysts (such as Tim Marshall) explain it; the next steps give the facts for each point.'
    },
    chain: [
      {
        tag: 'need',
        head: { vi: 'Hai nước sống nhờ cùng một đồng bằng, cùng một hệ thống sông.', en: 'Both countries live off one plain and one river system.' },
        text: {
          vi: 'Sông Ấn và các nhánh từ núi chảy xuống, nuôi đồng bằng Punjab phẳng và đông người. Ở cả hai nước, phần lớn nước ngọt được dùng cho nông nghiệp. Theo Tim Marshall, sông Ấn cấp khoảng hai phần ba lượng nước của Pakistan.',
          en: 'The Indus and its tributaries come down from the mountains and feed the flat, crowded Punjab plain. In both countries, most of the fresh water drawn goes to farming. Tim Marshall notes that the Indus supplies about two-thirds of Pakistan’s water.'
        }
      },
      {
        tag: 'blocked',
        head: { vi: 'Nhưng năm 1947 một đường biên cắt ngang đồng bằng, để Pakistan ở cuối dòng.', en: 'But in 1947 a border cut across the plain, leaving Pakistan downstream.' },
        text: {
          vi: 'Đường Radcliffe chia đôi Punjab: Lahore ở phía Pakistan, Amritsar ở phía Ấn Độ. Ba sông phía tây mà hiệp ước dành cho Pakistan đều chảy qua vùng núi do Ấn Độ quản lý hoặc đang tranh chấp rồi mới xuống đồng bằng. Phía đông lại là đất phẳng, nên theo Tim Marshall Pakistan gần như không có chỗ để lùi.',
          en: 'The Radcliffe Line split the Punjab: Lahore on the Pakistani side, Amritsar on the Indian side. All three western rivers the treaty reserves for Pakistan run through mountains that India administers or that are in dispute before they reach the plain. To the east the land is flat, so in Tim Marshall’s view Pakistan has almost no room to fall back.'
        }
      },
      {
        tag: 'move',
        head: { vi: 'Vì thế vùng núi thượng nguồn thành chuyện an ninh.', en: 'So the high ground upstream becomes a security matter.' },
        text: {
          vi: 'Những dòng sông ấy chảy qua Kashmir, vùng núi cao mà mỗi bên giữ lập trường riêng. Tim Marshall lập luận: nếu Ấn Độ kiểm soát toàn bộ Kashmir, Ấn Độ có “một cửa sổ nhìn ra Trung Á”; nếu Pakistan kiểm soát, nguồn nước của Pakistan được bảo đảm hơn. Phía trên nữa, vài con đèo như Khunjerab là lối qua núi hiếm hoi.',
          en: 'Those rivers run through Kashmir, high mountains where each side holds its own position. Tim Marshall argues that if India held all of Kashmir it would gain “a window into Central Asia”, and that if Pakistan held it, Pakistan’s water would be more secure. Higher still, a few passes such as the Khunjerab are rare ways across the mountains.'
        }
      },
      {
        tag: 'counter',
        head: { vi: 'Nhưng Ấn Độ nhìn thấy những mối đe doạ khác.', en: 'But India sees other threats.' },
        text: {
          vi: 'Theo Ấn Độ, mối đe doạ thật là khủng bố xuyên biên giới; Pakistan phủ nhận có vai trò. Sau dãy Himalaya là Trung Quốc, nước có tranh chấp biên giới riêng với Ấn Độ. Phía nam là biển, con đường dầu vùng Vịnh đi để tới Ấn Độ.',
          en: 'According to India, the real threat is cross-border terrorism; Pakistan denies any role. Behind the Himalaya lies China, which has its own boundary dispute with India. To the south is the sea, the route Gulf oil takes to reach India.'
        }
      },
      {
        tag: 'outlook',
        head: { vi: 'Địa lý không đổi, và cả hai đều có vũ khí hạt nhân.', en: 'Geography does not change, and both hold nuclear weapons.' },
        text: {
          vi: 'Sông vẫn chảy từ núi xuống, đồng bằng vẫn phẳng. Pakistan nói chặn nước là hành động chiến tranh; Ấn Độ nói hiệp ước vẫn tạm hoãn. Cả hai có vũ khí hạt nhân, nên cuộc đối đầu khó kết thúc bằng sức mạnh, nhưng cũng khó tự tan.',
          en: 'The rivers still run down from the mountains, and the plain is still flat. Pakistan says blocking the water is an act of war; India says the treaty remains in abeyance. Both hold nuclear weapons, so the rivalry is hard to end by force, but also hard to dissolve on its own.'
        }
      }
    ],
    ll: [74.3, 30.6],
    k: 6.5,
    layers: [],
    show: ['indus', 'himalaya', 'karakoram', 'gangeticplain', 'thar'],
    hl: {},
    dim: true,
    draw: [
      { k: 'line', pts: [[75.25, 33.53], [74.8, 34.08], [74.55, 34.35], [73.47, 34.37], [73.64, 33.15], [73.73, 32.93], [72.15, 31.15]], c: RW, w: 2.2, label: { vi: 'Jhelum', en: 'Jhelum' }, lp: [73.3, 33.5], dy: -4 },
      { k: 'line', pts: [[77.0, 32.57], [75.8, 33.3], [74.75, 32.9], [74.46, 32.67], [72.15, 31.15], [71.0, 29.35], [70.37, 28.95]], c: RW, w: 2.2, label: { vi: 'Chenab', en: 'Chenab' }, lp: [73.6, 32.2], dy: -4 },
      { k: 'line', pts: [[76.3, 32.6], [75.6, 32.35], [75.0, 32.1], [74.3, 31.6], [73.0, 31.0], [71.85, 30.75]], c: RE, w: 2.2, label: { vi: 'Ravi', en: 'Ravi' }, lp: [73.9, 31.55], dy: 8 },
      { k: 'line', pts: [[77.2, 32.4], [76.9, 31.7], [75.95, 32.0], [74.95, 31.15]], c: RE, w: 2.2 },
      { k: 'line', pts: [[81.5, 30.8], [78.7, 31.8], [76.5, 31.4], [74.95, 31.15], [74.6, 30.95], [73.9, 30.45], [71.7, 29.4], [71.0, 29.35]], c: RE, w: 2.2, label: { vi: 'Sutlej', en: 'Sutlej' }, lp: [72.6, 29.85], dy: 8 },
      { k: 'pt', p: [74.34, 31.55], c: GREY, r: 4, label: { vi: 'Lahore (Pakistan)', en: 'Lahore (Pakistan)' }, side: 'l' },
      { k: 'pt', p: [77.21, 28.61], c: GREY, r: 4, label: { vi: 'Delhi (Ấn Độ)', en: 'Delhi (India)' } },
      { k: 'label', p: [77.2, 35.9], c: BROWN, label: { vi: 'Thượng nguồn: núi cao', en: 'Upstream: high mountains' }, dy: 0 },
      { k: 'label', p: [68.6, 26.6], c: BROWN, label: { vi: 'Hạ nguồn: đồng bằng phẳng', en: 'Downstream: flat plain' }, dy: 0 }
    ],
    key: [
      { c: RW, vi: 'Sông phía tây (Ấn, Jhelum, Chenab): dành cho Pakistan (minh hoạ)', en: 'Western rivers (Indus, Jhelum, Chenab): for Pakistan (illustrative)' },
      { c: RE, vi: 'Sông phía đông (Ravi, Beas, Sutlej): dành cho Ấn Độ (minh hoạ)', en: 'Eastern rivers (Ravi, Beas, Sutlej): for India (illustrative)' }
    ],
    src: [13, 19, 0, 11, 23, 20, 6, 5, 7, 21, 25, 26, 8, 4, 17]
  }
};
