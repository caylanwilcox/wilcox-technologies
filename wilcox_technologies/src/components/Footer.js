import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Us: 123 Business St, Suite 456, City, State, Zip</p>
        <p>Phone: (123) 456-7890 | Email: info@prointeltechs.com</p>
      </div>
      <div className="social-media">
        <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
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
