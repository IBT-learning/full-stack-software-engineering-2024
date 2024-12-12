import { Heading, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <VStack minH="100vh" mt="10rem" spacing={4}>
      <Heading
        textTransform="uppercase"
        fontSize="5xl"
        fontWeight="bold"
        letterSpacing="wider"
      >
        error 404 | Page not found
      </Heading>
      <Text textAlign="center" fontSize="xl" fontWeight="semiBold">
        Please Refresh the page or check that your url address is correct
      </Text>
      <Link to="/">
        <Button colorScheme="blue" rightIcon={<FaHome size={20} />}>
          Go to homepage
        </Button>
      </Link>
    </VStack>
  );
};

export default MissingPage;
