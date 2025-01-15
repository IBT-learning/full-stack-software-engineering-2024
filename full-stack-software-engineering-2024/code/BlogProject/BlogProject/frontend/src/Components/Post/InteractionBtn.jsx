import React, { useEffect, useState } from "react";
import { Flex, Button, useToast } from "@chakra-ui/react";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdBookmarkAdded,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalContext from "../../Context/useGlobalContext";

const InteractionBtn = ({ post }) => {
  const { setBookmarkList, authToken } = useGlobalContext();
  const navigate = useNavigate();
  const { postId } = useParams();
  const toast = useToast();

  const handleBookmarkList = async (postid) => {
    navigate(`/bookmark/${postid}`);
    try {
      const response = await fetch(
        `http://localhost:4000/api/post/bookmark/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: authToken,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        toast({
          title: "Error",
          status: "error",
          description: data.error,
          duration: 2000,
          position: "top",
        });
      } else {
        setBookmarkList(data.data);
        toast({
          title: "Success",
          status: "success",
          description: data.msg,
          duration: 2000,
          position: "top",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Flex flexWrap="nowrap" alignItems={"flex-start"} pb="2">
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
        onClick={() => navigate(`/comments/${post._id}`)}
      >
        {post?.comments?.length} Comments
      </Button>

      <Button
        variant="ghost"
        flex="1"
        size={{ base: "xs", sm: "sm", md: "md" }}
        leftIcon={<MdOutlineBookmarkBorder size="22" />}
        color={""}
        onClick={() => handleBookmarkList(post._id)}
        iconSpacing="1"
      >
        {post?.bookmarks?.length} Bookmark
      </Button>
    </Flex>
  );
};

export default InteractionBtn;
