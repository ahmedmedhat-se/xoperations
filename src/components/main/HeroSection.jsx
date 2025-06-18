import { Link } from "react-router-dom";
import "../styles/hero-section.css";

const HeroSection = () => {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title"><span style={{ color: "#186cc7" }}>X</span>Operations</h1>
        <p className="hero-slogan">Your Egyptian Partner for Smart Digital Transformation</p>
        <p className="hero-description">
          In a rapidly evolving Egyptian market, XOperations is a specialized software company
          offering intelligent and customized software, networking, and cybersecurity solutions.
          We help businesses digitally transform, improve efficiency, and boost productivity
          through integrated technology services.
        </p>
        <Link to={"/xoperations/about"} className="hero-button">Explore More!</Link>
      </div>
    </header>
  );
};

export default HeroSection;
