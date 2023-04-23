import React from 'react';
import { Divider, useColorModeValue } from '@chakra-ui/react';

/** @param {import('@chakra-ui/react').DividerProps} props */
function BallDivider(props) {
  return (
    <Divider {...props} borderColor={useColorModeValue('blackAlpha.200')} />
  );
}

export default BallDivider;
