import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace with your authentication logic

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
