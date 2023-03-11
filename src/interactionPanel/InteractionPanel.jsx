import { useUser } from '../userContext';
import { continents } from '../constants';
import { dataLength } from '../data/data';
import s from './InteractionPanel.module.scss';

function InteractionPanel() {
    const { countOfPeopleClicked, countOfServers, setAllPeople, hideExtraPeople, hideExtraServer, setAllServers } = useUser();

    const onClickNext = (e) => {
        setAllPeople();
        hideExtraPeople();
    };

    const onClickStart = (e) => {
        console.log('start is clicked');
        setAllServers();
        hideExtraServer();
    }

    return (
        <div className={s.mainBox}>
            {countOfPeopleClicked !== Object.keys(continents).length ?
                <div>
                    <p>Where are your users? Choose the number for every region.</p>
                    {countOfPeopleClicked > 0 && <button onClick={onClickNext}>Next</button>}
                </div> :
                <div>
                    {countOfServers === 0 ?
                        <p>Where is your data? Choose one spot for Object Storage system</p> :
                        <>
                            {countOfServers !== dataLength && <div>
                            <p>Choose minimum two additional spots for ByteCloud and press</p>
                            <button disabled={countOfServers >= 3 ? false : true} onClick={onClickStart}>Start</button>
                            </div>}
                        </>
                    }
                </div>
            }
        </div>
    );
};

export default InteractionPanel;