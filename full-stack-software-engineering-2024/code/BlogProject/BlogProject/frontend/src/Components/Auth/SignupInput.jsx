import React, { useEffect, useState, useRef } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import {
  Flex,
  VStack,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { inputStyle, buttonStyle } from "../Utils/styles.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../Context/useGlobalContext.jsx";
import AuthHeader from "./Auth/AuthHeader.jsx";

const SigninInput = () => {
  const [show, setShow] = useState(false);

  const header = ["Create An Account", "signup"];

  const { setAuth, setIsAuth } = useGlobalContext();
  const navigate = useNavigate();
  const inputRef = useRef("");
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^[A-z][A-z0-9-_]{6,23}$/;
  const EMAIL_REGEX =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setUserFocus(true);
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setEmailFocus(true);
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setPwdFocus(true);
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrorMsg("");
  }, [username, password, email]);

  const handleSubmit = async (username, email, password) => {
    if (!validUsername || !validEmail || !validPwd) {
      setErrorMsg("All input fields are required");
    } else {
      try {
        const res = await fetch("http://localhost:5000/api/user/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        const result = await res.json();
        if (res.ok) {
          const token = result.data.token;
          const user = result.data.newUser;
          Cookies.set("auth_token", token, {
            expires: 2,
            sameSite: "None",
            secure: true,
          });
          setIsAuth(true);
          setAuth({ user });
          setUsername("");
          setEmail("");
          setPassword("");
          navigate("/");
          toast({
            title: "Success",
            status: "success",
            description: result.msg,
            duration: 3000,
          });
        } else {
          setErrorMsg(result.error || "Error has occured, Try again");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <VStack
      w={{ base: "100%", md: "60%" }}
      h={{ base: "70%", md: "full" }}
      alignItems={"center"}
      justifyContent="center"
      gap={4}
      bg={"whiteAlpha.900"}
    >
      <AuthHeader signinHeader={header[0]} signinSub={header[1]} />
      <Flex
        direction="column"
        mt={-3}
        py={2}
        px={{ base: "1.5rem", sm: "4rem" }}
        gap="4"
        w="full"
      >
        <FormControl isRequired my="-2">
          <FormLabel mb="-2"></FormLabel>
          <Input
            type="text"
            border="none"
            autoComplete="off"
            required
            placeholder="Username"
            focusBorderColor={
              userFocus && !validUsername ? "red.400" : "green.400"
            }
            sx={inputStyle}
            ref={inputRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          {userFocus && username && !validUsername ? (
            <Text fontSize="sm" pl="3" mt="-1" mb={"-2"} color="red">
              -must be btw 3-23 characters
            </Text>
          ) : (
            ""
          )}
          {validUsername && (
            <Text pl="5" pt="1" mb="-3">
              <FaCheckCircle color="green" />
            </Text>
          )}
        </FormControl>

        <FormControl isRequired my="-2">
          <FormLabel mb="-2"></FormLabel>
          <Input
            type="email"
            border="none"
            autoComplete="off"
            required
            placeholder="Email"
            focusBorderColor={
              emailFocus && !validEmail ? "red.400" : "green.400"
            }
            sx={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          {emailFocus && email && !validEmail ? (
            <Text fontSize="sm" pl="3" mt="-1" mb={"-2"} color="red">
              -must be a valid email address
              <br />
              -example "johnDoe@mail.com"
            </Text>
          ) : (
            ""
          )}
          {validEmail && (
            <Text pl="5" pt="1" mb="-3">
              <FaCheckCircle color="green" />
            </Text>
          )}
        </FormControl>

        <FormControl isRequired my="-1">
          <FormLabel mb="-2"></FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              border="none"
              required
              placeholder="Password"
              focusBorderColor={pwdFocus && !validPwd ? "red.400" : "green.400"}
              sx={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <InputRightElement>
              <Button
                pr="2"
                size="xl"
                variant="surface"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {pwdFocus && password && !validPwd ? (
            <Text fontSize="sm" pl="3" mt="-1" mb={"-2"} color="red">
              -can include numbers, alphabets and special characters($@!*)
              <br />
              -must contains atleast 6 characters
            </Text>
          ) : (
            ""
          )}
          {validPwd && (
            <Text pl="5" pt="1" mb="-3">
              <FaCheckCircle color="green" />
            </Text>
          )}
        </FormControl>
        {errorMsg ? (
          <Text
            w="full"
            py="2"
            mt="2"
            mb="-3"
            bg="red.800"
            rounded="base"
            h="2.5rem"
            textAlign="center"
            color="white"
          >
            {errorMsg}
          </Text>
        ) : (
          ""
        )}
      </Flex>

      <Button
        w={"15rem"}
        sx={buttonStyle}
        onClick={() => handleSubmit(username, email, password)}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default SigninInput;
