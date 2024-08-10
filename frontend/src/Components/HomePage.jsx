import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent color="white">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        m="35px 0 15px 0"
        w="full"
        bg="#1966FF"
        fontWeight="bold"
      >
        <Text fontSize={"3xl"} fontFamily="sans-serif">
          Conversify
        </Text>
      </Box>
      <Box bg="#1966FF" w="full">
        <Tabs variant="soft-rounded" m="15px">
          <TabList>
            <Tab
              w="50%"
              color="white"
              _selected={{ bg: "white", color: "#1966FF" }}
              fontSize="large"
            >
              <i
                class="fa-solid fa-right-to-bracket"
                style={{ marginRight: "8px" }}
              ></i>
              Login
            </Tab>
            <Tab
              w="50%"
              color="white"
              _selected={{ bg: "white", color: "#1966FF" }}
              fontSize="large"
            >
              <i
                className="fa-solid fa-user-plus"
                style={{ marginRight: "8px" }}
              ></i>
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
