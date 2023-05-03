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

import authFetch from "@/lib/axios/interceptors";

export default function CreateCard() {
  const router = useRouter();
  const [values, setValues] = useState({
    group_name: "",
    group_location: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    <Box textAlign="center" py={10} px={6}>
      <AddIcon boxSize={"50px"} color={"purple.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Create Your Own Group
      </Heading>
      <List margin={"10"}>
        <ListItem>
          Group Name: Choose a name that reflects the subject you will be
          studying, such as SOFT050 or MATH051
        </ListItem>
        <ListItem>Group Location: Room Number and Date</ListItem>
      </List>
      <Card align="center" bg={"purple.100"}>
        <CardHeader>
          <Heading size="md"> Create a Group</Heading>
        </CardHeader>
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
            onChange={handleChange}
          />
        </CardBody>
        <CardBody>
          <Input
            type="datetime-local"
            variant="filled"
            placeholder="Date and Time"
          />
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Create a Group
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
