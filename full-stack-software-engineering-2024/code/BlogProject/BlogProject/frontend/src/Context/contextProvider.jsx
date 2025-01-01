import React, { createContext, useState } from "react";

const globalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState({});
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [posts, setPosts] = useState("");
  const [post, setPost] = useState({});

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
        post,
        setPost,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default globalContext;
