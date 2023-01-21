import { Box, Typography } from "@mui/material";
import React from "react";

function Testimonial({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        position: "relative",
        flexDirection: "column",
        gap: "50px",
        minHeight: "400px",
        paddingTop: "48px",

        pl: "8px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "19px", lg: "22px" },
          lineHeight: "2",
          color: "#1819f",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {item.comment}
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            borderRadius: "73.5px",
            border: "2px solid #F4511E",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "61px",
            width: "61px",
          }}
        ></Box>
        <Box display="flex" flexDirection="column">
          <Typography sx={{ color: "#F4511E", fontWeight: "700" }}>
            {item.name}
          </Typography>
          <Typography sx={{ color: "#18191F" }}>{item.position}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
