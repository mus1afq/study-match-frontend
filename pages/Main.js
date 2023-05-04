// Importing modules and components needed to make up the Main page component.
import { useEffect, useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import CreateCard from "@/components/main/CreateCard";
import Footer from "@/components/main/Footer";
import JoinCard from "@/components/main/JoinCard";
import Stats from "@/components/main/Stats";
import Navbar2 from "@/components/Navbar2";
import authFetch from "@/lib/axios/interceptors";

export default function Main() {
  // This creates a groups state variable using the useState hook, initialized as an empty array.
  const [groups, setGroups] = useState([]);

  // This function fetches data from the server and updates the groups state when the component mounts.
  useEffect(() => {
    // This defines an async function to fetch data from the server.
    const fetchData = async () => {
      // This sends a GET request to the server to fetch group data.
      const response = await authFetch.get("/groups/");
      // This extracts the data property from the response object.
      const groups = response.data;
      // This logs the fetched group data to the console for debugging purposes.
      console.log(groups);
      // This updates the groups state with only the first three items of the fetched groups data.
      setGroups(groups.slice(0, 3));
    };
    // This invokes the fetchData function when the component mounts.
    fetchData();
  }, []); // The second argument is an empty array, which means this effect will only run once after the initial render.

  return (
    <>
      {/* // This component displays a navigation there are no buttons for redirection */}
      <Navbar2 />
      <Container maxW={"5xl"} py={12}>
        <Stats />
        <Flex>
          {/* This loops over an array of group objects and creates a JoinCard component for each one. */}
          {groups.map((group) => (
            // This component displays information about a group and allows users to join the group.
            <JoinCard
              // This specifies a unique key & passes the group id property to the JoinCard component.
              key={group.id}
              id={group.id}
              group_name={group.name}
              // This passes the group size & date property to the JoinCard component.
              group_size={group.group_size}
              group_date={group.group_date}
            />
          ))}
        </Flex>
        <CreateCard />
      </Container>
      <Footer />
    </>
  );
}
