import React, { createContext, useState } from "react";

const globalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState({});
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [posts, setPosts] = useState("");

  return (
    <globalContext.Provider
      value={{
        authToken,
        setAuthToken,
        auth,
        setAuth,
        isAuth,
        setIsAuth,
        posts,
        setPosts,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default globalContext;
