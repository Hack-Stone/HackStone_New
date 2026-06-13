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
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

