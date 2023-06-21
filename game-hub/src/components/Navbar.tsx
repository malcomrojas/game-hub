import { HStack, Image } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/MLCM RADIO NEW LOGO.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image id="logo" src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
