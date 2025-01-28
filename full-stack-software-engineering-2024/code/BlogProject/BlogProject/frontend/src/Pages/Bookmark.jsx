import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Divider,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import UserPosts from "../Components/Post/UserPosts";
import { IoMdArrowRoundBack } from "react-icons/io";

const BookmarkPage = () => {
  const [bookmarkedPost, setBookmarkedPost] = useState("");
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const savedPosts = localStorage.getItem("bookmark");
    setBookmarkedPost(JSON.parse(savedPosts));
  }, []);

  return (
    bookmarkedPost && (
      <Box bg={bg} color={color} px={{ base: 2, xl: 8 }}>
        <HStack>
          <Button
            variant="unstyled"
            leftIcon={<IoMdArrowRoundBack size="18" />}
            onClick={() => navigate(-1)}
            color={color}
            px="4"
          ></Button>
          <Text fontSize="xl" fontWeight="bold" py="2">
            {`Bookmarked Post List (${bookmarkedPost.length})`}
          </Text>
        </HStack>
        <Divider />
        <Flex flexWrap="wrap" minW="800px" gap="2" px="" py="" pt="2">
          {bookmarkedPost.map((post) => (
            <UserPosts key={post._id} userPosts={post} />
          ))}
        </Flex>
        <Box h="8"></Box>
      </Box>
    )
  );
};

export default BookmarkPage;
