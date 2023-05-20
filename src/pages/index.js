import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import createFeaturesStorage from '@/features';
import Author from '@/components/Author';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import SEO from '@/layouts/SEO';
import langs from '@/langs';

/** * @param {{ storage: import('@/@type/features').FeaturesStorage  }} * */
function Home() {
  const { locale } = useRouter();
  const set = langs[locale || 'en'].home;
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
