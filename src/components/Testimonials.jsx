import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { CaretLeft, CaretRight, Star } from '@phosphor-icons/react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Photographer',
      text: 'The DX4-Mini has completely transformed my aerial photography. The stability and precision are unmatched, allowing me to capture stunning shots that were previously impossible.',
      result: 'Increased client bookings by 40% with new aerial portfolio',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Real Estate Developer',
      text: 'We use the DX6-M for all our property surveys and marketing materials. The build quality and flight time are exceptional, and the customer support team is always responsive.',
      result: 'Reduced property survey time by 60%',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Film Director',
      text: 'As a filmmaker, I need reliable equipment that delivers cinematic results. The DX4-M exceeds all my expectations with its smooth controls and incredible camera stabilization.',
      result: 'Won Best Cinematography award at indie film festival',
      rating: 5
    },
    {
      name: 'David Wilson',
      role: 'Search & Rescue Volunteer',
      text: 'The durability and advanced features of the DX6-M have made it an essential tool for our search operations. The thermal imaging capabilities have literally saved lives.',
      result: 'Reduced search time by 75% in difficult terrain',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section testimonials-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          What Our Customers Say
        </motion.h2>

        <motion.div
          className="testimonials-container"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
          }}
        >
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous testimonial">
            <div className="arrow-left"></div>
          </button>

          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} weight="fill" color="#FFD700" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-result">
              <span>Result:</span> {testimonials[currentIndex].result}
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button className="carousel-button next" onClick={nextSlide} aria-label="Next testimonial">
            <div className="arrow-right"></div>
          </button>
        </motion.div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
