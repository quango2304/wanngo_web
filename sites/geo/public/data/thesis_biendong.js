// The argument of the East Sea story in one view (its first step) and the tag of each following step.
// Source indexes point into the story's merged `sources` list (see withCore() in stories.js).
export const THESIS = {
  tags: ['need', 'counter', 'move', 'move', 'counter', 'outlook'],
  step: {
    title: { vi: 'Vì sao Bắc Kinh quyết giữ Biển Đông?', en: 'Why is Beijing so set on the East Sea?' },
    text: {
      vi: 'Dù bị các nước xung quanh phản đối, dù có phán quyết quốc tế, Bắc Kinh vẫn không lùi ở Biển Đông. Vì sao? Thử đứng ở Bắc Kinh nhìn ra biển. Năm ý dưới đây là cách các nhà phân tích địa chính trị (như Tim Marshall) giải thích; các bước sau đưa dữ kiện cho từng ý.',
      en: 'Despite protests from its neighbours and an international ruling, Beijing does not back down in the East Sea. Why? Stand in Beijing and look out to sea. The five points below are how geopolitical analysts (such as Tim Marshall) explain it; the next steps give the facts for each point.'
    },
    chain: [
      {
        tag: 'need',
        head: { vi: 'Trung Quốc sống nhờ đường biển.', en: 'China lives off the sea lanes.' },
        text: {
          vi: 'Hàng hóa đi ra, dầu khí đi vào, phần lớn bằng tàu. Riêng qua eo Malacca, năm 2024 có gần 963 tỷ USD hàng hóa của Trung Quốc (CSIS). Đường biển nghẽn thì nền kinh tế nghẹt.',
          en: 'Goods go out and oil and gas come in, mostly by ship. Through the Strait of Malacca alone, nearly $963 billion of China’s trade passed in 2024 (CSIS). Block the sea lanes and the economy chokes.'
        }
      },
      {
        tag: 'blocked',
        head: { vi: 'Nhưng lối nào ra biển cũng phải qua “cửa hẹp”.', en: 'But every way out runs through a narrow door.' },
        text: {
          vi: 'Phía đông là một vòng cung đảo: Nhật Bản và Philippines là đồng minh của Mỹ, Đài Loan mua vũ khí của Mỹ. Phía nam là eo Malacca, chỗ hẹp nhất chỉ khoảng 3 km. Các nhà phân tích nói: nếu có chiến tranh, những cửa này có thể bị khóa.',
          en: 'To the east lies an arc of islands: Japan and the Philippines are US allies, and Taiwan buys US weapons. To the south is the Strait of Malacca, only about 3 km wide at its narrowest. Analysts say that in a war these doors could be shut.'
        }
      },
      {
        tag: 'move',
        head: { vi: 'Vì thế Biển Đông thành vùng biển phải nắm.', en: 'So the East Sea becomes the sea to hold.' },
        text: {
          vi: 'Nó nằm ngay trước cửa nhà Trung Quốc, giữa các lối ra. Theo các nhà phân tích, Bắc Kinh muốn nắm nó, hoặc ít nhất không để ai khác nắm: vẽ đường chín đoạn, đắp đảo nhân tạo, xây đường băng. Bắc Kinh thì nói họ chỉ bảo vệ chủ quyền và tự do hàng hải cho mọi nước.',
          en: 'It sits right at China’s front door, between the exits. Analysts say Beijing wants to hold it, or at least keep anyone else from holding it: drawing the nine-dash line, building artificial islands and airstrips. Beijing says it is only protecting its sovereignty and freedom of navigation for all.'
        }
      },
      {
        tag: 'counter',
        head: { vi: 'Nhưng đó cũng là biển của người khác.', en: 'But it is also other people’s sea.' },
        text: {
          vi: 'Việt Nam, Philippines, Malaysia, Indonesia sống nhờ chính vùng biển này: cá, dầu, khí. Hoàng Sa và Trường Sa là của Việt Nam, dù Trung Quốc chiếm toàn bộ Hoàng Sa từ năm 1974. Luật biển quốc tế (UNCLOS) chia biển theo khoảng cách từ bờ, không theo lịch sử hay sức mạnh. Năm 2016, tòa trọng tài kết luận đường chín đoạn không có cơ sở pháp lý; Bắc Kinh bác phán quyết. Mỹ thì lo một cường quốc nắm cả tuyến hàng hải bận rộn bậc nhất thế giới.',
          en: 'Vietnam, the Philippines, Malaysia and Indonesia live off this same sea: fish, oil, gas. The Paracels (Hoàng Sa) and Spratlys (Trường Sa) belong to Vietnam, although China has held all of the Paracels since 1974. The law of the sea (UNCLOS) divides the sea by distance from the coast, not by history or strength. In 2016 a tribunal concluded the nine-dash line has no legal basis; Beijing rejects the ruling. The US worries about one power holding one of the world’s busiest shipping routes.'
        }
      },
      {
        tag: 'outlook',
        head: { vi: 'Hai nỗi sợ, một vùng biển.', en: 'Two fears, one sea.' },
        text: {
          vi: 'Bắc Kinh sợ bị nhốt. Các nước xung quanh sợ bị lấn. Với cả hai phía, đây là chuyện an ninh chứ không chỉ là chuyện cá hay dầu, nên căng thẳng khó tự hết.',
          en: 'Beijing fears being shut in. Its neighbours fear being pushed out. For both, this is about security, not just fish or oil, so the tension does not easily fade.'
        }
      }
    ],
    ll: [116, 17],
    k: 2.6,
    layers: [],
    show: ['firstchain', 'malacca', 'luzon', 'taiwanstrait', 'biendong', 'ninedash'],
    hl: { China: '#D9A441', Japan: '#378ADD', Philippines: '#378ADD', 'South Korea': '#378ADD', Taiwan: '#6B8F9C', Vietnam: '#E24B4A' },
    dim: true,
    draw: [
      { k: 'pt', p: [126.5, 25.2], c: '#D9383A', r: 5, label: { vi: 'cửa Miyako', en: 'Miyako exit' }, dy: 0 },
      { k: 'label', p: [113.5, 14.5], c: '#8A5A00', label: { vi: 'Biển Đông: vùng biển gần nhất Bắc Kinh có thể nắm', en: 'East Sea: the nearest sea Beijing can hold' }, dy: 0 }
    ],
    key: [{ c: '#D9383A', vi: 'Các cửa ra có thể bị khóa trong chiến tranh (theo lập luận của các nhà phân tích)', en: 'Exits that could be closed in a war (analysts’ argument)' }],
    src: [0, 15, 16, 17, 21, 5, 6]
  },
  // Plain-language text and core for the story's own six steps (same order), applied before the opener is inserted.
  texts: [
    {
      vi: 'Biển Đông nằm giữa Đông Nam Á và Đông Á, gần như được đất liền và đảo bao quanh. Phía tây nam, eo Malacca mở ra Ấn Độ Dương. Phía bắc, eo Đài Loan và eo Luzon mở ra biển Hoa Đông và Thái Bình Dương. Vì thế rất nhiều hàng hóa và năng lượng của Đông Á đi qua đây.',
      en: 'The East Sea (South China Sea) lies between Southeast and East Asia, almost ringed by land and islands. To the southwest, the Strait of Malacca opens to the Indian Ocean. To the north, the Taiwan and Luzon straits open to the East China Sea and the Pacific. So a great deal of East Asia’s trade and energy passes through here.'
    },
    {
      vi: 'Quanh Biển Đông có Việt Nam, Trung Quốc, Đài Loan, Philippines, Malaysia, Brunei và Indonesia. Luật biển quốc tế (UNCLOS, 1982) cho mỗi nước ven biển một vùng đặc quyền kinh tế (EEZ) rộng tới 200 hải lý (khoảng 370 km), tính từ đường cơ sở. Nhưng nhiều chỗ trên Biển Đông hẹp chưa tới 400 hải lý. Vậy là vùng của nước này đè lên vùng của nước kia.',
      en: 'Vietnam, China, Taiwan, the Philippines, Malaysia, Brunei and Indonesia all sit around the sea. The law of the sea (UNCLOS, 1982) gives each coastal state an exclusive economic zone (EEZ) of up to 200 nautical miles (about 370 km), measured from its baselines. But in many places the sea is less than 400 nautical miles wide. So one country’s zone runs into another’s.'
    },
    {
      vi: 'Trên bản đồ của mình, Trung Quốc vẽ một đường gồm nhiều đoạn gạch, gọi là “đường chín đoạn”, bao lấy phần lớn Biển Đông. Philippines kiện Trung Quốc ra một tòa trọng tài lập theo UNCLOS. Ngày 12/7/2016, tòa kết luận Trung Quốc không có cơ sở pháp lý để đòi “quyền lịch sử” với tài nguyên ở vùng biển bên trong đường này. Tòa không phân xử ai làm chủ các đảo.',
      en: 'On its maps China draws a line of dashes, the “nine-dash line”, around most of the sea. The Philippines took China to an arbitral tribunal set up under UNCLOS. On 12 July 2016 the tribunal concluded there was no legal basis for China to claim “historic rights” to resources in the waters inside the line. It did not decide who owns the islands.'
    },
    {
      vi: 'Hoàng Sa và Trường Sa là của Việt Nam. Trung Quốc và Đài Loan cũng tuyên bố chủ quyền với hai quần đảo này. Từ trận hải chiến với hải quân Việt Nam Cộng hòa tháng 1/1974, Trung Quốc kiểm soát toàn bộ Hoàng Sa. Ở Trường Sa, nhiều bên đóng giữ các đảo, đá, bãi ngầm và đã bồi đắp, xây dựng trên chỗ mình giữ; Trung Quốc có ba đường băng ở Chữ Thập, Xu Bi và Vành Khăn.',
      en: 'The Paracels (Hoàng Sa) and the Spratlys (Trường Sa) belong to Vietnam. China and Taiwan also claim sovereignty over both groups. Since a naval battle with the Republic of Vietnam’s navy in January 1974, China has controlled all of the Paracels. In the Spratlys several parties hold islands, reefs and banks and have built up the features they hold; China has three airstrips, at Fiery Cross, Subi and Mischief reefs.'
    },
    {
      vi: 'Va chạm hay xảy ra nhất quanh các bãi cạn, nơi tàu hải cảnh, tàu cá và tàu tiếp tế chạm mặt nhau. Dưới đây chỉ là những vụ có ngày tháng rõ ràng. Mỗi bên kể một kiểu, và lời phía Trung Quốc không phải lúc nào cũng kiểm chứng độc lập được.',
      en: 'Clashes happen most around shoals, where coast guard, fishing and resupply ships run into each other. Below are only incidents with clear dates. Each side tells them its own way, and Chinese statements could not always be independently verified.'
    },
    {
      vi: 'ASEAN và Trung Quốc đàm phán một Bộ quy tắc ứng xử (COC) ở Biển Đông từ năm 2013. Trước đó, năm 2002, đã có Tuyên bố DOC, nhưng văn bản này không ràng buộc. Mục tiêu là xong trong năm 2026, nhưng đến 8/11/2026 chưa có tin nào cho biết COC đã được ký. Ba điểm vẫn chưa thống nhất: áp dụng cho vùng biển nào, có ràng buộc pháp lý không, và thi hành ra sao.',
      en: 'ASEAN and China have been negotiating a Code of Conduct (COC) for the sea since 2013. Before that came the 2002 Declaration (DOC), which is not binding. The target is to finish in 2026, but as of 8 Nov 2026 no report says the COC has been signed. Three points are still open: which waters it covers, whether it is legally binding, and how it is enforced.'
    }
  ],
  cores: [
    {
      vi: 'Các nhà phân tích như Tim Marshall cho rằng Bắc Kinh coi chuỗi đảo thứ nhất là bức tường chắn trước mặt, nên thấy cần nắm Biển Đông, hoặc ít nhất không để nước khác nắm. Bắc Kinh thì nói họ bảo vệ an ninh các tuyến hàng hải và ủng hộ tự do hàng hải, tự do bay cho mọi nước (Sách trắng quốc phòng 2019). CSIS (2026) thêm một giới hạn: Trung Quốc dựa vào eo Đài Loan nhiều hơn eo Malacca, và tàu vẫn có thể đi vòng qua eo Sunda, Lombok hay Makassar, chỉ chậm và tốn kém hơn.',
      en: 'Analysts such as Tim Marshall argue that Beijing sees the first island chain as a wall in front of China, so it sees a need to hold the East Sea, or at least to keep others from holding it. Beijing says it safeguards the security of sea lanes and upholds freedom of navigation and overflight for all countries (2019 defence white paper). CSIS (2026) adds a limit: China depends more on the Taiwan Strait than on Malacca, and ships can still go around through the Sunda, Lombok or Makassar straits, only more slowly and at a higher cost.'
    },
    {
      vi: 'Vì các vùng chồng lên nhau, chỗ biển một nước cần để đánh cá, khai thác dầu khí lại nằm trong yêu sách của nước khác, kể cả yêu sách của Trung Quốc; EIA ghi nhận chính tranh chấp khiến vùng biển này còn ít được thăm dò. Hà Nội nói UNCLOS 1982 là cơ sở pháp lý duy nhất xác định đầy đủ các quyền trên biển (Bộ Ngoại giao, 12/7/2026), tức là tính vùng biển theo khoảng cách từ bờ, không theo lịch sử hay sức mạnh. Mỹ và Trung Quốc còn đọc luật này khác nhau: theo CRS, Mỹ cho rằng nước ven biển không được quản lý hoạt động quân sự của nước khác trong EEZ của mình, còn một số quan chức Trung Quốc phản đối tự do hàng hải cho hoạt động quân sự, nên tranh cãi còn là chuyện tàu chiến được đi đâu.',
      en: 'Because the zones overlap, the waters one state needs for fishing and for oil and gas sit inside another state’s claim, China’s included; the EIA notes that the disputes themselves leave the sea underexplored. Hanoi says UNCLOS 1982 is the sole legal basis that comprehensively defines maritime entitlements (foreign ministry, 12 Jul 2026), meaning a zone is measured by distance from the coast, not by history or strength. The US and China also read the law differently: according to the CRS, the US holds that coastal states cannot regulate other states’ military activity in their EEZ, while some Chinese officials oppose freedom of navigation for military activity, so the dispute is also about where warships may go.'
    },
    {
      vi: 'Bắc Kinh nói gốc của vụ việc là chủ quyền đối với các đảo, nằm ngoài UNCLOS, và Trung Quốc có “quyền lịch sử” ở Biển Đông; vì vậy họ không tham gia vụ kiện và coi phán quyết là vô hiệu (Bộ Ngoại giao Trung Quốc, 7/12/2014 và 12/7/2016). Nhưng tòa đã bác lập luận thiếu thẩm quyền đó, và phán quyết là chung thẩm, ràng buộc pháp lý với cả hai bên (CRS); Manila gọi phán quyết là phần không thể bác bỏ của luật quốc tế (23/6/2026), còn Mỹ ngày 13/7/2020 đã điều chỉnh lập trường theo phán quyết (ASIL). Điều được đặt cược là: nếu đường chín đoạn có giá trị pháp lý, phần lớn biển thuộc Trung Quốc; nếu không, phần của Trung Quốc được tính theo bờ biển như mọi nước khác, còn EEZ của các nước ven biển khác là của họ.',
      en: 'Beijing says the heart of the case is sovereignty over the islands, which lies outside UNCLOS, and that China has “historic rights” in the sea; so it stayed out of the case and calls the award null and void (China’s foreign ministry, 7 Dec 2014 and 12 Jul 2016). But the tribunal rejected that jurisdiction argument, and the award is final and legally binding on both parties (CRS); Manila calls it an unassailable part of international law (23 Jun 2026), and on 13 Jul 2020 the United States aligned its position with the award (ASIL). What is at stake: if the line had legal weight, most of the sea would be China’s; if not, China’s share is measured from its coast like any other state’s, and the other coastal states’ EEZs are theirs.'
    },
    {
      vi: 'Theo Điều 121(3), đá không có EEZ, nên một thực thể được tính là đảo hay đá sẽ quyết định có bao nhiêu biển đi kèm. Bắc Kinh nói xây hạ tầng và bố trí năng lực phòng thủ cần thiết trên các đảo, đá là thực thi chủ quyền của mình (Sách trắng 2019); các nhà phân tích (CRS) thì cho rằng các đường băng có thể giúp kiểm soát đánh cá, thăm dò năng lượng, gây sức ép lên láng giềng, và là một phần của năng lực giữ lực lượng Mỹ ở ngoài chuỗi đảo thứ nhất. Hà Nội nói Việt Nam có đủ bằng chứng lịch sử và cơ sở pháp lý về chủ quyền Hoàng Sa, và đề nghị Trung Quốc tôn trọng chủ quyền, quyền chủ quyền, quyền tài phán của Việt Nam theo UNCLOS cùng hoạt động hợp pháp của ngư dân (Bộ Ngoại giao, 5/5/2026).',
      en: 'Under Article 121(3) rocks get no EEZ, so whether a feature counts as an island or a rock decides how much sea comes with it. Beijing says building infrastructure and deploying necessary defensive capabilities on the islands and reefs is an exercise of its sovereignty (2019 white paper); analysts (CRS) say the airstrips could help control fishing and energy exploration, pressure neighbours, and form part of a capability to keep US forces outside the first island chain. Hanoi says Vietnam has sufficient historical evidence and legal grounds for sovereignty over the Paracels, and asks China to respect Vietnam’s sovereignty, sovereign rights and jurisdiction under UNCLOS and its fishermen’s lawful activities (foreign ministry, 5 May 2026).'
    },
    {
      vi: 'CRS mô tả cách làm của Trung Quốc là nhiều bước nhỏ bằng hải cảnh và dân quân biển, bước nào cũng chưa đủ thành lý do khai chiến (“cắt lát salami”, “vùng xám”); một bài báo năm 2022 được CRS trích gọi đó là nỗ lực tạo ra hiện trạng mới. Bắc Kinh nói phán quyết không ảnh hưởng đến quyền và chủ quyền của Trung Quốc (Bộ Ngoại giao Trung Quốc, 12/7/2016), tức là theo cách nhìn đó, tàu chấp pháp Trung Quốc đang thực thi quyền của chính nước mình. Manila và Hà Nội gọi chính những vụ đó là xâm phạm vùng biển của họ theo UNCLOS: tòa trọng tài đã kết luận Trung Quốc ngăn ngư dân Philippines đánh cá truyền thống ở bãi Scarborough, còn Việt Nam đòi tôn trọng quyền của ngư dân mình (5/5/2026).',
      en: 'The CRS describes China’s approach as many small steps by the coast guard and maritime militia, none of them enough on its own to be a reason for war (“salami-slicing”, “grey zone”); a 2022 press report it cites calls this an attempt to advance a new status quo. Beijing says the award does not affect China’s rights and sovereignty (China’s foreign ministry, 12 Jul 2016), which, on that view, means China’s law-enforcement ships are exercising China’s own rights. Manila and Hanoi call the same incidents violations of their zones under UNCLOS: the tribunal found that China had prevented Filipino fishermen from traditional fishing at Scarborough Shoal, and Vietnam asks that its fishermen’s rights be respected (5 May 2026).'
    },
    {
      vi: 'Các nước ASEAN gắn với Trung Quốc ở mức rất khác nhau; tháng 1/2026 các bộ trưởng ngoại giao muốn một COC “hiệu quả và thực chất”, phù hợp luật quốc tế, nhất là UNCLOS. Khảo sát ISEAS 2026 (ý kiến giới tinh hoa, không phải chính sách) cho thấy nếu buộc phải chọn, một đa số mỏng chọn Trung Quốc thay vì Mỹ, dù việc Trung Quốc lấn vào EEZ và thềm lục địa của các nước ven biển vẫn là mối lo hàng đầu ở Biển Đông. Theo một nhà phân tích được RFA trích, bộ quy tắc “mỏng” thì dễ đạt hơn, còn bộ có cơ chế thi hành hay trọng tài thì Bắc Kinh trước nay từ chối; Bắc Kinh nói họ thúc đẩy đàm phán COC và ưu tiên giải quyết tranh chấp bằng đàm phán với các nước trực tiếp liên quan (Sách trắng 2019).',
      en: 'ASEAN members are tied to China in very different degrees; in January 2026 their foreign ministers called for an “effective and substantive” COC consistent with international law, particularly UNCLOS. The ISEAS 2026 survey (elite opinion, not policy) found that, forced to choose, a slim majority picked China over the US, even though China’s encroachment into coastal states’ EEZs and continental shelves remained the top concern about the sea. According to an analyst quoted by RFA, a “thin” code is easier to agree, while one with enforcement or arbitration is something Beijing has historically rejected; Beijing says it promotes the COC talks and prefers to settle disputes through negotiation with the states directly concerned (2019 white paper).'
    }
  ]
};
