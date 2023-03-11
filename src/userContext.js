import { createContext, useContext, useState } from "react";
import { dataLength } from "./data/data";
import { continents } from "./constants";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [countOfPeopleClicked, setCountOfPeopleClicked] = useState(0);
    const [countOfServers, setCountOfServers] = useState(0);
    const [isShownExtraPeople, setIsShownExtraPeople] = useState(true);
    const [isShownExtraServer, setIsShownExtraServer] = useState(true);
    const [mainServer, setMainServer] = useState("");

    const increasePeople = () => {
        setCountOfPeopleClicked(countOfPeopleClicked + 1);
    };

    const increaseServers = () => {
        setCountOfServers(countOfServers + 1);
    };

    const hideExtraPeople = () => {
        setIsShownExtraPeople(false);
    };

    const hideExtraServer = () => {
        setIsShownExtraServer(false);
    };

    const setAllPeople = () => {
        setCountOfPeopleClicked(Object.keys(continents).length);
    };

    const setAllServers = () => {
        setCountOfServers(dataLength);
    };

    const addMainServer = (city) => {
        if (countOfServers === 0) {
            setMainServer(city);
        }
        console.log(mainServer);
    }

    return (
        <UserContext.Provider value={{
            countOfPeopleClicked,
            countOfServers,
            isShownExtraPeople,
            isShownExtraServer,
            mainServer,
            increasePeople,
            increaseServers,
            setAllPeople,
            hideExtraPeople,
            hideExtraServer,
            setAllServers,
            addMainServer
        }}>
        {children}
        </UserContext.Provider>
    );
};