import React from 'react';
import { useState } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';
import AuthButton from './AuthButton';
import ReCAPTCHA from 'react-google-recaptcha';
import Logo from '../Logo';
import '../../styles/components/LoginForm.css';

const LoginForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA!');
      return;
    }

    console.log('Form submitted!');
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    console.log('reCAPTCHA value:', value);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <Logo
            src="/assets/Bluestock Logos/SITE1.png?v=1"
            alt="Custom Logo"
            width="200px"
            className="custom-class"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon="fa-envelope"
          />
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            icon="fa-key"
          />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label>
              <input type="checkbox" /> Keep me signed in
            </label>
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <div className="recaptcha-container">
  <ReCAPTCHA
    sitekey="YOUR_SITE_KEY" // Replace with your Google reCAPTCHA site key
    onChange={handleRecaptchaChange}
  />
</div>


          <div className="auth-buttons-container">
            <AuthButton text="Login" type="submit" className="primary" />
            <div className="divider">
              <span>or sign in with</span>
            </div>
            <AuthButton icon= "fab fa-google"text="Continue with Google" className="danger" />
          </div>
        </form>

        <p className="text-center mt-3">
          <a href="/signup" className="create-account-link">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
