import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [countOfPeopleClicked, setCountOfPeopleClicked] = useState(0);
    const [countOfServers, setCountOfServers] = useState(0);
    const [isShownExtraPeople, setIsShownExtraPeople] = useState(true);

    const increasePeople = () => {
        setCountOfPeopleClicked(countOfPeopleClicked + 1);
    };
    
    const setAllPeople = () => {
        setCountOfPeopleClicked(5);
    };

    const increaseServers = () => {
        setCountOfServers(countOfServers + 1);
    }

    const hideExtraPeople = () => {
        setIsShownExtraPeople(false);
    }

    console.log(countOfPeopleClicked)

    return (
        <UserContext.Provider value={{ countOfPeopleClicked, countOfServers, increasePeople, increaseServers, setAllPeople, isShownExtraPeople,  hideExtraPeople}}>
        {children}
        </UserContext.Provider>
    );
};