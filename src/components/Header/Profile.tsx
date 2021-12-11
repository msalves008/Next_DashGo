import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Alves</Text>
        <Text color="gray.300" fontSize="small">
          msalves008@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Matheus Alves"
        src="https://github.com/msalves008.png"
      />
    </Flex>
  );
}
