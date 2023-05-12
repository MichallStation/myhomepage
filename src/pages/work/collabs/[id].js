import React from 'react';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { detailCollabType } from '@/globals/envs';
import PageDetail from '@/layouts/PageDetail';
import { fetchCollabById } from '@/db';
// import { getSet } from '@/globals/sets';

function CollabsDetail({ storage, data }) {
  const { lang } = storage.current;
  // const set = getSet(detailId, lang);

  if (!data) return <E404 />;
  return <PageDetail lang={lang} type={detailCollabType} detail={data} />;
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchCollabById(context.query.id, storage.current.lang);
  return {
    props: { storage, data },
  };
}

export default CollabsDetail;
