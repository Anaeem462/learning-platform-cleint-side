import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
    <section>
      <div className="  px-2 my-2 text-center">
        <div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_KDGBZxMksS.json"
            className=" text-warning w-50 h-50"
          ></Player>
        </div>
        <div className="text-center text-warning">
          <h2 className="">
            <span className="sr-only fs-1 fw-bolder">Error</span> 404
          </h2>
          <p className="text-primary">Sorry, we couldn't find this page.</p>
        </div>
        <Link to="/" className="">
          <Button>Back to homepage</Button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
//
