import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ErrorBanner from '@/components/ErrorBanner';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';

function $404() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(Cookies.get('lang') || 'en');
  }, []);
  const set = getSet($404.name, lang);

  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container maxW={{ sm: 'full', md: '2xl' }} overflow="hidden">
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
      </Container>
    </>
  );
}

export default $404;
