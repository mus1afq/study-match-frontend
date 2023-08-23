"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY, SUCCESS_URL, CANCEL_URL} from "./stripeConfig";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  
  
export default function Sixmonths() {
  const handleStripeCheckout = async () => {
    const stripe = await stripePromise;

  try {
    // Create a Stripe Checkout session
    const session = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1NiL6sBfCHaICza7ia5ZzivD",
          quantity: 1,
        },
      ],
      mode: "subscription", // You can change this based on your use case
      successUrl: SUCCESS_URL, // Replace with your success URL
      cancelUrl: CANCEL_URL, // Replace with your cancel URL
    });

    // If there's an error, you can handle it here
    if (session.error) {
      console.error(session.error.message);
    }
  } catch (error) {
    console.error(error);
  }
};
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"#2f144e"}
            rounded={"full"}
          >
            6 Months
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>£</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              29.99
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Smart Dashboard
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Access to all textbook pages
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Systemised question groups
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Track your progress!
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
            onClick={handleStripeCheckout} // This handles the Stripe checkout
          >
            Next
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
