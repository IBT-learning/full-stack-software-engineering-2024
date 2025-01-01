import React from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  Heading,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Text,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaPlusSquare,
  FaSignInAlt,
  FaSignOutAlt,
  FaSun,
  FaRegUserCircle,
} from "react-icons/fa";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import {
  IoCreateOutline,
  IoSearchOutline,
  IoBookmarkOutline,
  IoHomeOutline,
} from "react-icons/io5";
import useGlobalContext from "../Context/useGlobalContext";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("purple", "purple.400");
  const textColor = useColorModeValue("blue.200", "purple.300");

  const { setAuthToken, setIsAuth, setAuth, auth } = useGlobalContext();

  const handleLogOut = () => {
    Cookies.remove("auth_token", { sameSite: "none", secure: true });
    localStorage.removeItem("auth_user");
    setAuthToken("");
    setAuth("");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <Box
        maxW={"100vw"}
        display={{ base: "none", sm: "block" }}
        overflow={"hidden"}
        px={{ sm: "4", xl: "10" }}
        zIndex={99}
        transition={"all 0.3s ease-in-out"}
      >
        <Flex
          w="full"
          py="2"
          h={"4rem"}
          align="flex-start"
          justify={"space-between"}
        >
          <HStack>
            <Avatar
              name={auth?.username || "kareem samad"}
              size={"sm"}
              mr="3"
              borderWidth={"3px"}
              borderColor="purple"
            />
            <Heading
              bgGradient="linear(to-r,  #f700ff, #3328ca)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="bold"
              opacity={{ sm: 0, md: 1 }}
            >
              BlogApp
            </Heading>
          </HStack>

          <HStack>
            <Button
              variant={"outline"}
              colorScheme="purple"
              rounded={"xl"}
              onClick={() => navigate("login")}
            >
              SignIn
            </Button>
            <Button
              variant="solid"
              colorScheme="purple"
              _dark={{ bg: "purple.400" }}
              rounded={"xl"}
              onClick={() => navigate("signup")}
            >
              Create An Account
            </Button>
            <IconButton
              variant={"outline"}
              colorScheme="purple"
              rounded="xl"
              icon={<FaSignOutAlt />}
              onClick={handleLogOut}
            />
            <Button
              variant={"outline"}
              colorScheme="purple"
              rounded={"xl"}
              gap="2"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </HStack>
        </Flex>
      </Box>
      <MobileNavbar
        auth={auth}
        handleLogOut={handleLogOut}
        textColor={textColor}
        bg={bg}
      />
    </>
  );
};

export default Navbar;

const MobileNavbar = ({ auth, handleLogOut, textColor, bg }) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const username =
    auth?.username?.slice(0).charAt(0).toUpperCase() + auth?.username?.slice(1);

  return (
    <>
      <Box
        maxW="100vw"
        maxH="100vh"
        h={"3rem"}
        display={{ base: "block", sm: "none" }}
        overflow={"hidden"}
        transition={"all 0.3s ease-in-out"}
        zIndex={9}
        pl="2"
        py="2"
      >
        <Flex w={"full"} justifyContent={"space-between"} h="full">
          <Avatar
            name={auth?.username || "kareem samad"}
            size={"sm"}
            borderWidth={"3px"}
            borderColor="purple"
          />
          {/* Mobile view right side icon drop down */}
          <Menu zIndex={99}>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  my="-2"
                  variant="ghost"
                  color="purple"
                  _hover={{ bg: "purple.300" }}
                >
                  <CgMenuRight size="32" />
                </MenuButton>
                <MenuList color={textColor} mr="2">
                  <MenuItem
                    _hover={{ bg: bg, color: "black" }}
                    bg={useColorModeValue("gray.500", "gray.800")}
                    icon={<FaPlusSquare />}
                    onClick={() => navigate("/signup")}
                  >
                    Create An Account
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: bg, color: "black" }}
                    bg={useColorModeValue("gray.500", "gray.800")}
                    icon={<FaSignInAlt />}
                    onClick={() => navigate("/login")}
                  >
                    Signin
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: bg, color: "black" }}
                    bg={useColorModeValue("gray.500", "gray.800")}
                    icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                  >
                    {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: bg, color: "black" }}
                    bg={useColorModeValue("gray.500", "gray.800")}
                    icon={<FaSignOutAlt />}
                    onClick={handleLogOut}
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Box>
      {/* User Welcome message */}
      <Divider />
      <Box h="3rem" px={{ base: "2", sm: "4", md: "10" }} py="2">
        <Text fontSize={"xl"} fontWeight={"semiBold"} letterSpacing={"wide"}>
          {auth ? `Hi ${username}, Welcome🙌!` : "Hi User, Welcome!🙌"}
        </Text>
      </Box>
      <Divider />
      {/* Mobile view Bottom icon panel */}
      <Box
        w="full"
        h="3rem"
        position="absolute"
        bottom="1"
        left="0"
        bg={"purple.200"}
        display={{ base: "block", sm: "none" }}
        overflow={"hidden"}
        transition={"all 0.3s ease-in-out"}
        zIndex={99}
      >
        <Flex h="full" align={"center"} justify="space-evenly" gap="10">
          <IconButton
            variant={"ghost"}
            _hover={{ bg: "purple.500" }}
            icon={<IoHomeOutline size="25" color="purple" />}
            onClick={() => navigate("/")}
          />
          <IconButton
            variant={"ghost"}
            _hover={{ bg: "purple.500" }}
            icon={<FaRegUserCircle size="25" color="purple" />}
            onClick={() => navigate("/profile/:username")}
          />
          <IconButton
            variant={"ghost"}
            _hover={{ bg: "purple.500" }}
            icon={<IoCreateOutline size="27" color="purple" />}
            onClick={() => navigate("/createpost")}
          />
          <IconButton
            variant={"ghost"}
            _hover={{ bg: "purple.500" }}
            icon={<IoSearchOutline color="purple" size="25" />}
            onClick={() => navigate("/search")}
          />
          <IconButton
            variant={"ghost"}
            _hover={{ bg: "purple.500" }}
            icon={<IoBookmarkOutline size="25" color="purple" />}
            onClick={() => navigate("/bookmark")}
          />
        </Flex>
      </Box>
    </>
  );
};
