import { Box, Text, VStack, Center, Heading } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box p={8}>
      <Center>
        <VStack spacing={8} margin="50">
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          <Text fontSize="lg" maxW="3xl" textAlign="center">
            StudyMatch was founded in 2023 by a student who realized that
            studying alone can be boring and unproductive. We believe that
            studying with a partner can make the learning process more fun and
            effective. Our mission is to connect students who are looking for
            study partners and create a community of learners who support each
            other.
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}
