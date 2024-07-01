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
      <div className="navbar-container">
        <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className="logo">
          <img className="llogo" src={artboard} alt="ProIntel Techs Logo" />
          <div className="logo-text">
            ProIntel Techs
            <div className="market">Data-Driven Solutions to Unlock Maximum Revenue Potential</div>
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
