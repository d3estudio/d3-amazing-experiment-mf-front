import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

import { listenEvent, emitEvent } from "@d3/utils";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@d3-mfe-zag:logged");

    return !!isLogged;
  });

  const signIn = async(email, password) => {
    setIsLoading(true);
    
    try {
     
      const response = await axios.post("http://localhost:3005/v1/login", { email:email, password:password });
      const data = response.data; 
      emitEvent('@d3/react-app-container/token', {token: data.token});

      
      localStorage.setItem("@d3-mfe-zag:logged", "true");
      localStorage.setItem("@d3-mfe-zag:data", JSON.stringify(data));
      localStorage.setItem("@d3-mfe-zag:token", JSON.stringify(data.token));

      setLogged(true);
      setIsLoading(false);


    } catch (error) {
      setIsLoading(false);
      alert("Email ou senha inválidos!"); 
    }
  };

  const signOut = () => {
    localStorage.clear();
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
