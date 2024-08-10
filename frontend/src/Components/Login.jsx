import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleSumbit = () => {};

  return (
    <>
      <VStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your name..."
            onChange={(e) => setEmail(e.target.value)}
            bg="#313338"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your email..."
              onChange={(e) => setPassword(e.target.value)}
              bg="#313338"
            />
            <InputRightElement mr="5px" cursor="pointer" onClick={handleShow}>
              {show ? (
                <i class="fa-solid fa-eye"></i>
              ) : (
                <i class="fa-regular fa-eye-slash"></i>
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          bg="white"
          color="#1966FF"
          w="full"
          m="5px"
          fontWeight="bold"
          onSubmit={handleSumbit}
        >
          Login
        </Button>
        <Button
          bg="#0D0D0D"
          color="white"
          w="full"
          m="5px"
          fontWeight="bold"
          colorScheme="none"
          _hover={{ bg: "#1A1A1A" }}
        >
          Join as a Guest
        </Button>
      </VStack>
    </>
  );
};

export default Login;
