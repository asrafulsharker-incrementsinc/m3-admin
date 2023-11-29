// PrivateRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('access_token') !== null;

    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace state={{ from: rest.location }} />
    );
};

export default PrivateRoute;
