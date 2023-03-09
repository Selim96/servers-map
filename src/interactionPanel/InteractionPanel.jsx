import { useUser } from '../userContext';
import s from './InteractionPanel.module.scss';

function InteractionPanel() {
    const { countOfPeopleClicked, setAllPeople, hideExtraPeople } = useUser();

    

    return countOfPeopleClicked !== 5 ?
        (<div>
            <p>Where are your users? Choose the number for every region.</p>
            {countOfPeopleClicked > 0 && <button onClick={(e) => {
                setAllPeople();
                hideExtraPeople();
            }}>Next</button>}
        </div>) :
        (<div>
            <p>Where is your data? Choose one spot for Object Storage system</p>
        </div>)
    
};

export default InteractionPanel;