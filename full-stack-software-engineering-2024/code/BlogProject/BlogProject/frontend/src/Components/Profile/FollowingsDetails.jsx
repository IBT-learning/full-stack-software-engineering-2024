import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalContext from "../../Context/useGlobalContext";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";

const FollowingsDetails = () => {
  const [followingsList, setFollowingsList] = useState();
  const { userId } = useParams();
  const { authToken } = useGlobalContext();
  const toast = useToast();
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const fetchFollowingsDetails = async () => {
      try {
        if (userId) {
          const response = await fetch(
            `http://localhost:4000/api/user/getfollowers/${userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                authorization: authToken,
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            setFollowingsList(data.followings);
          } else {
            toast({
              title: "Error",
              status: "error",
              description: data.error,
              duration: 3000,
            });
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchFollowingsDetails();
  }, []);

  return (
    <>
      {followingsList && (
        <>
          <Flex
            align="center"
            gap="1"
            px={{ sm: "4", xl: "10" }}
            bg={bg}
            color={color}
          >
            <Button
              variant="unstyled"
              leftIcon={<IoMdArrowBack />}
              onClick={() => navigate(-1)}
              color={color}
            >
              Back
            </Button>
            <Text color={color} fontSize="2xl" fontWeight="bold" px="2" py="2">
              {`Followers (${followingsList.length})`}
            </Text>
          </Flex>
          <Divider />
          <Flex
            direction="column"
            align="flex-start"
            minH="100vh"
            mt="2"
            color={color}
          >
            {followingsList.length ? (
              followingsList.map((user) => (
                <>
                  <Divider />
                  <Flex
                    key={user._id}
                    w="full"
                    gap="4"
                    mx={{ sm: "4", xl: "10" }}
                    py="2"
                    align="flex-start"
                  >
                    <Avatar name={user.profilename} src={user.profileimage} />
                    <Flex direction="column">
                      <HStack>
                        <Text fontWeight="semibold" letterSpacing="wider">
                          {user.profilename.toUpperCase() || "Profile Name"}
                        </Text>
                        <Text> @{user.username || "username"}</Text>
                      </HStack>
                      <Text fontSize="sm" letterSpacing="wide">
                        {user.Bio}
                      </Text>
                    </Flex>
                  </Flex>
                </>
              ))
            ) : (
              <Text w="full" h="12" py="1" textAlign="center" fontSize="2xl">
                You are not following anyone yet
              </Text>
            )}
          </Flex>
        </>
      )}
      <Divider />
    </>
  );
};

export default FollowingsDetails;
