// PrivateRoute.jsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const isAuthenticated = () => {
    const accessToken = localStorage.getItem('access_token');
    return accessToken !== null;
};

const PrivateRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default PrivateRoute;
