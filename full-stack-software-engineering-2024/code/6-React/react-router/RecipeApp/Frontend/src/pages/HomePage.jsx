import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { context } from "../App";
import {
  SimpleGrid,
  Text,
  Box,
  Skeleton,
  SkeletonText,
  Heading,
} from "@chakra-ui/react";

const HomePage = () => {
  const { isLoading, recipes, darkMode } = useContext(context);

  const style = {
    background: darkMode ? "#2e2d2d6c" : "#e9e3e3ef",
    transition: "500ms",
    color: darkMode ? "#fdf8f8c2" : "#141414ee",
  };

  return (
    <>
      <Box
        position="fixed"
        top="4.5rem"
        left="auto"
        w="1024px"
        zIndex={8}
        p="3"
        boxShadow="lg"
        bg={darkMode ? "gray.800" : "gray.200"}
      >
        <Heading
          as="h1"
          fontSize="1xl"
          fontWeight="bold"
          letterSpacing={"wide"}
        >
          {recipes.length <= 0
            ? "Empty Recipes List"
            : "Available Recipes List"}
        </Heading>
      </Box>
      {/* show a skeleton component when data is loading */}
      {isLoading && (
        <SimpleGrid
          minChildWidth="225px"
          rowGap={5}
          columnGap={2}
          p="5"
          overflowY="hidden"
        >
          {[...Array(9)].map((_, index) => (
            <Box
              key={index}
              padding="3"
              boxShadow="lg"
              h="15rem"
              minW="250px"
              rounded="md"
              style={style}
            >
              <Skeleton h="50%" startColor="gray.900" endColor="gray.700" />
              <SkeletonText
                mt="4"
                w="60%"
                noOfLines={2}
                spacing="2"
                skeletonHeight="4"
                startColor="gray.900"
                endColor="gray.700"
              />
              <Skeleton
                mt={5}
                h="15%"
                rounded="lg"
                startColor="gray.900"
                endColor="gray.700"
              />
            </Box>
          ))}
        </SimpleGrid>
      )}

      {/* if there are no recipes to display */}

      {recipes.length <= 0 && (
        <>
          <Box h={8} textAlign="center">
            <Heading fontSize={"2xl"} fontWeight="semiBold" m={6}>
              No recipes are available at the moment...😉{" "}
            </Heading>
            <Link to="/create">
              <Text
                textDecor={"underline"}
                color={"blue.500"}
                fontSize={"xl"}
                _active
                _hover={{ color: "blue.300" }}
              >
                Click here to create a new recipe✔
              </Text>
            </Link>
          </Box>
        </>
      )}

      <SimpleGrid
        minChildWidth={"220px"}
        rowGap={5}
        columnGap={2}
        p={{ base: 6, sm: 3 }}
        mt="7rem"
      >
        {recipes.map((recipe) => (
          <RecipeCard
            isLoading={isLoading}
            key={recipe._id}
            recipe={recipe}
            id={recipe._id}
            style={style}
          />
        ))}
        <Box h={8}></Box>
      </SimpleGrid>
    </>
  );
};

export default HomePage;
