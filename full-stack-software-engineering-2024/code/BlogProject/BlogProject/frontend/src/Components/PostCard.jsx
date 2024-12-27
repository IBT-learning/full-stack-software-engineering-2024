import React, { useState } from "react";
import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Text,
  Avatar,
  Heading,
  Image,
  Button,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdBookmarkAdded,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const PostCard = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");
  const [liked, setLiked] = useState(false);
  const [bookmarked, setbookmarked] = useState(false);

  return (
    <Card maxW="md" bg={bg} color={color} cursor={"pointer"}>
      <CardHeader mt="-2" mb="-2">
        <Flex flex="1" spacing="2">
          <Flex gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <VStack>
              <Heading size="md">Segun Adebayor</Heading>
              <Text>@Sage_Adebayor</Text>
            </VStack>
          </Flex>
        </Flex>
      </CardHeader>
      <Divider />
      <CardBody mb="-2">
        <Flex direction={"column"} gap="2">
          <Heading fontSize={"lg"} mt="-2" mb="2">
            This is a placeholder for title of the posted blogs
          </Heading>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            h="40"
            w="full"
            rounded={"lg"}
          />
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            {/* speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. */}
          </Text>
        </Flex>
      </CardBody>
      <Divider />
      <Flex justify="flex-start" flexWrap="nowrap" pb="2">
        <Button
          flex="1"
          iconSpacing={"1"}
          variant="ghost"
          leftIcon={
            liked ? (
              <MdFavorite size="22" />
            ) : (
              <MdOutlineFavoriteBorder size={22} />
            )
          }
          color={color}
          onClick={() => setLiked(!liked)}
        >
          123k Likes
        </Button>
        <Button
          flex="1"
          iconSpacing={"1"}
          variant="ghost"
          leftIcon={<FaRegComment size={18} />}
          color={color}
        >
          256k Comments
        </Button>
        <Button
          flex="1"
          variant="ghost"
          iconSpacing={"1"}
          leftIcon={
            bookmarked ? (
              <MdBookmarkAdded size={22} />
            ) : (
              <MdOutlineBookmarkBorder size="22" />
            )
          }
          color={color}
          mx={-2}
          onClick={() => setbookmarked(!bookmarked)}
        >
          Bookmark
        </Button>
      </Flex>
    </Card>
  );
};

export { PostCard };

const MobilePostCard = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setbookmarked] = useState(false);
  const post =
    "This is a placeholder for title of the post, it should not be more than 50 characters";
  const color = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Card
      direction="row"
      h={{ base: "12rem", sm: "16rem" }}
      ml="-4"
      p="2"
      bg={bg}
      color={color}
      overflow="hidden"
      variant={"elevated"}
      cursor="pointer"
    >
      <Image
        objectFit="cover"
        w={{ base: "8rem", sm: "10rem" }}
        h={{ base: "100%", sm: "100%" }}
        alignSelf={{ base: "", sm: "flex-start" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
        rounded={"lg"}
      />

      <Flex direction="column">
        <CardHeader
          mt={{ base: "-7", sm: "-5" }}
          ml={{ base: "-2", sm: "" }}
          mb={{ base: "-5", sm: "-2" }}
          mr={{ base: "-8", sm: "-6" }}
        >
          <Flex justifyContent="space-between">
            <Flex gap="3" alignItems="center" flexWrap="nowrap">
              <Avatar
                size={{ base: "xs", sm: "md" }}
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />

              <Box>
                <Heading size={{ base: "xs", sm: "sm" }}>Kareem Samad</Heading>
                <Text fontSize={{ base: "xs", sm: "sm" }}>
                  @Samad_ksbthedev
                </Text>
              </Box>
            </Flex>

            <IconButton
              variant="ghost"
              icon={<BsThreeDotsVertical />}
              size="lg"
            />
          </Flex>
        </CardHeader>
        <Divider />

        <CardBody ml={{ base: "-3", sm: "-1" }} mb="-4">
          <Text
            as="p"
            fontSize={{ base: "md", sm: "xl" }}
            fontStyle={"oblique"}
            fontWeight={"semibold"}
            textAlign={"left"}
            mt={{ base: "-5", sm: "-4" }}
            mb={{ base: "2", sm: "2" }}
          >
            {post}
          </Text>
        </CardBody>
        <Divider />

        <VStack w="full" px="1" alignItems={"flex-start"} flexWrap={"nowrap"}>
          <Text
            fontSize="sm"
            fontWeight={"semibold"}
            fontStyle={"italic"}
            color={color}
          >
            ◾ Posted on (date placeholder)
          </Text>
          <Box>
            <Flex flex="1" alignItems={"flex-start"}>
              <Button
                variant="ghost"
                size={{ base: "xs", sm: "sm" }}
                leftIcon={
                  liked ? (
                    <MdFavorite size="22" />
                  ) : (
                    <MdOutlineFavoriteBorder size={22} />
                  )
                }
                color={color}
                onClick={() => setLiked(!liked)}
                iconSpacing={"1"}
                flexShrink={0}
              >
                0 Likes
              </Button>
              <Button
                variant="ghost"
                size={{ base: "xs", sm: "sm" }}
                leftIcon={<FaRegComment size="18" />}
                color={color}
                iconSpacing={"1"}
              >
                0 Comments
              </Button>
              <Button
                variant="ghost"
                size={{ base: "xs", sm: "sm" }}
                leftIcon={
                  bookmarked ? (
                    <MdBookmarkAdded size={22} />
                  ) : (
                    <MdOutlineBookmarkBorder size="22" />
                  )
                }
                color={color}
                onClick={() => setbookmarked(!bookmarked)}
                iconSpacing={"1"}
              >
                Bookmark
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Card>
  );
};

export { MobilePostCard };
