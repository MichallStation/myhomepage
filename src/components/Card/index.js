import { Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { BackgroundImage } from '@/lib/NextChakra';

/** @param {{props: import('@chakra-ui/react').ButtonProps}}  */
function Card({ children, title, img, thumbnailHighContrast, ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <BackgroundImage
        as={Button}
        title={title}
        p={0}
        m={0}
        variant="unstyled"
        display="block"
        boxShadow="lg"
        pos="relative"
        borderRadius="lg"
        maxW={['100%', '320px']}
        minH="160px"
        backgroundColor="holder"
        backgroundSize="cover"
        // backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={img}
        border={thumbnailHighContrast && '2px solid'}
        {...props}
      />
      <Text textAlign="center">{title}</Text>
    </motion.div>
  );
}

export default Card;
