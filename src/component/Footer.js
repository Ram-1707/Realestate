
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-6 mb-3 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +121 56556 565556</li>
              <li>Address: Your Address 123 Street</li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="col-md-6 mb-3 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/About" className="text-white text-decoration-none">About</Link>
              </li>
              <li>
                <Link to="/Land" className="text-white text-decoration-none">Land</Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="row">
          <div className="col text-center">
            <a href="https://facebook.com" className="text-white me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="row">
          <div className="col text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
