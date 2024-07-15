import React from 'react';
import GridItem from './GridItem';
import './index.css';

const datasetTypes = ['3D', 'Tabular', 'Network', 'Spatial', 'Field', 'Textual'];
const aiTypes = ['Claude', 'Gemini', 'GPT'];

// Define the gradient styles
const gradientStyle = {
    background: 'linear-gradient(90deg, rgba(20,90,149,1) 0%, rgba(20,147,93,1) 100%)',
    backgroundSize: '400% 100%',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
};

const GridContainer = ({ openModal }) => {
    return (
        <div className="grid-container">
            <div className="grid-item header dataset-type" style={{ ...gradientStyle, backgroundPosition: '0 0' }}>
                Dataset Type
            </div>
            {aiTypes.map(ai => (
                <div key={ai} className="grid-item header ai-type" style={{ ...gradientStyle, gridColumn: 'span 3', backgroundPosition: `calc((100% / 4) * (1 + ${aiTypes.indexOf(ai)})) 0` }}>
                    {ai}
                </div>
            ))}
            {datasetTypes.map(datasetType => (
                <React.Fragment key={datasetType}>
                    <div className="grid-item dataset-type">{datasetType}</div>
                    {aiTypes.map(ai => (
                        <React.Fragment key={`${datasetType}-${ai}`}>
                            <GridItem
                                datasetType={datasetType}
                                aiType={ai}
                                openModal={openModal}
                                index={0}
                                className="grid-cell"
                            />
                            <GridItem
                                datasetType={datasetType}
                                aiType={ai}
                                openModal={openModal}
                                index={1}
                                className="grid-cell"
                            />
                            <GridItem
                                datasetType={datasetType}
                                aiType={ai}
                                openModal={openModal}
                                index={2}
                                className="grid-cell"
                            />
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default GridContainer;
