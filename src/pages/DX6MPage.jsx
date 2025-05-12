import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryModal from '../components/GalleryModal';
import '../styles/ProductPage.css';

const DX6MPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const navigate = useNavigate();

  // Gallery state
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery images
  const galleryImages = [
    '/images/dx6-m-action1.jpg',
    '/images/dx6-m-action2.jpg',
    '/images/dx6-m-action3.jpg'
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
    '6K Camera with 3-axis stabilization',
    '40 minutes flight time',
    'Max speed: 60 mph',
    'Range: 10 miles',
    'Omnidirectional obstacle sensing',
    'Advanced tracking algorithms',
    'Interchangeable payload system',
    'Thermal imaging capability',
    'All-weather operation (IPX7)'
  ];

  const specifications = [
    { name: 'Dimensions', value: '220 × 220 × 85 mm (folded)' },
    { name: 'Weight', value: '895g' },
    { name: 'Camera', value: '6K @ 30fps, 24MP photos' },
    { name: 'Gimbal', value: '3-axis mechanical stabilization with horizon leveling' },
    { name: 'Battery', value: '5800mAh LiPo, 40 min flight time' },
    { name: 'Range', value: '10 miles (16 km)' },
    { name: 'Max Speed', value: '60 mph (97 km/h)' },
    { name: 'Wind Resistance', value: 'Level 7 (32-38 mph)' },
    { name: 'Operating Temperature', value: '-4°F to 104°F (-20°C to 40°C)' },
    { name: 'Internal Storage', value: '32GB' },
    { name: 'Sensors', value: 'Advanced omnidirectional obstacle sensing and avoidance' },
    { name: 'Water Resistance', value: 'IPX7 (protected against immersion up to 1m)' },
    { name: 'Additional Features', value: 'Thermal imaging, interchangeable payload system' }
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
              <h1>DX6-M</h1>
              <p className="product-tagline">Ultimate Performance, Limitless Possibilities</p>
              <p className="product-description">
                Professional-grade drone with unmatched performance and capabilities for filmmakers and commercial applications.
                The DX6-M represents the pinnacle of aerial technology, combining exceptional image quality, extended flight time,
                and advanced features in an all-weather, mission-ready platform.
              </p>
              <div className="product-price">$2,499</div>
              <a href="/contact" className="button product-cta">Contact Sales</a>
            </motion.div>

            <motion.div
              className="product-hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/dx6-m.jpg" alt="DX6-M Drone" />
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
          <h2>DX6-M in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(0);
              setShowGallery(true);
            }}>
              <img src="/images/dx6-m-action1.jpg" alt="DX6-M capturing cinematic footage" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(1);
              setShowGallery(true);
            }}>
              <img src="/images/dx6-m-action2.jpg" alt="DX6-M in professional filming" />
              <div className="gallery-item-overlay">
                <span>View Larger</span>
              </div>
            </div>
            <div className="gallery-item" onClick={() => {
              setGalleryIndex(2);
              setShowGallery(true);
            }}>
              <img src="/images/dx6-m-action3.jpg" alt="DX6-M thermal imaging" />
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

      <section className="product-use-cases">
        <div className="container">
          <h2>Professional Applications</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h3>Cinematography</h3>
              <p>Capture breathtaking aerial footage for films, documentaries, and commercials with professional-grade image quality.</p>
            </div>
            <div className="use-case">
              <h3>Industrial Inspection</h3>
              <p>Conduct detailed inspections of infrastructure, buildings, and utilities with thermal imaging capabilities.</p>
            </div>
            <div className="use-case">
              <h3>Search & Rescue</h3>
              <p>Enhance search and rescue operations with extended flight time, thermal imaging, and all-weather performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta-section">
        <div className="container">
          <h2>Professional Power at Your Fingertips</h2>
          <p>Experience unmatched capabilities and performance with the flagship DX6-M drone.</p>
          <a href="/contact" className="button product-cta">Purchase Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DX6MPage;
