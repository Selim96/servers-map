import { useUser } from '../userContext';
import Tablet from '../tablet';
import s from './ResultTablet.module.scss';

function ResultTablet() {

    const { countOfContinents, countOfServers, hideExtraPeople, hideExtraServer, isShownExtraServer, startAnimation } = useUser();

    return (
        <div className={s.main}>
            <div className={s.tablet_container}>
                <h2 className={s.tablet_title}>ByteCloud</h2>
                {<ul>
                    {countOfContinents.map(({ name }) =>
                        <li><Tablet continent={name} latency time/></li>
                    )}
                </ul>}
            </div>
            <div className={s.tablet_container}>
                <h2 className={s.tablet_title}>Object Storage</h2>
            </div>
        </div>
    )
}

export default ResultTablet;