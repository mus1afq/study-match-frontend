import {
  Button,
  Box,
  Stack,
  Input,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Box>
      <VStack spacing={8} marginLeft="2em">
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
      </VStack>
      <br></br>
      <Stack spacing={4}>
        <Input variant="Flushed" placeholder="Email" />
        <Input variant="filled" placeholder="Type your message" height={100} />
      </Stack>
      <br></br>
      <Center>
        <Button colorScheme="cyan" size="lg" color={"white"}>
          Send Message
        </Button>
      </Center>
    </Box>
  );
}
