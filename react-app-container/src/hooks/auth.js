import React, { createContext, useState, useContext, useEffect } from "react";
import { listenEvent } from "@d3/utils";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@d3-mfe-zag:logged");

    return !!isLogged;
  });

  const signIn = (email, password) => {
    setIsLoading(true);
    if (email === "paulo@d3.do" && password === "123") {
      localStorage.setItem("@d3-mfe-zag:logged", "true");
      setLogged(true);
      setIsLoading(false);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@d3-mfe-zag:logged");
    setLogged(false);
  };

  useEffect(() => {
    listenEvent("@d3/react-menu/signout", () => {
      signOut();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ logged, signIn, signOut, isLoading: isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
