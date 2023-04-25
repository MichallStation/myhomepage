import { useToast } from '@chakra-ui/react';
import React from 'react';
import BallChat from '../BallChat';

function Message({ children, id, onClose }) {
  const toast = useToast();
  return (
    <BallChat
      onClick={() => toast.close(id)}
      mr={['', '80px']}
      // mb={['56px', '12px', '24px']}
      // mb={['12px', '24px', '32px']}
      // bottom="48px"
      // right="48px"
    >
      {children}
    </BallChat>
  );
}
export default Message;
