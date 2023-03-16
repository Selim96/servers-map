import {AiFillStar} from 'react-icons/ai';
import { coefficients, continents } from '../constants';
import { data } from '../data/data';
import s from './Tablet.module.scss';

const maxData = Math.max(...data.flatMap(item => Object.values(item.clients)));

const videoCases = ['4K/2160p UltraHD', '1080p Full HD', '720p', '480p']

function Tablet({ continent, latency }) {
    
    function getMaxTime() {
        const result = (latency * coefficients.timeCoeff / 1000).toFixed(2);
        return result;
        // единица измерения sec.
    };

    let videoQuality;
    if ((latency / maxData) <= 0.2) {
        videoQuality = videoCases[0]
    } else if ((latency / maxData) <= 0.35) {
        videoQuality = videoCases[1]
    } else if ((latency / maxData) <= 0.65) {
        videoQuality = videoCases[2]
    } else if ((latency / maxData) <= 0.9) {
        videoQuality = videoCases[3]
    } 

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
                            
                            <li className={s.rating_item}><AiFillStar className={(latency/maxData) <= 0.1 &&s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={(latency/maxData) <= 0.3 && s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={(latency/maxData) <= 0.5 && s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={(latency/maxData) <= 0.65 && s.stars} /></li>
                            <li className={s.rating_item}><AiFillStar className={(latency/maxData) <= 0.8 && s.stars} /></li>
                        </ul>
                    </th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td className={s.rows}>Latency <br/><span className={s.value}>{latency}</span></td>
                    <td className={s.rows}>Download time<br/> <span className={s.value}>{getMaxTime()}sec</span></td>
                    <td className={s.rows}>Video streaming <br /> {videoQuality}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tablet;