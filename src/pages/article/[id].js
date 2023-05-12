import React, { useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGfm from 'remark-gfm';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { articleId } from '@/globals/envs';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import { getSet } from '@/globals/sets';
import ArticleHeader from '@/components/ArticleHeader';
import useToc from '@/features/hooks/useTOC';
import icons from '@/globals/icons';
import { fetchArticleById } from '@/db';

function ArticlePage({ storage, data, page, type }) {
  const { lang } = storage.current;
  const refContent = useRef();
  const toc = useToc(refContent, [data?.markdown]);

  if (!page || !type || !data) return <E404 />;
  const { article, markdown } = data;
  const set = getSet(articleId, lang);
  const setPage = getSet(page, lang);

  const breads = [
    { name: setPage.name, href: `/${page}`, icon: icons?.[page]?.Icon },
    {
      name: set.types[type].title,
      href: `/${page}?type=${type}`,
      icon: icons.article.types?.[type]?.Icon,
    },
    { name: article.title, href: '#', icon: icons.article.Icon },
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} - ${article.title}`}
        card={article.thumbnail}
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
            <ReactMarkdown
              skipHtml
              remarkPlugins={[remarkGfm]}
              components={ChakraUIRenderer()}
            >
              {markdown}
            </ReactMarkdown>
          </Box>
        </Box>
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const data = await fetchArticleById(context.query.id, storage.current.lang);
  return {
    props: { storage, data, ...context.query },
  };
}

export default ArticlePage;
