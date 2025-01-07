import React from "react";
import { Flex, Text, Image, Box, VStack, IconButton } from "@chakra-ui/react";
import image from "../../assets/placeholderImage.webp";
import { FaRegComment } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const UserPosts = ({ userPosts }) => {
  return (
    <Flex
      gap="2"
      p="2"
      maxH="8rem"
      rounded="base"
      flexWrap="nowrap"
      border="1px solid"
      borderColor="gray.700"
      justifyContent="space-between"
    >
      <Box w="30rem">
        <Text fontSize="2xl" fontWeight="bold">
          {userPosts?.title}
        </Text>
      </Box>
      <Image
        w="7rem"
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
