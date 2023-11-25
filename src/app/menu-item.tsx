"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IMenuItem {
  href?: string;
  onClick?: () => void;
  name: string;
  icon: IconType;
  active?: boolean;
}

export default function MenuItem({
  href,
  name,
  icon,
  active = false,
  onClick,
}: IMenuItem) {
  const Icon = icon;
  const Wrapper = href ? Link : Box;

  return (
    <Box as="li">
      <Wrapper
        href={href ? href : ""}
        fontSize={14}
        fontWeight={"bold"}
        color={active ? "blue.600" : "blackAlpha.700"}
        flex={1}
        height={14}
        display={"flex"}
        alignItems={"center"}
        px={4}
        backgroundColor={active ? "gray.200" : "transparent"}
        _hover={{
          backgroundColor: "gray.200",
          color: "blue.600",
        }}
        gap={6}
        cursor={"pointer"}
        onClick={onClick}
        // maxWidth={180}
      >
        <Flex basis={18} grow={0} shrink={0}>
          <Icon size={18} />
        </Flex>
        <Flex grow={0} shrink={1}>
          {name}
        </Flex>
      </Wrapper>
    </Box>
  );
}
