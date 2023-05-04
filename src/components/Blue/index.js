import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Image, useColorModeValue, useToast } from '@chakra-ui/react';
import { DONE, selectball3dStatus } from '@/features/slices/ui';
import { getSet } from '@/_globals/sets';
import Message from './Message';
import useLang from '@/features/hooks/useLang';
import styles from './styles';
import { BlueId } from '@/_globals/envs';
import envs from '../Navbar/envs';
import actions from './actions';
import BlueLoading from '../BlueLoading';

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
function Blue({ storage, width = 48 }) {
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
    // }, 0);
    // eslint-disable-next-line consistent-return
    return () => t && clearTimeout(t);
  }, [inTimeWelcome, set]);

  const handleClick = useCallback(() => {
    // Blue introduction
    // if (toast.isActive(actionIds.intro)) return;
    // toast({
    //   id: actionIds.intro,
    //   duration: 5000,
    //   render: (props) => <Message {...props}>{set.intro}</Message>,
    //   position: 'top-left',
    //   isClosable: true,
    // });
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
    // console.log('drag');
    // await controls.start('joke');
    toast({
      id: actionIds.joke,
      duration: 5000,
      render: (props) => <Message {...props}>{set.joke}</Message>,
      position: 'top-left',
      isClosable: true,
    });
    // await controls.start('nothing');
    // controls.stop();
  }, [set]);

  return (
    <Box
      pos="fixed"
      // zIndex="toast"
      marginTop={`${envs.height}px`}
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
          // className="animate__animated animate__flip animate__infinite animate__slow"
          boxShadow="base"
          borderRadius="50%"
          overflow="hidden"
          backgroundColor={useColorModeValue(
            'blackAlpha.200',
            'whiteAlpha.400',
            // 'whiteAlpha.800',
          )}
        >
          <Image
            className="brand-img"
            src="/blue.png"
            alt="Blue"
            width={`${width}px`}
          />
        </Box>
      </motion.button>
      <AnimatePresence initial={false} mode="wait">
        {!inTimeWelcome && (
          <motion.div
            key="blue-loading"
            initial={false}
            // whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.6 }}
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
