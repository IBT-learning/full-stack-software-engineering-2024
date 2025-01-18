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
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";

const FollowersDetails = () => {
  const [followersList, setFollowersList] = useState();
  const { userId } = useParams();
  const { authToken } = useGlobalContext();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowersDetails = async () => {
      if (userId) {
        try {
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
            setFollowersList(data.followers);
          } else {
            toast({
              title: "Error",
              status: "error",
              description: data.error,
              duration: 3000,
            });
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    fetchFollowersDetails();
  }, []);

  return (
    <>
      {followersList && (
        <>
          <Flex align="center" gap="3" px="2">
            <Button
              variant="unstyled"
              leftIcon={<IoMdArrowRoundBack />}
              onClick={() => navigate(-1)}
              color="white"
            >
              Back
            </Button>
            <Text fontSize="2xl" fontWeight="bold" px="2" py="2">
              Followers
            </Text>
          </Flex>
          <Divider />
          <Flex>
            {followersList.length ? (
              followersList.map((user) => (
                <>
                  <Divider />
                  <Flex
                    key={user._id}
                    h="5rem"
                    w="full"
                    gap="4"
                    px="4"
                    py="2"
                    align="center"
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
              <>
                <Text w="full" py="2" textAlign="center" fontSize="2xl">
                  You don't have any followers yet, start posting to get
                  followers
                </Text>
              </>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

export default FollowersDetails;
