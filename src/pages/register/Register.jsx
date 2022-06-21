import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <>
      <div className="login">
        <span className="loginTitle">Register</span>
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

          <button className="loginRegisterButton">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
