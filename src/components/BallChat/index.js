import { Box, Text } from '@chakra-ui/react';
import React from 'react';

/** @param {{title: string | React.ReactNode, description: string | React.ReactNode}}  */
function BallChat({ children, id, onClose, ...props }) {
  return (
    <Box
      className="toast-chat"
      display="inline-flex"
      // maxW="240px"
      // minW="0px"
      // w={['100%', '']}
      alignItems="center"
      justifyContent="center"
      // variant="unstyled"
      color="blackAlpha.800"
      backgroundColor="pop"
      // pos="relative"
      overflow="hidden"
      borderRadius="32px"
      border=""
      py={2}
      px={4}
      m={0}
      cursor="unset"
      boxShadow="base"
      {...props}
    >
      <Text fontWeight="normal">{children}</Text>
    </Box>
  );
}

export default BallChat;
