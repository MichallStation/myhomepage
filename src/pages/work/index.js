import React, { useMemo } from 'react';
import { Container } from '@chakra-ui/react';
import { VscOutput, VscPerson, VscProject } from 'react-icons/vsc';
import createFeaturesStorage from '@/features';
import { getSet } from '@/globals/sets';
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
} from '@/globals/envs';
import { fetchAllDataByLang } from '@/db';

const dataInit = {
  projs: [],
  works: [],
  collabs: [],
};

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Work({ storage, data }) {
  const { lang } = storage.current;
  data = data || dataInit;
  const { projs, works, collabs } = data;
  const set = useMemo(() => getSet(workId, lang), [lang]);

  return (
    <>
      <SEO lang={lang} title={set.title} name={set?.name} desc={set?.desc} />
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
            data={projs}
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
          <CollabShows data={collabs} mt={4} />
        </Section>
        <BallDivider mt={4} />
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchAllDataByLang(storage.current.lang);
  return {
    props: { storage, data },
  };
}

export default Work;
