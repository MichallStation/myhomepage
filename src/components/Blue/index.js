import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { motion, useAnimationControls } from 'framer-motion';
import { BackgroundImage } from '@/lib/next-chakra';
import langs from '@/globals/langs';
import Message from './Message';
import styles from './styles';
import envsNavbar from '../Navbar/envs';
import actions from './actions';
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
  hide: {
    scale: 0,
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

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Blue({ storage }) {
  const { locale } = useRouter();
  const set = langs[locale].Blue;
  const toast = useToast();
  const controls = useAnimationControls();
  const isOldguy = !storage.newbie;

  // Welcome
  useEffect(() => {
    const t = setTimeout(() => {
      actions.says({
        id: actionIds.welcome,
        mes: isOldguy ? set.welcome.old : set.welcome.newbie,
        controls,
        toast,
      });
    }, 5000);
    // eslint-disable-next-line consistent-return
    return () => t && clearTimeout(t);
  }, [storage.lang]);

  const handleClick = useCallback(() => {
    // Blue introduction
    actions.says({
      id: actionIds.intro,
      mes: set.intro,
      controls,
      toast,
      delay: 3000,
    });
  }, [storage.lang]);

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
  }, [storage.lang]);

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
        initial="hide"
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        whileInView="nothing"
        whileHover="look"
        whileTap={{ scale: 0.9 }}
        whileDrag={handleDrag}
        variants={variants}
        animate={controls}
        onClick={handleClick}
        title={set.name}
        style={styles.blue}
      >
        <Box boxShadow="base" borderRadius="50%">
          <BackgroundImage w="44px" h="44px" src={envs.url} />
        </Box>
      </motion.button>
    </Box>
  );
}

export default Blue;
