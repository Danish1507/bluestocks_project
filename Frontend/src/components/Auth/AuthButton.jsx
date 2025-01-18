import React from 'react';
import '../../styles/components/AuthButton.css';

const AuthButton = ({ text, type = 'button', className, icon }) => {
  return (
    <button type={type} className={`auth-button ${className}`}>
      {icon && <i className={`fab ${icon}`}></i>} {text}
    </button>
  );
};

export default AuthButton;
