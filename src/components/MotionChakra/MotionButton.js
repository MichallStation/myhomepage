import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

/** @param {import('@chakra-ui/react').ButtonProps} props */
function MotionButton(props) {
  const { children, ...restProps } = props;
  return (
    <motion.div
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      whileTap={{ scale: 1.05, zIndex: 1 }}
      whileFocus={{ scale: 1.05, zIndex: 1 }}
      whileHover={{ scale: 1.05, zIndex: 1 }}
      whileDrag={{ scale: 1.05, zIndex: 1 }}
    >
      <Button {...restProps}>{children}</Button>
    </motion.div>
  );
}

export default MotionButton;
