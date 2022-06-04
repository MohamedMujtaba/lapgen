import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex w={"100vw"} minH={"100vh"} flexDirection="column" align="center">
        <Navbar />
        <Container maxW={["full", "4xl", "4xl", "4xl"]}>
          <Component {...pageProps} />
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
