// Explainer: Myanmar's civil war, told as one argument in short steps: a valley ringed by hills, the autonomy promise that
// was not kept, an army that sees itself as the glue, the 2021 coup that brought the war into the valley, the 2023–24
// offensives, China's stake and its brake, and where it stands. Facts checked 14 Nov 2026; each step names its sources.
// By design nothing on the map shows who holds what: control is told in words with a date and a source.
const MM = '#B07A3A', CN = '#C53030', VAL = '#8A5A00', HILL = '#2F6B3A', ARMY = '#7C3AED', RES = '#2E7CC0', PIPE = '#D97706';

export const MYANMAR = {
  id: 'myanmar',
  icon: '⛰️',
  c: '#B07A3A',
  title: { vi: 'Nội chiến Myanmar', en: 'Myanmar’s civil war' },
  sub: { vi: 'Một thung lũng, một vòng núi và người láng giềng lớn', en: 'A valley, a ring of hills and a big neighbour' },
  asof: '2026-11-14',
  status: {
    vi: 'Đến 5/11/2026 chưa có ngừng bắn toàn quốc. Ông Min Aung Hlaing làm tổng thống từ 3/4/2026, sau cuộc bầu cử mà LHQ và Mỹ cho là không tự do, không công bằng. Theo ACLED (7/2026), hơn 100.000 người đã chết; theo UNHCR, 3.580.100 người phải rời nhà kể từ 2/2021 và chưa về được (6/7/2026).',
    en: 'As of 5 Nov 2026 there is no nationwide ceasefire. Min Aung Hlaing has been president since 3 Apr 2026, after an election the UN and the US called neither free nor fair. ACLED (Jul 2026) counts more than 100,000 dead; UNHCR says 3,580,100 people have been displaced since Feb 2021 and remain so (6 Jul 2026).'
  },
  statusSrc: [17, 19, 8],
  sources: [
    { n: 'Wikipedia, Geography of Myanmar', url: 'https://en.wikipedia.org/wiki/Geography_of_Myanmar' },
    { n: 'Wikipedia, Ethnic groups in Myanmar', url: 'https://en.wikipedia.org/wiki/Ethnic_groups_in_Myanmar' },
    { n: 'Wikipedia, Panglong Agreement', url: 'https://en.wikipedia.org/wiki/Panglong_Agreement' },
    { n: 'Wikipedia, Karen conflict', url: 'https://en.wikipedia.org/wiki/Karen_conflict' },
    { n: 'Wikipedia, 1962 Burmese coup d’état (lý do và tranh luận của giới sử học)', url: 'https://en.wikipedia.org/wiki/1962_Burmese_coup_d%27%C3%A9tat' },
    { n: 'Wikipedia, 2008 Constitution of Myanmar', url: 'https://en.wikipedia.org/wiki/2008_Constitution_of_Myanmar' },
    { n: 'Wikipedia, 2021 Myanmar coup d’état', url: 'https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat' },
    { n: 'Wikipedia, National Unity Government of Myanmar', url: 'https://en.wikipedia.org/wiki/National_Unity_Government_of_Myanmar' },
    { n: 'UNHCR, Myanmar Emergency Overview Map (6/7/2026)', url: 'https://www.ecoi.net/en/file/local/2142325/260706%20Myanmar%20displacement%20overview.pdf' },
    { n: 'Wikipedia, Operation 1027', url: 'https://en.wikipedia.org/wiki/Operation_1027' },
    { n: 'AFP qua eNCA (22/4/2025, trả Lashio)', url: 'https://www.enca.com/news/myanmar-rebels-prepare-hand-key-city-back-junta-china-says' },
    { n: 'Wikipedia, Rakhine offensive (2023–nay)', url: 'https://en.wikipedia.org/wiki/Rakhine_offensive_(2023%E2%80%93present)' },
    { n: 'CSIS, Kyaukpyu: Connecting China to the Indian Ocean (2/4/2018)', url: 'https://www.csis.org/analysis/kyaukpyu-connecting-china-indian-ocean' },
    { n: 'Wikipedia, Sino-Myanmar pipelines', url: 'https://en.wikipedia.org/wiki/Sino-Myanmar_pipelines' },
    { n: 'Reuters qua The Kathmandu Post (8/7/2025, đất hiếm Kachin)', url: 'https://kathmandupost.com/world/2025/07/08/why-china-s-dispute-with-myanmar-rebels-threatens-global-supply-of-heavy-rare-earths' },
    { n: 'Myanmar Now (20/1/2025, ngừng bắn MNDAA)', url: 'https://myanmar-now.org/en/news/kokang-army-to-withdraw-from-lashio-under-chinese-brokered-ceasefire-with-myanmar-junta/' },
    { n: 'Moemaka (10/2025, thỏa thuận TNLA ở Côn Minh)', url: 'https://moemaka.net/eng/2025/10/second-agreement-reached-to-hand-back-territory-controlled-by-the-brotherhood-alliance-in-northern-shan-state' },
    { n: 'France 24 (5/11/2026)', url: 'https://www.france24.com/en/asia-pacific/20261105-myanmar-civilians-under-fire-from-military-junta' },
    { n: 'Wikipedia, Myanmar civil war (2021–present)', url: 'https://en.wikipedia.org/wiki/Myanmar_civil_war_(2021%E2%80%93present)' },
    { n: 'Wikipedia, 2025–26 Myanmar general election', url: 'https://en.wikipedia.org/wiki/2025%E2%80%9326_Myanmar_general_election' }
  ],
  steps: [
    {
      tag: 'need',
      title: { vi: 'Một thung lũng giữa vòng núi', en: 'A valley inside a ring of hills' },
      text: {
        vi: 'Vì sao Myanmar đánh nhau từ năm 1949 mà không bên nào thắng hẳn? Câu trả lời bắt đầu từ địa hình. Gần một nửa đất Myanmar là núi, xếp thành hình móng ngựa ôm lấy thung lũng sông Irrawaddy ở giữa. Người Bamar, khoảng 68% dân số, sống chủ yếu dưới thung lũng. Trên vành đai núi và dải bờ biển phía tây là người Shan, Kachin, Chin, Karen, Rakhine và nhiều dân tộc khác.',
        en: 'Why has Myanmar been at war since 1949 without either side winning outright? The answer starts with the land. Nearly half of Myanmar is mountains, set in a horseshoe around the Irrawaddy valley in the middle. The Bamar, about 68% of the people, live mostly down in the valley. On the ring of hills and the western coast live the Shan, Kachin, Chin, Karen, Rakhine and many other peoples.'
      },
      facts: [
        {
          vi: 'Myanmar rộng khoảng 676.580 km², lớn nhất Đông Nam Á lục địa. Nhà nước công nhận 135 dân tộc.',
          en: 'Myanmar covers about 676,580 km², the largest country on mainland Southeast Asia. The state recognises 135 ethnic groups.'
        }
      ],
      ll: [96, 21],
      k: 6,
      layers: [],
      show: ['irrawaddy', 'salween'],
      hl: { Myanmar: MM },
      dim: true,
      draw: [
        { k: 'label', p: [95.3, 20.6], c: VAL, label: { vi: 'thung lũng Irrawaddy', en: 'Irrawaddy valley' }, dy: 0 },
        { k: 'label', p: [93.4, 22.6], c: HILL, label: { vi: 'núi Chin, Arakan', en: 'Chin, Arakan hills' }, dy: 0 },
        { k: 'label', p: [97.6, 26.4], c: HILL, label: { vi: 'núi Kachin', en: 'Kachin hills' }, dy: 0 },
        { k: 'label', p: [98.9, 22.2], c: HILL, label: { vi: 'cao nguyên Shan', en: 'Shan Plateau' }, dy: 0 }
      ],
      key: [
        { c: VAL, vi: 'Vùng thấp, phần lớn người Bamar', en: 'Lowlands, mostly Bamar' },
        { c: HILL, vi: 'Vành đai núi, các dân tộc khác', en: 'Ring of hills, other peoples' }
      ],
      src: [0, 1]
    },
    {
      tag: 'blocked',
      title: { vi: 'Lời hứa tự trị không thành', en: 'The promise of self-rule fell through' },
      text: {
        vi: 'Năm 1947, trước ngày độc lập, ông Aung San ký thỏa thuận Panglong với đại diện người Shan, Kachin và Chin, hứa cho các dân tộc được tự trị. Cùng năm đó ông bị ám sát. Myanmar độc lập năm 1948, và ngày 31/1/1949 người Karen tuyên bố cầm súng. Cuộc chiến ấy đến nay vẫn chưa dứt. Về sau, nhiều vùng núi khác cũng lập quân riêng.',
        en: 'In 1947, before independence, Aung San signed the Panglong Agreement with Shan, Kachin and Chin leaders, promising the peoples autonomy. He was assassinated later that year. Myanmar became independent in 1948, and on 31 Jan 1949 the Karen declared war. That war has never ended. Later, many other hill regions raised armies of their own.'
      },
      ll: [96, 21],
      k: 6,
      layers: [],
      show: [],
      hl: { Myanmar: MM },
      dim: true,
      draw: [
        { k: 'label', p: [98.9, 22.2], c: HILL, label: { vi: 'Shan', en: 'Shan' }, dy: 0 },
        { k: 'label', p: [97.4, 26.0], c: HILL, label: { vi: 'Kachin', en: 'Kachin' }, dy: 0 },
        { k: 'label', p: [93.6, 22.6], c: HILL, label: { vi: 'Chin', en: 'Chin' }, dy: 0 },
        { k: 'pt', p: [97.63, 16.89], c: '#9B2C2C', r: 5, label: { vi: 'Karen: cầm súng từ 1949', en: 'Karen: at war since 1949' } }
      ],
      key: [{ c: HILL, vi: 'Ba dân tộc ký Panglong (1947)', en: 'The three peoples at Panglong (1947)' }],
      src: [2, 1, 3]
    },
    {
      tag: 'move',
      title: { vi: 'Quân đội tự coi mình là chất keo', en: 'The army sees itself as the glue' },
      text: {
        vi: 'Quân đội Myanmar coi mình là lực lượng giữ cho đất nước khỏi tan rã. Năm 1962, khi người Shan và Karenni đòi quyền rời Liên bang theo hiến pháp 1947, tướng Ne Win đảo chính; nhiều nhà sử học nói quân đội sợ đất nước vỡ ra. Từ đó quân đội cai trị từ thung lũng và đánh lên vành đai núi suốt nhiều thập kỷ. Hiến pháp 2008 do quân đội soạn vẫn dành cho họ 25% ghế quốc hội.',
        en: 'Myanmar’s army sees itself as the force that keeps the country from breaking apart. In 1962, as the Shan and Karenni claimed a right to leave the Union under the 1947 constitution, General Ne Win seized power; many historians say the army feared the country would fall apart. From then on the army ruled from the valley and fought up into the hills for decades. The 2008 constitution, written under the army, still reserves 25% of parliament’s seats for it.'
      },
      facts: [
        {
          vi: 'Sửa các điều khoản chính của hiến pháp 2008 cần hơn 75% đại biểu quốc hội đồng ý, nên khối 25% ghế quân đội đủ để chặn mọi thay đổi.',
          en: 'Changing the key clauses of the 2008 constitution needs more than 75% of all MPs, so the army’s 25% bloc is enough to block any change.'
        },
        {
          vi: 'Không phải ai cũng đồng ý: nhà sử học Mary Callahan cho rằng nguy cơ tan rã đã có suốt thập niên 1950 mà không gây đảo chính, nên nguyên nhân chính là cuộc giành quyền trong giới cầm quyền.',
          en: 'Not everyone agrees: the historian Mary Callahan notes that the threat of break-up existed through the 1950s without a coup, so she sees a struggle for power inside the elite as the main cause.'
        }
      ],
      ll: [96, 20.5],
      k: 6.5,
      layers: [],
      show: ['irrawaddy'],
      hl: { Myanmar: MM },
      dim: true,
      draw: [
        { k: 'pt', p: [96.12, 19.77], c: ARMY, r: 5, label: { vi: 'Naypyidaw', en: 'Naypyidaw' } },
        { k: 'label', p: [98.9, 22.2], c: HILL, label: { vi: 'Shan', en: 'Shan' }, dy: 0 },
        { k: 'label', p: [97.4, 19.2], c: HILL, label: { vi: 'Karenni', en: 'Karenni' }, dy: 0 }
      ],
      src: [4, 3, 5]
    },
    {
      tag: 'counter',
      title: { vi: 'Đảo chính 2021 đưa chiến tranh vào thung lũng', en: 'The 2021 coup brought the war into the valley' },
      text: {
        vi: 'Tháng 11/2020, đảng NLD của bà Aung San Suu Kyi thắng lớn. Ngày 1/2/2021 quân đội đảo chính, nói bầu cử gian lận; ủy ban bầu cử bác cáo buộc ấy vì thiếu bằng chứng. Các nghị sĩ bị lật đổ lập Chính phủ Đoàn kết Dân tộc (NUG), và tháng 5/2021 NUG lập Lực lượng Phòng vệ Nhân dân (PDF). Lần này chiến tranh lan vào chính thung lũng của người Bamar: theo UNHCR, riêng vùng Sagaing có 1.343.000 người phải rời nhà (6/7/2026).',
        en: 'In November 2020, Aung San Suu Kyi’s NLD won a landslide. On 1 Feb 2021 the army seized power, claiming the vote was rigged; the election commission rejected the claim for lack of evidence. Ousted MPs formed the National Unity Government (NUG), and in May 2021 the NUG set up the People’s Defence Force (PDF). This time the war spread into the Bamar valley itself: UNHCR counts 1,343,000 people displaced in Sagaing Region alone (6 Jul 2026).'
      },
      facts: [
        {
          vi: 'NLD được 396 trên 476 ghế; đảng thân quân đội USDP được 33.',
          en: 'The NLD won 396 of 476 seats; the army-backed USDP won 33.'
        },
        {
          vi: 'NUG có cả đại diện các nhóm vũ trang dân tộc và tự nhận là chính phủ hợp pháp, nhưng chưa nước nào chính thức công nhận.',
          en: 'The NUG includes representatives of ethnic armed groups and claims to be the lawful government, but no country has formally recognised it.'
        }
      ],
      ll: [95.8, 21.5],
      k: 6.5,
      layers: [],
      show: ['irrawaddy'],
      hl: { Myanmar: MM },
      dim: true,
      draw: [
        { k: 'pt', p: [95.98, 21.88], c: RES, r: 5, label: { vi: 'Sagaing', en: 'Sagaing' }, side: 'l' },
        { k: 'pt', p: [96.12, 19.77], c: ARMY, r: 4.5, label: { vi: 'Naypyidaw', en: 'Naypyidaw' } }
      ],
      src: [6, 7, 8]
    },
    {
      tag: 'move',
      title: { vi: 'Rồi núi và thung lũng cùng đánh', en: 'Then hills and valley fought together' },
      text: {
        vi: 'Ngày 27/10/2023, liên minh Ba Anh Em gồm MNDAA, TNLA và Quân đội Arakan (AA) mở Chiến dịch 1027 ở bắc bang Shan, cùng nhiều nhóm PDF. Tháng 8/2024 MNDAA chiếm Lashio, nơi đặt Bộ chỉ huy Đông Bắc của quân đội. Ngày 20/12/2024 AA chiếm Bộ chỉ huy miền Tây ở Ann, bang Rakhine. Quân đội mất hai bộ chỉ huy vùng, điều chưa từng có.',
        en: 'On 27 Oct 2023 the Three Brotherhood Alliance of the MNDAA, the TNLA and the Arakan Army (AA) launched Operation 1027 in northern Shan State, alongside many PDF units. In August 2024 the MNDAA took Lashio, home of the army’s Northeastern Command. On 20 Dec 2024 the AA took the Western Command at Ann, in Rakhine State. The army had lost two regional commands, something without precedent.'
      },
      facts: [
        {
          vi: 'Theo nhiều nhà quan sát, lúc đầu Bắc Kinh làm ngơ cho chiến dịch, vì muốn dẹp các ổ lừa đảo trực tuyến ở vùng biên giới mà chính quyền quân sự chưa dẹp.',
          en: 'Many observers say Beijing tacitly let the offensive start at first, because it wanted the online scam centres along the border shut down and the junta had not done it.'
        }
      ],
      ll: [96, 21.5],
      k: 5.5,
      layers: [],
      show: [],
      hl: { Myanmar: MM },
      dim: true,
      draw: [
        { k: 'pt', p: [97.75, 22.93], c: RES, r: 5, label: { vi: 'Lashio', en: 'Lashio' } },
        { k: 'pt', p: [94.03, 19.78], c: RES, r: 5, label: { vi: 'Ann', en: 'Ann' }, side: 'l' }
      ],
      src: [9, 10, 11]
    },
    {
      tag: 'need',
      title: { vi: 'Với Trung Quốc, Myanmar là lối ra biển', en: 'For China, Myanmar is a way to the sea' },
      text: {
        vi: 'Bên kia biên giới, Trung Quốc có lợi ích lớn. Từ cảng Kyaukphyu trên vịnh Bengal, hai đường ống dầu và khí chạy xuyên Myanmar về Côn Minh; ống khí chạy từ năm 2013, ống dầu từ năm 2017. Theo CSIS, Bắc Kinh làm vậy để bớt phụ thuộc vào eo Malacca. Miền bắc Myanmar còn có đất hiếm: theo Reuters, gần một nửa nguồn cung đất hiếm nặng của thế giới đến từ mỏ ở bang Kachin.',
        en: 'Across the border, China has a big stake. From the port of Kyaukphyu on the Bay of Bengal, an oil and a gas pipeline cross Myanmar to Kunming; gas has flowed since 2013, oil since 2017. CSIS says Beijing built them to rely less on the Strait of Malacca. Northern Myanmar also has rare earths: Reuters reports that nearly half the world’s heavy rare earth supply comes from mines in Kachin State.'
      },
      facts: [
        {
          vi: 'Đường ống dầu từ Kyaukphyu tới Côn Minh dài khoảng 771 km.',
          en: 'The oil pipeline from Kyaukphyu to Kunming is about 771 km long.'
        }
      ],
      ll: [98.5, 15],
      k: 2.8,
      layers: [],
      show: ['pipe_myanmar', 'malacca'],
      hl: { Myanmar: MM, China: CN },
      dim: true,
      draw: [
        { k: 'pt', p: [93.53, 19.43], c: PIPE, r: 5, label: { vi: 'Kyaukphyu', en: 'Kyaukphyu' }, side: 'l' },
        { k: 'pt', p: [102.7, 25.04], c: CN, r: 4.5, label: { vi: 'Côn Minh', en: 'Kunming' } },
        { k: 'label', p: [97.6, 26.6], c: HILL, label: { vi: 'đất hiếm Kachin', en: 'Kachin rare earths' }, dy: 0 }
      ],
      src: [12, 13, 14]
    },
    {
      tag: 'counter',
      title: { vi: 'Nên Bắc Kinh kéo phanh', en: 'So Beijing pulled the brake' },
      text: {
        vi: 'Bắc Kinh coi chính quyền quân sự là bên bảo đảm lợi ích của mình ở biên giới (Reuters). Nhà phân tích David Mathieson nói Trung Quốc không tìm cách chấm dứt nội chiến, chỉ muốn giao tranh dịu đi. Bắc Kinh đóng cửa khẩu và giữ thủ lĩnh MNDAA ở Trung Quốc; ngày 22/4/2025 MNDAA trả Lashio cho quân đội. Tháng 10/2025, sau đàm phán ở Côn Minh, TNLA cũng đồng ý rút khỏi Mogok và Momeik.',
        en: 'Beijing sees the junta as the guarantor of its interests on the border (Reuters). The analyst David Mathieson says China is not trying to end the civil war, only to see the fighting ease. Beijing closed border crossings and held the MNDAA’s leader in China; on 22 Apr 2025 the MNDAA handed Lashio back to the army. In October 2025, after talks in Kunming, the TNLA also agreed to leave Mogok and Momeik.'
      },
      facts: [
        {
          vi: 'Theo Reuters, tháng 5/2025 Trung Quốc dọa ngừng mua khoáng sản từ vùng của Quân đội Độc lập Kachin (KIA) nếu KIA không thôi đánh chiếm Bhamo.',
          en: 'According to Reuters, in May 2025 China threatened to stop buying minerals from Kachin Independence Army (KIA) areas unless the KIA stopped trying to take Bhamo.'
        }
      ],
      ll: [98, 23.5],
      k: 5,
      layers: [],
      show: [],
      hl: { Myanmar: MM, China: CN },
      dim: true,
      draw: [
        { k: 'pt', p: [97.75, 22.93], c: ARMY, r: 5, label: { vi: 'Lashio', en: 'Lashio' } },
        { k: 'pt', p: [97.23, 24.27], c: HILL, r: 4.5, label: { vi: 'Bhamo', en: 'Bhamo' }, side: 'l' },
        { k: 'pt', p: [102.7, 25.04], c: CN, r: 4.5, label: { vi: 'Côn Minh', en: 'Kunming' } }
      ],
      src: [14, 15, 10, 16]
    },
    {
      tag: 'outlook',
      title: { vi: 'Thung lũng muốn nắm hết, núi muốn tự quản', en: 'The valley wants it all, the hills want self-rule' },
      text: {
        vi: 'Đến đầu tháng 11/2026 chưa có ngừng bắn. Quân đội đã lấy lại một số thị trấn ở bang Shan, còn AA được cho là nắm gần 90% bang Rakhine; từ 4/9/2026 quân đội mở chiến dịch giành lại Rakhine và không kích nhiều nơi. Bản đồ không vẽ ai giữ vùng nào vì nó đổi liên tục. Gốc rễ vẫn là thung lũng và vòng núi: quân đội muốn một trung tâm nắm hết, các vùng núi muốn tự quản. Còn Trung Quốc muốn biên giới yên hơn là muốn một bên thắng.',
        en: 'As of early November 2026 there is no ceasefire. The army has taken back some towns in Shan State, while the AA reportedly holds nearly 90% of Rakhine State; since 4 Sep 2026 the army has been on an offensive to retake Rakhine, with airstrikes in many places. The map does not show who holds what, because it keeps changing. The root is still the valley and the ring of hills: the army wants one centre that holds everything, the hill peoples want to rule themselves. And China wants a quiet border more than it wants either side to win.'
      },
      facts: [
        {
          vi: 'Quân đội tổ chức bầu cử ba đợt (28/12/2025, 11/1 và 25/1/2026); NLD đã bị giải thể từ 2023 nên không tham gia, và nhiều thị trấn không bỏ phiếu. Ông Min Aung Hlaing làm tổng thống từ 3/4/2026.',
          en: 'The army held a three-phase election (28 Dec 2025, 11 and 25 Jan 2026); the NLD, dissolved in 2023, did not take part, and many townships did not vote. Min Aung Hlaing became president on 3 Apr 2026.'
        },
        {
          vi: 'Theo ACLED (7/2026), hơn 100.000 người đã chết kể từ đảo chính.',
          en: 'According to ACLED (Jul 2026), more than 100,000 people have been killed since the coup.'
        }
      ],
      ll: [96, 21],
      k: 5.5,
      layers: [],
      show: ['conf_myanmar', 'irrawaddy'],
      hl: { Myanmar: MM, China: CN },
      dim: true,
      draw: [
        { k: 'pt', p: [96.12, 19.77], c: ARMY, r: 4.5, label: { vi: 'Naypyidaw', en: 'Naypyidaw' } }
      ],
      src: [17, 18, 19]
    }
  ]
};
