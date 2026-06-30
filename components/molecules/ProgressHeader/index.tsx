import React from "react";
import Typography from "../../atoms/Typography";
import ProgressDot from "../../atoms/ProgressDot";
import { Container, Step, Line } from "./styles";

const ProgressHeader = () => {
  return (
    <Container>
      <Step>
        <ProgressDot />
        <Typography text="Your Business" />
      </Step>

      <Line />

      <Step>
        <Typography text="Business Activity" />
      </Step>

      <Line />

      <Step>
        <Typography text="Your Details" />
      </Step>
    </Container>
  );
};

export default ProgressHeader;