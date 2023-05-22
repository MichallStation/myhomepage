import { useRouter } from 'next/router';
import React from 'react';
import { Container } from '@chakra-ui/react';
import { fallback, langs } from '@/globals';
import { articleId } from '@/globals/envs';
import { fetchAllArticlesByLang } from '@/db';
import createFeaturesStorage from '@/features';
import { SEO } from '@/layouts';
import { ArticleCard, Footer } from '@/components';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Article({ data }) {
  const { locale } = useRouter();
  const set = langs[locale].article;
  return (
    <>
      <SEO
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumbnail}
      />
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
        <Footer />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data =
    (await fetchAllArticlesByLang(storage.lang)) || fallback.article.data;
  return {
    props: { storage, data },
  };
}

export default Article;
