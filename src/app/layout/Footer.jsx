import { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faRocket, faCode, faLightbulb, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import data from '../data/XOperations.json';
import { Link, useLocation } from 'react-router-dom';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('main-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};

const SocialLink = ({ href, icon, label, delay }) => (
  <a 
    href={href} 
    target='_blank' 
    rel='noopener noreferrer'
    className={`social-link ${label.toLowerCase()}`}
    aria-label={`Follow us on ${label}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <FontAwesomeIcon icon={icon} />
    <span className="social-tooltip">{label}</span>
  </a>
);

const FeatureLink = ({ to, icon, children, delay }) => (
  <Link 
    to={to} 
    className="feature-link"
    style={{ animationDelay: `${delay}ms` }}
  >
    <FontAwesomeIcon icon={icon} className="feature-icon" />
    <span>{children}</span>
  </Link>
);

function Footer() {
  const location = useLocation();
  const [currentYear] = useState(new Date().getFullYear());
  const isVisible = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const socialLinks = [
    { icon: faFacebookF, href: "https://www.facebook.com/share/1AynM4FeVR/", label: "Facebook", delay: 100 },
    { icon: faInstagram, href: "https://www.instagram.com/xoperations.ig?igsh=MXM1cjhyZnhiZ2VlZg==", label: "Instagram", delay: 200 },
    { icon: faYoutube, href: "https://youtube.com/@xoperations?si=Cl1zf9w4K1LJtytQ", label: "YouTube", delay: 300 },
    { icon: faLinkedin, href: "https://www.linkedin.com/company/xoperations-official/", label: "LinkedIn", delay: 400 },
  ];

  const featureLinks = [
    { to: "/plans", icon: faRocket, text: "Plans", delay: 100 },
    { to: "/projects-showcase", icon: faCode, text: "Projects", delay: 200 },
    { to: "/achievements-gallery", icon: faLightbulb, text: "Achievements", delay: 300 },
    { to: "/courses", icon: faCode, text: "Courses", delay: 400 },
    { to: "/about-us", icon: faInfo, text: "About Us", delay: 500 },
  ];

  return (
    <>
      <footer 
        id="main-footer" 
        className={`footer-container ${isVisible ? 'visible' : ''}`}
        role="contentinfo"
      >
        <div className="footer-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-section brand-section">
              <Link to="/" className="brand-link" onClick={scrollToTop}>
                <img
                  src={`${import.meta.env.BASE_URL}XOperations.png`}
                  alt="XOperations Logo"
                  className="brand-logo"
                />
                <div className="brand-text">
                  <h3 className="brand-name">
                    <span className="brand-x">X</span>Operations
                  </h3>
                  <span className="brand-tagline">Innovate. Develop. Transform.</span>
                </div>
              </Link>
              <p className="company-description">
                {data.company.description}
              </p>
              <div className="tech-stack">
                <span className="tech-tag">Full-Stack</span>
                <span className="tech-tag">MERN Stack</span>
                <span className="tech-tag">Cyber Security</span>
              </div>
            </div>

            <div className="footer-section features-section">
              <h4 className="section-title">Our Solutions</h4>
              <nav className="features-nav" aria-label="Footer navigation">
                {featureLinks.map(({ to, icon, text, delay }) => (
                  <FeatureLink key={text} to={to} icon={icon} delay={delay}>
                    {text}
                  </FeatureLink>
                ))}
              </nav>
            </div>

            <div className="footer-section contact-section">
              <h4 className="section-title">Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faHome} className="contact-icon" />
                  <span className="contact-text">{data.company.contact.address}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href={`tel:${data.company.contact.phone}`} className="contact-link">
                    {data.company.contact.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faLightbulb} className="contact-icon" />
                  <a href="mailto:xoperations.contact@gmail.com" className="contact-link">
                    xoperations.contact@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-section newsletter-section">
              <h4 className="section-title">Stay Updated</h4>
              <p className="newsletter-text">Get the latest tech insights and project updates</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="bottom-content">
              <div className="social-links">
                <span className="social-text">Connect with us:</span>
                <div className="social-icons">
                  {socialLinks.map((social) => (
                    <SocialLink key={social.label} {...social} />
                  ))}
                </div>
              </div>

              <div className="copyright-section">
                <p className="copyright">
                  © {currentYear} <strong>XOperations</strong>. All rights reserved.
                </p>
                <div className="legal-links">
                  <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                  <span className="separator">•</span>
                  <Link to="/terms" className="legal-link">Terms of Service</Link>
                  <span className="separator">•</span>
                  <Link to="/cookies" className="legal-link">Cookies</Link>
                </div>
              </div>

              <button 
                className="back-to-top" 
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;