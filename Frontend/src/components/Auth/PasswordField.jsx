import React, { useState } from 'react';
import '../../styles/components/PasswordField.css';

const PasswordField = ({ label, placeholder, onChange, value,icon }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
      {icon && (
          <span className="input-group-text">
            <i className={`fa ${icon}`}></i>
          </span>
        )}
        <input
          type={visible ? 'text' : 'password'}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setVisible(!visible)}
        >
          <i className={`fa ${visible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
