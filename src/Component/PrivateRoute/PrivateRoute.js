import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import LoadingPage from '../LoadingPage/LoadingPage'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>
    } else {

        if (user) {
            return children
        } else {
            return <Navigate to='/login' state={{ from: location }} />
        }
    }
};

export default PrivateRoute;