import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';
import { MdOutlineDangerous } from 'react-icons/md';
import { useRouter } from 'next/router';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import Banner500 from '@/components/ErrorBanner/Banner500';
import langs from '@/langs';
import PageStatic from '@/layouts/PageStatic';

function E500() {
  const { locale } = useRouter();
  const set = langs[locale]['500'];
  return (
    <>
      <SEO title={set.title} />
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
        <Footer />
      </Container>
    </>
  );
}

E500.getLayout = (page) => <PageStatic>{page}</PageStatic>;

/** @param {import('next').GetStaticPropsContext} context */
export async function getStaticProps(context) {
  return {
    props: context,
  };
}

export default E500;
