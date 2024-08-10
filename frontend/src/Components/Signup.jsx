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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const [showpassword, setShowPassword] = useState(false);
  const [showcnfpassword, setShowCnfPassword] = useState(false);

  const handleShowpassword = () => {
    setShowPassword(!showpassword);
  };

  const handleShowcnf = () => {
    setShowCnfPassword(!showcnfpassword);
  };

  const handleSumbit = () => {};

  return (
    <>
      <VStack>
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            bg="#313338"
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            bg="#313338"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              bg="#313338"
              type={showpassword ? "text" : "password"}
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement
              mr="5px"
              cursor="pointer"
              onClick={handleShowpassword}
            >
              {showpassword ? (
                <i class="fa-solid fa-eye"></i>
              ) : (
                <i class="fa-regular fa-eye-slash"></i>
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="cnf-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              bg="#313338"
              type={showcnfpassword ? "text" : "password"}
              placeholder="Enter password again..."
              onChange={(e) => setCnfPassword(e.target.value)}
            />
            <InputRightElement
              mr="5px"
              cursor="pointer"
              onClick={handleShowcnf}
            >
              {showcnfpassword ? (
                <i class="fa-solid fa-eye"></i>
              ) : (
                <i class="fa-regular fa-eye-slash"></i>
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="picture">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            bg="#313338"
            p="1"
            type="file"
            accept="image/*"
            placeholder="Enter your name..."
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </FormControl>
        <Button
          bg="white"
          color="#1966FF"
          w="full"
          m="5px"
          fontWeight="bold"
          onSubmit={handleSumbit}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
};

export default Signup;
