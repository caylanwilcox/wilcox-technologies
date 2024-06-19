// src/components/Hero.js

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
        <div className='hero'>
      <div className="hero-content">
        <div className='content-container'>
        <h2 className='title'>WELCOME</h2>
        <h1>Your Vision | Our Prodcut <br/> </h1>
        <p>Don't sit on your idea any longer. Work with web programmers <b>that will </b>make your vision to come to Life</p>
        <a href="#contact" className="cta-button">Let's Talk</a>
        </div>
        <span className='subline'>Your Goal | Our Guarentee  </span>
      </div>


      
      </div>
      
    </section>
  );
}

export default Hero;