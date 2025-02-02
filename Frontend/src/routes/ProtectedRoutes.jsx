import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Change this logic as per authentication

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
