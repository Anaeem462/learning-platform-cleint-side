import React from "react";
import { Button, Image } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row gap-2 my-4  align-items-center justify-content-center">
      <div className="col-xl-5 col-md-7 col-12">
        <Player
          src="https://assets8.lottiefiles.com/private_files/lf30_obidsi0t.json"
          className="player"
        ></Player>
      </div>
      <div className="col-xl-4 col-md-3 col-12 ms-md-0 ms-4">
        <h1 className="fw-bold fs-1 ">
          {" "}
          <span className="text-primary">Learn without</span> <br /> limits
        </h1>
        <p>
          Start switch, or advance your career with more than 5,200 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>
        <Link to="/courses">
          <Button className="px-4 me-3 my-2 py-3  border-0 rounded-0">
            View Course
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="px-4 py-3 ms-3 border-0 rounded -0 rounded-0">
            {" "}
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
