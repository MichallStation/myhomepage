import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import BackgroundImage from '../BackgroundImage';

function BlueLoading() {
  return (
    <Box
      id="blue-loading"
      zIndex="docked"
      pos="fixed"
      left={0}
      right={0}
      top={0}
      bottom={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={useColorModeValue('light', 'dark')}
    >
      <Box
        borderRadius="full"
        border="6px solid"
        // color={useColorModeValue('', 'second')}
        color="second"
      >
        <BackgroundImage
          // className="animate__animated animate__heartBeat animate__infinite animate__slow"
          m={-2}
          w="88px"
          h="88px"
          // borderRadius="full"
          // color={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
          src="/blue.png"
        />
      </Box>
    </Box>
  );
}

export default BlueLoading;
