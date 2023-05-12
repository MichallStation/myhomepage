import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { GrArticle } from 'react-icons/gr';
import { VscLayout } from 'react-icons/vsc';
import SEO from '@/layouts/SEO';
import { getSet } from '@/globals/sets';
import Section from '@/layouts/Section';
import Footer from '@/components/Footer';
import { detailId, detailProjectType, workId } from '@/globals/envs';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import icons from '@/globals/icons';

function PageDetail({
  lang = 'en',
  type = detailProjectType,
  detail: item,
  children,
}) {
  const set = getSet(detailId, lang);
  const setWork = getSet(workId, lang);
  const currentPageIconFilter = useColorModeValue('', 'invert(1)');

  const breads = [
    { name: setWork.name, href: '/work', icon: icons.work.Icon },
    {
      name: setWork?.[type].title,
      href: `/work#${type}`,
      icon: icons.work?.[type]?.Icon,
    },
    {
      name: item.name,
      href: '#',
      // fix GrIcon not dynamic change with theme
      icon: (props) =>
        icons.detail.Icon({ ...props, filter: currentPageIconFilter }),
    },
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} ${setWork?.[type].title} - ${item.name}`}
        desc={item.desc}
        card={item.thumbnail}
      />
      <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" p={6}>
        <BlueBreadcrumb breads={breads} />
        <Box as="article" id={item.id} mt={4}>
          <Box
            id="thumbnail"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading
              py={2}
              px={5}
              borderRadius="32px"
              textAlign="center"
              fontSize={['2xl', '3xl']}
              fontFamily="handwrite"
              display="block"
              mb={4}
            >
              {item.name}
            </Heading>
            <Box
              w="100%"
              h="100%"
              pt={1}
              backgroundColor="second"
              borderRadius="32px 32px 2px 2px"
            >
              <Box display="flex" justifyContent="center">
                <Icon
                  className="animate__animated animate__flip animate__infinite animate__slow"
                  as={GrArticle}
                  boxSize="24px"
                  filter={currentPageIconFilter}
                />
              </Box>
              <Box p={1}>
                <Box
                  minH={['200px', '320px', '400px']}
                  w="100%"
                  backgroundColor="holder"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  backgroundPosition="center"
                  backgroundImage={item.thumbnail}
                />
              </Box>
            </Box>
          </Box>
          <Section title={set.desc} id="desc" sep={4} icon={<VscLayout />}>
            <Text textAlign="justify">{item.desc}</Text>
          </Section>
          {children}
        </Box>
        <Footer lang={lang} />
      </Container>
    </>
  );
}

export default PageDetail;
