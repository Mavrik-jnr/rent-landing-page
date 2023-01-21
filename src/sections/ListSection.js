import { Box, Pagination, PaginationItem } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { PrimaryBtn } from "../App";
import { Heading, Section } from "../components/Main";
import { scroller } from "react-scroll";
import PropertyCard from "../components/PropertyCard";
import { First, Next, paginationStyles } from "../components/Pagination";
import { properties } from "../utils/properties";
function ListSection({ scrollY }) {
  const [page, setPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const indexOfLastRecord = page * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = properties.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const handlePagination = (event, value) => {
    setPage(value);
    scroller.scrollTo("list-of-properties", {
      smooth: true,
      duration: "100",
    });
  };
  return (
    <>
      <Section
        id="list-of-properties"
        sx={{
          backgroundColor: "#eeee",
          mt: "93px",
          pt: { xs: "32px", md: "52px", lg: "93px" },
          pb: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box maxWidth="1440px">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "32px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Heading variant="h2" scrollY={scrollY} scrollHeight={1100}>
              List Of Properties
            </Heading>
            <PrimaryBtn>View All Property</PrimaryBtn>
          </Box>

          <Box
            component="section"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Grid2 container columnSpacing={{ xs: 2, sm: 8 }}>
              {currentRecords.map((item, idx) => {
                return (
                  <Grid2
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <PropertyCard key={idx} image={item} />{" "}
                  </Grid2>
                );
              })}
            </Grid2>

            <Box mt="84px" display="flex" justifyContent="center">
              <Pagination
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: First,
                      next: Next,
                    }}
                    {...item}
                  />
                )}
                count={3}
                sx={{ ...paginationStyles }}
                page={page}
                onChange={handlePagination}
              />
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default ListSection;
