﻿import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Heading,
  Divider,
  Center,
  Image
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./../assets/logo.png"

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Heading as="h1" size="md" color={"pink.600"} fontWeight={"extrabold"}>
          <Image 
            src={Logo} 
            alt="Logo unipensiones"
            width={"70px"} 
          />
        </Heading>
        <Text textAlign={"center"}>
          ©2023 Unipensiones S.A.S - Todos los derechos reservados
        </Text>
        <Stack direction={"row"} spacing={6} color={"pink.600"}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter/>
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
