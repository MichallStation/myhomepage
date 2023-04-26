import { Toast, useToast } from '@chakra-ui/react';
import React from 'react';
import BallChat from '../BallChat';

function Message({ children, id, onClose }) {
  // children = typeof children === 'string' ? [children] : children;
  const toast = useToast();
  return <BallChat onClick={() => toast.close(id)}>{children}</BallChat>;
}

export default Message;
