import { Box, CloseButton, Icon, useCallbackRef } from '@chakra-ui/react';
import { AnimatePresence, animationControls } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BackgroundImage } from '@/lib/next-chakra';
import { MotionDiv } from '@/lib/ux-motion';

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

// FIXME: Trackpad WheelEvent is dispatch every new component mounted
function Gallery({
  data,
  originIndex = 0,
  onChange,
  onOpenFullscreen,
  onCloseFullscreen,
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(originIndex);
  const [fullscreen, setFullscreen] = useState(false);
  const currentItem = useMemo(() => data[currentIndex], [currentIndex, data]);
  const controls = useMemo(
    () =>
      data.reduce(
        (args, _, index) => ({ ...args, [index]: animationControls() }),
        {},
      ),
    [data],
  );

  useEffect(() => {
    onChange(data[originIndex]);
  }, [data, onChange, originIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < data.length - 1) {
      controls[currentIndex].mount();
      controls[currentIndex].start('hide');
      setCurrentIndex((p) => p + 1);
    }
    onChange(data?.[currentIndex + 1]);
  }, [controls, currentIndex, data, onChange]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      controls[currentIndex].mount();
      controls[currentIndex].start('hide');
      setCurrentIndex((p) => p - 1);
    }
    onChange(data?.[currentIndex - 1]);
  }, [controls, currentIndex, data, onChange]);

  const [refCurrent, setRefCurrent] = useState();
  const refCallbackCurrent = useCallbackRef(
    (current) => {
      if (current !== null) {
        setRefCurrent(current);
      }
    },
    [currentIndex],
  );

  const handleOpenFullscreen = useCallback(() => {
    if (!refCurrent) return;
    if (typeof onOpenFullscreen === 'function') onOpenFullscreen();
    setFullscreen(true);
  }, [onOpenFullscreen, refCurrent]);

  const handleCloseFullscreen = useCallback(() => {
    setFullscreen(false);
    if (typeof onOpenFullscreen === 'function') onCloseFullscreen();
  }, [onCloseFullscreen, onOpenFullscreen]);

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
      {currentItem && (
        <AnimatePresence
          // initial={false}
          mode="popLayout"
        >
          <MotionDiv
            key={currentItem.thumbnail}
            animate={controls[currentIndex]}
            variants={variants}
            transition={{ duration: 0.25 }}
            drag
            initial="hide"
            whileInView="view"
            // onDoubleClick={handleOpenFullscreen}
            onClick={handleOpenFullscreen}
            onNavigateLeft={handlePrev}
            onNavigateRight={handleNext}
            onNavigateUp={handlePrev}
            onNavigateDown={handleNext}
            onDragLeft={handleNext}
            onDragRight={handlePrev}
            onDragUp={handleNext}
            onDragDown={handlePrev}
            exit="hide"
            style={{
              width: '100%',
              height: '100%',
              overflowX: 'auto',
              position: 'absolute',
              touchAction: 'none',
            }}
          >
            <BackgroundImage
              ref={refCallbackCurrent}
              pointerEvents="none"
              borderRadius="24px"
              bgColor="gray"
              border="4px dotted"
              borderColor="white"
              key={currentItem.thumbnail}
              src={currentItem.thumbnail}
              title={currentItem.title}
              objectFit="contain"
              w="100%"
              h="100%"
            />
          </MotionDiv>
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
        {data.map((item, i) => (
          <Icon
            key={item.title}
            color={i === currentIndex ? 'second' : 'chakra-body-text'}
            as={GoPrimitiveDot}
            boxSize="24px"
            // borderRadius="full"
            // shadow="dark-lg"
          />
        ))}
      </Box>
      {currentItem && fullscreen && (
        <Box
          pos="fixed"
          w="100vw"
          h="100vh"
          top={0}
          left={0}
          bg="black"
          zIndex={99999}
        >
          <BackgroundImage
            src={currentItem.thumbnail}
            objectFit="contain"
            w="100%"
            h="100%"
            // onDoubleClick={handleCloseFullscreen}
            onClick={handleCloseFullscreen}
          />
          <CloseButton
            pos="absolute"
            top={4}
            right={4}
            colorScheme="red"
            bgColor="red"
            borderRadius="full"
            size="lg"
            shadow="base"
            onClick={handleCloseFullscreen}
          />
        </Box>
      )}
    </Box>
  );
}

export default Gallery;
