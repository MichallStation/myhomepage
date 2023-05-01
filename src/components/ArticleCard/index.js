import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

function ArticleCard({ data, trigger, ...props }) {
  return (
    <motion.div
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      whileTap={{ scale: 1.05, zIndex: 1 }}
      whileFocus={{ scale: 1.05, zIndex: 1 }}
      whileHover={{ scale: 1.05, zIndex: 1 }}
      whileDrag={{ scale: 1.05, zIndex: 1 }}
    >
      <Button
        overflow="hidden"
        variant="unstyled"
        display="block"
        borderRadius="32px"
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
        <Image
          filter="brightness(0.5)"
          src={data.thumbnail}
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          top="50%"
          // left="50%"
          left={0}
          right={0}
          // bottom=''
          // transform="translate(-50%, -50%)"
          pos="absolute"
          // color="chakra-body-bg"
          color="whiteAlpha.800"
          textAlign="center"
        >
          <Heading>{data.title}</Heading>
          <Text display="block">{data.desc}</Text>
        </Box>
      </Button>
    </motion.div>
  );
}

export default ArticleCard;
