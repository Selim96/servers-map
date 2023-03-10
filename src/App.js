import People from './people';
import { continents } from './constants';
import InteractionPanel from './interactionPanel';
import ServersList from './serversList';
import { useUser } from './userContext';

function App() {
  const {countOfContinents, isShownExtraPeople } = useUser();
  
  return (
    <div className="App">
      <InteractionPanel/>
      <People continent={continents.NORTH_AMERICA.name} />
      <People continent={continents.AUSTRALIA.name}/>
      <People continent={continents.EUROPA.name} />
      <People continent={continents.ASIA.name} />
      <People continent={continents.SOUTH_AMERICA.name} />
      {(!isShownExtraPeople || countOfContinents.length === Object.keys(continents).length) && <ServersList/>}
    </div>
  );
}

export default App;
