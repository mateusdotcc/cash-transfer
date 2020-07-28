import "./languages/i18n";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/";

import GlobalStyle from "./styles/globalStyle";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
);

export default App;
