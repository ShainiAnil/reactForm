import React from 'react'
import { ucFirst } from '../../utils/utilities'
export const Select = ({label, countries, handleChange,errorFields}) => {
  return (
    <div className="input-section dropdown-section">
          <label htmlFor={label}>
          {ucFirst(label)} <span className="danger">*</span>
          </label>
          <select name={label} id={label} onChange={handleChange}>
            <option value="">Select</option>
            {
                countries.map(country =>(<option value={country.toLowerCase()} key={country}>{country}</option>))
            }
            
          </select>
          {errorFields[label]&& <p className="danger">{ucFirst(label)} is required</p>}
        </div>
  )
}

