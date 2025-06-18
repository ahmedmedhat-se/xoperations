import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLink, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/floating-toggler.css';

const FloatingToggler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="floating-toggler-wrapper">
      <div className={`toggler-options ${isOpen ? "open" : ""}`}>
        <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="toggler-icon whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://linktr.ee/xoperations" target="_blank" rel="noopener noreferrer" className="toggler-icon link">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <button className="toggler-main-btn" onClick={toggleButtons}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default FloatingToggler;