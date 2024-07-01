// src/components/Hero.js

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Hero.css';
import kip from './Images/shutterstock_2285412737.jpg';
import marker from './Images/stockt.jpg';
import Webd from './Images/web-developer-3.jpg';

const Hero = () => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);
  const [showNewsletterContent, setShowNewsletterContent] = useState(false);

  const toggleSubscribeForm = () => {
    setShowSubscribeForm(!showSubscribeForm);
  };

  const toggleNewsletterContent = () => {
    setShowNewsletterContent(!showNewsletterContent);
  };

  return (
    <section className="hero-container">
      <div className="left-side">
      <h1 className='titles'>Welcome to ProIntel </h1>

        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
            <div className="carousel-image">
          <img src={kip}  alt="Image 3" />
          </div>
    
              <div className="carousel-image">
          <img src={Webd}  alt="Image 1" />
          </div>
        
          <div className="carousel-image">
          <img src={marker}  alt="Image 2" />
          </div>
    
      
      
         
        </Carousel>
        <div className="company-info">
          <h1 className='paragraph'>Who Are We?</h1>
          <p>   
            At ProIntel, we are driven by innovation and excellence. We specialize in web development, IT solutions, and digital marketing. Our mission is to empower businesses to achieve their full potential through cutting-edge technology and strategic insights.
          </p>
          <p>
            What sets us apart is our commitment to quality and our deep understanding of the digital landscape. We believe in creating sustainable solutions that not only meet but exceed our clients' expectations. Our team of experts works tirelessly to deliver results that make a tangible difference.
          </p>
          <p>
            Join us on this journey to transform your business and experience unparalleled growth and success. We are dedicated to providing personalized services that cater to your unique needs, ensuring your business stands out in a competitive market.
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="newsletter-subscribe">
          <button onClick={toggleSubscribeForm}>Subscribe to Newsletter</button>
          {showSubscribeForm && (
            <form className="subscribe-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
        <div className="recent-newsletters">
          <h2>Recent Articles</h2>
          <div className="newsletter-box">
            <p>Newsletter 1: Our latest updates on digital trends...</p>
          </div>
          <div className="newsletter-box">
            <p>Newsletter 2: Tips and tricks for enhancing your online presence...</p>
          </div>
          <div className="newsletter-box" >
            <p>Newsletter 3: Success stories from our satisfied clients...</p>
          </div>
        </div>
        <div className="expandable-newsletters">
          <button onClick={toggleNewsletterContent}>Show/Hide Newsletter</button>
          {showNewsletterContent && (
            <div className="newsletter-content">
              <div className="newsletter-box" style={{ backgroundColor: 'lightcoral' }}>
                <p>Expanded Newsletter Content 1: In-depth analysis and insights...</p>
              </div>
              <div className="newsletter-box" style={{ backgroundColor: 'lightyellow' }}>
                <p>Expanded Newsletter Content 2: Exclusive interviews with industry leaders...</p>
              </div>
              <div className="newsletter-box" style={{ backgroundColor: 'lightpink' }}>
                <p>Expanded Newsletter Content 3: Upcoming events and webinars...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
