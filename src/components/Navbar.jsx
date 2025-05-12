import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="logo">DX-DRONES</a>

        <div className="desktop-menu">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#mission" className="nav-link">Mission</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <a href="/" className="logo">DX-DRONES</a>
                <button className="close-menu" onClick={toggleMenu}>
                  <X size={24} weight="light" />
                </button>
              </div>
              <div className="mobile-menu-links">
                <a href="#hero" className="nav-link" onClick={toggleMenu}>Home</a>
                <a href="#how-it-works" className="nav-link" onClick={toggleMenu}>How It Works</a>
                <a href="#features" className="nav-link" onClick={toggleMenu}>Features</a>
                <a href="#mission" className="nav-link" onClick={toggleMenu}>Mission</a>
                <a href="#pricing" className="nav-link" onClick={toggleMenu}>Pricing</a>
                <a href="#faq" className="nav-link" onClick={toggleMenu}>FAQ</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
