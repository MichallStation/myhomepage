import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { getSet } from '@/_globals/sets';
import { FooterId } from '@/_globals/envs';

function Footer({ lang = 'en' }) {
  // const set = sets?.[lang] || sets.en;
  const set = getSet(FooterId, lang);
  return (
    <Box as="footer" py={6}>
      <Text as="h3" textAlign="center" fontSize="lg" color="GrayText">
        {set.title}
      </Text>
      {/* <Box display="flex" justifyContent="center" alignItems="center">
        {}
      </Box> */}
    </Box>
  );
}

export default Footer;
