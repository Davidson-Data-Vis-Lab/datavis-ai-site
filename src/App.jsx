import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './GridContainer';
import Overlay from './Overlay';
import FullScreenMedia from './FullScreenMedia';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
            <h1>Dataset Suite.</h1>
            <p>This is our dataset test suite for large language models. We curated a collection of 18 datasets across 6 different dataset types. We tested our datasets using Claude, Gemini, and ChatGPT to see how well these AIs would create data visualizations with minimal prompting. Our results are displayed on this webpage.</p>
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
                <h3>Code</h3>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {modalContent.code}
                </SyntaxHighlighter>
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