import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import Author from '@/components/Author';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import SEO from '@/layouts/SEO';
import { getSet } from '@/globals/sets';
import { homeId } from '@/globals/envs';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Home({ storage }) {
  const { lang } = storage.current;
  const set = getSet(homeId, lang);
  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        overflow="hidden"
        px={6}
      >
        <Author lang={lang} />
        <Bio lang={lang} />
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: { storage: createFeaturesStorage(context) },
  };
}

export default Home;
