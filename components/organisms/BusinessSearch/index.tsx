import React, { useState } from "react";
import SearchBox from "../../molecules/SearchBox";
import SearchDropdown from "../../molecules/SearchDropdown";
import Typography from "../../atoms/Typography";
import { Container, Card, Footer } from "./styles";
import { companies } from "../../../data/companies";

const BusinessSearch = () => {
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Card>
        <Typography text="Search for your business" />

        <Typography text="Sole trader, freelancer or not registered with Companies House?" />

        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <SearchDropdown
            companies={filteredCompanies}
            onSelect={(company) => setSearch(company)}
          />
        )}

        <Footer>
          Can't find your business? <a href="#">Enter your details</a>
        </Footer>
      </Card>
    </Container>
  );
};

export default BusinessSearch;