import { useCallback, useEffect, useState } from 'react';
import { useUser } from '../userContext';
import laptopMask from '../assets/elements/small_mask.png';
import tabletMask from '../assets/elements/medium_mask.png';
import mobileMask from '../assets/elements/large_mask.png';
import { dataLength, data } from '../data/data';
import { continents, serverLocations, coefficients } from '../constants';
import s from './People.module.scss';

function People({ continent }) {
    const [isShowDevice, setIsShowDevice] = useState(null);
    const [cities, setCities] = useState([]);
    const [isShownTime, setIsShownTime] = useState(false);

    const { increaseContinents, isShownExtraPeople, isShownExtraServer, countOfServers, isAnimationShown1, isAnimationShown2, addTimes1, addTimes2, times1 } = useUser();
    
    const currentCities = Object.values(continents).find(item => item.name === continent).cities;

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
        if (countOfServers.length >= 3) {
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
            return (result * coefficients.animaCoeff).toFixed(2);
        } else {
            result = null;
        }
        return result;
        // единица измерения ms
    };

    function maxLatency() {
        return (Math.max(...cities.map(item => Number(getTime(item)))) / coefficients.animaCoeff).toFixed(2);
        // единица измерения ms
    }

    function maxTime() {
        const result = (maxLatency() * coefficients.timeCoeff / 1000).toFixed(2);
        return result;
        // единица измерения sec.
    };

    const showTime = () => {
        setIsShownTime(true);
    }

    console.log(times1)

    useEffect(() => {
        if (isAnimationShown1) {
            addTimes1((maxLatency() * coefficients.animaCoeff));
            console.log( Math.max(...cities.map(item => Number(getTime(item)))))
        }
    }, [isAnimationShown1])

    useEffect(() => {
        if (isAnimationShown1) {
            console.log(typeof maxTime())
            setTimeout(() => {
                showTime()
            }, (maxTime() * 1000));
        }
    }, [isAnimationShown1]);

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
                            {(isAnimationShown1 || isAnimationShown2) &&
                            <span className={s.thumb}>
                                <img src={laptopMask} alt="mask laptopMask" className={s.laptop_mask} style={{animationDuration: `${getTime(currentCities[0])}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice >= 2 &&
                        <span className={`${s.tablet} ${s[`${continent}_D`]}`} >
                            {(isAnimationShown1 || isAnimationShown2) &&
                            <span className={s.thumb}>
                                <img src={tabletMask} alt="mask tabletMask" className={s.tablet_mask} style={{animationDuration: `${getTime(currentCities[1])}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice === 3 &&
                        <span className={`${s.mobile} ${s[`${continent}_D`]}`} >
                            {(isAnimationShown1 || isAnimationShown2) &&
                            <span className={s.thumb}>
                                    <img src={mobileMask} alt="mask mobileMask" className={s.mobile_mask} style={{animationDuration: `${getTime(currentCities[2])}ms`}} />
                            </span>}
                        </span>}
                    {(isAnimationShown1 || isAnimationShown2) && !isShownTime && <p className={s.latency}>Latency:{maxLatency()}</p>}
                    {(isAnimationShown1 || isAnimationShown2) && isShownTime && <p className={s.time}>Time:{maxTime()} sec</p>}
                </div>
            }
        </div>
    )
};

export default People;
