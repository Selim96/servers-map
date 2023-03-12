import { useState } from 'react';
import { useUser } from '../userContext';
import s from './Server.module.scss';

function Server({location}) {
    const [isServerShown, setIsServerShown] = useState(false);

    const {increaseServers, isShownExtraServer, mainServer, addMainServer} = useUser();

    const onClick = (e) => {
        increaseServers(location);
        addMainServer(location);
        setIsServerShown(true);
    }

    return (
        <>
            {!isServerShown && isShownExtraServer && <span className={s.server_circle} onClick={onClick}></span>}
            {isServerShown && <span className={mainServer === location ? s.server : s.byteCloud}></span>}
        </>
    );
};

export default Server;