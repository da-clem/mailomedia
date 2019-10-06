import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BannerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, rgba(70, 198, 235, 0.8), rgba(47, 172, 225, 0.8));
  z-index: 1000;
`;

const BannerLogo = styled.div`
  font-size: 24px;
  font-weight: lighter;
  color: white;

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollToSection(id, e) {
    e.preventDefault()
    const target = document.getElementById(id)
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <BannerHeader className="py-1 py-lg-2">
      <div className="container d-flex justify-content-between">
        <BannerLogo>
          <span>mailo</span>
          media
        </BannerLogo>

        <BannerNav>
          <BannerNavToggle onClick={() => setMenuOpen(!menuOpen)} />
          <BannerNavMenu open={menuOpen}>
            <BannerNavLink onClick={(e) => scrollToSection("home", e)}>
              Accueil
            </BannerNavLink>
            <BannerNavLink onClick={(e) => scrollToSection("agency", e)}>
              L’agence
            </BannerNavLink>
            <BannerNavLink onClick={(e) => scrollToSection("solutions", e)}>
              Solutions
            </BannerNavLink>
            <BannerNavLink to="/portfolio/darty">
              Succes Stories
            </BannerNavLink>
            <BannerNavLink onClick={(e) => scrollToSection("contact", e)}>
              <strong>Nous parler</strong>
            </BannerNavLink>
          </BannerNavMenu>
        </BannerNav>
      </div>
    </BannerHeader>
  )
}
