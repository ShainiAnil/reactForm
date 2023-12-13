import React from "react";
import { ucFirst } from "../../utils/utilities";

export const Radio = ({ label, options, name, type,handleCheckbox, errorFields }) => {
  return (
    <div className="input-section radio-groups">
      <label htmlFor={label}>
        {ucFirst(label)} <span className="danger">*</span>
      </label>
      <div>
        {options.map((option) => {
          return (
            <span key={option}>
              <input
                type={type}
                name={name}
                value={option.toLowerCase()}
                id={option}
                onChange={handleCheckbox}
              />
              <label htmlFor={option}className="radio-buttons">
                {ucFirst(option)}
              </label>
            </span>
          );
        })}
        
        {errorFields[label] && (
          <p className="danger">{ucFirst(label)} required</p>
        )}
      </div>
    </div>
  );
};
