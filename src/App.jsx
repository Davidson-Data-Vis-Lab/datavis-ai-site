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
          <div>Dataset Suite.</div>
        </Overlay>
      )}
      {isModalOpen && (
        <Overlay onClose={closeModal}>
          {modalContent.type === 'image' ? (
            <img src={modalContent.src} alt={modalContent.alt} className="modal-media" />
          ) : (
            <video controls className="modal-media">
              <source src={modalContent.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Overlay>
      )}
    </div>
  );
};

export default App;
