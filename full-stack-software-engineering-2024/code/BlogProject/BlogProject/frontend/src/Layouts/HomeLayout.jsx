import React from "react";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
