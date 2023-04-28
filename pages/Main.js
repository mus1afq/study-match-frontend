import CreateCard from "@/components/main/CreateCard";
import JoinCard from "@/components/main/JoinCard";
import Stats from "@/components/main/Stats";
import { Container, Flex } from "@chakra-ui/react";

export default function Main() {
  return (
    <>
      <Container maxW={"5xl"} py={12}>
        <Stats />
        <Flex>
          <JoinCard />
          <JoinCard />
        </Flex>
        <CreateCard />
      </Container>
    </>
  );
}
