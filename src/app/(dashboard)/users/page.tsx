import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import DashboardHeader from "../dashboard-header";

export const metadata: Metadata = {
  title: "Users Data",
};

export default function Users() {
  return (
    <Flex as="main" flexDirection={"column"}>
      <DashboardHeader title="Users Data" description="List of Users Data" />
    </Flex>
  );
}
