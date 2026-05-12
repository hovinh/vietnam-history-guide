export interface TimelineItem {
  readonly id: string;
  readonly year: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly offsetTop?: boolean;
}

export interface Person {
  readonly id: string;
  readonly dynasty: string;
  readonly years: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly imageUrl: string;
  readonly quote?: string;
  readonly campaigns?: string[];
  readonly birthDeath?: string;
  readonly hometown?: string;
}

export interface HistoricalEvent {
  readonly id: string;
  readonly dynasty: string;
  readonly date: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly type: 'event';
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'hung-vuong',
    year: '2879',
    title: 'Thời đại Hùng Vương',
    description: 'Khai sinh nhà nước Văn Lang, thời kỳ rực rỡ của văn hóa Đông Sơn và những huyền tích dựng nước.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBubJ7UHgJfJBRaxS2SKizr6gGKSCnS_PDu5TrhmtWr2qEsJOCP-FATHYGanbhnuqnHfQuCnBDJgu6RXMk8_Fk_3KA39aFGoZ4gT69rH-o64FnFI9Bl8rSPwNWglOOYiCh3aoZJfYHIJSc3Uvb-s1rUDTC3MsEBT6oReBGMBiqo9dMLfCli_lq3_jenCRDqCEn-5LfVL5d1lwuGC7wFKiXOxl7A-waikbCYtKNEmfGNuFpB8h-50G7H3FmlqlXNngyd7eJEVWkK2tw',
    offsetTop: false,
  },
  {
    id: 'doc-lap',
    year: '938',
    title: 'Kỷ Nguyên Độc Lập',
    description: 'Chiến thắng Bạch Đằng của Ngô Quyền chấm dứt nghìn năm Bắc thuộc, mở ra thời đại tự chủ lâu dài.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKsst0gceYbImdlKbjPLUnta5WaglNWE-MrkE8_gpnMt2p0EVAjYGslPR-3smmINoBvK2brKOQiLpzD0dwCF6JjtylVoskKReqvB_-E9aUs-JhBYh1Li7N53wPujtY5cWgLimIIv8K0j2hRGMS28zG1e6bSdmWAzHVl4qM_IatBmpReqek6q-ch4-BgHfNCfoOo3BFUL35Kp-oD0ektHf7fTxQPYiXMHEMxlrZhB1CG-qT5xrKa8a2M9MRvuGu-GyF1ceAUS3lljo',
    offsetTop: true,
  },
  {
    id: 'dai-viet',
    year: '1428',
    title: 'Đại Việt Phồn Vinh',
    description: 'Triều đại Lê Sơ với những cải cách giáo dục, luật pháp và sự phát triển đỉnh cao của Nho học Việt.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqgj6OAzmjiboCkqSNUQ5qCw2rIHcWc0nYm0-wuVnM6_icWsElwHH54WVUJis2msxyqtjKyiEHIrzsIp3KtiF6_w3M6frIjkQvkIirqJzTg6ovXKCV83SAhp0bFhrkpwSVXZSalW06eCkEeArZw7FnSj90RDme_bqs_NObJEMAKwmV3iX9fdxQRQF25kylLl_0U5BOfXhr0qMBQGUGrWtKcpTFUOtH1HuIPn4JQ-1iWoC7-OTMpp5A1Yv1Du3g_9PSebeTxwTYMtU',
    offsetTop: false,
  },
  {
    id: 'trieu-nguyen',
    year: '1802',
    title: 'Triều Nguyễn Quai Đê',
    description: 'Sự thống nhất toàn vẹn lãnh thổ và những di sản kiến trúc cung đình đồ sộ còn lưu giữ đến nay.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB56aWoeF185SICsGDygfUuD5PPVaAkmh1Fb1B7ulKKjd0_a9QFa-YBj85304dC6ay5_6lHVnZ9-QR4-l1naU633RvAsePHRm8492vTlk5kFESlJLMtK8WJ3BH7Ozq80uJDOjuOjbcyLA59Bxgk_sfpKzmvpQWx5wdFutCjhcYVGQchALGSFdZRqHmUaGEChrbiSwddX9iMwyl0QeRcFss9jnVe6ombxqbztACh8GojCfY3yh4ponYwWNp80vR0uigcdZC6aIMswgQ',
    offsetTop: true,
  },
];

