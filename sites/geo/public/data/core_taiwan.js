// The strategic logic ('core') of each step of story_taiwan.js: needs, fears and options of the actors, attributed and sourced.
// Merged into the story by withCore() in stories.js. It is an interpretation, kept apart from the facts.
export const CORE = {
  "sources": [
    {
      "n": "PRC State Council white paper “The Taiwan Question and China’s Reunification in the New Era” (10/8/2022; text via PRC Embassy in the US)",
      "url": "https://us.china-embassy.gov.cn/eng/zgyw/202208/t20220810_10740168.htm"
    },
    {
      "n": "Same white paper, CSIS Interpret translation (2022)",
      "url": "https://interpret.csis.org/translations/the-taiwan-question-and-chinas-reunification-in-the-new-era/"
    },
    {
      "n": "PRC defence white paper “China’s National Defense in the New Era” (24/7/2019; text via andrewerickson.com)",
      "url": "https://www.andrewerickson.com/2019/07/full-text-of-defense-white-paper-chinas-national-defense-in-the-new-era-english-chinese-versions/"
    },
    {
      "n": "Taiwan Relations Act, 22 U.S.C. ch. 48 §§3301–3302 (U.S. Code 2024, govinfo.gov)",
      "url": "https://www.govinfo.gov/content/pkg/USCODE-2024-title22/html/USCODE-2024-title22-chap48.htm"
    },
    {
      "n": "CRS IF11665, President Reagan’s Six Assurances to Taiwan (updated 4/8/2026)",
      "url": "https://www.everycrsreport.com/reports/IF11665.html"
    },
    {
      "n": "Statement of John Noh, Assistant Secretary of War, House Armed Services Committee, INDOPACOM posture (22/4/2026)",
      "url": "https://armedservices.house.gov/UploadedFiles/2026-04-22_INDOPACOM_Noh_Testimony.pdf"
    },
    {
      "n": "Taipei Times editorial on the 2026 US National Defense Strategy (9/3/2026)",
      "url": "https://www.taipeitimes.com/News/editorials/archives/2026/03/09/2003853480"
    },
    {
      "n": "Japan National Security Strategy (12/2022, provisional English translation, Cabinet Secretariat)",
      "url": "https://www.cas.go.jp/jp/siryou/221216anzenhoshou/nss-e.pdf"
    },
    {
      "n": "President Lai, National Day address (10/10/2024, Presidential Office of Taiwan)",
      "url": "https://english.president.gov.tw/News/6816"
    },
    {
      "n": "President Lai meets Global Taiwan Institute media delegation (31/3/2026, Presidential Office)",
      "url": "https://english.president.gov.tw/NEWS/7110"
    },
    {
      "n": "President Lai interviewed by The New York Times DealBook Summit (4/12/2025, Presidential Office)",
      "url": "https://english.president.gov.tw/NEWS/7052"
    },
    {
      "n": "Taipei Times, Lai’s second-anniversary address (20/5/2026)",
      "url": "https://www.taipeitimes.com/News/front/archives/2026/05/20/2003857669"
    },
    {
      "n": "Taipei Times, KMT chair Cheng Li-wun on the First Island Chain (11/5/2026)",
      "url": "https://www.taipeitimes.com/News/taiwan/archives/2026/05/11/2003857124"
    },
    {
      "n": "Tim Marshall, Prisoners of Geography (2015), China chapter, as excerpted on isegoria.net (3/12/2024)",
      "url": "https://www.isegoria.net/?p=52281"
    },
    {
      "n": "CRS RL33153, China Naval Modernization (2018 edition, everycrsreport.com)",
      "url": "https://www.everycrsreport.com/files/20180521_RL33153_db87003d60cad6e423a1883d875a2442d7e1c0c1.html"
    },
    {
      "n": "Pacific Forum PacNet 16, J. McBride (17/3/2025)",
      "url": "https://pacforum.org/publications/pacnet-16-taiwans-true-regional-and-existential-importance-outside-of-semiconductors/"
    },
    {
      "n": "CSIS, How China Could Quarantine Taiwan (5/6/2024)",
      "url": "https://www.csis.org/analysis/how-china-could-quarantine-taiwan-mapping-out-two-possible-scenarios"
    },
    {
      "n": "CSIS, The First Battle of the Next War (1/2023)",
      "url": "https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/230109_Cancian_FirstBattle_NextWar.pdf"
    },
    {
      "n": "Xinhua, Eastern Theater Command on Justice Mission 2025 (29/12/2025)",
      "url": "https://english.news.cn/20251229/e3cdf8d3c2d54314adb102b819277973/c.html"
    },
    {
      "n": "Taipei Times (8/11/2026), AEI and ISW assessment",
      "url": "https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351"
    },
    {
      "n": "AP via The Week, Marcos on the Philippines and Taiwan (11/8/2025)",
      "url": "https://www.theweek.in/wire-updates/international/2025/08/11/fgn10-philippines-marcos-china.html"
    },
    {
      "n": "The Defense Post, China’s defence ministry on containment (30/1/2026)",
      "url": "https://thedefensepost.com/2026/01/30/china-us-contain-fail"
    }
  ],
  "steps": [
    {
      "core": {
        "vi": "Bắc Kinh nói Đài Loan là một phần của Trung Quốc và vấn đề Đài Loan là công việc nội bộ liên quan đến lợi ích cốt lõi, và sách trắng năm 2022 mô tả hai bờ đối diện nhau chỉ qua một dải nước. Chính quyền Đài Bắc nói Trung Hoa Dân Quốc và Cộng hòa Nhân dân Trung Hoa “không trực thuộc nhau” (Tổng thống Lại Thanh Đức, 10/10/2024) và “tương lai của Đài Loan phải do 23 triệu người dân cùng quyết định” (ông Lại, 20/5/2026). Chính sách Mỹ tuyên bố không trùng với bên nào: theo CRS, Sáu Bảo đảm gồm việc Mỹ không làm trung gian và không gây áp lực buộc Đài Loan đàm phán với Bắc Kinh. Một cách đọc là khoảng cách ngắn khiến mỗi bên thấy tuyên bố của mình là cấp bách, còn vùng nước nông, dữ dội khiến mọi nỗ lực giải quyết bằng cách vượt eo sẽ rất tốn kém cho bên nào thử.",
        "en": "Beijing says Taiwan is part of China and that the Taiwan question is an internal affair involving its core interests, and its 2022 white paper describes the two sides as facing each other across a strip of water. Taipei’s government says the Republic of China and the PRC are “not subordinate to each other” (President Lai Ching-te, 10 Oct 2024) and that “Taiwan’s future must be determined together by our 23 million people” (Lai, 20 May 2026). Washington’s stated policy matches neither: according to CRS, the Six Assurances include that the US would not mediate and would not pressure Taiwan to negotiate with Beijing. One reading is that the short distance makes each side’s claim feel urgent, while the shallow, rough water means any attempt to settle it by crossing would be very costly for whoever tried."
      },
      "src": [
        0,
        1,
        8,
        11,
        4
      ]
    },
    {
      "core": {
        "vi": "Các nhà phân tích như Tim Marshall lập luận rằng, nhìn từ Bắc Kinh, các đảo tạo thành một hàng rào mà các khe hở mở trong thời bình nhưng có thể bị đóng dễ dàng trong thời chiến, nên Trung Quốc “không thể để bị phong tỏa”; CRS bổ sung rằng hải quân Trung Quốc đã chuyển từ phòng thủ “vùng biển gần” sang bảo vệ “vùng biển xa”, vượt ra ngoài chuỗi đảo (trích Bộ Quốc phòng Mỹ, bản 2018). Sách trắng quốc phòng 2019 của Bắc Kinh, trong những phần chúng tôi kiểm tra, không trình bày một lý thuyết chuỗi đảo; nó nói Mỹ đang củng cố các liên minh và việc triển khai quân ở châu Á–Thái Bình Dương và Trung Quốc bảo vệ an ninh các tuyến hàng hải, còn tháng 1/2026 một phát ngôn viên Bộ Quốc phòng Trung Quốc nói mọi nỗ lực kiềm chế Trung Quốc đều “chắc chắn thất bại”. Câu trả lời Washington nêu ra, trong lời khai tháng 4/2026 mô tả Chiến lược Quốc phòng 2026, là xây dựng “phòng thủ ngăn chặn mạnh” dọc chuỗi đảo thứ nhất, còn Tổng thống Lại gọi Đài Loan là “mắt xích then chốt của chuỗi đảo thứ nhất”. Vì Đài Loan nằm giữa chuỗi, một số nhà phân tích (bản tóm lược của Pacific Forum, 3/2025) lập luận rằng nếu Bắc Kinh kiểm soát được đảo thì hải quân Trung Quốc có thể thoát ra khỏi chuỗi còn phía phòng thủ mất một mắt xích; đây là cách diễn giải của giới phân tích, không phải tuyên bố của Bắc Kinh hay Washington.",
        "en": "Analysts such as Tim Marshall argue that, seen from Beijing, the islands form a barrier whose gaps are open in peacetime but could easily be closed in wartime, so China “cannot afford to be blockaded”; CRS adds that China’s navy has moved from “near seas” defence towards “far seas” protection beyond the chain (citing the US Department of Defense, 2018 edition). Beijing’s 2019 defence white paper, in the parts we checked, does not set out an island-chain theory; it says the US is strengthening its Asia-Pacific alliances and military deployment and that China safeguards sea lines of communication, and in January 2026 a Chinese defence ministry spokesman said any attempt to contain China is “doomed to fail”. Washington’s stated answer, in April 2026 testimony describing the 2026 National Defense Strategy, is to build a “strong denial defense” along the First Island Chain, and President Lai calls Taiwan “a crucial link in the first island chain”. Because Taiwan sits mid-chain, some analysts (a Pacific Forum brief, March 2025) argue that if Beijing controlled it the PLA Navy could break out of the chain while the chain’s defenders would lose a link; this is an analysts’ interpretation, not a statement by Beijing or Washington."
      },
      "src": [
        13,
        14,
        2,
        21,
        5,
        9,
        15
      ]
    },
    {
      "core": {
        "vi": "Ở đây lợi ích vượt ra ngoài các bên chính, và đó một phần là lý do các nước bên ngoài nói rằng họ có lợi ích liên quan. Chính quyền Đài Bắc gọi ngành chip là “tài sản toàn cầu” (ông Lại, 4/12/2025), chủ tịch đảng đối lập Quốc dân đảng Trịnh Lệ Văn (Cheng Li-wun) nói chip khiến hòa bình ở eo biển thành vấn đề an ninh kinh tế toàn cầu (11/5/2026), và Chiến lược An ninh Quốc gia 2022 của Nhật gọi hòa bình và ổn định qua eo biển là “yếu tố không thể thiếu cho an ninh và thịnh vượng của cộng đồng quốc tế”. Hai phe ở Đài Loan khác nhau về cách ứng phó: ông Lại nhấn mạnh sức mạnh, còn bà Cheng nói Đài Loan không nên phải chọn giữa Mỹ và Trung Quốc và đề xuất một “chuỗi hòa bình và thịnh vượng”. Một cách đọc là tuyến đường chở hàng hóa và chip của nhiều nước là tuyến mà không bên nào đóng được mà không tự chịu giá, đó là lý do để răn đe cả phong tỏa lẫn xung đột, chứ không phải bảo đảm chống lại chúng.",
        "en": "Here the stakes reach beyond the main parties, which is partly why outsiders say they have an interest. Taipei’s government calls its chip sector “a global asset” (Lai, 4 Dec 2025), the opposition KMT chair Cheng Li-wun says chips make peace in the strait a matter of global economic security (11 May 2026), and Japan’s 2022 National Security Strategy calls peace and stability across the strait “an indispensable element for the security and prosperity of the international community”. The two Taiwanese camps differ on the remedy: Lai stresses strength, while Cheng says Taiwan should not have to choose between the US and China and proposes a “chain of peace and prosperity”. One reading is that a lane carrying so many countries’ goods and chips is one that no party can close without paying a price itself, which is a reason to deter both a blockade and a conflict, not a guarantee against them."
      },
      "src": [
        10,
        12,
        7
      ]
    },
    {
      "core": {
        "vi": "Các đảo tạo nên chuỗi thuộc về Nhật Bản và Philippines, nên với họ một cuộc khủng hoảng ở Đài Loan sẽ xảy ra ngay trước cửa nhà. Chiến lược An ninh Quốc gia 2022 của Nhật nói lập trường cơ bản của Nhật về Đài Loan không đổi và Nhật mong các vấn đề hai bờ được giải quyết hòa bình, đồng thời ghi nhận Trung Quốc chưa loại trừ khả năng dùng vũ lực; Tổng thống Philippines Marcos nói tháng 8/2025 rằng nước ông sẽ bị “kéo vào” bất kỳ cuộc chiến nào về Đài Loan, nêu lý do ở gần và có người lao động Philippines trên đảo, còn Bắc Kinh đáp rằng vị trí địa lý và số người lao động “không nên được dùng làm cái cớ” và đó là can thiệp. Sách trắng quốc phòng 2019 của Bắc Kinh đã mô tả Mỹ là đang củng cố các liên minh ở châu Á–Thái Bình Dương và tăng cường triển khai quân, có thể là lăng kính Bắc Kinh dùng để đọc những bố trí như vậy (đây là cách đọc của chúng tôi, không phải câu chữ của sách trắng). Lời khai tháng 4/2026 của một quan chức Lầu Năm Góc nói quân đội Mỹ “không thể và không nên” một mình duy trì cán cân, và Đài Loan “phải làm nhiều hơn và nhanh hơn”, tức mỗi đồng minh được yêu cầu gánh thêm một phần của tuyến phòng thủ.",
        "en": "The islands that make up the chain belong to Japan and the Philippines, so for them a Taiwan crisis would be at their own doorstep. Japan’s 2022 National Security Strategy says its basic position on Taiwan is unchanged and that it expects cross-strait issues to be resolved peacefully, while noting that China has not denied the possibility of using military force; Philippine President Marcos said in August 2025 that his country would be “drawn” into any war over Taiwan, citing proximity and Filipino workers on the island, and Beijing replied that geography and those numbers “should not be used as pretexts” and that this was interference. Beijing’s 2019 defence white paper already describes the US as strengthening its Asia-Pacific alliances and military deployment, which may be the lens through which Beijing reads such arrangements (this is our reading, not the paper’s wording). A Pentagon official’s April 2026 testimony says the US military “cannot and should not” sustain the balance alone and that Taiwan “must do more, and faster”, so each ally is being asked to carry more of the line."
      },
      "src": [
        7,
        20,
        2,
        5
      ]
    },
    {
      "core": {
        "vi": "Các nhà phân tích đọc núi non và ít bãi đổ bộ của Đài Loan như một cái phanh với cuộc xâm lược: trò chơi chiến tranh của CSIS năm 2023 cho thấy một cuộc đổ bộ quy ước thường bị đánh bại nhưng với cái giá rất cao cho mọi bên, và các tác giả nói kịch bản xâm lược “không phải là dự báo”. CSIS nói thêm rằng Trung Quốc cũng chịu tổn thất nặng và việc không chiếm được Đài Loan có thể làm bất ổn sự cầm quyền của Đảng Cộng sản Trung Quốc; đó là đánh giá của viện nghiên cứu này, còn sách trắng của Bắc Kinh nêu lợi ích là phục hưng dân tộc, coi biện pháp hòa bình là lựa chọn hàng đầu và nói không từ bỏ việc dùng vũ lực. Nếu đổ bộ tốn kém đến vậy, bản tóm lược 2024 của CSIS đánh giá một cuộc “kiểm dịch” do lực lượng hải cảnh dẫn dắt là khả thi hơn và nhiều khả năng xảy ra hơn trong ngắn hạn, dù phức tạp hơn nhiều so với những gì Trung Quốc từng thể hiện và tự nó không thể buộc đối phương đầu hàng, nên lập luận quay lại với cảng và tuyến hàng hải. Câu trả lời Đài Bắc nêu ra là răn đe bằng sức mạnh (ông Lại: “Hòa bình phải được bảo đảm bằng sức mạnh”, 4/12/2025); đây là cách các bên lập luận, không phải dự báo, và không có gì ở đây cho rằng dùng vũ lực là chính đáng.",
        "en": "Analysts read Taiwan’s mountains and few landing beaches as a brake on invasion: CSIS’s 2023 wargame found that a conventional amphibious invasion was usually defeated but at very high cost to all sides, and its authors say the invasion scenario is “not a prediction”. CSIS adds that China would also lose heavily and that failure to occupy Taiwan might destabilize Chinese Communist Party rule, which is that think tank’s assessment, while Beijing’s white paper frames the stakes as national rejuvenation, calls peaceful means the first choice and says it does not renounce force. If invasion is that costly, CSIS’s 2024 brief judges a coast-guard-led quarantine to be more feasible and more likely in the near term, though far more complex than anything China has yet shown and unable by itself to force surrender, which turns the argument back to ports and sea lanes. Taipei’s stated answer is deterrence by strength (Lai: “Peace must be secured through strength”, 4 Dec 2025); this describes how the actors reason, not a forecast, and nothing here argues that force is justified."
      },
      "src": [
        17,
        16,
        0,
        10
      ]
    },
    {
      "core": {
        "vi": "Bộ Tư lệnh Chiến khu Đông bộ Trung Quốc gọi các cuộc tập trận tháng 12/2025 là lời cảnh báo nghiêm khắc với lực lượng ly khai “Đài Loan độc lập” và sự can thiệp từ bên ngoài, và là hành động chính đáng, cần thiết để bảo vệ chủ quyền và sự thống nhất quốc gia (phát ngôn viên Shi Yi, 29/12/2025). AEI và ISW đánh giá rằng Trung Quốc có thể đang tiến hành một cuộc diễn tập không công bố mô phỏng việc cô lập Đài Loan; bài của Taipei Times không có tuyên bố nào của Bắc Kinh về việc này nên đó vẫn chỉ là một đánh giá. Về phía Mỹ, Taipei Times (9/3/2026) đưa tin Chiến lược Quốc phòng 2026 không nhắc tên Đài Loan, trong khi một quan chức Lầu Năm Góc (4/2026) mô tả chiến lược này kêu gọi phòng thủ ngăn chặn mạnh dọc chuỗi đảo; còn Đạo luật Quan hệ Đài Loan chỉ gọi các nỗ lực phi hòa bình là mối quan ngại nghiêm trọng và giao việc đáp ứng cho Tổng thống và Quốc hội Mỹ. Kết luận ngắn: địa lý giải thích vì sao mỗi bên coi eo biển là sống còn, nhưng không quyết định tranh chấp có giữ được hòa bình hay không; điều đó tùy thuộc vào lựa chọn của các chính phủ.",
        "en": "Beijing’s Eastern Theater Command called the December 2025 drills a stern warning against “Taiwan independence” separatist forces and external interference, and a legitimate and necessary action to safeguard sovereignty and national unity (spokesperson Shi Yi, 29 Dec 2025). AEI and ISW assess that China might now be conducting an unannounced exercise simulating the isolation of Taiwan; the Taipei Times report carries no Beijing statement on this, so it remains an assessment. On the US side, the Taipei Times (9 Mar 2026) reports that the 2026 National Defense Strategy does not mention Taiwan, while a Pentagon official (April 2026) describes the strategy as calling for a strong denial defense along the island chain; the Taiwan Relations Act itself only calls non-peaceful efforts of grave concern and leaves the US response to the President and Congress. Bottom line: geography explains why each side treats the strait as vital, but it does not decide whether the dispute stays peaceful; that depends on choices made by governments."
      },
      "src": [
        18,
        19,
        6,
        5,
        3
      ]
    }
  ],
  "bottom": {
    "vi": "Địa lý giải thích vì sao mỗi bên coi eo biển là sống còn, nhưng không quyết định tranh chấp có giữ được hòa bình hay không; điều đó tùy thuộc vào lựa chọn của các chính phủ.",
    "en": "Geography explains why each side treats the strait as vital, but it does not decide whether the dispute stays peaceful; that depends on choices made by governments."
  }
};
