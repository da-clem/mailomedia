import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import BannerBlob from "./blobs/BannerBlob";
import { Arrow } from "./icons";

const BannerWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;
  width: 100vw;
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
`;

const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const BannerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 66px;
  flex: 0 0 auto;
`;

const BannerLogo = styled.div`
  font-size: 24px;
  font-weight: lighter;

  span {
    font-weight: bold;
  }
`;

const BannerNav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BannerNavLink = styled.a`
  padding-left: 1rem;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "inherit")};
  text-transform: capitalize;
  cursor: pointer;

  &:hover  {
    text-decoration: underline !important;
  }

  &:not(:last-of-type) {
    padding-right: 1rem;
  }
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
`;

const BannerParagraph = styled.p`
  font-weight: 300;
  line-height: 33px;
  display: flex;
  justify-content: space-between;
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
  return (
    <BannerWrapper>
      <BannerBackground />
      <BannerContent className="pb-9 pb-md-0">
        <BannerContainer className="container">
          <BannerHeader>
            <BannerLogo>
              <span>mailo</span>
              media
            </BannerLogo>
            <BannerNav>
              <BannerNavLink active>Accueil</BannerNavLink>
              <BannerNavLink>L’agence</BannerNavLink>
              <BannerNavLink>Solutions</BannerNavLink>
              <BannerNavLink>Succes Stories</BannerNavLink>
              <BannerNavLink>Nous parler</BannerNavLink>
            </BannerNav>
          </BannerHeader>
          <BannerText>
            <BannerTitle>Agence digitale performante</BannerTitle>
            <BannerParagraph>
              Créons ensemble une stratégie d'acquisition performante <br />
              pour conquérir vos nouveaux clients.
              <ArrowButton className="btn btn-secondary">
                <Arrow />
              </ArrowButton>
            </BannerParagraph>
          </BannerText>
        </BannerContainer>
      </BannerContent>
    </BannerWrapper>
  );
}
