import React from 'react';
import './css/Prices.css';
import artboard from './Images/logo.png';

const Prices = () => {
  return (
    <div className="prices-container">
      <h1>          
      <span className='red'>PLAYBOOKS</span> <span className='blue'>FOR</span> <span className='green'>GROWTH</span></h1>
      <div className="pricing-table">
        <div className="pricing-plan good-plan">
          <div className="plan-header">
            <h2>Brand Foundation</h2>
            <div className="price">$1,500 setup</div>
            <div className="monthly-price">$500/month</div>
          </div>
          <div className="good-plan-setup-costs">
            <h3>Setup Includes:</h3>
            <ul className="setup-list">
              <li className="setup-list-item">Web hosting account setup</li>
              <li className="setup-list-item">Google Business Profile setup</li>
              <li className="setup-list-item">Logo and branding</li>
              <li className="setup-list-item">Website development</li>
              <li className="setup-list-item">Google Review App</li>
            </ul>
          </div>
          <div className="good-plan-recurring-costs">
            <h3>Monthly Includes:</h3>
            <ul className="monthly-list">
              <li className="monthly-list-item">Google Business Profile management</li>
              <li className="monthly-list-item">Hosting, maintenance, and up to one hour of support</li>
            </ul>
          </div>
        </div>

        <div className="pricing-plan better-plan">
          <div className="plan-header">
            <h2>Brand Establishment</h2>
            <div className="price">$3,000 setup</div>
            <div className="monthly-price">$750/month</div>
          </div>
          <div className="better-plan-setup-costs">
            <h3>Setup Includes:</h3>
            <ul className="setup-list">
              <li className="setup-list-item">Web hosting account setup</li>
              <li className="setup-list-item">Email marketing account setup</li>
              <li className="setup-list-item">Online Calendar integration</li>
              <li className="setup-list-item">Google Business Profile setup</li>
              <li className="setup-list-item">Logo and branding</li>
              <li className="setup-list-item">Website development</li>
              <li className="setup-list-item">Professional photography</li>
              <li className="setup-list-item">Copywriting for website - up to 10 pages</li>
              <li className="setup-list-item">Email opt-in lead magnet & 5-part drip campaign</li>
              <li className="setup-list-item">Google Review App</li>
            </ul>
          </div>
          <div className="better-plan-recurring-costs">
            <h3>Monthly Includes:</h3>
            <ul className="monthly-list">
              <li className="monthly-list-item">Google Business Profile management + reviews</li>
              <li className="monthly-list-item">Paid Traffic Management</li>
              <li className="monthly-list-item">Hosting, maintenance, and up to one hour of support</li>
              <li className="monthly-list-item">Monthly reporting</li>
            </ul>
          </div>
        </div>

        <div className="pricing-plan best-plan">
          <div className="plan-header">
            <h2>Executive Growth Plan</h2>
            <div className="price">$5,000 setup</div>
            <div className="monthly-price">$2,000/month</div>
          </div>
          <div className="best-plan-setup-costs">
            <h3>Setup Includes:</h3>
            <ul className="setup-list">
              <li className="setup-list-item">Web hosting account setup</li>
              <li className="setup-list-item">Email marketing account setup</li>
              <li className="setup-list-item">Online Calendar integration</li>
              <li className="setup-list-item">Google Review App</li>
              <li className="setup-list-item">Google Business Profile setup</li>
              <li className="setup-list-item">Logo and branding</li>
              <li className="setup-list-item">Website development</li>
              <li className="setup-list-item">Professional photography</li>
              <li className="setup-list-item">Cover photos for Facebook and Google Business Profile</li>
              <li className="setup-list-item">Copywriting for website - up to 10 pages</li>
              <li className="setup-list-item">Email opt-in lead magnet & 5-part drip campaign</li>
              <li className="setup-list-item">SEO Opportunity Assessment Report and Roadmap</li>
            </ul>
          </div>
          <div className="best-plan-recurring-costs">
            <h3>Monthly Includes:</h3>
            <ul className="monthly-list">
              <li className="monthly-list-item">Google Business Profile & Reputation Management</li>
              <li className="monthly-list-item">Level One Local SEO</li>
              <li className="monthly-list-item">Paid Traffic Management</li>
              <li className="monthly-list-item">Hosting, maintenance, and up to one hour of support</li>
              <li className="monthly-list-item">Monthly reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;