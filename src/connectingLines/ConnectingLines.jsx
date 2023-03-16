import { useUser } from '../userContext';
import { continents, serverLocations } from '../constants';

import losAngeles_bogota from '../assets/elements/arc_west-usa_south-america_large.png';
import losAngeles_brasilia from '../assets/elements/arc_west-usa_south-america_small.png';
import losAngeles_buenosAires from '../assets/elements/arc_west-usa_south-america_medium.png';
import losAngeles_chicago from '../assets/elements/arc_west-usa_north-america_small.png';
import losAngeles_dallas from '../assets/elements/arc_west-usa_north-america_medium.png';
import losAngeles_dhaka from '../assets/elements/arc_west-usa_asia_small.png';
import losAngeles_madrid from '../assets/elements/arc_west-usa_europe_medium.png';
import losAngeles_melbourne from '../assets/elements/arc_west-usa_oceania_large.png';
import losAngeles_moscow from '../assets/elements/arc_west-usa_europe_large.png';
import losAngeles_newDelhi from '../assets/elements/arc_west-usa_asia_medium.png';
import losAngeles_perth from '../assets/elements/arc_west-usa_oceania_medium.png';
import losAngeles_saltLakeCity from '../assets/elements/arc_west-usa_north-america_large.png';
import losAngeles_seoul from '../assets/elements/arc_west-usa_asia_large.png';
import losAngeles_sydney from '../assets/elements/arc_west-usa_oceania_small.png';
import losAngeles_warsaw from '../assets/elements/arc_west-usa_europe_small.png';

import newYork_bogota from '../assets/elements/arc_east-usa_south-america_large.png';
import newYork_brasilia from '../assets/elements/arc_east-usa_south-america_small.png';
import newYork_buenosAires from '../assets/elements/arc_east-usa_south-america_medium.png';
import newYork_chicago from '../assets/elements/arc_east-usa_north-america_small.png';
import newYork_dallas from '../assets/elements/arc_east-usa_north-america_medium.png';
import newYork_dhaka from '../assets/elements/arc_east-usa_asia_small.png';
import newYork_madrid from '../assets/elements/arc_east-usa_europe_medium.png';
import newYork_melbourne from '../assets/elements/arc_east-usa_oceania_large.png';
import newYork_moscow from '../assets/elements/arc_east-usa_europe_large.png';
import newYork_newDelhi from '../assets/elements/arc_east-usa_asia_medium.png';
import newYork_perth from '../assets/elements/arc_east-usa_oceania_medium.png';
import newYork_saltLakeCity from '../assets/elements/arc_east-usa_north-america_large.png';
import newYork_seoul from '../assets/elements/arc_east-usa_asia_large.png';
import newYork_sydney from '../assets/elements/arc_east-usa_oceania_small.png';
import newYork_warsaw from '../assets/elements/arc_east-usa_europe_small.png';

import singapore_bogota from '../assets/elements/arc_singapore_south-america_large.png';
import singapore_brasilia from '../assets/elements/arc_singapore_south-america_small.png';
import singapore_buenosAires from '../assets/elements/arc_singapore_south-america_medium.png';
import singapore_chicago from '../assets/elements/arc_singapore_north-america_small.png';
import singapore_dallas from '../assets/elements/arc_singapore_north-america_medium.png';
import singapore_dhaka from '../assets/elements/arc_singapore_asia_small.png';
import singapore_madrid from '../assets/elements/arc_singapore_europe_medium.png';
import singapore_melbourne from '../assets/elements/arc_singapore_oceania_large.png';
import singapore_moscow from '../assets/elements/arc_singapore_europe_large.png';
import singapore_newDelhi from '../assets/elements/arc_singapore_asia_medium.png';
import singapore_perth from '../assets/elements/arc_singapore_oceania_medium.png';
import singapore_saltLakeCity from '../assets/elements/arc_singapore_north-america_large.png';
import singapore_seoul from '../assets/elements/arc_singapore_asia_large.png';
import singapore_sydney from '../assets/elements/arc_singapore_oceania_small.png';
import singapore_warsaw from '../assets/elements/arc_singapore_europe_small.png';

