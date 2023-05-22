import { useToast } from '@chakra-ui/react';
import React from 'react';
import BlueChat from '../BlueChat';

function Message({ children, id }) {
  // children = typeof children === 'string' ? [children] : children;
  const toast = useToast();
  return (
    // <BlueChat borderRadius="2px 32px 32px 2px" onClick={() => toast.close(id)}>
    <BlueChat onClick={() => toast.close(id)}>{children}</BlueChat>
  );
}

export default Message;
