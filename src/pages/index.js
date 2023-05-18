import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import Author from '@/components/Author';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import SEO from '@/layouts/SEO';
import { fetchCollectById } from '@/db';
import fallback from '@/globals/fallback';

const id = 'home';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Home({ sets }) {
  const set = sets?.home || fallback.home;
  return (
    <>
      <SEO
        sets={sets}
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumnail}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        overflow="hidden"
        px={6}
      >
        <Author sets={sets} />
        <Bio sets={sets} />
        <Footer sets={sets} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  return {
    props: { storage, sets },
  };
}

export default Home;
