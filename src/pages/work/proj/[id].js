import { useRouter } from 'next/router';
import React from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { VscBook, VscPreview } from 'react-icons/vsc';
import { icon, langs } from '@/globals';
import createFeaturesStorage from '@/features';
import { fetchDetailById } from '@/db';
import E404 from '@/pages/404';
import { PageDetail, Section, SEO } from '@/layouts';
import { DetailInfo, PreviewInfo } from '@/components';

const id = 'proj';

/** @param {{ storage: import('@/@type/features').FeaturesStorage }} */
function ProjectDetail({ data }) {
  const { locale } = useRouter();
  if (!data) return <E404 />;
  const set = langs[locale].detail;
  const setWork = langs[locale].work;
  const breads = [
    { name: setWork.name, href: '/work', icon: icon.work.Icon },
    {
      name: setWork?.[id].title,
      href: `/work#${id}`,
      icon: icon.work?.[id]?.Icon,
    },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icon.detail.Icon,
    },
  ];

  return (
    <>
      <SEO
        title={`${set.title} ${setWork?.[id].title} - ${data.title}`}
        name={data?.title || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <PageDetail set={set} data={data} breads={breads}>
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
      </PageDetail>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchDetailById(context.query.id, id, storage.lang);
  return {
    props: { storage, data },
  };
}

export default ProjectDetail;
