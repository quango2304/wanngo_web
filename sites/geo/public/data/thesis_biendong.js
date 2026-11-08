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
      "vi": "Biển Đông gần như bị đất liền và đảo bao quanh, chỉ thông ra ngoài qua vài cửa: eo Malacca ở phía tây nam dẫn ra Ấn Độ Dương, eo Đài Loan và eo Luzon ở phía bắc dẫn ra Thái Bình Dương. Hàng hóa và năng lượng của cả Đông Á đổ qua mấy cửa ấy. Theo cách nhìn của các nhà phân tích như Tim Marshall, Bắc Kinh coi chuỗi đảo phía đông là bức tường chắn trước mặt, nên vùng biển này càng phải nắm, hoặc ít nhất không để ai khác nắm. Bắc Kinh thì nói họ chỉ bảo vệ an ninh tuyến biển và tự do hàng hải, tự do bay cho mọi nước (Sách trắng quốc phòng 2019). Nhưng cũng có giới hạn: theo CSIS (2026), Trung Quốc dựa vào eo Đài Loan nhiều hơn eo Malacca, và tàu vẫn có thể đi vòng qua eo Sunda, Lombok hay Makassar, chỉ chậm và tốn kém hơn.",
      "en": "The East Sea is almost ringed by land and islands, open to the world through only a few doors: the Strait of Malacca to the southwest, leading to the Indian Ocean, and the Taiwan and Luzon straits to the north, leading to the Pacific. East Asia’s goods and energy pour through those doors. In the view of analysts such as Tim Marshall, Beijing sees the island chain to its east as a wall in front of it, which makes this sea all the more important to hold, or at least to keep others from holding. Beijing says it only protects the security of sea lanes and freedom of navigation and overflight for all (2019 defence white paper). There is a limit, though: according to CSIS (2026), China depends more on the Taiwan Strait than on Malacca, and ships can still go round through the Sunda, Lombok or Makassar straits, only slower and at greater cost."
    },
    {
      "vi": "Bảy bờ biển cùng nhìn ra vùng biển này: Việt Nam, Trung Quốc, Đài Loan, Philippines, Malaysia, Brunei và Indonesia. Luật biển quốc tế (UNCLOS, 1982) cho mỗi nước ven biển một vùng đặc quyền kinh tế (EEZ) rộng tới 200 hải lý (khoảng 370 km), tính từ đường cơ sở. Nhưng nhiều chỗ trên Biển Đông hẹp chưa tới 400 hải lý, nên vùng của nước này đè lên vùng của nước kia: chỗ một nước cần để đánh cá, khai thác dầu khí lại nằm trong yêu sách của nước khác. Theo EIA, chính tranh chấp khiến vùng biển này còn ít được thăm dò. Hà Nội nói UNCLOS 1982 là cơ sở pháp lý duy nhất về các vùng biển, tức tính biển theo khoảng cách từ bờ chứ không theo lịch sử hay sức mạnh (Bộ Ngoại giao, 12/7/2026). Mỹ và Trung Quốc còn đọc luật khác nhau về tàu chiến: theo CRS, Mỹ cho rằng nước ven biển không được quản lý hoạt động quân sự của nước khác trong EEZ, còn một số quan chức Trung Quốc phản đối điều đó.",
      "en": "Seven coasts look out on this sea: Vietnam, China, Taiwan, the Philippines, Malaysia, Brunei and Indonesia. The law of the sea (UNCLOS, 1982) gives each coastal state an exclusive economic zone (EEZ) of up to 200 nautical miles (about 370 km) from its baselines. But much of the East Sea is narrower than 400 nautical miles, so one country’s zone runs into another’s: the water one state needs for fishing, oil and gas lies inside another state’s claim. According to the EIA, the dispute itself keeps this sea underexplored. Hanoi says UNCLOS 1982 is the sole legal basis for maritime zones, which measures the sea by distance from the coast rather than by history or strength (foreign ministry, 12 Jul 2026). The US and China also read the law differently on warships: according to CRS, the US holds that coastal states cannot regulate other states’ military activity in their EEZ, while some Chinese officials oppose that."
    },
    {
      "vi": "Trên bản đồ của mình, Trung Quốc vẽ một đường gồm nhiều đoạn gạch bao lấy phần lớn Biển Đông, gọi là “đường chín đoạn”. Philippines kiện ra một tòa trọng tài lập theo UNCLOS. Ngày 12/7/2016, tòa kết luận Trung Quốc không có cơ sở pháp lý để đòi “quyền lịch sử” với tài nguyên bên trong đường này; tòa không phân xử ai làm chủ các đảo. Phán quyết là chung thẩm và ràng buộc pháp lý với cả hai bên (CRS). Bắc Kinh không tham gia vụ kiện, nói gốc của vấn đề là chủ quyền các đảo, nằm ngoài UNCLOS, và coi phán quyết là vô hiệu (Bộ Ngoại giao Trung Quốc, 7/12/2014 và 12/7/2016). Manila gọi phán quyết là phần không thể bác bỏ của luật quốc tế (23/6/2026), còn Mỹ từ ngày 13/7/2020 đã điều chỉnh lập trường theo phán quyết (ASIL). Cái được đặt cược rất lớn: nếu đường chín đoạn có giá trị pháp lý, phần lớn vùng biển thuộc về Trung Quốc; nếu không, phần của Trung Quốc được tính theo bờ biển như mọi nước, còn EEZ của các nước ven biển là của họ.",
      "en": "On its maps China draws a line of dashes around most of the East Sea, the “nine-dash line”. The Philippines took China to a tribunal set up under UNCLOS. On 12 July 2016 the tribunal concluded that China has no legal basis to claim “historic rights” to resources inside the line; it did not rule on who owns the islands. The award is final and legally binding on both parties (CRS). Beijing stayed out of the case, says the heart of the matter is sovereignty over the islands, which lies outside UNCLOS, and calls the award null and void (Chinese foreign ministry, 7 Dec 2014 and 12 Jul 2016). Manila calls the award an unassailable part of international law (23 Jun 2026), and since 13 July 2020 the US has aligned its position with it (ASIL). The stakes are large: if the line carried legal weight, most of the sea would be China’s; if it does not, China’s share is measured from its coast like anyone else’s, and the coastal states’ EEZs are theirs."
    },
    {
      "vi": "Hoàng Sa và Trường Sa là của Việt Nam. Trung Quốc và Đài Loan cũng tuyên bố chủ quyền với hai quần đảo này. Từ trận hải chiến với hải quân Việt Nam Cộng hòa tháng 1/1974, Trung Quốc kiểm soát toàn bộ Hoàng Sa; ở Trường Sa, nhiều bên đóng giữ các đảo, đá, bãi ngầm, rồi bồi đắp và xây dựng trên chỗ mình giữ. Vì sao ai cũng bám từng mỏm đá? Theo Điều 121(3) của UNCLOS, đá không có vùng đặc quyền kinh tế, nên một thực thể được tính là đảo hay đá sẽ quyết định có bao nhiêu biển đi kèm. Trung Quốc có ba đường băng ở Chữ Thập, Xu Bi và Vành Khăn. Bắc Kinh nói xây dựng ở đó là thực thi chủ quyền (Sách trắng 2019); theo CRS, các đường băng ấy có thể giúp kiểm soát đánh cá, thăm dò năng lượng, gây sức ép lên láng giềng và giữ lực lượng Mỹ ở ngoài chuỗi đảo thứ nhất. Hà Nội nói Việt Nam có đủ bằng chứng lịch sử và cơ sở pháp lý về chủ quyền Hoàng Sa, và đề nghị Trung Quốc tôn trọng chủ quyền của Việt Nam cùng hoạt động hợp pháp của ngư dân (Bộ Ngoại giao, 5/5/2026).",
      "en": "The Paracels (Hoàng Sa) and the Spratlys (Trường Sa) belong to Vietnam. China and Taiwan also claim both groups. Since the naval battle with the Republic of Vietnam’s navy in January 1974, China has controlled all of the Paracels; in the Spratlys several parties hold islands, reefs and banks, and have built up and built on what they hold. Why does everyone cling to every rock? Under Article 121(3) of UNCLOS a rock gets no exclusive economic zone, so whether a feature counts as an island or a rock decides how much sea comes with it. China has three airstrips, at Fiery Cross, Subi and Mischief reefs. Beijing says building there is an exercise of its sovereignty (2019 white paper); according to CRS, the airstrips could help control fishing and energy exploration, pressure neighbours and keep US forces outside the First Island Chain. Hanoi says Vietnam has ample historical evidence and legal grounds for its sovereignty over the Paracels, and asks China to respect Vietnam’s sovereignty and its fishermen’s lawful activities (foreign ministry, 5 May 2026)."
    },
    {
      "vi": "Va chạm hay xảy ra nhất quanh các bãi cạn, nơi tàu hải cảnh, tàu cá và tàu tiếp tế chạm mặt nhau. CRS mô tả cách làm của Trung Quốc là nhiều bước nhỏ bằng hải cảnh và dân quân biển, bước nào cũng chưa đủ thành lý do khai chiến; người ta gọi đó là “cắt lát salami” hay “vùng xám”. Bắc Kinh nói phán quyết không ảnh hưởng tới quyền và chủ quyền của Trung Quốc (Bộ Ngoại giao Trung Quốc, 12/7/2016), nên theo cách nhìn của họ, tàu Trung Quốc chỉ đang thực thi quyền của nước mình. Manila và Hà Nội gọi chính những vụ đó là xâm phạm vùng biển của họ theo UNCLOS: tòa trọng tài đã kết luận Trung Quốc ngăn ngư dân Philippines đánh cá truyền thống ở bãi Scarborough, còn Việt Nam đòi tôn trọng quyền của ngư dân mình (5/5/2026). Dưới đây là những vụ có ngày tháng rõ ràng; mỗi bên kể một kiểu, và lời phía Trung Quốc không phải lúc nào cũng kiểm chứng độc lập được.",
      "en": "Clashes happen most around the shoals, where coast guard ships, fishing boats and resupply vessels meet. CRS describes China’s approach as many small steps by its coast guard and maritime militia, none of them on its own a reason for war, known as “salami-slicing” or “grey-zone” tactics. Beijing says the award does not affect China’s rights and sovereignty (Chinese foreign ministry, 12 Jul 2016), so in its view its ships are simply exercising China’s own rights. Manila and Hanoi call the same incidents violations of their waters under UNCLOS: the tribunal found that China had kept Filipino fishermen from traditional fishing at Scarborough Shoal, and Vietnam asks that its fishermen’s rights be respected (5 May 2026). Below are only incidents with clear dates; each side tells them differently, and Chinese statements cannot always be independently checked."
    },
    {
      "vi": "ASEAN và Trung Quốc đàm phán một Bộ quy tắc ứng xử (COC) ở Biển Đông từ năm 2013; trước đó, năm 2002, chỉ có Tuyên bố DOC không ràng buộc. Mục tiêu là xong trong năm 2026, nhưng đến 8/11/2026 chưa có tin nào cho biết COC đã được ký. Ba điểm vẫn vướng: áp dụng cho vùng biển nào, có ràng buộc pháp lý không, và thi hành ra sao. Một phần vì các nước ASEAN gắn với Trung Quốc ở mức rất khác nhau. Tháng 1/2026 các bộ trưởng ngoại giao muốn một COC “hiệu quả và thực chất”, phù hợp luật quốc tế, nhất là UNCLOS; nhưng theo một nhà phân tích được RFA trích, bộ quy tắc “mỏng” thì dễ đạt, còn bộ có cơ chế thi hành hay trọng tài thì Bắc Kinh trước nay từ chối. Bắc Kinh nói họ thúc đẩy đàm phán và ưu tiên giải quyết tranh chấp với các nước trực tiếp liên quan (Sách trắng 2019). Khảo sát ISEAS 2026 cho thấy thế khó ấy: nếu buộc phải chọn, một đa số mỏng giới tinh hoa Đông Nam Á chọn Trung Quốc thay vì Mỹ, dù việc Trung Quốc lấn vào vùng biển của các nước ven biển vẫn là mối lo hàng đầu.",
      "en": "ASEAN and China have been negotiating a Code of Conduct (COC) for the East Sea since 2013; before that, in 2002, there was only the non-binding DOC declaration. The goal was to finish in 2026, but as of 8 Nov 2026 no report says the COC has been signed. Three points remain stuck: which waters it covers, whether it is legally binding, and how it is enforced. Part of the reason is that ASEAN members are tied to China to very different degrees. In January 2026 their foreign ministers called for an “effective and substantive” COC consistent with international law, especially UNCLOS; but according to an analyst quoted by RFA, a “thin” code is easier to reach, while one with enforcement or arbitration is something Beijing has always refused. Beijing says it promotes the talks and prefers to settle disputes with the countries directly concerned (2019 white paper). The ISEAS 2026 survey shows the bind: forced to choose, a slim majority of Southeast Asian elites picked China over the US, even though China’s encroachment into coastal states’ waters remains their top concern."
    }
  ],
  // the reasoning is now part of each text, so the separate core paragraph is dropped
  cores: [null, null, null, null, null, null]
};
