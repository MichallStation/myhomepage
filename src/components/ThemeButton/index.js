import React from 'react';
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  btn: {
    width: 44,
    height: 44,
  },
};

// const handleToggleTheme = useCallback(() => {
//   const newValue = colorMode === 'light' ? 'dark' : 'light';
//   // update storage (cookies/localStorage)
//   Cookies.set('chakra-ui-color-mode', newValue, {
//     path: '/',
//     expires: expireDays(365),
//   });
//   localStorage.setItem('chakra-ui-color-mode', newValue);
//   toggleColorMode();
// }, [colorMode, toggleColorMode]);

function ThemeButton(props) {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Button
        as={motion.button}
        initial={{ y: -20, opacity: 0 }}
        // initial={false}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        key={useColorModeValue('light', 'dark')}
        transition={{ duration: 0.2 }}
        className="theme-btn"
        bg={useColorModeValue('purple.500', 'yellow.500')}
        onClick={toggleColorMode}
        borderRadius="xl"
        p={2}
        style={style.btn}
        title="theme"
      >
        {useColorModeValue(<BsMoonFill />, <BsSunFill />)}
      </Button>
    </Box>
  );
}

export default ThemeButton;
