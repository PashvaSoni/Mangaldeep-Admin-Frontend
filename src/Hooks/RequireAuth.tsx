import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const RequireAuth = () => {
    const location = useLocation();
    const { User } = useAuth();
    return (
        <>
            {User.token?
                (<Outlet/>)
                :(<Navigate to={'/login'} state={{from:location}} replace/>)}
        </>      
    );
}

export default RequireAuth;