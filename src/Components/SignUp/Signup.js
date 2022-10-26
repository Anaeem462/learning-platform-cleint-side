import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import ".././Login/login.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Signup = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    //1. sign up email & password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  //2. sign up with google
  const handlegoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  //3.sign up with github
  const handleGithubSignin = () => {
    githubSignIn()
      .then((result) => {
        console.log("github log in: ", result.user);
      })
      .catch((error) => {
        console.log("github sign in error:", error);
      });
  };
  return (
    <div className="signup-container">
      <div className="login-title">
        Sign up <SiGnuprivacyguard />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">Full Name</label>
        <input
          name="name"
          className="login-input"
          type="text"
          placeholder="Your Name"
          required
        />
        <label className="login-label">Photo-Url</label>
        <input
          name="photoUrl"
          className="login-input"
          type="url"
          placeholder="Your photoURl"
        />
        <label className="login-label">Email</label>
        <input
          name="email"
          className="login-input"
          type="text"
          placeholder="Your Email"
          required
        />
        <label className="login-label">PassWord</label>
        <input
          name="password"
          type="password"
          className="login-input"
          placeholder="password"
          required
        />

        <button className="login-btn" type="submit">
          Sign up
        </button>
        <p className="text-light mt-2">
          Already Have an Account?
          <Link className="ms-2 text-decoration-none" to="/login">
            log in
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

export default Signup;
