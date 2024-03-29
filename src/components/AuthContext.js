import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const login = (email, password) => {
   
    console.log("Logging in", email, password);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
