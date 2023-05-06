import Head from 'next/head';
import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

function PWA() {
  return (
    <Head>
      <meta
        name="theme-color"
        content={useColorModeValue('#f1e7db', '#192227')}
      />
    </Head>
  );
}

export default PWA;
