import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { getSet } from '@/_globals/sets';

function Footer({ lang = 'en' }) {
  // const set = sets?.[lang] || sets.en;
  const set = getSet(Footer.name, lang);
  return (
    <Box as="footer" py={6}>
      <Text as="h3" textAlign="center" fontSize="lg" color="GrayText">
        {set.title}
      </Text>
    </Box>
  );
}

export default Footer;
