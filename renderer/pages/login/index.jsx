import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { CheckIcon, PhoneIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";

const Login = () => {
  const navigation = useRouter();
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h="100vh">
      <Container
        size={"sm"}
        padding={4}
        flexDirection="column"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        bg="gray.50"
        minH={"md"}
        borderRadius="md"
        _dark={{ bg: "gray.600" }}
        boxShadow="md"
      >
        <Stack spacing={4} w="70%">
          <Heading alignSelf={"center"}>Mohamed</Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<EmailIcon color="gray.300" />}
            />
            <Input placeholder="Enter amount" />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<LockIcon />}
            />
            <Input placeholder="Enter amount" />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          {/* <InputGroup > */}
          <Button onClick={() => navigation.back()}>Login</Button>
          {/* </InputGroup> */}
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;
