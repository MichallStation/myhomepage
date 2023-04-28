import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import { useId } from '@/_globals/envs';
import Footer from '@/components/Footer';
import Section from '@/layouts/Section';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Use({ storage }) {
  const { lang } = storage.current;
  const set = getSet(useId, lang);
  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        overflow="hidden"
      >
        <Heading
          fontSize="2xl"
          textAlign="center"
          borderRadius="32px"
          p={3}
          backgroundColor="second"
        >
          {set?.slogan}
        </Heading>
        <Section title={set.workflow.title}>{set.workflow.content}</Section>
        <Section title="Cong cu">{set.workflow.content}</Section>
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: { storage: createFeaturesStorage(context) },
  };
}

export default Use;
