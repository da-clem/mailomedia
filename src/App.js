import React from "react";
import { ThemeProvider } from "styled-components";
import Fade from "react-reveal/Fade";
import { GlobalStyles } from "./styles";
import {
  BannerSection,
  SimpleValuePropSection,
  SuccessStoriesSection,
  StrategySection,
  CustomersSection,
  CustomerAcquisitionSection,
  MethodologySection,
  MediaSection,
  ValuePropSection,
  Imports,
  MapSection,
  ProjectManagerSection
} from "./components";

import "./assets/stylesheets/application.scss";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <GlobalStyles />
        <Fade>
          <BannerSection />
        </Fade>
        <SimpleValuePropSection />
        <StrategySection />
        <Fade>
          <SuccessStoriesSection />
        </Fade>
        <CustomersSection />
        <CustomerAcquisitionSection />
        <MethodologySection />
        <MediaSection />
        <ValuePropSection />
        <ProjectManagerSection />
        <Fade>
          <MapSection />
        </Fade>
        <Imports />
      </div>
    </ThemeProvider>
  );
}

export default App;
