/**
 * Base on
 * Chakra-ui: https://chakra-ui.com/
 */

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

/** @type {import('@chakra-ui/react').StyleConfig} */
const styles = {
  global: (props) => ({
    body: {
      bg: mode('#f1e7db', '#192227')(props),
    },
    'body .prim-btn': {
      bg: mode(
        'var(--chakra-colors-prim)',
        'var(--chakra-colors-primdark)',
      )(props),
      color: mode('', 'var(--chakra-colors-chakra-body-bg)')(props),
    },
    'body .prim-btn-outline': {
      color: mode(
        'var(--chakra-colors-prim)',
        'var(--chakra-colors-primdark)',
      )(props),
      // color: mode('', 'var(--chakra-colors-chakra-body-bg)')(props),
    },
    'body .second-btn': {
      bg: mode(
        'var(--chakra-colors-second)',
        'var(--chakra-colors-seconddark)',
      )(props),
      color: mode('', 'var(--chakra-colors-chakra-body-bg)')(props),
    },
    'body .second-btn-outline': {
      color: mode(
        'var(--chakra-colors-second)',
        'var(--chakra-colors-seconddark)',
      )(props),
    },
    'body .shows-avatar': {
      // color: mode('saddlebrown', 'saddlebrown')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  // initialColorMode: colorMode,
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "'Signika Negative', sans-serif",
    body: "'Source Sans Pro', sans-serif",
    mono: "'Fira Code', monospace",
    deco: "'Lobster Two', cursive",
    serif: "'Source Serif Pro', serif",
  },
  colors: {
    prim: '#009edc',
    primdark: '#89ddff',
    seconds: {
      100: '#a99281',
      200: '#a99281',
      300: '#a99281',
      400: '#a99281',
      500: '#a99281',
    },
    second: '#a99281',
    seconddark: '#a99281',
  },
});

export default theme;
