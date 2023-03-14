import { useState } from 'react';
import { useUser } from '../userContext';
import laptopMask from '../assets/elements/small_mask.png';
import tabletMask from '../assets/elements/medium_mask.png';
import mobileMask from '../assets/elements/large_mask.png';
import { dataLength, data } from '../data/data';
import { continents, serverLocations, timeCoeff } from '../constants';
import s from './People.module.scss';

function People({ continent }) {
    const [isShowDevice, setIsShowDevice] = useState(null);
    const [cities, setCities] = useState([]);
    const [isShownTime, setIsShownTime] = useState(false);

    const { increaseContinents, isShownExtraPeople, isShownExtraServer, countOfServers, isAnimationShown1, isAnimationShown2, addTimes1, addTimes2 } = useUser();
    
    const currentCities = Object.values(continents).find(item=>item.name === continent).cities;

    const onClickPeople = (e) => {
        let newContinent;
        switch (e.target.id) {
            case 'first':
                setIsShowDevice(1);
                newContinent = { name: continent, cities: [currentCities[0]] };
                setCities([currentCities[0]]);
                break;
            case 'second':
                setIsShowDevice(2);
                newContinent = { name: continent, cities: [currentCities[0], currentCities[1]] };
                setCities([currentCities[0], currentCities[1]]);
                break;
            case 'third':
                setIsShowDevice(3);
                newContinent = { name: continent, cities: [currentCities[0], currentCities[1], currentCities[2]] };
                setCities([currentCities[0], currentCities[1], currentCities[2]]);
                break;
            default:
                console.log("Invalid subscription type")
        }
        increaseContinents(newContinent);
    };

    function getTime(city) {
        let result;
        
        switch (continent) {
            case continents.EUROPA.name:
                result = countOfServers.includes(serverLocations.FRANKFURT) ?
                    data.find(item => item.server === serverLocations.FRANKFURT).clients[city] :
                    data.find(item => item.server === serverLocations.SINGAPORE).clients[city];
                break;
            case continents.ASIA.name:
                result = countOfServers.includes(serverLocations.SINGAPORE) ?
                    data.find(item => item.server === serverLocations.SINGAPORE).clients[city] :
                    data.find(item => item.server === serverLocations.FRANKFURT).clients[city];
                break;
            case continents.AUSTRALIA.name:
                result = countOfServers.includes(serverLocations.SINGAPORE) ?
                    data.find(item => item.server === serverLocations.SINGAPORE).clients[city] :
                    data.find(item => item.server === serverLocations.FRANKFURT).clients[city];
                break;
            case continents.NORTH_AMERICA.name:
                result = countOfServers.includes(serverLocations.NEWYORK) ?
                    data.find(item => item.server === serverLocations.NEWYORK).clients[city] :
                    data.find(item => item.server === serverLocations.LOSANGELES).clients[city];
                break;
            case continents.SOUTH_AMERICA.name:
                result = countOfServers.includes(serverLocations.LOSANGELES) ?
                    data.find(item => item.server === serverLocations.LOSANGELES).clients[city] :
                    data.find(item => item.server === serverLocations.NEWYORK).clients[city];
                break;
            default:
                console.log("Invalid subscription type")
        }
        return result * timeCoeff;
        // единица измерения ms
    };

    function maxLatency() {
        return (Math.max(...cities.map(item => getTime(item))) / timeCoeff).toFixed(2);
        // единица измерения ms
    }

    function maxTime() {
        const result = (maxLatency() * timeCoeff / 1000).toFixed(2);
        // addTimes1(result);
        return result;
        // единица измерения sec.
    };

    // if (isAnimationShown1) {
    //     setTimeout(() => {
    //         setIsShownTime(true)
    //     }, maxTime() * 1000);
    // }


// проблема с запуском функции addTimes1(result); происходит зацикливание процесса, анимация не отключается ,
// соответственно вариант переключения с первой на вторую анимацию не сработал 




    return (
        <div className={`${s.main_box} ${s[continent]}`}>
            {isShowDevice === null && isShownExtraPeople &&
                <span className={s.first_man} onClick={onClickPeople} id={'first'}>
                    <span className={s.second_man} id={'second'}>
                        <span className={s.third_man} id={'third'}></span>
                    </span>
                </span>
            } 
            {isShowDevice >= 1 &&
                <div className={s.device_wrapper}>
                    {isShowDevice >= 1 &&
                        <span className={`${s.laptop} ${s[`${continent}_D`]}`} >
                            {isAnimationShown1 &&
                            <span className={s.thumb}>
                                <img src={laptopMask} alt="mask laptopMask" className={s.laptop_mask} style={{animationDuration: `${getTime(currentCities[0])}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice >= 2 &&
                        <span className={`${s.tablet} ${s[`${continent}_D`]}`} >
                            {isAnimationShown1 &&
                            <span className={s.thumb}>
                                <img src={tabletMask} alt="mask tabletMask" className={s.tablet_mask} style={{animationDuration: `${getTime(currentCities[1])}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice === 3 &&
                        <span className={`${s.mobile} ${s[`${continent}_D`]}`} >
                            {isAnimationShown1 &&
                            <span className={s.thumb}>
                                    <img src={mobileMask} alt="mask mobileMask" className={s.mobile_mask} style={{animationDuration: `${getTime(currentCities[2])}ms`}} />
                            </span>}
                        </span>}
                    {isAnimationShown1 && <p className={s.latency}>Latency:{maxLatency()}</p>}
                    {isAnimationShown1  && <p className={s.time}>Time:{maxTime()} sec</p>}
                </div>
            }
        </div>
    )
};

export default People;

        // if (continent === continents.EUROPA.name) {
        //     result = countOfServers.includes(serverLocations.FRANKFURT) ?
        //         data.find(item => item.server === serverLocations.FRANKFURT).clients[city] :
        //         data.find(item => item.server === serverLocations.SINGAPORE).clients[city];
        // }