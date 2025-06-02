import { useState } from 'react';
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordionHeader">
        <span className="accordionTitle">{title}</span>
        <button
          className="accordionButton"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
        </button>
      </div>
      {isOpen && (
        <div className="accordionText">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
