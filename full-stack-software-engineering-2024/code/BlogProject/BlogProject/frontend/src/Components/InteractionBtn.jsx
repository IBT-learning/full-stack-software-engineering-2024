import React from "react";
import { Flex, Button, useColorModeValue } from "@chakra-ui/react";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdBookmarkAdded,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const InteractionBtn = ({
  post,
  noOfLikes,
  liked,
  bookmarked,
  setbookmarked,
  handleLike,
}) => {
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex flexWrap="nowrap" alignItems={"flex-start"} pb="2">
      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={
          liked ? (
            <MdFavorite size="22" />
          ) : (
            <MdOutlineFavoriteBorder size={22} />
          )
        }
        color={color}
        onClick={() => handleLike(post._id, index)}
        iconSpacing={"1"}
      >
        {`${noOfLikes} Likes`}
      </Button>
      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={<FaRegComment size="18" />}
        color={color}
        iconSpacing={"1"}
      >
        0 Comments
      </Button>
      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={
          bookmarked ? (
            <MdBookmarkAdded size="22" />
          ) : (
            <MdOutlineBookmarkBorder size="22" />
          )
        }
        color={color}
        onClick={() => setbookmarked((v) => !v)}
        iconSpacing={"1"}
      >
        Bookmark
      </Button>
    </Flex>
  );
};

export default InteractionBtn;
