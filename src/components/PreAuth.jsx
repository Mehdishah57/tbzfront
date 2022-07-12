import React, { useContext } from 'react';
import { UserContext } from '../global/UserContext';
import { Navigate } from "react-router-dom"

const PreAuth = ({Component}) => {
    const [user] = useContext(UserContext);

    if (user?._id) return <Navigate to="/profile" />
    return <Component />
}

export default PreAuth