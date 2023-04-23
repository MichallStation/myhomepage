import React from 'react';
import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Work({ storage }) {
  return (
    <Container maxW={{ sm: 'full', md: '2xl' }} overflow="hidden"></Container>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: { storage: createFeaturesStorage(context) },
  };
}

export default Work;
