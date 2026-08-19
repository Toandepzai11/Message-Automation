import {
  Box,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useState } from "react";

import logo_src from "@/public/logo.svg";

import { ColorModeButton } from "@/src/features/shared/ui/color-mode";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "PRIVACY", to: "/privacy" },
  { label: "LOGIN", to: "/login" },
];

export function Taskbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="nav" w="100%" bg="#214777" color="white">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <Flex minH="80px" align="center" justify="space-between">
          {/* Logo */}
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <HStack gap={3}>
              <Box
                w={{ base: "36px", md: "42px" }}
                h={{ base: "36px", md: "42px" }}
                flexShrink={0}
              >
                <Image
                  src={logo_src}
                  alt="CTIN1.cpp"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>

              <Text
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight="550"
                color="white"
              >
                CTIN1.cpp
              </Text>
            </HStack>
          </Link>

          {/* Desktop navigation */}
          <HStack
            display={{ base: "none", md: "flex" }}
            gap={{ md: 6, lg: 8 }}
            h="80px"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                fontSize={{ md: "13px", lg: "15px" }}
                fontWeight="600"
                color="white"
                whiteSpace="nowrap"
                h="100%"
                display="flex"
                alignItems="center"
                _hover={{
                  textDecoration: "none",
                  color: "blue.100",
                }}
              >
                {item.label}
              </Link>
            ))}

            <ColorModeButton
              color="white"
              _hover={{
                bg: "whiteAlpha.200",
              }}
            />
          </HStack>

          {/* Mobile buttons */}
          <HStack display={{ base: "flex", md: "none" }} gap={1}>
            <ColorModeButton
              color="white"
              _hover={{
                bg: "whiteAlpha.200",
              }}
            />

            <IconButton
              aria-label="Open navigation"
              variant="ghost"
              color="white"
              onClick={() => setIsOpen(true)}
              _hover={{
                bg: "whiteAlpha.200",
              }}
            >
              <Menu size={23} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Sidebar */}
      <Drawer.Root
        open={isOpen}
        onOpenChange={(details) => setIsOpen(details.open)}
        placement="end"
      >
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content bg="#214777" color="white" maxW="320px">
            <Drawer.Header borderBottomWidth="1px" borderColor="whiteAlpha.300">
              <Text fontSize="18px" fontWeight="700">
                MENU
              </Text>
            </Drawer.Header>

            <Drawer.Body p={4}>
              <VStack align="stretch" gap={2}>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    px={4}
                    py={4}
                    borderRadius="md"
                    fontSize="16px"
                    fontWeight="600"
                    color="white"
                    _hover={{
                      textDecoration: "none",
                      bg: "whiteAlpha.200",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
            </Drawer.Body>

            <Drawer.Footer borderTopWidth="1px" borderColor="whiteAlpha.300">
              <Text fontSize="13px" color="whiteAlpha.700">
                CTIN1.cpp
              </Text>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
}
