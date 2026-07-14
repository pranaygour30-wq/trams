import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer reveal fade-up">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
        
        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Copyright</a>
        </div>
        
        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        
        <div className="footer-col">
          <h4>Contact & Details</h4>
          <p>2456 Austin Ave, UK<br />Washington 98402</p>
          <a href="tel:+7809988907">+78 099 889 07</a>
          <a href="mailto:info@elementum.com">info@elementum.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Elementum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
