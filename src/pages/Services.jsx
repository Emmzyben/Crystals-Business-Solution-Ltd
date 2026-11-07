import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../servicesData';

const Services = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-1.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">Our Services</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Services</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Our Services</h4>
            <h1 className="display-5 mb-4">We provide the best IT solutions and business consulting services</h1>
            <p className="mb-0 text-muted">
              We combine industry expertise with cutting-edge technologies to deliver impactful results. Our core services include:
            </p>
          </div>
          <div className="row g-4">
            {Object.entries(servicesData).map(([slug, service]) => (
              <div key={slug} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={service.image} className="card-img-top" alt={service.title} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title mb-3">{service.title}</h4>
                    <p className="card-text text-muted mb-4 flex-grow-1">
                      {service.paragraphs[0].slice(0, 160)}...
                    </p>
                    <div>
                      <Link to={`/service/${slug}`} className="btn btn-outline-primary rounded-pill py-2 px-4">
                        Learn More <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

