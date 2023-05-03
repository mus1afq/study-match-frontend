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

export default function Groupcontent({
  group_name,
  group_size,
  group_location,
  group_date,
  id,
}) {
  const date = new Date(group_date);
  const formattedDate = date.toLocaleString();

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
                {group_name}
              </Heading>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={"600"}>{group_location}</Text>
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
