import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '../styles/Featured.css';

const Featured = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const logos = [
    { name: 'TechCrunch', delay: 0 },
    { name: 'Forbes', delay: 0.1 },
    { name: 'Wired', delay: 0.2 },
    { name: 'The Verge', delay: 0.3 },
    { name: 'Drone Magazine', delay: 0.4 }
  ];

  return (
    <section id="featured" className="section featured-section" ref={ref}>
      <div className="container">
        <motion.h3 
          className="featured-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Featured In
        </motion.h3>
        
        <div className="logos-container">
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="logo-item"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: logo.delay, duration: 0.6 } 
                }
              }}
            >
              <div className="logo-placeholder">
                <span>{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
