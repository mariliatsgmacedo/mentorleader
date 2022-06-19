import React from 'react';
import { Loading } from '../components/Loading';
import { useAuth } from '../hooks/useAuth';
import { Login } from '../pages/Login';
import { PrivateRoutes } from './private';

export const IndexRoutes = () => {
    const { authenticate, initialLoading } = useAuth();

    if (initialLoading) {
        return <Loading />
    } else {
        return authenticate ? <PrivateRoutes /> : <Login />
    }

}