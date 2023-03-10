import People from './people';
import { continents } from './constants';
import { useState } from 'react';
import InteractionPanel from './interactionPanel';
import ServersList from './serversList';

function App() {
  const [] = useState();
  return (
    <div className="App">
      <InteractionPanel/>
      <People continent={continents.NORTH_AMERICA} />
      <People continent={continents.AUSTRALIA}/>
      <People continent={continents.EUROPA} />
      <People continent={continents.ASIA} />
      <People continent={continents.SOUTH_AMERICA} />
      <ServersList/>
    </div>
  );
}

export default App;
