import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

/*Todo
0. Set up themes for type, colors and shadows
1. Set up Box component for page sections
2. Set up Card Variants
3. 
*/
const theme = createTheme({
  palette: {
    primary: { main: "#f4511e" },
    white: "#fff",
    background: { secondary: "#e6e6e6" },
    textDefault: "#18191F",
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
