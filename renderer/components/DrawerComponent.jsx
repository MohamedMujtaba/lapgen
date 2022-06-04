import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  console.log(router);
  return (
    <>
      <IconButton
        ref={btnRef}
        // colorScheme="teal"
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginBottom={4} />
          <DrawerHeader>
            {router.pathname !== "/" ? (
              <Tooltip
                hasArrow
                label="Go back"
                // bg="gray.300"
                // color="black"
              >
                {/* <span> */}
                <IconButton
                  ref={btnRef}
                  // colorScheme="teal"
                  onClick={() => {
                    router.back();
                    onClose();
                  }}
                  icon={<ArrowBackIcon />}
                />
                {/* </span> */}
              </Tooltip>
            ) : (
              "Welcome"
            )}
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Tooltip
              hasArrow
              label="Change Color mode "
              // bg="gray.300"
              // color="black"
            >
              <span>
                <DarkModeSwitch />
              </span>
            </Tooltip>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
