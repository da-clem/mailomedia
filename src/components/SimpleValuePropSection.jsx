import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Emailing, CoRegistration, Programmatique, Monetisation, SEA, Social } from "./icons";

const SimpleValuePropWrapper = styled.div`
  margin: 4rem 0 140px;
`;

const SimpleValuePropCard = styled.div`
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  }
`;

const SimpleValuePropCardIcon = styled.img`
  filter: contrast(0%) brightness(-100%);
  margin-bottom: 1rem;
`;

export default function SimpleValuePropSection() {
  return (
    <SimpleValuePropWrapper className="container text-center">
      <Fade left cascade>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={Emailing} alt="Emailing" />
              Emailing
            </SimpleValuePropCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={CoRegistration} alt="Display" />
              Display
            </SimpleValuePropCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={Programmatique} alt="Display" />
              Programmatique
            </SimpleValuePropCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={Social} alt="Social" />
              Social
            </SimpleValuePropCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={SEA} alt="SEA" />
              SEA
            </SimpleValuePropCard>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleValuePropCard className="text-primary">
              <SimpleValuePropCardIcon src={Monetisation} alt="Monetisation" />
              Monétisation
            </SimpleValuePropCard>
          </div>
        </div>
      </Fade>
    </SimpleValuePropWrapper>
  );
}
