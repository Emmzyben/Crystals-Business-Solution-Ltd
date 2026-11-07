import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-1.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">Request a Quote</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Quote</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light p-4 p-md-5 rounded shadow-sm">
                <h4 className="text-primary fw-bold mb-3">Request a Quote</h4>
                <p className="mb-4 text-muted">
                  Looking for a custom solution or want to know our pricing? Please fill out the form below to request a quote. Our team will review your requirements and get back to you promptly with a tailored proposal.
                </p>

                {submitted && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you!</strong> Your quote request has been received. Our team will reach out with a proposal shortly.
                    <button type="button" className="btn-close" onClick={() => setSubmitted(false)} aria-label="Close"></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-bold small">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-bold small">Your Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-bold small">Your Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 123 456 789"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-bold small">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark fw-bold small">Service Interested In</label>
                      <select
                        className="form-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        <option value="IT Consultancy Services">IT Consultancy Services</option>
                        <option value="Business & Management Consulting">Business & Management Consulting</option>
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Corporate Training & Capacity Building">Corporate Training & Capacity Building</option>
                        <option value="Support & Outsourcing Solutions">Support & Outsourcing Solutions</option>
                        <option value="Sustainability & Impact Strategy">Sustainability & Impact Strategy</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark fw-bold small">Project Details / Message *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Describe your project, timeline, and requirements..."
                      ></textarea>
                    </div>
                    <div className="col-12 pt-2">
                      <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill" disabled={loading}>
                        {loading ? 'Submitting Quote Request...' : 'Request Quote'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;

