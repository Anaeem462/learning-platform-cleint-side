import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.Uid) {
    return children;
  } else {
    <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
