import React, { createContext, useContext } from "react";
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
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import InteractionBtn from "./InteractionBtn.jsx";
import OptionButton from "./OptionButton.jsx";

const postCardContext = createContext();

export const Provider = ({ children }) => {
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
      <Card minW="" bg={bg} color={color} cursor={"pointer"}>
        <CardHeader mt="-2" mb="-2">
          <Flex flex="1" spacing="2" justifyContent="space-between">
            <Flex
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              onClick={() => navigate(`/profile/${post?.user?._id}`)}
            >
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
            {/* side menu icon on the md>> screen postcard header  */}
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
            <Heading fontSize={"lg"} mb="2" _hover={{ color: "blue.600" }}>
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
        ml="-4"
        p="2"
        bg={bg}
        color={color}
        overflow="hidden"
        variant={"elevated"}
        cursor="pointer"
      >
        <Flex direction="column">
          <CardHeader
            mt={{ base: "-7", sm: "-5" }}
            ml={{ base: "-2", sm: "" }}
            mb={{ base: "-5", sm: "-2" }}
            mr={{ base: "-8", sm: "-6" }}
          >
            <Flex justifyContent="space-between">
              <Flex
                gap="3"
                alignItems="center"
                flexWrap="nowrap"
                onClick={() => navigate(`/profile/${post?.user?._id}`)}
              >
                <Avatar
                  size={{ base: "xs", sm: "md" }}
                  key={post._id}
                  name={post?.user?.username || "profile name"}
                  src={post?.user?.profileimage}
                />
                <Box _hover={{ color: "blue.600" }}>
                  <Heading size={{ base: "xs", sm: "sm" }}>
                    {post?.user?.profilename || "Profile Name"}
                  </Heading>
                  <Text fontSize={{ base: "xs", sm: "sm" }} key={post._id}>
                    @{post?.user?.username || "username"}
                  </Text>
                </Box>
              </Flex>
              {/* side menu icon on the sm<< screen postcards */}
              <OptionButton postId={post._id} postUser={post?.user?._id} />
            </Flex>
          </CardHeader>

          <Divider />
          <CardBody
            ml={{ base: "-3", sm: "-1" }}
            mb="-4"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            <Flex align="center" justify="center" mt="-2" gap="2">
              <Text
                fontSize={{ base: "md", sm: "xl" }}
                fontWeight={"semibold"}
                textAlign={"left"}
                _hover={{ color: "blue.600" }}
                mt={{ base: "-5", sm: "-4" }}
                mb={{ base: "2", sm: "2" }}
              >
                {post?.title}
              </Text>
              <Image
                fit="cover"
                align="center"
                border="1px solid"
                borderColor={bg}
                w={{ base: "5rem", sm: "10rem" }}
                h={{ base: "5rem", sm: "7rem" }}
                src={post?.image}
                alt="post image"
                rounded={"lg"}
              />
            </Flex>
          </CardBody>
          <Divider />

          <VStack w="full" px="1" alignItems={"flex-start"} flexWrap={"nowrap"}>
            <Text
              fontSize="sm"
              fontWeight={"semibold"}
              fontStyle={"italic"}
              color={color}
              ml="1"
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
