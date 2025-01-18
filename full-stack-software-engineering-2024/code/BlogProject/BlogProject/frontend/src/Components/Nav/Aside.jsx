import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useColorModeValue,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  IoCreateOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoBookmarkOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { FaRegUser, FaXTwitter, FaTiktok, FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../../Context/useGlobalContext";

const Aside = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");
  const navigate = useNavigate();

  const { auth } = useGlobalContext();

  const icons = [
    {
      icon: <IoHomeOutline />,
      text: "Home",
      link: "/",
    },
    {
      icon: <FaRegUser />,
      text: "My Profile",
      link: `/profile/${auth?._id}`,
    },
    {
      icon: <IoCreateOutline />,
      text: "Create A Post",
      link: "/createpost",
    },
    {
      icon: <IoBookmarkOutline />,
      text: "My Bookmark List",
      link: `/bookmarkList`,
    },
    {
      icon: <IoSearchOutline />,
      text: "Search Posts",
      link: "/search",
    },
    {
      icon: <IoSettingsOutline />,
      text: "My Settings",
      link: "/settings",
    },
  ];

  const categories = [
    "Politics",
    "Entertainment",
    "Sports",
    "Technology",
    "Health",
    "Education",
  ];

  const socials = [
    {
      icon: <FaFacebook />,
      color: "blue",
    },
    { icon: <AiFillInstagram />, color: "purple.500" },
    {
      icon: <FaTiktok />,
      color: "gray.500",
    },
    {
      icon: <FaXTwitter />,
      color: "black",
    },
    {
      icon: <FaLinkedin />,
      color: "blue.200",
    },
  ];
  return (
    <>
      {/* Sidebar view on large screens */}
      <Box
        display={{ base: "none", sm: "none", md: "block" }}
        minW="250px"
        overflow={"hidden"}
        h="full"
        bg={bg}
        color={color}
        rounded={"md"}
        px="4"
      >
        <Box w="full" h="5%" py="4">
          <Heading fontSize={"xl"}>Trending Posts</Heading>
        </Box>
        <Divider />

        <Flex direction="column" w="full" align={"flex-start"} py="2">
          {icons.map((icon, index) => (
            <Button
              variant="ghost"
              key={index}
              size="lg"
              leftIcon={icon.icon}
              pl="3"
              iconSpacing={4}
              onClick={() => navigate(icon.link)}
            >
              {icon.text}
            </Button>
          ))}
        </Flex>
        <Divider />

        <Heading textAlign={"left"} fontSize={"xl"} py="4">
          Choose Categories
        </Heading>
        <Divider />

        <VStack align={"flex-start"} py="2">
          {categories.map((category) => (
            <>
              <Button size="lg" px="3" my="-2" variant={"ghost"} key={category}>
                {category}
              </Button>
            </>
          ))}
        </VStack>
        <Divider />
        <Box>
          <Text
            fontSize="lg"
            fontWeight={"semibold"}
            py="1"
            textAlign={"center"}
          >
            Stay Connected to Socials Networks
          </Text>
          <Divider />
          <HStack flexWrap={"wrap"}>
            {socials.map((social, index) => (
              <IconButton
                variant={"ghost"}
                size="lg"
                key={index}
                icon={social.icon}
                color={social.color}
              />
            ))}
          </HStack>
        </Box>
      </Box>
      {/* sidebar icon panel at small screen btw 30rem to 48rem */}
      <Box
        display={{ base: "none", sm: "block", md: "none" }}
        maxW="125px"
        overflow={"hidden"}
        h="full"
        bg={bg}
        color={color}
        rounded={"md"}
        pt="4"
        px="2"
      >
        <VStack>
          <Divider />
          {icons.map((icon) => (
            <>
              <IconButton
                w="80%"
                key={icon.icon}
                icon={icon.icon}
                size={"lg"}
                bg={useColorModeValue("gray.200", "gray.700")}
                onClick={() => navigate(icon.link)}
              />
              <Text textAlign={"center"} key={icon.text}>
                {icon.text}
              </Text>
              <Divider />
            </>
          ))}
          <Divider />
        </VStack>
        <Text
          color="purple.800"
          fontWeight={"semibold"}
          mt="4"
          mb="4"
          textAlign={"center"}
        >
          Connect to socials
        </Text>
        <HStack flexWrap={"wrap"}>
          {socials.map((social) => (
            <IconButton
              variant={"ghost"}
              size="lg"
              key={social.color}
              icon={social.icon}
              color={social.color}
            />
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default Aside;
