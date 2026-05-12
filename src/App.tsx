/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import InterestForm from "./components/InterestForm";
import Career from "./components/Career";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ServicePage from "./components/ServicePage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Blog />
                <InterestForm />
              </main>
            } />
            <Route path="/career" element={<Career />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/service/:serviceId" element={<ServicePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
