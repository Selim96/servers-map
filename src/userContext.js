import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data/data";
import { serverLocations, coefficients, continents } from "./constants";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [countOfContinents, setCountOfContinents] = useState([]);
    const [countOfServers, setCountOfServers] = useState([]);
    const [isShownExtraPeople, setIsShownExtraPeople] = useState(true);
    const [isShownExtraServer, setIsShownExtraServer] = useState(true);
    const [mainServer, setMainServer] = useState("");
    const [isAnimationShown1, setIsAnimationShown1] = useState(false);
    const [isAnimationShown2, setIsAnimationShown2] = useState(false);
    const [isShownResults, setIsShownResults] = useState(false);

    const increaseContinents = (newContinent) => {
        setCountOfContinents([...countOfContinents, newContinent]);
    };

    const increaseServers = (server) => {
        setCountOfServers([...countOfServers, server]);
    };

    const hideExtraPeople = () => {
        setIsShownExtraPeople(false);
    };

    const hideExtraServer = () => {
        setIsShownExtraServer(false);
    };

    const addMainServer = (city) => {
            setMainServer(city);
    };

    function getTime(continent, city) {
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
        return (result * coefficients.animaCoeff);
        // единица измерения ms
    };

    const getLatencyMainServer = (name, city) => {
        return data.find(item => item.server === mainServer).clients[city] * coefficients.animaCoeff;
    }

    const getArrOfLatency = (func) => {
        const result = countOfContinents.flatMap(({ name, cities }) => cities.map(item => Number(func(name, item).toFixed(2))))
        return result;
    };

    const onAnimation1 = () => {
        setIsAnimationShown1(true);
    };

    const offAnimation1 = () => {
        setIsAnimationShown1(false);
    };
    
    const onAnimation2 = () => {
        setIsAnimationShown2(true);
    };

    const offAnimation2 = () => {
        setIsAnimationShown2(false);
    };

    const showResult = () => {
        setIsShownResults(true);
    }

    const startAnimation = () => {
        console.log('start is clicked');
        onAnimation1();
        setTimeout(() => {
            offAnimation1();
            console.log('first done!!');
            onAnimation2();
            setTimeout(() => {
                // offAnimation2()
                showResult()
                console.log('second done!!');
            }, (Math.max(...getArrOfLatency(getTime))+3000));
        }, (Math.max(...getArrOfLatency(getTime))+1000));
    }

    useEffect(() => {
        console.log('context is rendered')
        if (!isShownExtraServer) {
            startAnimation()
        }
    }, [isShownExtraServer])

    return (
        <UserContext.Provider value={{
            countOfContinents,
            countOfServers,
            isShownExtraPeople,
            isShownExtraServer,
            mainServer,
            isAnimationShown1,
            isAnimationShown2,
            isShownResults,
            increaseContinents,
            increaseServers,
            hideExtraPeople,
            hideExtraServer,
            addMainServer,
            startAnimation,
            setIsShownExtraServer,
            getTime,
            getLatencyMainServer
        }}>
        {children}
        </UserContext.Provider>
    );
};