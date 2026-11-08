// The argument of the East Sea story in one view (its first step) and the tag of each following step.
// Source indexes point into the story's merged `sources` list (see withCore() in stories.js).
export const THESIS = {
  tags: ['need', 'counter', 'move', 'move', 'counter', 'outlook'],
  step: {
    title: { vi: 'Vì sao Biển Đông là chuyện sống còn với Bắc Kinh', en: 'Why the East Sea is a matter of survival for Beijing' },
    text: {
      vi: 'Hãy nhìn tấm bản đồ từ phía Bắc Kinh. Dưới đây là chuỗi lập luận mà nhiều nhà phân tích dùng để giải thích vì sao Biển Đông không chỉ là chuyện cá và dầu. Đây là lập luận của họ, không phải điều Bắc Kinh tự nói; các bước sau đưa dữ kiện cho từng mắt xích và lời của từng bên.',
      en: 'Look at the map from Beijing’s side. Below is the chain of argument many analysts use to explain why the East Sea is not only about fish and oil. It is their argument, not something Beijing says about itself; the next steps give the facts for each link and each side’s own words.'
    },
    chain: [
      {
        tag: 'need',
        text: {
          vi: 'Trung Quốc sống nhờ thương mại và năng lượng chở bằng đường biển. Theo CSIS, năm 2024 mỗi eo Malacca và eo Đài Loan có hơn 2,4 nghìn tỷ USD hàng hóa đi qua. Đường ra đại dương phải luôn thông.',
          en: 'China lives on trade and energy moved by sea. According to CSIS, in 2024 the Malacca and Taiwan straits each handled over $2.4 trillion of goods. The way out to the ocean has to stay open.'
        }
      },
      {
        tag: 'blocked',
        text: {
          vi: 'Theo các nhà phân tích như Tim Marshall và báo cáo của CRS, phía đông Trung Quốc là chuỗi đảo thứ nhất (Nhật, Đài Loan, Philippines), nằm trong mạng đồng minh của Mỹ; phía nam là eo Malacca. Trong chiến tranh, các cửa này có thể bị khóa. CSIS (2026) lưu ý: Trung Quốc phụ thuộc eo Đài Loan nhiều hơn Malacca, và tàu có thể đi vòng, chậm và tốn kém hơn.',
          en: 'According to analysts such as Tim Marshall and CRS reports, China’s east is the First Island Chain (Japan, Taiwan, the Philippines), tied into the US alliance network; to the south lies the Strait of Malacca. In a war these exits could be closed. CSIS (2026) adds that China depends more on the Taiwan Strait than on Malacca, and ships can sail around, slower and at a cost.'
        }
      },
      {
        tag: 'move',
        text: {
          vi: 'Biển Đông nằm giữa các cửa ấy, là vùng biển gần nhất Bắc Kinh có thể nắm. Theo lập luận này, Bắc Kinh coi việc kiểm soát nó, hoặc ít nhất không để ai khác kiểm soát, là thiết yếu: đường chín đoạn, đảo nhân tạo, đường băng. Bắc Kinh nói khác: sách trắng quốc phòng 2019 nói Trung Quốc bảo vệ an ninh đường biển và tự do hàng hải cho mọi nước, và xây dựng trên các đảo là thực thi chủ quyền.',
          en: 'The East Sea lies between those exits and is the nearest sea Beijing can hold. On this argument Beijing sees controlling it, or at least denying others control, as essential: the nine-dash line, artificial islands, airstrips. Beijing puts it differently: its 2019 defence white paper says China safeguards the security of sea lanes and freedom of navigation for all countries, and that building on the islands is an exercise of sovereignty.'
        }
      },
      {
        tag: 'counter',
        text: {
          vi: 'Mỹ và đồng minh coi đó là mối đe dọa với tự do hàng hải. Việt Nam, Philippines, Malaysia, Indonesia cần chính vùng biển này để đánh cá và khai thác dầu khí, và lo bị ép. Việt Nam nói UNCLOS 1982 là cơ sở pháp lý duy nhất. Phán quyết năm 2016 kết luận đường chín đoạn không có cơ sở pháp lý; Trung Quốc không chấp nhận phán quyết.',
          en: 'The US and its allies see it as a threat to freedom of navigation. Vietnam, the Philippines, Malaysia and Indonesia need this same sea for fishing and for oil and gas, and fear being squeezed. Vietnam says UNCLOS 1982 is the sole legal basis. The 2016 award concluded that the nine-dash line has no legal basis; China does not accept the award.'
        }
      },
      {
        tag: 'outlook',
        text: {
          vi: 'Mỗi bên nhìn cùng một tấm bản đồ bằng nỗi sợ riêng: Bắc Kinh sợ bị nhốt ở các cửa ra; Mỹ và các nước ven biển sợ một cường quốc nắm cả vùng biển. Luật biển là thước đo chung, nhưng vì Bắc Kinh không chấp nhận phán quyết nên khoảng cách còn đó. Vì thế chuyện này không tự hết.',
          en: 'Each side looks at the same map through its own fear: Beijing fears being shut in at its exits; the US and the coastal states fear one power holding the whole sea. The law of the sea is the common yardstick, but because Beijing does not accept the award the gap remains. That is why this does not go away by itself.'
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
