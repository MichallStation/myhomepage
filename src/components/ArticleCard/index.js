import { Box, Icon, Button, Heading, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import icons from '@/_globals/icons';

function ArticleCard({ set, data, trigger, ...props }) {
  return (
    <Box
      display="flex"
      // backgroundColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      background={[
        'linear-gradient(0deg, var(--chakra-colors-second), var(--chakra-colors-holder), white)',
        'linear-gradient(-90deg, var(--chakra-colors-second), var(--chakra-colors-holder), white)',
      ]}
      alignItems="center"
      flexDirection={['column', 'row']}
      borderRadius="24px"
      backgroundColor="holder"
      // color="white"
      overflow="hidden"
      // p={2}
    >
      <motion.div
        // drag
        // dragConstraints={{
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   bottom: 0,
        // }}
        whileTap={{ scale: 1.05, zIndex: 1 }}
        whileFocus={{ scale: 1.05, zIndex: 1 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileDrag={{ scale: 1.05, zIndex: 1 }}
        style={{ flex: 1 }}
      >
        <Button
          overflow="hidden"
          variant="unstyled"
          display="block"
          borderRadius=""
          w="100%"
          h="100%"
          pos="relative"
          as={Link}
          // backgroundColor={useColorModeValue(
          //   'blackAlpha.600',
          //   'whiteAlpha.400',
          //   // 'whiteAlpha.800',
          // )}
          // href={`/articles/${data.id}`}
          {...props}
        >
          <Img
            filter="brightness(0.5)"
            src={data.thumbnail}
            objectFit="cover"
            w="100%"
            // h="100%"
            minH={['200px', '320px']}
            backgroundColor="transparent"
            // borderRadius="32px"
          />
        </Button>
      </motion.div>
      <Box
        // top="50%"
        // left="50%"
        // left={0}
        // right={0}
        // bottom=''
        // transform="translate(-50%, -50%)"
        // color="chakra-body-bg"
        // color="whiteAlpha.800"
        // textAlign="center"
        // h="auto"
        // display="contents"
        textAlign="justify"
        // p={4}
        m={4}
        flex={1}
      >
        <Heading textAlign="center">{data.title}</Heading>
        <Text textAlign="center">{data.desc}</Text>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            as={Link}
            colorScheme="teal"
            // className="prim-btn"
            leftIcon={<Icon as={icons.article.read.Icon} boxSize="20px" />}
            p={5}
            fontFamily="handwrite"
            {...props}
          >
            {set?.read || 'Read'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleCard;
