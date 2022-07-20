import React , { createContext, useContext, useState } from "react";
import Loader from "../components/Loader";
import useGetCountry from "../hooks/useGetCountry";
import { UserContext } from "./UserContext";

export const CountryContext = createContext();

const CountryProvider = ({children}) => {
    const [ user ] = useContext(UserContext);
    const [ country, setCountry ] = useState(user.country||"");
    const { countries, isLoading } = useGetCountry();

    if(isLoading) return <Loader />
    return <CountryContext.Provider value={{countries, country, setCountry}}>
        {children}
    </CountryContext.Provider>
}

export default CountryProvider;