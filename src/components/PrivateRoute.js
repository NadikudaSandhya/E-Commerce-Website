import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with your authentication logic
  return (
    <Route
      render={() =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
