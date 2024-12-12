import React, { useContext } from "react";
import { Box, Input, Text, Textarea } from "@chakra-ui/react";
import { context } from "../App";

const UpdateInput = ({ updatedRecipe = { Recipe }, setUpdatedRecipe }) => {
  const { darkMode } = useContext(context);
  const focusStyle = {
    pl: "2",
    bg: darkMode ? "gray.800" : "gray.400",
    color: darkMode ? "gray.200" : "gray.700",
    border: "none",
  };

  const theme = {
    bg: darkMode ? "gray.700" : "gray.300",
    transition: "bg 1s ease-in-out",
  };

  return (
    <>
      <Box mb={3}>
        <Text ml={2} mb={1} fontSize="lg" letterSpacing="wide">
          Title:{" "}
        </Text>
        <Input
          type="text"
          focusBorderColor="teal.400"
          pl="2"
          border="none"
          sx={theme}
          _focus={focusStyle}
          value={updatedRecipe.title}
          onChange={(e) =>
            setUpdatedRecipe({ ...updatedRecipe, title: e.target.value })
          }
        />
      </Box>

      <Box mb={3}>
        <Text ml={2} mb={1} fontSize="lg" letterSpacing="wide">
          Author:
        </Text>
        <Input
          type="text"
          focusBorderColor="teal.400"
          pl="2"
          border="base"
          sx={theme}
          _focus={focusStyle}
          value={updatedRecipe.author}
          onChange={(e) =>
            setUpdatedRecipe({ ...updatedRecipe, author: e.target.value })
          }
        />
      </Box>

      <Box mb={3}>
        <Text ml={2} mb={1} fontSize="lg" letterSpacing="wide">
          Ingredients:
        </Text>
        <Input
          type="text"
          focusBorderColor="teal.400"
          pl="2"
          border="none"
          sx={theme}
          _focus={focusStyle}
          value={updatedRecipe.ingredients.join(", ")}
          onChange={(e) =>
            setUpdatedRecipe({
              ...updatedRecipe,
              ingredients: e.target.value.split(", "),
            })
          }
        />
      </Box>

      <Box mb={3}>
        <Text ml={2} mb={1} fontSize="lg" letterSpacing="wide">
          Instructions:
        </Text>
        <Textarea
          h="8rem"
          focusBorderColor="teal.400"
          p={2}
          overflow="hidden"
          border="none"
          sx={theme}
          _focus={focusStyle}
          value={updatedRecipe.instructions}
          onChange={(e) =>
            setUpdatedRecipe({
              ...updatedRecipe,
              instructions: e.target.value,
            })
          }
        />
      </Box>
    </>
  );
};

export default UpdateInput;
