import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import { langs } from '@/globals';
import createFeaturesStorage from '@/features';
import { SEO } from '@/layouts';
import { Author, Bio, Footer } from '@/components';

/** * @param {{ storage: import('@/@type/features').FeaturesStorage  }} * */
function Home() {
  const { locale } = useRouter();
  const set = langs[locale].home;
  return (
    <>
      <SEO
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumbnail}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        overflow="hidden"
        px={6}
      >
        <Author />
        <Bio />
        <Footer />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  return {
    props: { storage },
  };
}

export default Home;
