// Importing necessary Chakra UI components, icons and React hooks.
import {
  Box,
  Heading,
  Text,
  Input,
  List,
  ListItem,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

// Authentication fetch function import
import authFetch from "@/lib/axios/interceptors";

// Define the CreateCard function that will be exported
export default function CreateCard() {
  // Initializing state variables using the useState hook.
  const router = useRouter();
  const [values, setValues] = useState({
    group_name: "",
    group_location: "",
    group_date: "",
  });
  // Event handler to track input field changes
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // Submit event handler to POST data to the API endpoint.
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(values);

    const response = await authFetch.post("/create/group/", values);

    if (response.status === 201) {
      router.push("/Groups");
    } else if (response.status === 400) {
      console.log(response.data);
    } else {
      console.log(response);
    }
  };

  return (
    // React component that renders a box containing the form for creating a group.
    <Box textAlign="center" py={10} px={6}>
      {/* Component from Chakra UI that renders the add icon */}
      <AddIcon boxSize={"50px"} color={"purple.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Create Your Own Group
      </Heading>
      {/* List of instructions on how to fill out the form */}
      <List margin={"10"}>
        <ListItem>
          Group Name: Choose a name that reflects the subject you will be
          studying, such as SOFT050 or MATH051
        </ListItem>
        <ListItem>Group Location: Room Number and Date</ListItem>
      </List>
      {/* Card element that contains the input fields for the form */}
      <Card align="center" bg={"purple.100"}>
        <CardHeader>
          <Heading size="md"> Create a Group</Heading>
        </CardHeader>
        {/* Body of the card with input field for Group Name, Location and selecting Date and time  */}
        <CardBody>
          <Input
            variant="filled"
            name="name"
            placeholder="Group Name"
            onChange={handleChange}
          />
        </CardBody>
        <CardBody>
          <Input
            variant="filled"
            name="location"
            placeholder="Group Location"
            onChange={handleChange} //An event handler function called each time when there is a change in the value of this input field, which is defined.
          />
        </CardBody>
        <CardBody>
          <Input
            type="datetime-local"
            variant="filled"
            placeholder="Date and Time"
            onChange={(e) => {
              const date = new Date(e.target.value);
              const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
              setValues({
                ...values,
                group_date: formattedDate,
              });
            }}
          />
        </CardBody>
        {/* Footer of the card with button to submit the form */}
        <CardFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Create a Group
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
