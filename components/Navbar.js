// Importing required Chakra UI components and Next.js Link component.
import Link from "next/link";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

// Define the Navbar function that will be exported
export default function Navbar() {
  return (
    // Creating a container element with a background color and padding.
    <Box bg="#D1BEF1" px={4} py={2}>
      {/* Creating a flexbox element with space-between alignment for the logo and buttons */}
      <Flex justify="space-between" align="center">
        {/* Creating a text element that acts as an abbreviation */}
        <Text as="abbr" fontSize="25px" color="white">
          StudyMatch
        </Text>
        {/* Box component for the Sign up and Login buttons */}
        <Box>
          {/* Using Next.js Link component to link to Signup page */}
          <Link href="/Signup">
            <Button colorScheme="pink" size="sm" ml={4}>
              Sign up
            </Button>
          </Link>
          {/* Using Next.js Link component to link to Login page */}
          <Link href="/Login">
            <Button colorScheme="pink" size="sm" ml={4}>
              Login
            </Button>
          </Link>
          <Link href="/pricing">
            <Button colorScheme="pink" size="sm" ml={4}>
              Pricing
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
