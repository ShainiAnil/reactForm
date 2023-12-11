import React, { useState } from "react";
import { Fragment } from "react";
import { TextInput } from "./TextInput/TextInput";
const FormOne = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    dob: "",
    country: "",
    skills: [],
  });
  const [currentDate, setCurrentDate] = useState("");

  const [errorFields, setErrorFields] = useState({
    firstName: false,
    email: false,
    gender: false,
    dob: false,
    country: false,
    skills: false,
  });

  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const current = new Date();

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log("valid");
      alert("Submitted!");
      return;
    }
    console.log("Invalid");
  };

  const isFormValid = () => {
    const errors = {
      firstName: false,
      email: false,
      gender: false,
      dob: false,
      country: false,
      skills: false,
    };

    Object.keys(fields).map((key) => {
      if (fields[key] === "") {
        errors[key] = true;
      }
      if (key === "skills" && fields[key].length === 0) {
        errors[key] = true;
      }
      if (
        key === "dob" &&
        new Date(fields[key]).getTime() > new Date().getTime()
      ) {
        errors[key] = true;
      }
    });

    setErrorFields(errors);
    if (Object.values(errors).some((value) => value === true)) {
      return false;
    }
    return true;
  };
  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;

    let error = false;
    if (value === "") {
      error = true;
    }
    if (name === "dob" && new Date(value).getTime() > new Date().getTime()) {
      error = true;
    }
    if (name === "gender" && event.target.checked === false) {
      error = true;
    }
    if (name === "skills" && event.target.checked === false) {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <Fragment>
      <form autoComplete="off" onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>
        <p className="caption">Please fill the form.</p>
        <TextInput
          handleChange={handleChange}
          errorFields={errorFields}
          label="First Name"
          id="first-name"
          name="firstName"
          type="text"
        />
        <TextInput
          handleChange={handleChange}
          errorFields={errorFields}
          label="Email"
          id="email"
          name="email"
          type="email"
        />

        <div className="input-section radio-groups">
          <label htmlFor="">
            Gender <span className="danger">*</span>
          </label>
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
            {errorFields.gender && <p className="danger">Gender is required</p>}
          </div>
        </div>
        <div className="input-section input-date">
          <label htmlFor="dob">
            Date Of Birth <span className="danger">*</span>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            min="1940-01-01"
            onChange={handleChange}
          />
          {errorFields.dob && (
            <p className="danger">Date of Birth is required</p>
          )}
        </div>
        <div className="input-section dropdown-section">
          <label htmlFor="country">
            Country <span className="danger">*</span>
          </label>
          <select name="country" id="country" onChange={handleChange}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
          {errorFields.country && <p className="danger">Country is required</p>}
        </div>
        <div className="input-section radio-groups">
          <label htmlFor="skills">
            Skills <span className="danger">*</span>
          </label>
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
            <input
              type="checkbox"
              name="skills"
              value="React"
              id="react"
              onChange={handleCheckbox}
            />
            <label htmlFor="react" className="radio-buttons">
              React
            </label>
            <input
              type="checkbox"
              name="skills"
              value="Angular"
              id="angular"
              onChange={handleCheckbox}
            />
            <label htmlFor="angular" className="radio-buttons">
              Angular
            </label>
            {errorFields.skills && <p className="danger">Skills required</p>}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default FormOne;
