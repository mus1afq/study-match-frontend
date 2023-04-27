import { Box, Flex, Text } from "@chakra-ui/react";

export default function Navbar2() {
  return (
    <Box bg="D1BEF1" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Text as="abbr" fontSize="25px" color="white">
          StudyMatch
        </Text>
      </Flex>
    </Box>
  );
}
