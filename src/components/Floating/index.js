import React from 'react';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { LOADING, SHOW, selectblue3dStatus } from '@/features/slices/ui';
import { useClientSide } from '@/features/hooks';
import Blue from '../Blue';
import BlueLoading from '../BlueLoading';

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Floating({ storage }) {
  const status = useSelector(selectblue3dStatus);
  const client = useClientSide();
  return (
    <Box id="floating" pos="relative" left={0} right={0} top={0} bottom={0}>
      <AnimatePresence initial={false} mode="wait">
        {status === LOADING && (
          <motion.div
            key="blue-loading"
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BlueLoading />
          </motion.div>
        )}
      </AnimatePresence>
      {client && ![LOADING, SHOW].includes(status) && (
        <Blue storage={storage} />
      )}
    </Box>
  );
}

export default Floating;
