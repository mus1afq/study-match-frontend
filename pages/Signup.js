// Importing necessary Chakra UI components, icons and React hooks.
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
// Import the useState hook from the React library.
import { useState } from "react";
// Import the ViewIcon and ViewOffIcon components from Chakra UI icons.
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// Import the useRouter hook from Next.js to get access to the router.
import { useRouter } from "next/router";
import axiosInstance from "@/lib/axios"; // Importing axios instance for making HTTP requests

// Export a functional component called SignupCard.
export default function SignupCard() {
  // Import the router hook from Next.js.
  const router = useRouter();
  // Declare two state variables using the useState hook - showPassword (a boolean) and values (an object with email & password fields).
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Declare a handleChange method that updates the values field based on user input.
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Declare a handleSubmit method that submits the form data to the server. If successful, it redirects the user to the login page, else logs error messages to console.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axiosInstance.post("/createuser/", values);

    if (response.status === 201) {
      router.push("/Login");
    } else if (response.status === 400) {
      console.log(response.data);
    } else {
      console.log(response);
    }
  };

  // A functional component that returns the UI for the Sign Up page.
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("green.50", "pink.80")}
    >
      {/* The contents of the Sign Up form */}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up to StudyMatch
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              {/*   // The "onChange" attribute specifies that handleChange function must
            be called whenever there is a change in the value of this field. */}
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
                {/* Toggle to show/hide password */}
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"cyan.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                // This sets the "handleSubmit" function as the event handler for the "onClick" event of a button or another clickable element.
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              {/* Link to Login if user has an account  */}
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="/Login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
