import React from 'react';

const FullScreenMedia = ({ src, alt, type, onClose }) => {
  return (
    <div className="full-screen-media-overlay" onClick={onClose}>
      <div className="full-screen-media-container" onClick={(e) => e.stopPropagation()}>
        {type === 'image' ? (
          <img src={src} alt={alt} className="full-screen-media" />
        ) : (
          <video src={src} className="full-screen-media" controls autoPlay>
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <button className="close-button" onClick={onClose}>×</button>
    </div>
  );
};

export default FullScreenMedia;