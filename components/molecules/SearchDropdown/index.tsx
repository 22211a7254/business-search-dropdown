import React from "react";
import SearchItem from "../SearchItem";
import { Dropdown } from "./styles";

interface SearchDropdownProps {
  companies: string[];
  onSelect: (company: string) => void;
}

const SearchDropdown = ({
  companies,
  onSelect,
}: SearchDropdownProps) => {
  return (
    <Dropdown>
      {companies.map((company, index) => (
        <SearchItem
          key={index}
          name={company}
          onClick={() => onSelect(company)}
        />
      ))}
    </Dropdown>
  );
};

export default SearchDropdown;