import React from 'react';
import './Services.css';
import digitalTransformationImage from '../components/digital-transformation.jpg';
import socialMediaMarketingImage from '../components/social-media-marketing.jpg';
import seoDataAnalyticsImage from '../components/seo-data-analytics.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Exciting Service Offerings</h1>
      <div className="services-grid">
        <div className="service-item">
          <img src={digitalTransformationImage} alt="Digital Transformation" />
          <h3>Digital Transformation</h3>
          <p>Transform your business with digital solutions that drive growth and efficiency.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="service-item">
          <img src={socialMediaMarketingImage} alt="Social Media and Influencer Marketing" />
          <h3>Social Media and Influencer Marketing</h3>
          <p>Grow your online presence and engage with your audience effectively.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="service-item">
          <img src={seoDataAnalyticsImage} alt="SEO and Data Analytics" />
          <h3>SEO and Data Analytics</h3>
          <p>Boost your search engine ranking and gain insights from data.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
