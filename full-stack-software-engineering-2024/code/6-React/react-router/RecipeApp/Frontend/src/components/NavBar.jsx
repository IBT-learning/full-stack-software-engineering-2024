import React, { useContext } from "react";
import { FaMoon, FaPlus, FaSun, FaHome, FaDelicious } from "react-icons/fa";
import { context } from "../App";
import "../index.css";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  Heading,
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(context);

  const style = {
    bg: darkMode ? "gray.800" : "gray.300",
    _hover: {
      color: darkMode ? "black" : "white",
      bg: darkMode ? "gray.700" : "gray.400",
    },
  };

  return (
    <>
      <Box
        display={{ base: "block", sm: "none" }}
        pos="fixed"
        bottom="0"
        left="0"
        w="100%"
        zIndex={9999}
        bg={darkMode ? "gray.900" : "gray.200"}
        boxShadow="xl"
      >
        <HStack align="center" justify="space-evenly" gap={12}>
          <Link to="/create">
            <IconButton variant="subtle">
              <FaPlus size={22} />
            </IconButton>
          </Link>

          <Link to="/">
            <IconButton variant="subtle">
              <FaHome size={22} />
            </IconButton>
          </Link>

          <IconButton variant="subtle">
            <FaDelicious size={22} />
          </IconButton>
        </HStack>
      </Box>

      <Flex
        minW="300px"
        maxW="1024px"
        w="100%"
        h="4rem"
        p={{ base: 2, md: 4 }}
        align="center"
        justify="space-between"
        gap={{ base: "8", sm: "4" }}
        pos="fixed"
        zIndex="10"
        bg={darkMode ? "gray.900" : "gray.200"}
      >
        <Box>
          <Heading
            bgGradient="linear(to-r, orange.500, teal.400)"
            bgClip="text"
            fontSize={{ base: "4xl", sm: "3xl" }}
            letterSpacing="wide"
          >
            RecipeApp
          </Heading>
        </Box>

        <HStack>
          <Link to="/">
            <Button
              variant="subtle"
              display={{ base: "none", sm: "block" }}
              sx={style}
            >
              <FaHome />
            </Button>
          </Link>

          <Link to="create">
            <Button
              variant="subtle"
              display={{ base: "none", sm: "block" }}
              sx={style}
            >
              <FaPlus />
            </Button>
          </Link>

          <Button variant="subtle" sx={style}>
            {darkMode ? (
              <FaSun onClick={() => setDarkMode(false)} />
            ) : (
              <FaMoon onClick={() => setDarkMode(true)} />
            )}
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
