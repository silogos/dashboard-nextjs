import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import DashboardHeader from "@/components/dashboard-header";

export const metadata: Metadata = {
  title: "Search User",
};

export default function Search() {
  return (
    <Flex as="main" flexDirection={"column"}>
      <DashboardHeader title="Search User" description="Search existing user" />
    </Flex>
  );
}
