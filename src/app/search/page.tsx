import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import DashboardHeader from "@/components/dashboard-header";
import SearchForm from "./search-form";

export const metadata: Metadata = {
  title: "Search User",
};

export default function Search() {
  return (
    <Flex flex={1} flexDirection={"column"}>
      <DashboardHeader title="Search User" description="Search existing user" />
      <SearchForm />
    </Flex>
  );
}
