import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginFail,
  loginSuccess,
} from "../../redux/slices/loginSlice";

const Login = () => {
  // fetch data from redux store
  const loginState = useSelector((store) => store["loggedIn"]);
  // access state
  const { user, isFetching: loading, error } = loginState;

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFail());
      console.log(error);
    }
  };
  console.log(user);

  // auto-focus email field
  useEffect(() => {
    emailRef.current.focus();
  }, []);

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
