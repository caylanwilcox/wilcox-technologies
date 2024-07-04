// src/components/Hero.js

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Hero.css';
import kip from './Images/shutterstock_2285412737.jpg';
import marker from './Images/stockt.jpg';
import Webd from './Images/web-developer-3.jpg';
import HowIsThisDifferent from './HowIsThisDifferent';
import TheResult from './TheResult';
import ProblemAndSolution from './ProblemAndSolution';
import pin from './Images/chip.jpg';
import WhoAmI from './WhoAmI';
import LocalSearches from './LocalSearches';
const Hero = () => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);
  const [showNewsletterContent, setShowNewsletterContent] = useState(true);

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
    
        
        
          
    
      
      
         
        </Carousel>
        <div className="company-info">
          <HowIsThisDifferent />
          
          <TheResult />

          <ProblemAndSolution />
                    <LocalSearches/>

<WhoAmI/>

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
          <h2>Essential Reads</h2>
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
