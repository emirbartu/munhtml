import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Committees from './pages/Committees';
import FUNSCPage from './pages/Committees/F-UNSC';
import FIAPage from './pages/Committees/FIA';
import DISECPage from './pages/Committees/GA1-DISEC';
import SPECPOLPage from './pages/Committees/GA4-SPECPOL';
import HCCPage from './pages/Committees/HCC';
import ILOPage from './pages/Committees/ILO';
import JCCPage from './pages/Committees/JCC';
import OTSPage from './pages/Committees/OTS';
import CrisisPage from './pages/Committees/crisis';
import UNHRCPage from './pages/Committees/UNHRC';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/unhrc" element={<UNHRCPage />} />
            <Route path="/committees/f-unsc" element={<FUNSCPage />} />
            <Route path="/committees/fia" element={<FIAPage />} />
            <Route path="/committees/disec" element={<DISECPage />} />
            <Route path="/committees/specpol" element={<SPECPOLPage />} />
            <Route path="/committees/hcc" element={<HCCPage />} />
            <Route path="/committees/ilo" element={<ILOPage />} />
            <Route path="/committees/jcc" element={<JCCPage />} />
            <Route path="/committees/ots" element={<OTSPage />} />
            <Route path="/committees/crisis" element={<CrisisPage />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
