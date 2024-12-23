import React from "react";
import { Heading, VStack, Button } from "@chakra-ui/react";
import { buttonStyle } from "../Utils/styles";
import useGlobalContext from "../Context/useGlobalContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthFooter = ({ head, subHead, btnText }) => {
  const { setAuthToken, setIsAuth } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove("auth_token");
    setAuthToken("");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <VStack
      w={{ base: "100%", md: "40%" }}
      h={{ base: "30%", md: "full" }}
      bgGradient="linear(to-t, green.800, green.400, green.600)"
      //   pt="2"
      px={{ base: "6", md: "8" }}
      gap={{ base: "2", md: "6" }}
      justifyContent={{ base: "center", md: "center" }}
    >
      <Heading
        as={"h1"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
        letterSpacing={"wide"}
        textAlign={"center"}
        color={"whiteAlpha.900"}
      >
        {head}
      </Heading>
      <Heading
        as={"h4"}
        textAlign="center"
        fontWeight={"semibold"}
        lineHeight={"6"}
        fontSize={{ base: "md", md: "xl" }}
        color={"whiteAlpha.800"}
      >
        {subHead}
      </Heading>
      <Button
        w={"12rem"}
        mt="3"
        marginBlockEnd={2}
        sx={buttonStyle}
        onClick={handleLogOut}
      >
        {btnText}
      </Button>
    </VStack>
  );
};

export default AuthFooter;
