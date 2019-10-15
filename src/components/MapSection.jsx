import React, { useState, Fragment } from "react";
import { Marker as MarkerIcon } from "./icons";
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

const Modal = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'} !important;
`

export default function MapSection() {
  const latitude = 43.699298;
  const longitude = 7.266372;

  const [modalOpen, setModalOpen] = useState(false)

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
    <Fragment>
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
                    Agence Mailomedia SAS <br/>
                    37/41, boulevard Dubouchage - 06000 Nice
                  </dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">t</dt>
                  <dd className="font-weight-light">04 93 81 57 15</dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">e</dt>
                  <dd className="font-weight-light">
                    hello@agence-mailomedia.com
                  </dd>
                </div>
              </div>
            </dl>
            <h3>Vous avez des questions concernant :</h3>
            <BulletPoints>
              <BulletPoint className="mt-3">
                <strong className="w-100">Nos services?</strong>
                <br />
                <p>
                  hello@agence-mailomedia.com
                </p>
              </BulletPoint>
              <BulletPoint className="mt-3">
                <strong className="w-100">Un partenariat média ?</strong>
                <br />
                <p>
                  medias@agence-mailomedia.com
                </p>
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
                37/41, boulevard Dubouchage<br /> 06000 Nice FRANCE
              </p>
            </div>
            <div className="px-2">
              <p className="font-weight-bold">Contact</p>
              <p>
                04 93 81 57 15<br />
                helllo@mailomedia.com
              </p>
            </div>
          </div>
        </section>
        <section onClick={() => setModalOpen(true)} className="bg-gradient-secondary text-white font-weight-bold text-center py-1">
          <p>
            Mentions légales - Copyright 2019 Mailomedia - Design Huap Studio
          </p>
        </section>
      </footer>
      </div>
      <Modal
        open={modalOpen}
        className={`modal fade ${modalOpen ? 'show' : ''}`}
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        ariaLabelledby="exampleModalLabel"
        ariaHidden={modalOpen}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Mentions légales</h5>
              <button type="button" className="close" dataDismiss="modal" ariaLabel="Close" onClick={() => setModalOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>

  );
}
