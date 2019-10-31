import React from "react";
import styled from "styled-components";
import BannerBlob from "./blobs/BannerBlob";
import { Arrow } from "./icons";


const BannerWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;
  width: 100vw;
  z-index: 1000;
`;

const BannerBackground = styled(BannerBlob)`
  min-width: 100vw;
  object-fit: cover;
  object-position: center;
  float: right;
  display: block;

  path {
    width: 100%;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: white;
  padding-top: 80px;
`;

const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;


const BannerText = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BannerTitle = styled.h1`
  font-weight: bold;
  letter-spacing: -2px;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    font-size: 70px;
  }
`;

const BannerParagraph = styled.p`
  font-weight: 300;
  line-height: 33px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 900px) {
    font-size: 21px;
  }
`;

const ArrowButton = styled.button`
  height: 160px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vw;
  padding: 0 !important;
  min-width: none !important;
  display: block !important;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    svg {
      transform: translateY(1rem);
    }
  }
`;

export default function BannerSection() {


  function scrollToSection(id, e) {
    e.preventDefault()
    const target = document.getElementById(id)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <BannerWrapper id="home">
      <BannerBackground />
      <BannerContent className="pb-9 pb-md-0">
        <BannerContainer className="container">
          <BannerText>
            <BannerTitle>Agence digitale<br />performante</BannerTitle>
            <BannerParagraph>
              Créeons ensemble une stratégie d'acquisition performante <br />
              pour conquérir vos nouveaux clients.
              <ArrowButton className="btn btn-secondary" onClick={(e) => scrollToSection("simple-value-prop", e)}>
                <Arrow />
              </ArrowButton>
            </BannerParagraph>
          </BannerText>
        </BannerContainer>
      </BannerContent>
    </BannerWrapper>
  );
}
