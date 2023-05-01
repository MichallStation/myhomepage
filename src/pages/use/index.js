import React, { useMemo } from 'react';
import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import {
  articleId,
  useDevflowType,
  useId,
  useKitflowType,
  useWorkflowType,
} from '@/_globals/envs';
import Footer from '@/components/Footer';
import { getArticleByLang } from '@/_globals/db';
import ArticleCard from '@/components/ArticleCard';

const tabindexs = {
  [useWorkflowType]: 0,
  [useKitflowType]: 1,
  [useDevflowType]: 2,
};

const tabnames = [useWorkflowType, useKitflowType, useDevflowType];

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Use({ storage, type }) {
  const { lang } = storage.current;
  const set = getSet(useId, lang);
  const setArticle = getSet(articleId, lang);
  const articles = useMemo(() => getArticleByLang(lang), [lang]);
  const router = useRouter();
  const tabIndex = tabindexs[type];
  const useTabsRender = Object.entries(setArticle.types);

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} - ${setArticle.types[type].title}`}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        // overflow="hidden"
      >
        <Heading
          fontSize="xl"
          textAlign="center"
          borderRadius="12px"
          // fontWeight="normal"
          p={3}
          backgroundColor="second"
        >
          {set?.slogan}
        </Heading>
        <Tabs
          tabIndex={tabIndex}
          defaultIndex={tabIndex}
          onChange={(index) => router.push(`?type=${tabnames[index]}`)}
          variant="soft-rounded"
          colorScheme="seconds"
          mt={8}
        >
          <TabList overflowX="scroll" overflowY="hidden">
            {useTabsRender.map(([id, i]) => (
              <Tab key={id} h="48px" minW="100px" mr={2}>
                {i.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels mt={4}>
            {useTabsRender.map(([id]) => (
              <TabPanel key={id} id={id} p={0}>
                {articles.map(
                  (article) =>
                    article.type === id && (
                      <ArticleCard
                        key={article.id}
                        data={article}
                        href={`/${articleId}/${article.id}?page=${useId}&type=${article.type}`}
                        h={['280px', '320px']}
                      />
                    ),
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: {
      type: context.query?.type || useWorkflowType,
      storage: createFeaturesStorage(context),
    },
  };
}

export default Use;
