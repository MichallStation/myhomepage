import {
  AiFillGithub,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import { BiBookReader, BiObjectsHorizontalCenter } from 'react-icons/bi';
import { GiNewspaper } from 'react-icons/gi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineArticle, MdWorkOutline } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import {
  VscCode,
  VscOutput,
  VscPerson,
  VscProject,
  VscTools,
} from 'react-icons/vsc';
import { PagePostIcon } from '@/components/icons';

export default {
  home: {
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
  work: {
    Icon: MdWorkOutline,
    proj: {
      Icon: VscProject,
    },
    job: {
      Icon: VscOutput,
    },
    collab: {
      Icon: VscPerson,
    },
  },
  detail: {
    Icon: PagePostIcon,
  },
  article: {
    Icon: GiNewspaper,
    work: {
      Icon: MdWorkOutline,
    },
    dev: {
      Icon: VscCode,
    },
    kit: {
      Icon: VscTools,
    },
    common: {
      Icon: MdOutlineArticle,
    },
    read: {
      Icon: BiBookReader,
    },
  },
  use: {
    Icon: AiOutlineVideoCamera,
    detail: {
      Icon: FiPackage,
    },
  },
  404: {},
  500: {},
  offline: {},
  // Navbar: {
  //   Home: {
  //     Icon: AiOutlineHome,
  //   },
  //   Work: {
  //     Icon: MdWorkOutline,
  //   },
  //   Use: {
  //     Icon: AiOutlineVideoCamera,
  //   },
  //   Article: {
  //     Icon: GiNewspaper,
  //   },
  //   Source: {
  //     Icon: AiFillGithub,
  //   },
  // },
  other: {
    github: {
      Icon: AiFillGithub,
    },
  },
};
