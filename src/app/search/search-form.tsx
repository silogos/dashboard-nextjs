"use client";

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import ResultBox from "./result-box";
import useSearchForm from "./use-search-form";

export default function SearchForm() {
  const { searchText, setSearchText, email, error } = useSearchForm();

  return (
    <Flex p={4} width={600} minHeight={500} gap={10} flexDirection={"column"}>
      <Flex direction={"column"} gap={1}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LuSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Input email here"
            size="md"
            paddingLeft={10}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </InputGroup>
        <Text fontSize="xs" color={"red.600"}>
          {error}
        </Text>
      </Flex>
      {email ? <ResultBox email={email} /> : null}
    </Flex>
  );
}
