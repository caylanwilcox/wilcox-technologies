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
      <h1 className='titles'>Your Vision Studios </h1>

        <Carousel className='carousel-head'
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
            At YourVision, we are driven by innovation and excellence. We specialize in web development, IT solutions, and digital marketing. Our mission is to empower businesses to achieve their full potential through cutting-edge technology and strategic insights.
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
          <h2>Marketing Documentation</h2>
          <a href="https://online.hbs.edu/blog/post/digital-marketing-skills" target="_blank" rel="noopener noreferrer" className="newsletter-box">
            <p> 7 DIGITAL MARKETING SKILLS YOU NEED TO CREATE AN EFFECTIVE MARKETING STRATEGY </p>
        
          </a>
        
          <a href="https://contentmarketinginstitute.com/articles/website-data-buyers-journey" className="newsletter-box">
            <p>How To Use Your Website Data To See If Your Buyer’s Journey Really Works</p>
          </a>
      
        </div>
        <div className="expandable-newsletters">
          <button onClick={toggleNewsletterContent}>Show/Hide Newsletter</button>
          {showNewsletterContent && (
            <div className="newsletter-content">
                 <a href="https://blog.hubspot.com/marketing/what-is-digital-marketing" className="expandable-newsletter-box">
            <p>Online Marketing: The Who, What, Why, & How of Digital Marketing</p>
           
          </a>
          <a href="https://www.linkedin.com/pulse/5-reasons-your-business-needs-digital-marketing-services-rawlani/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
            <p>5 Reasons Your Business Needs Digital Marketing Services Today</p>
          </a>
          <a href="https://contentmarketinginstitute.com/articles/website-content-optimization-mistakes/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
            <p>6 Things You’re Doing Wrong With Website Content Optimization</p>
          </a>
          <a href="https://www.getfundid.com/sales-marketing/why-is-digital-marketing-important" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
            <p>Why is Digital Marketing Important for Small Businesses?</p>
          </a>
          <a href="https://www.springboard.com/blog/business-and-marketing/digital-marketing-importance/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
            <p>Why Is Digital Marketing So Important to Businesses?</p>
          </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
