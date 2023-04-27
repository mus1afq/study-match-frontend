import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Center,
  Stack,
  Box,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoAddSharp, IoBookOutline, IoSearchSharp } from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Main() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>A students matching app</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            StudyMatch connects students who are looking for other students to
            study with. Whether you are preparing for an exam or just need some
            motivation, weve got you covered!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Find a Group"}
            />
            <Feature
              icon={<Icon as={IoAddSharp} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Create a Group"}
            />
            <Feature
              icon={
                <Icon as={IoBookOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"Network and Start Studying !"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://wpvip.edutopia.org/wp-content/uploads/2022/10/2B62538-crop.jpg?w=2880&quality=8"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <Container marginTop={"40"}>
        <Center>
          <Search2Icon boxSize={"28px"} color={"purple.500"} margin={"4"} />
          <Heading>Find A Group</Heading>
        </Center>
      </Container>
    </Container>
  );
}
