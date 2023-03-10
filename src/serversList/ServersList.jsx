import { useState } from 'react';
import { useUser } from '../userContext';
import s from './ServersList.module.scss';

function ServersList() {
    const [] = useState();
    const {increaseServers} = useUser()

    const onClickServer = (e) => {
        console.dir(e.target.id)
    }

    return (
        <div className={s.allServers}>
            <ul className={s.allServers_list} onClick={onClickServer}>
                <li id={1} className={s.allServers_item} >
                    <span className={s.allServers_circle}></span>
                </li>
                <li id={2} className={s.allServers_item} ></li>
                <li id={3} className={s.allServers_item} ></li>
                <li id={4} className={s.allServers_item} ></li>
            </ul>
        </div>
    )
};

export default ServersList;