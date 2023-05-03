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

export default function Groupcontent() {
  return (
    <Container>
      <Center py={6}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("green.50", "gray.800")}
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
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={"600"}>Location</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Date & Time
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
