import {AiFillStar} from 'react-icons/ai';
import { coefficients } from '../constants';
import s from './Tablet.module.scss';

function Tablet({ continent, latency }) {
    
    function getMaxTime() {
        const result = (latency * coefficients.timeCoeff / 1000).toFixed(2);
        return result;
        // единица измерения sec.
    };


    return (
        <table className={s.tablet}>
            <thead>
                <tr className={s.header}>
                    <th className={s.rows_head}>{continent}
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
                    <td className={s.rows}>Latency{latency}</td>
                    <td className={s.rows}>Download time {getMaxTime()}sec</td>
                    <td className={s.rows}>Video streaming </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tablet;