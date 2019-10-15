import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Fade } from "react-reveal"
import { PierreRicaud, TUIGray, DartyGray, GFGray, ChevronDown } from "./icons";
import { SuccessStoriesBlob } from "./blobs";

const ChevronRight = styled(ChevronDown)`
  transform: scale(2) rotate(-90deg) translate(0, -50%) !important;

  * {
    pointer-events: none;
  }
`

const ChevronLeft = styled(ChevronDown)`
  transform: scale(2) rotate(90deg) translate(0, 50%) !important;

  * {
    pointer-events: none;
  }
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
    filter: brightness(1000%) contrast(100%);
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
                      <img className="d-inline" src={DartyGray} alt="DartyGray" />
                      <h3 className="pt-2">Darty</h3>
                      <p className="small font-weight-lighter">
                        #ROI #COS <br />#PERFORMANCE #HIGHTECH
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Nous accompagnons la marque dans ses
                        périodes commerciales fortes (soldes, Black
                        friday...) pour atteindre ses objectifs
                        d’acquisition de nouveaux clients et de
                        conversions dans un contexte très ROIste.
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
                      <img className="d-inline" src={TUIGray} alt="TUIGray" />
                      <h3 className="pt-2">TUI</h3>
                      <p className="small font-weight-lighter">
                        #ROI #EMAILING <br />#COS #TRAVEL
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Nous pilotons la diffusion des campagnes
                        de ventes directes en e-mailing avec pour
                        objectif principal de toujours diminuer le
                        COS dans un contexte concurrentiel très
                        fort et des périodes commerciales
                        saisonnières.
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
                      <h3 className="pt-2">DR PIERRE RICAUD <br />(Yves Rocher groupe)</h3>
                      <p className="small font-weight-lighter">
                        #CAC #EUROPE <br />#MULTICANAL #MAKEUP
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Nous contribuons à rendre l’image de
                        marque plus forte en Europe (France,
                        Belgique, Allemagne...) à travers des
                        opérations d’enrichissement de profils du
                        PRM/CRM en nouvelles clientes avec un
                        objectif de CAC.
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
                      <img className="d-inline" src={GFGray} alt="GFGray" />
                      <h3 className="pt-2">GALERIES LAFAYETTES</h3>
                      <p className="small font-weight-lighter">
                        #COS #SOLDES <br /> #BLACKFRIDAY #FRENCHDAYS
                      </p>
                      <hr className="my-2 border-white" />
                      <p className="mb-3">
                        Nous accompagnons les Galeries Lafayette
                        sur leur problématique d’acquisition durant
                        leurs temps forts commerciaux : 3J, soldes,
                        Black Friday, French Days. Délais très courts
                        et objectif de COS sont au rendez-vous!
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
