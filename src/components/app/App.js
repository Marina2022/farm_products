import './styles';
import PageWrapper from "../layout/PageWrapper/PageWrapper";
import {GlobalStyles} from "./styles";
import ScrollToTop from "../layout/ScrollToTop";
import React from "react";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <GlobalStyles />
      <PageWrapper/>
    </div>
  );
}

export default App;
