"use client";

import { Box, Text, Tooltip } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { LuArrowRightCircle } from "react-icons/lu";

export interface ITableCell {
  content: ReactNode;
}

export default function TableCell({ content }: ITableCell) {
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const element = cellRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setIsClamped(element.scrollWidth > element.clientWidth);
    });

    // @ts-ignore
    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  return (
    <Box
      ref={cellRef}
      as="td"
      borderWidth={1}
      position={"relative"}
      overflow={"hidden"}
    >
      <Text as={"span"} fontSize={"x-small"} whiteSpace={"nowrap"}>
        {content}
      </Text>
      {isClamped && (
        <Tooltip label={content} fontSize="x-small">
          <Box
            position={"absolute"}
            top={"5px"}
            right={"0px"}
            cursor={"zoom-in"}
            fontSize={"16px"}
            backgroundColor={"white"}
          >
            <LuArrowRightCircle />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
}
