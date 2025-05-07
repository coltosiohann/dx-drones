import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '../styles/Mission.css';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="mission" className="section mission-section" ref={ref}>
      <div className="container">
        <div className="mission-content">
          <motion.div 
            className="mission-text"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-paragraph">
              At DX-DRONES, we believe that advanced drone technology should be accessible to everyone. Our mission is to democratize the skies by creating intuitive, powerful, and reliable drones that inspire creativity and innovation.
            </p>
            <p className="mission-paragraph">
              Founded by a team of aerospace engineers and technology enthusiasts, we're committed to pushing the boundaries of what's possible in aerial technology while maintaining the highest standards of safety and quality.
            </p>
            <p className="mission-paragraph">
              We envision a future where drones enhance our lives in countless ways—from capturing breathtaking footage to delivering essential supplies in remote areas. With every product we create, we're one step closer to making that future a reality.
            </p>
          </motion.div>
          
          <motion.div 
            className="mission-image"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="placeholder-image">
              <span>Mission Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
