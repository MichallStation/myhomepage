import {
  Box,
  Button,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BiBookReader } from 'react-icons/bi';

function ArticleCard({ data, trigger, ...props }) {
  return (
    <Box
      display="flex"
      backgroundColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      alignItems="center"
      flexDirection={['column', 'row']}
      borderRadius="12px"
      p={2}
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
      >
        <Button
          overflow="hidden"
          variant="unstyled"
          display="block"
          borderRadius="xl"
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
            h={['200px', '320px']}
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
        p={2}
      >
        <Heading textAlign="center">{data.title}</Heading>
        <Text>{data.desc}</Text>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            as={Link}
            colorScheme="green"
            leftIcon={<BiBookReader />}
            {...props}
          >
            Read
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleCard;
