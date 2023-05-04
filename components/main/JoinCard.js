// Importing necessary Chakra UI components, icons and React hooks.
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

// Authentication fetch function import
import authFetch from "@/lib/axios/interceptors";

// Define the JoinCard function that will be exported it takes in id, group_name, group_size and group_date as its props
export default function JoinCard({ id, group_name, group_size, group_date }) {
  // Using the Next.js useRouter hook to trigger client-side transitions between pages.
  const router = useRouter();
  // Creating a Date object from the provided string of group_date and formatting it into "Month Day, Year Time" format.
  const date = new Date(group_date);
  const formattedDate = date.toLocaleString();
  // Defining a function to handle form submission on Join Group button click event.
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Making a request to the server endpoint using authFetch method to add user in this group.
    const response = await authFetch.post(`/join/group/${id}/`);
    // If adding user to the group was successful, redirect the user to Groups page.
    if (response.status === 200) {
      router.push("/Groups");
    } else if (response.status === 400) {
      console.log(response.data); // Else log any error message generated during the failed request.
    }
  };

  return (
    // Rendering a Chakra UI Container component as the root element for the JoinCard components.
    <Container>
      <Center py={6}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          margin="30"
        >
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {group_name}
              </Heading>
              <Text color={"gray.500"}>Revision Group {id} </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={"600"}>{group_size} Student(s)</Text>
                <Text
                  fontSize={"sm"}
                  justifyContent={"center"}
                  color={"gray.500"}
                >
                  {formattedDate}
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
                bg: "green.500",
              }}
              onClick={handleSubmit} //This handler function will be called when clicking the button for joining the current study group
            >
              Join Group
            </Button>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
