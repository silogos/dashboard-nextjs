"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import TableColumn from "./table-column";
import TableCell from "./table-cell";
import {
  ColumnDef,
  Row,
  Table,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtual } from "react-virtual";

export interface ITableColumn {
  accessorKey: string;
  header: string;
  cell?: (text: string) => React.ReactNode;
  size?: number;
}

export interface ITable<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export default function Table<T>({ data, columns }: ITable<T>) {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 50,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <Flex ref={tableContainerRef} height={1000} overflow={"auto"} p={4}>
      <Box
        as="table"
        overflow={"hidden"}
        p={4}
        w={"100%"}
        style={{ tableLayout: "fixed" }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Box key={headerGroup.id} as="tr" backgroundColor={"blue.50"}>
              {headerGroup.headers.map((header) => (
                <TableColumn
                  key={header.id}
                  title={header.column.columnDef.header as any}
                  columnWidth={header.getSize()}
                />
              ))}
            </Box>
          ))}
        </thead>
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index] as Row<T>;

            return (
              <Box key={row.id} as="tr">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      content={flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    />
                  );
                })}
              </Box>
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </Box>
    </Flex>
  );
}
