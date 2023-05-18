import {
  errorId,
  homeId,
  detailId,
  workId,
  useId,
  articleId,
  offlineId,
} from '../envs';

export default {
  [homeId]: {
    title: 'Trang chủ - Nhà của tôi',
    // name: 'Nhà',
    name: 'Bluehome(Ltndat)',
    // desc: 'Ltndat - Trang chủ - Nhà của tôi, Ltndat - Công việc - Hồ sơ của tôi, Ltndat - Đồ dùng - Niềm đam mê của tôi, Ltndat - Bài viết - Tâm huyết của tôi, Lê Trần Ngọc Đạt - Trang chủ - Nhà của tôi, Lê Trần Ngọc Đạt - Công việc - Hồ sơ của tôi, Lê Trần Ngọc Đạt - Đồ dùng - Niềm đam mê của tôi, Lê Trần Ngọc Đạt - Bài viết - Tâm huyết của tôi',
    desc: 'Xin chào. 👋 Hi, Tôi là @ltndat (blue).',
  },
  [workId]: {
    title: 'Công việc - Hồ sơ của tôi',
    name: 'Hồ sơ công việc',
    projs: {
      // title: 'Dự án nổi bật',
      title: 'Dự án',
      content: 'Điểm qua các dự án nổi bật mà tôi đã từng xây dựng.',
    },
    works: {
      title: 'Công việc',
      content:
        'Những công việc tôi đã và đang tham gia, những giai đoạn trong cuộc hành trình kỹ sư, những điều tôi đã học được và ứng dụng thực tiễn.',
    },
    collabs: {
      title: 'Đối tác',
      content: 'Những đối tác trong cuộc hành trình kỹ sư của tôi.',
    },
  },
  [detailId]: {
    title: 'Chi tiết',
    name: 'Chi tiết',
    style: 'Phong cách',
    role: 'Vai trò',
    exp: 'Kinh nghiệm',
    desc: 'Mô tả',
    detail: 'Chi tiết',
    moments: 'Khoảnh khắc',
    preview: 'Xem trước',
    articles: {
      title: 'Bài viết liên quan',
      desc: 'Những bài viết liên quan đến nội dung trên.',
    },
  },
  [articleId]: {
    title: 'Bài viết - Tâm huyết của tôi',
    name: 'Bài viết',
    tablet: 'Mục lục',
    types: {
      workflow: {
        title: 'Bộ công việc',
      },
      devflow: {
        title: 'Bộ nhà phát triển',
      },
      kitflow: {
        title: 'Bộ công cụ',
      },
    },
    // read: 'Đọc',
    read: 'Xem',
  },
  [useId]: {
    title: 'Đồ dùng - Niềm đam mê của tôi',
    name: 'Đồ dùng',
    // slogan: 'Phơng châm của tôi là tận dụng tối đa hóa từng đồ dùng nhỏ nhất.',
    slogan:
      'Lối sống di động. Niềm đam mê của tôi, đi mọi nơi cùng với tất cả trong một 🌴.',
    uses: {},
  },
  [errorId]: {
    c404: {
      title: 'Không tìm thấy 404 - ⚽',
      head: 'Ối, Lỗi rồi!!!!',
      msg: 'Có một điều gì đó sai sai, bạn đang tìm kiếm một điều không hề có. Nên bạn ơi! bạn nên về nhà...',
      btn: 'Về nhà',
    },
    c500: {
      title: 'Lỗi máy chủ 500 - ⚽',
      head: 'Ối, Sự cố máy chủ!!!!',
      msg: 'Tình hình có một vài sự cố ở phía chủ. Nên bạn hãy thử tải lại trang...',
      btn: 'Về nhà',
    },
  },
  [offlineId]: {
    title: 'Ngoại tuyến - ⚽',
    head: 'Ối, bạn đang ngoại tuyến!!!!',
    msg: 'Trang này chỉ có thể dùng khi bạn kết nối mạng. Nên bạn hãy kết nối mạng và tải lại trang.',
    btn: 'Tải lại',
  },
  Navbar: {
    Home: 'Nhà',
    Work: 'Công việc',
    Use: 'Đồ dùng',
    Articles: 'Bài viết',
    Source: 'Nguồn',
  },
  Author: {
    welcome: 'Xin chào, Tôi là nhà phát triển ứng dụng tại Việt Nam!',
    name: 'Lê Trần Ngọc Đạt',
    desc: 'Nhà phát triển (Front End / Back End / Fullstack)',
    worktitle: 'Công việc',
    workcontent:
      'Đạt là một nhà phát triển ứng dụng fullstack tại TP Hồ Chí Minh với niềm đam mê xây dựng các sản phẩm/dịch vụ kỹ thuật số. Anh ấy có sở trường về việc lập kế hoạch, thiết kế và tạo ra các sản phẩm để giải quyết các vấn đề thực tế với code. Khi ngoài công việc, anh ấy ưa thích được ngồi bên cây đàn guitar/piano của mình.',
    workbtn: 'Hồ sơ',
  },
  Bio: {
    bio: {
      title: 'Tiểu sử',
      content: [
        ['1999', 'Sinh ra tại TP Hồ Chí Minh.'],
        [
          '2017',
          'Theo học chuyên ngành Kỹ sư phần mềm tại Đại Học Sư Phạm Kỹ Thuật TPHCM.',
        ],
        ['2021 đến hiện tại', 'Bắt đầu sự nghiệp kỹ sư phát triển phần mềm.'],
      ],
    },
    love: {
      title: 'Tôi',
      content: [
        { name: 'Nghệ thuật', href: 'https://google.com' },
        { name: 'Âm nhạc' },
        { name: 'Bóng đá' },
        { name: 'Guitar' },
        { name: 'Piano' },
        { name: 'Nhiếp ảnh' },
        { name: 'Thiết kế' },
        { name: 'Học máy' },
      ],
    },
    social: {
      title: 'Mạng xã hội',
      // title: 'Kết nối',
    },
    news: {
      // title: 'Social',
      title: 'Bản tin',
      desc: '',
    },
  },
  Footer: {
    title: '© 2023 Ltndat. Đã đăng ký bản quyền.',
  },
  Blue: {
    name: 'Blue',
    welcome: {
      newbie: 'Hú, xin chào bạn mới.',
      old: 'Hú, chào mừng bạn trở lại.',
    },
    intro: [
      'Hi, Tôi là Blue. Tôi là trợ lý của Đạt.',
      // 'Bạn sẽ thấy tôi ở mọi nơi mà Đạt từng làm việc.',
    ],
    joke: 'Bạn sẽ thấy tôi ở mọi nơi mà Đạt từng làm việc.',
    guide: {
      [homeId]: 'Bạn đang ở tại',
      [workId]: '',
    },
  },
};
