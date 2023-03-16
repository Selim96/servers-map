import {AiFillStar} from 'react-icons/ai';
import { coefficients, continents } from '../constants';

import s from './Tablet.module.scss';

function Tablet({ continent, latency }) {
    
    function getMaxTime() {
        const result = (latency * coefficients.timeCoeff / 1000).toFixed(2);
        return result;
        // единица измерения sec.
    };

    let headName;
    switch (continent) {
        case continents.ASIA.name:
            headName = "Asia";
            break;
        case continents.AUSTRALIA.name:
            headName = "Australia";
            break;
        case continents.EUROPA.name:
            headName = "Europa";
            break;
        case continents.NORTH_AMERICA.name:
            headName = "North America";
            break;
        case continents.SOUTH_AMERICA.name:
            headName = "South America";
            break;
        default:
            console.log("Invalid subscription type");
    }

    return (
        <table >
            <thead>
                <tr >
                    <th >{headName}
                    </th>
                    <th></th>
                    <th>
                        <ul className={s.rating_list}>
                            <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                        </ul>
                    </th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td className={s.rows}>Latency <br/><span className={s.value}>{latency}</span></td>
                    <td className={s.rows}>Download time<br/> <span className={s.value}>{getMaxTime()}sec</span></td>
                    <td className={s.rows}>Video streaming </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tablet;