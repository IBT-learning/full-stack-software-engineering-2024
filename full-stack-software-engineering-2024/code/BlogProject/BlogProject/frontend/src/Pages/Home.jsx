import React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Aside from "../Components/Aside.jsx";

const HomePage = () => {
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
      <Flex gap="4">
        {/* Icon sidebar on large and medium screens */}
        <Aside />

        <Box
          display={{ base: "block", sm: "block", md: "none" }}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          px={{ base: "2", sm: "4" }}
          rounded={"md"}
          w="full"
          h="full"
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
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
