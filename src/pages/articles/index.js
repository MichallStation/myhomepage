import React, { useMemo } from 'react';
import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import { fetchAllArticlesByLang } from '@/db';
import { articleId } from '@/globals/envs';
import { getSet } from '@/globals/sets';
import SEO from '@/layouts/SEO';
import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Articles({ storage, data }) {
  const { lang } = storage.current;
  const set = useMemo(() => getSet(articleId, lang), [lang]);

  return (
    <>
      <SEO lang={lang} title={set.title} name={set?.name} desc={set?.desc} />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" px={6}>
        {data &&
          data.map((article, index) => (
            <ArticleCard
              key={article.id}
              set={set}
              data={article}
              href={`/${articleId}/${article.id}`}
              // h={['200px', '320px']}
              revert={index % 2 !== 0}
              mt={[6, 8]}
            />
          ))}
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchAllArticlesByLang(storage.current.lang);
  return {
    props: { storage, data },
  };
}

export default Articles;
