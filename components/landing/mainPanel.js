// Importing necessary Chakra UI components
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
// Define the MainPanel function that will be exported
export default function MainPanel() {
  // Returns a JSX element.
  return (
    <Flex
      // Style prop to set width to 100% and height to 90vh.
      w={"100%"}
      h={"90vh"}
      // Background image style prop with an image url.
      backgroundImage={
        "https://img.freepik.com/free-photo/close-up-students-library_23-2149127092.jpg"
      }
      // Other background styles.
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      {/* Use a vertical stack component to layout the contents */}
      <VStack
        // Style prop to set width to full and justify content to center vertically
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // Gradient background style
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        {/*Use a Stack component to layout the form inputs */}
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          {/* Application heading */}
          <Text
            color={"White"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            StudyMatch connects students who are looking for other students to
            study with.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
