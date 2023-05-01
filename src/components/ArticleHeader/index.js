import React from 'react';
import { Box, Heading, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import { GiNewspaper } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { IoIosArrowForward } from 'react-icons/io';
import MotionButton from '../MotionChakra/MotionButton';
import Section from '@/layouts/Section';

function ArticleHeader({ toc, set, data, ...props }) {
  const router = useRouter();

  return (
    <Box
      as="header"
      className="article-header"
      backgroundColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      borderRadius="12px"
      overflow="hidden"
      p={2}
      {...props}
    >
      <Box
        className="article-body"
        display="flex"
        height={['', '', '60vh']}
        flexDirection={['column', 'column', 'row']}
      >
        <Box
          className="header-heading"
          width={['100%', '100%', '40%']}
          height={['40%', '40%', '100%']}
          backgroundColor="second"
          py={2}
          px={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="center" borderRadius="12px">
            <Icon
              className="animate__animated animate__flip animate__infinite animate__slow"
              as={GiNewspaper}
              boxSize="56px"
              backgroundColor={useColorModeValue(
                'blackAlpha.300',
                'whiteAlpha.400',
              )}
              px={2}
              borderRadius="full"
            />
          </Box>
          <Heading mt={4}>{data.title}</Heading>
          <Text fontSize="lg" mt={2}>
            {data.desc}
          </Text>
          {/* <Card
              height="160px"
              maxW="320px"
              w="100%"
              img={data.thumbnail}
              filter="brightness(0.5)"
              mt={4}
            /> */}
        </Box>
        <Box width={['100%', '100%', '60%']} height={['60%', '60%', '100%']}>
          <Box
            className="header-content"
            // backgroundColor={useColorModeValue('gray', 'gray')}
            backgroundColor={useColorModeValue('#808680', '#808680')}
            color={useColorModeValue('black')}
            py={2}
            px={4}
            overflowY="scroll"
            w="100%"
            h="100%"
            {...props}
          >
            <Section title={set.tablet} mt={2}>
              {data.summary}
              {toc &&
                toc.map(({ id, text }) => (
                  <MotionButton
                    key={id}
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    width="100%"
                    variant="unstyled"
                    onClick={() => router.push(`#${id}`)}
                    leftIcon={<IoIosArrowForward />}
                    // leftIcon={<HiOutlineArrowCircleRight />}
                    // leftIcon={<BiHash />}
                    // maxW='100%'
                    h="auto"
                    mt={1}
                  >
                    <Text
                      title={text}
                      overflow="clip"
                      textOverflow="ellipsis"
                      fontSize="lg"
                    >
                      {text}
                    </Text>
                  </MotionButton>
                ))}
            </Section>
          </Box>
        </Box>
      </Box>
      <Box pos="relative" className="article-thumbnail" mt={1}>
        {/* <PreviewInfo data={data.images} /> */}
        {/* <BallGallery data={data.images} /> */}
      </Box>
    </Box>
  );
}

export default ArticleHeader;
