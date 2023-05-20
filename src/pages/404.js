import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';
import { MdOutlineDangerous } from 'react-icons/md';
import { useRouter } from 'next/router';
import ErrorBanner from '@/components/ErrorBanner';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import createFeaturesStorage from '@/features';
import langs from '@/langs';

/** @param {{ storage: import('@/@type/features').FeaturesStorage }} */
function E404() {
  const { locale } = useRouter();
  const set = langs[locale || 'en']['404'];

  return (
    <>
      <SEO title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        px={6}
        overflow="hidden"
      >
        <Heading display="flex" alignItems="center" filter="contrast(0.5)">
          {set.head}
          <Box ml={2} className="heartbeat">
            <MdOutlineDangerous color="red" />
          </Box>
        </Heading>
        <Box>
          <Box mt={2} color="second">
            <ErrorBanner />
          </Box>
          <Heading
            mt={[0, -4]}
            textAlign="justify"
            filter="contrast(0.5)"
            fontSize="xl"
          >
            {set.msg}
          </Heading>
        </Box>
        <Box mt={10} display="flex" justifyContent="center">
          <Button
            className="prim-btn"
            as={Link}
            href="/"
            size="lg"
            leftIcon={<BsBoxArrowInLeft />}
          >
            {set.btn}
          </Button>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

// E404.getLayout = (page) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const storage = useFeaturesStorage();
//   // return <PageStatic>{page}</PageStatic>;
//   return <Page storage={storage}>{page}</Page>;
// };

/** @param {import('next').GetStaticPropsContext} context */
export async function getStaticProps(context) {
  return {
    props: {
      storage: createFeaturesStorage(context),
    },
  };
}

export default E404;
