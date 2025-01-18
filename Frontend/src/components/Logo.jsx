import React from 'react';

const Logo = ({ src , alt = "Logo", width = "150px", height = "auto", className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`img-fluid ${className}`}
      style={{ width, height }}
    />
  );
};

export default Logo;
