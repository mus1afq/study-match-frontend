// Importing required Chakra UI components
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
// Define the Navbar2 function that will be exported
export default function Navbar2() {
  return (
    <Box bg="#D1BEF1" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Text as="abbr" fontSize="25px" color="white">
          StudyMatch
        </Text>
        <Box>
          {/*Link component to link to Logout page */}
          <Link href="/Logout">
            <Button colorScheme="pink" size="sm" ml={4}>
              Logout
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
