import React, { useState } from "react";
import { Fragment } from "react";
import { TextInput } from "./TextInput/TextInput";

import { Select } from "./Select/Select";
import { Radio } from "./Radio/Radio";

const countries = ["UAE", "India", "Qatar"]
const skills = ["Javascript", "React", "Angular"]
const gender = ["Male", "Female"]
const FormOne = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    dob: "",
    country: "",
    skills: [],
  });
  const [errorFields, setErrorFields] = useState({
    firstName: false,
    email: false,
    gender: false,
    dob: false,
    country: false,
    skills: false,
  });

  const handleChange = (event) => {
    console.log("hi");
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log("valid",fields);
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

        <TextInput
          handleChange={handleChange}
          errorFields={errorFields}
          label="Date Of Birth"
          id="dob"
          name="dob"
          type="date"
        />
        <Radio 
           type = "radio"
           label= "gender"
           name = "gender"
           options = {gender}
           handleCheckbox = {handleChange}
           errorFields = {errorFields}
        />

        <Select 
          label = "country"
          countries = {countries}
          handleChange = {handleChange}
          errorFields={errorFields}
        />
       <Radio
          type = "checkbox"
          label= "skills"
          name = "skills"
          options = {skills}
          handleCheckbox = {handleCheckbox}
          errorFields = {errorFields}
        />

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default FormOne;
