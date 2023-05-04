// Importing necessary Chakra UI components, icons and React hooks.
import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

// Importing components from ../components
import Groupcontent from "../components/landing/groupcontent";
import GroupsFooter from "../components/main/GroupsFooter";

// Importing authFetch function from "@/lib/axios/interceptors".
import authFetch from "@/lib/axios/interceptors";

// Define the Groups function that will be exported
export default function Groups() {
  // Declaring a state variable groups and a function setGroups to update it using the useState hook. Initializing groups as an empty array.
  const [groups, setGroups] = useState([]);

  // Defining a side effect with useEffect hook which gets executed after rendering the component.
  useEffect(() => {
    // Declaring an asynchronous function fetchData inside the useEffect hook.
    const fetchData = async () => {
      // Sending an authenticated GET request to "user/groups/" URL and storing the response in response variable using the authFetch method.
      const response = await authFetch.get("user/groups/");
      // Extracting data from the server response and storing it in the groups array.
      const groups = response.data;
      // Logging the groups array to the console.
      console.log(groups);
      // Updating the groups state variable with the fetched groups data.
      setGroups(groups);
    };
    // Calling the fetchData function.
    fetchData();
  }, []);

  // Returning JSX to render a container element, checkmark icon, heading, and text along with group content and footer components.
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
          {/* Using map method on groups array to display Groupcontent component for each group in the array */}
          {groups.map((group) => (
            // Rendering Groupcontent component with props id, group_name, group_location, group_date and group_size passed onto it
            <Groupcontent
              key={group.id}
              id={group.id}
              group_name={group.name}
              group_location={group.location}
              group_date={group.group_date}
              group_size={group.group_size}
            />
          ))}
        </Flex>
      </Container>
      <GroupsFooter />
    </>
  );
}
