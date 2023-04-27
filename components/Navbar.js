import Link from "next/link";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="#D1BEF1" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Text as="abbr" fontSize="25px" color="white">
          StudyMatch
        </Text>
        <Box>
          <Link href="/Signup">
            <Button colorScheme="pink" size="sm" ml={4}>
              Sign up
            </Button>
          </Link>
          <Link href="/Login">
            <Button colorScheme="pink" size="sm" ml={4}>
              Login
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
