import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

/** @type {import('@chakra-ui/react').UseToastOptions}  */
const style = {
  position: 'bottom-right',
  isClosable: true,
  colorScheme: 'seconds',
  status: 'info',
};

/** @param {{title: string | React.ReactNode, description: string | React.ReactNode}}  */
export function BallToast({ title, description, color, id, onClose }) {
  title =
    typeof title === 'string' ? (
      <Heading fontSize="lg">{title}</Heading>
    ) : (
      title
    );

  return (
    <Box
      className="toast"
      minW="280px"
      display="flex"
      alignItems="center"
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      pos="relative"
      borderRadius="32px 0 0 32px"
      boxShadow="dark-lg"
      overflow="hidden"
      p={2}
    >
      <Box
        pos="absolute"
        top={0}
        bottom={0}
        right={0}
        width="4px"
        backgroundColor={color}
      />
      <Box className="toast-icon" px={2}>
        <Image className="heartbeat" height="44px" src="/blue.png" />
      </Box>
      <Box className="toast-content">
        {title}
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}

export default BallToast;
