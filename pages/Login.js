// Importing necessary Chakra UI components, icons and React hooks.
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next"; // Importing function to create a cookie

import axiosInstance from "@/lib/axios"; // Importing axios instance for making HTTP requests

// Defining a functional component called Logincard
export default function LoginCard() {
  // Setting up router for navigation when user logs in
  const router = useRouter(); // Setting up Next.js router for navigation when user logs in
  const [values, setValues] = useState(); // Setting up stateful object to store input values

  // This function is called whenever there is a change in any of
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // Function to handle form submission (when user logs in)
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page from reloading when form is submitted

    const response = await axiosInstance.post("/api/token/", values); // Sends a request to the backend server with user's details using axiosInstance

    // If the response status is 200 (success), then set access_token and refresh_token cookies and redirect the user to the Main page
    if (response.status === 200) {
      setCookie("access_token", response.data.access);
      setCookie("refresh_token", response.data.refresh);
      router.push("/Main");
      // If the response status is 401 (Unauthorized), then log response data to the console
    } else if (response.status === 401) {
      console.log(response.data);
      // Otherwise, log the entire response object to the console
    } else {
      console.log(response);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("blue.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              {/*   // The "onChange" attribute specifies that handleChange function must
              be called whenever there is a change in the value of this field. */}
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                bg={"cyan.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                // This sets the "handleSubmit" function as the event handler for the "onClick" event of a button or another clickable element.
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
