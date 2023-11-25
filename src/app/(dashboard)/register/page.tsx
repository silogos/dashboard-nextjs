import { Flex } from "@chakra-ui/react";
import DashboardHeader from "../dashboard-header";

export const metadata: Metadata = {
  title: "User Registration",
};

export default function Register() {
  return (
    <Flex as="main" flexDirection={"column"}>
      <DashboardHeader title="User Registration" description="Add new User" />
    </Flex>
  );
}
