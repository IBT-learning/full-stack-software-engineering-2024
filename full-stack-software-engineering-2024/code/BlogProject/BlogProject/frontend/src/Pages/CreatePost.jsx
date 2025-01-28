import React, { useState, useEffect } from "react";
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
  HStack,
  useColorModeValue,
  Input,
  Textarea,
  List,
  ListItem,
  ListIcon,
  useToast,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../Context/useGlobalContext";
import { CiSquareRemove } from "react-icons/ci";
import { uploadImage } from "../Utils/styles";

const CreatePost = () => {
  const [inputs, setInputs] = useState({ image: "", title: "", body: "" });
  const [titleFocus, setTitleFocus] = useState(false);
  const [bodyFocus, setBodyFocus] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const { authToken, posts, setPosts } = useGlobalContext();
  const toast = useToast();

  const handleImageUpload = async (event) => {
    try {
      const imageUrl = await uploadImage(event);
      setImagePreview(imageUrl);
      setInputs({ ...inputs, image: imageUrl });
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.message,
        duration: 5000,
      });
    }
  };

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  const focusStyle = {
    _focus: {
      bg: bg,
      border: "none",
      fontSize: "2xl",
      color: color,
    },
  };

  const titleInstruction = [
    "Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.",
    "Use keywords where appropriate to help ensure people can find your post by search.",
  ];

  const bodyInstruction = [
    "Ensure your post has a cover image set to make the most of the home feed and social media platforms.",
    "Share your post on social media platforms or with your co-workers or local communities.",
    "Ask people to leave questions for you in the comments. It's a great way to spark additional discussion describing personally why you wrote it or why people might find it helpful.",
  ];

  const handlePublishPost = async (inputs) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: authToken,
        },
        body: JSON.stringify({ inputs }),
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setPosts([...posts, data.data]);
        setInputs({});
        navigate("/");
        toast({
          title: "Success",
          status: "success",
          description: data.msg,
          duration: 5000,
        });
      }
      if (!response.ok) {
        throw new Error(setErrorMsg(data.error) || "Encountered an error");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setErrorMsg("");
  }, [inputs]);

  return (
    <Box p="4" color={color}>
      <Flex
        gap="4"
        p="4"
        border="1px solid"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        rounded="lg"
      >
        <Flex direction="column" gap="4">
          <HStack mt="" alignItems="flex-start">
            <Button
              variant="unstyled"
              size="lg"
              leftIcon={<IoMdArrowBack size="22" />}
              onClick={() => navigate(-1)}
            ></Button>
            <Heading>Write Your Blog</Heading>
          </HStack>
          <Divider />

          <Flex w="full" alignItems="flex-start">
            <Button fontSize="xl" color={color}>
              Upload post cover image
            </Button>
            <Input
              opacity="0"
              ml="-100%"
              type="file"
              onChange={handleImageUpload}
            />
          </Flex>
          {imagePreview && (
            <Flex w="full" h="12rem" alignItems="flex-start">
              <Image
                w="90%"
                h="full"
                objectFit="fit"
                src={imagePreview}
                alt="Image Preview"
              />
              <IconButton
                icon={<CiSquareRemove size="30" />}
                onClick={() => setImagePreview("")}
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
            onFocus={() => setTitleFocus(true)}
            onBlur={() => setTitleFocus(false)}
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
          <Textarea
            variant="filled"
            h="20rem"
            sx={focusStyle}
            type="textArea"
            id="body"
            placeholder="Write the body of the post here"
            onFocus={() => setBodyFocus(true)}
            onBlur={() => setBodyFocus(false)}
            value={inputs.body}
            onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          />

          <Button colorScheme="blue" onClick={() => handlePublishPost(inputs)}>
            {!loading ? "Publish Post" : "Loading..."}
          </Button>
        </Flex>

        <Box
          w="30%"
          p="4"
          bg={useColorModeValue("gray.400", "blackAlpha.100")}
          rounded="lg"
        >
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

          {titleFocus && (
            <>
              <Text
                fontSize="xl"
                fontStyle="oblique"
                textDecoration="underline"
              >
                Writing a Great Post Title
              </Text>
              <List spacing="2">
                {titleInstruction.map((listItems) => (
                  <ListItem key={listItems}>
                    <ListIcon as={MdCheckCircle} />
                    {listItems}
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {bodyFocus && (
            <>
              <Text
                fontSize="xl"
                fontStyle="oblique"
                textDecoration="underline"
              >
                Before Publishing Your Post
              </Text>
              <List spacing="2">
                {bodyInstruction.map((listItems) => (
                  <ListItem key={listItems}>
                    <ListIcon as={MdCheckCircle} />
                    {listItems}
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default CreatePost;
