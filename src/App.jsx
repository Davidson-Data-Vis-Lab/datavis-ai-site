import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './GridContainer';
import Overlay from './Overlay';
import FullScreenMedia from './FullScreenMedia';
import './index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

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

  const openFullScreenMedia = (src, alt, type) => {
    setFullScreenMedia({ src, alt, type });
  };

  const closeFullScreenMedia = () => {
    setFullScreenMedia(null);
  };

  return (
    <div className="page-container">
      <GridContainer openModal={openModal} />
      {isOpen && (
        <Overlay onClose={closeInitialOverlay}>
          <div className="black-text">
            <p>Dataset Suite.</p>
          </div>
        </Overlay>
      )}
      {isModalOpen && modalContent && (
        <Overlay onClose={closeModal}>
          <div className="modal-content">
            <h2 className="modal-title">{modalContent.title}</h2>
            <div className="modal-body">
              <div className="image-container" onClick={() => openFullScreenMedia(modalContent.src, modalContent.alt, modalContent.type)}>
                {modalContent.type === 'image' ? (
                  <img src={modalContent.src} alt={modalContent.alt} className="modal-media" />
                ) : (
                  <video src={modalContent.src} className="modal-media" controls>
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
          </div>
        </Overlay>
      )}
      {fullScreenMedia && (
        <FullScreenMedia
          src={fullScreenMedia.src}
          alt={fullScreenMedia.alt}
          type={fullScreenMedia.type}
          onClose={closeFullScreenMedia}
        />
      )}
    </div>
  );
};

export default App;