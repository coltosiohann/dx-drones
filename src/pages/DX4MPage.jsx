import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryModal from '../components/GalleryModal';
import '../styles/ProductPage.css';

const DX4MPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const navigate = useNavigate();

  // Gallery state
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery images
  const galleryImages = [
    '/images/dx4-m-action1.jpg',
    '/images/dx4-m-action2.jpg',
    '/images/dx4-m-action3.jpg'
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    '4K 60fps Camera with 3-axis stabilization',
    '35 minutes flight time',
    'Max speed: 50 mph',
    'Range: 7 miles',
    'Advanced obstacle avoidance',
    'All automated flight modes',
    'Interchangeable lens system',
    'Waterproof design (IPX5)'
  ];

  const specifications = [
    { name: 'Dimensions', value: '180 × 180 × 65 mm (folded)' },
    { name: 'Weight', value: '570g' },
    { name: 'Camera', value: '4K @ 60fps, 20MP photos' },
    { name: 'Gimbal', value: '3-axis mechanical stabilization' },
    { name: 'Battery', value: '4800mAh LiPo, 35 min flight time' },
    { name: 'Range', value: '7 miles (11.3 km)' },
    { name: 'Max Speed', value: '50 mph (80 km/h)' },
    { name: 'Wind Resistance', value: 'Level 6 (25-31 mph)' },
    { name: 'Operating Temperature', value: '14°F to 104°F (-10°C to 40°C)' },
    { name: 'Internal Storage', value: '16GB' },
    { name: 'Sensors', value: 'Omnidirectional obstacle sensing' },
    { name: 'Water Resistance', value: 'IPX5 (protected against water jets)' }
  ];

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-hero">
        <div className="container">
          <a href="/" className="back-button">
            <ArrowLeft size={20} weight="bold" />
            <span>Back to Home</span>
          </a>

          <div className="product-hero-content">
            <motion.div
              className="product-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>DX4-M</h1>
              <p className="product-tagline">Professional Performance, Unmatched Versatility</p>
              <p className="product-description">
                Our most popular model, offering the perfect balance of performance, features, and value for serious enthusiasts.
                The DX4-M delivers exceptional image quality, extended flight time, and advanced intelligent features in a durable, weather-resistant design.
              </p>
              <div className="product-price">$1,499</div>
              <a href="/contact" className="button product-cta">Contact Sales</a>
            </motion.div>

            <motion.div
              className="product-hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/dx4-m.jpg" alt="DX4-M Drone" />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="product-features" ref={ref}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Key Features
          </motion.h2>

          <ul className="features-list">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } }
                }}
              >
                <Check size={20} weight="bold" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-gallery">
        <div className="container">
          <h2>DX4-M in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(0);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-m-action1.jpg" alt="DX4-M capturing mountain landscape" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(1);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-m-action2.jpg" alt="DX4-M in flight over water" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(2);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-m-action3.jpg" alt="DX4-M aerial photography" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showGallery && (
        <GalleryModal
          images={galleryImages}
          initialIndex={galleryIndex}
          onClose={() => setShowGallery(false)}
        />
      )}

      <section className="product-specs">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="specs-table">
            {specifications.map((spec, index) => (
              <div className="spec-row" key={index}>
                <div className="spec-name">{spec.name}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-cta-section">
        <div className="container">
          <h2>Elevate Your Aerial Imaging</h2>
          <p>Take your creative vision to new heights with the versatile and powerful DX4-M.</p>
          <a href="/contact" className="button product-cta">Purchase Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DX4MPage;
