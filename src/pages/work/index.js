import React from 'react';
import { Container } from '@chakra-ui/react';
import { VscOutput, VscPerson, VscProject } from 'react-icons/vsc';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import Section from '@/layouts/Section';
import BallDivider from '@/components/BallDivider';
import Footer from '@/components/Footer';
import ThumbnailShows from '@/components/ThumbnailShows';
import CollabShows from '@/components/CollabShows';
import { fetchAllDetailsByLang, fetchCollectById } from '@/db';
import { CommunityIcon } from '@/components/icons';
import fallback from '@/globals/fallback';
import fallbackdata from '@/globals/fallbackdata';

const id = 'work';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Work({ sets, data }) {
  data = data || fallbackdata.work;
  const set = sets?.work || fallback.work;
  return (
    <>
      <SEO
        sets={sets}
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumnail}
      />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" px={6}>
        <Section id="proj" title={set.proj.title} mt={0} icon={<VscProject />}>
          {set.proj.content}
          {data?.proj && (
            <ThumbnailShows
              baseUrl="/work/proj"
              data={data?.proj}
              sets={sets}
              mt={4}
            />
          )}
        </Section>
        <BallDivider mt={4} />
        <Section id="job" title={set.job.title} icon={<VscOutput />}>
          {set.job.content}
          {data?.job && (
            <ThumbnailShows
              baseUrl="/work/job"
              data={data?.job}
              sets={sets}
              mt={4}
            />
          )}
        </Section>
        <BallDivider mt={4} />
        <Section id="collab" title={set.collab.title} icon={<VscPerson />}>
          {set.collab.content}
          {data?.collab && <CollabShows data={data?.collab} mt={4} />}
        </Section>
        <BallDivider mt={4} />
        <Section
          id="community"
          title={set.community.title}
          icon={<CommunityIcon />}
        >
          {set.community.content}
          {data?.community && (
            <ThumbnailShows
              baseUrl="/work/community"
              data={data?.work}
              sets={sets}
              mt={4}
            />
          )}
        </Section>
        <BallDivider mt={4} />
        <Footer sets={sets} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  const data = await fetchAllDetailsByLang(storage.current.lang);
  return {
    props: { storage, sets, data },
  };
}

export default Work;
