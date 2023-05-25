import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { forwardRef } from 'react';

/** @param {import('@chakra-ui/react').BoxProps} props */
const BackgroundImage = forwardRef((props, ref) => {
  const {
    src,
    backgroundImage,
    backgroundColor = 'transparent',
    backgroundSize = 'contain',
    backgroundPosition = 'center',
    backgroundRepeat = 'no-repeat',
    alt = '',
    title = '',
    w = '44px',
    h = '44px',
    children,
    ...restProps
  } = props;
  return (
    <Box
      pos="relative"
      backgroundColor={backgroundColor}
      overflow="hidden"
      w={w}
      h={h}
      {...restProps}
    >
      <Image
        ref={ref}
        fill
        alt={alt}
        title={title}
        src={src || backgroundImage}
        placeholder="empty"
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          objectFit: backgroundSize,
          objectPosition: backgroundPosition,
          backgroundRepeat,
        }}
      />
      {children}
    </Box>
  );
});

export default BackgroundImage;
