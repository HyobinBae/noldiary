import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
