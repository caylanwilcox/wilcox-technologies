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
        <h1 className='herotxt'>Your Vision | Our Product <br/> </h1>
        <p>This Purchase will be an <b>investment</b> to your business that  <b>will make</b> your <b>vision</b> come to <b>Life</b></p>
        <a href="#contact" className="cta-button">Let's Talk</a>
        </div>
        <span className='subline'>Your Goal | Our Guarentee  </span>
      </div>


      
      </div>
      
    </section>
  );
}

export default Hero;