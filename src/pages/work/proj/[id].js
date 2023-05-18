import React from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { VscBook, VscPreview } from 'react-icons/vsc';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { fetchDetailById, fetchCollectById } from '@/db';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import icons from '@/globals/icon';
import fallback from '@/globals/fallback';

const id = 'proj';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function ProjectDetail({ sets, data }) {
  if (!data) return <E404 />;
  const set = sets?.detail || fallback.detail;
  const setWork = sets?.work || fallback.work;
  const breads = [
    { name: setWork.name, href: '/work', icon: icons.work.Icon },
    {
      name: setWork?.[id].title,
      href: `/work#${id}`,
      icon: icons.work?.[id]?.Icon,
    },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icons.detail.Icon,
    },
  ];

  return (
    <>
      <SEO
        sets={sets}
        title={`${set.title} ${setWork?.[id].title} - ${data.title}`}
        name={data?.name || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail sets={sets} data={data} breads={breads}>
        {data?.detail && (
          <Section title={set.detail} id="detail" sep={4} icon={<VscBook />}>
            <DetailInfo data={data.detail} mt={2} />
          </Section>
        )}
        {data?.style && (
          <Section
            title={set.style}
            id="style"
            sep={4}
            icon={<MdOutlineStyle />}
          >
            <DetailInfo data={data.style} mt={2} />
          </Section>
        )}
        {data?.preview && (
          <Section
            title={set.preview}
            id="preview"
            sep={4}
            icon={<VscPreview />}
          >
            <PreviewInfo data={data.preview} />
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

export default ProjectDetail;
