import React from 'react';
import { Box, Container, Heading, Text, Icon } from '@chakra-ui/react';
import { VscLayout } from 'react-icons/vsc';
import { GiNewspaper } from 'react-icons/gi';
import Section from '@/layouts/Section';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import icons from '@/globals/icon';
import MarkdownRender from '@/components/MarkdownRender';
import { BackgroundImage } from '@/lib/NextChakra';
import useClientSide from '@/features/hooks/useClientSide';
import Footer from '@/components/Footer';

function PageDetail({ set, breads, children, data }) {
  const client = useClientSide();
  return (
    <Container maxW={{ sm: 'full', md: '3xl' }} pos="relative" p={6}>
      <BlueBreadcrumb breads={breads} />
      <Box as="article" id={data.id} mt={4}>
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
            {data?.title || data?.name}
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
                as={icons.detail.Icon}
                boxSize="24px"
              />
            </Box>
            <Box p={1}>
              <BackgroundImage
                title={data?.title || data?.name}
                alt={data?.title || data?.name}
                minH={['200px', '320px', '400px']}
                w="100%"
                src={data.thumbnail}
                backgroundSize="cover"
              />
            </Box>
          </Box>
        </Box>
        <Section title={set.desc} id="desc" sep={4} icon={<VscLayout />}>
          <Text textAlign="justify">{data.desc}</Text>
        </Section>
        {data?.markdown && client && (
          <MarkdownRender>{data.markdown}</MarkdownRender>
        )}
        {children}
        {data?.articles && (
          <Section
            title={set.articles.title}
            id="article"
            sep={4}
            icon={<GiNewspaper />}
          >
            {data?.articlesDesc || set.articles.desc}
            {/* {data?.articles && (
          <PreviewLinkShows data={data?.articles} lang={lang} mt={4} />
        )} */}
          </Section>
        )}
        <Footer />
      </Box>
    </Container>
  );
}

export default PageDetail;
