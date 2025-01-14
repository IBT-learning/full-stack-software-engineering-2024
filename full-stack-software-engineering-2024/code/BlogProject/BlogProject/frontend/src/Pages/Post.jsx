import React, { useEffect, useState } from "react";
import {
  Image,
  Flex,
  Box,
  Heading,
  Avatar,
  IconButton,
  Divider,
  Text,
  Button,
  Badge,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdBookmarkAdded,
  MdOutlineBookmarkBorder,
  MdOutlineShare,
} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import Aside from "../Components/Nav/Aside.jsx";
import useGlobalContext from "../Context/useGlobalContext.jsx";
import { formattedDate } from "../Utils/styles.js";

const PostPage = () => {
  const [bookmarkedPost, setbookmarkedPost] = useState(false);
  const {
    setBookmarkList,
    bookmarkList,
    posts,
    post,
    setPost,
    likesCount,
    setLikesCount,
    authToken,
    auth,
  } = useGlobalContext();
  const { postId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const getPostDetails = () => {
      if (posts) {
        const postToView = posts?.find((post) => post?._id === postId);
        setLikesCount(postToView.likes.length);
        setBookmarkList(postToView.bookmarks.length);
        setPost(postToView);
      }
    };
    getPostDetails();
  }, [postId]);

  const handleLikedPost = async (postid) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/post/like/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: authToken,
          },
        }
      );
      const data = await response.json();
      const count = data.updatedLikes.length;

      if (response.ok) {
        if (postid === postId) {
          setLikesCount(count);
        }
      } else {
        toast({
          title: "Error",
          description: data.error,
          status: "error",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleBookmarkList = async (postid) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/post/bookmark/${postId}`,
        {
          method: "POST",
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
          duration: 2000,
          position: "top",
        });
      } else {
        if (postid === postId) {
          setBookmarkList(data.data);
        }
        toast({
          title: "Success",
          status: "success",
          description: data.msg,
          duration: 2000,
          position: "top",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {post && (
        <Flex gap="4" bg={bg} px={{ base: "2", sm: "4", md: "10" }} pt="2">
          <Aside />
          <Flex w="full" direction="column" align="flex-start" color={color}>
            <Button
              variant="unstyled"
              leftIcon={<IoMdArrowBack />}
              onClick={() => navigate(-1)}
              color="purple.800"
            >
              Back
            </Button>
            <Image
              mt="-9"
              fit="cover"
              align="center"
              src={post?.image}
              alt="Chakra UI"
              h="15rem"
              w="full"
            />
            <Flex
              direction="column"
              w="full"
              h="70%"
              gap="4"
              mt="-5"
              bg={useColorModeValue("gray.100", "gray.800")}
              borderTopRadius="3xl"
              px="4"
            >
              {/* header container */}
              <Flex
                pt="3"
                spacing="2"
                justifyContent="space-between"
                alignItems="center"
                h="10%"
              >
                <Flex
                  gap="4"
                  flexWrap="wrap"
                  alignItems="center"
                  cursor="pointer"
                  onClick={() => navigate(`/profile/${post?.user?._id}`)}
                >
                  <Avatar
                    name={post?.user?.username}
                    src={post?.user?.profileimage}
                    size={{ base: "sm", sm: "md", md: "lg" }}
                  />
                  <VStack gap="-1">
                    <Heading size="sm">
                      {post?.user?.profilename?.toUpperCase() || "Profile Name"}{" "}
                    </Heading>
                    <Text> @{post?.user?.username || "username"} </Text>
                  </VStack>
                </Flex>
                <Box>
                  <Badge bg="purple.300" px="3">
                    FOLLOW
                  </Badge>
                  <Text fontStyle="italic" fontWeight="semiBold">
                    {formattedDate(post?.createdAt)}
                  </Text>
                </Box>
              </Flex>
              <Divider />

              {/* body container */}
              <Flex h="100%" direction="column" gap="4">
                <Box>
                  <Heading
                    mt="-2"
                    mb="4"
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  >
                    {post.title}
                  </Heading>
                  <Text>{post.body} </Text>
                </Box>
                <Divider />

                {/* interaction container */}
                <Flex
                  justifyContent="space-between"
                  px="6"
                  mb="4"
                  py="2"
                  w="full"
                  h="4rem"
                  bg={useColorModeValue("purple.300", "purple.400")}
                  rounded="3xl"
                >
                  <VStack gap="-1" onClick={() => handleLikedPost(post._id)}>
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={
                        likesCount ? (
                          <MdFavorite size="28" color="red" />
                        ) : (
                          <MdOutlineFavoriteBorder size="28" />
                        )
                      }
                    />
                    <Text fontSize="xs">{`${likesCount}  likes`}</Text>
                  </VStack>
                  <VStack gap="-1">
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={<FaRegComment size="25" />}
                    />
                    <Text fontSize="xs">Comment</Text>
                  </VStack>
                  <VStack gap="-1" onClick={() => handleBookmarkList(post._id)}>
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={
                        bookmarkList.length &&
                        bookmarkList.some((id) => id === auth._id) ? (
                          <MdBookmarkAdded size="28" color="white" />
                        ) : (
                          <MdOutlineBookmarkBorder size="28" />
                        )
                      }
                    />
                    <Text fontSize="xs">
                      {`${post?.bookmarks?.length} Bookmarks`}
                    </Text>
                  </VStack>
                  <VStack gap="-1">
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={<MdOutlineShare size="28" />}
                    />
                    <Text fontSize="xs">Share This</Text>
                  </VStack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default PostPage;