export const persons: Person[] = [
  {
    id: 'ngo-quyen',
    dynasty: 'Kỷ Tiền Ngô',
    years: '898 – 944',
    name: 'Ngô Quyền',
    role: 'Vị vua sáng lập nhà Ngô',
    bio: 'Người anh hùng dân tộc với chiến thắng Bạch Đằng lịch sử năm 938, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc Việt Nam.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt-9cGC2jzgeuxr4Td8TzEU-aBK3Nyo-7dYoonVBJbMFp2ZB2hVXwbE3bkSycvp6omOmZWgZ5I-6BmW5QPjxiXeE8C4DlcIOZAuLSSpVGxKSHWazv5995TZMLYtCAyzYAzW8YN-1fzf-MlTttC699w2CMweHSM8C6JfoGa5mFRfLe99QtgFADP6ya8meEB1ZFAd_1ZPv7Yqp7yuIwmr50hIwzpUdHO-BpKBpcg3Y15RtQLJPPkrBZwtfGrDGbY-OFP4YTod5PAXf4',
    quote: '"Chiến thắng Bạch Đằng mở ra kỷ nguyên tự chủ ngàn năm cho dân tộc."',
    birthDeath: '898 – 944',
    hometown: 'Đường Lâm, Sơn Tây',
    campaigns: ['Chiến thắng Bạch Đằng (938)'],
  },
  {
    id: 'ly-thuong-kiet',
    dynasty: 'Nhà Lý',
    years: '1019 – 1105',
    name: 'Lý Thường Kiệt',
    role: 'Thái úy, Tể tướng',
    bio: 'Danh tướng kiệt xuất, tác giả của "Nam quốc sơn hà" - bản Tuyên ngôn độc lập đầu tiên của dân tộc, lãnh đạo quân dân Đại Việt đánh tan quân Tống xâm lược.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBodWVVeDmnGGqGpNKx4NzIR3zLhd8N-kyNs_GPA13M7avB5ZcaRyNTUDD9fgxRb5uSlM9LIHdVK5IFlK_DM6pkFtGRW5iWJZ9jNAGeF7CW-sk0T0rSzJUMdPbzB_tuSQ56VKhEb3fbTz7vz5lKJJ7ylSNbbdoIEAK5ei4mymbgpb8i3fR0RFHrCM1R09VNrk75k640ARfSElyegcRonSIPDBHyNLd-edY654vncqTF3yR-0fj9_0JI95-LXXv5aL-dF_9Oc9zKOxs',
    quote: '"Nam quốc sơn hà Nam đế cư, Tiệt nhiên định phận tại thiên thư."',
    birthDeath: '1019 – 1105',
    hometown: 'Hà Nội',
    campaigns: ['Phòng thủ sông Như Nguyệt (1077)'],
  },
  {
    id: 'tran-hung-dao',
    dynasty: 'Nhà Trần',
    years: '1228 – 1300',
    name: 'Trần Hưng Đạo',
    role: 'Quốc công Tiết chế',
    bio: 'Nhà quân sự thiên tài, vị anh hùng dân tộc đã lãnh đạo quân dân Đại Việt ba lần đánh thắng quân Nguyên Mông xâm lược vào thế kỷ 13.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJFrpzZCihfeEFnPe--QTUhDBNZ4X6_sUSc0HfsXqtURNl3XP6oQTbc-CYmbN4GqKOHuY1ThUpOpniXVH53dMjWFZ_oDBC7fvfxatO9BWOk8_zAEuved4d4RloycGLuu8-WkU17_vN0K0jmSnAs3dwd785z1YIFeYpLi06prGtZhyeKEuJLt_5df61Of4NdhyznXxLcByZZllssF-bE6xgYALzqkGVgfdgEw4Zui0_jlvu0hSbA_HYFvYYkmSwRrmhEKjopSxCVSA',
    quote: '"Thà làm ma nước Nam còn hơn làm vương đất Bắc."',
    birthDeath: '1228 – 1300',
    hometown: 'Nam Định',
    campaigns: ['Kháng chiến chống Nguyên Mông lần 1 (1258)', 'Kháng chiến chống Nguyên Mông lần 2 (1285)', 'Chiến thắng Bạch Đằng (1288)'],
  },
  {
    id: 'le-loi',
    dynasty: 'Nhà Hậu Lê',
    years: '1385 – 1433',
    name: 'Lê Lợi',
    role: 'Hoàng đế sáng lập nhà Hậu Lê',
    bio: 'Lãnh tụ cuộc khởi nghĩa Lam Sơn, đánh đuổi quân Minh xâm lược, giành lại độc lập cho Đại Việt và mở ra triều đại dài nhất trong lịch sử Việt Nam.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt-9cGC2jzgeuxr4Td8TzEU-aBK3Nyo-7dYoonVBJbMFp2ZB2hVXwbE3bkSycvp6omOmZWgZ5I-6BmW5QPjxiXeE8C4DlcIOZAuLSSpVGxKSHWazv5995TZMLYtCAyzYAzW8YN-1fzf-MlTttC699w2CMweHSM8C6JfoGa5mFRfLe99QtgFADP6ya8meEB1ZFAd_1ZPv7Yqp7yuIwmr50hIwzpUdHO-BpKBpcg3Y15RtQLJPPkrBZwtfGrDGbY-OFP4YTod5PAXf4',
    quote: '"Khởi nghĩa Lam Sơn - mười năm nếm mật nằm gai."',
    birthDeath: '1385 – 1433',
    hometown: 'Lam Sơn, Thanh Hóa',
    campaigns: ['Khởi nghĩa Lam Sơn (1418–1427)'],
  },
  {
    id: 'quang-trung',
    dynasty: 'Nhà Tây Sơn',
    years: '1753 – 1792',
    name: 'Quang Trung - Nguyễn Huệ',
    role: 'Hoàng đế nhà Tây Sơn',
    bio: 'Nhà quân sự bách chiến bách thắng, người anh hùng áo vải đã đánh tan 5 vạn quân Xiêm và 29 vạn quân Thanh, có công lớn trong việc thống nhất đất nước.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJFrpzZCihfeEFnPe--QTUhDBNZ4X6_sUSc0HfsXqtURNl3XP6oQTbc-CYmbN4GqKOHuY1ThUpOpniXVH53dMjWFZ_oDBC7fvfxatO9BWOk8_zAEuved4d4RloycGLuu8-WkU17_vN0K0jmSnAs3dwd785z1YIFeYpLi06prGtZhyeKEuJLt_5df61Of4NdhyznXxLcByZZllssF-bE6xgYALzqkGVgfdgEw4Zui0_jlvu0hSbA_HYFvYYkmSwRrmhEKjopSxCVSA',
    quote: '"Đánh cho để dài tóc, đánh cho để đen răng."',
    birthDeath: '1753 – 1792',
    hometown: 'Bình Định',
    campaigns: ['Đại phá quân Thanh (1789)'],
  },
  {
    id: 'vo-nguyen-giap',
    dynasty: 'Cận Đại',
    years: '1911 – 2013',
    name: 'Đại Tướng Võ Nguyên Giáp',
    role: 'Đại tướng, Tổng tư lệnh',
    bio: 'Vị tướng huyền thoại của thế kỷ 20, người chỉ huy xuất sắc chiến dịch Điện Biên Phủ lịch sử chấn động địa cầu, giành độc lập tự do cho Tổ quốc.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBodWVVeDmnGGqGpNKx4NzIR3zLhd8N-kyNs_GPA13M7avB5ZcaRyNTUDD9fgxRb5uSlM9LIHdVK5IFlK_DM6pkFtGRW5iWJZ9jNAGeF7CW-sk0T0rSzJUMdPbzB_tuSQ56VKhEb3fbTz7vz5lKJJ7ylSNbbdoIEAK5ei4mymbgpb8i3fR0RFHrCM1R09VNrk75k640ARfSElyegcRonSIPDBHyNLd-edY654vncqTF3yR-0fj9_0JI95-LXXv5aL-dF_9Oc9zKOxs',
    quote: '"Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa."',
    birthDeath: '25/08/1911 – 04/10/2013',
    hometown: 'Lộc Thủy, Lệ Thủy, Quảng Bình',
    campaigns: ['Chiến dịch Điện Biên Phủ (1954)', 'Chiến dịch Hồ Chí Minh (1975)'],
  },
];

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 'bach-dang-1288',
    dynasty: 'Nhà Trần',
    date: '9 tháng 4 năm 1288',
    title: 'Đại Thắng Bạch Đằng 1288',
    subtitle: 'Trận chiến quyết định chấm dứt hoàn toàn mộng xâm lăng của Đế quốc Mông Cổ xuống Đông Nam Á.',
    description: 'Trận Bạch Đằng năm 1288 là trận thủy chiến lẫy lừng nhất trong lịch sử Việt Nam. Trần Hưng Đạo dùng kế cắm cọc trên sông Bạch Đằng, tiêu diệt hoàn toàn đội thuyền chiến quân Nguyên.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uFAWzn-emgH9REDB9ICUvAzW3_O09L67Gx94zhI87rJ6xtv3TAVGBjWp2GVvyAy10PXRzr5jQKb4YFxx9MtS4rFVLahWrRsu3cSD4PBDcDqW5pcVRy4LnGC-8eWPs3mF9bYggrQX4LC6VEtrteyBAnLeSNDboLZTxVIflOmNMDoedBiKDHEDIQMtUoUPdl1gjJ79AmYE5Cnqcyfu_tvPsVoqwvTgCZEWBbFx4X9SCyY8-CA-MYQzRe7pHnc8J8JPj3MyX8acBVA',
    type: 'event',
  },
];

export const dynastyFilters = ['Hùng Vương', 'Lý', 'Trần', 'Lê', 'Nguyễn', 'Cận Đại'];
