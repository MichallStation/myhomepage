import React, { useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BackgroundImage } from '@/lib/next-chakra';
import { isClientSide } from '@/globals/envs';
import BlueBrand from '../Blue/BlueBrand';
import MadeBy from '../MadeBy';
import envs from '../Blue/envs';

const handlePreventDefault = (e) => e.preventDefault();

if (isClientSide) {
  document.addEventListener('scroll', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('touchmove', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('wheel', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('keydown', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('click', handlePreventDefault, {
    passive: false,
  });
}

function BlueLoading() {
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('scroll', window.blockInputHandler);
      document.removeEventListener('touchmove', window.blockInputHandler);
      document.removeEventListener('wheel', window.blockInputHandler);
      document.removeEventListener('keydown', window.blockInputHandler);
      document.removeEventListener('click', window.blockInputHandler);
    };
  }, []);

  return (
    <Box
      id="blue-loading"
      zIndex="10001"
      pos="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor={useColorModeValue('light', 'dark')}
      userSelect="none"
      style={{
        touchAction: 'none',
        msTouchAction: '-ms-none',
      }}
    >
      <BackgroundImage w="80px" h="80px" src={envs.url} />
      <Box
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        bottom={[4, 8]}
        flexDir="column"
      >
        <BlueBrand ml={1} w={['66px', '72px']} mb={-3} />
        <MadeBy ml={2} w="108px" />
      </Box>
    </Box>
  );
}

export default BlueLoading;
