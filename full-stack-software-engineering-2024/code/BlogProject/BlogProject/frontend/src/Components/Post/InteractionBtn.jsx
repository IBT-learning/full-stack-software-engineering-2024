import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdBookmarkAdded,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InteractionBtn = ({ post }) => {
  const [bookmarked, setbookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  return (
    <Flex
      flexWrap="nowrap"
      alignItems={"flex-start"}
      pb="2"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={
          post.likes.length >= 1 ? (
            <MdFavorite size="22" />
          ) : (
            <MdOutlineFavoriteBorder size={22} />
          )
        }
        color=""
        iconSpacing="1"
        onClick={() => navigate(`/posts/${post._id}`)}
      >
        {`${post.likes.length} Likes`}
      </Button>
      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={<FaRegComment size="18" />}
        color=""
        iconSpacing="1"
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
        color={""}
        onClick={() => setbookmarked((v) => !v)}
        iconSpacing="1"
      >
        Bookmark
      </Button>
    </Flex>
  );
};

export default InteractionBtn;
