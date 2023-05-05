import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { IoCloudOfflineOutline } from 'react-icons/io5';

function OfflineBanner() {
  return (
    <Box
      borderRadius="32px"
      bgColor="second"
      h={['200px', '320px', '400px']}
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        color={useColorModeValue('black', 'white')}
        as={IoCloudOfflineOutline}
        boxSize={['100px', '140px']}
      />
    </Box>
  );
}

export default OfflineBanner;
