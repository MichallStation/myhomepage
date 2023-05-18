import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DONE,
  loadingFloatDone,
  selectball3dStatus,
} from '@/features/slices/ui';
import Blue from '../Blue';
import BlueLoading from '../BlueLoading';

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Floating({ storage, sets }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectball3dStatus) === DONE;
  return (
    <Box id="floating" pos="relative" left={0} right={0} top={0} bottom={0}>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => dispatch(loadingFloatDone())}
      >
        {!loading && (
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
      <Blue storage={storage} sets={sets} />
    </Box>
  );
}

export default Floating;
