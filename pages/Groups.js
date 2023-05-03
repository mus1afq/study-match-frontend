import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

import Groupcontent from "../components/landing/groupcontent";
import GroupsFooter from "../components/main/GroupsFooter";
import authFetch from "@/lib/axios/interceptors";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch.get("user/groups/");
      const groups = response.data;
      console.log(groups);
      setGroups(groups);
    };
    fetchData();
  }, []);

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
          {groups.map((group) => (
            <Groupcontent
              key={group.id}
              id={group.id}
              group_name={group.name}
              group_location={group.location}
              group_size={group.group_size}
            />
          ))}
        </Flex>
      </Container>
      <GroupsFooter />
    </>
  );
}
