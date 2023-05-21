import React from 'react';
import { useRouter } from 'next/router';
import createFeaturesStorage from '@/features';
import { fetchUseById } from '@/db';
import SEO from '@/layouts/SEO';
import E404 from '@/pages/404';
import icon from '@/globals/icon';
import Footer from '@/components/Footer';
import PageDetail from '@/layouts/PageDetail';
import langs from '@/langs';

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
        <Footer />
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
