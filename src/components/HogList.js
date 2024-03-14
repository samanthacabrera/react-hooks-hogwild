import React, {useState} from 'react';
import HogTile from './HogTile';

function HogList({ hogs }) {
  const [greased, setGreased] = useState(false);


    const filteredHogs = greased ? hogs.filter(hog => hog.greased) : hogs;
    //console.log(filteredHogs)

  const handleToggleGreased = () => {
    setGreased(!greased);
  }; 

  return (
    <div>
       <div>
        <button onClick={handleToggleGreased}>
          {greased ? 'Show All Hogs' : 'Show Greased Hogs'}
        </button>
      </div> 
      <div>
        {filteredHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default HogList;
