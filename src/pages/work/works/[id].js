import React from 'react';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getWorksByLang } from '@/_globals/db';
import { detailWorkType } from '@/_globals/envs';
import PageDetail from '@/layouts/PageDetail';

function WorksDetail({ id, storage }) {
  const { lang } = storage.current;
  const data = getWorksByLang(lang);
  const item = data.find((i) => i.id === id);

  if (!item) return <E404 />;
  return <PageDetail lang={lang} type={detailWorkType} detail={item} />;
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id || '',
      storage: createFeaturesStorage(context),
    },
  };
}

export default WorksDetail;
