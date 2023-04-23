import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import Author from '@/components/Author';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Home({ storage }) {
  const { lang } = storage;
  const set = getSet(Home.name, lang);
  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '2xl' }}
        pos="relative"
        overflow="hidden"
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
