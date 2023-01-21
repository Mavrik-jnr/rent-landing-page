import { Fab, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Section } from "../components/Main";
import heroImg from "../assets/hero.png";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { ReactComponent as Dropdown } from "../assets/dropdown.svg";
import { neighborhoods, types } from "../utils/dropdown";
import { Link as HashLink } from "react-scroll";
function Hero() {
  const [type, setType] = useState("");

  const [neighborhood, setNeighborhood] = useState("");
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleNeighborhoodChange = (event) => {
    setNeighborhood(event.target.value);
  };

  return (
    <>
      <Section
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          backgroundImage: `url(${heroImg})`,
          minHeight: "100vh",
          objectFit: "center",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "relative",
          "::after": {
            content: "''",

            pt: { xs: "80px", sm: "94px", md: "10px", lg: "170px" },

            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            backgroundColor: "rgb(0,0,0,20%)",
            zIndex: "-1",
          },
          zIndex: "1",
        }}
      >
        <Box
          component="article"
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "1440px",
            width: "100%",
            gap: "16px",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: "52px", sm: "94px", md: "0px", lg: "60px" },
            mb: "32px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              textAlign: { xs: "center", md: "left" },
              maxWidth: "584px",
            }}
          >
            The most affortable place to stay in the san franciso bay area
          </Typography>

          <Box
            component="article"
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingRight={{ xs: "0px", md: "16px" }}
            sx={{
              width: { xs: "90%", md: "auto" },

              "& ::before": {
                padding: "0px",
              },

              "& .map": {
                borderRadius: "32px",
                padding: "0px",

                width: { xs: "100%", sm: "430px" },
                iframe: {
                  borderRadius: "32px",
                  width: "100%",
                  height: "340px",
                  boxShadow: "0px 0px 18px 3px rgba(0, 0, 0, 0.5)",
                },
              },
            }}
          >
            <div className="map">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58530.78882981397!2d4.50882688602577!3d8.47064949059746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103652a514011adf%3A0x31bb285ad7163d1a!2sGolden%20Sands%20Luxury%20Resorts!5e0!3m2!1sen!2sng!4v1674298464524!5m2!1sen!2sng"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ border: "0" }}
              ></iframe>
            </div>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",

                gap: "0px",
                alignItems: "center",
                width: "85%",
                maxWidth: "430px",
                padding: "15px 22px",
                borderRadius: "10px",
              }}
            >
              <TextField
                label={type === "" ? "All Types" : ""}
                id="outline-basic"
                value={type}
                onChange={(e) => handleTypeChange(e)}
                InputLabelProps={{ shrink: false, className: "label" }}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "5px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #e6e6e6",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid black",
                    },
                  },
                  "& .label": {
                    color: "#252B42",
                    fontWeight: "500",
                    fontSize: { xs: "14px", md: "16px" },
                  },
                  "& .label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiSelect-icon": {
                    top: "45%",
                    right: "10%",
                    color: "#252B42",
                    fontWeight: "500",
                  },
                  flexBasis: "40%",
                }}
                select
                SelectProps={{
                  IconComponent: Dropdown,
                  MenuProps: { disableScrollLock: true },
                }}
              >
                {types.map((item, idx) => {
                  return (
                    <MenuItem key={idx} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                value={neighborhood}
                onChange={(e) => handleNeighborhoodChange(e)}
                InputLabelProps={{ shrink: false, className: "label" }}
                label={neighborhood === "" ? "Neighborhood" : ""}
                sx={{
                  "& .MuiInputBase-root": {
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #e6e6e6",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid black",
                    },
                  },

                  "& .MuiSelect-icon": {
                    top: "45%",
                    right: "10%",
                  },
                  "& .label": {
                    color: "#252B42",
                    fontWeight: "500",
                    fontSize: { xs: "14px", md: "16px" },
                  },

                  "& .label.Mui-focused": {
                    color: "white",
                  },
                  flexBasis: "50%",
                }}
                select
                SelectProps={{
                  IconComponent: Dropdown,
                  MenuProps: { disableScrollLock: true },
                }}
              >
                {neighborhoods.map((item, idx) => {
                  return (
                    <MenuItem key={idx} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </TextField>
              <HashLink to="list-of-properties" smooth={true} duration={300}>
                <Fab
                  aria-label="add"
                  sx={{
                    borderRadius: "0px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    width: "60px",
                    boxShadow: "0 0 0 0 ",
                    backgroundColor: "#23A6F0",
                    border: "1px solid #e6e6e6",
                    "&:hover": {
                      backgroundColor: "#2196D9",
                    },
                    "&:focus": {
                      backgroundColor: "#2EB4FF",
                      boxShadow: "0 0 0 0",
                    },
                  }}
                  disableRipple
                  disableFocusRipple
                >
                  <SearchIcon sx={{ color: "white" }} />
                </Fab>
              </HashLink>
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Hero;
