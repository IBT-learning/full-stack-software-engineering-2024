import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Image,
  Flex,
  Box,
  Heading,
  IconButton,
  Divider,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Input,
  Textarea,
  Toast,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../Context/useGlobalContext";
import { CiSquareRemove } from "react-icons/ci";
import { useToast } from "@chakra-ui/react";

const EditPost = () => {
  const { posts, setPosts, post, setPost, authToken } = useGlobalContext();
  const [editedInputs, setEditedInputs] = useState({
    title: post.title,
    body: post.body,
    image: post.image,
  });
  const [newImagePreview, setNewImagePreview] = useState("");
  const toast = useToast();

  const { postId } = useParams();
  const navigate = useNavigate();

  const handlePublishPost = async (editedInputs) => {
    const { title, body, image } = editedInputs;
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/update/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: authToken,
          },
          body: JSON.stringify({ title, body, image }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        toast({
          title: "Error",
          description: data.error,
          status: "error",
          duration: 5000,
        });
      }
      if (response.ok) {
        setPosts([...posts, data.data || post]);
        toast({
          title: "Success",
          description: data.msg,
          status: "success",
          duration: 5000,
        });
        navigate("/");
        setPost({});
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  const focusStyle = {
    _focus: {
      bg: "gray.700",
      border: "none",
      fontSize: "2xl",
      color: "gray.100",
    },
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    if (!file || !file.type.match(/image.*/)) {
      return toast({
        title: "Warning",
        status: "warning",
        description: "only a small size image file is acceptable",
        duration: 5000,
      });
    }
    const reader = new FileReader();
    reader.onloadend = (event) => {
      const imageUrl = event.target.result;
      setNewImagePreview(imageUrl);
      setEditedInputs({ ...editedInputs, image: imageUrl || post.image });
    };
    reader.readAsDataURL(file);
  };

  console.log(editedInputs);

  return (
    <Box p="4" bg={bg} color={color}>
      <Flex
        gap="4"
        p="4"
        border="1px solid"
        borderColor={"gray.700"}
        rounded="lg"
      >
        <Flex direction="column" gap="4">
          <VStack mt="-4" alignItems="flex-start">
            <Button
              variant="unstyled"
              leftIcon={<IoMdArrowBack />}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Heading>Edit your Post</Heading>
          </VStack>
          <Divider />

          <Flex w="full" alignItems="flex-start">
            <Button fontSize="xl">Change post cover image</Button>
            <Input
              opacity="0"
              ml="-100%"
              type="file"
              onChange={handleChangeImage}
            />
          </Flex>
          {newImagePreview && (
            <Flex w="full" h="12rem" alignItems="flex-start">
              <Image
                w="90%"
                h="full"
                objectFit="fit"
                src={newImagePreview}
                alt="Image Preview"
              />
              <IconButton
                icon={<CiSquareRemove size="30" />}
                onClick={() => setNewImagePreview("")}
              />
            </Flex>
          )}

          <Input
            variant="filled"
            size="lg"
            sx={focusStyle}
            type="text"
            id="title"
            placeholder="Write the title of the post here"
            value={editedInputs.title}
            onChange={(e) =>
              setEditedInputs({ ...editedInputs, title: e.target.value })
            }
          />
          <Textarea
            variant="filled"
            h="20rem"
            sx={focusStyle}
            type="textArea"
            id="body"
            placeholder="Write the body of the post here"
            value={editedInputs.body}
            onChange={(e) =>
              setEditedInputs({ ...editedInputs, body: e.target.value })
            }
          />

          <Button
            colorScheme="blue"
            onClick={() => handlePublishPost(editedInputs)}
          >
            Publish Edited Post
          </Button>
        </Flex>

        {/* <Box w="30%" p="4" bg="gray.800" rounded="lg">
          {errorMsg && (
            <VStack alignItems="center" justifyContent="center" h="full">
              <Text fontSize="2xl" color="red.400">
                Error Encountered:
              </Text>
              <Text color="red.400" fontSize={"xl"} textAlign="center">
                {errorMsg}
              </Text>
            </VStack>
          )}
        </Box> */}
      </Flex>
    </Box>
  );
};

export default EditPost;
