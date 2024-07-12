import React from 'react';
import './index.css';

const Overlay = ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="blurred-background" onClick={onClose}></div>
      <div className="card">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
