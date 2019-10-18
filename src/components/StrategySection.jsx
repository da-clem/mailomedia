import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const StrategyWrapper = styled.div`
  margin-bottom: 150px;
`;

const Button = styled.button`
  width: 360px;
  font-size: 14px;
  padding: 12px 0;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  margin-top: 4rem;
`;

export default function StrategySection() {

  function scrollToSection(id, e) {
    e.preventDefault()
    const target = document.getElementById(id)
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <StrategyWrapper className="container text-center pt-4" id="agency">
      <Fade>
        <h2 className="text-primary">
          Besoin de propulser votre stratégie d'acquisition ?
        </h2>
        <hr className="border-primary" />
      </Fade>
      <Fade>
        <p>
          Nous disposons de toutes les solutions marketing adaptées en réponse à
          vos objectifs publicitaires{" "}
          <strong>d’acquisition, fidélisation et de performance.</strong> Nos
          outils technologiques propriétaires couplés à notre expertise des
          différents canaux nous permettent d’assurer une approche à 360°
          résolument orientée résultats et de créer une veritable stratégie
          d'acquisition performante et pérenne.
          <br />
          <br />
          Votre chef de projet est entièrement dédié au monitoring des campagnes
          de votre entreprise, pour la mise en place de toutes les optimisations
          et recommandations afin de répondre le plus rapidement possible à vos
          objectifs.
        </p>
        <Button className="btn btn-primary" onClick={(e) => scrollToSection("solutions", e)}>DECOUVRIR L’AGENCE</Button>
      </Fade>
    </StrategyWrapper>
  );
}
