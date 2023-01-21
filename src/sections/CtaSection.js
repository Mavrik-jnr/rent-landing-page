import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PrimaryBtn } from "../App";
import { Section } from "../components/Main";
import flexImg from "../assets/flexImages .png";

function CtaSection() {
  return (
    <>
      <Section
        sx={{
          pt: { xs: "50px", md: "80px", lg: "110px" },
          pb: { xs: "93px", lg: "110px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="article"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="63px"
          maxWidth="1440px"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          sx={{
            ".flexImg": {
              maxWidth: "550px",

              width: { xs: "100%", sm: "85%", md: "60%" },
            },
          }}
        >
          <img className="flexImg" src={flexImg} alt="" srcset="" />
          <Box component="article" flexGrow="1">
            <Typography
              variant="h2"
              sx={{
                fontWeight: "800",
                fontSize: { xs: "36px", sm: "40px" },

                mb: "16px",
              }}
            >
              Flexibility and options to suit your lifestyle.
            </Typography>
            <Typography
              sx={{ mb: "40px", fontSize: "18px", fontWeight: "400" }}
            >
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </Typography>
            <PrimaryBtn>Search Rooms</PrimaryBtn>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default CtaSection;
