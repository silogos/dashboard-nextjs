import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";
import DashboardHeader from "@/components/dashboard-header";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/table";
import { UsersResponse } from "@/types/ResponseAPI";

export const metadata: Metadata = {
  title: "Users Data",
};

async function getData(): Promise<UsersResponse> {
  const res = await fetch("https://delman-fe-api.fly.dev/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Users() {
  const data = await getData();
  const columns: ColumnDef<UsersResponse["data"][0]>[] = [
    {
      accessorKey: "id",
      header: "id",
      size: 60,
    },
    {
      accessorKey: "name",
      header: "name",
    },

    {
      accessorKey: "email",
      header: "email",
    },
    {
      accessorKey: "country_name",
      header: "country_name",
    },
    {
      accessorKey: "device_id",
      header: "device_id",
    },
    {
      accessorKey: "bitcoin_address",
      header: "bitcoin_address",
    },
    {
      accessorKey: "avatar",
      header: "avatar",
    },
    {
      accessorKey: "login_ip",
      header: "login_ip",
    },
    {
      accessorKey: "active_device_mac",
      header: "active_device_mac",
    },
    {
      accessorKey: "notes",
      header: "notes",
    },
    {
      accessorKey: "age",
      header: "age",
    },
    {
      accessorKey: "referral_id",
      header: "referral_id",
    },
    {
      accessorKey: "locale",
      header: "locale",
    },
    {
      accessorKey: "favorite_music",
      header: "favorite_music",
    },
    {
      accessorKey: "phone_number",
      header: "phone_number",
    },
    {
      accessorKey: "twitter_username",
      header: "twitter_username",
    },
    {
      accessorKey: "job",
      header: "job",
    },
    {
      accessorKey: "invoice_email_address",
      header: "invoice_email_address",
    },
    {
      accessorKey: "hmac_secret",
      header: "hmac_secret",
    },
    {
      accessorKey: "favorite_quote",
      header: "favorite_quote",
    },
    {
      accessorKey: "primary_color",
      header: "primary_color",
    },
    {
      accessorKey: "secondary_color",
      header: "secondary_color",
    },
    {
      accessorKey: "material",
      header: "material",
    },
    {
      accessorKey: "shipping_address",
      header: "shipping_address",
    },
    {
      accessorKey: "zip_code",
      header: "zip_code",
    },
    {
      accessorKey: "latitude",
      header: "latitude",
    },
    {
      accessorKey: "longitude",
      header: "longitude",
    },
    {
      accessorKey: "favorite_animal",
      header: "favorite_animal",
    },
    {
      accessorKey: "app_version",
      header: "app_version",
    },
    {
      accessorKey: "timezone",
      header: "timezone",
    },
  ];

  return (
    <Flex as="main" flexDirection={"column"}>
      <DashboardHeader title="Users Data" description="List of Users Data" />
      <Table columns={columns} data={data.data} />
    </Flex>
  );
}
