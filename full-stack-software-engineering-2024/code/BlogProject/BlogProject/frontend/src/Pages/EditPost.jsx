import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Image,
  Flex,
  Box,
  Heading,
  IconButton,
  Divider,
  Button,
  VStack,
  useColorModeValue,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../Context/useGlobalContext";
import { CiSquareRemove } from "react-icons/ci";
import { useToast } from "@chakra-ui/react";
import { uploadImage } from "../Utils/styles";

const EditPost = () => {
  const { posts, setPosts, post, setPost, authToken } = useGlobalContext();
  const [editedInputs, setEditedInputs] = useState({
    title: post.title,
    body: post.body,
    image: post.image,
  });
  const [newImagePreview, setNewImagePreview] = useState("");
  const [loading, setLoading] = useState(null);
  const toast = useToast();

  const { postId } = useParams();
  const navigate = useNavigate();

  const handlePublishPost = async (editedInputs) => {
    setLoading(true);
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
        setLoading(false);
        navigate("/");
        toast({
          title: "Success",
          description: data.msg,
          status: "success",
          duration: 5000,
        });
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

  const handleChangeImage = async (event) => {
    try {
      const imageUrl = await uploadImage(event);
      setNewImagePreview(imageUrl);
      setEditedInputs({ ...editedInputs, image: imageUrl || post.image });
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.message,
        duration: 5000,
      });
    }
  };

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
                align="center"
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
            {!loading ? "Publish Edited Post" : "Loading..."}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EditPost;
