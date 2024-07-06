// src/components/WhoAmI.js

import React from 'react';
import profileImage from './Images/footI.png'; // Replace with your actual image path
import './css/WhoAmI.css';

const WhoAmI = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/caylanwilcox/30min', '_blank');
  };

  return (
    <div className="who-am-i">
      <div className="who-am-i-content">
        <div className="who-am-i-text">
          <h2>Who Am I?</h2>
          <div className="who-am-i-image">
            <img src={profileImage} alt="Caylan Wilcox" />
          </div>
          <p>
            I’m Caylan Wilcox, founder of Your Vision Studios. I've always been fascinated by numbers, statistics, and understanding human behavior. As a web developer, I initially focused on creating websites. However, I soon realized that I could make a more significant impact by developing business investment applications that help companies grow.
          </p>
          <h2>Decision Time</h2>
          <p>
            You've learned about how our system can help your business thrive by leveraging data-driven insights and powerful web applications.
          </p>
          <p>
            Now, it makes sense how local businesses like yours can add substantial yearly revenue by using our system.
          </p>
          <p>Now it’s time for a decision – you have three options:</p>
          <ul>
            <li>Do absolutely nothing and stay exactly where you are right now</li>
            <li>Do it yourself – which you might have already tried with sub-par results</li>
            <li>Let us do the heavy lifting for you</li>
          </ul>
          <p>
            If you’re ready to take action and transform your business, then it’s as easy as booking a call below.
          </p>
          <button onClick={openCalendly} className="book-call-button">
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
