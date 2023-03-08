import People from './people';
import { Continents } from './constants';

function App() {
  return (
    <div className="App">
      <People continent={Continents.NORTH_AMERICA} />
      <People continent={Continents.AUSTRALIA}/>
      <People continent={Continents.EUROPA} />
      <People continent={Continents.ASIA} />
      <People continent={Continents.SOUTH_AMERICA}/>
    </div>
  );
}

export default App;
