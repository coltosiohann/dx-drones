import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  FacebookLogo
} from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-content">
        <section className="contact-hero">
          <div className="container">
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>

            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We'd love to hear from you. Reach out to our team with any questions or inquiries.
            </motion.p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <motion.div
                className="contact-info-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2>Get In Touch</h2>

                <ul className="contact-details">
                  <li>
                    <EnvelopeSimple size={24} weight="light" />
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:info@dx-drones.com">info@dx-drones.com</a>
                    </div>
                  </li>
                  <li>
                    <Phone size={24} weight="light" />
                    <div>
                      <h3>Phone</h3>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                  </li>
                  <li>
                    <MapPin size={24} weight="light" />
                    <div>
                      <h3>Address</h3>
                      <p>123 Innovation Drive, Tech City, CA 94043</p>
                    </div>
                  </li>
                </ul>

                <div className="social-links">
                  <a href="#" className="social-link">
                    <InstagramLogo size={20} weight="light" />
                  </a>
                  <a href="#" className="social-link">
                    <TwitterLogo size={20} weight="light" />
                  </a>
                  <a href="#" className="social-link">
                    <YoutubeLogo size={20} weight="light" />
                  </a>
                  <a href="#" className="social-link">
                    <FacebookLogo size={20} weight="light" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {isSubmitted ? (
                  <div className="form-success">
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Send Us a Message</h2>

                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="button submit-button">Send Message</button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
