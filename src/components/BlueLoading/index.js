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
  }, []);

  return (
    <Box
      ref={refBox}
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
