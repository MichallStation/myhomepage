import React, { useMemo } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { VscCode, VscTools } from 'react-icons/vsc';
import { MdWorkOutline } from 'react-icons/md';
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
  [useDevflowType]: 1,
  [useKitflowType]: 2,
};

const tabnames = [useWorkflowType, useDevflowType, useKitflowType];

const icons = {
  [useWorkflowType]: <MdWorkOutline />,
  [useDevflowType]: <VscCode />,
  [useKitflowType]: <VscTools />,
};

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
        px={6}
      >
        <Heading
          fontSize="xl"
          textAlign="center"
          borderRadius="12px"
          fontWeight="normal"
          // fontFamily="serif"
          p={3}
          backgroundColor="second"
        >
          {set?.slogan}
        </Heading>
        <Tabs
          tabIndex={tabIndex}
          defaultIndex={tabIndex}
          // onChange={(index) => router.push(`?type=${tabnames[index]}`)}
          variant="soft-rounded"
          colorScheme="seconds"
          mt={8}
          isLazy
        >
          <TabList overflowX="scroll" overflowY="hidden">
            <Box display="flex" minW="md">
              {useTabsRender.map(([id, i], index) => (
                <Tab
                  key={id}
                  as={Button}
                  // minH="48px"
                  height="48px"
                  // minW="140px"
                  w="auto"
                  mr={2}
                  py={2}
                  px={4}
                  variant="unstyled"
                  leftIcon={icons[id]}
                  // href={''}
                  onClick={() =>
                    router.push(`?type=${tabnames[index]}`, '', {
                      scroll: false,
                    })
                  }
                  // borderRadius="lg"
                >
                  {i.title}
                </Tab>
              ))}
            </Box>
          </TabList>
          <TabPanels mt={4} minH="320px">
            {useTabsRender.map(([id]) => (
              <TabPanel key={id} id={id} p={0}>
                {articles.map(
                  (article) =>
                    article.type === id && (
                      <ArticleCard
                        key={article.id}
                        set={setArticle}
                        data={article}
                        href={`/${articleId}/${article.id}?page=${useId}&type=${article.type}`}
                        // h={['200px', '320px']}
                        mt={4}
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
