import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const AuthInfo = {
    Register,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
