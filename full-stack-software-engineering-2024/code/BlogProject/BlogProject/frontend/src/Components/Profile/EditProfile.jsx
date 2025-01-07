import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  IconButton,
  Avatar,
  Flex,
  Text,
  Divider,
  Image,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiSquareRemove } from "react-icons/ci";
import { uploadImage } from "../../Utils/styles";
import useGlobalContext from "../../Context/useGlobalContext";
import { IoMdArrowBack } from "react-icons/io";

const EditProfile = ({ isOpen, onClose, initialFocus, finalFocus, userid }) => {
  const [coverImage, setCoverImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [updatedProfile, setUpdatedProfile] = useState({
    coverImg: "",
    profileImg: "",
    profilename: "",
    userName: "",
    email: "",
    Bio: "",
    location: "",
    gender: "",
    currentPassword: "",
    newPassword: "",
  });

  const toast = useToast();
  const { authToken, setAuth } = useGlobalContext();

  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.600", "gray.300");

  const focusStyle = {
    _focus: {
      bg: bg,
      border: "none",
      fontSize: "xl",
      color: color,
    },
  };

  const uploadCoverImage = async (event) => {
    try {
      const coverImgUrl = await uploadImage(event);
      setCoverImage(coverImgUrl);
      setUpdatedProfile({ ...updatedProfile, profileImg: coverImgUrl });
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.message,
        duration: 5000,
      });
    }
  };

  const uploadProfileImage = async (event) => {
    try {
      const profileImgUrl = await uploadImage(event);
      setProfileImage(profileImgUrl);
      setUpdatedProfile({ ...updatedProfile, coverImg: profileImgUrl });
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.message,
        duration: 5000,
      });
    }
  };

  const handleProfileChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (updatedInputs) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/user/update/${userid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: authToken,
          },
          body: JSON.stringify({ updatedInputs }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        toast({
          title: "Error",
          status: "error",
          description: data.error,
          duration: 5000,
        });
      } else {
        localStorage.removeItem("auth_user");
        setAuth(data.updatedProfile);
        localStorage.setItem("auth_user", JSON.stringify(updatedProfile));
        toast({
          title: "Success",
          status: "success",
          description: "Your Profile has been updated successfully",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialFocus}
        finalFocusRef={finalFocus}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={bg} color={color}>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack mb="4">
              <Flex alignItems="flex-start">
                <Button fontSize="md" color={""}>
                  Upload cover image
                </Button>
                <Input
                  opacity="0"
                  ml="-100%"
                  type="file"
                  onChange={uploadCoverImage}
                />
              </Flex>
              <Flex alignItems="flex-start">
                <Button fontSize="md" color={""}>
                  Upload display image
                </Button>
                <Input
                  opacity="0"
                  ml="-100%"
                  type="file"
                  onChange={uploadProfileImage}
                />
              </Flex>
            </HStack>
            {/* Uploaded Image preview */}
            <Flex h="20" w="full" gap="2" mb="2" justifyContent="space-between">
              {coverImage && (
                <Flex>
                  <Image w="50%" fit="cover" align="top" src={coverImage} />
                  <IconButton
                    icon={<CiSquareRemove size="30" />}
                    onClick={() => setCoverImage("")}
                  />
                </Flex>
              )}
              {profileImage && (
                <Flex>
                  <Avatar size="lg" fit="cover" src={profileImage} />
                  <IconButton
                    icon={<CiSquareRemove size="30" />}
                    onClick={() => setProfileImage("")}
                  />
                </Flex>
              )}
            </Flex>
            <Divider />

            <FormControl>
              <FormLabel>Profile Name</FormLabel>
              <Input
                ref={initialFocus}
                sx={focusStyle}
                placeholder="Enter profile name"
                type="text"
                name="profilename"
                value={updatedProfile.profilename}
                onChange={handleProfileChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter username"
                sx={focusStyle}
                type="text"
                name="userName"
                value={updatedProfile.userName}
                onChange={handleProfileChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter username"
                sx={focusStyle}
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleProfileChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder="Enter Bio"
                sx={focusStyle}
                type="text"
                name="Bio"
                value={updatedProfile.Bio}
                onChange={handleProfileChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="Enter your address"
                sx={focusStyle}
                type="text"
                name="location"
                value={updatedProfile.location}
                onChange={handleProfileChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input
                placeholder="Enter your gender"
                sx={focusStyle}
                type="text"
                name="gender"
                value={updatedProfile.gender}
                onChange={handleProfileChange}
              />
            </FormControl>

            <Box
              p="4"
              mt="3"
              rounded="lg"
              border="1px solid"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Text mt="-2" fontSize="lg" fontWeight="semibold">
                Change Your Password?
              </Text>
              <FormControl mt={4}>
                <FormLabel>Current Password</FormLabel>
                <Input
                  placeholder="Enter current password"
                  sx={focusStyle}
                  type="password"
                  name="currentPassword"
                  value={updatedProfile.currentPassword}
                  onChange={handleProfileChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>New Password</FormLabel>
                <Input
                  placeholder="Enter new password"
                  sx={focusStyle}
                  type="password"
                  name="newPassword"
                  value={updatedProfile.newPassword}
                  onChange={handleProfileChange}
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleSubmit(updatedProfile)}
            >
              Save Changes
            </Button>
            <Button onClick={onClose} leftIcon={<IoMdArrowBack />}>
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
