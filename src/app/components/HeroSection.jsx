import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero-section.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero-container" ref={heroRef}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? "visible" : ""}`}>
            <h1 className="hero-title d-flex justify-content-center mt-5">
              <span className="title-accent">X</span>
              <span className="title-main">Operations</span>
            </h1>

            <p className="hero-slogan ">
              Your Egyptian Partner for 
              <span className="gradient-text"> Smart Digital Transformation</span>
            </p>

            <p className="hero-description text-dark">
              In a rapidly evolving Egyptian market, XOperations is a specialized software company
              offering intelligent and customized software solutions.
              We help businesses digitally transform, improve efficiency, and boost productivity
              through integrated technology services.
            </p>

            <div className="hero-actions">
              <Link to="/about-us" className="btn btn-primary">
                <span>Explore More</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/plans" className="btn btn-secondary">
                View Plans
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </header>
  );
};

export default HeroSection;