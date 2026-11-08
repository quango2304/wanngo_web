// The strategic logic ('core') of each step of story_ukraine.js: needs, fears and options of the actors, attributed and sourced.
// Merged into the story by withCore() in stories.js. It is an interpretation, kept apart from the facts.
export const CORE = {
  "sources": [
    {
      "n": "Putin, address of 21 Feb 2022 (Kremlin text, Internet Archive copy)",
      "url": "https://web.archive.org/web/2022/http://en.kremlin.ru/events/president/news/67828"
    },
    {
      "n": "Putin, address of 24 Feb 2022 (Kremlin text, Internet Archive copy)",
      "url": "https://web.archive.org/web/2022/http://en.kremlin.ru/events/president/news/67843"
    },
    {
      "n": "Russian MFA draft US-Russia treaty and draft NATO-Russia agreement, 17 Dec 2021 (archive.org copy of the mid.ru texts)",
      "url": "https://archive.org/details/russia-draft-agreements-nato-usa-december-2021"
    },
    {
      "n": "NATO, Washington Summit Declaration, 10 Jul 2024",
      "url": "https://www.nato.int/cps/en/natohq/official_texts_227678.htm"
    },
    {
      "n": "NATO, The Hague Summit Declaration, 25 Jun 2025",
      "url": "https://www.nato.int/cps/en/natohq/official_texts_236705.htm"
    },
    {
      "n": "NATO, Enlargement and Article 10 (topic page)",
      "url": "https://www.nato.int/cps/en/natohq/topics_49212.htm"
    },
    {
      "n": "Budapest Memorandum, 5 Dec 1994 (UN Treaty Series 3007, I-52241, copy at National Security Archive)",
      "url": "https://nsarchive.gwu.edu/sites/default/files/documents/semon9-giki0/1994-12-05-Budapest-Memorandum.pdf"
    },
    {
      "n": "UN press, General Assembly vote on Aggression against Ukraine, 2 Mar 2022 (141-5-35)",
      "url": "https://press.un.org/en/2022/ga12407.doc.htm"
    },
    {
      "n": "UN press, General Assembly vote on Territorial integrity of Ukraine, 27 Mar 2014 (100-11-58)",
      "url": "https://press.un.org/en/2014/ga11493.doc.htm"
    },
    {
      "n": "Putin, remarks to Foreign Ministry leadership, 14 Jun 2024 (Kremlin text, Internet Archive copy)",
      "url": "https://web.archive.org/web/2025/http://en.kremlin.ru/events/president/news/74285"
    },
    {
      "n": "John Mearsheimer, Why the Ukraine Crisis Is the West's Fault, Foreign Affairs, Sep/Oct 2014",
      "url": "https://www.foreignaffairs.com/articles/russia-fsu/2014-08-18/why-ukraine-crisis-west-s-fault"
    },
    {
      "n": "Michael McFaul and Stephen Sestanovich, Faulty Powers (reply to Mearsheimer), Foreign Affairs, Nov/Dec 2014",
      "url": "https://www.foreignaffairs.com/articles/eastern-europe-caucasus/2014-10-17/faulty-powers"
    },
    {
      "n": "CSIS, Crimea's Strategic Value to Russia, 18 Mar 2014",
      "url": "https://www.csis.org/blogs/post-soviet-post/crimeas-strategic-value-russia"
    },
    {
      "n": "CRS Insight IN12192, NATO's 2023 Vilnius Summit, 20 Jul 2023",
      "url": "https://d27r7ebsgu0es2.cloudfront.net/files/2023-07-20_IN12192_3902084ab6d32200adc476b1c0fd97d179ca7073.pdf"
    },
    {
      "n": "AP via Spectrum News, Finland, Sweden move ahead toward possible NATO membership, 13 Apr 2022",
      "url": "https://spectrumlocalnews.com/nys/capital-region/ap-online/2022/04/13/finland-sweden-move-ahead-toward-possible-nato-membership"
    },
    {
      "n": "Verfassungsblog, Would Ukraine Breach its own Constitution if it Dropped its NATO Bid? (Feb 2022)",
      "url": "https://verfassungsblog.de/would-ukraine-breach-its-own-constitution-if-it-dropped-its-nato-bid/"
    },
    {
      "n": "Elliott & Thompson (UK publisher), Prisoners of Geography by Tim Marshall, book description",
      "url": "https://eandtbooks.com/books/prisoners-of-geography/"
    },
    {
      "n": "Wikipedia, Prisoners of Geography (thesis and criticism)",
      "url": "https://en.wikipedia.org/wiki/Prisoners_of_Geography"
    },
    {
      "n": "Carnegie Europe, Taking the Pulse: Would Freezing Ukraine's NATO Membership Process Advance Peace? 21 Nov 2024",
      "url": "https://carnegieendowment.org/europe/strategic-europe/2024/11/taking-the-pulse-would-freezing-ukraines-nato-membership-process-advance-peace?lang=en"
    },
    {
      "n": "National Security Archive, NATO Expansion: What Gorbachev Heard, 12 Dec 2017",
      "url": "https://nsarchive.gwu.edu/briefing-book/russia-programs/2017-12-12/nato-expansion-what-gorbachev-heard-western-leaders-early"
    },
    {
      "n": "RTE, Suwalki Gap analysis, 21 Sep 2025",
      "url": "https://www.rte.ie/news/analysis-and-comment/2025/0921/1534438-suwalki-gap-nato-russia"
    },
    {
      "n": "Kyiv Independent, Russian gas transit through Ukraine stops as 2025 begins, 1 Jan 2025",
      "url": "https://kyivindependent.com/russian-gas-transit-through-ukraine-stop-as-2025-begins/"
    },
    {
      "n": "Lieber Institute (West Point), Closing the Turkish Straits to warships, 3 Mar 2022 (Montreux)",
      "url": "https://lieber.westpoint.edu/closing-turkish-straits-war/"
    },
    {
      "n": "Ukrinform citing ISW, Russia moves Black Sea Fleet vessels to Novorossiysk, 5 Oct 2023",
      "url": "https://ukrinform.net/rubric-ato/3770162-russia-transfers-part-of-black-sea-fleet-vessels-from-sevastopol-to-novorossiysk-isw.html"
    },
    {
      "n": "Reuters via Khaleej Times, Russia, Ukraine to hold peace talks, 24 Oct 2026",
      "url": "https://www.khaleejtimes.com/europe/russia-ukraine-hold-peace-talks-nov-2026-ceasefire-oleshky"
    }
  ],
  "steps": [
    {
      "core": {
        "vi": "Các nhà phân tích như Tim Marshall cho rằng địa lý giới hạn lựa chọn của mọi nhà lãnh đạo, và sách của ông xem xét điểm yếu địa lý của Nga cùng các cuộc xâm lược trong quá khứ; theo cách đọc đó, nỗi lo chính của Nga là sườn tây trống trải chứ không phải phía bắc và phía đông có khiên che. Lập luận của chính Moscow dựa vào năm 1941: ngày 24/2/2022 ông Putin nói Nga sẽ không lặp lại sai lầm hành động quá muộn. Giới phê bình nói địa lý đặt ra giới hạn chứ không quyết định lựa chọn: nhà địa lý Hans-Dietrich Schultz cho rằng Marshall dựa quá nhiều vào thuyết quyết định không gian, còn McFaul lưu ý Nga lúc hợp tác lúc đối đầu với phương Tây trong khi bản đồ không đổi.",
        "en": "Analysts such as Tim Marshall argue that geography limits every leader's choices, and his book looks at Russia's geographic weaknesses and past invasions; on that reading the open western flank, not the shielded north and east, is Russia's main security worry. Moscow's own case draws on 1941: on 24 Feb 2022 Putin said Russia will not repeat the mistake of acting too late. Critics say geography sets limits, not choices: the geographer Hans-Dietrich Schultz argues Marshall leans too heavily on spatial determinism, and McFaul notes that Russia has alternated between cooperating with and confronting the West while the map stayed the same."
      },
      "src": [
        16,
        17,
        1,
        11
      ]
    },
    {
      "core": {
        "vi": "John Mearsheimer lập luận năm 2014 rằng vì Pháp thời Napoleon, Đức hoàng đế và Đức Quốc xã đều vượt dải đất phẳng này, nên không nhà lãnh đạo Nga nào chấp nhận một liên minh quân sự thù địch tiến vào Ukraine; ngày 21/2/2022 ông Putin cho rằng tên lửa đặt ở Ukraine sẽ chỉ cho Moscow vài phút cảnh báo, đó là lập luận của Moscow về một nguy cơ có thể xảy ra chứ không phải sự thật đã kiểm chứng. Cũng chính dải đất mở ấy khiến Ba Lan và các nước Baltic muốn có NATO che chở: CRS ghi nhận họ thúc giục một lộ trình rõ hơn cho Ukraine, và một nhà phân tích Ba Lan gọi hành lang Suwałki là vấn đề “sống còn” với các nước Baltic. Vì vậy một đồng bằng không có tường sinh ra nỗi sợ ở cả hai phía, và biện pháp an toàn của bên này trông giống mối đe dọa với bên kia.",
        "en": "John Mearsheimer argued in 2014 that, since France, imperial Germany and Nazi Germany all crossed this flat ground, no Russian leader would tolerate a hostile military alliance moving into Ukraine; Putin argued on 21 Feb 2022 that missiles deployed in Ukraine would give Moscow only minutes of warning, which is Moscow's claim about a possible future threat, not a verified fact. The same open ground is why Poland and the Baltic states want NATO as their protection: CRS reports they press for a firmer path for Ukraine, and a Polish analyst calls the Suwalki gap 'existential' for the Baltics. So a plain with no wall breeds fear on both sides, and each side's safety measure looks like a threat to the other."
      },
      "src": [
        10,
        0,
        13,
        20
      ]
    },
    {
      "core": {
        "vi": "Lập luận của Moscow: Ukraine là phần rộng nhất của vùng đất mở giữa NATO và Nga; ngày 24/2/2022 ông Putin nói một chỗ đứng quân sự của NATO ở đó là không thể chấp nhận, còn Mearsheimer gọi Ukraine là quốc gia đệm có tầm quan trọng chiến lược rất lớn với Nga. Lập luận phía bên kia: Ukraine có chủ quyền và có quyền chọn liên minh (Tuyên bố Washington 2024 của NATO nói vậy; từ 2019 Hiến pháp Ukraine ghi gia nhập NATO là đường lối chiến lược), Nga đã tái khẳng định chủ quyền và biên giới của Ukraine trong Bản ghi nhớ Budapest 1994, và Đại hội đồng Liên Hợp Quốc lên án cuộc xâm lược năm 2022 là vi phạm Hiến chương với 141 phiếu thuận, 5 chống. Sestanovich cho rằng trước 2014 phần lớn chính khách Ukraine đã gác chuyện vào NATO nên theo ông đó không phải bước sắp xảy ra; Mearsheimer bác bỏ điều này, nói không nhà lãnh đạo phương Tây nào công khai nghi ngờ tuyên bố năm 2008.",
        "en": "Moscow's argument: Ukraine is the widest piece of the open ground between NATO and Russia; on 24 Feb 2022 Putin said a NATO military foothold there is unacceptable, and Mearsheimer called Ukraine a buffer state of enormous strategic importance to Russia. The other side's argument: Ukraine is sovereign and may choose its alliances (NATO's 2024 Washington declaration says so; since 2019 Ukraine's constitution names NATO membership a strategic course), Russia reaffirmed Ukraine's sovereignty and borders in the 1994 Budapest Memorandum, and the UN General Assembly deplored the 2022 invasion as a breach of the Charter by 141 votes to 5. Sestanovich argues that before 2014 most Ukrainian politicians had put NATO membership aside, so in his view it was not imminent; Mearsheimer disputes this, noting that no Western leader publicly questioned the 2008 declaration."
      },
      "src": [
        1,
        10,
        3,
        15,
        6,
        7,
        11
      ]
    },
    {
      "core": {
        "vi": "Moscow nói: dự thảo hiệp ước ngày 17/12/2021 yêu cầu Mỹ chặn NATO mở rộng thêm và từ chối kết nạp các nước Liên Xô cũ (Điều 4), còn dự thảo thỏa thuận với NATO nêu đích danh Ukraine (Điều 6); ông Putin nói thêm không thể tin nhãn “phòng thủ” của NATO sau lời hứa năm 1990 không mở rộng sang phía đông. NATO nói: đây là liên minh phòng thủ, “không đe dọa Nga”, và theo Điều 10 chỉ Liên minh cùng nước ứng viên quyết định. Về năm 1990, Lưu trữ An ninh Quốc gia Mỹ cho rằng các tài liệu giải mật ủng hộ lời phàn nàn của Moscow rằng đã có những bảo đảm được nêu với lãnh đạo Liên Xô, nhưng chúng nằm trong biên bản các cuộc đàm phán chứ không trong hiệp ước nào. Phần Lan nộp đơn năm 2022 sau cuộc xâm lược, ngoại trưởng nước này nói cuộc chiến sẽ tác động lâu dài đến môi trường an ninh của họ.",
        "en": "Moscow says: its draft treaty of 17 Dec 2021 asked the US to block further NATO enlargement and deny membership to former Soviet states (Art. 4), and its draft NATO agreement named Ukraine (Art. 6); Putin adds that NATO's 'defensive' label cannot be trusted after the 1990 promise not to expand east. NATO says: it is defensive, 'poses no threat to Russia', and under Article 10 only the Alliance and the candidate decide. On 1990, the US National Security Archive says declassified records back Moscow's complaint that assurances were given to Soviet leaders, but they are in records of talks, not in any treaty. Finland applied in 2022 after the invasion, its foreign minister saying the war would have a long-lasting impact on its security environment."
      },
      "src": [
        2,
        0,
        3,
        5,
        19,
        14
      ]
    },
    {
      "core": {
        "vi": "Các nhà phân tích như CSIS (2014) nói Sevastopol quan trọng với Moscow vì là căn cứ nước ấm tự nhiên của Hạm đội Biển Đen, và sau khi chính quyền Kyiv đổi năm 2014 Nga lo mất hợp đồng thuê. Lập luận phía bên kia: theo Đại hội đồng Liên Hợp Quốc (2014) Crimea nằm trong biên giới được quốc tế công nhận của Ukraine, và Sestanovich nói năm 2014 căn cứ không bị đe dọa vì các chính khách Ukraine đã gác chuyện NATO. Giờ mỗi bên đều đe dọa việc bên kia dùng biển: ISW (2023) ghi nhận Nga chuyển bớt tàu khỏi Sevastopol sau các đòn đánh của Ukraine, còn hàng xuất khẩu của Ukraine phụ thuộc vào chính vùng nước này.",
        "en": "Analysts such as CSIS (2014) say Sevastopol matters to Moscow as a natural warm-water base for the Black Sea Fleet, and that after Kyiv's government changed in 2014 Russia feared losing its lease. The other side's argument: the UN General Assembly (2014) placed Crimea within Ukraine's internationally recognised borders, and Sestanovich says the base was not at risk in 2014 because Ukrainian politicians had put NATO aside. Each side now threatens the other's use of the sea: ISW (2023) reported Russia moving some ships out of Sevastopol after Ukrainian strikes, while Ukraine's exports depend on the same water."
      },
      "src": [
        12,
        11,
        23,
        22,
        8
      ]
    },
    {
      "core": {
        "vi": "Một đường ống buộc người bán, người mua và nước ở giữa vào cùng một tuyến cố định, nên mỗi bên đều có thể gây sức ép lên bên kia: Ukraine nói sẽ không gia hạn thỏa thuận quá cảnh 2019 vì không muốn tài trợ cho cuộc chiến của Nga, còn thủ tướng Slovakia đáp rằng dừng quá cảnh sẽ gây hại cho EU chứ không phải cho Nga (nhận định của ông, không phải kết quả đo đạc). Mức phụ thuộc khác nhau theo địa lý: Kyiv Independent ghi Slovakia, Hungary và Áo, những nước không có biển, vẫn dựa vào khí Nga, nên việc EU cùng loại bỏ dần có thể đè lên họ khác với các nước còn lại. Đường ống vì thế chuyển từ lợi ích chung thành điểm gây sức ép.",
        "en": "A pipeline ties seller, buyer and the country in between to one fixed route, so each can pressure the others: Ukraine said it would not extend the 2019 transit deal because it would not finance Russia's war, and Slovakia's prime minister replied that stopping transit would hurt the EU but not Russia (his view, not a measured result). Dependence differs by geography: the Kyiv Independent notes that landlocked Slovakia, Hungary and Austria still relied on Russian gas, so an EU-wide phase-out may weigh on them differently. Pipelines thus turn from a shared interest into a pressure point."
      },
      "src": [
        21
      ]
    },
    {
      "core": {
        "vi": "Lập trường từ năm 2021 vẫn là lõi của cuộc mặc cả. Điều kiện Moscow nêu là Ukraine trung lập, không liên minh và không vào NATO (ông Putin, 14/6/2024); tháng 10/2026 Reuters cho biết Nga vẫn đòi toàn bộ Donbas, kể cả phần đất chưa chiếm, trong khi Kyiv bác bỏ việc nhượng đất mà họ hiện đang kiểm soát và đòi bảo đảm an ninh vững chắc. Giới phân tích chia rẽ về việc trung lập hay đóng băng tiến trình NATO sẽ kết thúc hay chỉ tạm ngưng chiến tranh: tháng 11/2024 John Lough (Chatham House) nói Kyiv có thể phải chấp nhận đóng băng nếu Mỹ ngừng hỗ trợ, còn Nathalie Tocci và Kristi Raik nói điều đó sẽ mời gọi một cuộc tấn công mới. Tuyên bố NATO tại The Hague 2025, khác năm 2024, không nhắc đến tư cách thành viên của Ukraine.",
        "en": "The 2021 positions are still the core of the bargaining. Moscow's stated terms were neutrality, non-alignment and no NATO for Ukraine (Putin, 14 Jun 2024); in Oct 2026 Reuters reports Russia still demands all of Donbas, including land it has not occupied, while Kyiv rejects giving up land it currently holds and wants strong security guarantees. Analysts split on whether neutrality or a freeze of NATO talks would end or only pause the war: in Nov 2024 John Lough (Chatham House) said Kyiv may have to accept a freeze if US support ends, while Nathalie Tocci and Kristi Raik said it would invite a new attack. NATO's 2025 Hague declaration, unlike 2024, does not mention Ukraine's membership."
      },
      "src": [
        9,
        24,
        18,
        4
      ]
    }
  ],
  "bottom": {
    "vi": "Địa lý giải thích vì sao cả hai phía đều thấy mình không an toàn: Nga thấy sườn tây trống trải và muốn có khoảng cách; Ukraine, Ba Lan, các nước Baltic và Phần Lan nằm trên cùng đồng bằng và muốn được bảo vệ trước Nga. Địa lý không quyết định kết cục và cũng không giải quyết tranh chấp về việc ai có quyền quyết định liên minh của Ukraine: Moscow nói an ninh của Nga đòi hỏi phải có tiếng nói, còn NATO và Ukraine nói chủ quyền và Hiến chương Liên Hợp Quốc không cho phép điều đó.",
    "en": "Geography explains why both sides feel unsafe: Russia sees an open western flank and wants distance; Ukraine, Poland, the Baltic states and Finland sit on the same plain and want protection from Russia. Geography does not decide the outcome, and it does not settle the dispute over who has the right to decide Ukraine's alliances: Moscow says Russia's security requires a say, while NATO and Ukraine say sovereignty and the UN Charter do not allow one."
  }
};
