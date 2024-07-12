import React from 'react';
import './index.css';

const getImagePath = (datasetType, aiType, index) => {
  const paths = {
    '3D': [
      { Claude: '/dataset-video-image/3D/claude-bunny-thumbnail.jpeg', Gemini: '/dataset-video-image/3D/gemini-bunny-thumbnail.jpeg', GPT: '/dataset-video-image/3D/gpt-bunny-thumbnail.jpeg' },
      { Claude: '/dataset-video-image/3D/claude-monkey.png', Gemini: '/dataset-video-image/3D/gemini-monkey.png', GPT: '/dataset-video-image/3D/gpt-monkey.png' },
      { Claude: '/dataset-video-image/3D/claude-teapot-thumbnail.png', Gemini: '/dataset-video-image/3D/gemini-teapot-thumbnail.png', GPT: '/dataset-video-image/3D/gpt-teapot-thumbnail.jpeg' },
    ],
    'Field': [
      { Claude: '/dataset-video-image/Field/claude-brain.png', Gemini: '/dataset-video-image/Field/gemini-brain-thumbnail.png', GPT: '/dataset-video-image/Field/gpt-brain.jpeg' },
      { Claude: '/dataset-video-image/Field/claude-foot.png', Gemini: '/dataset-video-image/Field/gemini-foot.png', GPT: '/dataset-video-image/Field/gpt-foot.png' },
      { Claude: '/dataset-video-image/Field/claude-wind.png', Gemini: '/dataset-video-image/Field/gemini-wind-thumbnail.png', GPT: '/dataset-video-image/Field/gpt-wind.png' },
    ],
    'Network': [
      { Claude: '/dataset-video-image/Network/claude-bat.png', Gemini: '/dataset-video-image/Network/gemini-bat.png', GPT: '/dataset-video-image/Network/gpt-bat.png' },
      { Claude: '/dataset-video-image/Network/claude-cat.png', Gemini: '/dataset-video-image/Network/gemini-cat.png', GPT: '/dataset-video-image/Network/gpt-cat.png' },
      { Claude: '/dataset-video-image/Network/claude-lesmis.png', Gemini: '/dataset-video-image/Network/gemini-lesmis.png', GPT: '/dataset-video-image/Network/gpt-lesmis.png' },
    ],
    'Spatial': [
      { Claude: '/dataset-video-image/Spatial/claude-london.png', Gemini: '/dataset-video-image/Spatial/gemini-london.png', GPT: '/dataset-video-image/Spatial/gpt-london.png' },
      { Claude: '/dataset-video-image/Spatial/claude-nyc.jpeg', Gemini: '/dataset-video-image/Spatial/gemini-nyc.jpeg', GPT: '/dataset-video-image/Spatial/gpt-nyc.png' },
      { Claude: '/dataset-video-image/Spatial/claude-world.png', Gemini: '/dataset-video-image/Spatial/gemini-world.png', GPT: '/dataset-video-image/Spatial/gpt-world.png' },
    ],
    'Tabular': [
      { Claude: '/dataset-video-image/Tabular/claude-fruit.png', Gemini: '/dataset-video-image/Tabular/gemini-fruit-thumbnail.png', GPT: '/dataset-video-image/Tabular/gpt-fruit.png' },
      { Claude: '/dataset-video-image/Tabular/claude-healthincome-thumbnail.png', Gemini: '/dataset-video-image/Tabular/gemini-healthincome-thumbnail.png', GPT: '/dataset-video-image/Tabular/gpt-healthincome.png' },
      { Claude: '/dataset-video-image/Tabular/claude-housing-thumbnail.png', Gemini: '/dataset-video-image/Tabular/gemini-housingprice-thumbnail.png', GPT: '/dataset-video-image/Tabular/gpt-housingprice.png' },
    ],
    'Textual': [
      { Claude: '/dataset-video-image/Textual/claude-email.png', Gemini: '/dataset-video-image/Textual/gemini-email-thumbnail.png', GPT: '/dataset-video-image/Textual/gpt-email.png' },
      { Claude: '/dataset-video-image/Textual/claude-federalist-thumbnail.png', Gemini: '/dataset-video-image/Textual/gemini-federalist.png', GPT: '/dataset-video-image/Textual/gpt-federalist.png' },
      { Claude: '/dataset-video-image/Textual/claude-imdb.png', Gemini: '/dataset-video-image/Textual/gemini-imdb-thumbnail.png', GPT: '/dataset-video-image/Textual/gpt-imdb.png' },
    ],
  };
  return paths[datasetType][index][aiType];
};

