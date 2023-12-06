import React from "react";
import { Fragment } from "react";
import { TextInput } from "./TextInput/TextInput";
const FormTwo = () => {
  return (
    <Fragment>
      <form>
        <h1>Register2</h1>
        <p className="caption">Please fill the form.</p>
        <div className="input-section">
          <label htmlFor="First Name">
            First Name <span className="danger">*</span>
          </label>
          <input type="text" id="first-name" name="firstName" />
        </div>
        <div className="input-section">
          <label htmlFor="Email">
            Email <span className="danger">*</span>
          </label>
          <input type="email" id="email" name="email"  />
        </div>

        <div className="input-section radio-groups">
          <label htmlFor="">Gender</label>
          <div>
            <input type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male" className="radio-buttons">
              Male
            </label>
            <input type="radio" name="gender" value="female" id="female" />
            <label htmlFor="female" className="radio-buttons">
              Female
            </label>
          </div>
        </div>
        <div className="input-section dropdown-section">
          <label htmlFor="">Country</label>
          <select name="country" id="">
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
            />
            <label htmlFor="javascript" className="radio-buttons">
              Javascript
            </label>
            <input type="checkbox" name="skills" value="React" id="react" />
            <label htmlFor="react" className="radio-buttons">
              React
            </label>
            <input type="checkbox" name="skills" value="Angular" id="angular" />
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

export default FormTwo;
