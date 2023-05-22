import React from 'react';
import { BackgroundImage } from '@/lib/next-chakra';
import envs from './envs';

/** @param {import('@chakra-ui/react').BoxProps} props */
function BlueBrand(props) {
  return <BackgroundImage src={envs.brandUrl} {...props} />;
}

export default BlueBrand;
