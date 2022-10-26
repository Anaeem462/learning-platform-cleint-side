import React, { useContext } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import "./login.css";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    //1. sign in email & password
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  //2.sign up with google
  const handlegoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  //3.sign up with github
  const handleGithubSignin = () => {
    githubSignIn()
      .then((result) => {
        console.log("github log in: ", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("github sign in error:", error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">Email</label>
        <input
          required
          name="email"
          className="login-input"
          type="email"
          placeholder="Your Email"
        />
        <label className="login-label">Password</label>
        <input
          name="password"
          className="login-input"
          type="password"
          placeholder="password"
        />
        <button className="login-btn">Login</button>

        <p className="text-light mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="ms-2 text-decoration-none">
            Sign up first
          </Link>
        </p>
      </form>
      <button
        onClick={handlegoogleSignin}
        className="me-3 bg-primary border-0 p-2 px-3 rounded text-light"
      >
        <FaGoogle></FaGoogle>
      </button>
      <button
        onClick={handleGithubSignin}
        className="ms-3 bg-primary border-0 p-2 px-3 rounded text-light"
      >
        <FaGithubAlt></FaGithubAlt>
      </button>
    </div>
  );
};

export default Login;
