import React, { useContext } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { context } from "../App";

const CreateInput = ({
  newRecipe = { title, author, ingredients, instructions },
  setNewRecipe,
}) => {
  const { darkMode } = useContext(context);

  const focusStyle = {
    pl: "2",
    bg: darkMode ? "gray.800" : "gray.400",
    color: darkMode ? "gray.200" : "gray.700",
    border: "none",
  };

  const theme = {
    bg: darkMode ? "gray.700" : "gray.300",
    fontSize: "sm",
    letterSpacing: "wider",
    border: "none",
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Type recipe title here..."
        focusBorderColor="teal.400"
        pl="2"
        sx={theme}
        _focus={focusStyle}
        required
        value={newRecipe.title}
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      />

      <Input
        type="text"
        placeholder="Type author name here..."
        focusBorderColor="teal.400"
        pl="2"
        sx={theme}
        _focus={focusStyle}
        required
        value={newRecipe.author}
        onChange={(e) => setNewRecipe({ ...newRecipe, author: e.target.value })}
      />

      <Input
        type="text"
        placeholder="Type Ingredients here..."
        focusBorderColor="teal.400"
        pl="2"
        sx={theme}
        _focus={focusStyle}
        required
        value={newRecipe.ingredients}
        onChange={(e) =>
          setNewRecipe({
            ...newRecipe,
            ingredients: e.target.value.trim().split(","),
          })
        }
      />

      <Textarea
        w="full"
        placeholder="Type instructions here..."
        h="8rem"
        p="2"
        focusBorderColor="teal.400"
        sx={theme}
        overflow="hidden"
        _focus={focusStyle}
        required
        value={newRecipe.instructions}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, instructions: e.target.value })
        }
      />
    </>
  );
};

export default CreateInput;
