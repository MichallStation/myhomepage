export const documentId = 'document';
export const useId = 'use';
export const articleId = 'article';
export const workId = 'work';
export const homeId = 'home';
export const errorId = 'error';
export const detailId = 'detail';
export const offlineId = 'offline';
export const AuthorId = 'Author';
export const Ball3dId = 'Ball3d';
export const BallChatId = 'BallChat';
export const BallDividerId = 'BallDivider';
export const BallProgressId = 'BallProgress';
export const BallSpinnerId = 'BallSpinner';
export const BallToastId = 'BallToast';
export const BioId = 'Bio';
export const BlueId = 'Blue';
export const BrandId = 'Brand';
export const CardId = 'Card';
export const CollabShowsId = 'CollabShows';
export const DetailInfoId = 'DetailInfo';
export const ErrorBannerId = 'ErrorBanner';
export const FloatingId = 'Floating';
export const FooterId = 'Footer';
export const LanguageButtonId = 'LanguageButton';
export const NavbarId = 'Navbar';
export const PreviewInfoId = 'PreviewInfo';
export const ProjectShowsId = 'ProjectShows';
export const ThemeButtonId = 'ThemeButton';
export const WorkShowsId = 'WorkShows';

export const detailProjectType = 'projs';
export const detailWorkType = 'works';
export const detailCollabType = 'collabs';
export const detailCommunityType = 'community';

export const useWorkflowType = 'workflow';
export const useKitflowType = 'kitflow';
export const useDevflowType = 'devflow';
export const articleGeneralType = 'general';

export const isServerSide = typeof window === 'undefined';

export const ENV_HOST_URL = process.env.NEXT_PUBLIC_URL;
export const ENV_DB_HOST_DEV = 'http://localhost:5000';
export const ENV_DB_HOST_PROD =
  'https://raw.githubusercontent.com/ltndat/myhomepage/db';
export const ENV_DB_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://raw.githubusercontent.com/ltndat/myhomepage/db';
// 'https://raw.githubusercontent.com/ltndat/myhomepage/db';

export default {};
