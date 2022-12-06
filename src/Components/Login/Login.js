import React from "react";
import "./Login.css";

function Login() {
  const submitForm = (event) => {
    event.preventDefult();
  };

  return (
    <div className="container-sm">
      <form onSubmit={submitForm}>
        <div className="div-inputs">
          <div className="div-input">
            <span>Email</span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="div-input">
            <span>password</span>
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
