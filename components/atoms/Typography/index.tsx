import React from "react";
import { StyledText } from "./styles";

interface TypographyProps {
  text: string;
}

const Typography = ({ text }: TypographyProps) => {
  return <StyledText>{text}</StyledText>;
};

export default Typography;