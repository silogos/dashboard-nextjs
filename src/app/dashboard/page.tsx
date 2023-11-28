import { Flex } from "@chakra-ui/react";
import Table from "@/components/table";
import DashboardHeader from "@/components/dashboard-header";
import { ColumnDef } from "@tanstack/react-table";
import { SalesResponse } from "@/types/ResponseAPI";

async function getData(): Promise<SalesResponse> {
  const res = await fetch("https://delman-fe-api.fly.dev/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const data = await getData();
  const columns: ColumnDef<SalesResponse["data"][0]>[] = [
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
      accessorKey: "sales_id",
      header: "sales_id",
    },
    {
      accessorKey: "item_id",
      header: "item_id",
    },
    {
      accessorKey: "qty",
      header: "qty",
    },
    {
      accessorKey: "consumen_name",
      header: "consumen_name",
    },
    {
      accessorKey: "transaction_date",
      header: "transaction_date",
    },
  ];

  return (
    <Flex flex={1} direction={"column"} overflow={"auto"}>
      <DashboardHeader
        title="Sales Dashboard"
        description="List of Sales Data"
      />
      <Table columns={columns} data={data.data} />
    </Flex>
  );
}
