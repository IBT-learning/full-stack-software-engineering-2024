import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import UserPosts from "../Components/Post/UserPosts";
import { IoMdArrowRoundBack } from "react-icons/io";

const BookmarkPage = () => {
  const [bookmarkedPost, setBookmarkedPost] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosts = localStorage.getItem("bookmark");
    setBookmarkedPost(JSON.parse(savedPosts));
  }, []);

  return (
    bookmarkedPost && (
      <Box>
        <HStack>
          <Button
            variant="unstyled"
            leftIcon={<IoMdArrowRoundBack size="18" />}
            onClick={() => navigate(-1)}
            color="white"
            px="4"
          ></Button>
          <Text fontSize="xl" fontWeight="bold" py="2">
            {`Bookmarked Post List (${bookmarkedPost.length})`}
          </Text>
        </HStack>
        <Divider />
        <Box px="4" pt="2">
          {bookmarkedPost.map((post) => (
            <UserPosts key={post._id} userPosts={post} />
          ))}
        </Box>
      </Box>
    )
  );
};

export default BookmarkPage;
