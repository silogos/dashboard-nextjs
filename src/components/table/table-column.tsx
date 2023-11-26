"use client";

import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { LuGripVertical } from "react-icons/lu";

export interface ITableColumn {
  title: ReactNode;
  columnWidth: number | undefined;
}

export default function TableColumn({
  title,
  columnWidth: _columnWidth,
}: ITableColumn) {
  const [columnWidth, setColumnWidths] =
    useState<ITableColumn["columnWidth"]>(_columnWidth);

  const handleMouseDown = (event: React.MouseEvent) => {
    const initialX = event.pageX;
    const prevWidth = (
      event.target as any
    ).parentNode.parentNode.getBoundingClientRect().width;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - initialX;
      const newWidth = prevWidth + deltaX;
      document.body.style.cursor = "col-resize";

      requestAnimationFrame(() =>
        setColumnWidths(Math.max(Math.floor(newWidth), 16))
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Box
      as="th"
      borderWidth={1}
      position={"relative"}
      style={{ width: columnWidth }}
      onMouseDown={handleMouseDown}
    >
      <Text as={"span"} fontSize={"x-small"} fontWeight={"bold"} noOfLines={1}>
        {title}
      </Text>
      <Box
        position={"absolute"}
        top={"2px"}
        right={"2px"}
        cursor={"col-resize"}
        fontSize={"12px"}
        userSelect={"none"}
      >
        <LuGripVertical />
      </Box>
    </Box>
  );
}
