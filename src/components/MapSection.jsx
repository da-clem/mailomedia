import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Marker as MarkerIcon } from "./icons";
import ReactMapGL, { Marker } from "react-map-gl";
import styled from "styled-components";

const ModalBody = styled.div`
  overflow: scroll;
  max-height: 75vh;
`

const BulletPoints = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding-left: 0;
`;

const BulletPoint = styled.li`
  font-size: 17px;
  margin-bottom: 16px;
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

export default withRouter(function MapSection({ location }) {
  const latitude = 43.701020;
  const longitude = 7.269434;

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
          <div className="col-12 col-md-6 px-0" style={{ pointerEvents: 'none' }}>
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
                    <a href="https://goo.gl/maps/sXE7t7pWcvFJWkF87">
                      Agence Mailomedia SAS <br />
                      37/41, boulevard Dubouchage - 06000 Nice
                    </a>
                  </dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">t</dt>
                  <dd className="font-weight-light">
                      <a href="tel:0493815715">04 93 81 57 15</a>
                  </dd>
                </div>
                <div className="col-12 mb-1 d-flex">
                  <dt className="text-uppercase mr-1 text-primary">e</dt>
                  <dd className="font-weight-light">
                    <a href="mailto:hello@agence-mailomedia.com">hello@agence-mailomedia.com</a>
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
                  <a href="mailto:hello@agence-mailomedia.com">hello@agence-mailomedia.com</a>
                </p>
              </BulletPoint>
              <BulletPoint className="mt-3">
                <strong className="w-100">Un partenariat média ?</strong>
                <br />
                <p>
                  <a href="mailto:medias@agence-mailomedia.com">medias@agence-mailomedia.com</a>
                </p>
              </BulletPoint>
            </BulletPoints>
          </div>
        </div>
      </section>
      <footer className="border-top border-white">
        <section className="text-white w-100 d-flex justify-content-between container flex-wrap py-3">
          <div className="h4 font-weight-light pb-1">
            <span className="font-weight-bold">mailo</span>media.
          </div>
          <div className="d-flex">
            <div className="pr-4">
              <p className="font-weight-bold">Nice</p>
              <p>
                <a href="https://goo.gl/maps/sXE7t7pWcvFJWkF87" className="text-white">37/41, boulevard Dubouchage<br /> 06000 Nice FRANCE</a>
              </p>
            </div>
            <div className="pr-4">
              <p className="font-weight-bold">Contact</p>
              <p>
                <a href="tel:0493815715" className="text-white">04 93 81 57 15</a>
                <br />
                <a href="mailto:hello@agence-mailomedia.com" className="text-white">hello@agence-mailomedia.com</a>
              </p>
            </div>
          </div>
        </section>
        <section onClick={() => setModalOpen(true)} className="bg-gradient-secondary text-white font-weight-bold text-center py-1">
          <p>
            Mentions légales - Copyright 2019 Mailomedia
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
            <ModalBody className="modal-body">
              Le site www.agence-mailomedia.com est édité par :<br/><br/>
              Agence Mailomedia SAS,<br/>
              37/41 boulevard Dubouchage<br/>
              06000 Nice<br/>
              FRANCE<br/><br/>
              Société SAS au capital de 2 000 €<br/>
              Immatriculé au RCS de Nice 809 900 061<br/>
              N° de TVA intracommunautaire FR60809900061<br/>
              Le représentant légal et directeur de la publication est :<br/>
              M. Laurent Mouret<br/><br/>
              Le site www.agence-mailomedia.com est hébergé par :<br/>
              OVH SAS<br/>
              2 rue Kellermann<br/>
              59100 Roubaix<br/><br/>
              SAS au capital de 10 059 500.00 €<br/>
              Immatriculée au RCS Lille Métropole n°424 761 419 00045<br/>
              N° TVA : FR 22 424 761 419<br/><br/>
              Ce site respecte le droit d’auteur. Tous les droits des auteurs des œuvres protégées reproduites et communiquées sur ce site, sont réservés. Sauf autorisation, toute utilisation des œuvres autres que la reproduction et la consultation individuelles et privées sont interdites.<br/>
              L’agence Mailomedia consent à l’utilisateur le droit de consultation des dits sites pour son usage strictement personnel et privé. Toute reproduction, rediffusion ou commercialisation totale ou partielle du contenu est interdite.<br/>
            </ModalBody>
          </div>
        </div>
      </Modal>
    </Fragment>

  );
})
