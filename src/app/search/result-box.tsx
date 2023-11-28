"use client";

import { UsersResponse } from "@/types/ResponseAPI";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DrawerUser from "./drawer-user";

export default function ResultBox({ email }: { email: string }) {
  const disclosure = useDisclosure();
  const { data, isLoading } = useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: async () => {
      return (await fetch(`https://delman-fe-api.fly.dev/users`)).json();
    },
  });
  const selectedUser: UsersResponse["data"][0] | null = useMemo(() => {
    return data?.data.find((user) => user.email === email) || null;
  }, [data, email]);

  if (isLoading) return "Loading...";
  if (!selectedUser) return `Not found user with email ${email}`;

  return (
    <>
      <Flex
        borderWidth={1}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={10}
        gap={5}
      >
        <Box>
          <Heading textAlign={"center"}>{selectedUser.name}</Heading>
          <Text textAlign={"center"}>{selectedUser.email}</Text>
        </Box>
        <Divider />
        <Button
          onClick={disclosure.onOpen}
          size="sm"
          colorScheme="blue"
          backgroundColor={"blue.600 !important"}
        >
          View User Profile
        </Button>
      </Flex>

      <DrawerUser {...disclosure} user={selectedUser} />
    </>
  );
}
