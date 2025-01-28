import { extendTheme } from "@chakra-ui/react";

const config = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: "false",
});

const theme = extendTheme({ config });

export default theme;
