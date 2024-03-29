import React, { useState} from "react";
import "./Login.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHanler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const getUserData = localStorage.getItem("isSignuped");

    if (getUserData && getUserData.length) {
      const userData = JSON.parse(getUserData);
      if (userData.enteredEmail === enteredEmail && userData.enteredPassword===enteredPassword) {
        props.onLogin(enteredEmail,enteredPassword)
      } else {
        alert("Email or Password is Wrong")
       }
    }
  };

  return (
    <div className="container-sm">
      <form onSubmit={submitHandler}>
        <div className="div-inputs">
          <div className="div-input">
            <span htmlFor="email">Email</span>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailHandler}
            />
          </div>
          <div className="div-input">
            <span htmlFor="password">password</span>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordHanler}
            />
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
