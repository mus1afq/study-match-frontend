// import necessary components from "@chakra-ui/react"
// These will be used to style and layout the page

import { Box, Text, VStack, Center, Heading } from "@chakra-ui/react";

// Define the AboutUs function that will be exported
export default function AboutUs() {
  return (
    <Box p={8}>
      <Center>
        {/* Use a vertical stack to layout the contents */}
        <VStack spacing={8} margin="50">
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          {/* Add a text component with a font size of "lg", a maximum width of "3xl",
and text about the founding and mission of StudyMatch */}
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
