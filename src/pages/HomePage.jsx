import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Mission from '../components/Mission';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    // Scroll animation
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

  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Featured />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
