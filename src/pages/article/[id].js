import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { icon, langs } from '@/globals';
import { fetchArticleById } from '@/db';
import createFeaturesStorage from '@/features';
import { useClientSide, useTOC } from '@/features/hooks';
import E404 from '@/pages/404';
import { SEO } from '@/layouts';
import {
  ArticleHeader,
  Breadcrumb,
  Footer,
  MarkdownRender,
} from '@/components';

const id = 'article';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function ArticlePage({ data }) {
  const { locale } = useRouter();
  const client = useClientSide();
  const refContent = useRef();
  const toc = useTOC(refContent, [data, client]);
  if (!data) return <E404 />;
  const set = langs[locale].article;
  const { markdown, ...article } = data;

  const breads = [
    { name: set.name, href: `/${id}`, icon: icon.article.Icon },
    { name: article.title, href: '#', icon: icon.article.common.Icon },
  ];

  return (
    <>
      <SEO
        title={`${set.title} - ${data.title}`}
        name={data?.title || set?.name}
        desc={data?.desc || set?.desc}
        card={data.thumbnail}
      />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" px={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Breadcrumb breads={breads} flex={1} />
        </Box>
        <Box as="article" className="article">
          <ArticleHeader toc={toc} set={set} data={article} />
          <Box ref={refContent} className="article-content">
            {markdown && (
              // client &&
              <MarkdownRender>{markdown}</MarkdownRender>
            )}
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchArticleById(context.query.id, storage.lang);
  return {
    props: { storage, data },
  };
}

export default ArticlePage;
