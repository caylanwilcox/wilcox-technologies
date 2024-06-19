// src/components/Services.js

import React, { useState } from 'react';
import SalesDistributionChart from './SalesDistributionChart';
import BusinessGrowthChart from './BusinessGrowthChart';
import './Services.css';

const Services = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Example sales data
  const webSales = 1200;
  const socialMediaSales = 800;
  const walkinSales = 600;

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
   
      <div className="chart-container">
        <h2>Sales Distribution</h2>
        <SalesDistributionChart 
          webSales={webSales} 
          socialMediaSales={socialMediaSales} 
          walkinSales={walkinSales} 
        />
      </div>
      <div className="chart-container">
        <h2>Business Growth</h2>
        <BusinessGrowthChart onSelectLevel={handleSelectLevel} />
      </div>
      {selectedLevel && (
        <div className="selected-level-description">
          <h3>{selectedLevel.label}</h3>
          <p>Budget: {selectedLevel.budget}</p>
          <p>For {selectedLevel.label}, we focus on maximizing your organic traffic, then we add services on top of that maximized organic traffic through scientifically proven methodologies.</p>
        </div>
      )}
    </div>
  );
}

export default Services;
