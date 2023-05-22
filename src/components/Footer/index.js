import { useRouter } from 'next/router';
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import langs from '@/globals/langs';

function Footer() {
  const { locale } = useRouter();
  const set = langs[locale].Footer;
  return (
    <Box as="footer" py={6}>
      <Text as="h3" textAlign="center" fontSize="lg" color="GrayText">
        {set?.title}
      </Text>
    </Box>
  );
}

export default Footer;
