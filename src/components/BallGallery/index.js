import { Box } from '@chakra-ui/react';
import { animationControls, motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import { BackgroundImage } from '@/lib/NextChakra';

/** @type {Object<string, import('framer-motion').TargetAndTransition>} * */
const variants = {
  initLeft: {
    translateX: '-100%',
    opacity: 0,
  },
  initRight: {
    translateX: '100%',
    opacity: 0,
  },
  view: {
    translateX: 0,
    opacity: 1,
    scale: 1,
  },
  hide: {
    opacity: 0,
    scale: 0,
  },
};

function BallGallery({ data, originIndex = 0, onChange, onClose, ...props }) {
  const dataSort = useMemo(
    () => [
      ...data.slice(originIndex, data.length),
      ...data.slice(0, originIndex),
    ],
    [data, originIndex],
  );
  // const controls = useAnimationControls();
  const controls = useMemo(
    () =>
      data.reduce(
        (r, _, index) => ({ ...r, [index]: animationControls() }),
        {},
      ),
    [data],
  );
  const refContainer = useRef();

  useEffect(() => {
    onChange(data[originIndex]);
  }, [data, onChange, originIndex]);

  const handleHide = useCallback(
    (e) => {
      let { index: id } = e.target.dataset;
      if (!id) return;
      id = Number(id);
      controls[id].mount();
      controls[id].start('hide');
      onChange(dataSort?.[id + 1]);
    },
    [controls, dataSort, onChange],
  );

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      {...props}
    >
      {dataSort.map((i, index) => (
        <motion.div
          key={i.thumbnail}
          animate={controls[index]}
          variants={variants}
          transition={{ duration: 0.4 }}
          drag
          dragDirectionLock
          onDragEnd={handleHide}
          onWheel={handleHide}
          data-index={index}
          style={{
            width: '100%',
            height: '100%',
            overflowX: 'auto',
            position: 'absolute',
            zIndex: data.length - index,
            touchAction: 'none',
          }}
        >
          <BackgroundImage
            pointerEvents="none"
            borderRadius="24px"
            bgColor="gray"
            border="4px dotted"
            borderColor="white"
            key={i.thumbnail}
            src={i.thumbnail}
            title={i.title}
            // borderRadius="lg"
            objectFit="contain"
            // objectFit="cover"
            ref={refContainer}
            // w="100%"
            w="100%"
            h="100%"
          />
        </motion.div>
      ))}
    </Box>
  );
}

export default BallGallery;
