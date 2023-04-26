import useFeaturesStorage from '@/features/hooks/useFeaturesStorage';
import Page from '../Page';

function PageStatic({ children }) {
  const storage = useFeaturesStorage();
  return <Page storage={storage}>{children}</Page>;
}

export default PageStatic;
