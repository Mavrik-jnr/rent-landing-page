import { Box, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Footer } from "../components/Main";
import logo from "../assets/Logo.png";

import { ReactComponent as Loc } from "../assets/footer/location.svg";
import { ReactComponent as Call } from "../assets/footer/call.svg";
import { ReactComponent as Fax } from "../assets/footer/fax.svg";
import { ReactComponent as Facebook } from "../assets/footer/facebook.svg";
import { ReactComponent as Twitter } from "../assets/footer/twitter.svg";
import { ReactComponent as Youtube } from "../assets/footer/yt.svg";
import { ReactComponent as Instagram } from "../assets/footer/instagram.svg";
import { ReactComponent as Google } from "../assets/footer/google.svg";
import { ReactComponent as Pinterest } from "../assets/footer/pinterest.svg";
import { ReactComponent as Wifi } from "../assets/footer/wifi.svg";
import { ReactComponent as LinkedIn } from "../assets/footer/linkedin.svg";

function FooterSection() {
  return (
    <>
      <Footer
        component="footer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          pb: "10px",
        }}
      >
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            color: "black",
            height: "2px",
            mb: "64px",
          }}
        />
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              mb: "24px",
              gap: "32px",
            }}
            paddingBottom="32px"
            paddingLeft={{ xs: "0px", md: "64px" }}
          >
            <img
              src={logo}
              alt=""
              srcset=""
              style={{
                width: "27%",
                height: "10%",
                filter:
                  "invert(80%) sepia(10%) saturate(70%) hue-rotate(90deg) brightness(113%) contrast(108%)",
              }}
            />
            <Box flexBasis="50%">
              <Grid2 container spacing={2}>
                <Grid2 xs={12}>
                  <Box
                    display="flex"
                    gap="16px"
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                  >
                    <Loc />
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        color: "#0a142f",
                      }}
                    >
                      345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 xs={6}>
                  <Box
                    display="flex"
                    gap="16px"
                    alignItems="center"
                    mr={{ xs: "8px", md: "0px" }}
                    justifyContent={{ xs: "flex-end", md: "flex-start" }}
                  >
                    <Call />
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        color: "#0a142f",
                      }}
                    >
                      (123) 456-7890
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 xs={6}>
                  <Box
                    display="flex"
                    gap="16px"
                    alignItems="center"
                    ml={{ xs: "8px", md: "0px" }}
                  >
                    <Fax />
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        color: "#0a142f",
                      }}
                    >
                      (123) 456-7890
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 xs={12} mt="16px">
                  <Box
                    display="flex"
                    gap="16px"
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    flexDirection={{ xs: "column", md: "row" }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        color: "rgb(10, 20, 47, 50%)",
                      }}
                    >
                      Social Media
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: { xs: "8px", sm: "24px" },
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: {
                          xs: "space-between",
                          md: "flex-start",
                        },
                      }}
                    >
                      <Facebook />
                      <Twitter />
                      <LinkedIn />
                      <Youtube />
                      <Instagram />
                      <Google />
                      <Pinterest />
                      <Wifi />
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
          <Divider
            sx={{
              height: "1px",

              mb: "24px",
              backgroundColor: "rgb(123,185,252,15%)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              mb: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#0a142f",
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#0a142f",
                }}
              >
                CONTACT US
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#0a142f",
                }}
              >
                HELP
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#0a142f",
                }}
              >
                PRIVACY POLICY
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#0a142f",
                }}
              >
                DISCLAIMER
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "rgb(10, 20, 47, 50%)", textAlign: "center" }}
              >
                Copyright © 2020 Minimumlivingcost. All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Footer>
    </>
  );
}

export default FooterSection;
