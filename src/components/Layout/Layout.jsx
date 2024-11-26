import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1" pt="120px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
