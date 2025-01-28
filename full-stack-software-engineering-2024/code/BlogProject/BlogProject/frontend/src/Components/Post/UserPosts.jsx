import React from "react";
import {
  Flex,
  Text,
  Image,
  Box,
  VStack,
  IconButton,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import image from "../../assets/placeholderImage.webp";
import { FaRegComment } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { formattedDate } from "../../Utils/styles";
import { useNavigate } from "react-router-dom";

const UserPosts = ({ userPosts }) => {
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Flex
        gap="2"
        p="2"
        maxW={{ base: "full", sm: "full", md: "550px" }}
        maxH="10rem"
        rounded="base"
        border="1px solid"
        borderColor={useColorModeValue("gray.300", "gray.800")}
        justifyContent="space-between"
        cursor="pointer"
        bg={useColorModeValue("whiteAlpha.200", "blackAlpha.300")}
        color={color}
        onClick={() => navigate(`/posts/${userPosts._id}`)}
      >
        <Flex flexWrap="wrap" alignItems="center">
          <Text mt="-2" fontSize="xl" fontWeight="bold">
            {userPosts?.title.length > 60
              ? userPosts.title.slice(0, 60) + "..."
              : userPosts.title}
          </Text>
          <Badge>posted on {formattedDate(userPosts?.createdAt)}</Badge>
        </Flex>
        <Image
          w="7rem"
          flexGrow="1"
          rounded="lg"
          src={userPosts.image || image}
          alt="post image"
        />
        <VStack
          gap="1"
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.800")}
          p="2"
          rounded="lg"
        >
          <VStack mt="-3">
            <IconButton variant="ghost" icon={<MdFavorite size="22" />} />
            <Text mt="-4" fontSize="xs">
              {userPosts?.likes?.length} Likes
            </Text>
          </VStack>
          <VStack mt="-3">
            <IconButton variant="ghost" icon={<FaRegComment size="18" />} />
            <Text mt="-4" fontSize="xs" textAlign="center">
              {userPosts?.comments?.length} Comments
            </Text>
          </VStack>
        </VStack>
      </Flex>
      <Box h="6"></Box>
    </>
  );
};

export default UserPosts;
