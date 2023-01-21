import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#f4511e" },
    white: "#fff",
    background: { secondary: "#e6e6e6" },
    textDefault: "#18191F",
  },
  typography: {
    fontFamily: ["Segoue-UI", "sans-serif", "Inter"],

    h1: {
      // fontFamily: "",
      fontSize: "clamp(36px, 5.5vw, 52px)",
      lineHeight: "1.5",
      fontWeight: 700,
      textTransform: "capitalize",
    },

    h2: {
      fontSize: "clamp(26px, 5.5vw, 36px)",
      lineHeight: "1.5",
      fontWeight: 800,
    },
    h3: {
      // fontSize: "clamp(18px, 2vw, 26px)",

      lineHeight: "1.5",
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiSection: {
      styleOverrides: {
        root: {
          // display: "none",
          backgroundColor: "green",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        SelectProps: {
          MenuProps: { disableScrollLock: true },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
