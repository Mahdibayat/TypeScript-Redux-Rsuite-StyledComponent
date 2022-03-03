import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      width: 100%;
      min-height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomProvider theme="dark">
          <GlobalStyle />
          <App />
        </CustomProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
