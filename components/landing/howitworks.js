// Import necessary components from "@chakra-ui/react" and "@chakra-ui/icons" libraries
import {
  Grid,
  GridItem,
  Box,
  Text,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";
// Define the Howitworks function that will be exported
export default function HowItWorks() {
  return (
    <>
      {/* Use a Center component to center the contents */}
      <Center>
        {/* Set the grid to have different number of columns based on screen size */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {/* Use a vertical stack to layout the contents */}
          <VStack spacing={8}>
            <Heading as="h2" size="xl">
              How it works
            </Heading>
            {/* Grid component creates a group layout with specified number of column ands and gap btn columns */}
            <Grid templateColumns="repeat(3, 2fr)" gap={6}>
              {/* This is a GridItem component with margin and width props. */}
              <GridItem margin={"25px"} width="15em">
                <Box borderWidth="1px" borderRadius="lg" p={6}>
                  <Heading as="h3" size="lg" mb={4}>
                    Sign up
                  </Heading>
                  {/* This is a Text component with fontSize prop of "lg", displaying the text */}
                  <Text fontSize="lg">
                    Create a StudyMatch account and tell us what subjects you
                    want to study.
                  </Text>
                </Box>
              </GridItem>
              {/* This is a GridItem component with margin and width props. */}
              <GridItem margin={"25px"} width="15em">
                <Box borderWidth="1px" borderRadius="lg" p={6}>
                  <Heading as="h3" size="lg" mb={4}>
                    Find a match
                  </Heading>
                  <Text fontSize="lg">
                    Browse through the list of students who are looking for
                    study partners and find someone who matches your interests.
                  </Text>
                </Box>
              </GridItem>
              {/* This is a GridItem component with margin and width props. */}
              <GridItem margin={"25px"} width="15em">
                <Box borderWidth="1px" borderRadius="lg" p={6}>
                  <Heading as="h3" size="lg" mb={5}>
                    Start studying
                  </Heading>
                  <Text fontSize="lg">
                    Schedule a study session with your match and start learning
                    together!
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </Grid>
      </Center>
    </>
  );
}
