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
  const { posts, post, setPost, likesCount, setLikesCount, authToken } =
    useGlobalContext();
  const { postId } = useParams();
  const navigate = useNavigate();

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const getPostDetails = () => {
      const postToView = posts?.find((post) => post?._id === postId);
      setPost(postToView);
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
                <Flex gap="4" flexWrap="wrap" alignItems="center">
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
                        likesCount >= 1 ? (
                          <MdFavorite size="28" color="red" />
                        ) : (
                          <MdOutlineFavoriteBorder size="28" />
                        )
                      }
                    />
                    <Text fontSize="xs">{`${likesCount} Likes`}</Text>
                  </VStack>
                  <VStack gap="-1">
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={<FaRegComment size="25" />}
                    />
                    <Text fontSize="xs">Comment</Text>
                  </VStack>
                  <VStack gap="-1" onClick={() => setbookmarkedPost((v) => !v)}>
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={
                        bookmarkedPost ? (
                          <MdBookmarkAdded size="28" color="black" />
                        ) : (
                          <MdOutlineBookmarkBorder size="28" />
                        )
                      }
                    />
                    <Text fontSize="xs">Bookmark Post</Text>
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
