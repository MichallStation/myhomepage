import { useToast } from '@chakra-ui/react';
import React from 'react';
import BallChat from '../BallChat';

function Message({ children, id }) {
  // children = typeof children === 'string' ? [children] : children;
  const toast = useToast();
  return (
    // <BallChat borderRadius="2px 32px 32px 2px" onClick={() => toast.close(id)}>
    <BallChat onClick={() => toast.close(id)}>{children}</BallChat>
  );
}

export default Message;
