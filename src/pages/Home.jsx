import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/img/carousel-2.jpg',
    title: 'Empowering Your Business with Innovative IT Solutions',
    align: 'center',
  },
  {
    image: '/img/4.jpg',
    title: 'IT Solutions & Business Consultancy',
    align: 'end',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Director, EduGrowth Solutions',
    image: '/img/testimonial-1.jpg',
    text: 'CBS transformed our digital presence with a modern, responsive website and provided invaluable IT consulting. Their team is professional, knowledgeable, and truly cares about our success.',
  },
  {
    name: 'James Lee',
    role: 'Operations Manager, FinServe UK',
    image: '/img/testimonial-2.jpg',
    text: 'The CBS team provided us with strategic business consulting and IT support that streamlined our operations and improved efficiency. We highly recommend their services!',
  },
  {
    name: 'Priya Patel',
    role: 'CEO, MedConnect Health',
    image: '/img/testimonial-3.jpg',
    text: 'Thanks to CBS, our healthcare platform is secure, scalable, and user-friendly. Their expertise in IT solutions and ongoing support has been a game changer for us.',
  },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <div className="container-fluid position-relative p-0 mb-5">
        <div style={{ position: 'relative', minHeight: '550px', overflow: 'hidden' }}>
          <img
            src={slides[activeSlide].image}
            alt="Hero Background"
            className="w-100"
            style={{
              height: '550px',
              objectFit: 'cover',
              filter: 'brightness(0.4)',
              transition: 'opacity 0.8s ease-in-out',
            }}
          />
          <div
            className="d-flex align-items-center"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.45)',
            }}
          >
            <div className="container">
              <div className="row">
                <div
                  className={`col-12 ${
                    slides[activeSlide].align === 'end'
                      ? 'text-center text-md-end ms-auto col-xl-8'
                      : 'text-center col-xl-10 mx-auto'
                  }`}
                >
                  <h1 className="display-4 text-white mb-4 fw-bold animate__animated animate__fadeInDown">
                    {slides[activeSlide].title}
                  </h1>
                  <div
                    className={`d-flex flex-wrap gap-3 mb-4 ${
                      slides[activeSlide].align === 'end'
                        ? 'justify-content-center justify-content-md-end'
                        : 'justify-content-center'
                    }`}
                  >
                    <Link to="/contact" className="btn btn-light rounded-pill py-3 px-4 px-md-5">
                      <i className="fas fa-envelope me-2 text-primary"></i>Contact Us
                    </Link>
                    <Link to="/about" className="btn btn-primary rounded-pill py-3 px-4 px-md-5">
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`d-flex align-items-center ${
                      slides[activeSlide].align === 'end'
                        ? 'justify-content-center justify-content-md-end'
                        : 'justify-content-center'
                    }`}
                  >
                    <h5 className="text-white me-3 mb-0">Follow Us:</h5>
                    <div className="d-flex gap-2">
                      <a className="btn btn-sm-square btn-light rounded-circle" href="#!"><i className="fab fa-facebook-f text-primary"></i></a>
                      <a className="btn btn-sm-square btn-light rounded-circle" href="#!"><i className="fab fa-twitter text-primary"></i></a>
                      <a className="btn btn-sm-square btn-light rounded-circle" href="https://www.instagram.com/crystalsbsuk" target="_blank" rel="noreferrer"><i className="fab fa-instagram text-primary"></i></a>
                      <a className="btn btn-sm-square btn-light rounded-circle" href="https://www.linkedin.com/company/crystals-business-solution-limited/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Controls */}
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle opacity-75"
            style={{ width: '45px', height: '45px' }}
          >
            &#10094;
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle opacity-75"
            style={{ width: '45px', height: '45px' }}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid about py-5">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7">
              <h4 className="text-primary text-uppercase fw-bold">About Us</h4>
              <h1 className="display-5 mb-4">Welcome to Crystals Business Solution Ltd (CBS)</h1>
              <p className="mb-4 text-muted fs-5">
                At CBS, we help businesses transform, grow, and thrive in the digital era. Based in the UK, we specialize in delivering innovative technology solutions and strategic consulting services for organizations in education, finance, healthcare, and SMEs.
              </p>
              <p className="mb-4 text-muted">
                Whether you’re looking to build a high-performance website, optimize your IT infrastructure, or scale your business operations, CBS offers a comprehensive range of services designed to meet your goals and exceed expectations.
              </p>
              <div className="row g-4 pt-2">
                <div className="col-sm-6">
                  <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5">
                    Learn More
                  </Link>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-phone-alt fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Call Us</h5>
                      <span className="fs-5 fw-bold text-dark">+442035651347</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="rounded overflow-hidden shadow">
                <img src="/img/15.jpg" className="img-fluid w-100" alt="About CBS" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-fluid service py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Our Services</h4>
            <h1 className="display-5 mb-4">We provide the best IT solutions and business consulting services</h1>
            <p className="mb-0 text-muted">We combine industry expertise with cutting-edge technologies to deliver impactful results.</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'IT Consultancy Services',
                desc: 'From cloud solutions to cybersecurity, we help organizations implement secure, scalable, and cost-effective technologies.',
                img: '/img/11.jpg',
                link: '/service/it-consultancy',
              },
              {
                title: 'Business & Management Consulting',
                desc: 'We provide strategic planning, organizational transformation, and operational optimization to help businesses grow and scale.',
                img: '/img/4.jpg',
                link: '/service/business-management',
              },
              {
                title: 'Web Design & Development',
                desc: 'We design responsive, user-friendly, and SEO-optimized websites tailored to your business goals for web and mobile.',
                img: '/img/5.jpg',
                link: '/service/web-design',
              },
              {
                title: 'Corporate Training & Capacity Building',
                desc: 'Our training programs equip your teams with digital skills, leadership abilities, and technical know-how.',
                img: '/img/10.jpg',
                link: '/service/corporate-training',
              },
              {
                title: 'Support & Outsourcing Solutions',
                desc: 'Reduce costs and improve service delivery with our reliable outsourcing solutions for IT support and operations.',
                img: '/img/12.jpg',
                link: '/service/support-outsourcing',
              },
              {
                title: 'Sustainability & Impact Strategy',
                desc: 'We help businesses align with ESG standards and implement sustainable, community-focused initiatives.',
                img: '/img/7.jpg',
                link: '/service/sustainability-impact',
              },
            ].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={service.img} className="card-img-top" alt={service.title} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title mb-3">{service.title}</h4>
                    <p className="card-text text-muted mb-4 flex-grow-1">{service.desc}</p>
                    <div>
                      <Link to={service.link} className="btn btn-outline-primary rounded-pill py-2 px-4">
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

      {/* Features */}
      <div className="container-fluid feature py-5">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Our Features</h4>
            <h1 className="display-5 mb-4">Empowering Your Business with Technology & Expertise</h1>
            <p className="mb-0 text-muted">CBS delivers tailored IT solutions, strategic consulting, and ongoing support to help organizations in education, finance, healthcare, and SMEs achieve digital transformation.</p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-laptop-code',
                title: 'Custom IT Solutions',
                desc: 'We design and develop secure, scalable websites and applications tailored to your business needs and industry standards.',
              },
              {
                icon: 'fas fa-user-tie',
                title: 'Business Consulting',
                desc: 'Our experts provide strategic planning, process optimization, and management consulting to drive business growth and efficiency.',
              },
              {
                icon: 'fas fa-chalkboard-teacher',
                title: 'Corporate Training',
                desc: 'We empower your teams with digital skills, leadership development, and technical training for lasting impact.',
              },
              {
                icon: 'fas fa-headset',
                title: 'Ongoing Support',
                desc: 'Our dedicated support team ensures your IT systems and digital platforms run smoothly, securely, and efficiently at all times.',
              },
            ].map((feature, i) => (
              <div key={i} className="col-md-6 col-lg-6 col-xl-3">
                <div className="p-4 text-center rounded bg-white shadow-sm h-100 border">
                  <div className="mb-4 text-primary">
                    <i className={`${feature.icon} fa-3x`}></i>
                  </div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="mb-0 text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-fluid testimonial py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary text-uppercase fw-bold">Testimonials</h4>
            <h1 className="display-5 mb-4">What Our Clients Say</h1>
            <p className="mb-0 text-muted">Discover how CBS has helped organizations achieve their goals through innovative IT solutions and expert business consulting.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow p-4 p-md-5 position-relative text-center">
                <div className="mb-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="rounded-circle shadow"
                    style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                  />
                </div>
                <p className="fs-5 fst-italic text-muted mb-4">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <h4 className="mb-1">{testimonials[activeTestimonial].name}</h4>
                <p className="text-primary mb-3">{testimonials[activeTestimonial].role}</p>
                <div className="d-flex justify-content-center text-warning mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className="fas fa-star mx-1"></i>
                  ))}
                </div>
                <div className="d-flex justify-content-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`btn btn-sm rounded-circle p-0 ${
                        activeTestimonial === idx ? 'btn-primary' : 'btn-outline-secondary'
                      }`}
                      style={{ width: '12px', height: '12px' }}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

