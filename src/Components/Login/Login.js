import React, { useContext } from "react";
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, resetPass } =
    useContext(AuthContext);
  const [errors, setErrors] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [inputEmail, setInputEmail] = useState("");

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
        toast.success("Successfully log in!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrors(error.message);
        toast.warning("log in error!", error.message);
        form.reset();
      });
  };

  //2.sign up with google
  const handlegoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("successfull google sign in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.warning("google sign in error");
      });
  };
  //3.sign up with github
  const handleGithubSignin = () => {
    githubSignIn()
      .then((result) => {
        console.log("github log in: ", result.user);
        toast.success("successfully github sign in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.warning("github sign in  error");
        console.log("github sign in error:", error);
      });
  };
  //4.reset or forget password
  const handleResetPass = () => {
    if (!inputEmail) {
      toast.warning("please! input an email");
    } else {
      resetPass(inputEmail)
        .then((result) => {
          console.log(result.use);
          toast.success("please check your email and set new password");
        })
        .catch((error) => {
          console.log(error);
          toast.warning("sorry! password reset error");
        });
    }
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
          onBlur={(e) => setInputEmail(e.target.value)}
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
        {errors && <p className="error-message">{errors}</p>}
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

      <Link
        onClick={handleResetPass}
        className="text-primary text-decoration-none ms-2"
      >
        forget password ?
      </Link>
    </div>
  );
};

export default Login;
