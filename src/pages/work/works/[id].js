import React from 'react';
import { BsExplicit, BsPersonVcard } from 'react-icons/bs';
import { IoFilmOutline } from 'react-icons/io5';
import { GiNewspaper } from 'react-icons/gi';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getWorksByLang } from '@/_globals/db';
import { detailId, detailWorkType } from '@/_globals/envs';
import PageDetail from '@/layouts/PageDetail';
import { getSet } from '@/_globals/sets';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';

function WorksDetail({ id, storage }) {
  const { lang } = storage.current;
  const data = getWorksByLang(lang);
  const item = data.find((i) => i.id === id);
  if (!item) return <E404 />;

  const set = getSet(detailId, lang);
  return (
    <PageDetail lang={lang} type={detailWorkType} detail={item}>
      <Section title={set.role} id="role" sep={4} icon={<BsPersonVcard />}>
        {item?.role && <DetailInfo data={item.role} mt={2} />}
      </Section>
      <Section title={set.exp} id="exp" sep={4} icon={<BsExplicit />}>
        {item?.exp && <DetailInfo data={item.exp} mt={2} />}
      </Section>
      <Section title={set.moment} id="moment" sep={4} icon={<IoFilmOutline />}>
        {item?.moment && <PreviewInfo data={item.moment} />}
      </Section>
      <Section title={set.article} id="article" sep={4} icon={<GiNewspaper />}>
        {item?.article && <PreviewInfo data={item.article} />}
      </Section>
    </PageDetail>
  );
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
