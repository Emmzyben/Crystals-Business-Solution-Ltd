import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-1.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">Careers</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Careers</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Join Our Team</h4>
            <h1 className="display-5 mb-4">Career Opportunities at CBS</h1>
            <p className="mb-0 text-muted">
              Explore exciting career paths and become part of a dynamic, innovative team. We are always looking for talented individuals who are passionate about making a difference. Discover your next opportunity with us and help shape the future of our company.
            </p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center py-5 px-3 border rounded bg-light text-center shadow-sm" style={{ minHeight: '320px' }}>
            <img src="/img/empty-cart-512.webp" alt="No jobs available" style={{ width: '80px', marginBottom: '20px', opacity: 0.6 }} />
            <h3 className="text-dark mb-2">No job openings at the moment</h3>
            <p className="text-muted mb-4" style={{ maxWidth: '600px' }}>
              Please check back soon or send your CV and portfolio directly to us for future openings.
            </p>
            <a href="mailto:careers@crystalsbusinesssolution.com" className="btn btn-primary rounded-pill py-2 px-4">
              <i className="fas fa-envelope me-2"></i>Send your CV to careers@crystalsbusinesssolution.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;

