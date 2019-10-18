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

const MethodologyArrowControlRight = styled(ArrowControl)`
  top: calc(-1rem + 4px) !important;
  bottom: 0;
  right: calc(50% - 4rem) !important;
  width: auto;
  height: auto;

  path,
  rect {
    fill: black;
  }
`;

const MethodologyArrowControlLeft = styled(ArrowControl)`
  top: -1rem !important;
  bottom: 0;
  left: calc(50% - 4rem) !important;
  width: auto;
  height: auto;

  path,
  rect {
    fill: black;
  }
`;

const FullWidthSlider = styled(Slider)`
  max-width: 1140px;
  margin: 0 auto;
  overflow: visible;
`

const ValuePropCard = styled.article`
  margin: 2rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  height: 700px;
  max-width: 500px;
  float: right;
  font-size: 21px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 5%);
  font-size: 17px;

  img {
    filter: brightness(0%);
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    height: 800px;
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
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MethodologyArrowControlRight next slidesToShow={2} />,
    prevArrow: <MethodologyArrowControlLeft previous slidesToShow={2} />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <MethodologyArrowControlRight next slidesToShow={1} />,
          prevArrow: <MethodologyArrowControlLeft previous slidesToShow={1} />
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <MethodologyArrowControlRight next slidesToShow={1} />,
          prevArrow: <MethodologyArrowControlLeft previous slidesToShow={1} />
        }
      }
    ]
  };

  return (
    <div className="my-4 text-center" id="perfection">
      <div className="container">
        <Fade>
          <h2 className="text-primary">Ce que nous maîtrisons à la perfection</h2>
          <hr className="border-primary" />
        </Fade>
        <Fade>
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
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={Emailing} alt="Emailing" />
                <h3 className="pt-2 pb-1">E-mailing</h3>
              </header>
              <p className="text-justify">
                Notre taux de retour d’opérations en emailing et la parfaite
                connaissance de notre réseau média, nous permettent de
                sélectionner les partenaires disposant des audiences les plus
                affinitaires pour vous proposer des solutions adaptées à la
                capture de nouveaux clients.
                <br />
                <br />
                Le monitoring et l’optimisation de la
                diffusion en temps réel de la campagne, par votre chef de projet,
                permettent de diminuer la pression marketing, tout en atteignant
                les KPIs (COS, CAC, ROI…) fixés par les objectifs de campagne.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={CoRegistration} alt="CoRegistration" />
                <h3 className="pt-2 pb-1">Coregistration</h3>
              </header>
              <p className="text-justify">
                Nous profitons des dynamiques d’information des meilleures sources
                médias, pour toutes nos campagnes d’acquisition et
                d’enrichissement de profils.
                <br />
                <br />
                Les multiples possibilités de
                techniques de ciblage d’audience et de données captables (adresse,
                fonction, intérêts etc…), nous permettent de proposer des
                campagnes de collecte, couplant précision et puissance de
                diffusion web.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={Programmatique} alt="expertise" />
                <h3 className="pt-2 pb-1">Programmatique</h3>
              </header>
              <p className="text-justify">
                Notre agence emploie les meilleurs DSP du marché, pour accéder aux
                inventaires et formats les plus impactant.
                <br />
                <br />
                Toutes nos campagnes programmatiques sont pilotées directement par votre chef de projet
                entièrement dédié à ce type d’opération pour les annonceurs. Notre
                expertise couplée à nos optimisations de données quotidiennes,
                permet de limiter au maximum la phase de Learning et de maximiser
                les performances.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={Social} alt="expertise" />
                <h3 className="pt-2 pb-1">Social</h3>
              </header>
              <p className="text-justify">
                Nos chefs de projets vous accompagnent dans l'optimisation de vos
                campagnes Social Ads sur l’ensemble des réseaux sociaux
                disponibles. Grâce à notre expertise en social marketing ads,
                bénéficiez de recommandations précises en fonction de vos
                objectifs : notoriété, fidélisation et performance.
                <br />
                <br />
                Quelle que soit votre problématique - nos chefs de projets vous
                accompagnent dans votre stratégie sur les médias sociaux.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={SEA} alt="expertise" />
                <h3 className="pt-2 pb-1">SEA</h3>
              </header>
              <p className="text-justify">
                Nos services taillés sur mesure, couvrent l’éventail des missions
                classiques en SEA. En fonction de vos besoins en visibilité sur
                les moteurs de recherche, de vos contraintes de temps et de votre
                budget, nous intervenons dans l’identification des chantiers, qui
                vont générer un trafic qualifié.
                <br />
                <br />
                Grâce à des outils de
                performance, un savoir-faire inspiré des dernières tendances, nos
                chefs de projets travaillent main dans la main, pour vous garantir
                lors de recherches, un référencement du site, à la hauteur de vos
                attentes.
              </p>
            </ValuePropCard>
          </div>
          <div className="px-1">
            <ValuePropCard className="p-lg-4 p-2">
              <header>
                <img src={Monetisation} alt="expertise" />
                <h3 className="pt-2 pb-1">Monetisation</h3>
              </header>
              <p className="text-justify">
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

