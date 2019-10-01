import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Slide, Fade } from "react-reveal";
import { MethodologyBlob } from "./blobs";
import { ChevronDown, ArrowControl } from "./icons";

const MethodologyWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  overflow: hidden;
  padding-bottom: 2rem;
`;

const MethodologyContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const MethodologyBackground = styled(MethodologyBlob)`
  min-width: 100%;
  object-position: center;
`;

const MethodologySlider = styled.div`
  position: relative;
  top: -40px;
`;

const MethodologyBulletPoints = styled.ul`
  list-style: none;
  margin-top: 1rem;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const MethodologyBulletPoint = styled.li`
  font-size: 17px;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 4px;
    background: #29abe0;
    display: block;
  }
`;

const MethodologyChevronDown = styled(ChevronDown)`
  width: 20px;
  object-fit: contain;
  transition: transform 0.2s ease;
`;

const MethodologyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    ${MethodologyBulletPoints} {
      opacity: 1;
    }

    ${MethodologyChevronDown} {
      transform: rotate(180deg);
    }
  }
`;

const MethodologyCardNumber = styled.h2`
  color: white;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border-radius: 8px;
  margin-bottom: 26px;
`;

const MethodologyCardTitle = styled.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 1rem;
`;

const MethodologyCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
`;

const MethodologyArrowControl = styled(ArrowControl)`
  path, rect {
    fill: black;
  }
`

export default function MethodologySection() {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <MethodologyArrowControl next slidesToShow={2} />,
          prevArrow: <MethodologyArrowControl previous slidesToShow={2} />
        }
      }
    ]
  };

  return (
    <MethodologyWrapper>
      <MethodologyBackground />
      <MethodologyContent>
        <div className="container text-center text-white">
          <Slide left>
            <h2>Une approche méthodologique et efficace</h2>
            <hr className="border-white" />
          </Slide>
          <Slide right>
            <p className="mb-5">
              <strong>Chaque projet est unique </strong>
              mais notre approche est toujours la même. Pourquoi ? Parce qu’elle
              marche. Notre approche méthodique dans la gestion des campagnes
              digitales confiées nous permet d’obtenir{" "}
              <strong>
                les meilleurs résultats de croissance dans les meilleurs délais.
                Grâce à la qualité et la maîtrise de nos contenus vous gagnez en
                visibilité et touchez une audience affinitaire pour votre marque.
              </strong>
            </p>
            <ChevronDown className="d-none d-lg-block" />
          </Slide>
        </div>
      </MethodologyContent>
      <Fade>
        <MethodologySlider className="container">
          <Slider {...settings}>
            <MethodologyCard>
              <MethodologyCardContent>
                <MethodologyCardNumber className="bg-secondary">
                  01.
                </MethodologyCardNumber>
                <MethodologyCardTitle className="text-primary">
                  Recommandation stratégique
                </MethodologyCardTitle>
                <MethodologyChevronDown />
              </MethodologyCardContent>
              <MethodologyBulletPoints>
                <MethodologyBulletPoint>
                  Expression et analyse du besoin, des objectifs et des KPIs.
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Proposition détaillée du plan d’action et des ressources
                  employées.
                </MethodologyBulletPoint>
              </MethodologyBulletPoints>
            </MethodologyCard>
            <MethodologyCard>
              <MethodologyCardContent>
                <MethodologyCardNumber className="bg-secondary">
                  02.
                </MethodologyCardNumber>
                <MethodologyCardTitle className="text-primary">
                  Déploiement & monitoring des opérations
                </MethodologyCardTitle>
                <MethodologyChevronDown />
              </MethodologyCardContent>
              <MethodologyBulletPoints>
                <MethodologyBulletPoint>
                  Production des supports créatifs et mise en place technique
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Déploiement des campagnes par canal d’activation
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Monitoring des campagnes par un chef de projets dédié
                </MethodologyBulletPoint>
              </MethodologyBulletPoints>
            </MethodologyCard>
            <MethodologyCard>
              <MethodologyCardContent>
                <MethodologyCardNumber className="bg-secondary">
                  03.
                </MethodologyCardNumber>
                <MethodologyCardTitle className="text-primary">
                  Analyse des performances
                </MethodologyCardTitle>
                <MethodologyChevronDown />
              </MethodologyCardContent>
              <MethodologyBulletPoints>
                <MethodologyBulletPoint>
                  Analyse statistiques par le chef de projets à l’aide de nos DMP
                  in-house
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Reportings hebdomadaires détaillés par opération et par canal
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Recommandations d'actions et d'optimisations
                </MethodologyBulletPoint>
              </MethodologyBulletPoints>
            </MethodologyCard>
            <MethodologyCard>
              <MethodologyCardContent>
                <MethodologyCardNumber className="bg-secondary">
                  04.
                </MethodologyCardNumber>
                <MethodologyCardTitle className="text-primary">
                  Optimisation en continue
                </MethodologyCardTitle>
                <MethodologyChevronDown />
              </MethodologyCardContent>
              <MethodologyBulletPoints>
                <MethodologyBulletPoint>
                  Activation des optimisations sur les différentes campagnes
                </MethodologyBulletPoint>
                <MethodologyBulletPoint>
                  Analyse de la pertinence des optimisations et confrontion aux
                  objectis fixés
                </MethodologyBulletPoint>
              </MethodologyBulletPoints>
            </MethodologyCard>
          </Slider>
        </MethodologySlider>
      </Fade>
    </MethodologyWrapper>
  );
}
