import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  margin-top: 30px;
  flex: 0 0 auto;
  position: relative;
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
`;

const BannerNavLink = styled(Link)`
  padding-left: 1rem;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "inherit")};
  text-transform: capitalize;
  color: white;
  cursor: pointer;

  &:hover  {
    text-decoration: underline !important;
    color: white;
  }

  &:not(:last-of-type) {
    padding-right: 1rem;
  }
`;


const BannerNavToggle = styled.div`
  position: relative;
  height: 1rem;
  width: 3rem;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    background: white;
    width: 100%;
    border-radius: 7px;
  }

  &::after {
    bottom: 10%;
    height: 3px;
  }

  &::before {
    top: 10%;
    height: 3px;
  }
`;

const BannerNavMenu = styled.div`
  @media screen and (max-width: 900px) {
    position: absolute;
    right: 0;
    top: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: ${({ open }) => open ? 'block' : 'none'};
    width: 250px;
    border-radius: 8px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);

    ${BannerNavLink} {
      color: black;
      width: 100%;
      display: block;
      padding: 1rem;
    }
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
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollToSection(id, e) {
    e.preventDefault()
    const target = document.getElementById(id)
    target.scrollIntoView({ behavior: 'smooth' })
  }

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
              <BannerNavToggle onClick={() => setMenuOpen(!menuOpen)} />
              <BannerNavMenu open={menuOpen}>
                <BannerNavLink active onClick={(e) => scrollToSection("home", e)}>
                  Accueil
                </BannerNavLink>
                <BannerNavLink onClick={(e) => scrollToSection("agency", e)}>
                  L’agence
                </BannerNavLink>
                <BannerNavLink onClick={(e) => scrollToSection("succes", e)}>
                  Succes Stories
                </BannerNavLink>
                <BannerNavLink onClick={(e) => scrollToSection("solutions", e)}>
                  Solutions
                </BannerNavLink>
                <BannerNavLink onClick={(e) => scrollToSection("contact", e)}>
                  Nous parler
                </BannerNavLink>
                <BannerNavLink to="/portfolio">
                  portfolio
                </BannerNavLink>
              </BannerNavMenu>
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
