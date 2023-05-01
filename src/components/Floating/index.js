import { Box } from '@chakra-ui/react';
import React from 'react';
import Blue from '../Blue';

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function Floating({ storage }) {
  return (
    <Box id="floating">
      <Blue storage={storage} />
    </Box>
  );
}

export default Floating;
