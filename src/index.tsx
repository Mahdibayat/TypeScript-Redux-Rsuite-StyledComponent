import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeType } from "./scripts/interfaces";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      width: 100%;
      min-height: 100vh;
      background-image: linear-gradient(149deg ,#499dff66 0%,#fff0 64%);
  }     
  @keyframes H-Rotate {
      100% {
          transform: rotateY(360deg);
      }
  }
`;

const theme: ThemeType = {
  mainColor: "#383241",
  seccoundColor: "red",
  darkBack: "#27262c",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomProvider theme="dark">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
            {/* ALL LINKS INVISIBLE */}
            <div style={{ display: "none" }}>
              <Link to="/" id="toHome" />
              <Link to="/trade" id="toTrade" />
            </div>
          </ThemeProvider>
        </CustomProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
