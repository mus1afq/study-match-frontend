import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import authFetch from "@/lib/axios/interceptors";

export default function JoinCard({ id, group_name, group_size, group_date }) {
  const router = useRouter();

  const date = new Date(group_date);
  const formattedDate = date.toLocaleString();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await authFetch.post(`/join/group/${id}/`);

    if (response.status === 200) {
      router.push("/Groups");
    } else if (response.status === 400) {
      console.log(response.data);
    }
  };

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
                {group_name}
              </Heading>
              <Text color={"gray.500"}>Revision Group {id} </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={"600"}>{group_size} Student(s)</Text>
                <Text
                  fontSize={"sm"}
                  justifyContent={"center"}
                  color={"gray.500"}
                >
                  {formattedDate}
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
              onClick={handleSubmit}
            >
              Join Group
            </Button>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
