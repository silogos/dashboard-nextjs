"use client";

import { UsersResponse, UsersResponseDataKey } from "@/types/ResponseAPI";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

interface IDrawerUser extends ReturnType<typeof useDisclosure> {
  user: UsersResponse["data"][0];
}

export default function DrawerUser({ isOpen, onClose, user }: IDrawerUser) {
  const toast = useToast();
  const mutation = useMutation({
    mutationFn: async () => {
      return await fetch(`https://delman-fe-api.fly.dev/users/${user.id}`, {
        method: "DELETE",
      }).then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).message);

        return res.json();
      });
    },
    onSuccess: (data) => {
      onClose();
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    },
    onError: (error) => {
      toast({
        title: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    },
  });

  return (
    <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          User Details
          <Text fontSize={"xs"}>This is inquiry about user with email</Text>
        </DrawerHeader>

        <DrawerBody overflowY={"auto"} position={"relative"}>
          <Box as="table" width={"100%"} style={{ tableLayout: "fixed" }}>
            {Object.keys(user).map((key) => (
              <tr key={key}>
                <td width={200} style={{ verticalAlign: "baseline" }}>
                  <Text fontSize={"md"}>{key}</Text>
                </td>
                <td width={10} style={{ verticalAlign: "baseline" }}>
                  :
                </td>
                <td>
                  <Text fontSize={"md"}>
                    {user[key as UsersResponseDataKey]}
                  </Text>
                </td>
              </tr>
            ))}
          </Box>
        </DrawerBody>
        <Divider />
        <DrawerFooter justifyContent={"space-around"}>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            backgroundColor={"red.600 !important"}
            onClick={() => mutation.mutate()}
            isLoading={mutation.isPending}
          >
            Delete
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
