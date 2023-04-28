import { Box, Button, Image, Icon } from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { BsFullscreen } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

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

function BallGallery({ data, originIndex = 0, ...props }) {
  const [currentIndex, setIndex] = useState(originIndex);
  const controls = useAnimationControls();

  useEffect(() => {
    setIndex(originIndex);
  }, [originIndex]);

  const handlePrev = useCallback(() => {
    let newIndex = currentIndex - 1;
    if (currentIndex === 0) newIndex = data.length - 1;
    controls.start('initLeft');
    setIndex(() => newIndex);
  }, [currentIndex, data.length]);
  const handleNext = useCallback(() => {
    let newIndex = currentIndex + 1;
    if (currentIndex === data.length - 1) newIndex = 0;
    controls.start('initRight');
    setIndex(() => newIndex);
  }, [currentIndex, data.length]);

  const currentItem = data[currentIndex];

  return (
    <Box pos="relative" {...props}>
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
      <Button
        variant="unstyled"
        // onClick={handleFullscreen}
        pos="absolute"
        // top="50%"
        bottom={0}
        // transform="translateY(-50%)"
        right={0}
        p={2}
        w="44px"
        h="44px"
      >
        <Icon as={BsFullscreen} boxSize="24px" />
      </Button>
      <Box display="flex" alignItems="center" justifyContent="center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentItem.thumbnail}
            animate={controls}
            variants={variants}
            transition={{ duration: 0.4 }}
            exit={{}}
          >
            <Image
              key={currentItem.thumbnail}
              src={currentItem.thumbnail}
              title={currentItem.title}
              data-index={currentIndex}
              borderRadius="lg"
              objectFit="contain"
              height="60vh"
              // backgroundSize="contain"
            />
          </motion.div>
        </AnimatePresence>
      </Box>
      <Box
        pos="absolute"
        bottom="-32px"
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
      >
        {data.map((item, i) => (
          <Icon
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
