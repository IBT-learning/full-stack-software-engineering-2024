import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useGlobalContext from "../Context/useGlobalContext";

const postCardContext = createContext();

export const Provider = ({ children }) => {
  const [liked, setLiked] = useState(null);
  const [bookmarked, setbookmarked] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");
  const { posts, setPost, auth } = useGlobalContext();
  const navigate = useNavigate();

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post._id === postId);
    if (auth._id === postToEdit.user._id) {
      setPost(postToEdit);
      navigate(`/post/edit/${postId}`);
    } else {
      return;
    }
  };

  const formatDate = (dateOfPost) => {
    dayjs.extend(relativeTime);
    const formatDate = dayjs().to(dayjs(dateOfPost));
    return formatDate;
  };

  return (
    <postCardContext.Provider
      value={{
        liked,
        setLiked,
        bookmarked,
        setbookmarked,
        bg,
        color,
        formatDate,
        handleEdit,
      }}
    >
      {children}
    </postCardContext.Provider>
  );
};

export default postCardContext;
