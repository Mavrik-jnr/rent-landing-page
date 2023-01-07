import { styled } from "@mui/material";

export const Main = styled("main", {
  name: "MuiMain",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})({
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
