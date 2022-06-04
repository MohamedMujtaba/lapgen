import { Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";

const Home = () => {
  const navigation = useRouter();
  return (
    <Container
      // bg="red.100"
      minW="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button onClick={() => navigation.push("/login")} variant="solid">
        {" "}
        Mohamed
      </Button>
    </Container>
  );
};

export default Home;
