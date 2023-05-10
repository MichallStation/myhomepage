import React from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { VscBook, VscPreview } from 'react-icons/vsc';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getProjectsByLang } from '@/_globals/db';
import { detailId, detailProjectType } from '@/_globals/envs';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { getSet } from '@/_globals/sets';

function ProjectDetail({ id, storage }) {
  const { lang } = storage.current;
  const data = getProjectsByLang(lang);
  const item = data.find((i) => i.id === id);
  const set = getSet(detailId, lang);

  if (!item) return <E404 />;
  return (
    <PageDetail lang={lang} type={detailProjectType} detail={item}>
      <Section title={set.detail} id="detail" sep={4} icon={<VscBook />}>
        <DetailInfo data={item.info} mt={2} />
      </Section>
      <Section title={set.style} id="style" sep={4} icon={<MdOutlineStyle />}>
        <DetailInfo data={item.style} mt={2} />
      </Section>
      <Section title={set.preview} id="preview" sep={4} icon={<VscPreview />}>
        <PreviewInfo data={item.preview} />
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

export default ProjectDetail;
