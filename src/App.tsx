/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Areas from './pages/Areas';
import About from './pages/About';
import Contact from './pages/Contact';

// Area Pages
import NoidaPage from './pages/areas/Noida';
import BeauticianNoidaPage from './pages/areas/BeauticianNoida';
import GhaziabadPage from './pages/areas/Ghaziabad';
import IndirapuramPage from './pages/areas/Indirapuram';
import DelhiNCRPage from './pages/areas/DelhiNCR';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Local SEO Pages */}
            <Route path="/salon-at-home-in-noida" element={<NoidaPage />} />
            <Route path="/beautician-at-home-in-noida" element={<BeauticianNoidaPage />} />
            <Route path="/salon-at-home-in-ghaziabad" element={<GhaziabadPage />} />
            <Route path="/salon-at-home-in-indirapuram" element={<IndirapuramPage />} />
            <Route path="/home-salon-services-in-delhi-ncr" element={<DelhiNCRPage />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

