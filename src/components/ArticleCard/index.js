import { Box, Icon, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import envs from './envs';
import MotionButton from '../MotionChakra/MotionButton';
import { KindleIcon } from '../icons';
import { BackgroundImage } from '@/lib/NextChakra';

function ArticleCard({ set, data, href, revert, ...props }) {
  return (
    <Box
      className="article-card"
      display="flex"
      alignItems="center"
      flexDirection={!revert ? ['column', 'row'] : ['column', 'row-reverse']}
      backgroundSize="contain"
      backgroundRepeat="repeat"
      backgroundPosition="center"
      backgroundImage={envs.bgUrl}
      backgroundColor="#ddc592"
      p={3}
      pos="relative"
      border="6px dashed"
      borderColor="gray"
      borderRadius="4px"
      // shadow="dark-lg"
      color="gray.800"
      {...props}
    >
      <motion.div
        className="article-card-thumbnail"
        whileTap={{ scale: 1.05, zIndex: 1 }}
        whileFocus={{ scale: 1.05, zIndex: 1 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileDrag={{ scale: 1.05, zIndex: 1 }}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <BackgroundImage
          overflow="hidden"
          variant="unstyled"
          display="flex"
          // borderRadius=""
          pos="relative"
          w="100%"
          h="100%"
          minH={['200px', '300px']}
          as={Link}
          backgroundColor="holder"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundImage={data.thumbnail}
          href={href}
          borderRadius={
            !revert
              ? ['24px 24px 4px 4px', '24px 4px 4px 24px']
              : ['4px 4px 24px 24px', '4px 24px 24px 4px']
          }
        >
          <Box
            className="article-card-overlay"
            pos="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
            bgColor="blackAlpha.500"
            // bgColor="blackAlpha.300"
          />
        </BackgroundImage>
      </motion.div>
      <Box
        className="article-card-content"
        textAlign="justify"
        mx={[0, 2, 4]}
        my={[2, 2, 4]}
        flex={1}
      >
        <Heading as="h3" fontSize={['2xl', '3xl']} textAlign="center">
          {data.title}
        </Heading>
        <Text fontSize={['md', 'lg']} textAlign="center">
          {data.desc}
        </Text>
        <Box display="flex" justifyContent="center" mt={2}>
          <MotionButton
            as={Link}
            colorScheme="seconds"
            py={1}
            px={2}
            fontFamily="handwrite"
            href={href}
            h="56px"
            color="chakra-body-text"
            intensity={1.1}
            border="4px solid"
            borderColor="gray"
          >
            <Icon as={KindleIcon} color="black" boxSize="48px" />
            {/* {set?.read || 'Read'} */}
          </MotionButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleCard;
