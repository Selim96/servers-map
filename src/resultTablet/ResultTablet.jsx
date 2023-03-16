import { useUser } from '../userContext';
import Tablet from '../tablet';
import { coefficients } from '../constants';
import s from './ResultTablet.module.scss';

function ResultTablet() {

    const { countOfContinents, getTime, getLatencyMainServer, } = useUser();

    function getMaxLatency(func, continent, cities) {
        const result = Number((Math.max(...cities.map(item => func(continent, item))) / coefficients.animaCoeff).toFixed(2));
        return result;
        // единица измерения ms
    }

    const sortedContinents = countOfContinents.sort((first, second)=>second.cities.length - first.cities.length)

    return (
        <div className={s.main}>
            <div className={s.tablet_container}>
                <h2 className={s.tablet_title}>ByteCloud</h2>
                {<ul className={s.tablet_list}>
                    {sortedContinents.map(({ name, cities }) =>
                        <li key={name}><Tablet continent={name} latency={getMaxLatency(getTime, name, cities)} time/></li>
                    )}
                </ul>}
            </div>
            <div className={s.tablet_container}>
                <h2 className={s.tablet_title}>Object Storage</h2>
                {<ul className={s.tablet_list}>
                    {sortedContinents.map(({ name, cities }) =>
                        <li key={name + 'store'}><Tablet continent={name} latency={getMaxLatency(getLatencyMainServer, name, cities)} time/></li>
                    )}
                </ul>}
            </div>
        </div>
    )
}

export default ResultTablet;