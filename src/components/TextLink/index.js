import { Button, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function TextLink({ children, href, sep = ',', ...props }) {
  return href ? (
    <Button
      as={Link}
      href={href}
      target="_blank"
      variant="unstyled"
      color={useColorModeValue('prim', 'primdark')}
      {...props}
    >
      {children}
      <span>{sep}</span>
    </Button>
  ) : (
    <Text display="inline-block" textAlign="justify" {...props}>
      {children}
      <span>{sep}</span>
    </Text>
  );
}

export default TextLink;
