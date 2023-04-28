import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function PopupArticle({ data }) {
  return (
    <Box
      display="flex"
      height="60vh"
      // borderRadius="32px"
      overflow="hidden"
      flexDirection={['column', 'row']}
    >
      <Box
        width={['100%', '40%']}
        height={['40%', '100%']}
        backgroundColor="second"
      >
        123
      </Box>
      <Box
        width={['100%', '60%']}
        height={['60%', '100%']}
        backgroundColor="gray"
        p={4}
      >
        <Heading>One</Heading>
        <Text>lkajdkasjd kadjasd</Text>
      </Box>
    </Box>
  );
}

export default PopupArticle;
