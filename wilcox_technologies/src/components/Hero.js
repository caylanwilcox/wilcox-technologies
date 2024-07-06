// Hero.js
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Hero.css';
import kip from './Images/ProfileImage.png'; // Ensure this is the correct path
import HowIsThisDifferent from './HowIsThisDifferent';
import TheResult from './TheResult';
import ProblemAndSolution from './ProblemAndSolution';
import WhoAmI from './WhoAmI';
import LocalSearches from './LocalSearches';
import SideWidgetButton from './SideWidgetButton';

const Hero = () => {
  const [showRightSide, setShowRightSide] = useState(false);

  const toggleRightSide = () => {
    setShowRightSide(!showRightSide);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/caylanwilcox/30min', '_blank');
  };

  const goToServices = () => {
    window.location.href = '/services';
  };

  return (
    <section className={`hero-container ${showRightSide ? '' : 'centered-container'}`}>
      <div className={`left-side ${showRightSide ? '' : 'centered'}`}>
        <div className="hero-section">
          <div className="hero-text">
            <h2>Achieve Remarkable Business Growth With Your Vision Studios
            </h2>
            <p>Gain market dominance quickly and effectively<br />with our expert, innovative marketing techniques.</p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={openCalendly}>Get Started →</button>
              <button className="cta-button secondary" onClick={goToServices}>Our Services</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={kip} alt="Hero" />
          </div>
        </div>
        <div className="company-info">
          <HowIsThisDifferent />
          <TheResult />
          <ProblemAndSolution />
          <WhoAmI />
        </div>
      </div>
      {showRightSide && (
        <div className="right-side">
          <div className="newsletter-subscribe">
            <button onClick={toggleRightSide}>Subscribe to Newsletter</button>
          </div>
          <div className="recent-newsletters">
            <h2>Marketing Documentation</h2>
            <a href="https://online.hbs.edu/blog/post/digital-marketing-skills" target="_blank" rel="noopener noreferrer" className="newsletter-box">
              <p>7 DIGITAL MARKETING SKILLS YOU NEED TO CREATE AN EFFECTIVE MARKETING STRATEGY</p>
            </a>
            <a href="https://contentmarketinginstitute.com/articles/website-data-buyers-journey" className="newsletter-box">
              <p>How To Use Your Website Data To See If Your Buyer’s Journey Really Works</p>
            </a>
          </div>
          <div className="expandable-newsletters">
            <h2>Essential Reads</h2>
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
          </div>
        </div>
      )}
      <SideWidgetButton onClick={toggleRightSide} />
    </section>
  );
};

export default Hero;
