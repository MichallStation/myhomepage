import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, useColorModeValue, useToast } from '@chakra-ui/react';
import { DONE, selectball3dStatus } from '@/features/slices/ui';
import { getSet } from '@/_globals/sets';
import Message from './Message';
import useLang from '@/features/hooks/useLang';
import styles from './styles';
import { BlueId } from '@/_globals/envs';
import envsNavbar from '../Navbar/envs';
import actions from './actions';
import BlueLoading from '../BlueLoading';
import BackgroundImage from '../BackgroundImage';
import envs from './envs';

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
    scale: 1.4,
  },
  look: {
    scale: 1.4,
  },
  joke: {
    rotate: '-45deg',
  },
};

const actionIds = {
  welcome: 'welcome',
  intro: 'intro',
  joke: 'joke',
};

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function Blue({ storage }) {
  const lang = useLang(storage.current.lang);
  const inTimeWelcome = useSelector(selectball3dStatus) === DONE;
  const toast = useToast();
  const controls = useAnimationControls();

  const isOldguy = storage.prev?.latest;
  const set = getSet(BlueId, lang);

  // Welcome
  useEffect(() => {
    if (!inTimeWelcome) return;
    const t = setTimeout(() => {
      actions.say({
        id: actionIds.welcome,
        mes: isOldguy ? set.welcome.old : set.welcome.newbie,
        controls,
        toast,
      });
      actions.say({
        id: actionIds.welcome,
        mes: isOldguy ? set.welcome.old : set.welcome.newbie,
        controls,
        toast,
      });
    }, 5000);
    // eslint-disable-next-line consistent-return
    return () => t && clearTimeout(t);
  }, [inTimeWelcome, set]);

  const handleClick = useCallback(() => {
    // Blue introduction
    actions.says({
      id: actionIds.intro,
      mes: set.intro,
      controls,
      toast,
      delay: 3000,
    });
  }, [set]);

  const handleDrag = useCallback(() => {
    // Blue joke
    if (toast.isActive(actionIds.joke)) return;
    toast({
      id: actionIds.joke,
      duration: 5000,
      render: (props) => <Message {...props}>{set.joke}</Message>,
      position: 'top-left',
      isClosable: true,
    });
  }, [set]);

  return (
    <Box
      pos="fixed"
      marginTop={`${envsNavbar.height}px`}
      top={['12px', '24px', '32px']}
      left={['12px', '24px', '32px']}
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
        <Box
          boxShadow="base"
          borderRadius="50%"
          overflow="hidden"
          backgroundColor={useColorModeValue(
            'blackAlpha.200',
            'whiteAlpha.400',
          )}
        >
          <BackgroundImage src={envs.url} />
        </Box>
      </motion.button>
      <AnimatePresence initial={false} mode="wait">
        {!inTimeWelcome && (
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
    </Box>
  );
}

export default Blue;
