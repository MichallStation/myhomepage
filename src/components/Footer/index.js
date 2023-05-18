import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import fallback from '@/globals/fallback';

function Footer({ sets }) {
  const set = sets?.Footer || fallback.Footer;
  return (
    <Box as="footer" py={6}>
      <Text as="h3" textAlign="center" fontSize="lg" color="GrayText">
        {set?.title}
      </Text>
    </Box>
  );
}

export default Footer;
