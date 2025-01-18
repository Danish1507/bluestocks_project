import React from 'react';
import '../../styles/components/InputField.css';

const InputField = ({ label, type, placeholder, onChange, value, icon }) => {
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
          type={type}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
