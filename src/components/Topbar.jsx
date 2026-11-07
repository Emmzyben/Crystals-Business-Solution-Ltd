import React from 'react';

const Topbar = () => {
  return (
    <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-flex flex-wrap">
            <a href="tel:+447376492639" className="text-muted small me-4">
              <i className="fas fa-phone-alt text-primary me-2"></i>+44 7376 492639
            </a>
            <a href="tel:+442035651347" className="text-muted small me-4">
              <i className="fas fa-phone-alt text-primary me-2"></i>+442035651347
            </a>
            <a href="mailto:info@crystalsbusinesssolution.com" className="text-muted small me-0">
              <i className="fas fa-envelope text-primary me-2"></i>info@crystalsbusinesssolution.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

