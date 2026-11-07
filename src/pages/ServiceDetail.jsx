import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../servicesData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/service" replace />;
  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-2.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">{service.title}</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/service" className="text-white">Services</Link></li>
            <li className="breadcrumb-item active text-primary">{service.title}</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-5">
            <img src={service.image} alt={service.title} className="w-100" style={{ maxHeight: '420px', objectFit: 'cover' }} />
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-2 text-primary fw-bold">{service.title}</h2>
              {service.subtitle && <h5 className="text-muted mb-4">{service.subtitle}</h5>}
              
              <div className="service-content mt-4">
                {service.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-3 text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {p}
                  </p>
                ))}
              </div>

              <hr className="my-5" />
              <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                <div>
                  <h5 className="mb-1 fw-bold">Ready to take the next step?</h5>
                  <p className="text-muted mb-0">Contact our specialists to design a solution tailored to your goals.</p>
                </div>
                <div className="d-flex gap-2">
                  <Link to="/book" className="btn btn-primary rounded-pill px-4 py-2">
                    Request a Quote
                  </Link>
                  <Link to="/contact" className="btn btn-outline-secondary rounded-pill px-4 py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

