import People from './people';
import { Continents } from './constants';
import { useState } from 'react';
import InteractionPanel from './interactionPanel';

function App() {
  const [] = useState();
  return (
    <div className="App">
      <InteractionPanel/>
      <People continent={Continents.NORTH_AMERICA} />
      <People continent={Continents.AUSTRALIA}/>
      <People continent={Continents.EUROPA} />
      <People continent={Continents.ASIA} />
      <People continent={Continents.SOUTH_AMERICA}/>
    </div>
  );
}

export default App;
