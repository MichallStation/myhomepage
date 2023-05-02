import { Button, Img } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

/** @param {{props: import('@chakra-ui/react').ButtonProps}}  */
function Card({ children, title, img, ...props }) {
  return (
    // <Box display="flex" justifyContent={['center', 'flex-start']}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // style={{ display: 'inline-block' }}
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
        backgroundColor="chakra-body-bg"
        {...props}
      >
        {/* <Box
            pos="absolute"
            // backgroundColor="blackAlpha.200"
            backdropFilter="blur(10px)"
            bottom={0}
            left={0}
            right={0}
            p="0.5"
          >
            <Heading
              textAlign="center"
              // fontFamily="serif"
              fontSize="sm"
              fontWeight="normal"
              color="GrayText"
            >
              {title}
            </Heading>
          </Box> */}
        <Img
          width="100%"
          height="100%"
          title={title}
          src={img}
          alt={title}
          objectFit="cover"
          backgroundColor="transparent"
        />
      </Button>
    </motion.div>
  );
}

export default Card;
