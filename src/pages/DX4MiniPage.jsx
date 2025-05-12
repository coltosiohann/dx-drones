import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryModal from '../components/GalleryModal';
import '../styles/ProductPage.css';

const DX4MiniPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const navigate = useNavigate();

  // Gallery state
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery images
  const galleryImages = [
    '/images/dx4-mini-action1.jpg',
    '/images/dx4-mini-action2.jpg',
    '/images/dx4-mini-action3.jpg'
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
    '4K Camera with 2-axis stabilization',
    '25 minutes flight time',
    'Max speed: 40 mph',
    'Range: 4 miles',
    'Obstacle avoidance',
    'Automated flight modes',
    'Compact & foldable design'
  ];

  const specifications = [
    { name: 'Dimensions', value: '145 × 145 × 55 mm (folded)' },
    { name: 'Weight', value: '249g' },
    { name: 'Camera', value: '4K @ 30fps, 12MP photos' },
    { name: 'Gimbal', value: '2-axis mechanical stabilization' },
    { name: 'Battery', value: '2400mAh LiPo, 25 min flight time' },
    { name: 'Range', value: '4 miles (6.5 km)' },
    { name: 'Max Speed', value: '40 mph (65 km/h)' },
    { name: 'Wind Resistance', value: 'Level 5 (19-24 mph)' },
    { name: 'Operating Temperature', value: '14°F to 104°F (-10°C to 40°C)' },
    { name: 'Internal Storage', value: '8GB' },
    { name: 'Sensors', value: 'Forward and downward obstacle avoidance' }
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
              <h1>DX4-Mini</h1>
              <p className="product-tagline">Compact Power, Professional Results</p>
              <p className="product-description">
                Perfect for beginners and hobbyists looking for a compact, easy-to-use drone with professional features.
                The DX4-Mini combines portability with impressive performance to capture stunning aerial footage wherever your adventures take you.
              </p>
              <div className="product-price">$899</div>
              <a href="/contact" className="button product-cta">Contact Sales</a>
            </motion.div>

            <motion.div
              className="product-hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/dx4-mini.jpg" alt="DX4-Mini Drone" />
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
          <h2>DX4-Mini in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(0);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-mini-action1.jpg" alt="DX4-Mini capturing sunset" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(1);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-mini-action2.jpg" alt="DX4-Mini in flight" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(2);
              setShowGallery(true);
            }}>
              <img src="/images/dx4-mini-action3.jpg" alt="DX4-Mini aerial photography" />
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
          <h2>Ready to Take Flight?</h2>
          <p>Experience the perfect blend of portability and performance with the DX4-Mini.</p>
          <a href="/contact" className="button product-cta">Purchase Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DX4MiniPage;
