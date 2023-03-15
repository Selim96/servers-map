import AiFillStar from 'react-icons/ai';
import s from './Tablet.module.scss';

function Tablet({continent, latency, time, stars}) {
    return (
        <table>
            <thead>
                <tr className={s.header}>
                    <th>{continent} {<idv><AiFillStar/></idv>}</th>

                </tr>
            </thead>

            <tbody >
                <tr>
                    <td className={s.rows}>Latency{latency}</td>
                    <td className={s.rows}>Download time {time}</td>
                    <td className={s.rows}>Video streaming </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tablet;