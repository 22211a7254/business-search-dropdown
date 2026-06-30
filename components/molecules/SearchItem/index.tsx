import React from "react";
import { Item } from "./styles";

interface SearchItemProps {
  name: string;
  onClick: () => void;
}

const SearchItem = ({ name, onClick }: SearchItemProps) => {
  return <Item onClick={onClick}>{name}</Item>;
};

export default SearchItem;