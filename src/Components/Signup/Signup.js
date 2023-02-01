import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const changeFirstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHanlderForm = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "isSignuped",
      JSON.stringify({
        enteredFirstName,
        enteredLastName,
        enteredEmail,
        enteredPassword,
      })
    );

    enteredFirstName("");
    enteredLastName("");
    enteredEmail("");
    enteredPassword("");
  };

  return (
    <div className="container-sm">
      <form onSubmit={submitHanlderForm}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input
              type="text"
              placeholder="First Name"
              name="fisrtName"
              onChange={changeFirstNameHandler}
            />
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={changeLastNameHandler}
            />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeEmailHandler}
            />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changePasswordHandler}
            />
          </div>
          <div className="button">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
