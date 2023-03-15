import { useState } from 'react';
import { useUser } from '../userContext';
import { dataLength } from '../data/data';
import s from './Server.module.scss';

function Server({location}) {
    const [isServerShown, setIsServerShown] = useState(false);

    const { increaseServers, isShownExtraServer, hideExtraServer, mainServer, addMainServer, startAnimation, countOfServers } = useUser();
    
    const first = (e) => {
        setIsServerShown(true);
        increaseServers(location);
        if (countOfServers.length === 0) {
            addMainServer(location);
        }
    }
    const second = (e) => {
        console.log(countOfServers.length)
        if (countOfServers.length >= (dataLength - 1)) {
            hideExtraServer();
            startAnimation();
        }
    }

    const onClick = (e) => {
        setIsServerShown(true);
        increaseServers(location);
        if (countOfServers.length === 0) {
            addMainServer(location);
        }
        if (countOfServers.length >= (dataLength - 1)) {
            hideExtraServer();
            
        }
    }

    return (
        <>
            {!isServerShown && isShownExtraServer && <span className={s.server_circle} onClick={onClick}></span>}
            {isServerShown && <span className={mainServer === location ? s.server : s.byteCloud}></span>}
        </>
    );
};

export default Server;