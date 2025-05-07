import {
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  FacebookLogo,
  EnvelopeSimple,
  Phone,
  MapPin
} from '@phosphor-icons/react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <a href="/" className="footer-logo">DX-DRONES</a>
            <p className="footer-description">
              Revolutionizing aerial technology with cutting-edge drones designed for professionals and enthusiasts alike.
            </p>
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
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#pricing">DX4-Mini</a></li>
              <li><a href="#pricing">DX4-M</a></li>
              <li><a href="#pricing">DX6-M</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Software</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <EnvelopeSimple size={20} weight="light" />
                <a href="mailto:info@dx-drones.com">info@dx-drones.com</a>
              </li>
              <li>
                <Phone size={20} weight="light" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <MapPin size={20} weight="light" />
                <span>123 Innovation Drive, Tech City, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} DX-DRONES. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
