// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalTransformation from './components/DigitalTransformation';
import './App.css';
import './reset.css';

function App() {
    const webSales = 1200;
  const socialMediaSales = 800;
  const walkinSales = 600;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
