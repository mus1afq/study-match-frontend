import { Search2Icon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

export default function JoinCard() {
  return (
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
                Group Name
              </Heading>
              <Text color={"gray.500"}>Location</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Date & Time
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
            >
              Join Group
            </Button>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
