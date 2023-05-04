import { Box, Icon, Button, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import icons from '@/_globals/icons';

function ArticleCard({ set, data, href, ...props }) {
  return (
    <Box
      className="article-card"
      display="flex"
      background={[
        'linear-gradient(0deg, var(--chakra-colors-second), var(--chakra-colors-holder), var(--chakra-colors-holder))',
        'linear-gradient(-90deg, var(--chakra-colors-second), var(--chakra-colors-holder), var(--chakra-colors-holder))',
      ]}
      alignItems="center"
      flexDirection={['column', 'row']}
      borderRadius="24px"
      backgroundColor="holder"
      overflow="hidden"
      p={2}
      {...props}
    >
      <motion.div
        // drag
        // dragConstraints={{
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   bottom: 0,
        // }}
        className="article-card-thumbnail"
        whileTap={{ scale: 1.05, zIndex: 1 }}
        whileFocus={{ scale: 1.05, zIndex: 1 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileDrag={{ scale: 1.05, zIndex: 1 }}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <Button
          overflow="hidden"
          variant="unstyled"
          display="block"
          // borderRadius=""
          pos="relative"
          w="100%"
          h="100%"
          minH={['200px', '320px']}
          as={Link}
          backgroundColor="holder"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundImage={data.thumbnail}
          href={href}
          borderRadius={['24px 24px 4px 4px', '24px 4px 4px 24px']}
        >
          <Box
            className="article-card-overlay"
            pos="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
            bgColor="blackAlpha.500"
          />
        </Button>
      </motion.div>
      <Box
        className="article-card-content"
        textAlign="justify"
        mx={[0, 2, 4]}
        my={[2, 2, 4]}
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
            href={href}
          >
            {set?.read || 'Read'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleCard;
