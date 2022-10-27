import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbars from "../Components/Navbar/Navbars";

const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
