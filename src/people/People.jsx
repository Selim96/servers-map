import { useState } from 'react';
import { useUser } from '../userContext';
import laptopMask from '../assets/elements/small_mask.png';
import tabletMask from '../assets/elements/medium_mask.png';
import mobileMask from '../assets/elements/large_mask.png';
import { dataLength } from '../data/data';
import { continents } from '../constants';
import s from './People.module.scss';

function People({ continent }) {
    const [isShowDevice, setIsShowDevice] = useState(null);

    const { increaseContinents, isShownExtraPeople, isShownExtraServer, countOfServers } = useUser();
    
    const currentCities = Object.values(continents).find(item=>item.name === continent).cities;

    const onClickPeople = (e) => {
        let newContinent;
        switch (e.target.id) {
            case 'first':
                setIsShowDevice(1);
                newContinent = {name: continent, cities: [currentCities[0]]}
                break;
            case 'second':
                setIsShowDevice(2);
                newContinent = {name: continent, cities: [currentCities[0], currentCities[1]]}
                break;
            case 'third':
                setIsShowDevice(3);
                newContinent = {name: continent, cities: [currentCities[0], currentCities[1], currentCities[2]]}
                break;
            default:
                console.log("Invalid subscription type")
        }
        increaseContinents(newContinent);
    };


    const duration = 2000;

    return (
        <div className={`${s.main_box} ${s[continent]}`}>
            {isShowDevice === null && isShownExtraPeople ?
                <span className={s.first_man} onClick={onClickPeople} id={'first'}>
                    <span className={s.second_man} id={'second'}>
                        <span className={s.third_man} id={'third'}></span>
                    </span>
                </span> : 
                <div className={s.device_wrapper}>
                    {isShowDevice >= 1 &&
                        <span className={`${s.laptop} ${s[`${continent}_D`]}`} >
                            {(countOfServers.length === dataLength || !isShownExtraServer) &&
                            <span className={s.thumb}>
                                <img src={laptopMask} alt="mask laptopMask" className={s.laptop_mask} style={{animationDuration: `${duration}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice >= 2 &&
                        <span className={`${s.tablet} ${s[`${continent}_D`]}`} >
                            {(countOfServers.length === dataLength || !isShownExtraServer) &&
                            <span className={s.thumb}>
                                <img src={tabletMask} alt="mask tabletMask" className={s.tablet_mask} style={{animationDuration: `${duration}ms`}}/>
                            </span>}
                        </span>}
                    {isShowDevice === 3 &&
                        <span className={`${s.mobile} ${s[`${continent}_D`]}`} >
                            {(countOfServers.length === dataLength || !isShownExtraServer) &&
                            <span className={s.thumb}>
                                    <img src={mobileMask} alt="mask mobileMask" className={s.mobile_mask} style={{animationDuration: `${duration}ms`}} />
                            </span>}
                        </span>}
                    <p>Time:{duration}</p>
                </div>
            }
        </div>
    )
};

export default People;