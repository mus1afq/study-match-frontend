// Import necessary components from "@chakra-ui/react" library
// These will be used to style and layout the form
import {
  Button,
  Box,
  Stack,
  Input,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";

// Define the ContactUs function that will be exported

export default function ContactUs() {
  return (
    // Return a Box component to wrap the form contents
    <Box>
      <VStack spacing={8} marginLeft="2em">
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
      </VStack>
      <br></br>
      {/*Use a Stack component to layout the form inputs */}
      <Stack spacing={4}>
        <Input variant="Flushed" placeholder="Email" />
        <Input variant="filled" placeholder="Type your message" height={100} />
      </Stack>
      {/* Add another line break */}
      <br></br>
      {/* Center the following Button component */}
      <Center>
        {/*  Add a Button component with a color scheme of "cyan", size of "lg", text color of white, and text "Send Message" Does not have functionality yet */}
        <Button colorScheme="cyan" size="lg" color={"white"}>
          Send Message
        </Button>
      </Center>
    </Box>
  );
}
