import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Committees from './pages/Committees';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/committees" element={<Committees />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
