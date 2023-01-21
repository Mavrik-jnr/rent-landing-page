import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Section } from "../components/Main";
import PropertyForm from "../components/PropertyForm";
import { ReactComponent as Quote } from "../assets/quote.svg";
import Carousel from "react-material-ui-carousel";
import { testimonials } from "../utils/testimonials";
import Testimonial from "../components/Testimonial";
import vid from "../assets/vid.mp4";
import { Play } from "../components/VideoIcons";
function TestimonialSection({ scrollY }) {
  const [controls, setControls] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [play, setPlay] = useState(false);
  const video = useRef(null);
  return (
    <>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "37px",
          paddingBottom: "110px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: {
              xs: scrollY >= 6500 && "0px 4px 63px 0px rgb(0,0,0,15%)",
              sm: scrollY >= 6300 && "0px 4px 63px 0px rgb(0,0,0,15%)",
              md: scrollY >= 4300 && "0px 4px 63px 0px rgb(0,0,0,15%)",
              lg: scrollY >= 3800 && "0px 4px 63px 0px rgb(0,0,0,15%)",
            },

            transition: "box-shadow .5s",
            // height: "1130px",
            width: { xs: "100%", lg: "970px" },
            paddingTop: "45px",
            paddingBottom: "45px",
            gap: { xs: "32px", sm: "66px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "clamp(22px,3vw,28px)",
              color: "#F4511E",
              mt: "",
            }}
          >
            Add A New Property
          </Typography>
          <PropertyForm />
        </Box>
      </Section>
      <Section
        sx={{
          mb: "110px",
          paddingTop: "10px",
          backgroundColor: "rgb(244, 81, 30, 7%)",
          pb: "48px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            display: "flex",
            gap: "36px",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box
            position="relative"
            flexBasis="50%"
            sx={{
              ".carousel": {
                minHeight: "450px",
              },
              ".quote": {
                position: "absolute",
                top: { xs: "10%", md: "8%", lg: "7%" },
                left: { xs: "45%", md: "-4%", lg: "-8%" },
                zIndex: "1000",
              },
              ".indicatorContainer": {
                textAlign: { xs: "center", md: "left" },
              },
            }}
          >
            <Quote className="quote" />
            <Carousel
              className="carousel"
              indicatorIconButtonProps={{
                style: {
                  padding: "4px",

                  color: "#D9DBE1",
                },
              }}
              navButtonsProps={{
                style: {
                  display: "none",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#F4511E",
                },
              }}
              indicatorContainerProps={{
                className: "indicatorContainer",
                style: { marginTop: "40px" },
              }}
            >
              {testimonials.map((item, idx) => {
                return <Testimonial key={idx} item={item} />;
              })}
            </Carousel>
          </Box>
          <Box
            sx={{
              position: "relative",
              flexBasis: "50%",
              height: "fit-content",

              paddingTop: "76px",
            }}
          >
            <video
              width="100%"
              autoPlay={play}
              // height="100%"
              onPlay={(e) => {
                setPlay(true);
              }}
              onPause={(e) => {
                setPlay(false);
              }}
              ref={video}
              onMouseOver={() => {
                if (play) {
                  setControls(true);
                  setShowBtn(true);
                }
              }}
              onMouseOut={() => {
                setControls(false);
                if (play) {
                  setShowBtn(false);
                }
              }}
              controls={controls}
            >
              <source src={vid} type="video/mp4" />
            </video>
            <Play
              setPlay={setPlay}
              play={play}
              video={video.current}
              show={showBtn}
              setShowBtn={setShowBtn}
            />
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default TestimonialSection;
