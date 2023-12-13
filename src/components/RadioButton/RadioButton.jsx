import React from "react";

export const RadioButton = ({ label, name, handleChange }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={label}
        id={label}
        onChange={handleChange}
      />
      <label htmlFor={label} className="radio-buttons">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
    </>
  );
};
