import { useUser } from '../userContext';
import { continents } from '../constants';
import { dataLength } from '../data/data';
import s from './InteractionPanel.module.scss';
import { useState } from 'react';

function InteractionPanel() {
    const [isNextClicked, setIsNextClicked] = useState(false);

    const { countOfContinents, countOfServers, hideExtraPeople, hideExtraServer, isShownExtraServer, startAnimation, isShownResults, resetAll } = useUser();

    const onClickNext = (e) => {
        hideExtraPeople();
        setIsNextClicked(true);
    };

    const onClickStart = (e) => {
        hideExtraServer();
        startAnimation();
    }

    const onClickReset = (e) => {
        resetAll();
        setIsNextClicked(false);
    }

    return (
        <div className={s.mainBox}>
            {countOfContinents.length !== Object.keys(continents).length && !isNextClicked ?
                <div>
                    <p>Where are your users? Choose the number for every region.</p>
                    {countOfContinents.length > 0 && <button onClick={onClickNext}>Next</button>}
                </div> :
                <div>
                    {countOfServers.length === 0 ?
                        <p>Where is your data? Choose one spot for Object Storage system</p> :
                        <>
                            {(countOfServers.length !== dataLength && isShownExtraServer) &&
                            <div>
                                <p>Choose minimum two additional spots for ByteCloud and press</p>
                                <button disabled={countOfServers.length >= 3 ? false : true} onClick={onClickStart}>Start</button>
                            </div>}
                        </>
                    }
                </div>
            }
            {isShownResults && <div><p>Do you want to <span onClick={onClickReset}>start again</span>?</p></div>}
        </div>
    );
};

export default InteractionPanel;