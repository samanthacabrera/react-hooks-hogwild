import React, {useState} from 'react';
import HogTile from './HogTile';

function HogList({ hogs }) {
    // Filtering logic 
    const [greased, setGreased] = useState(false);
    const filteredHogs = greased ? hogs.filter(hog => hog.greased) : hogs;
    const handleGreased = () => {
    setGreased(!greased);
    }; 

    // Sorting Logic 
    const [sortBy, setSortBy] = useState(null);
    if (sortBy) {
     filteredHogs.sort((a, b) => {
         if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'weight') {
        return a.weight - b.weight;
      }});
    }
    const handleSort = event => { setSortBy(event.target.value) };
    
  return (
    <div>
       <div>
        <button onClick={handleGreased}>
          {greased ? 'Show All Hogs' : 'Show Greased Hogs'}
        </button>
        <select onChange={handleSort}> 
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div> 
      <div className='ui grid container'>
        {filteredHogs.map(hog => (
          <HogTile key={hog.name} hog={hog}/>
        ))}
      </div>
    </div>
  );
}

export default HogList;
