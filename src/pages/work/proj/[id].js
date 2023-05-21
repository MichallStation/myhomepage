import React from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { VscBook, VscPreview } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import PageDetail from '@/layouts/PageDetail';
import Section from '@/layouts/Section';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { fetchDetailById } from '@/db';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import icons from '@/globals/icon';
import langs from '@/langs';

const id = 'proj';

/** @param {{ storage: import('@/@type/features').FeaturesStorage }} */
function ProjectDetail({ data }) {
  const { locale } = useRouter();
  if (!data) return <E404 />;
  const set = langs[locale].detail;
  const setWork = langs[locale].work;
  const breads = [
    { name: setWork.name, href: '/work', icon: icons.work.Icon },
    {
      name: setWork?.[id].title,
      href: `/work#${id}`,
      icon: icons.work?.[id]?.Icon,
    },
    {
      name: data?.title || data?.name,
      href: '#',
      icon: icons.detail.Icon,
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
        <Footer />
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
