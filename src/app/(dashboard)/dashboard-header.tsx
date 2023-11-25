import { Box, Heading, Text } from "@chakra-ui/react";

export default function DashboardHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box borderBottomWidth={1} padding={4}>
      <Heading as="h2" size="md" color={"blackAlpha.700"}>
        {title}
      </Heading>
      <Text fontSize={"sm"} color={"blue.600"} fontWeight={"medium"}>
        {description}
      </Text>
    </Box>
  );
}
