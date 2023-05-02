import {
  AiFillGithub,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import { BiObjectsHorizontalCenter } from 'react-icons/bi';
import { GiNewspaper } from 'react-icons/gi';
import { GrArticle } from 'react-icons/gr';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdWorkOutline } from 'react-icons/md';
import {
  VscCode,
  VscOutput,
  VscPerson,
  VscProject,
  VscTools,
} from 'react-icons/vsc';
import { articleId, detailId, errorId, homeId, useId, workId } from './envs';

export default {
  [homeId]: {
    Icon: AiOutlineHome,
    bio: {
      Icon: BiObjectsHorizontalCenter,
    },
    love: {
      Icon: AiOutlineHeart,
    },
    social: {
      Icon: IoShareSocialOutline,
    },
  },
  [workId]: {
    Icon: MdWorkOutline,
    projs: {
      Icon: VscProject,
    },
    works: {
      Icon: VscOutput,
    },
    collabs: {
      Icon: VscPerson,
    },
  },
  [detailId]: {
    Icon: GrArticle,
  },
  [articleId]: {
    Icon: GiNewspaper,
    types: {
      workflow: {
        Icon: MdWorkOutline,
      },
      devflow: {
        Icon: VscCode,
      },
      kitflow: {
        Icon: VscTools,
      },
    },
  },
  [useId]: {
    Icon: AiOutlineVideoCamera,
  },
  [errorId]: {
    c404: {},
    c500: {},
  },
  Navbar: {
    Home: {
      Icon: AiOutlineHome,
    },
    Work: {
      Icon: MdWorkOutline,
    },
    Use: {
      Icon: AiOutlineVideoCamera,
    },
    Source: {
      Icon: AiFillGithub,
    },
  },
};
