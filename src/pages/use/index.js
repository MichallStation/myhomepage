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
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { VscCode, VscTools } from 'react-icons/vsc';
import { MdWorkOutline } from 'react-icons/md';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import { getSet } from '@/globals/sets';
import {
  articleId,
  articleDevflowType,
  useId,
  articleKitflowType,
  articleWorkflowType,
} from '@/globals/envs';
import Footer from '@/components/Footer';
import UseCard from '@/components/UseCard';
import { fetchUsepageByLang } from '@/db';

const tabnames = [articleWorkflowType, articleDevflowType, articleKitflowType];
const tabindexs = {
  [articleWorkflowType]: 0,
  [articleDevflowType]: 1,
  [articleKitflowType]: 2,
};
const icons = {
  [articleWorkflowType]: <MdWorkOutline />,
  [articleDevflowType]: <VscCode />,
  [articleKitflowType]: <VscTools />,
};

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Use({ storage, data, type }) {
  const { lang } = storage.current;
  const set = getSet(useId, lang);
  const setArticle = getSet(articleId, lang);
  // const articles = useMemo(() => getArticleByLang(lang), [lang]);
  const router = useRouter();
  const useTabsRender = useMemo(
    () => Object.entries(setArticle.types),
    [setArticle.types],
  );
  const tabIndex = tabindexs[type];

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
          // backgroundColor="second"
          backgroundColor={useColorModeValue(
            'blackAlpha.200',
            'whiteAlpha.300',
          )}
        >
          {set?.slogan}
        </Heading>
        <Tabs
          tabIndex={tabIndex}
          defaultIndex={tabIndex}
          variant="soft-rounded"
          mt={8}
          isLazy
        >
          <TabList overflowX="scroll" overflowY="hidden">
            <Box minW="md">
              <Box display="inline-flex" borderBottom="2px solid" color="gray">
                {useTabsRender.map(([id, i], index) => (
                  <Tab
                    key={id}
                    as={Button}
                    height="48px"
                    w="auto"
                    ml={index !== 0 && 2}
                    py={2}
                    px={4}
                    variant="unstyled"
                    leftIcon={icons[id]}
                    color="chakra-body-text"
                    borderRadius="24px 24px 0 0"
                    _selected={{
                      color: 'chakra-body-text',
                      bgColor: 'second',
                    }}
                    onClick={() =>
                      router.push(`?type=${tabnames[index]}`, '', {
                        scroll: false,
                      })
                    }
                  >
                    {i.title}
                  </Tab>
                ))}
              </Box>
            </Box>
          </TabList>
          <TabPanels mt={4} minH="320px">
            {useTabsRender.map(([id]) => (
              <TabPanel key={id} id={id} p={0}>
                {data?.articles?.map(
                  (article) =>
                    article.type === id && (
                      <UseCard
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
  const storage = createFeaturesStorage(context);
  const data = await fetchUsepageByLang(storage.current.lang);
  const type = context.query?.type || articleWorkflowType;
  return {
    props: { storage, type, data: data || {} },
  };
}

export default Use;
