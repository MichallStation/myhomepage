import React from 'react';
import { Box, Spinner as SpinnerChakra } from '@chakra-ui/react';

function BallSpinner() {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      key="spinner"
    >
      <SpinnerChakra
        className="second-btn-outline"
        width="20%"
        height="20%"
        // thickness={[8, 10]}
        // speed="0.6s"
        speed="0.4s"
        thickness={[20, 28]}
      />
    </Box>
  );
}

export default BallSpinner;
