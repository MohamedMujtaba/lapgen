import { Container, Flex, Heading } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DrawerComponent } from "./DrawerComponent";

export const Navbar = () => {
  return (
    <Flex w={"100%"} minH={16} position="fixed" top={0} left={0}>
      <Container
        minH={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW={["full", "4xl", "4xl", "4xl"]}
      >
        {/* <Heading>Logo</Heading> */}
        <DrawerComponent />
        {/* <DarkModeSwitch /> */}
      </Container>
    </Flex>
  );
};
