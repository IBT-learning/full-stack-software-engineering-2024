import React from "react";
import { Flex } from "@chakra-ui/react";
import LoginInput from "../AppComponents/LoginInput.jsx";
import AuthFooter from "../AppComponents/AuthFooter.jsx";
import BgPattern from "../AppComponents/BgPattern.jsx";

const LoginPage = () => {
  const text = [
    "Welcome Back!",
    "Already sign up? jump right into enjoying the latest updates that you love the most!",
    "Signin",
  ];
  return (
    <>
      <Flex
        h={"100vh"}
        w={"100vw"}
        bgGradient="linear(green.300, green.500, green.300)"
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
          <AuthFooter head={text[0]} subHead={text[1]} btnText={text[2]} />;
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
