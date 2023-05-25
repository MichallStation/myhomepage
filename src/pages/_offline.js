import { useRouter } from 'next/router';
import React from 'react';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { VscInfo } from 'react-icons/vsc';
import { IoReload } from 'react-icons/io5';
import { langs } from '@/globals';
import createFeaturesStorage from '@/features';
import { PageStatic, SEO } from '@/layouts';
import { Footer, OfflineBanner } from '@/components';

function Offline() {
  const router = useRouter();
  const { locale } = router;
  const set = langs[locale].offline;
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
            <VscInfo color="gray" />
          </Box>
        </Heading>
        <Box>
          <Box mt={2} color="second">
            <OfflineBanner />
          </Box>
          <Heading
            // mt={[0, -4]}
            mt={4}
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
            size="lg"
            leftIcon={<IoReload />}
            onClick={() => router.reload()}
          >
            {set.btn}
          </Button>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

Offline.getLayout = (page) => <PageStatic>{page}</PageStatic>;

/** @param {import('next').GetStaticPropsContext} context */
export async function getStaticProps(context) {
  return {
    props: {
      storage: createFeaturesStorage(context),
    },
  };
}

export default Offline;
