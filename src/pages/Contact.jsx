import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
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

    // Mock API submission or endpoint call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-2.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">Contact Us</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-xl-6">
              {/* Contact info cards */}
              <div className="bg-light rounded p-4 p-md-5 mb-4 shadow-sm">
                <h4 className="text-primary mb-4 fw-bold">Get in Touch</h4>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-map-marker-alt fa-2x text-primary me-3 mt-1"></i>
                      <div>
                        <h5 className="fw-bold mb-1">Address</h5>
                        <p className="mb-0 text-muted">124 City Road, London EC1V 2NX</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-envelope fa-2x text-primary me-3 mt-1"></i>
                      <div>
                        <h5 className="fw-bold mb-1">Mail Us</h5>
                        <p className="mb-0 text-muted">info@crystalsbusinesssolution.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fa fa-phone-alt fa-2x text-primary me-3 mt-1"></i>
                      <div>
                        <h5 className="fw-bold mb-1">Telephone 1</h5>
                        <p className="mb-0 text-muted">+442035651347</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fa fa-phone-alt fa-2x text-primary me-3 mt-1"></i>
                      <div>
                        <h5 className="fw-bold mb-1">Telephone 2</h5>
                        <p className="mb-0 text-muted">+44 7376 492639</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message form */}
              <div className="bg-light p-4 p-md-5 rounded shadow-sm">
                <h4 className="text-primary fw-bold mb-3">Send Us a Message</h4>
                <p className="mb-4 text-muted">
                  We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you!</strong> Your message has been sent successfully. We will get in touch shortly.
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
                      <label className="form-label text-dark fw-bold small">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 123 456 789"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-bold small">Project / Organization</label>
                      <input
                        type="text"
                        className="form-control"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="Project Name"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark fw-bold small">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Consulting Inquiry"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark fw-bold small">Message *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your needs..."
                      ></textarea>
                    </div>
                    <div className="col-12 pt-2">
                      <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill" disabled={loading}>
                        {loading ? 'Sending Message...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="rounded shadow-sm overflow-hidden h-100" style={{ minHeight: '450px' }}>
                <iframe
                  title="CBS Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2355692950946!2d-0.09123542448255477!3d51.52723900925527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671a6cfb1%3A0x382927fb9ac5269b!2s124%20City%20Rd%2C%20London%20EC1V%202NP%2C%20UK!5e0!3m2!1sen!2sng!4v1749209782175!5m2!1sen!2sng"
                  className="w-100 h-100"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

