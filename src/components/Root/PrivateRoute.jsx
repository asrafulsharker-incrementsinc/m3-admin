// PrivateRoute.jsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const isAuthenticated = () => {
    // Check the access token for authentication. Replace this logic with your actual authentication check.
    const accessToken = localStorage.getItem('access_token');
    return accessToken !== null;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated() ? (
        <Routes>
            <Route {...rest} element={<Element {...rest} />} />
        </Routes>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;
