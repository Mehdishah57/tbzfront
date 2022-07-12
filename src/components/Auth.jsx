import React, { useContext } from 'react'
import { UserContext } from '../global/UserContext';
import { Navigate } from "react-router-dom"

const Auth = ({ Component }) => {
    const [user] = useContext(UserContext);

    if (!user?._id) return <Navigate to="/login" />
    return <Component />
}

export default Auth;