import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineDangerous } from 'react-icons/md';
import ErrorBanner from '@/components/ErrorBanner';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import Footer from '@/components/Footer';
import { errorId } from '@/_globals/envs';
import useFeaturesStorage from '@/features/hooks/useFeaturesStorage';
import Page from '@/layouts/Page';
import Banner500 from '@/components/ErrorBanner/Banner500';

function Error() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(Cookies.get('lang') || 'en');
  }, []);
  const set = getSet(errorId, lang)?.c500;

  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
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
            <Banner500 />
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
        <Footer lang={lang} />
      </Container>
    </>
  );
}

Error.getLayout = (page) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const storage = useFeaturesStorage();
  return <Page storage={storage}>{page}</Page>;
};

/** @param {import('next').GetStaticPropsContext} context */
export async function getStaticProps(context) {
  return {
    // props: { storage: createFeaturesStorage(context) },
    props: context,
  };
}

export default Error;
