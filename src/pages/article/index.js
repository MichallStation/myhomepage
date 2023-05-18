import React from 'react';
import { Container } from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import { fetchAllArticlesByLang, fetchCollectById } from '@/db';
import { articleId } from '@/globals/envs';
import SEO from '@/layouts/SEO';
import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';
import fallback from '@/globals/fallback';

const id = 'article';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Article({ sets, data }) {
  const set = sets?.article || fallback.article;
  return (
    <>
      <SEO
        sets={sets}
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumnail}
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
        <Footer sets={sets} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  const data = await fetchAllArticlesByLang(storage.current.lang);
  return {
    props: { storage, sets, data },
  };
}

export default Article;
