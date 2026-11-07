import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Book from './pages/Book';

function NotFound() {
  return (
    <div className="container text-center py-5 my-5">
      <h1 className="display-1 text-primary fw-bold">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead text-muted mb-4">The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="btn btn-primary rounded-pill px-4 py-2">Go to Home</a>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="service/:slug" element={<ServiceDetail />} />
        {/* Supporting legacy HTML link paths */}
        <Route path="IT_Consultancy.html" element={<ServiceDetail />} />
        <Route path="Business_Management.html" element={<ServiceDetail />} />
        <Route path="Web_Design.html" element={<ServiceDetail />} />
        <Route path="Corporate_Training.html" element={<ServiceDetail />} />
        <Route path="Support_Outsourcing.html" element={<ServiceDetail />} />
        <Route path="Sustainability_Impact.html" element={<ServiceDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

