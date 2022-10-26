import React, { useEffect, useState } from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/auto-firebase";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);
    });
    return () => unsubscribe();
  }, []);

  const authinfo = {
    createUser,
    signIn,
    user,
    googleSignIn,
    githubSignIn,
    logOut,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
