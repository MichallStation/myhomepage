import { motion, useAnimationControls } from 'framer-motion';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Avatar,
  AvatarBadge,
  Box,
  Heading,
  Image,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { DONE, selectball3dStatus } from '@/features/slices/ui';
import { getSet } from '@/_globals/sets';
import Message from './Message';
import useLang from '@/features/hooks/useLang';
import styles from './styles';

/** @type {Object<string, import('framer-motion').TargetAndTransition>} * */
const variants = {
  nothing: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
  say: {
    scale: 1.6,
  },
  look: {
    scale: 1.4,
  },
  joke: {
    rotate: '-45deg',
  },
};

const actions = {
  welcome: 'welcome',
  intro: 'intro',
  joke: 'joke',
};

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function Blue({ storage, width = 48 }) {
  const lang = useLang(storage.current.lang);
  const inTimeWelcome = useSelector(selectball3dStatus) === DONE;
  const toast = useToast();
  const controls = useAnimationControls();

  const isOldguy = storage.prev?.latest;
  const set = getSet(Blue.name, lang);

  // Welcome
  useEffect(() => {
    if (!inTimeWelcome) return;
    const t = setTimeout(async () => {
      await controls.start('say');
      toast({
        duration: 5000,
        render: (props) => (
          <Message {...props}>
            {isOldguy ? set.welcome.old : set.welcome.newbie}
          </Message>
        ),
        position: 'bottom-right',
        isClosable: true,
      });
      await controls.start('nothing');
      controls.stop();
    }, 3000);
    // }, 0);
    // eslint-disable-next-line consistent-return
    return () => t && clearTimeout(t);
  }, [inTimeWelcome]);

  const handleClick = useCallback(() => {
    // Blue introduction
    if (toast.isActive(actions.intro)) return;
    toast({
      id: actions.intro,
      duration: 5000,
      render: (props) => <Message {...props}>{set.intro}</Message>,
      position: 'bottom-right',
      isClosable: true,
    });
  }, [set]);

  const handleDrag = useCallback(() => {
    // Blue joke
    if (toast.isActive(actions.joke)) return;
    // console.log('drag');
    // await controls.start('joke');
    toast({
      id: actions.joke,
      duration: 5000,
      render: (props) => <Message {...props}>{set.joke}</Message>,
      position: 'bottom-right',
      isClosable: true,
    });
    // await controls.start('nothing');
    // controls.stop();
  }, []);

  return (
    <Box
      pos="fixed"
      // zIndex="toast"
      bottom={['12px', '24px', '32px']}
      right={['12px', '24px', '32px']}
      style={{
        zIndex: '10000',
      }}
    >
      <motion.button
        id="blue"
        type="button"
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        whileHover="look"
        whileTap={{ scale: 0.9 }}
        whileDrag={handleDrag}
        variants={variants}
        animate={controls}
        onClick={handleClick}
        title={set.name}
        style={styles.blue}
      >
        <Box boxShadow="base" borderRadius="50%" overflow="hidden">
          <Image
            className="brand-img"
            src="/blue.png"
            alt="Blue"
            width={`${width}px`}
          />
        </Box>
      </motion.button>
    </Box>
  );
}

export default Blue;
