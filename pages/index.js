import { Container, Center } from "@chakra-ui/react";

import HowItWorks from "../components/landing/howitworks";
import MainPanel from "@/components/landing/mainpanel";
import AboutUs from "@/components/landing/aboutus";
import ContactUs from "@/components/landing/contactus";
import Navbar from "@/components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <MainPanel />
      <Center>
        <Container py={5} maxW={"container.lg"} margin={"30"}>
          <HowItWorks />
          <AboutUs />
          <ContactUs />
        </Container>
      </Center>
    </>
  );
}
