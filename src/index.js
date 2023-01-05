import React from "react";
import ReactDOM from "react-dom/client";

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
    white: "#FFFFF",
    background: { secondary: "#e6e6e6" },
    textDefault: "#18191F",
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
