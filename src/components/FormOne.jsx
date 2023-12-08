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
  // const [checked, setChecked] = useState(false)
  const [errorFields, setErrorFields] = useState({
    firstName: false,
    email: false,
    gender: false,
    country: false,
    skills: false,
  });
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    isFormValidOnBlur(event)
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
  //console.log("Values", fields);
  const handleSubmit = (event) =>{
    event.preventDefault()
    if(isFormValid()){
      console.log("valid")
      return;
    }
    console.log("Invalid");
  }
  // const isFormValid = () => {
  //   if (fields.firstName === "") {
  //     setErrorFields((prev) => ({
  //       ...prev,
  //       firstName: true,
  //     }));
  //     return false;
  //   }
  //   else{
  //     setErrorFields((prev) => ({
  //       ...prev,
  //       firstName: false,
  //     }));
  //     return true;
  //   }
    
  // };
  const isFormValid = () => {
    const errors = {
      firstName: false,
      email: false,
      gender: false,
      country: false,
      skills: false,
    }
    Object.keys(fields).map(key => {
     if( fields[key] === ""){
      errors[key] = true
     }
     if(key === 'skills' && fields[key].length ===0){
      errors[key] = true
     }
    })
    // if(fields.firstName === ""){
    //   errors.firstName = true;
    // }
    // if(fields.email === ""){
    //   errors.email = true;
    // }
    // if(fields.gender=== ""){
    //   errors.gender= true;
    // }
    // if(fields.country=== ""){
    //   errors.country = true;
    // }
    // if(fields.skills.length === 0){
    //   errors.skills = true;
    // }
    setErrorFields(errors)
    if(Object.values(errors).some((value)=>value === true)){
      return false
    }
    return true
  }
  const isFormValidOnBlur = (event) =>{
    const {name, value} = event.target;
  
    let error = false;
    if(fields[name]=== ""){
      error = true
    }
   
    if(name === 'skills' && fields[name].length=== 0){
      error = true
    }
   
    setErrorFields(prev => ({
      ...prev,
      [name] : error
    }))
    
  }

  return (
    <Fragment>
      <form autoComplete="off" onSubmit={handleSubmit} noValidate>
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
            onBlur={isFormValidOnBlur}
          />
          {errorFields.firstName && (
            <p className="danger">First Name is required</p>
          )}
        </div>
        <div className="input-section">
          <label htmlFor="email">
            Email <span className="danger">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={handleChange} 
            onBlur={isFormValidOnBlur} />
          {errorFields.email && <p className="danger">Email is required</p>}
        </div>

        <div className="input-section radio-groups">
          <label htmlFor="">Gender <span className="danger">*</span></label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
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
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="female" className="radio-buttons">
              Female
            </label>
            {errorFields.gender && <p className="danger">Gender is required</p>}
          </div>
        </div>
        <div className="input-section dropdown-section">
          <label htmlFor="country">Country <span className="danger">*</span></label>
          <select name="country" id="country" onChange={handleChange} onBlur={isFormValidOnBlur}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
          {errorFields.country && <p className="danger">Country is required</p>}
        </div>
        <div className="input-section radio-groups">
          <label htmlFor="skills">Skills <span className="danger">*</span></label>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              id="javascript"
             
              onBlur={isFormValidOnBlur}
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
              onBlur={isFormValidOnBlur}
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
              onBlur={isFormValidOnBlur}
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
