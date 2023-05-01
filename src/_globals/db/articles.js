export default [
  {
    id: 'laptop',
    type: 'workflow',
    en: {
      title: 'My laptop',
      desc: 'I did all things',
    },
    vi: {
      title: 'Máy tính của tôi',
      desc: 'Tôi đã làm tất cả mọi thứ trong một chiếc laptop như thế nào?',
      markdown: `${process.env.NEXT_PUBLIC_VERCEL_URL}/data/articles/laptop/vi.md`,
    },
    markdown: `${process.env.NEXT_PUBLIC_VERCEL_URL}/data/articles/laptop/en.md`,
    thumbnail:
      'https://laptopaz.vn/media/product/1317_laptop_dell_xps_9550_laptopaz__5_.JPG',
    images: [
      {
        title: '',
        thumbnail:
          'https://laptopaz.vn/media/product/1317_laptop_dell_xps_9550_laptopaz__5_.JPG',
      },
    ],
  },
];
