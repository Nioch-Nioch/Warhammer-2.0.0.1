import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";

import App from "./App";

import GlobalStyles from "./styles/global/GlobalStyles";
import Themes from "./styles/global/Themes";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Themes>
        <GlobalStyles />
        <App />
      </Themes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
