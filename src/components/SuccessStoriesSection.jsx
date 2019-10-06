import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Fade } from "react-reveal"
import { PierreRicaud, VoyagePrivee, Evaneos, ChevronDown } from "./icons";
import { SuccessStoriesBlob } from "./blobs";

const ChevronRight = styled(ChevronDown)`
  transform: scale(2) rotate(-90deg) translate(0, -50%) !important;
`

const ChevronLeft = styled(ChevronDown)`
  transform: scale(2) rotate(90deg) translate(0, 50%) !important;
`

const SuccessStoriesWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;

`;

const SuccessStoriesBackground = styled(SuccessStoriesBlob)`
  min-width: 100%;
  height: 120vh;
`;

const SuccessStoriesContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SuccessStoriesContainer = styled.div`
  height: 100%;
  padding-top: 150px;
`;


const SuccessStory = styled.article`

  hr {
    border-width: 2px;
    width: 20px;
  }

  img {
    height: 65px;
  }
`;

export default function SuccessStoriesSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  return (
    <SuccessStoriesWrapper id="succes">
      <SuccessStoriesBackground />
      <SuccessStoriesContent className="text-white">
        <SuccessStoriesContainer className="container">
          <div>
            <Fade>
              <h2 className="text-left d-block">Nos Success stories </h2>
              <hr className="ml-0 border-white" />
            </Fade>
            <Fade>
              <Slider {...settings} >
                <SuccessStory className="px-1 px-md-2 px-lg-5">
                  <div className="h-100 text-center d-flex flex-column align-items-center justify-content-between">
                    <div>
                      <img className="d-inline" src={Evaneos} alt="Evaneos" />
                      <h3 className="pt-2">Evaneos</h3>
                      <p className="small font-weight-lighter">
                        #ROI #EMAILING
                        <br />
                        #EUROPE
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Enrichir et alimenter le PRM/CRM <br /> de la jeune entité en forte
                        croissance <br /> en profils intentionnistes dans l’achat d’un
                        voyage
                      </p>
                    </div>
                    <button className="btn btn-secondary w-100">
                      en savoir plus
                    </button>
                  </div>
                </SuccessStory>
                <SuccessStory className="px-1 px-md-2 px-lg-5">
                  <div className="h-100 text-center d-flex flex-column align-items-center justify-content-between">
                    <div>
                      <img className="d-inline" src={VoyagePrivee} alt="VoyagePrivee" />
                      <h3 className="pt-2">Voyages Privés</h3>
                      <p className="small font-weight-lighter">
                        #COS #ACQUISITION
                        <br />
                        #PERF
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Accompagner la marque dans ses périodes commerciales fortes
                        pour atteindre ses objectifs d’acquisition de nouveaux
                        clients dans un contexte de performance
                      </p>
                    </div>
                    <button className="btn btn-secondary w-100">
                      en savoir plus
                    </button>
                  </div>
                </SuccessStory>
                <SuccessStory className="px-1 px-md-2 px-lg-5">
                  <div className="h-100 text-center d-flex flex-column align-items-center justify-content-between">
                    <div>
                      <img className="d-inline" src={PierreRicaud} alt="PierreRicaud" />
                      <h3 className="pt-2">Dr Pierre Ricaud</h3>
                      <p className="small font-weight-lighter">
                        #EUROPE #MULTICANAL<br />#NEWCUSTOMERS
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Contribuer à rendre l’image de marque plus forte en Europe,
                        alimenter le PRM/CRM en nouvelles clientes et générer des
                        ventes sur les périodes fortes.
                      </p>
                    </div>
                    <button className="btn btn-secondary w-100">
                      en savoir plus
                    </button>
                  </div>
                </SuccessStory>
              </Slider>
            </Fade>
          </div>
        </SuccessStoriesContainer>
      </SuccessStoriesContent>
    </SuccessStoriesWrapper>
  );
}
