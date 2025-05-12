import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import '../styles/Hero.css';

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  // Function to handle when Spline is loaded
  const handleSplineLoad = () => {
    console.log("Spline loaded successfully");
    setIsSplineLoaded(true);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Spline 3D Animation Background */}
      <div className={`spline-container ${isSplineLoaded ? 'loaded' : ''}`}>
        <Spline
          scene="https://prod.spline.design/iGTbdjDle2qfi5aX/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            The Future of Drone Technology
          </h1>

          <p className="hero-subtitle">
            Experience unparalleled precision and control with our cutting-edge drone systems designed for professionals and enthusiasts alike.
          </p>

          <div className="hero-buttons">
            <Link to="#pricing" className="button hero-button">View All Drones</Link>
            <Link to="/products/dx4-m" className="button hero-button secondary">Explore Popular Model</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
