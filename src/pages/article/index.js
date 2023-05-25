import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Container, Icon } from '@chakra-ui/react';
import { TiTag } from 'react-icons/ti';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { fallback, langs } from '@/globals';
import { articleId } from '@/globals/envs';
import { fetchAllArticlesByLang } from '@/db';
import createFeaturesStorage from '@/features';
import { SEO } from '@/layouts';
import { ArticleCard, Footer } from '@/components';

/** @type {Object<string, import('framer-motion').TargetAndTransition>} * */
const variants = {
  view: {
    opacity: 1,
    // scaleY: 1,
    // originY: 'top',
  },
  hide: {
    opacity: 0,
    // scaleY: 0,
    // originY: 'top',
  },
};

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 * }}
 * */
function Article({ data }) {
  const { locale } = useRouter();
  const set = langs[locale].article;
  const tags = useMemo(
    () =>
      data.reduce((args, item) => {
        let tag = item?.tag || item?.type;
        if (typeof tag === 'string') {
          tag = [tag];
        }
        return [...args, ...tag];
      }, []),
    [data],
  );
  const [searchList, setSearchList] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setSearchList({});
  }, [locale]);

  const handleOnClick = useCallback(
    /** @param {Event} e */
    (e) => {
      const { tag } = e.target.dataset;
      if (!tag) return;
      if (!searchList?.[tag]) {
        searchList[tag] = true;
        setSearchList({
          ...searchList,
          [tag]: true,
        });
      } else {
        const newSearchList = { ...searchList };
        delete newSearchList[tag];
        setSearchList(() => newSearchList);
      }
    },
    [searchList],
  );

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        let currentTags = item?.tag || item?.type;
        if (typeof currentTags === 'string') {
          currentTags = [currentTags];
        }
        return Object.keys(searchList).every((i) =>
          currentTags.find((j) => j === i),
        );
      }),
    );
  }, [data, searchList]);

  return (
    <>
      <SEO
        title={set?.title}
        name={set?.name}
        desc={set?.desc}
        card={set?.thumbnail}
      />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" px={6}>
        <Box as="nav" display="flex" className="nav-filter" overflowX="scroll">
          {tags.map((tag) => (
            <Button
              minW="120px"
              borderRadius="24px"
              leftIcon={
                searchList?.[tag] ? (
                  <Icon
                    as={AiOutlineCloseCircle}
                    boxSize="20px"
                    pointerEvents="none"
                  />
                ) : (
                  <Icon as={TiTag} boxSize="20px" pointerEvents="none" />
                )
              }
              bgColor={searchList?.[tag] && 'second'}
              data-tag={tag}
              onClick={handleOnClick}
              _hover={{
                bgColor: searchList?.[tag] && 'second',
              }}
              _focus={{
                bgColor: searchList?.[tag] && 'second',
              }}
              mr={2}
              px={4}
              py={0}
              // minH="36px"
            >
              {tag.replace(tag[0], tag.charAt(0).toUpperCase())}
            </Button>
          ))}
        </Box>
        <Box className="article-dashboard" minH="40vh">
          {filteredData &&
            filteredData.map((article, index) => (
              <AnimatePresence
                // initial={false}
                mode="popLayout"
              >
                <motion.div
                  key={article.id}
                  whileInView="view"
                  exit="hide"
                  variants={variants}
                  transition={{ duration: 0.4 }}
                >
                  <ArticleCard
                    set={set}
                    data={article}
                    href={`/${articleId}/${article.id}`}
                    // h={['200px', '320px']}
                    revert={index % 2 !== 0}
                    mt={[6, 8]}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
        </Box>
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
