import React from "react";
import {
  Flex,
  Text,
  Image,
  Box,
  VStack,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import image from "../../assets/placeholderImage.webp";
import { FaRegComment } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { formattedDate } from "../../Utils/styles";

const UserPosts = ({ userPosts }) => {
  return (
    <Flex
      gap="2"
      p="2"
      maxH="9rem"
      rounded="base"
      flexWrap="nowrap"
      border="1px solid"
      borderColor="gray.700"
      justifyContent="space-between"
    >
      <Flex h="full" flexWrap="wrap" alignItems="center">
        <Text mt="-2" fontSize="xl" fontWeight="bold">
          {userPosts?.title}
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
        borderColor="gray.700"
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
  );
};

export default UserPosts;
