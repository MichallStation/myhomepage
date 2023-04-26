import React from 'react';
import { Container } from '@chakra-ui/react';
import { AiOutlineProject } from 'react-icons/ai';
import createFeaturesStorage from '@/features';
import { getSet } from '@/_globals/sets';
import SEO from '@/layouts/SEO';
import Section from '@/layouts/Section';
import BallDivider from '@/components/BallDivider';
import Footer from '@/components/Footer';
import ProjectShows from '@/components/ProjectShows';
import CollabShows from '@/components/CollabShows';
import WorkShows from '@/components/WorkShows';
import { workId } from '@/_globals/envs';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Work({ storage }) {
  const { lang } = storage.current;
  const set = getSet(workId, lang);
  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '2xl' }}
        pos="relative"
        // overflow="hidden"
      >
        <Section
          id="projs"
          title={set.projs.title}
          sep={3}
          mt={0}
          icon={<AiOutlineProject />}
        >
          {set.projs.content}
          <ProjectShows lang={lang} mt={4} />
        </Section>
        <BallDivider mt={4} />
        <Section id="works" title={set.works.title} sep={3}>
          {set.works.content}
          <WorkShows lang={lang} />
        </Section>
        <BallDivider mt={4} />
        <Section id="collabs" title={set.collabs.title} sep={3}>
          {set.collabs.content}
          <CollabShows lang={lang} mt={4} />
        </Section>
        <BallDivider mt={4} />
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

export default Work;
