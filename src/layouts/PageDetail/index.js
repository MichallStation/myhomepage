import React from 'react';
import { Box, Container, Heading, Text, Icon } from '@chakra-ui/react';
import { VscLayout } from 'react-icons/vsc';
import Section from '@/layouts/Section';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import icons from '@/globals/icon';
import MarkdownRender from '@/components/MarkdownRender';
import fallback from '@/globals/fallback';

function PageDetail({ sets, breads, children, data }) {
  const set = sets?.detail || fallback.detail;
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
            {data.name}
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
              <Box
                minH={['200px', '320px', '400px']}
                w="100%"
                backgroundColor="holder"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundImage={data.thumbnail}
              />
            </Box>
          </Box>
        </Box>
        <Section title={set.desc} id="desc" sep={4} icon={<VscLayout />}>
          <Text textAlign="justify">{data.desc}</Text>
        </Section>
        {data?.markdown && <MarkdownRender>{data.markdown}</MarkdownRender>}
        {children}
      </Box>
    </Container>
  );
}

export default PageDetail;
