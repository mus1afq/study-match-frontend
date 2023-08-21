import React from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Monthly from "@/components/pricing/monthly";
import Annually from "@/components/pricing/annualy";
import Sixmonths from "@/components/pricing/six-months";

const Pricing = () => {
  return (
    <>
      <Box
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("#FFF5ED")}
        minH={"100vh"}
      >
        <Box bg={useColorModeValue("#FFF5ED")} height="1em" />
        <Heading
          as="h1"
          marginTop={"1em"}
          color={"#2f144e"}
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
        >
          {" "}
          Choose Your Plan
        </Heading>
        <Center>
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            alignItems={"center"}
            margin={{ base: "6em", lg: "4em" }}
            spacing={20}
          >
            <Monthly />
            <Sixmonths />
            <Annually />
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default Pricing;
