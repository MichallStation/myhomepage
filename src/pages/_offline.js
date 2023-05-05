import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { VscInfo } from 'react-icons/vsc';
import { IoReload } from 'react-icons/io5';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import Footer from '@/components/Footer';
import { offlineId } from '@/_globals/envs';
import useFeaturesStorage from '@/features/hooks/useFeaturesStorage';
import Page from '@/layouts/Page';
import OfflineBanner from '@/components/ErrorBanner/OfflineBanner';

function Offline() {
  const [lang, setLang] = useState('en');
  const router = useRouter();
  useEffect(() => {
    setLang(Cookies.get('lang') || 'en');
  }, []);
  const set = getSet(offlineId, lang);

  return (
    <>
      <SEO lang={lang} title={set.title} />
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
        <Footer lang={lang} />
      </Container>
    </>
  );
}

Offline.getLayout = (page) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const storage = useFeaturesStorage();
  // return <PageStatic>{page}</PageStatic>;
  return <Page storage={storage}>{page}</Page>;
};

/** @param {import('next').GetStaticPropsContext} context */
export async function getStaticProps(context) {
  // console.log(context);
  return {
    // props: {
    //   storage: createFeaturesStorage(context),
    //   cookies: context.req.cookies,
    // },,
    props: context,
  };
}

export default Offline;
