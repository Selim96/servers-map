import { createContext, useContext, useState } from "react";
import { dataLength } from "./data/data";
// import { continents } from "./constants";

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
    const [times1, setTimes1] = useState([]);
    const [times2, setTimes2] = useState([]);

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
        if (countOfServers.length === 0) {
            setMainServer(city);
        }
        console.log(mainServer);
    };

    const addTimes1 = (newTime) => {
        setTimes1([...times1, newTime]);
    };

    const addTimes2 = (newTime) => {
        setTimes2([...times2, newTime]);
    };

    const togleAnimation1 = () => {
        setIsAnimationShown1(!isAnimationShown1);
    };
    
    const togleAnimation2 = () => {
        setIsAnimationShown2(!isAnimationShown2);
    };

    const startAnimation = () => {
        togleAnimation1();
        setTimeout(() => {
            togleAnimation1();
            // togleAnimation2();
            // setTimeout(() => {
            //     setIsShownResults(true);
            // }, Math.max(...times2)*1000 + 3000);
        }, (Math.max(...times1)*1000 + 3000));
    }

    return (
        <UserContext.Provider value={{
            countOfContinents,
            countOfServers,
            isShownExtraPeople,
            isShownExtraServer,
            mainServer,
            isAnimationShown1,
            isAnimationShown2,
            increaseContinents,
            increaseServers,
            hideExtraPeople,
            hideExtraServer,
            addMainServer,
            addTimes1,
            addTimes2,
            startAnimation
        }}>
        {children}
        </UserContext.Provider>
    );
};