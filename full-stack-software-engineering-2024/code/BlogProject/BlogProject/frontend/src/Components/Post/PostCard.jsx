import React, { useState, createContext, useContext } from "react";
import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Badge,
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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import InteractionBtn from "./InteractionBtn.jsx";
import OptionButton from "./OptionButton.jsx";

const postCardContext = createContext();

export const Provider = ({ children }) => {
  const [liked, setLiked] = useState(null);
  const [bookmarked, setbookmarked] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");

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
      }}
    >
      {children}
    </postCardContext.Provider>
  );
};

export default postCardContext;

const PostCard = ({ post }) => {
  const { bg, color, formatDate } = useContext(postCardContext);
  const navigate = useNavigate();

  return (
    <>
      <Card bg={bg} color={color} cursor={"pointer"}>
        <CardHeader
          mt="-2"
          mb="-2"
          onClick={() => navigate(`/profile/${post?.user?._id}`)}
        >
          <Flex flex="1" spacing="2" justifyContent="space-between">
            <Flex gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name={post?.user?.username}
                src={post?.user?.profileimage}
              />

              <VStack gap="1" alignItems="flex-start">
                <Heading size="sm">
                  {post?.user?.profilename || "Profile Name"}{" "}
                </Heading>
                <Text> @{post?.user?.username || "username"} </Text>
              </VStack>
            </Flex>
            {/* side menu icon on the postcard header  */}
            <OptionButton postId={post._id} />
          </Flex>
          <Divider />
          <Badge
            py="1"
            fontStyle="oblique"
            fontWeight="semibold"
            float={"right"}
          >
            Posted {formatDate(post?.createdAt)}
          </Badge>
        </CardHeader>
        <CardBody
          mt="-8"
          mb="-4"
          onClick={() => navigate(`/posts/${post._id}`)}
        >
          <Flex direction={"column"} gap="2">
            <Image
              fit="cover"
              align="center"
              border="1px solid"
              rounded="base"
              borderColor={bg}
              src={post?.image}
              alt="Post Image"
              h="40"
              w="full"
              onClick={() => navigate(`/posts/${post._id}`)}
            />
            <Heading fontSize={"lg"} mb="2">
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
  const { bg, color, formatDate } = useContext(postCardContext);
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
        <Box
          minW="8rem"
          maxW="10rem"
          border="1px solid"
          borderColor="gray.700"
          rounded="lg"
        >
          <Image
            fit="cover"
            align="center"
            border="1px solid"
            borderColor={bg}
            w={{ base: "8rem", sm: "10rem" }}
            h={{ base: "100%", sm: "100%" }}
            alignSelf={{ base: "", sm: "flex-start" }}
            src={post?.image}
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
            onClick={() => navigate(`/profile/${post?.user?._id}`)}
          >
            <Flex justifyContent="space-between">
              <Flex gap="3" alignItems="center" flexWrap="nowrap">
                <Avatar
                  size={{ base: "xs", sm: "md" }}
                  key={post._id}
                  name={post?.user?.username || "profile name"}
                  src={post?.user?.profileimage}
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
              {/* side menu icon on the postcards */}
              <OptionButton postId={post._id} />
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
