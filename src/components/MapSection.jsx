import React, { useState } from "react";
import { Marker as MarkerIcon, LinkedIn, Envelope } from "./icons";
import ReactMapGL, { Marker } from "react-map-gl";
import styled from "styled-components";


const BulletPoints = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding-left: 0;
`;

const BulletPoint = styled.li`
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

export default function MapSection() {
  const latitude = 43.699298;
  const longitude = 7.266372;

  const [map, setMap] = useState({
    viewport: {
      width: "100%",
      height: "100%",
      latitude: latitude,
      longitude: longitude,
      zoom: 15
    }
  });

  return (
    <div className="bg-gradient-primary" id="contact">
      <section className="container pt-8 pb-10">
        <div className="row bg-white shadow">
          <div className="col-12 col-md-6 px-0">
            <ReactMapGL
              {...map.viewport}
              onViewportChange={viewport => setMap({ viewport })}
              mapboxApiAccessToken="pk.eyJ1IjoiZ3VpLWEiLCJhIjoiY2pjcWV5aWx4MXA3ODMxbXh0eG1jMGhqciJ9.QlO3pLpAPVcjpTQARagSJQ"
            >
              <Marker latitude={latitude} longitude={longitude}>
                <a href="https://www.google.com/maps/place/11+Rue+du+Mar%C3%A9chal+Joffre,+06000+Nice,+France/@43.6990456,7.2641721,17z/data=!3m1!4b1!4m5!3m4!1s0x12cddaa74f21fbdf:0xca552d59d640e92a!8m2!3d43.6990417!4d7.2663608">
                  <MarkerIcon />
                </a>
              </Marker>
            </ReactMapGL>
          </div>
          <div className="col-12 col-md-6 px-4 py-5 bg-white px-0">
            <header className="mb-2">
              <h2>Nous parler</h2>
              <hr className="ml-0" />
            </header>
            <dl className="mb-3">
              <div className="row">
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">a</dt>
                  <dd className="font-weight-light">
                    11, avenue du Maréchal Joffre - 06000 NICE
                  </dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">t</dt>
                  <dd className="font-weight-light">04 01 02 03 04</dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">e</dt>
                  <dd className="font-weight-light">
                    contact@agence-mailomedia.com
                  </dd>
                </div>
              </div>
            </dl>
            <h3>Vous avez des questions concernant :</h3>
            <BulletPoints>
              <BulletPoint className="mt-3">
                <strong className="w-100">LA MONETISATION ?</strong>
                <br />
                <span className="w-100 d-flex justify-content-between">
                  Contactez Mélanie Royent
                  <span>
                    <img src={LinkedIn} alt="LinkedIn" className="mr-1" />
                    <img src={Envelope} alt="Envelope" />
                  </span>
                </span>
              </BulletPoint>
              <BulletPoint className="mt-3">
                <strong className="w-100">LES PARTENARIATS ?</strong>
                <br />
                <span className="w-100 d-flex justify-content-between">
                  Contactez Laurent Mouret
                  <span>
                    <img src={LinkedIn} alt="LinkedIn" className="mr-1" />
                    <img src={Envelope} alt="Envelope" />
                  </span>
                </span>
              </BulletPoint>
            </BulletPoints>
          </div>
        </div>
      </section>
      <footer className="border-top border-white">
        <section className="text-white w-100 d-flex justify-content-between container py-3">
          <div className="h4 font-weight-light">
            <span className="font-weight-bold">mailo</span>media.
          </div>
          <div className="d-flex">
            <div className="px-2">
              <p className="font-weight-bold">Nice</p>
              <p>
                37 bd Dubouchage <br /> FRANCE
              </p>
            </div>
            <div className="px-2">
              <p className="font-weight-bold">Contact</p>
              <p>
                06 00 00 00 00 <br />
                info@mailomedia.com
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gradient-secondary text-white font-weight-bold text-center py-1">
          <p>
            Mentions légales - Copyright 2019 Mailomedia - Design Huap Studio
          </p>
        </section>
      </footer>
    </div>
  );
}
