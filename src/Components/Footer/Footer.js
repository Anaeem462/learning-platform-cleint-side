import React from "react";
import { useContext } from "react";
import { FaGift, FaGithubAlt, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthProvider";
import "../Theme/Themes.css";
const Footer = () => {
  const { themesNumber } = useContext(AuthContext);
  return (
    <footer className="relative">
      <div
        className={`absolute-bottom mt-5 w-100 text-center pt-2 pb-2 text-light ${themesNumber}`}
      >
        <p className="m-0 p-1">Copyright@: author</p>
        <p className="m-0 p-1">
          Abdullah Naeem <small>Web-developer</small>
        </p>
        <p className="m-0 p-1">
          Student of <small>@programming-hero</small>
        </p>
        <p className="m-0 p-1"> Rangamati,Bangladesh</p>
        <div className="">
          <FaGoogle className="mx-3"></FaGoogle>
          <FaGithubAlt className="mx-3"></FaGithubAlt>
          <FaGift className="mx-3"></FaGift>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
