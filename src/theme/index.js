import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';

const colors = {
  brand: {
    primary: '#0E1B31',
    secondary: '#000b1d',
  },
  light: {
    text: '#000000',
    bg: '#FFFFFF',
    nav: {
      bg: 'rgba(255, 255, 255, 0.8)',
      text: '#000000',
    },
  },
  dark: {
    text: '#FFFFFF',
    bg: '#000b1d',
    nav: {
      bg: 'rgba(14, 27, 49, 0.8)',
      text: '#FFFFFF',
    },
  },
};

const fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.bg' : 'light.bg',
        color: props.colorMode === 'dark' ? 'dark.text' : 'light.text',
      },
    }),
  },
});
