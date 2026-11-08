// The strategic logic ('core') of each step of story_biendong.js: needs, fears and options of the actors, attributed and sourced.
// Merged into the story by withCore() in stories.js. It is an interpretation, kept apart from the facts.
export const CORE = {
  "sources": [
    {
      "n": "CRS R42784, U.S.-China Strategic Competition in South and East China Seas (current version on EveryCRSReport; latest listed 1/5/2025)",
      "url": "https://www.everycrsreport.com/reports/R42784.html"
    },
    {
      "n": "CSIS, Troubled Straits (1/7/2026)",
      "url": "https://www.csis.org/analysis/south-china-sea-trade-chokepoints"
    },
    {
      "n": "NATO DEEP Dive podcast ep. 1, Tim Marshall interview (11/2021)",
      "url": "https://deepportal.hq.nato.int/eacademy/?p=960"
    },
    {
      "n": "China MFA, Statement on territorial sovereignty and maritime rights and interests in the South China Sea (12/7/2016)",
      "url": "https://www.fmprc.gov.cn/nanhai/eng/snhwtlcwj_1/201607/t20160712_8527297.htm"
    },
    {
      "n": "China MFA, Statement on the award of the arbitral tribunal (12/7/2016)",
      "url": "https://www.fmprc.gov.cn/eng/wjb/zzjg_663340/bianhaisi_eng_665278/plpbo/202405/t20240530_11324662.html"
    },
    {
      "n": "China MFA, Position Paper on jurisdiction in the South China Sea arbitration (7/12/2014)",
      "url": "https://www.fmprc.gov.cn/nanhai/eng/snhwtlcwj_1/201606/t20160602_8527277.htm"
    },
    {
      "n": "China, National Defense in the New Era white paper (7/2019), full text via A. Erickson",
      "url": "https://www.andrewerickson.com/2019/07/full-text-of-defense-white-paper-chinas-national-defense-in-the-new-era-english-chinese-versions/"
    },
    {
      "n": "CIMSEC, Becoming a Great Maritime Power (quotes Hu Jintao's 18th Party Congress report, 11/2012)",
      "url": "https://cimsec.org/?p=26671"
    },
    {
      "n": "National Maritime Foundation, China's Mantra for Great Maritime Powerhood (quotes Xi's 20th Party Congress report, 16/10/2022)",
      "url": "https://maritimeindia.org/chinas-mantra-for-great-maritime-powerhood-president-xis-speech-at-20th-npc-sets-the-agenda/"
    },
    {
      "n": "ASIL, US announces position on South China Sea maritime claims (summary of State Dept statement, 13/7/2020)",
      "url": "https://asil.org/ilib/us-announces-position-south-china-sea-maritime-claims/"
    },
    {
      "n": "Viet Nam News (12/7/2026, Vietnam MOFA spokeswoman on the 10th anniversary of the award)",
      "url": "https://vietnamnews.vn/politics-laws/1785274/viet-nam-reiterates-stance-on-settling-maritime-disputes-in-line-with-international-law.html"
    },
    {
      "n": "Viet Nam News (5/5/2026, Vietnam MOFA spokeswoman on Hoang Sa and China's fishing ban)",
      "url": "https://vietnamnews.vn/politics-laws/1780717/viet-nam-calls-on-china-to-respect-sovereignty-over-hoang-sa.html"
    },
    {
      "n": "VietnamNet (13/7/2026, Vietnam MOFA on UNCLOS and freedom of navigation)",
      "url": "https://vietnamnet.vn/en/vietnam-reaffirms-unclos-stance-on-east-sea-ruling-anniversary-2535202.html"
    },
    {
      "n": "Vietnam Government News (15/7/2020, Vietnam MOFA response to the US position)",
      "url": "https://en.baochinhphu.vn/viet-nams-response-to-us-secretary-of-states-position-on-east-sea-11138717.htm"
    },
    {
      "n": "DZRH (23/6/2026, Philippines DFA statement rejecting China's embassy on the award)",
      "url": "https://www.dzrh.com.ph/post/dfa-rejects-chinese-embassy-claims-arbitral-award-is-not-and-will-never-be-illegal-null-and-void"
    },
    {
      "n": "Philippine Embassy Canberra (13/7/2026, 10th anniversary of the award)",
      "url": "https://philembassy.org.au/latest/news/ph-embassy-in-canberra-joins-commemoration-of-the-10th-year-anniversary-of-the-2016-south-china-sea-arbitration-award"
    },
    {
      "n": "ASEAN Foreign Ministers' Retreat press statement, Cebu (29/1/2026), via nghiencuubiendong.vn",
      "url": "https://en.nghiencuubiendong.vn/joint-statement-of-the-asean-foreign-ministers-retreat-amm-retreat-2026-several-key-points.56941.anews"
    },
    {
      "n": "RFA (24/4/2026, COC and analysts)",
      "url": "https://www.rfa.org/english/southchinasea/2026/04/24/asean-south-china-sea-code-of-conduct-philippines/"
    },
    {
      "n": "ISEAS, State of Southeast Asia 2026 Survey (e-launch page, 4/2026)",
      "url": "https://www.iseas.edu.sg/?p=82783"
    },
    {
      "n": "US EIA, South China Sea (page updated 21/3/2024)",
      "url": "https://www.eia.gov/international/content/analysis/regions_of_interest/South_China_Sea/"
    },
    {
      "n": "GMA News (12/7/2016, findings of the PCA tribunal)",
      "url": "https://www.gmanetwork.com/news/news/nation/573371/int-l-tribunal-invalidates-china-s-nine-dash-line-massive-claims/story"
    }
  ],
  "steps": [
    {
      "core": {
        "vi": "Giới phân tích như Tim Marshall cho rằng Bắc Kinh nhìn chuỗi đảo thứ nhất như một bức tường chắn trước mặt Trung Quốc; CRS mô tả chuỗi đảo này bao quanh toàn bộ vùng biển gần của Trung Quốc (Biển Đông, biển Hoa Đông, Hoàng Hải), còn Biển Đông nằm giữa các lối thoát ở phía bắc (eo Đài Loan, eo Luzon) và phía tây nam (eo Malacca). Theo CSIS, Bắc Kinh lo ngại từ cảnh báo năm 2003 của ông Hồ Cẩm Đào về việc các “cường quốc” muốn kiểm soát Malacca, và một cuộc xung đột có Mỹ tham gia có thể làm gián đoạn eo này; vì vậy một cách đọc phổ biến trong giới phân tích là kiểm soát Biển Đông, hoặc ít nhất không để nước khác kiểm soát, được xem là cần thiết về chiến lược. Đây là cách đọc của giới phân tích, không phải lời Bắc Kinh tự nêu: Sách trắng quốc phòng 2019 nói Trung Quốc bảo vệ an ninh các tuyến hàng hải và ủng hộ tự do hàng hải, tự do bay của mọi nước. CSIS (2026) thêm một giới hạn: Trung Quốc phụ thuộc vào eo Đài Loan nhiều hơn vào Malacca, và có thể đi vòng qua eo Sunda, Lombok hay Makassar dù chậm và tốn kém, nên “thế khó Malacca” có thật nhưng không tuyệt đối.",
        "en": "Analysts such as Tim Marshall argue that Beijing sees the first island chain as a wall in front of China; the CRS describes that chain as enclosing China’s near seas (the South China Sea, East China Sea and Yellow Sea), with the South China Sea sitting between the exits to the north (Taiwan and Luzon straits) and to the southwest (Malacca). CSIS notes that Beijing has feared a Malacca squeeze since Hu Jintao’s 2003 warning about “major powers” seeking to control the strait, and that a US-involved conflict could disrupt it; so a common analytical reading is that controlling the South China Sea, or at least denying it to others, looks strategically necessary from Beijing. That is the analysts’ reading, not Beijing’s own wording: China’s 2019 defence white paper says China safeguards the security of sea lanes and upholds freedom of navigation and overflight for all countries. CSIS (2026) adds a limit: China depends more on the Taiwan Strait than on Malacca, and ships can be rerouted via the Sunda, Lombok or Makassar straits, slowly and at a cost, so the “Malacca dilemma” is real but not absolute."
      },
      "src": [
        0,
        1,
        2,
        6
      ]
    },
    {
      "core": {
        "vi": "Vì các vùng đặc quyền kinh tế chồng lấn, vùng biển mà một nước cần để đánh cá và khai thác dầu khí đồng thời nằm trong yêu sách của nước khác, nên nhu cầu tài nguyên của Việt Nam, Philippines, Malaysia, Indonesia va vào nhau và va vào yêu sách của Trung Quốc; EIA ghi nhận các nước ven biển đã khai thác dầu khí ở đây. EIA cũng ghi nhận vùng biển này còn ít được thăm dò vì tranh chấp lãnh thổ, tức là chính tranh chấp giữ cho tài nguyên chưa được khai thác đầy đủ. Việt Nam nói UNCLOS 1982 là cơ sở pháp lý duy nhất xác định đầy đủ các quyền biển (Bộ Ngoại giao, 12/7/2026): đó là quy tắc tính vùng biển theo khoảng cách từ bờ, thay vì theo lịch sử hay sức mạnh hải quân. Điều khoản về EEZ cũng là chỗ Mỹ và Trung Quốc đọc khác nhau: theo CRS, Mỹ cho rằng nước ven biển không có quyền điều chỉnh hoạt động quân sự của nước khác trong EEZ, còn một số quan chức Trung Quốc phản đối tự do hàng hải cho hoạt động quân sự, nên tranh cãi cũng là về nơi tàu chiến được hoạt động chứ không chỉ về cá và dầu.",
        "en": "Because exclusive economic zones overlap, the waters one state needs for fishing and for oil and gas also sit inside another state’s claim, so the resource needs of Vietnam, the Philippines, Malaysia and Indonesia collide with one another and with China’s claim; the EIA records that coastal states already produce oil and gas here. The EIA also notes the sea is underexplored because of the territorial disputes, which means the dispute itself keeps the resources from being fully developed. Vietnam says UNCLOS 1982 is the sole legal basis that comprehensively defines maritime entitlements (foreign ministry, 12 Jul 2026): that is a rule that measures a state’s zone by distance from its coast rather than by history or naval strength. The EEZ articles are also where the US and China read the same text differently: according to the CRS, the US view is that coastal states cannot regulate other states’ military activity in their EEZ, while some Chinese officials oppose freedom of navigation for military activity, so the argument is also about where warships may operate, not only about fish and oil."
      },
      "src": [
        19,
        0,
        10
      ]
    },
    {
      "core": {
        "vi": "Bắc Kinh nói cốt lõi của vụ việc là chủ quyền đối với các đảo, nằm ngoài phạm vi UNCLOS, và khẳng định có “quyền lịch sử” ở Biển Đông (Bộ Ngoại giao Trung Quốc, 7/12/2014 và 12/7/2016); vì vậy Trung Quốc không tham gia vụ kiện, coi phán quyết là vô hiệu, không chấp nhận và không công nhận. Về mặt pháp lý, phán quyết thì khác: Tòa bác lập luận thiếu thẩm quyền, kết luận đường chín đoạn không có cơ sở pháp lý, và theo CRS phán quyết là chung thẩm, ràng buộc về pháp lý đối với cả hai bên; Bộ Ngoại giao Philippines (23/6/2026) gọi đó là một phần không thể bác bỏ của luật quốc tế. Mỹ, ngày 13/7/2020, điều chỉnh lập trường theo phán quyết và tuyên bố các yêu sách về tài nguyên ngoài khơi trên phần lớn Biển Đông là bất hợp pháp, nhưng không nêu lập trường về chủ quyền đối với các thực thể (ASIL; CRS). Điều đang bị đặt cược là: nếu đường chín đoạn có hiệu lực pháp lý thì phần lớn biển thuộc về Trung Quốc; nếu không, phần của Trung Quốc được tính theo bờ biển và các thực thể được công nhận như mọi nước khác, còn vùng EEZ của các nước ven biển còn lại là của họ.",
        "en": "Beijing says the heart of the matter is sovereignty over the islands, which it holds lies outside UNCLOS, and it asserts historic rights in the South China Sea (China’s foreign ministry, 7 Dec 2014 and 12 Jul 2016); hence it stayed out of the case and calls the award null and void, neither accepted nor recognised. In law the position is different: the tribunal rejected the argument that it lacked jurisdiction, found that the nine-dash line has no legal basis, and according to the CRS the award is final and legally binding on both parties; the Philippine foreign department (23 Jun 2026) calls it an unassailable part of international law. On 13 Jul 2020 the United States aligned its position with the award and said Beijing’s claims to offshore resources across most of the sea are unlawful, while taking no position on sovereignty over the features themselves (ASIL; CRS). What is at stake is this: if the line carried legal weight, most of the sea would be China’s; if it does not, China’s share is measured by its coast and by the features it is recognised to hold, like any other state’s, and the zones of the other coastal states are theirs."
      },
      "src": [
        5,
        3,
        4,
        14,
        20,
        0,
        9
      ]
    },
    {
      "core": {
        "vi": "Vì theo Điều 121(3) đá không có EEZ, việc ai giữ thực thể nào và thực thể đó được xem là gì quyết định bao nhiêu vùng biển đi kèm, nên các bên đều bám giữ và xây dựng trên những gì mình nắm. Bắc Kinh nói việc xây hạ tầng và bố trí năng lực phòng thủ cần thiết trên các đảo, đá là thực thi chủ quyền của mình (Sách trắng 2019), và mục tiêu nêu từ Đại hội XVIII (2012), nhắc lại năm 2022, là xây dựng Trung Quốc thành cường quốc biển và bảo vệ quyền, lợi ích biển (theo trích dẫn của CIMSEC và National Maritime Foundation). Giới phân tích (CRS) đọc những đường băng đó khác đi: chúng có thể giúp kiểm soát đánh cá, thăm dò năng lượng, gây sức ép lên các nước láng giềng, và là một phần của năng lực ngăn chặn tiếp cận (A2/AD) nhằm giữ lực lượng Mỹ ngoài chuỗi đảo thứ nhất. Việt Nam nêu lập trường khác: Bộ Ngoại giao nói nước này có đủ bằng chứng lịch sử và cơ sở pháp lý về chủ quyền Hoàng Sa, đề nghị Trung Quốc tôn trọng chủ quyền, quyền chủ quyền và quyền tài phán của Việt Nam theo UNCLOS cùng quyền hoạt động hợp pháp của ngư dân (5/5/2026).",
        "en": "Because rocks get no EEZ under Article 121(3), who holds a feature and what that feature counts as decides how much sea comes with it, so every claimant holds on to, and builds on, what it has. Beijing says that building infrastructure and deploying necessary defensive capabilities on the islands and reefs is an exercise of its sovereignty (2019 white paper), and its stated goal since the 18th Party Congress (2012), repeated in 2022, is to build China into a strong maritime power and safeguard its maritime rights and interests (as quoted by CIMSEC and the National Maritime Foundation). Analysts (CRS) read the same airstrips differently: they could help control fishing and energy exploration, pressure neighbours, and form part of an anti-access/area-denial capability meant to keep US forces outside the first island chain. Vietnam states another basis: its foreign ministry says it has sufficient historical evidence and legal grounds for sovereignty over the Paracels, and asks China to respect Vietnam’s sovereignty, sovereign rights and jurisdiction under UNCLOS and its fishermen’s lawful activities (5 May 2026)."
      },
      "src": [
        0,
        6,
        7,
        8,
        11
      ]
    },
    {
      "core": {
        "vi": "CRS mô tả cách tiếp cận của Trung Quốc là các bước nhỏ, từng bước không tự nó là lý do để khai chiến, dùng hải cảnh và dân quân biển (“cắt lát salami”, hoạt động vùng xám), và trích một bài báo năm 2022 gọi đó là nỗ lực tạo ra hiện trạng mới. Bắc Kinh nói quyền và chủ quyền của mình không bị phán quyết ảnh hưởng (Bộ Ngoại giao Trung Quốc, 12/7/2016), một lập trường hàm ý rằng hoạt động của lực lượng chấp pháp của họ là thực thi quyền của chính mình. Manila và Hà Nội gọi cùng những sự việc đó là xâm phạm vùng biển của họ theo UNCLOS: Philippines coi phán quyết là không thể bác bỏ (Bộ Ngoại giao, 23/6/2026), và Tòa đã kết luận Trung Quốc ngăn ngư dân Philippines đánh cá truyền thống ở bãi Scarborough; Việt Nam yêu cầu tôn trọng quyền của ngư dân mình (5/5/2026). Theo logic đó, mỗi sự việc đều nhỏ nhưng cộng dồn có thể đổi hiện trạng, nên các nước ven biển ghi nhận và phản đối từng sự việc bằng văn bản và bằng luật.",
        "en": "The CRS describes China’s approach as small steps, none of which by itself is a reason for war, using coast guard and maritime militia (“salami-slicing”, grey-zone operations), and cites a 2022 press report calling it an attempt to advance a new status quo. Beijing says its rights and sovereignty are unaffected by the award (China’s foreign ministry, 12 Jul 2016), a position that implies its law-enforcement activity is the exercise of its own rights. Manila and Hanoi call the same incidents violations of their zones under UNCLOS: the Philippines treats the award as unassailable (foreign department, 23 Jun 2026), and the tribunal found China had prevented Filipino fishermen from traditional fishing at Scarborough Shoal; Vietnam asks that its fishermen’s rights be respected (5 May 2026). On that logic each incident is small but together they can change the status quo, which is why the coastal states record and protest each one in writing and in law."
      },
      "src": [
        0,
        4,
        14,
        20,
        11
      ]
    },
    {
      "core": {
        "vi": "Các nước ASEAN có mức độ tiếp xúc và quan hệ với Trung Quốc rất khác nhau; tháng 1/2026 các bộ trưởng nêu mục tiêu một COC “hiệu quả và thực chất”, phù hợp luật quốc tế, đặc biệt là UNCLOS, và lo ngại về bồi đắp đảo và các sự cố nghiêm trọng. Khảo sát ISEAS 2026 (ý kiến giới tinh hoa, không phải chính sách chính phủ) cho thấy khi buộc chọn giữa Mỹ và Trung Quốc, một đa số mỏng chọn Trung Quốc, trong khi việc Trung Quốc lấn vào EEZ và thềm lục địa của các nước ven biển vẫn là mối lo hàng đầu ở Biển Đông; một cách đọc hợp lý là các nước muốn có luật lệ để kiềm chế nhưng cần cả kinh tế Trung Quốc lẫn vai trò an ninh của Mỹ, nên tránh chọn phe. Từ đó có một đánh đổi: theo nhà phân tích trích trong RFA, một bộ quy tắc “mỏng” dễ đạt được hơn, còn một bộ có cơ chế thi hành hoặc trọng tài thì Bắc Kinh trước nay từ chối. Phía Trung Quốc nói họ thúc đẩy đàm phán COC và ưu tiên giải quyết tranh chấp bằng đàm phán với các nước trực tiếp liên quan (Sách trắng 2019), chứ không qua trọng tài.",
        "en": "ASEAN’s members are exposed to China, and tied to it, in very different degrees; in January 2026 its foreign ministers set the aim of an “effective and substantive” COC consistent with international law, particularly UNCLOS, and voiced concern about land reclamation and serious incidents. The ISEAS 2026 survey (elite opinion, not government policy) found that, forced to choose between the US and China, a slim majority picked China, while China’s encroachment into littoral states’ EEZs and continental shelves remained the top South China Sea concern; one reasonable reading is that these states want rules to constrain China but need both China’s economy and the US security role, so they avoid choosing sides. That produces a trade-off: according to an analyst quoted by RFA, a “thin” code is easier to agree, while a code with enforcement or arbitration is something Beijing has historically rejected. China says it promotes the COC talks and prefers to settle disputes through negotiation with the states directly concerned (2019 white paper), not through arbitration."
      },
      "src": [
        16,
        18,
        17,
        6,
        0
      ]
    }
  ],
  "bottom": {
    "vi": "Theo cách đọc của giới phân tích, mỗi bên nhìn cùng một tấm bản đồ qua nỗi lo riêng: Bắc Kinh lo bị chặn ở các lối ra, Mỹ và các nước ven biển lo một Biển Đông do một nước kiểm soát; UNCLOS và phán quyết 2016 là thước đo chung, nhưng vì Trung Quốc không chấp nhận phán quyết nên khoảng cách giữa hai cách đọc vẫn còn.",
    "en": "On the analysts’ reading, each side looks at the same map through its own fear: Beijing of being shut in at its exits, the US and the coastal states of a sea controlled by one power; UNCLOS and the 2016 award are the common yardstick, but because China does not accept the award, the gap between the two readings remains."
  }
};
