import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef } from 'react';
import BackgroundImage from '../BackgroundImage';
import BlueBrand from '../Blue/BlueBrand';
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
      <Box
        borderRadius="full"
        border="6px solid"
        // color={useColorModeValue('', 'second')}
        color={useColorModeValue('blackAlpha.200', 'whiteAlpha.400')}
        // color="second"
        // flex={1}
      >
        <BackgroundImage
          // className="animate__animated animate__heartBeat animate__infinite animate__slow"
          m={-2}
          w="88px"
          h="88px"
          // borderRadius="full"
          src="/blue.png"
        />
      </Box>
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
        {/* <Text fontFamily="serif" color="GrayText">
          Made by Ltndat
        </Text> */}
        <MadeBy w="100px" />
      </Box>
    </Box>
  );
}

export default BlueLoading;
