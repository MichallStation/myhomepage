import { Box, Button, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

/** @param {{props: import('@chakra-ui/react').ButtonProps}}  */
function Card({ children, title, img, ...props }) {
  return (
    <Box display="flex" justifyContent={['flex-start', 'center']}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: 'inline-block' }}
      >
        <Button
          title={title}
          p={0}
          m={0}
          overflow="hidden"
          // backgroundPosition="center"
          // backgroundSize="cover"
          boxShadow="lg"
          pos="relative"
          borderRadius="lg"
          {...props}
        >
          <Box
            pos="absolute"
            backgroundColor={useColorModeValue(
              'blackAlpha.200',
              'whiteAlpha.300',
            )}
            // backdropFilter="blur(10px)"
            top={0}
            left={0}
            right={0}
            p="0.5"
          >
            <Text
              textAlign="center"
              fontFamily="serif"
              fontSize="sm"
              color="GrayText"
            >
              {title}
            </Text>
          </Box>
          <Image
            width="100%"
            height="100%"
            title={title}
            src={img}
            alt={title}
            objectFit="cover"
          />
        </Button>
      </motion.div>
    </Box>
  );
}

export default Card;
