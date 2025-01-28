import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      w="full"
      textAlign="center"
      bg={useColorModeValue("gray.400", "blackAlpha.300")}
      color={useColorModeValue("gray.100", "gray.400")}
      zIndex="1"
    >
      <Text pt="2" textAlign="center">
        BlogApp @2025<br></br>Designed and Programmed by coded-ksb
      </Text>
      <Flex
        direction={{ base: "column", sm: "column", md: "row" }}
        align="center"
        px="8"
        py="2"
        gap="2"
        justify="center"
      >
        <HStack>
          <MdEmail />
          <Text>ksbamidele880@gmail.com</Text>
        </HStack>
        <HStack>
          <FaGithub />
          <Text>Samad-Kareem900</Text>
        </HStack>
        <HStack>
          <FaTwitter />
          <Text>@ksbUncommon</Text>
        </HStack>
      </Flex>
      <Text fontStyle={"oblique"}>IBT Learning Africa Academy</Text>
      <Box h="2rem"></Box>
    </Box>
  );
};

export default Footer;
