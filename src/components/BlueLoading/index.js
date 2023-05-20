import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { BackgroundImage } from '@/lib/NextChakra';
import BlueBrand from '../Blue/BlueBrand';
import envs from '../Blue/envs';
import MadeBy from '../MadeBy';

function BlueLoading() {
  const handlePreventDefault = useCallback(
    /** @param {Event} e */
    (e) => e.preventDefault(),
    [],
  );

  useEffect(() => {
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
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('scroll', handlePreventDefault);
      document.removeEventListener('touchmove', handlePreventDefault);
      document.removeEventListener('wheel', handlePreventDefault);
      document.removeEventListener('keydown', handlePreventDefault);
      document.removeEventListener('click', handlePreventDefault);
    };
  }, [handlePreventDefault]);

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
