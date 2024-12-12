import { Box, Heading, Flex, Button, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { context } from "../App";
import UpdateInput from "../components/UpdateInput";

const UpdateRecipePage = () => {
  const { Recipe, fetchUpdateRecipe, darkMode } = useContext(context);
  const { id } = useParams();
  const [updatedRecipe, setUpdatedRecipe] = useState({
    title: Recipe.title,
    author: Recipe.author,
    ingredients: Recipe.ingredients,
    instructions: Recipe.instructions,
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleSaveChanges = async () => {
    const { success, msg } = await fetchUpdateRecipe(id, updatedRecipe);
    navigate(`/recipe/${id}`);
    // display toast for success or error feedback
    if (!success) {
      toast({
        title: "error",
        description: msg,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "success",
        description: msg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      maxW="700px"
      mt="5rem"
      px="2"
      marginX="auto"
      boxShadow="md"
      bg={darkMode ? "gray.800" : "gray.200"}
      rounded="md"
    >
      <Heading
        as="h2"
        fontSize="2xl"
        pt={2}
        textAlign="center"
        textTransform={"uppercase"}
        textDecoration={"underline"}
      >
        Update Recipe
      </Heading>
      <Flex
        direction="column"
        transition="all 0.5s ease-in-out"
        px={{ base: "2", sm: "4" }}
        spacing={3}
      >
        <UpdateInput
          updatedRecipe={updatedRecipe}
          setUpdatedRecipe={setUpdatedRecipe}
        />

        <Box
          w="full"
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", sm: "flex-end" }}
          gap={6}
          py={4}
        >
          <Button
            variant={"outline"}
            colorScheme="gray.200"
            rounded="md"
            _hover={{
              bg: "gray.500",
              color: "gray.900",
            }}
            onClick={() => navigate(`/recipe/${id}`)}
          >
            Back
          </Button>
          <Button
            variant="solid"
            colorScheme="teal"
            color={darkMode ? "gray.200" : "gray.700"}
            rounded="md"
            _hover={{
              bg: "teal.300",
              color: "gray.900",
            }}
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </Box>
        <Box h="12"></Box>
      </Flex>
    </Box>
  );
};

export default UpdateRecipePage;
