import React from 'react';
import { BsExplicit, BsPersonVcard } from 'react-icons/bs';
import { IoFilmOutline } from 'react-icons/io5';
import { GiNewspaper } from 'react-icons/gi';
import { fetchCollectById, fetchDetailById } from '@/db';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import SEO from '@/layouts/SEO';
import icon from '@/globals/icon';
import fallback from '@/globals/fallback';
import Footer from '@/components/Footer';
// import ThumbnailShows from '@/components/ThumbnailShows';

const id = 'job';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function JobDetail({ sets, data }) {
  if (!data) return <E404 />;
  const set = sets?.detail || fallback.detail;
  const setWork = sets?.work || fallback.work;
  const breads = [
    { name: setWork.name, href: '/work', icon: icon.work.Icon },
    {
      name: setWork?.[id].title,
      href: `/work#${id}`,
      icon: icon.work?.[id]?.Icon,
    },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icon.detail.Icon,
    },
  ];

  return (
    <>
      <SEO
        sets={sets}
        title={`${set.title} ${setWork?.[id].title} - ${data.title}`}
        name={data?.title || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail sets={sets} data={data} breads={breads}>
        {data?.role && (
          <Section title={set.role} id="role" sep={4} icon={<BsPersonVcard />}>
            {data?.role && <DetailInfo data={data.role} mt={2} />}
          </Section>
        )}
        {data?.exp && (
          <Section title={set.exp} id="exp" sep={4} icon={<BsExplicit />}>
            <DetailInfo data={data.exp} mt={2} />
          </Section>
        )}
        {data?.moments && (
          <Section
            title={set.moments}
            id="moment"
            sep={4}
            icon={<IoFilmOutline />}
          >
            <PreviewInfo data={data.moments} />
          </Section>
        )}
        {data?.articles && (
          <Section
            title={set.articles.title}
            id="article"
            sep={4}
            icon={<GiNewspaper />}
          >
            {data?.articlesDesc || set.articles.desc}
            {/* {data?.articles && (
          <PreviewLinkShows data={data?.articles} lang={lang} mt={4} />
        )} */}
          </Section>
        )}
        <Footer sets={sets} />
      </PageDetail>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  const data = await fetchDetailById(
    context.query.id,
    id,
    storage.current.lang,
  );
  return {
    props: { storage, sets, data },
  };
}

export default JobDetail;
