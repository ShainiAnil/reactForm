import React, { useState } from "react";
import { Fragment } from "react";
import { TextInput } from "./TextInput/TextInput";
const FormOne = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];

    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== event.target.value);
    }

    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
    //  isFormValidOnBlur(event);
  };
  console.log("Values", fields);
  return (
    <Fragment>
      <form autoComplete="off">
        <h1>Register</h1>
        <p className="caption">Please fill the form.</p>
        <div className="input-section">
          <label htmlFor="first-name">
            First Name <span className="danger">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="input-section">
          <label htmlFor="email">
            Email <span className="danger">*</span>
          </label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>

        <div className="input-section radio-groups">
          <label htmlFor="male">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleChange}
            />
            <label htmlFor="male" className="radio-buttons">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={handleChange}
            />
            <label htmlFor="female" className="radio-buttons">
              Female
            </label>
          </div>
        </div>
        <div className="input-section dropdown-section">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={handleChange}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
        </div>
        <div className="input-section radio-groups">
          <label htmlFor="skills">Skills</label>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              id="javascript"
              onChange={handleCheckbox}
            />
            <label htmlFor="javascript" className="radio-buttons">
              Javascript
            </label>
            <input type="checkbox" name="skills" value="React" id="react" onChange={handleCheckbox} />
            <label htmlFor="react" className="radio-buttons">
              React
            </label>
            <input type="checkbox" name="skills" value="Angular" id="angular"  onChange={handleCheckbox} />
            <label htmlFor="angular" className="radio-buttons">
              Angular
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default FormOne;
