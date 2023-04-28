import CreateCard from "@/components/main/CreateCard";
import Footer from "@/components/main/Footer";
import JoinCard from "@/components/main/JoinCard";
import Stats from "@/components/main/Stats";
import Navbar2 from "@/components/Navbar2";
import { Container, Flex } from "@chakra-ui/react";

export default function Main() {
  return (
    <>
      <Navbar2 />
      <Container maxW={"5xl"} py={12}>
        <Stats />
        <Flex>
          <JoinCard />
          <JoinCard />
        </Flex>
        <CreateCard />
      </Container>
      <Footer />
    </>
  );
}
