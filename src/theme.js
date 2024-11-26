import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'light' ? 'white' : 'gray.800',
          borderColor: props.colorMode === 'light' ? 'gray.200' : 'gray.700',
        },
        item: {
          color: props.colorMode === 'light' ? 'gray.800' : 'white',
          _hover: {
            bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
          },
        },
      }),
    },
  },
});

export default theme;
