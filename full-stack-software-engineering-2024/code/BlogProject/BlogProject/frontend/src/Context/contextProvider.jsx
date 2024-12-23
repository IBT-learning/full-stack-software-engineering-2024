import { createContext, useState } from "react";

const globalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState({});
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <globalContext.Provider
      value={{ authToken, setAuthToken, auth, setAuth, isAuth, setIsAuth }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default globalContext;
