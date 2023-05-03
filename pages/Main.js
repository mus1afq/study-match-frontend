import { useEffect, useState } from "react";
import { Container, Flex } from "@chakra-ui/react";

import CreateCard from "@/components/main/CreateCard";
import Footer from "@/components/main/Footer";
import JoinCard from "@/components/main/JoinCard";
import Stats from "@/components/main/Stats";
import Navbar2 from "@/components/Navbar2";
import authFetch from "@/lib/axios/interceptors";

export default function Main() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch.get("/groups/");
      const groups = response.data;
      console.log(groups);
      setGroups(groups.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar2 />
      <Container maxW={"5xl"} py={12}>
        <Stats />
        <Flex>
          {groups.map((group) => (
            <JoinCard
              key={group.id}
              id={group.id}
              group_name={group.name}
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
