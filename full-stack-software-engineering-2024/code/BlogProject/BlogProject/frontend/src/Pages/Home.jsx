import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Aside from "../Components/Nav/Aside.jsx";
import { PostCard, MobilePostCard } from "../Components/Post/PostCard.jsx";
import useGlobalContext from "../Context/useGlobalContext.jsx";
import { Provider } from "../Components/Post/PostCard.jsx";
import DesktopViewSkeleton from "../Components/skeletons/DesktopView.jsx";
import MobileViewSkeleton from "../Components/skeletons/MobileView.jsx";
import FollowersDetails from "../Components/Profile/FollowersDetails.jsx";
import FollowingsDetails from "../Components/Profile/FollowingsDetails.jsx";
import UserPosts from "../Components/Post/UserPosts.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { posts, setPosts, auth } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [bookmarks, setBookmarks] = useState("");

  const POSTS_URL = "http://localhost:4000/api/post/getposts";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(POSTS_URL);
        if (!response.ok) throw new Error("Fetch Error");
        const data = await response.json();
        setLoading(false);
        setPosts(data.data);
      } catch (error) {
        console.error(error.message);
        setErrorMsg(error.message);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmark");
    setBookmarks(JSON.parse(savedBookmarks) || "");
  }, []);

  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "gray.300");
  const tabStyle = {
    _selected: {
      bg: useColorModeValue("purple.400", "purple.500"),
      color: useColorModeValue("white", "gray.900"),
    },
  };

  return (
    <Box minW="full" minH="full" bg={bg} px={{ base: "2", xl: "10" }} pt="2">
      <Flex gap="6">
        {/* Icon sidebar on large and medium screens */}
        <Aside />

        {/* Component Loading posts for larger screens */}
        <Box display={{ base: "none", sm: "none", md: "block" }}>
          {loading ? (
            <SimpleGrid
              maxW="850px"
              minChildWidth="350px"
              rowGap="4"
              columnGap="6"
            >
              {[...Array(9)].map((_, index) => (
                <DesktopViewSkeleton key={index} />
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid
              maxW="850px"
              minChildWidth="350px"
              rowGap="6"
              columnGap="4"
            >
              {posts?.map((post) => (
                <Provider>
                  <PostCard key={post?.title} post={post} />
                </Provider>
              ))}
            </SimpleGrid>
          )}
        </Box>
        {/* component Loading posts for tablets and mobile screens  */}
        <Box
          display={{ base: "block", sm: "block", md: "none" }}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          px={{ base: "2", sm: "" }}
          rounded={"md"}
          w={{ base: "100%", sm: "80%" }}
          minH="100vh"
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList my="0.5em" fontSize={"lg"}>
              <Tab sx={tabStyle} color={color}>
                For you
              </Tab>
              <Tab sx={tabStyle} color={color}>
                Bookmark
              </Tab>
              <Tab
                sx={tabStyle}
                color={color}
                onClick={() => navigate(`/getfollowers/${auth._id}`)}
              >
                Followers
              </Tab>
              <Tab
                sx={tabStyle}
                color={color}
                onClick={() => navigate(`/getfollowers/${auth._id}`)}
              >
                Followings
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex direction={"column"} gap="4">
                  {loading ? (
                    <MobileViewSkeleton />
                  ) : (
                    posts.map((post) => (
                      <Provider>
                        <MobilePostCard post={post} key={post._id} />
                      </Provider>
                    ))
                  )}
                </Flex>
              </TabPanel>
              <TabPanel>
                <SimpleGrid minChildWidth="25rem">
                  {bookmarks &&
                    bookmarks.length &&
                    bookmarks?.map((posts) => (
                      <UserPosts key={posts._id} userPosts={posts} />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <FollowingsDetails />
              </TabPanel>
              <TabPanel>
                <FollowersDetails />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
      <Box h="20"></Box>
    </Box>
  );
};

export default HomePage;
