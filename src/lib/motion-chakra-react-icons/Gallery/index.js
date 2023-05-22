import { Box, Icon } from '@chakra-ui/react';
import { AnimatePresence, animationControls, motion } from 'framer-motion';
import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BackgroundImage } from '@/lib/next-chakra';
import { openFullscreen } from '@/lib/browser';

/** @type {Object<string, import('framer-motion').TargetAndTransition>} * */
const variants = {
  view: {
    opacity: 1,
    scale: 1,
  },
  hide: {
    opacity: 0,
    scale: 0,
  },
};

function Gallery({ data, originIndex = 0, onChange, onClose, ...props }) {
  const dataSort = useMemo(
    () => [
      ...data.slice(originIndex, data.length),
      ...data.slice(0, originIndex),
    ],
    [data, originIndex],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = useMemo(
    () => dataSort[currentIndex],
    [currentIndex, dataSort],
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
  const refCurrent = useRef();

  useEffect(() => {
    onChange(data[originIndex]);
  }, [data, onChange, originIndex]);

  const handleHide = useCallback(() => {
    controls[currentIndex].mount();
    controls[currentIndex].start('hide');
    onChange(dataSort?.[currentIndex + 1]);
    setCurrentIndex((p) => p + 1);
  }, [controls, currentIndex, dataSort, onChange]);

  // const handleWheel = useCallback(
  //   /** @param {WheelEvent} e */
  //   (e) => {
  //     const y = Math.abs(e.deltaY);
  //     const x = Math.abs(e.deltaX);
  //     if (y > 200 || x > 200) {
  //       handleHide();
  //     }
  //   },
  //   [handleHide],
  // );

  const handleFullScreen = useCallback(() => {
    const { current } = refCurrent;
    if (!current) return;
    openFullscreen(current);
  }, [currentIndex]);

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
      {/* {dataSort.map((i, index) => ( */}
      {currentItem && (
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentItem.thumbnail}
            animate={controls[currentIndex]}
            variants={variants}
            transition={{ duration: 0.2 }}
            // transition={{ duration: 0.3 }}
            drag
            dragDirectionLock
            initial="hide"
            whileInView="view"
            // onDragStart={handleShow}
            onDoubleClick={handleFullScreen}
            onDragEnd={handleHide}
            onWheel={handleHide}
            // onWheel={handleWheel}
            // data-index={index}
            exit="hide"
            style={{
              width: '100%',
              height: '100%',
              overflowX: 'auto',
              position: 'absolute',
              // zIndex: data.length - index,
              touchAction: 'none',
            }}
          >
            <BackgroundImage
              ref={refCurrent}
              pointerEvents="none"
              borderRadius="24px"
              bgColor="gray"
              border="4px dotted"
              borderColor="white"
              key={currentItem.thumbnail}
              src={currentItem.thumbnail}
              title={currentItem.title}
              // borderRadius="lg"
              objectFit="contain"
              // objectFit="cover"
              // w="100%"
              w="100%"
              h="100%"
            />
          </motion.div>
        </AnimatePresence>
      )}
      <Box
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
      >
        {dataSort.map((item, i) => (
          <Icon
            key={item.id}
            color={i === currentIndex ? 'second' : 'chakra-body-text'}
            as={GoPrimitiveDot}
            boxSize="24px"
          />
        ))}
      </Box>
      {/* ))} */}
    </Box>
  );
}

export default Gallery;
