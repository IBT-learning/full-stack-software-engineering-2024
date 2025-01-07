import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Avatar,
  VStack,
  Text,
  Button,
  TabList,
  Tabs,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Divider,
  HStack,
  Badge,
  useDisclosure,
  useToast,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import image from "../assets/placeholderImage.webp";
import useGlobalContext from "../Context/useGlobalContext";
import EditProfile from "../Components/Profile/EditProfile";
import UserPosts from "../Components/Post/UserPosts.jsx";
import { formattedDate } from "../Utils/styles.js";
import { useParams, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userPosts, setUserPosts] = useState("");
  const { auth } = useGlobalContext();
  const navigate = useNavigate();
  const toast = useToast();

  const userInfo = [
    { key: "Email", info: auth?.email },
    { key: "Gender", info: auth?.gender },
    {
      key: "Location",
      info: auth?.location,
    },
    {
      key: "Bio",
      info: auth?.Bio,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { userid } = useParams();

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "gray.300");
  const Btn = useColorModeValue("purple.200", "purple.500");

  const hoverStyle = {
    _hover: {
      bg: useColorModeValue("purple.500", "purple.800"),
    },
  };

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/post/getposts/${userid}`
        );
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          toast({
            title: "Error",
            status: "error",
            description: data.error,
            duration: 5000,
          });
        } else {
          setUserPosts(data.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUserPosts();
  }, [userid]);

  console.log(userPosts);

  return (
    <Box
      maxw="100vw"
      border="1px solid"
      ref={finalRef}
      borderColor="gray.700"
      bg={bg}
      color={color}
    >
      <Flex w="full" direction="column" gap="2">
        <VStack alignItems="flex-start">
          <Button
            variant="unstyled"
            leftIcon={<IoMdArrowBack />}
            onClick={() => navigate(-1)}
            color="purple.800"
          >
            Back
          </Button>
          <Image
            mt="-12"
            h="28"
            mr="-100%"
            w="full"
            fit="cover"
            src={auth?.coverimage || image}
            alt="Cover Image"
          />

          <Flex p="2" gap="4" w="full">
            <Avatar
              name={auth?.profilename || "Profile Image"}
              src={auth?.profileimage}
              alt="profile image"
            />
            <Flex w="full" justifyContent="space-between">
              <Box>
                <Text fontSize="xl">{auth?.profilename || "Profile Name"}</Text>
                <Text>@{auth?.username}</Text>
              </Box>
              <Button
                size="lg"
                px="8"
                mr="6"
                alignSelf="flex-end"
                rounded="3xl"
                onClick={onOpen}
                bg={Btn}
                sx={hoverStyle}
              >
                Edit Profile
              </Button>

              <EditProfile
                isOpen={isOpen}
                onClose={onClose}
                initialFocus={initialRef}
                finalFocus={finalRef}
                userid={userid}
              />
            </Flex>
          </Flex>
          <Divider />
          <Text px="4">{`Member since ${formattedDate(auth?.createdAt)}`}</Text>
          <Text fontSize="xl" textAlign="left" px="4">
            {auth?.Bio}
          </Text>
        </VStack>
        <HStack px="4" gap="8">
          <Button bg={Btn} sx={hoverStyle}>
            1.3k Followers
          </Button>
          <Button bg={Btn} sx={hoverStyle}>
            24 Followings
          </Button>
        </HStack>
        <Divider />

        <Box px="2" overflow="scroll">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>About</Tab>
              <Tab>Posts</Tab>
              <Tab>Bookmark List</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="4px"
              bg="purple.500"
              borderRadius="full"
            />
            <TabPanels>
              <TabPanel>
                <Flex pt="4" direction="column" gap="4">
                  {userInfo.map((details) => (
                    <>
                      <Box>
                        <Badge key={details.key} fontSize="sm" px="3" bg={Btn}>
                          {details.key}
                        </Badge>

                        <Text key={details.info} fontSize="lg" mt="2">
                          {details.info}
                        </Text>
                      </Box>
                    </>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <SimpleGrid minChildWidth="25rem" gap="4">
                  {userPosts.length &&
                    userPosts?.map((posts) => (
                      <UserPosts key={posts._id} userPosts={posts} />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
