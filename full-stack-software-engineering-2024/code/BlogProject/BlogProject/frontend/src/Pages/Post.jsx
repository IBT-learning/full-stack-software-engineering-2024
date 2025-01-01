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
import { useParams } from "react-router-dom";
import Aside from "../Components/Aside.jsx";
import useGlobalContext from "../Context/useGlobalContext.jsx";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

const PostPage = () => {
  const [post, setPost] = useState({});
  const [likedPost, setLikedPost] = useState(false);
  const [bookmarkedPost, setbookmarkedPost] = useState(false);
  const { posts } = useGlobalContext();
  const { postId } = useParams();

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const getPostDetails = () => {
      const postToView = posts.find((post) => post._id === postId);
      setPost(postToView);
    };
    getPostDetails();
  }, [postId]);

  const formattedDate = () => {
    dayjs.extend(localizedFormat);
    const postDate = dayjs(post.createdAt).format("lll");
    return postDate;
  };

  return (
    <>
      {post && (
        <Flex
          minH="100vh"
          gap="4"
          bg={bg}
          px={{ base: "2", sm: "4", md: "10" }}
          pt="2"
        >
          <Aside />
          <Flex direction="column" color={color}>
            <Image
              fit="cover"
              align="top"
              src={
                post?.image ||
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              alt="Chakra UI"
              h={{ base: "25%", sm: "25%", md: "30%" }}
              w="full"
            />
            <Flex
              direction="column"
              h="70%"
              gap="4"
              mt="-10"
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
                    src="https://bit.ly/sage-adebayo"
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
                    {formattedDate()}
                  </Text>
                </Box>
              </Flex>
              <Divider />

              {/* body container */}
              <Flex h="100%" direction="column" gap="4">
                <Box minH="80%">
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
                  <VStack gap="-1" onClick={() => setLikedPost((v) => !v)}>
                    <IconButton
                      variant="ghost"
                      color={color}
                      icon={
                        likedPost ? (
                          <MdFavorite size="28" color="red" />
                        ) : (
                          <MdOutlineFavoriteBorder size="28" />
                        )
                      }
                    />
                    <Text fontSize="xs">500 Likes</Text>
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
