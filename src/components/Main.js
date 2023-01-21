import { styled, Typography } from "@mui/material";

export const Main = styled("main", {
  name: "MuiMain",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})({
  // display: "flex",
  // flexDirection: "column",
  // // alignItems: "center",
  // justifyContent: "center",
  //Mobile first Responsive Padding
});

export const Section = styled("section", {
  name: "MuiMain",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})({
  //Mobile first Responsive Padding
  paddingInline: "16px",
  "@media (min-width:600px)": {
    paddingInline: "clamp(16px, 8.5vw, 32px)",
  },
  "@media (min-width:900px)": {
    paddingInline: "clamp(32px, 8.5vw, 60px)",
  },
  "@media (min-width:1200px)": {
    paddingInline: "clamp(60px, 8.5vw, 120px)",
  },
});

export const Footer = styled("footer")({
  paddingInline: "16px",
  "@media (min-width:600px)": {
    paddingInline: "clamp(16px, 8.5vw, 32px)",
  },
  "@media (min-width:900px)": {
    paddingInline: "clamp(32px, 8.5vw, 60px)",
  },
  "@media (min-width:1200px)": {
    paddingInline: "clamp(60px, 8.5vw, 120px)",
  },
  paddingTop: "70px",
  paddingBottom: "110px",
});

export const Heading = styled(Typography)(({ theme, scrollY, scrollHeight }) =>
  theme.unstable_sx({
    position: "relative",
    // display: "none",
    width: "fit-content",
    textAlign: { xs: "center", md: "left" },
    "&.MuiTypography-root": {
      // position: "relative",

      "&::before": {
        content: '""',
        // display: "block",
        position: "absolute",
        height: "3px",
        backgroundColor: "primary.main",
        width: {
          xs: scrollY >= scrollHeight ? "28%" : "0%",
          md: scrollY >= scrollHeight ? "36%" : "0%",
        },
        left: { xs: "36%", md: "0px" },
        transition: "width 1s",
        // top: "50%",
        bottom: "-10px",
      },
    },
  })
);
