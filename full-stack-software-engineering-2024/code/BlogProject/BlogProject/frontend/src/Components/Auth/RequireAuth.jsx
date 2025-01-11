import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useGlobalContext from "../../Context/useGlobalContext.jsx";

const RequireAuth = () => {
  const { auth } = useGlobalContext();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default RequireAuth;
