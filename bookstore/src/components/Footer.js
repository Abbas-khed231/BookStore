import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img src="logo.png" alt="Book Store Logo" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-contact">
              <h4>Contact Information</h4>
              <p>Phone: 474289853</p>
              <p>Email: email@email.com</p>
              <p>Address: Vikhroli [W], Mumbai-400083</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-social">
              <h4>Follow Us</h4>
              <a href=""><i className="fab fa-facebook"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-about">
              <h4>About Us</h4>
              <p>[Brief description of the book store]</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="footer-hours">
              <h4>Hours of Operation</h4>
              <p>Monday - Friday: [Opening Time] - [Closing Time]</p>
              <p>Saturday: [Opening Time] - [Closing Time]</p>
              <p>Sunday: [Opening Time] - [Closing Time]</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} AK Book Store. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
