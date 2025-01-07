import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconButton, Heading, Text, HStack } from "@chakra-ui/react";

const AuthHeader = ({ signupHeader, signupSub, loginHeader, loginSub }) => {
  return (
    <>
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight={"bolder"}
        color={"blackAlpha.800"}
      >
        {signupHeader} {loginHeader}
      </Heading>
      <Text color={"blackAlpha.700"} letterSpacing={"wide"}>
        {signupSub}
        {loginSub} using social networks
      </Text>
      <HStack mt={"-2"}>
        <IconButton
          isRound={true}
          icon={<SiGmail />}
          bg="gray.300"
          color="red.500"
        />
        <IconButton
          isRound={true}
          icon={<FaFacebook />}
          bg="gray.300"
          color="blue.900"
        />
        <IconButton
          isRound={true}
          icon={<FaXTwitter />}
          bg="gray.300"
          color="blackAplha.500"
        />
        <IconButton
          isRound={true}
          icon={<FaLinkedin />}
          bg="gray.300"
          color="blue.500"
        />
      </HStack>
    </>
  );
};

export default AuthHeader;
