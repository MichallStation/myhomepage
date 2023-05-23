import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

/** @param {import('@chakra-ui/react').ButtonProps} props */
function MotionButton(props) {
  const { children, intensity = 1.05, ...restProps } = props;
  return (
    <motion.div
      // drag
      // dragConstraints={{
      //   left: 0,
      //   right: 0,
      //   top: 0,
      //   bottom: 0,
      // }}
      whileTap={{ scale: intensity, zIndex: 1 }}
      whileFocus={{ scale: intensity, zIndex: 1 }}
      whileHover={{ scale: intensity, zIndex: 1 }}
      whileDrag={{ scale: intensity, zIndex: 1 }}
    >
      <Button {...restProps}>{children}</Button>
    </motion.div>
  );
}

export default MotionButton;
