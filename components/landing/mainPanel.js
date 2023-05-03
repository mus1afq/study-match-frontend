import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function MainPanel() {
  return (
    <Flex
      w={"100%"}
      h={"90vh"}
      backgroundImage={
        "https://img.freepik.com/free-photo/close-up-students-library_23-2149127092.jpg"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
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
