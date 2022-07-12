import { createContext, useState } from "react";
import useRefresh from "../hooks/useRefresh";
import Loader from "../components/Loader";

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const {isLoading} = useRefresh(setUser);

    if(isLoading) return <Loader />
    return <UserContext.Provider value={[user, setUser]}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;