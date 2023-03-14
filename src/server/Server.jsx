import { useState } from 'react';
import { useUser } from '../userContext';
import { dataLength } from '../data/data';
import s from './Server.module.scss';

function Server({location}) {
    const [isServerShown, setIsServerShown] = useState(false);

    const {increaseServers, isShownExtraServer, mainServer, addMainServer,startAnimation,countOfServers} = useUser();

    const onClick = (e) => {
        increaseServers(location);
        addMainServer(location);
        setIsServerShown(true);
        if (countOfServers.length >= (dataLength - 1)) {
            startAnimation();
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