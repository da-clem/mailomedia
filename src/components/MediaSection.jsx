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
  height: 200px;
  justify-content: space-between;
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
const Img = styled.img`
  height: 45px;
`

export default function MediaSection() {
  function scrollToSection(id, e) {
    e.preventDefault()
    const target = document.getElementById(id)
    target.scrollIntoView({ behavior: 'smooth' })
  }

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
                <div>
                  <Img className="mb-2" src={PartenairesMedia} alt="PartenairesMedia" />
                  <h2 className="text-primary">
                    1200
                  </h2>
                </div>
                <p>
                  Partenaires <br />
                  médias
                </p>
              </MediaCard>
              <MediaCard>
                <div>
                  <Img className="mb-2" src={OptIn} alt="OptIn" />
                  <h2 className="text-primary">
                    58<small>M</small>
                  </h2>
                </div>
                <p>
                  Emailing
                </p>
              </MediaCard>
              <MediaCard>
                <div>
                  <Img className="mb-2" src={Programmatique} alt="Programmatique" />
                  <h2 className="text-primary">
                    117<small>M</small>
                  </h2>
                </div>
                <p>
                  V.U <br />
                  Programmatique
                </p>
              </MediaCard>
              <MediaCard>
                <div>
                  <Img className="mb-2" src={CoRegistration} alt="CoRegistration" />
                  <h2 className="text-primary">
                    41<small>M</small>
                  </h2>
                </div>
                <p>
                  Coregistration
                </p>
              </MediaCard>
              <MediaCard>
                <div>
                  <Img className="mb-2" src={SEA} alt="SEA" />
                  <h2 className="text-primary">
                    58<small>M</small>
                  </h2>
                </div>
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
                    <button className="btn btn-light" onClick={(e) => scrollToSection("contact", e)}>
                      NOUS CONTACTER
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
