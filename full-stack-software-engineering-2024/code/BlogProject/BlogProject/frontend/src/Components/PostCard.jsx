import React, { useState, createContext, useContext, useEffect } from "react";
import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Text,
  Avatar,
  Heading,
  Image,
  Button,
  IconButton,
  Divider,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import InteractionBtn from "./InteractionBtn";
import useGlobalContext from "../Context/useGlobalContext";

const postCardContext = createContext();

export const Provider = ({ children }) => {
  const [liked, setLiked] = useState(null);
  const [bookmarked, setbookmarked] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");
  const { posts, setPost, auth } = useGlobalContext();
  const navigate = useNavigate();

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post._id === postId);
    if (auth._id === postToEdit.user._id) {
      setPost(postToEdit);
      navigate(`/post/edit/${postId}`);
    } else {
      return;
    }
  };

  const formatDate = (dateOfPost) => {
    dayjs.extend(relativeTime);
    const formatDate = dayjs().to(dayjs(dateOfPost));
    return formatDate;
  };

  return (
    <postCardContext.Provider
      value={{
        liked,
        setLiked,
        bookmarked,
        setbookmarked,
        bg,
        color,
        formatDate,
        handleEdit,
      }}
    >
      {children}
    </postCardContext.Provider>
  );
};

export default postCardContext;

const PostCard = ({ post }) => {
  const { bg, color, formatDate, handleEdit } = useContext(postCardContext);
  const navigate = useNavigate();

  return (
    <>
      <Card maxW="md" bg={bg} color={color} cursor={"pointer"}>
        <CardHeader mt="-2" mb="-2">
          <Flex flex="1" spacing="2" justifyContent="space-between">
            <Flex gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                key={post?._id}
                name={post?.user?.username}
                src="https://bit.ly/sage-adebayo"
              />

              <VStack gap="1">
                <Heading size="md">
                  {post?.user?.profilename || "Profile Name"}{" "}
                </Heading>
                <Text key={post?._id}>
                  {" "}
                  @{post?.user?.username || "username"}{" "}
                </Text>
              </VStack>
            </Flex>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    variant="ghost"
                    size="lg"
                    pr="-4"
                    rightIcon={<BsThreeDotsVertical />}
                  ></MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleEdit(post._id)}>
                      Edit Post
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        navigate(`/profile/${post?.user?.username}`)
                      }
                    >
                      check profile
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
          <Divider />
          <Text
            py="1"
            fontStyle="oblique"
            fontWeight="semibold"
            textAlign={"right"}
          >{`Posted about ${formatDate(post?.createdAt)}`}</Text>
          <Divider />
        </CardHeader>
        <CardBody
          mt="-4"
          mb="-4"
          onClick={() => navigate(`/posts/${post._id}`)}
        >
          <Flex direction={"column"} gap="2">
            <Image
              fit="cover"
              align="center"
              border="1px solid"
              borderColor={bg}
              src={
                post?.image ||
                "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              alt="Chakra UI"
              h="40"
              w="full"
              onClick={() => navigate(`/posts/${post._id}`)}
            />
            <Heading fontSize={"lg"} mt="2" mb="2">
              {post?.title}
            </Heading>
          </Flex>
        </CardBody>
        <Divider />
        <InteractionBtn post={post} />
      </Card>
    </>
  );
};

export { PostCard };

const MobilePostCard = ({ post }) => {
  const { bg, color, formatDate, handleEdit } = useContext(postCardContext);
  const navigate = useNavigate();

  return (
    <>
      <Card
        direction="row"
        h={{ base: "12rem", sm: "16rem" }}
        ml="-4"
        p="2"
        bg={bg}
        color={color}
        overflow="hidden"
        variant={"elevated"}
        cursor="pointer"
      >
        <Box w="full" border="1px solid" borderColor="gray.700" rounded="lg">
          <Image
            fit="cover"
            align="center"
            border="1px solid"
            borderColor={bg}
            w={{ base: "8rem", sm: "10rem" }}
            h={{ base: "100%", sm: "100%" }}
            alignSelf={{ base: "", sm: "flex-start" }}
            src={
              post?.image ||
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            alt="Caffe Latte"
            rounded={"lg"}
            onClick={() => navigate(`/posts/${post._id}`)}
          />
        </Box>
        <Flex direction="column">
          <CardHeader
            mt={{ base: "-7", sm: "-5" }}
            ml={{ base: "-2", sm: "" }}
            mb={{ base: "-5", sm: "-2" }}
            mr={{ base: "-8", sm: "-6" }}
          >
            <Flex justifyContent="space-between">
              <Flex gap="3" alignItems="center" flexWrap="nowrap">
                <Avatar
                  size={{ base: "xs", sm: "md" }}
                  key={post._id}
                  name={post?.user?.username || "profile name"}
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Heading size={{ base: "xs", sm: "sm" }}>
                    {post?.user?.profilename || "Profile Name"}
                  </Heading>
                  <Text fontSize={{ base: "xs", sm: "sm" }} key={post._id}>
                    @{post?.user?.username || "username"}
                  </Text>
                </Box>
              </Flex>

              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      variant="ghost"
                      size="lg"
                      pr="-4"
                      rightIcon={<BsThreeDotsVertical />}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => handleEdit(post._id)}>
                        Edit Post
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          navigate(`/profile/${post?.user?.username}`)
                        }
                      >
                        check profile
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Flex>
          </CardHeader>

          <Divider />
          <CardBody
            ml={{ base: "-3", sm: "-1" }}
            mb="-4"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            <Text
              as="p"
              fontSize={{ base: "md", sm: "xl" }}
              fontStyle={"oblique"}
              fontWeight={"semibold"}
              textAlign={"left"}
              mt={{ base: "-5", sm: "-4" }}
              mb={{ base: "2", sm: "2" }}
            >
              {post?.title || "This is the title placeholder"}
            </Text>
          </CardBody>
          <Divider />

          <VStack w="full" px="1" alignItems={"flex-start"} flexWrap={"nowrap"}>
            <Text
              fontSize="sm"
              fontWeight={"semibold"}
              fontStyle={"italic"}
              color={color}
              ml="4"
            >
              {formatDate(post.createdAt)}
            </Text>
            <Box>
              <InteractionBtn post={post} />
            </Box>
          </VStack>
        </Flex>
      </Card>
    </>
  );
};

export { MobilePostCard };
