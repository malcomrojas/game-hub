import { HStack, Image, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import logo from "../assets/MLCM RADIO NEW LOGO.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;