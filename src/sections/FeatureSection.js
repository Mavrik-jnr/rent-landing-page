import { Box } from "@mui/material";
import React from "react";
import { Heading, Section } from "../components/Main";
import featureIMG from "../assets/featureIMG.png";
import featureBG from "../assets/featurebg.jfif";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Features } from "../utils/features";
import FeatureBlock from "../components/FeatureBlock";
function FeatureSection({ scrollY }) {
  return (
    <>
      <Section
        sx={{
          pt: { xs: "32px", md: "52px", lg: "93px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box maxWidth="1440px">
          <Heading variant="h2" scrollY={scrollY} scrollHeight={360}>
            Minimum Living Cost Takes Care Of Everything
          </Heading>
          <Box
            component="article"
            sx={{
              display: "flex",

              gap: "63px",
              mt: "44px",

              "& .featureIMG": {
                display: { xs: "none", lg: "block" },
              },
            }}
          >
            <img
              src={featureIMG}
              className="featureIMG"
              style={{
                marginLeft: "-40px",

                width: "500px",
                height: "550px",
              }}
              alt="featureIMG"
            />
            <Box
              mt="50px"
              sx={{
                backgroundImage: { xs: `url(${featureBG})`, lg: "none" },
                display: { xs: "flex", lg: "block" },
                alignItems: { xs: "center", lg: "" },
                justifyContent: { xs: "center", lg: "" },
                padding: { xs: "32px", lg: "0px" },
                borderRadius: "32px",
                minHeight: "500px",
                backgroundAttachment: { xs: "none", sm: "fixed" },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                "::after": {
                  content: "''",
                  display: { xs: "block", lg: "none" },
                  // height: "80%",
                  pt: { xs: "80px", sm: "94px", md: "10px", lg: "170px" },
                  // width: "100vw",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  bottom: "0px",
                  right: "0px",
                  backgroundColor: "rgb(0,0,0,50%)",
                  zIndex: "-1",
                  borderRadius: "32px",
                },
                zIndex: "1",
              }}
            >
              <Grid2 container spacing={8}>
                {Features.map((item, idx) => {
                  return (
                    <Grid2 xs={12} sm={6} md={4} lg={4}>
                      <FeatureBlock
                        key={idx}
                        icon={item.icon}
                        text={item.text}
                      />
                    </Grid2>
                  );
                })}
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default FeatureSection;
