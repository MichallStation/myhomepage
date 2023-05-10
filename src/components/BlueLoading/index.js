import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef } from 'react';
import BackgroundImage from '../BackgroundImage';
import BlueBrand from '../Blue/BlueBrand';
import envs from '../Blue/envs';
import MadeBy from '../MadeBy';

function BlueLoading() {
  const refBox = useRef();
  const handlePreventDefault = useCallback(
    /** @param {Event} e */
    (e) => e.preventDefault(),
    [],
  );

  useEffect(() => {
    /** @type {{current: HTMLElement}} */
    const { current: el } = refBox;
    if (!el) return;

    el.addEventListener('scroll', handlePreventDefault);
    el.addEventListener('touchmove', handlePreventDefault);
    el.addEventListener('wheel', handlePreventDefault);
    el.addEventListener('keydown', handlePreventDefault);
    el.addEventListener('click', handlePreventDefault);
    // eslint-disable-next-line consistent-return
    return () => {
      el.removeEventListener('scroll', handlePreventDefault);
      el.removeEventListener('touchmove', handlePreventDefault);
      el.removeEventListener('wheel', handlePreventDefault);
      el.removeEventListener('keydown', handlePreventDefault);
      el.removeEventListener('click', handlePreventDefault);
    };
  }, [handlePreventDefault]);

  return (
    <Box
      ref={refBox}
      id="blue-loading"
      zIndex="overlay"
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
