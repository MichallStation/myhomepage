import React from 'react';
import { Box, Spinner as SpinnerChakra } from '@chakra-ui/react';

/** @param {import('@chakra-ui/react').BoxProps} props */
function BallSpinner(props) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      key="spinner"
      {...props}
    >
      <SpinnerChakra
        className="second-btn-outline"
        width={['20%', '18%', '16%']}
        height={['20%', '18%', '16%']}
        // thickness={[8, 10]}
        // speed="0.6s"
        speed="0.5s"
        thickness={[38, 40]}
      />
    </Box>
  );
}

export default BallSpinner;
