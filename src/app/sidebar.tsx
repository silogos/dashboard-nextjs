"use client";

import { Box, Flex } from "@chakra-ui/react";
import MenuItem from "./menu-item";
import {
  LuAlignLeft,
  LuLayoutDashboard,
  LuSearch,
  LuUserPlus,
  LuUsers,
} from "react-icons/lu";
import { usePathname } from "next/navigation";
import useSidebar from "./useSidebar";

const menus = [
  { key: "/dashboard", name: "Dashboard", icon: LuLayoutDashboard },
  { key: "/users", name: "Users", icon: LuUsers },
  { key: "/register", name: "Registration", icon: LuUserPlus },
  { key: "/search", name: "Search", icon: LuSearch },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { mounted, sidebarState, toggleSidebar } = useSidebar();

  // if (!mounted) return null;

  return (
    <>
      <Box
        as="aside"
        width={sidebarState === "open" ? 200 : 50}
        overflow={"hidden"}
        borderRightWidth={1}
        backgroundColor={"gray.100"}
        transition={"width 0.3s ease"}
      >
        <Box as="nav" width={"100%"}>
          <Flex as={"ul"} flexDir={"column"} width={"100%"}>
            <MenuItem
              name={"Menu"}
              icon={LuAlignLeft}
              onClick={toggleSidebar}
            />
            {menus.map(({ key, name, icon }) => (
              <MenuItem
                key={key}
                href={key}
                name={name}
                icon={icon}
                active={pathname === key}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
