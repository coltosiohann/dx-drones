import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      <main className="about-content">
        <section className="about-hero">
          <div className="container">
            <motion.h1 
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About DX-DRONES
            </motion.h1>
            
            <motion.p 
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Pioneering the future of aerial technology
            </motion.p>
          </div>
        </section>
        
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <motion.div 
                className="about-image"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="placeholder-image">
                  <span>Company Image</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="about-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h2>Our Story</h2>
                <p>
                  Founded in 2018 by a team of aerospace engineers and technology enthusiasts, DX-DRONES was born from a shared vision: to make advanced drone technology accessible to everyone.
                </p>
                <p>
                  What began as a small startup in a garage has grown into a leading innovator in the drone industry, with a global presence and a reputation for excellence. Our journey has been driven by a passion for pushing the boundaries of what's possible in aerial technology.
                </p>
                <p>
                  Today, DX-DRONES continues to lead the industry with cutting-edge designs, innovative features, and a commitment to quality that sets us apart from the competition.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="values-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Values
            </motion.h2>
            
            <div className="values-grid">
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h3>Innovation</h3>
                <p>We constantly push the boundaries of what's possible, integrating cutting-edge technology to create drones that exceed expectations.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h3>Quality</h3>
                <p>Every drone we produce undergoes rigorous testing to ensure it meets our exacting standards for performance, durability, and reliability.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h3>Accessibility</h3>
                <p>We believe that advanced technology should be intuitive and accessible to everyone, regardless of their experience level.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3>Sustainability</h3>
                <p>We're committed to minimizing our environmental impact through sustainable manufacturing practices and eco-friendly materials.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Meet Our Team
            </motion.h2>
            
            <div className="team-grid">
              {[
                { name: 'Alex Chen', role: 'CEO & Co-Founder', delay: 0.2 },
                { name: 'Sarah Johnson', role: 'CTO & Co-Founder', delay: 0.3 },
                { name: 'Michael Rodriguez', role: 'Head of Design', delay: 0.4 },
                { name: 'Emily Wilson', role: 'Lead Engineer', delay: 0.5 },
                { name: 'David Kim', role: 'Product Manager', delay: 0.6 },
                { name: 'Jessica Lee', role: 'Marketing Director', delay: 0.7 }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="team-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: member.delay, duration: 0.8 }}
                >
                  <div className="team-avatar">
                    {member.name.charAt(0)}
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
