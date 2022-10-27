import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import "./Themes.css";

const Themes = () => {
  const { themesNumber, setThemesNumber } = useContext(AuthContext);
  return (
    <div className="row text-center mt-4" style={{ height: "500px" }}>
      <div
        onClick={() => setThemesNumber("bg-dark")}
        className="col-3 bg-dark w-25 h-100 text-light"
      >
        Dark Themes
      </div>
      <div
        onClick={() => setThemesNumber("bg-primary")}
        className="col-3 bg-primary  w-25 h-100 text-dark"
      >
        primary Theme
      </div>
      <div
        onClick={() => setThemesNumber(" bg-normal ")}
        className="col-3 bg-normal text-primary w-25 h-100"
      >
        normal Themes
      </div>
      <div
        onClick={() => setThemesNumber("bg-monoki")}
        className="col-3 bg-monoki text-primary w-25 h-100"
      >
        monoki Themes
      </div>
    </div>
  );
};

export default Themes;
