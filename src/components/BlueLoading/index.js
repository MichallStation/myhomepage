import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef } from 'react';
import BackgroundImage from '../BackgroundImage';

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
      left="-24px"
      right="-24px"
      top="-24px"
      bottom="-24px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={useColorModeValue('light', 'dark')}
      userSelect="none"
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
