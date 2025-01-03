import React from "react";
import { Box } from "@chakra-ui/react";

const BgPattern = () => {
  return (
    <Box
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "1",
        bottom: "0",
        left: "0",
        w: "40%",
        h: "40%",
        // bgGradient: "linear(green.800, green.200, green.300, green.900)",
        bgGradient: "linear( #5eb643, #6adb79, #d1e238)",
        borderRadius: "9% 91% 100% 0% / 46% 100% 0% 54% ",
        opacity: "0.4",
      }}
      _after={{
        content: '""',
        position: "absolute",
        zIndex: "1",
        right: "0",
        top: "0",
        w: "20%",
        h: "20%",
        bgGradient: "linear( #5eb643, #6adb79, #d1e238)",
        borderRadius: "50% 50% 50% 50%",
        opacity: "0.3",
      }}
    ></Box>
  );
};

export default BgPattern;
