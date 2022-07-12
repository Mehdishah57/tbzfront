import React, { useContext } from 'react';
import { UserContext } from '../global/UserContext';
import { Navigate } from "react-router-dom"

const Verification = ({Component}) => {
    const [user] = useContext(UserContext);

    if(!user?._id) return <Navigate to="/login" />
    if (!user?.verified) return <Navigate to="/verify" />
    return <Component />
}

export default Verification