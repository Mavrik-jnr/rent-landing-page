import { Box, Button, Typography } from "@mui/material";

import React, { useState } from "react";
import Bed from "../assets/propertyCard/Bed.svg";
import Shower from "../assets/propertyCard/Shower.svg";
import Size from "../assets/propertyCard/Size.svg";

function PropertyCard({ image }) {
  const [hover, setHover] = useState(false);
  return (
    <Box
      sx={{
        mt: "69px",
        backgroundColor: "white",
        maxWidth: { xs: "450px", md: "380px" },
        minWidth: { xs: "100%", sm: "330px" },
        // height: "540px",
        borderRadius: "26px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          // backgroundColor: "red",
          height: "283px",
          position: "relative",
          mb: "18px",
          cursor: "pointer",
        }}
      >
        <Button
          onMouseOver={() => {
            setHover(true);
          }}
          variant="outline"
          sx={{
            position: "absolute",
            zIndex: "9",
            top: "40%",
            left: "37%",
            opacity: hover ? "1" : "0",
            textTransform: "capitalize",
            color: "primary.main",
            border: "1px solid #F4511E",
            transition: "opacity,  .5s",
            transition: "background-color,  .2s",
            "&:hover": {
              border: "1px solid #FFF",
              backgroundColor: "#FFF",
            },
          }}
        >
          View More
        </Button>

        <Box
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          sx={{
            backgroundImage: `url(${image})`,
            height: "283px",
            position: "relative",
            // filter:
            transition: "transform 0.3s",
            " -webkit-transition": "-webkit-transform 0.3s",
            backgroundSize: "cover",
            // backgroundPosition: "center",
            transform: hover && "scale(1.5)",
            "-webkit-transform": hover && "scale(1.5)",

            "::before": {
              content: "''",
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: hover ? "rgb(0,0,0,0.75)" : "rgb(0,0,0,0)",
              transition: " background-color .3s",
            },
          }}
        />
      </Box>
      <Box
        component="article"
        sx={{ paddingLeft: "27px", paddingRight: "46px" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "23px" },
            lineHeight: "1.5",
            fontWeight: "700",
            mb: "19px",
            textTransform: "capitalize",
          }}
        >
          2578 Folsom street, san francisco, CA, 94110
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "1.5",
            // fontWeight: "700",
            color: "#818181",
            mb: "3px",
          }}
        >
          Private Room
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "26px" },
            lineHeight: "1.5",
            fontWeight: "700",
            color: "primary.main",
            mb: "18px",
          }}
        >
          $1200/Month
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          borderTop: "1px solid #e4e4e4",
          justifyContent: "space-around",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "20px",
            paddingInline: "40px",
            // borderRight: "1px solid #e4e4e4",
            // flexGrow: "1",
            // ha,
          }}
        >
          <img src={Bed} alt="icon" />
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "700",
              lineHeight: "1.5",
            }}
          >
            4
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "20px",
            paddingInline: "40px",
            // padding: "30px 40px",
            borderRight: "1px solid #e4e4e4",
            borderLeft: "1px solid #e4e4e4",
            // flexGrow: "1",
          }}
        >
          <img src={Shower} alt="icon" />
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "700",
              lineHeight: "1.5",
            }}
          >
            2
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            // flexGrow: "1",
            padding: "20px",
            paddingInline: "40px",
            // padding: "30px 40px",
          }}
        >
          <img src={Size} alt="icon" />
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "700",
              lineHeight: "1.5",
            }}
          >
            2
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyCard;
