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
          vi: 'Việt Nam, Philippines, Malaysia, Indonesia sống nhờ chính vùng biển này: cá, dầu, khí. Luật biển quốc tế (UNCLOS) chia biển theo khoảng cách từ bờ, không theo lịch sử hay sức mạnh. Năm 2016, tòa trọng tài kết luận đường chín đoạn không có cơ sở pháp lý; Bắc Kinh bác phán quyết. Mỹ thì lo một cường quốc nắm cả tuyến hàng hải bận rộn bậc nhất thế giới.',
          en: 'Vietnam, the Philippines, Malaysia and Indonesia live off this same sea: fish, oil, gas. The law of the sea (UNCLOS) divides the sea by distance from the coast, not by history or strength. In 2016 a tribunal concluded the nine-dash line has no legal basis; Beijing rejects the ruling. The US worries about one power holding one of the world’s busiest shipping routes.'
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
  }
};
