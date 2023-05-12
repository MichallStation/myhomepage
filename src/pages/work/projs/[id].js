import React from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { VscBook, VscPreview } from 'react-icons/vsc';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { detailId, detailProjectType } from '@/_globals/envs';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { getSet } from '@/_globals/sets';
import { fetchProjectById } from '@/db';

function ProjectDetail({ storage, data }) {
  const { lang } = storage.current;
  const set = getSet(detailId, lang);

  if (!data) return <E404 />;
  return (
    <PageDetail lang={lang} type={detailProjectType} detail={data}>
      <Section title={set.detail} id="detail" sep={4} icon={<VscBook />}>
        <DetailInfo data={data.info} mt={2} />
      </Section>
      <Section title={set.style} id="style" sep={4} icon={<MdOutlineStyle />}>
        <DetailInfo data={data.style} mt={2} />
      </Section>
      <Section title={set.preview} id="preview" sep={4} icon={<VscPreview />}>
        <PreviewInfo data={data.preview} />
      </Section>
    </PageDetail>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchProjectById(context.query.id, storage.current.lang);
  return {
    props: { storage, data },
  };
}

export default ProjectDetail;
