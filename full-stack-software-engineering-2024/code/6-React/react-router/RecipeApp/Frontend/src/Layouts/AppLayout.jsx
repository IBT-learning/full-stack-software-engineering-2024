import React, { useContext } from "react";
import NavBar from "../components/NavBar.jsx";
import "../index.css";
import { Outlet } from "react-router-dom";
import { context } from "../App.jsx";

const AppLayout = () => {
  const { darkMode } = useContext(context);

  return (
    <div className={`wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
