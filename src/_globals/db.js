export const projs = [
  {
    id: 'homepage',
    en: {
      name: 'My homepage',
      desc: 'Desc',
      thumbnail: '/images/work/homepage.png',
      info: [
        {
          name: 'Platform',
          content: [
            {
              title: 'Web',
            },
          ],
        },
        {
          name: 'Stack',
          content: [
            {
              title: 'Nextjs',
              desc: 'I use for my homepage site to build fullstack.',
              href: 'https://nextjs.org/en',
            },
          ],
        },
        {
          name: 'Flow',
          content: [
            {
              title: 'Trello',
              desc: 'I use for planning and managing.',
              href: 'https://trello.com/en',
            },
            {
              title: 'Adobe Photoshop',
              desc: 'I use for editing and processing raster/pixel images.',
              href: 'https://www.adobe.com/products/photoshop.html',
            },
            {
              title: 'Adobe Illustrator',
              desc: 'I use for editing and designing vector images.',
              href: 'https://www.adobe.com/products/illustrator.html',
            },
            {
              title: 'Blender',
              desc: 'I use for design 3D images.',
              href: 'https://www.blender.org/',
            },
            {
              title: 'Paint 3D',
              desc: 'I use for draw simple path in 3D images.',
              href: 'https://apps.microsoft.com/store/detail/paint-3d/9NBLGGH5FV99',
            },
            {
              title: 'Vscode',
              desc: 'I use for primary IDE coding.',
              href: 'https://code.visualstudio.com/',
            },
            {
              title: 'Neovim',
              desc: 'I use for editing single file coding.',
              href: 'https://neovim.io/',
            },
          ],
        },
      ],
      preview: {},
    },
    vi: {
      name: 'Nhà của tôi',
      desc: '',
      thumbnail: '/images/work/homepage.png',
      info: {
        platform: ['Web'],
        stack: {
          Nextjs: 'I use for my homepage site to build fullstack.',
        },
      },
      preview: {},
    },
  },
  {
    id: 'homebusiness',
    en: {
      name: 'My business',
      thumbnail: '/images/work/homebusiness.png',
      info: {},
    },
    vi: {
      name: 'My business',
      thumbnail: '/images/work/homebusiness.png',
      info: {},
    },
  },
];

export const getProjectsByLang = (lang = 'en') =>
  projs.map((p) => ({ id: p.id, ...p?.[lang] }));

export default {};
