// Importing necessary components from external dependencies and components from other files
import { Container, Center } from "@chakra-ui/react";
import HowItWorks from "../components/landing/howitworks";
import MainPanel from "@/components/landing/mainpanel";
import AboutUs from "@/components/landing/aboutus";
import ContactUs from "@/components/landing/contactus";
import Navbar from "@/components/Navbar";

// Defining a functional component called Landing
export default function Landing() {
  // Rendering the following components: Navbar, MainPanel, HowItWorks, AboutUs, ContactUs
  return (
    <>
      <Navbar /> {/* Renders Navbar component */}
      <MainPanel /> {/* Renders Main panel component */}
      {/* Wraps next content with a centered layout */}
      <Center>
        {/* Defines a responsive container with padding, width, and margin props */}
        <Container py={5} maxW={"container.lg"} margin={"30"}>
          <HowItWorks /> {/* Renders Howitworks component */}
          <AboutUs /> {/* Renders About us component */}
          <ContactUs /> {/* Renders Contact us component */}
        </Container>
      </Center>
    </>
  );
}
