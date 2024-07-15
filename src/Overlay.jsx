import React from 'react';
import './index.css';

const Overlay = ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="blurred-background" onClick={onClose}></div>
      <div className="card">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;