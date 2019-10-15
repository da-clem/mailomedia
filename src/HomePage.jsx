import React from 'react'
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

export default function HomePage() {
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
}
