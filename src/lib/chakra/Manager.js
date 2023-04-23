import React from 'react';
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

function Manager({ cookie, children, theme }) {
  const colorModeManager =
    typeof cookie === 'string'
      ? cookieStorageManagerSSR(cookie)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
export default Manager;