const getMediaPath = (datasetType, aiType, index) => {
  const paths = {
    '3D': [
      { Claude: '/dataset-video-image/3D/claude-bunny.mp4', Gemini: '/dataset-video-image/3D/gemini-bunny.mp4', GPT: '/dataset-video-image/3D/gpt-bunny.mp4' },
      { Claude: '/dataset-video-image/3D/claude-monkey.png', Gemini: '/dataset-video-image/3D/gemini-monkey.png', GPT: '/dataset-video-image/3D/gpt-monkey.png' },
      { Claude: '/dataset-video-image/3D/claude-teapot.mp4', Gemini: '/dataset-video-image/3D/gemini-teapot.mp4', GPT: '/dataset-video-image/3D/gpt-teapot.mp4' },
    ],
    'Field': [
      { Claude: '/dataset-video-image/Field/claude-brain.png', Gemini: '/dataset-video-image/Field/gemini-brain.mp4', GPT: '/dataset-video-image/Field/gpt-brain.jpeg' },
      { Claude: '/dataset-video-image/Field/claude-foot.png', Gemini: '/dataset-video-image/Field/gemini-foot.png', GPT: '/dataset-video-image/Field/gpt-foot.png' },
      { Claude: '/dataset-video-image/Field/claude-wind.png', Gemini: '/dataset-video-image/Field/gemini-wind.mp4', GPT: '/dataset-video-image/Field/gpt-wind.png' },
    ],
    'Network': [
      { Claude: '/dataset-video-image/Network/claude-bat.png', Gemini: '/dataset-video-image/Network/gemini-bat.png', GPT: '/dataset-video-image/Network/gpt-bat.png' },
      { Claude: '/dataset-video-image/Network/claude-cat.png', Gemini: '/dataset-video-image/Network/gemini-cat.png', GPT: '/dataset-video-image/Network/gpt-cat.png' },
      { Claude: '/dataset-video-image/Network/claude-lesmis.png', Gemini: '/dataset-video-image/Network/gemini-lesmis.png', GPT: '/dataset-video-image/Network/gpt-lesmis.png' },
    ],
    'Spatial': [
      { Claude: '/dataset-video-image/Spatial/claude-london.png', Gemini: '/dataset-video-image/Spatial/gemini-london.png', GPT: '/dataset-video-image/Spatial/gpt-london.png' },
      { Claude: '/dataset-video-image/Spatial/claude-nyc.jpeg', Gemini: '/dataset-video-image/Spatial/gemini-nyc.jpeg', GPT: '/dataset-video-image/Spatial/gpt-nyc.png' },
      { Claude: '/dataset-video-image/Spatial/claude-world.png', Gemini: '/dataset-video-image/Spatial/gemini-world.png', GPT: '/dataset-video-image/Spatial/gpt-world.png' },
    ],
    'Tabular': [
      { Claude: '/dataset-video-image/Tabular/claude-fruit.png', Gemini: '/dataset-video-image/Tabular/gemini-fruit.mp4', GPT: '/dataset-video-image/Tabular/gpt-fruit.png' },
      { Claude: '/dataset-video-image/Tabular/claude-healthincome.mov', Gemini: '/dataset-video-image/Tabular/gemini-healthincome.mp4', GPT: '/dataset-video-image/Tabular/gpt-healthincome.png' },
      { Claude: '/dataset-video-image/Tabular/claude-housing.mov', Gemini: '/dataset-video-image/Tabular/gemini-housingprice.mp4', GPT: '/dataset-video-image/Tabular/gpt-housingprice.png' },
    ],
    'Textual': [
      { Claude: '/dataset-video-image/Textual/claude-email.png', Gemini: '/dataset-video-image/Textual/gemini-email.mp4', GPT: '/dataset-video-image/Textual/gpt-email.png' },
      { Claude: '/dataset-video-image/Textual/claude-federalist.mov', Gemini: '/dataset-video-image/Textual/gemini-federalist.png', GPT: '/dataset-video-image/Textual/gpt-federalist.png' },
      { Claude: '/dataset-video-image/Textual/claude-imdb.png', Gemini: '/dataset-video-image/Textual/gemini-imdb.mp4', GPT: '/dataset-video-image/Textual/gpt-imdb.png' },
    ],
  };
  return paths[datasetType][index][aiType];
};

const getBorderStyle = (datasetType, aiType, index) => {
  if (
    (datasetType === 'Textual' && aiType === 'Claude' && index === 0) ||
    (datasetType === 'Textual' && aiType === 'Claude' && index === 2) ||
    (datasetType === 'Network' && aiType === 'Claude' && index === 2) ||
    (datasetType === 'Spatial' && aiType === 'Gemini' && (index === 0 || index === 2)) ||
    (datasetType === 'Field' && aiType === 'Claude' && index === 0) ||
    (datasetType === 'Textual' && aiType === 'Gemini' && index === 1)
  ) {
    return { border: '4px solid red' };
  }
  if (
    (datasetType === 'Tabular' && aiType === 'Claude' && index === 2) ||
    (datasetType === 'Tabular' && aiType === 'Claude' && index === 1) ||
    (datasetType === 'Textual' && aiType === 'Claude' && index === 1)
  ) {
    return { border: '4px solid orange' };
  }
  return {};
};

const GridItem = ({ datasetType, aiType, index, openModal }) => {
  const imagePath = getImagePath(datasetType, aiType, index);
  const mediaPath = getMediaPath(datasetType, aiType, index);
  const altText = `${datasetType} - ${aiType} ${index + 1}`;
  const borderStyle = getBorderStyle(datasetType, aiType, index);

  const handleOpen = () => {
    const contentType = imagePath.includes('thumbnail') ? 'video' : 'image';
    openModal({ src: mediaPath, alt: altText, type: contentType });
  };

  return (
    <div className="grid-item" onClick={handleOpen} style={borderStyle}>
      <img src={imagePath} alt={altText} />
    </div>
  );
};

export default GridItem;
