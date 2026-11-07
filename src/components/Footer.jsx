import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5 border-start-0 border-end-0" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <Link to="/" className="p-0">
                  <h4 className="text-white">Crystals Business Solution Ltd</h4>
                </Link>
                <p className="mb-4">
                  Delivering cutting-edge IT consulting, custom software development, corporate training, and business management solutions to accelerate your digital growth.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to="/"><i className="fas fa-angle-right me-2"></i> Home</Link>
                <Link to="/about"><i className="fas fa-angle-right me-2"></i> About Us</Link>
                <Link to="/service"><i className="fas fa-angle-right me-2"></i> Services</Link>
                <Link to="/products"><i className="fas fa-angle-right me-2"></i> Products</Link>
                <Link to="/careers"><i className="fas fa-angle-right me-2"></i> Careers</Link>
                <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Support & Legal</h4>
                <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
                <a href="#!"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                <a href="#!"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Contact Info</h4>
                <div className="d-flex align-items-start mb-2">
                  <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                  <p className="text-white mb-0">info@crystalsbusinesssolution.com</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <i className="fa fa-phone-alt text-primary me-3 mt-1"></i>
                  <p className="text-white mb-0">+442035651347</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <i className="fa fa-phone-alt text-primary me-3 mt-1"></i>
                  <p className="text-white mb-0">+44 7376 492639</p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                  <p className="text-white mb-0">124 City Road, London EC1V 2NX</p>
                </div>
                <div className="d-flex">
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#!"><i className="fab fa-facebook-f text-white"></i></a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#!"><i className="fab fa-twitter text-white"></i></a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.instagram.com/crystalsbsuk?igsh=YzJjcHdlbXhpbnYx&utm_source=qr" target="_blank" rel="noreferrer"><i className="fab fa-instagram text-white"></i></a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://www.linkedin.com/company/crystals-business-solution-limited/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-white"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <span className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>Crystals Business Solution Ltd (CBS)
                </span>, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

