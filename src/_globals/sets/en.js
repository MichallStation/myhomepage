import {
  errorId,
  homeId,
  detailId,
  workId,
  useId,
  articleId,
  documentId,
  offlineId,
} from '../envs';

export default {
  [documentId]: {
    name: 'Ltndat - Homepage',
    desc: 'Ltndat - Homepage - My home, Ltndat - Work - My portfolio, Ltndat - Use - My passion, Ltndat - Article - My heart, Le Tran Ngoc Dat - Homepage - My home, Le Tran Ngoc Dat - Work - My portfolio, Le Tran Ngoc Dat - Use - My passion, Le Tran Ngoc Dat - Article - My heart',
  },
  [homeId]: {
    title: 'Homepage - My home',
    name: 'Home',
  },
  [workId]: {
    title: 'Workpage - My portfolio',
    name: 'Workpage',
    projs: {
      title: 'Projects',
      content: 'The projects highlight that I have been building.',
    },
    works: {
      title: 'Works',
      content:
        'The works that I have been working, the stages of my developer journey, the things that I have been learning and applying to the real world.',
    },
    collabs: {
      title: 'Collaborations',
      content: 'The collaborations/partners on my developer journey.',
    },
  },
  [detailId]: {
    title: 'Detail',
    name: 'Detail',
    desc: 'Description',
    style: 'Style',
    role: 'Role',
    exp: 'Experience',
    detail: 'Detail',
    moment: 'Moment',
    preview: 'Preview',
    article: {
      title: 'Related articles',
      desc: 'How i apply all of things have been learning and experience to the real world.',
    },
  },
  [articleId]: {
    title: 'Article - My heart',
    name: 'Article',
    tablet: 'Tablet of Contents',
    types: {
      workflow: {
        title: 'Workflow',
      },
      devflow: {
        title: 'Devflow',
      },
      kitflow: {
        title: 'Kitflow',
      },
    },
    read: 'Read',
  },
  [useId]: {
    title: 'Usepage - My passion',
    name: 'Use',
    slogan: 'Mobile lifestyle. My passion, go to everywhere with all in one.',
    uses: {},
  },
  [errorId]: {
    c404: {
      title: 'Not found 404 - ⚽',
      head: 'Oopss, Error!!!!',
      msg: 'There is something wrong, you found something not have. So, you should go home...',
      btn: 'Go home',
    },
    c500: {
      title: 'Server problem 500 - ⚽',
      head: 'Oopss, Server Error!!!!',
      msg: 'This situation mean server have something wrong. So, you can reload this page...',
      btn: 'Go home',
    },
  },
  [offlineId]: {
    title: 'Offline - ⚽',
    head: 'Oopss, you offline!!!!',
    msg: 'This app only run when internet connected. So, you must connected internet to use.',
    btn: 'Reload',
  },
  Navbar: {
    Home: 'Home',
    Work: 'Work',
    Use: 'Use',
    Source: 'Source',
  },
  Author: {
    welcome: "Hello, I'm app developer based in Vietnam!",
    name: 'Le Tran Ngoc Dat',
    desc: 'Developer (Front End / Back End / Fullstack)',
    worktitle: 'Work',
    workcontent:
      'Dat is a fullstack developer based in Ho Chi Minh with a passion for building digital services/stuff he wants. He has a knack for all things for planning, designing, and creating products all the way to solving real-life problems with code. When outside of work, he loves hanging out with his guitar/piano.',
    workbtn: 'My portfolio',
  },
  Bio: {
    bio: {
      title: 'Bio',
      content: [
        ['1999', 'Born in Ho Chi Minh, Viet Nam.'],
        [
          '2017',
          'Studied software engineer at Ho Chi Minh University of Technology and Education.',
        ],
        ['2021 to present', 'Start developer career.'],
      ],
    },
    love: {
      title: 'I',
      content: [
        { name: 'Art' },
        { name: 'Music' },
        { name: 'Football' },
        { name: 'Playing Guitar' },
        { name: 'Playing Piano' },
        { name: 'Photography' },
        { name: 'Design' },
        { name: 'Machine Learning' },
      ],
    },
    social: {
      title: 'Social',
    },
  },
  Footer: {
    title: '© 2023 Ltndat. All Rights Reserved.',
  },
  Blue: {
    name: 'Blue',
    welcome: {
      newbie: 'Hi, Welcome guys.',
      old: 'Hi, Welcome back guys.',
    },
    intro: [
      "Hi, I'm Blue. I'm Dat's assistant.",
      // "You'll see me everywhere that Dat worked.",
    ],
    joke: "You'll see me everywhere Dat's worked.",
  },
};
