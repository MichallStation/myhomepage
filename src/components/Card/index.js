import { Button, Image } from '@chakra-ui/react';
import React from 'react';

/** @param {{props: import('@chakra-ui/react').ButtonProps}}  */
function Card({ children, title, img, ...props }) {
  return (
    <Button
      title={title}
      p={0}
      m={0}
      borderRadius="lg"
      overflow="hidden"
      // backgroundPosition="center"
      // backgroundSize="cover"
      {...props}
    >
      <Image
        width="100%"
        height="100%"
        title={title}
        src={img}
        alt={title}
        objectFit="cover"
      />
    </Button>
  );
}

export default Card;
