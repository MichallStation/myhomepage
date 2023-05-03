import React from 'react';
import { Box, Container, Heading, Img, Text, Icon } from '@chakra-ui/react';
import { GrArticle } from 'react-icons/gr';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import Section from '@/layouts/Section';
import Footer from '@/components/Footer';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { detailId, detailProjectType, workId } from '@/_globals/envs';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import icons from '@/_globals/icons';

function PageDetail({ lang = 'en', type = detailProjectType, detail: item }) {
  // const refBread = useRef();
  const set = getSet(detailId, lang);
  const setWork = getSet(workId, lang);

  // const handleWindowResize = useCallback(() => {
  //   const { current: breadEl } = refBread;
  //   if (!breadEl) return;
  //   breadEl.scrollLeft = breadEl.offsetWidth;
  // }, []);

  // useEffect(() => handleWindowResize(), [handleWindowResize]);

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize, false);
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize, false);
  //   };
  // }, [handleWindowResize]);

  const breads = [
    { name: setWork.name, href: '/work', icon: icons.work.Icon },
    {
      name: setWork?.[type].title,
      href: `/work#${type}`,
      icon: icons.work?.[type]?.Icon,
    },
    { name: item.name, href: '#', icon: icons.detail.Icon },
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} ${setWork?.[type].title} - ${item.name}`}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        p={6}
        // overflow="hidden"
      >
        {/* <BlueBreadcrumb ref={refBread} breads={breads} /> */}
        <BlueBreadcrumb breads={breads} />
        <Box as="article" title={item.name} id={item.id} mt={4}>
          <Box
            id="thumbnail"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            // overflow="hidden"
          >
            <Heading
              // backgroundColor={useColorModeValue('second', 'seconddark')}
              py={2}
              px={5}
              // borderRadius="32px 32px 0 0"
              borderRadius="32px"
              textAlign="center"
              // textAlign="right"
              fontSize="4xl"
              fontFamily="deco"
              display="block"
              mb={4}
            >
              {item.name}
            </Heading>
            <Box
              // px={2}
              // pt={8}
              // pb={2}
              pt={1}
              backgroundColor="second"
              borderRadius="32px 32px 2px 2px"
            >
              <Box display="flex" justifyContent="center">
                <Icon
                  className="animate__animated animate__flip animate__infinite animate__slow"
                  as={GrArticle}
                  boxSize="24px"
                />
              </Box>
              <Img
                // width="xl"
                // borderRadius="8px 8px 0 0"
                src={item.thumbnail}
                alt={item.name}
                backgroundColor="chakra-body-bg"
                // filter="brightness(0.8)"
                // mt={6}
              />
            </Box>
          </Box>
          <Section title={set.desc} id="desc" sep={4}>
            <Text textAlign="justify">{item.desc}</Text>
            <DetailInfo data={item.info} mt={2} />
          </Section>
          <Section title={set.preview} id="preview" sep={4}>
            <PreviewInfo data={item.preview} />
          </Section>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default PageDetail;
