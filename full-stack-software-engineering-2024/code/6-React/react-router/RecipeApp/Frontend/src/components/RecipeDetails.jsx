import React, { useContext } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Skeleton,
  AbsoluteCenter,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { context } from "../App";

const RecipeDetails = () => {
  const { isLoading, darkMode, Recipe } = useContext(context);

  const { title, author, ingredients, instructions } = Recipe;

  return (
    <>
      {Recipe && (
        <>
          <Skeleton
            isLoaded={!isLoading}
            w="100%"
            h="300px"
            mb="5"
            startColor="gray.900"
            endColor="gray.700"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              w="full"
              h="300px"
              roundedTop="md"
              objectFit="cover"
              alt="recipe-image"
            />
          </Skeleton>

          <Flex
            maxW="100%"
            direction="column"
            gap={6}
            px={{ base: "2", sm: "4" }}
          >
            <Skeleton
              isLoaded={!isLoading}
              mb={2}
              startColor="gray.900"
              endColor="gray.700"
            >
              <Box fontSize="1.3rem" pos="relative" px={2} mt="5" w="100%">
                <Divider />
                <AbsoluteCenter px={3} bg="teal.500" rounded="lg">
                  Recipe-Title
                </AbsoluteCenter>
              </Box>

              <Box
                bg={darkMode ? "gray.900" : "gray.200"}
                px="2"
                py="3"
                rounded="md"
                w="100%"
              >
                <Text
                  textAlign="center"
                  fontSize="1.5rem"
                  mt="3"
                  color={darkMode ? "" : "gray.700"}
                >
                  {title}
                </Text>
              </Box>
            </Skeleton>

            <Skeleton
              isLoaded={!isLoading}
              mb={2}
              startColor="gray.900"
              endColor="gray.700"
            >
              <Box fontSize="1.3rem" pos="relative" px={2}>
                <Divider />
                <AbsoluteCenter px={3} bg="teal.500" rounded="lg">
                  Ingredients
                </AbsoluteCenter>
              </Box>

              <Box
                bg={darkMode ? "gray.900" : "gray.200"}
                px="2"
                py="3"
                rounded="md"
              >
                <Text
                  textAlign="center"
                  fontSize="1.2rem"
                  mt="3"
                  color={darkMode ? "" : "gray.700"}
                >
                  {ingredients.map((ingr, i) => (
                    <Text key={ingr}>✨ {ingr} ✨ </Text>
                  ))}
                </Text>
              </Box>
            </Skeleton>

            <Skeleton
              isLoaded={!isLoading}
              startColor="gray.900"
              endColor="gray.700"
            >
              <Box fontSize="1.3rem" pos="relative" px={2}>
                <Divider />
                <AbsoluteCenter px={3} bg="teal.500" rounded="lg">
                  Instructions
                </AbsoluteCenter>
              </Box>

              <Box
                bg={darkMode ? "gray.900" : "gray.200"}
                px="2"
                py="3"
                rounded="md"
              >
                <Text
                  textAlign="center"
                  fontSize="1.2rem"
                  mt="3"
                  color={darkMode ? "" : "gray.700"}
                >
                  {instructions}
                </Text>
              </Box>
            </Skeleton>

            <Text
              bg="teal.500"
              fontSize="1rem"
              rounded="lg"
              p="2"
              textAlign="center"
            >
              AUTHOR:
              <Badge ml="2" p="2" rounded="md" bg="teal.200">
                {author}
              </Badge>
            </Text>
          </Flex>
        </>
      )}
    </>
  );
};

export default RecipeDetails;
