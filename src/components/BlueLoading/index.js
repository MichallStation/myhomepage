import React, { useEffect, useRef } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BackgroundImage } from '@/lib/next-chakra';
import BlueBrand from '../Blue/BlueBrand';
import MadeBy from '../MadeBy';
import envs from '../Blue/envs';
// import { isClientSide } from '@/globals/envs';

const handlePreventDefault =
  /** @param {Event} e */
  (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

function BlueLoading() {
  const ref = useRef();
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    current.addEventListener('scroll', handlePreventDefault, {
      passive: false,
    });
    current.addEventListener('touchmove', handlePreventDefault, {
      passive: false,
    });
    current.addEventListener('wheel', handlePreventDefault, {
      passive: false,
    });
    current.addEventListener('keydown', handlePreventDefault, {
      passive: false,
    });
    current.addEventListener('click', handlePreventDefault, {
      passive: false,
    });
    // eslint-disable-next-line consistent-return
    return () => {
      current.removeEventListener('scroll', handlePreventDefault);
      current.removeEventListener('touchmove', handlePreventDefault);
      current.removeEventListener('wheel', handlePreventDefault);
      current.removeEventListener('keydown', handlePreventDefault);
      current.removeEventListener('click', handlePreventDefault);
    };
  }, []);

  return (
    <Box
      ref={ref}
      id="blue-loading"
      zIndex="10001"
      pos="fixed"
      left="-120px"
      right="-120px"
      top="-120px"
      bottom="-120px"
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
      <BackgroundImage w="80px" h="80px" src={envs.beardUrl} />
      <Box
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        bottom={[4, 8]}
        flexDir="column"
        mb="120px"
      >
        <BlueBrand ml={1} w={['66px', '72px']} mb={-3} />
        <MadeBy ml={2} w="108px" />
      </Box>
    </Box>
  );
}

export default BlueLoading;
