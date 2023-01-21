import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import pay from "../assets/features/pay.svg";

function FeatureBlock({ icon, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", lg: "flex-start" },
      }}
    >
      <img src={icon} style={{ width: "77px" }} alt="feature" />
      <Typography
        variant={"h3"}
        sx={{
          minWidth: { xs: "150px", md: "200px" },
          // pl: "10px",
          color: { xs: "white", lg: "black" },
          textAlign: { xs: "center", lg: "left" },
          fontSize: { xs: "18px", md: "20px", lg: "22px", xl: "26px" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default FeatureBlock;
