import React from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import UseCard from '@/components/UseCard';
import { fetchAllUsesByLang, fetchCollectById } from '@/db';
import fallback from '@/globals/fallback';

const id = 'use';

// const icons = {
//   [useWorkflowType]: <MdWorkOutline />,
//   [useDevflowType]: <VscCode />,
//   [useKitflowType]: <VscTools />,
// };

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Use({ sets, data }) {
  const set = sets?.use || fallback.use;
  return (
    <>
      <SEO
        sets={sets}
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumnail}
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
        {/* <Tabs
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
                {data?.map(
                  (use) =>
                    use.type === id && (
                      <UseCard
                        key={use.id}
                        set={sets}
                        data={use}
                        href={`/use/${use.id}`}
                        mt={4}
                      />
                    ),
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs> */}

        <SimpleGrid columns={[1, 2]} mt={4} spacingX={[0, 4]} spacingY={4}>
          {data?.map(
            (use) => (
              // use.type === id && (
              <UseCard
                key={use.id}
                set={set}
                data={use}
                href={`/use/${use.id}`}
                mt={4}
              />
            ),
            // ),
          )}
        </SimpleGrid>
        <Footer sets={sets} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const sets = await fetchCollectById(id, storage.current.lang);
  const data = await fetchAllUsesByLang(storage.current.lang);
  return {
    props: { storage, sets, data },
  };
}

export default Use;
