// Import necessary components from "@chakra-ui/react" and "@chakra-ui/icons" libraries
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

// Define the Groupcontent function that will be exported
export default function Groupcontent({
  group_name,
  group_size,
  group_location,
  group_date,
  id,
}) {
  // Create a new Date object from the given group_date and format it into a string
  const date = new Date(group_date);
  const formattedDate = date.toLocaleString();

  return (
    <Container>
      {/* Use a Center component to center the contents */}
      <Center py={6}>
        {/* Use a Box component to wrap the study group information */}
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("green.50", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          margin="30"
        >
          {/* Use another Box component to wrap the group name, location, and date */}
          <Box p={6}>
            {/* Use a Stack component to layout the contents vertically */}
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {group_name}
              </Heading>
            </Stack>
            {/* Use another Stack component to layout the location and date horizontally */}
            <Stack direction={"row"} justify={"center"} spacing={6}>
              {/* Use another Stack component to layout the location vertically */}
              <Stack spacing={0} align={"center"}>
                {/* Add a Text component with a font weight of 600 and text from group_location */}
                <Text fontWeight={"600"}>{group_location}</Text>
                {/* Add a Text component with a font size of "sm", color of "gray.500", and formatted date text */}
                <Text fontSize={"sm"} color={"gray.500"}>
                  {formattedDate}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
