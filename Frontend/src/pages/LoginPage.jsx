import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import '../styles/pages/LoginPage.css';


const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <LoginForm />

      </div>
    </div>
  );
};

export default LoginPage;
