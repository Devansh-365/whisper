import React, { createContext, useState, useEffect } from "react";
import { authStatus } from "../api/users";
import Cookies from "js-cookie";

export const AuthContext = createContext({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const checkAuthStatus = await authStatus();
      setIsAuthenticated(
        checkAuthStatus === "OK" && Cookies.get("connect.sid") !== undefined
      );
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
