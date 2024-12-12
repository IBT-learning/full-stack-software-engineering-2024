import {
  Text,
  Button,
  Flex,
  HStack,
  Image,
  VStack,
  Box,
  Badge,
} from "@chakra-ui/react";
import { MdFoodBank } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../App.jsx";

const RecipeCard = ({ recipe, style }) => {
  const { darkMode } = useContext(context);
  const navigate = useNavigate();

  const handleClick = (Id) => {
    navigate(`recipe/${Id}`);
  };

  return (
    <Flex
      direction="column"
      h="15rem"
      minW="230px"
      rounded="md"
      boxShadow="base"
      style={style}
    >
      <Image
        src="./src/Assets/recipe-7.avif"
        alt="recipe-image"
        w="100%"
        h="50%"
        roundedTop="md"
        objectFit="cover"
      />

      <VStack pt={2} pb={1} gap={3} px={1} align="flex-start">
        <HStack w="full" pr="2" justify={"space-between"} wrap={"wrap"}>
          <HStack>
            <MdFoodBank fill="black" size={"22"} />
            <Text fontSize="1xl" fontWeight="semibold">
              {recipe.title}
            </Text>
          </HStack>

          <Badge rounded="md" bg="orange.200" ml="2">
            <Text fontSize="1xl" fontWeight="semibold">
              {recipe.ingredients.length} Ingredients
            </Text>
          </Badge>
        </HStack>

        <HStack ml={1}>
          <FaUserAlt fill="black" size={"18"} />
          <Text fontSize="md">{recipe.author} </Text>
        </HStack>
        <Button
          bg="orange.500"
          w="100%"
          _hover={{
            bg: "orange.600",
            border: darkMode ? "1px solid white" : "1px solid black",
          }}
          onClick={() => handleClick(recipe._id)}
        >
          View Recipe
        </Button>
      </VStack>
    </Flex>
  );
};

export default RecipeCard;
