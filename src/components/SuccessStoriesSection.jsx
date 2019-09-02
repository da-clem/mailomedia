import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Slide } from "react-reveal"
import { ArrowControl, PierreRicaud, VoyagePrivee, Evaneos } from "./icons";
import { SuccessStoriesBlob } from "./blobs";

const SuccessStoriesWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
`;

const SuccessStoriesBackground = styled(SuccessStoriesBlob)`
  min-width: 100%;
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
  height: 650px;

  hr {
    border-width: 2px;
    width: 20px;
  }
`;

export default function SuccessStoriesSection() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ArrowControl next slidesToShow={1} />,
          prevArrow: <ArrowControl previous slidesToShow={1} />
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ArrowControl next slidesToShow={1} />,
          prevArrow: <ArrowControl previous slidesToShow={1} />
        }
      }
    ]
  };

  return (
    <SuccessStoriesWrapper>
      <SuccessStoriesBackground />
      <SuccessStoriesContent className="text-white">
        <SuccessStoriesContainer className="container">
          <div>
            <Slide left>
              <h2 className="text-left d-block">Nos Success stories </h2>
              <hr className="ml-0 border-white" />
            </Slide>
            <Slide right>
              <Slider {...settings} >
                <SuccessStory className="px-1 px-md-2">
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
                        Enrichir et alimenter le PRM/CRM de la jeune entité en forte
                        croissance en profils intentionnistes dans l’achat d’un
                        voyage
                      </p>
                    </div>
                    <button className="btn btn-secondary w-100">
                      en savoir plus
                    </button>
                  </div>
                </SuccessStory>
                <SuccessStory className="px-1 px-md-2">
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
                <SuccessStory className="px-1 px-md-2">
                  <div className="h-100 text-center d-flex flex-column align-items-center justify-content-between">
                    <div>
                      <img className="d-inline" src={PierreRicaud} alt="PierreRicaud" />
                      <h3 className="pt-2">Dr Pierre Ricaud</h3>
                      <p className="small font-weight-lighter">
                        #EUROPE #MULTICANAL #NEWCUSTOMERS
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
            </Slide>
          </div>
        </SuccessStoriesContainer>
      </SuccessStoriesContent>
    </SuccessStoriesWrapper>
  );
}
