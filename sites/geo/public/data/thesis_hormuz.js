// The argument of the Hormuz story in one view (its first step), the tag of each following step, and the plain-language
// rewrite of each step's title, text and core. Source indexes point into the story's merged `sources` list (see
// withCore() in stories.js). Facts, numbers and positions are only those already in story_hormuz.js and core_hormuz.js.
export const THESIS = {
  tags: ['blocked', 'move', 'blocked', 'counter', 'need', 'outlook'],
  titles: [
    { vi: 'Cả vùng Vịnh chỉ có một cửa ra biển', en: 'The whole Gulf has one way out to sea' },
    { vi: 'Iran nắm bờ bắc, sát luồng tàu', en: 'Iran holds the north shore, right by the lanes' },
    { vi: 'Có đường vòng, nhưng chỉ chở được một phần', en: 'There are detours, but they carry only part' },
    { vi: 'Mỹ có hạm đội, Iran có bờ biển dài', en: 'The US has the fleet, Iran has the long coast' },
    { vi: 'Dầu đi châu Á, giá biến động khắp nơi', en: 'The oil goes to Asia, prices move everywhere' },
    { vi: 'Từ hồ sơ hạt nhân, chiến sự lan tới eo biển', en: 'From the nuclear file, the fighting reaches the strait' }
  ],
  texts: [
    {
      vi: 'Vịnh Ba Tư giống một cái hồ lớn, và eo Hormuz là cửa duy nhất ra đại dương. Chỗ hẹp nhất rộng khoảng 33 km (con số thường được dẫn). Tàu dầu đi theo hai làn, mỗi làn chỉ rộng chừng 3–4 km. Ở chỗ hẹp nhất, cả hai làn đều nằm trong vùng biển của Oman.',
      en: 'The Persian Gulf is like a big lake, and the Strait of Hormuz is its only door to the ocean. At its narrowest it is about 33 km wide (a widely quoted figure). Tankers use two lanes, each only about 3–4 km wide. At the narrowest point, both lanes lie in Omani waters.'
    },
    {
      vi: 'Bờ bắc của cửa này là của Iran. Sau bờ biển là dãy Zagros, chạy dọc phía tây và tây nam, che chắn Iran khỏi đồng bằng Iraq. Gần luồng tàu có các đảo của Iran như Qeshm. Ba đảo Abu Musa, Tunb Lớn và Tunb Nhỏ do Iran kiểm soát từ năm 1971; UAE và Hội đồng Hợp tác vùng Vịnh (GCC) nói đó là đảo của UAE, còn Iran nói đó là lãnh thổ không thể tách rời của mình.',
      en: 'The north shore of this door is Iran’s. Behind the coast rise the Zagros mountains, running along the west and southwest and shielding Iran from the plains of Iraq. Iranian islands such as Qeshm lie close to the shipping lanes. Iran has controlled Abu Musa and the Greater and Lesser Tunbs since 1971; the UAE and the Gulf Cooperation Council (GCC) say they belong to the UAE, while Iran says they are inseparable parts of its territory.'
    },
    {
      vi: 'Ả Rập Xê Út và UAE có đường ống chở dầu vòng qua Hormuz. Đường ống Đông–Tây của Ả Rập Xê Út dài khoảng 1.200 km, từ các mỏ dầu gần Vịnh sang cảng Yanbu bên Biển Đỏ; UAE có đường ống từ Habshan ra Fujairah, bên bờ Vịnh Oman, ngoài eo biển. Nhưng hai tuyến này chỉ chở được một phần. Iraq, Kuwait, Qatar và Bahrain gần như không có đường vòng.',
      en: 'Saudi Arabia and the UAE have pipelines that carry oil around Hormuz. The Saudi East–West pipeline runs about 1,200 km from the oilfields near the Gulf to the Red Sea port of Yanbu; the UAE has a pipeline from Habshan to Fujairah, on the Gulf of Oman outside the strait. But these two routes carry only part of the oil. Iraq, Kuwait, Qatar and Bahrain have almost no detour.'
    },
    {
      vi: 'Mỹ đặt Hạm đội 5 ở Bahrain, ngay trong Vịnh Ba Tư, và có căn cứ không quân Al Udeid ở Qatar, sở chỉ huy tiền phương của CENTCOM. Hải quân Iran không lớn bằng, nhưng Iran có bờ biển dài để đặt tên lửa, thủy lôi và nhiều xuồng nhỏ. Chỉ vài quả thủy lôi cũng đủ làm tàu phải dừng. Năm 2026, cả hai cách đánh này đều đã được dùng.',
      en: 'The US keeps its Fifth Fleet in Bahrain, inside the Persian Gulf, and the Al Udeid air base in Qatar, CENTCOM’s forward headquarters. Iran has no navy as big, but it has a long coast to base missiles, mines and many small boats. A few mines are enough to stop ships. In 2026 both approaches were used.'
    },
    {
      vi: 'Gần 9/10 dầu thô qua Hormuz chảy sang châu Á, phần lớn tới Trung Quốc, Ấn Độ, Nhật Bản và Hàn Quốc. Chỉ khoảng 7% dầu thô Mỹ nhập khẩu đi qua eo biển này, nên Mỹ ít phụ thuộc trực tiếp hơn. Nhưng dầu được bán trên một thị trường chung, nên khi eo biển nghẽn, giá ở đâu cũng biến động.',
      en: 'Almost nine-tenths of the crude passing Hormuz goes to Asia, mostly to China, India, Japan and South Korea. Only about 7% of the crude the US imports comes through the strait, so the US depends less directly. But oil is sold in one world market, so when the strait chokes, prices move everywhere.'
    },
    {
      vi: 'Tháng 6/2025, Israel rồi Mỹ không kích các cơ sở hạt nhân của Iran. Từ 28/2/2026, Mỹ và Israel mở một cuộc chiến mới với Iran; Iran siết việc đi qua eo Hormuz, còn Mỹ phong tỏa các cảng của Iran. Bản ghi nhớ Mỹ–Iran ký ngày 17/6 đổ vỡ hôm 8/7. Đến 8/11/2026 vẫn chưa có thỏa thuận; phía Iran nói nhiều tàu dầu đã trúng thủy lôi hoặc bốc cháy, điều các cơ quan hàng hải chưa xác nhận hết.',
      en: 'In June 2025 Israel and then the US struck Iran’s nuclear sites. From 28 Feb 2026 the US and Israel began a new war with Iran; Iran restricted passage through the Strait of Hormuz, and the US blockaded Iranian ports. A US–Iran memorandum signed on 17 June collapsed on 8 July. As of 8 Nov 2026 there is no deal; the Iranian side says several tankers have hit mines or caught fire, which maritime authorities have not fully confirmed.'
    }
  ],
  cores: [
    {
      vi: 'Một cửa hẹp nghĩa là ai ngồi sát cửa cũng có thể đe dọa mọi con tàu đi qua, và theo IEA, đường đi vòng rất hạn chế. Tim Marshall (3/2026) cho rằng địa hình này có lợi cho bên phòng thủ: luồng tàu hẹp và nông ở gần bờ Iran, nên vài vũ khí rẻ tiền cũng đủ làm tàu dầu lớn gặp rủi ro; ông gọi eo biển là con át chủ bài của Iran. Nhưng số liệu của IEA cho thấy chính Iran cũng xuất phần lớn dầu của mình qua đây, nên đóng cửa cũng làm Tehran thiệt (đây là cách đọc số liệu, không phải lời của Iran).',
      en: 'A narrow door means whoever sits beside it can threaten every ship that passes, and the IEA describes the ways around it as limited. Tim Marshall (March 2026) argues that this geography favours the defender: the channels are narrow and shallow near Iran’s coast, so a few cheap weapons can make passage risky for large tankers; he calls the strait Iran’s trump card. But the IEA’s figures show that Iran itself sends most of its own oil exports through the strait, so closing it costs Tehran too (this is a reading of the data, not a statement by Iran).'
    },
    {
      vi: 'Marshall cho rằng bờ biển này giúp bên phòng thủ: vách đá và vịnh nhỏ cách luồng tàu vài dặm có thể giấu xuồng cao tốc và drone, và ông mô tả các khẩu đội tên lửa chống hạm cùng đường hầm khoét vào núi gần Bandar Abbas và Qeshm. Kasapoğlu (Viện Hudson, 4/2026) đọc hải quân Iran là được xây để ngăn chặn chứ không để làm chủ mặt biển: Iran không cần thắng trên biển, chỉ cần làm việc đi qua tốn kém và bấp bênh. Đại sứ Iran tại Liên Hợp Quốc nói Tehran không thể để eo biển thành hành lang cho hành động thù địch nhắm vào mình; các nước GCC thì bác mọi biện pháp đóng cửa hay thu phí qua eo biển.',
      en: 'Marshall argues that this coast helps the defender: cliffs and inlets a few miles from the shipping lane can hide fast boats and drones, and he describes anti-ship missile batteries and tunnels dug into the rock near Bandar Abbas and Qeshm. Kasapoğlu (Hudson Institute, April 2026) reads Iran’s navy as built for denial rather than control: Iran does not need to win the sea, only to make passage costly and uncertain. Iran’s UN ambassador says Tehran cannot let the waterway become a corridor for hostile action against it; the GCC states reject any measure to close the strait or charge fees to pass.'
    },
    {
      vi: 'Theo IEA, chỉ Ả Rập Xê Út và UAE có đường ống chở được một phần dầu thô đi vòng; Iraq, Kuwait, Qatar và Bahrain dựa vào eo biển cho gần hết dầu xuất khẩu, còn khí LNG của Qatar và UAE không có tuyến nào khác. IEA cũng lưu ý phần lớn công suất khai thác dự phòng của thế giới, chủ yếu của Ả Rập Xê Út, nằm phía trong eo biển, nên đóng cửa lâu sẽ lấy mất chính tấm đệm thường dùng để đỡ cú sốc của thị trường. Lãnh đạo GCC (28/4/2026) đòi trở lại tình trạng trước 28/2, không thu phí, và kêu gọi một giải pháp ngoại giao có tính đến mối lo của GCC.',
      en: 'The IEA says only Saudi Arabia and the UAE have pipelines that can carry part of their crude around the strait; Iraq, Kuwait, Qatar and Bahrain rely on it for the vast majority of their oil exports, and there is no alternative route for Qatar’s and the UAE’s LNG. The IEA also notes that most of the world’s spare production capacity, mostly Saudi, sits behind the strait, so a long closure would remove the very cushion normally used to absorb a shock to the market. GCC leaders (28 April 2026) asked for the position before 28 February to be restored, with no fees, and called for a diplomatic path that addresses GCC concerns.'
    },
    {
      vi: 'Marshall viết rằng Mỹ áp đảo về lực lượng thông thường nhưng thiếu sẵn khí tài rà phá thủy lôi tấn công, và hộ tống đoàn tàu là làm được nhưng nguy hiểm. Marshall và Kasapoğlu cùng chỉ ra một gánh nặng không đều: bên phòng thủ chỉ cần làm việc đi qua có vẻ rủi ro, còn bên hộ tống phải giữ an toàn cho từng con tàu. Phía Mỹ nói khác: Bộ trưởng Quốc phòng Hegseth nói chiến dịch của Mỹ mang tính phòng thủ, để bảo vệ tàu buôn, và Iran không kiểm soát eo biển, còn IRGC cảnh báo tàu phải đi trong các hành lang do họ đặt ra (Al Jazeera, 5/5/2026).',
      en: 'Marshall writes that the US has overwhelming conventional superiority but lacks ready offensive mine-clearing equipment, and that escorting convoys would be possible but dangerous. Marshall and Kasapoğlu both point to an uneven burden: the defender only has to make passage look risky, while the escort has to keep every ship safe. US officials put it differently: Defense Secretary Hegseth said the US operation is defensive, to protect commercial shipping, and that Iran does not control the strait, while the IRGC warned ships to stay within corridors it set (Al Jazeera, 5 May 2026).'
    },
    {
      vi: 'Theo IEA, phần lớn dầu rời eo biển đi sang châu Á; Trung Quốc, Ấn Độ và Nhật Bản nhập nhiều nhất, Nhật Bản và Hàn Quốc đặc biệt phụ thuộc, nên các nước mua này chịu rủi ro lớn nhất khi eo biển bị gián đoạn lâu. Tháng 11, một nghị sĩ Iran nói tàu của Ấn Độ, Trung Quốc, Qatar và Iraq được đi qua tự do; các nhà phân tích được Al Jazeera dẫn (Parsi, Pusztai) cho rằng Tehran muốn tạo lỗ hổng trong lệnh phong tỏa của Mỹ, đồng thời lưu ý Ấn Độ và Qatar vẫn cần quan hệ gần với Washington. Còn Ngoại trưởng Mỹ Rubio nói mục tiêu của Mỹ là khôi phục tự do hàng hải (Al Jazeera, 5/5/2026).',
      en: 'The IEA says most oil leaving the strait goes to Asia, with China, India and Japan the largest importers and Japan and South Korea especially reliant, so these buyers carry the most risk from a long disruption. An Iranian lawmaker said in November that ships of India, China, Qatar and Iraq pass freely; analysts quoted by Al Jazeera (Parsi, Pusztai) read this as Tehran poking holes in the US blockade, while noting that India and Qatar need close ties with Washington. US Secretary of State Rubio, for his part, framed the US aim as restoring freedom of navigation (Al Jazeera, 5 May 2026).'
    },
    {
      vi: 'Marshall gọi eo biển là con át chủ bài của Iran, còn Kasapoğlu nói trọng tâm cuộc xung đột đã chuyển sang năng lực ngăn chặn của hải quân IRGC. Tehran nói sẽ mở lại khi chiến tranh chấm dứt, Mỹ dỡ phong tỏa, bồi thường, gỡ trừng phạt và có bảo đảm đáng tin cậy rằng Mỹ không tấn công lại (Araghchi 25/9; Rezaei và một phát ngôn viên IRGC, 27/8), và việc quản lý eo biển sẽ không quay lại như trước chiến tranh mà kèm phí dịch vụ (Araghchi, 13/6). Mỹ nói họ hành động để giữ tuyến thủy quốc tế luôn mở, còn các nước GCC bác mọi biện pháp gây hại cho tàu bè, kể cả thu phí; Qatar và Oman đang làm trung gian tìm lối ở giữa.',
      en: 'Marshall calls the strait Iran’s trump card, and Kasapoğlu says the conflict’s centre of gravity has moved to the IRGC Navy’s capacity for denial. Tehran says it will reopen when the war ends, the US lifts its blockade, there is compensation and sanctions relief, and there are credible guarantees against renewed US attack (Araghchi, 25 Sep; Rezaei and an IRGC spokesperson, 27 Aug), and that the strait’s administration will not return to pre-war arrangements, with fees for services (Araghchi, 13 Jun). The US says it acts to keep an international waterway open, and the GCC states reject any measure that hurts shipping, fees included; Qatar and Oman are mediating, looking for a middle path.'
    }
  ],
  step: {
    title: { vi: 'Vì sao một eo biển hẹp có thể làm giá dầu khắp thế giới biến động?', en: 'Why can one narrow strait move oil prices around the world?' },
    text: {
      vi: 'Hormuz chỉ là một lối biển hẹp giữa Iran và Oman, vậy mà khi nó nghẽn, giá dầu ở đâu cũng biến động. Vì sao? Thử đứng trên bờ biển Iran, nhìn xuống những con tàu dầu đi qua bên dưới. Năm ý dưới đây là cách các nhà phân tích địa chính trị (như Tim Marshall) giải thích; các bước sau đưa dữ kiện cho từng ý.',
      en: 'Hormuz is just a narrow channel between Iran and Oman, yet when it chokes, oil prices move everywhere. Why? Stand on Iran’s coast and look down at the tankers passing below. The five points below are how geopolitical analysts (such as Tim Marshall) explain it; the next steps give the facts for each point.'
    },
    chain: [
      {
        tag: 'need',
        head: { vi: 'Thế giới cần dầu đi qua cửa này.', en: 'The world needs the oil that passes this door.' },
        text: {
          vi: 'Năm 2024, cứ năm thùng dầu thế giới dùng thì khoảng một thùng đã đi qua Hormuz (EIA). Phần lớn dầu thô ấy chạy sang châu Á: Trung Quốc, Ấn Độ, Nhật Bản, Hàn Quốc. Dầu bán trên một thị trường chung, nên dòng này nghẽn thì giá ở đâu cũng biến động.',
          en: 'In 2024 about one barrel in every five the world used passed through Hormuz (EIA). Most of that crude goes to Asia: China, India, Japan, South Korea. Oil is sold in one world market, so when this flow chokes, prices move everywhere.'
        }
      },
      {
        tag: 'blocked',
        head: { vi: 'Nhưng dầu ấy chỉ có một cửa ra, và cửa rất hẹp.', en: 'But that oil has only one way out, and it is narrow.' },
        text: {
          vi: 'Vịnh Ba Tư như một cái hồ, Hormuz là cửa duy nhất ra đại dương. Tàu dầu đi theo hai làn, mỗi làn chỉ rộng chừng 3–4 km. Theo IEA, chỉ Ả Rập Xê Út và UAE có đường ống chở được một phần dầu thô đi vòng.',
          en: 'The Persian Gulf is like a lake, and Hormuz is its only door to the ocean. Tankers use two lanes, each only about 3–4 km wide. According to the IEA, only Saudi Arabia and the UAE have pipelines that can carry part of their crude around it.'
        }
      },
      {
        tag: 'move',
        head: { vi: 'Và Iran ngồi ngay bên cửa.', en: 'And Iran sits right beside the door.' },
        text: {
          vi: 'Bờ bắc là của Iran, có núi, vách đá và những đảo như Qeshm nằm sát luồng tàu. Hải quân Iran không lớn bằng Mỹ, nhưng theo nhà phân tích Kasapoğlu, Iran không cần thắng trên biển, chỉ cần làm cho việc đi qua tốn kém và bấp bênh. Tehran thì nói họ không thể để eo biển thành hành lang cho hành động thù địch nhắm vào mình.',
          en: 'The north shore is Iran’s, with mountains, cliffs and islands such as Qeshm close to the shipping lanes. Iran’s navy is not as big as America’s, but analyst Kasapoğlu argues that Iran does not need to win the sea, only to make passage costly and uncertain. Tehran says it cannot let the waterway become a corridor for hostile action against it.'
        }
      },
      {
        tag: 'counter',
        head: { vi: 'Nhưng cửa có người canh, và Iran cũng cần nó.', en: 'But the door is guarded, and Iran needs it too.' },
        text: {
          vi: 'Hạm đội 5 của Mỹ đóng ngay trong Vịnh, ở Bahrain. Mỹ nói họ hành động để giữ tuyến thủy quốc tế này luôn mở; các nước vùng Vịnh (GCC) bác mọi việc đóng cửa hay thu phí. Số liệu của IEA cho thấy chính Iran cũng xuất phần lớn dầu của mình qua đây, nên đóng cửa cũng làm Tehran thiệt (đây là cách đọc số liệu, không phải lời của Iran).',
          en: 'The US Fifth Fleet is based inside the Gulf, in Bahrain. The US says it acts to keep this international waterway open; the Gulf states (GCC) reject any closure or fees. The IEA’s figures show that Iran itself sends most of its own oil exports through here, so closing it costs Tehran too (a reading of the data, not a statement by Iran).'
        }
      },
      {
        tag: 'outlook',
        head: { vi: 'Một cái cửa, chưa thống nhất ai đặt luật.', en: 'One door, no agreement on who sets the rules.' },
        text: {
          vi: 'Tehran nói việc quản lý eo biển sẽ không quay lại như trước chiến tranh, mà kèm phí dịch vụ. Mỹ nói muốn khôi phục tự do hàng hải, còn các nước GCC bác mọi khoản phí. Đến 8/11/2026 vẫn chưa có thỏa thuận; Qatar và Oman đang tìm lối ở giữa.',
          en: 'Tehran says the strait’s administration will not return to pre-war arrangements, and will come with fees for services. The US says it wants to restore freedom of navigation, and the GCC states reject any fees. As of 8 Nov 2026 there is no deal; Qatar and Oman are looking for a middle path.'
        }
      }
    ],
    ll: [50, 25.5],
    k: 3,
    layers: [],
    show: ['hormuz', 'persiangulf', 'r_gulf_asia', 'pipe_petroline', 'pipe_habshan', 'base_bahrain'],
    hl: {
      Iran: '#E24B4A',
      Oman: '#C7D2E3',
      'Saudi Arabia': '#D97706',
      'United Arab Emirates': '#B8860B',
      Iraq: '#E7A09E',
      Kuwait: '#E7A09E',
      Qatar: '#E7A09E',
      Bahrain: '#E7A09E'
    },
    dim: true,
    draw: [
      { k: 'line', pts: [[52, 27.0], [56.4, 26.5], [58.5, 24.8], [62, 22.5]], c: '#D97706', w: 4, flow: true, arrow: true, label: { vi: '~1/5 dầu thế giới (2024)', en: '~1/5 of world oil (2024)' }, lp: [60.3, 23.6], dy: 12 },
      { k: 'pt', p: [38.06, 24.08], c: '#D97706', r: 4.5, label: { vi: 'Yanbu', en: 'Yanbu' } },
      { k: 'pt', p: [56.36, 25.12], c: '#B8860B', r: 4.5, label: { vi: 'Fujairah', en: 'Fujairah' } }
    ],
    key: [
      { c: '#E24B4A', vi: 'Iran: bờ bắc của cửa', en: 'Iran: the north shore' },
      { c: '#D97706', vi: 'Ả Rập Xê Út: có đường ống vòng', en: 'Saudi Arabia: has a bypass pipeline' },
      { c: '#B8860B', vi: 'UAE: có đường ống vòng', en: 'UAE: has a bypass pipeline' },
      { c: '#E7A09E', vi: 'Gần như không có đường vòng', en: 'Almost no detour' }
    ],
    src: [0, 1, 2, 6, 10, 11, 12, 18, 19, 21, 22, 23, 26, 28]
  }
};
