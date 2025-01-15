import {
  Avatar,
  Box,
  Text,
  Flex,
  Divider,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import useGlobalContext from "../../Context/useGlobalContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Comments = ({ comments }) => {
  const { auth } = useGlobalContext();

  return (
    <>
      {comments && (
        <Flex direction="column" gap="2">
          <Text fontSize="lg" fontWeight="semibold" mb="-2">
            Readers Comments
          </Text>
          <Divider />
          {comments?.map((comment, index) => (
            <>
              <Flex align="center" gap="2" key={comment._id}>
                <Avatar
                  size="sm"
                  name={auth.profilename}
                  src={auth.profileimage}
                />
                <Text>{auth.profilename}</Text>
                <Text>@{auth.username} </Text>
              </Flex>
              <Flex justify="space-between" align="center" mt="-2">
                <Text ml="8" key={index} fontStyle="oblique">
                  {comment.text}{" "}
                </Text>
                <HStack mr="4" gap="" mb="-2">
                  <IconButton
                    variant="ghost"
                    color="red"
                    icon={<MdOutlineFavoriteBorder size="18" />}
                  />
                  <IconButton
                    color="red.500"
                    variant="ghost"
                    icon={<IoMdTrash size="18" />}
                  />
                </HStack>
              </Flex>
              <Divider />
            </>
          ))}
          <Box h="14"></Box>
        </Flex>
      )}
    </>
  );
};

export default Comments;
