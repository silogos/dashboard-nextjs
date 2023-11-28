import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import DashboardHeader from "@/components/dashboard-header";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "User Registration",
};

export default function Register() {
  return (
    <Flex flex={1} flexDirection={"column"}>
      <DashboardHeader title="User Registration" description="Add new User" />
      <RegisterForm />
    </Flex>
  );
}
