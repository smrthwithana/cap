// src/components/
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
      <div className="social-media">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+91 8660075458</a></p>
        <p>Address: Return</p>
      </div>
    </footer>
  );
};

export default Footer;