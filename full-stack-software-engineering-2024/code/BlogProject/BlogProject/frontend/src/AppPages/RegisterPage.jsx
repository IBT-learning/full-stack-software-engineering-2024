import React from "react";
import { Flex } from "@chakra-ui/react";
import SigninInput from "../AppComponents/SigninInput.jsx";
import AuthFooter from "../AppComponents/AuthFooter.jsx";
import BgPattern from "../AppComponents/BgPattern.jsx";

const RegisterPage = () => {
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
        // bgGradient="linear( #5eb643, #6adb79, #d1e238)"
        align="center"
        justify="center"
        zIndex="-1"
      >
        <BgPattern />
        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          overflow={"hidden"}
          w={{ base: "85%", md: "70%" }}
          h={{ base: "full", md: "80%" }}
          boxShadow={"md"}
          zIndex={99}
        >
          {/* Lefthand side Input background  */}
          <SigninInput />

          {/* Righthand side Input background */}
          <AuthFooter head={text[0]} subHead={text[1]} btnText={text[2]} />
        </Flex>
      </Flex>
    </>
  );
};

export default RegisterPage;
