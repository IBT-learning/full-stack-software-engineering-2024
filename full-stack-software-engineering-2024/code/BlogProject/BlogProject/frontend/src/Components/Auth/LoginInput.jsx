import React, { useState, useEffect, useRef } from "react";
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
import { buttonStyle, inputStyle } from "../../Utils/styles.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import useGlobalContext from "../../Context/useGlobalContext.jsx";
import AuthHeader from "../Auth/AuthHeader.jsx";
import Cookies from "js-cookie";

const LoginInput = () => {
  const header = ["SignIn To Account", "signin"];

  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const from = location.state?.from?.pathname || "/";

  const { setAuth, setIsAuth, setAuthToken } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(null);
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const PWD_REGEX = /^[A-z][A-z0-9-_]{6,23}$/;
  const EMAIL_REGEX =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
  }, [email, password]);

  const handleSubmit = async (email, password) => {
    if (!validEmail || !validPwd) {
      setErrorMsg("Email and password are required");
    } else {
      try {
        const res = await fetch("http://localhost:4000/api/user/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const result = await res.json();
        if (res.ok) {
          const token = result.data.token;
          const user = result.data.user;
          Cookies.set("auth_token", token, {
            sameSite: "None",
            secure: true,
            expires: 2,
          });
          setAuthToken(token);
          setAuth(user);
          localStorage.setItem("auth_user", JSON.stringify(user));
          setIsAuth(true);
          setEmail("");
          setPassword("");
          navigate(from, { replace: true });
          toast({
            title: "Success",
            status: "success",
            description: result.msg,
            duration: 3000,
          });
        } else {
          setErrorMsg(result.msg || "Login failed");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <VStack
      w={{ base: "100%", md: "60%" }}
      h={{ base: "70%", md: "100%" }}
      alignItems={"center"}
      justifyContent="center"
      gap={4}
      bg={"whiteAlpha.900"}
    >
      <AuthHeader loginHeader={header[0]} loginSub={header[1]} />

      <Flex
        mt="-3"
        direction="column"
        py={2}
        px={{ base: "1.5rem", sm: "4rem" }}
        gap="4"
        w="full"
      >
        <FormControl isRequired>
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
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          {validEmail && (
            <Text pl="5" pt="1" mb="-3">
              <FaCheckCircle color="green" />
            </Text>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel mb="-2"></FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              required
              placeholder="Password"
              border="none"
              focusBorderColor={pwdFocus && !validPwd ? "red.400" : "green.400"}
              sx={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <InputRightElement>
              <Button
                pr="4"
                size="xl"
                variant="surface"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {validPwd && (
            <Text pl="5" pt="1" mb="-3">
              <FaCheckCircle color="green" />
            </Text>
          )}
        </FormControl>
      </Flex>

      {errorMsg ? (
        <Text
          w={{ base: "full", md: "80%" }}
          px="10"
          py="2"
          mt="-3"
          bg="red.800"
          h="2.5rem"
          textAlign="center"
          color="white"
        >
          {errorMsg}
        </Text>
      ) : (
        <Text
          mt="-2"
          color={"blue.900"}
          textDecoration={"underline"}
          _hover={{ color: "blue" }}
        >
          Forgot password? <Link to="/login">Click here</Link>
        </Text>
      )}

      <Button
        w={"15rem"}
        sx={buttonStyle}
        onClick={() => handleSubmit(email, password)}
      >
        Sign in
      </Button>
    </VStack>
  );
};

export default LoginInput;
