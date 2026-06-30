import React from "react";
import ProgressHeader from "../../molecules/ProgressHeader";
import BusinessSearch from "../../organisms/BusinessSearch";
import { Wrapper } from "./styles";

const BusinessTemplate = () => {
  return (
    <Wrapper>
      <ProgressHeader />
      <BusinessSearch />
    </Wrapper>
  );
};

export default BusinessTemplate;