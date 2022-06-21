import React from "react";
import "./login.scss";
const Login = () => {
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>

          <p>Don't have an account? Register here today</p>
          <button className="loginRegisterButton">Register</button>
        </form>
      </div>
    </>
  );
};

export default Login;
