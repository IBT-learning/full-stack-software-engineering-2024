import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../AppComponents/Navbar";

const Applayout = () => {
  return (
    <Box minH={"100vh"} minW={"100vw"}>
      <Outlet />
    </Box>
  );
};

export default Applayout;
