/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

// Dynamic SEO Landing Page
import LandingPage from './pages/LandingPage';
import { landingPages } from './data/landingPages';

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
            {landingPages.map(page => (
              <React.Fragment key={page.path}>
                <Route 
                  path={page.path} 
                  element={
                    <LandingPage 
                      pageContent={{
                        ...page,
                        relatedPages: landingPages.filter(p => p.path !== page.path).slice(0, 4)
                      }} 
                    />
                  } 
                />
              </React.Fragment>
            ))}

            {/* Old legacy redirects / keep paths if needed, let's keep them routing to landing page if they are standard paths, or just let them 404 since I've replaced them */}

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

