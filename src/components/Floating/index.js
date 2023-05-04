import { Box } from '@chakra-ui/react';
import React from 'react';
import Blue from '../Blue';

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function Floating({ storage }) {
  return (
    <Box id="floating" pos="relative" left={0} right={0} top={0} bottom={0}>
      <Blue storage={storage} />
    </Box>
  );
}

export default Floating;
