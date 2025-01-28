import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Applayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default Applayout;
