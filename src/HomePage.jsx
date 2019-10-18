import React from 'react'
import { withRouter } from 'react-router-dom'
import Fade from "react-reveal/Fade";
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
  MapSection,
  ProjectManagerSection,
  Navbar
} from "./components";

export default withRouter(function HomePage({ location }) {

  setTimeout(() => {
    const target = document.querySelector("#contact-button");
    if (location.hash && target) {
        target.click()
      }
  }, 1000);

  return (
    <div>
      <Navbar />
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
      <MapSection />
    </div>
  );
})
