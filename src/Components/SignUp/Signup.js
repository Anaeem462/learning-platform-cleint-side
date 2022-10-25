import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import ".././Login/login.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="login-title">
        Sign up <SiGnuprivacyguard />
      </div>
      <form className="login-form">
        <label className="login-label">Full Name</label>
        <input
          name="name"
          className="login-input"
          type="text"
          placeholder="Your Name"
        />
        <label className="login-label">Photo-Url</label>
        <input
          name="photo-Url"
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
        />
        <label className="login-label">PassWord</label>
        <input
          name="password"
          type="password"
          className="login-input"
          placeholder="password"
        />

        <button className="login-btn">Sign up</button>
        <p className="text-light mt-2">
          Already Have an Account?
          <Link className="ms-2 text-decoration-none" to="/login">
            log in
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

export default Signup;
