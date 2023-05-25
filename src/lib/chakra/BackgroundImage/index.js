import { Box } from '@chakra-ui/react';
import React from 'react';

/** @param {import('@chakra-ui/react').BoxProps} props */
function BackgroundImage(props) {
  const { src, ...restProps } = props;
  return (
    <Box
      className="background-image"
      // backgroundColor="holder"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={src}
      minW="44px"
      minH="44px"
      {...restProps}
    >
      {/* <Image src={src} width={w} height={h} /> */}
    </Box>
  );
}

export default BackgroundImage;
