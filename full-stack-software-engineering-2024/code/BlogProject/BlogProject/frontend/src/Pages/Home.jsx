import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Skeleton,
  useColorModeValue,
  SkeletonText,
  SkeletonCircle,
  SimpleGrid,
} from "@chakra-ui/react";
import Aside from "../Components/Nav/Aside.jsx";
import { PostCard, MobilePostCard } from "../Components/Post/PostCard.jsx";
import useGlobalContext from "../Context/useGlobalContext.jsx";
import { Provider } from "../Components/Post/PostCard.jsx";
import DesktopViewSkeleton from "../Components/skeletons/DesktopView.jsx";
import MobileViewSkeleton from "../Components/skeletons/MobileView.jsx";

const HomePage = () => {
  const { posts, setPosts } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const POSTS_URL = "http://localhost:5000/api/post/getposts";

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

  const bg = useColorModeValue("gray.200", "gray.900");
  const tabStyle = {
    _selected: {
      bg: useColorModeValue("purple.400", "purple.500"),
      color: useColorModeValue("white", "gray.900"),
    },
  };

  return (
    <Box
      minW="full"
      minH="full"
      bg={bg}
      px={{ base: "2", sm: "4", md: "10" }}
      pt="2"
    >
      <Flex gap="6">
        {/* Icon sidebar on large and medium screens */}
        <Aside />

        {/* Component Loading posts for larger screens */}
        <Box display={{ base: "none", sm: "none", md: "block" }}>
          {loading ? (
            <DesktopViewSkeleton />
          ) : (
            <SimpleGrid minChildWidth="md" gap="2">
              {posts?.map((post) => (
                <Provider>
                  <PostCard key={post._id} post={post} />
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
              <Tab sx={tabStyle}>For you</Tab>
              <Tab sx={tabStyle}>Trending</Tab>
              <Tab sx={tabStyle}>Followings</Tab>
              <Tab sx={tabStyle}>Followers</Tab>
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
                <p>two!</p>
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
