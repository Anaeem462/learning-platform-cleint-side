import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="text-center h-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  }
  if (user && user.Uid) {
    return children;
  }

  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;
