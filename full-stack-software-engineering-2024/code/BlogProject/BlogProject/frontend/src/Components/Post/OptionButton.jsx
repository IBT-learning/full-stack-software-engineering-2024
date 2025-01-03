import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import useGlobalContext from "../../Context/useGlobalContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrashAlt, FaEdit, FaUserAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const OptionButton = ({ postId }) => {
  const { posts, setPosts, setPost, auth, authToken } = useGlobalContext();
  const navigate = useNavigate();
  const { postID } = useParams();
  const toast = useToast();

  const handleEdit = (post_id) => {
    const postToEdit = posts.find((post) => post._id === post_id);
    if (auth._id === postToEdit.user._id) {
      setPost(postToEdit);
      navigate(`/post/edit/${postId}`);
    } else {
      return;
    }
  };

  const handleDelete = async (postId) => {
    navigate(`/post/delete/${postId}`);
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/delete/${postID}`,
        {
          method: "DELETE",
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
          duration: 3000,
        });
      } else {
        const newPosts = posts.filter((post) => post._id !== postId);
        setPosts(newPosts);
        toast({
          title: "Success",
          status: "success",
          description: data.msg,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="ghost"
            size="lg"
            mr={{ base: "", sm: "", md: "-4" }}
            rightIcon={<BsThreeDotsVertical />}
          ></MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleEdit(postId)}>
              <FaEdit size="20" color="blue" /> Edit Post
            </MenuItem>
            <MenuItem onClick={() => navigate(`/profile`)}>
              <FaUserAlt size="20" color="purple" /> Check Profile
            </MenuItem>
            <MenuItem onClick={() => handleDelete(postId)}>
              <FaTrashAlt size="20" color="red" /> Delete Post
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default OptionButton;
