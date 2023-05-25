import { useRouter } from 'next/router';
import React from 'react';
import { icon, langs } from '@/globals';
import { fetchUseById } from '@/db';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { PageDetail, SEO } from '@/layouts';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function UseDetail({ data }) {
  const { locale } = useRouter();
  if (!data) return <E404 />;
  const set = langs[locale].use;
  const setDetail = langs[locale].detail;

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
        title={`${set.title} - ${data.title}`}
        name={data?.title || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail set={setDetail} data={data} breads={breads}>
        {data.title}
      </PageDetail>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchUseById(context.query.id, storage.lang);
  return {
    props: { storage, data },
  };
}

export default UseDetail;
