import React, { useContext, useRef } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Divider,
} from "@chakra-ui/react";
import { context } from "../App";
import RecipeDetails from "../components/RecipeDetails";

const RecipePage = () => {
  const {
    Recipe,
    fetchRecipe,
    fetchDeleteRecipe,
    recipes,
    setRecipes,
    darkMode,
  } = useContext(context);
  const { id } = useParams();
  const navigate = useNavigate();
  const { _id } = Recipe;
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const style = {
    background: darkMode ? "#2e2d2d42" : "#e9e3e3b7",
    transition: "500ms",
    color: darkMode ? "#fdf8f8c2" : "#141414ee",
  };

  useEffect(() => {
    fetchRecipe(id);
  }, [id]);

  const handleDelete = async (rid) => {
    const newRecipes = recipes.filter((recipe) => recipe._id !== rid);
    const { success, message } = await fetchDeleteRecipe(rid);
    setRecipes(newRecipes);
    navigate("/");
    if (!success) {
      toast({
        title: "error",
        status: "error",
        description: "Error encountered, try again",
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

  return (
    <Box
      maxW="700px"
      minW="350px"
      marginX="auto"
      rounded="sm"
      boxShadow="xl"
      style={style}
      transition="All 3s ease-in-out"
    >
      <RecipeDetails />
      {/* ask user for comfirmation before deleting recipe */}
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent
            bg={darkMode ? "gray.900" : "gray.300"}
            color={darkMode ? "gray.300" : "gray.900"}
            w="400px"
            px="2"
          >
            <AlertDialogHeader
              textAlign="center"
              fontSize="xl"
              letterSpacing={"wide"}
              fontWeight="semiBold"
              py={2}
            >
              Are you sure you want to delete this recipe?
            </AlertDialogHeader>
            <Divider borderBottomColor="gray.500" />
            <AlertDialogBody
              textAlign="center"
              fontSize="lg"
              letterSpacing={"tight"}
              py={4}
              px={2}
            >
              Note that this recipe will be deleted parmanently if you
              proceed!!!
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="white"
                variant="outline"
                onClick={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                variant="solid"
                ml="4"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <HStack
        gap="4"
        justifyContent={{ base: "space-between", sm: "flex-end" }}
        px={{ base: "2", sm: "4" }}
        py={10}
      >
        <Button
          colorScheme="red"
          p="4"
          mb="4"
          w="7rem"
          leftIcon={<FaTrashAlt />}
          _hover={{
            bg: "orange.400",
            color: darkMode ? "gray.200" : "gray.700",
          }}
          onClick={onOpen}
        >
          Delete
        </Button>
        <Link to={`/update/${_id}`}>
          <Button
            colorScheme="teal"
            p="4"
            mb="4"
            w="7rem"
            _hover={{
              bg: "green.500",
              color: darkMode ? "gray.200" : "gray.700",
            }}
            leftIcon={<FaEdit />}
          >
            Edit
          </Button>
        </Link>
      </HStack>
      <Box h={2}></Box>
    </Box>
  );
};

export default RecipePage;
