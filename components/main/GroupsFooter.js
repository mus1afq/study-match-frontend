// Importing necessary Chakra UI components
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

// Define the Footer function that will be exported
export default function GroupsFooter() {
  return (
    <Box
      bg={useColorModeValue("pink.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      {/* Container element with Stack layout */}
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        // Changes layout direction for small and medium screens
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {/* Stack element contains a Link to the Home page and Main */}
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/Main"}>Main</Link>
        </Stack>
        <Text>© 2023 StudyMatch. All rights reserved</Text>
      </Container>
    </Box>
  );
}
