import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';
import '../styles/FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const faqs = [
    {
      question: 'Do I need a license to fly a DX-DRONES drone?',
      answer: 'Regulations vary by country and region. In many places, recreational drone pilots don\'t need a license for drones under 250g (like our DX4-Mini). For larger drones or commercial use, you may need to register your drone and obtain certification. We recommend checking your local aviation authority\'s guidelines before flying.'
    },
    {
      question: 'What is the warranty period for DX-DRONES products?',
      answer: 'All DX-DRONES come with a standard 1-year manufacturer\'s warranty covering defects in materials and workmanship. We also offer an extended 2-year DX Care protection plan that covers accidental damage and provides priority service.'
    },
    {
      question: 'How long does it take to learn how to fly a drone?',
      answer: 'Our drones are designed to be user-friendly with intelligent flight modes that make flying accessible even for beginners. Most users can master basic flight controls within a few hours. Our DX4-Mini is particularly beginner-friendly with its stability and automated features. We also provide comprehensive video tutorials to help you get started.'
    },
    {
      question: 'Can DX-DRONES be used in rain or snow?',
      answer: 'The DX4-Mini and DX4-M have IPX5 water resistance ratings, making them resistant to light rain. The DX6-M features an IPX7 rating for all-weather operation, including moderate rain and snow. However, we recommend avoiding flying in heavy precipitation or strong winds for safety reasons.'
    },
    {
      question: 'What happens if my drone loses connection or runs low on battery?',
      answer: 'All our drones are equipped with Return-to-Home (RTH) functionality. If the connection is lost or the battery reaches a critical level, the drone will automatically return to its takeoff point. The intelligent battery management system also provides ample warnings before initiating an automatic landing.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. International orders typically arrive within 5-10 business days. Please note that import duties and taxes may apply depending on your country\'s regulations and are the responsibility of the customer.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.6 }
                }
              }}
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <CaretDown
                  size={20}
                  weight="bold"
                  className={`faq-icon ${activeIndex === index ? 'active' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.6 }
            }
          }}
        >
          <p>Still have questions?</p>
          <a href="#contact" className="button">Contact Us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
