import Server from '../server';
import { serverLocations } from '../constants';
import s from './ServersList.module.scss';

function ServersList() {
    
    return (
        <div className={s.allServers}>
            <ul className={s.allServers_list}>
                <li id={1} className={s.allServers_item}>
                    <Server location={serverLocations.LOSANGELES}/>
                </li>
                <li id={2} className={s.allServers_item} >
                    <Server location={serverLocations.NEWYORK}/>
                </li>
                <li id={3} className={s.allServers_item} >
                    <Server location={serverLocations.FRANKFURT}/>
                </li>
                <li id={4} className={s.allServers_item} >
                    <Server location={serverLocations.SINGAPORE}/>
                </li>
            </ul>
        </div>
    )
};

export default ServersList;