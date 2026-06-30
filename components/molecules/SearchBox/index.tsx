import React from "react";
import Input from "../../atoms/Input";
import { SearchContainer } from "./styles";

interface SearchBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <SearchContainer>
      <Input
        value={value}
        placeholder="Search your business"
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default SearchBox;