import { useState } from 'react';
import s from './Server.module.scss';

function Server() {
    const [isServerShown, setIsServerShown] = useState(true);

    return (
        <span className={s.server}>
            <span className={s.server_circle}></span>
            <span className={s.server_}></span>
        </span>
    )
};

export default Server;