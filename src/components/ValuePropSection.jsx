import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import { Fade } from "react-reveal"
import {
  ArrowControl,
  Emailing,
  CoRegistration,
  Programmatique,
  Social,
  SEA,
  Monetisation
} from "./icons";

const MethodologyArrowControl = styled(ArrowControl)`
  path,
  rect {
    fill: black;
  }
`;

const FullWidthSlider = styled(Slider)`
`

const ValuePropCard = styled.article`
  padding: 4rem 2rem 2rem;
  margin: 2rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  height: 800px;
  max-width: 600px;
  float: right;
  font-size: 21px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 5%);

  img {
    filter: brightness(0%);
  }

  @media screen and (max-width: 600px) {
    font-size: 17px;
  }

  &:hover {
    background: linear-gradient(to bottom, #53d5f2, #29abe0);

    h3,
    p {
      color: white;
    }

    img {
      filter: brightness(1000%);
    }
  }

  img {
    margin: 0;
    display: inline-block !important;
  }

  h3 {
    color: #29abe0;
  }
`;

export default function ValuePropSection() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MethodologyArrowControl next slidesToShow={2} />,
    prevArrow: <MethodologyArrowControl previous slidesToShow={2} />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <MethodologyArrowControl next slidesToShow={1} />,
          prevArrow: <MethodologyArrowControl previous slidesToShow={1} />
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <MethodologyArrowControl next slidesToShow={1} />,
          prevArrow: <MethodologyArrowControl previous slidesToShow={1} />
        }
      }
    ]
  };

  return (
    <div className="my-8 text-center">
      <div className="container">
        <Fade left>
          <h2 className="text-primary">Ce que nous maîtrisons à la perfection</h2>
          <hr className="border-primary" />
        </Fade>
        <Fade right>
          <p className="mb-4">
            Notre rôle est de vous assurer une connaissance complète des différents
            canaux utilisés, pour vous proposer une stratégie digitale qui sera un
            véritable levier pour votre entreprise.
          </p>
        </Fade>
      </div>
      <Fade>

        <FullWidthSlider {...settings}>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={Emailing} alt="Emailing" />
                <h3 className="pt-2 pb-1">Performance</h3>
              </header>
              <p>
                Notre taux de retour d’opérations en emailing et la parfaite
                connaissance de notre réseau média, nous permettent de
                sélectionner les partenaires disposant des audiences les plus
                affinitaires pour vous proposer des solutions adaptées à la
                capture de nouveaux clients. Le monitoring et l’optimisation de la
                diffusion en temps réel de la campagne, par votre chef de projet,
                permettent de diminuer la pression marketing, tout en atteignant
                les KPIs (COS, CAC, ROI…) fixés par les objectifs de campagne.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={CoRegistration} alt="CoRegistration" />
                <h3 className="pt-2 pb-1">Co-Registration</h3>
              </header>
              <p>
                Nous profitons des dynamiques d’information des meilleures sources
                médias, pour toutes nos campagnes d’acquisition et
                d’enrichissement de profils. Les multiples possibilités de
                techniques de ciblage d’audience et de données captables (adresse,
                fonction, intérêts etc…), nous permettent de proposer des
                campagnes de collecte, couplant précision et puissance de
                diffusion web.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={Programmatique} alt="expertise" />
                <h3 className="pt-2 pb-1">Programmatique</h3>
              </header>
              <p>
                Notre agence emploie les meilleurs DSP du marché, pour accéder aux
                inventaires et formats les plus impactant. Toutes nos campagnes
                programmatiques sont pilotées directement par votre chef de projet
                entièrement dédié à ce type d’opération pour les annonceurs. Notre
                expertise couplée à nos optimisations de données quotidiennes,
                permet de limiter au maximum la phase de Learning et de maximiser
                les performances.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={Social} alt="expertise" />
                <h3 className="pt-2 pb-1">Social</h3>
              </header>
              <p>
                Nos chefs de projets vous accompagnent dans l'optimisation de vos
                campagnes Social Ads sur l’ensemble des réseaux sociaux
                disponibles. Grâce à notre expertise en social marketing ads,
                bénéficiez de recommandations précises en fonction de vos
                objectifs : notoriété, fidélisation et performance.
                <br />
                Quelle que soit votre problématique - développement des ventes,
                collecte de leads qualifiés, priorisation de votre audience
                locale, développement de votre notoriété ou diffusion de vos
                publicités sur les réseaux sociaux - nos chefs de projets vous
                accompagnent dans votre stratégie sur les médias sociaux.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={SEA} alt="expertise" />
                <h3 className="pt-2 pb-1">SEA</h3>
              </header>
              <p>
                Nos services taillés sur mesure, couvrent l’éventail des missions
                classiques en SEA. En fonction de vos besoins en visibilité sur
                les moteurs de recherche, de vos contraintes de temps et de votre
                budget, nous intervenons dans l’identification des chantiers, qui
                vont générer un trafic qualifié. Grâce à des outils de
                performance, un savoir-faire inspiré des dernières tendances, nos
                chefs de projets travaillent main dans la main, pour vous garantir
                lors de recherches, un référencement du site, à la hauteur de vos
                attentes.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard>
              <header>
                <img src={Monetisation} alt="expertise" />
                <h3 className="pt-2 pb-1">Monetisation</h3>
              </header>
              <p>
                Notre expertise en gestion de données nous permet de valoriser à
                son maximum le potentiel de la data confiée. Notre approche
                multiple comprend différents niveaux de service : nettoyage des
                données, gestion de la réputation auprès des FAI, optimisation du
                reach, sélection des meilleures campagnes aux eCPM les plus élevés
                et pleine transparence sur les actions initiées.
              </p>
            </ValuePropCard>
          </div>
        </FullWidthSlider>
      </Fade>
    </div>
  );
}

