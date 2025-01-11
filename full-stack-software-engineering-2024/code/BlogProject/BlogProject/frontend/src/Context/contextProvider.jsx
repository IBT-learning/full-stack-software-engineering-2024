import React, { createContext, useState } from "react";

const globalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState({});
  const [auth, setAuth] = useState({});
  const [posts, setPosts] = useState("");
  const [post, setPost] = useState({});
  const [likesCount, setLikesCount] = useState(0);

  return (
    <globalContext.Provider
      value={{
        authToken,
        setAuthToken,
        auth,
        setAuth,
        posts,
        setPosts,
        post,
        setPost,
        likesCount,
        setLikesCount,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default globalContext;
