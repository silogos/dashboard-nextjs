import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      backgroundColor={"white"}
      borderBottomWidth={1}
      borderBottomColor={"#CCC"}
    >
      <Flex
        height={16}
        marginX={"auto"}
        px={{ base: 4, sm: 6, lg: 8 }}
        align={"center"}
        fontWeight={"bold"}
        color={"blackAlpha.900"}
      >
        Dashboard
      </Flex>
    </Box>
  );
}
