import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './GridContainer';
import Overlay from './Overlay';
import './index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true); // Initially open the overlay
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const closeInitialOverlay = () => {
    setIsOpen(false);
  };

  return (
    <div className="page-container">
      <GridContainer openModal={openModal} />
      {isOpen && (
        <Overlay onClose={closeInitialOverlay}>
          <div className="black-text">
            <p> Dataset Suite.</p>
            </div>
        </Overlay>
      )}
      {isModalOpen && modalContent && (
  <Overlay onClose={closeModal}>
    <h2 className="modal-title">{modalContent.title}</h2>
    <div className="modal-body">
      <div className="image-container">
        {modalContent.type === 'image' ? (
          <img src={modalContent.src} alt={modalContent.alt} className="modal-media" />
        ) : (
          <video controls className="modal-media">
            <source src={modalContent.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="text-container">
        <h3>Description</h3>
        <p>{modalContent.description}</p>
        <h3>Additional Information</h3>
        <p>{modalContent.additionalInfo}</p>
      </div>
    </div>
  </Overlay>
)}
    </div>
  );
};

export default App;