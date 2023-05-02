import React, { useMemo } from 'react';
import { Container } from '@chakra-ui/react';
import { VscOutput, VscPerson, VscProject } from 'react-icons/vsc';
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
        px={6}
      >
        <Section
          id={detailProjectType}
          title={set.projs.title}
          mt={0}
          icon={<VscProject />}
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
        <Section
          id={detailWorkType}
          title={set.works.title}
          icon={<VscOutput />}
        >
          {set.works.content}
          <ThumbnailShows
            data={works}
            type={detailWorkType}
            lang={lang}
            mt={4}
          />
        </Section>
        <BallDivider mt={4} />
        <Section
          id={detailCollabType}
          title={set.collabs.title}
          icon={<VscPerson />}
        >
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
