import React, { useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import artboard from './Images/RGBMAX.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isOpen ? 'open' : ''}` }>
        <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`logo ${isOpen ? 'open' : ''}`}>
          <img className="llogo" src={artboard} alt="Your Vision Studios Logo" />
          <div className="logo-text">
            Your Vision Studios
            <div className="market"> <span className='blue'>Data-Driven</span> Solutions to <span className='red'>Help Local </span> Businesses <span className='blue'>Rank On Google </span>  & <span className='green'>Book More Clients</span></div>
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact" className='startbutton'>Book</Link></li>
        </ul>
        <button className={`start-button ${isOpen?'open':''}`}>Start</button>

      </div>
    </nav>
  );
};

export default Navbar;
