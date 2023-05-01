import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import author from '@/author';

export default [
  {
    name: 'github',
    username: '@ltndat',
    icon: <AiFillGithub />,
    href: author.GITHUB,
  },
  {
    name: 'twitter',
    username: '@ltndat',
    icon: <BsTwitter />,
    href: author.TWITTER,
  },
  {
    name: 'instagram',
    username: '@ltndat_',
    icon: <AiFillInstagram />,
    href: author.INSTAGRAM,
  },
  {
    name: 'linkedin',
    username: '@ltndat',
    icon: <AiFillLinkedin />,
    href: author.LINKEDIN,
  },
  // {
  //   name: 'facebook',
  //   username: '@ltndat',
  //   icon: <AiFillFacebook />,
  //   href: author.FACEBOOK,
  // },
];
