import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginFail,
  loginsyccess,
} from "../../redux/slices/loginSlice";

const Login = () => {
  // fetch data from redux store
  const loginState = useSelector((store) => store["loggedIn"]);

  const { loginStatus } = loginState;
  const disatch = useDispatch();

  console.log(loginStatus);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // setState((state.isFetching = true));
    // console.log(state.isFetching);

    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      // setState((state.isFetching = false));
      // console.log(state.isFetching);

      // setState((state.user = res.data));
    } catch (error) {
      // setState((state.error = true));
      // console.log(error.response.data);
    }
  };
  // console.log(state.user);

  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>

        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
            ref={emailRef}
          />

          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            ref={passwordRef}
          />

          <button type="submit" className="loginButton">
            Login
          </button>

          <p className="!mt-10">
            Don't have an account? Register{" "}
            <Link to="/register" className="register">
              here
            </Link>{" "}
            today
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
