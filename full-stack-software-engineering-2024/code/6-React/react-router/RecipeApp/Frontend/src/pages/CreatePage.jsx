import React, { useContext, useState } from "react";
import { Box, Heading, Flex, Button, useToast } from "@chakra-ui/react";
import { context } from "../App";
import { useNavigate } from "react-router-dom";
import CreateInput from "../components/CreateInput";

const CreatePage = () => {
  const { darkMode, createNewRecipe } = useContext(context);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    author: "",
    ingredients: [],
    instructions: "",
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmitBtn = async () => {
    const { success, message } = await createNewRecipe(newRecipe);
    navigate("/");
    if (!success) {
      toast({
        title: "Error",
        status: "error",
        description: msg,
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "success",
        status: "success",
        description: message,
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const style = {
    bg: darkMode ? "gray.800" : "gray.200",
    transition: "bg 1s ease-in-out",
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      mx="auto"
      w={{ base: "100%", sm: "85%", md: "70%" }}
      mt="5rem"
      p="4"
      boxShadow="xl"
      sx={style}
      rounded="md"
    >
      <Heading
        as="h2"
        fontSize="2xl"
        textAlign="center"
        mb="5"
        textTransform={"uppercase"}
        textDecoration={"underline"}
      >
        Add New Recipe
      </Heading>
      <Flex direction="column" gap={5}>
        <CreateInput newRecipe={newRecipe} setNewRecipe={setNewRecipe} />

        <Button
          my="4"
          w="full"
          py="2"
          bg="teal.300"
          color={darkMode ? "gray.200" : "gray.700"}
          rounded="md"
          _hover={{
            bg: "teal.500",
            borderColor: "gray.200",
            borderWidth: "2px",
            color: "gray.900",
          }}
          onClick={handleSubmitBtn}
        >
          Add New Recipe
        </Button>
      </Flex>
      <Box h={8}></Box>
    </Box>
  );
};

export default CreatePage;
