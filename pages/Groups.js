import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Groupcontent from "../components/landing/groupcontent";
import GroupsFooter from "../components/main/GroupsFooter";

export default function Groups() {
  return (
    <>
      <Container maxW={"9xl"} py={10} minHeight="100vh">
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Your Groups
          </Heading>
          <Text color={"gray.500"}>
            You can find the groups you have created & joined here!
          </Text>
        </Box>
        <Flex>
          <Groupcontent />
          <Groupcontent />
          <Groupcontent />
          <Groupcontent />
        </Flex>
      </Container>
      <GroupsFooter />
    </>
  );
}
