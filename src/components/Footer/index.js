import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { getSet } from '@/_globals/sets';
import Brand from '../Brand';

function Footer({ lang = 'en' }) {
  // const set = sets?.[lang] || sets.en;
  const set = getSet(Footer.name, lang);
  return (
    <Box as="footer" py={6}>
      <Text as="h3" textAlign="center" fontSize="lg" color="GrayText">
        {set.title}
      </Text>
      {/* <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          className="brand-img"
          src="/blue.png"
          alt="Blue"
          borderRadius="50%"
          width="44px"
        />
        <Heading ml={2} fontSize="md" color="GrayText">
          {"I'm BLue, I'm Dat's assistant."}
        </Heading>
      </Box> */}
    </Box>
  );
}

export default Footer;
