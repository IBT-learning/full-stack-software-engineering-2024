import React from "react";
import { Flex } from "@chakra-ui/react";
import LoginInput from "../Components/Auth/LoginInput.jsx";
import AuthFooter from "../Components/Auth/AuthFooter.jsx";
import BgPattern from "../Components/Auth/BgPattern.jsx";

const LoginPage = () => {
  const text = [
    "Welcome To BlogApp!",
    "New here? Create an account within few minutes and start connecting to great blog contents!",
    "Sign Up",
    "signup",
  ];
  return (
    <>
      <Flex
        h={"100vh"}
        w={"100vw"}
        bgGradient="linear(purple.300, purple.500, purple.300)"
        zIndex="-1"
        align="center"
        justify="center"
      >
        <BgPattern />

        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          overflow={"hidden"}
          w={{ base: "85%", md: "70%" }}
          h={{ base: "full", md: "80%" }}
          boxShadow={"md"}
          zIndex={10}
        >
          {/* Lefthand side background  */}
          <LoginInput />
          {/* Righthand side background */}
          <AuthFooter
            head={text[0]}
            subHead={text[1]}
            btnText={text[2]}
            link={text[3]}
          />
          ;
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
