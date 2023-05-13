import { Box, Button, Image, Icon } from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { BsFullscreen } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { openFullscreen } from '@/lib/browsers';

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
  },
  hide: {
    opacity: 0,
  },
};

function BallGallery({ data, originIndex = 0, onChange, ...props }) {
  const [currentIndex, setIndex] = useState(originIndex);
  // const [fullscreen, setFullscreen] = useState(false);
  const controls = useAnimationControls();
  const refContainer = useRef();
  const currentItem = data[currentIndex];

  useEffect(() => {
    setIndex(originIndex);
  }, [originIndex]);

  const handlePrev = useCallback(() => {
    let newIndex = currentIndex - 1;
    if (currentIndex === 0) newIndex = data.length - 1;
    controls.start('initLeft');
    setIndex(() => newIndex);
    if (onChange) {
      onChange(newIndex);
    }
  }, [controls, currentIndex, data.length, onChange]);

  const handleNext = useCallback(() => {
    let newIndex = currentIndex + 1;
    if (currentIndex === data.length - 1) newIndex = 0;
    controls.start('initRight');
    setIndex(() => newIndex);
    if (onChange) {
      onChange(newIndex);
    }
  }, [controls, currentIndex, data.length, onChange]);

  const handleToggleFullscreen = useCallback(() => {
    /** @type {{current: HTMLElement}}  */
    const { current: el } = refContainer;
    if (!el) return;
    openFullscreen(el);
    // setSize(sizes.fullscreen);
    // if (!fullscreen) {
    //   openFullscreen(el);
    // } else {
    //   closeFullscreen(el);
    // }
    // setFullscreen((p) => !p);
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Button
        variant="unstyled"
        onClick={handlePrev}
        pos="absolute"
        top="50%"
        transform="translateY(-50%)"
        left={0}
        p={2}
        w="56px"
        h="56px"
      >
        <Icon as={BiLeftArrow} boxSize="40px" />
      </Button>
      <Button
        variant="unstyled"
        onClick={handleNext}
        pos="absolute"
        top="50%"
        transform="translateY(-50%)"
        right={0}
        p={2}
        w="56px"
        h="56px"
      >
        <Icon as={BiRightArrow} boxSize="40px" />
      </Button>
      <Box
        w="100%"
        h="100%"
        // display="flex"
        // alignItems="center"
        // justifyContent="center"
      >
        <Button
          variant="unstyled"
          onClick={handleToggleFullscreen}
          pos="absolute"
          // top="50%"
          bottom={0}
          // transform="translateY(-50%)"
          right={0}
          p={2}
          w="56px"
          h="56px"
        >
          <Icon as={BsFullscreen} boxSize="36px" />
        </Button>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentItem.thumbnail}
            animate={controls}
            variants={variants}
            transition={{ duration: 0.4 }}
            exit={{}}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              key={currentItem.thumbnail}
              src={currentItem.thumbnail}
              title={currentItem.title}
              data-index={currentIndex}
              // borderRadius="lg"
              objectFit="contain"
              // objectFit="cover"
              ref={refContainer}
              w="100%"
              h="60vh"
              // h={size.h}
              // w={size.w}
              // h="60vh"
              // backgroundSize="contain"
            />
          </motion.div>
        </AnimatePresence>
      </Box>
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
            key={item.id}
            color={i === currentIndex ? 'white' : 'gray'}
            as={GoPrimitiveDot}
            boxSize="24px"
          />
        ))}
      </Box>
    </Box>
  );
}

export default BallGallery;
