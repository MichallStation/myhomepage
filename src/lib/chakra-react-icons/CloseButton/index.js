import { Button } from '@chakra-ui/react';
import React from 'react';
import { GrClose } from 'react-icons/gr';

/** @param {import('@chakra-ui/react').ButtonProps} props */
function CloseButton(props) {
  return (
    <Button colorScheme="red" {...props}>
      <GrClose />
    </Button>
  );
}

export default CloseButton;
