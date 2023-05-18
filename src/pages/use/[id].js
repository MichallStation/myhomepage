import React from 'react';
import createFeaturesStorage from '@/features';
import { fetchUseById, fetchCollectById } from '@/db';
import fallback from '@/globals/fallback';
import SEO from '@/layouts/SEO';
import E404 from '@/pages/404';
import icon from '@/globals/icon';
import Footer from '@/components/Footer';
import PageDetail from '@/layouts/PageDetail';

const id = 'use';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function UseDetail({ sets, data }) {
  if (!data) return <E404 />;
  const set = sets?.use || fallback.use;

  const breads = [
    { name: set.name, href: '/use', icon: icon.use.Icon },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icon.use.detail.Icon,
    },
  ];
  return (
    <>
      <SEO
        sets={sets}
        title={`${set.title} - ${data.title}`}
        name={data?.name || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail sets={sets} data={data} breads={breads}>
        {data.title}
        <Footer sets={sets} />
      </PageDetail>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  const data = await fetchUseById(context.query.id, storage.current.lang);
  return {
    props: { storage, sets, data },
  };
}

export default UseDetail;
