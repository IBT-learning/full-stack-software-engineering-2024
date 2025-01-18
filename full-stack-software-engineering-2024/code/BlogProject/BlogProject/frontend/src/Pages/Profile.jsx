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
import FollowersDetails from "../Components/Profile/FollowersDetails.jsx";
import FollowingsDetails from "../Components/Profile/FollowingsDetails.jsx";
import { useParams, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState("");
  const [userPosts, setUserPosts] = useState("");
  const [bookmark, setBookmark] = useState("");
  const [authUser, setAuthUser] = useState(false);
  const [following, setFollowing] = useState("");

  const { authToken, auth } = useGlobalContext();
  const navigate = useNavigate();
  const toast = useToast();

  const userInfo = [
    { key: "Email", info: userProfile?.email },
    { key: "Gender", info: userProfile?.gender },
    {
      key: "Location",
      info: userProfile?.location,
    },
    {
      key: "Bio",
      info: userProfile?.Bio,
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
    const fetchUserProfile = async () => {
      const response = await fetch(
        `http://localhost:4000/api/user/profile/${userid}`,
        {
          headers: {
            "Content-Type": "application.json",
            authorization: authToken,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setUserProfile(data.data);
      } else {
        toast({
          title: "Error",
          status: "error",
          description: data.error,
          duration: 5000,
        });
      }
    };
    fetchUserProfile();
  }, [userid]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/post/getposts/${userid}`
        );
        const data = await response.json();
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

  useEffect(() => {
    if (userid === auth?._id.toString()) {
      setAuthUser(true);
    }
  }, [userid]);

  useEffect(() => {
    const prevState = localStorage.getItem("following");
    setFollowing(prevState);
  }, []);

  const handleFollowBtn = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/user/following/${userid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: authToken,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setFollowing(data.data);
        localStorage.setItem("following", data.data);
        toast({
          title: "Success",
          status: "success",
          description: data.msg,
          duration: 2000,
        });
      } else {
        toast({
          title: "Error",
          status: "error",
          description: data.error,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchBookmarkedPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/post/bookmarked/${userid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: authToken,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          toast({
            title: "Error",
            status: "error",
            description: data.error,
            duration: 3000,
          });
        } else {
          setBookmark(data.data);
          localStorage.setItem("bookmark", JSON.stringify(data.data));
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBookmarkedPosts();
  }, []);

  return (
    <Box
      border="1px solid"
      ref={finalRef}
      borderColor="gray.700"
      bg={bg}
      color={color}
      transition={"all 0.3s ease-in-out"}
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
            src={userProfile?.coverimage || image}
            alt="Cover Image"
          />

          <Flex p="2" gap="4" w="full" cursor="pointer">
            <Avatar
              name={userProfile?.profilename || "Profile Image"}
              src={userProfile?.profileimage}
              alt="profile image"
            />
            <Flex w="full" justifyContent="space-between">
              <Box>
                <Text fontSize="xl">
                  {userProfile?.profilename || "Profile Name"}
                </Text>
                <Text>@{userProfile?.username || "@username"}</Text>
              </Box>

              {authUser ? (
                <Button
                  px="4"
                  mr="6"
                  alignSelf="flex-end"
                  rounded="3xl"
                  onClick={onOpen}
                  bg={Btn}
                  sx={hoverStyle}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  px="4"
                  mr="6"
                  alignSelf="flex-end"
                  rounded="3xl"
                  bg={Btn}
                  sx={hoverStyle}
                  onClick={handleFollowBtn}
                >
                  {following.toUpperCase()}
                </Button>
              )}
              <EditProfile
                isOpen={isOpen}
                onClose={onClose}
                initialFocus={initialRef}
                finalFocus={finalRef}
                userid={userid}
                setUserProfile={setUserProfile}
              />
            </Flex>
          </Flex>
          <Divider />
          <Text px="4">{`Member since ${formattedDate(
            userProfile?.createdAt
          )}`}</Text>
          <Text fontSize="xl" textAlign="left" px="4">
            {userProfile?.Bio}
          </Text>
        </VStack>
        <HStack px="4" gap="8">
          <Button
            bg={Btn}
            sx={hoverStyle}
            onClick={() => navigate(`/followings/${userProfile._id}`)}
          >
            {userProfile?.followers?.length > 1
              ? `${userProfile?.followers?.length} Followings`
              : `${userProfile?.followers?.length} Followings`}
          </Button>
          <Button
            bg={Btn}
            sx={hoverStyle}
            onClick={() => navigate(`/followers/${userProfile._id}`)}
          >
            {userProfile?.followings?.length > 1
              ? `${userProfile?.followings?.length} followers`
              : `${userProfile?.followings?.length} Followers`}
          </Button>
        </HStack>
        <Divider />

        <Box px="2" overflow="scroll">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>About</Tab>
              <Tab>Posts</Tab>
              {authUser && <Tab>Bookmark List</Tab>}
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
                <Box h="8"></Box>
              </TabPanel>
              <TabPanel>
                <SimpleGrid minChildWidth="25rem" gap="1">
                  {userPosts.length &&
                    userPosts?.map((posts) => (
                      <UserPosts key={posts._id} userPosts={posts} />
                    ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid minChildWidth="25rem">
                  {bookmark &&
                    bookmark?.map((posts) => (
                      <UserPosts key={posts._id} userPosts={posts} />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <FollowersDetails />
              </TabPanel>
              <TabPanel>
                <FollowingsDetails />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
