// The argument of the Russia–Ukraine story in one view (its first step), the tag of each following step, and the plain-
// language rewrite of each step's title, text and core (same order as story_ukraine.js; applied by withThesis()).
// Source indexes point into the story's merged `sources` list (story sources 0–24, then core_ukraine.js sources from 25).
const RU = '#C53030', UA = '#E2B100', BY = '#B07A3A', NATO = '#2563EB';

export const THESIS = {
  tags: ['need', 'blocked', 'move', 'counter', 'counter', 'outlook', 'outlook'],
  titles: [
    { vi: 'Bắc và đông có khiên che, phía tây bỏ ngỏ', en: 'Shields to the north and east, the west left open' },
    { vi: 'Đồng bằng không tường, quân đi cả hai chiều', en: 'A plain with no wall: armies cross both ways' },
    { vi: 'Ukraine: đất rộng, phẳng, nằm ngay giữa', en: 'Ukraine: wide, flat, right in between' },
    { vi: 'NATO tiến về phía đông, Moscow đòi dừng lại', en: 'NATO moves east, Moscow demands a halt' },
    { vi: 'Biển Đen: một lối ra, hai bên cùng cần', en: 'The Black Sea: one exit, both sides need it' },
    { vi: 'Đường ống: từ sợi dây nối thành đòn bẩy', en: 'Pipelines: from a link to a lever' },
    { vi: '8/11/2026: chưa ngừng bắn, hai bên vẫn giữ lập trường', en: '8 Nov 2026: no ceasefire, both sides hold their positions' }
  ],
  texts: [
    {
      vi: 'Nước Nga rộng khoảng 17,1 triệu km². Phía bắc có Bắc Băng Dương và băng biển, phía đông có Thái Bình Dương và Siberia mênh mông, phía nam có dãy Kavkaz che một phần; thảo nguyên Kazakhstan thì trống nhưng ở rất xa vùng lõi của Nga. Lối vào vùng lõi rộng nhất, phẳng nhất và đông dân nhất là từ phía tây. Đó là cách nhìn của nhiều nhà phân tích địa chính trị, không phải một quy luật.',
      en: 'Russia covers about 17.1 million km². The Arctic Ocean and sea ice lie to the north, the Pacific and vast Siberia to the east, and the Caucasus guards part of the south; the Kazakh steppe is open but very far from Russia’s core. The widest, flattest and most populated way into the core is from the west. That is how many geopolitical analysts see it, not a law.'
    },
    {
      vi: 'Từ miền tây nước Pháp, qua Đức và Ba Lan, đến tận dãy Ural là một dải đất phẳng rất dài, phần lớn cao dưới khoảng 150 m. Không có dãy núi nào chắn ngang, nên quân đội đi lại dễ theo cả hai chiều. Năm 1812 quân Pháp của Napoleon và năm 1941 quân Đức đều theo đường này tiến vào nước Nga.',
      en: 'From western France, through Germany and Poland, all the way to the Urals runs a very long flat belt, mostly below about 150 m. No mountain range cuts across it, so armies move easily in both directions. In 1812 Napoleon’s French army and in 1941 German armies both marched into Russia along this route.'
    },
    {
      vi: 'Ukraine rộng khoảng 603.550 km², phần lớn là đồng bằng. Sông Dnipro chia đôi đất nước từ bắc xuống nam; dãy Carpath ở phía tây ngăn Ukraine với Trung Âu. Hơn một nửa diện tích là đất trồng trọt, còn miền Donbas ở phía đông từng là vùng than và thép của cả nước.',
      en: 'Ukraine covers about 603,550 km², mostly flat. The Dnipro cuts the country in two from north to south; the Carpathians in the west separate it from Central Europe. More than half of the land is arable, and the Donbas in the east was the country’s coal and steel region.'
    },
    {
      vi: 'NATO kết nạp thêm thành viên theo từng đợt: 1999, 2004, 2009, 2017, 2020, 2023 và 2024; nay có 32 nước. Năm 2023 Phần Lan vào NATO, và đường biên giới trên bộ giữa các nước NATO với Nga dài gần gấp đôi. Kaliningrad là phần đất của Nga nằm kẹp giữa Ba Lan và Litva. Dải đất hẹp giữa Kaliningrad và Belarus, gọi là hành lang Suwałki, là đường bộ trực tiếp nối ba nước Baltic với phần còn lại của NATO.',
      en: 'NATO took in members in rounds: 1999, 2004, 2009, 2017, 2020, 2023 and 2024; it now has 32. When Finland joined in 2023, the land border between NATO members and Russia nearly doubled in length. Kaliningrad is a piece of Russia wedged between Poland and Lithuania. The narrow strip between Kaliningrad and Belarus, the Suwałki gap, is the direct land link between the three Baltic states and the rest of NATO.'
    },
    {
      vi: 'Biển Đen chỉ có một lối ra Địa Trung Hải: eo Bosphorus và Dardanelles của Thổ Nhĩ Kỳ. Bán đảo Crimea nhô ra giữa biển; eo Kerch hẹp nối Biển Đen với biển Azov nông, có cầu Crimea dài khoảng 19 km bắc qua. Hàng hóa của Ukraine đi ra qua cảng Odesa, nên khi tàu và cảng bị tấn công thì giá lương thực bị ảnh hưởng ngay.',
      en: 'The Black Sea has only one way out to the Mediterranean: Turkey’s Bosphorus and Dardanelles. The Crimean peninsula juts into the sea; the narrow Kerch Strait links the Black Sea to the shallow Sea of Azov, with the roughly 19 km Crimean Bridge across it. Ukraine’s goods leave through the port of Odesa, so when ships and ports are attacked, food prices feel it at once.'
    },
    {
      vi: 'Nhiều năm, khí đốt Nga đi qua Ukraine sang châu Âu. Ngày 1/1/2025 hợp đồng quá cảnh hết hạn và dòng khí này dừng lại. Hai nhánh Nord Stream dưới biển Baltic bị nổ vào tháng 9/2022; TurkStream dưới Biển Đen nay là tuyến ống chính còn lại đưa khí Nga vào châu Âu. EU đã thông qua quy định cấm dần khí Nga.',
      en: 'For years Russian gas went to Europe through Ukraine. On 1 Jan 2025 the transit deal expired and that flow stopped. The Nord Stream lines under the Baltic were blasted in September 2022; TurkStream under the Black Sea is now the main remaining pipeline route for Russian gas into Europe. The EU has adopted rules to phase out Russian gas.'
    },
    {
      vi: 'Đến 8/11/2026 vẫn chưa có lệnh ngừng bắn toàn diện. Các cuộc đàm phán do Mỹ làm trung gian dự kiến tiếp tục ở Abu Dhabi ngày 10/11. Bản đồ không vẽ tiền tuyến: tiền tuyến đổi từng ngày và mỗi nguồn theo dõi cho một con số khác, nên tình hình chỉ được kể bằng lời, kèm ngày và nguồn.',
      en: 'As of 8 Nov 2026 there is no general ceasefire. US-brokered talks are due to continue in Abu Dhabi on 10 Nov. The map draws no front line: it changes daily and each tracker gives a different figure, so the situation is told in words, with a date and a source.'
    }
  ],
  cores: [
    {
      vi: 'Các nhà phân tích như Tim Marshall cho rằng địa lý giới hạn lựa chọn của nhà lãnh đạo, và với Nga nỗi lo chính là sườn tây trống trải. Moscow dựa vào năm 1941: ngày 24/2/2022 ông Putin nói Nga sẽ không lặp lại sai lầm hành động quá muộn. Giới phê bình nói địa lý chỉ đặt giới hạn, không quyết định: McFaul lưu ý bản đồ không đổi mà Nga lúc hợp tác, lúc đối đầu với phương Tây.',
      en: 'Analysts such as Tim Marshall argue that geography limits a leader’s choices, and that Russia’s main worry is its open western flank. Moscow draws on 1941: on 24 Feb 2022 Putin said Russia will not repeat the mistake of acting too late. Critics say geography sets limits but does not decide: McFaul notes that the map stayed the same while Russia alternated between cooperating with and confronting the West.'
    },
    {
      vi: 'Mearsheimer lập luận năm 2014 rằng vì Pháp thời Napoleon, Đức hoàng đế và Đức Quốc xã đều từng vượt dải đất này, không nhà lãnh đạo Nga nào chấp nhận một liên minh quân sự thù địch tiến vào Ukraine. Cũng vì đất mở, Ba Lan và các nước Baltic muốn NATO che chở: một nhà phân tích Ba Lan gọi hành lang Suwałki là vấn đề “sống còn” với các nước Baltic. Vì vậy đồng bằng sinh ra nỗi sợ ở cả hai phía: cách giữ an toàn của bên này trông như mối đe dọa với bên kia.',
      en: 'Mearsheimer argued in 2014 that, since Napoleonic France, imperial Germany and Nazi Germany all crossed this ground, no Russian leader would tolerate a hostile military alliance moving into Ukraine. The same open ground is why Poland and the Baltic states want NATO as their protection: a Polish analyst calls the Suwałki gap “existential” for the Baltics. So the plain breeds fear on both sides: each side’s way of staying safe looks like a threat to the other.'
    },
    {
      vi: 'Moscow nói Ukraine là phần rộng nhất của vùng đất mở giữa NATO và Nga, và một chỗ đứng quân sự của NATO ở đó là không thể chấp nhận (ông Putin, 24/2/2022); Mearsheimer gọi Ukraine là quốc gia đệm rất quan trọng với Nga. Phía bên kia nói Ukraine có chủ quyền và được tự chọn liên minh (Tuyên bố Washington 2024 của NATO), và Nga đã tái khẳng định chủ quyền, biên giới của Ukraine trong Bản ghi nhớ Budapest 1994. Đại hội đồng Liên Hợp Quốc lên án cuộc xâm lược năm 2022 là vi phạm Hiến chương với 141 phiếu thuận, 5 chống.',
      en: 'Moscow says Ukraine is the widest piece of the open ground between NATO and Russia, and that a NATO military foothold there is unacceptable (Putin, 24 Feb 2022); Mearsheimer called Ukraine a buffer state of great importance to Russia. The other side says Ukraine is sovereign and may choose its alliances (NATO’s 2024 Washington declaration), and that Russia reaffirmed Ukraine’s sovereignty and borders in the 1994 Budapest Memorandum. The UN General Assembly deplored the 2022 invasion as a breach of the Charter by 141 votes to 5.'
    },
    {
      vi: 'Moscow nói: các dự thảo ngày 17/12/2021 đòi chặn NATO mở rộng thêm và nêu đích danh Ukraine, và ông Putin nói không thể tin nhãn “phòng thủ” của NATO sau lời hứa năm 1990 không mở rộng sang phía đông. NATO nói mình là liên minh phòng thủ, “không đe dọa Nga”, và theo Điều 10 chỉ Liên minh cùng nước xin vào mới quyết định. Về năm 1990, Lưu trữ An ninh Quốc gia Mỹ nói tài liệu giải mật ủng hộ lời phàn nàn của Moscow rằng đã có những bảo đảm được nêu với lãnh đạo Liên Xô, nhưng chỉ trong biên bản đàm phán, không trong hiệp ước nào.',
      en: 'Moscow says: its drafts of 17 Dec 2021 asked to block further NATO enlargement and named Ukraine, and Putin says NATO’s “defensive” label cannot be trusted after the 1990 promise not to expand east. NATO says it is a defensive alliance that “poses no threat to Russia”, and that under Article 10 only the Alliance and the candidate decide. On 1990, the US National Security Archive says declassified records back Moscow’s complaint that assurances were given to Soviet leaders, but only in records of talks, not in any treaty.'
    },
    {
      vi: 'Theo CSIS (2014), Sevastopol quan trọng với Moscow vì là căn cứ nước ấm tự nhiên của Hạm đội Biển Đen, và sau khi chính quyền ở Kyiv thay đổi năm 2014 Nga lo mất hợp đồng thuê. Phía bên kia nói Crimea nằm trong biên giới được quốc tế công nhận của Ukraine (Đại hội đồng Liên Hợp Quốc, 2014), và Sestanovich cho rằng năm 2014 căn cứ không bị đe dọa. Giờ mỗi bên đều đe dọa việc bên kia dùng biển: ISW (2023) ghi nhận Nga chuyển bớt tàu khỏi Sevastopol sau các đòn đánh của Ukraine, còn hàng xuất khẩu của Ukraine phụ thuộc vào chính vùng nước này.',
      en: 'According to CSIS (2014), Sevastopol matters to Moscow as a natural warm-water base for the Black Sea Fleet, and after Kyiv’s government changed in 2014 Russia feared losing its lease. The other side says Crimea lies within Ukraine’s internationally recognised borders (UN General Assembly, 2014), and Sestanovich argues the base was not at risk in 2014. Each side now threatens the other’s use of the sea: ISW (2023) reported Russia moving some ships out of Sevastopol after Ukrainian strikes, while Ukraine’s exports depend on the same water.'
    },
    {
      vi: 'Một đường ống buộc người bán, người mua và nước ở giữa vào một tuyến cố định, nên bên nào cũng có thể gây sức ép. Ukraine nói không gia hạn quá cảnh vì không muốn tài trợ cho cuộc chiến của Nga; thủ tướng Slovakia đáp rằng việc này hại EU chứ không hại Nga (nhận định của ông, không phải số đo). Theo Kyiv Independent, Slovakia, Hungary và Áo không có biển và vẫn dựa vào khí Nga, nên việc EU cùng loại bỏ dần khí Nga có thể đè lên họ khác với các nước còn lại.',
      en: 'A pipeline ties seller, buyer and the country in between to one fixed route, so each can put pressure on the others. Ukraine said it would not extend transit because it would not finance Russia’s war; Slovakia’s prime minister replied that this hurts the EU but not Russia (his view, not a measurement). According to the Kyiv Independent, landlocked Slovakia, Hungary and Austria still relied on Russian gas, so an EU-wide phase-out may weigh on them differently from the rest.'
    },
    {
      vi: 'Lập trường từ năm 2021 vẫn là lõi của cuộc mặc cả: Moscow nêu điều kiện Ukraine trung lập, không liên minh, không vào NATO (ông Putin, 14/6/2024), và theo Reuters (10/2026) Nga vẫn đòi toàn bộ Donbas, kể cả phần chưa chiếm; Kyiv bác việc nhượng đất họ đang giữ và đòi bảo đảm an ninh vững chắc. Giới phân tích chia rẽ: John Lough (Chatham House, 11/2024) nói Kyiv có thể phải chấp nhận đóng băng tiến trình NATO nếu Mỹ ngừng hỗ trợ, còn Nathalie Tocci và Kristi Raik nói làm vậy sẽ mời gọi một cuộc tấn công mới. Tuyên bố của NATO tại The Hague năm 2025, khác năm 2024, không nhắc tới tư cách thành viên của Ukraine.',
      en: 'The 2021 positions are still the core of the bargaining: Moscow’s stated terms are neutrality, non-alignment and no NATO for Ukraine (Putin, 14 Jun 2024), and according to Reuters (Oct 2026) Russia still demands all of Donbas, including land it has not occupied; Kyiv rejects giving up land it holds and wants strong security guarantees. Analysts split: John Lough (Chatham House, Nov 2024) said Kyiv may have to accept a freeze of the NATO process if US support ends, while Nathalie Tocci and Kristi Raik said that would invite a new attack. NATO’s 2025 Hague declaration, unlike 2024’s, does not mention Ukraine’s membership.'
    }
  ],
  step: {
    title: { vi: 'Vì sao Moscow nhất quyết không để Ukraine vào NATO?', en: 'Why is Moscow so set against Ukraine joining NATO?' },
    text: {
      vi: 'NATO nói mình chỉ phòng thủ, Ukraine nói mình được tự chọn liên minh, vậy mà Moscow vẫn đòi Ukraine đứng ngoài NATO. Thử đứng ở Moscow nhìn về phía tây. Năm ý dưới đây là cách các nhà phân tích địa chính trị giải thích, có cả lập luận của Moscow và của phía bên kia; các bước sau đưa dữ kiện cho từng ý.',
      en: 'NATO says it is only defensive, Ukraine says it may choose its alliances, and still Moscow demands that Ukraine stay out of NATO. Stand in Moscow and look west. The five points below are how geopolitical analysts explain it, with both Moscow’s argument and the other side’s; the next steps give the facts for each point.'
    },
    chain: [
      {
        tag: 'need',
        head: { vi: 'Moscow muốn có một vùng đệm phía tây.', en: 'Moscow wants a buffer to the west.' },
        text: {
          vi: 'Phía bắc nước Nga có băng, phía đông có Siberia mênh mông, phía nam có núi Kavkaz che một phần. Lối vào vùng lõi rộng và phẳng nhất là từ phía tây. Moscow và một số nhà phân tích như Mearsheimer lập luận rằng Nga cần một vùng đệm ở đó.',
          en: 'Russia has ice to the north, vast Siberia to the east and the Caucasus guarding part of the south. The widest, flattest way into its core is from the west. Moscow and some analysts, such as Mearsheimer, argue that Russia needs a buffer there.'
        }
      },
      {
        tag: 'blocked',
        head: { vi: 'Nhưng phía tây là đồng bằng không có tường.', en: 'But the west is a plain with no wall.' },
        text: {
          vi: 'Từ Pháp qua Đức, Ba Lan đến tận dãy Ural, đất phẳng, không có dãy núi nào chắn ngang. Năm 1812 quân Napoleon và năm 1941 quân Đức đã theo lối này tiến vào Nga. Moscow dựa vào năm 1941: ngày 24/2/2022 ông Putin nói Nga sẽ không lặp lại sai lầm hành động quá muộn.',
          en: 'From France through Germany and Poland to the Urals, the land is flat and no mountain range cuts across it. In 1812 Napoleon’s army and in 1941 German armies marched into Russia this way. Moscow draws on 1941: on 24 Feb 2022 Putin said Russia will not repeat the mistake of acting too late.'
        }
      },
      {
        tag: 'move',
        head: { vi: 'Vì thế Moscow đòi NATO dừng lại trước Ukraine.', en: 'So Moscow demands that NATO stop short of Ukraine.' },
        text: {
          vi: 'Moscow nói Ukraine là phần rộng nhất của vùng đất mở giữa NATO và Nga, và NATO đặt chân quân sự ở đó là không thể chấp nhận. Tháng 12/2021 Moscow đưa ra dự thảo hiệp ước đòi Mỹ chặn NATO mở rộng thêm.',
          en: 'Moscow says Ukraine is the widest piece of the open ground between NATO and Russia, and that a NATO military foothold there is unacceptable. In December 2021 Moscow put forward a draft treaty asking the US to block further NATO enlargement.'
        }
      },
      {
        tag: 'counter',
        head: { vi: 'Nhưng hàng xóm của Nga cũng đứng trên đồng bằng ấy.', en: 'But Russia’s neighbours stand on the same plain.' },
        text: {
          vi: 'Ukraine nói mình có chủ quyền và được tự chọn liên minh; NATO nói mình chỉ phòng thủ, và chỉ NATO cùng nước xin vào mới có quyền quyết định. Năm 2014 Liên Hợp Quốc kêu gọi không công nhận việc thay đổi địa vị Crimea, nay do Nga quản lý; năm 2022 Nga xâm lược Ukraine, và Đại hội đồng lên án với 141 phiếu thuận. Ba Lan, các nước Baltic và Phần Lan muốn NATO che chở họ trước Nga.',
          en: 'Ukraine says it is sovereign and may choose its alliances; NATO says it is only defensive, and only NATO and the country applying have the right to decide. In 2014 the UN called on states not to recognise any change in the status of Crimea, which Russia now administers; in 2022 Russia invaded Ukraine, and the General Assembly deplored it by 141 votes. Poland, the Baltic states and Finland want NATO to protect them from Russia.'
        }
      },
      {
        tag: 'outlook',
        head: { vi: 'Một đồng bằng, hai nỗi sợ.', en: 'One plain, two fears.' },
        text: {
          vi: 'Theo cách đọc này, Nga sợ NATO đến sát cửa, còn hàng xóm của Nga sợ Nga. Cách giữ an toàn của bên này trông như mối đe dọa với bên kia. Đến 8/11/2026 vẫn chưa có lệnh ngừng bắn toàn diện, và chuyện Ukraine có được vào NATO vẫn nằm ở lõi cuộc mặc cả.',
          en: 'On this reading, Russia fears NATO at its door, and Russia’s neighbours fear Russia. Each side’s way of staying safe looks like a threat to the other. As of 8 Nov 2026 there is no general ceasefire, and whether Ukraine may join NATO is still at the core of the bargaining.'
        }
      }
    ],
    ll: [30, 53],
    k: 3.4,
    layers: [],
    show: ['northplain', 'carpathians', 'suwalki'],
    hl: { Russia: RU, Belarus: BY, Ukraine: UA, Poland: NATO, Lithuania: NATO, Latvia: NATO, Estonia: NATO, Finland: NATO },
    dim: true,
    draw: [
      { k: 'line', pts: [[23.7, 52.1], [27.56, 53.9], [32.05, 54.78], [37.62, 55.75]], c: '#B45309', w: 2.6, flow: true, arrow: true, label: { vi: '1812, 1941', en: '1812, 1941' }, lp: [27.5, 53.2], dy: 4 },
      { k: 'pt', p: [37.62, 55.75], c: RU, r: 5, label: { vi: 'Moscow', en: 'Moscow' }, dy: -10 },
      { k: 'label', p: [20.5, 52.6], c: '#8A5A00', label: { vi: 'đồng bằng không có núi chắn', en: 'a plain with no mountain wall' }, dy: 0 },
      { k: 'label', p: [31.5, 48.8], c: '#8A5A00', label: { vi: '“vùng đệm” (một lập luận)', en: 'a “buffer” (one argument)' }, dy: 0 }
    ],
    key: [
      { c: '#B45309', vi: 'Hướng tiến quân năm 1812 và 1941 (đơn giản hóa)', en: 'Lines of advance in 1812 and 1941 (simplified)' },
      { c: NATO, vi: 'Ba Lan, các nước Baltic, Phần Lan (thành viên NATO)', en: 'Poland, the Baltic states, Finland (NATO members)' },
      { c: '#8A5A00', vi: '“Vùng đệm”: lập luận của Moscow và một số nhà phân tích như Mearsheimer, không phải một đường biên', en: '“Buffer”: the argument of Moscow and some analysts such as Mearsheimer, not a border' }
    ],
    src: [24, 41, 42, 35, 2, 3, 4, 26, 27, 34, 28, 30, 14, 33, 32, 38, 39, 20]
  }
};
