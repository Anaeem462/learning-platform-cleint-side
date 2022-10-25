import React from "react";
import { createContext } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const user = { userName: "naeem" };
  const authinfo = { user };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
