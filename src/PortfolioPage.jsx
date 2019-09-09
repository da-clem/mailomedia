import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { Arrow } from './components/icons'

const BackLink = styled(Link)`
  padding: 4rem 0;
  display: block;

  svg {
    transform: rotate(90deg) scale(1.5);

    path, rect {
      fill: black;
    }
  }
`;

export default function PortfolioPage() {
  return (
    <div class="container">
      <BackLink to="/"><Arrow /></BackLink>
      <Fade>
        <div>
          <div className="row py-3 align-items-center">
            <div className="col-12 col-lg-4">
              <h2>DARTY</h2>
            </div>
            <div className="col-12 col-lg-8 d-flex justify-content-end">
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  objectif
                </p>
                <p>ROI, COS</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  secteur
                </p>
                <p>High tech, Informatique, Electroménager</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  timeframe
                </p>
                <p>2018-2019</p>
              </div>
            </div>
          </div>
          <div className="bg-light py-10 w-100"></div>
          <div className="row text-center py-3">
            <p>
              Nous accompagnons la marque dans ses périodes commerciales fortes
              (soldes, Black friday...) pour atteindre ses objectifs
              d’acquisition de nouveaux clients et de conversions dans un
              contexte très ROIste.
            </p>
          </div>
          <div className="row">
            <div className="col-12 pb-3">
              <h3>Data-keys</h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">11.3</p>
              <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">2</p>
              <p>Années de collaboration avec la marque</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">
                7,515<small>M</small>
              </p>
              <p>Utilisateurs touchés par nos campaignes</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="py-10">
          <div className="row py-3 align-items-center">
            <div className="col-12 col-lg-4">
              <h2>TUI</h2>
            </div>
            <div className="col-12 col-lg-8 d-flex justify-content-end">
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  objectif
                </p>
                <p>ROI, COS</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  secteur
                </p>
                <p>Travel</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  timeframe
                </p>
                <p>2019</p>
              </div>
            </div>
          </div>
          <div className="bg-light py-10 w-100"></div>
          <div className="row text-center py-3">
            <p>
              Nous accompagnons la marque dans ses périodes commerciales fortes
              (soldes, Black friday...) pour atteindre ses objectifs
              d’acquisition de nouveaux clients et de conversions dans un
              contexte très ROIste.
            </p>
          </div>
          <div className="row">
            <div className="col-12 pb-3">
              <h3>Data-keys</h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">9.5</p>
              <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">
                1100<small>%</small>
              </p>
              <p>ROI obtenu sur l’intégralité de nos campagnes</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">
                27,315<small>M</small>
              </p>
              <p>Utilisateurs touchés par nos campaignes</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="py-10">
          <div className="row py-3 align-items-center">
            <div className="col-12 col-lg-4">
              <h2>Dr Pierre Ricáud</h2>
            </div>
            <div className="col-12 col-lg-8 d-flex justify-content-end">
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  objectif
                </p>
                <p>CAC, Nouveaux clients</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  secteur
                </p>
                <p>Retail, Make-up</p>
              </div>
              <div className="pl-3 flex-grow-0">
                <p className="small font-weight-bold text-uppercase text-primary">
                  timeframe
                </p>
                <p>2017-2019</p>
              </div>
            </div>
          </div>
          <div className="bg-light py-10 w-100"></div>
          <div className="row text-center py-3">
            <p>
              Nous accompagnons la marque dans ses périodes commerciales fortes
              (soldes, Black friday...) pour atteindre ses objectifs
              d’acquisition de nouveaux clients et de conversions dans un
              contexte très ROIste.
            </p>
          </div>
          <div className="row">
            <div className="col-12 pb-3">
              <h3>Data-keys</h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">
                <small>+</small>32<small>k</small>
              </p>
              <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">3</p>
              <p>Années de collaboration avec la marque</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <p className="display-2 text-primary">36,712<small>M</small></p>
              <p>Utilisateurs touchés par nos campaignes</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

