import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Header Banner */}
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-1.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">About Us</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>

      {/* Main About Intro */}
      <div className="container-fluid about py-5">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-xl-12">
              <h4 className="text-primary text-uppercase fw-bold">About Us</h4>
              <h1 className="display-5 mb-4">About Us – Crystals Business Solution Ltd (CBS)</h1>
              <h5 className="text-muted mb-4">Innovative IT Solutions & Business Consultancy for Sustainable Growth</h5>
              <p className="mb-4 text-muted fs-5">
                We are a UK-based technology and business consulting firm dedicated to helping businesses grow through smart digital transformation, innovative IT solutions, and strategic management consulting. Specializing in education, finance, SMEs, and healthcare, we deliver tailored, scalable, and sustainable solutions that enhance operational performance and drive long-term success.
              </p>
              <p className="mb-4 text-muted">
                Whether you’re looking to build a high-performance website, optimize your IT infrastructure, or scale your business operations, CBS offers a comprehensive range of services designed to meet your goals and exceed expectations.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/service" className="btn btn-primary rounded-pill py-3 px-5">Our Services</Link>
                <Link to="/contact" className="btn btn-outline-primary rounded-pill py-3 px-5">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Commitments */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-primary fw-bold">Our Values & Commitments</h2>
          <p className="lead text-muted">We build with purpose, for people and the planet.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4 text-center">
            <div className="p-4 border rounded h-100 shadow-sm bg-white">
              <i className="fas fa-leaf fa-3x text-success mb-3"></i>
              <h5 className="fw-bold">Sustainability-Driven Solutions</h5>
              <p className="text-muted mb-0">We implement eco-friendly, energy-efficient practices to reduce carbon footprints and drive green innovation.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4 border rounded h-100 shadow-sm bg-white">
              <i className="fas fa-graduation-cap fa-3x text-success mb-3"></i>
              <h5 className="fw-bold">Community Investment</h5>
              <p className="text-muted mb-0">10% of profits support free STEM education via our Aim4thestars platform—empowering underserved children globally.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4 border rounded h-100 shadow-sm bg-white">
              <i className="fas fa-users fa-3x text-success mb-3"></i>
              <h5 className="fw-bold">People-Centric Culture</h5>
              <p className="text-muted mb-0">We foster a diverse, ethical, and empowering environment where people and innovation thrive.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="container-fluid py-5 bg-light my-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="text-primary fw-bold">Our Approach</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="lead text-center text-muted">
                At CBS, we integrate Agile, Lean Six Sigma, and top-tier partnerships (Microsoft, AWS) to deliver scalable, compliant, and results-driven solutions tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose CBS */}
      <div className="container py-5 mb-5">
        <div className="text-center mb-5">
          <h2 className="text-primary fw-bold">Why Choose CBS?</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex align-items-start p-3 border rounded mb-3 shadow-sm bg-white">
              <i className="fas fa-box-open fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">All-in-One Business & Tech Solutions</h6>
                <p className="text-muted mb-0">Seamless and strategic solutions under one roof.</p>
              </div>
            </div>
            <div className="d-flex align-items-start p-3 border rounded mb-3 shadow-sm bg-white">
              <i className="fas fa-user-tie fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Experienced IT Consultants & Advisors</h6>
                <p className="text-muted mb-0">Partner with industry veterans for expert insights.</p>
              </div>
            </div>
            <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white">
              <i className="fas fa-globe-africa fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Proven Track Record</h6>
                <p className="text-muted mb-0">Global success stories and satisfied clients.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-start p-3 border rounded mb-3 shadow-sm bg-white">
              <i className="fas fa-seedling fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Sustainable & Impactful Strategies</h6>
                <p className="text-muted mb-0">Focused on long-term impact and value creation.</p>
              </div>
            </div>
            <div className="d-flex align-items-start p-3 border rounded mb-3 shadow-sm bg-white">
              <i className="fas fa-hand-holding-heart fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Commitment to Social Responsibility</h6>
                <p className="text-muted mb-0">Empowering the next generation through education.</p>
              </div>
            </div>
            <div className="d-flex align-items-start p-3 border rounded shadow-sm bg-white">
              <i className="fas fa-lightbulb fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Strategic Innovation</h6>
                <p className="text-muted mb-0">Accelerate your digital transformation journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

