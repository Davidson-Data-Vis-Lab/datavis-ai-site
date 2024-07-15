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

const getItemDetails = (datasetType, aiType, index) => {
  const titles = {
    '3D': ['Stanford Bunny', 'Suzanne Monkey', 'Utah Teapot'],
    'Field': ['Brain MRI', 'Foot X-ray', 'Wind Patterns'],
    'Network': ['Bat Social Network', 'Cat Brain Network', 'Les Misérables Character Graph'],
    'Spatial': ['London Tube Map', 'NYC Subway Map', 'World Population Density'],
    'Tabular': ['Fruit Nutrition Data', 'Health vs Income', 'Housing Prices'],
    'Textual': ['Email Classification', 'Federalist Papers', 'IMDB Movie Reviews'],
  };

  const descriptions = {
    '3D': [
      'A 3D model of the Stanford Bunny, a common test model in computer graphics.',
      'Blender\'s default monkey model, named Suzanne.',
      'The Utah teapot, a 3D model that has become a standard reference object in computer graphics.',
    ],
    'Field': [
      'An MRI scan of a human brain, showing detailed internal structures.',
      'An X-ray image of a human foot, revealing bone structure.',
      'A visualization of global wind patterns and atmospheric circulation.',
    ],
    'Network': [
      'A social network graph of bat colonies, showing their interconnections.',
      'A network representation of neural connections in a cat\'s brain.',
      'A character relationship graph from Victor Hugo\'s novel Les Misérables.',
    ],
    'Spatial': [
      'A map of London\'s underground tube system, showing different lines and stations.',
      'A map of New York City\'s subway system, displaying various routes and stops.',
      'A world map showing population density across different regions.',
    ],
    'Tabular': [
      'A dataset containing nutritional information for various fruits.',
      'A scatter plot showing the relationship between health outcomes and income levels.',
      'A dataset of housing prices with various features like location, size, and amenities.',
    ],
    'Textual': [
      'A dataset of emails classified into categories like spam, promotional, or personal.',
      'The collection of 85 articles written to promote the ratification of the US Constitution.',
      'A large dataset of movie reviews from the Internet Movie Database (IMDB).',
    ],
  };

  const additionalInfo = {
    '3D': [
      'The Stanford Bunny is a computer graphics 3D test model developed in 1994. It consists of 69,451 polygons.',
      'Suzanne, the monkey head, is Blender\'s alternative to the Utah Teapot. It\'s named after the orangutan in the film "Jay and Silent Bob Strike Back".',
      'The Utah teapot, created in 1975, is one of the most recognizable 3D models in computer graphics history.',
    ],
    'Field': [
      'MRI (Magnetic Resonance Imaging) uses strong magnetic fields and radio waves to produce detailed images of the inside of the body.',
      'X-rays use ionizing radiation to visualize the internal structures of the body, particularly useful for examining bones.',
      'Wind patterns are crucial for understanding weather systems, climate patterns, and atmospheric circulation on a global scale.',
    ],
    'Network': [
      'Social network analysis in bats helps researchers understand disease transmission and social behavior in these mammals.',
      'Brain networks in cats have been studied to understand sensory processing, particularly in the visual cortex.',
      'The Les Misérables character co-occurrence network is a classic example used in network analysis and visualization.',
    ],
    'Spatial': [
      'The London Underground, opened in 1863, is the world\'s oldest underground railway network.',
      'The New York City Subway is one of the world\'s largest metro systems, with 472 stations in operation.',
      'Population density maps help in urban planning, resource allocation, and understanding human geographic patterns.',
    ],
    'Tabular': [
      'Nutritional data helps in understanding the health benefits of different fruits and in planning balanced diets.',
      'The relationship between health and income is a key area of study in public health and economics.',
      'Housing price datasets are crucial for real estate market analysis, urban planning, and economic studies.',
    ],
    'Textual': [
      'Email classification is essential for spam filtering, organizing inboxes, and prioritizing communications.',
      'The Federalist Papers played a crucial role in promoting the ratification of the United States Constitution.',
      'The IMDB dataset is widely used in sentiment analysis and natural language processing tasks.',
    ],
  };

  return {
    title: `${titles[datasetType][index]} (${aiType})`,
    description: descriptions[datasetType][index],
    additionalInfo: additionalInfo[datasetType][index],
  };
};

const GridItem = ({ datasetType, aiType, index, openModal, className }) => {
  const imagePath = getImagePath(datasetType, aiType, index);
  const mediaPath = getMediaPath(datasetType, aiType, index);
  const altText = `${datasetType} - ${aiType} ${index + 1}`;
  const borderStyle = getBorderStyle(datasetType, aiType, index);
  const { title, description, additionalInfo } = getItemDetails(datasetType, aiType, index);

  const handleOpen = () => {
    const contentType = mediaPath.toLowerCase().endsWith('.mov') || mediaPath.toLowerCase().endsWith('.mp4') ? 'video' : 'image';
    openModal({ 
      src: mediaPath, 
      alt: altText, 
      type: contentType, 
      title, 
      description, 
      additionalInfo 
    });
  };

  const isVideo = imagePath.toLowerCase().endsWith('.mov') || imagePath.toLowerCase().endsWith('.mp4');

  return (
    <div className={`grid-item ${className}`} onClick={handleOpen} style={borderStyle}>
      {isVideo ? (
        <video src={imagePath} alt={altText} preload="metadata" />
      ) : (
        <img src={imagePath} alt={altText} />
      )}
    </div>
  );
};


export default GridItem;