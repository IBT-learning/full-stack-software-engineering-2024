import { extendTheme } from "@chakra-ui/react";

const config = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: "false",

  keyframes: {
    wave: {
      "0%": {
        transform: "translateX(0)",
      },
      "50%": {
        transform: "translateX(50%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    slideInRight: {
      "0%": { transform: "translateX(100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
  },
});

const theme = extendTheme({ config });

export default theme;
