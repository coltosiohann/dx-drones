import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const plans = [
    {
      name: 'DX4-Mini',
      price: '$899',
      description: 'Perfect for beginners and hobbyists looking for a compact, easy-to-use drone with professional features.',
      features: [
        '4K Camera with 2-axis stabilization',
        '25 minutes flight time',
        'Max speed: 40 mph',
        'Range: 4 miles',
        'Obstacle avoidance',
        'Automated flight modes',
        'Compact & foldable design'
      ],
      delay: 0
    },
    {
      name: 'DX4-M',
      price: '$1,499',
      description: 'Our most popular model, offering the perfect balance of performance, features, and value for serious enthusiasts.',
      features: [
        '4K 60fps Camera with 3-axis stabilization',
        '35 minutes flight time',
        'Max speed: 50 mph',
        'Range: 7 miles',
        'Advanced obstacle avoidance',
        'All automated flight modes',
        'Interchangeable lens system',
        'Waterproof design (IPX5)'
      ],
      popular: true,
      delay: 0.2
    },
    {
      name: 'DX6-M',
      price: '$2,499',
      description: 'Professional-grade drone with unmatched performance and capabilities for filmmakers and commercial applications.',
      features: [
        '6K Camera with 3-axis stabilization',
        '40 minutes flight time',
        'Max speed: 60 mph',
        'Range: 10 miles',
        'Omnidirectional obstacle sensing',
        'Advanced tracking algorithms',
        'Interchangeable payload system',
        'Thermal imaging capability',
        'All-weather operation (IPX7)'
      ],
      delay: 0.4
    }
  ];

  return (
    <section id="pricing" className="section pricing-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Choose Your Drone
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } }
          }}
        >
          Select the perfect drone for your needs and elevate your aerial experience
        </motion.p>

        <div className="pricing-container">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: plan.delay, duration: 0.6 }
                }
              }}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-description">{plan.description}</p>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={20} weight="bold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={
                  plan.name === 'DX4-Mini'
                    ? '/products/dx4-mini'
                    : plan.name === 'DX4-M'
                      ? '/products/dx4-m'
                      : '/products/dx6-m'
                }
                className="button plan-button"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
