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

/** @type {Object.<string, import('framer-motion').TargetAndTransition>} */
const variants = {
  nothing: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  say: {
    scale: 1.6,
    // transition: {
    //   duration: 0.6,
    // },
  },
  look: {
    scale: 1.4,
  },
};

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function Blue({ storage, width = 48 }) {
  // const { lang = 'en' } = storage.current;
  const [lang, setLang] = useState(storage.current);
  const { locale, defaultLocale } = useRouter();
  const inTimeWelcome = useSelector(selectball3dStatus) === DONE;
  const toast = useToast();
  const controls = useAnimationControls();

  const isOldguy = storage.prev?.latest;
  const set = getSet(Blue.name, lang);
  const introMesId = 'intro';

  useEffect(() => {
    let l;
    if (locale !== defaultLocale) {
      l = locale;
    } else {
      l = Cookies.get('lang') || 'en';
    }
    if (l !== lang) setLang(l);
  }, [locale]);

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
      controls.start('nothing');

      // controls.stop();
    }, 3000);
    // }, 0);
    return () => t && clearTimeout(t);
  }, [inTimeWelcome]);

  const handleClick = useCallback(() => {
    // Blue introduction
    if (toast.isActive(introMesId)) return;
    toast({
      id: introMesId,
      duration: 5000,
      render: (props) => <Message {...props}>{set.intro}</Message>,
      position: 'bottom-right',
      isClosable: true,
    });
  }, [set]);

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
        variants={variants}
        animate={controls}
        onClick={handleClick}
        title={set.name}
      >
        <Box boxShadow="base" borderRadius="50%" overflow="hidden">
          <Image
            className="brand-img"
            src="/blue.png"
            alt="Blue"
            width={`${width}px`}
          />
        </Box>
        {/* <Avatar
          className="brand-img"
          src="/blue.png"
          alt="Blue"
          width={`${width}px`}
        > */}
        {/* <AvatarBadge boxSize="1em" bg="green.500" /> */}
        {/* </Avatar> */}
        {/* <Box
          borderRadius="32px"
          backgroundColor={useColorModeValue(
            'blackAlpha.100',
            'whiteAlpha.100',
          )}
        >
          <Heading textAlign="center" fontSize="sm" fontFamily="deco">
            {set.name}
          </Heading>
        </Box> */}
      </motion.button>
    </Box>
  );
}

export default Blue;
