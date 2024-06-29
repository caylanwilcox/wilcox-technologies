import React from 'react';
import './css/Footer.css';
import { FaFacebook,  FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
      <p>Contact Us: <br/> <br/> Phone: (630) 536-4713 | Email: info@prointeltechs.com</p>
  
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
      </div>
      <div className="newsletter">
        <p>Subscribe to our Newsletter:</p>
        <form action="#">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
