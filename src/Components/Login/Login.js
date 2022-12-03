import React from "react";
import './Login.css';

function Login() {
  return (
    <div className="container-sm"><form>
      <div className="div-inputs">
        
          <div className="div-input">
            <span>Email</span>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="div-input">
            <span>password</span>
            <input type="email" placeholder="Password" />
          </div>
          <div className="login-button">
             <button type="submit">Login</button>
          </div></div>
        </form>
      
    </div>
  );
}

export default Login;
