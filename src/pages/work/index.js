import React, { useMemo } from 'react';
import { Container } from '@chakra-ui/react';
import { AiOutlineProject } from 'react-icons/ai';
import createFeaturesStorage from '@/features';
import { getSet } from '@/_globals/sets';
import SEO from '@/layouts/SEO';
import Section from '@/layouts/Section';
import BallDivider from '@/components/BallDivider';
import Footer from '@/components/Footer';
import ThumbnailShows from '@/components/ThumbnailShows';
import CollabShows from '@/components/CollabShows';
import {
  detailCollabType,
  detailProjectType,
  detailWorkType,
  workId,
} from '@/_globals/envs';
import { getProjectsByLang, getWorksByLang } from '@/_globals/db';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Work({ storage }) {
  const { lang } = storage.current;
  const set = getSet(workId, lang);
  const projects = useMemo(() => getProjectsByLang(lang), [lang]);
  const works = useMemo(() => getWorksByLang(lang), [lang]);

  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        // overflow="hidden"
      >
        <Section
          id={detailProjectType}
          title={set.projs.title}
          sep={3}
          mt={0}
          icon={<AiOutlineProject />}
        >
          {set.projs.content}
          <ThumbnailShows
            data={projects}
            type={detailProjectType}
            lang={lang}
            mt={4}
          />
        </Section>
        <BallDivider mt={4} />
        <Section id={detailWorkType} title={set.works.title} sep={3}>
          {set.works.content}
          <ThumbnailShows
            data={works}
            type={detailWorkType}
            lang={lang}
            mt={4}
          />
        </Section>
        <BallDivider mt={4} />
        <Section id={detailCollabType} title={set.collabs.title} sep={3}>
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
