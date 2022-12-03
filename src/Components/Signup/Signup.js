import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="container-sm">
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Password" />
          </div>

          <div className="button">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
