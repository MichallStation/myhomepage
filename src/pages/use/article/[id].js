import React from 'react';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getArticleByLang, getProjectsByLang } from '@/_globals/db';
import { detailProjectType, detailWorkType } from '@/_globals/envs';
import PageDetail from '@/layouts/PageDetail';

function Article({ id, storage }) {
  const { lang } = storage.current;
  const data = getArticleByLang(lang);
  const item = data.find((i) => i.id === id);
  console.log(data);

  if (!item) return <E404 />;
  return <PageDetail lang={lang} type={detailProjectType} detail={item} />;
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

export default Article;
