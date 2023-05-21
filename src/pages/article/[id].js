import React, { useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import ArticleHeader from '@/components/ArticleHeader';
import useToc from '@/features/hooks/useTOC';
import icons from '@/globals/icon';
import { fetchArticleById } from '@/db';
import MarkdownRender from '@/components/MarkdownRender';
import langs from '@/langs';
import useClientSide from '@/features/hooks/useClientSide';
// import useClientSide from '@/features/hooks/useClientSide';

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
  const toc = useToc(refContent, [data, client]);
  if (!data) return <E404 />;
  const set = langs[locale].article;
  // page = page || articleId;
  // type = type || data.type || 'general';
  const { markdown, ...article } = data;
  // const set = getSet(articleId, lang);
  // const setPage = getSet(page, lang);

  const breads = [
    { name: set.name, href: `/${id}`, icon: icons.article.Icon },
    // {
    //   name: set.types[type]?.title || type,
    //   href: `/${id}?type=${type}`,
    //   icon: icons?.[type]?.Icon,
    // },
    { name: article.title, href: '#', icon: icons.article.common.Icon },
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
          <BlueBreadcrumb breads={breads} flex={1} />
        </Box>
        <Box as="article" className="article">
          <ArticleHeader toc={toc} set={set} data={article} />
          <Box ref={refContent} className="article-content">
            {markdown && client && <MarkdownRender>{markdown}</MarkdownRender>}
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
