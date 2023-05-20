import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { DONE, LOADING, selectball3dStatus } from '@/features/slices/ui';
import Blue from '../Blue';
import BlueLoading from '../BlueLoading';
import useClientSide from '@/features/hooks/useClientSide';

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Floating({ storage }) {
  const status = useSelector(selectball3dStatus);
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
      {client && status === DONE && <Blue storage={storage} />}
    </Box>
  );
}

export default Floating;
