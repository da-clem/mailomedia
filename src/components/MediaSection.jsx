import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { StrategyBlob } from "./blobs"
import {
  OptIn,
  PartenairesMedia,
  Programmatique,
  CoRegistration,
  SEA
} from "./icons";
import MediaPartnersSection from "./MediaPartners"

const MediaCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  height: 300px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const StrategyWrapper = styled.div`
  position: relative;
  top: -100px;
  overflow: hidden;
`;

const StrategyBackground = styled(StrategyBlob)`
  min-width: 100%;
`

const StrategyContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`


export default function MediaSection() {
  return (
    <div className="">
      <div className="bg-light py-5">
        <div className="container">
          <Fade>
            <h2 className="text-primary">Notre réseau médias France & Europe</h2>
            <hr className="border-primary ml-0 pb-2" />
          </Fade>
          <Fade cascade>
            <div className="d-flex justify-content-between text-center flex-wrap">
              <MediaCard>
                <img src={PartenairesMedia} alt="PartenairesMedia" />
                <h2 className="text-primary">1200</h2>
                <p>
                  Partenaires <br />
                  médias
                </p>
              </MediaCard>
              <MediaCard>
                <img src={OptIn} alt="OptIn" />
                <h2 className="text-primary">
                  58<small>M</small>
                </h2>
                <p>
                  Opt-in <br />
                  Emailing
                </p>
              </MediaCard>
              <MediaCard>
                <img src={Programmatique} alt="Programmatique" />
                <h2 className="text-primary">
                  117<small>M</small>
                </h2>
                <p>
                  V.U <br />
                  Programmatique
                </p>
              </MediaCard>
              <MediaCard>
                <img src={CoRegistration} alt="CoRegistration" />
                <h2 className="text-primary">
                  41<small>M</small>
                </h2>
                <p>
                  V.U <br />
                  Co-registration
                </p>
              </MediaCard>
              <MediaCard>
                <img src={SEA} alt="SEA" />
                <h2 className="text-primary">
                  58<small>M</small>
                </h2>
                <p>
                  V.U <br /> Native Ads
                </p>
              </MediaCard>
            </div>
          </Fade>

        </div>
        <MediaPartnersSection />
      </div>
      <StrategyWrapper>
        <StrategyBackground />
        <StrategyContent>
          <StrategyContent>
            <div className="container text-white">
              <div className="row">
                <Fade>
                  <div className="col-12 col-md-6">
                    <h2>
                      Vous êtes ici pour propulser votre stratégie digitale ?
                    </h2>
                  </div>
                </Fade>
                <Fade>
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                    <button className="btn btn-light">
                      DECOUVRIR NOS SOLUTIONS
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          </StrategyContent>
        </StrategyContent>
      </StrategyWrapper>
    </div>
  );
}
