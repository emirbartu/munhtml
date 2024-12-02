import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Committees from './pages/Committees';
import FUNSCPage from './pages/Committees/F-UNSC';
import FIAPage from './pages/Committees/FIA';
import DISECPage from './pages/Committees/DISEC';
import UEFAPage from './pages/Committees/UEFA';
import SPECPOLPage from './pages/Committees/SPECPOL';
import HCCPage from './pages/Committees/HCC';
import ILOPage from './pages/Committees/ILO';
import JCCPage from './pages/Committees/JCC';
import OTSPage from './pages/Committees/OTS';
import CrisisPage from './pages/Committees/crisis';
import Apply from './pages/Apply';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/f-unsc" element={<FUNSCPage />} />
            <Route path="/committees/fia" element={<FIAPage />} />
            <Route path="/committees/disec" element={<DISECPage />} />
            <Route path="/committees/uefa" element={<UEFAPage />} />
            <Route path="/committees/specpol" element={<SPECPOLPage />} />
            <Route path="/committees/hcc" element={<HCCPage />} />
            <Route path="/committees/ilo" element={<ILOPage />} />
            <Route path="/committees/jcc" element={<JCCPage />} />
            <Route path="/committees/ots" element={<OTSPage />} />
            <Route path="/committees/crisis" element={<CrisisPage />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <div>
          <Analytics />
      </div>
    </ChakraProvider>
  );
}

export default App;
