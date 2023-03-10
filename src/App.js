import People from './people';
import { continents } from './constants';
import InteractionPanel from './interactionPanel';
import ServersList from './serversList';
import { useUser } from './userContext';

function App() {
  const { countOfPeopleClicked } = useUser();
  
  return (
    <div className="App">
      <InteractionPanel/>
      <People continent={continents.NORTH_AMERICA} />
      <People continent={continents.AUSTRALIA}/>
      <People continent={continents.EUROPA} />
      <People continent={continents.ASIA} />
      <People continent={continents.SOUTH_AMERICA} />
      {countOfPeopleClicked === Object.keys(continents).length && <ServersList/>}
    </div>
  );
}

export default App;
