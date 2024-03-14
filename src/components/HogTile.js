import React, { useState } from 'react';
import HogDetails from './HogDetails';

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="hog-tile" onClick={handleClick}>
      <img src={hog.image} alt={hog.name} />
          <h2>{hog.name}</h2>
        {/*If showDetails===true, then display hogDetails as a child of HogTile*/}
      {showDetails && <HogDetails hog={hog} />}
    </div>
  );
}

export default HogTile;