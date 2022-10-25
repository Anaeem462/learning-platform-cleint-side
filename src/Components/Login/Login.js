import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form">
        <label className="login-label">Email</label>
        <input className="login-input" type="text" placeholder="Your Email" />
        <label className="login-label">Password</label>
        <input className="login-input" type="password" placeholder="password" />
        <button className="login-btn">Login</button>

        <p className="text-light mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="ms-2 text-decoration-none">
            Sign up first
          </Link>
        </p>
      </form>
      <button className="me-3 bg-primary border-0 p-2 px-3 rounded text-light">
        <FaGoogle></FaGoogle>
      </button>
      <button className="ms-3 bg-primary border-0 p-2 px-3 rounded text-light">
        <FaGithubAlt></FaGithubAlt>
      </button>
    </div>
  );
};

export default Login;
