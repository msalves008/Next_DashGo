import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="right" w="64">
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
