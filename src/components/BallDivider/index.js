import React from 'react';
import { Divider, useColorModeValue } from '@chakra-ui/react';

/** @param {import('@chakra-ui/react').DividerProps} props */
function BallDivider(props) {
  const { node, ...restProps } = props;
  return (
    <Divider
      mt={2}
      {...restProps}
      borderColor={useColorModeValue('blackAlpha.200')}
    />
  );
}

export default BallDivider;
