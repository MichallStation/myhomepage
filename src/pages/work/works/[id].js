import React from 'react';
import { BsExplicit, BsPersonVcard } from 'react-icons/bs';
import { IoFilmOutline } from 'react-icons/io5';
import { GiNewspaper } from 'react-icons/gi';

import { getSet } from '@/globals/sets';
import { detailId, detailWorkType } from '@/globals/envs';
import { fetchWorkById } from '@/db';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
// import ThumbnailShows from '@/components/ThumbnailShows';

function WorksDetail({ storage, data }) {
  const { lang } = storage.current;
  const set = getSet(detailId, lang);
  if (!data) return <E404 />;
  return (
    <PageDetail lang={lang} type={detailWorkType} detail={data}>
      <Section title={set.role} id="role" sep={4} icon={<BsPersonVcard />}>
        {data?.role && <DetailInfo data={data.role} mt={2} />}
      </Section>
      <Section title={set.exp} id="exp" sep={4} icon={<BsExplicit />}>
        {data?.exp && <DetailInfo data={data.exp} mt={2} />}
      </Section>
      <Section
        title={set.moments}
        id="moments"
        sep={4}
        icon={<IoFilmOutline />}
      >
        {data?.moments && <PreviewInfo data={data.moments} />}
      </Section>
      <Section
        title={set.articles.title}
        id="articles"
        sep={4}
        icon={<GiNewspaper />}
      >
        {data?.articlesDesc || set.articles.desc}
        {/* {data?.articles && (
          <PreviewLinkShows data={data?.articles} lang={lang} mt={4} />
        )} */}
      </Section>
    </PageDetail>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchWorkById(context.query.id, storage.current.lang);
  return {
    props: { storage, data },
  };
}

export default WorksDetail;
