import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      title: 'Aim4thestars Academy',
      desc: 'Aim4thestars Academy is an online platform offering interactive courses for children, fostering academic excellence, creativity, and personal growth through engaging content and expert guidance.',
      img: '/img/mathematics.webp',
      btnText: 'Visit Site',
      link: 'https://aim4thestar.com/',
      isExternal: true,
    },
    {
      title: 'Crystal Kleen Services',
      desc: 'Crystal Kleen Services provides professional cleaning for homes and businesses, offering deep cleaning, office maintenance, and sanitation with eco-friendly products and flexible scheduling for client satisfaction.',
      img: '/img/Antiviral-disinfect-the-happy-house-cleaning-400x267.webp',
      btnText: 'Visit Site',
      link: 'https://crystalkleenservices.com/',
      isExternal: true,
    },
    {
      title: 'Techmind',
      desc: 'Techmind is the empowerment engine of Crystals Business Solution (CBS), designed to guide, mentor, and train individuals at various stages of their tech journey.',
      img: '/img/istockphoto-1319404394-170667a.jpg',
      btnText: 'View Profile',
      link: '/img/Techmind Company Profile .pdf',
      isExternal: true,
    },
  ];

  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5 mb-5" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/carousel-2.jpg) center center no-repeat', backgroundSize: 'cover' }}>
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-4 mb-4">Our Products</h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Products</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Our Products</h4>
            <h1 className="display-5 mb-4">Explore Our Innovative Products</h1>
            <p className="mb-0 text-muted">
              Discover our range of digital platforms and solutions designed to empower businesses and individuals. Each product is crafted to deliver value, efficiency, and growth in today's competitive landscape.
            </p>
          </div>
          <div className="row g-4">
            {products.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '240px', objectFit: 'cover' }} />
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title mb-3">{item.title}</h4>
                    <p className="card-text text-muted mb-4 flex-grow-1">{item.desc}</p>
                    <div>
                      <a href={item.link} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2 px-4">
                        {item.btnText} <i className="fas fa-external-link-alt ms-2"></i>
                      </a>
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

export default Products;

