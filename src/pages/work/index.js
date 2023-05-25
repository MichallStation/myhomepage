import { useRouter } from 'next/router';
import React from 'react';
import { Container } from '@chakra-ui/react';
import { VscOutput, VscPerson, VscProject } from 'react-icons/vsc';
import { fallback, langs } from '@/globals';
import createFeaturesStorage from '@/features';
import { fetchAllDetailsByLang } from '@/db';
import { Section, SEO } from '@/layouts';
import { CollabShows, Divider, Footer, ThumbnailShows } from '@/components';
import { CommunityIcon } from '@/components/icons';

/** @param {{ storage: import('@/@type/features').FeaturesStorage  }} */
function Work({ data }) {
  const { locale } = useRouter();
  const set = langs[locale].work;
  return (
    <>
      <SEO
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumbnail}
      />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" px={6}>
        <Section id="proj" title={set.proj.title} mt={0} icon={<VscProject />}>
          {set.proj.content}
          {data?.proj && (
            <ThumbnailShows baseUrl="/work/proj" data={data?.proj} mt={4} />
          )}
        </Section>
        <Divider mt={4} />
        <Section id="job" title={set.job.title} icon={<VscOutput />}>
          {set.job.content}
          {data?.job && (
            <ThumbnailShows baseUrl="/work/job" data={data?.job} mt={4} />
          )}
        </Section>
        <Divider mt={4} />
        <Section id="collab" title={set.collab.title} icon={<VscPerson />}>
          {set.collab.content}
          {data?.collab && <CollabShows data={data?.collab} mt={4} />}
        </Section>
        <Divider mt={4} />
        <Section
          id="community"
          title={set.community.title}
          icon={<CommunityIcon />}
        >
          {set.community.content}
          {data?.community && (
            <ThumbnailShows
              baseUrl="/work/community"
              data={data?.community}
              mt={4}
            />
          )}
        </Section>
        <Divider mt={4} />
        <Footer />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = (await fetchAllDetailsByLang(storage.lang)) || fallback.work;
  return {
    props: { storage, data },
  };
}

export default Work;