import frankfurt_bogota from '../assets/elements/arc_germany_south-america_large.png';
import frankfurt_brasilia from '../assets/elements/arc_germany_south-america_small.png';
import frankfurt_buenosAires from '../assets/elements/arc_germany_south-america_medium.png';
import frankfurt_chicago from '../assets/elements/arc_germany_north-america_small.png';
import frankfurt_dallas from '../assets/elements/arc_germany_north-america_medium.png';
import frankfurt_dhaka from '../assets/elements/arc_germany_asia_small.png';
import frankfurt_madrid from '../assets/elements/arc_germany_europe_medium.png';
import frankfurt_melbourne from '../assets/elements/arc_germany_oceania_large.png';
import frankfurt_moscow from '../assets/elements/arc_germany_europe_large.png';
import frankfurt_newDelhi from '../assets/elements/arc_germany_asia_medium.png';
import frankfurt_perth from '../assets/elements/arc_germany_oceania_medium.png';
import frankfurt_saltLakeCity from '../assets/elements/arc_germany_north-america_large.png';
import frankfurt_seoul from '../assets/elements/arc_germany_asia_large.png';
import frankfurt_sydney from '../assets/elements/arc_germany_oceania_small.png';
import frankfurt_warsaw from '../assets/elements/arc_germany_europe_small.png';
import s from './ConnectingLines.module.scss';

const images = {
    losAngeles_bogota,
    losAngeles_brasilia,
    losAngeles_buenosAires,
    losAngeles_chicago,
    losAngeles_dallas,
    losAngeles_dhaka,
    losAngeles_madrid,
    losAngeles_melbourne,
    losAngeles_moscow,
    losAngeles_newDelhi,
    losAngeles_perth,
    losAngeles_saltLakeCity,
    losAngeles_seoul,
    losAngeles_sydney,
    losAngeles_warsaw,
    newYork_bogota,
    newYork_brasilia,
    newYork_buenosAires,
    newYork_chicago,
    newYork_dallas,
    newYork_dhaka,
    newYork_madrid,
    newYork_melbourne,
    newYork_moscow,
    newYork_newDelhi,
    newYork_perth,
    newYork_saltLakeCity,
    newYork_seoul,
    newYork_sydney,
    newYork_warsaw,
    singapore_bogota,
    singapore_brasilia,
    singapore_buenosAires,
    singapore_chicago,
    singapore_dallas,
    singapore_dhaka,
    singapore_madrid,
    singapore_melbourne,
    singapore_moscow,
    singapore_newDelhi,
    singapore_perth,
    singapore_saltLakeCity,
    singapore_seoul,
    singapore_sydney,
    singapore_warsaw,
    frankfurt_bogota,
    frankfurt_brasilia,
    frankfurt_buenosAires,
    frankfurt_chicago,
    frankfurt_dallas,
    frankfurt_dhaka,
    frankfurt_madrid,
    frankfurt_melbourne,
    frankfurt_moscow,
    frankfurt_newDelhi,
    frankfurt_perth,
    frankfurt_saltLakeCity,
    frankfurt_seoul,
    frankfurt_sydney,
    frankfurt_warsaw
}

function ConnectingLines() {
    const { isAnimationShown1, isAnimationShown2, countOfContinents, countOfServers, mainServer } = useUser();
    
    const cities = countOfContinents.flatMap(item => item.cities);
    // console.log(cities)

    return (
        <div className={s.container}>
            {isAnimationShown1 &&
                <ul className={s.listOfLines}>
                    {countOfContinents.flatMap(({ name, cities }) => {
                        let server;
                        switch (name) {
                            case continents.EUROPA.name:
                                server = countOfServers.includes(serverLocations.FRANKFURT) ?
                                    serverLocations.FRANKFURT : serverLocations.SINGAPORE;
                                break;
                            case continents.ASIA.name:
                                server = countOfServers.includes(serverLocations.SINGAPORE) ?
                                    serverLocations.SINGAPORE : serverLocations.FRANKFURT;
                                break;
                            case continents.AUSTRALIA.name:
                                server = countOfServers.includes(serverLocations.SINGAPORE) ?
                                    serverLocations.SINGAPORE :
                                    serverLocations.FRANKFURT;
                                break;
                            case continents.NORTH_AMERICA.name:
                                server = countOfServers.includes(serverLocations.NEWYORK) ?
                                    serverLocations.NEWYORK : serverLocations.LOSANGELES;
                                break;
                            case continents.SOUTH_AMERICA.name:
                                server = countOfServers.includes(serverLocations.LOSANGELES) ?
                                    serverLocations.LOSANGELES : serverLocations.NEWYORK;
                                break;
                            default:
                                console.log("Invalid subscription type")
                        }
                        return cities.map(item => 
                        <li key={item} className={`${s.item} ${server}_${item}`}><img src={images[`${server}_${item}`]} alt="lines connected with server" className={s.line} /></li>
                    )}
                        )}
                </ul>}
            {isAnimationShown2 &&
                <ul className={s.listOfLines}>
                    {countOfContinents.flatMap(({ name, cities }) => {
                        return cities.map(item => 
                        <li key={item} className={`${s.item} ${mainServer}_${item}`}><img src={images[`${mainServer}_${item}`]} alt="lines connected with server" className={s.line} /></li>
                    )}
                        )}
                </ul>}
        </div>
    )
}

export default ConnectingLines;