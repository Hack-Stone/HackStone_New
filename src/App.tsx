import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import ShipCore from './pages/ShipCore';
import ShipCoreUpdates from './pages/ShipCoreUpdates';
import ServiceCybersecurity from './pages/services/Cybersecurity';
import ServiceSoftware from './pages/services/SoftwareEngineering';
import ServiceWebDev from './pages/services/WebDevelopment';
import ServiceERP from './pages/services/ERPSystems';
import ServiceCloud from './pages/services/CloudDevOps';
import ServiceConsulting from './pages/services/TechnologyConsulting';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/shipcore" element={<ShipCore />} />
          <Route path="/products/shipcore/updates" element={<ShipCoreUpdates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cybersecurity" element={<ServiceCybersecurity />} />
          <Route path="/services/software-engineering" element={<ServiceSoftware />} />
          <Route path="/services/web-development" element={<ServiceWebDev />} />
          <Route path="/services/erp-systems" element={<ServiceERP />} />
          <Route path="/services/cloud-devops" element={<ServiceCloud />} />
          <Route path="/services/technology-consulting" element={<ServiceConsulting />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

