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

export default function CreateCard() {
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
          <Input variant="filled" placeholder="Group Name" />
        </CardBody>
        <CardBody>
          <Input variant="filled" placeholder="Group Location" />
        </CardBody>
        <CardBody>
          <Input
            type="datetime-local"
            variant="filled"
            placeholder="Date and Time"
          />
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Create a Group</Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
