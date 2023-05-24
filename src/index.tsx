import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { store } from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <React.StrictMode> */}
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>

    {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
