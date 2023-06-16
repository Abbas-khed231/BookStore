import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/006/115/725/small/black-and-white-open-book-logo-illustration-on-white-background-free-vector.jpg" alt="Book Store Logo" />
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
              <i class="fa fa-facebook-official me-2" aria-hidden="true"></i>
              <i class="fa fa-twitter-square me-2" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-about">
              <h4>About Us</h4>
              <p>About us description</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="footer-hours">
              <h4>Hours of Operation</h4>
              <p>Monday - Friday: 09:00 AM - 09:00 PM</p>
              <p>Saturday: 11:00 AM - 04:00 AM</p>
              <p>Sunday: Closed </p>
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
