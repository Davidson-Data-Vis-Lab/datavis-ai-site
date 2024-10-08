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
          <div className="initial-overlay">
            <div className="overlay-content">
              <button className="close-button" onClick={closeInitialOverlay}>&times;</button>
              <h1>Dataset Suite: AI-Generated Visualizations</h1>
              <h2>David Yoder & Dr. Katy Williams, Davidson College</h2>
              
              <div className="scrollable-content">
                <section>
                  <h3>Our Research</h3>
                  <p>Exploring how Claude, Gemini, and ChatGPT create data visualizations across a variety of dataset types.</p>
                </section>
                
                <section>
                  <h3>Study Overview</h3>
                  <p>We use a test suite of 18 datasets across 6 dataset type: 3D, Field, Network, Spatial, Tabular, and Textual. We tested 3 datasets for each of the 6 dataset types. We chose to assess the AI capabilities in generating visualizations with minimal guidance. Our prompting typically involved uploading the unnamed dataset and asking, "Can you generate a visualization for this dataset?"
                  </p>
                </section>
                
                <section>
                  <h3>Publication</h3>
                  <p>Forthcoming.</p>
                </section>
              </div>
              
              <button className="start-exploring" onClick={closeInitialOverlay}>
                Explore the Dataset Suite
              </button>
            </div>
          </div>
        </Overlay>
      )}
     {isModalOpen && modalContent && (
        <Overlay onClose={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2 className="modal-title">{modalContent.title}</h2>
              {modalContent.chatLogLink && (
                <div className="chat-log-link">
                  <a href={modalContent.chatLogLink} target="_blank" rel="noopener noreferrer">
                    View Chat Log
                  </a>
                </div>
              )}
            </div>
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
              <div className={`text-container ${modalContent.borderStyle && modalContent.borderStyle.border && modalContent.borderStyle.border.includes('orange') ? 'orange-border' : ''}`}>
                {modalContent.warningMessage && (
                  <div className={`code-warning ${modalContent.borderStyle && modalContent.borderStyle.border && modalContent.borderStyle.border.includes('orange') ? 'orange' : 'red'}`}>
                    {modalContent.warningMessage}
                  </div>
                )}
                <h3>Code</h3>
                <SyntaxHighlighter 
                  language="javascript" 
                  style={vscDarkPlus}
                  className={modalContent.borderStyle && modalContent.borderStyle.border && modalContent.borderStyle.border.includes('red') ? 'red-border' : ''}
                >
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