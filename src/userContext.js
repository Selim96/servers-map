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
    const [isAnimationShown, setIsAnimationShown] = useState(false);

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
    }

    const togleAnimation = () => {
        setIsAnimationShown(!isAnimationShown);
    }

    return (
        <UserContext.Provider value={{
            countOfContinents,
            countOfServers,
            isShownExtraPeople,
            isShownExtraServer,
            mainServer,
            increaseContinents,
            increaseServers,
            hideExtraPeople,
            hideExtraServer,
            addMainServer
        }}>
        {children}
        </UserContext.Provider>
    );
};