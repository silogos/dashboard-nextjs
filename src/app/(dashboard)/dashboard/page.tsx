import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import DashboardHeader from "../dashboard-header";
import Table from "@/components/table";

export default function Dashboard() {
  return (
    <Flex as="main" flexDirection={"column"}>
      <DashboardHeader
        title="Sales Dashboard"
        description="List of Sales Data"
      />
      <Table />
    </Flex>
  );
}
