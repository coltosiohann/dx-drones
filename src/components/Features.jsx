import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Camera,
  BatteryFull,
  Clock,
  Compass
} from '@phosphor-icons/react';
import '../styles/Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: <Camera size={32} weight="light" />,
      title: '4K Ultra HD Camera',
      description: 'Capture stunning aerial footage with our professional-grade 4K camera with 3-axis gimbal stabilization.',
      delay: 0
    },
    {
      icon: <BatteryFull size={32} weight="light" />,
      title: 'Extended Battery Life',
      description: 'Enjoy up to 40 minutes of flight time with our advanced lithium polymer batteries and intelligent power management.',
      delay: 0.1
    },
    {
      icon: <Clock size={32} weight="light" />,
      title: 'Autonomous Flight',
      description: 'Pre-program flight paths or use intelligent tracking modes to capture the perfect shot every time.',
      delay: 0.2
    },
    {
      icon: <Compass size={32} weight="light" />,
      title: 'Precision Navigation',
      description: 'Dual GPS/GLONASS systems ensure accurate positioning and stable hovering even in challenging conditions.',
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="section features-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Advanced Features
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } }
          }}
        >
          Our drones are equipped with cutting-edge technology to deliver exceptional performance
        </motion.p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: feature.delay, duration: 0.6 }
                }
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
