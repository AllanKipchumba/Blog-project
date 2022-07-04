import axios from "axios";
import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      // console.log(res.data.user);
      res.data && window.location.replace("/");
    } catch (error) {
      setError(true);
      // console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        <span className="loginTitle">Register</span>

        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="loginRegisterButton" type="submit">
            Register
          </button>
        </form>

        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error && (
          <span className="mt-[10px] text-[red]">Something went wrong!</span>
        )}
      </div>
    </>
  );
};

export default Register;
