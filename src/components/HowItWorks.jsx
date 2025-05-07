import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { PencilSimple, Wrench, Airplane } from '@phosphor-icons/react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const steps = [
    {
      icon: <PencilSimple size={40} weight="light" />,
      title: 'Design',
      description: 'Our intuitive design interface allows you to customize your drone to meet your specific needs, from camera specifications to flight capabilities.',
      delay: 0
    },
    {
      icon: <Wrench size={40} weight="light" />,
      title: 'Build',
      description: 'Using cutting-edge materials and precision engineering, we build your drone to the highest standards of quality and durability.',
      delay: 0.2
    },
    {
      icon: <Airplane size={40} weight="light" />,
      title: 'Plug & Play Flying',
      description: 'Our drones are ready to fly right out of the box, with easy-to-use controls and automated features that make flying accessible to everyone.',
      delay: 0.4
    }
  ];

  return (
    <section id="how-it-works" className="section how-it-works-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          How It Works
        </motion.h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: step.delay, duration: 0.6 }
                }
              }}
            >
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-image">
                <div className="placeholder-image">
                  <span>{step.title} Image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
